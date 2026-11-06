import type {TestPad} from './gamepad-test-input';
export type DrivePadProfile='standard'|'exhibition-android';
/** Only channels photographed on the exhibition Android 11 / Chrome 88 device.
 * null means unobserved; it must never inherit a standard shortcut by accident. */
const OBSERVED_BUTTONS=[0,1,3,4,8,9,null,null,null,null,null,null,12,13,14,15] as const;
export function normalizeDrivePad(pad:TestPad,profile:DrivePadProfile):TestPad|null {
  if(!pad.connected||pad.mapping!=='standard')return null;
  if(profile==='standard')return pad.axes.length>=4&&pad.buttons.length>=10?pad:null;
  if(profile!=='exhibition-android'||pad.id!=='Xbox Wireless Controller'||pad.axes.length!==4||pad.buttons.length!==16)return null;
  const rightX=pad.buttons[6].value,rightY=pad.buttons[7].value;
  if(![rightX,rightY].every(v=>Number.isFinite(v)&&v>=0&&v<=1)||!pad.axes.slice(0,2).every(v=>Number.isFinite(v)&&Math.abs(v)<=1.05))return null;
  if(!OBSERVED_BUTTONS.every(index=>index===null||Number.isFinite(pad.buttons[index].value)&&pad.buttons[index].value>=0&&pad.buttons[index].value<=1.05))return null;
  return {id:pad.id,index:pad.index,mapping:'standard',connected:true,
    axes:[pad.axes[0],pad.axes[1],rightX*2-1,rightY*2-1],
    buttons:OBSERVED_BUTTONS.map(index=>index===null?{pressed:false,value:0}:pad.buttons[index])};
}
