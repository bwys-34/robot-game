import * as THREE from 'three';
import {DriveScene} from 'g1-release/drive-scene';
import {DriveState} from 'g1-release/drive-state';
import {STAGE_CONFIG} from 'g1-release/drive-stage';
import {combineClips, renderRatio} from './metrics.js';

declare const MAP_RELEASE: string;
declare const MAP_DATE: string;
const host = document.querySelector<HTMLElement>('#scene')!;
const STEP_MS = 5_000;
const WARMUP_MS = 900;
const scenes = ['展厅走动与迎宾', '庭院转向与建筑', '舞台搬运与机械舞'];
type Profile = {label: string; pixels: number; extra: number; rounds: number};
const report = (type: string, data: object = {}) => parent.postMessage({type, ...data}, location.origin);

function showFrame(scene: DriveScene, state: DriveState, index: number, time: number, dt: number) {
  const phase = Math.PI * 2 * time / 5;
  if (index === 0) {
    state.x = .68 * Math.sin(phase);
    state.z = -.9 + .3 * Math.cos(phase);
    state.yaw = phase + Math.PI / 2;
    state.speed = .65;
    state.vx = .65 * Math.sin(state.yaw);
    state.vz = .65 * Math.cos(state.yaw);
    scene.camera.position.set(1.15 + 1.25 * Math.sin(phase), 1.85, 1.85 + .55 * Math.cos(phase));
    scene.controls.target.set(0, .92, -1.8);
  } else if (index === 1) {
    state.x = 3.3 + .8 * Math.sin(phase);
    state.z = 12.7 + .8 * Math.cos(phase);
    state.yaw = phase + Math.PI / 2;
    state.speed = 1;
    state.vx = Math.sin(state.yaw);
    state.vz = Math.cos(state.yaw);
    scene.camera.position.set(3.3 + 5.3 * Math.sin(phase), 3.15, 12.7 + 5.3 * Math.cos(phase));
    scene.controls.target.set(3.5, .9, 10.5);
  } else {
    const {center, pickup} = STAGE_CONFIG;
    const progress = Math.min(1, time / 1.85);
    const position = THREE.MathUtils.smoothstep(progress, .18, .82);
    state.stageTransport.phase = progress < 1 ? 'boarding' : 'onstage';
    state.stageTransport.progress = progress;
    state.x = center.x;
    state.z = THREE.MathUtils.lerp(pickup.z, center.z, position);
    state.yaw = Math.PI;
    state.gesture = progress === 1 ? 'robotdance' : null;
    scene.camera.position.set(7.7 + .5 * Math.sin(phase), 1.85, state.z - 3.45);
    scene.controls.target.set(center.x, 1, state.z);
  }
  scene.camera.lookAt(scene.controls.target);
  scene.update(dt, state, 0);
  // Benchmark frames are always drawn at the chosen resolution, including slow frames.
  scene.renderBenchmarkFrame();
}

function prepareClip(index: number, actors: THREE.Object3D[], extra: number) {
  const state = new DriveState({experience: index === 0 ? 'reception' : index === 1 ? 'course' : 'show'});
  state.running = true;
  state.reception.step = 'complete';
  state.mode = index === 2 ? 'performance' : 'locomotion';
  const placements = [
    [[-.95, -2.9], [1.15, -2.85], [-1.35, -1.8], [1.3, -1.65]],
    [[2.6, 10.65], [4.5, 10.85], [3, 14.35], [4.5, 14.35]],
    [[5, 6.6], [7.4, 6.6], [4.75, 9], [7.85, 9]],
  ];
  actors.forEach((actor, i) => {
    const [x, z] = placements[index][i];
    actor.position.set(x, 0, z);
    actor.visible = i < extra;
  });
  return state;
}

function sampleClip(scene: DriveScene, index: number, actors: THREE.Object3D[], extra: number) {
  const state = prepareClip(index, actors, extra);
  const gaps: number[] = [];
  let started: number | undefined;
  let last: number | undefined;
  let calls = 0;
  let triangles = 0;
  return new Promise<{gaps: number[]; calls: number; triangles: number}>((resolve, reject) => {
    function draw() {
      try {
        const now = performance.now();
        started ??= now;
        const elapsed = now - started;
        const measuring = elapsed >= WARMUP_MS;
        const time = Math.max(0, elapsed - WARMUP_MS) / 1000;
        showFrame(scene, state, index, time, last === undefined ? 1 / 60 : Math.min(.1, (now - last) / 1000));
        if (measuring) {
          if (!scene.renderer.info.render.calls) throw new Error('三维场景没有绘制，请检查浏览器 WebGL。');
          calls = Math.max(calls, scene.renderer.info.render.calls);
          triangles = Math.max(triangles, scene.renderer.info.render.triangles);
          if (last !== undefined && last - started >= WARMUP_MS) gaps.push(now - last);
        }
        if (elapsed < STEP_MS + WARMUP_MS || !gaps.length) {
          last = now;
          requestAnimationFrame(draw);
        } else resolve({gaps, calls, triangles});
      } catch (error) { reject(error); }
    }
    requestAnimationFrame(draw);
  });
}

