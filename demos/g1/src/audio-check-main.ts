import {DriveSoundBank} from './drive-audio';
type TestId='original'|'synth'|'file';
type Heard='yes'|'no';
const ids:TestId[]=['original','synth','file'];
const labels={original:'当前音效',synth:'清晰合成音',file:'普通文件'};
const reports:Partial<Record<TestId,Heard>>={};
const storage='g1-audio-check-v1';
const file=document.getElementById('file-audio') as HTMLAudioElement;
let context:AudioContext|undefined,bank:DriveSoundBank|undefined,source:OscillatorNode|undefined,generation=0;
const out=(id:TestId)=>document.getElementById(`status-${id}`)!;
function status(id:TestId,state:string,text:string){out(id).dataset.state=state;out(id).textContent=text;}
function render(){
 for(const button of document.querySelectorAll<HTMLButtonElement>('[data-heard]'))button.setAttribute('aria-pressed',String(reports[button.dataset.test as TestId]===button.dataset.heard));
 document.getElementById('summary')!.textContent=ids.map(id=>`${labels[id]}：${reports[id]==='yes'?'听到了':reports[id]==='no'?'没听到':'未确认'}`).join(' · ');
 const conclusion=reports.original==='yes'?'当前音效可以听见；若偏轻，可以针对展厅提高音量。':reports.synth==='yes'?'清晰合成音能出声：优先调整游戏音量、音色与时长。':reports.file==='yes'&&reports.synth==='no'?'普通音频能出声，合成音无声：优先排查合成音频输出兼容性。':ids.every(id=>reports[id]==='no')?'三项均未听见：请核对 Chrome 网站声音、媒体音量和音频输出设备。':'依次试听，并告诉页面你有没有听见。';
 document.getElementById('conclusion')!.textContent=conclusion;
}
try{const saved=JSON.parse(localStorage.getItem(storage)||'{}');for(const id of ids)if(saved?.[id]==='yes'||saved?.[id]==='no')reports[id]=saved[id];}catch{}
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-heard]'))button.addEventListener('click',()=>{
 reports[button.dataset.test as TestId]=button.dataset.heard as Heard;
 try{localStorage.setItem(storage,JSON.stringify(reports));}catch{}render();
});
const stop=()=>{file.pause();bank?.stop();try{source?.stop();source?.disconnect();}catch{}source=undefined;};
const delay=(ms:number)=>new Promise<void>(resolve=>setTimeout(resolve,ms));
async function test(id:TestId){
 const run=++generation;stop();
 for(const other of ids)if(other!==id&&out(other).dataset.state==='playing')status(other,'stopped','已停止，正在试听另一项');
 status(id,'playing','正在播放，请听一下…');
 const button=document.getElementById(`test-${id}`) as HTMLButtonElement;button.disabled=true;
 let timer:ReturnType<typeof setTimeout>|undefined;
 try{
  const wait=new Promise<never>((_,reject)=>{timer=setTimeout(()=>reject(new Error('浏览器未完成播放请求，请再次点击')),3500);});
  if(id==='file'){
   file.volume=.85;file.currentTime=0;
   await Promise.race([file.play(),wait]);if(run!==generation)return;
   const start=file.currentTime;await delay(700);if(run!==generation)return;
   status(id,file.currentTime>start+.1?'complete':'error',file.currentTime>start+.1?`播放器进度正常 · ${file.currentTime.toFixed(2)} 秒`:`播放未推进 · ${file.error?.code??'无错误码'}`);
  }else{
   if(!context){const C=window.AudioContext||(window as unknown as {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;if(!C)throw new Error('此浏览器没有合成音频接口');context=new C();}
   // Resume directly inside the real touch/click handler; no gamepad polling.
   await Promise.race([context.resume(),wait]);if(run!==generation)return;
   const start=context.currentTime;
   if(id==='original'){
    const gain=context.createGain();gain.gain.value=.42;gain.connect(context.destination);bank=new DriveSoundBank(context,gain);bank.play({cue:'ready'});
    setTimeout(()=>gain.disconnect(),850);
   }else{
    const gain=context.createGain();source=context.createOscillator();source.type='triangle';source.frequency.value=660;
    gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(.28,start+.025);gain.gain.setValueAtTime(.28,start+.6);gain.gain.linearRampToValueAtTime(0,start+.72);
    source.connect(gain);gain.connect(context.destination);source.onended=()=>{gain.disconnect();};source.start();source.stop(start+.75);
   }
   await delay(800);if(run!==generation)return;
   const advanced=context.currentTime-start;
   status(id,advanced>.1&&context.state==='running'?'complete':'error',`${context.state} · ${advanced>.1?'时钟正常':'时钟停滞'} +${advanced.toFixed(2)}s · ${context.sampleRate} Hz`);
  }
 }catch(error){if(run===generation)status(id,'error',error instanceof Error?`${error.name}：${error.message}`:'播放失败');}
 finally{clearTimeout(timer);button.disabled=false;}
}
for(const id of ids)document.getElementById(`test-${id}`)!.addEventListener('click',()=>{void test(id);});
document.addEventListener('visibilitychange',()=>{if(document.hidden){++generation;stop();for(const id of ids)if(out(id).dataset.state==='playing')status(id,'stopped','切到后台，试听已停止');}});
document.getElementById('device')!.textContent=`${innerWidth} × ${innerHeight} · ${navigator.userAgent}`;
render();
