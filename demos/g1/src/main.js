import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createKneeDemo } from './knee-demo.ts';

const $ = id => document.getElementById(id);
const viewer = $('viewer');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const presets = [...document.querySelectorAll('[data-view]')];
const controlsButtons = [...document.querySelectorAll('button:disabled')];
let renderer, controls, camera, scene, transition, model, radius = 1, previousTime = 0;
let automatic = false;
let kneeDemo;
const overviewTarget=new THREE.Vector3();

function setAutomatic(active) {
  automatic = active;
  $('auto-rotate').setAttribute('aria-pressed', String(active));
  $('auto-rotate').querySelector('span').textContent = active ? '暂停旋转' : '自动旋转';
}

function clearPreset() {
  presets.forEach(button => button.setAttribute('aria-pressed', 'false'));
  transition = null;
}

function resize() {
  if (!renderer) return;
  const width = viewer.clientWidth, height = viewer.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function setView(view, immediate = false, training = false) {
  setAutomatic(false);
  // Clear the drag's remaining inertia before a precise preset transition.
  controls.enableDamping = false;
  controls.update();
  controls.enableDamping = true;
  presets.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
  const angles = {front:Math.PI / 2, side:Math.PI, back:-Math.PI / 2, overview:Math.PI / 4};
  const distance = radius * Math.max(1, .75 / camera.aspect) * (training ? 1.1 : 1);
  const target = overviewTarget.clone();
  if(training)target.y+=.06;
  const destination = new THREE.Vector3(Math.sin(angles[view]) * distance, distance * .14, Math.cos(angles[view]) * distance).add(target);
  if (immediate || reducedMotion.matches) {
    camera.position.copy(destination);
    controls.target.copy(target);
    transition = null;
    controls.update();
  } else transition = {from:camera.position.clone(), to:destination, fromTarget:controls.target.clone(),toTarget:target,start:performance.now()};
  $('view-name').textContent = training?'训练全身视角':{front:'正面视角',side:'侧面视角',back:'背面视角',overview:'斜前视角'}[view];
}

function focusPart(position,jointName) {
  setAutomatic(false);clearPreset();
  controls.enableDamping=false;controls.update();controls.enableDamping=true;
  const leg=/hip|knee|ankle/.test(jointName),right=jointName.startsWith('right_');
  const target=position.clone();
  // Keep the foot, pelvis and balance markers in context while favoring the selected side.
  target.y=leg ? .68 : THREE.MathUtils.clamp(target.y, .6, 1.05);
  const distance=radius*Math.max(leg ? .98 : .8,.64/camera.aspect);
  const direction=leg?new THREE.Vector3(.45,.12,right?.9:-.9):new THREE.Vector3(.9,.12,right?.55:-.55);
  const destination=target.clone().add(direction.normalize().multiplyScalar(distance));
  if(reducedMotion.matches){controls.target.copy(target);camera.position.copy(destination);controls.update();}
  else transition={from:camera.position.clone(),to:destination,fromTarget:controls.target.clone(),toTarget:target,start:performance.now(),duration:400};
  $('view-name').textContent='关节观察视角';
}

function fail(error) {
  console.error('G1 viewer:', error);
  $('loading').hidden = false;
  $('loading-message').textContent = '模型暂时无法显示';
  $('loading').querySelector('small').textContent = '请确认浏览器支持 WebGL，并通过本地预览地址打开。';
  $('loading').querySelector('.loader-ring').hidden = true;
  $('retry').hidden = false;
}

async function start() {
  try {
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true, powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    $('canvas-host').appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(31, 1, .01, 100);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = .085;
    controls.enablePan = false;
    controls.minPolarAngle = .25;
    controls.maxPolarAngle = Math.PI * .53;
    controls.rotateSpeed = .6;
    controls.zoomSpeed = .7;
    controls.addEventListener('start', () => { setAutomatic(false); clearPreset(); $('view-name').textContent = '自由视角'; });
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(environment, .04).texture;
    environment.dispose();
    pmrem.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x788576, 2));
    const key = new THREE.DirectionalLight(0xfff6e4, 3);
    key.position.set(3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0xd8ece4, 2);
    rim.position.set(-3, 2, -4); scene.add(rim);
    const gltf = await new GLTFLoader().loadAsync('assets/g1-sample.glb', event => {
      if (event.total) $('loading-message').textContent = `正在装配 G1… ${Math.round(event.loaded / event.total * 100)}%`;
    });
    model = gltf.scene;
    model.traverse(object => {
      if (object.isMesh) object.material.side = THREE.DoubleSide;
    });
    scene.add(model);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    controls.target.copy(center);
    overviewTarget.copy(center);
    radius = size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.32;
    controls.minDistance = radius * .47;
    controls.maxDistance = radius * 2.2;
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = shadowCanvas.height = 128;
    const context = shadowCanvas.getContext('2d');
    const gradient = context.createRadialGradient(64,64,0,64,64,64);
    gradient.addColorStop(0,'rgba(24,48,32,.3)'); gradient.addColorStop(.4,'rgba(24,48,32,.12)'); gradient.addColorStop(1,'rgba(24,48,32,0)');
    context.fillStyle = gradient; context.fillRect(0,0,128,128);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.35,1.1), new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));
    shadow.rotation.x = -Math.PI / 2; shadow.position.set(center.x,box.min.y + .002,center.z); scene.add(shadow);
    const ring = new THREE.Mesh(new THREE.RingGeometry(.62,.622,96),new THREE.MeshBasicMaterial({color:0x6d8c73,transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false}));
    ring.rotation.x=-Math.PI/2; ring.position.set(center.x,box.min.y+.001,center.z); scene.add(ring);
    resize();
    setView('overview', true);
    controlsButtons.forEach(button => { button.disabled = false; });
    const modelInfo = await fetch('assets/model-info.json').then(response => {
      if (!response.ok) throw new Error('Unable to load model metadata');
      return response.json();
    });
    let savedOrbitEnabled=true;
    kneeDemo = createKneeDemo({model,camera,scene,viewer,canvas:renderer.domElement,records:modelInfo.links,onSelect:focusPart,onChain:()=>setView('side'),onTraining:()=>setView('overview',false,true),
      onGestureCapture:active=>{
        if(active){
          setAutomatic(false);clearPreset();
          controls.enableDamping=false;controls.update();controls.enableDamping=true;
          savedOrbitEnabled=controls.enabled;controls.enabled=false;
        }else controls.enabled=savedOrbitEnabled;
      },
    });
    $('loading').hidden = true;
    document.body.dataset.ready = 'true';
    requestAnimationFrame(frame);
  } catch (error) { fail(error); }
}

