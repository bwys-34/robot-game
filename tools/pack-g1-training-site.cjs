// Run from demos/g1: node ../../tools/pack-g1-training-site.cjs <source-glb> <output-glb>
const fs=require('node:fs');
const path=require('node:path');
const {createRequire}=require('node:module');
const root=path.resolve(__dirname,'../demos/g1');
const g1Require=createRequire(path.join(root,'package.json'));
const [input,output]=process.argv.slice(2);
if(!input||!output||path.resolve(input)===path.resolve(output))throw new Error('Specify distinct source and output GLB files');

const {outputFiles}=g1Require('esbuild').buildSync({
  bundle:true,write:false,platform:'node',format:'cjs',absWorkingDir:root,
  stdin:{resolveDir:root,contents:`
    import {Scene, Texture} from 'three';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
    import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
    import {buildTrainingSite,readTrainingSite} from './src/drive-site';
    globalThis.FileReader = class {
      async readAsArrayBuffer(blob) {this.result=await blob.arrayBuffer();this.onloadend();}
    };
    export async function pack(data) {
      // Source images are on excluded sign meshes only. Fail if that changes.
      const loader=new GLTFLoader().register(()=>({name:'sign-texture-placeholder',loadTexture:()=>Promise.resolve(new Texture())}));
      const {scene}=await loader.parseAsync(data,'');
      const result=new Scene();result.add(...buildTrainingSite(scene).values());
      readTrainingSite(result);
      result.traverse(node=>{
        if(!node.isMesh)return;
        if(Object.values(node.material).some(value=>value?.isTexture))throw new Error('Retained material requires image decoding');
        for(const name of Object.keys(node.geometry.attributes))if(name.startsWith('uv'))node.geometry.deleteAttribute(name);
      });
      return new GLTFExporter().parseAsync(result,{binary:true});
    }
  `},
});
const bundled={exports:{}};
new Function('require','module','exports',outputFiles[0].text)(g1Require,bundled,bundled.exports);
const source=fs.readFileSync(input);
bundled.exports.pack(Uint8Array.from(source).buffer).then(result=>{
  fs.writeFileSync(output,Buffer.from(result));
  console.log(`${source.length} -> ${result.byteLength} bytes`);
}).catch(error=>{console.error(error);process.exitCode=1;});
