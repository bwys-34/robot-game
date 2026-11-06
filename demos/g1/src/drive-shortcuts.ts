import type {DriveCommand} from './drive-config';
/** Exhibition shortcuts using the shoulders actually observed on both devices. */
export const MODE_SHORTCUTS:readonly {button:number;key:string;title:string;copy:string;command:Partial<DriveCommand>}[]=[
  {button:0,key:'A',title:'恢复行走',copy:'站立后接管摇杆',command:{mode:'locomotion'}},
  {button:1,key:'B',title:'阻尼模式',copy:'有阻力，慢慢倒地',command:{mode:'damp'}},
  {button:2,key:'X',title:'起身复位',copy:'倒地后重新站起来',command:{recover:true}},
  {button:3,key:'Y',title:'零力矩',copy:'不出力，迅速倒地',command:{mode:'zero'}},
];
