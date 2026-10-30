(()=>{var Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hd=0,Gc=1,Vd=2;var Uu=1,Gd=2,$n=3,Bn=0,nn=1,zt=2;var ui=0,_s=1,Wc=2,Xc=3,jc=4,Wd=5,Pi=100,Xd=101,jd=102,qc=103,Yc=104,qd=200,Yd=201,$d=202,Kd=203,rl=204,ol=205,Jd=206,Zd=207,Qd=208,ef=209,tf=210,nf=211,sf=212,rf=213,of=214,af=0,lf=1,cf=2,io=3,hf=4,uf=5,df=6,ff=7,Ou=0,pf=1,mf=2,di=0,gf=1,_f=2,xf=3,$l=4,yf=5,vf=6,$c="attached",Mf="detached",Fu=300,vs=301,Ms=302,al=303,ll=304,Vo=306,Ui=1e3,fn=1001,ir=1002,Ft=1003,so=1004;var $s=1005;var on=1006,Kl=1007;var pi=1008;var fi=1009,bf=1010,Ef=1011,Jl=1012,Bu=1013,ci=1014,Kn=1015,sr=1016,ku=1017,zu=1018,Ii=1020,Sf=1021,yn=1023,Tf=1024,wf=1025,Ni=1026,bs=1027,Af=1028,Hu=1029,Rf=1030,Vu=1031,Gu=1033,Ea=33776,Sa=33777,Ta=33778,wa=33779,Kc=35840,Jc=35841,Zc=35842,Qc=35843,Wu=36196,eh=37492,th=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,lh=37814,ch=37815,hh=37816,uh=37817,dh=37818,fh=37819,ph=37820,mh=37821,Aa=36492,gh=36494,_h=36495,Cf=36283,xh=36284,yh=36285,vh=36286;var Es=2300,Oi=2301,Ra=2302,Mh=2400,bh=2401,Eh=2402,Pf=2500;var Xu=0,Go=1,Mr=2,ju=3e3,Di=3001,Lf=3200,If=3201,qu=0,Nf=1,vn="",Et="srgb",Ht="srgb-linear",Zl="display-p3",Wo="display-p3-linear",ro="linear",bt="srgb",oo="rec709",ao="p3";var Ki=7680;var Sh=519,Df=512,Uf=513,Of=514,Yu=515,Ff=516,Bf=517,kf=518,zf=519,cl=35044;var Th="300 es",hl=1035,Jn=2e3,lo=2001,kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,Ks=Math.PI/180,Ss=180/Math.PI;function Mn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Hf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vf(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function Gf(s,e,t,n){return Js(s,e,1-Math.exp(-t*n))}function Wf(s,e=1){return e-Math.abs(Ql(s,e*2)-e)}function Xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yf(s,e){return s+Math.random()*(e-s)}function $f(s){return s*(.5-Math.random())}function Kf(s){s!==void 0&&(wh=s);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jf(s){return s*Ks}function Zf(s){return s*Ss}function ul(s){return(s&s-1)===0&&s!==0}function Qf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function co(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ep(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:Ks,RAD2DEG:Ss,generateUUID:Mn,clamp:Bt,euclideanModulo:Ql,mapLinear:Hf,inverseLerp:Vf,lerp:Js,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:jf,randInt:qf,randFloat:Yf,randFloatSpread:$f,seededRandom:Kf,degToRad:Jf,radToDeg:Zf,isPowerOfTwo:ul,ceilPowerOfTwo:Qf,floorPowerOfTwo:co,setQuaternionFromProperEuler:ep,normalize:pt,denormalize:Fn},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],T=i[7],L=i[2],C=i[5],R=i[8];return r[0]=o*_+a*M+l*L,r[3]=o*m+a*x+l*C,r[6]=o*p+a*T+l*R,r[1]=c*_+u*M+h*L,r[4]=c*m+u*x+h*C,r[7]=c*p+u*T+h*R,r[2]=d*_+f*M+g*L,r[5]=d*m+f*x+g*C,r[8]=d*p+f*T+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Qe;function $u(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tp(){let s=rr("canvas");return s.style.display="block",s}var Ah={};function Zs(s){s in Ah||(Ah[s]=!0,console.warn(s))}var Rh=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Ht]:{transfer:ro,primaries:oo,toReference:s=>s,fromReference:s=>s},[Et]:{transfer:bt,primaries:oo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Wo]:{transfer:ro,primaries:ao,toReference:s=>s.applyMatrix3(Ch),fromReference:s=>s.applyMatrix3(Rh)},[Zl]:{transfer:bt,primaries:ao,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ch),fromReference:s=>s.applyMatrix3(Rh).convertLinearToSRGB()}},np=new Set([Ht,Wo]),ht={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!np.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wr[e].toReference,i=wr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wr[s].primaries},getTransfer:function(s){return s===vn?ro:wr[s].transfer}};function xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ji,ho=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=rr("canvas")),Ji.width=e.width,Ji.height=e.height;let n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ip=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(La(i[o].image)):r.push(La(i[o]))}else r=La(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sp=0,Jt=class s extends kn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=fn,i=fn,r=on,o=pi,a=yn,l=fi,c=s.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Mn(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?Et:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Di:ju}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Di?Et:vn}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Fu;Jt.DEFAULT_ANISOTROPY=1;var _t=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,T=(f+1)/2,L=(p+1)/2,C=(u+d)/4,R=(h+_)/4,X=(g+m)/4;return x>T&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=R/n):T>L?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=X/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=R/r,i=X/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Et:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fl=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),C=Math.atan2(L,p*M);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let T=a*M;if(l=l*m+d*T,c=c*m+f*T,u=u*m+g*T,h=h*m+_*T,m===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new S,Ph=new Dt,mt=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Rr.subVectors(this.max,Vs),Zi.subVectors(e.a,Vs),Qi.subVectors(e.b,Vs),es.subVectors(e.c,Vs),si.subVectors(Qi,Zi),ri.subVectors(es,Qi),Ti.subVectors(Zi,es);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!Na(t,Zi,Qi,es,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Zi,Qi,es,Rr))?!1:(Cr.crossVectors(si,ri),t=[Cr.x,Cr.y,Cr.z],Na(t,Zi,Qi,es,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new S,new S,new S,new S,new S,new S,new S,new S],Rn=new S,Ar=new mt,Zi=new S,Qi=new S,es=new S,si=new S,ri=new S,Ti=new S,Vs=new S,Rr=new S,Cr=new S,wi=new S;function Na(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var rp=new mt,Gs=new S,Da=new S,pn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Da)),this.expandByPoint(Gs.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new S,Ua=new S,Pr=new S,oi=new S,Oa=new S,Lr=new S,Fa=new S,In=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ua.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ua);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=oi.dot(this.direction),l=-oi.dot(Pr),c=oi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ua).addScaledVector(Pr,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){Oa.subVectors(t,e),Lr.subVectors(n,e),Fa.crossVectors(Oa,Lr);let o=this.direction.dot(Fa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);let l=a*this.direction.dot(Lr.crossVectors(oi,Lr));if(l<0)return null;let c=a*this.direction.dot(Oa.cross(oi));if(c<0||l+c>o)return null;let u=-a*oi.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ai.crossVectors(n,un),ai.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ai.crossVectors(n,un)),ai.normalize(),Ir.crossVectors(un,ai),i[0]=ai.x,i[4]=Ir.x,i[8]=un.x,i[1]=ai.y,i[5]=Ir.y,i[9]=un.y,i[2]=ai.z,i[6]=Ir.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],T=n[11],L=n[15],C=i[0],R=i[4],X=i[8],E=i[12],w=i[1],H=i[5],K=i[9],ae=i[13],I=i[2],D=i[6],G=i[10],q=i[14],j=i[3],W=i[7],ee=i[11],ne=i[15];return r[0]=o*C+a*w+l*I+c*j,r[4]=o*R+a*H+l*D+c*W,r[8]=o*X+a*K+l*G+c*ee,r[12]=o*E+a*ae+l*q+c*ne,r[1]=u*C+h*w+d*I+f*j,r[5]=u*R+h*H+d*D+f*W,r[9]=u*X+h*K+d*G+f*ee,r[13]=u*E+h*ae+d*q+f*ne,r[2]=g*C+_*w+m*I+p*j,r[6]=g*R+_*H+m*D+p*W,r[10]=g*X+_*K+m*G+p*ee,r[14]=g*E+_*ae+m*q+p*ne,r[3]=M*C+x*w+T*I+L*j,r[7]=M*R+x*H+T*D+L*W,r[11]=M*X+x*K+T*G+L*ee,r[15]=M*E+x*ae+T*q+L*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,T=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,L=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=t*M+n*x+i*T+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=M*R,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=x*R,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=T*R,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=L*R,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,x=l*u,T=l*h,L=n.x,C=n.y,R=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+T)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-T)*C,i[5]=(1-(d+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+x)*R,i[9]=(m-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ts.set(i[0],i[1],i[2]).length(),o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Cn.copy(this);let c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Jn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Jn){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u,g,_;if(a===Jn)g=(o+r)*h,_=-2*h;else if(a===lo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ts=new S,Cn=new Je,op=new S(0,0,0),ap=new S(1,1,1),ai=new S,Ir=new S,un=new S,Lh=new Je,Ih=new Dt,po=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};po.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lp=0,Nh=new S,ns=new Dt,Xn=new Je,Nr=new S,Ws=new S,cp=new S,hp=new Dt,Dh=new S(1,0,0),Uh=new S(0,1,0),Oh=new S(0,0,1),up={type:"added"},dp={type:"removed"},Ct=class s extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new S,t=new po,n=new Dt,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ws,Nr,this.up):Xn.lookAt(Nr,Ws,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Xn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new S(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new S,jn=new S,Ba=new S,qn=new S,is=new S,ss=new S,Fh=new S,ka=new S,za=new S,Ha=new S,Dr=!1,fs=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),jn.subVectors(n,t),Ba.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(jn),l=Pn.dot(Ba),c=jn.dot(jn),u=jn.dot(Ba),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),jn.subVectors(e,t),Pn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Pn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;is.subVectors(i,n),ss.subVectors(r,n),ka.subVectors(e,n);let l=is.dot(ka),c=ss.dot(ka);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,i);let u=is.dot(za),h=ss.dot(za);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);Ha.subVectors(e,r);let f=is.dot(Ha),g=ss.dot(Ha);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ss,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Fh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Fh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Ql(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(Bt(tn.r*255,0,255))*65536+Math.round(Bt(tn.g*255,0,255))*256+Math.round(Bt(tn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Et){ht.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,i=tn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ur);let n=Js(li.h,Ur.h,t),i=Js(li.s,Ur.s,t),r=Js(li.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Ne;Ne.NAMES=Ku;var fp=0,mn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=_s,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},St=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new S,Or=new re,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}};var mo=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var pp=0,xn=new Je,Ga=new Ct,rs=new S,dn=new mt,Xs=new mt,Yt=new S,gt=class s extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?go:mo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(dn.min,Xs.min),dn.expandByPoint(Yt),Yt.addVectors(dn.max,Xs.max),dn.expandByPoint(Yt)):(dn.expandByPoint(Xs.min),dn.expandByPoint(Xs.max))}dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Yt.add(rs)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new S,u[w]=new S;let h=new S,d=new S,f=new S,g=new re,_=new re,m=new re,p=new S,M=new S;function x(w,H,K){h.fromArray(i,w*3),d.fromArray(i,H*3),f.fromArray(i,K*3),g.fromArray(o,w*2),_.fromArray(o,H*2),m.fromArray(o,K*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);let ae=1/(_.x*m.y-m.x*_.y);isFinite(ae)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(ae),M.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(ae),c[w].add(p),c[H].add(p),c[K].add(p),u[w].add(M),u[H].add(M),u[K].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,H=T.length;w<H;++w){let K=T[w],ae=K.start,I=K.count;for(let D=ae,G=ae+I;D<G;D+=3)x(n[D+0],n[D+1],n[D+2])}let L=new S,C=new S,R=new S,X=new S;function E(w){R.fromArray(r,w*3),X.copy(R);let H=c[w];L.copy(H),L.sub(R.multiplyScalar(R.dot(H))).normalize(),C.crossVectors(X,H);let ae=C.dot(u[w])<0?-1:1;l[w*4]=L.x,l[w*4+1]=L.y,l[w*4+2]=L.z,l[w*4+3]=ae}for(let w=0,H=T.length;w<H;++w){let K=T[w],ae=K.start,I=K.count;for(let D=ae,G=ae+I;D<G;D+=3)E(n[D+0]),E(n[D+1]),E(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=new Je,Ai=new In,Fr=new pn,kh=new S,os=new S,as=new S,ls=new S,Wa=new S,Br=new S,kr=new re,zr=new re,Hr=new re,zh=new S,Hh=new S,Vh=new S,Vr=new S,Gr=new S,Ke=class extends Ct{constructor(e=new gt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Wa.fromBufferAttribute(h,e),o?Br.addScaledVector(Wa,u):Br.addScaledVector(Wa.sub(t),u))}t.add(Br)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Fr,kh)===null||Ai.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let T=M,L=x;T<L;T+=3){let C=a.getX(T),R=a.getX(T+1),X=a.getX(T+2);i=Wr(this,p,e,n,c,u,h,C,R,X),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),x=a.getX(m+1),T=a.getX(m+2);i=Wr(this,o,e,n,c,u,h,M,x,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=M,L=x;T<L;T+=3){let C=T,R=T+1,X=T+2;i=Wr(this,p,e,n,c,u,h,C,R,X),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,x=m+1,T=m+2;i=Wr(this,o,e,n,c,u,h,M,x,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function mp(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:s}}function Wr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,os),s.getVertexPosition(l,as),s.getVertexPosition(c,ls);let u=mp(s,e,t,n,os,as,ls,Vr);if(u){i&&(kr.fromBufferAttribute(i,a),zr.fromBufferAttribute(i,l),Hr.fromBufferAttribute(i,c),u.uv=fs.getInterpolation(Vr,os,as,ls,kr,zr,Hr,new re)),r&&(kr.fromBufferAttribute(r,a),zr.fromBufferAttribute(r,l),Hr.fromBufferAttribute(r,c),u.uv1=fs.getInterpolation(Vr,os,as,ls,kr,zr,Hr,new re),u.uv2=u.uv1),o&&(zh.fromBufferAttribute(o,a),Hh.fromBufferAttribute(o,l),Vh.fromBufferAttribute(o,c),u.normal=fs.getInterpolation(Vr,os,as,ls,zh,Hh,Vh,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new S,materialIndex:0};fs.getNormal(os,as,ls,h.normal),u.face=h}return u}var Fi=class s extends gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(_,m,p,M,x,T,L,C,R,X,E){let w=T/R,H=L/X,K=T/2,ae=L/2,I=C/2,D=R+1,G=X+1,q=0,j=0,W=new S;for(let ee=0;ee<G;ee++){let ne=ee*H-ae;for(let he=0;he<D;he++){let z=he*w-K;W[_]=z*M,W[m]=ne*x,W[p]=I,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=C>0?1:-1,u.push(W.x,W.y,W.z),h.push(he/R),h.push(1-ee/X),q+=1}}for(let ee=0;ee<X;ee++)for(let ne=0;ne<R;ne++){let he=d+ne+D*ee,z=d+ne+D*(ee+1),Y=d+(ne+1)+D*(ee+1),fe=d+(ne+1)+D*ee;l.push(he,z,fe),l.push(z,Y,fe),j+=6}a.addGroup(f,j,E),f+=j,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ts(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){let e={};for(let t=0;t<s.length;t++){let n=Ts(s[t]);for(let i in n)e[i]=n[i]}return e}function gp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ju(s){return s.getRenderTarget()===null?s.outputColorSpace:ht.workingColorSpace}var _p={clone:Ts,merge:rn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_o=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends _o{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,hs=1,pl=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(cs,hs,e,t);i.layers=this.layers,this.add(i);let r=new kt(cs,hs,e,t);r.layers=this.layers,this.add(r);let o=new kt(cs,hs,e,t);o.layers=this.layers,this.add(o);let a=new kt(cs,hs,e,t);a.layers=this.layers,this.add(a);let l=new kt(cs,hs,e,t);l.layers=this.layers,this.add(l);let c=new kt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends Jt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ml=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Di?Et:vn),this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fi(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ui});r.uniforms.tEquirect.value=t;let o=new Ke(i,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=on),new pl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Xa=new S,vp=new S,Mp=new Qe,Ln=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Xa.subVectors(n,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mp.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new pn,Xr=new S,ar=class{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,r=new Ln,o=new Ln){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-r,d-c,m-f,T-p).normalize(),n[1].setComponents(l+r,d+c,m+f,T+p).normalize(),n[2].setComponents(l+o,d+u,m+g,T+M).normalize(),n[3].setComponents(l-o,d-u,m-g,T-M).normalize(),n[4].setComponents(l-a,d-h,m-_,T-x).normalize(),t===Jn)n[5].setComponents(l+a,d+h,m+_,T+x).normalize();else if(t===lo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bp(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,d=c.usage,f=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,h){let d=u.array,f=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,c),f.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var lr=class s extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*d-o;for(let x=0;x<c;x++){let T=x*h-r;g.push(T,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let x=M+c*p,T=M+c*(p+1),L=M+1+c*(p+1),C=M+1+c*p;f.push(x,T,C),f.push(T,L,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`
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
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Cg=`#if DEPTH_PACKING == 3200
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ep,alphahash_pars_fragment:Sp,alphamap_fragment:Tp,alphamap_pars_fragment:wp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Np,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Op,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:Gp,color_pars_vertex:Wp,color_vertex:Xp,common:jp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:$p,displacementmap_vertex:Kp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Zp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:gm,envmap_vertex:rm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:xm,lights_phong_fragment:ym,lights_phong_pars_fragment:vm,lights_physical_fragment:Mm,lights_physical_pars_fragment:bm,lights_fragment_begin:Em,lights_fragment_maps:Sm,lights_fragment_end:Tm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Nm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Um,morphcolor_vertex:Om,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:Vm,normal_pars_vertex:Gm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:$m,opaque_fragment:Km,packing:Jm,premultiplied_alpha_fragment:Zm,project_vertex:Qm,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:og,shadowmask_pars_fragment:ag,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:hg,skinnormal_vertex:ug,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:_g,uv_pars_fragment:xg,uv_pars_vertex:yg,uv_vertex:vg,worldpos_vertex:Mg,background_vert:bg,background_frag:Eg,backgroundCube_vert:Sg,backgroundCube_frag:Tg,cube_vert:wg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distanceRGBA_vert:Pg,distanceRGBA_frag:Lg,equirect_vert:Ig,equirect_frag:Ng,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:Og,meshbasic_frag:Fg,meshlambert_vert:Bg,meshlambert_frag:kg,meshmatcap_vert:zg,meshmatcap_frag:Hg,meshnormal_vert:Vg,meshnormal_frag:Gg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:jg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:$g,points_vert:Kg,points_frag:Jg,shadow_vert:Zg,shadow_frag:Qg,sprite_vert:e_,sprite_frag:t_},ce={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},On={basic:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:rn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:rn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:rn([ce.points,ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:rn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:rn([ce.common,ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:rn([ce.sprite,ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:rn([ce.common,ce.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:rn([ce.lights,ce.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};On.physical={uniforms:rn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var jr={r:0,b:0,g:0};function n_(s,e,t,n,i,r,o){let a=new Ne(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vo)?(u===void 0&&(u=new Ke(new Fi(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ts(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ht.getTransfer(x.colorSpace)!==bt,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ke(new lr(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ts(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(jr,Ju(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function i_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,u=!1;function h(I,D,G,q,j){let W=!1;if(o){let ee=_(q,G,D);c!==ee&&(c=ee,f(c.object)),W=p(I,q,G,j),W&&M(I,q,G,j)}else{let ee=D.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==ee)&&(c.geometry=q.id,c.program=G.id,c.wireframe=ee,W=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,X(I,D,G,q),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,D,G){let q=G.wireframe===!0,j=a[I.id];j===void 0&&(j={},a[I.id]=j);let W=j[D.id];W===void 0&&(W={},j[D.id]=W);let ee=W[q];return ee===void 0&&(ee=m(d()),W[q]=ee),ee}function m(I){let D=[],G=[],q=[];for(let j=0;j<i;j++)D[j]=0,G[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:q,object:I,attributes:{},index:null}}function p(I,D,G,q){let j=c.attributes,W=D.attributes,ee=0,ne=G.getAttributes();for(let he in ne)if(ne[he].location>=0){let Y=j[he],fe=W[he];if(fe===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),Y===void 0||Y.attribute!==fe||fe&&Y.data!==fe.data)return!0;ee++}return c.attributesNum!==ee||c.index!==q}function M(I,D,G,q){let j={},W=D.attributes,ee=0,ne=G.getAttributes();for(let he in ne)if(ne[he].location>=0){let Y=W[he];Y===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let fe={};fe.attribute=Y,Y&&Y.data&&(fe.data=Y.data),j[he]=fe,ee++}c.attributes=j,c.attributesNum=ee,c.index=q}function x(){let I=c.newAttributes;for(let D=0,G=I.length;D<G;D++)I[D]=0}function T(I){L(I,0)}function L(I,D){let G=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;G[I]=1,q[I]===0&&(s.enableVertexAttribArray(I),q[I]=1),j[I]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),j[I]=D)}function C(){let I=c.newAttributes,D=c.enabledAttributes;for(let G=0,q=D.length;G<q;G++)D[G]!==I[G]&&(s.disableVertexAttribArray(G),D[G]=0)}function R(I,D,G,q,j,W,ee){ee===!0?s.vertexAttribIPointer(I,D,G,j,W):s.vertexAttribPointer(I,D,G,q,j,W)}function X(I,D,G,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let j=q.attributes,W=G.getAttributes(),ee=D.defaultAttributeValues;for(let ne in W){let he=W[ne];if(he.location>=0){let z=j[ne];if(z===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(z=I.instanceColor)),z!==void 0){let Y=z.normalized,fe=z.itemSize,Ae=t.get(z);if(Ae===void 0)continue;let be=Ae.buffer,Oe=Ae.type,ke=Ae.bytesPerElement,ye=n.isWebGL2===!0&&(Oe===s.INT||Oe===s.UNSIGNED_INT||z.gpuType===Bu);if(z.isInterleavedBufferAttribute){let We=z.data,U=We.stride,Lt=z.offset;if(We.isInstancedInterleavedBuffer){for(let Re=0;Re<he.locationSize;Re++)L(he.location+Re,We.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Re=0;Re<he.locationSize;Re++)T(he.location+Re);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Re=0;Re<he.locationSize;Re++)R(he.location+Re,fe/he.locationSize,Oe,Y,U*ke,(Lt+fe/he.locationSize*Re)*ke,ye)}else{if(z.isInstancedBufferAttribute){for(let We=0;We<he.locationSize;We++)L(he.location+We,z.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let We=0;We<he.locationSize;We++)T(he.location+We);s.bindBuffer(s.ARRAY_BUFFER,be);for(let We=0;We<he.locationSize;We++)R(he.location+We,fe/he.locationSize,Oe,Y,fe*ke,fe/he.locationSize*We*ke,ye)}}else if(ee!==void 0){let Y=ee[ne];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(he.location,Y);break;case 3:s.vertexAttrib3fv(he.location,Y);break;case 4:s.vertexAttrib4fv(he.location,Y);break;default:s.vertexAttrib1fv(he.location,Y)}}}}C()}function E(){K();for(let I in a){let D=a[I];for(let G in D){let q=D[G];for(let j in q)g(q[j].object),delete q[j];delete D[G]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;let D=a[I.id];for(let G in D){let q=D[G];for(let j in q)g(q[j].object),delete q[j];delete D[G]}delete a[I.id]}function H(I){for(let D in a){let G=a[D];if(G[I.id]===void 0)continue;let q=G[I.id];for(let j in q)g(q[j].object),delete q[j];delete G[I.id]}}function K(){ae(),u=!0,c!==l&&(c=l,f(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:ae,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:T,disableUnusedAttributes:C}}function s_(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function r_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=o||e.has("OES_texture_float"),L=x&&T,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:C}}function o_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Ln,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,x=M*4,T=p.clippingState||null;l.value=T,T=u(g,d,x,f);for(let L=0;L!==x;++L)T[L]=t[L];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=f;x!==_;++x,T+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a_(s){let e=new WeakMap;function t(o,a){return a===al?o.mapping=vs:a===ll&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ml(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ws=class extends _o{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=4,Gh=[.125,.215,.35,.446,.526,.582],Li=20,ja=new ws,Wh=new Ne,qa=null,Ya=0,$a=0,Ci=(1+Math.sqrt(5))/2,us=1/Ci,Xh=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Ci,us),new S(0,Ci,-us),new S(us,0,Ci),new S(-us,0,Ci),new S(Ci,us,0),new S(-Ci,us,0)],As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,$a),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:sr,format:yn,colorSpace:Ht,depthBuffer:!1},i=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=c_(r,e,t)}return i}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,i){let a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Wh),u.toneMapping=di,u.autoClear=!1;let f=new St({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ke(new Fi,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Wh),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;qr(i,M*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===vs||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Xh[(i-1)%Xh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ke(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let p=[],M=0;for(let R=0;R<Li;++R){let X=R/_,E=Math.exp(-X*X/2);p.push(E),R===0?M+=E:R<m&&(M+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let T=this._sizeLods[i],L=3*T*(i>x-ps?i-x+ps:0),C=4*(this._cubeSize-T);qr(t,L,C,3*T,2*T),l.setRenderTarget(t),l.render(h,ja)}};function l_(s){let e=[],t=[],n=[],i=s,r=s-ps+1+Gh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=Gh[o-s+ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let C=0;C<f;C++){let R=C%3*2/3-1,X=C>2?0:-1,E=[R,X,0,R+2/3,X,0,R+2/3,X+1,0,R,X,0,R+2/3,X+1,0,R,X+1,0];M.set(E,_*g*C),x.set(d,m*g*C);let w=[C,C,C,C,C,C];T.set(w,p*g*C)}let L=new gt;L.setAttribute("position",new Nt(M,_)),L.setAttribute("uv",new Nt(x,m)),L.setAttribute("faceIndex",new Nt(T,p)),e.push(L),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(s,e,t){let n=new Zn(s,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function c_(s,e,t){let n=new Float32Array(Li),i=new S(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qh(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function h_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===al||l===ll,u=l===vs||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new As(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new As(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d_(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let x=0,T=M.length;x<T;x+=3){let L=M[x+0],C=M[x+1],R=M[x+2];d.push(L,C,C,R,R,L)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,T=M.length/3-1;x<T;x+=3){let L=x+0,C=x+1,R=x+2;d.push(L,C,C,R,R,L)}}else return;let m=new($u(d)?go:mo)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function f_(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){s.drawElements(r,g,a,f*l),t.update(g,r,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function p_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function m_(s,e){return s[0]-e[0]}function g_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function __(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==g){let I=function(){K.dispose(),r.delete(u),u.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],R=u.morphAttributes.color||[],X=0;M===!0&&(X=1),x===!0&&(X=2),T===!0&&(X=3);let E=u.attributes.position.count*X,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let H=new Float32Array(E*w*4*g),K=new fo(H,E,w,g);K.type=Kn,K.needsUpdate=!0;let ae=X*4;for(let D=0;D<g;D++){let G=L[D],q=C[D],j=R[D],W=E*w*4*D;for(let ee=0;ee<G.count;ee++){let ne=ee*ae;M===!0&&(o.fromBufferAttribute(G,ee),H[W+ne+0]=o.x,H[W+ne+1]=o.y,H[W+ne+2]=o.z,H[W+ne+3]=0),x===!0&&(o.fromBufferAttribute(q,ee),H[W+ne+4]=o.x,H[W+ne+5]=o.y,H[W+ne+6]=o.z,H[W+ne+7]=0),T===!0&&(o.fromBufferAttribute(j,ee),H[W+ne+8]=o.x,H[W+ne+9]=o.y,H[W+ne+10]=o.z,H[W+ne+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:K,size:new re(E,w)},r.set(u,_),u.addEventListener("dispose",I)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){let T=g[x];T[0]=x,T[1]=d[x]}g.sort(g_);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(m_);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let T=a[x],L=T[0],C=T[1];L!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),m&&u.getAttribute("morphNormal"+x)!==m[L]&&u.setAttribute("morphNormal"+x,m[L]),i[x]=C,p+=C):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function x_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var yo=class extends Jt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=ci),n===void 0&&u===bs&&(n=Ii),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qu=new Jt,ed=new yo(1,1);ed.compareFunction=Yu;var td=new fo,nd=new fl,id=new xo,$h=[],Kh=[],Jh=new Float32Array(16),Zh=new Float32Array(9),Qh=new Float32Array(4);function Ns(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=$h[i];if(r===void 0&&(r=new Float32Array(i),$h[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xo(s,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function y_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function M_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function E_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Qh.set(n),s.uniformMatrix2fv(this.addr,!1,Qh),Gt(t,n)}}function S_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Zh.set(n),s.uniformMatrix3fv(this.addr,!1,Zh),Gt(t,n)}}function T_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Jh.set(n),s.uniformMatrix4fv(this.addr,!1,Jh),Gt(t,n)}}function w_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function A_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function R_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function C_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function P_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function N_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function D_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?ed:Qu;t.setTexture2D(e||r,i)}function U_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nd,i)}function O_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||id,i)}function F_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||td,i)}function B_(s){switch(s){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return b_;case 35674:return E_;case 35675:return S_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return L_;case 36295:return I_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return F_}}function k_(s,e){s.uniform1fv(this.addr,e)}function z_(s,e){let t=Ns(e,this.size,2);s.uniform2fv(this.addr,t)}function H_(s,e){let t=Ns(e,this.size,3);s.uniform3fv(this.addr,t)}function V_(s,e){let t=Ns(e,this.size,4);s.uniform4fv(this.addr,t)}function G_(s,e){let t=Ns(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function W_(s,e){let t=Ns(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function X_(s,e){let t=Ns(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function j_(s,e){s.uniform1iv(this.addr,e)}function q_(s,e){s.uniform2iv(this.addr,e)}function Y_(s,e){s.uniform3iv(this.addr,e)}function $_(s,e){s.uniform4iv(this.addr,e)}function K_(s,e){s.uniform1uiv(this.addr,e)}function J_(s,e){s.uniform2uiv(this.addr,e)}function Z_(s,e){s.uniform3uiv(this.addr,e)}function Q_(s,e){s.uniform4uiv(this.addr,e)}function e0(s,e,t){let n=this.cache,i=e.length,r=Xo(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qu,r[o])}function t0(s,e,t){let n=this.cache,i=e.length,r=Xo(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nd,r[o])}function n0(s,e,t){let n=this.cache,i=e.length,r=Xo(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||id,r[o])}function i0(s,e,t){let n=this.cache,i=e.length,r=Xo(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||td,r[o])}function s0(s){switch(s){case 5126:return k_;case 35664:return z_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return j_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return K_;case 36294:return J_;case 36295:return Z_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function eu(s,e){s.seq.push(e),s.map[e.id]=e}function r0(s,e,t){let n=s.name,i=n.length;for(Ka.lastIndex=0;;){let r=Ka.exec(n),o=Ka.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){eu(t,c===void 0?new gl(a,s,e):new _l(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new xl(a),eu(t,h)),t=h}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);r0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function tu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var o0=37297,a0=0;function l0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function c0(s){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(s),n;switch(e===t?n="":e===ao&&t===oo?n="LinearDisplayP3ToLinearSRGB":e===oo&&t===ao&&(n="LinearSRGBToLinearDisplayP3"),s){case Ht:case Wo:return[n,"LinearTransferOETF"];case Et:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function nu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+l0(s.getShaderSource(e),o)}else return i}function h0(s,e){let t=c0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u0(s,e){let t;switch(e){case gf:t="Linear";break;case _f:t="Reinhard";break;case xf:t="OptimizedCineon";break;case $l:t="ACESFilmic";break;case vf:t="AgX";break;case yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function f0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function p0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ms(s){return s!==""}function iu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(s){return s.replace(g0,x0)}var _0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x0(s,e){let t=et[e];if(t===void 0){let n=_0.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(s){return s.replace(y0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ou(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function S0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function T0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=M0(t),c=b0(t),u=E0(t),h=S0(t),d=T0(t),f=t.isWebGL2?"":d0(t),g=f0(t),_=p0(r),m=i.createProgram(),p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),M.length>0&&(M+=`
`)):(p=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),M=[f,ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?et.tonemapping_pars_fragment:"",t.toneMapping!==di?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=yl(o),o=iu(o,t),o=su(o,t),a=yl(a),a=iu(a,t),a=su(a,t),o=ru(o),a=ru(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=x+p+o,L=x+M+a,C=tu(i,i.VERTEX_SHADER,T),R=tu(i,i.FRAGMENT_SHADER,L);i.attachShader(m,C),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function X(K){if(s.debug.checkShaderErrors){let ae=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(C).trim(),D=i.getShaderInfoLog(R).trim(),G=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,R);else{let j=nu(i,C,"vertex"),W=nu(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+j+`
`+W)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(I===""||D==="")&&(q=!1);q&&(K.diagnostics={runnable:G,programLog:ae,vertexShader:{log:I,prefix:p},fragmentShader:{log:D,prefix:M}})}i.deleteShader(C),i.deleteShader(R),E=new ys(i,m),w=m0(i,m)}let E;this.getUniforms=function(){return E===void 0&&X(this),E};let w;this.getAttributes=function(){return w===void 0&&X(this),w};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,o0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}var A0=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function R0(s,e,t,n,i,r,o){let a=new or,l=new vl,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,w,H,K,ae){let I=K.fog,D=ae.geometry,G=E.isMeshStandardMaterial?K.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),j=q&&q.mapping===Vo?q.image.height:null,W=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ne=ee!==void 0?ee.length:0,he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let z,Y,fe,Ae;if(W){let vt=On[W];z=vt.vertexShader,Y=vt.fragmentShader}else z=E.vertexShader,Y=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),Ae=l.getFragmentShaderID(E);let be=s.getRenderTarget(),Oe=ae.isInstancedMesh===!0,ke=ae.isBatchedMesh===!0,ye=!!E.map,We=!!E.matcap,U=!!q,Lt=!!E.aoMap,Re=!!E.lightMap,Pe=!!E.bumpMap,ve=!!E.normalMap,rt=!!E.displacementMap,De=!!E.emissiveMap,y=!!E.metalnessMap,v=!!E.roughnessMap,O=E.anisotropy>0,J=E.clearcoat>0,Q=E.iridescence>0,$=E.sheen>0,ue=E.transmission>0,de=O&&!!E.anisotropyMap,pe=J&&!!E.clearcoatMap,Ee=J&&!!E.clearcoatNormalMap,je=J&&!!E.clearcoatRoughnessMap,Z=Q&&!!E.iridescenceMap,at=Q&&!!E.iridescenceThicknessMap,Ue=$&&!!E.sheenColorMap,ze=$&&!!E.sheenRoughnessMap,Se=!!E.specularMap,me=!!E.specularColorMap,A=!!E.specularIntensityMap,ie=ue&&!!E.transmissionMap,Te=ue&&!!E.thicknessMap,xe=!!E.gradientMap,te=!!E.alphaMap,P=E.alphaTest>0,se=!!E.alphaHash,oe=!!E.extensions,Le=!!D.attributes.uv1,we=!!D.attributes.uv2,tt=!!D.attributes.uv3,nt=di;return E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:u,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:Y,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ke,instancing:Oe,instancingColor:Oe&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ht,map:ye,matcap:We,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:j,aoMap:Lt,lightMap:Re,bumpMap:Pe,normalMap:ve,displacementMap:d&&rt,emissiveMap:De,normalMapObjectSpace:ve&&E.normalMapType===Nf,normalMapTangentSpace:ve&&E.normalMapType===qu,metalnessMap:y,roughnessMap:v,anisotropy:O,anisotropyMap:de,clearcoat:J,clearcoatMap:pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:je,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:at,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:ze,specularMap:Se,specularColorMap:me,specularIntensityMap:A,transmission:ue,transmissionMap:ie,thicknessMap:Te,gradientMap:xe,opaque:E.transparent===!1&&E.blending===_s,alphaMap:te,alphaTest:P,alphaHash:se,combine:E.combine,mapUv:ye&&_(E.map.channel),aoMapUv:Lt&&_(E.aoMap.channel),lightMapUv:Re&&_(E.lightMap.channel),bumpMapUv:Pe&&_(E.bumpMap.channel),normalMapUv:ve&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:De&&_(E.emissiveMap.channel),metalnessMapUv:y&&_(E.metalnessMap.channel),roughnessMapUv:v&&_(E.roughnessMap.channel),anisotropyMapUv:de&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(E.sheenRoughnessMap.channel),specularMapUv:Se&&_(E.specularMap.channel),specularColorMapUv:me&&_(E.specularColorMap.channel),specularIntensityMapUv:A&&_(E.specularIntensityMap.channel),transmissionMapUv:ie&&_(E.transmissionMap.channel),thicknessMapUv:Te&&_(E.thicknessMap.channel),alphaMapUv:te&&_(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ve||O),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:we,vertexUv3s:tt,pointsUvs:ae.isPoints===!0&&!!D.attributes.uv&&(ye||te),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ae.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zt,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:oe&&E.extensions.derivatives===!0,extensionFragDepth:oe&&E.extensions.fragDepth===!0,extensionDrawBuffers:oe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let H in E.defines)w.push(H),w.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(M(w,E),x(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function M(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function x(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){let w=g[E.type],H;if(w){let K=On[w];H=_p.clone(K.uniforms)}else H=E.uniforms;return H}function L(E,w){let H;for(let K=0,ae=c.length;K<ae;K++){let I=c[K];if(I.cacheKey===w){H=I,++H.usedTimes;break}}return H===void 0&&(H=new w0(s,w,E,r),c.push(H)),H}function C(E){if(--E.usedTimes===0){let w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:X}}function C0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function au(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||P0),n.length>1&&n.sort(d||au),i.length>1&&i.sort(d||au)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function L0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new lu,s.set(n,[o])):i>=r.length?(o=new lu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function I0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ne};break;case"SpotLight":t={position:new S,direction:new S,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function N0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var D0=0;function U0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function O0(s,e){let t=new I0,n=N0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new S);let r=new S,o=new Je,a=new Je;function l(u,h){let d=0,f=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let _=0,m=0,p=0,M=0,x=0,T=0,L=0,C=0,R=0,X=0,E=0;u.sort(U0);let w=h===!0?Math.PI:1;for(let K=0,ae=u.length;K<ae;K++){let I=u[K],D=I.color,G=I.intensity,q=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=D.r*G*w,f+=D.g*G*w,g+=D.b*G*w;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],G);E++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let ee=I.shadow,ne=n.get(I);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[_]=ne,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=I.shadow.matrix,T++}i.directional[_]=W,_++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(D).multiplyScalar(G*w),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[p]=W;let ee=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ee.updateMatrices(I),I.castShadow&&X++),i.spotLightMatrix[p]=ee.matrix,I.castShadow){let ne=n.get(I);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=j,C++}p++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(D).multiplyScalar(G),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=W,M++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*w),W.distance=I.distance,W.decay=I.decay,I.castShadow){let ee=I.shadow,ne=n.get(I);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=I.shadow.matrix,L++}i.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(G*w),W.groundColor.copy(I.groundColor).multiplyScalar(G*w),i.hemi[x]=W,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let H=i.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==M||H.hemiLength!==x||H.numDirectionalShadows!==T||H.numPointShadows!==L||H.numSpotShadows!==C||H.numSpotMaps!==R||H.numLightProbes!==E)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+R-X,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=E,H.directionalLength=_,H.pointLength=m,H.spotLength=p,H.rectAreaLength=M,H.hemiLength=x,H.numDirectionalShadows=T,H.numPointShadows=L,H.numSpotShadows=C,H.numSpotMaps=R,H.numLightProbes=E,i.version=D0++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){let T=u[M];if(T.isDirectionalLight){let L=i.directional[d];L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),d++}else if(T.isSpotLight){let L=i.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let L=i.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let L=i.point[f];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let L=i.hemi[m];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function cu(s,e){let t=new O0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function F0(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new cu(s,e),t.set(r,[l])):o>=a.length?(l=new cu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var bl=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function z0(s,e,t){let n=new ar,i=new re,r=new re,o=new _t,a=new bl({depthPacking:If}),l=new El,c={},u=t.maxTextureSize,h={[Bn]:nn,[nn]:Bn,[zt]:zt},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let p=this.type;this.render=function(C,R,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=s.getRenderTarget(),w=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),K=s.state;K.setBlending(ui),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let ae=p!==$n&&this.type===$n,I=p===$n&&this.type!==$n;for(let D=0,G=C.length;D<G;D++){let q=C[D],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let W=j.getFrameExtents();if(i.multiply(W),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,j.mapSize.y=r.y)),j.map===null||ae===!0||I===!0){let ne=this.type!==$n?{minFilter:Ft,magFilter:Ft}:{};j.map!==null&&j.map.dispose(),j.map=new Zn(i.x,i.y,ne),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let ee=j.getViewportCount();for(let ne=0;ne<ee;ne++){let he=j.getViewport(ne);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),K.viewport(o),j.updateMatrices(q,ne),n=j.getFrustum(),T(R,X,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===$n&&M(j,X),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,H)};function M(C,R){let X=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,X,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,X,f,_,null)}function x(C,R,X,E){let w=null,H=X.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(H!==void 0)w=H;else if(w=X.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let K=w.uuid,ae=R.uuid,I=c[K];I===void 0&&(I={},c[K]=I);let D=I[ae];D===void 0&&(D=w.clone(),I[ae]=D,R.addEventListener("dispose",L)),w=D}if(w.visible=R.visible,w.wireframe=R.wireframe,E===$n?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let K=s.properties.get(w);K.light=X}return w}function T(C,R,X,E,w){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===$n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld);let ae=e.update(C),I=C.material;if(Array.isArray(I)){let D=ae.groups;for(let G=0,q=D.length;G<q;G++){let j=D[G],W=I[j.materialIndex];if(W&&W.visible){let ee=x(C,W,E,w);C.onBeforeShadow(s,C,R,X,ae,ee,j),s.renderBufferDirect(X,null,ae,ee,C,j),C.onAfterShadow(s,C,R,X,ae,ee,j)}}}else if(I.visible){let D=x(C,I,E,w);C.onBeforeShadow(s,C,R,X,ae,D,null),s.renderBufferDirect(X,null,ae,D,C,null),C.onAfterShadow(s,C,R,X,ae,D,null)}}let K=C.children;for(let ae=0,I=K.length;ae<I;ae++)T(K[ae],R,X,E,w)}function L(C){C.target.removeEventListener("dispose",L);for(let X in c){let E=c[X],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function H0(s,e,t){let n=t.isWebGL2;function i(){let P=!1,se=new _t,oe=null,Le=new _t(0,0,0,0);return{setMask:function(we){oe!==we&&!P&&(s.colorMask(we,we,we,we),oe=we)},setLocked:function(we){P=we},setClear:function(we,tt,nt,$e,vt){vt===!0&&(we*=$e,tt*=$e,nt*=$e),se.set(we,tt,nt,$e),Le.equals(se)===!1&&(s.clearColor(we,tt,nt,$e),Le.copy(se))},reset:function(){P=!1,oe=null,Le.set(-1,0,0,0)}}}function r(){let P=!1,se=null,oe=null,Le=null;return{setTest:function(we){we?ke(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(we){se!==we&&!P&&(s.depthMask(we),se=we)},setFunc:function(we){if(oe!==we){switch(we){case af:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case cf:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case uf:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=we}},setLocked:function(we){P=we},setClear:function(we){Le!==we&&(s.clearDepth(we),Le=we)},reset:function(){P=!1,se=null,oe=null,Le=null}}}function o(){let P=!1,se=null,oe=null,Le=null,we=null,tt=null,nt=null,$e=null,vt=null;return{setTest:function(He){P||(He?ke(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(He){se!==He&&!P&&(s.stencilMask(He),se=He)},setFunc:function(He,Mt,Xt){(oe!==He||Le!==Mt||we!==Xt)&&(s.stencilFunc(He,Mt,Xt),oe=He,Le=Mt,we=Xt)},setOp:function(He,Mt,Xt){(tt!==He||nt!==Mt||$e!==Xt)&&(s.stencilOp(He,Mt,Xt),tt=He,nt=Mt,$e=Xt)},setLocked:function(He){P=He},setClear:function(He){vt!==He&&(s.clearStencil(He),vt=He)},reset:function(){P=!1,se=null,oe=null,Le=null,we=null,tt=null,nt=null,$e=null,vt=null}}}let a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,T=null,L=null,C=null,R=null,X=null,E=new Ne(0,0,0),w=0,H=!1,K=null,ae=null,I=null,D=null,G=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,W=0,ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=W>=1):ee.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=W>=2);let ne=null,he={},z=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),fe=new _t().fromArray(z),Ae=new _t().fromArray(Y);function be(P,se,oe,Le){let we=new Uint8Array(4),tt=s.createTexture();s.bindTexture(P,tt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<oe;nt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(se+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return tt}let Oe={};Oe[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Oe[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Oe[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(s.DEPTH_TEST),l.setFunc(io),De(!1),y(Gc),ke(s.CULL_FACE),ve(ui);function ke(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function ye(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function We(P,se){return f[P]!==se?(s.bindFramebuffer(P,se),f[P]=se,n&&(P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(P,se){let oe=_,Le=!1;if(P)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),P.isWebGLMultipleRenderTargets){let we=P.texture;if(oe.length!==we.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=we.length;tt<nt;tt++)oe[tt]=s.COLOR_ATTACHMENT0+tt;oe.length=we.length,Le=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Le=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Lt(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let Re={[Pi]:s.FUNC_ADD,[Xd]:s.FUNC_SUBTRACT,[jd]:s.FUNC_REVERSE_SUBTRACT};if(n)Re[qc]=s.MIN,Re[Yc]=s.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Re[qc]=P.MIN_EXT,Re[Yc]=P.MAX_EXT)}let Pe={[qd]:s.ZERO,[Yd]:s.ONE,[$d]:s.SRC_COLOR,[rl]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[Qd]:s.DST_COLOR,[Jd]:s.DST_ALPHA,[Kd]:s.ONE_MINUS_SRC_COLOR,[ol]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[Zd]:s.ONE_MINUS_DST_ALPHA,[nf]:s.CONSTANT_COLOR,[sf]:s.ONE_MINUS_CONSTANT_COLOR,[rf]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(P,se,oe,Le,we,tt,nt,$e,vt,He){if(P===ui){p===!0&&(ye(s.BLEND),p=!1);return}if(p===!1&&(ke(s.BLEND),p=!0),P!==Wd){if(P!==M||He!==H){if((x!==Pi||C!==Pi)&&(s.blendEquation(s.FUNC_ADD),x=Pi,C=Pi),He)switch(P){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wc:s.blendFunc(s.ONE,s.ONE);break;case Xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,L=null,R=null,X=null,E.set(0,0,0),w=0,M=P,H=He}return}we=we||se,tt=tt||oe,nt=nt||Le,(se!==x||we!==C)&&(s.blendEquationSeparate(Re[se],Re[we]),x=se,C=we),(oe!==T||Le!==L||tt!==R||nt!==X)&&(s.blendFuncSeparate(Pe[oe],Pe[Le],Pe[tt],Pe[nt]),T=oe,L=Le,R=tt,X=nt),($e.equals(E)===!1||vt!==w)&&(s.blendColor($e.r,$e.g,$e.b,vt),E.copy($e),w=vt),M=P,H=!1}function rt(P,se){P.side===zt?ye(s.CULL_FACE):ke(s.CULL_FACE);let oe=P.side===nn;se&&(oe=!oe),De(oe),P.blending===_s&&P.transparent===!1?ve(ui):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Le=P.stencilWrite;c.setTest(Le),Le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ke(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(P){K!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),K=P)}function y(P){P!==Hd?(ke(s.CULL_FACE),P!==ae&&(P===Gc?s.cullFace(s.BACK):P===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),ae=P}function v(P){P!==I&&(j&&s.lineWidth(P),I=P)}function O(P,se,oe){P?(ke(s.POLYGON_OFFSET_FILL),(D!==se||G!==oe)&&(s.polygonOffset(se,oe),D=se,G=oe)):ye(s.POLYGON_OFFSET_FILL)}function J(P){P?ke(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Q(P){P===void 0&&(P=s.TEXTURE0+q-1),ne!==P&&(s.activeTexture(P),ne=P)}function $(P,se,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+q-1:oe=ne);let Le=he[oe];Le===void 0&&(Le={type:void 0,texture:void 0},he[oe]=Le),(Le.type!==P||Le.texture!==se)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(P,se||Oe[P]),Le.type=P,Le.texture=se)}function ue(){let P=he[ne];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(P){fe.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),fe.copy(P))}function ie(P){Ae.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function Te(P,se){let oe=h.get(se);oe===void 0&&(oe=new WeakMap,h.set(se,oe));let Le=oe.get(P);Le===void 0&&(Le=s.getUniformBlockIndex(se,P.name),oe.set(P,Le))}function xe(P,se){let Le=h.get(se).get(P);u.get(se)!==Le&&(s.uniformBlockBinding(se,Le,P.__bindingPointIndex),u.set(se,Le))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ne=null,he={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,T=null,L=null,C=null,R=null,X=null,E=new Ne(0,0,0),w=0,H=!1,K=null,ae=null,I=null,D=null,G=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ke,disable:ye,bindFramebuffer:We,drawBuffers:U,useProgram:Lt,setBlending:ve,setMaterial:rt,setFlipSided:De,setCullFace:y,setLineWidth:v,setPolygonOffset:O,setScissorTest:J,activeTexture:Q,bindTexture:$,unbindTexture:ue,compressedTexImage2D:de,compressedTexImage3D:pe,texImage2D:Se,texImage3D:me,updateUBOMapping:Te,uniformBlockBinding:xe,texStorage2D:Ue,texStorage3D:ze,texSubImage2D:Ee,texSubImage3D:je,compressedTexSubImage2D:Z,compressedTexSubImage3D:at,scissor:A,viewport:ie,reset:te}}function V0(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return f?new OffscreenCanvas(y,v):rr("canvas")}function _(y,v,O,J){let Q=1;if((y.width>J||y.height>J)&&(Q=J/Math.max(y.width,y.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){let $=v?co:Math.floor,ue=$(Q*y.width),de=$(Q*y.height);h===void 0&&(h=g(ue,de));let pe=O?g(ue,de):h;return pe.width=ue,pe.height=de,pe.getContext("2d").drawImage(y,0,0,ue,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ue+"x"+de+")."),pe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function m(y){return ul(y.width)&&ul(y.height)}function p(y){return a?!1:y.wrapS!==fn||y.wrapT!==fn||y.minFilter!==Ft&&y.minFilter!==on}function M(y,v){return y.generateMipmaps&&v&&y.minFilter!==Ft&&y.minFilter!==on}function x(y){s.generateMipmap(y)}function T(y,v,O,J,Q=!1){if(a===!1)return v;if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=v;if(v===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),v===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RGBA){let ue=Q?ro:ht.getTransfer(J);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=ue===bt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function L(y,v,O){return M(y,O)===!0||y.isFramebufferTexture&&y.minFilter!==Ft&&y.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){return y===Ft||y===so||y===$s?s.NEAREST:s.LINEAR}function R(y){let v=y.target;v.removeEventListener("dispose",R),E(v),v.isVideoTexture&&u.delete(v)}function X(y){let v=y.target;v.removeEventListener("dispose",X),H(v)}function E(y){let v=n.get(y);if(v.__webglInit===void 0)return;let O=y.source,J=d.get(O);if(J){let Q=J[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(y),Object.keys(J).length===0&&d.delete(O)}n.remove(y)}function w(y){let v=n.get(y);s.deleteTexture(v.__webglTexture);let O=y.source,J=d.get(O);delete J[v.__cacheKey],o.memory.textures--}function H(y){let v=y.texture,O=n.get(y),J=n.get(v);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let $=0;$<O.__webglFramebuffer[Q].length;$++)s.deleteFramebuffer(O.__webglFramebuffer[Q][$]);else s.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[Q]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,$=v.length;Q<$;Q++){let ue=n.get(v[Q]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(y)}let K=0;function ae(){K=0}function I(){let y=K;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),K+=1,y}function D(y){let v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function G(y,v){let O=n.get(y);if(y.isVideoTexture&&rt(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){let J=y.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,y,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function q(y,v){let O=n.get(y);if(y.version>0&&O.__version!==y.version){fe(O,y,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function j(y,v){let O=n.get(y);if(y.version>0&&O.__version!==y.version){fe(O,y,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function W(y,v){let O=n.get(y);if(y.version>0&&O.__version!==y.version){Ae(O,y,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let ee={[Ui]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[ir]:s.MIRRORED_REPEAT},ne={[Ft]:s.NEAREST,[so]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Kl]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},he={[Df]:s.NEVER,[zf]:s.ALWAYS,[Uf]:s.LESS,[Yu]:s.LEQUAL,[Of]:s.EQUAL,[kf]:s.GEQUAL,[Ff]:s.GREATER,[Bf]:s.NOTEQUAL};function z(y,v,O){if(O?(s.texParameteri(y,s.TEXTURE_WRAP_S,ee[v.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,ee[v.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,ee[v.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,ne[v.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,ne[v.minFilter])):(s.texParameteri(y,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(y,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==fn||v.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(y,s.TEXTURE_MAG_FILTER,C(v.magFilter)),s.texParameteri(y,s.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Ft&&v.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ft||v.minFilter!==$s&&v.minFilter!==pi||v.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(y,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(y,v){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));let J=v.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let $=D(v);if($!==y.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[$].usedTimes++;let ue=Q[y.__cacheKey];ue!==void 0&&(Q[y.__cacheKey].usedTimes--,ue.usedTimes===0&&w(v)),y.__cacheKey=$,y.__webglTexture=Q[$].texture}return O}function fe(y,v,O){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);let Q=Y(y,v),$=v.source;t.bindTexture(J,y.__webglTexture,s.TEXTURE0+O);let ue=n.get($);if($.version!==ue.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);let de=ht.getPrimaries(ht.workingColorSpace),pe=v.colorSpace===vn?null:ht.getPrimaries(v.colorSpace),Ee=v.colorSpace===vn||de===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let je=p(v)&&m(v.image)===!1,Z=_(v.image,je,!1,i.maxTextureSize);Z=De(v,Z);let at=m(Z)||a,Ue=r.convert(v.format,v.colorSpace),ze=r.convert(v.type),Se=T(v.internalFormat,Ue,ze,v.colorSpace,v.isVideoTexture);z(J,v,at);let me,A=v.mipmaps,ie=a&&v.isVideoTexture!==!0&&Se!==Wu,Te=ue.__version===void 0||Q===!0,xe=L(v,Z,at);if(v.isDepthTexture)Se=s.DEPTH_COMPONENT,a?v.type===Kn?Se=s.DEPTH_COMPONENT32F:v.type===ci?Se=s.DEPTH_COMPONENT24:v.type===Ii?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:v.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ni&&Se===s.DEPTH_COMPONENT&&v.type!==Jl&&v.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ci,ze=r.convert(v.type)),v.format===bs&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ii,ze=r.convert(v.type))),Te&&(ie?t.texStorage2D(s.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,Ue,ze,null));else if(v.isDataTexture)if(A.length>0&&at){ie&&Te&&t.texStorage2D(s.TEXTURE_2D,xe,Se,A[0].width,A[0].height);for(let te=0,P=A.length;te<P;te++)me=A[te],ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,me.width,me.height,Ue,ze,me.data):t.texImage2D(s.TEXTURE_2D,te,Se,me.width,me.height,0,Ue,ze,me.data);v.generateMipmaps=!1}else ie?(Te&&t.texStorage2D(s.TEXTURE_2D,xe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Ue,ze,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,Ue,ze,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Se,A[0].width,A[0].height,Z.depth);for(let te=0,P=A.length;te<P;te++)me=A[te],v.format!==yn?Ue!==null?ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,Z.depth,Ue,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Se,me.width,me.height,Z.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,Z.depth,Ue,ze,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Se,me.width,me.height,Z.depth,0,Ue,ze,me.data)}else{ie&&Te&&t.texStorage2D(s.TEXTURE_2D,xe,Se,A[0].width,A[0].height);for(let te=0,P=A.length;te<P;te++)me=A[te],v.format!==yn?Ue!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,me.width,me.height,Ue,ze,me.data):t.texImage2D(s.TEXTURE_2D,te,Se,me.width,me.height,0,Ue,ze,me.data)}else if(v.isDataArrayTexture)ie?(Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ue,ze,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,Ue,ze,Z.data);else if(v.isData3DTexture)ie?(Te&&t.texStorage3D(s.TEXTURE_3D,xe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ue,ze,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,Ue,ze,Z.data);else if(v.isFramebufferTexture){if(Te)if(ie)t.texStorage2D(s.TEXTURE_2D,xe,Se,Z.width,Z.height);else{let te=Z.width,P=Z.height;for(let se=0;se<xe;se++)t.texImage2D(s.TEXTURE_2D,se,Se,te,P,0,Ue,ze,null),te>>=1,P>>=1}}else if(A.length>0&&at){ie&&Te&&t.texStorage2D(s.TEXTURE_2D,xe,Se,A[0].width,A[0].height);for(let te=0,P=A.length;te<P;te++)me=A[te],ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ue,ze,me):t.texImage2D(s.TEXTURE_2D,te,Se,Ue,ze,me);v.generateMipmaps=!1}else ie?(Te&&t.texStorage2D(s.TEXTURE_2D,xe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ze,Z)):t.texImage2D(s.TEXTURE_2D,0,Se,Ue,ze,Z);M(v,at)&&x(J),ue.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ae(y,v,O){if(v.image.length!==6)return;let J=Y(y,v),Q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+O);let $=n.get(Q);if(Q.version!==$.__version||J===!0){t.activeTexture(s.TEXTURE0+O);let ue=ht.getPrimaries(ht.workingColorSpace),de=v.colorSpace===vn?null:ht.getPrimaries(v.colorSpace),pe=v.colorSpace===vn||ue===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,je=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let te=0;te<6;te++)!Ee&&!je?Z[te]=_(v.image[te],!1,!0,i.maxCubemapSize):Z[te]=je?v.image[te].image:v.image[te],Z[te]=De(v,Z[te]);let at=Z[0],Ue=m(at)||a,ze=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),me=T(v.internalFormat,ze,Se,v.colorSpace),A=a&&v.isVideoTexture!==!0,ie=$.__version===void 0||J===!0,Te=L(v,at,Ue);z(s.TEXTURE_CUBE_MAP,v,Ue);let xe;if(Ee){A&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,me,at.width,at.height);for(let te=0;te<6;te++){xe=Z[te].mipmaps;for(let P=0;P<xe.length;P++){let se=xe[P];v.format!==yn?ze!==null?A?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,se.width,se.height,ze,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,se.width,se.height,ze,Se,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,me,se.width,se.height,0,ze,Se,se.data)}}}else{xe=v.mipmaps,A&&ie&&(xe.length>0&&Te++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,me,Z[0].width,Z[0].height));for(let te=0;te<6;te++)if(je){A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Z[te].width,Z[te].height,ze,Se,Z[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,me,Z[te].width,Z[te].height,0,ze,Se,Z[te].data);for(let P=0;P<xe.length;P++){let oe=xe[P].image[te].image;A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,oe.width,oe.height,ze,Se,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,me,oe.width,oe.height,0,ze,Se,oe.data)}}else{A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Se,Z[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,me,ze,Se,Z[te]);for(let P=0;P<xe.length;P++){let se=xe[P];A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,ze,Se,se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,me,ze,Se,se.image[te])}}}M(v,Ue)&&x(s.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function be(y,v,O,J,Q,$){let ue=r.convert(O.format,O.colorSpace),de=r.convert(O.type),pe=T(O.internalFormat,ue,de,O.colorSpace);if(!n.get(v).__hasExternalTextures){let je=Math.max(1,v.width>>$),Z=Math.max(1,v.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,pe,je,Z,v.depth,0,ue,de,null):t.texImage2D(Q,$,pe,je,Z,0,ue,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,y),ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,n.get(O).__webglTexture,0,Pe(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,n.get(O).__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(y,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||ve(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Kn?J=s.DEPTH_COMPONENT32F:Q.type===ci&&(J=s.DEPTH_COMPONENT24));let $=Pe(v);ve(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,J,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,$,J,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){let J=Pe(v);O&&ve(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):ve(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,y)}else{let J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<J.length;Q++){let $=J[Q],ue=r.convert($.format,$.colorSpace),de=r.convert($.type),pe=T($.internalFormat,ue,de,$.colorSpace),Ee=Pe(v);O&&ve(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,pe,v.width,v.height):ve(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,pe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let J=n.get(v.depthTexture).__webglTexture,Q=Pe(v);if(v.depthTexture.format===Ni)ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===bs)ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(y){let v=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ke(v.__webglFramebuffer,y)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=s.createRenderbuffer(),Oe(v.__webglDepthbuffer[J],y,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Oe(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(y,v,O){let J=n.get(y);v!==void 0&&be(J.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ye(y)}function U(y){let v=y.texture,O=n.get(y),J=n.get(v);y.addEventListener("dispose",X),y.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++);let Q=y.isWebGLCubeRenderTarget===!0,$=y.isWebGLMultipleRenderTargets===!0,ue=m(y)||a;if(Q){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let pe=0;pe<v.mipmaps.length;pe++)O.__webglFramebuffer[de][pe]=s.createFramebuffer()}else O.__webglFramebuffer[de]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[de]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if($)if(i.drawBuffers){let de=y.texture;for(let pe=0,Ee=de.length;pe<Ee;pe++){let je=n.get(de[pe]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ve(y)===!1){let de=$?v:[v];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){let Ee=de[pe];O.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);let je=r.convert(Ee.format,Ee.colorSpace),Z=r.convert(Ee.type),at=T(Ee.internalFormat,je,Z,Ee.colorSpace,y.isXRRenderTarget===!0),Ue=Pe(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,at,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),z(s.TEXTURE_CUBE_MAP,v,ue);for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)be(O.__webglFramebuffer[de][pe],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else be(O.__webglFramebuffer[de],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(v,ue)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){let de=y.texture;for(let pe=0,Ee=de.length;pe<Ee;pe++){let je=de[pe],Z=n.get(je);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),z(s.TEXTURE_2D,je,ue),be(O.__webglFramebuffer,y,je,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),M(je,ue)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?de=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,J.__webglTexture),z(de,v,ue),a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)be(O.__webglFramebuffer[pe],y,v,s.COLOR_ATTACHMENT0,de,pe);else be(O.__webglFramebuffer,y,v,s.COLOR_ATTACHMENT0,de,0);M(v,ue)&&x(de),t.unbindTexture()}y.depthBuffer&&ye(y)}function Lt(y){let v=m(y)||a,O=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0,Q=O.length;J<Q;J++){let $=O[J];if(M($,v)){let ue=y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,de=n.get($).__webglTexture;t.bindTexture(ue,de),x(ue),t.unbindTexture()}}}function Re(y){if(a&&y.samples>0&&ve(y)===!1){let v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],O=y.width,J=y.height,Q=s.COLOR_BUFFER_BIT,$=[],ue=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(y),pe=y.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){$.push(s.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&$.push(ue);let je=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(je===!1&&(y.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]),je===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ue])),pe){let Z=n.get(v[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);let je=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Pe(y){return Math.min(i.maxSamples,y.samples)}function ve(y){let v=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(y){let v=o.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function De(y,v){let O=y.colorSpace,J=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===hl||O!==Ht&&O!==vn&&(ht.getTransfer(O)===bt?a===!1?e.has("EXT_sRGB")===!0&&J===yn?(y.format=hl,y.minFilter=on,y.generateMipmaps=!1):v=ho.sRGBToLinear(v):(J!==yn||Q!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=I,this.resetTextureUnits=ae,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ve}function G0(s,e,t){let n=t.isWebGL2;function i(r,o=vn){let a,l=ht.getTransfer(o);if(r===fi)return s.UNSIGNED_BYTE;if(r===ku)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bf)return s.BYTE;if(r===Ef)return s.SHORT;if(r===Jl)return s.UNSIGNED_SHORT;if(r===Bu)return s.INT;if(r===ci)return s.UNSIGNED_INT;if(r===Kn)return s.FLOAT;if(r===sr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Sf)return s.ALPHA;if(r===yn)return s.RGBA;if(r===Tf)return s.LUMINANCE;if(r===wf)return s.LUMINANCE_ALPHA;if(r===Ni)return s.DEPTH_COMPONENT;if(r===bs)return s.DEPTH_STENCIL;if(r===hl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Af)return s.RED;if(r===Hu)return s.RED_INTEGER;if(r===Rf)return s.RG;if(r===Vu)return s.RG_INTEGER;if(r===Gu)return s.RGBA_INTEGER;if(r===Ea||r===Sa||r===Ta||r===wa)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kc||r===Jc||r===Zc||r===Qc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eh||r===th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===eh)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===th)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Aa||r===gh||r===_h)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Aa)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cf||r===xh||r===yh||r===vh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ii?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Sl=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$t=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tl=class extends kn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,M=[],x=[],T=new re,L=null,C=new kt;C.layers.enable(1),C.viewport=new _t;let R=new kt;R.layers.enable(2),R.viewport=new _t;let X=[C,R],E=new Sl;E.layers.enable(1),E.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=M[z];return Y===void 0&&(Y=new Qs,M[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=M[z];return Y===void 0&&(Y=new Qs,M[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=M[z];return Y===void 0&&(Y=new Qs,M[z]=Y),Y.getHandSpace()};function K(z){let Y=x.indexOf(z.inputSource);if(Y===-1)return;let fe=M[Y];fe!==void 0&&(fe.update(z.inputSource,z.frame,c||o),fe.dispatchEvent({type:z.type,data:z.inputSource}))}function ae(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",I);for(let z=0;z<M.length;z++){let Y=x[z];Y!==null&&(x[z]=null,M[z].disconnect(Y))}w=null,H=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,fe=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?bs:Ni,fe=_.stencil?Ii:ci);let be={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Zn(d.textureWidth,d.textureHeight,{format:yn,type:fi,depthTexture:new yo(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Oe=e.properties.get(p);Oe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(z){for(let Y=0;Y<z.removed.length;Y++){let fe=z.removed[Y],Ae=x.indexOf(fe);Ae>=0&&(x[Ae]=null,M[Ae].disconnect(fe))}for(let Y=0;Y<z.added.length;Y++){let fe=z.added[Y],Ae=x.indexOf(fe);if(Ae===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=x.length){x.push(fe),Ae=Oe;break}else if(x[Oe]===null){x[Oe]=fe,Ae=Oe;break}if(Ae===-1)break}let be=M[Ae];be&&be.connect(fe)}}let D=new S,G=new S;function q(z,Y,fe){D.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);let Ae=D.distanceTo(G),be=Y.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,ke=be[14]/(be[10]-1),ye=be[14]/(be[10]+1),We=(be[9]+1)/be[5],U=(be[9]-1)/be[5],Lt=(be[8]-1)/be[0],Re=(Oe[8]+1)/Oe[0],Pe=ke*Lt,ve=ke*Re,rt=Ae/(-Lt+Re),De=rt*-Lt;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(De),z.translateZ(rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let y=ke+rt,v=ye+rt,O=Pe-De,J=ve+(Ae-De),Q=We*ye/v*y,$=U*ye/v*y;z.projectionMatrix.makePerspective(O,J,Q,$,y,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function j(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;E.near=R.near=C.near=z.near,E.far=R.far=C.far=z.far,(w!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,H=E.far);let Y=z.parent,fe=E.cameras;j(E,Y);for(let Ae=0;Ae<fe.length;Ae++)j(fe[Ae],Y);fe.length===2?q(E,C,R):E.projectionMatrix.copy(C.projectionMatrix),W(z,E,Y)};function W(z,Y,fe){fe===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(fe.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ss*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let ee=null;function ne(z,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ae=!1;fe.length!==E.cameras.length&&(E.cameras.length=0,Ae=!0);for(let be=0;be<fe.length;be++){let Oe=fe[be],ke=null;if(f!==null)ke=f.getViewport(Oe);else{let We=h.getViewSubImage(d,Oe);ke=We.viewport,be===0&&(e.setRenderTargetTextures(p,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(p))}let ye=X[be];ye===void 0&&(ye=new kt,ye.layers.enable(be),ye.viewport=new _t,X[be]=ye),ye.matrix.fromArray(Oe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Oe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ke.x,ke.y,ke.width,ke.height),be===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ae===!0&&E.cameras.push(ye)}}for(let fe=0;fe<M.length;fe++){let Ae=x[fe],be=M[fe];Ae!==null&&be!==void 0&&be.update(Ae,Y,c||o)}ee&&ee(z,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let he=new Zu;he.setAnimationLoop(ne),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}};function X0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j0(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){let T=x.program;n.uniformBlockBinding(M,T)}function c(M,x){let T=i[M.id];T===void 0&&(g(M),T=u(M),i[M.id]=T,M.addEventListener("dispose",m));let L=x.program;n.updateUBOMapping(M,L);let C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function u(M){let x=h();M.__bindingPointIndex=x;let T=s.createBuffer(),L=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=i[M.id],T=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,R=T.length;C<R;C++){let X=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,w=X.length;E<w;E++){let H=X[E];if(f(H,C,E,L)===!0){let K=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value],I=0;for(let D=0;D<ae.length;D++){let G=ae[D],q=_(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,K+I,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,T,L){let C=M.value,R=x+"_"+T;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{let X=L[R];if(typeof C=="number"||typeof C=="boolean"){if(X!==C)return L[R]=C,!0}else if(X.equals(C)===!1)return X.copy(C),!0}return!1}function g(M){let x=M.uniforms,T=0,L=16;for(let R=0,X=x.length;R<X;R++){let E=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,H=E.length;w<H;w++){let K=E[w],ae=Array.isArray(K.value)?K.value:[K.value];for(let I=0,D=ae.length;I<D;I++){let G=ae[I],q=_(G),j=T%L;j!==0&&L-j<q.boundary&&(T+=L-j),K.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=q.storage}}}let C=T%L;return C>0&&(T+=L-C),M.__size=T,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var cr=class{constructor(e={}){let{canvas:t=tp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;let x=this,T=!1,L=0,C=0,R=null,X=-1,E=null,w=new _t,H=new _t,K=null,ae=new Ne(0),I=0,D=t.width,G=t.height,q=1,j=null,W=null,ee=new _t(0,0,D,G),ne=new _t(0,0,D,G),he=!1,z=new ar,Y=!1,fe=!1,Ae=null,be=new Je,Oe=new re,ke=new S,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?q:1}let U=n;function Lt(b,N){for(let F=0;F<b.length;F++){let k=b[F],B=t.getContext(k,N);if(B!==null)return B}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),U=Lt(N,b),U===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Re,Pe,ve,rt,De,y,v,O,J,Q,$,ue,de,pe,Ee,je,Z,at,Ue,ze,Se,me,A,ie;function Te(){Re=new u_(U),Pe=new r_(U,Re,e),Re.init(Pe),me=new G0(U,Re,Pe),ve=new H0(U,Re,Pe),rt=new p_(U),De=new C0,y=new V0(U,Re,ve,De,Pe,me,rt),v=new a_(x),O=new h_(x),J=new bp(U,Pe),A=new i_(U,Re,J,Pe),Q=new d_(U,J,rt,A),$=new x_(U,Q,J,rt),Ue=new __(U,Pe,y),je=new o_(De),ue=new R0(x,v,O,Re,Pe,A,je),de=new X0(x,De),pe=new L0,Ee=new F0(Re,Pe),at=new n_(x,v,O,ve,$,d,l),Z=new z0(x,$,Pe),ie=new j0(U,rt,Pe,ve),ze=new s_(U,Re,rt,Pe),Se=new f_(U,Re,rt,Pe),rt.programs=ue.programs,x.capabilities=Pe,x.extensions=Re,x.properties=De,x.renderLists=pe,x.shadowMap=Z,x.state=ve,x.info=rt}Te();let xe=new Tl(x,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(D,G,!1))},this.getSize=function(b){return b.set(D,G)},this.setSize=function(b,N,F=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,G=N,t.width=Math.floor(b*q),t.height=Math.floor(N*q),F===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(D*q,G*q).floor()},this.setDrawingBufferSize=function(b,N,F){D=b,G=N,q=F,t.width=Math.floor(b*F),t.height=Math.floor(N*F),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,N,F,k){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,N,F,k),ve.viewport(w.copy(ee).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,N,F,k){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,N,F,k),ve.scissor(H.copy(ne).multiplyScalar(q).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){ve.setScissorTest(he=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(b=!0,N=!0,F=!0){let k=0;if(b){let B=!1;if(R!==null){let ge=R.texture.format;B=ge===Gu||ge===Vu||ge===Hu}if(B){let ge=R.texture.type,Me=ge===fi||ge===ci||ge===Jl||ge===Ii||ge===ku||ge===zu,Ce=at.getClearColor(),Ie=at.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,Xe=Ce.b;Me?(f[0]=Ve,f[1]=Ge,f[2]=Xe,f[3]=Ie,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Ve,g[1]=Ge,g[2]=Xe,g[3]=Ie,U.clearBufferiv(U.COLOR,0,g))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT),F&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",se,!1),pe.dispose(),Ee.dispose(),De.dispose(),v.dispose(),O.dispose(),$.dispose(),A.dispose(),ie.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",vt),xe.removeEventListener("sessionend",He),Ae&&(Ae.dispose(),Ae=null),Mt.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=rt.autoReset,N=Z.enabled,F=Z.autoUpdate,k=Z.needsUpdate,B=Z.type;Te(),rt.autoReset=b,Z.enabled=N,Z.autoUpdate=F,Z.needsUpdate=k,Z.type=B}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){let N=b.target;N.removeEventListener("dispose",oe),Le(N)}function Le(b){we(b),De.remove(b)}function we(b){let N=De.get(b).programs;N!==void 0&&(N.forEach(function(F){ue.releaseProgram(F)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,F,k,B,ge){N===null&&(N=ye);let Me=B.isMesh&&B.matrixWorld.determinant()<0,Ce=At(b,N,F,k,B);ve.setMaterial(k,Me);let Ie=F.index,Ve=1;if(k.wireframe===!0){if(Ie=Q.getWireframeAttribute(F),Ie===void 0)return;Ve=2}let Ge=F.drawRange,Xe=F.attributes.position,wt=Ge.start*Ve,Zt=(Ge.start+Ge.count)*Ve;ge!==null&&(wt=Math.max(wt,ge.start*Ve),Zt=Math.min(Zt,(ge.start+ge.count)*Ve)),Ie!==null?(wt=Math.max(wt,0),Zt=Math.min(Zt,Ie.count)):Xe!=null&&(wt=Math.max(wt,0),Zt=Math.min(Zt,Xe.count));let It=Zt-wt;if(It<0||It===1/0)return;A.setup(B,k,Ce,F,Ie);let gn,xt=ze;if(Ie!==null&&(gn=J.get(Ie),xt=Se,xt.setIndex(gn)),B.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*We()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(B.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),ve.setLineWidth(Ze*We()),B.isLineSegments?xt.setMode(U.LINES):B.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else B.isPoints?xt.setMode(U.POINTS):B.isSprite&&xt.setMode(U.TRIANGLES);if(B.isBatchedMesh)xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)xt.renderInstances(wt,It,B.count);else if(F.isInstancedBufferGeometry){let Ze=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,st=Math.min(F.instanceCount,Ze);xt.renderInstances(wt,It,st)}else xt.render(wt,It)};function tt(b,N,F){b.transparent===!0&&b.side===zt&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,le(b,N,F),b.side=Bn,b.needsUpdate=!0,le(b,N,F),b.side=zt):le(b,N,F)}this.compile=function(b,N,F=null){F===null&&(F=b),m=Ee.get(F),m.init(),M.push(m),F.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==F&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let k=new Set;return b.traverse(function(B){let ge=B.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let Ce=ge[Me];tt(Ce,F,B),k.add(Ce)}else tt(ge,F,B),k.add(ge)}),M.pop(),m=null,k},this.compileAsync=function(b,N,F=null){let k=this.compile(b,N,F);return new Promise(B=>{function ge(){if(k.forEach(function(Me){De.get(Me).currentProgram.isReady()&&k.delete(Me)}),k.size===0){B(b);return}setTimeout(ge,10)}Re.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let nt=null;function $e(b){nt&&nt(b)}function vt(){Mt.stop()}function He(){Mt.start()}let Mt=new Zu;Mt.setAnimationLoop($e),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(b){nt=b,xe.setAnimationLoop(b),b===null?Mt.stop():Mt.start()},xe.addEventListener("sessionstart",vt),xe.addEventListener("sessionend",He),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,R),m=Ee.get(b,M.length),m.init(),M.push(m),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(be),fe=this.localClippingEnabled,Y=je.init(this.clippingPlanes,fe),_=pe.get(b,p.length),_.init(),p.push(_),Xt(b,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,W),this.info.render.frame++,Y===!0&&je.beginShadows();let F=m.state.shadowsArray;if(Z.render(F,b,N),Y===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(_,b),m.setupLights(x._useLegacyLights),N.isArrayCamera){let k=N.cameras;for(let B=0,ge=k.length;B<ge;B++){let Me=k[B];zs(_,b,Me,Me.viewport)}}else zs(_,b,N);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,N),A.resetDefaultState(),X=-1,E=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Xt(b,N,F,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){k&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);let Me=$.update(b),Ce=b.material;Ce.visible&&_.push(b,Me,Ce,F,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){let Me=$.update(b),Ce=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ke.copy(Me.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(Ce)){let Ie=Me.groups;for(let Ve=0,Ge=Ie.length;Ve<Ge;Ve++){let Xe=Ie[Ve],wt=Ce[Xe.materialIndex];wt&&wt.visible&&_.push(b,Me,wt,F,ke.z,Xe)}}else Ce.visible&&_.push(b,Me,Ce,F,ke.z,null)}}let ge=b.children;for(let Me=0,Ce=ge.length;Me<Ce;Me++)Xt(ge[Me],N,F,k)}function zs(b,N,F,k){let B=b.opaque,ge=b.transmissive,Me=b.transparent;m.setupLightsView(F),Y===!0&&je.setGlobalState(x.clippingPlanes,F),ge.length>0&&Un(B,ge,N,F),k&&ve.viewport(w.copy(k)),B.length>0&&V(B,N,F),ge.length>0&&V(ge,N,F),Me.length>0&&V(Me,N,F),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Un(b,N,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ge=Pe.isWebGL2;Ae===null&&(Ae=new Zn(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?sr:fi,minFilter:pi,samples:ge?4:0})),x.getDrawingBufferSize(Oe),ge?Ae.setSize(Oe.x,Oe.y):Ae.setSize(co(Oe.x),co(Oe.y));let Me=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(ae),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Ce=x.toneMapping;x.toneMapping=di,V(b,F,k),y.updateMultisampleRenderTarget(Ae),y.updateRenderTargetMipmap(Ae);let Ie=!1;for(let Ve=0,Ge=N.length;Ve<Ge;Ve++){let Xe=N[Ve],wt=Xe.object,Zt=Xe.geometry,It=Xe.material,gn=Xe.group;if(It.side===zt&&wt.layers.test(k.layers)){let xt=It.side;It.side=nn,It.needsUpdate=!0,_e(wt,F,k,Zt,It,gn),It.side=xt,It.needsUpdate=!0,Ie=!0}}Ie===!0&&(y.updateMultisampleRenderTarget(Ae),y.updateRenderTargetMipmap(Ae)),x.setRenderTarget(Me),x.setClearColor(ae,I),x.toneMapping=Ce}function V(b,N,F){let k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ge=b.length;B<ge;B++){let Me=b[B],Ce=Me.object,Ie=Me.geometry,Ve=k===null?Me.material:k,Ge=Me.group;Ce.layers.test(F.layers)&&_e(Ce,N,F,Ie,Ve,Ge)}}function _e(b,N,F,k,B,ge){b.onBeforeRender(x,N,F,k,B,ge),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,N,F,k,b,ge),B.transparent===!0&&B.side===zt&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,x.renderBufferDirect(F,N,k,B,b,ge),B.side=Bn,B.needsUpdate=!0,x.renderBufferDirect(F,N,k,B,b,ge),B.side=zt):x.renderBufferDirect(F,N,k,B,b,ge),b.onAfterRender(x,N,F,k,B,ge)}function le(b,N,F){N.isScene!==!0&&(N=ye);let k=De.get(b),B=m.state.lights,ge=m.state.shadowsArray,Me=B.state.version,Ce=ue.getParameters(b,B.state,ge,N,F),Ie=ue.getProgramCacheKey(Ce),Ve=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||k.environment),Ve===void 0&&(b.addEventListener("dispose",oe),Ve=new Map,k.programs=Ve);let Ge=Ve.get(Ie);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Me)return jt(b,Ce),Ge}else Ce.uniforms=ue.getUniforms(b),b.onBuild(F,Ce,x),b.onBeforeCompile(Ce,x),Ge=ue.acquireProgram(Ce,Ie),Ve.set(Ie,Ge),k.uniforms=Ce.uniforms;let Xe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=je.uniform),jt(b,Ce),k.needsLights=Kt(b),k.lightsStateVersion=Me,k.needsLights&&(Xe.ambientLightColor.value=B.state.ambient,Xe.lightProbe.value=B.state.probe,Xe.directionalLights.value=B.state.directional,Xe.directionalLightShadows.value=B.state.directionalShadow,Xe.spotLights.value=B.state.spot,Xe.spotLightShadows.value=B.state.spotShadow,Xe.rectAreaLights.value=B.state.rectArea,Xe.ltc_1.value=B.state.rectAreaLTC1,Xe.ltc_2.value=B.state.rectAreaLTC2,Xe.pointLights.value=B.state.point,Xe.pointLightShadows.value=B.state.pointShadow,Xe.hemisphereLights.value=B.state.hemi,Xe.directionalShadowMap.value=B.state.directionalShadowMap,Xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Xe.spotShadowMap.value=B.state.spotShadowMap,Xe.spotLightMatrix.value=B.state.spotLightMatrix,Xe.spotLightMap.value=B.state.spotLightMap,Xe.pointShadowMap.value=B.state.pointShadowMap,Xe.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Ge,k.uniformsList=null,Ge}function it(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function jt(b,N){let F=De.get(b);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function At(b,N,F,k,B){N.isScene!==!0&&(N=ye),y.resetTextureUnits();let ge=N.fog,Me=k.isMeshStandardMaterial?N.environment:null,Ce=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ht,Ie=(k.isMeshStandardMaterial?O:v).get(k.envMap||Me),Ve=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ge=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Xe=!!F.morphAttributes.position,wt=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color,It=di;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(It=x.toneMapping);let gn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xt=gn!==void 0?gn.length:0,Ze=De.get(k),st=m.state.lights;if(Y===!0&&(fe===!0||b!==E)){let _n=b===E&&k.id===X;je.setState(k,b,_n)}let ct=!1;k.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==st.state.version||Ze.outputColorSpace!==Ce||B.isBatchedMesh&&Ze.batching===!1||!B.isBatchedMesh&&Ze.batching===!0||B.isInstancedMesh&&Ze.instancing===!1||!B.isInstancedMesh&&Ze.instancing===!0||B.isSkinnedMesh&&Ze.skinning===!1||!B.isSkinnedMesh&&Ze.skinning===!0||B.isInstancedMesh&&Ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ze.instancingColor===!1&&B.instanceColor!==null||Ze.envMap!==Ie||k.fog===!0&&Ze.fog!==ge||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==je.numPlanes||Ze.numIntersection!==je.numIntersection)||Ze.vertexAlphas!==Ve||Ze.vertexTangents!==Ge||Ze.morphTargets!==Xe||Ze.morphNormals!==wt||Ze.morphColors!==Zt||Ze.toneMapping!==It||Pe.isWebGL2===!0&&Ze.morphTargetsCount!==xt)&&(ct=!0):(ct=!0,Ze.__version=k.version);let An=Ze.currentProgram;ct===!0&&(An=le(k,N,B));let Hs=!1,Ei=!1,va=!1,Qt=An.getUniforms(),Si=Ze.uniforms;if(ve.useProgram(An.program)&&(Hs=!0,Ei=!0,va=!0),k.id!==X&&(X=k.id,Ei=!0),Hs||E!==b){Qt.setValue(U,"projectionMatrix",b.projectionMatrix),Qt.setValue(U,"viewMatrix",b.matrixWorldInverse);let _n=Qt.map.cameraPosition;_n!==void 0&&_n.setValue(U,ke.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&Qt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Ei=!0,va=!0)}if(B.isSkinnedMesh){Qt.setOptional(U,B,"bindMatrix"),Qt.setOptional(U,B,"bindMatrixInverse");let _n=B.skeleton;_n&&(Pe.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Qt.setValue(U,"boneTexture",_n.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Qt.setOptional(U,B,"batchingTexture"),Qt.setValue(U,"batchingTexture",B._matricesTexture,y));let Ma=F.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&Pe.isWebGL2===!0)&&Ue.update(B,F,An),(Ei||Ze.receiveShadow!==B.receiveShadow)&&(Ze.receiveShadow=B.receiveShadow,Qt.setValue(U,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Si.envMap.value=Ie,Si.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ei&&(Qt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&qt(Si,va),ge&&k.fog===!0&&de.refreshFogUniforms(Si,ge),de.refreshMaterialUniforms(Si,k,q,G,Ae),ys.upload(U,it(Ze),Si,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ys.upload(U,it(Ze),Si,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qt.setValue(U,"center",B.center),Qt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Qt.setValue(U,"normalMatrix",B.normalMatrix),Qt.setValue(U,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let _n=k.uniformsGroups;for(let ba=0,zd=_n.length;ba<zd;ba++)if(Pe.isWebGL2){let Vc=_n[ba];ie.update(Vc,An),ie.bind(Vc,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function qt(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Kt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,F){De.get(b.texture).__webglTexture=N,De.get(b.depthTexture).__webglTexture=F;let k=De.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){let F=De.get(b);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,F=0){R=b,L=N,C=F;let k=!0,B=null,ge=!1,Me=!1;if(b){let Ie=De.get(b);Ie.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):Ie.__webglFramebuffer===void 0?y.setupRenderTarget(b):Ie.__hasExternalTextures&&y.rebindTextures(b,De.get(b.texture).__webglTexture,De.get(b.depthTexture).__webglTexture);let Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);let Ge=De.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?B=Ge[N][F]:B=Ge[N],ge=!0):Pe.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?B=De.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[F]:B=Ge,w.copy(b.viewport),H.copy(b.scissor),K=b.scissorTest}else w.copy(ee).multiplyScalar(q).floor(),H.copy(ne).multiplyScalar(q).floor(),K=he;if(ve.bindFramebuffer(U.FRAMEBUFFER,B)&&Pe.drawBuffers&&k&&ve.drawBuffers(b,B),ve.viewport(w),ve.scissor(H),ve.setScissorTest(K),ge){let Ie=De.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,F)}else if(Me){let Ie=De.get(b.texture),Ve=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,F||0,Ve)}X=-1},this.readRenderTargetPixels=function(b,N,F,k,B,ge,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=De.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ve.bindFramebuffer(U.FRAMEBUFFER,Ce);try{let Ie=b.texture,Ve=Ie.format,Ge=Ie.type;if(Ve!==yn&&me.convert(Ve)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ge===sr&&(Re.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==fi&&me.convert(Ge)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Kn&&(Pe.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&F>=0&&F<=b.height-B&&U.readPixels(N,F,k,B,me.convert(Ve),me.convert(Ge),ge)}finally{let Ie=R!==null?De.get(R).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,N,F=0){let k=Math.pow(2,-F),B=Math.floor(N.image.width*k),ge=Math.floor(N.image.height*k);y.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,b.x,b.y,B,ge),ve.unbindTexture()},this.copyTextureToTexture=function(b,N,F,k=0){let B=N.image.width,ge=N.image.height,Me=me.convert(F.format),Ce=me.convert(F.type);y.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,b.x,b.y,B,ge,Me,Ce,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,k,b.x,b.y,Me,Ce,N.image),k===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(b,N,F,k,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Ie=me.convert(k.format),Ve=me.convert(k.type),Ge;if(k.isData3DTexture)y.setTexture3D(k,0),Ge=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)y.setTexture2DArray(k,0),Ge=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Xe=U.getParameter(U.UNPACK_ROW_LENGTH),wt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Zt=U.getParameter(U.UNPACK_SKIP_PIXELS),It=U.getParameter(U.UNPACK_SKIP_ROWS),gn=U.getParameter(U.UNPACK_SKIP_IMAGES),xt=F.isCompressedTexture?F.mipmaps[B]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Ge,B,N.x,N.y,N.z,ge,Me,Ce,Ie,Ve,xt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ge,B,N.x,N.y,N.z,ge,Me,Ce,Ie,xt.data)):U.texSubImage3D(Ge,B,N.x,N.y,N.z,ge,Me,Ce,Ie,Ve,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gn),B===0&&k.generateMipmaps&&U.generateMipmap(Ge),ve.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,ve.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zl?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Di:ju}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Di?Et:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wl=class extends cr{};wl.prototype.isWebGL1Renderer=!0;var Rs=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new S,ur=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var hu=new S,uu=new _t,du=new _t,q0=new S,fu=new Je,Yr=new S,Ja=new pn,pu=new Je,Za=new In,vo=class extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(i),e.ray.intersectsSphere(Ja)!==!1&&(pu.copy(i).invert(),Za.copy(e.ray).applyMatrix4(pu),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;uu.fromBufferAttribute(i.attributes.skinIndex,e),du.fromBufferAttribute(i.attributes.skinWeight,e),hu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=du.getComponent(r);if(o!==0){let a=uu.getComponent(r);fu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q0.copy(hu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},dr=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Al=class extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ft,u=Ft,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mu=new Je,Y0=new Je,Mo=class s{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Y0;mu.multiplyMatrices(a,t[r]),mu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Al(t,e,e,yn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new dr),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Bi=class extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ds=new Je,gu=new Je,$r=[],_u=new mt,$0=new Je,js=new Ke,qs=new pn,bo=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),_u.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(_u)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),qs.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),gu.multiplyMatrices(n,ds),js.matrixWorld=gu,js.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){let l=$r[o];l.instanceId=r,l.object=this,t.push(l)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Nn=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xu=new S,yu=new S,vu=new Je,Qa=new In,Kr=new pn,an=class extends Ct{constructor(e=new gt,t=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xu.fromBufferAttribute(t,i-1),yu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xu.distanceTo(yu);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;vu.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,u=new S,h=new S,d=new S,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=p,T=M-1;x<T;x+=f){let L=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(m,L),u.fromBufferAttribute(m,C),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let X=e.ray.origin.distanceTo(d);X<e.near||X>e.far||t.push({distance:X,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=p,T=M-1;x<T;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Mu=new S,bu=new S,Eo=class extends an{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mu.distanceTo(bu);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Cs=class extends an{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fr=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eu=new Je,Rl=new In,Jr=new pn,Zr=new S,So=class extends Ct{constructor(e=new gt,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Eu.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Zr.fromBufferAttribute(h,m),Su(Zr,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Zr.fromBufferAttribute(h,g),Su(Zr,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Su(s,e,t,n,i,r,o){let a=Rl.distanceSqToPoint(s);if(a<t){let l=new S;Rl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var To=class extends Jt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new re:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],o=[],a=new S,l=new Je;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pr=class extends bn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new re,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends pr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Qr=new S,el=new tc,tl=new tc,nl=new tc,Pl=class extends bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Qr.subVectors(i[0],i[1]).add(i[0]),c=Qr);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),el.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),tl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),nl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),tl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),nl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(el.calc(l),tl.calc(l),nl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function K0(s,e){let t=1-s;return t*t*e}function J0(s,e){return 2*(1-s)*s*e}function Z0(s,e){return s*s*e}function er(s,e,t,n){return K0(s,e)+J0(s,t)+Z0(s,n)}function Q0(s,e){let t=1-s;return t*t*t*e}function ex(s,e){let t=1-s;return 3*t*t*s*e}function tx(s,e){return 3*(1-s)*s*s*e}function nx(s,e){return s*s*s*e}function tr(s,e,t,n,i){return Q0(s,e)+ex(s,t)+tx(s,n)+nx(s,i)}var wo=class extends bn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,i.x,r.x,o.x,a.x),tr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ll=class extends bn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,i.x,r.x,o.x,a.x),tr(e,i.y,r.y,o.y,a.y),tr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends bn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends bn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends bn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(er(e,i.x,r.x,o.x),er(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends bn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(er(e,i.x,r.x,o.x),er(e,i.y,r.y,o.y),er(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Tu(a,l.x,c.x,u.x,h.x),Tu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},wu=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:wo,CubicBezierCurve3:Ll,EllipseCurve:pr,LineCurve:Ao,LineCurve3:Il,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:Nl,SplineCurve:Co}),Dl=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new wu[i.type]().fromJSON(i))}return this}},Po=class extends Dl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ao(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ro(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new wo(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new pr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Lo=class s extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var mr=class extends Po{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Po().fromJSON(i))}return this}},ix={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=sd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=lx(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return gr(r,o,t,a,l,f,0),o}};function sd(s,e,t,n,i){let r,o;if(i===yx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Au(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Au(r,s[r],s[r+1],o);return o&&jo(o,o.next)&&(xr(o),o=o.next),o}function ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||Rt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&fx(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?rx(s,n,i,r):sx(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),xr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ox(ki(s),e,t),gr(s,e,t,n,i,r,2)):o===2&&ax(s,e,t,n,i,r):gr(ki(s),e,t,n,i,r,1);break}}}function sx(s){let e=s.prev,t=s,n=s.next;if(Rt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&gs(i,a,r,l,o,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rx(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Rt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ul(f,g,e,t,n),M=Ul(_,m,e,t,n),x=s.prevZ,T=s.nextZ;for(;x&&x.z>=p&&T&&T.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&gs(a,u,l,h,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==i&&T!==o&&gs(a,u,l,h,c,d,T.x,T.y)&&Rt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&gs(a,u,l,h,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=M;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==i&&T!==o&&gs(a,u,l,h,c,d,T.x,T.y)&&Rt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ox(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!jo(i,r)&&rd(i,n,n.next,r)&&_r(i,r)&&_r(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xr(n),xr(n.next),n=s=r),n=n.next}while(n!==s);return ki(n)}function ax(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gx(o,a)){let l=od(o,a);o=ki(o,o.next),l=ki(l,l.next),gr(o,e,t,n,i,r,0),gr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function lx(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=sd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(mx(c));for(i.sort(cx),r=0;r<i.length;r++)t=hx(i[r],t);return t}function cx(s,e){return s.x-e.x}function hx(s,e){let t=ux(s,e);if(!t)return e;let n=od(t,s);return ki(n,n.next),ki(t,t.next)}function ux(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&gs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),_r(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&dx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function dx(s,e){return Rt(s.prev,s,e.prev)<0&&Rt(e.next,s,s.next)<0}function fx(s,e,t,n){let i=s;do i.z===0&&(i.z=Ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,px(i)}function px(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Ul(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function mx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function gx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!_x(s,e)&&(_r(s,e)&&_r(e,s)&&xx(s,e)&&(Rt(s.prev,s,e.prev)||Rt(s,e.prev,e))||jo(s,e)&&Rt(s.prev,s,s.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function jo(s,e){return s.x===e.x&&s.y===e.y}function rd(s,e,t,n){let i=to(Rt(s,e,t)),r=to(Rt(s,e,n)),o=to(Rt(t,n,s)),a=to(Rt(t,n,e));return!!(i!==r&&o!==a||i===0&&eo(s,t,e)||r===0&&eo(s,n,e)||o===0&&eo(t,s,n)||a===0&&eo(t,e,n))}function eo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function to(s){return s>0?1:s<0?-1:0}function _x(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function _r(s,e){return Rt(s.prev,s,s.next)<0?Rt(s,e,s.next)>=0&&Rt(s,s.prev,e)>=0:Rt(s,e,s.prev)<0||Rt(s,s.next,e)<0}function xx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function od(s,e){let t=new Ol(s.i,s.x,s.y),n=new Ol(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Au(s,e,t,n){let i=new Ol(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ol(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var nr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ru(e),Cu(n,e);let o=e.length;t.forEach(Ru);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Cu(n,t[l]);let a=ix.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ru(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Cu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Io=class s extends gt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new S,g=new re;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let M=p+m,x=M,T=M+n+1,L=M+n+2,C=M+1;a.push(x,T,C),a.push(T,L,C)}}this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},No=class s extends gt{constructor(e=new mr([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ft(i,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;nr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];nr.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=nr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){let M=_[m],x=M[0]+h,T=M[1]+h,L=M[2]+h;n.push(x,T,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vx(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function vx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var mi=class s extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new S,d=new S,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],x=p/n,T=0;p===0&&o===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let L=0;L<=t;L++){let C=L/t;h.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+T,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let x=u[p][M+1],T=u[p][M],L=u[p+1][M],C=u[p+1][M+1];(p!==0||o>0)&&f.push(x,T,C),(p!==n-1||l<Math.PI)&&f.push(T,L,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Do=class s extends gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ei=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ps=class extends Nn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function no(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ad(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=e,a=2*t-n;break;case Eh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=e,l=2*n-t;break;case Eh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,T=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+M*o[c+L]+x*o[l+L]+T*o[h+L];return r}},Bl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},kl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Oi:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Oi;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Mx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Oi;var _i=class extends Sn{};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Es;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Sn{};Uo.prototype.ValueTypeName="color";var ti=class extends Sn{};ti.prototype.ValueTypeName="number";var zl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Dt.slerpFlat(r,0,o,c-a,o,c,l);return r}},zn=class extends Sn{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};zn.prototype.ValueTypeName="quaternion";zn.prototype.DefaultInterpolation=Oi;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends Sn{};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Es;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends Sn{};ni.prototype.ValueTypeName="vector";var Oo=class{constructor(e,t=-1,n,i=Pf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=bx(l);l=Pu(l,1,u),c=Pu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ti(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,_){if(f.length!==0){let m=[],p=[];ad(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ti(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ni,f+".position",d,"pos",i),n(zn,f+".quaternion",d,"rot",i),n(ni,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ex(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return Uo;case"quaternion":return zn;case"bool":case"boolean":return _i;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ex(s.type);if(s.times===void 0){let t=[],n=[];ad(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Hl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Tx=new Hl,ii=class{constructor(e){this.manager=e!==void 0?e:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Vl=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends ii{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Yn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:x,value:T})=>{if(x)p.close();else{_+=T.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,R=u.length;C<R;C++){let X=u[C];X.onProgress&&X.onProgress(L)}p.enqueue(T),M()}})}}});return new Response(m)}else throw new Vl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{hi.add(e,c);let u=Yn[e];delete Yn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Gl=class extends ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=rr("img");function l(){u(),hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Fo=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=new Jt,o=new Gl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ls=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Bo=class extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},il=new Je,Lu=new S,Iu=new S,vr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=class extends vr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ko=class extends Ls{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nu=new Je,Ys=new S,sl=new S,Xl=class extends vr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),sl.copy(n.position),sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sl),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}},Is=class extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jl=class extends vr{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zo=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(e,l),r.manager.itemStart(e)}};var nc="\\[\\]\\.:\\/",wx=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Ax="[^"+nc.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",ic),Cx=/(WCOD+)?/.source.replace("WCOD",Ax),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Ix=new RegExp("^"+Rx+Cx+Px+Lx+"$"),Nx=["material","materials","bones","map"],ql=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=ql;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var Ho=class{constructor(e,t,n=0,i=1/0){this.ray=new In(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Yl(e[i],this,n,t);return n.sort(Du),n}};function Du(s,e){return s.distance-e.distance}function Yl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Yl(i[r],e,t,!0)}}var Hn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ld={type:"change"},sc={type:"start"},cd={type:"end"},qo=new In,hd=new Ln,Dx=Math.cos(70*qe.DEG2RAD),Yo=class extends kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ee),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ld),n.update(),r=i.NONE},this.update=(function(){let A=new S,ie=new Dt().setFromUnitVectors(e.up,new S(0,1,0)),Te=ie.clone().invert(),xe=new S,te=new Dt,P=new S,se=2*Math.PI;return function(Le=null){let we=n.object.position;A.copy(we).sub(n.target),A.applyQuaternion(ie),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&K(w(Le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let tt=n.minAzimuthAngle,nt=n.maxAzimuthAngle;isFinite(tt)&&isFinite(nt)&&(tt<-Math.PI?tt+=se:tt>Math.PI&&(tt-=se),nt<-Math.PI?nt+=se:nt>Math.PI&&(nt-=se),tt<=nt?a.theta=Math.max(tt,Math.min(nt,a.theta)):a.theta=a.theta>(tt+nt)/2?Math.max(tt,a.theta):Math.min(nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Te),we.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let $e=!1;if(n.zoomToCursor&&C){let vt=null;if(n.object.isPerspectiveCamera){let He=A.length();vt=ee(He*c);let Mt=He-vt;n.object.position.addScaledVector(T,Mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let He=new S(L.x,L.y,0);He.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$e=!0;let Mt=new S(L.x,L.y,0);Mt.unproject(n.object),n.object.position.sub(Mt).add(He),n.object.updateMatrixWorld(),vt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(vt).add(n.object.position):(qo.origin.copy(n.object.position),qo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qo.direction))<Dx?e.lookAt(n.target):(hd.setFromNormalAndCoplanarPoint(n.object.up,n.target),qo.intersectPlane(hd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$e=!0);return c=1,C=!1,$e||xe.distanceToSquared(n.object.position)>o||8*(1-te.dot(n.object.quaternion))>o||P.distanceToSquared(n.target)>0?(n.dispatchEvent(ld),xe.copy(n.object.position),te.copy(n.object.quaternion),P.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",at),n.domElement.removeEventListener("pointerdown",y),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new Hn,l=new Hn,c=1,u=new S,h=new re,d=new re,f=new re,g=new re,_=new re,m=new re,p=new re,M=new re,x=new re,T=new S,L=new re,C=!1,R=[],X={},E=!1;function w(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function H(A){let ie=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*ie)}function K(A){l.theta-=A}function ae(A){l.phi-=A}let I=(function(){let A=new S;return function(Te,xe){A.setFromMatrixColumn(xe,0),A.multiplyScalar(-Te),u.add(A)}})(),D=(function(){let A=new S;return function(Te,xe){n.screenSpacePanning===!0?A.setFromMatrixColumn(xe,1):(A.setFromMatrixColumn(xe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Te),u.add(A)}})(),G=(function(){let A=new S;return function(Te,xe){let te=n.domElement;if(n.object.isPerspectiveCamera){let P=n.object.position;A.copy(P).sub(n.target);let se=A.length();se*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Te*se/te.clientHeight,n.object.matrix),D(2*xe*se/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Te*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),D(xe*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function q(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(A,ie){if(!n.zoomToCursor)return;C=!0;let Te=n.domElement.getBoundingClientRect(),xe=A-Te.left,te=ie-Te.top,P=Te.width,se=Te.height;L.x=xe/P*2-1,L.y=-(te/se)*2+1,T.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function ne(A){h.set(A.clientX,A.clientY)}function he(A){W(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function z(A){g.set(A.clientX,A.clientY)}function Y(A){d.set(A.clientX,A.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let ie=n.domElement;K(2*Math.PI*f.x/ie.clientHeight),ae(2*Math.PI*f.y/ie.clientHeight),h.copy(d),n.update()}function fe(A){M.set(A.clientX,A.clientY),x.subVectors(M,p),x.y>0?q(H(x.y)):x.y<0&&j(H(x.y)),p.copy(M),n.update()}function Ae(A){_.set(A.clientX,A.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(_),n.update()}function be(A){W(A.clientX,A.clientY),A.deltaY<0?j(H(A.deltaY)):A.deltaY>0&&q(H(A.deltaY)),n.update()}function Oe(A){let ie=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?ae(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?ae(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ie=!0;break}ie&&(A.preventDefault(),n.update())}function ke(A){if(R.length===1)h.set(A.pageX,A.pageY);else{let ie=me(A),Te=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);h.set(Te,xe)}}function ye(A){if(R.length===1)g.set(A.pageX,A.pageY);else{let ie=me(A),Te=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);g.set(Te,xe)}}function We(A){let ie=me(A),Te=A.pageX-ie.x,xe=A.pageY-ie.y,te=Math.sqrt(Te*Te+xe*xe);p.set(0,te)}function U(A){n.enableZoom&&We(A),n.enablePan&&ye(A)}function Lt(A){n.enableZoom&&We(A),n.enableRotate&&ke(A)}function Re(A){if(R.length==1)d.set(A.pageX,A.pageY);else{let Te=me(A),xe=.5*(A.pageX+Te.x),te=.5*(A.pageY+Te.y);d.set(xe,te)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let ie=n.domElement;K(2*Math.PI*f.x/ie.clientHeight),ae(2*Math.PI*f.y/ie.clientHeight),h.copy(d)}function Pe(A){if(R.length===1)_.set(A.pageX,A.pageY);else{let ie=me(A),Te=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);_.set(Te,xe)}m.subVectors(_,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(_)}function ve(A){let ie=me(A),Te=A.pageX-ie.x,xe=A.pageY-ie.y,te=Math.sqrt(Te*Te+xe*xe);M.set(0,te),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),q(x.y),p.copy(M);let P=(A.pageX+ie.x)*.5,se=(A.pageY+ie.y)*.5;W(P,se)}function rt(A){n.enableZoom&&ve(A),n.enablePan&&Pe(A)}function De(A){n.enableZoom&&ve(A),n.enableRotate&&Re(A)}function y(A){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",O)),Ue(A),A.pointerType==="touch"?je(A):J(A))}function v(A){n.enabled!==!1&&(A.pointerType==="touch"?Z(A):Q(A))}function O(A){ze(A),R.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(cd),r=i.NONE}function J(A){let ie;switch(A.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Hi.DOLLY:if(n.enableZoom===!1)return;he(A),r=i.DOLLY;break;case Hi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;z(A),r=i.PAN}else{if(n.enableRotate===!1)return;ne(A),r=i.ROTATE}break;case Hi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;ne(A),r=i.ROTATE}else{if(n.enablePan===!1)return;z(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(sc)}function Q(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Y(A);break;case i.DOLLY:if(n.enableZoom===!1)return;fe(A);break;case i.PAN:if(n.enablePan===!1)return;Ae(A);break}}function $(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(sc),be(ue(A)),n.dispatchEvent(cd))}function ue(A){let ie=A.deltaMode,Te={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ie){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return A.ctrlKey&&!E&&(Te.deltaY*=10),Te}function de(A){A.key==="Control"&&(E=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(A){A.key==="Control"&&(E=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Ee(A){n.enabled===!1||n.enablePan===!1||Oe(A)}function je(A){switch(Se(A),R.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;ke(A),r=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;ye(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(A),r=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(sc)}function Z(A){switch(Se(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Pe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(A),n.update();break;default:r=i.NONE}}function at(A){n.enabled!==!1&&A.preventDefault()}function Ue(A){R.push(A.pointerId)}function ze(A){delete X[A.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie]==A.pointerId){R.splice(ie,1);return}}function Se(A){let ie=X[A.pointerId];ie===void 0&&(ie=new re,X[A.pointerId]=ie),ie.set(A.pageX,A.pageY)}function me(A){let ie=A.pointerId===R[0]?R[1]:R[0];return X[ie]}n.domElement.addEventListener("contextmenu",at),n.domElement.addEventListener("pointerdown",y),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",$,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}};function rc(s,e){if(e===Xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Mr||e===Go){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Mr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var $o=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dc(t)}),this.register(function(t){return new Mc(t)}),this.register(function(t){return new bc(t)}),this.register(function(t){return new Ec(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new _c(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new xc(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new vc(t)}),this.register(function(t){return new yc(t)}),this.register(function(t){return new cc(t)}),this.register(function(t){return new Sc(t)}),this.register(function(t){return new Tc(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=yi.extractUrlBase(e);o=yi.resolveURL(c,this.path)}else o=yi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new yr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===md){try{o[ot.KHR_BINARY_GLTF]=new wc(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Nc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new hc;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ac(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new Rc;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Cc;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Ux(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cc=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Is(u),c.distance=h;break;case"spot":c=new ko(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},hc=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},uc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},dc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},fc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},pc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},mc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},gc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}},_c=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},yc=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},vc=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Mc=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bc=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ec=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sc=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Tc=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new Je,m=new S,p=new Dt,M=new S(1,1,1),x=new bo(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),x.setMatrixAt(T,_.compose(m,p,M));for(let T in l)if(T==="_COLOR_0"){let L=l[T];x.instanceColor=new Bi(L.array,L.itemSize,L.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);Ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},md="glTF",br=12,ud={JSON:1313821514,BIN:5130562},wc=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-br,r=new DataView(e,br),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ud.JSON){let c=new Uint8Array(e,br+o,a);this.content=n.decode(c)}else if(l===ud.BIN){let c=br+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ac=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Lc[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Lc[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Ds[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Ht,d)})})}},Rc=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cc=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Ko=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,x=p-d+h;for(let T=0;T!==a;T++){let L=o[_+T+a],C=o[_+T+l]*u,R=o[g+T+a],X=o[g+T]*u;r[T]=M*L+x*C+m*R+p*X}return r}},Ox=new Dt,Pc=class extends Ko{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Ox.fromArray(r).normalize().toArray(r),r}},Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dd={9728:Ft,9729:on,9984:so,9985:Kl,9986:$s,9987:pi},fd={33071:fn,33648:ir,10497:Ui},oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fx={CUBICSPLINE:void 0,LINEAR:Oi,STEP:Es},ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Bx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function Gi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function zx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hx(s){let e,t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lc(t.attributes):e=s.indices+":"+lc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+lc(s.targets[n]);return e}function lc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ic(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Gx=new Je,Nc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ux,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Fo(this.options.manager):this.textureLoader=new zo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gi(r,a,i),Mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(yi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=oc[i.type],a=Ds[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Nt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=oc[i.type],c=Ds[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(M);x||(_=new c(a,p*f,i.count*f/u),x=new hr(_,f/u),t.cache.add(M,x)),m=new ur(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Nt(_,l,g);if(i.sparse!==void 0){let p=oc.SCALAR,M=Ds[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,L=new M(o[1],x,i.sparse.count*p),C=new c(o[2],T,i.sparse.count*l);a!==null&&(m=new Nt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,X=L.length;R<X;R++){let E=L[R];if(m.setX(E,C[R*l]),l>=2&&m.setY(E,C[R*l+1]),l>=3&&m.setZ(E,C[R*l+2]),l>=4&&m.setW(E,C[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=dd[d.magFilter]||on,u.minFilter=dd[d.minFilter]||pi,u.wrapS=fd[d.wrapS]||Ui,u.wrapT=fd[d.wrapT]||Ui,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Jt(_);m.needsUpdate=!0,d(m)}),t.load(yi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||Vx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new fr,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Nn,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ei}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zt);let u=r.alphaMode||ac.OPAQUE;if(u===ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ac.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==St){let h=r.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],Ht)}return r.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gi(i,h,r),h})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pd(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Hx(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=pd(new gt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Bx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=o[f],p,M=c[f];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new vo(_,M):new Ke(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=rc(p.geometry,Go):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=rc(p.geometry,Mr));else if(m.mode===Tn.LINES)p=new Eo(_,M);else if(m.mode===Tn.LINE_STRIP)p=new an(_,M);else if(m.mode===Tn.LINE_LOOP)p=new Cs(_,M);else if(m.mode===Tn.POINTS)p=new So(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mi(p,r),m.extensions&&Gi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Gi(i,h[0],r),h[0];let d=new $t;r.extensions&&Gi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(qe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ws(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mo(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,x=d.length;M<x;M++){let T=d[M],L=f[M],C=g[M],R=_[M],X=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let E=n._createAnimationTracks(T,L,C,R,X);if(E)for(let w=0;w<E.length;w++)p.push(E[w])}return new Oo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Gx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new dr:c.length>1?u=new $t:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Mi(u,r),r.extensions&&Gi(n,u,r),r.matrix!==void 0){let h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new $t;n.name&&(r.name=i.createUniqueName(n.name)),Mi(r,n),n.extensions&&Gi(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof mn||d instanceof Jt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=ti;break;case vi.rotation:c=zn;break;case vi.position:case vi.scale:c=ni;break;default:switch(n.itemSize){case 1:c=ti;break;case 2:case 3:default:c=ni;break}break}let u=i.interpolation!==void 0?Fx[i.interpolation]:Oi,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+vi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ic(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof zn?Pc:Ko;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wx(s,e,t){let n=e.attributes,i=new mt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){let u=Ic(Ds[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new S,l=new S;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Ic(Ds[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function pd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Lc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Mi(s,e),Wx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?kx(s,e.targets,t):s})}var Jo=class extends Rs{constructor(e=null){super();let t=new Fi;t.deleteAttribute("uv");let n=new ei({side:nn}),i=new ei,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Is(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ke(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ke(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ke(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new Ke(t,i);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let h=new Ke(t,i);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let d=new Ke(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Ke(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Ke(t,Us(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Ke(t,Us(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Ke(t,Us(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Ke(t,Us(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let M=new Ke(t,Us(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let x=new Ke(t,Us(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Us(s){let e=new St;return e.color.setScalar(s),e}function gd(s,e=[]){let t={links:new Map,joints:new Map,linkToJoint:new Map,jointToLink:new Map,meshesByLink:new Map,pickableMeshes:[]};s.traverse(n=>{(n.userData.urdf_link===!0||n.name==="pelvis"||n.name.endsWith("_link")||n.name.endsWith("_rubber_hand"))&&(n.userData.linkName=n.name,t.links.set(n.name,n)),n.name.endsWith("_joint")&&Array.isArray(n.userData.axis)&&t.joints.set(n.name,n)});for(let[n,i]of t.links){let r=i.parent;r!=null&&r.name.endsWith("_joint")&&t.linkToJoint.set(n,r),r&&t.joints.has(r.name)&&t.jointToLink.set(r.name,i)}s.traverse(n=>{if(!n.isMesh)return;let i=n;for(;i&&!i.userData.linkName;)i=i.parent;if(!i)return;let r=String(i.userData.linkName);n.userData.linkName=r;let o=t.meshesByLink.get(r)??[];o.push(n),t.meshesByLink.set(r,o);let a=t.linkToJoint.get(r);a&&t.joints.has(a.name)&&(n.userData.interactiveLink=!0,t.pickableMeshes.push(n))});for(let n of e){let i=t.links.get(n.name);i&&(i.userData.mass=n.mass,i.userData.centerOfMass=n.centerOfMass)}return s.updateMatrixWorld(!0),t}var Zo={targetJointName:"left_knee_joint",targetLinkName:"left_knee_link",jointNames:{leftHipPitch:"left_hip_pitch_joint",leftKnee:"left_knee_joint",leftAnklePitch:"left_ankle_pitch_joint",rightHipPitch:"right_hip_pitch_joint",rightKnee:"right_knee_joint",rightAnklePitch:"right_ankle_pitch_joint",supportFoot:"right_ankle_roll_link",movingFoot:"left_ankle_roll_link",root:"pelvis"},motion:{ankleCompensationRatio:-.6,hipCompensationRatio:-.4,supportKneeDegrees:80,supportAnklePitchDegrees:-40,maximumPelvisDropMeters:.08,automaticTargetDegrees:45,transitionSeconds:1.15},safety:{supportMarginMeters:.018,footContactHeightMeters:.008,collisionMarginMeters:.025,scanStepDegrees:5,updateIntervalSeconds:.1,collisionPairs:[{id:"lower-legs",first:"left_knee_link",second:"right_knee_link",label:"\u5DE6\u53F3\u5C0F\u817F"},{id:"feet",first:"left_ankle_roll_link",second:"right_ankle_roll_link",label:"\u5DE6\u53F3\u811A\u90E8"},{id:"left-thigh-knee",first:"left_hip_yaw_link",second:"left_knee_link",label:"\u5DE6\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},{id:"right-thigh-knee",first:"right_hip_yaw_link",second:"right_knee_link",label:"\u53F3\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},...["left","right"].flatMap(s=>{let e=s==="left"?"\u5DE6":"\u53F3";return[{id:`${s}-forearm-torso`,first:`${s}_elbow_link`,second:"torso_link",label:`${e}\u5C0F\u81C2\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-wrist-torso`,first:`${s}_wrist_pitch_link`,second:"torso_link",label:`${e}\u8155\u90E8\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-thigh-torso`,first:`${s}_hip_yaw_link`,second:"torso_link",label:`${e}\u5927\u817F\u4E0E\u8EAF\u5E72`,marginMeters:.01},...["left","right"].flatMap(t=>[{id:`${s}-upper-${t}-thigh`,first:`${s}_shoulder_yaw_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5927\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012},{id:`${s}-forearm-${t}-thigh`,first:`${s}_elbow_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5C0F\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012}])]})],collisionProxyScale:{left_hip_yaw_link:[.85,.45,.85],right_hip_yaw_link:[.85,.45,.85],left_knee_link:[.9,.6,.9],right_knee_link:[.9,.6,.9],left_ankle_roll_link:[1,.9,1],right_ankle_roll_link:[1,.9,1],torso_link:[.9,.92,.9],left_shoulder_yaw_link:[.88,.88,.88],right_shoulder_yaw_link:[.88,.88,.88],left_elbow_link:[.92,.9,.9],right_elbow_link:[.92,.9,.9],left_wrist_pitch_link:[.92,.9,.9],right_wrist_pitch_link:[.92,.9,.9]}},click:{maximumDistancePixels:5,maximumDurationMilliseconds:300},servoSeconds:.12,fallDelaySeconds:.5,discoveryChain:{id:"left-leg",label:"\u5DE6\u817F \xB7 \u9ACB\u2014\u819D\u2014\u8E1D",joints:[{name:"left_hip_pitch_joint",label:"\u9ACB \xB7 \u524D\u540E\u6446",link:"left_hip_yaw_link"},{name:"left_knee_joint",label:"\u819D \xB7 \u5C48\u4F38",link:"left_knee_link"},{name:"left_ankle_pitch_joint",label:"\u8E1D \xB7 \u4FEF\u4EF0",link:"left_ankle_roll_link"}],links:["left_hip_pitch_link","left_hip_roll_link","left_hip_yaw_link","left_knee_link","left_ankle_pitch_link","left_ankle_roll_link"],presets:[{id:"shallow",label:"\u8F7B\u5C48\u819D \xB7 30\xB0",kneeDegrees:30},{id:"crouch",label:"\u534F\u540C\u4E0B\u8E72 \xB7 45\xB0",kneeDegrees:45}]},interactionLimits:Object.fromEntries(["left","right"].flatMap(s=>[[`${s}_shoulder_pitch_joint`,{min:-90,max:90}],[`${s}_shoulder_roll_joint`,s==="left"?{min:0,max:100}:{min:-100,max:0}],[`${s}_shoulder_yaw_joint`,{min:-80,max:80}],[`${s}_elbow_joint`,{min:0,max:120}]])),partControls:[...["left","right"].flatMap(s=>[["hip_pitch","\u9ACB \xB7 \u524D\u540E\u6446",220,[`${s}_hip_yaw_link`,`${s}_hip_roll_link`]],["knee","\u819D \xB7 \u72EC\u7ACB\u5C48\u4F38",260,[]],["ankle_pitch","\u8E1D \xB7 \u4FEF\u4EF0",140,[`${s}_ankle_roll_link`]]].map(([e,t,n,i])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:"y",dragSensitivity:n,aliases:[...i]}))),{jointName:"waist_yaw_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u8F6C\u52A8",dragAxis:"x",dragSensitivity:220},{jointName:"waist_roll_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u4FA7\u503E",dragAxis:"x",dragSensitivity:100},{jointName:"waist_pitch_joint",label:"\u8170\u90E8 \xB7 \u524D\u540E\u4FEF\u4EF0",dragAxis:"y",dragSensitivity:100},...["left","right"].flatMap(s=>[["shoulder_pitch","\u80A9\u90E8\u524D\u540E\u6446","y"],["shoulder_roll","\u80A9\u90E8\u4FA7\u6446","x"],["shoulder_yaw","\u80A9\u90E8\u8F6C\u52A8","x"],["elbow","\u8098\u90E8\u5C48\u4F38","y"],["wrist_roll","\u624B\u8155\u6EDA\u8F6C","x"],["wrist_pitch","\u624B\u8155\u4FEF\u4EF0","y"],["wrist_yaw","\u624B\u8155\u8F6C\u52A8","x"]].map(([e,t,n])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:n,dragSensitivity:220,...e==="wrist_yaw"?{aliases:[`${s}_rubber_hand`]}:{}})))]};var Qo=class{model;config;joints=new Map;root;rootBase;supportFoot;supportAnchor;movingFoot;movingFootBaseHeight;pelvisDrop=0;targetAngle=0;animation=null;playing=!1;playDirection=1;goals=new Map;segments=[];source="idle";teachingBaseline=null;teachingReturnSource="idle";get motionSource(){return this.source}constructor(e,t=Zo){this.model=e,this.config=t,e.traverse(o=>{if(!o.name.endsWith("_joint")||!Array.isArray(o.userData.axis))return;let{axis:a,lower:l,upper:c}=o.userData;!Number.isFinite(l)||!Number.isFinite(c)||this.joints.set(o.name,{node:o,base:o.quaternion.clone(),axis:new S(a[0],a[2],-a[1]).normalize(),lower:qe.radToDeg(l),upper:qe.radToDeg(c),angle:0})});let n=e.getObjectByName(t.jointNames.root);if(!n)throw new Error(`Missing root link: ${t.jointNames.root}`);this.root=n,this.rootBase=n.position.clone();let i=e.getObjectByName(t.jointNames.supportFoot);if(!i)throw new Error("Missing configured support foot");this.supportFoot=i;let r=e.getObjectByName(t.jointNames.movingFoot);if(!r)throw new Error("Missing configured moving foot");this.movingFoot=r,e.updateMatrixWorld(!0),this.supportAnchor=i.getWorldPosition(new S),this.movingFootBaseHeight=r.getWorldPosition(new S).y;for(let o of[t.jointNames.leftHipPitch,t.jointNames.leftKnee,t.jointNames.leftAnklePitch,t.jointNames.rightHipPitch,t.jointNames.rightKnee,t.jointNames.rightAnklePitch])if(!this.joints.has(o))throw new Error(`Missing configured joint: ${o}`)}getAngle(e){var t;return((t=this.joints.get(e))==null?void 0:t.angle)??0}getInteractionRange(e){let t=this.joints.get(e);if(!t)throw new Error(`Unknown joint: ${e}`);let n=this.config.interactionLimits[e],i=Math.max(t.lower,(n==null?void 0:n.min)??t.lower),r=Math.min(t.upper,(n==null?void 0:n.max)??t.upper);if(i>r)throw new Error(`Empty interaction range: ${e}`);return{min:i,max:r}}setControlledJoint(e,t){let n=this.joints.get(e);if(!n||!Number.isFinite(t))return(n==null?void 0:n.angle)??0;this.playing=!1,this.animation=null,this.segments=[],this.source="manual",this.teachingBaseline=null;let i=this.getInteractionRange(e),r=qe.clamp(t,i.min,i.max);return this.goals.set(e,r),r}getRequestedAngle(e){return this.goals.get(e)??this.getAngle(e)}previewPose(e,t){let n=this.capture();try{for(let[i]of this.joints){let r=this.getInteractionRange(i),o=e[i]??0;this.setJointAngle(i,qe.clamp(o,r.min,r.max))}return this.root.position.copy(this.rootBase),this.maintainSupportAnchor(),t()}finally{this.restore(n)}}maintainSupportAnchor(){this.model.updateMatrixWorld(!0);let e=this.supportFoot.getWorldPosition(new S),t=this.root.parent;this.root.position.add(t.worldToLocal(this.supportAnchor.clone()).sub(t.worldToLocal(e))),this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y),this.model.updateMatrixWorld(!0)}demonstratePose(e){this.pause(),this.source="teaching";let t=this.capture(),n=this.previewPose(e,()=>this.capture()),i=this.previewPose({},()=>this.capture());this.segments=[{from:t,to:n,duration:1.1,elapsed:0},{from:n,to:n,duration:1.2,elapsed:0},{from:n,to:i,duration:1,elapsed:0}]}demonstrateJoint(e){let t=this.teachingBaseline??this.capture(),n=this.teachingBaseline?this.teachingReturnSource:this.source;this.pause(),this.source="teaching",this.teachingBaseline=t,this.teachingReturnSource=n;let i=this.capture(),r=this.getInteractionRange(e),o=t.angles.get(e),a={...t,angles:new Map(t.angles)};a.angles.set(e,qe.clamp(o+(r.max-o>=6?6:-6),r.min,r.max)),this.segments=[{from:i,to:a,duration:.3,elapsed:0},{from:a,to:a,duration:.35,elapsed:0},{from:a,to:t,duration:.45,elapsed:0}]}demonstrateChain(e){this.pause(),this.source="chain";let t=this.capture(),n,i;try{this.applyChain(0),n=this.capture(),this.applyChain(e),i=this.capture()}finally{this.restore(t)}this.segments=[{from:t,to:n,duration:.8,elapsed:0},{from:n,to:i,duration:1.2,elapsed:0,chainAngles:[0,e]},{from:i,to:i,duration:.5,elapsed:0,chainAngles:[e,e]},{from:i,to:n,duration:1.2,elapsed:0,chainAngles:[e,0]}]}setAngle(e){let t=this.config.jointNames.leftKnee,n=this.joints.get(t);return!n||!Number.isFinite(e)?0:(this.pause(),this.applyChain(qe.clamp(e,n.lower,n.upper)),this.targetAngle=n.angle,n.angle)}transitionTo(e,t=this.config.motion.transitionSeconds){this.pause();let n=this.joints.get(this.config.jointNames.leftKnee),i=qe.clamp(e,n.lower,n.upper);this.playing=!1,this.animation={from:n.angle,to:i,elapsed:0,duration:Math.max(.01,t)},this.targetAngle=i}play(){this.pause(),this.animation=null,this.playDirection=this.getAngle(this.config.jointNames.leftKnee)>=this.targetAngle?-1:1,this.playing=!0}pause(){this.playing=!1,this.animation=null,this.goals.clear(),this.segments=[],this.source!=="manual"&&(this.source="idle"),this.teachingBaseline=null}update(e){if(!Number.isFinite(e)||e<=0)return!1;if(this.segments.length){let o=e;for(;this.segments.length&&o>0;){let a=this.segments[0],l=Math.min(o,a.duration-a.elapsed);a.elapsed+=l,o-=l;let c=a.elapsed/a.duration,u=c*c*(3-2*c);if(a.chainAngles)this.applyChain(qe.lerp(a.chainAngles[0],a.chainAngles[1],u));else{for(let[h,d]of a.to.angles)this.setJointAngle(h,qe.lerp(a.from.angles.get(h),d,u));this.root.position.lerpVectors(a.from.root,a.to.root,u),this.pelvisDrop=qe.lerp(a.from.drop,a.to.drop,u)}c>=1&&this.segments.shift()}return this.segments.length||(this.source=this.source==="teaching"?this.teachingReturnSource:"idle",this.teachingBaseline=null),this.model.updateMatrixWorld(!0),!0}if(this.goals.size){let o=1-Math.exp(-e/this.config.servoSeconds);for(let[a,l]of this.goals){let c=qe.lerp(this.getAngle(a),l,o);Math.abs(c-l)<.001&&(c=l,this.goals.delete(a)),this.setJointAngle(a,c)}return this.model.updateMatrixWorld(!0),!0}if(this.animation){let o=this.animation;o.elapsed=Math.min(o.elapsed+Math.max(0,e),o.duration);let a=o.elapsed/o.duration,l=a*a*(3-2*a);return this.applyChain(qe.lerp(o.from,o.to,l)),a>=1&&(this.animation=null),!0}if(!this.playing)return!1;Math.abs(this.targetAngle)<.001&&(this.targetAngle=this.config.motion.automaticTargetDegrees);let t=Math.min(0,this.targetAngle),n=Math.max(0,this.targetAngle),i=n-t,r=this.playDirection>0?this.getAngle(this.config.jointNames.leftKnee)-t:2*i-(this.getAngle(this.config.jointNames.leftKnee)-t);return r=(r+30*e)%(2*i),this.playDirection=r<i?1:-1,this.applyChain(t+(r<=i?r:2*i-r)),!0}get animating(){return this.animation!==null||this.playing||this.goals.size>0||this.segments.length>0}reset(){this.pause(),this.source="idle";for(let[e]of this.joints)this.setJointAngle(e,0);this.applyChain(0),this.targetAngle=0}preview(e,t){let n=this.capture(),i=this.targetAngle;try{return this.applyChain(e),t()}finally{this.restore(n),this.targetAngle=i}}capture(){return{angles:new Map([...this.joints].map(([e,t])=>[e,t.angle])),root:this.root.position.clone(),drop:this.pelvisDrop}}restore(e){for(let[t,n]of e.angles)this.setJointAngle(t,n);this.root.position.copy(e.root),this.pelvisDrop=e.drop,this.model.updateMatrixWorld(!0)}setJointAngle(e,t){let n=this.joints.get(e);if(!n)return;n.angle=qe.clamp(t,n.lower,n.upper);let i=new Dt().setFromAxisAngle(n.axis,qe.degToRad(n.angle));n.node.quaternion.copy(n.base).multiply(i)}applyChain(e){let{jointNames:t,motion:n}=this.config;this.root.position.copy(this.rootBase),this.setJointAngle(t.leftHipPitch,e*n.hipCompensationRatio),this.setJointAngle(t.leftKnee,e),this.setJointAngle(t.leftAnklePitch,e*n.ankleCompensationRatio);let i=this.movingFoot.getWorldPosition(new S).y-this.movingFootBaseHeight,r=qe.clamp(i,0,n.maximumPelvisDropMeters),o=n.supportAnklePitchDegrees/n.supportKneeDegrees,a=-1-o,l=new S,c=g=>(this.setJointAngle(t.rightHipPitch,g*a),this.setJointAngle(t.rightKnee,g),this.setJointAngle(t.rightAnklePitch,g*o),this.supportFoot.getWorldPosition(l).y-this.supportAnchor.y),u=0,h=n.supportKneeDegrees;for(let g=0;g<10;g++){let _=(u+h)/2;c(_)<r?u=_:h=_}c(r===0?0:u);let d=this.root.parent.worldToLocal(this.supportAnchor.clone()),f=this.root.parent.worldToLocal(l.clone());this.root.position.add(d.sub(f)),this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y),this.model.updateMatrixWorld(!0)}};var ea=class{mapping;originals=[];pulseMeshes=[];time=0;baseIntensity=new Map;activeKey="";constructor(e){this.mapping=e}highlightLink(e,t=7592102){this.apply(new Map([[e,t]]))}highlightChain(e,t,n=3308134,i=[]){let r=new Map;for(let o of e)r.set(o,o===t?n:4489069);for(let o of i)r.set(o,11754546);this.apply(r)}update(e,t=!1){this.time+=Math.min(Math.max(e,0),.05);let n=t?.7:.52+.26*(.5+.5*Math.sin(this.time*Math.PI*2*1.1));for(let i of this.pulseMeshes){let r=Array.isArray(i.material)?i.material:[i.material];for(let o of r){let a=this.baseIntensity.get(o);a!==void 0&&o.emissive&&(o.emissiveIntensity=a*n)}}}clear(){for(let{mesh:e,original:t,replacement:n}of this.originals){e.material=t;for(let i of Array.isArray(n)?n:[n])i.dispose()}this.originals.length=0,this.pulseMeshes=[],this.baseIntensity.clear(),this.activeKey=""}apply(e){let t=[...e].map(([n,i])=>`${n}:${i}`).join("|");if(t!==this.activeKey){this.clear(),this.activeKey=t;for(let[n,i]of e)for(let r of this.mapping.meshesByLink.get(n)??[]){let o=r.material,l=(Array.isArray(o)?o:[o]).map(c=>{let u=c.clone(),h=u;if(h.emissive){h.color.lerp(new Ne(i),.35),h.emissive.setHex(i);let d=.45;h.emissiveIntensity=d,this.baseIntensity.set(h,d)}else"color"in h&&h.color.lerp(new Ne(i),.32);return u});r.material=Array.isArray(o)?l:l[0],this.originals.push({mesh:r,original:o,replacement:Array.isArray(o)?l:l[0]}),this.pulseMeshes.push(r)}}}};var ta=class{constructor(e,t,n,i,r,o){this.canvas=e;this.camera=t;this.mapping=n;this.config=i;this.onPick=r;this.drag=o;this.surfaceMeshes=[...n.meshesByLink.values()].flat(),e.addEventListener("pointerdown",this.pointerDown,!0),e.addEventListener("pointermove",this.pointerMove,!0),e.addEventListener("pointerup",this.pointerUp,!0),e.addEventListener("pointercancel",this.pointerCancel,!0),e.addEventListener("lostpointercapture",this.pointerCancel,!0)}raycaster=new Ho;surfaceMeshes;gesture=null;resolveControl(e){var i,r;let t=(i=this.mapping.linkToJoint.get(e))==null?void 0:i.name,n=this.config.partControls.find(o=>{var a;return this.mapping.joints.has(o.jointName)&&(((a=o.aliases)==null?void 0:a.includes(e))||o.jointName===t)});return(r=this.drag)!=null&&r.resolveControl?this.drag.resolveControl(e,n):n}dispose(){this.finish(),this.canvas.removeEventListener("pointerdown",this.pointerDown,!0),this.canvas.removeEventListener("pointermove",this.pointerMove,!0),this.canvas.removeEventListener("pointerup",this.pointerUp,!0),this.canvas.removeEventListener("pointercancel",this.pointerCancel,!0),this.canvas.removeEventListener("lostpointercapture",this.pointerCancel,!0)}pick(e,t){var l;let n=this.canvas.getBoundingClientRect();this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(new re((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.camera);let i=this.raycaster.intersectObjects(this.surfaceMeshes,!1)[0];if(!i)return;let r=String(i.object.userData.linkName),o=this.resolveControl(r),a=(o==null?void 0:o.jointName)??((l=this.mapping.linkToJoint.get(r))==null?void 0:l.name);return{linkName:r,jointName:a,control:o,correct:a===this.config.targetJointName}}reserve(e){e.preventDefault(),e.stopImmediatePropagation()}pointerDown=e=>{var n,i,r,o,a,l;if(this.gesture||e.button!==0||!e.isPrimary){this.finish();return}let t=((i=(n=this.drag)==null?void 0:n.enabled)==null?void 0:i.call(n))===!1?void 0:this.pick(e.clientX,e.clientY);this.gesture={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),part:t,dragging:!1,moved:!1},t!=null&&t.control&&this.drag&&(this.gesture.direction=(o=(r=this.drag).direction)==null?void 0:o.call(r,t),this.reserve(e),this.drag.onCaptureChange(!0),(l=(a=this.canvas).setPointerCapture)==null||l.call(a,e.pointerId),this.canvas.style.cursor="grabbing")};pointerMove=e=>{var l;let t=this.gesture;if(!t||e.pointerId!==t.id)return;let n=e.clientX-t.x,i=e.clientY-t.y;if(Math.hypot(n,i)>=this.config.click.maximumDistancePixels&&(t.moved=!0),!((l=t.part)!=null&&l.control)||!this.drag||(this.reserve(e),!t.moved))return;t.dragging||(t.dragging=!0,this.drag.onStart(t.part));let r=this.canvas.getBoundingClientRect(),o=t.part.control,a=t.direction?n/r.width*t.direction.x+i/r.height*t.direction.y:o.dragAxis==="y"?-i/r.height:n/r.width;this.drag.onMove(t.part,a*o.dragSensitivity)};pointerUp=e=>{var i;let t=this.gesture;if(!t||e.pointerId!==t.id)return;(i=t.part)!=null&&i.control&&this.drag&&this.reserve(e);let n=!t.moved&&!t.dragging&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<this.config.click.maximumDistancePixels&&performance.now()-t.time<this.config.click.maximumDurationMilliseconds;this.finish(),n&&t.part&&this.onPick(t.part)};pointerCancel=e=>{var t;((t=this.gesture)==null?void 0:t.id)===e.pointerId&&this.finish()};finish(){var t,n,i;let e=this.gesture;this.gesture=null,!(!((t=e==null?void 0:e.part)!=null&&t.control)||!this.drag)&&(e.dragging&&this.drag.onEnd(),this.drag.onCaptureChange(!1),(i=(n=this.canvas).hasPointerCapture)!=null&&i.call(n,e.id)&&this.canvas.releasePointerCapture(e.id),this.canvas.style.cursor="")}};function Dc(s,e,t){return(e.x-s.x)*(t.z-s.z)-(e.z-s.z)*(t.x-s.x)}function Uc(s){let e=[...s].sort((i,r)=>i.x-r.x||i.z-r.z);if(e.length<=1)return e;let t=[];for(let i of e){for(;t.length>=2&&Dc(t[t.length-2],t[t.length-1],i)<=0;)t.pop();t.push(i)}let n=[];for(let i=e.length-1;i>=0;i--){let r=e[i];for(;n.length>=2&&Dc(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}return t.pop(),n.pop(),t.concat(n)}function Xx(s,e){if(e.length<3)return!1;let t=0;for(let n=0;n<e.length;n++){let i=Dc(e[n],e[(n+1)%e.length],s);if(!(Math.abs(i)<1e-8)){if(!t)t=i>0?1:-1;else if((i>0?1:-1)!==t)return!1}}return!0}function jx(s,e,t){let n=t.x-e.x,i=t.z-e.z,r=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/(n*n+i*i||1)));return Math.hypot(s.x-(e.x+r*n),s.z-(e.z+r*i))}function qx(s,e){if(!e.length)return 1/0;let t=1/0;for(let n=0;n<e.length;n++)t=Math.min(t,jx(s,e[n],e[(n+1)%e.length]));return t}function _d({projection:s,polygon:e,margin:t,approximate:n=!1}){let i={x:s.x,z:s.z},r=Xx(i,e),o=qx(i,e);return{state:r?o<=t?"near":"balanced":"outside",projection:new S(s.x,0,s.z),polygon:e,marginMeters:o,approximate:n}}function xd(s,e){let t=new S,n=0,i=!1;for(let r of e){let o=Number(r.userData.mass),a=Array.isArray(r.userData.centerOfMass)?new S().fromArray(r.userData.centerOfMass):null;Number.isFinite(o)?o>0&&a?(t.add(r.localToWorld(a.clone()).multiplyScalar(o)),n+=o):o>0&&(i=!0):i=!0}return!n||i?{center:new mt().setFromObject(s).getCenter(new S),approximate:!0,mass:0}:{center:t.multiplyScalar(1/n),approximate:!1,mass:n}}function yd(s,e,t=.045){let n=[];for(let i of s){let r=new mt().setFromObject(i);if(!r.isEmpty()&&!(r.min.y>e+t))for(let o of[r.min.x,r.max.x])for(let a of[r.min.z,r.max.z])n.push({x:o,z:a})}return Uc(n)}var lt={c:null,u:[new S,new S,new S],e:[]},ut={c:null,u:[new S,new S,new S],e:[]},Pt=[[],[],[]],Ye=[[],[],[]],Tt=[],Wi=new S,Xi=new S,ji=new S,Wt=new S,vd=new S,Md=new S,Dn=new Qe,bd=new mt,na=new Je,Ed=new Je,Sd=new In,qi=class{constructor(e=new S,t=new S,n=new Qe){this.center=e,this.halfSize=t,this.rotation=n}set(e,t,n){return this.center=e,this.halfSize=t,this.rotation=n,this}copy(e){return this.center.copy(e.center),this.halfSize.copy(e.halfSize),this.rotation.copy(e.rotation),this}clone(){return new this.constructor().copy(this)}getSize(e){return e.copy(this.halfSize).multiplyScalar(2)}clampPoint(e,t){let n=this.halfSize;Wt.subVectors(e,this.center),this.rotation.extractBasis(Wi,Xi,ji),t.copy(this.center);let i=qe.clamp(Wt.dot(Wi),-n.x,n.x);t.add(Wi.multiplyScalar(i));let r=qe.clamp(Wt.dot(Xi),-n.y,n.y);t.add(Xi.multiplyScalar(r));let o=qe.clamp(Wt.dot(ji),-n.z,n.z);return t.add(ji.multiplyScalar(o)),t}containsPoint(e){return Wt.subVectors(e,this.center),this.rotation.extractBasis(Wi,Xi,ji),Math.abs(Wt.dot(Wi))<=this.halfSize.x&&Math.abs(Wt.dot(Xi))<=this.halfSize.y&&Math.abs(Wt.dot(ji))<=this.halfSize.z}intersectsBox3(e){return this.intersectsOBB(Yx.fromBox3(e))}intersectsSphere(e){return this.clampPoint(e.center,Md),Md.distanceToSquared(e.center)<=e.radius*e.radius}intersectsOBB(e,t=Number.EPSILON){lt.c=this.center,lt.e[0]=this.halfSize.x,lt.e[1]=this.halfSize.y,lt.e[2]=this.halfSize.z,this.rotation.extractBasis(lt.u[0],lt.u[1],lt.u[2]),ut.c=e.center,ut.e[0]=e.halfSize.x,ut.e[1]=e.halfSize.y,ut.e[2]=e.halfSize.z,e.rotation.extractBasis(ut.u[0],ut.u[1],ut.u[2]);for(let r=0;r<3;r++)for(let o=0;o<3;o++)Pt[r][o]=lt.u[r].dot(ut.u[o]);Wt.subVectors(ut.c,lt.c),Tt[0]=Wt.dot(lt.u[0]),Tt[1]=Wt.dot(lt.u[1]),Tt[2]=Wt.dot(lt.u[2]);for(let r=0;r<3;r++)for(let o=0;o<3;o++)Ye[r][o]=Math.abs(Pt[r][o])+t;let n,i;for(let r=0;r<3;r++)if(n=lt.e[r],i=ut.e[0]*Ye[r][0]+ut.e[1]*Ye[r][1]+ut.e[2]*Ye[r][2],Math.abs(Tt[r])>n+i)return!1;for(let r=0;r<3;r++)if(n=lt.e[0]*Ye[0][r]+lt.e[1]*Ye[1][r]+lt.e[2]*Ye[2][r],i=ut.e[r],Math.abs(Tt[0]*Pt[0][r]+Tt[1]*Pt[1][r]+Tt[2]*Pt[2][r])>n+i)return!1;return n=lt.e[1]*Ye[2][0]+lt.e[2]*Ye[1][0],i=ut.e[1]*Ye[0][2]+ut.e[2]*Ye[0][1],!(Math.abs(Tt[2]*Pt[1][0]-Tt[1]*Pt[2][0])>n+i||(n=lt.e[1]*Ye[2][1]+lt.e[2]*Ye[1][1],i=ut.e[0]*Ye[0][2]+ut.e[2]*Ye[0][0],Math.abs(Tt[2]*Pt[1][1]-Tt[1]*Pt[2][1])>n+i)||(n=lt.e[1]*Ye[2][2]+lt.e[2]*Ye[1][2],i=ut.e[0]*Ye[0][1]+ut.e[1]*Ye[0][0],Math.abs(Tt[2]*Pt[1][2]-Tt[1]*Pt[2][2])>n+i)||(n=lt.e[0]*Ye[2][0]+lt.e[2]*Ye[0][0],i=ut.e[1]*Ye[1][2]+ut.e[2]*Ye[1][1],Math.abs(Tt[0]*Pt[2][0]-Tt[2]*Pt[0][0])>n+i)||(n=lt.e[0]*Ye[2][1]+lt.e[2]*Ye[0][1],i=ut.e[0]*Ye[1][2]+ut.e[2]*Ye[1][0],Math.abs(Tt[0]*Pt[2][1]-Tt[2]*Pt[0][1])>n+i)||(n=lt.e[0]*Ye[2][2]+lt.e[2]*Ye[0][2],i=ut.e[0]*Ye[1][1]+ut.e[1]*Ye[1][0],Math.abs(Tt[0]*Pt[2][2]-Tt[2]*Pt[0][2])>n+i)||(n=lt.e[0]*Ye[1][0]+lt.e[1]*Ye[0][0],i=ut.e[1]*Ye[2][2]+ut.e[2]*Ye[2][1],Math.abs(Tt[1]*Pt[0][0]-Tt[0]*Pt[1][0])>n+i)||(n=lt.e[0]*Ye[1][1]+lt.e[1]*Ye[0][1],i=ut.e[0]*Ye[2][2]+ut.e[2]*Ye[2][0],Math.abs(Tt[1]*Pt[0][1]-Tt[0]*Pt[1][1])>n+i)||(n=lt.e[0]*Ye[1][2]+lt.e[1]*Ye[0][2],i=ut.e[0]*Ye[2][1]+ut.e[1]*Ye[2][0],Math.abs(Tt[1]*Pt[0][2]-Tt[0]*Pt[1][2])>n+i))}intersectsPlane(e){this.rotation.extractBasis(Wi,Xi,ji);let t=this.halfSize.x*Math.abs(e.normal.dot(Wi))+this.halfSize.y*Math.abs(e.normal.dot(Xi))+this.halfSize.z*Math.abs(e.normal.dot(ji)),n=e.normal.dot(this.center)-e.constant;return Math.abs(n)<=t}intersectRay(e,t){return this.getSize(vd),bd.setFromCenterAndSize(Wt.set(0,0,0),vd),na.setFromMatrix3(this.rotation),na.setPosition(this.center),Ed.copy(na).invert(),Sd.copy(e).applyMatrix4(Ed),Sd.intersectBox(bd,t)?t.applyMatrix4(na):null}intersectsRay(e){return this.intersectRay(e,Wt)!==null}fromBox3(e){return e.getCenter(this.center),e.getSize(this.halfSize).multiplyScalar(.5),this.rotation.identity(),this}equals(e){return e.center.equals(this.center)&&e.halfSize.equals(this.halfSize)&&e.rotation.equals(this.rotation)}applyMatrix4(e){let t=e.elements,n=Wt.set(t[0],t[1],t[2]).length(),i=Wt.set(t[4],t[5],t[6]).length(),r=Wt.set(t[8],t[9],t[10]).length();e.determinant()<0&&(n=-n),Dn.setFromMatrix4(e);let a=1/n,l=1/i,c=1/r;return Dn.elements[0]*=a,Dn.elements[1]*=a,Dn.elements[2]*=a,Dn.elements[3]*=l,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=c,Dn.elements[7]*=c,Dn.elements[8]*=c,this.rotation.multiply(Dn),this.halfSize.x*=n,this.halfSize.y*=i,this.halfSize.z*=r,Wt.setFromMatrixPosition(e),this.center.add(Wt),this}},Yx=new qi;function Td(s){let e=new Map;for(let[t,n]of s){let i=new mt;for(let r of n)i.expandByObject(r);i.isEmpty()||e.set(t,i)}return e}var ia=class{proxies=new Map;safety;expanded=new qi;constructor(e,t){this.safety=t,e.links.forEach(i=>i.updateWorldMatrix(!0,!1));let n=new Set(t.collisionPairs.flatMap(i=>[i.first,i.second]));for(let i of n){let r=e.links.get(i);if(!r)throw new Error(`Missing collision link: ${i}`);let o=new mt,a=r.matrixWorld.clone().invert();for(let c of e.meshesByLink.get(i)??[])c.geometry.boundingBox||c.geometry.computeBoundingBox(),o.union(c.geometry.boundingBox.clone().applyMatrix4(a.clone().multiply(c.matrixWorld)));if(o.isEmpty())throw new Error(`Missing collision geometry: ${i}`);let l=new qi().fromBox3(o);l.halfSize.multiply(new S(...t.collisionProxyScale[i]??[1,1,1])),this.proxies.set(i,{link:r,local:l,world:new qi})}}evaluate(){for(let e of this.proxies.values())e.world.copy(e.local).applyMatrix4(e.link.matrixWorld),e.world.center.copy(e.local.center).applyMatrix4(e.link.matrixWorld);return this.safety.collisionPairs.map(e=>{let t=this.proxies.get(e.first).world,n=this.proxies.get(e.second).world;return t.intersectsOBB(n)?{...e,state:"overlap",distance:0}:(this.expanded.copy(t),this.expanded.halfSize.addScalar(e.marginMeters??this.safety.collisionMarginMeters),{...e,state:this.expanded.intersectsOBB(n)?"near":"clear",distance:NaN})})}};function wd(s,e=0){let t=[...s].sort((o,a)=>o.angle-a.angle),n=t.findIndex(o=>Math.abs(o.angle-e)<1e-6);if(n<0||!t[n].safe)return{min:e,max:e};let i=n,r=n;for(;i>0&&t[i-1].safe;)i--;for(;r<t.length-1&&t[r+1].safe;)r++;return{min:t[i].angle,max:t[r].angle}}var sa=class{model;mapping;pose;config;collisions;groundY=0;scan;last;constructor(e,t,n,i){this.model=e,this.mapping=t,this.pose=n,this.config=i,this.collisions=new ia(t,i.safety),this.last=this.evaluateRaw(),this.scan=this.scanRanges()}evaluate(){return this.last=this.evaluateRaw(),this.last}scanRanges(){let e=this.pose.joints.get(this.config.jointNames.leftKnee),t=this.config.safety.scanStepDegrees;if(!Number.isFinite(t)||t<=0)throw new Error("Invalid safety scan step");let n=[];for(let u=e.lower;u<e.upper;u+=t)n.push(u);n.push(e.upper),n.push(0);let i=n.map(u=>this.pose.preview(u,()=>({angle:u,result:this.evaluateRaw()}))),r=i.map(({angle:u,result:h})=>({angle:u,safe:h.balance.state!=="outside"})),o=i.map(({angle:u,result:h})=>({angle:u,safe:!h.overlapCollision})),a=wd(r),l=wd(o),c={min:Math.max(a.min,l.min),max:Math.min(a.max,l.max)};return c.min>c.max&&(c.min=0,c.max=0),this.model.updateMatrixWorld(!0),this.last=this.evaluateRaw(),{support:a,collision:l,combined:c,samples:n.length}}evaluateRaw(){this.model.updateMatrixWorld(!0);let e=xd(this.model,[...this.mapping.links.values()]),n=[this.config.jointNames.movingFoot,this.config.jointNames.supportFoot].map(g=>({name:g,object:this.mapping.links.get(g)})).filter(g=>g.object),i=Td(new Map(n.map(g=>[g.name,this.mapping.meshesByLink.get(g.name)??[]]))),r=n.filter(g=>Math.abs(i.get(g.name).min.y-this.groundY)<=this.config.safety.footContactHeightMeters),o=r,a=r.length?Math.max(this.groundY,Math.min(...r.map(g=>i.get(g.name).min.y))):this.groundY,l=o.flatMap(g=>yd([g.object],this.groundY,this.config.safety.footContactHeightMeters)),c=Uc(l),u=_d({projection:{x:e.center.x,z:e.center.z},polygon:c,margin:this.config.safety.supportMarginMeters,approximate:e.approximate||r.length===0}),h=this.collisions.evaluate(),d=h.find(g=>g.state==="overlap"),f=u.state==="outside"||d?"danger":u.state==="near"||h.some(g=>g.state==="near")?"caution":"normal";return{balance:u,collisions:h,com:e.center,supportMode:r.length===2?"double":r.length===1?"single":"none",contactPlaneY:a,severity:f,overlapCollision:d}}};var ra={balanced:3308134,near:11695666,outside:11815747},oa=class{constructor(e,t=0){this.scene=e;this.groundY=t;this.group.name="g1-balance-overlay",this.group.visible=!1,e.add(this.group),this.group.add(this.projection,this.center,this.comLine),this.comLine.renderOrder=8,this.projection.rotation.x=-Math.PI/2,this.projection.renderOrder=9,this.center.renderOrder=9}group=new $t;areaMaterial=new St({color:ra.balanced,transparent:!0,opacity:.1,depthWrite:!1,side:zt});lineMaterial=new Nn({color:ra.balanced,transparent:!0,opacity:.8});projection=new Ke(new Lo(.012,20),new St({color:ra.balanced,depthTest:!0,depthWrite:!1,side:zt}));center=new Ke(new mi(.01,12,8),new St({color:2571320,depthTest:!0}));area=null;outline=null;comLine=new an(new gt().setAttribute("position",new ft(new Float32Array(6),3)),this.lineMaterial);lastKey="";displayGroundY=0;update(e,t,n=this.groundY){this.group.visible=!0,this.displayGroundY=Math.max(this.groundY,n);let i=ra[e.state];this.projection.position.set(e.projection.x,this.displayGroundY+.005,e.projection.z),this.center.position.copy(t),this.projection.material.color.setHex(i),this.lineMaterial.color.setHex(i);let r=this.displayGroundY.toFixed(4)+":"+e.state+":"+e.polygon.map(a=>`${a.x.toFixed(3)},${a.z.toFixed(3)}`).join(";");r!==this.lastKey&&(this.lastKey=r,this.updatePolygon(e,i));let o=this.comLine.geometry.attributes.position;o.setXYZ(0,e.projection.x,this.displayGroundY+.005,e.projection.z),o.setXYZ(1,t.x,t.y,t.z),o.needsUpdate=!0,this.comLine.geometry.computeBoundingSphere()}clear(){this.group.visible=!1}dispose(){var e,t,n;this.scene.remove(this.group),(e=this.area)==null||e.geometry.dispose(),(t=this.outline)==null||t.geometry.dispose(),(n=this.comLine)==null||n.geometry.dispose(),this.areaMaterial.dispose(),this.lineMaterial.dispose(),this.projection.geometry.dispose(),this.center.geometry.dispose(),this.projection.material.dispose(),this.center.material.dispose()}updatePolygon(e,t){if(this.area&&(this.group.remove(this.area),this.area.geometry.dispose()),this.outline&&(this.group.remove(this.outline),this.outline.geometry.dispose()),e.polygon.length<3){this.area=null,this.outline=null;return}this.areaMaterial.color.setHex(t),this.lineMaterial.color.setHex(t);let n=new mr;n.moveTo(e.polygon[0].x,e.polygon[0].z);for(let r=1;r<e.polygon.length;r++)n.lineTo(e.polygon[r].x,e.polygon[r].z);n.closePath(),this.area=new Ke(new No(n),this.areaMaterial),this.area.rotation.x=Math.PI/2,this.area.position.y=this.displayGroundY+.003,this.area.renderOrder=7,this.group.add(this.area);let i=e.polygon.map(r=>new S(r.x,this.displayGroundY+.004,r.z));this.outline=new Cs(new gt().setFromPoints(i),this.lineMaterial),this.outline.renderOrder=8,this.group.add(this.outline)}};var aa=class{constructor(e,t=[],n=0){this.model=e;this.feet=t;this.groundY=n;this.parent=e.parent,this.pivot.name="teaching-warning-sway",this.parent.add(this.pivot),this.pivot.add(e)}pivot=new $t;parent;footBox=new mt;transformed=!1;clearTransform(){this.transformed&&(this.pivot.quaternion.identity(),this.pivot.position.set(0,0,0),this.pivot.updateMatrixWorld(!0),this.transformed=!1)}render(e,t,n){if(this.clearTransform(),t&&!n){this.transformed=!0,this.pivot.rotation.set(Math.sin(e*5)*.004,0,Math.sin(e*4.1)*.006),this.pivot.updateMatrixWorld(!0);let i=1/0;for(let r of this.feet)i=Math.min(i,this.footBox.setFromObject(r).min.y);if(i<this.groundY){let r=this.parent.worldToLocal(new S(0,0,0)),o=this.parent.worldToLocal(new S(0,this.groundY-i+.001,0));this.pivot.position.add(o.sub(r)),this.pivot.updateMatrixWorld(!0)}}}renderFall(e,t,n,i){if(this.clearTransform(),i)return;this.transformed=!0;let r=e.clone().setY(0).normalize();r.lengthSq()<1e-8&&r.set(1,0,0);let o=new S(r.z,0,-r.x),a=qe.clamp(n,0,1),l=qe.degToRad(15)*a*a*(3-2*a),c=new Dt().setFromAxisAngle(o,l),u=this.parent.getWorldQuaternion(new Dt);this.pivot.quaternion.copy(u).invert().multiply(c).multiply(u);let h=this.parent.worldToLocal(t.clone());this.pivot.position.copy(h).sub(h.clone().applyQuaternion(this.pivot.quaternion)),this.pivot.updateMatrixWorld(!0);let d=1/0;for(let f of this.feet)d=Math.min(d,this.footBox.setFromObject(f).min.y);if(d<this.groundY){let f=this.parent.worldToLocal(new S),g=this.parent.worldToLocal(new S(0,this.groundY-d+.001,0));this.pivot.position.add(g.sub(f)),this.pivot.updateMatrixWorld(!0)}}dispose(){this.clearTransform(),this.parent.add(this.model),this.pivot.removeFromParent()}};function Ad(s,e){if(!e)return!1;for(let t=s;t;t=t.parent??void 0)if(t===e)return!0;return!1}function Oc(s,e,t){var r;let n=e.joints.get(t);return(r=s.filter(o=>o.state!=="clear").map(o=>{let a=Ad(e.links.get(o.first),n),l=Ad(e.links.get(o.second),n);return{link:l&&!a?o.second:o.first,score:(o.state==="overlap"?100:0)+(a||l?10:0)}}).sort((o,a)=>a.score-o.score)[0])==null?void 0:r.link}function Rd(s,e){var n;let t=new mt;for(let i of s.meshesByLink.get(e)??[])i.updateWorldMatrix(!0,!1),i.geometry.boundingBox||i.geometry.computeBoundingBox(),t.union(i.geometry.boundingBox.clone().applyMatrix4(i.matrixWorld));return t.isEmpty()?((n=s.links.get(e))==null?void 0:n.getWorldPosition(new S))??new S:new S((t.min.x+t.max.x)/2,t.max.y+.012,(t.min.z+t.max.z)/2)}function Cd(s,e,t,n,i,r){e.updateMatrixWorld();let o=s.clone().project(e);if(!Number.isFinite(o.x)||o.z<-1||o.z>1||Math.abs(o.x)>1||Math.abs(o.y)>1)return null;let a=Math.min(i/2,Math.max(0,t/2-12)),l=qe.clamp((o.x*.5+.5)*t,a+12,t-a-12),c=qe.clamp((-o.y*.5+.5)*n-12,Math.min(n-12,r+12),n-12);return{x:l,y:c}}function Pd(s,e,t,n,i,r){let o=e.clone().applyMatrix4(s),a=new S(0,-1,0),l=new S().crossVectors(t,a).normalize(),c=e.clone().add(a).applyMatrix4(s).y-o.y,u=e.clone().add(l).applyMatrix4(s).y-o.y,h=Math.hypot(c,u);return o.y<=i+r?0:Math.min(n,(o.y-i-r)/Math.max(h,1e-9))}var la=class{constructor(e,t=.5){this.fallDelaySeconds=t;this.discoveryJoints=new Set(e)}discoveryJoints;found=new Set;currentPhase="scan";currentMode="isolated";hasFallen=!1;outsideDuration=0;currentExperience="challenge";get discovered(){return this.found}get unlocked(){return this.discoveryJoints.size>0&&this.found.size===this.discoveryJoints.size}get phase(){return this.currentPhase}get mode(){return this.currentMode}get fallen(){return this.hasFallen}get outsideSeconds(){return this.outsideDuration}get experience(){return this.currentExperience}setExperience(e){this.resetPose(),this.currentExperience=e}discover(e){if(this.currentExperience!=="challenge"||this.currentMode!=="isolated"||this.hasFallen||!this.discoveryJoints.has(e)||this.found.has(e))return{added:!1,unlockedNow:!1};this.found.add(e);let t=this.unlocked;return t&&this.currentPhase==="scan"&&(this.currentPhase="unlocked"),{added:!0,unlockedNow:t}}beginChain(){return this.currentExperience==="challenge"&&!this.unlocked||this.hasFallen?!1:(this.currentMode="chain",this.outsideDuration=0,!0)}finishChain(){this.cancelChain(),this.currentExperience==="challenge"&&this.unlocked&&this.currentPhase!=="complete"&&(this.currentPhase="challenge")}cancelChain(){this.currentMode==="chain"&&(this.outsideDuration=0),this.currentMode="isolated"}update(e,t,n="manual"){return!Number.isFinite(e)||e<0?!1:this.currentExperience==="observe"||n!=="manual"||this.currentMode==="chain"||!t?(this.outsideDuration=0,!1):this.hasFallen||(this.outsideDuration+=e,this.outsideDuration<=this.fallDelaySeconds)?!1:(this.hasFallen=!0,this.currentPhase==="challenge"&&(this.currentPhase="complete"),!0)}resetPose(){this.hasFallen=!1,this.outsideDuration=0,this.cancelChain()}restart(){this.resetPose(),this.found.clear(),this.currentPhase="scan"}};var Fe=(s,e,t)=>({name:s,label:e,degrees:t,tolerance:12}),wn=[{id:"first-lift",title:"\u62AC\u8D77\u5C0F\u81C2",description:"\u7B2C\u4E00\u6B65\uFF0C\u53EA\u52A8\u4E00\u4E2A\u90E8\u4F4D\uFF1A\u6309\u4F4F\u4EAE\u8D77\u7684\u53F3\u5C0F\u81C2\uFF0C\u628A\u624B\u62AC\u5230\u8EAB\u524D\uFF0C\u50CF\u51C6\u5907\u63A5\u4F4F\u4E00\u4EF6\u5C0F\u793C\u7269\u3002",focusJoint:"right_elbow_joint",hints:["\u4E0A\u81C2\u4FDD\u6301\u81EA\u7136\u4E0B\u5782\uFF0C\u53EA\u5F2F\u66F2\u53F3\u8098\uFF0C\u8BA9\u5C0F\u81C2\u5411\u8EAB\u524D\u62AC\u8D77\u3002","\u624B\u638C\u9760\u8FD1\u8170\u90E8\u4E0A\u65B9\u5373\u53EF\uFF0C\u4E0D\u7528\u4E3E\u8FC7\u5934\u9876\uFF1B\u6253\u5F00\u8F6E\u5ED3\u53EF\u4EE5\u6BD4\u4E00\u6BD4\u3002"],joints:[Fe("right_elbow_joint","\u53F3\u5C0F\u81C2 \xB7 \u5F2F\u66F2",60)]},{id:"wave",title:"\u6325\u624B\u62DB\u547C",description:"\u628A\u53F3\u624B\u4E3E\u5230\u5934\u65C1\uFF0C\u5411\u521A\u8FDB\u5C55\u5385\u7684\u6E38\u5BA2\u6253\u4E2A\u62DB\u547C\u3002",focusJoint:"right_elbow_joint",hints:["\u5148\u628A\u53F3\u81C2\u5411\u524D\u62AC\uFF0C\u518D\u5411\u5916\u6253\u5F00\uFF0C\u6700\u540E\u5F2F\u66F2\u53F3\u8098\u3002","\u8BA9\u53F3\u624B\u9AD8\u8FC7\u80A9\u8180\uFF0C\u624B\u8098\u4FDD\u6301\u5F2F\u66F2\uFF1B\u53EF\u4EE5\u6253\u5F00\u8F6E\u5ED3\u6BD4\u4E00\u6BD4\u3002"],joints:[Fe("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-80),Fe("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-80),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",60)]},{id:"welcome",title:"\u53CC\u81C2\u8FCE\u5BBE",description:"\u5C55\u5F00\u53CC\u81C2\uFF0C\u4E3A\u6E38\u5BA2\u9001\u4E0A\u4E00\u4E2A\u5927\u5927\u7684\u6B22\u8FCE\u3002",focusJoint:"left_shoulder_roll_joint",hints:["\u5DE6\u53F3\u80A9\u5411\u4E24\u4FA7\u6253\u5F00\uFF0C\u518D\u8BA9\u53CC\u8098\u5FAE\u5FAE\u5F2F\u66F2\u3002","\u4E24\u53EA\u624B\u8981\u62C9\u5F00\u8DDD\u79BB\uFF0C\u5DE6\u53F3\u5C3D\u91CF\u5BF9\u79F0\uFF0C\u4E0D\u7528\u671D\u524D\u62AC\u81C2\u3002"],joints:[Fe("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",85),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",20),Fe("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-85),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",20)]},{id:"offer",title:"\u5411\u524D\u9012\u7269",description:"\u5047\u60F3\u624B\u4E2D\u6709\u4E00\u4EF6\u5C0F\u793C\u7269\uFF0C\u628A\u5B83\u9012\u7ED9\u9762\u524D\u7684\u6E38\u5BA2\u3002",focusJoint:"left_elbow_joint",hints:["\u53CC\u80A9\u5411\u524D\u62AC\uFF0C\u53CC\u8098\u540C\u65F6\u5F2F\u66F2\uFF0C\u53CC\u624B\u4FDD\u6301\u5728\u8EAB\u4F53\u524D\u65B9\u3002","\u624B\u638C\u5E94\u9760\u8FD1\u80F8\u524D\u9AD8\u5EA6\uFF0C\u4E24\u8FB9\u624B\u81C2\u59FF\u6001\u76F8\u4F3C\u3002"],joints:[Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-65),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",50),Fe("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-65),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",50)]},{id:"crouch",title:"\u5C48\u819D\u51C6\u5907",description:"\u8BA9 G1 \u8F7B\u8F7B\u8E72\u4E0B\uFF0C\u6446\u51FA\u51C6\u5907\u8D77\u8EAB\u7684\u59FF\u6001\u3002",focusJoint:"left_knee_joint",hints:["\u53CC\u819D\u5C48\u66F2\uFF0C\u9ACB\u4E0E\u8E1D\u5411\u76F8\u53CD\u65B9\u5411\u8865\u507F\uFF1B\u5DE6\u53F3\u4E00\u8D77\u8C03\u6574\u3002","\u8FD9\u662F\u8F7B\u8E72\uFF0C\u53CC\u811A\u5C3D\u91CF\u653E\u5E73\uFF0C\u9ACB\u548C\u8E1D\u7684\u53D8\u5316\u6BD4\u819D\u66F4\u5C0F\u3002"],joints:[Fe("left_hip_pitch_joint","\u5DE6\u9ACB\u524D\u540E\u6446",-15),Fe("left_knee_joint","\u5DE6\u819D\u5C48\u4F38",30),Fe("left_ankle_pitch_joint","\u5DE6\u8E1D\u4FEF\u4EF0",-15),Fe("right_hip_pitch_joint","\u53F3\u9ACB\u524D\u540E\u6446",-15),Fe("right_knee_joint","\u53F3\u819D\u5C48\u4F38",30),Fe("right_ankle_pitch_joint","\u53F3\u8E1D\u4FEF\u4EF0",-15)]},{id:"step",title:"\u62AC\u811A\u8DE8\u6B65",description:"\u53F3\u817F\u652F\u6491\uFF0C\u5DE6\u811A\u79BB\u5730\uFF0C\u51C6\u5907\u5411\u524D\u8FC8\u51FA\u4E00\u6B65\u3002",focusJoint:"left_knee_joint",hints:["\u5148\u8BA9\u5DE6\u5927\u817F\u5411\u524D\u62AC\uFF0C\u518D\u5F2F\u5DE6\u819D\uFF0C\u6700\u540E\u8C03\u6574\u5DE6\u811A\u8E1D\u3002","\u53EA\u8C03\u6574\u5DE6\u817F\uFF1B\u7528\u811A\u8E1D\u8865\u507F\uFF0C\u8BA9\u62AC\u8D77\u7684\u811A\u4E0D\u5411\u4E0B\u7EF7\u76F4\u3002"],joints:[Fe("left_hip_pitch_joint","\u5DE6\u9ACB\u524D\u540E\u6446",-30),Fe("left_knee_joint","\u5DE6\u819D\u5C48\u4F38",60),Fe("left_ankle_pitch_joint","\u5DE6\u8E1D\u4FEF\u4EF0",-30)]},{id:"salute",title:"\u4E3E\u624B\u81F4\u610F",description:"\u62AC\u8D77\u53F3\u81C2\uFF0C\u8BA9\u53F3\u624B\u5347\u5230\u5934\u65C1\uFF0C\u5411\u6E38\u5BA2\u81F4\u610F\u3002",focusJoint:"right_elbow_joint",hints:["\u53F3\u80A9\u5411\u524D\u62AC\uFF0C\u7A0D\u5FAE\u5411\u5916\u6253\u5F00\uFF0C\u518D\u8C03\u6574\u53F3\u8098\uFF0C\u8BA9\u624B\u5347\u5230\u5934\u65C1\u3002","\u53F3\u81C2\u4E0D\u7528\u50CF\u6325\u624B\u65F6\u6253\u5F00\u5F97\u90A3\u4E48\u8FDC\uFF0C\u89C2\u5BDF\u624B\u638C\u7684\u9AD8\u5EA6\u3002"],joints:[Fe("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-90),Fe("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-25),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",20)]},{id:"cheer",title:"\u53CC\u624B\u52A0\u6CB9",description:"\u53CC\u624B\u4E3E\u9AD8\uFF0C\u6446\u51FA\u5E86\u795D\u6311\u6218\u6210\u529F\u7684\u59FF\u6001\u3002",focusJoint:"left_shoulder_pitch_joint",hints:["\u53CC\u81C2\u5411\u524D\u4E3E\u8D77\uFF0C\u518D\u5411\u5DE6\u53F3\u6253\u5F00\uFF0C\u53CC\u8098\u4FDD\u6301\u5F2F\u66F2\u3002","\u8BA9\u4E24\u53EA\u624B\u90FD\u9AD8\u8FC7\u80A9\u8180\uFF0C\u50CF\u4E3E\u624B\u6B22\u547C\uFF0C\u5DE6\u53F3\u5BF9\u79F0\u3002"],joints:[Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-90),Fe("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",50),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",60),Fe("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-90),Fe("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-50),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",60)]},{id:"point",title:"\u4F38\u624B\u6307\u8DEF",description:"\u4F38\u51FA\u5DE6\u81C2\uFF0C\u4E3A\u6E38\u5BA2\u6307\u5411\u524D\u65B9\u7684\u5C55\u533A\u3002",focusJoint:"left_shoulder_pitch_joint",hints:["\u628A\u5DE6\u81C2\u5411\u524D\u62AC\uFF0C\u7A0D\u5411\u5916\u6253\u5F00\uFF0C\u5DE6\u8098\u53EA\u7559\u4E00\u70B9\u5F2F\u66F2\u3002","\u5DE6\u624B\u5411\u524D\u4F38\u8FDC\u4E00\u4E9B\uFF1B\u53F3\u81C2\u4FDD\u6301\u539F\u4F4D\u3002"],joints:[Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-30),Fe("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",20),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",10)]},{id:"bow",title:"\u793C\u8C8C\u97A0\u8EAC",description:"\u7528\u8170\u90E8\u5E26\u52A8\u4E0A\u8EAB\u5411\u524D\u503E\uFF0C\u505A\u4E00\u4E2A\u793C\u8C8C\u7684\u97A0\u8EAC\u3002",focusJoint:"waist_pitch_joint",hints:["\u9009\u62E9\u8170\u90E8\u524D\u540E\u4FEF\u4EF0\uFF0C\u4E0A\u8EAB\u5411\u524D\u503E\uFF0C\u53CC\u8098\u7A0D\u7A0D\u5F2F\u8D77\u3002","\u817F\u4FDD\u6301\u539F\u4F4D\uFF0C\u8BA9\u52A8\u4F5C\u4E3B\u8981\u6765\u81EA\u8170\u90E8\uFF0C\u4E0D\u8981\u5C48\u819D\u4E0B\u8E72\u3002"],joints:[Fe("waist_pitch_joint","\u8170\u90E8\u524D\u540E\u4FEF\u4EF0",25),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",25),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",25)]},{id:"turn",title:"\u8F6C\u8EAB\u4ECB\u7ECD",description:"\u4E0A\u8EAB\u8F6C\u5411\u4E00\u4FA7\uFF0C\u62AC\u8D77\u5DE6\u624B\uFF0C\u4ECB\u7ECD\u8EAB\u65C1\u7684\u5C55\u54C1\u3002",focusJoint:"waist_yaw_joint",hints:["\u5148\u8F6C\u52A8\u8170\u90E8\uFF0C\u518D\u62AC\u5DE6\u81C2\u3001\u5F2F\u5DE6\u8098\u3002\u53CC\u811A\u4E0D\u7528\u8F6C\u52A8\u3002","\u5DE6\u624B\u4FDD\u6301\u5728\u8EAB\u4F53\u524D\u65B9\uFF0C\u4E0A\u8EAB\u671D\u4E00\u4FA7\u8F6C\uFF0C\u907F\u514D\u53EA\u626D\u624B\u8155\u3002"],joints:[Fe("waist_yaw_joint","\u8170\u90E8\u5DE6\u53F3\u8F6C\u52A8",35),Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-40),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",45)]},{id:"guard",title:"\u53CC\u81C2\u51C6\u5907",description:"\u53CC\u8098\u5F2F\u8D77\u3001\u53CC\u624B\u62AC\u5230\u8EAB\u524D\uFF0C\u6446\u51FA\u4E13\u6CE8\u7684\u51C6\u5907\u59FF\u6001\u3002",focusJoint:"right_elbow_joint",hints:["\u53CC\u80A9\u5411\u524D\u62AC\u5E76\u7A0D\u5FAE\u5411\u5916\u6253\u5F00\uFF0C\u53CC\u8098\u660E\u663E\u5F2F\u8D77\u3002","\u4E24\u53EA\u624B\u5E94\u9760\u8FD1\u80A9\u524D\uFF0C\u53CC\u81C2\u4E0D\u8981\u8D34\u8FDB\u8EAF\u5E72\u3002"],joints:[Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-85),Fe("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",20),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",75),Fe("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-85),Fe("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-20),Fe("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",75)]},{id:"palm",title:"\u7FFB\u638C\u5C55\u793A",description:"\u62AC\u8D77\u5DE6\u81C2\uFF0C\u8F6C\u52A8\u624B\u8155\uFF0C\u628A\u624B\u638C\u5C55\u793A\u7ED9\u6E38\u5BA2\u3002",focusJoint:"left_wrist_roll_joint",hints:["\u5148\u62AC\u5DE6\u80A9\u3001\u5F2F\u5DE6\u8098\uFF0C\u8BA9\u624B\u5728\u80F8\u524D\uFF1B\u518D\u9009\u62E9\u624B\u8155\u6EDA\u8F6C\u3002","\u624B\u81C2\u8D1F\u8D23\u628A\u624B\u9001\u5230\u524D\u65B9\uFF0C\u624B\u8155\u8D1F\u8D23\u6539\u53D8\u638C\u9762\u7684\u671D\u5411\u3002"],joints:[Fe("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-60),Fe("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",60),Fe("left_wrist_roll_joint","\u5DE6\u624B\u8155\u6EDA\u8F6C",60)]}],bi={minimumScore:80,errorSpanDegrees:60,neutralToleranceDegrees:8,collisionPenalty:25};function ca(s){return Object.fromEntries(s.joints.map(e=>[e.name,e.degrees]))}function $x(s,e){let t=new Map(s.joints.map(h=>[h.name,h])),n=s.joints.map(h=>{let d=e[h.name];return{name:h.name,target:h.degrees,actual:d,error:Number.isFinite(d)?Math.abs(d-h.degrees):1/0,tolerance:h.tolerance}}),i=Object.entries(e).filter(([h])=>!t.has(h)).map(([h,d])=>({name:h,target:0,actual:d,error:Number.isFinite(d)?Math.abs(d):1/0,tolerance:bi.neutralToleranceDegrees})),r=n.map(h=>Math.min(1,h.error/bi.errorSpanDegrees)),o=.6*r.reduce((h,d)=>h+d,0)/Math.max(1,n.length)+.4*Math.max(0,...r),a=Math.max(0,...i.map(h=>Math.max(0,h.error-h.tolerance)/bi.errorSpanDegrees)),l=Math.max(0,100*(1-o-a)),u=[...[...n,...i]].sort((h,d)=>d.error/d.tolerance-h.error/h.tolerance)[0]??null;return{score:Math.round(l),matched:n.length>0&&Math.round(l)>=bi.minimumScore,errors:n,adjustment:u}}var ha=class{constructor(e,t={}){this.tasks=e;if(!e.length)throw new Error("Training requires at least one task");for(let n of e){let i=t[n.id];Number.isInteger(i)&&i>=0&&i<=100&&(this.results[n.id]=i)}}index=0;currentStatus="ready";visitorInput=!1;hints=0;results={};currentResult=0;currentScore={score:0,matched:!1,errors:[],adjustment:null};get task(){return this.tasks[this.index]}get taskIndex(){return this.index}get status(){return this.currentStatus}get hintLevel(){return this.hints}get canSubmit(){return this.currentStatus==="playing"&&this.visitorInput}get accuracy(){return this.currentScore}get bestScore(){return this.results[this.task.id]??0}get resultScore(){return this.currentResult}get completedCount(){return Object.values(this.results).filter(e=>e>=bi.minimumScore).length}get records(){return{...this.results}}get totalScore(){return Object.values(this.results).reduce((e,t)=>e+t,0)}select(e){let t=this.tasks.findIndex(n=>n.id===e);if(t<0)throw new Error(`Unknown task: ${e}`);this.index=t,this.reset("ready")}start(){this.reset("playing")}preview(){this.reset("preview")}finishPreview(){this.currentStatus==="preview"&&this.reset("ready")}markInput(){this.currentStatus==="playing"&&(this.visitorInput=!0)}revealHint(){this.currentStatus!=="preview"&&(this.hints=Math.min(2,this.hints+1))}resume(){this.currentStatus==="review"&&(this.currentStatus="playing",this.visitorInput=!1,this.currentResult=0)}reset(e){this.currentStatus=e,this.visitorInput=!1,this.currentResult=0,this.hints=0,this.currentScore={score:0,matched:!1,errors:[],adjustment:null}}submit(e,t){return!this.canSubmit||!t.manual||!t.settled?!1:(this.currentScore=$x(this.task,e),t.blocked&&(this.currentScore={...this.currentScore,score:Math.min(bi.minimumScore-1,Math.max(0,this.currentScore.score-bi.collisionPenalty)),matched:!1}),this.currentResult=this.currentScore.score,this.results[this.task.id]=Math.max(this.bestScore,this.currentResult),this.currentStatus=this.currentScore.matched?"complete":"review",!0)}};var ua=class{constructor(e,t){this.scene=e;this.pose=t;this.group.name="training_target_pose",this.group.visible=!1,e.add(this.group)}group=new $t;lineMaterial=new Ps({color:10252335,dashSize:.018,gapSize:.012,transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1});dotMaterial=new St({color:12356930,transparent:!0,opacity:.7,depthTest:!1,depthWrite:!1});dotGeometry=new mi(.012,8,6);show(e){this.clear(),this.pose.previewPose(ca(e),()=>{let t=new Set(e.joints.map(i=>i.name)),n=[];[...t].some(i=>i.startsWith("waist_"))&&n.push(["pelvis","waist_yaw_joint","torso_link","head_link"]);for(let i of["left","right"])[...t].some(r=>r.startsWith(i+"_")&&/shoulder|elbow|wrist/.test(r))&&n.push([`${i}_shoulder_pitch_joint`,`${i}_elbow_joint`,`${i}_wrist_roll_joint`,`${i}_rubber_hand`]),[...t].some(r=>r.startsWith(i+"_")&&/hip|knee|ankle/.test(r))&&n.push([`${i}_hip_pitch_joint`,`${i}_knee_joint`,`${i}_ankle_pitch_joint`,`${i}_ankle_roll_link`]);for(let i of n){let r=i.map(a=>{var l;return(l=this.pose.model.getObjectByName(a))==null?void 0:l.getWorldPosition(new S)}).filter(a=>!!a);if(r.length<2)continue;let o=new an(new gt().setFromPoints(r),this.lineMaterial);o.computeLineDistances(),o.renderOrder=6,this.group.add(o)}for(let i of e.joints){let r=this.pose.model.getObjectByName(i.name);if(!r)continue;let o=new Ke(this.dotGeometry,this.dotMaterial);r.getWorldPosition(o.position),o.renderOrder=6,this.group.add(o)}for(let i of e.joints.filter(r=>r.name.includes("wrist"))){let r=this.pose.model.getObjectByName(`${i.name.split("_")[0]}_rubber_hand`);if(!r)continue;let o=new mt().setFromObject(r).getCenter(new S),a=r.getWorldQuaternion(new Dt),l=[new S(0,-.055,0),new S(0,.055,0),new S(0,0,0),new S(0,0,.065)],c=new an(new gt().setFromPoints(l.map(u=>u.applyQuaternion(a).add(o))),this.lineMaterial);c.computeLineDistances(),c.renderOrder=6,this.group.add(c)}}),this.group.visible=!0}hide(){this.group.visible=!1}clear(){for(let e of[...this.group.children])e.isLine&&e.geometry.dispose(),this.group.remove(e)}dispose(){this.clear(),this.group.removeFromParent(),this.dotGeometry.dispose(),this.lineMaterial.dispose(),this.dotMaterial.dispose()}};function Fc(s){var t;if(/waist|torso|pelvis/.test(s))return"body";let e=(t=/^(left|right)_/.exec(s))==null?void 0:t[1];if(e){if(/shoulder|elbow|wrist|rubber_hand/.test(s))return`${e}-arm`;if(/hip|knee|ankle/.test(s))return`${e}-leg`}}function Ld(s,e,t,n,i){let r=Fc(t);if(!r)return;let o=new Set(s.joints.map(a=>a.name));return o.has(e)&&Fc(e)===r?i.find(a=>a.jointName===e):n&&o.has(n.jointName)?n:i.find(a=>o.has(a.jointName)&&Fc(a.jointName)===r)}function da(s){return s.includes("elbow")?{increase:"\u5F2F\u8D77\u4E00\u70B9",decrease:"\u4F38\u76F4\u4E00\u70B9"}:s.includes("shoulder_pitch")?{increase:"\u5411\u540E\u653E\u4E00\u70B9",decrease:"\u5411\u524D\u62AC\u4E00\u70B9"}:s.includes("shoulder_roll")?s.startsWith("left_")?{increase:"\u5411\u5916\u6253\u5F00\u4E00\u70B9",decrease:"\u5411\u5185\u6536\u4E00\u70B9"}:{increase:"\u5411\u5185\u6536\u4E00\u70B9",decrease:"\u5411\u5916\u6253\u5F00\u4E00\u70B9"}:s.includes("hip_pitch")?{increase:"\u5411\u540E\u6536\u817F\u4E00\u70B9",decrease:"\u5411\u524D\u62AC\u817F\u4E00\u70B9"}:s.includes("knee")?{increase:"\u819D\u76D6\u518D\u5F2F\u4E00\u70B9",decrease:"\u819D\u76D6\u4F38\u76F4\u4E00\u70B9"}:s.includes("ankle_pitch")?{increase:"\u811A\u5C16\u538B\u4F4E\u4E00\u70B9",decrease:"\u811A\u5C16\u62AC\u9AD8\u4E00\u70B9"}:s.includes("waist_pitch")?{increase:"\u4E0A\u8EAB\u524D\u503E\u4E00\u70B9",decrease:"\u4E0A\u8EAB\u633A\u76F4\u4E00\u70B9"}:s.includes("waist_yaw")?{increase:"\u4E0A\u8EAB\u5411\u5DE6\u8F6C\u4E00\u70B9",decrease:"\u4E0A\u8EAB\u5411\u53F3\u8F6C\u4E00\u70B9"}:{increase:"\u6B63\u5411\u8F6C\u4E00\u70B9",decrease:"\u53CD\u5411\u8F6C\u4E00\u70B9"}}function Id(s){let e=s.name.startsWith("left_")?"\u5DE6":s.name.startsWith("right_")?"\u53F3":"",t=s.name.includes("elbow")?`${e}\u5C0F\u81C2`:s.name.includes("shoulder")?`${e}\u624B\u81C2`:s.name.includes("hip")?`${e}\u5927\u817F`:s.name.includes("knee")?`${e}\u819D\u76D6`:s.name.includes("ankle")?`${e}\u811A\u638C`:s.name.includes("wrist")?`${e}\u624B\u8155`:"\u4E0A\u8EAB";if(s.target===0&&Math.abs(s.actual)>s.tolerance)return`\u5148\u628A${t}\u8F6C\u56DE\u81EA\u7136\u59FF\u6001\uFF0C\u5176\u4ED6\u90E8\u4F4D\u6682\u65F6\u4FDD\u6301\u3002`;let n=da(s.name),i=s.target>s.actual?n.increase:n.decrease;return`\u8BA9${t}${i}\uFF0C\u5176\u4ED6\u90E8\u4F4D\u5148\u4FDD\u6301\u3002`}function Bc(s,e){let t=e.startsWith("left_")?"left":"right",n=/shoulder|elbow|wrist/.test(e)?`${t}_rubber_hand`:/hip|knee|ankle/.test(e)?`${t}_ankle_roll_link`:"head_link";return s.model.getObjectByName(n)}function fa(s,e,t,n){let i=Bc(s,t),r=new re(n==="x"?1:0,n==="y"?-1:0);if(!i||t.includes("wrist"))return r;e.updateMatrixWorld(!0);let o=Object.fromEntries([...s.joints.keys()].map(f=>[f,s.getAngle(f)])),a=s.getInteractionRange(t),l=o[t],c=f=>s.previewPose({...o,[t]:qe.clamp(f,a.min,a.max)},()=>i.getWorldPosition(new S).project(e)),u=c(l-12),h=c(l+12),d=new re(h.x-u.x,u.y-h.y);return d.lengthSq()>1e-6?d.normalize():r}var Nd="g1-motion-training-best-v2",pa=class{constructor(e){this.options=e;let t={};try{let i=JSON.parse(localStorage.getItem(Nd)??"{}");i&&typeof i=="object"&&!Array.isArray(i)&&(t=i)}catch{}this.state=new ha(wn,t),this.target=new ua(e.scene,e.pose);let n=(i,r,o)=>{let a=this.$(i);a.addEventListener(r,o),this.events.push(()=>a.removeEventListener(r,o))};for(let[i,r]of wn.entries()){let o=r.joints.length===1?"\u5165\u95E8":r.joints.length<=3?"\u8FDB\u9636":"\u534F\u540C",a=document.createElement("option");if(a.value=r.id,a.textContent=`${String(i+1).padStart(2,"0")} / ${r.title} \xB7 ${o}`,this.$("training-task").append(a),i<3){let l=document.createElement("button");l.type="button",l.className="training-task-card",l.dataset.task=r.id;let c=document.createElement("span"),u=document.createElement("b"),h=document.createElement("small");c.textContent=`0${i+1} / ${o}`,u.textContent=r.title,h.textContent=`${r.joints.length} \u4E2A\u8C03\u8282\u90E8\u4F4D`,l.append(c,u,h),l.addEventListener("click",()=>this.select(r.id)),this.$("training-task-cards").append(l)}}n("enter-training","click",()=>this.enter()),n("leave-training","click",()=>this.leave()),n("training-task","change",()=>this.select(this.$("training-task").value)),n("training-start","click",()=>{this.state.status==="review"?(this.state.resume(),this.options.onChanged(),this.render()):this.start()}),n("training-preview","click",()=>this.preview()),n("training-reset","click",()=>this.start()),n("training-submit","click",()=>this.submit()),n("training-adjust","click",()=>{let i=this.state.accuracy.adjustment;i&&(this.state.resume(),this.setSelected(i.name),this.options.onChoose(i.name),this.options.onChanged(),this.lastRender="",this.render())});for(let[i,r]of[["training-less",-1],["training-more",1]])n(i,"click",()=>{this.state.status==="playing"&&this.options.onMove(this.selectedJoint,this.options.pose.getRequestedAngle(this.selectedJoint)+r*3)});n("training-next","click",()=>this.select(wn[(this.state.taskIndex+1)%wn.length].id)),n("training-hint","click",()=>{this.state.hintLevel<2?(this.state.revealHint(),this.state.hintLevel===2&&this.showTarget(!0)):this.showTarget(!this.targetVisible),this.lastRender="",this.render()}),this.renderRecords()}$=e=>document.getElementById(e);state;target;isActive=!1;selectedJoint="";targetVisible=!1;lastBlocked=!1;lastRender="";buttons=new Map;events=[];guidePosition=new S;guideDirection=new re(0,-1);get active(){return this.isActive}enter(){this.isActive||(this.isActive=!0,this.state.select(this.state.task.id),this.options.onEnter(),this.buildTask(),this.options.onChanged())}leave(){this.isActive&&(this.isActive=!1,this.state.select(this.state.task.id),this.showTarget(!1),this.options.onExit(),this.options.onChanged())}select(e){this.state.select(e),this.options.onPoseReset(),this.buildTask(),this.options.onChanged()}showTarget(e){this.targetVisible=e,e?this.target.show(this.state.task):this.target.hide(),this.$("training-legend").hidden=!e}buildTask(){let e=this.state.task;this.showTarget(!1),this.lastBlocked=!1,this.$("training-task").value=e.id,this.$("training-description").textContent=e.description,this.$("training-number").textContent=`MOTION ${String(this.state.taskIndex+1).padStart(2,"0")} / ${String(wn.length).padStart(2,"0")}`,this.$("pose-game").dataset.intro=String(e.id==="first-lift");for(let t of this.$("training-task-cards").querySelectorAll("button"))t.setAttribute("aria-pressed",String(t.dataset.task===e.id));this.$("training-joints").replaceChildren(),this.buttons.clear();for(let t of e.joints){let n=document.createElement("button");n.type="button",n.className="training-axis",n.dataset.joint=t.name;let i=document.createElement("b"),r=document.createElement("span");i.textContent=t.label;let o=this.options.controls.find(a=>a.jointName===t.name);r.textContent=da(t.name).increase.replace("\u4E00\u70B9",""),n.append(i,r),n.addEventListener("click",()=>{this.state.status==="playing"&&(this.setSelected(t.name),this.options.onChoose(t.name))}),n.addEventListener("keydown",a=>{this.state.status!=="playing"||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.key)||(a.preventDefault(),this.setSelected(t.name),this.options.onMove(t.name,this.options.pose.getRequestedAngle(t.name)+(["ArrowUp","ArrowRight"].includes(a.key)?2:-2)))}),this.$("training-joints").append(n),this.buttons.set(t.name,n)}this.setSelected(e.focusJoint),this.options.onChoose(this.selectedJoint),this.lastRender="",this.render()}setSelected(e){var r;if(!(this.options.controls.some(o=>o.jointName===e)&&(this.state.task.joints.some(o=>o.name===e)||((r=this.state.accuracy.adjustment)==null?void 0:r.name)===e)))return;this.selectedJoint=e;for(let[o,a]of this.buttons)a.setAttribute("aria-pressed",String(o===e));let n=this.options.controls.find(o=>o.jointName===e),i=da(e);this.$("training-drag-label").textContent=`\u5F53\u524D\uFF1A${this.options.labels[e]??e}\u3002\u62D6\u52A8\u4EAE\u8D77\u7684\u90E8\u4F4D\uFF0C\u6216\u7528\u4E0B\u65B9\u6309\u94AE\u5FAE\u8C03\u3002`,this.$("training-less").textContent=i.decrease,this.$("training-more").textContent=i.increase,this.guideDirection.copy(fa(this.options.pose,this.options.camera,e,(n==null?void 0:n.dragAxis)??"y")),this.$("training-drag-arrow").style.transform=`rotate(${Math.atan2(this.guideDirection.y,this.guideDirection.x)}rad)`}resolveControl(e,t){let n=this.state.task,i=this.state.accuracy.adjustment,r=(i==null?void 0:i.name)===this.selectedJoint&&!n.joints.some(o=>o.name===i.name)?{...n,joints:[...n.joints,{name:i.name,label:"\u6062\u590D\u81EA\u7136\u59FF\u6001",degrees:0,tolerance:i.tolerance}]}:n;return Ld(r,this.selectedJoint,e,t,this.options.controls)}markInput(){this.state.markInput()}start(){this.options.onPoseReset(),this.state.start(),this.lastBlocked=!1,this.showTarget(!1),this.setSelected(this.selectedJoint),this.options.onChoose(this.selectedJoint),this.options.onChanged(),this.lastRender="",this.render()}preview(){this.state.preview(),this.showTarget(!1),this.options.pose.demonstratePose(ca(this.state.task)),this.options.onChanged(),this.render()}settled(){let e=this.options.pose;return!e.animating&&[...e.joints.keys()].every(t=>Math.abs(e.getAngle(t)-e.getRequestedAngle(t))<.1)}submit(){let e=this.options.conditions();if(e.dragging)return;let t=this.options.pose,n=Object.fromEntries([...t.joints.keys()].map(i=>[i,t.getAngle(i)]));if(this.state.submit(n,{manual:t.motionSource==="manual",settled:this.settled(),blocked:e.blocked})){this.lastBlocked=e.blocked,this.state.status==="review"&&this.state.accuracy.adjustment&&(this.setSelected(this.state.accuracy.adjustment.name),this.options.onChoose(this.state.accuracy.adjustment.name));try{localStorage.setItem(Nd,JSON.stringify(this.state.records))}catch{}if(this.renderRecords(),this.options.onChanged(),this.lastRender="",this.render(),this.state.status==="complete"){let i=this.$("pose-game");i.classList.remove("is-complete"),i.offsetWidth,i.classList.add("is-complete")}}}suspend(){this.lastRender=""}update(e,t){if(!this.isActive)return;this.state.status==="preview"&&!this.options.pose.animating&&(this.state.finishPreview(),this.options.onChanged());let n=this.$("training-drag-cue"),i=Bc(this.options.pose,this.selectedJoint);if(this.state.status==="playing"&&i){this.options.camera.updateMatrixWorld(),i.getWorldPosition(this.guidePosition).project(this.options.camera);let r=this.guidePosition;n.hidden=r.z<-1||r.z>1||Math.abs(r.x)>.82||Math.abs(r.y)>.72,n.hidden||(n.style.left=`${(r.x*.5+.5)*this.options.viewer.clientWidth}px`,n.style.top=`${(-r.y*.5+.5)*this.options.viewer.clientHeight}px`)}else n.hidden=!0;this.render()}renderRecords(){this.$("training-total").textContent=`\u5DF2\u638C\u63E1 ${this.state.completedCount} / ${wn.length}`,this.$("training-records").textContent=`\u672C\u673A\u7D2F\u8BA1 ${this.state.totalScore} / ${wn.length*100} \u5206 \xB7 \u6BCF\u5173\u53EA\u8BA1\u6700\u9AD8\u5206`,this.$("training-entry-progress").textContent=`${wn.length} \u4E2A\u52A8\u4F5C \xB7 \u5DF2\u638C\u63E1 ${this.state.completedCount}`}render(){let e=this.state.status,t=e==="review"||e==="complete",n=this.state.resultScore,i=this.state.canSubmit&&this.settled(),r=this.state.task.id==="first-lift",o=e==="ready"?r?"\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF1A\u53EA\u9700\u62AC\u8D77\u4EAE\u8D77\u7684\u5C0F\u81C2\u3002\u60F3\u5148\u770B\u770B\uFF1F\u70B9\u51FB\u89C2\u770B\u793A\u8303\u3002":"\u5148\u770B\u793A\u8303\uFF0C\u6216\u76F4\u63A5\u5F00\u59CB\u3002\u6446\u597D\u540E\u7531\u4F60\u63D0\u4EA4\u3002":e==="preview"?"\u7559\u610F\u624B\u3001\u811A\u600E\u6837\u79FB\u52A8\u3002\u793A\u8303\u7ED3\u675F\u540E\uFF0C\u6362\u4F60\u6765\u3002":e==="complete"?r?"\u7B2C\u4E00\u9897\u661F\u5230\u624B\uFF01\u4F60\u5DF2\u7ECF\u7528\u4E00\u4E2A\u5173\u8282\u8BA9\u5C0F\u81C2\u52A8\u8D77\u6765\u4E86\u3002":"\u52A8\u4F5C\u8FBE\u6210\uFF01\u6362\u4E2A\u52A8\u4F5C\u7EE7\u7EED\u63A2\u7D22\u3002":e==="review"?"\u5DF2\u7ECF\u627E\u5230\u8C03\u6574\u65B9\u5411\u4E86\u3002\u70B9\u51FB\u201C\u8C03\u6574\u8FD9\u4E2A\u90E8\u4F4D\u201D\uFF0C\u4FDD\u7559\u59FF\u6001\u7EE7\u7EED\u8BD5\u3002":this.state.canSubmit?i?"\u89C9\u5F97\u6446\u597D\u4E86\u5417\uFF1F\u70B9\u51FB\u63D0\u4EA4\uFF0C\u770B\u770B\u8FD9\u6B21\u505A\u5F97\u600E\u6837\u3002":"\u52A8\u4F5C\u6B63\u5728\u8DDF\u968F\u4F60\uFF0C\u505C\u7A33\u540E\u5C31\u53EF\u4EE5\u63D0\u4EA4\u3002":r?"\u6309\u4F4F\u4EAE\u8D77\u7684\u5C0F\u81C2\u62D6\u4E00\u4E0B\uFF0C\u8BA9\u624B\u62AC\u5230\u8EAB\u524D\u3002":"\u70B9\u9009\u8981\u8C03\u6574\u7684\u90E8\u4F4D\uFF0C\u6309\u4F4F\u4EAE\u8D77\u7684\u80A2\u4F53\u62D6\u52A8\u3002",a=JSON.stringify([e,n,i,o,this.state.hintLevel,this.targetVisible,this.lastBlocked,this.state.bestScore]);if(a===this.lastRender)return;this.lastRender=a;let l=this.$("pose-game");l.dataset.status=e,l.style.setProperty("--score",String(t?n:0)),this.$("training-score").textContent=t?String(n):"\u2014",this.$("training-score-label").textContent=t?"\u672C\u6B21\u52A8\u4F5C\u7CBE\u51C6\u5EA6":"\u63D0\u4EA4\u540E\u63ED\u6653",this.$("training-best").textContent=this.state.bestScore?`\u672C\u5173\u6700\u4F73 ${this.state.bestScore} \u5206`:"\u672C\u5173\u6700\u4F73 \xB7 \u7B49\u4F60\u521B\u9020",this.$("training-status").textContent=o;let c=this.$("training-start");c.textContent=e==="review"?"\u7EE7\u7EED\u8C03\u6574 \u2197":e==="complete"?"\u91CD\u65B0\u6311\u6218 \u2197":e==="playing"?"\u4ECE\u5934\u518D\u6765":"\u5F00\u59CB\u6446\u59FF \u2197",c.disabled=e==="preview",this.$("training-preview").disabled=e==="preview";let u=this.$("training-submit");u.hidden=e!=="playing",u.disabled=!i,this.$("training-next").hidden=!t,this.$("training-reset").hidden=e!=="playing";let h=this.$("training-adjust");h.hidden=e!=="review"||!this.state.accuracy.adjustment,h.hidden?h.textContent="\u8C03\u6574\u8FD9\u4E2A\u90E8\u4F4D \u2192":this.state.accuracy.adjustment&&(h.textContent=`\u8C03\u6574${this.options.labels[this.state.accuracy.adjustment.name]??"\u8FD9\u4E2A\u90E8\u4F4D"} \u2192`);for(let M of["training-less","training-more"])this.$(M).disabled=e!=="playing";for(let M of this.buttons.values())M.disabled=e!=="playing";for(let M of this.$("training-route").querySelectorAll("[data-phase]"))M.dataset.active=String(M.dataset.phase===(t?"submit":e==="playing"?"pose":"observe"));let d=this.$("training-hint");d.disabled=e==="preview",d.textContent=this.state.hintLevel===0?"\u9700\u8981\u4E00\u70B9\u63D0\u793A\uFF1F":this.state.hintLevel===1?"\u518D\u770B\u4E00\u773C\u76EE\u6807\u8F6E\u5ED3":this.targetVisible?"\u6536\u8D77\u76EE\u6807\u8F6E\u5ED3":"\u663E\u793A\u76EE\u6807\u8F6E\u5ED3",d.setAttribute("aria-expanded",String(this.state.hintLevel>0));let f=this.$("training-hint-copy");f.hidden=this.state.hintLevel===0,f.textContent=this.state.task.hints[Math.max(0,this.state.hintLevel-1)];let g=n>=98?"\u7CBE\u51C6\u590D\u523B":n>=90?"\u52A8\u4F5C\u719F\u7EC3":n>=80?"\u52A8\u4F5C\u8FBE\u6210":n>=60?"\u63A5\u8FD1\u76EE\u6807":"\u518D\u8BD5\u4E00\u6B21",_=this.state.accuracy.adjustment,m=_?Id(_):"\u8BD5\u7740\u8BB0\u4F4F\u52A8\u4F5C\u7684\u8F6E\u5ED3\uFF0C\u518D\u8C03\u6574\u5404\u4E2A\u90E8\u4F4D\u3002",p=this.lastBlocked?`\u90E8\u4F4D\u51FA\u73B0\u91CD\u53E0\uFF0C\u672C\u6B21\u5DF2\u6263\u5206\uFF1B\u5148\u6536\u56DE\u76F8\u78B0\u7684\u90E8\u4F4D\u3002${m}`:n>=98?"\u5404\u4E2A\u90E8\u4F4D\u914D\u5408\u5F97\u5F88\u5230\u4F4D\uFF01":m;this.$("training-review").hidden=!t,this.$("training-review").textContent=t?`${g} \xB7 ${p} ${this.state.hintLevel?"\u501F\u52A9\u63D0\u793A\u5B8C\u6210":"\u72EC\u7ACB\u5C1D\u8BD5\u5B8C\u6210"}\u3002`:"",this.$("training-result").hidden=e!=="complete",this.$("training-result-score").textContent=`${n} \u5206`,this.$("training-result-title").textContent=g,this.$("training-result-detail").textContent=`${this.state.task.title} \xB7 \u5DF2\u638C\u63E1 ${this.state.completedCount} / ${wn.length}`,this.$("training-stars").textContent=t?n>=98?"\u2605\u2605\u2605":n>=90?"\u2605\u2605\u2606":n>=80?"\u2605\u2606\u2606":"\u2606\u2606\u2606":"\u2606\u2606\u2606",this.$("training-stars").setAttribute("aria-label",t?`\u83B7\u5F97 ${n>=98?3:n>=90?2:n>=80?1:0} \u9897\u661F`:"\u63D0\u4EA4\u540E\u83B7\u5F97\u661F\u661F")}dispose(){for(let e of this.events)e();this.target.dispose()}};var Dd={pelvis:"\u9AA8\u76C6",left_hip_yaw_link:"\u5DE6\u5927\u817F",left_knee_link:"\u5DE6\u5C0F\u817F",left_ankle_pitch_link:"\u5DE6\u811A\u8E1D",left_ankle_roll_link:"\u5DE6\u811A",right_hip_yaw_link:"\u53F3\u5927\u817F",right_knee_link:"\u53F3\u5C0F\u817F",right_ankle_pitch_link:"\u53F3\u811A\u8E1D",right_ankle_roll_link:"\u53F3\u811A",torso_link:"\u8EAF\u5E72",head_link:"\u5934\u90E8",left_shoulder_pitch_link:"\u5DE6\u80A9",left_elbow_link:"\u5DE6\u8098",right_shoulder_pitch_link:"\u53F3\u80A9",right_elbow_link:"\u53F3\u8098"},Kx={hip_pitch:"\u9ACB\u4FEF\u4EF0\u5173\u8282",hip_roll:"\u9ACB\u4FA7\u6446\u5173\u8282",hip_yaw:"\u9ACB\u65CB\u8F6C\u5173\u8282",knee:"\u819D\u5173\u8282",ankle_pitch:"\u8E1D\u4FEF\u4EF0\u5173\u8282",ankle_roll:"\u8E1D\u4FA7\u6446\u5173\u8282",shoulder_pitch:"\u80A9\u4FEF\u4EF0\u5173\u8282",shoulder_roll:"\u80A9\u4FA7\u6446\u5173\u8282",shoulder_yaw:"\u80A9\u65CB\u8F6C\u5173\u8282",elbow:"\u8098\u5173\u8282",wrist_roll:"\u8155\u6EDA\u8F6C\u5173\u8282",wrist_pitch:"\u8155\u4FEF\u4EF0\u5173\u8282",wrist_yaw:"\u8155\u65CB\u8F6C\u5173\u8282"};function Jx(s){if(Dd[s])return Dd[s];let e=/^(left|right)_(.+)_link$/.exec(s);return e?`${e[1]==="left"?"\u5DE6":"\u53F3"}${Kx[e[2]]??"\u90E8\u4F4D"}`:s==="pelvis_contour_link"?"\u9AA8\u76C6\u5916\u58F3":"\u673A\u5668\u4EBA\u90E8\u4F4D"}function Ud(s){let{model:e,camera:t,scene:n,viewer:i,canvas:r,onSelect:o}=s,a=s.config??Zo,l=a.discoveryChain,c=new la(l.joints.map(V=>V.name),a.fallDelaySeconds),u=new Map,h=V=>{let _e=u.get(V);return _e||(_e=document.getElementById(V),u.set(V,_e)),_e},d=(V,_e)=>{let le=h(V);le.textContent!==_e&&(le.textContent=_e)},f=gd(e,s.records??[]),g=new aa(e,[a.jointNames.movingFoot,a.jointNames.supportFoot].map(V=>f.links.get(V))),_=new Qo(e,a),m=new sa(e,f,_,a),p=new ea(f),M=new oa(n,0),x=h("knee-angle"),T=h("play-knee"),L=h("reset-knee"),C=h("select-knee"),R=h("knee-hotspot"),X=h("hint-knee"),E=h("highlight-link"),w=h("highlight-chain"),H=h("joint-select"),K=h("chain-preset"),ae=h("replay-joint");for(let V of l.presets){let _e=document.createElement("option");_e.value=V.id,_e.textContent=V.label,K.append(_e)}K.value=l.presets[l.presets.length-1].id;for(let[V,_e]of l.joints.entries()){let le=document.createElement("span");le.dataset.joint=_e.name;let it=document.createElement("b");it.textContent=String(V+1).padStart(2,"0");let jt=document.createElement("span");jt.textContent=_e.label,le.append(it,jt),h("discovery-parts").append(le)}let I=a.partControls.filter(V=>_.joints.has(V.jointName));for(let V of I){let _e=document.createElement("option");_e.value=V.jointName,_e.textContent=V.label,H.append(_e)}let D=I.find(V=>V.jointName===a.targetJointName);H.value=D.jointName;let G=0,q=!1,j=!1,W=0,ee=new S,ne=new S,he=l.joints[0],z=null,Y,fe=!1,Ae=new S,be=()=>D.jointName===a.targetJointName,Oe=matchMedia("(prefers-reduced-motion: reduce)");h("joint-controls").removeAttribute("inert");let ke=e.getObjectByName(a.targetJointName),ye=!1,We=!1,U=!1,Lt=NaN,Re=-1/0,Pe=0,ve="",rt=!0,De=0,y,v="";function O(V=!1){let _e=[c.phase,c.mode,c.fallen,c.experience,c.discovered.size,_.motionSource,ye,y==null?void 0:y.active,y==null?void 0:y.state.taskIndex,y==null?void 0:y.state.status].join("|");if(!V&&_e===v)return;v=_e;let le=h("discovery-game");le.dataset.phase=c.phase,i.dataset.mode=c.mode,i.dataset.fallen=String(c.fallen),document.body.dataset.experience=c.experience,i.dataset.motion=_.motionSource;let it=c.experience==="observe",jt=it||c.unlocked,At=(y==null?void 0:y.active)??!1;document.body.dataset.training=String(At),h("mode-observe").setAttribute("aria-pressed",String(it)),h("mode-challenge").setAttribute("aria-pressed",String(!it)),le.hidden=it||At,h("observe-guide").hidden=!it,h("pose-game").hidden=!At,h("training-controls").hidden=!At,At||(h("training-legend").hidden=!0,h("training-drag-cue").hidden=!0),h("joint-controls").hidden=At,At||(h("training-result").hidden=!0),h("discovery-progress").textContent=`${c.discovered.size} / ${l.joints.length}`;for(let F of h("discovery-parts").children){let k=F;k.dataset.found=String(c.discovered.has(k.dataset.joint))}let qt={scan:["01 \xB7 \u627E\u5230\u72EC\u7ACB\u81EA\u7531\u5EA6","\u5728\u6A21\u578B\u4E0A\u70B9\u51FB\u5DE6\u9ACB\u3001\u5DE6\u819D\u3001\u5DE6\u8E1D\uFF0C\u770B\u770B\u6BCF\u4E2A\u90E8\u4F4D\u80FD\u600E\u6837\u52A8\u3002"],unlocked:["02 \xB7 \u770B\u5B83\u4EEC\u4E00\u8D77\u914D\u5408","\u5DE6\u817F\u8FD0\u52A8\u94FE\u5DF2\u89E3\u9501\uFF01\u70B9\u51FB\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\uFF0C\u89C2\u5BDF\u9ACB\u3001\u819D\u3001\u8E1D\u5982\u4F55\u914D\u5408\u3002"],challenge:["03 \xB7 \u8BD5\u8BD5\u5931\u8861\u7684\u8FB9\u754C","\u5355\u72EC\u62D6\u52A8\u5DE6\u9ACB\u5411\u524D\u6446\uFF0C\u89C2\u5BDF\u8D28\u5FC3\u3002\u8D8A\u754C\u6301\u7EED\u534A\u79D2\u4F1A\u5931\u53BB\u5E73\u8861\uFF0C\u590D\u4F4D\u5373\u53EF\u91CD\u8BD5\u3002"],complete:["\u63A2\u7D22\u5B8C\u6210 \xB7 \u4F60\u53D1\u73B0\u4E86\u534F\u540C\u7684\u610F\u4E49","\u540C\u4E00\u4E2A\u81EA\u7531\u5EA6\uFF0C\u5355\u72EC\u52A8\u548C\u914D\u5408\u52A8\u4F1A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u590D\u4F4D\u540E\u53EF\u4EE5\u7EE7\u7EED\u6BD4\u8F83\u3002"]},[Kt,b]=qt[c.phase];h("game-stage").textContent=Kt,h("game-instruction").textContent=b,h("chain-progress").textContent=c.unlocked?"\u5DE6\u817F\u8FD0\u52A8\u94FE \xB7 \u5DF2\u89E3\u9501 \u2713":"\u5DE6\u817F\u8FD0\u52A8\u94FE \xB7 \u5F85\u89E3\u9501",h("interaction-mode").textContent=c.mode==="chain"?"\u8FD0\u52A8\u94FE\u6F14\u793A":_.motionSource==="teaching"?"\u72EC\u7ACB\u52A8\u4F5C\u6F14\u793A":"\u5355\u5173\u8282\u89C2\u5BDF";for(let F of document.querySelectorAll(".game-route [data-step]"))F.dataset.active=String(F.dataset.step===(c.phase==="complete"?"challenge":c.phase));let N=c.phase==="scan"?1:c.phase==="unlocked"?2:3;h("stage-step").textContent=it?"\u81EA\u7531\u89C2\u5BDF \xB7 \u70B9\u9009\u4EFB\u610F\u90E8\u4F4D":`\u53D1\u73B0\u6311\u6218 \xB7 0${N} / 03`,h("stage-instruction").textContent=it?"\u4E00\u4E2A\u81EA\u7531\u5EA6\uFF0C\u4F1A\u5E26\u6765\u600E\u6837\u7684\u52A8\u4F5C\uFF1F":c.phase==="scan"?"\u70B9\u4E00\u70B9\u5DE6\u817F\uFF0C\u53D1\u73B0\u5B83\u7684\u72EC\u7ACB\u52A8\u4F5C":c.phase==="unlocked"?"\u81EA\u7531\u5EA6\u627E\u9F50\u4E86\uFF0C\u770B\u5B83\u4EEC\u4E00\u8D77\u914D\u5408":c.phase==="challenge"?"\u8BD5\u7740\u6446\u52A8\u5DE6\u9ACB\uFF0C\u89C2\u5BDF\u5931\u8861\u8FB9\u754C":"\u4F60\u53D1\u73B0\u4E86\uFF1A\u52A8\u4F5C\u9700\u8981\u76F8\u4E92\u914D\u5408",h("stage-task-detail").textContent=_.motionSource==="teaching"?"\u6B63\u5728\u6F14\u793A\u72EC\u7ACB\u52A8\u4F5C \xB7 \u968F\u540E\u56DE\u5230\u539F\u59FF\u6001":c.mode==="chain"?"\u9ACB\u2014\u819D\u2014\u8E1D\u6B63\u5728\u914D\u5408 \xB7 \u5BF9\u4FA7\u817F\u53C2\u4E0E\u652F\u6491":it?"\u70B9\u9009\u90E8\u4F4D\u770B\u52A8\u4F5C\uFF0C\u6309\u4F4F\u90E8\u4F4D\u53EF\u62D6\u52A8":c.phase==="scan"?`\u5DF2\u53D1\u73B0 ${c.discovered.size} / ${l.joints.length} \u4E2A\u6848\u4F8B \xB7 \u6BCF\u70B9\u4E2D\u4E00\u5904\uFF0CG1 \u90FD\u4F1A\u52A8\u7ED9\u4F60\u770B`:c.phase==="unlocked"?"\u70B9\u51FB\u4E0B\u65B9\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\uFF0C\u6BD4\u8F83\u72EC\u7ACB\u4E0E\u534F\u540C":c.phase==="challenge"?"\u4E3B\u52A8\u62D6\u52A8\u8D8A\u754C\u534A\u79D2\u4F1A\u503E\u659C \xB7 \u590D\u4F4D\u5373\u53EF\u518D\u8BD5":"\u590D\u4F4D\u4FDD\u7559\u8FDB\u5EA6\uFF0C\u91CD\u65B0\u63A2\u7D22\u53EF\u4ECE\u5934\u518D\u6765",At&&(h("stage-step").textContent=`\u52A8\u4F5C\u8BAD\u7EC3 \xB7 ${String(y.state.taskIndex+1).padStart(2,"0")} / ${wn.length}`,h("stage-instruction").textContent=y.state.task.title,h("stage-task-detail").textContent=y.state.status==="preview"?"\u5148\u89C2\u5BDF\u5404\u4E2A\u90E8\u4F4D\u5982\u4F55\u914D\u5408 \xB7 \u793A\u8303\u4E0D\u8BA1\u5206":y.state.status==="complete"?"\u52A8\u4F5C\u8FBE\u6210\uFF01\u6311\u6218\u4E0B\u4E00\u5173\uFF0C\u6216\u91CD\u7EC3\u5237\u65B0\u7EAA\u5F55":y.state.status==="review"?"\u6210\u7EE9\u5DF2\u63ED\u6653 \xB7 \u7EE7\u7EED\u8C03\u6574\u6216\u6362\u4E2A\u52A8\u4F5C":y.state.status==="playing"?"\u4EB2\u624B\u62D6\u52A8\u5BF9\u5E94\u80A2\u4F53 \xB7 \u6446\u597D\u540E\u70B9\u51FB\u63D0\u4EA4":"\u5148\u770B\u52A8\u4F5C\uFF0C\u518D\u81EA\u5DF1\u8BD5 \xB7 \u9700\u8981\u65F6\u53EF\u70B9\u63D0\u793A"),T.disabled=!jt||c.fallen,ae.disabled=!ye||c.fallen||c.mode==="chain",K.disabled=!jt||c.fallen||c.mode==="chain",T.textContent=c.mode==="chain"?"\u505C\u6B62\u6F14\u793A":jt?"\u6F14\u793A\u6574\u6761\u94FE":`\u627E\u5230 ${l.joints.length-c.discovered.size} \u5904\u540E\u89E3\u9501`,T.setAttribute("aria-pressed",String(c.mode==="chain")),x.disabled=c.fallen||!ye,H.disabled=c.fallen,w.disabled=!ye||c.fallen,h("fall-notice").hidden=!c.fallen}let J=V=>`${Math.round(V)}\xB0`,Q=V=>V.min>V.max?"\u65E0\u8FDE\u7EED\u53C2\u8003\u533A\u95F4":`${J(V.min)} \u81F3 ${J(V.max)}`,$=_.joints.get(a.targetJointName);x.min=String($.lower),x.max=String($.upper),x.step="any",h("lower-limit").textContent=J($.lower),h("upper-limit").textContent=J($.upper),h("range-mechanical").textContent=Q({min:$.lower,max:$.upper}),h("range-support").textContent=Q(m.scan.support),h("range-collision").textContent=Q(m.scan.combined),h("range-combined").textContent=Q({min:$.lower,max:$.upper});let ue=new $t;ue.name="knee_angle_guide",ue.position.copy(ke.position),ue.quaternion.copy(_.joints.get(a.targetJointName).base),ue.visible=!1,ke.parent.add(ue);let de=.13,pe=.025,Ee=de,je=new S(0,-1,0),Z=new S(0,0,-.082),at=_.joints.get(a.targetJointName).axis,Ue=(V,_e=Ee)=>je.clone().applyAxisAngle(at,qe.degToRad(V)).multiplyScalar(_e).add(Z),ze=Array.from({length:81},(V,_e)=>Ue($.lower+($.upper-$.lower)*_e/80)),Se=new an(new gt().setFromPoints(ze),new Ps({color:4747869,dashSize:.009,gapSize:.006,transparent:!0,opacity:.6,depthTest:!0,depthWrite:!1}));Se.computeLineDistances(),ue.add(Se);let me=new an(new gt().setFromPoints([Z,Ue(0,Ee+pe)]),new Nn({color:1535065,depthTest:!0,depthWrite:!1}));ue.add(me);let A=new an(new gt().setFromPoints([Z,Ue(0,Ee+pe)]),new Nn({color:11560247,depthTest:!0,depthWrite:!1}));ue.add(A);let ie=new Float32Array(432),Te=new gt;Te.setAttribute("position",new Nt(ie,3)),ue.add(new Ke(Te,new St({color:1535065,transparent:!0,opacity:.14,side:zt,depthTest:!0,depthWrite:!1})));let xe=new Ke(new Do(.027,.003,8,36),new St({color:1535065,depthTest:!0,depthWrite:!1}));xe.position.copy(Z),ue.add(xe);let te=new Ke(new mi(.005,8,8),new St({color:11560247,depthTest:!0,depthWrite:!1}));ue.add(te),ue.traverse(V=>{V.renderOrder=8});let P=V=>{var _e;if(!c.fallen){if(V.control){if(we(V.control),y!=null&&y.active){oe("\u9009\u4E2D\u81EA\u7531\u5EA6\u540E\uFF0C\u6309\u4F4F\u5BF9\u5E94\u80A2\u4F53\u62D6\u52A8\u3002\u6446\u597D\u540E\u518D\u63D0\u4EA4\u8BC4\u5206\u3002"),$e();return}let le=c.discover(V.control.jointName);le.unlockedNow?(h("discovery-game").classList.remove("is-unlocking"),h("discovery-game").offsetWidth,h("discovery-game").classList.add("is-unlocking"),oe("\u4E09\u4E2A\u72EC\u7ACB\u81EA\u7531\u5EA6\u627E\u9F50\u4E86\uFF01\u8FD0\u52A8\u94FE\u5DF2\u89E3\u9501\uFF0C\u8BD5\u8BD5\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\u3002")):le.added&&oe(`\u53D1\u73B0\u4E86${V.control.label}\uFF01\u518D\u627E\u627E\u53E6\u5916\u7684\u90E8\u4F4D\u3002`),Le(le.added);let it=((_e=l.joints.find(jt=>jt.name===D.jointName))==null?void 0:_e.link)??V.linkName;o(f.links.get(it).getWorldPosition(new S),D.jointName),O();return}oe(V.linkName==="head_link"?"\u8FD9\u7248 G1 \u5934\u90E8\u56FA\u5B9A\uFF0C\u6CA1\u6709\u72EC\u7ACB\u9888\u5173\u8282\u3002\u8BD5\u7740\u62D6\u52A8\u8EAF\u5E72\uFF0C\u6216\u9009\u62E9\u8170\u90E8\u8F6C\u52A8\u3002":`\u4F60\u70B9\u5230${Jx(V.linkName)}\u4E86\u3002\u8BD5\u8BD5\u5DE6\u811A\u3001\u8170\u90E8\u6216\u53CC\u81C2\uFF1B\u62D6\u52A8\u7A7A\u767D\u5904\u53EF\u4EE5\u65CB\u8F6C\u89C6\u89D2\u3002`)}},se=new ta(r,t,f,a,P,{direction:V=>y!=null&&y.active?fa(_,t,V.control.jointName,V.control.dragAxis):new re(V.control.dragAxis==="x"?1:0,V.control.dragAxis==="y"?-1:0),resolveControl:(V,_e)=>y!=null&&y.active?y.resolveControl(V,_e):_e,enabled:()=>!c.fallen&&(!(y!=null&&y.active)||y.state.status==="playing"),onCaptureChange:V=>{V&&(g.clearTransform(),c.mode==="chain"&&_.pause(),c.cancelChain(),U=!1,rt=!0,$e()),s.onGestureCapture(V)},onStart:V=>{g.clearTransform(),y!=null&&y.active||_.pause(),we(V.control),G=_.getAngle(D.jointName),j=!0,i.dataset.dragging="true"},onMove:(V,_e)=>Mt(G+_e),onEnd:()=>{j=!1,delete i.dataset.dragging,rt=!0}});function oe(V){ve=V,Pe=performance.now()+2200,h("joint-status").textContent=V}function Le(V=!1){_.demonstrateJoint(D.jointName),c.update(0,!1,"teaching");let _e={left_hip_pitch_joint:"\u9ACB\u8BA9\u6574\u6761\u817F\u524D\u540E\u6446\u52A8",left_knee_joint:"\u819D\u5F2F\u66F2\uFF0C\u5C0F\u817F\u8DDF\u7740\u8FD0\u52A8",left_ankle_pitch_joint:"\u8E1D\u8F6C\u52A8\uFF0C\u6539\u53D8\u811A\u638C\u7684\u671D\u5411"};h("feedback-kicker").textContent=V?"\u53D1\u73B0\u4E00\u4E2A\u81EA\u7531\u5EA6":c.experience==="observe"?"\u72EC\u7ACB\u52A8\u4F5C\u89C2\u5BDF":"\u518D\u770B\u4E00\u6B21\u72EC\u7ACB\u52A8\u4F5C",h("feedback-part").textContent=D.label,h("feedback-description").textContent=_e[D.jointName]??"\u89C2\u5BDF\u8FD9\u4E2A\u8F6C\u8F74\u5982\u4F55\u5E26\u52A8\u4E0B\u6E38\u90E8\u4EF6";let le=h("discovery-feedback");le.hidden=!1,le.classList.remove("is-entering"),le.offsetWidth,le.classList.add("is-entering"),De=performance.now()+2400,rt=!0,He(!0),$e()}function we(V){if(c.fallen)return;g.clearTransform(),_.motionSource!=="teaching"&&!(y!=null&&y.active)&&_.pause(),c.cancelChain(),U=!1,z=null,D=V,H.value=V.jointName,y!=null&&y.active&&y.setSelected(V.jointName);let _e=_.joints.get(V.jointName),le=_.getInteractionRange(V.jointName);x.min=String(le.min),x.max=String(le.max),h("lower-limit").textContent=J(le.min),h("upper-limit").textContent=J(le.max),h("range-mode").textContent=`${a.interactionLimits[V.jointName]?"\u4EA4\u4E92\u9650\u4F4D":"\u673A\u68B0\u9650\u4F4D"} \xB7 \u96F6\u4F4D 0\xB0`,h("range-mechanical").textContent=Q({min:_e.lower,max:_e.upper}),h("range-combined").textContent=Q(le),h("caption-label").textContent=`${V.label} \xB7 \u6A21\u578B\u89D2\u5EA6`,h("active-part-label").textContent=V.label,E.textContent="\u5F53\u524D\u90E8\u4F4D",E.setAttribute("aria-pressed","true"),w.setAttribute("aria-pressed","false"),tt(),oe(`${V.label}\u5DF2\u9009\u4E2D\u3002${V.dragAxis==="y"?"\u4E0A\u4E0B":"\u5DE6\u53F3"}\u62D6\u52A8\u90E8\u4F4D\uFF0C\u6216\u7528\u6ED1\u5757\u8C03\u6574\u3002`)}function tt(){g.clearTransform(),ye=!0,h("safety-panel").closest(".observation-panel").classList.add("is-teaching"),ue.visible=be(),h("joint-caption").removeAttribute("hidden"),h("safety-panel").removeAttribute("hidden"),C.setAttribute("aria-pressed","true"),C.innerHTML='\u9000\u51FA\u6446\u59FF <span aria-hidden="true">\xD7</span>',[x,T,L,E,w].forEach(V=>V.disabled=!1),X.hidden=!1,R.classList.add("is-active"),O(!0),rt=!0,Lt=NaN,$e(),He(!0)}function nt(){g.clearTransform(),q=!1,z=null,fe=!1,i.dataset.warning="normal",h("imbalance-edge").hidden=!0,h("pose-warning").hidden=!0,ye=!1,We=!1,Pe=0,_.reset(),c.resetPose(),W=0,p.clear(),ue.visible=!1,M.clear(),h("safety-panel").closest(".observation-panel").classList.remove("is-teaching"),h("joint-caption").setAttribute("hidden",""),h("safety-panel").setAttribute("hidden",""),C.setAttribute("aria-pressed","false"),C.innerHTML='\u5F00\u59CB\u63A2\u7D22 <span aria-hidden="true">\u2197</span>',[x,T,L,E,w].forEach(V=>V.disabled=!0),X.hidden=!1,R.classList.remove("is-active"),$e()}function $e(){let V=_.getAngle(D.jointName),_e=_.joints.get(D.jointName),le=String(_.getRequestedAngle(D.jointName)),it=J(V);if(x.value!==le&&(x.value=le),x.getAttribute("aria-valuetext")!==it&&x.setAttribute("aria-valuetext",it),d("angle-value",it),d("stage-angle",it),d("chain-readout",`\u5DE6\u9ACB ${J(_.getAngle(a.jointNames.leftHipPitch))} \xB7 \u5DE6\u819D ${J(_.getAngle(a.jointNames.leftKnee))} \xB7 \u5DE6\u8E1D ${J(_.getAngle(a.jointNames.leftAnklePitch))} \xB7 \u9AA8\u76C6 \u2193${(_.pelvisDrop*100).toFixed(1)} cm`),O(),c.fallen){d("joint-status","\u5931\u53BB\u5E73\u8861\uFF01\u70B9\u51FB\u201C\u5168\u8EAB\u590D\u4F4D\u201D\u540E\u53EF\u4EE5\u7EE7\u7EED\u3002");return}if(performance.now()<Pe){d("joint-status",ve);return}if(_.motionSource==="teaching"){d("joint-status","\u72EC\u7ACB\u52A8\u4F5C\u6F14\u793A\uFF1A\u7F13\u6162\u8F6C\u52A8\u3001\u7A0D\u4F5C\u505C\u7559\uFF0C\u518D\u56DE\u5230\u539F\u59FF\u6001\u3002");return}ye?m.last.balance.state==="outside"?d("joint-status",c.experience==="observe"?"\u8D28\u5FC3\u5728\u7B80\u5316\u652F\u6491\u8303\u56F4\u5916\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u89C2\u5BDF\u6216\u590D\u4F4D\u3002":"\u5931\u8861\u4E86\uFF01\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C\uFF0C\u8BA9\u8D28\u5FC3\u56DE\u5230\u652F\u6491\u8303\u56F4\u3002"):z?d("joint-status",`${D.label}\u5DF2\u5230\u4EA4\u4E92${z}\uFF0C\u8BD5\u7740\u6362\u4E2A\u65B9\u5411\u3002`):m.last.overlapCollision?d("joint-status",`${m.last.overlapCollision.label}\u4EE3\u7406\u76D2\u91CD\u53E0\u3002\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C\u3002`):V>=_e.upper-.01?d("joint-status","\u5DF2\u5230 URDF \u6A21\u578B\u673A\u68B0\u4E0A\u9650\u3002"):V<=_e.lower+.01?d("joint-status","\u5DF2\u5230 URDF \u6A21\u578B\u673A\u68B0\u4E0B\u9650\u3002"):c.mode==="chain"?d("joint-status","\u9ACB\u2014\u819D\u2014\u8E1D\u6B63\u5728\u914D\u5408\uFF0C\u5BF9\u4FA7\u817F\u652F\u6491\u3002\u62D6\u52A8\u53EF\u5207\u56DE\u5355\u5173\u8282\u3002"):Math.abs(V)<.01?d("joint-status","\u5DF2\u6062\u590D\u6A21\u578B\u96F6\u4F4D\u3002"):d("joint-status","\u62D6\u90E8\u4F4D\u6446\u59FF\u52BF\uFF0C\u62D6\u7A7A\u767D\u8F6C\u89C6\u89D2\uFF1B\u8B66\u544A\u4E0D\u4F1A\u62E6\u4F4F\u4F60\u3002"):d("joint-status","\u62D6\u52A8\u5DE6\u811A\u3001\u8170\u90E8\u6216\u624B\u81C2\uFF0C\u8BD5\u7740\u7ED9 G1 \u6446\u4E2A\u59FF\u52BF\u3002")}function vt(V){ue.updateWorldMatrix(!0,!1);let _e=Pd(ue.matrixWorld,Z,at,de+pe,0,.018);Ee=Math.max(0,_e-pe),ue.visible=ye&&be()&&Ee>.03;for(let le=0;le<81;le++)Se.geometry.attributes.position.setXYZ(le,...Ue($.lower+($.upper-$.lower)*le/80).toArray());Se.geometry.attributes.position.needsUpdate=!0,Se.computeLineDistances(),me.geometry.attributes.position.setXYZ(1,...Ue(0,Ee+pe).toArray()),me.geometry.attributes.position.needsUpdate=!0,A.geometry.attributes.position.setXYZ(1,...Ue(V,Ee+pe).toArray()),A.geometry.attributes.position.needsUpdate=!0,te.position.copy(Ue(V,Ee+pe));for(let le=0;le<48;le++){let it=Ue(V*le/48),jt=Ue(V*(le+1)/48);ie.set([...Z.toArray(),...it.toArray(),...jt.toArray()],le*9)}Te.attributes.position.needsUpdate=!0}function He(V=!1){var gn,xt,Ze;let _e=performance.now();if(!V&&_e-Re<a.safety.updateIntervalSeconds*1e3)return;Re=_e,g.clearTransform();let le=m.evaluate();q=le.balance.state==="outside";let it=_.motionSource==="teaching";i.dataset.warning=it?"teaching":le.severity,h("imbalance-edge").hidden=it||le.severity!=="danger"||!!(y!=null&&y.active&&!le.overlapCollision);let jt=h("pose-warning"),At=le.collisions.filter(st=>st.state!=="clear"),qt=At.filter(st=>st.state==="overlap");if(fe=!it&&le.severity!=="normal"||z!==null,Y=void 0,Ae.copy(le.com),jt.dataset.state=le.severity==="danger"?"danger":"caution",qt.length){Y=Oc(qt,f,D.jointName);let st=qt.find(ct=>ct.first===Y||ct.second===Y);d("pose-warning",`${st.label}\u53EF\u80FD\u76F8\u78B0\uFF0C\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C`)}else if(z)Y=(gn=f.jointToLink.get(D.jointName))==null?void 0:gn.name,d("pose-warning",`${D.label}\u5DF2\u5230\u4EA4\u4E92${z}`);else if(q)d("pose-warning",y!=null&&y.active?"\u652F\u6491\u6295\u5F71\u8D8A\u754C \xB7 \u672C\u5173\u53EA\u8BC4\u59FF\u6001\u5339\u914D":"\u5931\u8861\u4E86\uFF01\u8BD5\u7740\u628A\u52A8\u4F5C\u6536\u56DE\u6765");else if(At.length){Y=Oc(At,f,D.jointName);let st=At.find(ct=>ct.first===Y||ct.second===Y);d("pose-warning",`${st.label}\u63A5\u8FD1\uFF0C\u8BD5\u7740\u6362\u4E2A\u59FF\u52BF`)}else d("pose-warning","\u8D28\u5FC3\u63A5\u8FD1\u652F\u6491\u8FB9\u754C\uFF0C\u7EE7\u7EED\u8BD5\u8BD5\u770B");let Kt={balanced:["\u5E73\u8861","\u4F4D\u4E8E\u652F\u6491\u8303\u56F4\u5185"],near:["\u63A5\u8FD1\u8FB9\u754C","\u8D28\u5FC3\u9760\u8FD1\u652F\u6491\u8303\u56F4\u8FB9\u7F18"],outside:["\u5931\u8861\u8B66\u544A","\u8D28\u5FC3\u6295\u5F71\u8D85\u51FA\u7B80\u5316\u652F\u6491\u8303\u56F4"]},[b,N]=Kt[le.balance.state],F=h("balance-state");d("balance-state",it?"\u6559\u5B66\u52A8\u4F5C \xB7 \u4EC5\u89C2\u5BDF":b),F.dataset.state=le.balance.state,d("balance-detail",it?`\u5355\u8F74\u52A8\u4F5C\u53EF\u80FD\u6539\u53D8\u811A\u5E95\u63A5\u89E6\uFF0C\u652F\u6491\u4E3A\u51E0\u4F55\u8FD1\u4F3C\uFF1B\u672C\u6BB5\u4E0D\u89E6\u53D1\u503E\u5012\u3002${N}`:`${N} \xB7 ${le.supportMode==="double"?"\u53CC\u811A":le.supportMode==="single"?"\u5355\u811A":"\u672A\u63A5\u5730"} \xB7 \u652F\u6491\u8FD1\u4F3C${le.balance.approximate?" / \u8D28\u5FC3\u8FD1\u4F3C":""}`),h("analysis-details").dataset.state=it?"teaching":le.severity,d("com-coordinates",`CoM \u6295\u5F71 \xB7 X ${le.balance.projection.x.toFixed(2)} / Z ${le.balance.projection.z.toFixed(2)} m`);let k=h("collision-status");k.dataset.state=At.some(st=>st.state==="overlap")?"overlap":At.length?"near":"clear",d("collision-status",At.length?`\u63A5\u8FD1 / \u91CD\u53E0\uFF1A${At.map(st=>st.label).join("\u3001")}`:`${a.safety.collisionPairs.length} \u7EC4\u5173\u952E\u90E8\u4F4D\u672A\u53D1\u73B0\u63A5\u8FD1`);let B=[...new Set(At.flatMap(st=>[st.first,st.second]))],ge=((xt=l.joints.find(st=>st.name===D.jointName))==null?void 0:xt.link)??((Ze=f.jointToLink.get(D.jointName))==null?void 0:Ze.name)??a.targetLinkName,Me=y!=null&&y.active?[D].flatMap(st=>{var Hs;let ct=(Hs=f.jointToLink.get(st.jointName))==null?void 0:Hs.name,An=st.jointName.split("_")[0];return[ct,.../shoulder|elbow/.test(st.jointName)?[`${An}_elbow_link`,`${An}_wrist_pitch_link`,`${An}_rubber_hand`]:[]].filter(Ei=>!!Ei)}):[];p.highlightChain(Me.length?Me:U?l.links:[ge],ge,3308134,B),p.update(0,Oe.matches),M.update(le.balance,le.com,le.contactPlaneY);let Ce=[...le.balance.polygon,{x:le.com.x,z:le.com.z}],Ie=Math.min(...Ce.map(st=>st.x)),Ve=Math.max(...Ce.map(st=>st.x)),Ge=Math.min(...Ce.map(st=>st.z)),Xe=Math.max(...Ce.map(st=>st.z)),wt=Math.min(154/Math.max(Xe-Ge,.1),45/Math.max(Ve-Ie,.1)),Zt=st=>[90+(st.z-(Ge+Xe)/2)*wt,32-(st.x-(Ie+Ve)/2)*wt];h("balance-map-outline").setAttribute("d",le.balance.polygon.length<3?"":le.balance.polygon.map((st,ct)=>`${ct?"L":"M"}${Zt(st).join(" ")}`).join(" ")+" Z");let It=Zt(le.com);h("balance-map-point").setAttribute("cx",String(It[0])),h("balance-map-point").setAttribute("cy",String(It[1])),h("balance-map").dataset.state=le.balance.state,rt=!1,$e()}C.addEventListener("click",()=>{ye?nt():we(D)}),H.addEventListener("change",()=>{let V=I.find(_e=>_e.jointName===H.value);V&&we(V)}),ae.addEventListener("click",()=>{ye&&!c.fallen&&Le()});for(let V of["observe","challenge"])h(`mode-${V}`).addEventListener("click",()=>{if(c.experience===V){y==null||y.leave();return}y==null||y.leave(),c.setExperience(V),Xt(),We=!1,we(D),h("discovery-feedback").hidden=!0,De=0,oe(V==="observe"?"\u81EA\u7531\u89C2\u5BDF\uFF1A\u70B9\u90E8\u4F4D\u770B\u72EC\u7ACB\u52A8\u4F5C\uFF0C\u6216\u76F4\u63A5\u6F14\u793A\u6574\u6761\u5DE6\u817F\u94FE\u3002":"\u53D1\u73B0\u6311\u6218\uFF1A\u70B9\u51FB\u5DE6\u9ACB\u3001\u5DE6\u819D\u3001\u5DE6\u8E1D\uFF0C\u6BCF\u627E\u5230\u4E00\u5904\u90FD\u4F1A\u7ACB\u5373\u6F14\u793A\u3002"),s.onChain(),$e()});R.addEventListener("click",()=>{let V=I.find(_e=>_e.jointName===he.name);P({linkName:he.link,jointName:V.jointName,control:V,correct:V.jointName===a.targetJointName}),We=!1}),X.addEventListener("click",()=>{he=l.joints.find(V=>!c.discovered.has(V.name))??l.joints[0],We=!0,R.querySelector("span").textContent=he.label,R.setAttribute("aria-label",`\u9009\u4E2D\u6A21\u578B\u4E0A\u7684${he.label}`),o(f.links.get(he.link).getWorldPosition(new S),he.name),oe(`\u7EFF\u8272\u6807\u8BB0\u6307\u5411\u5DE6${he.label}\uFF0C\u70B9\u51FB\u6A21\u578B\u6216\u6807\u8BB0\u8BD5\u8BD5\u770B\u3002`)}),E.addEventListener("click",()=>{U=!1,E.setAttribute("aria-pressed","true"),w.setAttribute("aria-pressed","false"),He(!0)}),w.addEventListener("click",()=>{U=!0,E.setAttribute("aria-pressed","false"),w.setAttribute("aria-pressed","true"),He(!0)});function Mt(V){if(c.fallen)return;g.clearTransform(),c.cancelChain(),U=!1,Pe=0,h("discovery-feedback").hidden=!0,De=0,_.setControlledJoint(D.jointName,V),y!=null&&y.active&&y.markInput();let _e=_.getInteractionRange(D.jointName);z=a.interactionLimits[D.jointName]?V<=_e.min+.005?"\u4E0B\u9650":V>=_e.max-.005?"\u4E0A\u9650":null:null,rt=!0,$e(),vt(_.getAngle(a.targetJointName)),He()}x.addEventListener("input",()=>Mt(Number(x.value))),x.addEventListener("keydown",V=>{let _e=_.getRequestedAngle(D.jointName),le=_.getInteractionRange(D.jointName),it={ArrowLeft:_e-1,ArrowDown:_e-1,ArrowRight:_e+1,ArrowUp:_e+1,Home:le.min,End:le.max};V.key in it&&(V.preventDefault(),Mt(it[V.key]))}),T.addEventListener("click",()=>{if(c.mode==="chain"){_.pause(),c.cancelChain(),U=!1,$e(),He(!0);return}if(!c.beginChain())return;g.clearTransform(),U=!0,z=null,E.setAttribute("aria-pressed","false"),w.setAttribute("aria-pressed","true");let V=l.presets.find(_e=>_e.id===K.value);_.demonstrateChain(V.kneeDegrees),oe("\u5148\u5E73\u6ED1\u56DE\u5230\u7AD9\u59FF\uFF0C\u518D\u770B\u9ACB\u3001\u819D\u3001\u8E1D\u4E00\u8D77\u914D\u5408\u3002"),$e(),He(!0),s.onChain()});function Xt(){g.clearTransform(),z=null,Pe=0,_.reset(),c.resetPose(),W=0,U=!1,h("discovery-feedback").hidden=!0,De=0,$e(),vt(0),He(!0)}L.addEventListener("click",Xt),h("recover-pose").addEventListener("click",Xt),h("restart-game").addEventListener("click",()=>{c.restart(),Xt()});let zs=()=>{document.hidden&&(y==null||y.suspend(),_.motionSource!=="teaching"&&_.pause(),c.cancelChain(),c.update(0,!1),$e())};document.addEventListener("visibilitychange",zs);let Un=new S;return y=new pa({pose:_,scene:n,camera:t,viewer:i,controls:I,labels:Object.fromEntries(I.map(V=>[V.jointName,V.label])),onEnter:()=>{We=!1,Xt(),tt(),s.onTraining()},onExit:()=>{Xt(),s.onChain()},onPoseReset:Xt,onChoose:V=>{let _e=I.find(le=>le.jointName===V);_e&&we(_e)},onMove:(V,_e)=>{let le=I.find(it=>it.jointName===V);le&&(we(le),Mt(_e))},onChanged:()=>{rt=!0,$e(),He(!0)},conditions:()=>(He(!0),{blocked:!!m.last.overlapCollision,dragging:j})}),nt(),{update(V,_e){g.clearTransform();let le=_.motionSource,it=_.update(V);it&&(rt=!0),y!=null&&y.active&&it&&_.maintainSupportAnchor(),le==="teaching"&&_.motionSource!=="teaching"&&(He(!0),$e()),c.mode==="chain"&&!_.animating&&(c.finishChain(),U=!1,oe(c.experience==="observe"?"\u94FE\u6761\u6F14\u793A\u5B8C\u6210\u3002\u70B9\u9009\u4E00\u4E2A\u90E8\u4F4D\uFF0C\u6BD4\u8F83\u72EC\u7ACB\u52A8\u4F5C\u4E0E\u76F8\u4E92\u914D\u5408\u7684\u533A\u522B\u3002":"\u94FE\u6761\u6F14\u793A\u5B8C\u6210\uFF01\u73B0\u5728\u5355\u72EC\u62D6\u52A8\u5DE6\u9ACB\uFF0C\u8BD5\u8BD5\u5931\u8861\u8FB9\u754C\u3002"),rt=!0,$e());let jt=_.getAngle(D.jointName);if(jt!==Lt&&(Lt=jt,$e(),ye&&be()&&vt(_.getAngle(a.targetJointName))),Pe>0&&performance.now()>=Pe&&(Pe=0,$e()),p.update(V,Oe.matches),ye&&rt&&He(),y!=null&&y.active){let Kt=y.state.status;y.update(V,!!m.last.overlapCollision),Kt!==y.state.status&&$e()}if(De>0&&performance.now()>=De&&(h("discovery-feedback").hidden=!0,De=0),c.update(V,ye&&q&&!(y!=null&&y.active),le==="teaching"?"teaching":_.motionSource)){_.pause(),W=0;let{projection:Kt,polygon:b}=m.last.balance,N=new S,F=1/0;for(let k=0;k<b.length;k++){let B=new S(b[k].x,0,b[k].z),Me=new S(b[(k+1)%b.length].x,0,b[(k+1)%b.length].z).clone().sub(B),Ce=qe.clamp(Kt.clone().sub(B).dot(Me)/(Me.lengthSq()||1),0,1),Ie=B.addScaledVector(Me,Ce),Ve=Ie.distanceToSquared(Kt);Ve<F&&(F=Ve,N=Ie)}ne.copy(N).setY(m.last.contactPlaneY),ee.copy(Kt).sub(N).setY(0).normalize(),ee.lengthSq()<1e-8&&ee.set(1,0,0),$e()}We&&((f.links.get(he.link)??ke).getWorldPosition(Un),Un.project(t));let At=!We||c.fallen||Un.z>1||Un.z<-1||Math.abs(Un.x)>.94||Math.abs(Un.y)>.9;R.hidden!==At&&(R.hidden=At),R.hidden||(R.style.left=(Un.x*.5+.5)*i.clientWidth+"px",R.style.top=(-Un.y*.5+.5)*i.clientHeight+"px"),c.fallen?(W+=V,g.renderFall(ee,ne,W/.65,Oe.matches)):g.render(_e/1e3,ye&&q&&!j&&_.motionSource==="manual"&&c.experience==="challenge"&&!(y!=null&&y.active),Oe.matches);let qt=h("pose-warning");if(ye&&fe&&!c.fallen){Y&&Ae.copy(Rd(f,Y)),qt.hidden&&(qt.hidden=!1);let Kt=Cd(Ae,t,i.clientWidth,i.clientHeight,qt.offsetWidth,qt.offsetHeight);qt.hidden!==!Kt&&(qt.hidden=!Kt),Kt&&(qt.style.left=`${Kt.x}px`,qt.style.top=`${Kt.y}px`)}else qt.hidden||(qt.hidden=!0);return ye||it||c.fallen},dispose(){document.removeEventListener("visibilitychange",zs),y==null||y.dispose(),se.dispose(),p.clear(),M.dispose(),g.dispose(),ue.removeFromParent(),h("imbalance-edge").hidden=!0,h("pose-warning").hidden=!0,h("fall-notice").hidden=!0}}}var ma=class{ratio=1;base=1;scale=1;warmup=2;seconds=0;frames=0;resize(e,t,n){let i=Math.max(1,e*t);return this.base=Math.min(1,Number.isFinite(n)&&n>0?n:1,Math.sqrt(1e6/i)),this.ratio=this.base*this.scale,this.resetSamples(),this.ratio}observe(e,t){if(!t||!Number.isFinite(e)||e<=0||e>.2)return this.resetSamples(),null;if(this.warmup>0)return this.warmup-=e,null;if(this.seconds+=e,this.frames++,this.seconds<1.5||this.frames<30)return null;let n=this.seconds/this.frames;return this.seconds=0,this.frames=0,n<=.027||this.scale<=.65?null:(this.scale=Math.max(.65,this.scale*.85),this.ratio=this.base*this.scale,this.ratio)}resetSamples(){this.warmup=2,this.seconds=0,this.frames=0}};var ga=class{constructor(e,t){this.canvas=e;this.controls=t;this.document=e.ownerDocument,this.window=this.document.defaultView,e.addEventListener("pointerdown",this.track),e.addEventListener("pointerup",this.forget),e.addEventListener("pointercancel",this.forget),e.addEventListener("lostpointercapture",this.lostCapture),this.window.addEventListener("pointerup",this.outsideEnd,!0),this.window.addEventListener("pointercancel",this.outsideEnd,!0),this.window.addEventListener("blur",this.cancelAll),this.document.addEventListener("visibilitychange",this.visibilityChanged)}pointers=new Map;document;window;track=e=>{this.controls.enabled&&this.pointers.set(e.pointerId,e.pointerType)};forget=e=>{this.pointers.delete(e.pointerId)};lostCapture=e=>{this.cancel(e.pointerId)};outsideEnd=e=>{e.composedPath().includes(this.canvas)||this.cancel(e.pointerId)};visibilityChanged=()=>{this.document.hidden&&this.cancelAll()};cancelAll=()=>{for(let e of[...this.pointers.keys()])this.cancel(e)};cancel(e){let t=this.pointers.get(e);t!==void 0&&(this.pointers.delete(e),this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:e,pointerType:t})))}dispose(){this.cancelAll(),this.canvas.removeEventListener("pointerdown",this.track),this.canvas.removeEventListener("pointerup",this.forget),this.canvas.removeEventListener("pointercancel",this.forget),this.canvas.removeEventListener("lostpointercapture",this.lostCapture),this.window.removeEventListener("pointerup",this.outsideEnd,!0),this.window.removeEventListener("pointercancel",this.outsideEnd,!0),this.window.removeEventListener("blur",this.cancelAll),this.document.removeEventListener("visibilitychange",this.visibilityChanged)}};var dt=s=>document.getElementById(s),Bs=dt("viewer"),xa=matchMedia("(prefers-reduced-motion: reduce)"),kc=[...document.querySelectorAll("[data-view]")],Zx=[...document.querySelectorAll("button:disabled")],cn,Be,Ut,Vn,ln,Os,Er=1,Fs=0,Tr=!1,_a,Od=!1,zc=new ma,Yi=!0,Fd=new S;function $i(s){Tr=s,dt("auto-rotate").setAttribute("aria-pressed",String(s)),dt("auto-rotate").querySelector("span").textContent=s?"\u6682\u505C\u65CB\u8F6C":"\u81EA\u52A8\u65CB\u8F6C"}function ks(){kc.forEach(s=>s.setAttribute("aria-pressed","false")),ln=null}function Hc(){if(!cn)return;let s=Bs.clientWidth,e=Bs.clientHeight;Ut.aspect=s/e,Ut.updateProjectionMatrix(),cn.setPixelRatio(zc.resize(s,e,devicePixelRatio)),cn.setSize(s,e),Yi=!0}function Sr(s,e=!1,t=!1){$i(!1),Be.enableDamping=!1,Be.update(),Be.enableDamping=!0,kc.forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.view===s)));let n={front:Math.PI/2,side:Math.PI,back:-Math.PI/2,overview:Math.PI/4},i=Er*Math.max(1,.75/Ut.aspect)*(t?1.1:1),r=Fd.clone();t&&(r.y+=.06);let o=new S(Math.sin(n[s])*i,i*.14,Math.cos(n[s])*i).add(r);e||xa.matches?(Ut.position.copy(o),Be.target.copy(r),ln=null,Be.update()):ln={from:Ut.position.clone(),to:o,fromTarget:Be.target.clone(),toTarget:r,start:performance.now()},dt("view-name").textContent=t?"\u8BAD\u7EC3\u5168\u8EAB\u89C6\u89D2":{front:"\u6B63\u9762\u89C6\u89D2",side:"\u4FA7\u9762\u89C6\u89D2",back:"\u80CC\u9762\u89C6\u89D2",overview:"\u659C\u524D\u89C6\u89D2"}[s]}function Qx(s,e){$i(!1),ks(),Be.enableDamping=!1,Be.update(),Be.enableDamping=!0;let t=/hip|knee|ankle/.test(e),n=e.startsWith("right_"),i=s.clone();i.y=t?.68:qe.clamp(i.y,.6,1.05);let r=Er*Math.max(t?.98:.8,.64/Ut.aspect),o=t?new S(.45,.12,n?.9:-.9):new S(.9,.12,n?.55:-.55),a=i.clone().add(o.normalize().multiplyScalar(r));xa.matches?(Be.target.copy(i),Ut.position.copy(a),Be.update()):ln={from:Ut.position.clone(),to:a,fromTarget:Be.target.clone(),toTarget:i,start:performance.now(),duration:400},dt("view-name").textContent="\u5173\u8282\u89C2\u5BDF\u89C6\u89D2"}function ey(s){console.error("G1 viewer:",s),dt("loading").hidden=!1,dt("loading-message").textContent="\u6A21\u578B\u6682\u65F6\u65E0\u6CD5\u663E\u793A",dt("loading").querySelector("small").textContent="\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u652F\u6301 WebGL\uFF0C\u5E76\u901A\u8FC7\u672C\u5730\u9884\u89C8\u5730\u5740\u6253\u5F00\u3002",dt("loading").querySelector(".loader-ring").hidden=!0,dt("retry").hidden=!1}async function ty(){try{cn=new cr({antialias:!0,alpha:!0,powerPreference:"high-performance"}),cn.outputColorSpace=Et,cn.toneMapping=$l,cn.toneMappingExposure=1.22,dt("canvas-host").appendChild(cn.domElement),cn.domElement.setAttribute("aria-hidden","true"),Vn=new Rs,Ut=new kt(31,1,.01,100),Be=new Yo(Ut,cn.domElement),Be.enableDamping=!0,Be.dampingFactor=.085,Be.enablePan=!1,Be.minPolarAngle=.25,Be.maxPolarAngle=Math.PI*.53,Be.rotateSpeed=.6,Be.zoomSpeed=.7,Be.addEventListener("change",()=>{Yi=!0}),Be.addEventListener("start",()=>{$i(!1),ks(),dt("view-name").textContent="\u81EA\u7531\u89C6\u89D2"}),new ga(cn.domElement,Be);let s=new Jo,e=new As(cn);Vn.environment=e.fromScene(s,.04).texture,s.dispose(),e.dispose(),Vn.add(new Bo(16777215,7898486,2));let t=new zi(16774884,3);t.position.set(3,5,4),Vn.add(t);let n=new zi(14216420,2);n.position.set(-3,2,-4),Vn.add(n),Os=(await new $o().loadAsync("assets/g1-sample.glb",_=>{_.total&&(dt("loading-message").textContent=`\u6B63\u5728\u88C5\u914D G1\u2026 ${Math.round(_.loaded/_.total*100)}%`)})).scene,Os.traverse(_=>{_.isMesh&&(_.material.side=zt)}),Vn.add(Os);let r=new mt().setFromObject(Os),o=r.getSize(new S),a=r.getCenter(new S);Be.target.copy(a),Fd.copy(a),Er=o.y/(2*Math.tan(qe.degToRad(Ut.fov/2)))*1.32,Be.minDistance=Er*.47,Be.maxDistance=Er*2.2;let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d"),u=c.createRadialGradient(64,64,0,64,64,64);u.addColorStop(0,"rgba(24,48,32,.3)"),u.addColorStop(.4,"rgba(24,48,32,.12)"),u.addColorStop(1,"rgba(24,48,32,0)"),c.fillStyle=u,c.fillRect(0,0,128,128);let h=new Ke(new lr(1.35,1.1),new St({map:new To(l),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(a.x,r.min.y+.002,a.z),Vn.add(h);let d=new Ke(new Io(.62,.622,96),new St({color:7179379,transparent:!0,opacity:.3,side:zt,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(a.x,r.min.y+.001,a.z),Vn.add(d),Hc(),Sr("overview",!0),Zx.forEach(_=>{_.disabled=!1});let f=await fetch("assets/model-info.json").then(_=>{if(!_.ok)throw new Error("Unable to load model metadata");return _.json()}),g=!0;_a=Ud({model:Os,camera:Ut,scene:Vn,viewer:Bs,canvas:cn.domElement,records:f.links,onSelect:Qx,onChain:()=>Sr("side"),onTraining:()=>Sr("overview",!1,!0),onGestureCapture:_=>{_?($i(!1),ks(),Be.enableDamping=!1,Be.update(),Be.enableDamping=!0,g=Be.enabled,Be.enabled=!1):Be.enabled=g}}),dt("loading").hidden=!0,document.body.dataset.ready="true",requestAnimationFrame(Bd)}catch(s){ey(s)}}function Bd(s){if(requestAnimationFrame(Bd),document.hidden||Fs&&s-Fs<1e3/60-.5)return;let e=Fs?Math.max(0,(s-Fs)/1e3):0;Fs=s;let t=!!ln||Tr;if(ln){let l=Math.min(Math.max(s-ln.start,0)/(ln.duration??650),1),c=l*l*(3-2*l),u=new Hn().setFromVector3(ln.from.clone().sub(ln.fromTarget)),h=new Hn().setFromVector3(ln.to.clone().sub(ln.toTarget)),d=h.theta-u.theta;d=Math.atan2(Math.sin(d),Math.cos(d));let f=new Hn(qe.lerp(u.radius,h.radius,c),qe.lerp(u.phi,h.phi,c),u.theta+d*c);Be.target.lerpVectors(ln.fromTarget,ln.toTarget,c),Ut.position.setFromSpherical(f).add(Be.target),l===1&&(ln=null)}else if(Tr){let l=Ut.position.clone().sub(Be.target);l.applyAxisAngle(new S(0,1,0),e*.16),Ut.position.copy(Be.target).add(l)}Be.update();let n=Ut.position.clone().sub(Be.target),i=(qe.radToDeg(Math.atan2(n.z,n.x))+360)%360,r=String(Math.round(i)%360).padStart(3,"0")+"\xB0";dt("azimuth").textContent!==r&&(dt("azimuth").textContent=r);let o=(_a==null?void 0:_a.update(e,s))??!1,a=zc.observe(e,t||o);a!==null&&(cn.setPixelRatio(a),Yi=!0),(Yi||t||o)&&(cn.render(Vn,Ut),Yi=!1)}kc.forEach(s=>s.addEventListener("click",()=>Sr(s.dataset.view)));dt("auto-rotate").addEventListener("click",()=>{ks(),$i(!Tr),dt("view-name").textContent=Tr?"\u73AF\u7ED5\u89C2\u5BDF":"\u81EA\u7531\u89C6\u89D2"});dt("reset").addEventListener("click",()=>Sr("overview"));function ya(s){ks();let e=Ut.position.clone().sub(Be.target);e.setLength(qe.clamp(e.length()*s,Be.minDistance,Be.maxDistance)),Ut.position.copy(Be.target).add(e),Be.update()}dt("zoom-in").addEventListener("click",()=>ya(.85));dt("zoom-out").addEventListener("click",()=>ya(1.18));async function kd(){try{await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{dt("fullscreen").title="\u8BF7\u5728\u89E6\u6478\u6216\u70B9\u51FB\u540E\u91CD\u8BD5\u5168\u5C4F"}}async function ny(){document.fullscreenElement?await document.exitFullscreen():await kd()}dt("fullscreen").addEventListener("click",ny);dt("fullscreen-reenter").addEventListener("click",kd);document.documentElement.requestFullscreen||(dt("fullscreen").hidden=!0,dt("fullscreen-reenter").hidden=!0);document.addEventListener("fullscreenchange",()=>{let s=!!document.fullscreenElement;s&&(Od=!0),dt("fullscreen").setAttribute("aria-label",s?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F\u67E5\u770B"),dt("fullscreen").setAttribute("aria-pressed",String(s)),dt("fullscreen-reenter").hidden=s||!Od,Hc()});dt("retry").addEventListener("click",()=>location.reload());Bs.addEventListener("keydown",s=>{if(!(!Os||s.target!==Bs)){if(s.key==="+"||s.key==="=")s.preventDefault(),ya(.85);else if(s.key==="-")s.preventDefault(),ya(1.18);else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s.key)){s.preventDefault(),$i(!1),ks();let e=new Hn().setFromVector3(Ut.position.clone().sub(Be.target));s.key==="ArrowLeft"&&(e.theta-=.15),s.key==="ArrowRight"&&(e.theta+=.15),s.key==="ArrowUp"&&(e.phi-=.1),s.key==="ArrowDown"&&(e.phi+=.1),e.phi=qe.clamp(e.phi,Be.minPolarAngle,Be.maxPolarAngle),Ut.position.setFromSpherical(e).add(Be.target),Be.update(),dt("view-name").textContent="\u81EA\u7531\u89C6\u89D2"}}});xa.addEventListener("change",()=>{xa.matches&&$i(!1)});document.addEventListener("visibilitychange",()=>{Fs=0,Yi=!0,zc.resetSamples()});for(let s of["click","input","change"])document.addEventListener(s,()=>{Yi=!0});new ResizeObserver(Hc).observe(Bs);ty();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
