import type {DriveObstacle} from './drive-config';

export const TRAINING_LEVELS=['practice','exam','advanced'] as const;
export type TrainingLevel=typeof TRAINING_LEVELS[number];
const point=(x:number,z:number,radius=.24)=>({x,z,radius});
const post=(id:string,x:number,z:number,size=.42):DriveObstacle=>({id,x:x-size/2,z:z-size/2,width:size,depth:size});
export const TRAINING_PILLARS=Array.from({length:6},(_,i)=>post('训练立柱',-4.8+(i%2?.14:-.14),5.4+i*1.6));
const widths={practice:1.4,exam:1.15,advanced:1};
const centers={practice:-3,exam:0,advanced:3};
export const TRAINING_GATES=TRAINING_LEVELS.map(level=>({level,x:centers[level],z:15,width:widths[level]}));
export const TRAINING_OBSTACLES:readonly DriveObstacle[]=[
  ...TRAINING_PILLARS,
  ...TRAINING_GATES.flatMap(g=>[-1,1].map(sign=>post('考场门柱',g.x+sign*(g.width/2+.21),g.z))),
  {id:'转角护墙',x:3.65,z:16.35,width:.22,depth:1.95},
  {id:'转角护墙',x:5.4,z:16.1,width:1.6,depth:.22},
  post('停靠边柱',8.5,16.4,.3),post('停靠边柱',8.5,18.2,.3),
  post('接待引导柱',-.5,5.5),post('接待引导柱',1,6.7),
  post('舞台引导柱',8.9,3.9),post('舞台引导柱',10.3,5.5),
];
export function trainingLayout(level:TrainingLevel){
 const gate=TRAINING_GATES.find(g=>g.level===level)!;
 const parking=point(9.3,17.3,level==='practice'?.32:level==='exam'?.25:.20);
 return {
  entry:point(0,3.65,.32),approach:point(-5.9,4.25,.30),
  slalom:TRAINING_PILLARS.flatMap((p,i)=>[-.65,.65].map(dz=>point(i%2?-3.65:-5.95,p.z+p.depth/2+dz,.14))),
  gate:[point(gate.x,14.15),point(gate.x,15.85)],gateWidth:gate.width,
  gatePassage:{z:gate.z,minX:gate.x-gate.width/2+.28,maxX:gate.x+gate.width/2-.28},
  corner:[point(4.65,15.85),point(4.65,17.3),point(6.4,17.3)],
  side:point(7.5,17.3,.22),sideHeading:Math.PI,minimumSide:.7,
  dockEntry:point(8.05,17.3,.20),parking,heading:Math.PI/2,
  docking:{minX:8.5,maxX:10.05,minZ:16.65,maxZ:17.95},
  headingTolerance:(level==='advanced'?10:15)*Math.PI/180,settledSpeed:.045,settledAngular:.12,parkingHold:1,
 };
}
