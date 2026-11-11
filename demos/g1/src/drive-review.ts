import type {DriveState} from './drive-state';

export function roundTime(seconds:number):string{
  const whole=Math.floor(seconds);
  return `${String(Math.floor(whole/60)).padStart(2,'0')}:${String(whole%60).padStart(2,'0')}`;
}

const stepNames:Record<string,string>={
  walk:'A 点',turn:'原地转向',park:'停车',approach:'入场',slalom:'绕桩',gate:'窄门',side:'侧移',reverse:'倒车准备',
  hoist:'前往吊架',route:'路线',position:'舞台就位',perform:'表演',
};

export function roundReview(s:DriveState):{metrics:string;impacts:string;next:string}{
  const show=s.experience==='show',course=s.experience==='course',reception=s.experience==='reception';
  const position=course?s.course.result?.parkingError??0:show?s.show.positionError:reception?s.reception.parkingError:s.tutorial.parkingError;
  const heading=Math.abs(course?s.course.result?.headingError??0:show?s.show.positionHeadingError:reception?s.reception.headingError:s.tutorial.turnError)*180/Math.PI;
  const angleName=show?'面向观众误差':s.experience==='mission'?'A 点转向误差':'朝向误差';
  const collisions=s.impacts.map(hit=>`${stepNames[hit.step]??hit.step} · ${hit.obstacle}（${hit.x.toFixed(1)}, ${hit.z.toFixed(1)} m）`);
  const hit=s.impacts[s.impacts.length-1];
  const next=hit?(hit.step==='gate'?'先练低速穿门：对准两根柱子的中间再直走。':`先练${stepNames[hit.step]??'这一段'}：接近${hit.obstacle}前松杆，停稳再修正方向。`):
    heading/(s.experience==='mission'?12:15)>position/(show?.55:.35)&&heading>=4?'先练朝向：减速停稳，再用短促的转向对准目标。':
    position>=.09?(course?'先练倒车停车：提前松杆，再低速小幅修正到中心。':'先练停稳：接近中心时提前松杆，再小幅补位。'):
    course&&s.course.level!=='advanced'?'试试下一档，减少引导或挑战不同方向的车位。':'这局停得准、方向稳；再做一遍，练习稳定复现。';
  return {metrics:`${show?'就位':'停车'}偏差 ${Math.round(position*100)} cm · ${angleName} ${heading.toFixed(1)}°`,
    impacts:s.impactCount?`碰撞 ${s.impactCount} 次${s.impactCount>collisions.length?'（最近三次）':''}：${collisions.join('；')}`:'碰撞 0 次',next:`下次优先：${next}`};
}
