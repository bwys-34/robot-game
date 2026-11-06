/** Avoid replacing live regions and controls when their displayed value is unchanged. */
export class DriveFeedback {
  private readonly markup=new WeakMap<HTMLElement,string>();
  property<T,K extends keyof T>(node:T,key:K,value:T[K]):void {
    if(node[key]!==value)node[key]=value;
  }
  attribute(node:Element,key:string,value:string):void {
    if(node.getAttribute(key)!==value)node.setAttribute(key,value);
  }
  html(node:HTMLElement,value:string):void {
    if(this.markup.get(node)===value)return;
    node.innerHTML=value;this.markup.set(node,value);
  }
}
