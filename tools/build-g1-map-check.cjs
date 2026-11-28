const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const project = path.join(root, 'demos/g1');
const esbuild = require(require.resolve('esbuild', {paths: [project]}));
const release = '548038974f4b6ebc053aa1c3dad4011029ef1781';
const sourceDir = 'demos/g1/src';

function readRelease(file) {
  return execFileSync('git', ['show', `${release}:${file}`], {cwd: root, maxBuffer: 32 * 1024 * 1024});
}

// Only the benchmark awaits both detailed assets and rejects fallback geometry.
function requireDetailedModels(source) {
  const start = source.indexOf('  async load():Promise<void>{');
  const end = source.indexOf('  private installNearfield(', start);
  assert(start >= 0 && end > start, 'Recheck model loading when updating the archived map.');
  return source.slice(0, start) + `  async load(onProgress: (file: string, loaded: number, ready: boolean) => void):Promise<void>{
    const loader=new GLTFLoader();
    const loadAsset = async <T>(url: string, load: (progress: (event: ProgressEvent) => void) => Promise<T>) => {
      const file = url.slice(url.lastIndexOf('/') + 1);
      onProgress(file, 0, false);
      try {
        const asset = await load(event => onProgress(file, event.loaded, false));
        onProgress(file, 0, true);
        return asset;
      } catch (error) {
        const reason = error instanceof Error ? error.message : '';
        throw new Error(file + ' 加载或解析失败。' + reason);
      }
    };
    const loadModel = (url: string) => loadAsset(url, progress => loader.loadAsync(url, progress));
    const [nearfield,site,gltf]=await Promise.all([
      loadModel('assets/nearfield/drive-nearfield.glb'),
      loadModel('assets/nearfield/training-ground.glb'),
      loadModel('../assets/g1-drive.glb'),
      this.gallery.load(this.renderer.capabilities.getMaxAnisotropy(), loadAsset),
    ]);
    this.rig=new DriveRig(gltf.scene);
    this.scene.add(this.rig.group);
    this.installNearfield(nearfield.scene);
    const groups=readTrainingSite(site.scene);
    this.gallery.installSite(groups);
    this.campus.installSite(groups.get('exterior'),groups.get('planter'));
  }
  renderBenchmarkFrame():void{
    this.gallery.update(this.camera.position,this.controls.target);
    this.renderer.render(this.scene,this.camera);
  }
` + source.slice(end);
}

// Preserve the gallery setup but require its assets for a representative benchmark.
function requireGalleryAssets(source) {
  const signature = 'async load(maxAnisotropy=2):Promise<void>{';
  const model = "new GLTFLoader().loadAsync('../assets/gallery/modern-gallery.glb')";
  const floor = "new THREE.TextureLoader().loadAsync('../assets/gallery/modern-gallery-floor.jpg')";
  const fallback = "console.warn('展厅场景暂未载入，使用简化地面。',error);";
  for (const anchor of [signature, model, floor, fallback]) {
    assert(source.includes(anchor), 'Recheck gallery loading when updating the archived map.');
  }
  return source
    .replace(signature, 'async load(maxAnisotropy: number, loadAsset: <T>(url: string, load: (progress: (event: ProgressEvent) => void) => Promise<T>) => Promise<T>):Promise<void>{')
    .replace(model, "loadAsset('../assets/gallery/modern-gallery.glb', progress => new GLTFLoader().loadAsync('../assets/gallery/modern-gallery.glb', progress))")
    .replace(floor, "loadAsset('../assets/gallery/modern-gallery-floor.jpg', () => new THREE.TextureLoader().loadAsync('../assets/gallery/modern-gallery-floor.jpg'))")
    .replace('// A missing decorative asset must not prevent the existing robot game loading.', '// The benchmark requires the full gallery.')
    .replace(fallback, 'throw error;');
}

const archive = {
  name: 'archived-g1-release',
  setup(build) {
    build.onResolve({filter: /^g1-release\//}, args => ({
      path: args.path.slice('g1-release/'.length) + '.ts', namespace: 'g1-release',
    }));
    build.onResolve({filter: /^\./, namespace: 'g1-release'}, args => ({
      path: path.posix.join(path.posix.dirname(args.importer), args.path) + (path.extname(args.path) ? '' : '.ts'),
      namespace: 'g1-release',
    }));
    build.onResolve({filter: /^[^.]/, namespace: 'g1-release'}, args => build.resolve(args.path, {
      resolveDir: project, kind: args.kind,
    }));
    build.onLoad({filter: /.*/, namespace: 'g1-release'}, args => {
      let source = readRelease(`${sourceDir}/${args.path}`).toString('utf8');
      if (args.path === 'drive-scene.ts') source = requireDetailedModels(source);
      if (args.path === 'drive-gallery.ts') source = requireGalleryAssets(source);
      return {
        contents: source,
        loader: args.path.endsWith('.js') ? 'js' : 'ts',
        resolveDir: project,
      };
    });
  },
};

async function main() {
  await esbuild.build({
    absWorkingDir: project,
    entryPoints: ['map-check/scene.ts'],
    bundle: true,
    minify: true,
    target: 'chrome88',
    outfile: 'map-check/scene.js',
    legalComments: 'eof',
    define: {
      MAP_RELEASE: JSON.stringify(release.slice(0, 7)),
      MAP_DATE: JSON.stringify(execFileSync('git', ['show', '-s', '--format=%cs', release], {cwd: root, encoding: 'utf8'}).trim()),
    },
    plugins: [archive],
  });
  const assets = path.join(project, 'map-check/assets/nearfield');
  fs.mkdirSync(assets, {recursive: true});
  for (const name of ['drive-nearfield.glb', 'training-ground.glb']) {
    fs.writeFileSync(path.join(assets, name), readRelease(`demos/g1/assets/nearfield/${name}`));
  }
}

main().catch(error => {console.error(error); process.exitCode = 1;});
