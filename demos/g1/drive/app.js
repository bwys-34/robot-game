(()=>{var ir=s=>Object.fromEntries(["left","right"].flatMap(e=>[[`${e}_hip_pitch_joint`,-s/2],[`${e}_knee_joint`,s],[`${e}_ankle_pitch_joint`,-s/2]])),at=(s,e,t,n,i=0)=>({[`${s}_shoulder_pitch_joint`]:e,[`${s}_shoulder_roll_joint`]:t*(s==="left"?1:-1),[`${s}_elbow_joint`]:n,[`${s}_wrist_roll_joint`]:i}),Ft=(s={})=>({...ir(6),...at("left",-8,10,12),...at("right",-8,10,12),...s}),$d=s=>s.flatMap(e=>e==="waist"?["torso_link"]:e.endsWith("arm")?[`${e.split("-")[0]}_shoulder_yaw_link`,`${e.split("-")[0]}_elbow_link`,`${e.split("-")[0]}_wrist_pitch_link`]:[`${e.split("-")[0]}_hip_yaw_link`,`${e.split("-")[0]}_knee_link`,`${e.split("-")[0]}_ankle_roll_link`]);function Vt(s,e,t,n,i,r,a){return{id:s,title:e,group:t,tags:n,description:i,links:$d(r),frames:a.map((o,l)=>{let c=a[l-1],h=c&&Object.keys(o).length===Object.keys(c).length&&Object.entries(o).every(([u,d])=>c[u]===d);return{angles:o,duration:h?.24:l===0?.85:l===a.length-1?.65:.46}})}}var Mn=Ft({...at("right",-75,65,60,-18)}),ss=Ft({...at("right",-75,80,68,18)}),xt=Ft({...at("left",-12,68,20),...at("right",-12,68,20)}),rs=Ft({...at("left",-32,42,35,25),waist_yaw_joint:10}),Gr=Ft({...ir(10),waist_pitch_joint:18,...at("left",-5,12,24),...at("right",-5,12,24)}),Dn=s=>Ft({...at(s,-38,48,18,20),waist_yaw_joint:s==="left"?14:-14}),Nn=Ft({...at("left",-50,18,45,30),...at("right",-50,18,45,-30)}),os=Ft({...at("left",-85,45,55),...at("right",-85,45,55)}),ci=s=>Ft({...at("left",-30,48+s*12,45),...at("right",-30,48-s*12,45),waist_yaw_joint:s*12}),Ni=s=>Ft({...at("left",-58,20,70),...at("right",-58,20,70),...at(s,-68,22,18),waist_yaw_joint:s==="left"?8:-8}),it=Ft({...at("left",-20,30,35),...at("right",-20,30,35)}),Ba=Ft({...at("right",-45,35,50)}),Ut=(s,e)=>Ft({...at(s,-42,52,32,s==="left"?20:-20),waist_yaw_joint:e}),Fa=(s,e)=>Ft({...at("left",-85,s,e),...at("right",-85,s,e)}),sn=(s,e)=>Ft({...ir(s),...at("left",-35,e,40),...at("right",-35,e,40)}),ka=[Vt("wave","\u6325\u624B\u62DB\u547C","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u81C2\u540E\u8FDE\u7EED\u5DE6\u53F3\u6325\u624B\uFF0C\u518D\u964D\u4F4E\u624B\u81C2\u63A5\u4F4F\u4E0B\u4E00\u6BB5\u52A8\u4F5C\u3002",["right-arm"],[Ba,Mn,ss,Mn,ss,Mn,ss,Mn,ss,Ba]),Vt("welcome","\u53CC\u81C2\u8FCE\u5BBE","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u53CC\u81C2\u5C55\u5F00\u3001\u8F6C\u5411\u4E24\u4FA7\u81F4\u610F\uFF0C\u518D\u4EE5\u6B22\u8FCE\u59FF\u52BF\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[it,xt,xt,{...xt,waist_yaw_joint:10},xt,{...xt,waist_yaw_joint:-10},xt,it,xt,it]),Vt("invite","\u5355\u81C2\u9080\u8BF7","\u62DB\u547C\u4E0E\u63A5\u5F85",["invite","upper"],"\u4F38\u81C2\u9080\u8BF7\u3001\u8F6C\u8EAB\u793A\u610F\uFF0C\u624B\u8155\u548C\u8098\u90E8\u63A5\u529B\u5F15\u5BFC\u6E38\u5BA2\u3002",["left-arm","waist"],[it,rs,rs,Ut("left",16),Dn("left"),rs,Ut("left",8),Dn("left"),rs,it]),Vt("bow","\u793C\u8C8C\u97A0\u8EAC","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u5148\u5C55\u5F00\u53CC\u81C2\u81F4\u8C22\uFF0C\u518D\u6536\u81C2\u97A0\u8EAC\u3001\u8D77\u8EAB\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[it,xt,it,Ft({...ir(8),waist_pitch_joint:8}),Gr,Gr,Ft({...ir(8),waist_pitch_joint:10}),it,xt,it]),Vt("guide-left","\u5DE6\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["left","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u5DE6\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","waist"],[it,Dn("left"),Dn("left"),Ut("left",20),rs,Dn("left"),Ut("left",8),rs,Dn("left"),it]),Vt("guide-right","\u53F3\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["right","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u53F3\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["right-arm","waist"],[it,Dn("right"),Dn("right"),Ut("right",-20),Ut("right",-8),Dn("right"),Ut("right",-16),Ut("right",-8),Dn("right"),it]),Vt("offer","\u53CC\u624B\u5448\u9012","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u624B\u6258\u8D77\u5C55\u54C1\uFF0C\u5DE6\u53F3\u5C55\u793A\uFF0C\u518D\u9001\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[it,Nn,Nn,{...Nn,waist_yaw_joint:12},Nn,{...Nn,waist_yaw_joint:-12},Nn,it,Nn,it]),Vt("turn","\u8F6C\u8EAB\u5C55\u793A","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u811A\u7559\u5728\u539F\u5730\uFF0C\u8170\u5E26\u52A8\u4E0A\u8EAB\uFF0C\u53CC\u81C2\u8F6E\u6D41\u5411\u4E24\u4FA7\u4ECB\u7ECD\u3002",["left-arm","right-arm","waist"],[it,Ut("left",12),Ut("left",24),xt,Ut("right",-12),Ut("right",-24),xt,Ut("left",12),Ut("right",-12),it]),Vt("raise","\u53CC\u81C2\u4E0A\u4E3E","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u81C2\u4E0A\u4E3E\u3001\u5916\u5C55\u3001\u6536\u8098\uFF0C\u518D\u6B21\u4F38\u5C55\uFF0C\u5F62\u6210\u5B8C\u6574\u4E0A\u80A2\u4E50\u53E5\u3002",["left-arm","right-arm"],[it,os,Fa(55,65),os,Fa(40,40),os,Fa(55,65),os,xt,it]),Vt("sway","\u5DE6\u53F3\u6446\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u6446\u81C2\u7A7F\u63D2\u8170\u90E8\u8F6C\u5411\uFF0C\u6700\u540E\u5C55\u5F00\u53CC\u81C2\u63A5\u4E0B\u4E00\u62CD\u3002",["left-arm","right-arm","waist"],[ci(-1),ci(1),ci(-1),ci(1),xt,ci(-1),ci(1),ci(-1),ci(1),it]),Vt("pulse","\u5C48\u819D\u5F8B\u52A8","\u8282\u594F\u4E0E\u8868\u6F14",["lower","upper"],"\u6DF1\u6D45\u5C48\u819D\u4EA4\u66FF\uFF0C\u9ACB\u819D\u8E1D\u4E0E\u53CC\u81C2\u540C\u62CD\u914D\u5408\u3002",["left-leg","right-leg","left-arm","right-arm"],[sn(12,30),sn(30,45),sn(12,30),sn(24,40),sn(10,55),sn(30,45),sn(12,30),sn(24,40),sn(10,55),sn(6,30)]),Vt("punch","\u4EA4\u66FF\u51FA\u62F3","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u51FA\u62F3\u63A5\u529B\uFF0C\u7A7F\u63D2\u6536\u8098\u548C\u5C55\u5F00\uFF0C\u8170\u90E8\u914D\u5408\u8F6C\u5411\u3002",["left-arm","right-arm","waist"],[it,Ni("left"),Ni("right"),Ni("left"),Ni("right"),xt,Ni("right"),Ni("left"),Ni("right"),it]),Vt("salute","\u62AC\u624B\u81F4\u610F","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u8D77\u53F3\u81C2\u81F4\u610F\uFF0C\u8F6C\u5411\u4E24\u4FA7\u56DE\u5E94\u6E38\u5BA2\uFF0C\u518D\u5C55\u5F00\u56DE\u793C\u3002",["right-arm","waist"],[Ba,Mn,{...Mn,waist_yaw_joint:-10},Mn,{...Mn,waist_yaw_joint:10},Mn,ss,Mn,xt,it]),Vt("open-close","\u5F00\u5408\u624B\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u8098\u6536\u62E2\u4E0E\u53CC\u81C2\u5C55\u5F00\u4EA4\u66FF\uFF0C\u6700\u540E\u9AD8\u4E3E\u53CC\u624B\u56DE\u5E94\u89C2\u4F17\u3002",["left-arm","right-arm"],[it,Nn,xt,Nn,xt,os,xt,Nn,xt,it]),Vt("diagonal","\u5BF9\u89D2\u547C\u5E94","\u8282\u594F\u4E0E\u8868\u6F14",["upper","lower"],"\u5DE6\u53F3\u624B\u81C2\u8F6E\u6D41\u5C55\u5F00\uFF0C\u817F\u90E8\u8F7B\u5C48\u914D\u5408\u9AD8\u4F4E\u53D8\u5316\u3002",["left-arm","right-arm","left-leg","right-leg","waist"],[it,Ut("left",12),sn(18,40),Ut("right",-12),sn(10,35),Ut("left",16),sn(24,45),Ut("right",-16),xt,it]),Vt("finale","\u5C55\u5F00\u8C22\u5E55","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u53CC\u81C2\u4E3E\u8D77\u5411\u89C2\u4F17\u81F4\u8C22\uFF0C\u5C55\u5F00\u53CC\u624B\u540E\u97A0\u8EAC\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[it,os,xt,Mn,ss,xt,it,Gr,Gr,it])];function nh(s){let e=ka.find(t=>t.id===s);if(!e)throw new Error(`Unknown performance action: ${s}`);return e}function za(s,e,t){return Object.fromEntries([...new Set([...Object.keys(s),...Object.keys(e)])].map(n=>[n,(s[n]??0)+((e[n]??0)-(s[n]??0))*t]))}function ih(s,e){if(!s.length||s.length>8)throw new Error("Choose one to eight actions");let t=s.flatMap((r,a)=>nh(r).frames.map(o=>({...o,actionIndex:a,actionId:r,phase:"action"}))),n=e==="lively"?.9:1,i=t.map(r=>({...r,duration:r.duration*n}));for(let r=1;r<i.length-2;r++){if(i[r].actionIndex===i[r+1].actionIndex)continue;let a=i[r-1].angles,o=i[r+2].angles,l=i[r].duration+i[r+1].duration+i[r+2].duration;Math.max(...[...new Set([...Object.keys(a),...Object.keys(o)])].map(h=>Math.abs((a[h]??0)-(o[h]??0))))>1e-6?(i[r]={...i[r],angles:za(a,o,i[r].duration/l)},i[r+1]={...i[r+1],angles:za(a,o,(i[r].duration+i[r+1].duration)/l)}):i[r+1]={...i[r+1],angles:za(i[r].angles,o,i[r+1].duration/(i[r+1].duration+i[r+2].duration))}}return i.push({angles:{},duration:1.15*n,actionIndex:s.length-1,actionId:s[s.length-1],phase:"closing"}),i}var sr=class{index=0;elapsed=0;completed=0;paused=!1;keys;values;velocities;current;total;frames;constructor(e,t){if(!e.length||Object.values(t).some(n=>!Number.isFinite(n))||e.some(n=>!Number.isFinite(n.duration)||n.duration<=0||Object.values(n.angles).some(i=>!Number.isFinite(i))))throw new Error("Invalid performance timeline");this.frames=e,this.total=e.reduce((n,i)=>n+i.duration,0),this.keys=[...new Set([Object.keys(t),...e.map(n=>Object.keys(n.angles))].flat())],this.values=[t,...e.map(n=>n.angles)].map(n=>this.keys.map(i=>n[i]??0)),this.current=Object.fromEntries(this.keys.map((n,i)=>[n,this.values[0][i]])),this.velocities=this.values.map(()=>this.keys.map(()=>0));for(let n=1;n<this.values.length-1;n++){let i=e[n-1].duration,r=e[n].duration;for(let a=0;a<this.keys.length;a++){let o=(this.values[n][a]-this.values[n-1][a])/i,l=(this.values[n+1][a]-this.values[n][a])/r;if(o*l<=0)continue;let c=2*r+i,h=r+2*i,u=(c+h)/(c/o+h/l);this.velocities[n][a]=Math.sign(u)*Math.min(Math.abs(u),1.2*Math.min(Math.abs(o),Math.abs(l)))}}}get angles(){return this.current}get finished(){return this.index>=this.frames.length}get frame(){return this.frames[Math.min(this.index,this.frames.length-1)]}get progress(){return this.finished?1:(this.completed+this.elapsed)/this.total}pause(){this.paused=!0}resume(){this.paused=!1}update(e){if(this.paused||this.finished||!Number.isFinite(e)||e<=0)return!1;let t=e;for(;t>1e-10&&!this.finished;){let n=this.frames[this.index],i=Math.min(t,n.duration-this.elapsed);this.elapsed+=i,t-=i,this.elapsed>=n.duration-1e-10&&(this.completed+=n.duration,this.index++,this.elapsed=0)}if(this.finished){let n=this.values[this.values.length-1];for(let i=0;i<this.keys.length;i++)this.current[this.keys[i]]=n[i]}else{let n=this.index,i=this.frames[n].duration,r=this.elapsed/i,a=r*r,o=a*r,l=o*r,c=l*r,h=1-10*o+15*l-6*c,u=r-6*o+8*l-3*c,d=10*o-15*l+6*c,f=-4*o+7*l-3*c;for(let g=0;g<this.keys.length;g++)this.current[this.keys[g]]=h*this.values[n][g]+u*i*this.velocities[n][g]+d*this.values[n+1][g]+f*i*this.velocities[n+1][g]}return!0}};var fn=[{id:"wave",title:"\u6325\u624B\u62DB\u547C",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u62AC\u8D77\u53F3\u624B\uFF0C\u8FDE\u7EED\u6325\u52A8\u524D\u81C2\u6B22\u8FCE\u6E38\u5BA2\u3002"},{id:"handshake",title:"\u4F38\u624B\u63E1\u624B",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u53F3\u81C2\u524D\u4F38\uFF0C\u624B\u8155\u671D\u5411\u6E38\u5BA2\uFF0C\u8F7B\u8F7B\u4E0A\u4E0B\u56DE\u5E94\u3002"},{id:"invite",title:"\u9080\u8BF7\u6307\u5F15",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u4F38\u81C2\u793A\u610F\uFF0C\u8BF7\u6E38\u5BA2\u4E00\u8D77\u8BA4\u8BC6\u53F3\u4FA7\u5C55\u54C1\u3002"},{id:"bow",title:"\u793C\u8C8C\u97A0\u8EAC",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u6536\u81C2\u3001\u5F2F\u8170\u81F4\u610F\uFF0C\u518D\u5E73\u987A\u56DE\u5230\u7AD9\u59FF\u3002"},{id:"clap",title:"\u62CD\u624B\u9F13\u638C",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u81C2\u62AC\u5230\u80F8\u524D\uFF0C\u53CC\u624B\u9760\u8FD1\u3001\u5206\u5F00\uFF0C\u8F7B\u62CD\u4E09\u6B21\u3002"},{id:"raise",title:"\u53CC\u81C2\u4E0A\u4E3E",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u81C2\u5411\u4E0A\u5C55\u5F00\uFF0C\u518D\u5C48\u8098\u6536\u56DE\u3002"},{id:"stretch",title:"\u8212\u5C55\u53CC\u81C2",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u624B\u5C55\u5F00\uFF0C\u5411\u4E24\u4FA7\u6E38\u5BA2\u6253\u4E2A\u62DB\u547C\u3002"},{id:"dance",title:"\u5DE6\u53F3\u5F8B\u52A8",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u624B\u81C2\u3001\u8170\u90E8\u548C\u5C48\u819D\u914D\u5408\u7684\u7B80\u77ED\u5F8B\u52A8\u3002"},{id:"robotdance",title:"\u673A\u68B0\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u81C2\u4EA4\u66FF\u5C48\u4F38\uFF0C\u914D\u5408\u8170\u90E8\u5C0F\u5E45\u8F6C\u52A8\uFF0C\u5C55\u793A\u673A\u68B0\u821E\u8282\u594F\u3002"},{id:"armdance",title:"\u53CC\u81C2\u6446\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u81C2\u5411\u4E24\u4FA7\u5C55\u5F00\uFF0C\u518D\u4EA4\u66FF\u62AC\u8D77\uFF0C\u914D\u5408\u8170\u90E8\u5DE6\u53F3\u8F7B\u6446\u3002"},{id:"cheerdance",title:"\u52A0\u6CB9\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u624B\u4ECE\u80F8\u524D\u4E3E\u8D77\uFF0C\u5DE6\u53F3\u4EA4\u66FF\u52A0\u6CB9\uFF0C\u6700\u540E\u4E00\u8D77\u6536\u56DE\u3002"},{id:"turnwave",title:"\u8F6C\u8EAB\u6325\u624B",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u7AD9\u5B9A\u540E\u5411\u4FA7\u9762\u8F6C\u8EAB\uFF0C\u6325\u624B\u56DE\u5E94\uFF0C\u518D\u56DE\u5230\u539F\u671D\u5411\u3002"},{id:"sit",title:"\u5C48\u819D\u8E72\u5750",group:"\u5168\u8EAB\u52A8\u4F5C",description:"\u5C48\u819D\u964D\u4F4E\u8EAB\u4F53\uFF0C\u77ED\u6682\u505C\u7559\u540E\u7AD9\u8D77\uFF1B\u662F\u7F51\u9875\u8E72\u5750\u6F14\u793A\u3002"},{id:"jump",title:"\u539F\u5730\u8DF3\u8DC3",group:"\u865A\u62DF\u7279\u6280",description:"\u84C4\u529B\u3001\u8E6C\u5730\u3001\u817E\u7A7A\uFF0C\u518D\u5C48\u819D\u7F13\u51B2\u843D\u5730\u3002\u4EC5\u4E3A\u7F51\u9875\u52A8\u753B\u3002"},{id:"backflip",title:"\u540E\u7A7A\u7FFB",group:"\u865A\u62DF\u7279\u6280",description:"\u5C48\u819D\u84C4\u529B\u3001\u817E\u7A7A\u540E\u7FFB\u4E00\u5468\u3001\u843D\u5730\u7F13\u51B2\u3002\u4EC5\u4E3A\u7F51\u9875\u7279\u6280\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u673A\u80FD\u529B\u3002"}],Sn=[{button:0,key:"A",action:"dance",title:"\u5F8B\u52A8"},{button:1,key:"B",action:"robotdance",title:"\u673A\u68B0\u821E"},{button:2,key:"X",action:"armdance",title:"\u53CC\u81C2\u6446\u821E"},{button:3,key:"Y",action:"cheerdance",title:"\u52A0\u6CB9\u821E"}],qn=s=>fn.find(e=>e.id===s),rr=s=>fn.some(e=>e.id===s),Zd={left_shoulder_pitch_joint:-8,left_shoulder_roll_joint:8,left_elbow_joint:15,right_shoulder_pitch_joint:-8,right_shoulder_roll_joint:-8,right_elbow_joint:15,waist_yaw_joint:0,waist_pitch_joint:0,waist_roll_joint:0},Ne=(s,e=.45)=>({angles:{...Zd,...s},duration:e});function as(s){if(s==="robotdance"){let t={left_shoulder_pitch_joint:-35,left_shoulder_roll_joint:25,left_elbow_joint:80,right_shoulder_pitch_joint:-12,right_elbow_joint:30,waist_yaw_joint:12},n={right_shoulder_pitch_joint:-35,right_shoulder_roll_joint:-25,right_elbow_joint:80,left_shoulder_pitch_joint:-12,left_elbow_joint:30,waist_yaw_joint:-12};return[Ne({},.45),Ne(t,.55),Ne(n,.55),Ne(t,.55),Ne(n,.55),Ne(t,.55),Ne(n,.55),Ne({},.8)]}if(s==="armdance"){let t={left_shoulder_pitch_joint:-20,left_shoulder_roll_joint:50,left_elbow_joint:35,right_shoulder_pitch_joint:-20,right_shoulder_roll_joint:-50,right_elbow_joint:35},n={...t,left_shoulder_pitch_joint:-65,left_elbow_joint:60,waist_roll_joint:5},i={...t,right_shoulder_pitch_joint:-65,right_elbow_joint:60,waist_roll_joint:-5};return[Ne({},.45),Ne(t,.6),Ne(n,.65),Ne(i,.65),Ne(n,.65),Ne(i,.65),Ne(t,.6),Ne({},.8)]}if(s==="cheerdance"){let t={left_shoulder_pitch_joint:-45,left_shoulder_roll_joint:20,left_elbow_joint:85,right_shoulder_pitch_joint:-45,right_shoulder_roll_joint:-20,right_elbow_joint:85},n={...t,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:6},i={...t,right_shoulder_pitch_joint:-120,right_elbow_joint:35,waist_yaw_joint:-6};return[Ne({},.45),Ne(t,.6),Ne(n,.6),Ne(i,.6),Ne(n,.6),Ne(i,.6),Ne({...n,...i,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:0},.7),Ne(t,.6),Ne({},.8)]}if(s==="backflip"||s==="jump"||s==="sit")return[Ne({},.4),Ne({left_shoulder_pitch_joint:-45,right_shoulder_pitch_joint:-45},.7),Ne({},.8)];if(s==="turnwave")return as("wave");if(s==="handshake"){let t={right_shoulder_pitch_joint:-42,right_shoulder_roll_joint:-12,right_elbow_joint:38,right_wrist_roll_joint:-25};return[Ne({},.45),Ne(t,.7),Ne({...t,right_shoulder_pitch_joint:-48},.38),Ne({...t,right_shoulder_pitch_joint:-38},.38),Ne({...t,right_shoulder_pitch_joint:-48},.38),Ne(t,.38),Ne({},.8)]}if(s==="clap"){let t={left_shoulder_pitch_joint:-50,left_shoulder_roll_joint:25,left_shoulder_yaw_joint:-10,left_elbow_joint:40,left_wrist_roll_joint:-60,right_shoulder_pitch_joint:-50,right_shoulder_roll_joint:-25,right_shoulder_yaw_joint:10,right_elbow_joint:40,right_wrist_roll_joint:60},n={...t,left_shoulder_roll_joint:10,right_shoulder_roll_joint:-10};return[Ne({},.45),Ne(t,.7),Ne(n,.36),Ne(t,.36),Ne(n,.36),Ne(t,.36),Ne(n,.36),Ne(t,.4),Ne({},.8)]}let e=s==="stretch"?"welcome":s==="dance"?"sway":s;if(!ka.some(t=>t.id===e))throw new Error(`Missing drive action ${s}`);return ih([e],"lively").map(t=>({...t,angles:Object.fromEntries(Object.entries(t.angles).filter(([n])=>!/^((left|right)_(hip|knee|ankle))/.test(n)))}))}var sh="g1-drive-performance-slots-v1",Wr=class{constructor(e){this.storage=e;try{let t=JSON.parse((e==null?void 0:e.getItem(sh))??"null");(t==null?void 0:t.version)===1&&this.valid(t.slots)&&(this.slots=[...t.slots])}catch{}}slots=Sn.map(e=>e.action);revision=0;valid(e){return Array.isArray(e)&&e.length===4&&e.every(rr)}actionAt(e){return this.slots[e]??Sn[0].action}snapshot(){return[...this.slots]}save(e){if(!this.valid(e))return!1;this.slots=[...e],this.revision++;try{return this.storage?(this.storage.setItem(sh,JSON.stringify({version:1,slots:this.slots})),!0):!1}catch{return!1}}restore(){return this.save(Sn.map(e=>e.action))}};var Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kd=0,rh=1,Jd=2;var ju=1,Qd=2,Qn=3,Bn=0,Xt=1,an=2;var _i=0,Ls=1,oh=2,ah=3,lh=4,ef=5,zi=100,tf=101,nf=102,ch=103,hh=104,sf=200,rf=201,of=202,af=203,Ml=204,Sl=205,lf=206,cf=207,hf=208,uf=209,df=210,ff=211,pf=212,mf=213,gf=214,_f=0,yf=1,vf=2,Eo=3,xf=4,bf=5,Mf=6,Sf=7,$u=0,Ef=1,wf=2,yi=0,Tf=1,Af=2,Rf=3,ic=4,Cf=5,Pf=6,uh="attached",Lf="detached",Zu=300,Ns=301,Us=302,El=303,wl=304,ia=306,qi=1e3,ln=1001,br=1002,Ct=1003,wo=1004;var gr=1005;var Zt=1006,sc=1007;var xi=1008;var vi=1009,If=1010,Df=1011,rc=1012,Ku=1013,mi=1014,ei=1015,Mr=1016,Ju=1017,Qu=1018,Gi=1020,Nf=1021,mn=1023,Uf=1024,Of=1025,Wi=1026,Os=1027,Bf=1028,ed=1029,Ff=1030,td=1031,nd=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,dh=35840,fh=35841,ph=35842,mh=35843,id=36196,gh=37492,_h=37496,yh=37808,vh=37809,xh=37810,bh=37811,Mh=37812,Sh=37813,Eh=37814,wh=37815,Th=37816,Ah=37817,Rh=37818,Ch=37819,Ph=37820,Lh=37821,Xa=36492,Ih=36494,Dh=36495,kf=36283,Nh=36284,Uh=36285,Oh=36286;var Bs=2300,Yi=2301,qa=2302,Bh=2400,Fh=2401,kh=2402,zf=2500;var sd=0,sa=1,Nr=2,rd=3e3,Xi=3001,Hf=3200,Vf=3201,od=0,Gf=1,gn="",dt="srgb",Lt="srgb-linear",oc="display-p3",ra="display-p3-linear",To="linear",ut="srgb",Ao="rec709",Ro="p3";var ls=7680;var zh=519,Wf=512,Xf=513,qf=514,ad=515,Yf=516,jf=517,$f=518,Zf=519,Tl=35044;var Hh="300 es",Al=1035,ti=2e3,Co=2001,Fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,_r=Math.PI/180,Fs=180/Math.PI;function Rn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function ac(s,e){return(s%e+e)%e}function Kf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jf(s,e,t){return s!==e?(t-s)/(e-s):0}function yr(s,e,t){return(1-t)*s+t*e}function Qf(s,e,t,n){return yr(s,e,1-Math.exp(-t*n))}function ep(s,e=1){return e-Math.abs(ac(s,e*2)-e)}function tp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ip(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sp(s,e){return s+Math.random()*(e-s)}function rp(s){return s*(.5-Math.random())}function op(s){s!==void 0&&(Vh=s);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(s){return s*_r}function lp(s){return s*Fs}function Rl(s){return(s&s-1)===0&&s!==0}function cp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mt={DEG2RAD:_r,RAD2DEG:Fs,generateUUID:Rn,clamp:kt,euclideanModulo:ac,mapLinear:Kf,inverseLerp:Jf,lerp:yr,damp:Qf,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:Rl,ceilPowerOfTwo:cp,floorPowerOfTwo:Po,setQuaternionFromProperEuler:hp,normalize:ot,denormalize:On},me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],S=i[7],P=i[2],T=i[5],R=i[8];return r[0]=a*_+o*v+l*P,r[3]=a*m+o*y+l*T,r[6]=a*p+o*S+l*R,r[1]=c*_+h*v+u*P,r[4]=c*m+h*y+u*T,r[7]=c*p+h*S+u*R,r[2]=d*_+f*v+g*P,r[5]=d*m+f*y+g*T,r[8]=d*p+f*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Fe;function ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function up(){let s=Sr("canvas");return s.style.display="block",s}var Gh={};function vr(s){s in Gh||(Gh[s]=!0,console.warn(s))}var Wh=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[Lt]:{transfer:To,primaries:Ao,toReference:s=>s,fromReference:s=>s},[dt]:{transfer:ut,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ra]:{transfer:To,primaries:Ro,toReference:s=>s.applyMatrix3(Xh),fromReference:s=>s.applyMatrix3(Wh)},[oc]:{transfer:ut,primaries:Ro,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Xh),fromReference:s=>s.applyMatrix3(Wh).convertLinearToSRGB()}},dp=new Set([Lt,ra]),st={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!dp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Xr[e].toReference,i=Xr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Xr[s].primaries},getTransfer:function(s){return s===gn?To:Xr[s].transfer}};function Is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ja(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,Lo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Sr("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Is(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fp=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($a(i[a].image)):r.push($a(i[a]))}else r=$a(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pp=0,zt=class s extends Fn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ln,i=ln,r=Zt,a=xi,o=mn,l=vi,c=s.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Rn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xi?dt:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Xi:rd}set encoding(e){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xi?dt:gn}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Zu;zt.DEFAULT_ANISOTROPY=1;var lt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,S=(f+1)/2,P=(p+1)/2,T=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return y>S&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=D/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends Fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?dt:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Do=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),T=Math.atan2(P,p*v);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}let S=o*v;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new A,qh=new bt,en=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Yr.subVectors(this.max,or),hs.subVectors(e.a,or),us.subVectors(e.b,or),ds.subVectors(e.c,or),hi.subVectors(us,hs),ui.subVectors(ds,us),Ui.subVectors(hs,ds);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ui.z,Ui.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ui.z,0,-Ui.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ui.y,Ui.x,0];return!Ka(t,hs,us,ds,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,hs,us,ds,Yr))?!1:(jr.crossVectors(hi,ui),t=[jr.x,jr.y,jr.z],Ka(t,hs,us,ds,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new A,new A,new A,new A,new A,new A,new A,new A],En=new A,qr=new en,hs=new A,us=new A,ds=new A,hi=new A,ui=new A,Ui=new A,or=new A,Yr=new A,jr=new A,Oi=new A;function Ka(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);let o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mp=new en,ar=new A,Ja=new A,cn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ja)),this.expandByPoint(ar.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new A,Qa=new A,$r=new A,di=new A,el=new A,Zr=new A,tl=new A,bi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Qa);let r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=di.dot(this.direction),l=-di.dot($r),c=di.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector($r,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,r){el.subVectors(t,e),Zr.subVectors(n,e),tl.crossVectors(el,Zr);let a=this.direction.dot(tl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);let l=o*this.direction.dot(Zr.crossVectors(di,Zr));if(l<0)return null;let c=o*this.direction.dot(el.cross(di));if(c<0||l+c>a)return null;let h=-o*di.dot(tl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){let i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),fi.crossVectors(n,rn),fi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),fi.crossVectors(n,rn)),fi.normalize(),Kr.crossVectors(rn,fi),i[0]=fi.x,i[4]=Kr.x,i[8]=rn.x,i[1]=fi.y,i[5]=Kr.y,i[9]=rn.y,i[2]=fi.z,i[6]=Kr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],S=n[11],P=n[15],T=i[0],R=i[4],D=i[8],x=i[12],w=i[1],B=i[5],q=i[9],Q=i[13],I=i[2],O=i[6],W=i[10],Y=i[14],U=i[3],k=i[7],j=i[11],ee=i[15];return r[0]=a*T+o*w+l*I+c*U,r[4]=a*R+o*B+l*O+c*k,r[8]=a*D+o*q+l*W+c*j,r[12]=a*x+o*Q+l*Y+c*ee,r[1]=h*T+u*w+d*I+f*U,r[5]=h*R+u*B+d*O+f*k,r[9]=h*D+u*q+d*W+f*j,r[13]=h*x+u*Q+d*Y+f*ee,r[2]=g*T+_*w+m*I+p*U,r[6]=g*R+_*B+m*O+p*k,r[10]=g*D+_*q+m*W+p*j,r[14]=g*x+_*Q+m*Y+p*ee,r[3]=v*T+y*w+S*I+P*U,r[7]=v*R+y*B+S*O+P*k,r[11]=v*D+y*q+S*W+P*j,r[15]=v*x+y*Q+S*Y+P*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,S=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*v+n*y+i*S+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=v*R,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=y*R,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=S*R,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=P*R,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,v=l*c,y=l*h,S=l*u,P=n.x,T=n.y,R=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+S)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=fs.set(i[0],i[1],i[2]).length(),a=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);let c=1/r,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ti){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Co)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ti){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h,g,_;if(o===ti)g=(a+r)*u,_=-2*u;else if(o===Co)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new A,wn=new Xe,gp=new A(0,0,0),_p=new A(1,1,1),fi=new A,Kr=new A,rn=new A,Yh=new Xe,jh=new bt,ks=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ks.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,$h=new A,ps=new bt,$n=new Xe,Jr=new A,lr=new A,vp=new A,xp=new bt,Zh=new A(1,0,0),Kh=new A(0,1,0),Jh=new A(0,0,1),bp={type:"added"},Mp={type:"removed"},ft=class s extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new A,t=new ks,n=new bt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Fe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(lr,Jr,this.up):$n.lookAt(Jr,lr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ps.setFromRotationMatrix($n),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ft.DEFAULT_UP=new A(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new A,Zn=new A,nl=new A,Kn=new A,ms=new A,gs=new A,Qh=new A,il=new A,sl=new A,rl=new A,Qr=!1,Vi=class s{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Zn.subVectors(n,t),nl.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Zn),l=Tn.dot(nl),c=Zn.dot(Zn),h=Zn.dot(nl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Zn.subVectors(e,t),Tn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ms.subVectors(i,n),gs.subVectors(r,n),il.subVectors(e,n);let l=ms.dot(il),c=gs.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,i);let h=ms.dot(sl),u=gs.dot(sl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ms,a);rl.subVectors(e,r);let f=ms.dot(rl),g=gs.dot(rl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Qh,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=ac(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return st.fromWorkingColorSpace(Wt.copy(this),e),Math.round(kt(Wt.r*255,0,255))*65536+Math.round(kt(Wt.g*255,0,255))*256+Math.round(kt(Wt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=dt){st.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(eo);let n=yr(pi.h,eo.h,t),i=yr(pi.s,eo.s,t),r=yr(pi.l,eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Ee;Ee.NAMES=cd;var Sp=0,tn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ls,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wt=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new A,to=new me,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}};var Uo=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oo=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ep=0,pn=new Xe,al=new ft,_s=new A,on=new en,cr=new en,Ot=new A,pt=class s extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?Oo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(on.min,cr.min),on.expandByPoint(Ot),Ot.addVectors(on.max,cr.max),on.expandByPoint(Ot)):(on.expandByPoint(cr.min),on.expandByPoint(cr.max))}on.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Ot.add(_s)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new A,h[w]=new A;let u=new A,d=new A,f=new A,g=new me,_=new me,m=new me,p=new A,v=new A;function y(w,B,q){u.fromArray(i,w*3),d.fromArray(i,B*3),f.fromArray(i,q*3),g.fromArray(a,w*2),_.fromArray(a,B*2),m.fromArray(a,q*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(Q),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Q),c[w].add(p),c[B].add(p),c[q].add(p),h[w].add(v),h[B].add(v),h[q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,B=S.length;w<B;++w){let q=S[w],Q=q.start,I=q.count;for(let O=Q,W=Q+I;O<W;O+=3)y(n[O+0],n[O+1],n[O+2])}let P=new A,T=new A,R=new A,D=new A;function x(w){R.fromArray(r,w*3),D.copy(R);let B=c[w];P.copy(B),P.sub(R.multiplyScalar(R.dot(B))).normalize(),T.crossVectors(D,B);let Q=T.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=Q}for(let w=0,B=S.length;w<B;++w){let q=S[w],Q=q.start,I=q.count;for(let O=Q,W=Q+I;O<W;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new Xe,Bi=new bi,no=new cn,tu=new A,ys=new A,vs=new A,xs=new A,ll=new A,io=new A,so=new me,ro=new me,oo=new me,nu=new A,iu=new A,su=new A,ao=new A,lo=new A,ve=class extends ft{constructor(e=new pt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ll.fromBufferAttribute(u,e),a?io.addScaledVector(ll,h):io.addScaledVector(ll.sub(t),h))}t.add(io)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(no.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(no,tu)===null||Bi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,P=y;S<P;S+=3){let T=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);i=co(this,p,e,n,c,h,u,T,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);i=co(this,a,e,n,c,h,u,v,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,P=y;S<P;S+=3){let T=S,R=S+1,D=S+2;i=co(this,p,e,n,c,h,u,T,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=m,y=m+1,S=m+2;i=co(this,a,e,n,c,h,u,v,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function wp(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Bn,o),l===null)return null;lo.copy(o),lo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:s}}function co(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ys),s.getVertexPosition(l,vs),s.getVertexPosition(c,xs);let h=wp(s,e,t,n,ys,vs,xs,ao);if(h){i&&(so.fromBufferAttribute(i,o),ro.fromBufferAttribute(i,l),oo.fromBufferAttribute(i,c),h.uv=Vi.getInterpolation(ao,ys,vs,xs,so,ro,oo,new me)),r&&(so.fromBufferAttribute(r,o),ro.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,c),h.uv1=Vi.getInterpolation(ao,ys,vs,xs,so,ro,oo,new me),h.uv2=h.uv1),a&&(nu.fromBufferAttribute(a,o),iu.fromBufferAttribute(a,l),su.fromBufferAttribute(a,c),h.normal=Vi.getInterpolation(ao,ys,vs,xs,nu,iu,su,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};Vi.getNormal(ys,vs,xs,u.normal),h.face=u}return h}var Kt=class s extends pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(_,m,p,v,y,S,P,T,R,D,x){let w=S/R,B=P/D,q=S/2,Q=P/2,I=T/2,O=R+1,W=D+1,Y=0,U=0,k=new A;for(let j=0;j<W;j++){let ee=j*B-Q;for(let ce=0;ce<O;ce++){let X=ce*w-q;k[_]=X*v,k[m]=ee*y,k[p]=I,c.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[p]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(ce/R),u.push(1-j/D),Y+=1}}for(let j=0;j<D;j++)for(let ee=0;ee<R;ee++){let ce=d+ee+O*j,X=d+ee+O*(j+1),$=d+(ee+1)+O*(j+1),le=d+(ee+1)+O*j;l.push(ce,X,le),l.push(X,$,le),U+=6}o.addGroup(f,U,x),f+=U,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){let e={};for(let t=0;t<s.length;t++){let n=zs(s[t]);for(let i in n)e[i]=n[i]}return e}function Tp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hd(s){return s.getRenderTarget()===null?s.outputColorSpace:st.workingColorSpace}var Ap={clone:zs,merge:$t},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends Bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ms=1,Ll=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(bs,Ms,e,t);i.layers=this.layers,this.add(i);let r=new Pt(bs,Ms,e,t);r.layers=this.layers,this.add(r);let a=new Pt(bs,Ms,e,t);a.layers=this.layers,this.add(a);let o=new Pt(bs,Ms,e,t);o.layers=this.layers,this.add(o);let l=new Pt(bs,Ms,e,t);l.layers=this.layers,this.add(l);let c=new Pt(bs,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fo=class extends zt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xi?dt:gn),this.texture=new Fo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Kt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:_i});r.uniforms.tEquirect.value=t;let a=new ve(i,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Zt),new Ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},cl=new A,Pp=new A,Lp=new Fe,An=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=cl.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lp.getNormalMatrix(e),i=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new cn,ho=new A,Er=class{constructor(e=new An,t=new An,n=new An,i=new An,r=new An,a=new An){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+a,d+h,m+g,S+v).normalize(),n[3].setComponents(l-a,d-h,m-g,S-v).normalize(),n[4].setComponents(l-o,d-u,m-_,S-y).normalize(),t===ti)n[5].setComponents(l+o,d+u,m+_,S+y).normalize();else if(t===Co)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ud(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ip(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Hs=class s extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let y=0;y<c;y++){let S=y*u-r;g.push(S,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let y=v+c*p,S=v+c*(p+1),P=v+1+c*(p+1),T=v+1+c*p;f.push(y,S,T),f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Dp,alphahash_pars_fragment:Np,alphamap_fragment:Up,alphamap_pars_fragment:Op,alphatest_fragment:Bp,alphatest_pars_fragment:Fp,aomap_fragment:kp,aomap_pars_fragment:zp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:xm,lightmap_fragment:bm,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Em,lights_pars_begin:wm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Im,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:km,map_fragment:zm,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:jm,morphtarget_vertex:$m,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:yg,skinning_pars_vertex:vg,skinning_vertex:xg,skinnormal_vertex:bg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:Eg,tonemapping_pars_fragment:wg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Ig,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Ug,cube_vert:Og,cube_frag:Bg,depth_vert:Fg,depth_frag:kg,distanceRGBA_vert:zg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:jg,meshlambert_frag:$g,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},re={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Un={basic:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([re.points,re.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([re.common,re.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([re.sprite,re.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([re.lights,re.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Un.physical={uniforms:$t([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var uo={r:0,b:0,g:0};function d_(s,e,t,n,i,r,a){let o=new Ee(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),v=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new ve(new Kt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:zs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ve(new Hs(2,2),new ii({name:"BackgroundMaterial",uniforms:zs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(uo,hd(s)),n.buffers.color.setClear(uo.r,uo.g,uo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function f_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(I,O,W,Y,U){let k=!1;if(a){let j=_(Y,W,O);c!==j&&(c=j,f(c.object)),k=p(I,Y,W,U),k&&v(I,Y,W,U)}else{let j=O.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==j)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=j,k=!0)}U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,D(I,O,W,Y),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,O,W){let Y=W.wireframe===!0,U=o[I.id];U===void 0&&(U={},o[I.id]=U);let k=U[O.id];k===void 0&&(k={},U[O.id]=k);let j=k[Y];return j===void 0&&(j=m(d()),k[Y]=j),j}function m(I){let O=[],W=[],Y=[];for(let U=0;U<i;U++)O[U]=0,W[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,O,W,Y){let U=c.attributes,k=O.attributes,j=0,ee=W.getAttributes();for(let ce in ee)if(ee[ce].location>=0){let $=U[ce],le=k[ce];if(le===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;j++}return c.attributesNum!==j||c.index!==Y}function v(I,O,W,Y){let U={},k=O.attributes,j=0,ee=W.getAttributes();for(let ce in ee)if(ee[ce].location>=0){let $=k[ce];$===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let le={};le.attribute=$,$&&$.data&&(le.data=$.data),U[ce]=le,j++}c.attributes=U,c.attributesNum=j,c.index=Y}function y(){let I=c.newAttributes;for(let O=0,W=I.length;O<W;O++)I[O]=0}function S(I){P(I,0)}function P(I,O){let W=c.newAttributes,Y=c.enabledAttributes,U=c.attributeDivisors;W[I]=1,Y[I]===0&&(s.enableVertexAttribArray(I),Y[I]=1),U[I]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),U[I]=O)}function T(){let I=c.newAttributes,O=c.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==I[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function R(I,O,W,Y,U,k,j){j===!0?s.vertexAttribIPointer(I,O,W,U,k):s.vertexAttribPointer(I,O,W,Y,U,k)}function D(I,O,W,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let U=Y.attributes,k=W.getAttributes(),j=O.defaultAttributeValues;for(let ee in k){let ce=k[ee];if(ce.location>=0){let X=U[ee];if(X===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let $=X.normalized,le=X.itemSize,be=t.get(X);if(be===void 0)continue;let _e=be.buffer,Ue=be.type,Oe=be.bytesPerElement,Re=n.isWebGL2===!0&&(Ue===s.INT||Ue===s.UNSIGNED_INT||X.gpuType===Ku);if(X.isInterleavedBufferAttribute){let Ye=X.data,z=Ye.stride,Bt=X.offset;if(Ye.isInstancedInterleavedBuffer){for(let we=0;we<ce.locationSize;we++)P(ce.location+we,Ye.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let we=0;we<ce.locationSize;we++)S(ce.location+we);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let we=0;we<ce.locationSize;we++)R(ce.location+we,le/ce.locationSize,Ue,$,z*Oe,(Bt+le/ce.locationSize*we)*Oe,Re)}else{if(X.isInstancedBufferAttribute){for(let Ye=0;Ye<ce.locationSize;Ye++)P(ce.location+Ye,X.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ye=0;Ye<ce.locationSize;Ye++)S(ce.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ye=0;Ye<ce.locationSize;Ye++)R(ce.location+Ye,le/ce.locationSize,Ue,$,le*Oe,le/ce.locationSize*Ye*Oe,Re)}}else if(j!==void 0){let $=j[ee];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ce.location,$);break;case 3:s.vertexAttrib3fv(ce.location,$);break;case 4:s.vertexAttrib4fv(ce.location,$);break;default:s.vertexAttrib1fv(ce.location,$)}}}}T()}function x(){q();for(let I in o){let O=o[I];for(let W in O){let Y=O[W];for(let U in Y)g(Y[U].object),delete Y[U];delete O[W]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;let O=o[I.id];for(let W in O){let Y=O[W];for(let U in Y)g(Y[U].object),delete Y[U];delete O[W]}delete o[I.id]}function B(I){for(let O in o){let W=o[O];if(W[I.id]===void 0)continue;let Y=W[I.id];for(let U in Y)g(Y[U].object),delete Y[U];delete W[I.id]}}function q(){Q(),h=!0,c!==l&&(c=l,f(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function p_(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function m_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,S=a||e.has("OES_texture_float"),P=y&&S,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:T}}function g_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new An,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,S=p.clippingState||null;l.value=S,S=h(g,d,y,f);for(let P=0;P!==y;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function __(s){let e=new WeakMap;function t(a,o){return o===El?a.mapping=Ns:o===wl&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===El||o===wl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vs=class extends Bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=4,ru=[.125,.215,.35,.446,.526,.582],Hi=20,hl=new Vs,ou=new Ee,ul=null,dl=0,fl=0,ki=(1+Math.sqrt(5))/2,Ss=1/ki,au=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,ki,Ss),new A(0,ki,-Ss),new A(Ss,0,ki),new A(-Ss,0,ki),new A(ki,Ss,0),new A(-ki,Ss,0)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,fl),e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Mr,format:mn,colorSpace:Lt,depthBuffer:!1},i=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=v_(r,e,t)}return i}_compileMaterial(e){let t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,i){let o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ou),h.toneMapping=yi,h.autoClear=!1;let f=new wt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new ve(new Kt,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(ou),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;fo(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ns||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=au[(i-1)%au.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let p=[],v=0;for(let R=0;R<Hi;++R){let D=R/_,x=Math.exp(-D*D/2);p.push(x),R===0?v+=x:R<m&&(v+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let S=this._sizeLods[i],P=3*S*(i>y-Cs?i-y+Cs:0),T=4*(this._cubeSize-S);fo(t,P,T,3*S,2*S),l.setRenderTarget(t),l.render(u,hl)}};function y_(s){let e=[],t=[],n=[],i=s,r=s-Cs+1+ru.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Cs?l=ru[a-s+Cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,D=T>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(x,_*g*T),y.set(d,m*g*T);let w=[T,T,T,T,T,T];S.set(w,p*g*T)}let P=new pt;P.setAttribute("position",new Et(v,_)),P.setAttribute("uv",new Et(y,m)),P.setAttribute("faceIndex",new Et(S,p)),e.push(P),i>Cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lu(s,e,t){let n=new ni(s,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function v_(s,e,t){let n=new Float32Array(Hi),i=new A(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function cu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===El||l===wl,h=l===Ns||l===Us;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Gs(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Gs(s));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function b_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M_(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let y=0,S=v.length;y<S;y+=3){let P=v[y+0],T=v[y+1],R=v[y+2];d.push(P,T,T,R,R,P)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){let P=y+0,T=y+1,R=y+2;d.push(P,T,T,R,R,P)}}else return;let m=new(ld(d)?Oo:Uo)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function S_(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function E_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w_(s,e){return s[0]-e[0]}function T_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function A_(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let I=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],D=0;v===!0&&(D=1),y===!0&&(D=2),S===!0&&(D=3);let x=h.attributes.position.count*D,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let B=new Float32Array(x*w*4*g),q=new Do(B,x,w,g);q.type=ei,q.needsUpdate=!0;let Q=D*4;for(let O=0;O<g;O++){let W=P[O],Y=T[O],U=R[O],k=x*w*4*O;for(let j=0;j<W.count;j++){let ee=j*Q;v===!0&&(a.fromBufferAttribute(W,j),B[k+ee+0]=a.x,B[k+ee+1]=a.y,B[k+ee+2]=a.z,B[k+ee+3]=0),y===!0&&(a.fromBufferAttribute(Y,j),B[k+ee+4]=a.x,B[k+ee+5]=a.y,B[k+ee+6]=a.z,B[k+ee+7]=0),S===!0&&(a.fromBufferAttribute(U,j),B[k+ee+8]=a.x,B[k+ee+9]=a.y,B[k+ee+10]=a.z,B[k+ee+11]=U.itemSize===4?a.w:1)}}_={count:g,texture:q,size:new me(x,w)},r.set(h,_),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<f;y++){let S=g[y];S[0]=y,S[1]=d[y]}g.sort(T_);for(let y=0;y<8;y++)y<f&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(w_);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let S=o[y],P=S[0],T=S[1];P!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+y)!==_[P]&&h.setAttribute("morphTarget"+y,_[P]),m&&h.getAttribute("morphNormal"+y)!==m[P]&&h.setAttribute("morphNormal"+y,m[P]),i[y]=T,p+=T):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function R_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ko=class extends zt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Wi,h!==Wi&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=mi),n===void 0&&h===Os&&(n=Gi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dd=new zt,fd=new ko(1,1);fd.compareFunction=ad;var pd=new Do,md=new Pl,gd=new Fo,uu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Zs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=uu[i];if(r===void 0&&(r=new Float32Array(i),uu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oa(s,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function C_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function D_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;mu.set(n),s.uniformMatrix2fv(this.addr,!1,mu),Dt(t,n)}}function N_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;pu.set(n),s.uniformMatrix3fv(this.addr,!1,pu),Dt(t,n)}}function U_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;fu.set(n),s.uniformMatrix4fv(this.addr,!1,fu),Dt(t,n)}}function O_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function B_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function F_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function k_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function z_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function H_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function V_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function W_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?fd:dd;t.setTexture2D(e||r,i)}function X_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||md,i)}function q_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gd,i)}function Y_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pd,i)}function j_(s){switch(s){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return F_;case 35669:case 35673:return k_;case 5125:return z_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function $_(s,e){s.uniform1fv(this.addr,e)}function Z_(s,e){let t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function K_(s,e){let t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function J_(s,e){let t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Q_(s,e){let t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function e0(s,e){let t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function t0(s,e){let t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function n0(s,e){s.uniform1iv(this.addr,e)}function i0(s,e){s.uniform2iv(this.addr,e)}function s0(s,e){s.uniform3iv(this.addr,e)}function r0(s,e){s.uniform4iv(this.addr,e)}function o0(s,e){s.uniform1uiv(this.addr,e)}function a0(s,e){s.uniform2uiv(this.addr,e)}function l0(s,e){s.uniform3uiv(this.addr,e)}function c0(s,e){s.uniform4uiv(this.addr,e)}function h0(s,e,t){let n=this.cache,i=e.length,r=oa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||dd,r[a])}function u0(s,e,t){let n=this.cache,i=e.length,r=oa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||md,r[a])}function d0(s,e,t){let n=this.cache,i=e.length,r=oa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gd,r[a])}function f0(s,e,t){let n=this.cache,i=e.length,r=oa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pd,r[a])}function p0(s){switch(s){case 5126:return $_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}var Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j_(t.type)}},Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}},Ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function gu(s,e){s.seq.push(e),s.map[e.id]=e}function m0(s,e,t){let n=s.name,i=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),a=pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gu(t,c===void 0?new Dl(o,s,e):new Nl(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ul(o),gu(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);m0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function _u(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var g0=37297,_0=0;function y0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function v0(s){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(s),n;switch(e===t?n="":e===Ro&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),s){case Lt:case ra:return[n,"LinearTransferOETF"];case dt:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function yu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+y0(s.getShaderSource(e),a)}else return i}function x0(s,e){let t=v0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b0(s,e){let t;switch(e){case Tf:t="Linear";break;case Af:t="Reinhard";break;case Rf:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case Pf:t="AgX";break;case Cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function S0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function E0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ps(s){return s!==""}function vu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(T0,R0)}var A0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function R0(s,e){let t=Ve[e];if(t===void 0){let n=A0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(s){return s.replace(C0,P0)}function P0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function I0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function N0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case Ef:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function U0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O0(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=L0(t),c=I0(t),h=D0(t),u=N0(t),d=U0(t),f=t.isWebGL2?"":M0(t),g=S0(t),_=E0(r),m=i.createProgram(),p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),v.length>0&&(v+=`
`)):(p=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),v=[f,Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==yi?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Ol(a),a=vu(a,t),a=xu(a,t),o=Ol(o),o=vu(o,t),o=xu(o,t),a=bu(a),o=bu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=y+p+a,P=y+v+o,T=_u(i,i.VERTEX_SHADER,S),R=_u(i,i.FRAGMENT_SHADER,P);i.attachShader(m,T),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(q){if(s.debug.checkShaderErrors){let Q=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(R).trim(),W=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,R);else{let U=yu(i,T,"vertex"),k=yu(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+U+`
`+k)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||O==="")&&(Y=!1);Y&&(q.diagnostics={runnable:W,programLog:Q,vertexShader:{log:I,prefix:p},fragmentShader:{log:O,prefix:v}})}i.deleteShader(T),i.deleteShader(R),x=new Ds(i,m),w=w0(i,m)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,g0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var B0=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}};function F0(s,e,t,n,i,r,a){let o=new No,l=new Bl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,w,B,q,Q){let I=q.fog,O=Q.geometry,W=x.isMeshStandardMaterial?q.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),U=Y&&Y.mapping===ia?Y.image.height:null,k=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=j!==void 0?j.length:0,ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let X,$,le,be;if(k){let Mt=Un[k];X=Mt.vertexShader,$=Mt.fragmentShader}else X=x.vertexShader,$=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),be=l.getFragmentShaderID(x);let _e=s.getRenderTarget(),Ue=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,Re=!!x.map,Ye=!!x.matcap,z=!!Y,Bt=!!x.aoMap,we=!!x.lightMap,Le=!!x.bumpMap,pe=!!x.normalMap,ht=!!x.displacementMap,ke=!!x.emissiveMap,E=!!x.metalnessMap,b=!!x.roughnessMap,F=x.anisotropy>0,te=x.clearcoat>0,K=x.iridescence>0,ne=x.sheen>0,ge=x.transmission>0,ae=F&&!!x.anisotropyMap,fe=te&&!!x.clearcoatMap,Ae=te&&!!x.clearcoatNormalMap,ze=te&&!!x.clearcoatRoughnessMap,Z=K&&!!x.iridescenceMap,nt=K&&!!x.iridescenceThicknessMap,Ge=ne&&!!x.sheenColorMap,Ie=ne&&!!x.sheenRoughnessMap,Se=!!x.specularMap,he=!!x.specularColorMap,C=!!x.specularIntensityMap,ie=ge&&!!x.transmissionMap,ye=ge&&!!x.thicknessMap,de=!!x.gradientMap,J=!!x.alphaMap,L=x.alphaTest>0,se=!!x.alphaHash,oe=!!x.extensions,Ce=!!O.attributes.uv1,Te=!!O.attributes.uv2,je=!!O.attributes.uv3,$e=yi;return x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:h,shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:$,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Oe,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Lt,map:Re,matcap:Ye,envMap:z,envMapMode:z&&Y.mapping,envMapCubeUVHeight:U,aoMap:Bt,lightMap:we,bumpMap:Le,normalMap:pe,displacementMap:d&&ht,emissiveMap:ke,normalMapObjectSpace:pe&&x.normalMapType===Gf,normalMapTangentSpace:pe&&x.normalMapType===od,metalnessMap:E,roughnessMap:b,anisotropy:F,anisotropyMap:ae,clearcoat:te,clearcoatMap:fe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:K,iridescenceMap:Z,iridescenceThicknessMap:nt,sheen:ne,sheenColorMap:Ge,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:he,specularIntensityMap:C,transmission:ge,transmissionMap:ie,thicknessMap:ye,gradientMap:de,opaque:x.transparent===!1&&x.blending===Ls,alphaMap:J,alphaTest:L,alphaHash:se,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:Bt&&_(x.aoMap.channel),lightMapUv:we&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:pe&&_(x.normalMap.channel),displacementMapUv:ht&&_(x.displacementMap.channel),emissiveMapUv:ke&&_(x.emissiveMap.channel),metalnessMapUv:E&&_(x.metalnessMap.channel),roughnessMapUv:b&&_(x.roughnessMap.channel),anisotropyMapUv:ae&&_(x.anisotropyMap.channel),clearcoatMapUv:fe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(x.sheenRoughnessMap.channel),specularMapUv:Se&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:C&&_(x.specularIntensityMap.channel),transmissionMapUv:ie&&_(x.transmissionMap.channel),thicknessMapUv:ye&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:je,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Re||J),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(v(w,x),y(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){let w=g[x.type],B;if(w){let q=Un[w];B=Ap.clone(q.uniforms)}else B=x.uniforms;return B}function P(x,w){let B;for(let q=0,Q=c.length;q<Q;q++){let I=c[q];if(I.cacheKey===w){B=I,++B.usedTimes;break}}return B===void 0&&(B=new O0(s,w,x,r),c.push(B)),B}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:D}}function k0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function z0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Su(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||z0),n.length>1&&n.sort(d||Su),i.length>1&&i.sort(d||Su)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function H0(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Eu,s.set(n,[a])):i>=r.length?(a=new Eu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function V0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function G0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var W0=0;function X0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function q0(s,e){let t=new V0,n=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);let r=new A,a=new Xe,o=new Xe;function l(h,u){let d=0,f=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,m=0,p=0,v=0,y=0,S=0,P=0,T=0,R=0,D=0,x=0;h.sort(X0);let w=u===!0?Math.PI:1;for(let q=0,Q=h.length;q<Q;q++){let I=h[q],O=I.color,W=I.intensity,Y=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*W*w,f+=O.g*W*w,g+=O.b*W*w;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],W);x++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let j=I.shadow,ee=n.get(I);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=U,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=k,_++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(O).multiplyScalar(W*w),k.distance=Y,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[p]=k;let j=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,j.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[p]=j.matrix,I.castShadow){let ee=n.get(I);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=U,T++}p++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(O).multiplyScalar(W),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=k,v++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*w),k.distance=I.distance,k.decay=I.decay,I.castShadow){let j=I.shadow,ee=n.get(I);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=I.shadow.matrix,P++}i.point[m]=k,m++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(W*w),k.groundColor.copy(I.groundColor).multiplyScalar(W*w),i.hemi[y]=k,y++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let B=i.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==v||B.hemiLength!==y||B.numDirectionalShadows!==S||B.numPointShadows!==P||B.numSpotShadows!==T||B.numSpotMaps!==R||B.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=x,B.directionalLength=_,B.pointLength=m,B.spotLength=p,B.rectAreaLength=v,B.hemiLength=y,B.numDirectionalShadows=S,B.numPointShadows=P,B.numSpotShadows=T,B.numSpotMaps=R,B.numLightProbes=x,i.version=W0++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){let S=h[v];if(S.isDirectionalLight){let P=i.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),d++}else if(S.isSpotLight){let P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let P=i.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let P=i.point[f];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let P=i.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function wu(s,e){let t=new q0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y0(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new wu(s,e),t.set(r,[l])):a>=o.length?(l=new wu(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var kl=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z0(s,e,t){let n=new Er,i=new me,r=new me,a=new lt,o=new kl({depthPacking:Vf}),l=new zl,c={},h=t.maxTextureSize,u={[Bn]:Xt,[Xt]:Bn,[an]:an},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:j0,fragmentShader:$0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let x=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),q=s.state;q.setBlending(_i),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Q=p!==Qn&&this.type===Qn,I=p===Qn&&this.type!==Qn;for(let O=0,W=T.length;O<W;O++){let Y=T[O],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let k=U.getFrameExtents();if(i.multiply(k),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,U.mapSize.y=r.y)),U.map===null||Q===!0||I===!0){let ee=this.type!==Qn?{minFilter:Ct,magFilter:Ct}:{};U.map!==null&&U.map.dispose(),U.map=new ni(i.x,i.y,ee),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();let j=U.getViewportCount();for(let ee=0;ee<j;ee++){let ce=U.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),q.viewport(a),U.updateMatrices(Y,ee),n=U.getFrustum(),S(R,D,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===Qn&&v(U,D),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,w,B)};function v(T,R){let D=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,D,f,_,null)}function y(T,R,D,x){let w=null,B=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)w=B;else if(w=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=w.uuid,Q=R.uuid,I=c[q];I===void 0&&(I={},c[q]=I);let O=I[Q];O===void 0&&(O=w.clone(),I[Q]=O,R.addEventListener("dispose",P)),w=O}if(w.visible=R.visible,w.wireframe=R.wireframe,x===Qn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=s.properties.get(w);q.light=D}return w}function S(T,R,D,x,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let Q=e.update(T),I=T.material;if(Array.isArray(I)){let O=Q.groups;for(let W=0,Y=O.length;W<Y;W++){let U=O[W],k=I[U.materialIndex];if(k&&k.visible){let j=y(T,k,x,w);T.onBeforeShadow(s,T,R,D,Q,j,U),s.renderBufferDirect(D,null,Q,j,T,U),T.onAfterShadow(s,T,R,D,Q,j,U)}}}else if(I.visible){let O=y(T,I,x,w);T.onBeforeShadow(s,T,R,D,Q,O,null),s.renderBufferDirect(D,null,Q,O,T,null),T.onAfterShadow(s,T,R,D,Q,O,null)}}let q=T.children;for(let Q=0,I=q.length;Q<I;Q++)S(q[Q],R,D,x,w)}function P(T){T.target.removeEventListener("dispose",P);for(let D in c){let x=c[D],w=T.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function K0(s,e,t){let n=t.isWebGL2;function i(){let L=!1,se=new lt,oe=null,Ce=new lt(0,0,0,0);return{setMask:function(Te){oe!==Te&&!L&&(s.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){L=Te},setClear:function(Te,je,$e,yt,Mt){Mt===!0&&(Te*=yt,je*=yt,$e*=yt),se.set(Te,je,$e,yt),Ce.equals(se)===!1&&(s.clearColor(Te,je,$e,yt),Ce.copy(se))},reset:function(){L=!1,oe=null,Ce.set(-1,0,0,0)}}}function r(){let L=!1,se=null,oe=null,Ce=null;return{setTest:function(Te){Te?Oe(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Te){se!==Te&&!L&&(s.depthMask(Te),se=Te)},setFunc:function(Te){if(oe!==Te){switch(Te){case _f:s.depthFunc(s.NEVER);break;case yf:s.depthFunc(s.ALWAYS);break;case vf:s.depthFunc(s.LESS);break;case Eo:s.depthFunc(s.LEQUAL);break;case xf:s.depthFunc(s.EQUAL);break;case bf:s.depthFunc(s.GEQUAL);break;case Mf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Te}},setLocked:function(Te){L=Te},setClear:function(Te){Ce!==Te&&(s.clearDepth(Te),Ce=Te)},reset:function(){L=!1,se=null,oe=null,Ce=null}}}function a(){let L=!1,se=null,oe=null,Ce=null,Te=null,je=null,$e=null,yt=null,Mt=null;return{setTest:function(tt){L||(tt?Oe(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(tt){se!==tt&&!L&&(s.stencilMask(tt),se=tt)},setFunc:function(tt,Tt,In){(oe!==tt||Ce!==Tt||Te!==In)&&(s.stencilFunc(tt,Tt,In),oe=tt,Ce=Tt,Te=In)},setOp:function(tt,Tt,In){(je!==tt||$e!==Tt||yt!==In)&&(s.stencilOp(tt,Tt,In),je=tt,$e=Tt,yt=In)},setLocked:function(tt){L=tt},setClear:function(tt){Mt!==tt&&(s.clearStencil(tt),Mt=tt)},reset:function(){L=!1,se=null,oe=null,Ce=null,Te=null,je=null,$e=null,yt=null,Mt=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,y=null,S=null,P=null,T=null,R=null,D=null,x=new Ee(0,0,0),w=0,B=!1,q=null,Q=null,I=null,O=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,k=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=k>=2);let ee=null,ce={},X=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new lt().fromArray(X),be=new lt().fromArray($);function _e(L,se,oe,Ce){let Te=new Uint8Array(4),je=s.createTexture();s.bindTexture(L,je),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<oe;$e++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(se+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return je}let Ue={};Ue[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(s.DEPTH_TEST),l.setFunc(Eo),ke(!1),E(rh),Oe(s.CULL_FACE),pe(_i);function Oe(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ye(L,se){return f[L]!==se?(s.bindFramebuffer(L,se),f[L]=se,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function z(L,se){let oe=_,Ce=!1;if(L)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),L.isWebGLMultipleRenderTargets){let Te=L.texture;if(oe.length!==Te.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let je=0,$e=Te.length;je<$e;je++)oe[je]=s.COLOR_ATTACHMENT0+je;oe.length=Te.length,Ce=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Ce=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Ce=!0);Ce&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Bt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let we={[zi]:s.FUNC_ADD,[tf]:s.FUNC_SUBTRACT,[nf]:s.FUNC_REVERSE_SUBTRACT};if(n)we[ch]=s.MIN,we[hh]=s.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(we[ch]=L.MIN_EXT,we[hh]=L.MAX_EXT)}let Le={[sf]:s.ZERO,[rf]:s.ONE,[of]:s.SRC_COLOR,[Ml]:s.SRC_ALPHA,[df]:s.SRC_ALPHA_SATURATE,[hf]:s.DST_COLOR,[lf]:s.DST_ALPHA,[af]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[uf]:s.ONE_MINUS_DST_COLOR,[cf]:s.ONE_MINUS_DST_ALPHA,[ff]:s.CONSTANT_COLOR,[pf]:s.ONE_MINUS_CONSTANT_COLOR,[mf]:s.CONSTANT_ALPHA,[gf]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(L,se,oe,Ce,Te,je,$e,yt,Mt,tt){if(L===_i){p===!0&&(Re(s.BLEND),p=!1);return}if(p===!1&&(Oe(s.BLEND),p=!0),L!==ef){if(L!==v||tt!==B){if((y!==zi||T!==zi)&&(s.blendEquation(s.FUNC_ADD),y=zi,T=zi),tt)switch(L){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oh:s.blendFunc(s.ONE,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,P=null,R=null,D=null,x.set(0,0,0),w=0,v=L,B=tt}return}Te=Te||se,je=je||oe,$e=$e||Ce,(se!==y||Te!==T)&&(s.blendEquationSeparate(we[se],we[Te]),y=se,T=Te),(oe!==S||Ce!==P||je!==R||$e!==D)&&(s.blendFuncSeparate(Le[oe],Le[Ce],Le[je],Le[$e]),S=oe,P=Ce,R=je,D=$e),(yt.equals(x)===!1||Mt!==w)&&(s.blendColor(yt.r,yt.g,yt.b,Mt),x.copy(yt),w=Mt),v=L,B=!1}function ht(L,se){L.side===an?Re(s.CULL_FACE):Oe(s.CULL_FACE);let oe=L.side===Xt;se&&(oe=!oe),ke(oe),L.blending===Ls&&L.transparent===!1?pe(_i):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){q!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),q=L)}function E(L){L!==Kd?(Oe(s.CULL_FACE),L!==Q&&(L===rh?s.cullFace(s.BACK):L===Jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),Q=L}function b(L){L!==I&&(U&&s.lineWidth(L),I=L)}function F(L,se,oe){L?(Oe(s.POLYGON_OFFSET_FILL),(O!==se||W!==oe)&&(s.polygonOffset(se,oe),O=se,W=oe)):Re(s.POLYGON_OFFSET_FILL)}function te(L){L?Oe(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function K(L){L===void 0&&(L=s.TEXTURE0+Y-1),ee!==L&&(s.activeTexture(L),ee=L)}function ne(L,se,oe){oe===void 0&&(ee===null?oe=s.TEXTURE0+Y-1:oe=ee);let Ce=ce[oe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ce[oe]=Ce),(Ce.type!==L||Ce.texture!==se)&&(ee!==oe&&(s.activeTexture(oe),ee=oe),s.bindTexture(L,se||Ue[L]),Ce.type=L,Ce.texture=se)}function ge(){let L=ce[ee];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(L){le.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ie(L){be.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function ye(L,se){let oe=u.get(se);oe===void 0&&(oe=new WeakMap,u.set(se,oe));let Ce=oe.get(L);Ce===void 0&&(Ce=s.getUniformBlockIndex(se,L.name),oe.set(L,Ce))}function de(L,se){let Ce=u.get(se).get(L);h.get(se)!==Ce&&(s.uniformBlockBinding(se,Ce,L.__bindingPointIndex),h.set(se,Ce))}function J(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,ce={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,y=null,S=null,P=null,T=null,R=null,D=null,x=new Ee(0,0,0),w=0,B=!1,q=null,Q=null,I=null,O=null,W=null,le.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:Ye,drawBuffers:z,useProgram:Bt,setBlending:pe,setMaterial:ht,setFlipSided:ke,setCullFace:E,setLineWidth:b,setPolygonOffset:F,setScissorTest:te,activeTexture:K,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:Se,texImage3D:he,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:Ge,texStorage3D:Ie,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:C,viewport:ie,reset:J}}function J0(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return f?new OffscreenCanvas(E,b):Sr("canvas")}function _(E,b,F,te){let K=1;if((E.width>te||E.height>te)&&(K=te/Math.max(E.width,E.height)),K<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ne=b?Po:Math.floor,ge=ne(K*E.width),ae=ne(K*E.height);u===void 0&&(u=g(ge,ae));let fe=F?g(ge,ae):u;return fe.width=ge,fe.height=ae,fe.getContext("2d").drawImage(E,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+ae+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Rl(E.width)&&Rl(E.height)}function p(E){return o?!1:E.wrapS!==ln||E.wrapT!==ln||E.minFilter!==Ct&&E.minFilter!==Zt}function v(E,b){return E.generateMipmaps&&b&&E.minFilter!==Ct&&E.minFilter!==Zt}function y(E){s.generateMipmap(E)}function S(E,b,F,te,K=!1){if(o===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=b;if(b===s.RED&&(F===s.FLOAT&&(ne=s.R32F),F===s.HALF_FLOAT&&(ne=s.R16F),F===s.UNSIGNED_BYTE&&(ne=s.R8)),b===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ne=s.R8UI),F===s.UNSIGNED_SHORT&&(ne=s.R16UI),F===s.UNSIGNED_INT&&(ne=s.R32UI),F===s.BYTE&&(ne=s.R8I),F===s.SHORT&&(ne=s.R16I),F===s.INT&&(ne=s.R32I)),b===s.RG&&(F===s.FLOAT&&(ne=s.RG32F),F===s.HALF_FLOAT&&(ne=s.RG16F),F===s.UNSIGNED_BYTE&&(ne=s.RG8)),b===s.RGBA){let ge=K?To:st.getTransfer(te);F===s.FLOAT&&(ne=s.RGBA32F),F===s.HALF_FLOAT&&(ne=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ne=ge===ut?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(E,b,F){return v(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){return E===Ct||E===wo||E===gr?s.NEAREST:s.LINEAR}function R(E){let b=E.target;b.removeEventListener("dispose",R),x(b),b.isVideoTexture&&h.delete(b)}function D(E){let b=E.target;b.removeEventListener("dispose",D),B(b)}function x(E){let b=n.get(E);if(b.__webglInit===void 0)return;let F=E.source,te=d.get(F);if(te){let K=te[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys(te).length===0&&d.delete(F)}n.remove(E)}function w(E){let b=n.get(E);s.deleteTexture(b.__webglTexture);let F=E.source,te=d.get(F);delete te[b.__cacheKey],a.memory.textures--}function B(E){let b=E.texture,F=n.get(E),te=n.get(b);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let ne=0;ne<F.__webglFramebuffer[K].length;ne++)s.deleteFramebuffer(F.__webglFramebuffer[K][ne]);else s.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)s.deleteFramebuffer(F.__webglFramebuffer[K]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,ne=b.length;K<ne;K++){let ge=n.get(b[K]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(b[K])}n.remove(b),n.remove(E)}let q=0;function Q(){q=0}function I(){let E=q;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),q+=1,E}function O(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function W(E,b){let F=n.get(E);if(E.isVideoTexture&&ht(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(F,E,b);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+b)}function Y(E,b){let F=n.get(E);if(E.version>0&&F.__version!==E.version){le(F,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+b)}function U(E,b){let F=n.get(E);if(E.version>0&&F.__version!==E.version){le(F,E,b);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+b)}function k(E,b){let F=n.get(E);if(E.version>0&&F.__version!==E.version){be(F,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+b)}let j={[qi]:s.REPEAT,[ln]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},ee={[Ct]:s.NEAREST,[wo]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[sc]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},ce={[Wf]:s.NEVER,[Zf]:s.ALWAYS,[Xf]:s.LESS,[ad]:s.LEQUAL,[qf]:s.EQUAL,[$f]:s.GEQUAL,[Yf]:s.GREATER,[jf]:s.NOTEQUAL};function X(E,b,F){if(F?(s.texParameteri(E,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ee[b.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==ln||b.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Ct&&b.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ct||b.minFilter!==gr&&b.minFilter!==xi||b.type===ei&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function $(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R));let te=b.source,K=d.get(te);K===void 0&&(K={},d.set(te,K));let ne=O(b);if(ne!==E.__cacheKey){K[ne]===void 0&&(K[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[ne].usedTimes++;let ge=K[E.__cacheKey];ge!==void 0&&(K[E.__cacheKey].usedTimes--,ge.usedTimes===0&&w(b)),E.__cacheKey=ne,E.__webglTexture=K[ne].texture}return F}function le(E,b,F){let te=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=s.TEXTURE_3D);let K=$(E,b),ne=b.source;t.bindTexture(te,E.__webglTexture,s.TEXTURE0+F);let ge=n.get(ne);if(ne.version!==ge.__version||K===!0){t.activeTexture(s.TEXTURE0+F);let ae=st.getPrimaries(st.workingColorSpace),fe=b.colorSpace===gn?null:st.getPrimaries(b.colorSpace),Ae=b.colorSpace===gn||ae===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ze=p(b)&&m(b.image)===!1,Z=_(b.image,ze,!1,i.maxTextureSize);Z=ke(b,Z);let nt=m(Z)||o,Ge=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Se=S(b.internalFormat,Ge,Ie,b.colorSpace,b.isVideoTexture);X(te,b,nt);let he,C=b.mipmaps,ie=o&&b.isVideoTexture!==!0&&Se!==id,ye=ge.__version===void 0||K===!0,de=P(b,Z,nt);if(b.isDepthTexture)Se=s.DEPTH_COMPONENT,o?b.type===ei?Se=s.DEPTH_COMPONENT32F:b.type===mi?Se=s.DEPTH_COMPONENT24:b.type===Gi?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:b.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Wi&&Se===s.DEPTH_COMPONENT&&b.type!==rc&&b.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=mi,Ie=r.convert(b.type)),b.format===Os&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,b.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Gi,Ie=r.convert(b.type))),ye&&(ie?t.texStorage2D(s.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,Ge,Ie,null));else if(b.isDataTexture)if(C.length>0&&nt){ie&&ye&&t.texStorage2D(s.TEXTURE_2D,de,Se,C[0].width,C[0].height);for(let J=0,L=C.length;J<L;J++)he=C[J],ie?t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,Ge,Ie,he.data):t.texImage2D(s.TEXTURE_2D,J,Se,he.width,he.height,0,Ge,Ie,he.data);b.generateMipmaps=!1}else ie?(ye&&t.texStorage2D(s.TEXTURE_2D,de,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Ge,Ie,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,Ge,Ie,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Se,C[0].width,C[0].height,Z.depth);for(let J=0,L=C.length;J<L;J++)he=C[J],b.format!==mn?Ge!==null?ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Z.depth,Ge,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Se,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Z.depth,Ge,Ie,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Se,he.width,he.height,Z.depth,0,Ge,Ie,he.data)}else{ie&&ye&&t.texStorage2D(s.TEXTURE_2D,de,Se,C[0].width,C[0].height);for(let J=0,L=C.length;J<L;J++)he=C[J],b.format!==mn?Ge!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,Ge,Ie,he.data):t.texImage2D(s.TEXTURE_2D,J,Se,he.width,he.height,0,Ge,Ie,he.data)}else if(b.isDataArrayTexture)ie?(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Ie,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,Ge,Ie,Z.data);else if(b.isData3DTexture)ie?(ye&&t.texStorage3D(s.TEXTURE_3D,de,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Ie,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,Ge,Ie,Z.data);else if(b.isFramebufferTexture){if(ye)if(ie)t.texStorage2D(s.TEXTURE_2D,de,Se,Z.width,Z.height);else{let J=Z.width,L=Z.height;for(let se=0;se<de;se++)t.texImage2D(s.TEXTURE_2D,se,Se,J,L,0,Ge,Ie,null),J>>=1,L>>=1}}else if(C.length>0&&nt){ie&&ye&&t.texStorage2D(s.TEXTURE_2D,de,Se,C[0].width,C[0].height);for(let J=0,L=C.length;J<L;J++)he=C[J],ie?t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ge,Ie,he):t.texImage2D(s.TEXTURE_2D,J,Se,Ge,Ie,he);b.generateMipmaps=!1}else ie?(ye&&t.texStorage2D(s.TEXTURE_2D,de,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Ie,Z)):t.texImage2D(s.TEXTURE_2D,0,Se,Ge,Ie,Z);v(b,nt)&&y(te),ge.__version=ne.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function be(E,b,F){if(b.image.length!==6)return;let te=$(E,b),K=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);let ne=n.get(K);if(K.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+F);let ge=st.getPrimaries(st.workingColorSpace),ae=b.colorSpace===gn?null:st.getPrimaries(b.colorSpace),fe=b.colorSpace===gn||ge===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!Ae&&!ze?Z[J]=_(b.image[J],!1,!0,i.maxCubemapSize):Z[J]=ze?b.image[J].image:b.image[J],Z[J]=ke(b,Z[J]);let nt=Z[0],Ge=m(nt)||o,Ie=r.convert(b.format,b.colorSpace),Se=r.convert(b.type),he=S(b.internalFormat,Ie,Se,b.colorSpace),C=o&&b.isVideoTexture!==!0,ie=ne.__version===void 0||te===!0,ye=P(b,nt,Ge);X(s.TEXTURE_CUBE_MAP,b,Ge);let de;if(Ae){C&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,he,nt.width,nt.height);for(let J=0;J<6;J++){de=Z[J].mipmaps;for(let L=0;L<de.length;L++){let se=de[L];b.format!==mn?Ie!==null?C?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,0,0,se.width,se.height,Ie,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,0,0,se.width,se.height,Ie,Se,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,he,se.width,se.height,0,Ie,Se,se.data)}}}else{de=b.mipmaps,C&&ie&&(de.length>0&&ye++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,he,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(ze){C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,Ie,Se,Z[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,he,Z[J].width,Z[J].height,0,Ie,Se,Z[J].data);for(let L=0;L<de.length;L++){let oe=de[L].image[J].image;C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,0,0,oe.width,oe.height,Ie,Se,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,he,oe.width,oe.height,0,Ie,Se,oe.data)}}else{C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,Se,Z[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,he,Ie,Se,Z[J]);for(let L=0;L<de.length;L++){let se=de[L];C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,0,0,Ie,Se,se.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,he,Ie,Se,se.image[J])}}}v(b,Ge)&&y(s.TEXTURE_CUBE_MAP),ne.__version=K.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function _e(E,b,F,te,K,ne){let ge=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),fe=S(F.internalFormat,ge,ae,F.colorSpace);if(!n.get(b).__hasExternalTextures){let ze=Math.max(1,b.width>>ne),Z=Math.max(1,b.height>>ne);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,ne,fe,ze,Z,b.depth,0,ge,ae,null):t.texImage2D(K,ne,fe,ze,Z,0,ge,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,K,n.get(F).__webglTexture,0,Le(b)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,K,n.get(F).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(E,b,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let te=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||pe(b)){let K=b.depthTexture;K&&K.isDepthTexture&&(K.type===ei?te=s.DEPTH_COMPONENT32F:K.type===mi&&(te=s.DEPTH_COMPONENT24));let ne=Le(b);pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let te=Le(b);F&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0;K<te.length;K++){let ne=te[K],ge=r.convert(ne.format,ne.colorSpace),ae=r.convert(ne.type),fe=S(ne.internalFormat,ge,ae,ne.colorSpace),Ae=Le(b);F&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let te=n.get(b.depthTexture).__webglTexture,K=Le(b);if(b.depthTexture.format===Wi)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(b.depthTexture.format===Os)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Re(E){let b=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,E)}else if(F){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=s.createRenderbuffer(),Ue(b.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ue(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(E,b,F){let te=n.get(E);b!==void 0&&_e(te.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Re(E)}function z(E){let b=E.texture,F=n.get(E),te=n.get(b);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=b.version,a.memory.textures++);let K=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,ge=m(E)||o;if(K){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let fe=0;fe<b.mipmaps.length;fe++)F.__webglFramebuffer[ae][fe]=s.createFramebuffer()}else F.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)F.__webglFramebuffer[ae]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){let ae=E.texture;for(let fe=0,Ae=ae.length;fe<Ae;fe++){let ze=n.get(ae[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&pe(E)===!1){let ae=ne?b:[b];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let Ae=ae[fe];F.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);let ze=r.convert(Ae.format,Ae.colorSpace),Z=r.convert(Ae.type),nt=S(Ae.internalFormat,ze,Z,Ae.colorSpace,E.isXRRenderTarget===!0),Ge=Le(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,nt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),X(s.TEXTURE_CUBE_MAP,b,ge);for(let ae=0;ae<6;ae++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)_e(F.__webglFramebuffer[ae][fe],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else _e(F.__webglFramebuffer[ae],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);v(b,ge)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let ae=E.texture;for(let fe=0,Ae=ae.length;fe<Ae;fe++){let ze=ae[fe],Z=n.get(ze);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),X(s.TEXTURE_2D,ze,ge),_e(F.__webglFramebuffer,E,ze,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),v(ze,ge)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ae=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,te.__webglTexture),X(ae,b,ge),o&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)_e(F.__webglFramebuffer[fe],E,b,s.COLOR_ATTACHMENT0,ae,fe);else _e(F.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,ae,0);v(b,ge)&&y(ae),t.unbindTexture()}E.depthBuffer&&Re(E)}function Bt(E){let b=m(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,K=F.length;te<K;te++){let ne=F[te];if(v(ne,b)){let ge=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(ne).__webglTexture;t.bindTexture(ge,ae),y(ge),t.unbindTexture()}}}function we(E){if(o&&E.samples>0&&pe(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,te=E.height,K=s.COLOR_BUFFER_BIT,ne=[],ge=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(E),fe=E.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ae=0;Ae<b.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){ne.push(s.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&ne.push(ge);let ze=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ze===!1&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ge])),fe){let Z=n.get(b[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,F,te,0,0,F,te,K,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<b.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);let ze=n.get(b[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Le(E){return Math.min(i.maxSamples,E.samples)}function pe(E){let b=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function ke(E,b){let F=E.colorSpace,te=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Al||F!==Lt&&F!==gn&&(st.getTransfer(F)===ut?o===!1?e.has("EXT_sRGB")===!0&&te===mn?(E.format=Al,E.minFilter=Zt,E.generateMipmaps=!1):b=Lo.sRGBToLinear(b):(te!==mn||K!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=Ye,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function Q0(s,e,t){let n=t.isWebGL2;function i(r,a=gn){let o,l=st.getTransfer(a);if(r===vi)return s.UNSIGNED_BYTE;if(r===Ju)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===If)return s.BYTE;if(r===Df)return s.SHORT;if(r===rc)return s.UNSIGNED_SHORT;if(r===Ku)return s.INT;if(r===mi)return s.UNSIGNED_INT;if(r===ei)return s.FLOAT;if(r===Mr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nf)return s.ALPHA;if(r===mn)return s.RGBA;if(r===Uf)return s.LUMINANCE;if(r===Of)return s.LUMINANCE_ALPHA;if(r===Wi)return s.DEPTH_COMPONENT;if(r===Os)return s.DEPTH_STENCIL;if(r===Al)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bf)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===Ff)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Ha||r===Va||r===Ga||r===Wa)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===fh||r===ph||r===mh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gh||r===_h)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===gh)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_h)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yh||r===vh||r===xh||r===bh||r===Mh||r===Sh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xa||r===Ih||r===Dh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Xa)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ih)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kf||r===Nh||r===Uh||r===Oh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Hl=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vl=class extends Fn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,v=[],y=[],S=new me,P=null,T=new Pt;T.layers.enable(1),T.viewport=new lt;let R=new Pt;R.layers.enable(2),R.viewport=new lt;let D=[T,R],x=new Hl;x.layers.enable(1),x.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=v[X];return $===void 0&&($=new xr,v[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=v[X];return $===void 0&&($=new xr,v[X]=$),$.getGripSpace()},this.getHand=function(X){let $=v[X];return $===void 0&&($=new xr,v[X]=$),$.getHandSpace()};function q(X){let $=y.indexOf(X.inputSource);if($===-1)return;let le=v[$];le!==void 0&&(le.update(X.inputSource,X.frame,c||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",I);for(let X=0;X<v.length;X++){let $=y[X];$!==null&&(y[X]=null,v[X].disconnect($))}w=null,B=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ni(f.framebufferWidth,f.framebufferHeight,{format:mn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,le=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Os:Wi,le=_.stencil?Gi:mi);let _e={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(_e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ni(d.textureWidth,d.textureHeight,{format:mn,type:vi,depthTexture:new ko(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(X){for(let $=0;$<X.removed.length;$++){let le=X.removed[$],be=y.indexOf(le);be>=0&&(y[be]=null,v[be].disconnect(le))}for(let $=0;$<X.added.length;$++){let le=X.added[$],be=y.indexOf(le);if(be===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=y.length){y.push(le),be=Ue;break}else if(y[Ue]===null){y[Ue]=le,be=Ue;break}if(be===-1)break}let _e=v[be];_e&&_e.connect(le)}}let O=new A,W=new A;function Y(X,$,le){O.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);let be=O.distanceTo(W),_e=$.projectionMatrix.elements,Ue=le.projectionMatrix.elements,Oe=_e[14]/(_e[10]-1),Re=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],z=(_e[9]-1)/_e[5],Bt=(_e[8]-1)/_e[0],we=(Ue[8]+1)/Ue[0],Le=Oe*Bt,pe=Oe*we,ht=be/(-Bt+we),ke=ht*-Bt;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let E=Oe+ht,b=Re+ht,F=Le-ke,te=pe+(be-ke),K=Ye*Re/b*E,ne=z*Re/b*E;X.projectionMatrix.makePerspective(F,te,K,ne,E,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function U(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;x.near=R.near=T.near=X.near,x.far=R.far=T.far=X.far,(w!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,B=x.far);let $=X.parent,le=x.cameras;U(x,$);for(let be=0;be<le.length;be++)U(le[be],$);le.length===2?Y(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),k(X,x,$)};function k(X,$,le){le===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let j=null;function ee(X,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let be=!1;le.length!==x.cameras.length&&(x.cameras.length=0,be=!0);for(let _e=0;_e<le.length;_e++){let Ue=le[_e],Oe=null;if(f!==null)Oe=f.getViewport(Ue);else{let Ye=u.getViewSubImage(d,Ue);Oe=Ye.viewport,_e===0&&(e.setRenderTargetTextures(p,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(p))}let Re=D[_e];Re===void 0&&(Re=new Pt,Re.layers.enable(_e),Re.viewport=new lt,D[_e]=Re),Re.matrix.fromArray(Ue.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ue.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),_e===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),be===!0&&x.cameras.push(Re)}}for(let le=0;le<v.length;le++){let be=y[le],_e=v[le];be!==null&&_e!==void 0&&_e.update(be,$,c||a)}j&&j(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ce=new ud;ce.setAnimationLoop(ee),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}};function ty(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ny(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(v,P);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let y=u();v.__bindingPointIndex=y;let S=s.createBuffer(),P=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],S=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=S.length;T<R;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,w=D.length;x<w;x++){let B=D[x];if(f(B,T,x,P)===!0){let q=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value],I=0;for(let O=0;O<Q.length;O++){let W=Q[O],Y=_(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,q+I,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,S,P){let T=v.value,R=y+"_"+S;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{let D=P[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return P[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(v){let y=v.uniforms,S=0,P=16;for(let R=0,D=y.length;R<D;R++){let x=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,B=x.length;w<B;w++){let q=x[w],Q=Array.isArray(q.value)?q.value:[q.value];for(let I=0,O=Q.length;I<O;I++){let W=Q[I],Y=_(W),U=S%P;U!==0&&P-U<Y.boundary&&(S+=P-U),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Y.storage}}}let T=S%P;return T>0&&(S+=P-T),v.__size=S,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var wr=class{constructor(e={}){let{canvas:t=up(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let y=this,S=!1,P=0,T=0,R=null,D=-1,x=null,w=new lt,B=new lt,q=null,Q=new Ee(0),I=0,O=t.width,W=t.height,Y=1,U=null,k=null,j=new lt(0,0,O,W),ee=new lt(0,0,O,W),ce=!1,X=new Er,$=!1,le=!1,be=null,_e=new Xe,Ue=new me,Oe=new A,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return R===null?Y:1}let z=n;function Bt(M,N){for(let V=0;V<M.length;V++){let G=M[V],H=t.getContext(G,N);if(H!==null)return H}return null}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),z=Bt(N,M),z===null)throw Bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let we,Le,pe,ht,ke,E,b,F,te,K,ne,ge,ae,fe,Ae,ze,Z,nt,Ge,Ie,Se,he,C,ie;function ye(){we=new b_(z),Le=new m_(z,we,e),we.init(Le),he=new Q0(z,we,Le),pe=new K0(z,we,Le),ht=new E_(z),ke=new k0,E=new J0(z,we,pe,ke,Le,he,ht),b=new __(y),F=new x_(y),te=new Ip(z,Le),C=new f_(z,we,te,Le),K=new M_(z,te,ht,C),ne=new R_(z,K,te,ht),Ge=new A_(z,Le,E),ze=new g_(ke),ge=new F0(y,b,F,we,Le,C,ze),ae=new ty(y,ke),fe=new H0,Ae=new Y0(we,Le),nt=new d_(y,b,F,pe,ne,d,l),Z=new Z0(y,ne,Le),ie=new ny(z,ht,Le,pe),Ie=new p_(z,we,ht,Le),Se=new S_(z,we,ht,Le),ht.programs=ge.programs,y.capabilities=Le,y.extensions=we,y.properties=ke,y.renderLists=fe,y.shadowMap=Z,y.state=pe,y.info=ht}ye();let de=new Vl(y,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=we.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=we.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(O,W,!1))},this.getSize=function(M){return M.set(O,W)},this.setSize=function(M,N,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,W=N,t.width=Math.floor(M*Y),t.height=Math.floor(N*Y),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(O*Y,W*Y).floor()},this.setDrawingBufferSize=function(M,N,V){O=M,W=N,Y=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,N,V,G){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,N,V,G),pe.viewport(w.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,N,V,G){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,N,V,G),pe.scissor(B.copy(ee).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){pe.setScissorTest(ce=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(M=!0,N=!0,V=!0){let G=0;if(M){let H=!1;if(R!==null){let ue=R.texture.format;H=ue===nd||ue===td||ue===ed}if(H){let ue=R.texture.type,Me=ue===vi||ue===mi||ue===rc||ue===Gi||ue===Ju||ue===Qu,Pe=nt.getClearColor(),De=nt.getClearAlpha(),We=Pe.r,Be=Pe.g,He=Pe.b;Me?(f[0]=We,f[1]=Be,f[2]=He,f[3]=De,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=We,g[1]=Be,g[2]=He,g[3]=De,z.clearBufferiv(z.COLOR,0,g))}else G|=z.COLOR_BUFFER_BIT}N&&(G|=z.DEPTH_BUFFER_BIT),V&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),Ae.dispose(),ke.dispose(),b.dispose(),F.dispose(),ne.dispose(),C.dispose(),ie.dispose(),ge.dispose(),de.dispose(),de.removeEventListener("sessionstart",Mt),de.removeEventListener("sessionend",tt),be&&(be.dispose(),be=null),Tt.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let M=ht.autoReset,N=Z.enabled,V=Z.autoUpdate,G=Z.needsUpdate,H=Z.type;ye(),ht.autoReset=M,Z.enabled=N,Z.autoUpdate=V,Z.needsUpdate=G,Z.type=H}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let N=M.target;N.removeEventListener("dispose",oe),Ce(N)}function Ce(M){Te(M),ke.remove(M)}function Te(M){let N=ke.get(M).programs;N!==void 0&&(N.forEach(function(V){ge.releaseProgram(V)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,G,H,ue){N===null&&(N=Re);let Me=H.isMesh&&H.matrixWorld.determinant()<0,Pe=Xd(M,N,V,G,H);pe.setMaterial(G,Me);let De=V.index,We=1;if(G.wireframe===!0){if(De=K.getWireframeAttribute(V),De===void 0)return;We=2}let Be=V.drawRange,He=V.attributes.position,St=Be.start*We,nn=(Be.start+Be.count)*We;ue!==null&&(St=Math.max(St,ue.start*We),nn=Math.min(nn,(ue.start+ue.count)*We)),De!==null?(St=Math.max(St,0),nn=Math.min(nn,De.count)):He!=null&&(St=Math.max(St,0),nn=Math.min(nn,He.count));let Nt=nn-St;if(Nt<0||Nt===1/0)return;C.setup(H,G,Pe,V,De);let Xn,gt=Ie;if(De!==null&&(Xn=te.get(De),gt=Se,gt.setIndex(Xn)),H.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*Ye()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(H.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),pe.setLineWidth(qe*Ye()),H.isLineSegments?gt.setMode(z.LINES):H.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else H.isPoints?gt.setMode(z.POINTS):H.isSprite&&gt.setMode(z.TRIANGLES);if(H.isBatchedMesh)gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)gt.renderInstances(St,Nt,H.count);else if(V.isInstancedBufferGeometry){let qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Da=Math.min(V.instanceCount,qe);gt.renderInstances(St,Nt,Da)}else gt.render(St,Nt)};function je(M,N,V){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,Vr(M,N,V),M.side=Bn,M.needsUpdate=!0,Vr(M,N,V),M.side=an):Vr(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),m=Ae.get(V),m.init(),v.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),M!==V&&M.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y._useLegacyLights);let G=new Set;return M.traverse(function(H){let ue=H.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let Pe=ue[Me];je(Pe,V,H),G.add(Pe)}else je(ue,V,H),G.add(ue)}),v.pop(),m=null,G},this.compileAsync=function(M,N,V=null){let G=this.compile(M,N,V);return new Promise(H=>{function ue(){if(G.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){H(M);return}setTimeout(ue,10)}we.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $e=null;function yt(M){$e&&$e(M)}function Mt(){Tt.stop()}function tt(){Tt.start()}let Tt=new ud;Tt.setAnimationLoop(yt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(M){$e=M,de.setAnimationLoop(M),M===null?Tt.stop():Tt.start()},de.addEventListener("sessionstart",Mt),de.addEventListener("sessionend",tt),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,R),m=Ae.get(M,v.length),m.init(),v.push(m),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(_e),le=this.localClippingEnabled,$=ze.init(this.clippingPlanes,le),_=fe.get(M,p.length),_.init(),p.push(_),In(M,N,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(U,k),this.info.render.frame++,$===!0&&ze.beginShadows();let V=m.state.shadowsArray;if(Z.render(V,M,N),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(_,M),m.setupLights(y._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let H=0,ue=G.length;H<ue;H++){let Me=G[H];Zc(_,M,Me,Me.viewport)}}else Zc(_,M,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(y,M,N),C.resetDefaultState(),D=-1,x=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function In(M,N,V,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){G&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let Me=ne.update(M),Pe=M.material;Pe.visible&&_.push(M,Me,Pe,V,Oe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){let Me=ne.update(M),Pe=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Oe.copy(Me.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){let De=Me.groups;for(let We=0,Be=De.length;We<Be;We++){let He=De[We],St=Pe[He.materialIndex];St&&St.visible&&_.push(M,Me,St,V,Oe.z,He)}}else Pe.visible&&_.push(M,Me,Pe,V,Oe.z,null)}}let ue=M.children;for(let Me=0,Pe=ue.length;Me<Pe;Me++)In(ue[Me],N,V,G)}function Zc(M,N,V,G){let H=M.opaque,ue=M.transmissive,Me=M.transparent;m.setupLightsView(V),$===!0&&ze.setGlobalState(y.clippingPlanes,V),ue.length>0&&Wd(H,ue,N,V),G&&pe.viewport(w.copy(G)),H.length>0&&Hr(H,N,V),ue.length>0&&Hr(ue,N,V),Me.length>0&&Hr(Me,N,V),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Wd(M,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let ue=Le.isWebGL2;be===null&&(be=new ni(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Mr:vi,minFilter:xi,samples:ue?4:0})),y.getDrawingBufferSize(Ue),ue?be.setSize(Ue.x,Ue.y):be.setSize(Po(Ue.x),Po(Ue.y));let Me=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(Q),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Pe=y.toneMapping;y.toneMapping=yi,Hr(M,V,G),E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be);let De=!1;for(let We=0,Be=N.length;We<Be;We++){let He=N[We],St=He.object,nn=He.geometry,Nt=He.material,Xn=He.group;if(Nt.side===an&&St.layers.test(G.layers)){let gt=Nt.side;Nt.side=Xt,Nt.needsUpdate=!0,Kc(St,V,G,nn,Nt,Xn),Nt.side=gt,Nt.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be)),y.setRenderTarget(Me),y.setClearColor(Q,I),y.toneMapping=Pe}function Hr(M,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ue=M.length;H<ue;H++){let Me=M[H],Pe=Me.object,De=Me.geometry,We=G===null?Me.material:G,Be=Me.group;Pe.layers.test(V.layers)&&Kc(Pe,N,V,De,We,Be)}}function Kc(M,N,V,G,H,ue){M.onBeforeRender(y,N,V,G,H,ue),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(y,N,V,G,M,ue),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,y.renderBufferDirect(V,N,G,H,M,ue),H.side=Bn,H.needsUpdate=!0,y.renderBufferDirect(V,N,G,H,M,ue),H.side=an):y.renderBufferDirect(V,N,G,H,M,ue),M.onAfterRender(y,N,V,G,H,ue)}function Vr(M,N,V){N.isScene!==!0&&(N=Re);let G=ke.get(M),H=m.state.lights,ue=m.state.shadowsArray,Me=H.state.version,Pe=ge.getParameters(M,H.state,ue,N,V),De=ge.getProgramCacheKey(Pe),We=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?F:b).get(M.envMap||G.environment),We===void 0&&(M.addEventListener("dispose",oe),We=new Map,G.programs=We);let Be=We.get(De);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===Me)return Qc(M,Pe),Be}else Pe.uniforms=ge.getUniforms(M),M.onBuild(V,Pe,y),M.onBeforeCompile(Pe,y),Be=ge.acquireProgram(Pe,De),We.set(De,Be),G.uniforms=Pe.uniforms;let He=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=ze.uniform),Qc(M,Pe),G.needsLights=Yd(M),G.lightsStateVersion=Me,G.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function Jc(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Ds.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Qc(M,N){let V=ke.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Xd(M,N,V,G,H){N.isScene!==!0&&(N=Re),E.resetTextureUnits();let ue=N.fog,Me=G.isMeshStandardMaterial?N.environment:null,Pe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Lt,De=(G.isMeshStandardMaterial?F:b).get(G.envMap||Me),We=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,nn=!!V.morphAttributes.color,Nt=yi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=y.toneMapping);let Xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=Xn!==void 0?Xn.length:0,qe=ke.get(G),Da=m.state.lights;if($===!0&&(le===!0||M!==x)){let dn=M===x&&G.id===D;ze.setState(G,M,dn)}let vt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Da.state.version||qe.outputColorSpace!==Pe||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==De||G.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==St||qe.morphColors!==nn||qe.toneMapping!==Nt||Le.isWebGL2===!0&&qe.morphTargetsCount!==gt)&&(vt=!0):(vt=!0,qe.__version=G.version);let Ii=qe.currentProgram;vt===!0&&(Ii=Vr(G,N,H));let eh=!1,nr=!1,Na=!1,Ht=Ii.getUniforms(),Di=qe.uniforms;if(pe.useProgram(Ii.program)&&(eh=!0,nr=!0,Na=!0),G.id!==D&&(D=G.id,nr=!0),eh||x!==M){Ht.setValue(z,"projectionMatrix",M.projectionMatrix),Ht.setValue(z,"viewMatrix",M.matrixWorldInverse);let dn=Ht.map.cameraPosition;dn!==void 0&&dn.setValue(z,Oe.setFromMatrixPosition(M.matrixWorld)),Le.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,nr=!0,Na=!0)}if(H.isSkinnedMesh){Ht.setOptional(z,H,"bindMatrix"),Ht.setOptional(z,H,"bindMatrixInverse");let dn=H.skeleton;dn&&(Le.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Ht.setValue(z,"boneTexture",dn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ht.setOptional(z,H,"batchingTexture"),Ht.setValue(z,"batchingTexture",H._matricesTexture,E));let Ua=V.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&Le.isWebGL2===!0)&&Ge.update(H,V,Ii),(nr||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Ht.setValue(z,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Di.envMap.value=De,Di.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),nr&&(Ht.setValue(z,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&qd(Di,Na),ue&&G.fog===!0&&ae.refreshFogUniforms(Di,ue),ae.refreshMaterialUniforms(Di,G,Y,W,be),Ds.upload(z,Jc(qe),Di,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ds.upload(z,Jc(qe),Di,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ht.setValue(z,"center",H.center),Ht.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(z,"normalMatrix",H.normalMatrix),Ht.setValue(z,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let dn=G.uniformsGroups;for(let Oa=0,jd=dn.length;Oa<jd;Oa++)if(Le.isWebGL2){let th=dn[Oa];ie.update(th,Ii),ie.bind(th,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function qd(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Yd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,N,V){ke.get(M.texture).__webglTexture=N,ke.get(M.depthTexture).__webglTexture=V;let G=ke.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){let V=ke.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){R=M,P=N,T=V;let G=!0,H=null,ue=!1,Me=!1;if(M){let De=ke.get(M);De.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):De.__webglFramebuffer===void 0?E.setupRenderTarget(M):De.__hasExternalTextures&&E.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);let We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Me=!0);let Be=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?H=Be[N][V]:H=Be[N],ue=!0):Le.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?H=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[V]:H=Be,w.copy(M.viewport),B.copy(M.scissor),q=M.scissorTest}else w.copy(j).multiplyScalar(Y).floor(),B.copy(ee).multiplyScalar(Y).floor(),q=ce;if(pe.bindFramebuffer(z.FRAMEBUFFER,H)&&Le.drawBuffers&&G&&pe.drawBuffers(M,H),pe.viewport(w),pe.scissor(B),pe.setScissorTest(q),ue){let De=ke.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,V)}else if(Me){let De=ke.get(M.texture),We=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,V||0,We)}D=-1},this.readRenderTargetPixels=function(M,N,V,G,H,ue,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){pe.bindFramebuffer(z.FRAMEBUFFER,Pe);try{let De=M.texture,We=De.format,Be=De.type;if(We!==mn&&he.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=Be===Mr&&(we.has("EXT_color_buffer_half_float")||Le.isWebGL2&&we.has("EXT_color_buffer_float"));if(Be!==vi&&he.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ei&&(Le.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&V>=0&&V<=M.height-H&&z.readPixels(N,V,G,H,he.convert(We),he.convert(Be),ue)}finally{let De=R!==null?ke.get(R).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(M,N,V=0){let G=Math.pow(2,-V),H=Math.floor(N.image.width*G),ue=Math.floor(N.image.height*G);E.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,M.x,M.y,H,ue),pe.unbindTexture()},this.copyTextureToTexture=function(M,N,V,G=0){let H=N.image.width,ue=N.image.height,Me=he.convert(V.format),Pe=he.convert(V.type);E.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,M.x,M.y,H,ue,Me,Pe,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,M.x,M.y,Me,Pe,N.image),G===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V,G,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,De=he.convert(G.format),We=he.convert(G.type),Be;if(G.isData3DTexture)E.setTexture3D(G,0),Be=z.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Be=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let He=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),nn=z.getParameter(z.UNPACK_SKIP_PIXELS),Nt=z.getParameter(z.UNPACK_SKIP_ROWS),Xn=z.getParameter(z.UNPACK_SKIP_IMAGES),gt=V.isCompressedTexture?V.mipmaps[H]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Be,H,N.x,N.y,N.z,ue,Me,Pe,De,We,gt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Be,H,N.x,N.y,N.z,ue,Me,Pe,De,gt.data)):z.texSubImage3D(Be,H,N.x,N.y,N.z,ue,Me,Pe,De,We,gt),z.pixelStorei(z.UNPACK_ROW_LENGTH,He),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xn),H===0&&G.generateMipmaps&&z.generateMipmap(Be),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,pe.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Xi:rd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xi?dt:Lt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gl=class extends wr{};Gl.prototype.isWebGL1Renderer=!0;var zo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new A,ji=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tr=class extends tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,hr=new A,ws=new A,Ts=new A,As=new me,ur=new me,_d=new Xe,po=new A,dr=new A,mo=new A,Tu=new me,ml=new me,Au=new me,Ho=class extends ft{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new ji(n,3,0,!1)),Es.setAttribute("uv",new ji(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),_d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;go(po.set(-.5,-.5,0),Ts,a,ws,i,r),go(dr.set(.5,-.5,0),Ts,a,ws,i,r),go(mo.set(.5,.5,0),Ts,a,ws,i,r),Tu.set(0,0),ml.set(1,0),Au.set(1,1);let o=e.ray.intersectTriangle(po,dr,mo,!1,hr);if(o===null&&(go(dr.set(-.5,.5,0),Ts,a,ws,i,r),ml.set(0,1),o=e.ray.intersectTriangle(po,mo,dr,!1,hr),o===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:Vi.getInterpolation(hr,po,dr,mo,Tu,ml,Au,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(s,e,t,n,i,r){As.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ur.x=r*As.x-i*As.y,ur.y=i*As.x+r*As.y):ur.copy(As),s.copy(e),s.x+=ur.x,s.y+=ur.y,s.applyMatrix4(_d)}var Ru=new A,Cu=new lt,Pu=new lt,iy=new A,Lu=new Xe,_o=new A,gl=new cn,Iu=new Xe,_l=new bi,Vo=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(i),e.ray.intersectsSphere(gl)!==!1&&(Iu.copy(i).invert(),_l.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&_l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Cu.fromBufferAttribute(i.attributes.skinIndex,e),Pu.fromBufferAttribute(i.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Pu.getComponent(r);if(a!==0){let o=Cu.getComponent(r);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iy.copy(Ru).applyMatrix4(Lu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ar=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wl=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Du=new Xe,sy=new Xe,Go=class s{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:sy;Du.multiplyMatrices(o,t[r]),Du.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wl(t,e,e,mn,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ar),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},$i=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new Xe,Nu=new Xe,yo=[],Uu=new en,ry=new Xe,fr=new ve,pr=new cn,Wo=class extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ry)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Uu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Uu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),pr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),Nu.multiplyMatrices(n,Rs),fr.matrixWorld=Nu,fr.raycast(e,yo);for(let a=0,o=yo.length;a<o;a++){let l=yo[a];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Cn=class extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ou=new A,Bu=new A,Fu=new Xe,yl=new bi,vo=new cn,kn=class extends ft{constructor(e=new pt,t=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ou.fromBufferAttribute(t,i-1),Bu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ou.distanceTo(Bu);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Fu.copy(i).invert(),yl.copy(e.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,u=new A,d=new A,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let y=p,S=v-1;y<S;y+=f){let P=g.getX(y),T=g.getX(y+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,T),yl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let y=p,S=v-1;y<S;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),yl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},ku=new A,zu=new A,Zi=class extends kn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ku.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ku.distanceTo(zu);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends kn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rr=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new Xe,Xl=new bi,xo=new cn,bo=new A,qo=class extends ft{constructor(e=new pt,t=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Hu.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);bo.fromBufferAttribute(u,m),Vu(bo,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)bo.fromBufferAttribute(u,g),Vu(bo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(s,e,t,n,i,r,a){let o=Xl.distanceSqToPoint(s);if(o<t){let l=new A;Xl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Cr=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qs=class s extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new A,h=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pn=class s extends pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function v(){let S=new A,P=new A,T=0,R=(t-e)/n;for(let D=0;D<=r;D++){let x=[],w=D/r,B=w*(t-e)+e;for(let q=0;q<=i;q++){let Q=q/i,I=Q*l+o,O=Math.sin(I),W=Math.cos(I);P.x=B*O,P.y=-w*n+m,P.z=B*W,u.push(P.x,P.y,P.z),S.set(O,R,W).normalize(),d.push(S.x,S.y,S.z),f.push(Q,1-w),x.push(g++)}_.push(x)}for(let D=0;D<i;D++)for(let x=0;x<r;x++){let w=_[x][D],B=_[x+1][D],q=_[x+1][D+1],Q=_[x][D+1];h.push(w,B,Q),h.push(B,q,Q),T+=6}c.addGroup(p,T,0),p+=T}function y(S){let P=g,T=new me,R=new A,D=0,x=S===!0?e:t,w=S===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let B=g;for(let q=0;q<=i;q++){let I=q/i*l+o,O=Math.cos(I),W=Math.sin(I);R.x=x*W,R.y=m*w,R.z=x*O,u.push(R.x,R.y,R.z),d.push(0,w,0),T.x=O*.5+.5,T.y=W*.5*w+.5,f.push(T.x,T.y),g++}for(let q=0;q<i;q++){let Q=P+q,I=B+q;S===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class s extends Pn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ys=class s extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new A,g=new me;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,S=v+n+1,P=v+n+2,T=v+1;o.push(y,S,T),o.push(S,P,T)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ki=class s extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){let T=P/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=h[p][v+1],S=h[p][v],P=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(y,S,T),(p!==n-1||l<Math.PI)&&f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pr=class s extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},jo=class s extends pt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,g=new A,_=new A,m=new A,p=new A;for(let y=0;y<=n;++y){let S=y/n*r*Math.PI*2;v(S,r,a,e,f),v(S+.01,r,a,e,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let P=0;P<=i;++P){let T=P/i*Math.PI*2,R=-t*Math.cos(T),D=t*Math.sin(T);u.x=f.x+(R*p.x+D*_.x),u.y=f.y+(R*p.y+D*_.y),u.z=f.z+(R*p.z+D*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(P/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){let P=(i+1)*(y-1)+(S-1),T=(i+1)*y+(S-1),R=(i+1)*y+S,D=(i+1)*(y-1)+S;o.push(P,T,D),o.push(T,R,D)}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2));function v(y,S,P,T,R){let D=Math.cos(y),x=Math.sin(y),w=P/S*y,B=Math.cos(w);R.x=T*(2+B)*.5*D,R.y=T*(2+B)*x*.5,R.z=T*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var _t=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends _t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Mo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ay(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function yd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fh:r=e,o=2*t-n;break;case kh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fh:a=e,l=2*n-t;break;case kh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+v*a[c+P]+y*a[l+P]+S*a[u+P];return r}},Yl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},jl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&oy(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Yi;var Si=class extends yn{};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Bs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends yn{};$o.prototype.ValueTypeName="color";var si=class extends yn{};si.prototype.ValueTypeName="number";var $l=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)bt.slerpFlat(r,0,a,c-o,a,c,l);return r}},zn=class extends yn{InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};zn.prototype.ValueTypeName="quaternion";zn.prototype.DefaultInterpolation=Yi;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends yn{};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Bs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends yn{};ri.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t=-1,n,i=zf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cy(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=ay(l);l=Gu(l,1,h),c=Gu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new si(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];yd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new si(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(ri,f+".position",d,"pos",i),n(zn,f+".quaternion",d,"rot",i),n(ri,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ly(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return $o;case"quaternion":return zn;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ly(s.type);if(s.times===void 0){let t=[],n=[];yd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var gi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Zl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},hy=new Zl,oi=class{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jn={},Kl=class extends Error{constructor(e,t){super(e),this.response=t}},Lr=class extends oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Jn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){let D=h[T];D.onProgress&&D.onProgress(P)}p.enqueue(S),v()}})}}});return new Response(m)}else throw new Kl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{gi.add(e,c);let h=Jn[e];delete Jn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jl=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Sr("img");function l(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ko=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new Jl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},js=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Jo=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new Xe,Wu=new A,Xu=new A,Ir=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ql=class extends Ir{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qo=class extends js{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ql}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qu=new Xe,mr=new A,xl=new A,ec=class extends Ir{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),xl.copy(n.position),xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xl),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}},$s=class extends js{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tc=class extends Ir{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ea=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,l),r.manager.itemStart(e)}};var cc="\\[\\]\\.:\\/",uy=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",dy="[^"+cc.replace("\\.","")+"]",fy=/((?:WC+[\/:])*)/.source.replace("WC",hc),py=/(WCOD+)?/.source.replace("WCOD",dy),my=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),_y=new RegExp("^"+fy+py+my+gy+"$"),yy=["material","materials","bones","map"],nc=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uy,"")}static parseTrackName(e){let t=_y.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);yy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=nc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);var Dr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ta=class extends Zi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new pt;h.setAttribute("position",new Qe(l,3)),h.setAttribute("color",new Qe(c,3));let u=new Cn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Yu=new A,So,bl,na=class extends ft{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",So===void 0&&(So=new pt,So.setAttribute("position",new Qe([0,0,0,0,1,0],3)),bl=new Pn(0,.5,1,5,1),bl.translate(0,-.5,0)),this.position.copy(t),this.line=new kn(So,new Cn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ve(bl,new wt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Yu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Yu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var vd={type:"change"},dc={type:"start"},xd={type:"end"},aa=new bi,bd=new An,vy=Math.cos(70*mt.DEG2RAD),la=class extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ae),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vd),n.update(),r=i.NONE},this.update=(function(){let C=new A,ie=new bt().setFromUnitVectors(e.up,new A(0,1,0)),ye=ie.clone().invert(),de=new A,J=new bt,L=new A,se=2*Math.PI;return function(Ce=null){let Te=n.object.position;C.copy(Te).sub(n.target),C.applyQuaternion(ie),o.setFromVector3(C),n.autoRotate&&r===i.NONE&&q(w(Ce)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let je=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(je)&&isFinite($e)&&(je<-Math.PI?je+=se:je>Math.PI&&(je-=se),$e<-Math.PI?$e+=se:$e>Math.PI&&($e-=se),je<=$e?o.theta=Math.max(je,Math.min($e,o.theta)):o.theta=o.theta>(je+$e)/2?Math.max(je,o.theta):Math.min($e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(ye),Te.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let yt=!1;if(n.zoomToCursor&&T){let Mt=null;if(n.object.isPerspectiveCamera){let tt=C.length();Mt=j(tt*c);let Tt=tt-Mt;n.object.position.addScaledVector(S,Tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let tt=new A(P.x,P.y,0);tt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),yt=!0;let Tt=new A(P.x,P.y,0);Tt.unproject(n.object),n.object.position.sub(Tt).add(tt),n.object.updateMatrixWorld(),Mt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Mt).add(n.object.position):(aa.origin.copy(n.object.position),aa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(aa.direction))<vy?e.lookAt(n.target):(bd.setFromNormalAndCoplanarPoint(n.object.up,n.target),aa.intersectPlane(bd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),yt=!0);return c=1,T=!1,yt||de.distanceToSquared(n.object.position)>a||8*(1-J.dot(n.object.quaternion))>a||L.distanceToSquared(n.target)>0?(n.dispatchEvent(vd),de.copy(n.object.position),J.copy(n.object.quaternion),L.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new Dr,l=new Dr,c=1,h=new A,u=new me,d=new me,f=new me,g=new me,_=new me,m=new me,p=new me,v=new me,y=new me,S=new A,P=new me,T=!1,R=[],D={},x=!1;function w(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function B(C){let ie=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ie)}function q(C){l.theta-=C}function Q(C){l.phi-=C}let I=(function(){let C=new A;return function(ye,de){C.setFromMatrixColumn(de,0),C.multiplyScalar(-ye),h.add(C)}})(),O=(function(){let C=new A;return function(ye,de){n.screenSpacePanning===!0?C.setFromMatrixColumn(de,1):(C.setFromMatrixColumn(de,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ye),h.add(C)}})(),W=(function(){let C=new A;return function(ye,de){let J=n.domElement;if(n.object.isPerspectiveCamera){let L=n.object.position;C.copy(L).sub(n.target);let se=C.length();se*=Math.tan(n.object.fov/2*Math.PI/180),I(2*ye*se/J.clientHeight,n.object.matrix),O(2*de*se/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(ye*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),O(de*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C,ie){if(!n.zoomToCursor)return;T=!0;let ye=n.domElement.getBoundingClientRect(),de=C-ye.left,J=ie-ye.top,L=ye.width,se=ye.height;P.x=de/L*2-1,P.y=-(J/se)*2+1,S.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function ee(C){u.set(C.clientX,C.clientY)}function ce(C){k(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function X(C){g.set(C.clientX,C.clientY)}function $(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ie=n.domElement;q(2*Math.PI*f.x/ie.clientHeight),Q(2*Math.PI*f.y/ie.clientHeight),u.copy(d),n.update()}function le(C){v.set(C.clientX,C.clientY),y.subVectors(v,p),y.y>0?Y(B(y.y)):y.y<0&&U(B(y.y)),p.copy(v),n.update()}function be(C){_.set(C.clientX,C.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_),n.update()}function _e(C){k(C.clientX,C.clientY),C.deltaY<0?U(B(C.deltaY)):C.deltaY>0&&Y(B(C.deltaY)),n.update()}function Ue(C){let ie=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),n.update())}function Oe(C){if(R.length===1)u.set(C.pageX,C.pageY);else{let ie=he(C),ye=.5*(C.pageX+ie.x),de=.5*(C.pageY+ie.y);u.set(ye,de)}}function Re(C){if(R.length===1)g.set(C.pageX,C.pageY);else{let ie=he(C),ye=.5*(C.pageX+ie.x),de=.5*(C.pageY+ie.y);g.set(ye,de)}}function Ye(C){let ie=he(C),ye=C.pageX-ie.x,de=C.pageY-ie.y,J=Math.sqrt(ye*ye+de*de);p.set(0,J)}function z(C){n.enableZoom&&Ye(C),n.enablePan&&Re(C)}function Bt(C){n.enableZoom&&Ye(C),n.enableRotate&&Oe(C)}function we(C){if(R.length==1)d.set(C.pageX,C.pageY);else{let ye=he(C),de=.5*(C.pageX+ye.x),J=.5*(C.pageY+ye.y);d.set(de,J)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ie=n.domElement;q(2*Math.PI*f.x/ie.clientHeight),Q(2*Math.PI*f.y/ie.clientHeight),u.copy(d)}function Le(C){if(R.length===1)_.set(C.pageX,C.pageY);else{let ie=he(C),ye=.5*(C.pageX+ie.x),de=.5*(C.pageY+ie.y);_.set(ye,de)}m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_)}function pe(C){let ie=he(C),ye=C.pageX-ie.x,de=C.pageY-ie.y,J=Math.sqrt(ye*ye+de*de);v.set(0,J),y.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),Y(y.y),p.copy(v);let L=(C.pageX+ie.x)*.5,se=(C.pageY+ie.y)*.5;k(L,se)}function ht(C){n.enableZoom&&pe(C),n.enablePan&&Le(C)}function ke(C){n.enableZoom&&pe(C),n.enableRotate&&we(C)}function E(C){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",F)),Ge(C),C.pointerType==="touch"?ze(C):te(C))}function b(C){n.enabled!==!1&&(C.pointerType==="touch"?Z(C):K(C))}function F(C){Ie(C),R.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(xd),r=i.NONE}function te(C){let ie;switch(C.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Qi.DOLLY:if(n.enableZoom===!1)return;ce(C),r=i.DOLLY;break;case Qi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),r=i.PAN}else{if(n.enableRotate===!1)return;ee(C),r=i.ROTATE}break;case Qi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ee(C),r=i.ROTATE}else{if(n.enablePan===!1)return;X(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(dc)}function K(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(C);break;case i.DOLLY:if(n.enableZoom===!1)return;le(C);break;case i.PAN:if(n.enablePan===!1)return;be(C);break}}function ne(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(dc),_e(ge(C)),n.dispatchEvent(xd))}function ge(C){let ie=C.deltaMode,ye={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ie){case 1:ye.deltaY*=16;break;case 2:ye.deltaY*=100;break}return C.ctrlKey&&!x&&(ye.deltaY*=10),ye}function ae(C){C.key==="Control"&&(x=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(C){C.key==="Control"&&(x=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Ae(C){n.enabled===!1||n.enablePan===!1||Ue(C)}function ze(C){switch(Se(C),R.length){case 1:switch(n.touches.ONE){case es.ROTATE:if(n.enableRotate===!1)return;Oe(C),r=i.TOUCH_ROTATE;break;case es.PAN:if(n.enablePan===!1)return;Re(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case es.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(C),r=i.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Bt(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(dc)}function Z(C){switch(Se(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;we(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Le(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(C),n.update();break;default:r=i.NONE}}function nt(C){n.enabled!==!1&&C.preventDefault()}function Ge(C){R.push(C.pointerId)}function Ie(C){delete D[C.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie]==C.pointerId){R.splice(ie,1);return}}function Se(C){let ie=D[C.pointerId];ie===void 0&&(ie=new me,D[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function he(C){let ie=C.pointerId===R[0]?R[1]:R[0];return D[ie]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}};function fc(s,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Nr||e===sa){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Nr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ca=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xc(t)}),this.register(function(t){return new Cc(t)}),this.register(function(t){return new Pc(t)}),this.register(function(t){return new Lc(t)}),this.register(function(t){return new Mc(t)}),this.register(function(t){return new Sc(t)}),this.register(function(t){return new Ec(t)}),this.register(function(t){return new wc(t)}),this.register(function(t){return new vc(t)}),this.register(function(t){return new Tc(t)}),this.register(function(t){return new bc(t)}),this.register(function(t){return new Rc(t)}),this.register(function(t){return new Ac(t)}),this.register(function(t){return new _c(t)}),this.register(function(t){return new Ic(t)}),this.register(function(t){return new Dc(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=wi.extractUrlBase(e);a=wi.resolveURL(c,this.path)}else a=wi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Td){try{a[Ze.KHR_BINARY_GLTF]=new Nc(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new yc;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Uc(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new Oc;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new Bc;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function xy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_c=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ji(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $s(h),c.distance=u;break;case"spot":c=new Qo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},yc=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}},vc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},xc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(o,o)}return Promise.all(r)}},bc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Mc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Sc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Ec=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Lt),Promise.all(r)}},wc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Tc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}},Ac=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Rc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Cc=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Pc=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lc=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ic=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Dc=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new Xe,m=new A,p=new bt,v=new A(1,1,1),y=new Wo(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(m,p,v));for(let S in l)if(S==="_COLOR_0"){let P=l[S];y.instanceColor=new $i(P.array,P.itemSize,P.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Td="glTF",Ur=12,Md={JSON:1313821514,BIN:5130562},Nc=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ur,r=new DataView(e,Ur),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Md.JSON){let c=new Uint8Array(e,Ur+a,o);this.content=n.decode(c)}else if(l===Md.BIN){let c=Ur+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=kc[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=kc[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ks[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,Lt,d)})})}},Oc=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bc=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},ha=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+u;for(let S=0;S!==o;S++){let P=a[_+S+o],T=a[_+S+l]*h,R=a[g+S+o],D=a[g+S]*h;r[S]=v*P+y*T+m*R+p*D}return r}},by=new bt,Fc=class extends ha{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return by.fromArray(r).normalize().toArray(r),r}},vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:Ct,9729:Zt,9984:wo,9985:sc,9986:gr,9987:xi},Ed={33071:ln,33648:br,10497:qi},pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},My={CUBICSPLINE:void 0,LINEAR:Yi,STEP:Bs},mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function ts(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ey(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function wy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ty(s){let e,t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gc(t.attributes):e=s.indices+":"+gc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+gc(s.targets[n]);return e}function gc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ay(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ry=new Xe,Hc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ko(this.options.manager):this.textureLoader=new ea(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ts(r,o,i),Ai(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(wi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=pc[i.type],o=Ks[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Et(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=pc[i.type],c=Ks[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(v);y||(_=new c(o,p*f,i.count*f/h),y=new Xs(_,f/h),t.cache.add(v,y)),m=new ji(y,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new Et(_,l,g);if(i.sparse!==void 0){let p=pc.SCALAR,v=Ks[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,P=new v(a[1],y,i.sparse.count*p),T=new c(a[2],S,i.sparse.count*l);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized));for(let R=0,D=P.length;R<D;R++){let x=P[R];if(m.setX(x,T[R*l]),l>=2&&m.setY(x,T[R*l+1]),l>=3&&m.setZ(x,T[R*l+2]),l>=4&&m.setW(x,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sd[d.magFilter]||Zt,h.minFilter=Sd[d.minFilter]||xi,h.wrapS=Ed[d.wrapS]||qi,h.wrapT=Ed[d.wrapT]||qi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new zt(_);m.needsUpdate=!0,d(m)}),t.load(wi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||Ay(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Rr,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Cn,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _t}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Lt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||mc.OPAQUE;if(h===mc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===mc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wt){let u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Lt)}return r.emissiveTexture!==void 0&&a!==wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ai(u,r),t.associations.set(u,{materials:e}),r.extensions&&ts(i,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return wd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Ty(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=wd(new pt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Sy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,v=c[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Vo(_,v):new ve(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=fc(p.geometry,sa):m.mode===vn.TRIANGLE_FAN&&(p.geometry=fc(p.geometry,Nr));else if(m.mode===vn.LINES)p=new Zi(_,v);else if(m.mode===vn.LINE_STRIP)p=new kn(_,v);else if(m.mode===vn.LINE_LOOP)p=new Xo(_,v);else if(m.mode===vn.POINTS)p=new qo(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&wy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ai(p,r),m.extensions&&ts(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ts(i,u[0],r),u[0];let d=new Rt;r.extensions&&ts(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(mt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Go(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=d.length;v<y;v++){let S=d[v],P=f[v],T=g[v],R=_[v],D=m[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let x=n._createAnimationTracks(S,P,T,R,D);if(x)for(let w=0;w<x.length;w++)p.push(x[w])}return new Zo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ry)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ar:c.length>1?h=new Rt:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ai(h,r),r.extensions&&ts(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Rt;n.name&&(r.name=i.createUniqueName(n.name)),Ai(r,n),n.extensions&&ts(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof tn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];Ti[r.path]===Ti.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ti[r.path]){case Ti.weights:c=si;break;case Ti.rotation:c=zn;break;case Ti.position:case Ti.scale:c=ri;break;default:switch(n.itemSize){case 1:c=si;break;case 2:case 3:default:c=ri;break}break}let h=i.interpolation!==void 0?My[i.interpolation]:Yi,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ti[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof zn?Fc:ha;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Cy(s,e,t){let n=e.attributes,i=new en;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){let h=zc(Ks[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new A,l=new A;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=zc(Ks[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function wd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=kc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return st.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Ai(s,e),Cy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ey(s,e.targets,t):s})}var ua=class extends Ws{constructor(e=null){super();let t=new Kt;t.deleteAttribute("uv");let n=new _t({side:Xt}),i=new _t,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new $s(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ve(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new ve(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ve(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ve(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new ve(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new ve(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new ve(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new ve(t,Js(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new ve(t,Js(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new ve(t,Js(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new ve(t,Js(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let v=new ve(t,Js(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let y=new ve(t,Js(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Js(s){let e=new wt;return e.color.setScalar(s),e}var da=class{ratio=1;base=1;scale=1;warmup=2;seconds=0;frames=0;resize(e,t,n){let i=Math.max(1,e*t);return this.base=Math.min(1,Number.isFinite(n)&&n>0?n:1,Math.sqrt(1e6/i)),this.ratio=this.base*this.scale,this.resetSamples(),this.ratio}observe(e,t){if(!t||!Number.isFinite(e)||e<=0||e>.2)return this.resetSamples(),null;if(this.warmup>0)return this.warmup-=e,null;if(this.seconds+=e,this.frames++,this.seconds<1.5||this.frames<30)return null;let n=this.seconds/this.frames;return this.seconds=0,this.frames=0,n<=.027||this.scale<=.65?null:(this.scale=Math.max(.65,this.scale*.85),this.ratio=this.base*this.scale,this.ratio)}resetSamples(){this.warmup=2,this.seconds=0,this.frames=0}};var qt=s=>s==="damp"||s==="zero"||s==="debug",hn={shoulderRest:-8,shoulderRoll:8,elbowRest:18,armResponse:.085,strideGain:260,maxSwing:20,sideSwing:7,turnSwing:6,steppingSwing:10,elbowFollow:.4,lateralRoll:4},Ri=[{id:"locomotion",title:"\u884C\u8D70",hint:"\u4E3B\u52A8\u4FDD\u6301\u5E73\u8861 \xB7 \u6447\u6746\u9A7E\u9A76",copy:"\u5DE6\u6447\u6746\u79FB\u52A8\uFF0C\u53F3\u6447\u6746\u8F6C\u8EAB\uFF1B\u677E\u5F00\u6447\u6746\u540E\u53CC\u811A\u7AD9\u7A33\uFF0C\u53EF\u5207\u6362\u4F4E\u901F / \u9AD8\u901F\u3002"},{id:"stand",title:"\u9501\u5B9A\u7AD9\u7ACB",hint:"\u4FDD\u6301\u7AD9\u59FF \xB7 \u539F\u5730\u4E92\u52A8",copy:"\u5173\u8282\u4E3B\u52A8\u7EF4\u6301\u7AD9\u59FF\uFF0C\u6447\u6746\u4E0D\u518D\u9A71\u52A8\u884C\u8D70\uFF1B\u4ECD\u53EF\u6325\u624B\u3001\u63E1\u624B\u7B49\u539F\u5730\u4E92\u52A8\u3002"},{id:"damp",title:"\u963B\u5C3C",hint:"\u5173\u8282\u6709\u963B\u529B \xB7 \u4E0D\u4E3B\u52A8\u7AD9\u7A33",copy:"\u50CF\u7ED9\u5173\u8282\u5E26\u4E0A\u5239\u8F66\uFF0C\u6709\u963B\u529B\u4F46\u4E0D\u4E3B\u52A8\u7AD9\u7A33\u3002\u7F51\u9875\u4EE5\u6162\u6162\u5012\u5730\u793A\u610F\uFF1BLB + X \u8D77\u8EAB\u3002"},{id:"zero",title:"\u96F6\u529B\u77E9",hint:"\u7535\u673A\u4E0D\u51FA\u529B \xB7 \u4E0D\u7EF4\u6301\u7AD9\u59FF",copy:"\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u5173\u8282\u653E\u677E\uFF0C\u4E5F\u4E0D\u7EF4\u6301\u7AD9\u59FF\u3002\u7F51\u9875\u4EE5\u8F83\u5FEB\u5012\u5730\u793A\u610F\uFF1BLB + X \u8D77\u8EAB\u3002"},{id:"performance",title:"\u52A8\u4F5C\u8868\u6F14",hint:"\u539F\u5730\u534F\u540C\u52A8\u4F5C \xB7 RB + \u5F69\u8272\u952E\u8DF3\u821E",copy:"\u6309\u4F4F RB\uFF0C\u518D\u6309 A / B / X / Y \u64AD\u653E\u56DB\u79CD\u821E\u8E48\u3002\u677E\u5F00\u6447\u6746\u7AD9\u7A33\u540E\u518D\u8868\u6F14\uFF1B\u5176\u4ED6\u52A8\u4F5C\u4ECD\u53EF\u4ECE\u83DC\u5355\u9009\u62E9\u3002"},{id:"debug",title:"\u8C03\u8BD5\u5B9E\u9A8C",hint:"\u540A\u67B6\u652F\u6491 \xB7 \u5173\u8282\u5B9E\u9A8C\u4E0E\u821E\u8E48\u952E\u4F4D",copy:"\u81EA\u7531\u4F53\u9A8C\u4E2D\u5148\u6302\u63A5\uFF0C\u5207\u963B\u5C3C\u6216\u96F6\u529B\u77E9\uFF0C\u518D\u8FDB\u5165\u8C03\u8BD5\uFF1B\u53EF\u6821\u51C6\u5173\u8282\u3001\u66F4\u6362 RB \u821E\u8E48\u952E\u4F4D\u3002\u7F51\u9875\u6559\u5B66\u6269\u5C55\uFF0C\u4E0D\u8FDE\u63A5\u5B9E\u673A\u3002"}],rt={room:{minX:-3.2,maxX:3.2,minZ:-3.55,maxZ:2.1},radius:.28,slowSpeed:.24,fastSpeed:.82,turnSpeed:1.4,accelerationSeconds:.18,spawn:{x:0,z:0,yaw:Math.PI},welcome:{x:0,z:-1.55,radius:.5},visitor:{x:0,z:-3.05},destination:{x:1.3,z:-.65,radius:.55},exhibit:{x:2.35,z:-.65},obstacles:[{id:"\u5C55\u53F0\u8FB9\u7F18",x:1.97,z:-1.15,width:.76,depth:1},{id:"\u5DE6\u4FA7\u5C55\u53F0",x:-2.73,z:-1.15,width:.76,depth:1},{id:"\u6E38\u5BA2\u4F4D\u7F6E",x:-.23,z:-3.28,width:.46,depth:.46}]},ns={forward:0,strafe:0,turn:0,look:0,stop:!1,wave:!1,invite:!1,camera:!1,pause:!1};var Ad={targetJointName:"left_knee_joint",targetLinkName:"left_knee_link",jointNames:{leftHipPitch:"left_hip_pitch_joint",leftKnee:"left_knee_joint",leftAnklePitch:"left_ankle_pitch_joint",rightHipPitch:"right_hip_pitch_joint",rightKnee:"right_knee_joint",rightAnklePitch:"right_ankle_pitch_joint",supportFoot:"right_ankle_roll_link",movingFoot:"left_ankle_roll_link",root:"pelvis"},motion:{ankleCompensationRatio:-.6,hipCompensationRatio:-.4,supportKneeDegrees:80,supportAnklePitchDegrees:-40,maximumPelvisDropMeters:.08,automaticTargetDegrees:45,transitionSeconds:1.15},safety:{supportMarginMeters:.018,footContactHeightMeters:.008,collisionMarginMeters:.025,scanStepDegrees:5,updateIntervalSeconds:.1,collisionPairs:[{id:"lower-legs",first:"left_knee_link",second:"right_knee_link",label:"\u5DE6\u53F3\u5C0F\u817F"},{id:"feet",first:"left_ankle_roll_link",second:"right_ankle_roll_link",label:"\u5DE6\u53F3\u811A\u90E8"},{id:"left-thigh-knee",first:"left_hip_yaw_link",second:"left_knee_link",label:"\u5DE6\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},{id:"right-thigh-knee",first:"right_hip_yaw_link",second:"right_knee_link",label:"\u53F3\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},...["left","right"].flatMap(s=>{let e=s==="left"?"\u5DE6":"\u53F3";return[{id:`${s}-forearm-torso`,first:`${s}_elbow_link`,second:"torso_link",label:`${e}\u5C0F\u81C2\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-wrist-torso`,first:`${s}_wrist_pitch_link`,second:"torso_link",label:`${e}\u8155\u90E8\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-thigh-torso`,first:`${s}_hip_yaw_link`,second:"torso_link",label:`${e}\u5927\u817F\u4E0E\u8EAF\u5E72`,marginMeters:.01},...["left","right"].flatMap(t=>[{id:`${s}-upper-${t}-thigh`,first:`${s}_shoulder_yaw_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5927\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012},{id:`${s}-forearm-${t}-thigh`,first:`${s}_elbow_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5C0F\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012}])]})],collisionProxyScale:{left_hip_yaw_link:[.85,.45,.85],right_hip_yaw_link:[.85,.45,.85],left_knee_link:[.9,.6,.9],right_knee_link:[.9,.6,.9],left_ankle_roll_link:[1,.9,1],right_ankle_roll_link:[1,.9,1],torso_link:[.9,.92,.9],left_shoulder_yaw_link:[.88,.88,.88],right_shoulder_yaw_link:[.88,.88,.88],left_elbow_link:[.92,.9,.9],right_elbow_link:[.92,.9,.9],left_wrist_pitch_link:[.92,.9,.9],right_wrist_pitch_link:[.92,.9,.9]}},click:{maximumDistancePixels:5,maximumDurationMilliseconds:300},servoSeconds:.12,fallDelaySeconds:.5,discoveryChain:{id:"left-leg",label:"\u5DE6\u817F \xB7 \u9ACB\u2014\u819D\u2014\u8E1D",joints:[{name:"left_hip_pitch_joint",label:"\u9ACB \xB7 \u524D\u540E\u6446",link:"left_hip_yaw_link"},{name:"left_knee_joint",label:"\u819D \xB7 \u5C48\u4F38",link:"left_knee_link"},{name:"left_ankle_pitch_joint",label:"\u8E1D \xB7 \u4FEF\u4EF0",link:"left_ankle_roll_link"}],links:["left_hip_pitch_link","left_hip_roll_link","left_hip_yaw_link","left_knee_link","left_ankle_pitch_link","left_ankle_roll_link"],presets:[{id:"shallow",label:"\u8F7B\u5C48\u819D \xB7 30\xB0",kneeDegrees:30},{id:"crouch",label:"\u534F\u540C\u4E0B\u8E72 \xB7 45\xB0",kneeDegrees:45}]},interactionLimits:Object.fromEntries(["left","right"].flatMap(s=>[[`${s}_shoulder_pitch_joint`,{min:-90,max:90}],[`${s}_shoulder_roll_joint`,s==="left"?{min:0,max:100}:{min:-100,max:0}],[`${s}_shoulder_yaw_joint`,{min:-80,max:80}],[`${s}_elbow_joint`,{min:0,max:120}]])),partControls:[...["left","right"].flatMap(s=>[["hip_pitch","\u9ACB \xB7 \u524D\u540E\u6446",220,[`${s}_hip_yaw_link`,`${s}_hip_roll_link`]],["knee","\u819D \xB7 \u72EC\u7ACB\u5C48\u4F38",260,[]],["ankle_pitch","\u8E1D \xB7 \u4FEF\u4EF0",140,[`${s}_ankle_roll_link`]]].map(([e,t,n,i])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:"y",dragSensitivity:n,aliases:[...i]}))),{jointName:"waist_yaw_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u8F6C\u52A8",dragAxis:"x",dragSensitivity:220},{jointName:"waist_roll_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u4FA7\u503E",dragAxis:"x",dragSensitivity:100},{jointName:"waist_pitch_joint",label:"\u8170\u90E8 \xB7 \u524D\u540E\u4FEF\u4EF0",dragAxis:"y",dragSensitivity:100},...["left","right"].flatMap(s=>[["shoulder_pitch","\u80A9\u90E8\u524D\u540E\u6446","y"],["shoulder_roll","\u80A9\u90E8\u4FA7\u6446","x"],["shoulder_yaw","\u80A9\u90E8\u8F6C\u52A8","x"],["elbow","\u8098\u90E8\u5C48\u4F38","y"],["wrist_roll","\u624B\u8155\u6EDA\u8F6C","x"],["wrist_pitch","\u624B\u8155\u4FEF\u4EF0","y"],["wrist_yaw","\u624B\u8155\u8F6C\u52A8","x"]].map(([e,t,n])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:n,dragSensitivity:220,...e==="wrist_yaw"?{aliases:[`${s}_rubber_hand`]}:{}})))]};var Hn=s=>{let e=Math.max(0,Math.min(1,s));return e*e*e*(10+e*(-15+6*e))},ai={backflip:3.25,jump:2.65,sit:4.2},Vn={takeoff:.8,flight:{backflip:1.15,jump:.7},sitDown:1.1,sitRise:2.7},fa=s=>typeof s=="string"&&s in ai;function Rd(s,e){let t=ai[s],n=Math.max(0,Math.min(t,e));if(s==="sit"){let{sitDown:c,sitRise:h}=Vn,u=n<c?Hn(n/c):n<h?1:1-Hn((n-h)/(t-h));return{pitch:0,height:0,knee:16+54*u,arm:-8-30*u,phase:n<c?"\u5C48\u819D\u4E0B\u6C89":n<h?"\u4FDD\u6301\u8E72\u5750":"\u6062\u590D\u7AD9\u7ACB"}}let i=Vn.takeoff,r=Vn.flight[s],a=i+r;if(n<i){let c=n<.55?Hn(n/.55):1-Hn((n-.55)/.25);return{pitch:0,height:0,knee:16+48*c,arm:-8-44*c,phase:"\u84C4\u529B\u8E6C\u5730"}}if(n<a){let c=(n-i)/r,h=Math.sin(Math.PI*c);return{pitch:s==="backflip"?-Math.PI*2*Hn(c):0,height:4*(s==="backflip"?.88:.34)*c*(1-c),knee:16+54*h,arm:-8-60*h,phase:s==="backflip"?"\u817E\u7A7A\u540E\u7FFB":"\u817E\u7A7A"}}let o=(n-a)/(t-a),l=o<.28?Hn(o/.28):1-Hn((o-.28)/.72);return{pitch:s==="backflip"?-Math.PI*2:0,height:0,knee:16+42*l,arm:-8-25*l,phase:o<.4?"\u843D\u5730\u7F13\u51B2":"\u6062\u590D\u7AD9\u7ACB"}}var xn=[{id:"elbow",title:"\u53F3\u8098 \xB7 \u5F2F\u66F2",joint:"right_elbow_joint",rest:15,min:5,max:105,goal:70,direction:1,copy:"\u7535\u673A\u628A\u524D\u81C2\u8F6C\u5230\u76EE\u6807\u89D2\u5EA6\uFF0C\u4F4D\u7F6E\u8BEF\u5DEE\u8D8A\u5C0F\uFF0C\u6821\u51C6\u8D8A\u51C6\u786E\u3002"},{id:"shoulder",title:"\u53F3\u80A9 \xB7 \u62AC\u81C2",joint:"right_shoulder_pitch_joint",rest:-8,min:-75,max:10,goal:-50,direction:-1,copy:"\u80A9\u90E8\u7ED5\u6A2A\u8F74\u524D\u540E\u6446\u3002\u5DE6\u6746\u5411\u4E0A\u62AC\u81C2\uFF0C\u8D1F\u89D2\u5EA6\u53EA\u662F\u6A21\u578B\u5750\u6807\u7684\u7EA6\u5B9A\u3002"},{id:"waist",title:"\u8170\u90E8 \xB7 \u8F6C\u52A8",joint:"waist_yaw_joint",rest:0,min:-25,max:25,goal:18,direction:1,copy:"\u4E0B\u8EAB\u56FA\u5B9A\u65F6\uFF0C\u8170\u90E8\u8BA9\u4E0A\u8EAB\u8F6C\u5411\u3002\u8FD9\u91CC\u72EC\u7ACB\u63A7\u5236\u4E00\u4E2A\u65CB\u8F6C\u81EA\u7531\u5EA6\u3002"}],pa=class{selected="elbow";target=15;settled=0;positions={elbow:15,shoulder:-8,waist:0};completed=new Set;feedback="\u628A\u5B9E\u9645\u89D2\u5EA6\u8C03\u5230\u91D1\u8272\u76EE\u6807\u9644\u8FD1\uFF0C\u677E\u6746\u505C\u7A33\uFF0C\u518D\u6309 A \u786E\u8BA4\u3002";get spec(){return xn.find(e=>e.id===this.selected)}get angle(){return this.positions[this.selected]}angleForJoint(e){let t=xn.find(n=>n.joint===e);return t?this.positions[t.id]:void 0}get error(){return Math.abs(this.angle-this.spec.goal)}select(e){xn.some(t=>t.id===e)&&(this.selected=e,this.resetPose())}step(e){let t=xn.findIndex(n=>n.id===this.selected);this.select(xn[(t+Math.sign(e)+xn.length)%xn.length].id)}resetPose(){this.target=this.spec.rest,this.settled=0,this.demonstrating=!1,this.feedback="\u63A8\u5DE6\u6746\u8C03\u8282\uFF0C\u677E\u5F00\u540E\u7B49\u5F85\u7535\u673A\u8DDF\u4E0A\uFF0C\u518D\u786E\u8BA4\u76EE\u6807\u3002"}reset(){this.completed.clear(),this.selected="elbow";for(let e of xn)this.positions[e.id]=e.rest;this.resetPose()}diagnose(){this.target=this.spec.goal,this.settled=0,this.feedback="\u6B63\u5728\u6F14\u793A\u8BCA\u65AD\u59FF\u6001 \xB7 \u793A\u8303\u4E0D\u8BA1\u5206\uFF0C\u8BF7\u590D\u4F4D\u540E\u81EA\u5DF1\u5C1D\u8BD5\u3002",this.demonstrating=!0}demonstrating=!1;update(e,t){if(!Number.isFinite(e)||e<=0)return;let n=Math.min(.1,e),i=t.labAdjust??t.forward;if(!Number.isFinite(i))return;t.labSelect&&this.select(t.labSelect),t.labStep&&this.step(t.labStep),t.labReset&&(this.resetPose(),this.demonstrating=!1),Math.abs(i)>.02&&(this.target=Math.max(this.spec.min,Math.min(this.spec.max,this.target+i*this.spec.direction*38*n)),this.demonstrating=!1,this.feedback="\u89C2\u5BDF\u5B9E\u9645\u89D2\u5EA6\u600E\u6837\u8DDF\u4E0A\u6307\u4EE4\uFF0C\u63A5\u8FD1\u76EE\u6807\u540E\u677E\u5F00\u6447\u6746\u3002");let r=1-Math.exp(-n/.13);for(let a of xn)this.positions[a.id]+=((a.id===this.selected?this.target:a.rest)-this.positions[a.id])*r;this.settled=Math.abs(i)<.02&&Math.abs(this.target-this.angle)<1?this.settled+n:0,(t.labConfirm||t.wave)&&this.confirm()}confirm(){if(this.demonstrating){this.feedback="\u8FD9\u662F\u8BCA\u65AD\u793A\u8303 \xB7 \u8BF7\u6309\u590D\u4F4D\uFF0C\u518D\u624B\u52A8\u8C03\u8282\u540E\u786E\u8BA4\u3002";return}if(this.settled<.4){this.feedback="\u5148\u677E\u5F00\u6447\u6746\uFF0C\u7B49\u5B9E\u9645\u89D2\u5EA6\u7A33\u5B9A\uFF0C\u518D\u786E\u8BA4\u4E00\u6B21\u3002";return}if(this.error>4){this.feedback=`\u8FD8\u5DEE\u7EA6 ${Math.round(this.error)}\xB0 \xB7 ${this.spec.title}\u9700\u8981\u518D\u8C03\u4E00\u70B9\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u5C1D\u8BD5\u3002`;return}this.completed.add(this.selected),this.feedback=this.completed.size===xn.length?"\u4E09\u4E2A\u5173\u8282\u6821\u51C6\u5B8C\u6210\uFF01\u4F60\u5DF2\u4F53\u9A8C\u6307\u4EE4\u3001\u4F3A\u670D\u8DDF\u968F\u4E0E\u4F4D\u7F6E\u8BEF\u5DEE\u3002":"\u6821\u51C6\u6210\u529F\uFF01\u6362\u4E00\u4E2A\u5173\u8282\uFF0C\u770B\u770B\u4E0D\u540C\u81EA\u7531\u5EA6\u7684\u4F5C\u7528\u3002"}};var ga=["walk","turn","park","stand","damp","recover","perform","complete"],Ci=ga.length-1,Yt={arrival:{...rt.welcome,radius:.38,label:"A"},parking:{...rt.destination,radius:.32,label:"B"},arrivalSeconds:.85,parkingSeconds:1.1,headingSeconds:.65,headingTolerance:12*Math.PI/180},Cd=(s,e)=>Math.atan2(Math.sin(s-e),Math.cos(s-e)),ma=class{index=0;progress=0;hold=0;notice="";headingError=0;amount=0;lastDistance=0;lastYaw=rt.spawn.yaw;lastX=rt.spawn.x;lastZ=rt.spawn.z;noticeSeconds=0;get step(){return ga[this.index]}get target(){return this.step==="walk"?Yt.arrival:Yt.parking}get navigating(){return["walk","turn","park"].includes(this.step)}get score(){return this.step==="complete"?100:Math.round(this.index/Ci*100)}reset(){this.index=0,this.progress=this.amount=this.lastDistance=this.hold=this.headingError=this.noticeSeconds=0,this.notice="",this.lastYaw=rt.spawn.yaw,this.lastX=rt.spawn.x,this.lastZ=rt.spawn.z}next(){let e={walk:"\u2713 A \u70B9\u5230\u8FBE\uFF01\u63A5\u4E0B\u6765\u5BF9\u51C6 B \u70B9",turn:"\u2713 \u671D\u5411\u6B63\u786E\uFF01\u73B0\u5728\u9A76\u5411 B \u70B9",park:"\u2713 B \u70B9\u505C\u7A33\uFF01\u5F00\u59CB\u5B66\u4E60\u6A21\u5F0F\u5207\u6362",perform:`\u2713 ${Ci} \u9879\u4EFB\u52A1\u5168\u90E8\u5B8C\u6210\uFF01`};this.notice=e[this.step]??"\u2713 \u5B8C\u6210\uFF0C\u7EE7\u7EED\u4E0B\u4E00\u9879",this.noticeSeconds=2.2,this.index=Math.min(Ci,this.index+1),this.amount=this.hold=0,this.progress=this.step==="complete"?1:0}update(e,t){var c;e=Math.max(0,Math.min(.1,e));let n=Math.max(0,t.distance-this.lastDistance),i=Math.abs(Cd(t.yaw,this.lastYaw)),r=Math.hypot(t.x-this.lastX,t.z-this.lastZ)>n+.015;if(this.lastDistance=t.distance,this.lastYaw=t.yaw,this.lastX=t.x,this.lastZ=t.z,this.headingError=Cd(Math.atan2(this.target.x-t.x,this.target.z-t.z),t.yaw),!t.running||t.paused||t.experience!=="mission"||this.step==="complete"){this.hold=0;return}this.noticeSeconds>0&&(this.noticeSeconds-=e,this.noticeSeconds<=0&&(this.notice="")),r&&(this.amount=this.hold=this.progress=0);let a=t.body==="upright"&&!t.needsNeutral,o=a&&t.mode==="locomotion"&&!t.gesture,l=t.speed<.055&&Math.abs(t.angular)<.14;switch(this.step){case"walk":case"park":{o&&!r&&(this.amount+=Math.min(n,.09));let h=Math.hypot(t.x-this.target.x,t.z-this.target.z),u=h<=this.target.radius,d=this.step==="walk"?Yt.arrivalSeconds:Yt.parkingSeconds;this.hold=o&&l&&u&&this.amount>=.25?this.hold+e:0;let f=this.step==="walk"?Math.hypot(Yt.arrival.x,Yt.arrival.z):Math.hypot(Yt.parking.x-Yt.arrival.x,Yt.parking.z-Yt.arrival.z);this.progress=this.amount<.25?0:Math.min(.7,Math.max(0,1-h/f)*.7)+Math.min(1,this.hold/d)*.3,this.hold>=d&&(this.progress=1);break}case"turn":o&&(this.amount+=Math.min(i,.2)),this.hold=o&&l&&Math.abs(this.headingError)<=Yt.headingTolerance&&this.amount>=.2?this.hold+e:0,this.progress=Math.min(.7,Math.max(0,1-Math.abs(this.headingError)/Math.PI)*.7)+Math.min(1,this.hold/Yt.headingSeconds)*.3,this.hold>=Yt.headingSeconds&&(this.progress=1);break;case"stand":this.amount=a&&t.mode==="stand"?this.amount+e:0,this.progress=Math.min(1,this.amount/.6);break;case"damp":this.progress=t.mode==="damp"?t.body==="fallen"?1:t.body==="falling"?.45:.1:0;break;case"recover":this.progress=t.body==="upright"&&t.mode==="stand"?1:t.body==="recovering"?.5:0;break;case"perform":this.progress=t.mode==="performance"?(c=t.gesture)!=null&&c.includes("dance")?.6:.2:0;break}this.progress>=1&&this.next()}finishAction(e,t){t.running&&!t.paused&&t.experience==="mission"&&this.step==="perform"&&t.mode==="performance"&&e.includes("dance")&&this.next()}};function Vc(s,e,t,n,i){let r=e==="exhibition-android",a=r?"LB":"LT",o=(h,u)=>t?u:h,l=!t&&!r?"LT \u7EC4\u5408\u9700\u6309\u4F4F\u6EE1 2 \u79D2\u3002":"";return{walk:{title:"\u7B2C\u4E00\u7AD9 \xB7 \u5230 A \u70B9\u62A5\u5230",instruction:"\u9A76\u5165\u91D1\u8272 A \u5708\uFF0C\u677E\u5F00\u6447\u6746\u505C\u7A33\u3002\u8DEF\u8FC7\u4E0D\u7B97\uFF0C\u9700\u8981\u505C\u7559\u7EA6 1 \u79D2\u3002",keys:o("L \u5DE6\u6447\u6746 \xB7 \u79FB\u52A8 / \u677E\u5F00\u505C\u8F66","WASD / \u89E6\u5C4F\u65B9\u5411\u952E \xB7 \u677E\u5F00\u505C\u8F66"),knowledge:"\u5148\u770B\u76EE\u7684\u5730\uFF0C\u518D\u8F7B\u63A8\u6447\u6746\uFF1B\u673A\u5668\u4EBA\u51CF\u901F\u9700\u8981\u8DDD\u79BB\uFF0C\u63D0\u524D\u677E\u6746\u66F4\u5BB9\u6613\u505C\u51C6\u3002",focus:"walk",button:"\u6309\u4F4F\u4E0B\u65B9\u65B9\u5411\u952E",command:null},turn:{title:"\u770B\u51C6\u65B9\u5411 \xB7 \u5BF9\u51C6 B \u70B9",instruction:"\u539F\u5730\u8F6C\u5411\uFF0C\u8BA9\u5730\u9762\u671D\u5411\u7BAD\u5934\u5BF9\u51C6 B \u5708\uFF0C\u518D\u677E\u5F00\u6447\u6746\u3002",keys:o("R \u53F3\u6447\u6746 \u2190 / \u2192","Q / E \xB7 \u6216\u5C4F\u5E55\u5DE6\u8F6C / \u53F3\u8F6C"),knowledge:"\u8F6C\u5411\u662F\u6539\u53D8\u8EAB\u4F53\u671D\u5411\uFF1B\u8981\u5BF9\u51C6\u5B9E\u9645\u76EE\u6807\uFF0C\u800C\u4E0D\u662F\u53EA\u8F6C\u8FC7\u56FA\u5B9A\u89D2\u5EA6\u3002",focus:"turn",button:"\u6309\u4F4F\u4E0B\u65B9\u8F6C\u5411\u952E",command:null},park:{title:"\u7B2C\u4E8C\u7AD9 \xB7 \u5728 B \u70B9\u7CBE\u51C6\u505C\u8F66",instruction:"\u6CBF\u7BAD\u5934\u9A76\u5411 B \u5708\uFF0C\u8FDB\u5165\u5708\u5185\u540E\u677E\u6746\u505C\u7A33\u7EA6 1 \u79D2\u3002\u6CE8\u610F\u907F\u5F00\u5C55\u53F0\u3002",keys:o("L \u79FB\u52A8 + R \u4FEE\u6B63\u65B9\u5411","WASD \u79FB\u52A8 \xB7 Q / E \u8F6C\u5411"),knowledge:"\u79FB\u52A8\u4E0E\u8F6C\u5411\u914D\u5408\u624D\u80FD\u5230\u8FBE\u6307\u5B9A\u4F4D\u7F6E\uFF1B\u5C0F\u5E45\u4FEE\u6B63\u548C\u63D0\u524D\u51CF\u901F\uFF0C\u6BD4\u4E00\u76F4\u63A8\u6EE1\u66F4\u51C6\u786E\u3002",focus:"park",button:"\u6309\u4F4F\u4E0B\u65B9\u65B9\u5411\u952E",command:null},stand:{title:"\u7AD9\u7A33\uFF0C\u51C6\u5907\u5207\u6362\u6A21\u5F0F",instruction:"\u5207\u5230\u201C\u9501\u5B9A\u7AD9\u7ACB\u201D\uFF0C\u89C2\u5BDF\u6447\u6746\u4E0D\u518D\u5E26\u52A8\u884C\u8D70\u3002",keys:o(r?"\u70B9\u4E0A\u65B9\u300C\u9501\u5B9A\u7AD9\u7ACB\u300D":"LT + \u2191","\u70B9\u51FB\u300C\u9501\u5B9A\u7AD9\u7ACB\u300D"),knowledge:"\u7AD9\u7ACB\u6A21\u5F0F\u4ECD\u4E3B\u52A8\u63A7\u5236\u5173\u8282\uFF0C\u4EE5\u7EF4\u6301\u59FF\u6001\u3002"+l,focus:"stand",button:"\u5207\u6362\u9501\u5B9A\u7AD9\u7ACB",command:{mode:"stand"}},damp:{title:"\u5173\u8282\u6709\u963B\u529B\uFF0C\u8FD8\u80FD\u7AD9\u4F4F\u5417\uFF1F",instruction:"\u5207\u6362\u201C\u963B\u5C3C\u201D\uFF0C\u89C2\u5BDF\u673A\u5668\u4EBA\u5931\u53BB\u4E3B\u52A8\u652F\u6491\u540E\u7F13\u6162\u5012\u4E0B\u3002",keys:o(`${a} + B`,"\u70B9\u51FB\u300C\u963B\u5C3C\u6A21\u5F0F\u300D"),knowledge:"\u963B\u5C3C\u63D0\u4F9B\u8FD0\u52A8\u963B\u529B\uFF0C\u4E0D\u8D1F\u8D23\u4E3B\u52A8\u7AD9\u7A33\uFF1B\u96F6\u529B\u77E9\u66F4\u653E\u677E\u3002\u5012\u5730\u4E3A\u7F51\u9875\u793A\u610F\u3002"+l,focus:"damp",button:"\u4F53\u9A8C\u963B\u5C3C",command:{mode:"damp"}},recover:{title:"\u73B0\u5728\uFF0C\u7531\u4F60\u6276\u5B83\u8D77\u6765",instruction:n==="falling"?"\u7B49\u6A21\u578B\u843D\u5730\uFF0C\u518D\u6309\u8D77\u8EAB\u7EC4\u5408\u952E\u3002":n==="recovering"?"\u6B63\u5728\u6536\u62E2\u56DB\u80A2\u3001\u6062\u590D\u652F\u6491\uFF0C\u8BF7\u7A0D\u5019\u2026":"\u6309\u8D77\u8EAB\u7EC4\u5408\u952E\uFF0C\u89C2\u5BDF\u673A\u5668\u4EBA\u6062\u590D\u7AD9\u7ACB\u3002",keys:o(`${a} + X`,"\u70B9\u51FB\u300C\u8D77\u8EAB\u590D\u4F4D\u300D"),knowledge:"\u5012\u5730\u540E\u4E0D\u80FD\u76F4\u63A5\u884C\u8D70\uFF0C\u5148\u6062\u590D\u652F\u6491\uFF0C\u518D\u677E\u5F00\u6447\u6746\u91CD\u65B0\u63A5\u7BA1\u3002"+l,focus:"recover",button:n==="recovering"?"\u6B63\u5728\u8D77\u8EAB\u2026":"\u8D77\u8EAB\u590D\u4F4D",command:{recover:!0}},perform:{title:"\u7528\u4E00\u6BB5\u8868\u6F14\uFF0C\u5B8C\u6210\u521D\u4F53\u9A8C",instruction:i!=="performance"?"\u5148\u5207\u5230\u201C\u52A8\u4F5C\u8868\u6F14\u201D\uFF0C\u518D\u7528 RB + \u5F69\u8272\u952E\u9009\u62E9\u4E00\u6BB5\u821E\u8E48\u3002":"\u8BD5\u8BD5 RB + A / B / X / Y\uFF0C\u7B49\u6574\u6BB5\u52A8\u4F5C\u6F14\u5B8C\u3002",keys:o("RB + A / B / X / Y","\u70B9\u4E0B\u65B9\u4EFB\u4E00\u821E\u8E48\u5361\u7247"),knowledge:"\u8D70\u8DEF\u3001\u7AD9\u7ACB\u4E0E\u8868\u6F14\u4F7F\u7528\u4E0D\u540C\u63A7\u5236\u65B9\u5F0F\uFF1B\u5168\u8EAB\u52A8\u4F5C\u4F9D\u9760\u591A\u4E2A\u5173\u8282\u534F\u540C\u3002",focus:"perform",button:i!=="performance"?"\u8FDB\u5165\u52A8\u4F5C\u8868\u6F14":"\u8BD5\u8BD5\u5DE6\u53F3\u5F8B\u52A8",command:i!=="performance"?{mode:"performance"}:{actionTrigger:"dance"}},complete:{title:"\u4F60\u5DF2\u7ECF\u4F1A\u9A7E\u9A76 G1 \u4E86",instruction:"\u4E24\u7AD9\u5230\u8FBE\u3001\u5BF9\u51C6\u505C\u8F66\u3001\u6A21\u5F0F\u5207\u6362\u3001\u8D77\u8EAB\u548C\u8868\u6F14\uFF0C\u5168\u90E8\u4EB2\u624B\u5B8C\u6210\u3002",keys:`${Ci} / ${Ci} \xB7 \u5165\u95E8\u5B8C\u6210`,knowledge:"\u7EE7\u7EED\u63A2\u7D22\u5176\u4ED6\u52A8\u4F5C\uFF0C\u6216\u5207\u56DE\u81EA\u7531\u4F53\u9A8C\u3002\u6240\u6709\u52A8\u4F5C\u5747\u4E3A\u7F51\u9875\u6A21\u62DF\uFF0C\u4E0D\u8FDE\u63A5\u5B9E\u673A\u3002",focus:"complete",button:"\u7EE7\u7EED\u81EA\u7531\u4F53\u9A8C",command:null}}[s.step]}var et={x:-1.25,z:-1.5,radius:.34,validRadius:.48,settleSeconds:.8,attachSeconds:1.15,releaseSeconds:.75,standingSeconds:.5,lift:.055,maxSpeed:.035,maxAngular:.08,posts:[{id:"\u540A\u67B6\u5DE6\u7ACB\u67F1",x:-2.08,z:-1.85,width:.1,depth:.1},{id:"\u540A\u67B6\u53F3\u7ACB\u67F1",x:-.52,z:-1.85,width:.1,depth:.1}]},Pd=s=>s*s*(3-2*s),_a=class{phase="detached";progress=0;hold=0;standing=0;distance=1/0;observed=new Set;completed=!1;get locked(){return this.phase!=="detached"}get supported(){return this.phase==="supported"||this.phase==="releasing"}get ready(){return this.hold>=et.settleSeconds}get lift(){return et.lift*(this.phase==="supported"?1:this.phase==="attaching"?Pd(this.progress):this.phase==="releasing"?1-Pd(this.progress):0)}reset(){this.phase="detached",this.progress=this.hold=this.standing=this.observeTime=0,this.observing=null,this.distance=1/0,this.observed.clear(),this.completed=!1}update(e,t,n){if(this.distance=Math.hypot(t.x-et.x,t.z-et.z),!t.running||t.paused)return this.hold=0,null;let i=Math.max(0,Math.min(.1,e));if(this.locked&&(this.distance>et.validRadius||t.body!=="upright"))return this.phase="detached",this.progress=this.hold=this.standing=0,"lost";if(this.phase==="attaching"||this.phase==="releasing"){let l=this.phase==="releasing";return this.progress=Math.min(1,this.progress+i/(l?et.releaseSeconds:et.attachSeconds)),this.progress>=1?(this.phase=l?"detached":"supported",this.progress=0,this.hold=this.standing=0,l?(this.completed=this.observed.size===2,"released"):"attached"):null}if(this.phase==="supported")return this.standing=t.mode==="stand"?this.standing+i:0,t.mode==="damp"||t.mode==="zero"?(this.observing===t.mode?this.observeTime+=i:(this.observing=t.mode,this.observeTime=i),this.observeTime>=.6&&this.observed.add(t.mode)):(this.observing=null,this.observeTime=0),null;let r=[n.forward,n.strafe,n.turn].every(l=>Math.abs(l)<.03),a=t.mode==="locomotion"||t.mode==="stand",o=this.distance<=et.radius&&t.speed<et.maxSpeed&&Math.abs(t.angular)<et.maxAngular&&r&&a&&t.body==="upright"&&!t.gesture;return this.hold=o?Math.min(et.settleSeconds,this.hold+i):0,null}observing=null;observeTime=0;request(e){return!e.running||e.paused?{accepted:!1,message:"\u5148\u5F00\u59CB / \u7EE7\u7EED\u4F53\u9A8C\uFF0C\u518D\u64CD\u4F5C\u540A\u67B6\u3002"}:this.phase==="attaching"||this.phase==="releasing"?{accepted:!1,message:"\u540A\u5E26\u6B63\u5728\u8C03\u6574\uFF0C\u8BF7\u7B49\u5F85\u52A8\u4F5C\u5B8C\u6210\u3002"}:this.phase==="supported"?e.mode!=="stand"||this.standing<et.standingSeconds?{accepted:!1,message:"\u5148\u6062\u590D\u9501\u5B9A\u7AD9\u7ACB\uFF0C\u7B49\u59FF\u52BF\u7A33\u5B9A\u540E\u518D\u89E3\u6302\u3002"}:(this.phase="releasing",this.progress=0,{accepted:!0,message:"\u7F13\u6162\u843D\u811A \xB7 \u53CC\u811A\u63A5\u5730\u540E\u89E3\u5F00\u540A\u5E26\uFF0C\u518D\u6062\u590D\u884C\u8D70\u3002"}):!this.ready||this.distance>et.radius||e.speed>=et.maxSpeed||Math.abs(e.angular)>=et.maxAngular||e.body!=="upright"||e.gesture||!["locomotion","stand"].includes(e.mode)?{accepted:!1,message:"\u9A76\u5165 H \u5708\u3001\u677E\u5F00\u6447\u6746\u505C\u7A33\uFF0C\u63D0\u793A\u5C31\u7EEA\u540E\u6309 A \u786E\u8BA4\u6302\u63A5\u3002"}:(this.phase="attaching",this.progress=0,this.observed.clear(),this.completed=!1,{accepted:!0,message:"\u8FDE\u63A5\u53CC\u540A\u5E26\u5E76\u7F13\u6162\u6536\u7D27 \xB7 \u5B8C\u6210\u6302\u63A5\u540E\u624D\u80FD\u63D0\u4F9B\u652F\u6491\u3002"})}};var Qs=(s,e)=>Math.atan2(Math.sin(s-e),Math.cos(s-e)),ya=class{lab=new pa;tutorial=new ma;hoist=new _a;hoistConsole=!1;debugTab="joints";debugPreview=null;previewRevision=0;previewSeconds=0;get hoistAvailable(){return this.experience==="free"}get hoistContext(){return this.hoistAvailable&&(this.hoistConsole||this.hoist.locked)}showHoist(e){this.hoistConsole=e&&this.hoistAvailable}previewDance(e){!rr(e)||this.mode!=="debug"||!this.hoist.supported||!this.running||this.paused||this.body!=="upright"||this.needsNeutral||(this.debugPreview=e,this.previewRevision++,this.previewSeconds=as(e).reduce((t,n)=>t+n.duration,0),this.message="\u540A\u6302\u4E0A\u80A2\u9884\u89C8 \xB7 \u5B8C\u6574\u5168\u8EAB\u52A8\u4F5C\u8BF7\u4FDD\u5B58\u540E\u7AD9\u7A33\u3001\u89E3\u6302\uFF0C\u518D\u8868\u6F14\u3002")}stopPreview(){this.debugPreview=null,this.previewSeconds=0}x=rt.spawn.x;z=rt.spawn.z;yaw=rt.spawn.yaw;vx=0;vz=0;angular=0;speed=0;distance=0;seconds=0;get stage(){return this.tutorial.step}gesture=null;running=!1;paused=!1;contact="";message="\u51C6\u5907\u597D\u4E86\u5417\uFF1F\u63A5\u8FC7\u624B\u67C4\uFF0C\u6210\u4E3A G1 \u7684\u9A7E\u9A76\u5458\u3002";score=0;stars=0;arriveHold=0;touches=0;contactBefore=!1;mode="locomotion";selectedAction="wave";needsNeutral=!1;speedMode="slow";stepping=!1;body="upright";bodyProgress=0;fallDuration=1.2;fallDirection=0;falls=0;fallCause="mode";impactX=0;impactZ=0;recoil=null;obstacles;hoistObstacles;experience;constructor(e={}){this.obstacles=e.obstacles??rt.obstacles,this.hoistObstacles=[...this.obstacles,...et.posts],this.experience=e.experience??"mission"}setExperience(e){e!==this.experience&&(this.reset(),this.experience=e,this.suspend(e==="mission"?"\u64CD\u4F5C\u5165\u95E8\u51C6\u5907\u597D\u4E86 \xB7 \u6309 A \u5F00\u59CB\uFF0C\u5148\u9A7E\u9A76\u5230 A \u70B9\u5E76\u505C\u7A33\u3002":"\u81EA\u7531\u4F53\u9A8C \xB7 \u6309 A \u5F00\u59CB\uFF0C\u5148\u8BD5\u8BD5\u79FB\u52A8\u4E0E LB / RB \u7EC4\u5408\u952E\u3002"))}get target(){return this.hoistContext?et:this.experience==="mission"?this.tutorial.target:rt.welcome}get targetDistance(){return Math.hypot(this.x-this.target.x,this.z-this.target.z)}get facingError(){let e=rt.visitor;return Qs(Math.atan2(e.x-this.x,e.z-this.z),this.yaw)}start(){if(this.running=!0,this.paused=!1,qt(this.mode)&&this.mode!=="debug"&&this.body==="upright"&&!this.hoist.supported&&this.beginFall(),this.hoistContext){this.message=this.hoist.supported?"\u540A\u5E26\u652F\u6491\u6709\u6548 \xB7 \u53EF\u5207\u963B\u5C3C / \u96F6\u529B\u77E9\uFF0C\u6062\u590D\u7AD9\u7ACB\u540E\u6309 A \u89E3\u6302\u3002":"\u9A76\u5165 H \u5708\u5E76\u505C\u7A33 \xB7 \u6309 A \u786E\u8BA4\u6302\u63A5\uFF1B\u53EA\u8FDB\u5165\u5708\u5185\u6CA1\u6709\u4FDD\u62A4\u3002";return}this.message=this.mode==="locomotion"?this.experience==="free"?"\u81EA\u7531\u9A7E\u9A76\u5F00\u59CB\u4E86 \xB7 \u5DE6\u6746\u79FB\u52A8\uFF0C\u53F3\u6746\u8F6C\u8EAB\uFF1B\u7AD9\u7A33\u540E\u8BD5\u8BD5 RB + \u5F69\u8272\u952E\u3002":"\u8DDF\u968F\u4E0B\u65B9\u5165\u95E8\u63D0\u793A\u64CD\u4F5C\uFF1B\u6BCF\u5B8C\u6210\u4E00\u6B65\uFF0C\u4F1A\u81EA\u52A8\u70B9\u4EAE\u4E0B\u4E00\u6B65\u3002":Ri.find(e=>e.id===this.mode).copy}suspend(e="\u5DF2\u6682\u505C \xB7 \u70B9\u51FB\u7EE7\u7EED\u540E\u518D\u64CD\u63A7"){this.paused=!0,this.stop(),this.message=e}stop(){this.vx=this.vz=this.angular=this.speed=0}setMode(e){if(!Ri.some(i=>i.id===e)||e===this.mode&&!(this.body==="recovering"&&qt(e)))return;if(this.hoistAvailable){if(this.hoist.phase==="attaching"||this.hoist.phase==="releasing"){this.message="\u6B63\u5728\u8C03\u6574\u540A\u5E26 \xB7 \u5B8C\u6210\u540E\u518D\u5207\u6362\u6A21\u5F0F\u3002";return}if(this.hoist.supported&&["locomotion","performance"].includes(e)){this.message="\u540A\u5E26\u5DF2\u8FDE\u63A5 \xB7 \u5148\u6062\u590D\u7AD9\u7ACB\u5E76\u6309 A \u89E3\u6302\uFF0C\u518D\u9A7E\u9A76\u6216\u8868\u6F14\u3002";return}if(e==="debug"&&!this.hoist.supported){this.message="\u8C03\u8BD5\u9700\u8981\u540A\u5E26\u652F\u6491 \xB7 \u5148\u8D77\u8EAB\u3001\u9A76\u5165 H \u5708\u5E76\u786E\u8BA4\u6302\u63A5\u3002";return}}if(e==="debug"&&!qt(this.mode)){this.message="\u5148\u5207\u6362\u963B\u5C3C\u6216\u96F6\u529B\u77E9\uFF0C\u518D\u7528\u4E0B\u65B9\u300C\u5173\u8282\u5B9E\u9A8C\u300D\u5361\u7247\u6216\u5BF9\u5E94\u7EC4\u5408\u952E\u8FDB\u5165\u3002";return}if(this.mode==="debug"&&!["debug","damp","zero"].includes(e)&&!(this.hoistAvailable&&this.hoist.supported&&e==="stand")){this.message="\u8C03\u8BD5\u7531\u865A\u62DF\u540A\u67B6\u652F\u6491 \xB7 \u5148\u9000\u51FA\u5230\u963B\u5C3C\uFF0C\u518D\u8D77\u8EAB\u6062\u590D\u884C\u8D70\u3002";return}if(this.body!=="upright"&&!qt(e)){this.message="\u6A21\u578B\u5DF2\u5931\u53BB\u652F\u6491 \xB7 \u8BF7\u5148\u8D77\u8EAB\u590D\u4F4D\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5207\u56DE\u884C\u8D70\u3002";return}let t=this.vx,n=this.vz;this.stopPreview(),this.debugTab="joints",this.stop(),this.mode=e,this.gesture=null,this.arriveHold=0,this.needsNeutral=!0,this.stepping=!1,e==="debug"?(this.lab.reset(),this.hoist.supported||(this.body="recovering",this.bodyProgress=0)):qt(e)&&this.running&&(this.body==="upright"||this.body==="recovering")&&!this.hoist.supported&&this.beginFall(t,n),this.message=this.hoist.supported?e==="stand"?"\u4E3B\u52A8\u6062\u590D\u7AD9\u59FF \xB7 \u59FF\u52BF\u7A33\u5B9A\u540E\u6309 A \u89E3\u6302\u3002":e==="damp"?"\u540A\u5E26\u627F\u91CD \xB7 \u5173\u8282\u5E26\u963B\u529B\u7F13\u6162\u653E\u677E\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u7AD9\u7ACB\u3002":e==="zero"?"\u540A\u5E26\u627F\u91CD \xB7 \u5173\u8282\u66F4\u5FEB\u653E\u677E\uFF0C\u811A\u79BB\u5730\uFF0C\u4E0D\u4F1A\u7EF4\u6301\u7AD9\u59FF\u3002":Ri.find(i=>i.id===e).copy:Ri.find(i=>i.id===e).copy}beginFall(e=0,t=0){this.fallCause="mode",this.body="falling",this.bodyProgress=0,this.fallDuration=this.mode==="zero"?.68:1.25,this.falls++,this.fallDirection=Math.hypot(e,t)>.04?Math.atan2(e,t)-this.yaw:0}collide(){if(this.body!=="upright")return;let e=Math.hypot(this.impactX,this.impactZ)||1,t=this.impactX/e,n=this.impactZ/e;this.beginFall(t,n),this.fallCause="collision",this.fallDuration=.55,this.fallDirection=Math.atan2(t,n)-this.yaw,this.recoil={x:this.x,z:this.z,nx:t,nz:n},this.stop(),this.gesture=null,this.stepping=!1,this.needsNeutral=!0,this.message=`\u78B0\u5230${this.contact}\uFF0C\u5931\u53BB\u5E73\u8861 \xB7 \u7B49\u843D\u5730\u540E\u8D77\u8EAB\uFF0C\u518D\u677E\u5F00\u6447\u6746\u7EE7\u7EED\u3002`}recover(){if(this.body!=="fallen"){this.message=this.body==="falling"?"\u7B49\u5F85\u6A21\u578B\u843D\u5730\u540E\u518D\u8D77\u8EAB\u3002":"\u5F53\u524D\u65E0\u9700\u8D77\u8EAB\u590D\u4F4D\u3002";return}this.stop(),this.gesture=null,this.body="recovering",this.bodyProgress=0,this.stepping=!1,this.message="\u8D77\u8EAB\u590D\u4F4D\u4E2D \xB7 \u6536\u62E2\u56DB\u80A2\u3001\u6062\u590D\u652F\u6491\uFF0C\u5B8C\u6210\u540E\u8BF7\u677E\u5F00\u6447\u6746\u3002"}selectAction(e){rr(e)&&(this.selectedAction=e,!this.gesture&&this.body==="upright"&&(this.message=`\u5DF2\u9009\u62E9${qn(e).title} \xB7 \u7AD9\u7A33\u540E\u6309 A \u6F14\u793A\u3002`))}reset(){this.x=rt.spawn.x,this.z=rt.spawn.z,this.yaw=rt.spawn.yaw,this.stop(),this.distance=this.seconds=this.arriveHold=this.score=this.stars=this.touches=0,this.tutorial.reset(),this.gesture=null,this.contact="",this.running=!1,this.paused=!1,this.contactBefore=!1,this.message=this.experience==="free"?"\u81EA\u7531\u4F53\u9A8C\u51C6\u5907\u597D\u4E86 \xB7 \u5148\u8BD5\u8BD5\u79FB\u52A8\u4E0E LB / RB \u7EC4\u5408\u952E\u3002":"\u65B0\u7684\u64CD\u4F5C\u5165\u95E8\u51C6\u5907\u597D\u4E86\u3002",this.mode="locomotion",this.selectedAction="wave",this.needsNeutral=!1,this.lab.reset(),this.hoist.reset(),this.hoistConsole=!1,this.debugTab="joints",this.stopPreview(),this.body="upright",this.bodyProgress=0,this.falls=0,this.speedMode="slow",this.stepping=!1,this.fallCause="mode",this.impactX=this.impactZ=0,this.recoil=null}update(e,t){if(!(!Number.isFinite(e)||e<=0||![t.forward,t.strafe,t.turn,t.look].every(Number.isFinite))){if(this.hoistAvailable){let n=this.hoist.update(e,this,t);n==="lost"&&this.running&&!this.paused&&this.body==="upright"&&qt(this.mode)&&(this.mode==="debug"&&(this.mode="damp"),this.beginFall()),n==="attached"&&(this.message="\u53CC\u540A\u5E26\u5DF2\u6536\u7D27 \xB7 \u652F\u6491\u6709\u6548\uFF01\u8BD5\u7740\u5207\u6362\u963B\u5C3C\uFF0C\u518D\u5207\u96F6\u529B\u77E9\u3002"),n==="released"&&(this.needsNeutral=!0,this.message=this.hoist.completed?"\u540A\u6302\u4F53\u9A8C\u5B8C\u6210\uFF01\u4F60\u5DF2\u6BD4\u8F83\u4E24\u79CD\u6A21\u5F0F\uFF0C\u6062\u590D\u7AD9\u7ACB\u5E76\u987A\u5229\u89E3\u6302\u3002":"\u53CC\u811A\u63A5\u5730\u3001\u540A\u5E26\u5DF2\u89E3\u5F00 \xB7 \u5207\u56DE\u884C\u8D70\uFF0C\u677E\u5F00\u6447\u6746\u540E\u79BB\u5F00\u3002")}this.updateState(e,t),this.tutorial.update(Math.min(.1,e),this),this.score=this.experience==="mission"?this.tutorial.score:0,this.stars=this.stage==="complete"?3:0}}updateState(e,t){if(!Number.isFinite(e)||e<=0||![t.forward,t.strafe,t.turn,t.look].every(Number.isFinite))return;if(t.stop&&this.running){this.suspend("\u7F51\u9875\u5DF2\u6682\u505C \xB7 \u677E\u5F00 B\uFF0C\u6309 A \u7EE7\u7EED\uFF1B\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u518D\u51FA\u53D1\u3002");return}if(t.mode){this.setMode(t.mode);return}if(t.cycleMode){let a=["locomotion","stand","performance"];this.setMode(a[(a.indexOf(this.mode)+1)%a.length]);return}if(t.actionSelect&&this.selectAction(t.actionSelect),t.actionStep){let a=fn.findIndex(o=>o.id===this.selectedAction);this.selectAction(fn[(a+Math.sign(t.actionStep)+fn.length)%fn.length].id)}if(t.pause&&this.running){this.paused?this.start():this.suspend();return}if(t.toggleStand&&this.paused&&this.running){this.start();return}if(!this.running||this.paused)return;if(t.hoistAction&&this.hoistAvailable){if(this.body==="fallen"){this.recover();return}if(this.hoist.phase==="supported"&&this.mode!=="stand"){this.setMode("stand");return}if([t.forward,t.strafe,t.turn].some(o=>Math.abs(o)>.03)&&!this.hoist.locked){this.message="\u5148\u677E\u5F00\u6447\u6746\u5E76\u505C\u7A33\uFF0C\u518D\u786E\u8BA4\u6302\u63A5\u3002";return}let a=this.hoist.request(this);this.message=a.message,a.accepted&&(this.stop(),this.gesture=null,this.stepping=!1,this.mode="stand",this.needsNeutral=!0);return}if(t.recover&&this.recover(),t.speedMode&&(this.speedMode=t.speedMode),t.toggleStand&&this.setMode(this.mode==="locomotion"?"stand":"locomotion"),t.stepping&&this.body==="upright"&&!qt(this.mode)&&!this.hoist.locked&&(this.setMode("locomotion"),this.stepping=!0,this.message="\u6301\u7EED\u8E0F\u6B65 \xB7 \u53CC\u811A\u4EA4\u66FF\u62AC\u843D\uFF1B\u5355\u51FB\u83DC\u5355\u952E\uFF08\u2261\uFF09\u56DE\u5230\u7AD9\u7ACB\u3002"),t.diagnose&&this.mode!=="debug"&&(this.message="\u8BF7\u5148\u4ECE\u963B\u5C3C\u6216\u96F6\u529B\u77E9\u8FDB\u5165\u8C03\u8BD5\u5B9E\u9A8C\u3002"),this.body!=="upright"){if(this.stop(),this.body==="falling"){if(this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,e)/this.fallDuration),this.fallCause==="collision"&&this.recoil){let a=this.bodyProgress*(2-this.bodyProgress)*.18;this.x=this.recoil.x+this.recoil.nx*a,this.z=this.recoil.z+this.recoil.nz*a}this.bodyProgress>=1&&(this.body="fallen",this.message=this.fallCause==="collision"?`\u78B0\u649E\u5012\u5730 \xB7 ${this.contact}\u3002\u8BF7\u8D77\u8EAB\u590D\u4F4D\uFF0C\u518D\u6062\u590D\u884C\u8D70\u3002`:"\u6A21\u578B\u5DF2\u5012\u5730 \xB7 \u7528\u4E0B\u65B9\u300C\u8D77\u8EAB\u590D\u4F4D\u300D\u5361\u7247\u6216\u5BF9\u5E94\u7EC4\u5408\u952E\u6062\u590D\u652F\u6491\u3002")}else this.body==="recovering"&&(this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,e)/2.1),this.bodyProgress>=1&&(this.body="upright",this.mode!=="debug"&&(this.mode="stand"),this.needsNeutral=!0,this.message=this.mode==="debug"?"\u865A\u62DF\u540A\u67B6\u5DF2\u5C31\u7EEA \xB7 \u677E\u5F00\u6447\u6746\uFF0C\u5F00\u59CB\u5173\u8282\u5B9E\u9A8C\u3002":"\u5DF2\u7AD9\u7A33 \xB7 \u677E\u5F00\u6309\u952E\u540E\uFF0C\u7528\u6062\u590D\u884C\u8D70\u5361\u7247\u63A5\u7BA1\u3002"));return}if(this.needsNeutral)if([t.forward,t.strafe,t.turn,t.look].every(o=>Math.abs(o)<.02)&&!t.wave&&!t.invite)this.needsNeutral=!1;else{this.message="\u6A21\u5F0F\u5DF2\u5207\u6362 \xB7 \u5148\u677E\u5F00\u6447\u6746\u548C\u52A8\u4F5C\u952E\uFF0C\u518D\u5F00\u59CB\u64CD\u4F5C\u3002";return}if(this.mode==="debug"){if(this.stop(),this.gesture=null,this.debugPreview){this.previewSeconds-=Math.min(e,.1),this.previewSeconds<=0&&this.stopPreview();return}if(this.debugTab==="bindings")return;(t.diagnose||t.invite)&&this.lab.diagnose(),this.lab.update(e,t),this.message=this.lab.feedback;return}let n=Math.min(e,.1),i=Math.max(1,Math.ceil(n/(1/120))),r=n/i;this.contact="";for(let a=0;a<i;a++)if(this.integrate(r,t),this.contact){this.collide();break}this.contact&&!this.contactBefore&&this.touches++,this.contactBefore=!!this.contact,this.body==="upright"&&(this.gesture||(t.actionTrigger?(this.selectAction(t.actionTrigger),this.beginGesture(t.actionTrigger)):t.wave?this.beginGesture(this.selectedAction):t.invite&&this.beginGesture("invite")))}integrate(e,t){this.seconds+=e;let n=Math.max(1,Math.hypot(t.forward,t.strafe)),i=this.speedMode==="fast"?rt.fastSpeed:rt.slowSpeed,r=this.mode==="locomotion"&&!this.gesture&&this.body==="upright"&&!this.hoist.locked,a=r?t.forward/n*i:0,o=r?t.strafe/n*i:0,l=1-Math.exp(-e/rt.accelerationSeconds);this.angular+=(Math.max(-1,Math.min(1,t.turn))*rt.turnSpeed*(r?1:0)-this.angular)*l,this.yaw=Qs(this.yaw+this.angular*e,0);let c=Math.sin(this.yaw)*a-Math.cos(this.yaw)*o,h=Math.cos(this.yaw)*a+Math.sin(this.yaw)*o;this.vx+=(c-this.vx)*l,this.vz+=(h-this.vz)*l;let u=this.x,d=this.z;this.x=this.moveAxis(this.x+this.vx*e,this.z,"x"),this.z=this.moveAxis(this.x,this.z+this.vz*e,"z"),this.speed=Math.hypot(this.x-u,this.z-d)/e,this.distance+=this.speed*e;let f=this.speed<.055&&Math.abs(this.angular)<.14;this.arriveHold=f&&this.targetDistance<=this.target.radius?this.arriveHold+e:0}moveAxis(e,t,n){let{room:i,radius:r}=rt,a=n==="x"?e:t,o=Math.max((n==="x"?i.minX:i.minZ)+r,Math.min((n==="x"?i.maxX:i.maxZ)-r,a));o!==a&&(this.contact="\u5C55\u5385\u5899\u9762",this.impactX=n==="x"?Math.sign(o-a):0,this.impactZ=n==="z"?Math.sign(o-a):0);let l=this.hoistAvailable?this.hoistObstacles:this.obstacles;for(let c of l){let h=n==="x"?o:e,u=n==="z"?o:t;h>c.x-r&&h<c.x+c.width+r&&u>c.z-r&&u<c.z+c.depth+r&&(this.contact=c.id,o=n==="x"?this.x:this.z,this.impactX=n==="x"?this.x<c.x+c.width/2?-1:1:0,this.impactZ=n==="z"?this.z<c.z+c.depth/2?-1:1:0)}return o}beginGesture(e){if(this.hoist.locked){this.message="\u540A\u5E26\u8FDE\u63A5\u671F\u95F4\u4E0D\u80FD\u8868\u6F14 \xB7 \u6062\u590D\u7AD9\u7ACB\u5E76\u89E3\u6302\u540E\u518D\u8BD5\u3002";return}if(qt(this.mode)||this.body!=="upright"){this.message="\u5F53\u524D\u6CA1\u6709\u7AD9\u7ACB\u652F\u6491 \xB7 \u5148\u8D77\u8EAB\u590D\u4F4D\uFF0C\u518D\u6267\u884C\u52A8\u4F5C\u3002";return}if(e==="backflip"||e==="jump"){let{room:t}=rt,n=.95,i=this.x<t.minX+n||this.x>t.maxX-n||this.z<t.minZ+n||this.z>t.maxZ-n,r=this.obstacles.some(a=>this.x>a.x-n&&this.x<a.x+a.width+n&&this.z>a.z-n&&this.z<a.z+a.depth+n);if(i||r){this.message="\u8FD9\u91CC\u7A7A\u95F4\u4E0D\u8DB3 \xB7 \u8BF7\u5148\u8D70\u5230\u7A7A\u65F7\u7684\u5C55\u5385\u4E2D\u592E\u518D\u505A\u7279\u6280\u3002";return}}if(this.speed>.07||Math.abs(this.angular)>.2){this.message="\u5148\u677E\u5F00\u6447\u6746\uFF0C\u7AD9\u7A33\u540E\u518D\u505A\u52A8\u4F5C\u3002";return}this.gesture=e,this.message=qn(e).description}finishGesture(e){this.gesture===e&&(this.tutorial.finishAction(e,this),this.gesture=null,this.score=this.experience==="mission"?this.tutorial.score:0,this.stars=this.stage==="complete"?3:0,this.stage==="complete"&&(this.message="\u64CD\u4F5C\u5165\u95E8\u5B8C\u6210\uFF01\u4F60\u5DF2\u7ECF\u5B66\u4F1A\u79FB\u52A8\u3001\u5207\u6362\u6A21\u5F0F\u3001\u8D77\u8EAB\u548C\u8868\u6F14\u3002"))}};function Py(s,e){let t=[],n=[],i=0;for(let o of e)i+=o,n.push(i);let r=(o,l,c,h=.65)=>t.push({at:o,cue:l,action:s,pitch:c,strength:h}),a=o=>n[Math.min(o,n.length-1)]??0;if(s==="jump"||s==="backflip"){let o=Vn.flight[s];r(0,"servo",150),r(Vn.takeoff,"swoosh",s==="backflip"?800:1200,.9),s==="backflip"&&r(Vn.takeoff+o*.48,"swoosh",1600,.7),r(Vn.takeoff+o,"landing",70,1),r(ai[s]-.16,"bell",523,.4)}else if(s==="sit")r(0,"servo",180),r(Vn.sitDown,"servo",120,.4),r(Vn.sitRise,"servo",240),r(ai.sit-.12,"bell",440,.35);else if(s==="clap"){r(0,"servo",240,.35);for(let o of[2,4,6])r(a(o),"clap",void 0,.9)}else if(["dance","robotdance","armdance","cheerdance"].includes(s)){r(0,s==="armdance"?"bell":"kick",s==="armdance"?523:void 0,.55);for(let o=0;o<e.length-1;o++){let l=o?n[o-1]:0;s==="dance"?(r(a(o),o%2?"snare":"kick"),r(l+e[o]*.5,"hat",void 0,.4)):s==="robotdance"?(r(a(o),"servo",o%2?320:190,.8),o%2===0&&r(a(o),"kick",void 0,.55)):s==="armdance"?(r(a(o),"bell",[523,659,587,784][o%4],.6),r(l+e[o]*.5,"hat",void 0,.35)):(r(a(o),o%2?"clap":"kick",void 0,.65),o%2&&r(a(o),"bell",[523,659,784][Math.floor(o/2)%3],.55))}r(i-.08,"bell",784,.4)}else if(s==="wave"||s==="turnwave"){r(0,"bell",660,.5);for(let o=1;o<e.length-2;o++)r(a(o),"servo",o%2?310:420,.38);s==="turnwave"&&r(a(0),"swoosh",700,.35)}else if(s==="handshake"){r(0,"servo",220,.5),r(a(1),"bell",523,.45);for(let o of[2,3,4,5])r(a(o),"servo",o%2?190:260,.35)}else s==="bow"?(r(0,"bell",523,.45),r(a(2),"servo",160,.4),r(a(4),"bell",392,.4),r(a(6),"servo",220,.45),r(i-.18,"bell",659,.5)):s==="raise"||s==="stretch"?(r(0,"servo",240,.35),r(a(0),"swoosh",1100,.5),r(a(1),"bell",s==="raise"?784:659,.5),r(a(4),"swoosh",800,.45),r(i-.12,"bell",523,.35)):(r(0,"servo",220,.4),r(a(0),"swoosh",900,.45),r(a(1),"bell",587,.5),r(a(5),"servo",260,.35),r(i-.12,"bell",659,.4));return t.sort((o,l)=>o.at-l.at)}var Or=class{duration;markers;index=0;previous=-1e-8;events=[];constructor(e,t){this.duration=fa(e)?ai[e]:t.reduce((n,i)=>n+i,0),this.markers=Py(e,t)}advanceTo(e){if(this.events.length=0,!Number.isFinite(e)||e<this.previous)return this.events;let t=Math.min(this.duration,e);for(;this.index<this.markers.length&&this.markers[this.index].at<=t+1e-8;){let n=this.markers[this.index++];n.at>this.previous&&t-n.at<=.14&&this.events.push(n)}return this.previous=t,this.events}};var va=class{constructor(e){this.model=e;e.rotation.y=-Math.PI/2,this.body.position.y=.65,e.position.y=-.65,this.body.add(e),this.group.add(this.body),this.group.name="G1_driving_carrier",e.traverse(t=>{let n=t;if(n.isMesh){n.geometry.boundingBox||n.geometry.computeBoundingBox();let h=n.geometry.boundingBox,u=[];for(let d of[h.min.x,h.max.x])for(let f of[h.min.y,h.max.y])for(let g of[h.min.z,h.max.z])u.push(new A(d,f,g));this.shell.push({node:t,corners:u})}if(!t.name.endsWith("_joint")||!Array.isArray(t.userData.axis))return;let{axis:i,lower:r,upper:a}=t.userData;if(!Number.isFinite(r)||!Number.isFinite(a))return;let o=Ad.interactionLimits[t.name],l=Math.max(mt.radToDeg(r),(o==null?void 0:o.min)??-1/0),c=Math.min(mt.radToDeg(a),(o==null?void 0:o.max)??1/0);/hip_pitch/.test(t.name)&&(l=Math.max(l,-40),c=Math.min(c,35)),/hip_roll/.test(t.name)&&(l=Math.max(l,-18),c=Math.min(c,18)),/hip_yaw/.test(t.name)&&(l=Math.max(l,-25),c=Math.min(c,25)),/knee/.test(t.name)&&(l=Math.max(l,0),c=Math.min(c,75)),this.joints.set(t.name,{node:t,base:t.quaternion.clone(),axis:new A(i[0],i[2],-i[1]).normalize(),min:l,max:c,angle:0})}),this.group.updateMatrixWorld(!0);for(let t of["left","right"]){let n=e.getObjectByName(`${t}_ankle_pitch_joint`),i=e.getObjectByName(`${t}_ankle_roll_link`);if(!n||!i)throw new Error("G1 driving model is missing leg joints");let r=new en,a=i.matrixWorld.clone().invert();i.traverse(c=>{let h=c;h.isMesh&&(h.geometry.boundingBox||h.geometry.computeBoundingBox(),r.union(h.geometry.boundingBox.clone().applyMatrix4(a.clone().multiply(h.matrixWorld))))});let o=[];for(let c of[r.min.x,r.max.x])for(let h of[r.min.y,r.max.y])for(let u of[r.min.z,r.max.z])o.push(new A(c,h,u));let l=n.getWorldPosition(new A);this.feet.push({side:t,ankle:n,link:i,corners:o,rest:l,target:l.clone(),from:l.clone(),to:l.clone(),elapsed:0,duration:.28,swing:!1,yaw:0,fromYaw:0,toYaw:0}),this.set(`${t}_hip_pitch_joint`,-7),this.set(`${t}_knee_joint`,14),this.set(`${t}_ankle_pitch_joint`,-7)}e.position.y=-.658}group=new Rt;body=new Rt;joints=new Map;footfalls=[];actionSounds=[];actionSoundClock=null;feet=[];nextFoot=0;action=null;activeGesture=null;point=new A;jointRotation=new bt;legBase=new A;legError=new A;legColumns=[new A,new A,new A];jacobian=new Fe;transpose=new Fe;normal=new Fe;initialized=!1;gaitPhase=0;danceTime=0;danceDepth=0;clipTime=0;activeBodyClip=null;bodyStage="upright";suspended=!1;previewClock=null;previewRevision=-1;shell=[];transitionAngles={};transitionRotation=new bt;transitionPosition=new A;reset(){this.footfalls.length=0,this.actionSounds.length=0,this.actionSoundClock=null,this.gaitPhase=0,this.initialized=!1,this.action=null,this.activeGesture=null,this.nextFoot=0,this.danceDepth=this.danceTime=0,this.bodyStage="upright",this.suspended=!1,this.previewClock=null,this.previewRevision=-1,this.activeBodyClip=null,this.clipTime=0,this.body.quaternion.identity(),this.body.position.set(0,.65,0);for(let[e]of this.joints)this.set(e,0);for(let e of this.feet)e.swing=!1,this.set(`${e.side}_hip_pitch_joint`,-7),this.set(`${e.side}_knee_joint`,14),this.set(`${e.side}_ankle_pitch_joint`,-7);this.model.position.y=-.658,this.group.updateMatrixWorld(!0)}set(e,t){let n=this.joints.get(e);if(!n)return;let i=mt.clamp(t,n.min,n.max);n.angle!==i&&(n.angle=i,n.node.quaternion.copy(n.base).multiply(this.jointRotation.setFromAxisAngle(n.axis,mt.degToRad(i))))}nominal(e){return this.group.localToWorld(e.rest.clone()).setY(e.rest.y)}update(e,t){var h;if(this.footfalls.length=0,this.actionSounds.length=0,t.paused)return null;let n=Math.max(0,Math.min(.05,Number.isFinite(e)?e:0));this.group.position.set(t.x,0,t.z),this.group.rotation.y=t.yaw;let i=t.body??"upright";if(i!=="upright")return this.updateFallen(i,t),this.bodyStage=i,null;if(this.bodyStage!=="upright"&&(this.bodyStage="upright",this.body.quaternion.identity(),this.body.position.set(0,.65,0),this.model.position.y=-.656,this.initialized=!1),(h=t.hoist)!=null&&h.locked)return this.suspended=!0,this.updateSuspended(n,t),null;if(this.suspended&&(this.suspended=!1,this.previewClock=null,this.previewRevision=-1,this.initialized=!1),t.mode==="debug"&&t.lab)return this.updateDebug(n,t.lab),null;if(fa(t.gesture))return this.updateBodyClip(n,t.gesture,t);this.activeBodyClip&&(this.activeBodyClip=null,this.initialized=!1),this.body.quaternion.identity(),this.body.position.set(0,.65,0),t.gesture!==this.activeGesture&&(this.action=null,this.activeGesture=null,this.actionSoundClock=null),this.danceTime=t.gesture==="dance"?this.danceTime+n:0;let r=t.gesture==="dance"?.012+.018*(1-Math.cos(this.danceTime*5)):0;if(this.danceDepth=mt.lerp(this.danceDepth,r,1-Math.exp(-n/.14)),this.model.position.y=-.656-this.danceDepth,this.group.updateWorldMatrix(!0,!1),!this.initialized){for(let u of this.feet)u.target.copy(this.nominal(u)),u.yaw=t.yaw,u.swing=!1;this.initialized=!0}let a=t.speed>.018||Math.abs(t.angular)>.065;if(!this.feet.some(u=>u.swing)){let u=this.feet.map(f=>this.nominal(f).distanceTo(f.target)+Math.abs(Qs(t.yaw,f.yaw))*.16),d=a||t.stepping?this.nextFoot:u[0]>=u[1]?0:1;if(u[1-d]>u[d]+.12&&(d=1-d),u[d]>(a?.055:.004)||t.stepping&&!t.gesture){let f=this.feet[d];f.from.copy(f.target),f.to.copy(this.nominal(f));let g=Math.abs(t.vx*Math.cos(t.yaw)-t.vz*Math.sin(t.yaw));f.duration=t.stepping&&!a?.38:g>.2||Math.abs(t.angular)>.6?.19:.28;let _=f.duration*.5;f.to.x+=t.vx*_,f.to.z+=t.vz*_,f.fromYaw=f.yaw,f.toYaw=t.yaw,f.elapsed=0,f.swing=!0,this.nextFoot=1-d}}for(let u of this.feet){if(u.swing){u.elapsed+=n;let d=Math.min(1,u.elapsed/u.duration),f=d*d*(3-2*d);u.target.lerpVectors(u.from,u.to,f),u.target.y+=Math.sin(Math.PI*d)*.055,u.yaw=u.fromYaw+Qs(u.toYaw,u.fromYaw)*f,this.gaitPhase=(u.side==="left"?-1:1)*Math.cos(Math.PI*d),d>=1&&(u.swing=!1,u.target.copy(u.to),u.yaw=u.toYaw,this.footfalls.push({side:u.side,strength:mt.clamp(.3+u.from.distanceTo(u.to)*2,.3,1)}))}this.solveLeg(u,t.yaw)}if(t.gesture&&t.gesture!==this.activeGesture){let u=Object.fromEntries([...this.joints].filter(([f])=>!/^((left|right)_(hip|knee|ankle))/.test(f)).map(([f,g])=>[f,g.angle])),d=as(t.gesture).map(f=>({...f,actionId:t.gesture,actionIndex:0,phase:"action"}));this.action=new sr(d,u),this.activeGesture=t.gesture,this.actionSoundClock=new Or(t.gesture,d.map(f=>f.duration))}let l=null;if(this.action){this.action.update(n);for(let[u,d]of Object.entries(this.action.angles))this.set(u,d);this.actionSoundClock&&this.actionSounds.push(...this.actionSoundClock.advanceTo(this.action.progress*this.actionSoundClock.duration)),t.gesture==="turnwave"&&(this.body.rotation.y=Math.sin(Math.PI*this.action.progress)*Math.PI*.48),this.action.finished&&(l=this.activeGesture,this.action=null,this.activeGesture=null)}else{let u=this.feet[0].target.x-this.feet[1].target.x,d=this.feet[0].target.z-this.feet[1].target.z,f=u*Math.sin(t.yaw)+d*Math.cos(t.yaw)-(this.feet[0].rest.z-this.feet[1].rest.z),g=mt.clamp((t.vx*Math.cos(t.yaw)-t.vz*Math.sin(t.yaw))/.24,-1,1),_=Math.min(1,Math.abs(t.vx*Math.sin(t.yaw)+t.vz*Math.cos(t.yaw))/.24),m=Math.min(1,Math.abs(t.angular)/1.4),p=t.stepping&&!a?1:0,v=mt.clamp(f*hn.strideGain*_+this.gaitPhase*(Math.abs(g)*hn.sideSwing+m*hn.turnSwing+p*hn.steppingSwing),-hn.maxSwing,hn.maxSwing);for(let[y,S]of this.joints){if(/^((left|right)_(hip|knee|ankle))/.test(y))continue;let P=y.startsWith("left")?1:-1,T=t.mode==="damp",R=y.includes("shoulder_pitch")?T?0:hn.shoulderRest+P*v:y.includes("shoulder_roll")?P*(T?3:hn.shoulderRoll+P*this.gaitPhase*g*hn.lateralRoll):y.includes("elbow")?T?3:hn.elbowRest-P*v*hn.elbowFollow:0;this.set(y,mt.lerp(S.angle,R,1-Math.exp(-n/(T?.45:hn.armResponse))))}}this.group.updateMatrixWorld(!0);let c=Math.min(...this.soleHeights());return this.model.position.y-=c,this.group.updateMatrixWorld(!0),l}captureTransition(){this.transitionAngles=Object.fromEntries([...this.joints].map(([e,t])=>[e,t.angle])),this.transitionRotation.copy(this.body.quaternion),this.transitionPosition.copy(this.body.position)}standingAngle(e){return/hip_pitch|ankle_pitch/.test(e)?-8:/knee/.test(e)?16:/shoulder_pitch/.test(e)?-8:/shoulder_roll/.test(e)?e.startsWith("left")?8:-8:/elbow/.test(e)?15:0}updateSuspended(e,t){var a;this.action=null,this.activeGesture=null,this.activeBodyClip=null,this.actionSoundClock=null,this.initialized=!1;let n=t.hoist,i=t.mode==="zero"||t.mode==="damp",r=1-Math.exp(-e/(t.mode==="damp"?.65:t.mode==="zero"?.2:.12));if(t.mode==="debug"&&t.debugPreview){if(!this.previewClock||this.previewRevision!==t.previewRevision){let o=as(t.debugPreview).map(l=>({...l,actionId:t.debugPreview,actionIndex:0,phase:"action"}));this.previewClock=new sr(o,Object.fromEntries([...this.joints].map(([l,c])=>[l,c.angle]))),this.previewRevision=t.previewRevision??0}this.previewClock.update(e)}else this.previewClock=null,this.previewRevision=-1;for(let[o,l]of this.joints){let c=t.mode==="damp",h=/hip_pitch/.test(o)?c?-10:-3:/knee/.test(o)?c?24:6:/ankle_pitch/.test(o)?c?-8:10:/shoulder_roll/.test(o)?(o.startsWith("left")?1:-1)*(c?5:2):/elbow/.test(o)?c?18:3:0,u=t.mode==="debug"?(a=t.lab)==null?void 0:a.angleForJoint(o):void 0,f=(this.previewClock&&/shoulder|elbow|wrist/.test(o)?this.previewClock.angles[o]:void 0)??u??(i?h:this.standingAngle(o));this.set(o,mt.lerp(l.angle,f,r))}this.body.quaternion.slerp(this.suspensionRotation.identity(),r),this.model.position.y=-.656,this.body.position.set(0,.65,0),this.group.updateMatrixWorld(!0),this.body.position.y+=n.lift-Math.min(...this.soleHeights()),this.group.updateMatrixWorld(!0)}suspensionRotation=new bt;updateDebug(e,t){this.action=null,this.activeGesture=null,this.activeBodyClip=null,this.actionSoundClock=null,this.initialized=!1,this.body.quaternion.identity(),this.body.position.set(0,.65,0),this.model.position.y=-.656;let n=1-Math.exp(-e/.14);for(let[i,r]of this.joints)this.set(i,t.angleForJoint(i)??mt.lerp(r.angle,this.standingAngle(i),n));this.group.updateMatrixWorld(!0),this.body.position.y-=Math.min(...this.soleHeights()),this.group.updateMatrixWorld(!0)}updateFallen(e,t){this.bodyStage!==e&&e!=="fallen"&&this.captureTransition(),this.action=null,this.activeGesture=null,this.activeBodyClip=null,this.actionSoundClock=null,this.initialized=!1;let n=e==="fallen"?1:Hn(t.bodyProgress??0),i=e==="recovering";for(let[l]of this.joints){let c=/hip_pitch/.test(l)?-18:/knee/.test(l)?36:/ankle_pitch/.test(l)?-18:/shoulder_roll/.test(l)?l.startsWith("left")?6:-6:0;this.set(l,mt.lerp(this.transitionAngles[l]??0,i?this.standingAngle(l):c,n))}let r=t.fallDirection??0,a=i?new bt:new bt().setFromEuler(new ks(Math.cos(r)*1.48,0,-Math.sin(r)*1.48));this.body.quaternion.slerpQuaternions(this.transitionRotation,a,n),this.body.position.lerpVectors(this.transitionPosition,new A(0,.65,0),n),this.model.position.y=-.656,this.group.updateMatrixWorld(!0);let o=this.shellMinimum();this.body.position.y+=Math.max(0,.003-o),i||(this.body.position.y-=Math.max(0,o-.003)*n),this.group.updateMatrixWorld(!0)}updateBodyClip(e,t,n){this.activeBodyClip!==t&&(this.activeBodyClip=t,this.clipTime=0,this.action=null,this.activeGesture=null,this.actionSoundClock=new Or(t,[]),this.captureTransition()),this.clipTime=Math.min(ai[t],this.clipTime+e);let i=Rd(t,this.clipTime),r=Hn(this.clipTime/.35);this.actionSoundClock&&this.actionSounds.push(...this.actionSoundClock.advanceTo(this.clipTime));for(let[a]of this.joints){let o=/knee/.test(a)?i.knee:/hip_pitch|ankle_pitch/.test(a)?-i.knee*.5:/shoulder_pitch/.test(a)?i.arm:this.standingAngle(a);this.set(a,mt.lerp(this.transitionAngles[a]??o,o,r))}return this.body.position.set(0,.65+i.height,0),this.body.rotation.set(i.pitch,0,0),this.model.position.y=-.656,this.group.updateMatrixWorld(!0),i.height>0?this.body.position.y+=Math.max(0,.003-this.shellMinimum()):this.body.position.y-=Math.min(...this.soleHeights()),this.group.updateMatrixWorld(!0),this.initialized=!1,this.clipTime>=ai[t]?(this.body.quaternion.identity(),this.activeBodyClip=null,t):null}shellMinimum(){let e=1/0;for(let{node:t,corners:n}of this.shell)for(let i of n)e=Math.min(e,this.point.copy(i).applyMatrix4(t.matrixWorld).y);return e}solveLeg(e,t){let n=[`${e.side}_hip_pitch_joint`,`${e.side}_hip_roll_joint`,`${e.side}_knee_joint`];this.set(`${e.side}_hip_yaw_joint`,mt.radToDeg(Qs(e.yaw,t)));let i=this.legBase,r=this.legError,a=this.legColumns;for(let o=0;o<4&&(e.ankle.getWorldPosition(i),r.copy(e.target).sub(i),!(r.lengthSq()<1e-6));o++){for(let _=0;_<n.length;_++){let m=n[_],p=this.joints.get(m),v=p.angle,y=v+.5<=p.max?.5:-.5;this.set(m,v+y);let S=p.angle-v;e.ankle.getWorldPosition(a[_]).sub(i).multiplyScalar(1/mt.degToRad(S)),this.set(m,v)}let[l,c,h]=a,u=this.jacobian.set(l.x,c.x,h.x,l.y,c.y,h.y,l.z,c.z,h.z),d=this.transpose.copy(u).transpose(),f=this.normal.copy(d).multiply(u);for(let _ of[0,4,8])f.elements[_]+=8e-4;let g=r.applyMatrix3(d).applyMatrix3(f.invert());for(let _=0;_<3;_++){let m=this.joints.get(n[_]);this.set(n[_],m.angle+mt.radToDeg(mt.clamp(g.getComponent(_),-.18,.18)))}}this.set(`${e.side}_ankle_pitch_joint`,-this.joints.get(n[0]).angle-this.joints.get(n[2]).angle),this.set(`${e.side}_ankle_roll_joint`,-this.joints.get(n[1]).angle)}soleHeights(){return this.feet.map(e=>Math.min(...e.corners.map(t=>this.point.copy(t).applyMatrix4(e.link.matrixWorld).y)))}footPositions(){return this.feet.map(e=>e.ankle.getWorldPosition(new A))}};var xa=class{constructor(e,t){this.canvas=e;this.controls=t;this.document=e.ownerDocument,this.window=this.document.defaultView,e.addEventListener("pointerdown",this.track),e.addEventListener("pointerup",this.forget),e.addEventListener("pointercancel",this.forget),e.addEventListener("lostpointercapture",this.lostCapture),this.window.addEventListener("pointerup",this.outsideEnd,!0),this.window.addEventListener("pointercancel",this.outsideEnd,!0),this.window.addEventListener("blur",this.cancelAll),this.document.addEventListener("visibilitychange",this.visibilityChanged)}pointers=new Map;document;window;track=e=>{this.controls.enabled&&this.pointers.set(e.pointerId,e.pointerType)};forget=e=>{this.pointers.delete(e.pointerId)};lostCapture=e=>{this.cancel(e.pointerId)};outsideEnd=e=>{e.composedPath().includes(this.canvas)||this.cancel(e.pointerId)};visibilityChanged=()=>{this.document.hidden&&this.cancelAll()};cancelAll=()=>{for(let e of[...this.pointers.keys()])this.cancel(e)};cancel(e){let t=this.pointers.get(e);t!==void 0&&(this.pointers.delete(e),this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:e,pointerType:t})))}dispose(){this.cancelAll(),this.canvas.removeEventListener("pointerdown",this.track),this.canvas.removeEventListener("pointerup",this.forget),this.canvas.removeEventListener("pointercancel",this.forget),this.canvas.removeEventListener("lostpointercapture",this.lostCapture),this.window.removeEventListener("pointerup",this.outsideEnd,!0),this.window.removeEventListener("pointercancel",this.outsideEnd,!0),this.window.removeEventListener("blur",this.cancelAll),this.document.removeEventListener("visibilitychange",this.visibilityChanged)}};var ba=class{group=new Rt;signal=new wt({color:13015610});strapMaterial=new _t({color:4619365,roughness:.8});cables=[];harness=new Rt;spreader=new ve(new Kt(.46,.045,.055),this.strapMaterial);ground;ends=[new A,new A];top=new A;direction=new A;up=new A(0,1,0);shoulderNodes=[];robot=null;revision=0;signature="";constructor(){this.group.name="hoist-station",this.group.position.set(et.x,0,et.z);let e=new _t({color:7245691,roughness:.75,metalness:.2}),t=new _t({color:4352085,roughness:.65}),n=(c,h,u,d,f,g,_=e)=>{let m=new ve(new Kt(c,h,u),_);return m.position.set(d,f,g),this.group.add(m),m};for(let c of et.posts){let h=c.x+c.width/2-et.x,u=c.z+c.depth/2-et.z;n(c.width,1.96,c.depth,h,.98,u),n(.19,.025,.28,h,.0125,u),n(.12,.08,.12,h,1.4,u,t)}n(1.72,.12,.14,0,1.99,-.3),n(.2,.16,.28,0,1.87,-.25,t),n(.12,.055,.5,0,1.92,-.03);let i=new ve(new Pn(.065,.065,.15,12),t);i.rotation.z=Math.PI/2,i.position.set(0,1.83,0),this.group.add(i),this.spreader.position.set(0,1.64,0),this.group.add(this.spreader);let r=new ve(new Pn(.008,.008,.14,6),t);r.position.set(0,1.73,0),this.group.add(r);let a=new ve(new Ki(.035,10,8),this.signal);a.position.set(.18,1.96,-.2),this.group.add(a),this.ground=new ve(new Ys(et.radius,et.radius+.045,48),this.signal),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=.012,this.group.add(this.ground);let o=new ve(new qs(et.radius,32),new wt({color:13218669,transparent:!0,opacity:.1,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.008,this.group.add(o);for(let c of[-.095,.095])n(.022,.004,.23,c,.014,0,t);n(.19,.004,.022,0,.014,0,t);for(let c=0;c<2;c++){let h=new ve(new Pn(.011,.011,1,8),this.strapMaterial);h.name=`hoist-strap-${c}`,this.cables.push(h),this.group.add(h);let u=new ve(new Pr(.026,.007,6,12),this.signal);this.harness.add(u)}let l=new ve(new Pr(1,.065,6,24),this.strapMaterial);l.rotation.x=Math.PI/2,l.scale.set(.14,.1,.14),l.position.y=-.055,this.harness.add(l),this.group.add(this.harness),this.group.visible=!1}update(e,t){if(this.group.visible=e.hoistAvailable,!this.group.visible)return;if(t!==this.robot){this.robot=t,this.shoulderNodes.length=0;for(let l of["left","right"])this.shoulderNodes.push(t==null?void 0:t.model.getObjectByName(`${l}_shoulder_pitch_link`))}let n=e.hoist,i=n.locked,r=n.supported?4165995:n.ready?7575389:13015610;this.signal.color.setHex(r),this.strapMaterial.color.setHex(n.supported?4032611:11968874),this.harness.visible=i,this.spreader.rotation.y=i?e.yaw:0,this.group.updateMatrixWorld(!0);let a=`${n.phase}:${r}:${e.mode}`;a!==this.signature&&(this.signature=a,this.revision++);for(let l=0;l<2;l++){let c=this.ends[l],h=this.cables[l];i&&this.shoulderNodes[l]?(this.shoulderNodes[l].getWorldPosition(c),c.x-=et.x,c.z-=et.z,c.y-=.025):c.set(l===0?.12:-.12,1.46,-.015);let u=l===0?1:-1,d=i?e.yaw:0;this.top.set(u*.2*Math.cos(d),1.62,-u*.2*Math.sin(d)),n.phase==="attaching"&&c.lerp(this.top,.55*(1-n.progress));let f=this.direction.copy(c).sub(this.top).length();h.position.copy(this.top).add(c).multiplyScalar(.5),h.scale.set(1,f,1),h.quaternion.setFromUnitVectors(this.up,this.direction.normalize()),this.harness.children[l].position.copy(c)}let o=this.harness.children[2];o.position.copy(this.ends[0]).add(this.ends[1]).multiplyScalar(.5),o.position.y-=.055,o.rotation.set(Math.PI/2,0,-e.yaw)}};var Ma=class{constructor(e){this.host=e;this.scene.background=new Ee("#e5ede3"),this.scene.fog=new zo("#e5ede3",10,22),this.renderer.outputColorSpace=dt,this.renderer.toneMapping=ic,this.renderer.toneMappingExposure=1.13,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.camera.position.set(.35,2.55,3.5),this.controls=new la(this.camera,this.renderer.domElement),this.controls.addEventListener("change",()=>{this.dirty=!0}),this.controls.target.copy(this.focus),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.enablePan=!1,this.controls.minDistance=1.8,this.controls.maxDistance=10,this.controls.minPolarAngle=.18,this.controls.maxPolarAngle=Math.PI*.46,this.controls.rotateSpeed=.65,this.controls.enabled=!1,this.controls.update();let t=this.renderer.domElement;t.addEventListener("pointerdown",D=>{this.orbitPointers.set(D.pointerId,{x:D.clientX,y:D.clientY}),this.controls.enabled=!0,this.orbitPointers.size>1&&(this.overview=!0)},{capture:!0}),t.addEventListener("pointermove",D=>{let x=this.orbitPointers.get(D.pointerId);x&&Math.hypot(D.clientX-x.x,D.clientY-x.y)>=5&&(this.overview=!0)},{capture:!0});let n=D=>{this.orbitPointers.delete(D.pointerId),this.orbitPointers.size||(this.controls.enabled=this.overview,this.overview||this.clearOrbitDamping())};for(let D of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(D,n,{capture:!0});new xa(t,this.controls),this.scene.add(new Jo(16383989,8427911,2.4));let i=new Ji(16774109,3);i.position.set(3,6,4),this.scene.add(i);let r=new Ji(13494497,1.2);r.position.set(-4,3,-3),this.scene.add(r);let a=new Gs(this.renderer),o=new ua;this.scene.environment=a.fromScene(o,.04).texture,o.dispose(),a.dispose();let l=new ve(new Hs(30,30),new _t({color:"#e3ebdf",roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-.012,this.scene.add(l);let c=new ta(14,28,11716013,13359302);c.position.y=-.009,c.material.transparent=!0,c.material.opacity=.45,this.scene.add(c);let h=rt.room,u=new pt().setFromPoints([new A(h.minX,0,h.minZ),new A(h.maxX,0,h.minZ),new A(h.maxX,0,h.maxZ),new A(h.minX,0,h.maxZ),new A(h.minX,0,h.minZ)]);this.scene.add(new kn(u,new Cn({color:9875610})));let d=new _t({color:"#91ad99",transparent:!0,opacity:.32,roughness:.85,depthWrite:!1}),f=h.maxX-h.minX,g=h.maxZ-h.minZ;for(let D of[h.minZ-.04,h.maxZ+.04]){let x=new ve(new Kt(f,.65,.08),d);x.position.set((h.minX+h.maxX)/2,.325,D),x.name="exhibition-wall",this.scene.add(x)}for(let D of[h.minX-.04,h.maxX+.04]){let x=new ve(new Kt(.08,.65,g),d);x.position.set(D,.325,(h.minZ+h.maxZ)/2),x.name="exhibition-wall",this.scene.add(x)}for(let D of rt.obstacles.slice(0,2)){let x=new ve(new Kt(D.width,.48,D.depth),new _t({color:"#a8bfa7",roughness:.75}));x.position.set(D.x+D.width/2,.24,D.z+D.depth/2),this.scene.add(x);let w=new ve(new Kt(D.width+.04,.035,D.depth+.04),new _t({color:"#e9eddf"}));w.position.copy(x.position).setY(.5),this.scene.add(w);let B=new Rt,q=new ve(new jo(.17,.055,48,8),new _t({color:D.x>0?"#cfad63":"#6d9889",roughness:.4,metalness:.25}));q.position.y=.76,B.add(q),B.position.set(x.position.x,0,x.position.z),this.scene.add(B)}let _=new Rt,m=new _t({color:"#c4a67b",roughness:.95}),p=new ve(new Pn(.12,.18,.57,12),m);p.position.y=.59;let v=new ve(new Ki(.115,16,12),new _t({color:"#ead9b8"}));v.position.y=1.02,_.add(p,v);for(let D of[-.075,.075]){let x=new ve(new Pn(.042,.045,.31,8),new _t({color:"#65766a"}));x.position.set(D,.155,0),_.add(x)}_.position.set(rt.visitor.x,0,rt.visitor.z),this.scene.add(_),this.marker=new ve(new Ys(.4,.49,48),new wt({color:"#c69a3a",side:an,transparent:!0,opacity:.8,depthWrite:!1})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.006,this.scene.add(this.marker);let y=new ve(new qs(.4,40),new wt({color:"#eac765",transparent:!0,opacity:.18,depthWrite:!1}));y.position.z=.001,this.marker.add(y),this.pointer=new ve(new Yo(.09,.19,3),new _t({color:"#bd913b"})),this.scene.add(this.pointer),this.targetBadges={A:this.makeTargetBadge("A"),B:this.makeTargetBadge("B")},this.targetBadge=new Ho(new Tr({map:this.targetBadges.A,transparent:!0,depthWrite:!1})),this.targetBadge.scale.set(.38,.38,1),this.scene.add(this.targetBadge,this.routeLine,this.headingArrow);let S=document.createElement("canvas");S.width=S.height=64;let P=S.getContext("2d"),T=P.createRadialGradient(32,32,0,32,32,32);T.addColorStop(0,"rgba(34,61,40,.24)"),T.addColorStop(1,"rgba(34,61,40,0)"),P.fillStyle=T,P.fillRect(0,0,64,64),this.shadow=new ve(new Hs(.95,.75),new wt({map:new Cr(S),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.002,this.scene.add(this.shadow);let R=[[-.62,0,0],[-.62,1.72,0],[-.62,1.72,0],[.62,1.72,0],[.62,1.72,0],[.62,0,0],[0,1.72,0],[0,1.27,0]].map(D=>new A(...D));this.debugSupport.add(new Zi(new pt().setFromPoints(R),new Cn({color:7773578,transparent:!0,opacity:.65}))),this.debugSupport.visible=!1,this.debugMarker.visible=!1,this.scene.add(this.debugSupport,this.debugMarker,this.hoist.group),new ResizeObserver(()=>this.resize()).observe(e),this.resize()}scene=new Ws;camera=new Pt(46,1,.03,40);renderer=new wr({antialias:!0,powerPreference:"high-performance"});controls;rig=null;overview=!1;explicitOverview=!1;orbitPointers=new Map;elevation=0;budget=new da;marker;pointer;targetBadge;targetBadges;routeLine=new kn(new pt().setAttribute("position",new Et(new Float32Array(6),3)),new Cn({color:12296799,transparent:!0,opacity:.55}));headingArrow=new na(new A(0,0,-1),new A,.68,5212520,.2,.15);headingDirection=new A;shadow;debugSupport=new Rt;hoist=new ba;debugMarker=new ve(new Ki(.055,12,8),new wt({color:13740620,transparent:!0,opacity:.65,depthTest:!1}));focus=new A(0,.7,0);cameraTarget=new A;drawnCamera=new A(1/0,1/0,1/0);drawnRotation=new bt;pose=[];dirty=!0;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;time=0;async load(){let e=await new ca().loadAsync("../assets/g1-sample.glb");this.rig=new va(e.scene),this.scene.add(this.rig.group)}makeTargetBadge(e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");return n.fillStyle="#f2e9cd",n.beginPath(),n.arc(64,64,55,0,Math.PI*2),n.fill(),n.strokeStyle="#b5913c",n.lineWidth=4,n.stroke(),n.fillStyle="#72581d",n.textAlign="center",n.textBaseline="middle",n.font="bold 72px sans-serif",n.fillText(e,64,69),new Cr(t)}resize(){this.dirty=!0;let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.budget.resize(e,t,devicePixelRatio)),this.renderer.setSize(e,t)}toggleCamera(e=!this.overview,t=!0){this.clearOrbitDamping(),this.explicitOverview=e,this.overview=e,this.controls.enabled=e,e&&t?(this.camera.position.set(4.8,5.8,5),this.controls.target.set(0,.2,-.8)):this.controls.target.copy(this.focus),this.controls.update()}clearOrbitDamping(){let e=this.camera.position.clone(),t=this.camera.quaternion.clone(),n=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.update(),this.controls.enableDamping=n,this.camera.position.copy(e),this.camera.quaternion.copy(t)}reset(){var e;(e=this.rig)==null||e.reset(),this.toggleCamera(!1),this.elevation=0,this.dirty=!0}update(e,t,n,i=!1){var u,d,f;let r=((u=this.rig)==null?void 0:u.update(e,t))??null;this.hoist.update(t,this.rig),this.debugSupport.visible=t.mode==="debug"&&!t.hoistAvailable,this.debugMarker.visible=t.mode==="debug"&&t.debugTab==="joints"&&t.body==="upright",this.debugSupport.position.set(t.x,0,t.z),this.debugSupport.rotation.y=t.yaw,this.debugMarker.visible&&((f=(d=this.rig)==null?void 0:d.joints.get(t.lab.spec.joint))==null||f.node.getWorldPosition(this.debugMarker.position),this.debugMarker.material.color.setHex(t.lab.completed.has(t.lab.selected)?4103794:13740620)),t.running&&!t.paused&&(this.time+=e),this.marker.position.x=t.target.x,this.marker.position.z=t.target.z;let a=t.hoistContext&&!t.hoist.locked,o=t.experience==="mission"&&t.tutorial.navigating||a;this.marker.visible=o&&!a,this.marker.visible&&(this.marker.scale.setScalar(t.target.radius/.4),this.marker.material.color.setHex(t.tutorial.hold>0?4820582:13015610),this.marker.material.opacity=this.reduced?.85:.75+Math.sin(this.time*2.5)*.1);let l=t.target;if(this.pointer.rotation.z=Math.PI,this.pointer.visible=o,this.pointer.visible&&this.pointer.position.set(l.x,1.48+(this.reduced?0:Math.sin(this.time*2)*.035),l.z),this.targetBadge.visible=o&&!a,this.targetBadge.visible){let g=this.targetBadge.material;g.map=this.targetBadges[t.tutorial.target.label],this.targetBadge.position.set(l.x,1.77,l.z)}if(this.routeLine.visible=o&&t.targetDistance>.7,this.routeLine.visible){let g=this.routeLine.geometry.getAttribute("position"),_=(l.x-t.x)/t.targetDistance,m=(l.z-t.z)/t.targetDistance;g.setXYZ(0,t.x+_*.4,.025,t.z+m*.4),g.setXYZ(1,l.x-_*l.radius,.025,l.z-m*l.radius),g.needsUpdate=!0,this.routeLine.frustumCulled=!1}this.headingArrow.visible=o&&t.body==="upright",this.headingArrow.visible&&(this.headingArrow.position.set(t.x,.04,t.z),this.headingArrow.setDirection(this.headingDirection.set(Math.sin(t.yaw),0,Math.cos(t.yaw)))),this.shadow.position.set(t.x,.002,t.z),this.shadow.rotation.z=-t.yaw;let c=t.body==="fallen"?.27:t.body==="falling"?.72-.4*t.bodyProgress:t.body==="recovering"?.27+.45*t.bodyProgress:.72,h=t.hoistContext?1:t.gesture==="backflip"?1.02:c;if(this.focus.set(t.x,h,t.z),o&&(this.focus.x+=(l.x-t.x)*.22,this.focus.z+=(l.z-t.z)*.22),this.overview&&!this.explicitOverview&&!this.orbitPointers.size&&t.running&&!t.paused&&(i||t.speed>.018||Math.abs(t.angular)>.065||Math.abs(n)>.05)&&this.toggleCamera(!1),this.overview)this.controls.update();else{this.elevation=mt.clamp(this.elevation+n*e*.7,-.25,.75);let g=t.mode==="debug",_=t.yaw+(g?Math.PI*.75:t.hoistContext&&t.hoist.locked?Math.PI*.18:0),m=(t.hoistContext?t.hoist.locked?3.05:3.7:g?2.3:t.gesture==="backflip"?4.1:o?3.7:3.4)*Math.max(1,.72/this.camera.aspect),p=this.cameraTarget.set(t.x-Math.sin(_)*m,(t.hoistContext?2:g?1.55:2.35)+this.elevation,t.z-Math.cos(_)*m);this.camera.position.lerp(p,1-Math.exp(-e/.35)),this.controls.target.lerp(this.focus,1-Math.exp(-e/.14)),this.camera.lookAt(this.controls.target)}return r}render(e,t){let n=this.budget.observe(e,t);n!==null&&(this.renderer.setPixelRatio(n),this.renderer.setSize(this.host.clientWidth,this.host.clientHeight),this.dirty=!0);let i=0,r=a=>{(!Number.isFinite(this.pose[i])||Math.abs(this.pose[i]-a)>1e-6)&&(this.pose[i]=a,this.dirty=!0),i++};if(this.rig){let{group:a,body:o,model:l,joints:c}=this.rig;for(let h of[a.position.x,a.position.z,a.rotation.y,l.position.y,o.position.y,o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w])r(h);for(let h of c.values())r(h.angle)}if(r(Number(this.debugSupport.visible)),r(Number(this.debugMarker.visible)),r(Number(this.hoist.group.visible)),this.hoist.group.visible){r(this.hoist.revision);for(let a of this.hoist.group.children)a.name.startsWith("hoist-strap-")&&(r(a.position.x),r(a.position.y),r(a.position.z),r(a.scale.y),r(a.quaternion.x),r(a.quaternion.y),r(a.quaternion.z),r(a.quaternion.w))}this.debugMarker.visible&&(r(this.debugMarker.position.x),r(this.debugMarker.position.y),r(this.debugMarker.position.z),r(this.debugMarker.material.color.getHex())),r(Number(this.marker.visible)),r(Number(this.pointer.visible)),this.marker.visible&&(r(this.marker.position.x),r(this.marker.position.z),r(this.marker.scale.x),r(this.pointer.position.y),r(this.marker.material.color.getHex()),r(this.marker.material.opacity),r(+(this.targetBadge.material.map===this.targetBadges.B))),(this.camera.position.distanceToSquared(this.drawnCamera)>1e-9||1-Math.abs(this.camera.quaternion.dot(this.drawnRotation))>1e-10)&&(this.dirty=!0),this.dirty&&(this.renderer.render(this.scene,this.camera),this.drawnCamera.copy(this.camera.position),this.drawnRotation.copy(this.camera.quaternion),this.dirty=!1)}};var Ld=[{button:0,key:"A",title:"\u6062\u590D\u884C\u8D70",copy:"\u7AD9\u7ACB\u540E\u63A5\u7BA1\u6447\u6746",command:{mode:"locomotion"}},{button:1,key:"B",title:"\u963B\u5C3C\u6A21\u5F0F",copy:"\u6709\u963B\u529B\uFF0C\u6162\u6162\u5012\u5730",command:{mode:"damp"}},{button:2,key:"X",title:"\u8D77\u8EAB\u590D\u4F4D",copy:"\u5012\u5730\u540E\u91CD\u65B0\u7AD9\u8D77\u6765",command:{recover:!0}},{button:3,key:"Y",title:"\u96F6\u529B\u77E9",copy:"\u4E0D\u51FA\u529B\uFF0C\u8FC5\u901F\u5012\u5730",command:{mode:"zero"}}];var Id=[0,1,3,4,8,9,null,null,null,null,null,null,12,13,14,15];function Sa(s,e){if(!s.connected||s.mapping!=="standard")return null;if(e==="standard")return s.axes.length>=4&&s.buttons.length>=10?s:null;if(e!=="exhibition-android"||s.id!=="Xbox Wireless Controller"||s.axes.length!==4||s.buttons.length!==16)return null;let t=s.buttons[6].value,n=s.buttons[7].value;return![t,n].every(i=>Number.isFinite(i)&&i>=0&&i<=1)||!s.axes.slice(0,2).every(i=>Number.isFinite(i)&&Math.abs(i)<=1.05)||!Id.every(i=>i===null||Number.isFinite(s.buttons[i].value)&&s.buttons[i].value>=0&&s.buttons[i].value<=1.05)?null:{id:s.id,index:s.index,mapping:"standard",connected:!0,axes:[s.axes[0],s.axes[1],t*2-1,n*2-1],buttons:Id.map(i=>i===null?{pressed:!1,value:0}:s.buttons[i])}}var is=class s{constructor(e=()=>performance.now(),t="standard",n=i=>Sn[i].action){this.clock=e;this.profile=t;this.actionAt=n}device=null;neutral=!1;buttons=[];downAt=new Map;tapAt=new Map;used=new Set;startAt=null;consumed=new Set;triggerKeys=new Set;locomotionChord=!1;setProfile(e){this.suspend(),this.profile=e}get active(){return this.device!==null}static supported(e){return e.connected&&e.mapping==="standard"&&e.axes.length>=4&&e.buttons.length>=10}arm(e){return this.suspend(),Sa(e,this.profile)?(this.device={id:e.id,index:e.index},!0):!1}suspend(){this.device=null,this.neutral=!1,this.buttons=[],this.downAt.clear(),this.tapAt.clear(),this.used.clear(),this.consumed.clear(),this.triggerKeys.clear(),this.locomotionChord=!1,this.startAt=null}read(e,t,n="locomotion"){let i={ready:!1,status:"paused",command:{...ns}};if(!this.device)return i;let r=v=>(this.suspend(),{...i,status:v});if(!t)return r("paused");let a=e.find(v=>(v==null?void 0:v.connected)&&v.id===this.device.id&&v.index===this.device.index);if(!a)return r("disconnected");let o=Sa(a,this.profile);if(!o||!s.supported(o)||!o.axes.slice(0,4).every(v=>Number.isFinite(v)&&Math.abs(v)<=1.05))return r("unsupported");let l=o.buttons.map(v=>v.pressed||v.value>.5);if(!this.neutral){if(this.buttons=l,o.axes.slice(0,4).some(v=>Math.abs(v)>.16)||l.some(Boolean))return{...i,status:"neutral"};this.neutral=!0}let c=v=>{let y=Math.max(-1,Math.min(1,o.axes[v]));return Math.abs(y)<.16?0:Math.sign(y)*(Math.abs(y)-.16)/.84},h=v=>!!(l[v]&&!this.buttons[v]);i.ready=!0,i.status="ready";let u=this.clock();for(let v of[0,1,2,3])l[v]?(l[4]||l[5]||l[6]||l[7]||l[8])&&this.consumed.add(v):this.consumed.delete(v);for(let v of[4,5,6,7])h(v)&&(this.downAt.set(v,u),this.used.delete(v));let d=!!(l[4]||l[5]||l[6]||l[7]||l[8]);i.command={forward:-c(1)||0,strafe:c(0),turn:-c(2)||0,look:-c(3)||0,wave:!d&&!this.consumed.has(0)&&h(0),stop:!d&&!this.consumed.has(1)&&!!l[1],invite:!d&&!this.consumed.has(2)&&h(2),camera:!d&&!this.consumed.has(3)&&h(3),pause:!1,cycleMode:!1,actionStep:d?0:Number(h(15))-Number(h(14))};let f=i.command,g=l[6]&&u-(this.downAt.get(6)??u)>=2e3;if(this.profile==="standard"){let v=y=>{var S;return Math.max(0,Math.min(1,((S=o.buttons[y])==null?void 0:S.value)??0))};i.triggers={left:v(6),right:v(7),holdProgress:l[6]?Math.min(1,(u-(this.downAt.get(6)??u))/2e3):0}}if(l[4]&&[0,1,2,3,5,6,7,8,9].some(v=>l[v])&&this.used.add(4),l[5]&&[0,1,2,3,4,6,7,8,9].some(v=>l[v])&&this.used.add(5),l[4]&&!l[5]&&!l[6]&&!l[7]&&!l[8]){let v=Ld.find(y=>h(y.button));v&&Object.assign(f,v.command)}if(l[5]&&!l[4]&&!l[6]&&!l[7]&&!l[8]&&["locomotion","stand","performance"].includes(n)){let v=Sn.find(y=>h(y.button));v&&(f.actionTrigger=this.actionAt(v.button))}!l[5]&&this.buttons[5]&&!this.used.has(5)&&!d&&(f.cycleMode=!0),l[6]&&(l[7]||[0,1,2,3,12,14].some(v=>l[v]))&&this.used.add(6);let _=[1,3,2,12,14,0],m=_.filter(v=>l[v]);for(let v of _)(!l[6]||!l[v])&&this.triggerKeys.delete(v);if(l[6]&&l[7])for(let v of m)this.triggerKeys.add(v);if(g&&!l[7]&&m.length===1){let v=m[0];this.triggerKeys.has(v)||(this.triggerKeys.add(v),v===1?f.mode="damp":v===3?f.mode="zero":v===2?f.recover=!0:v===12?f.mode="stand":v===14?f.actionTrigger="sit":v===0&&(n==="debug"?f.diagnose=!0:f.actionTrigger="sit"))}l[7]&&l[0]&&!this.locomotionChord&&!l[6]&&!l[4]&&!l[5]&&!l[8]&&(f.mode="locomotion"),this.locomotionChord=!!(l[7]&&l[0]),l[6]&&l[7]&&(h(6)||h(7))&&this.used.add(7),g&&l[7]&&!this.used.has(99)&&(f.mode="debug",this.used.add(99)),(!l[6]||!l[7])&&this.used.delete(99),this.profile==="exhibition-android"&&l[4]&&l[5]&&u-Math.max(this.downAt.get(4)??u,this.downAt.get(5)??u)>=800&&!this.used.has(98)&&(f.mode="debug",this.used.add(98)),(!l[4]||!l[5])&&this.used.delete(98),l[8]&&(h(0)?f.actionTrigger="handshake":h(3)?f.actionTrigger="wave":h(2)&&(f.actionTrigger="turnwave")),n==="debug"&&(f.actionStep=0,f.wave=f.invite=f.camera=!1,f.actionTrigger=void 0,d||(f.labStep=Number(h(15))-Number(h(14)),f.labConfirm=h(0),f.diagnose=h(2),f.labReset=h(3)),d&&(f.forward=f.strafe=0));for(let v of[4,6])if(!l[v]&&this.buttons[v]){let y=u-(this.downAt.get(v)??u),S=this.tapAt.get(v);y<350&&!this.used.has(v)?S!==void 0&&u-S<330?(f.speedMode=v===6?"slow":"fast",this.tapAt.delete(v)):this.tapAt.set(v,u):this.tapAt.delete(v),this.downAt.delete(v)}return d?this.startAt=null:h(9)&&(this.startAt!==null&&u-this.startAt<330?(f.stepping=!0,this.startAt=null):this.startAt=u),this.startAt!==null&&u-this.startAt>=330&&(f.toggleStand=!0,this.startAt=null),this.buttons=l,i}},Ea=class{constructor(e="standard"){this.profile=e}held=new Set;blocked=!1;setProfile(e){this.profile=e,this.held.clear(),this.block()}block(){this.blocked=!0}read(e,t,n){let i=e.map(o=>o?Sa(o,this.profile):null).filter(o=>!!o);t||this.block(),t&&i.length&&i.every(o=>o.buttons.every(l=>!l.pressed&&l.value<=.5))&&(this.blocked=!1);let r=new Set,a=!1;for(let o of i){let l=`${o.index}:${o.id}`,c=o.buttons[0].pressed||o.buttons[0].value>.5;c&&r.add(l),n&&t&&!this.blocked&&c&&!this.held.has(l)&&o.buttons.slice(1).every(h=>!h.pressed&&h.value<=.5)&&(a=!0)}return this.held=r,a}};var er=class{markup=new WeakMap;property(e,t,n){e[t]!==n&&(e[t]=n)}attribute(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}html(e,t){this.markup.get(e)!==t&&(e.innerHTML=t,this.markup.set(e,t))}};var wa=class{pointers=new Map;counts=new Map;press(e,t){this.release(e),this.pointers.set(e,t),this.counts.set(t,(this.counts.get(t)??0)+1)}release(e){let t=this.pointers.get(e);if(t===void 0)return;this.pointers.delete(e);let n=(this.counts.get(t)??1)-1;n>0?this.counts.set(t,n):this.counts.delete(t)}has(e){return this.counts.has(e)}clear(){this.pointers.clear(),this.counts.clear()}};function Gc(s,e){let t=s==="exhibition-android",n=t?"LB":"LT",i=[{id:"A",keys:t?"LB + A":"RT + A",title:"\u6062\u590D\u884C\u8D70",copy:"\u7AD9\u7A33\u540E\u63A5\u7BA1\u6447\u6746",command:{mode:"locomotion"}},{id:"B",keys:`${n} + B`,title:"\u963B\u5C3C\u6A21\u5F0F",copy:"\u6709\u5173\u8282\u963B\u529B\uFF0C\u4E0D\u4E3B\u52A8\u652F\u6491",command:{mode:"damp"}},{id:"X",keys:`${n} + X`,title:"\u8D77\u8EAB\u590D\u4F4D",copy:"\u5012\u5730\u540E\u6062\u590D\u7AD9\u7ACB",command:{recover:!0}},{id:"Y",keys:`${n} + Y`,title:"\u96F6\u529B\u77E9",copy:"\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u4E0D\u4FDD\u6301\u7AD9\u59FF",command:{mode:"zero"}},{id:"stand",keys:t?"\u70B9\u51FB\u5361\u7247":"LT + \u2191",title:"\u9501\u5B9A\u7AD9\u7ACB",copy:"\u539F\u5730\u7AD9\u7A33\uFF0C\u505C\u6B62\u884C\u8D70",command:{mode:"stand"}},{id:"debug",keys:t?"LB + RB":"LT + RT",title:"\u5173\u8282\u5B9E\u9A8C",copy:t?"\u5148\u963B\u5C3C\uFF0C\u518D\u53CC\u80A9\u952E\u6309\u4F4F 0.8 \u79D2":"\u5148\u963B\u5C3C\uFF0C\u53CC\u6273\u673A\u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2",command:{mode:"debug"}}],r={locomotion:t?"LB + A \u884C\u8D70\uFF1B\u5DE6\u6746\u79FB\u52A8\u3001\u53F3\u6746\u8F6C\u5411\u3002\u4F4E\u901F\u7528\u5C4F\u5E55\u6309\u94AE\uFF0CLB \u8FDE\u6309\u4E24\u6B21\u5207\u9AD8\u901F\u3002":"RT + A \u884C\u8D70\uFF1B\u5DE6\u6746\u79FB\u52A8\u3001\u53F3\u6746\u8F6C\u5411\u3002LT \u8FDE\u6309\u4E24\u6B21\u4F4E\u901F\uFF0CLB \u8FDE\u6309\u4E24\u6B21\u9AD8\u901F\u3002",stand:t?"\u7528\u4E0A\u65B9\u9501\u5B9A\u7AD9\u7ACB\u6216\u5361\u7247\u5207\u6362\uFF1B\u6447\u6746\u4E0D\u518D\u79FB\u52A8\u6A21\u578B\uFF0CLB + A \u6062\u590D\u884C\u8D70\u3002":"LT + \u5341\u5B57\u952E \u2191 \u9501\u5B9A\u7AD9\u7ACB\uFF08LT \u9700\u6309\u6EE1 2 \u79D2\uFF09\uFF1BRT + A \u6062\u590D\u884C\u8D70\u3002\u83DC\u5355\u952E\u5355\u51FB\u5207\u7AD9\u7ACB / \u884C\u8D70\u3002",damp:`${n} + B\uFF1A\u5173\u8282\u6709\u963B\u529B\uFF0C\u4F46\u4E0D\u4E3B\u52A8\u652F\u6491\uFF1B\u7F51\u9875\u4EE5\u6162\u5012\u793A\u610F\u3002${n} + X \u8D77\u8EAB\u3002${t?"LB + RB \u6309\u4F4F 0.8 \u79D2":"LT + RT \u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2"}\u8FDB\u5165\u5173\u8282\u5B9E\u9A8C\u3002`,zero:`${n} + Y\uFF1A\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u4E0D\u7EF4\u6301\u7AD9\u59FF\uFF1B\u7F51\u9875\u4EE5\u5FEB\u5012\u793A\u610F\u3002${n} + X \u8D77\u8EAB\u3002${t?"LB + RB \u6309\u4F4F 0.8 \u79D2":"LT + RT \u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2"}\u8FDB\u5165\u5173\u8282\u5B9E\u9A8C\u3002`,performance:t?"RB + A/B/X/Y \u64AD\u653E\u56DB\u79CD\u7F51\u9875\u821E\u8E48\uFF1B\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5176\u4ED6\u52A8\u4F5C\uFF0CA \u64AD\u653E\u3002":"RB + A/B/X/Y \u64AD\u653E\u56DB\u79CD\u7F51\u9875\u821E\u8E48\uFF1B\u89C6\u56FE\u952E + A \u63E1\u624B\u3001+ Y \u6325\u624B\u3002LT + \u2190 \u8E72\u5750\uFF0CLT + A \u5C48\u819D\u793A\u610F\u3002",debug:`\u865A\u62DF\u540A\u67B6\u652F\u6491 \xB7 \u6682\u505C\u8FD0\u52A8\u63A7\u5236\u3002\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5173\u8282\uFF0C\u5DE6\u6746\u4E0A\u4E0B\u8C03\u89D2\u5EA6\uFF0CA \u786E\u8BA4\uFF1B${t?"X":"LT + A \u6216 X"}\u770B\u8BCA\u65AD\u793A\u8303\uFF0CY \u590D\u4F4D\u3002${n} + B \u9000\u51FA\u3002`};return{cards:i,copy:r[e],heading:t?"\u5C55\u5385\u5B89\u5353 \xB7 LB / RB \u66FF\u4EE3\u64CD\u4F5C":"\u7535\u8111\u6807\u51C6 \xB7 LT / RT \u5B8C\u6574\u64CD\u4F5C",hint:t?"\u6309\u5DF2\u6D4B\u901A\u9053\u64CD\u4F5C\uFF1BLT / RT \u4E0D\u7ED1\u5B9A":"\u7EC4\u5408\u952E\u53EF\u540C\u65F6\u6309\u4F4F\uFF1BLT \u9700\u6EE1 2 \u79D2\uFF0CRT + A \u76F4\u63A5\u6309"}}var Ta=class{constructor(e){this.bindings=e;let t=document.getElementById("bindings-grid");for(let n of Sn){let i=document.createElement("div");i.className="binding-slot";let r=document.createElement("label");r.htmlFor=`binding-${n.key}`,r.textContent=`RB + ${n.key}`;let a=document.createElement("select");a.id=r.htmlFor,a.setAttribute("aria-label",`${r.textContent} \u5BF9\u5E94\u7684\u821E\u8E48\u6216\u52A8\u4F5C`);for(let l of fn)a.append(new Option(l.title,l.id));a.addEventListener("change",()=>{var l;this.dirty=!0,(l=this.state)==null||l.stopPreview(),this.status.textContent="\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539 \xB7 \u9884\u89C8\u540E\u70B9\u300C\u4FDD\u5B58\u952E\u4F4D\u300D\u751F\u6548\u3002"});let o=document.createElement("button");o.textContent="\u9884\u89C8",o.setAttribute("aria-label",`\u9884\u89C8 ${r.textContent} \u7684\u52A8\u4F5C`),o.addEventListener("click",()=>{this.editable()&&(this.state.previewDance(a.value),this.status.textContent=`${qn(a.value).title} \xB7 \u540A\u6302\u4E0A\u80A2\u9884\u89C8\uFF1B\u5B8C\u6574\u52A8\u4F5C\u5728\u89E3\u6302\u540E\u64AD\u653E\u3002`)}),i.append(r,a,o),t.append(i),this.selects.push(a),this.previews.push(o)}for(let n of document.querySelectorAll("[data-debug-tab]"))n.addEventListener("click",()=>{this.editable()&&(this.state.stopPreview(),this.state.debugTab=n.dataset.debugTab)});document.getElementById("bindings-save").addEventListener("click",()=>{if(!this.editable())return;let n=this.bindings.save(this.selects.map(i=>i.value));this.dirty=!1,this.status.textContent=n?"\u5DF2\u4FDD\u5B58\u5230\u672C\u673A \xB7 \u6062\u590D\u7AD9\u7ACB\u3001\u89E3\u6302\u540E\uFF0C\u7528 RB \u7EC4\u5408\u952E\u8BD5\u8BD5\u65B0\u52A8\u4F5C\u3002":"\u672C\u6B21\u4F7F\u7528\u5DF2\u751F\u6548\uFF0C\u4F46\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u4FDD\u5B58\uFF1B\u5237\u65B0\u540E\u53EF\u80FD\u6062\u590D\u9ED8\u8BA4\u3002"}),document.getElementById("bindings-default").addEventListener("click",()=>{if(!this.editable())return;this.state.stopPreview();let n=this.bindings.restore();this.dirty=!1,this.status.textContent=n?"\u5DF2\u6062\u590D\u5E76\u4FDD\u5B58\u56DB\u4E2A\u9ED8\u8BA4\u821E\u8E48\u952E\u4F4D\u3002":"\u672C\u6B21\u5DF2\u6062\u590D\u9ED8\u8BA4\uFF1B\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u4FDD\u5B58\u3002"}),document.getElementById("bindings-exit").addEventListener("click",()=>{this.editable()&&this.state.setMode("stand")})}state;revision=-1;dirty=!1;selects=[];previews=[];status=document.getElementById("bindings-status");editable(){let e=this.state;return!!((e==null?void 0:e.mode)==="debug"&&e.running&&!e.paused&&e.body==="upright"&&!e.needsNeutral)}render(e){this.state=e;let t=e.mode==="debug",n=e.debugTab==="bindings";document.getElementById("lab-joint-content").hidden=n,document.getElementById("bindings-content").hidden=!n,document.getElementById("lab-progress").hidden=n;for(let r of document.querySelectorAll("[data-debug-tab]"))r.setAttribute("aria-pressed",String(r.dataset.debugTab===e.debugTab)),r.disabled=!this.editable();this.revision!==this.bindings.revision&&(this.selects.forEach((r,a)=>{r.value=this.bindings.actionAt(a)}),this.revision=this.bindings.revision,this.dirty=!1);let i=!this.editable();for(let r of this.selects)r.disabled=i;for(let r of this.previews)r.disabled=i||!e.hoist.supported,r.textContent=e.debugPreview&&this.selects[this.previews.indexOf(r)].value===e.debugPreview?"\u91CD\u64AD":"\u9884\u89C8";document.getElementById("bindings-save").disabled=i||!this.dirty;for(let r of["bindings-default","bindings-exit"])document.getElementById(r).disabled=i;t&&n&&!e.hoist.supported&&(this.status.textContent="\u8BF7\u5728\u81EA\u7531\u4F53\u9A8C\u4E2D\u9A76\u5165\u540A\u67B6\u3001\u786E\u8BA4\u6302\u63A5\u540E\u914D\u7F6E\u4E0E\u9884\u89C8\u3002")}};var Aa=class{feedback=new er;nodes=new Map;primaryCommand={hoistAction:!0};node(e){let t=this.nodes.get(e);return t||(t=document.getElementById(e),this.nodes.set(e,t)),t}constructor(e){this.node("hoist-primary").addEventListener("click",()=>e(this.primaryCommand)),this.node("hoist-debug").addEventListener("click",()=>e({mode:"debug"})),this.node("hoist-walk").addEventListener("click",()=>e({mode:"locomotion"}));for(let t of["damp","zero","stand"])this.node(`hoist-${t}`).addEventListener("click",()=>e({mode:t}))}render(e,t){let n=this.feedback,i=this.node.bind(this),r=e.hoist,a=e.hoistContext,o=e.mode==="debug";if(n.property(i("hoist-panel"),"hidden",!a||o),n.attribute(document.body,"data-hoist",a?r.phase:""),!a)return;let l=t.source==="manual",c=t.layout==="exhibition-android",h=e.running&&!e.paused,u=r.completed?4:r.phase==="releasing"?3:r.supported?r.observed.size===2?3:2:r.locked||r.ready?1:0,d=["\u9A76\u5165\u540A\u6302\u4F4D","\u505C\u7A33\uFF0C\u8FDE\u63A5\u540A\u5E26","\u6BD4\u8F83\u4E24\u79CD\u653E\u677E\u6A21\u5F0F","\u7AD9\u7A33\u3001\u843D\u811A\u3001\u89E3\u6302","\u5B8C\u6210\uFF01\u5E26\u7740\u65B0\u53D1\u73B0\u51FA\u53D1"];n.property(i("hoist-title"),"textContent",d[u]),n.property(i("hoist-step"),"textContent",r.completed?"\u5B8C\u6210":`${Math.min(4,u+1)} / 4`),n.property(i("hoist-support"),"textContent",r.supported?"\u652F\u6491\u6709\u6548":r.phase==="attaching"?"\u8FDE\u63A5\u4E2D \xB7 \u6682\u65E0\u4FDD\u62A4":"\u672A\u6302\u63A5 \xB7 \u65E0\u4FDD\u62A4"),n.attribute(i("hoist-support"),"data-supported",String(r.supported));let f=r.completed?"\u4F60\u5DF2\u6BD4\u8F83\u963B\u5C3C\u4E0E\u96F6\u529B\u77E9\uFF0C\u5E76\u5728\u6062\u590D\u7AD9\u7ACB\u540E\u89E3\u6302\u3002\u5207\u56DE\u884C\u8D70\uFF0C\u7EE7\u7EED\u63A2\u7D22\u3002":r.phase==="attaching"?"\u53CC\u540A\u5E26\u6B63\u5728\u8FDE\u63A5\u5E76\u6536\u7D27\uFF0C\u5B8C\u6210\u540E\u673A\u5668\u4EBA\u4F1A\u8F7B\u8F7B\u79BB\u5730\u3002":r.phase==="releasing"?"\u5148\u8BA9\u53CC\u811A\u843D\u5730\uFF0C\u518D\u89E3\u5F00\u540A\u5E26\u3002\u8BF7\u7B49\u6307\u793A\u53D8\u4E3A\u201C\u672A\u6302\u63A5\u201D\u540E\u79BB\u5F00\u3002":r.supported?e.mode==="stand"?"\u5173\u8282\u4E3B\u52A8\u6062\u590D\u7AD9\u59FF\u3002\u4F60\u53EF\u4EE5\u6BD4\u8F83\u4E24\u79CD\u6A21\u5F0F\uFF0C\u6216\u843D\u811A\u89E3\u6302\u3002":e.mode==="damp"?"\u540A\u5E26\u627F\u91CD\uFF0C\u5173\u8282\u6709\u963B\u529B\u3001\u7F13\u6162\u653E\u677E\uFF1B\u5B83\u4E0D\u4F1A\u4E3B\u52A8\u4FDD\u6301\u7AD9\u59FF\u3002":"\u540A\u5E26\u627F\u91CD\uFF0C\u5173\u8282\u66F4\u5FEB\u653E\u677E\uFF1B\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u811A\u638C\u4E0D\u518D\u4E3B\u52A8\u4FDD\u6301\u6C34\u5E73\u3002":r.ready?"\u4F4D\u7F6E\u6B63\u786E\uFF0C\u5DF2\u7ECF\u505C\u7A33\u3002\u6309 A \u6216\u70B9\u4E0B\u65B9\u6309\u94AE\u786E\u8BA4\u6302\u63A5\u3002":r.distance<=et.radius?"\u5DF2\u7ECF\u8FDB\u5165 H \u5708\uFF1A\u677E\u5F00\u79FB\u52A8\u548C\u8F6C\u5411\uFF0C\u505C\u7A33\u7EA6 1 \u79D2\u3002":`\u9A7E\u9A76\u5230\u95E8\u67B6\u4E0B\u7684\u91D1\u8272 H \u5708 \xB7 \u8DDD\u79BB ${Number.isFinite(r.distance)?r.distance.toFixed(1):e.targetDistance.toFixed(1)} m\u3002`;(e.body==="falling"||e.body==="fallen"||e.body==="recovering")&&(f=e.body==="fallen"?"\u672A\u5EFA\u7ACB\u540A\u5E26\u652F\u6491\u5C31\u5207\u4E86\u88AB\u52A8\u6A21\u5F0F\u3002\u5148\u8D77\u8EAB\u590D\u4F4D\uFF0C\u518D\u56DE H \u5708\u6302\u63A5\u3002":e.body==="falling"?"\u6CA1\u6709\u652F\u6491\uFF0C\u6A21\u578B\u6B63\u5728\u5012\u5730\u3002\u843D\u5730\u540E\u53EF\u8D77\u8EAB\u91CD\u8BD5\u3002":"\u6B63\u5728\u6062\u590D\u7AD9\u7ACB\uFF0C\u8BF7\u7A0D\u5019\u3002"),n.property(i("hoist-description"),"textContent",f),n.property(i("hoist-knowledge"),"textContent","\u6302\u63A5 \u2192 \u5207\u963B\u5C3C / \u96F6\u529B\u77E9 \u2192 \u8FDB\u5165\u8C03\u8BD5\uFF0C\u914D\u7F6E\u821E\u8E48\u952E\u4F4D\u3002\u7F51\u9875\u540A\u5E26\u4E3A\u6559\u5B66\u793A\u610F\u3002");let g=l?"H":"A";this.primaryCommand=e.body==="fallen"?{recover:!0}:{hoistAction:!0};let _=e.body==="fallen"?`${g} \u8D77\u8EAB\u91CD\u8BD5`:r.phase==="attaching"?"\u6B63\u5728\u6536\u7D27\u540A\u5E26\u2026":r.phase==="releasing"?"\u6B63\u5728\u843D\u811A\u89E3\u6302\u2026":r.supported?e.mode==="stand"?`${g} \u843D\u811A\u89E3\u6302`:`${g} \u6062\u590D\u7AD9\u7ACB`:`${g} \u786E\u8BA4\u6302\u63A5`;n.property(i("hoist-primary"),"textContent",_),n.property(i("hoist-primary"),"disabled",!h||e.body!=="upright"&&e.body!=="fallen"||r.phase==="attaching"||r.phase==="releasing"||!r.locked&&e.body!=="fallen"&&!r.ready||r.supported&&e.mode==="stand"&&r.standing<et.standingSeconds),n.property(i("hoist-walk"),"disabled",!h||r.locked||e.body!=="upright"),n.property(i("hoist-keys"),"textContent",l?"WASD / \u5C4F\u5E55\u65B9\u5411\u952E\u79FB\u52A8 \xB7 Q / E \u8F6C\u8EAB \xB7 H \u6302\u63A5 / \u6062\u590D / \u89E3\u6302":`${c?"\u5C55\u5385 LB":"\u7535\u8111 LT\uFF08\u6309\u6EE1 2 \u79D2\uFF09"} + B \u963B\u5C3C \xB7 + Y \u96F6\u529B\u77E9 \xB7 A \u6302\u63A5 / \u6062\u590D / \u89E3\u6302`);for(let p of["damp","zero","stand"])n.property(i(`hoist-${p}`),"disabled",!h||r.phase!=="supported"),n.property(i(`hoist-${p}-key`),"textContent",l?"\u70B9\u51FB\u5207\u6362":p==="stand"?"A \u6062\u590D":`${c?"LB":"LT"} + ${p==="damp"?"B":"Y"}`),n.attribute(i(`hoist-${p}`),"data-observed",String(p!=="stand"&&r.observed.has(p))),n.attribute(i(`hoist-${p}`),"aria-pressed",String(e.mode===p));n.property(i("hoist-debug"),"disabled",!h||!r.supported||!["damp","zero"].includes(e.mode)),n.property(i("hoist-debug"),"textContent",l?"\u8FDB\u5165\u8C03\u8BD5 / \u914D\u821E\u8E48 \u2197":`${c?"LB + RB":"LT + RT"} \u8C03\u8BD5 / \u914D\u821E\u8E48`);let m=r.phase==="attaching"||r.phase==="releasing"?r.progress:r.ready||r.supported?1:r.hold/et.settleSeconds;n.attribute(i("hoist-progress"),"style",`transform:scaleX(${m})`),n.attribute(i("hoist-progress").parentElement,"aria-valuenow",String(Math.round(m*100)));for(let p=0;p<4;p++)n.attribute(i(`hoist-route-${p}`),"data-state",p<u?"done":p===u?"current":"");for(let p of i("hoist-directions").querySelectorAll("button"))n.property(p,"disabled",!h||r.locked||e.mode!=="locomotion"||e.body!=="upright")}};var xe=s=>document.getElementById(s),Ra=class{constructor(e){this.bindings=e;this.bindingsPanel=new Ta(e),xe("hoist-toggle").addEventListener("click",()=>{this.current&&(this.current.showHoist(!this.current.hoistContext),this.clear())}),xe("tutorial-action").addEventListener("click",()=>{this.tutorialCommand?Object.assign(this.pending,this.tutorialCommand):document.querySelector('button[data-experience="free"]').click()});for(let a of document.querySelectorAll("[data-drive-mode]"))a.addEventListener("click",()=>{this.pending.mode=a.dataset.driveMode});xe("recover-body").addEventListener("click",()=>{this.pending.recover=!0}),xe("step-toggle").addEventListener("click",()=>{this.stepping?this.pending.mode="stand":this.pending.stepping=!0});for(let a of document.querySelectorAll("[data-drive-speed]"))a.addEventListener("click",()=>{this.pending.speedMode=a.dataset.driveSpeed});let t=xe("performance-shortcuts");for(let a of Sn){let o=document.createElement("button");o.dataset.performanceSlot=String(a.button),o.dataset.performanceAction=this.bindings.actionAt(a.button),o.innerHTML=`<kbd>RB + ${a.key}</kbd><span>${a.title}</span>`,o.addEventListener("click",()=>{this.pending.actionTrigger=this.bindings.actionAt(a.button)}),t.append(o)}for(let a of Gc("standard","locomotion").cards){let o=document.createElement("button");o.dataset.modeShortcut=a.id,o.innerHTML=`<kbd>${a.keys}</kbd><b>${a.title}</b><small>${a.copy}</small>`,o.addEventListener("click",()=>Object.assign(this.pending,a.command)),xe("mode-cards").append(o)}for(let a of xn){let o=document.createElement("button");o.dataset.labJoint=a.id,o.textContent=a.title,o.addEventListener("click",()=>{this.pending.labSelect=a.id}),xe("lab-joints").append(o)}for(let[a,o]of Object.entries({"lab-confirm":{labConfirm:!0},"lab-demo":{diagnose:!0},"lab-reset":{labReset:!0},"lab-exit":{mode:"damp"}}))xe(a).addEventListener("click",()=>Object.assign(this.pending,o));let n=xe("action-select");for(let a of[...new Set(fn.map(o=>o.group))]){let o=document.createElement("optgroup");o.label=a;for(let l of fn.filter(c=>c.group===a))o.append(new Option(l.title,l.id));n.append(o)}n.addEventListener("change",()=>{this.pending.actionSelect=n.value});for(let a of[-1,1])xe(a<0?"action-prev":"action-next").addEventListener("click",()=>{this.pending.actionStep=a});for(let a of document.querySelectorAll("[data-hold]")){a.addEventListener("pointerdown",o=>{o.button===0&&(o.preventDefault(),a.setPointerCapture(o.pointerId),this.held.press(o.pointerId,a.dataset.hold))});for(let o of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(o,l=>this.held.release(l.pointerId));a.addEventListener("contextmenu",o=>o.preventDefault())}let i={"action-wave":"wave","action-menu-play":"wave","action-invite":"invite","emergency-stop":"stop"};for(let[a,o]of Object.entries(i))xe(a).addEventListener("click",()=>{this.pending[o]=!0});let r=new Set(["w","s","a","d","q","e","arrowleft","arrowright","arrowup","arrowdown"," ","1","2","c","p","escape","m","[","]","r","h"]);document.addEventListener("keydown",a=>{let o=a.target;if(o.closest("input,select,textarea,[contenteditable=true]")||a.key===" "&&o.closest("button,a"))return;let l=a.key.toLowerCase();if(!r.has(l)||(a.preventDefault(),this.keys.add(l),a.repeat))return;l==="m"&&(this.pending.cycleMode=!0),l==="r"&&(this.pending.recover=!0),l==="h"&&(this.pending.hoistAction=!0),(l==="["||l==="]")&&(this.pending.actionStep=l==="["?-1:1);let c={" ":"wave",1:"wave",2:"invite",c:"camera",p:"pause",escape:"stop"};c[l]&&(this.pending[c[l]]=!0)}),document.addEventListener("keyup",a=>this.keys.delete(a.key.toLowerCase())),xe("show-touch").addEventListener("click",()=>{let a=xe("touch-controls");a.hidden=!a.hidden,xe("show-touch").setAttribute("aria-expanded",String(!a.hidden)),document.body.dataset.touch=String(!a.hidden),this.held.clear()})}feedback=new er;nodes=new Map;node(e){let t=this.nodes.get(e);return t||(t=xe(e),this.nodes.set(e,t)),t}held=new wa;keys=new Set;pending={};guideProfile="";tutorialCommand=null;hoistPanel=new Aa(e=>Object.assign(this.pending,e));current;bindingsPanel;stepping=!1;clear(){this.held.clear(),this.keys.clear(),this.pending={}}read(e){let t={...ns,...this.pending};if(this.pending={},t.labAdjust=this.held.has("lab-increase")?1:this.held.has("lab-decrease")?-1:void 0,!e)return t.forward=Number(this.held.has("forward"))-Number(this.held.has("back")),t.strafe=Number(this.held.has("right"))-Number(this.held.has("left")),t.turn=Number(this.held.has("turn-left"))-Number(this.held.has("turn-right")),t;let n=(i,r)=>this.keys.has(i)||this.held.has(r);return t.forward=Number(n("w","forward"))-Number(n("s","back")),t.strafe=Number(n("d","right"))-Number(n("a","left")),t.turn=Number(n("q","turn-left")||this.keys.has("arrowleft"))-Number(n("e","turn-right")||this.keys.has("arrowright")),t.look=Number(this.keys.has("arrowup"))-Number(this.keys.has("arrowdown")),t}render(e,t){this.current=e;let n=this.feedback,i=U=>this.node(U),r=t.source==="pad"&&t.layout==="exhibition-android",a=Gc(r?"exhibition-android":"standard",e.mode),o=e.mode==="debug";if(this.guideProfile!==(r?"android":t.source)){this.guideProfile=r?"android":t.source;for(let U of a.cards){let k=document.querySelector(`[data-mode-shortcut="${U.id}"]`);n.property(k.querySelector("kbd"),"textContent",t.source==="manual"?"\u70B9\u51FB":U.keys),n.property(k.querySelector("small"),"textContent",U.copy)}}if(n.property(i("control-profile-title"),"textContent",t.source==="manual"?"\u89E6\u5C4F / \u952E\u76D8 \xB7 \u70B9\u5361\u7247\u64CD\u4F5C":a.heading),n.property(i("control-profile-hint"),"textContent",t.source==="manual"?"\u5361\u7247\u4E0E\u624B\u67C4\u4F7F\u7528\u540C\u4E00\u5957\u72B6\u6001\u5207\u6362":a.hint),n.property(i("mode-modifier-label"),"textContent",r?"LB":"LT / RT"),n.property(document.querySelector(".control-columns"),"hidden",o||e.hoistContext),n.property(i("lab-panel"),"hidden",!o),o){let U=e.lab;n.property(i("lab-progress"),"textContent",`${U.completed.size} / 3`),n.property(i("lab-goal"),"textContent",`${U.spec.goal}\xB0`),n.property(i("lab-command"),"textContent",`${U.target.toFixed(1)}\xB0`),n.property(i("lab-angle"),"textContent",`${U.angle.toFixed(1)}\xB0`),n.property(i("lab-error"),"textContent",`${U.error.toFixed(1)}\xB0`),n.property(i("lab-feedback"),"textContent",e.body!=="upright"?"\u865A\u62DF\u540A\u67B6\u6B63\u5728\u6276\u8D77\u6A21\u578B\uFF0C\u8BF7\u7A0D\u5019\u2026":e.needsNeutral?"\u8BF7\u5148\u677E\u5F00\u6447\u6746\u548C\u6309\u952E\uFF0C\u518D\u5F00\u59CB\u5173\u8282\u5B9E\u9A8C\u3002":U.feedback),n.property(i("lab-knowledge"),"textContent",U.spec.copy),n.property(i("lab-help"),"textContent",t.source==="manual"?"W / S \u6216\u6309\u4F4F \u2212 / + \u8C03\u8282 \xB7 \u677E\u5F00\u505C\u7A33\u540E\u70B9\u786E\u8BA4":"\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5173\u8282 \xB7 \u5DE6\u6746\u4E0A / \u4E0B\u8C03\u8282 \xB7 A \u786E\u8BA4 \xB7 X \u8BCA\u65AD\u793A\u8303 \xB7 Y \u590D\u4F4D");for(let[k,j,ee]of[["lab-confirm","A \u786E\u8BA4\u6821\u51C6","1 \u786E\u8BA4\u6821\u51C6"],["lab-demo","X \u8BCA\u65AD\u793A\u8303","2 \u8BCA\u65AD\u793A\u8303"],["lab-reset","Y \u5173\u8282\u590D\u4F4D","\u5173\u8282\u590D\u4F4D"]])n.property(i(k),"textContent",t.source==="manual"?ee:j);for(let k of document.querySelectorAll("[data-lab-joint]"))n.attribute(k,"aria-pressed",String(k.dataset.labJoint===U.selected)),n.attribute(k,"data-complete",String(U.completed.has(k.dataset.labJoint)));for(let k of document.querySelectorAll("#lab-joint-content button"))n.property(k,"disabled",!e.running||e.paused||e.body!=="upright"||e.needsNeutral)}n.attribute(document.body,"data-experience",e.experience),n.attribute(i("source-manual"),"aria-pressed",String(t.source==="manual")),n.attribute(i("source-pad"),"aria-pressed",String(t.source==="pad")),n.property(document.querySelector(".mission-card"),"hidden",e.experience!=="mission");for(let U of document.querySelectorAll("button[data-experience]"))n.attribute(U,"aria-pressed",String(U.dataset.experience===e.experience)),n.property(U,"disabled",!t.loaded);let l=t.input;n.attribute(document.body,"data-input",l),n.attribute(document.body,"data-stage",e.stage),n.attribute(document.body,"data-mode",e.mode),n.attribute(document.body,"data-action",e.selectedAction),n.attribute(document.body,"data-body",e.body),n.attribute(document.body,"data-stepping",String(e.stepping)),n.attribute(document.body,"data-speed",e.speedMode),this.stepping=e.stepping;let c={slow:"\u4F4E\u901F",fast:"\u9AD8\u901F"};n.property(i("speed-status"),"textContent",`\u5F53\u524D\uFF1A${c[e.speedMode]}`);for(let U of document.querySelectorAll("[data-drive-speed]")){let k=U.dataset.driveSpeed;n.attribute(U,"aria-pressed",String(k===e.speedMode)),n.property(U,"disabled",!e.running||e.paused||e.body!=="upright"||qt(e.mode)),n.property(U.querySelector("small"),"textContent",t.source==="manual"||r&&k==="slow"?"\u70B9\u51FB\u5207\u6362":{slow:"LT \u8FDE\u6309 2 \u6B21",fast:"LB \u8FDE\u6309 2 \u6B21"}[k]),n.property(U,"title",t.source==="manual"||r&&k==="slow"?"\u70B9\u51FB\u5207\u6362\u901F\u5EA6\u6863":k==="slow"?"LT \u5DE6\u540E\u6273\u673A\u5FEB\u901F\u6309\u4E0B\u5E76\u677E\u5F00\u4E24\u6B21":"LB \u5DE6\u80A9\u952E\u5FEB\u901F\u6309\u4E0B\u5E76\u677E\u5F00\u4E24\u6B21")}n.property(i("speed-help"),"textContent",e.running?e.paused?"\u5DF2\u6682\u505C \xB7 \u7EE7\u7EED\u540E\u53EF\u8C03\u901F\u3002":e.body!=="upright"||qt(e.mode)?"\u5148\u8D77\u8EAB\u6062\u590D\u7AD9\u7ACB\uFF0C\u518D\u5207\u884C\u8D70\u4F53\u9A8C\u901F\u5EA6\u3002":e.mode!=="locomotion"?"\u901F\u5EA6\u6863\u5DF2\u8BB0\u4F4F \xB7 \u5207\u56DE\u884C\u8D70\u6A21\u5F0F\u540E\u751F\u6548\u3002":`${{slow:"\u4F4E\u901F\u9002\u5408\u9760\u8FD1\u76EE\u6807",fast:"\u9AD8\u901F\u9002\u5408\u5FEB\u901F\u79FB\u52A8"}[e.speedMode]} \xB7 ${t.source==="pad"?"\u6447\u6746\u63A8\u5F97\u8D8A\u8FDC\uFF0C\u8D70\u5F97\u8D8A\u5FEB":"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u5207\u6863"}\u3002\u901F\u5EA6\u4E3A\u7F51\u9875\u6A21\u62DF\u3002`:"\u9ED8\u8BA4\u4F4E\u901F \xB7 \u5F00\u59CB\u4F53\u9A8C\u540E\u53EF\u5207\u6362\u9AD8\u4F4E\u901F\u3002"),n.attribute(i("step-toggle"),"aria-pressed",String(e.stepping)),n.property(i("step-toggle"),"textContent",e.stepping?"\u505C\u6B62\u8E0F\u6B65":"\u6301\u7EED\u8E0F\u6B65"),n.property(i("step-toggle"),"disabled",!e.running||e.paused||e.body!=="upright"||qt(e.mode)||!!e.gesture);let h=i("recover-body");n.property(h,"disabled",!e.running||e.paused||e.body!=="fallen"),n.property(h,"textContent",e.body==="recovering"?"\u6B63\u5728\u8D77\u8EAB\u2026":"\u8D77\u8EAB\u590D\u4F4D");let u={upright:o?"\u540A\u67B6\u5173\u8282\u5B9E\u9A8C":e.hoist.supported?"\u540A\u5E26\u652F\u6491\u4E2D":e.hoist.locked?"\u8C03\u6574\u540A\u5E26\u4E2D":qt(e.mode)?"\u5F85\u542F\u52A8":e.stepping?"\u6301\u7EED\u8E0F\u6B65":Ri.find(U=>U.id===e.mode).title,falling:"\u5931\u53BB\u652F\u6491",fallen:"\u5DF2\u5012\u5730",recovering:o?"\u540A\u67B6\u6276\u8D77\u4E2D":"\u8D77\u8EAB\u590D\u4F4D"}[e.body];n.property(i("robot-state"),"textContent",u);for(let U of document.querySelectorAll("[data-drive-mode]"))n.attribute(U,"aria-pressed",String(U.dataset.driveMode===e.mode)),n.property(U,"disabled",!t.loaded);let d=Ri.find(U=>U.id===e.mode);n.property(i("mode-title"),"textContent",`${d.title} \xB7 ${d.hint}`),n.property(i("mode-copy"),"textContent",e.hoistContext?e.hoist.supported?e.mode==="damp"?"\u540A\u5E26\u627F\u91CD\uFF0C\u5173\u8282\u5E26\u963B\u529B\u653E\u677E\uFF1B\u4E0D\u4E3B\u52A8\u7EF4\u6301\u7AD9\u7ACB\u3002\u53EF\u5207\u96F6\u529B\u77E9\u4F5C\u6BD4\u8F83\uFF0C\u6309 A \u6062\u590D\u7AD9\u7ACB\u3002":e.mode==="zero"?"\u540A\u5E26\u627F\u91CD\uFF0C\u5173\u8282\u5FEB\u901F\u653E\u677E\uFF1B\u811A\u638C\u4E0D\u4E3B\u52A8\u4FDD\u6301\u6C34\u5E73\u3002\u6309 A \u6062\u590D\u7AD9\u7ACB\uFF0C\u7A33\u5B9A\u540E\u518D\u89E3\u6302\u3002":e.mode==="debug"?"\u95E8\u67B6\u6301\u7EED\u652F\u6491\uFF1B\u5728\u8C03\u8BD5\u5DE5\u4F5C\u53F0\u505A\u5173\u8282\u5B9E\u9A8C\u6216\u66F4\u6362\u821E\u8E48\u952E\u4F4D\u3002\u4FDD\u5B58\u540E\u6062\u590D\u7AD9\u7ACB\u3001\u89E3\u6302\u518D\u8868\u6F14\u3002":"\u540A\u5E26\u5DF2\u8FDE\u63A5\uFF0C\u4E0D\u80FD\u884C\u8D70\u6216\u8868\u6F14\u3002\u6309 A \u843D\u811A\u89E3\u6302\uFF0C\u518D\u6062\u590D\u884C\u8D70\u3002":"\u53EA\u6709\u786E\u8BA4\u6302\u63A5\u624D\u6709\u652F\u6491\u3002\u5148\u9A76\u5165 H \u5708\u5E76\u505C\u7A33\uFF0C\u518D\u6309 A\uFF1B\u672A\u6302\u63A5\u5207\u963B\u5C3C / \u96F6\u529B\u77E9\u4ECD\u4F1A\u5012\u5730\u3002":a.copy),n.property(i("pause-key"),"textContent",r?"\u89E6\u5C4F":t.source==="pad"?"\u2261":"P"),n.property(i("pause-key-copy"),"textContent",r?"\u5207\u6362\u4E0A\u65B9\u6A21\u5F0F":t.source==="pad"?"\u7AD9\u7ACB / \u884C\u8D70":"\u6682\u505C / \u7EE7\u7EED"),n.attribute(i("pause-key"),"aria-label",r?"\u83DC\u5355\u952E\u672A\u8BFB\u5230\uFF0C\u8BF7\u70B9\u51FB\u6A21\u5F0F\u6309\u94AE":t.source==="pad"?"\u83DC\u5355\u952E\uFF0C\u4E09\u6A2A\u7EBF\u56FE\u6807":"P \u952E"),n.property(i("performance-shortcuts"),"hidden",!1),n.property(i("normal-gestures"),"hidden",!1),n.property(i("action-menu-play"),"hidden",e.mode!=="performance"),n.property(i("action-menu-play"),"textContent",t.source==="pad"?"A \u25B6":"\u64AD\u653E \u25B6");for(let U of document.querySelectorAll("[data-performance-action]"))n.property(U,"disabled",!e.running||e.paused||!!e.gesture||e.needsNeutral||e.body!=="upright"||qt(e.mode)),n.attribute(U,"aria-pressed",String(e.gesture===U.dataset.performanceAction));for(let U of document.querySelectorAll("[data-mode-shortcut]")){let k=a.cards.find(j=>j.id===U.dataset.modeShortcut);n.property(U,"disabled",!e.running||e.paused||(k.command.recover?e.body!=="fallen":k.command.mode==="debug"?!["damp","zero"].includes(e.mode):["locomotion","stand"].includes(k.command.mode??"")&&e.body!=="upright")),n.attribute(U,"aria-pressed",String(k.command.recover?e.body==="recovering":e.mode===k.command.mode))}n.property(i("mode-shortcuts"),"textContent",t.source==="manual"?"\u5361\u7247\u5747\u53EF\u76F4\u63A5\u70B9\u51FB \xB7 P \u6682\u505C / \u7EE7\u7EED\uFF0CR \u8D77\u8EAB\u3002":r?"A \u7EE7\u7EED\u3001B \u6682\u505C\uFF1B\u4F4E\u901F\u70B9\u5C4F\u5E55\u3002LB / RB \u4E3A\u5C55\u5385\u66FF\u4EE3\u6620\u5C04\u3002":"LT \u7EC4\u5408\u53EF\u540C\u65F6\u6309\u4F4F\u81F3\u6EE1 2 \u79D2\uFF1BRT + A \u884C\u8D70\u3002RB \u821E\u8E48\u4E3A\u7F51\u9875\u6269\u5C55\uFF0CA \u7EE7\u7EED\u3001B \u6682\u505C\u3002"),n.property(i("pad-layout"),"title",r?"\u6309\u5C55\u5385\u7167\u7247\u4E2D\u7684\u901A\u9053\u8F6C\u6362\uFF1B\u672A\u6D4B\u8BD5\u7684\u6309\u952E\u4E0D\u7ED1\u5B9A":"\u6807\u51C6\u6D4F\u89C8\u5668\u5E03\u5C40\uFF0C\u7535\u8111\u4FDD\u6301\u539F\u63A7\u5236");let f=qn(e.selectedAction),g=i("action-select");g.value!==e.selectedAction&&(g.value=e.selectedAction),n.property(i("selected-action-title"),"textContent",f.title),n.property(i("action-description"),"textContent",f.description),n.attribute(document.body,"data-motion",e.paused?"paused":e.body!=="upright"?e.body:e.gesture??(e.speed>.02?"walking":"idle")),n.property(i("connection-label"),"textContent",t.source==="manual"?"\u952E\u76D8 / \u89E6\u5C4F":l==="ready"?"\u624B\u67C4\u5DF2\u63A5\u901A":l==="waiting"?"\u6B63\u5728\u7B49\u5F85\u624B\u67C4":"\u624B\u67C4\u8F93\u5165\u5DF2\u6682\u505C"),n.attribute(i("connection-label").parentElement,"data-ready",String(l==="ready")),n.property(i("input-status"),"textContent",o&&e.debugTab==="bindings"?"\u70B9\u4E0B\u65B9\u52A8\u4F5C\u83DC\u5355\u66F4\u6362 \u2192 \u9884\u89C8 \u2192 \u4FDD\u5B58\uFF1B\u6062\u590D\u7AD9\u7ACB\u5E76\u89E3\u6302\u540E\uFF0C\u7528 RB + \u5F69\u8272\u952E\u8868\u6F14\u3002":o&&t.source==="manual"&&e.running&&!e.paused?"\u5173\u8282\u5B9E\u9A8C \xB7 W / S \u8C03\u8282\uFF0C1 \u786E\u8BA4\u30012 \u793A\u8303\uFF1B\u4E5F\u53EF\u6309\u4F4F\u5C4F\u5E55 \u2212 / +\u3002":e.hoistContext&&e.running&&!e.paused&&!o?t.source==="manual"?"WASD \u79FB\u52A8 \xB7 Q / E \u8F6C\u8EAB \xB7 H \u6302\u63A5 / \u6062\u590D / \u89E3\u6302 \xB7 P \u6682\u505C":"\u5DE6\u6746\u79FB\u52A8 \xB7 \u53F3\u6746\u8F6C\u8EAB \xB7 A \u6302\u63A5 / \u6062\u590D / \u89E3\u6302 \xB7 B \u6682\u505C":t.copy);let _=i("drive-start");n.property(_,"disabled",!t.loaded||t.waiting||!e.paused&&e.running&&l==="ready");let m=t.source==="pad"?"A":"\u2197",p=e.experience==="mission"?"\u4EFB\u52A1":"\u4F53\u9A8C";n.html(_,t.waiting?"\u7B49\u5F85\u8FDE\u63A5\u2026 <span>\u25CC</span>":e.paused?`\u7EE7\u7EED${p} <span>${m}</span>`:e.running?"\u9A7E\u9A76\u4E2D <span>\u2197</span>":`\u5F00\u59CB${p} <span>${m}</span>`);let v=i("drive-pause");n.property(v,"disabled",!t.loaded||!e.running&&!t.waiting),n.property(v,"textContent",t.waiting?"\u53D6\u6D88":e.paused?"\u7EE7\u7EED":"\u6682\u505C");for(let U of["action-wave","action-menu-play","action-invite"])n.property(i(U),"disabled",!e.running||e.paused||!!e.gesture||qt(e.mode)||e.body!=="upright"||e.needsNeutral);n.property(i("emergency-stop"),"disabled",!e.running&&!t.waiting);let y=e.tutorial,S=Vc(y,r?"exhibition-android":"standard",t.source==="manual",e.body,e.mode);n.property(i("mission-step"),"textContent",`${String(Math.min(Ci,y.index+1)).padStart(2,"0")} / ${String(Ci).padStart(2,"0")}`),n.property(i("mission-title"),"textContent",S.title);let P=e.body!=="upright"&&!["damp","recover"].includes(e.stage),T=y.navigating&&!P&&e.mode!=="locomotion",R=P?"\u5F53\u524D\u5DF2\u5931\u53BB\u652F\u6491\uFF0C\u5148\u8D77\u8EAB\u6062\u590D\u3002\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4\u4F1A\u4FDD\u7559\u3002":T?e.mode==="debug"?"\u5148\u9000\u51FA\u5173\u8282\u5B9E\u9A8C\uFF0C\u518D\u8D77\u8EAB\u6062\u590D\u652F\u6491\uFF0C\u7EE7\u7EED\u524D\u5F80\u76EE\u6807\u3002":"\u5F53\u524D\u6A21\u5F0F\u4E0D\u80FD\u9A7E\u9A76\u3002\u5148\u6062\u590D\u884C\u8D70\uFF0C\u518D\u7EE7\u7EED\u524D\u5F80\u76EE\u6807\u3002":S.instruction;n.property(i("mission-description"),"textContent",R);let D=Math.round(y.progress*100),x=Vc({step:"recover"},r?"exhibition-android":"standard",t.source==="manual",e.body,e.mode);n.property(i("tutorial-key"),"textContent",P?x.keys:S.keys),n.property(i("tutorial-knowledge"),"textContent",S.knowledge),n.attribute(i("tutorial-progress"),"style",`transform:scaleX(${D/100})`),n.attribute(i("tutorial-progress").parentElement,"aria-valuenow",String(D));let w=e.stage==="walk"||e.stage==="park",B=e.stage==="walk"?Yt.arrivalSeconds:Yt.parkingSeconds,q=e.targetDistance>e.target.radius?`\u8DDD ${y.target.label} \u70B9 ${e.targetDistance.toFixed(1)} m \xB7 \u9A76\u5165\u91D1\u5708`:y.hold>0?`\u505C\u7A33\u786E\u8BA4 ${Math.min(B,y.hold).toFixed(1)} / ${B.toFixed(1)} s`:"\u5DF2\u8FDB\u5165\u76EE\u6807\u5708 \xB7 \u677E\u6746\u505C\u8F66",Q=Math.abs(y.headingError)*180/Math.PI,I=w?q:e.stage==="turn"?Q<=12?"\u65B9\u5411\u6B63\u786E \xB7 \u677E\u6746\u4FDD\u6301":`${y.headingError>0?"\u5411\u5DE6\u8F6C":"\u5411\u53F3\u8F6C"} \xB7 \u8FD8\u5DEE ${Math.round(Q)}\xB0`:`\u64CD\u4F5C\u8FDB\u5EA6 ${D}%`;n.property(i("arrival-progress"),"textContent",e.paused||!e.running?"\u6309 A \u6216\u70B9\u51FB\u5F00\u59CB\uFF0C\u8DDF\u7740\u63D0\u793A\u8BD5\u4E00\u8BD5":P?"\u8D77\u8EAB\u540E\u7EE7\u7EED\u5F53\u524D\u6B65\u9AA4":T?"\u70B9\u300C\u6062\u590D\u884C\u8D70\u300D\uFF0C\u677E\u5F00\u6447\u6746\u540E\u7EE7\u7EED":e.gesture?"\u6B63\u5728\u8868\u6F14 \xB7 \u7B49\u52A8\u4F5C\u5B8C\u6574\u7ED3\u675F":y.notice||(e.stage==="complete"?"\u5168\u90E8\u5B8C\u6210 \xB7 \u53EF\u4EE5\u81EA\u7531\u63A2\u7D22\u4E86":I)),n.attribute(i("arrival-progress"),"data-success",String(!!y.notice)),this.tutorialCommand=P?x.command:T?{mode:e.mode==="debug"?"damp":"locomotion"}:S.command,n.property(i("tutorial-action"),"hidden",!this.tutorialCommand&&e.stage!=="complete"),n.property(i("tutorial-action"),"textContent",P?x.button:T?e.mode==="debug"?"\u9000\u51FA\u5B9E\u9A8C\uFF0C\u6062\u590D\u652F\u6491":"\u6062\u590D\u884C\u8D70":S.button),n.property(i("tutorial-action"),"disabled",e.stage!=="complete"&&(!e.running||e.paused||!!e.gesture||(e.stage==="recover"||P)&&e.body!=="fallen"));let O=y.index<3?0:y.index<6?1:2;["arrival","greeting","guide"].forEach((U,k)=>n.attribute(i(`route-${U}`),"data-state",e.stage==="complete"||k<O?"done":k===O?"current":"")),n.attribute(document.body,"data-tutorial",e.experience==="mission"?P?"recover":S.focus:""),n.property(i("drive-message"),"textContent",e.message),n.attribute(i("drive-message"),"data-warning",String(!!e.contact||e.body==="fallen"||e.body==="falling")),n.property(i("drive-result"),"hidden",e.experience!=="mission"||e.stage!=="complete"),n.property(i("result-stars"),"textContent","\u2605".repeat(e.stars)+"\u2606".repeat(3-e.stars)),n.html(i("result-score"),`${e.score} <small>\u5206</small>`),n.property(i("speed"),"textContent",e.speed.toFixed(2)),n.property(i("motion-label"),"textContent",e.paused?"\u5DF2\u6682\u505C":e.body!=="upright"?u:e.gesture?qn(e.gesture).title:e.speed>.02||Math.abs(e.angular)>.1?"\u6B63\u5728\u8FC8\u6B65":e.running?u:"\u7B49\u5F85\u51FA\u53D1"),n.property(i("distance-travelled"),"textContent",`${e.distance.toFixed(1)} m`),n.property(i("fall-count"),"textContent",String(e.falls)),n.property(i("elapsed"),"textContent",`${String(Math.floor(e.seconds/60)).padStart(2,"0")}:${String(Math.floor(e.seconds%60)).padStart(2,"0")}`);let W=document.getElementById("map-robot");n.attribute(W,"transform",`translate(${90+e.x*24.5} ${94+e.z*24.5}) rotate(${180-e.yaw*180/Math.PI})`),n.attribute(W,"data-x",String(e.x)),n.attribute(W,"data-z",String(e.z)),n.attribute(W,"data-yaw",String(e.yaw));let Y=document.getElementById("map-target");n.attribute(Y,"cx",String(90+e.target.x*24.5)),n.attribute(Y,"cy",String(94+e.target.z*24.5)),n.attribute(Y,"r",String(e.target.radius*24.5)),n.attribute(Y,"visibility",e.experience==="mission"&&y.navigating?"visible":"hidden"),n.property(i("hoist-toggle"),"hidden",!e.hoistAvailable||o),n.attribute(i("hoist-toggle"),"aria-pressed",String(e.hoistContext)),n.property(i("hoist-toggle"),"textContent",e.hoist.locked?"\u540A\u67B6\u652F\u6491\u4E2D":e.hoistContext?"\u8FD4\u56DE\u9A7E\u9A76\u64CD\u4F5C":"\u540A\u67B6\u64CD\u4F5C \u2197"),n.property(i("hoist-toggle"),"disabled",e.hoist.locked);for(let U of document.querySelectorAll("[data-performance-slot]")){let k=this.bindings.actionAt(Number(U.dataset.performanceSlot));n.attribute(U,"data-performance-action",k),n.property(U.querySelector("span"),"textContent",qn(k).title)}this.hoistPanel.render(e,t),this.bindingsPanel.render(e)}};var Nd=ga,Wc=class{previous;events=[];update(e,t){this.events.length=0;let n=this.previous,i=e.running&&!e.paused;if(n){let r;i&&e.body==="falling"&&n.body!=="falling"?r="warning":i&&e.experience==="mission"&&n.experience==="mission"&&Nd.indexOf(e.stage)>Nd.indexOf(n.stage)?r="success":i&&(!n.running||n.paused||n.body==="recovering"&&e.body==="upright")?r="ready":n.running&&!n.paused&&!i?r="pause":e.mode!==n.mode?r="mode":i&&e.speedMode!==n.speedMode?r="speed":i&&e.gesture&&e.gesture!==n.gesture?r="action":i&&e.contact&&e.contact!==n.contact&&(r="warning"),r&&this.events.push({cue:r})}if(i&&e.body==="upright")for(let r of t)this.events.push({cue:"footstep",...r});return this.previous?Object.assign(this.previous,e):this.previous={...e},this.events}},Ly={ready:[440,660],pause:[440,330],mode:[392,523],speed:[523,784],action:[523,659],success:[523,659,784],warning:[220,165]},Br={master:.72,volume:2.7,duration:1.45,minimumDuration:.13,hold:.55};function Iy(s,e,t="clear"){let n=s.createGain(),i=s.createWaveShaper();n.gain.value=t==="minimal"?.6:Br.master;let r=new Float32Array(2049);for(let a=0;a<r.length;a++)r[a]=.8*Math.tanh((a/(r.length-1)*2-1)*1.5);return i.curve=r,n.connect(i),i.connect(e),n}var Xc=class{constructor(e,t,n="original"){this.context=e;this.output=t;this.profile=n;this.noise=e.createBuffer(1,Math.ceil(e.sampleRate*.24),e.sampleRate);let i=this.noise.getChannelData(0),r=1947;for(let a=0;a<i.length;a++)r=Math.imul(r,1664525)+1013904223|0,i[a]=(r>>>0)/2147483648-1}noise;voices=new Map;lastWarning=-1/0;lastAction=-1/0;lastStep=-1/0;get activeVoices(){return this.voices.size}play(e){if(this.profile==="minimal"){this.playMinimal(e);return}if("action"in e){this.playAction(e);return}let t=this.context.currentTime;if(e.cue==="warning"){if(t-this.lastWarning<.8)return;this.lastWarning=t}if(e.cue==="footstep"){let i=Math.max(.2,Math.min(1,e.strength??.5)),r=this.context.createBufferSource(),a=this.context.createBiquadFilter();r.buffer=this.noise,a.type="lowpass",a.frequency.value=e.side==="left"?1050:1150,r.connect(a),this.envelope(r,a,t,.085,.18*i,[a]),this.tone(e.side==="left"?125:135,t,.07,.22*i,55);return}let n=this.profile==="clear"?.21:e.cue==="warning"?.13:.095;Ly[e.cue].forEach((i,r)=>this.tone(i,t+r*(n*.85),n,e.cue==="warning"?.11:.085))}playMinimal(e){let t=this.context.currentTime;if("action"in e){if(!["bell","clap","landing"].includes(e.cue)||t-this.lastAction<1.1)return;this.lastAction=t,this.tone(e.cue==="landing"?520:660,t,.16,.105,void 0,!0);return}if(e.cue==="footstep"){if(t-this.lastStep<.32)return;this.lastStep=t;let i=this.context.createBufferSource(),r=this.context.createBiquadFilter();i.buffer=this.noise,r.type="lowpass",r.frequency.value=900,i.connect(r),this.envelope(i,r,t,.065,.045*Math.min(1,e.strength??.5),[r]);return}if(e.cue==="warning"){if(t-this.lastWarning<1.5)return;this.lastWarning=t}(e.cue==="ready"||e.cue==="success"?[587,784]:e.cue==="warning"?[523]:[659]).forEach((i,r)=>this.tone(i,t+r*.14,.18,e.cue==="success"?.16:.14))}playAction(e){let t=this.context.currentTime,n=Math.max(.2,Math.min(1,e.strength??.65));switch(e.cue){case"servo":this.tone(e.pitch??190,t,.15,.1*n,(e.pitch??190)*1.35,!0,"triangle");break;case"swoosh":this.burst("bandpass",e.pitch??900,(e.pitch??900)*2.4,t,.22,.2*n);break;case"clap":this.burst("highpass",1e3,1400,t,.1,.48*n),this.burst("bandpass",1800,1200,t+.014,.065,.22*n);break;case"kick":this.tone(145,t,.15,.3*n,48,!0);break;case"snare":this.burst("highpass",900,1300,t,.12,.27*n),this.tone(145,t,.075,.1*n,85,!0);break;case"hat":this.burst("highpass",6500,8e3,t,.06,.28*n);break;case"bell":this.tone(e.pitch??659,t,.2,.11*n,e.pitch??659,!0),this.tone((e.pitch??659)*2,t,.12,.025*n,(e.pitch??659)*2,!0);break;case"landing":this.burst("lowpass",600,240,t,.18,.45*n),this.tone(115,t,.18,.32*n,44,!0);break}}burst(e,t,n,i,r,a){let o=this.context.createBufferSource(),l=this.context.createBiquadFilter();o.buffer=this.noise,this.profile==="clear"&&(t=Math.min(2200,Math.max(500,t)),n=Math.min(2600,Math.max(500,n))),l.type=e,l.Q.value=.7,l.frequency.setValueAtTime(t,i),l.frequency.exponentialRampToValueAtTime(n,i+r),o.connect(l),this.envelope(o,l,i,r,a,[l],!0)}tone(e,t,n,i,r=e,a=!1,o="sine"){if(this.profile==="clear"){let c=h=>Math.min(3200,Math.max(420,h<300?h*4:h));e=c(e),r=c(r),o==="sine"&&(o="triangle")}let l=this.context.createOscillator();l.type=o,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(r,t+n),this.envelope(l,l,t,n,i,[],a)}envelope(e,t,n,i,r,a,o=!1){if(this.voices.size>=16){e.disconnect();for(let c of a)c.disconnect();return}this.profile==="clear"&&(i=Math.max(Br.minimumDuration,i*Br.duration),r*=Br.volume);let l=this.context.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+(this.profile==="clear"?.012:.004)),this.profile==="clear"&&l.gain.setValueAtTime(r,n+i*Br.hold),this.profile==="minimal"&&l.gain.setValueAtTime(r,n+i*.4),l.gain.exponentialRampToValueAtTime(1e-4,n+i),t.connect(l),l.connect(this.output),this.voices.set(e,{nodes:[e,l,...a],performance:o}),e.onended=()=>{this.release(e)},e.start(n),e.stop(n+i+.008)}release(e){let t=this.voices.get(e);if(t){this.voices.delete(e),e.onended=null;for(let n of t.nodes)n.disconnect()}}stop(){for(let e of this.voices.keys()){try{e.stop()}catch{}this.release(e)}}stopPerformance(){for(let[e,t]of this.voices)if(t.performance){try{e.stop()}catch{}this.release(e)}}},Ca=class{constructor(e){this.changed=e}context;output;bank;tracker=new Wc;wanted=!1;interrupted=!1;pending=!1;failed=!1;generation=0;wasActive=!1;previousGesture=null;previousMode;get status(){var e;return this.failed?"unavailable":this.pending?"pending":this.wanted?this.interrupted||((e=this.context)==null?void 0:e.state)!=="running"?"resume":"on":"off"}async toggle(){if(this.pending)return;if(this.status==="on"){this.disable();return}let e=++this.generation;this.wanted=!0,this.pending=!0,this.changed(this.status);try{if(!this.context){let i=globalThis.AudioContext??globalThis.webkitAudioContext;if(!i)throw new Error("Web Audio unavailable");this.context=new i,this.output=Iy(this.context,this.context.destination,"minimal"),this.bank=new Xc(this.context,this.output,"minimal"),this.context.addEventListener("statechange",()=>this.changed(this.status))}this.failed=!1,this.interrupted=!1;let t,n=!1;try{n=await Promise.race([this.context.resume().then(()=>!0),new Promise(i=>{t=setTimeout(()=>i(!1),1800)})])}finally{clearTimeout(t)}if(e!==this.generation)return;this.interrupted=!n||this.context.state!=="running",this.interrupted||this.bank.play({cue:"ready"})}catch{this.failed=!this.bank,this.interrupted=!0,this.failed&&(this.wanted=!1)}finally{e===this.generation&&(this.pending=!1,this.changed(this.status))}}disable(){var e,t;++this.generation,this.wanted=!1,this.pending=!1,(e=this.bank)==null||e.stop(),(t=this.context)==null||t.suspend().catch(()=>{}),this.changed(this.status)}interrupt(){var e,t;++this.generation,this.pending=!1,this.interrupted=this.wanted,(e=this.bank)==null||e.stop(),(t=this.context)==null||t.suspend().catch(()=>{}),this.changed(this.status)}update(e,t,n){var a,o,l,c,h;let i=this.tracker.update(e,t),r=e.running&&!e.paused;if(this.wasActive&&!r&&((a=this.bank)==null||a.stop()),this.wasActive=r,(e.gesture&&this.previousGesture!==e.gesture||this.previousMode!==void 0&&this.previousMode!==e.mode||!r||e.body!=="upright")&&((o=this.bank)==null||o.stopPerformance()),this.previousGesture=e.gesture,this.previousMode=e.mode,this.status==="on")try{for(let u of i)(u.cue!=="action"||n===void 0)&&((l=this.bank)==null||l.play(u));if(r&&e.body==="upright")for(let u of n??[])(c=this.bank)==null||c.play(u)}catch{this.failed=!0,(h=this.bank)==null||h.stop(),this.changed(this.status)}}};var Dy={duration:300,startDelay:0,strongMagnitude:.55,weakMagnitude:.35},Ny={duration:800,startDelay:0,strongMagnitude:.8,weakMagnitude:.45},Uy={duration:100,startDelay:0,strongMagnitude:.18,weakMagnitude:.12};function La(s){var e;return s!=null&&s.connected?typeof((e=s.vibrationActuator)==null?void 0:e.playEffect)=="function"?"ready":"unsupported":"no-device"}var qc=class{constructor(e=1500){this.timeoutMs=e}cancel=null;stop(){var e;(e=this.cancel)==null||e.call(this)}async run(e,t=Dy){if(this.cancel)return{status:"busy",message:"\u6B63\u5728\u6D4B\u8BD5\uFF0C\u8BF7\u7A0D\u5019\u3002"};let n=La(e);if(n==="no-device")return{status:"no-device",message:"\u5C1A\u672A\u8BFB\u5230\u624B\u67C4\uFF0C\u8BF7\u70B9\u51FB\u9875\u9762\u5E76\u6309 A \u5524\u9192\u3002"};if(n==="unsupported")return{status:"unsupported",message:"\u5DF2\u8BFB\u5230\u624B\u67C4\uFF0C\u4F46\u5F53\u524D\u8FDE\u63A5\u6CA1\u6709\u63D0\u4F9B\u9707\u52A8\u63A5\u53E3\u3002"};let i=e.vibrationActuator;return new Promise(r=>{let a=!1,o=()=>{var h,u;try{(u=(h=i.reset)==null?void 0:h.call(i))==null||u.catch(()=>{})}catch{}},l=(h,u)=>{a||(a=!0,clearTimeout(c),this.cancel=null,h!=="completed"&&o(),r({status:h,message:u}))},c=setTimeout(()=>l("timeout","\u9A71\u52A8\u6CA1\u6709\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8BF7\u68C0\u67E5\u624B\u67C4\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"),this.timeoutMs);this.cancel=()=>l("interrupted","\u6D4B\u8BD5\u5DF2\u505C\u6B62\uFF0C\u53EF\u4EE5\u91CD\u65B0\u6D4B\u8BD5\u3002");try{Promise.resolve(i.playEffect("dual-rumble",t)).then(h=>h==="complete"?l("completed","\u6307\u4EE4\u5DF2\u5B8C\u6210\u3002\u4F60\u662F\u5426\u611F\u89C9\u5230\u624B\u67C4\u9707\u52A8\uFF1F"):l("interrupted","\u6307\u4EE4\u88AB\u4E2D\u65AD\uFF0C\u4FDD\u6301\u9875\u9762\u5728\u524D\u53F0\u540E\u91CD\u8BD5\u3002")).catch(()=>l("error","\u6D4F\u89C8\u5668\u6216\u9A71\u52A8\u672A\u63A5\u53D7\u9707\u52A8\u6307\u4EE4\uFF0C\u8BF7\u5C1D\u8BD5 USB \u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"))}catch{l("error","\u9707\u52A8\u6307\u4EE4\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u548C\u8FDE\u63A5\u65B9\u5F0F\u3002")}})}},Pa=class{enabled=!0;output=new qc;lastBody="";lastMode="";device="";setEnabled(e){this.enabled=e,e||this.interrupt()}interrupt(){this.output.stop()}update(e,t,n){let i=this.lastBody,r=i==="falling"&&e.body==="fallen",a=!!(this.lastMode&&e.mode&&this.lastMode!==e.mode);this.lastBody=e.body,this.lastMode=e.mode??"";let o=t!=null&&t.connected?`${t.index??0}:${t.id??""}`:"";if(o!==this.device&&(this.interrupt(),this.device=o,r=a=!1),!this.enabled||!n||!e.running||e.paused||!(t!=null&&t.connected)||e.body==="recovering"){this.interrupt();return}e.body==="upright"&&i!=="upright"&&this.interrupt(),La(t)==="ready"&&(r?(this.output.stop(),this.output.run(t,Ny)):a&&e.body!=="fallen"&&this.output.run(t,Uy))}};var Ln="standard";try{localStorage.getItem("g1-drive-layout-v1")==="exhibition-android"&&(Ln="exhibition-android")}catch{}var Bd;try{Bd=localStorage}catch{}var Fd=new Wr(Bd),Je=new ya({experience:"free"}),li=new is(void 0,Ln,s=>Fd.actionAt(s)),jc=new Ea(Ln),kr=new Ra(Fd),zr=new Ca(Oy),Li=new Pa;try{Li.setEnabled(localStorage.getItem("g1-drive-haptics-v1")!=="off")}catch{}function kd(s){let e=xe("haptic-toggle"),t=La(s),n=t==="no-device"?"\u9707\u52A8\u5F85\u63A5":t==="unsupported"?"\u9707\u52A8\u4E0D\u53EF\u7528":Li.enabled?"\u9707\u52A8\u5DF2\u5F00":"\u9707\u52A8\u5DF2\u5173";e.textContent!==n&&(e.textContent=n);let i=String(Li.enabled);e.getAttribute("aria-pressed")!==i&&e.setAttribute("aria-pressed",i);let r=t!=="ready",a=t==="ready"?"\u6A21\u5F0F\u8F7B\u9707 0.1 \u79D2 \xB7 \u6454\u673A\u9707\u52A8 0.8 \u79D2 \xB7 \u70B9\u51FB\u5F00\u5173":"\u5F53\u524D\u8BBE\u5907\u672A\u63D0\u4F9B\u9707\u52A8\u63A5\u53E3\uFF0C\u753B\u9762\u63D0\u793A\u4ECD\u53EF\u7528";e.disabled!==r&&(e.disabled=r),e.title!==a&&(e.title=a)}xe("haptic-toggle").addEventListener("click",()=>{Li.setEnabled(!Li.enabled);try{localStorage.setItem("g1-drive-haptics-v1",Li.enabled?"on":"off")}catch{}kd(zd().find(s=>String(s.index)===Pi))});function Oy(s){let e=xe("sound-toggle"),t={off:"\u5F00\u542F\u97F3\u6548",on:"\u97F3\u6548\u5DF2\u5F00",pending:"\u97F3\u6548\u5F00\u542F\u4E2D\u2026",resume:"\u6062\u590D\u97F3\u6548",unavailable:"\u97F3\u6548\u4E0D\u53EF\u7528"};e.textContent=t[s],e.dataset.sound=s,e.setAttribute("aria-pressed",String(s==="on")),e.disabled=s==="pending"||s==="unavailable",e.title=s==="on"?"\u70B9\u51FB\u9759\u97F3 \xB7 \u7B80\u7EA6\u8F7B\u63D0\u793A\uFF0C\u65E0\u8FDE\u7EED\u9F13\u70B9":"\u70B9\u51FB\u5F00\u542F\u7B80\u7EA6\u97F3\u6548 \xB7 \u4E0D\u5F71\u54CD\u624B\u67C4\u8FDE\u63A5"}xe("sound-toggle").addEventListener("click",()=>{zr.toggle()});var Ke,Gn="pad",tr=!1,Wn=!1,Jt="paused",Qt="\u6309 A \u5F00\u59CB\u4F53\u9A8C \xB7 \u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1\uFF1B\u4E5F\u53EF\u70B9\u51FB\u5F00\u59CB\u3002",Ud="",Pi="",Fr=0,Ia=0,Od=!1,zd=()=>{try{return[...navigator.getGamepads()].filter(s=>!!(s!=null&&s.connected))}catch{return[]}},un=()=>kr.render(Je,{source:Gn,input:Jt,copy:Qt,loaded:tr,waiting:Wn,armed:li.active,layout:Ln});function bn(s="\u7A97\u53E3\u5DF2\u6682\u505C \xB7 \u56DE\u5230\u6B64\u9875\u540E\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED",e="paused"){Li.interrupt(),Wn=!1,jc.block(),li.suspend(),kr.clear(),Je.suspend(s),Jt=e,Qt=s,un()}function $c(){if(tr){if(kr.clear(),xe("drive-viewer").focus({preventScroll:!0}),Gn==="manual"){Wn=!1,Jt="ready",Qt="WASD \u79FB\u52A8 \xB7 Q/E \u8F6C\u8EAB \xB7 M \u6A21\u5F0F \xB7 [ / ] \u9009\u52A8\u4F5C \xB7 1 \u6267\u884C \xB7 P \u6682\u505C",Je.start(),un();return}li.suspend(),Wn=!0,Jt="waiting",Qt="\u6B63\u5728\u7B49\u5F85\u624B\u67C4 \xB7 \u6309 A \u5524\u9192\uFF0C\u7136\u540E\u677E\u5F00\u5168\u90E8\u6309\u952E\u4E0E\u6447\u6746\u3002",un()}}function Hd(s){bn("\u5207\u6362\u5B8C\u6210 \xB7 \u70B9\u51FB\u5F00\u59CB\u4F53\u9A8C"),Gn=s,xe("source-pad").setAttribute("aria-pressed",String(s==="pad")),xe("source-manual").setAttribute("aria-pressed",String(s==="manual")),xe("device-controls").hidden=s!=="pad",xe("left-stick-label").textContent=s==="pad"?"\u5DE6\u6447\u6746 \xB7 \u79FB\u52A8":"WASD \xB7 \u79FB\u52A8",xe("right-stick-label").textContent=s==="pad"?"\u53F3\u6447\u6746 \xB7 \u8F6C\u5411":"Q / E \xB7 \u8F6C\u8EAB",xe("right-stick-copy").textContent=s==="pad"?"\u5DE6\u53F3\u8F6C\u8EAB / \u4E0A\u4E0B\u8C03\u89C6\u89D2":"\u65B9\u5411\u952E\u4E5F\u53EF\u8F6C\u8EAB / \u8C03\u89C6\u89D2";for(let[e,t,n]of[["wave-key","A","1"],["invite-key","X","2"],["stop-key","B","Esc"],["pause-key","\u2261","P"]])xe(e).textContent=s==="pad"?t:n;xe("pause-key").setAttribute("aria-label",s==="pad"?"\u83DC\u5355\u952E\uFF0C\u4E09\u6A2A\u7EBF\u56FE\u6807":"P \u952E"),xe("pause-key-copy").textContent=s==="pad"?"\u7AD9\u7ACB / \u884C\u8D70":"\u6682\u505C / \u7EE7\u7EED",xe("touch-controls").hidden=s!=="manual",xe("show-touch").setAttribute("aria-expanded",String(s==="manual")),document.body.dataset.touch=String(s==="manual"),Qt=s==="pad"?"\u6309 A \u5F00\u59CB / \u7EE7\u7EED \xB7 \u677E\u5F00\u5168\u90E8\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1\u3002":"WASD \u79FB\u52A8 \xB7 Q/E \u8F6C\u8EAB \xB7 1 \u6325\u624B \xB7 2 \u9080\u8BF7\uFF0C\u6216\u6309\u4F4F\u4E0B\u65B9\u5C4F\u5E55\u65B9\u5411\u952E\u3002",un()}function By(){if(Wn){bn("\u5DF2\u53D6\u6D88\u7B49\u5F85 \xB7 \u70B9\u51FB\u5F00\u59CB\u53EF\u91CD\u65B0\u8FDE\u63A5");return}if(Je.paused){$c();return}Je.suspend(),kr.clear(),Jt="paused",Qt=Gn==="pad"?"\u5DF2\u6682\u505C \xB7 \u6309 A \u7EE7\u7EED\uFF0C\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1":"\u5DF2\u6682\u505C \xB7 \u6309 P \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85",un()}xe("drive-start").addEventListener("click",$c);xe("drive-pause").addEventListener("click",By);for(let s of document.querySelectorAll("button[data-experience]"))s.addEventListener("click",()=>{let e=s.dataset.experience;e!==Je.experience&&(bn(),Je.setExperience(e),Ke==null||Ke.reset(),Qt=Je.message,un())});xe("drive-reset").addEventListener("click",()=>{bn("\u4EFB\u52A1\u5DF2\u91CD\u7F6E \xB7 \u6309 A \u6216\u70B9\u51FB\u5F00\u59CB\u63A5\u5F85"),Je.reset(),Ke==null||Ke.reset(),un()});xe("source-pad").addEventListener("click",()=>Hd("pad"));xe("source-manual").addEventListener("click",()=>Hd("manual"));xe("device-select").addEventListener("change",s=>{Pi=s.target.value,bn("\u5DF2\u9009\u62E9\u8BBE\u5907 \xB7 \u70B9\u51FB\u5F00\u59CB\u63A5\u5F85")});xe("pad-layout").value=Ln;xe("pad-layout").addEventListener("change",s=>{bn("\u5E03\u5C40\u5DF2\u5207\u6362 \xB7 \u677E\u5F00\u53CC\u6447\u6746\u548C\u6309\u952E\uFF0C\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85"),Ln=s.target.value==="exhibition-android"?"exhibition-android":"standard",li.setProfile(Ln),jc.setProfile(Ln);try{localStorage.setItem("g1-drive-layout-v1",Ln)}catch{}un()});xe("camera-toggle").addEventListener("click",()=>{Ke==null||Ke.toggleCamera(),Yc()});xe("retry").addEventListener("click",()=>location.reload());function Yc(){let s=xe("camera-toggle"),e=String(!!(Ke!=null&&Ke.overview)),t=String(Je.mode==="debug");s.dataset.overview===e&&s.dataset.lab===t||(s.dataset.overview=e,s.dataset.lab=t,s.innerHTML=(Ke!=null&&Ke.overview?"\u8FD4\u56DE\u8DDF\u968F":"\u5207\u6362\u5168\u666F")+(Je.mode==="debug"?"":" <kbd>Y</kbd>"))}async function Vd(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Qt="\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u5168\u5C4F\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u83DC\u5355\u8FDB\u5165\u5168\u5C4F\u3002",un()}}xe("fullscreen").addEventListener("click",Vd);xe("fullscreen-reenter").addEventListener("click",Vd);document.addEventListener("fullscreenchange",()=>{let s=!!document.fullscreenElement;s&&(Od=!0),xe("fullscreen").textContent=s?"\u9000\u51FA\u5168\u5C4F \u2199":"\u5168\u5C4F \u2197",xe("fullscreen").setAttribute("aria-pressed",String(s)),xe("fullscreen-reenter").hidden=s||!Od,Ke==null||Ke.resize()});window.addEventListener("blur",()=>{zr.interrupt(),bn()});document.addEventListener("visibilitychange",()=>{document.hidden&&(zr.interrupt(),bn("\u9875\u9762\u5DF2\u5207\u5230\u540E\u53F0 \xB7 \u56DE\u5230\u6B64\u9875\u540E\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85"))});window.addEventListener("pagehide",()=>{zr.interrupt(),bn()});function Fy(s){let e=s.map(n=>`${n.index}:${n.id}:${n.mapping}`).join("|");if(e===Ud)return;Ud=e;let t=xe("device-select");if(t.replaceChildren(...s.map(n=>new Option(`${n.index+1} \xB7 ${n.id}`,String(n.index)))),s.length||t.add(new Option("\u672A\u8BFB\u5230\u624B\u67C4 \xB7 \u6309 A \u5524\u9192","")),s.some(n=>String(n.index)===Pi))t.value=Pi;else{let n=s.find(i=>is.supported(i)&&/045e.*02e0|Xbox|STANDARD GAMEPAD/i.test(i.id))??s.find(i=>is.supported(i))??s[0];Pi=n?String(n.index):"",t.value=Pi}}function Gd(s){var r,a;if(requestAnimationFrame(Gd),Fr&&s-Fr<1e3/61)return;let e=Fr?Math.min(.1,(s-Fr)/1e3):1/60;if(Fr=s,document.hidden)return;let t=zd();Ia+=e,Ia>=.1&&Fy(t);let n=t.find(o=>String(o.index)===Pi)??t.find(o=>is.supported(o))??t[0];jc.read(n?[n]:[],document.hasFocus(),tr&&Gn==="pad"&&!Wn&&Jt!=="neutral"&&(!Je.running||Je.paused))&&(Pi=String(n.index),$c());let i=kr.read(Gn==="manual");if(Wn&&Gn==="pad"){let o=n;o&&(li.arm(o)?(Wn=!1,Jt="neutral",Qt="\u5DF2\u627E\u5230\u624B\u67C4 \xB7 \u677E\u5F00\u53CC\u6447\u6746\u4E0E\u6309\u952E\uFF0C\u51C6\u5907\u63A5\u7BA1\u3002"):(Wn=!1,Jt="unsupported",Qt=Ln==="exhibition-android"?"\u8BBE\u5907\u4E0E\u5C55\u5385\u5B9E\u6D4B\u6620\u5C04\u4E0D\u7B26 \xB7 \u9700 Xbox Wireless Controller\u30014 \u8F74 / 16 \u6309\u94AE\uFF1B\u53EF\u5207\u56DE\u6807\u51C6\u5E03\u5C40\u6216\u6309\u952E\u68C0\u6D4B\u3002":"\u5F53\u524D\u8BBE\u5907\u6CA1\u6709\u6807\u51C6\u6620\u5C04 \xB7 \u8BF7\u5207\u6362\u5DF2\u6D4B\u5E03\u5C40\uFF0C\u6216\u4F7F\u7528\u952E\u76D8 / \u89E6\u5C4F\u3002"))}if(Gn==="pad"&&li.active){let o=li.read(t,document.hasFocus(),Je.mode);if(o.ready){Jt==="neutral"&&Je.start();for(let l of["wave","invite","stop","pause","camera"])o.command[l]||=i[l];for(let l of["forward","strafe","turn"])i[l]&&(o.command[l]=i[l]);for(let l of["mode","actionStep","actionSelect","actionTrigger","speedMode","recover","toggleStand","stepping","diagnose","labSelect","labStep","labAdjust","labConfirm","labReset","hoistAction"])i[l]!==void 0&&(o.command[l]=i[l]);if(o.command.cycleMode||=i.cycleMode,o.command.actionStep=i.actionStep??o.command.actionStep,o.command.actionSelect=i.actionSelect??o.command.actionSelect,i=o.command,Jt=Je.paused?"paused":"ready",Qt=Je.paused?"\u7F51\u9875\u5DF2\u6682\u505C \xB7 \u677E\u5F00 B\uFF0C\u6309 A \u7EE7\u7EED\uFF0C\u518D\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746":Je.mode==="debug"?"\u5173\u8282\u5B9E\u9A8C \xB7 \u5DE6\u6746\u8C03\u89D2\u5EA6\uFF0C\u5341\u5B57\u952E\u9009\u5173\u8282\uFF1BA \u786E\u8BA4\uFF0CX \u793A\u8303\uFF0CY \u590D\u4F4D\u3002":Ln==="standard"?"RT + A \u884C\u8D70\uFF1BLT \u4E0E B / Y / X \u7EC4\u5408\uFF0CLT \u9700\u6309\u6EE1 2 \u79D2\u3002":"\u5C55\u5385\u5B89\u5353 \xB7 \u5DE6\u6746\u79FB\u52A8\uFF0C\u53F3\u6746\u8F6C\u8EAB\uFF1BLB \u5207\u72B6\u6001\uFF0CRB + \u5F69\u8272\u952E\u8DF3\u821E\u3002",o.triggers){let{left:l,right:c,holdProgress:h}=o.triggers,u=l>.5?h<1?` \xB7 LT \u786E\u8BA4 ${(h*2).toFixed(1)} / 2 \u79D2`:" \xB7 LT \u7EC4\u5408\u5DF2\u5C31\u7EEA":"";Qt=`LT ${Math.round(l*100)}% \xB7 RT ${Math.round(c*100)}%${u} \xB7 ${Qt}`}}else o.status==="neutral"?(Jt="neutral",Qt="\u8BF7\u677E\u5F00\u53CC\u6447\u6746\u3001\u80A9\u952E\u3001\u6273\u673A\u548C\u5168\u90E8\u6309\u952E\uFF0C\u56DE\u4E2D\u540E\u81EA\u52A8\u63A5\u7BA1\u3002",i={...ns}):bn(o.status==="disconnected"?"\u624B\u67C4\u5DF2\u65AD\u5F00 \xB7 \u91CD\u65B0\u8FDE\u63A5\u540E\u677E\u5F00\u6309\u952E\uFF0C\u518D\u6309 A \u7EE7\u7EED":o.status==="unsupported"?"\u8F93\u5165\u4E0E\u6240\u9009\u6620\u5C04\u4E0D\u7B26 \xB7 \u8BF7\u5148\u68C0\u67E5\u6309\u952E\u5E03\u5C40\u6216\u8FDB\u5165\u6309\u952E\u68C0\u6D4B":"\u8F93\u5165\u5DF2\u6682\u505C \xB7 \u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85",o.status)}if(i.stop&&Wn&&(bn("\u5DF2\u53D6\u6D88\u7B49\u5F85"),i={...ns}),i.camera&&(Ke==null||Ke.toggleCamera(),Yc()),Je.hoistAvailable&&(Je.hoist.ready||Je.hoist.locked)&&Je.mode!=="debug"&&i.wave&&(i.hoistAction=!0,i.wave=!1),Je.update(e,i),Li.update(Je,n,Gn==="pad"&&li.active),Je.paused&&Jt==="ready"?Jt="paused":!Je.paused&&Je.running&&(Gn==="manual"||li.active)&&Jt==="paused"&&(Jt="ready"),Ke&&tr){let o=Je.mode==="locomotion"&&[i.forward,i.strafe,i.turn].some(c=>Math.abs(c)>.05),l=Ke.update(e,Je,i.look,o);l&&Je.finishGesture(l),Ke.render(e,Je.running&&!Je.paused),Yc()}zr.update(Je,((r=Ke==null?void 0:Ke.rig)==null?void 0:r.footfalls)??[],(a=Ke==null?void 0:Ke.rig)==null?void 0:a.actionSounds),Ia>=.1&&(un(),kd(n),Ia=0)}async function ky(){try{Ke=new Ma(xe("drive-viewer")),Ke.renderer.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),bn("\u753B\u9762\u8FDE\u63A5\u4E2D\u65AD \xB7 \u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762"),tr=!1,xe("loading-copy").textContent="\u753B\u9762\u9700\u8981\u91CD\u65B0\u52A0\u8F7D",xe("loading").hidden=!1,xe("retry").hidden=!1,un()}),await Ke.load(),Ke.update(1/60,Je,0),Ke.render(1/60,!1),tr=!0,xe("loading").hidden=!0,document.body.dataset.ready="true",un(),requestAnimationFrame(Gd)}catch(s){console.error("G1 driving:",s),xe("loading-copy").textContent="\u6A21\u578B\u6682\u65F6\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u91CD\u8BD5",xe("retry").hidden=!1,Qt="\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u652F\u6301 WebGL\uFF0C\u5E76\u901A\u8FC7\u672C\u5730\u9884\u89C8\u5730\u5740\u6253\u5F00\u3002",un()}}ky();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
