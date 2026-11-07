const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),project=path.join(root,'demos/g1'),out=path.join(project,'audio-check');
const esbuild=require(require.resolve('esbuild',{paths:[project]}));
fs.mkdirSync(out,{recursive:true});
esbuild.buildSync({absWorkingDir:project,entryPoints:['src/audio-check-main.ts'],bundle:true,minify:true,target:'chrome88',outfile:path.join(out,'app.js'),legalComments:'eof'});
// Original short PCM tones, no remote audio or speech engine dependencies.
const rate=22050,count=Math.round(rate*.9),wav=Buffer.alloc(44+count*2);
wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(count*2,40);
for(let i=0;i<count;i++){
 const t=i/rate,u=t% .45,frequency=t<.45?660:880,envelope=Math.max(0,Math.min(1,u/.025,(.4-u)/.04));
 const sample=.28*envelope*(Math.sin(2*Math.PI*frequency*t)+.18*Math.sin(4*Math.PI*frequency*t))/1.18;
 wav.writeInt16LE(Math.round(sample*32767),44+i*2);
}
fs.writeFileSync(path.join(out,'test-tone.wav'),wav);
console.log('Built audio diagnostic and original 0.9-second PCM WAV:',wav.length,'bytes');
