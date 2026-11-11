// Exercise only public keyboard/gamepad inputs and the existing minimap telemetry.
exports.navigateTutorial=async(page,until,source='manual')=>page.evaluate(async({until,source})=>{
 const active=new Set(),started=performance.now(),viewer=document.querySelector('#drive-viewer');let previousYaw=null,previousTime=0;
 const keys=(next)=>{for(const key of ['w','q','e']){const on=next.includes(key);if(on!==active.has(key)){viewer.dispatchEvent(new KeyboardEvent(on?'keydown':'keyup',{key,bubbles:true}));if(on)active.add(key);else active.delete(key);}}};
 const command=(forward,turn)=>{
  if(source==='manual')keys([...(forward?['w']:[]),...(turn>.1?['q']:turn<-.1?['e']:[])]);
  else{
   pad.axes[1]=-forward;
   if(source==='android')pad.buttons[6]={pressed:true,value:(1-turn)/2};else pad.axes[2]=-turn;
  }
 };
 try{
  while(document.body.dataset.stage!==until){
   const stage=document.body.dataset.stage;if(!['walk','turn','park'].includes(stage))throw Error(`Unexpected stage ${stage}`);
   if(performance.now()-started>45000)throw Error(`Route timeout ${stage}: ${document.querySelector('#arrival-progress').textContent}`);
   const robot=document.querySelector('#map-robot'),target=document.querySelector('#map-target');
   const x=Number(robot.dataset.x),z=Number(robot.dataset.z),yaw=Number(robot.dataset.yaw);
   const tx=Number(target.dataset.x),tz=Number(target.dataset.z);
   const error=Math.atan2(Math.sin(Math.atan2(tx-x,tz-z)-yaw),Math.cos(Math.atan2(tx-x,tz-z)-yaw));
   const now=performance.now(),omega=previousYaw===null?0:Math.atan2(Math.sin(yaw-previousYaw),Math.cos(yaw-previousYaw))/Math.max(.03,(now-previousTime)/1000);
   const turn=Math.abs(error)>.05?Math.max(-.55,Math.min(.55,error*1.8-omega*.22)):0;
   const radius=Number(target.dataset.radius);
   const forward=(stage!=='turn'||document.querySelector('#mission-description').textContent.startsWith('已离开 A 圈'))&&Math.hypot(tx-x,tz-z)>radius*.6&&Math.abs(error)<.16?(source==='manual'?1:.85):0;
   command(forward,turn);previousYaw=yaw;previousTime=now;
   await new Promise(resolve=>setTimeout(resolve,55));
  }
 }finally{command(0,0);}
 return {seconds:(performance.now()-started)/1000,stage:document.body.dataset.stage};
},{until,source});