function frame(time) {
  requestAnimationFrame(frame);
  // These are geometric tweens/servo filters, not a physics integrator: use elapsed
  // visible time so half a second of imbalance stays half a second at low FPS.
  const delta = previousTime ? Math.max(0,(time - previousTime) / 1000) : 0;
  previousTime = time;
  if (document.hidden) return;
  if (transition) {
    const fraction = Math.min(Math.max(time - transition.start, 0) / (transition.duration??650), 1);
    const eased = fraction * fraction * (3 - 2 * fraction);
    // Interpolate angles around the target rather than passing through the robot.
    const from = new THREE.Spherical().setFromVector3(transition.from.clone().sub(transition.fromTarget));
    const to = new THREE.Spherical().setFromVector3(transition.to.clone().sub(transition.toTarget));
    let angle = to.theta - from.theta;
    angle = Math.atan2(Math.sin(angle), Math.cos(angle));
    const spherical = new THREE.Spherical(THREE.MathUtils.lerp(from.radius,to.radius,eased),THREE.MathUtils.lerp(from.phi,to.phi,eased),from.theta+angle*eased);
    controls.target.lerpVectors(transition.fromTarget,transition.toTarget,eased);
    camera.position.setFromSpherical(spherical).add(controls.target);
    if (fraction === 1) transition = null;
  } else if (automatic) {
    const offset = camera.position.clone().sub(controls.target);
    offset.applyAxisAngle(new THREE.Vector3(0,1,0), delta * .16);
    camera.position.copy(controls.target).add(offset);
  }
  controls.update();
  const offset = camera.position.clone().sub(controls.target);
  const degrees = (THREE.MathUtils.radToDeg(Math.atan2(offset.z, offset.x)) + 360) % 360;
  $('azimuth').textContent = String(Math.round(degrees) % 360).padStart(3, '0') + '°';
  kneeDemo?.update(delta,time);
  renderer.render(scene, camera);
}

presets.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
$('auto-rotate').addEventListener('click', () => { clearPreset(); setAutomatic(!automatic); $('view-name').textContent = automatic ? '环绕观察' : '自由视角'; });
$('reset').addEventListener('click', () => setView('overview'));
function zoom(factor) {
  clearPreset();
  const offset = camera.position.clone().sub(controls.target);
  offset.setLength(THREE.MathUtils.clamp(offset.length()*factor,controls.minDistance,controls.maxDistance));
  camera.position.copy(controls.target).add(offset); controls.update();
}
$('zoom-in').addEventListener('click', () => zoom(.85));
$('zoom-out').addEventListener('click', () => zoom(1.18));
$('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (viewer.requestFullscreen) await viewer.requestFullscreen();
  } catch { $('fullscreen').title = '当前浏览器暂不允许全屏'; }
});
if (!viewer.requestFullscreen) $('fullscreen').hidden = true;
document.addEventListener('fullscreenchange', () => { resize(); $('fullscreen').setAttribute('aria-label', document.fullscreenElement ? '退出全屏' : '全屏查看'); });
$('retry').addEventListener('click', () => location.reload());
viewer.addEventListener('keydown', event => {
  if (!model || event.target !== viewer) return;
  if (event.key === '+' || event.key === '=') {event.preventDefault(); zoom(.85);}
  else if (event.key === '-') {event.preventDefault(); zoom(1.18);}
  else if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) {
    event.preventDefault(); setAutomatic(false); clearPreset();
    const spherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    if (event.key === 'ArrowLeft') spherical.theta -= .15;
    if (event.key === 'ArrowRight') spherical.theta += .15;
    if (event.key === 'ArrowUp') spherical.phi -= .1;
    if (event.key === 'ArrowDown') spherical.phi += .1;
    spherical.phi = THREE.MathUtils.clamp(spherical.phi, controls.minPolarAngle, controls.maxPolarAngle);
    camera.position.setFromSpherical(spherical).add(controls.target); controls.update();
    $('view-name').textContent = '自由视角';
  }
});
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) setAutomatic(false); });
document.addEventListener('visibilitychange',()=>{previousTime=0;});
new ResizeObserver(resize).observe(viewer);
start();
