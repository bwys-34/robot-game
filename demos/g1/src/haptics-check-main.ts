import {HapticTest,hapticCapability} from './drive-haptics';
const el=(id:string)=>document.getElementById(id)!;
const tester=new HapticTest(),select=el('device') as HTMLSelectElement,button=el('test') as HTMLButtonElement;
let identity='',chosen='',testing=false,lastSnapshot='',lastCapability='',testedIdentity='';
const pads=():Gamepad[]=>{try{return [...navigator.getGamepads()].filter((p):p is Gamepad=>Boolean(p?.connected));}catch{return [];}};
function current(){return pads().find(p=>String(p.index)===select.value);}
function stop(){tester.stop();}
function refresh(){
  const available=pads(),signature=available.map(p=>`${p.index}:${p.id}`).join('|');
  if(identity!==signature){
    identity=signature;select.replaceChildren(...available.map(p=>new Option(p.id,String(p.index))));
    if(!available.length)select.add(new Option('等待手柄 · 请按 A 唤醒',''));
    if(available.some(p=>String(p.index)===chosen))select.value=chosen;
  }
  const pad=current(),capability=hapticCapability(pad),focused=document.hasFocus()&&!document.hidden;
  const padIdentity=pad?`${pad.index}:${pad.id}`:'';
  if(testing&&(!focused||padIdentity!==testedIdentity))stop();
  button.disabled=testing||capability!=='ready'||!focused;
  el('connection').textContent=capability==='no-device'?'等待手柄':capability==='ready'?'已检测到震动接口':'已连接 · 无震动接口';
  document.body.dataset.capability=capability;
  el('detail').textContent=pad?`${pad.axes.length} 轴 / ${pad.buttons.length} 按钮 · ${pad.mapping||'非标准映射'} · ${focused?'页面已聚焦':'请点击此页'}`:'点击此页后，按一次实体手柄 A 键并松开。';
  const snapshot=pad?pad.buttons.map((b,i)=>b.pressed?`B${i}`:'').filter(Boolean).join(' / '):'';
  if(snapshot!==lastSnapshot){lastSnapshot=snapshot;el('input').textContent=snapshot||'未按键';}
  if(capability!==lastCapability){
    lastCapability=capability;
    if(!testing)el('result').textContent=capability==='ready'?'接口可用。点击下方按钮，测试 0.3 秒中等强度震动。':capability==='unsupported'?'当前连接只读到按键，未提供震动接口。可尝试 USB 连接或手柄的电脑模式。':'等待手柄接入后再测试。';
  }
}
select.addEventListener('change',()=>{stop();chosen=select.value;lastCapability='';refresh();});
button.addEventListener('click',async()=>{
  if(testing)return;
  testedIdentity=current()?`${current()!.index}:${current()!.id}`:'';testing=true;el('confirmation').hidden=true;
  el('result').textContent='正在发送 0.3 秒震动指令…';document.body.dataset.result='pending';refresh();
  const result=await tester.run(current());testing=false;
  el('result').textContent=result.message;document.body.dataset.result=result.status;
  el('confirmation').hidden=result.status!=='completed';refresh();
});
el('stop').addEventListener('click',stop);
for(const id of ['felt','not-felt'])el(id).addEventListener('click',()=>{
  const felt=id==='felt';el('result').textContent=felt?'已确认：这只手柄在当前电脑连接下可以震动。':'已记录：指令完成，但实体手柄没有震动。需要进一步检查连接模式或驱动。';
  document.body.dataset.result=felt?'confirmed':'not-felt';el('confirmation').hidden=true;
});
window.addEventListener('blur',stop);window.addEventListener('pagehide',stop);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
refresh();setInterval(refresh,100);
