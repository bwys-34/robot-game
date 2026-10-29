/** Only controls the WebGL drawing buffer. CSS layout and input coordinates stay intact. */
export class RenderBudget {
  ratio=1;
  private base=1;
  private scale=1;
  private warmup=2;
  private seconds=0;
  private frames=0;

  resize(width:number,height:number,dpr:number):number {
    const area=Math.max(1,width*height);
    this.base=Math.min(1,Number.isFinite(dpr)&&dpr>0?dpr:1,Math.sqrt(1_000_000/area));
    this.ratio=this.base*this.scale;
    this.resetSamples();return this.ratio;
  }

  /** Sustained missed frames may lower resolution; never alter simulation time or oscillate. */
  observe(delta:number,active:boolean):number|null {
    if(!active||!Number.isFinite(delta)||delta<=0||delta>.2){this.resetSamples();return null;}
    if(this.warmup>0){this.warmup-=delta;return null;}
    this.seconds+=delta;this.frames++;
    if(this.seconds<1.5||this.frames<30)return null;
    const average=this.seconds/this.frames;
    this.seconds=0;this.frames=0;
    if(average<=.027||this.scale<=.65)return null;
    this.scale=Math.max(.65,this.scale*.85);this.ratio=this.base*this.scale;
    return this.ratio;
  }

  resetSamples():void {this.warmup=2;this.seconds=0;this.frames=0;}
}
