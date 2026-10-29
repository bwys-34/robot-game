/** Keep OrbitControls' touch list in sync when the browser interrupts capture. */
export class OrbitGestureGuard {
  private readonly pointers=new Map<number,string>();
  private readonly document:Document;
  private readonly window:Window;

  constructor(private readonly canvas:HTMLCanvasElement,private readonly controls:{enabled:boolean}){
    this.document=canvas.ownerDocument;this.window=this.document.defaultView!;
    // Bubble listeners see only gestures admitted to OrbitControls. Part drags
    // stop propagation in FreedomInteraction's capture listeners.
    canvas.addEventListener('pointerdown',this.track);
    canvas.addEventListener('pointerup',this.forget);
    canvas.addEventListener('pointercancel',this.forget);
    canvas.addEventListener('lostpointercapture',this.lostCapture);
    this.window.addEventListener('pointerup',this.outsideEnd,true);
    this.window.addEventListener('pointercancel',this.outsideEnd,true);
    this.window.addEventListener('blur',this.cancelAll);
    this.document.addEventListener('visibilitychange',this.visibilityChanged);
  }

  private track=(event:PointerEvent):void=>{if(this.controls.enabled)this.pointers.set(event.pointerId,event.pointerType);};
  private forget=(event:PointerEvent):void=>{this.pointers.delete(event.pointerId);};
  private lostCapture=(event:PointerEvent):void=>{this.cancel(event.pointerId);};
  private outsideEnd=(event:PointerEvent):void=>{
    if(!event.composedPath().includes(this.canvas))this.cancel(event.pointerId);
  };
  private visibilityChanged=():void=>{if(this.document.hidden)this.cancelAll();};
  private cancelAll=():void=>{for(const id of [...this.pointers.keys()])this.cancel(id);};
  private cancel(id:number):void{
    const pointerType=this.pointers.get(id);if(pointerType===undefined)return;
    // Remove before dispatch: normal cancellation also passes through forget.
    this.pointers.delete(id);
    this.canvas.dispatchEvent(new PointerEvent('pointercancel',{pointerId:id,pointerType}));
  }

  dispose():void{
    this.cancelAll();
    this.canvas.removeEventListener('pointerdown',this.track);
    this.canvas.removeEventListener('pointerup',this.forget);
    this.canvas.removeEventListener('pointercancel',this.forget);
    this.canvas.removeEventListener('lostpointercapture',this.lostCapture);
    this.window.removeEventListener('pointerup',this.outsideEnd,true);
    this.window.removeEventListener('pointercancel',this.outsideEnd,true);
    this.window.removeEventListener('blur',this.cancelAll);
    this.document.removeEventListener('visibilitychange',this.visibilityChanged);
  }
}
