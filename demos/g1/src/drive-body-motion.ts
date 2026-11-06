/** Authored visual trajectories in metres/radians/degrees, not a physics policy. */
export const smooth=(t:number)=>{const u=Math.max(0,Math.min(1,t));return u*u*u*(10+u*(-15+6*u));};
export const BODY_CLIPS={backflip:3.25,jump:2.65,sit:4.2} as const;
export type BodyClip=keyof typeof BODY_CLIPS;
export const isBodyClip=(id:unknown):id is BodyClip=>typeof id==='string'&&id in BODY_CLIPS;
export interface BodySample {pitch:number;height:number;knee:number;arm:number;phase:string;}
export function sampleBodyClip(id:BodyClip,seconds:number):BodySample{
 const duration=BODY_CLIPS[id],t=Math.max(0,Math.min(duration,seconds));
 if(id==='sit'){
  const bend=t<1.1?smooth(t/1.1):t<2.7?1:1-smooth((t-2.7)/1.5);
  return {pitch:0,height:0,knee:16+54*bend,arm:-8-30*bend,phase:t<1.1?'屈膝下沉':t<2.7?'保持蹲坐':'恢复站立'};
 }
 const takeoff=.8,flight=id==='backflip'?1.15:.7,land=takeoff+flight;
 if(t<takeoff){const bend=t<.55?smooth(t/.55):1-smooth((t-.55)/.25);return {pitch:0,height:0,knee:16+48*bend,arm:-8-44*bend,phase:'蓄力蹬地'};}
 if(t<land){const u=(t-takeoff)/flight,tuck=Math.sin(Math.PI*u);return {pitch:id==='backflip'?-Math.PI*2*smooth(u):0,height:4*(id==='backflip'?.88:.34)*u*(1-u),knee:16+54*tuck,arm:-8-60*tuck,phase:id==='backflip'?'腾空后翻':'腾空'};}
 const u=(t-land)/(duration-land),bend=u<.28?smooth(u/.28):1-smooth((u-.28)/.72);
 return {pitch:id==='backflip'?-Math.PI*2:0,height:0,knee:16+42*bend,arm:-8-25*bend,phase:u<.4?'落地缓冲':'恢复站立'};
}
