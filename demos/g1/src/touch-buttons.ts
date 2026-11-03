/** Activate intentional button taps from pointer events as well as native clicks.
 * Kiosk Chromium can omit the compatibility click following a captured 3D drag.
 * Consume the later native click when present so a nudge/submit runs only once. */
export function enableTouchButtons(root:HTMLElement):void {
  let tap:{id:number;button:HTMLButtonElement;x:number;y:number;time:number;moved:boolean}|null=null;
  const handled=new WeakMap<HTMLButtonElement,number>();
  const buttonAt=(event:Event)=>event.target instanceof Element?event.target.closest<HTMLButtonElement>('button'):null;
  root.addEventListener('pointerdown',event=>{
    const button=buttonAt(event);
    if(event.pointerType!=='touch'){
      if(button)handled.delete(button);
      tap=null;return;
    }
    tap=event.isPrimary&&button&&!button.disabled?{id:event.pointerId,button,x:event.clientX,y:event.clientY,time:performance.now(),moved:false}:null;
  });
  root.addEventListener('pointermove',event=>{
    if(tap?.id===event.pointerId&&Math.hypot(event.clientX-tap.x,event.clientY-tap.y)>=12)tap.moved=true;
  });
  root.addEventListener('pointercancel',()=>{tap=null;});
  root.addEventListener('pointerup',event=>{
    const current=tap;tap=null;
    if(!current||current.id!==event.pointerId||current.moved||current.button.disabled||
      buttonAt(event)!==current.button||performance.now()-current.time>700||
      Math.hypot(event.clientX-current.x,event.clientY-current.y)>=12)return;
    handled.set(current.button,performance.now());
    current.button.click();
  });
  root.addEventListener('click',event=>{
    const button=buttonAt(event),time=button?handled.get(button):undefined;
    // Keyboard activation has detail 0; programmatic clicks must reach handlers.
    if(event.isTrusted&&event.detail>0&&time!==undefined&&performance.now()-time<750){
      handled.delete(button!);event.preventDefault();event.stopImmediatePropagation();
    }
  },true);
}
