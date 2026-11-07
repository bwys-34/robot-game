const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const source=path.resolve('demos/g1/src/drive-action-audio.ts');
function api(){assert(fs.existsSync(source),'Action-synchronized soundtrack is missing');return require(source);}
const {DRIVE_ACTIONS,driveActionFrames}=require('../demos/g1/src/drive-actions.ts');
test('all fifteen actions have a bounded soundtrack with different dance rhythms',()=>{
 const {buildDriveActionSoundtrack}=api(),tracks=new Map();
 for(const {id}of DRIVE_ACTIONS){const frames=driveActionFrames(id),track=buildDriveActionSoundtrack(id,frames.map(f=>f.duration));assert(track.length>=3,`${id} needs sounds during the action, not just a startup beep`);assert(track.every((e,i)=>Number.isFinite(e.at)&&e.at>=0&&(!i||e.at>=track[i-1].at)));tracks.set(id,track);}
 const dances=['dance','robotdance','armdance','cheerdance'].map(id=>JSON.stringify(tracks.get(id).map(e=>[e.cue,e.pitch])));assert.equal(new Set(dances).size,4);
});
test('claps follow authored hand-close frames rather than an unrelated interval',()=>{
 const {buildDriveActionSoundtrack}=api(),frames=driveActionFrames('clap'),times=[];let at=0;frames.forEach((f,i)=>{at+=f.duration;if([2,4,6].includes(i))times.push(at);});
 const track=buildDriveActionSoundtrack('clap',frames.map(f=>f.duration));assert.deepEqual(track.filter(e=>e.cue==='clap').map(e=>e.at),times);
 const slower=frames.map(f=>f.duration*1.3),slowTrack=buildDriveActionSoundtrack('clap',slower).filter(e=>e.cue==='clap');assert(slowTrack.every((e,i)=>Math.abs(e.at-times[i]*1.3)<1e-8),'Retiming the pose retimes its sound');
});
test('animation time drives sounds once; stalls skip stale beats and restarting clears progress',()=>{
 const {DriveActionSoundClock}=api(),frames=driveActionFrames('robotdance');
 const c=new DriveActionSoundClock('robotdance',frames.map(f=>f.duration)),events=[];
 for(let t=0;t<6;t+=1/60)events.push(...c.advanceTo(t));assert(events.length>5);assert.equal(c.advanceTo(6).length,0);
 const d=new DriveActionSoundClock('robotdance',frames.map(f=>f.duration));d.advanceTo(0);const current=d.advanceTo(3);assert(current.length<=3,'A stalled tab cannot burst-play all old beats');
 assert.equal(d.advanceTo(3).length,0,'A frozen animation cannot emit more sound');
 const fresh=new DriveActionSoundClock('robotdance',frames.map(f=>f.duration));assert(fresh.advanceTo(0).length>0);
});