const nextFrame = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()));

async function prepareAndRun(endurance: boolean) {
  report('loading', {stage: 'WebGL 初始化', label: '正在初始化 WebGL'});
  // Let the parent display the stage before creating a graphics context.
  await nextFrame();
  const scene = new DriveScene(host);
  const gl = scene.renderer.getContext();
  const debug = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : '';
  scene.renderer.domElement.addEventListener('webglcontextlost', () => report('failed', {message: '浏览器丢失了 WebGL 绘图资源。'}));
  const pending = new Map<string, number>();
  let lastUpdate = -Infinity;
  report('loading', {stage: '模型加载', label: '正在加载模型与贴图', gpu});
  await scene.load((file: string, loaded: number, ready: boolean) => {
    const changed = !pending.has(file) || ready;
    if (ready) pending.delete(file);
    else if (loaded > (pending.get(file) ?? -1)) pending.set(file, loaded);
    else return;
    if (!changed && performance.now() - lastUpdate < 500) return;
    lastUpdate = performance.now();
    const files = [...pending].map(([name, bytes]) => name + (bytes ? `（已下载 ${(bytes / 1_000_000).toFixed(1)} MB）` : ''));
    const label = files.length ? `正在加载模型与贴图 · ${files.join('、')}` : '模型与贴图已载入，正在组装场景';
    report('loading', {stage: label, label});
  });
  report('loading', {stage: '场景组装', label: '正在准备写实人物和场景'});
  scene.toggleCamera(true);
  scene.controls.enableDamping = false;
  const greeter = scene.scene.getObjectByName('entrance-greeter');
  if (!greeter) throw new Error('写实迎宾人物未加载。');
  const actors = Array.from({length: 4}, () => greeter.clone(true));
  scene.scene.add(...actors);
  const enduranceRounds = Math.round(600_000 / (scenes.length * (STEP_MS + WARMUP_MS)));
  const profiles: Profile[] = endurance
    ? [{label: '持续压力', pixels: 1.5, extra: 4, rounds: enduranceRounds}]
    : [{label: '新版地图', pixels: 1, extra: 0, rounds: 1}, {label: '余量压力', pixels: 1.5, extra: 4, rounds: 1}];
  const width = host.clientWidth;
  const height = host.clientHeight;
  const pixelRatio = devicePixelRatio;
  addEventListener('resize', () => {
    if (host.clientWidth !== width || host.clientHeight !== height || devicePixelRatio !== pixelRatio) {
      report('failed', {message: '测试视口已变化，请保持交付方向和分辨率后重测。'});
    }
  });
  function sizeFor(profile: Profile) {
    scene.renderer.setPixelRatio(renderRatio(width, height, pixelRatio, profile.pixels));
    scene.renderer.setSize(width, height, false);
  }
  report('loading', {stage: '首帧绘制', label: '场景已组装，正在绘制首帧'});
  await nextFrame();
  sizeFor(profiles[0]);
  showFrame(scene, prepareClip(0, actors, profiles[0].extra), 0, 0, 1 / 60);
  if (gl.isContextLost() || !scene.renderer.info.render.calls) {
    throw new Error('三维场景没有绘制，请检查浏览器 WebGL。');
  }
  await nextFrame();
  // Install the handler before showing the parent's start button.
  await new Promise<void>(resolve => {
    addEventListener('message', function startSampling(event) {
      if (!isParentMessage(event, 'sample')) return;
      removeEventListener('message', startSampling);
      resolve();
    });
    report('ready');
  });
  const results = [];
  for (const profile of profiles) {
    sizeFor(profile);
    const buffer = `${gl.drawingBufferWidth}×${gl.drawingBufferHeight}`;
    const clips = scenes.map(() => [] as Awaited<ReturnType<typeof sampleClip>>[]);
    for (let round = 0; round < profile.rounds; round++) {
      for (let index = 0; index < scenes.length; index++) {
        report('progress', {label: `${profile.label} · ${scenes[index]} · ${round * scenes.length + index + 1}/${profile.rounds * scenes.length}`});
        clips[index].push(await sampleClip(scene, index, actors, profile.extra));
      }
    }
    const rows = clips.map((samples, index) => ({
      label: scenes[index], ...combineClips(samples.map(sample => sample.gaps)),
      calls: Math.max(...samples.map(sample => sample.calls)),
      triangles: Math.max(...samples.map(sample => sample.triangles)),
    }));
    results.push({label: profile.label, buffer, rows, passed: rows.every(row => row.passed)});
  }
  report('result', {results, width, height, pixelRatio, map: MAP_RELEASE, date: MAP_DATE, gpu});
}

function isParentMessage(event: MessageEvent, type: string) {
  return event.origin === location.origin && event.source === parent && event.data?.type === type;
}

addEventListener('message', function prepare(event) {
  if (!isParentMessage(event, 'prepare')) return;
  removeEventListener('message', prepare);
  prepareAndRun(event.data.endurance === true).catch(error => report('failed', {
    message: `压测未完成。${error instanceof Error ? error.message : ''}`,
  }));
});
report('boot');
