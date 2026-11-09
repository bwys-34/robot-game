const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const requireDemo=require('module').createRequire(path.resolve('demos/g1/package.json'));
const bundle=requireDemo('esbuild').buildSync({entryPoints:['demos/g1/src/drive-audio.ts'],bundle:true,format:'iife',globalName:'AudioQA',write:false,target:'chrome88'}).outputFiles[0].text;
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage();await page.goto('http://127.0.0.1:8765/demos/g1/audio-check/');await page.addScriptTag({content:bundle});
  const report=await page.evaluate(async()=>{
   async function render(profile,event,overlap=false){
    const rate=48000,context=new OfflineAudioContext(1,rate*1.5,rate);
    const high=context.createBiquadFilter(),low=context.createBiquadFilter();
    high.type='highpass';high.frequency.value=300;low.type='lowpass';low.frequency.value=3000;
    high.connect(low);low.connect(context.destination);
    let output;
    if(profile!=='original'&&AudioQA.createDriveAudioOutput)output=AudioQA.createDriveAudioOutput(context,high,profile);
    else{output=context.createGain();output.gain.value=.42;output.connect(high);}
    const bank=new AudioQA.DriveSoundBank(context,output,profile);
    for(let i=0;i<(overlap?24:1);i++)bank.play(event);
    const voices=bank.activeVoices,data=(await context.startRendering()).getChannelData(0);
    let peak=0,sum=0,active=0,tail=0;
    for(let i=0;i<data.length;i++){const v=Math.abs(data[i]);peak=Math.max(peak,v);sum+=v*v;if(v>.025)active++;if(i>rate)tail=Math.max(tail,v);}
    return {peak,rms:Math.sqrt(sum/data.length),audibleBandSeconds:active/rate,tail,voices,remaining:bank.activeVoices};
   }
   const cases=['ready','pause','mode','speed','success','warning','footstep','servo','swoosh','clap','kick','snare','hat','bell','landing'];
   const results=[];
   for(const cue of cases){
    const event={cue,strength:.65,side:'left',...(['servo','swoosh','clap','kick','snare','hat','bell','landing'].includes(cue)?{action:'wave'}:{})};
    results.push({cue,original:await render('original',event),clear:await render('clear',event)});
   }
   // This is an electrical 300–3000 Hz comparison, not a simulated physical speaker.
   const overlap=await render('clear',{cue:'clap',action:'clap',strength:1},true);
   const minimal={ready:await render('minimal',{cue:'ready'}),drums:await render('minimal',{cue:'hat',action:'dance'},true),bell:await render('minimal',{cue:'bell',action:'wave',strength:.6},true)};
   return {results,overlap,minimal};
  });
  fs.mkdirSync('work/g1-audio-clarity',{recursive:true});fs.writeFileSync('work/g1-audio-clarity/report.json',JSON.stringify(report,null,2));
  const ready=report.results.find(r=>r.cue==='ready');
  assert(ready.clear.rms>=.05,`Clear ready cue must sustain useful mid-band energy: ${JSON.stringify(ready)}`);
  assert(ready.clear.audibleBandSeconds>=.25,'Ready cue must last long enough to hear rather than a faint transient');
  for(const {cue,original,clear}of report.results){
   assert(clear.rms>original.rms*1.4,`${cue} should improve useful mid-band energy: ${JSON.stringify({original,clear})}`);
   assert(clear.rms>.004,`${cue} needs a mid-band component`);assert(clear.peak<.9,`${cue} must keep headroom`);
   assert(clear.tail<.00001&&clear.remaining===0,`${cue} must end and release all sources`);
  }
  assert(report.overlap.peak<.95,'Overlapping cues cannot clip');assert(report.overlap.voices<=16,'Repeated inputs cannot create unbounded voices');
  assert(report.overlap.remaining===0&&report.overlap.tail<.00001);
  assert(report.minimal.ready.rms>ready.original.rms*2,'Minimal UI cue still sustains more energy than the inaudible original');
  assert(report.minimal.ready.rms<ready.clear.rms*.65,'Minimal profile is materially quieter than the previous clear profile');
  assert.equal(report.minimal.drums.peak,0,'Continuous hats/drums are silent in minimal mode');
  assert(report.minimal.bell.voices<=1,'Repeated action events have a single rate-limited soft cue');
  console.log('PASS: clear cues carry more sustained 300–3000 Hz energy; overlapping effects remain bounded and release. Physical Android audibility remains a field check.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
