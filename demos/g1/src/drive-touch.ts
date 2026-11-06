/** Track each finger separately; cancellation must only release its own input. */
export class DriveTouch {
  private readonly pointers=new Map<number,string>();
  private readonly counts=new Map<string,number>();
  press(pointer:number,action:string):void {
    this.release(pointer);this.pointers.set(pointer,action);
    this.counts.set(action,(this.counts.get(action)??0)+1);
  }
  release(pointer:number):void {
    const action=this.pointers.get(pointer);if(action===undefined)return;
    this.pointers.delete(pointer);const remaining=(this.counts.get(action)??1)-1;
    if(remaining>0)this.counts.set(action,remaining);else this.counts.delete(action);
  }
  has(action:string):boolean{return this.counts.has(action);}
  clear():void{this.pointers.clear();this.counts.clear();}
}
