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
  return source.slice(0, start) + `  async load():Promise<void>{
    const loader=new GLTFLoader();
    const [nearfield,site,gltf]=await Promise.all([
      loader.loadAsync('assets/nearfield/drive-nearfield.glb'),
      loader.loadAsync('assets/nearfield/training-ground.glb'),
      loader.loadAsync('../assets/g1-sample.glb'),
      this.gallery.load(this.renderer.capabilities.getMaxAnisotropy()),
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
      const source = readRelease(`${sourceDir}/${args.path}`).toString('utf8');
      return {
        contents: args.path === 'drive-scene.ts' ? requireDetailedModels(source) : source,
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
