(()=>{var Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,_h=1,gf=2;var cd=1,_f=2,ni=3,Gn=0,en=1,Ht=2;var yi=0,Cs=1,xh=2,yh=3,vh=4,xf=5,Fi=100,yf=101,vf=102,bh=103,Mh=104,bf=200,Mf=201,Ef=202,Sf=203,Cl=204,Pl=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,Pf=211,Lf=212,If=213,Nf=214,Df=0,Uf=1,Of=2,To=3,Ff=4,Bf=5,kf=6,zf=7,hd=0,Hf=1,Vf=2,vi=0,Gf=1,Wf=2,Xf=3,yc=4,jf=5,qf=6,Eh="attached",Yf="detached",ud=300,Is=301,Ns=302,Ll=303,Il=304,ha=306,Vi=1e3,gn=1001,Sr=1002,Bt=1003,Ao=1004;var gr=1005;var on=1006,vc=1007;var Mi=1008;var bi=1009,$f=1010,Kf=1011,bc=1012,dd=1013,_i=1014,ii=1015,wr=1016,fd=1017,pd=1018,ki=1020,Jf=1021,Mn=1023,Zf=1024,Qf=1025,zi=1026,Ds=1027,ep=1028,md=1029,tp=1030,gd=1031,_d=1033,qa=33776,Ya=33777,$a=33778,Ka=33779,Sh=35840,wh=35841,Th=35842,Ah=35843,xd=36196,Rh=37492,Ch=37496,Ph=37808,Lh=37809,Ih=37810,Nh=37811,Dh=37812,Uh=37813,Oh=37814,Fh=37815,Bh=37816,kh=37817,zh=37818,Hh=37819,Vh=37820,Gh=37821,Ja=36492,Wh=36494,Xh=36495,np=36283,jh=36284,qh=36285,Yh=36286;var Us=2300,Gi=2301,Za=2302,$h=2400,Kh=2401,Jh=2402,ip=2500;var yd=0,ua=1,Vr=2,vd=3e3,Hi=3001,sp=3200,rp=3201,bd=0,op=1,En="",St="srgb",Vt="srgb-linear",Mc="display-p3",da="display-p3-linear",Ro="linear",Et="srgb",Co="rec709",Po="p3";var ls=7680;var Zh=519,ap=512,lp=513,cp=514,Md=515,hp=516,up=517,dp=518,fp=519,Nl=35044;var Qh="300 es",Dl=1035,si=2e3,Lo=2001,Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,_r=Math.PI/180,Os=180/Math.PI;function Sn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function Ec(s,e){return(s%e+e)%e}function pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mp(s,e,t){return s!==e?(t-s)/(e-s):0}function xr(s,e,t){return(1-t)*s+t*e}function gp(s,e,t,n){return xr(s,e,1-Math.exp(-t*n))}function _p(s,e=1){return e-Math.abs(Ec(s,e*2)-e)}function xp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bp(s,e){return s+Math.random()*(e-s)}function Mp(s){return s*(.5-Math.random())}function Ep(s){s!==void 0&&(eu=s);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(s){return s*_r}function wp(s){return s*Os}function Ul(s){return(s&s-1)===0&&s!==0}function Tp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ap(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ze={DEG2RAD:_r,RAD2DEG:Os,generateUUID:Sn,clamp:kt,euclideanModulo:Ec,mapLinear:pp,inverseLerp:mp,lerp:xr,damp:gp,pingpong:_p,smoothstep:xp,smootherstep:yp,randInt:vp,randFloat:bp,randFloatSpread:Mp,seededRandom:Ep,degToRad:Sp,radToDeg:wp,isPowerOfTwo:Ul,ceilPowerOfTwo:Tp,floorPowerOfTwo:Io,setQuaternionFromProperEuler:Ap,normalize:pt,denormalize:Vn},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],x=i[4],w=i[7],I=i[2],P=i[5],C=i[8];return r[0]=o*_+a*b+l*I,r[3]=o*m+a*x+l*P,r[6]=o*p+a*w+l*C,r[1]=c*_+u*b+h*I,r[4]=c*m+u*x+h*P,r[7]=c*p+u*w+h*C,r[2]=d*_+f*b+g*I,r[5]=d*m+f*x+g*P,r[8]=d*p+f*w+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Je;function Ed(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rp(){let s=Tr("canvas");return s.style.display="block",s}var tu={};function yr(s){s in tu||(tu[s]=!0,console.warn(s))}var nu=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),iu=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Vt]:{transfer:Ro,primaries:Co,toReference:s=>s,fromReference:s=>s},[St]:{transfer:Et,primaries:Co,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[da]:{transfer:Ro,primaries:Po,toReference:s=>s.applyMatrix3(iu),fromReference:s=>s.applyMatrix3(nu)},[Mc]:{transfer:Et,primaries:Po,toReference:s=>s.convertSRGBToLinear().applyMatrix3(iu),fromReference:s=>s.applyMatrix3(nu).convertLinearToSRGB()}},Cp=new Set([Vt,da]),lt={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Yr[e].toReference,i=Yr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Yr[s].primaries},getTransfer:function(s){return s===En?Ro:Yr[s].transfer}};function Ps(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function el(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,No=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Tr("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,Do=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tl(i[o].image)):r.push(tl(i[o]))}else r=tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,$t=class s extends Wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=gn,i=gn,r=on,o=Mi,a=Mn,l=bi,c=s.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Sn(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hi?St:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Hi:vd}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?St:En}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ud;$t.DEFAULT_ANISOTROPY=1;var gt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,w=(f+1)/2,I=(p+1)/2,P=(u+d)/4,C=(h+_)/4,j=(g+m)/4;return x>w&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=P/n,r=C/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=j/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=j/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends Wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?St:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Do(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Uo=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fl=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let I=Math.sqrt(x),P=Math.atan2(I,p*b);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}let w=a*b;if(l=l*m+d*w,c=c*m+f*w,u=u*m+g*w,h=h*m+_*w,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new S,su=new It,yt=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Kr.subVectors(this.max,cr),hs.subVectors(e.a,cr),us.subVectors(e.b,cr),ds.subVectors(e.c,cr),di.subVectors(us,hs),fi.subVectors(ds,us),Ii.subVectors(hs,ds);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,di.z,0,-di.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!il(t,hs,us,ds,Kr)||(t=[1,0,0,0,1,0,0,0,1],!il(t,hs,us,ds,Kr))?!1:(Jr.crossVectors(di,fi),t=[Jr.x,Jr.y,Jr.z],il(t,hs,us,ds,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new S,new S,new S,new S,new S,new S,new S,new S],Ln=new S,$r=new yt,hs=new S,us=new S,ds=new S,di=new S,fi=new S,Ii=new S,cr=new S,Kr=new S,Jr=new S,Ni=new S;function il(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ni.fromArray(s,r);let a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ip=new yt,hr=new S,sl=new S,_n=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ip.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(sl)),this.expandByPoint(hr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new S,rl=new S,Zr=new S,pi=new S,ol=new S,Qr=new S,al=new S,Un=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=pi.dot(this.direction),l=-pi.dot(Zr),c=pi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(rl).addScaledVector(Zr,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,r){ol.subVectors(t,e),Qr.subVectors(n,e),al.crossVectors(ol,Qr);let o=this.direction.dot(al),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);let l=a*this.direction.dot(Qr.crossVectors(pi,Qr));if(l<0)return null;let c=a*this.direction.dot(ol.cross(pi));if(c<0||l+c>o)return null;let u=-a*pi.dot(al);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Dp)}lookAt(e,t,n){let i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(n,pn),mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(n,pn)),mi.normalize(),eo.crossVectors(pn,mi),i[0]=mi.x,i[4]=eo.x,i[8]=pn.x,i[1]=mi.y,i[5]=eo.y,i[9]=pn.y,i[2]=mi.z,i[6]=eo.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],w=n[11],I=n[15],P=i[0],C=i[4],j=i[8],E=i[12],T=i[1],H=i[5],K=i[9],le=i[13],N=i[2],O=i[6],W=i[10],Y=i[14],q=i[3],X=i[7],Z=i[11],se=i[15];return r[0]=o*P+a*T+l*N+c*q,r[4]=o*C+a*H+l*O+c*X,r[8]=o*j+a*K+l*W+c*Z,r[12]=o*E+a*le+l*Y+c*se,r[1]=u*P+h*T+d*N+f*q,r[5]=u*C+h*H+d*O+f*X,r[9]=u*j+h*K+d*W+f*Z,r[13]=u*E+h*le+d*Y+f*se,r[2]=g*P+_*T+m*N+p*q,r[6]=g*C+_*H+m*O+p*X,r[10]=g*j+_*K+m*W+p*Z,r[14]=g*E+_*le+m*Y+p*se,r[3]=b*P+x*T+w*N+I*q,r[7]=b*C+x*H+w*O+I*X,r[11]=b*j+x*K+w*W+I*Z,r[15]=b*E+x*le+w*Y+I*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,w=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,I=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,P=t*b+n*x+i*w+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=b*C,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*C,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=x*C,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*C,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*C,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*C,e[8]=w*C,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*C,e[12]=I*C,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,b=l*c,x=l*u,w=l*h,I=n.x,P=n.y,C=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+w)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(f-w)*P,i[5]=(1-(d+p))*P,i[6]=(m+b)*P,i[7]=0,i[8]=(g+x)*C,i[9]=(m-b)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=fs.set(i[0],i[1],i[2]).length(),o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);let c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=si){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=si){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u,g,_;if(a===si)g=(o+r)*h,_=-2*h;else if(a===Lo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new S,In=new $e,Np=new S(0,0,0),Dp=new S(1,1,1),mi=new S,eo=new S,pn=new S,ru=new $e,ou=new It,Oo=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oo.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Up=0,au=new S,ps=new It,Zn=new $e,to=new S,ur=new S,Op=new S,Fp=new It,lu=new S(1,0,0),cu=new S(0,1,0),hu=new S(0,0,1),Bp={type:"added"},kp={type:"removed"},Rt=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new S,t=new Oo,n=new It,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ur,to,this.up):Zn.lookAt(to,ur,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Zn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Rt.DEFAULT_UP=new S(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new S,Qn=new S,ll=new S,ei=new S,ms=new S,gs=new S,uu=new S,cl=new S,hl=new S,ul=new S,no=!1,ws=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),Qn.subVectors(n,t),ll.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(Qn),l=Nn.dot(ll),c=Qn.dot(Qn),u=Qn.dot(ll),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,i,r,o,a,l){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),Qn.subVectors(e,t),Nn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Nn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ms.subVectors(i,n),gs.subVectors(r,n),cl.subVectors(e,n);let l=ms.dot(cl),c=gs.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,i);let u=ms.dot(hl),h=gs.dot(hl);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ms,o);ul.subVectors(e,r);let f=ms.dot(ul),g=gs.dot(ul);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(gs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return uu.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(uu,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},io={h:0,s:0,l:0};function dl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Ec(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return lt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(kt(Qt.r*255,0,255))*65536+Math.round(kt(Qt.g*255,0,255))*256+Math.round(kt(Qt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Qt.copy(this),t);let n=Qt.r,i=Qt.g,r=Qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=St){lt.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,i=Qt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(io);let n=xr(gi.h,io.h,t),i=xr(gi.s,io.s,t),r=xr(gi.l,io.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ue;Ue.NAMES=Sd;var zp=0,xn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Cs,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wt=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new S,so=new ae,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}};var Fo=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bo=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Hp=0,bn=new $e,fl=new Rt,_s=new S,mn=new yt,dr=new yt,jt=new S,mt=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Bo:Fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(mn.min,dr.min),mn.expandByPoint(jt),jt.addVectors(mn.max,dr.max),mn.expandByPoint(jt)):(mn.expandByPoint(dr.min),mn.expandByPoint(dr.max))}mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),jt.add(_s)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new S,u[T]=new S;let h=new S,d=new S,f=new S,g=new ae,_=new ae,m=new ae,p=new S,b=new S;function x(T,H,K){h.fromArray(i,T*3),d.fromArray(i,H*3),f.fromArray(i,K*3),g.fromArray(o,T*2),_.fromArray(o,H*2),m.fromArray(o,K*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);let le=1/(_.x*m.y-m.x*_.y);isFinite(le)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(le),b.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(le),c[T].add(p),c[H].add(p),c[K].add(p),u[T].add(b),u[H].add(b),u[K].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,H=w.length;T<H;++T){let K=w[T],le=K.start,N=K.count;for(let O=le,W=le+N;O<W;O+=3)x(n[O+0],n[O+1],n[O+2])}let I=new S,P=new S,C=new S,j=new S;function E(T){C.fromArray(r,T*3),j.copy(C);let H=c[T];I.copy(H),I.sub(C.multiplyScalar(C.dot(H))).normalize(),P.crossVectors(j,H);let le=P.dot(u[T])<0?-1:1;l[T*4]=I.x,l[T*4+1]=I.y,l[T*4+2]=I.z,l[T*4+3]=le}for(let T=0,H=w.length;T<H;++T){let K=w[T],le=K.start,N=K.count;for(let O=le,W=le+N;O<W;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Lt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},du=new $e,Di=new Un,ro=new _n,fu=new S,xs=new S,ys=new S,vs=new S,pl=new S,oo=new S,ao=new ae,lo=new ae,co=new ae,pu=new S,mu=new S,gu=new S,ho=new S,uo=new S,Ye=class extends Rt{constructor(e=new mt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(pl.fromBufferAttribute(h,e),o?oo.addScaledVector(pl,u):oo.addScaledVector(pl.sub(t),u))}t.add(oo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(ro.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ro,fu)===null||Di.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(du.copy(r).invert(),Di.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,I=x;w<I;w+=3){let P=a.getX(w),C=a.getX(w+1),j=a.getX(w+2);i=fo(this,p,e,n,c,u,h,P,C,j),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);i=fo(this,o,e,n,c,u,h,b,x,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,I=x;w<I;w+=3){let P=w,C=w+1,j=w+2;i=fo(this,p,e,n,c,u,h,P,C,j),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,x=m+1,w=m+2;i=fo(this,o,e,n,c,u,h,b,x,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Vp(s,e,t,n,i,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Gn,a),l===null)return null;uo.copy(a),uo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:s}}function fo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,xs),s.getVertexPosition(l,ys),s.getVertexPosition(c,vs);let u=Vp(s,e,t,n,xs,ys,vs,ho);if(u){i&&(ao.fromBufferAttribute(i,a),lo.fromBufferAttribute(i,l),co.fromBufferAttribute(i,c),u.uv=ws.getInterpolation(ho,xs,ys,vs,ao,lo,co,new ae)),r&&(ao.fromBufferAttribute(r,a),lo.fromBufferAttribute(r,l),co.fromBufferAttribute(r,c),u.uv1=ws.getInterpolation(ho,xs,ys,vs,ao,lo,co,new ae),u.uv2=u.uv1),o&&(pu.fromBufferAttribute(o,a),mu.fromBufferAttribute(o,l),gu.fromBufferAttribute(o,c),u.normal=ws.getInterpolation(ho,xs,ys,vs,pu,mu,gu,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new S,materialIndex:0};ws.getNormal(xs,ys,vs,h.normal),u.face=h}return u}var Wi=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(_,m,p,b,x,w,I,P,C,j,E){let T=w/C,H=I/j,K=w/2,le=I/2,N=P/2,O=C+1,W=j+1,Y=0,q=0,X=new S;for(let Z=0;Z<W;Z++){let se=Z*H-le;for(let de=0;de<O;de++){let z=de*T-K;X[_]=z*b,X[m]=se*x,X[p]=N,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=P>0?1:-1,u.push(X.x,X.y,X.z),h.push(de/C),h.push(1-Z/j),Y+=1}}for(let Z=0;Z<j;Z++)for(let se=0;se<C;se++){let de=d+se+O*Z,z=d+se+O*(Z+1),$=d+(se+1)+O*(Z+1),me=d+(se+1)+O*Z;l.push(de,z,me),l.push(z,$,me),q+=6}a.addGroup(f,q,E),f+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){let e={};for(let t=0;t<s.length;t++){let n=Fs(s[t]);for(let i in n)e[i]=n[i]}return e}function Gp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wd(s){return s.getRenderTarget()===null?s.outputColorSpace:lt.workingColorSpace}var Wp={clone:Fs,merge:rn},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ko=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zt=class extends ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ms=1,Bl=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new zt(bs,Ms,e,t);i.layers=this.layers,this.add(i);let r=new zt(bs,Ms,e,t);r.layers=this.layers,this.add(r);let o=new zt(bs,Ms,e,t);o.layers=this.layers,this.add(o);let a=new zt(bs,Ms,e,t);a.layers=this.layers,this.add(a);let l=new zt(bs,Ms,e,t);l.layers=this.layers,this.add(l);let c=new zt(bs,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zo=class extends $t{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?St:En),this.texture=new zo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:yi});r.uniforms.tEquirect.value=t;let o=new Ye(i,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=on),new Bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ml=new S,qp=new S,Yp=new Je,Dn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ml.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yp.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new _n,po=new S,Rr=class{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],x=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,m-f,w-p).normalize(),n[1].setComponents(l+r,d+c,m+f,w+p).normalize(),n[2].setComponents(l+o,d+u,m+g,w+b).normalize(),n[3].setComponents(l-o,d-u,m-g,w-b).normalize(),n[4].setComponents(l-a,d-h,m-_,w-x).normalize(),t===si)n[5].setComponents(l+a,d+h,m+_,w+x).normalize();else if(t===Lo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(po.x=i.normal.x>0?e.max.x:e.min.x,po.y=i.normal.y>0?e.max.y:e.min.y,po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Td(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $p(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,d=c.usage,f=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,h){let d=u.array,f=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,c),f.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var Cr=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let b=p*d-o;for(let x=0;x<c;x++){let w=x*h-r;g.push(w,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let x=b+c*p,w=b+c*(p+1),I=b+1+c*(p+1),P=b+1+c*p;f.push(x,w,P),f.push(w,I,P)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`
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
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,n_=`#if DEPTH_PACKING == 3200
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
}`,i_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,p_=`#define MATCAP
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
}`,m_=`#define NORMAL
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
}`,g_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,x_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,M_=`#define TOON
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
}`,E_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,T_=`uniform vec3 color;
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
}`,A_=`uniform float rotation;
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
}`,R_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Kp,alphahash_pars_fragment:Jp,alphamap_fragment:Zp,alphamap_pars_fragment:Qp,alphatest_fragment:em,alphatest_pars_fragment:tm,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:om,beginnormal_vertex:am,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:ym,cube_uv_reflection_fragment:vm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Mm,displacementmap_vertex:Em,emissivemap_fragment:Sm,emissivemap_pars_fragment:wm,colorspace_fragment:Tm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Nm,fog_pars_vertex:Dm,fog_fragment:Um,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_fragment:Bm,lightmap_pars_fragment:km,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:jm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:$m,lights_fragment_begin:Km,lights_fragment_maps:Jm,lights_fragment_end:Zm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:og,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Mg,opaque_fragment:Eg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ng,shadowmask_pars_fragment:Dg,skinbase_vertex:Ug,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:Bg,specularmap_fragment:kg,specularmap_pars_fragment:zg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:jg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:$g,background_frag:Kg,backgroundCube_vert:Jg,backgroundCube_frag:Zg,cube_vert:Qg,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:s_,equirect_vert:r_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:x_,meshphysical_vert:y_,meshphysical_frag:v_,meshtoon_vert:b_,meshtoon_frag:M_,points_vert:E_,points_frag:S_,shadow_vert:w_,shadow_frag:T_,sprite_vert:A_,sprite_frag:R_},ue={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:rn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:rn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:rn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:rn([ue.points,ue.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:rn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:rn([ue.common,ue.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:rn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:rn([ue.sprite,ue.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:rn([ue.common,ue.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:rn([ue.lights,ue.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Hn.physical={uniforms:rn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var mo={r:0,b:0,g:0};function C_(s,e,t,n,i,r,o){let a=new Ue(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let b=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),b=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ha)?(u===void 0&&(u=new Ye(new Wi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Fs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=lt.getTransfer(x.colorSpace)!==Et,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ye(new Cr(2,2),new oi({name:"BackgroundMaterial",uniforms:Fs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(mo,wd(s)),n.buffers.color.setClear(mo.r,mo.g,mo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function P_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,u=!1;function h(N,O,W,Y,q){let X=!1;if(o){let Z=_(Y,W,O);c!==Z&&(c=Z,f(c.object)),X=p(N,Y,W,q),X&&b(N,Y,W,q)}else{let Z=O.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==Z)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=Z,X=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,j(N,O,W,Y),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,O,W){let Y=W.wireframe===!0,q=a[N.id];q===void 0&&(q={},a[N.id]=q);let X=q[O.id];X===void 0&&(X={},q[O.id]=X);let Z=X[Y];return Z===void 0&&(Z=m(d()),X[Y]=Z),Z}function m(N){let O=[],W=[],Y=[];for(let q=0;q<i;q++)O[q]=0,W[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:N,attributes:{},index:null}}function p(N,O,W,Y){let q=c.attributes,X=O.attributes,Z=0,se=W.getAttributes();for(let de in se)if(se[de].location>=0){let $=q[de],me=X[de];if(me===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),$===void 0||$.attribute!==me||me&&$.data!==me.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function b(N,O,W,Y){let q={},X=O.attributes,Z=0,se=W.getAttributes();for(let de in se)if(se[de].location>=0){let $=X[de];$===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let me={};me.attribute=$,$&&$.data&&(me.data=$.data),q[de]=me,Z++}c.attributes=q,c.attributesNum=Z,c.index=Y}function x(){let N=c.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function w(N){I(N,0)}function I(N,O){let W=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;W[N]=1,Y[N]===0&&(s.enableVertexAttribArray(N),Y[N]=1),q[N]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),q[N]=O)}function P(){let N=c.newAttributes,O=c.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==N[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function C(N,O,W,Y,q,X,Z){Z===!0?s.vertexAttribIPointer(N,O,W,q,X):s.vertexAttribPointer(N,O,W,Y,q,X)}function j(N,O,W,Y){if(n.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let q=Y.attributes,X=W.getAttributes(),Z=O.defaultAttributeValues;for(let se in X){let de=X[se];if(de.location>=0){let z=q[se];if(z===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),z!==void 0){let $=z.normalized,me=z.itemSize,we=t.get(z);if(we===void 0)continue;let be=we.buffer,ze=we.type,Ee=we.bytesPerElement,Te=n.isWebGL2===!0&&(ze===s.INT||ze===s.UNSIGNED_INT||z.gpuType===dd);if(z.isInterleavedBufferAttribute){let He=z.data,k=He.stride,Dt=z.offset;if(He.isInstancedInterleavedBuffer){for(let Me=0;Me<de.locationSize;Me++)I(de.location+Me,He.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Me=0;Me<de.locationSize;Me++)w(de.location+Me);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Me=0;Me<de.locationSize;Me++)C(de.location+Me,me/de.locationSize,ze,$,k*Ee,(Dt+me/de.locationSize*Me)*Ee,Te)}else{if(z.isInstancedBufferAttribute){for(let He=0;He<de.locationSize;He++)I(de.location+He,z.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let He=0;He<de.locationSize;He++)w(de.location+He);s.bindBuffer(s.ARRAY_BUFFER,be);for(let He=0;He<de.locationSize;He++)C(de.location+He,me/de.locationSize,ze,$,me*Ee,me/de.locationSize*He*Ee,Te)}}else if(Z!==void 0){let $=Z[se];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(de.location,$);break;case 3:s.vertexAttrib3fv(de.location,$);break;case 4:s.vertexAttrib4fv(de.location,$);break;default:s.vertexAttrib1fv(de.location,$)}}}}P()}function E(){K();for(let N in a){let O=a[N];for(let W in O){let Y=O[W];for(let q in Y)g(Y[q].object),delete Y[q];delete O[W]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;let O=a[N.id];for(let W in O){let Y=O[W];for(let q in Y)g(Y[q].object),delete Y[q];delete O[W]}delete a[N.id]}function H(N){for(let O in a){let W=a[O];if(W[N.id]===void 0)continue;let Y=W[N.id];for(let q in Y)g(Y[q].object),delete Y[q];delete W[N.id]}}function K(){le(),u=!0,c!==l&&(c=l,f(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:le,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:w,disableUnusedAttributes:P}}function L_(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function I_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=o||e.has("OES_texture_float"),I=x&&w,P=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:P}}function N_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Dn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,x=b*4,w=p.clippingState||null;l.value=w,w=u(g,d,x,f);for(let I=0;I!==x;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==_;++x,w+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function D_(s){let e=new WeakMap;function t(o,a){return a===Ll?o.mapping=Is:a===Il&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ll||a===Il)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kl(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bs=class extends ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,_u=[.125,.215,.35,.446,.526,.582],Bi=20,gl=new Bs,xu=new Ue,_l=null,xl=0,yl=0,Oi=(1+Math.sqrt(5))/2,Es=1/Oi,yu=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Oi,Es),new S(0,Oi,-Es),new S(Es,0,Oi),new S(-Es,0,Oi),new S(Oi,Es,0),new S(-Oi,Es,0)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,xl,yl),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:wr,format:Mn,colorSpace:Vt,depthBuffer:!1},i=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(r)),this._blurMaterial=O_(r,e,t)}return i}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,i){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=vi,u.autoClear=!1;let f=new wt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ye(new Wi,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(xu),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;go(i,b*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Is||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=yu[(i-1)%yu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ye(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);let p=[],b=0;for(let C=0;C<Bi;++C){let j=C/_,E=Math.exp(-j*j/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let w=this._sizeLods[i],I=3*w*(i>x-Ts?i-x+Ts:0),P=4*(this._cubeSize-w);go(t,I,P,3*w,2*w),l.setRenderTarget(t),l.render(h,gl)}};function U_(s){let e=[],t=[],n=[],i=s,r=s-Ts+1+_u.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ts?l=_u[o-s+Ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let P=0;P<f;P++){let C=P%3*2/3-1,j=P>2?0:-1,E=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];b.set(E,_*g*P),x.set(d,m*g*P);let T=[P,P,P,P,P,P];w.set(T,p*g*P)}let I=new mt;I.setAttribute("position",new Lt(b,_)),I.setAttribute("uv",new Lt(x,m)),I.setAttribute("faceIndex",new Lt(w,p)),e.push(I),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vu(s,e,t){let n=new ri(s,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function O_(s,e,t){let n=new Float32Array(Bi),i=new S(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Mu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function F_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ll||l===Il,u=l===Is||l===Ns;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ks(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ks(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function B_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k_(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let x=0,w=b.length;x<w;x+=3){let I=b[x+0],P=b[x+1],C=b[x+2];d.push(I,P,P,C,C,I)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,w=b.length/3-1;x<w;x+=3){let I=x+0,P=x+1,C=x+2;d.push(I,P,P,C,C,I)}}else return;let m=new(Ed(d)?Bo:Fo)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function z_(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){s.drawElements(r,g,a,f*l),t.update(g,r,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let b=0;b<_;b++)p+=g[b];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function H_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function V_(s,e){return s[0]-e[0]}function G_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function W_(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==g){let N=function(){K.dispose(),r.delete(u),u.removeEventListener("dispose",N)};_!==void 0&&_.texture.dispose();let b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],j=0;b===!0&&(j=1),x===!0&&(j=2),w===!0&&(j=3);let E=u.attributes.position.count*j,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let H=new Float32Array(E*T*4*g),K=new Uo(H,E,T,g);K.type=ii,K.needsUpdate=!0;let le=j*4;for(let O=0;O<g;O++){let W=I[O],Y=P[O],q=C[O],X=E*T*4*O;for(let Z=0;Z<W.count;Z++){let se=Z*le;b===!0&&(o.fromBufferAttribute(W,Z),H[X+se+0]=o.x,H[X+se+1]=o.y,H[X+se+2]=o.z,H[X+se+3]=0),x===!0&&(o.fromBufferAttribute(Y,Z),H[X+se+4]=o.x,H[X+se+5]=o.y,H[X+se+6]=o.z,H[X+se+7]=0),w===!0&&(o.fromBufferAttribute(q,Z),H[X+se+8]=o.x,H[X+se+9]=o.y,H[X+se+10]=o.z,H[X+se+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:K,size:new ae(E,T)},r.set(u,_),u.addEventListener("dispose",N)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){let w=g[x];w[0]=x,w[1]=d[x]}g.sort(G_);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(V_);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let w=a[x],I=w[0],P=w[1];I!==Number.MAX_SAFE_INTEGER&&P?(_&&u.getAttribute("morphTarget"+x)!==_[I]&&u.setAttribute("morphTarget"+x,_[I]),m&&u.getAttribute("morphNormal"+x)!==m[I]&&u.setAttribute("morphNormal"+x,m[I]),i[x]=P,p+=P):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let b=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function X_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ho=class extends $t{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:zi,u!==zi&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=_i),n===void 0&&u===Ds&&(n=ki),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ad=new $t,Rd=new Ho(1,1);Rd.compareFunction=Md;var Cd=new Uo,Pd=new Fl,Ld=new zo,Eu=[],Su=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Xs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Eu[i];if(r===void 0&&(r=new Float32Array(i),Eu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fa(s,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function j_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function q_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function Y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function $_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function K_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Au.set(n),s.uniformMatrix2fv(this.addr,!1,Au),Wt(t,n)}}function J_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Tu.set(n),s.uniformMatrix3fv(this.addr,!1,Tu),Wt(t,n)}}function Z_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;wu.set(n),s.uniformMatrix4fv(this.addr,!1,wu),Wt(t,n)}}function Q_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function e0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function t0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function n0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function i0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function r0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function a0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Rd:Ad;t.setTexture2D(e||r,i)}function l0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pd,i)}function c0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ld,i)}function h0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cd,i)}function u0(s){switch(s){case 5126:return j_;case 35664:return q_;case 35665:return Y_;case 35666:return $_;case 35674:return K_;case 35675:return J_;case 35676:return Z_;case 5124:case 35670:return Q_;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(s,e){s.uniform1fv(this.addr,e)}function f0(s,e){let t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function p0(s,e){let t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function m0(s,e){let t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function g0(s,e){let t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _0(s,e){let t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x0(s,e){let t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y0(s,e){s.uniform1iv(this.addr,e)}function v0(s,e){s.uniform2iv(this.addr,e)}function b0(s,e){s.uniform3iv(this.addr,e)}function M0(s,e){s.uniform4iv(this.addr,e)}function E0(s,e){s.uniform1uiv(this.addr,e)}function S0(s,e){s.uniform2uiv(this.addr,e)}function w0(s,e){s.uniform3uiv(this.addr,e)}function T0(s,e){s.uniform4uiv(this.addr,e)}function A0(s,e,t){let n=this.cache,i=e.length,r=fa(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ad,r[o])}function R0(s,e,t){let n=this.cache,i=e.length,r=fa(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pd,r[o])}function C0(s,e,t){let n=this.cache,i=e.length,r=fa(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ld,r[o])}function P0(s,e,t){let n=this.cache,i=e.length,r=fa(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function L0(s){switch(s){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return v0;case 35668:case 35672:return b0;case 35669:case 35673:return M0;case 5125:return E0;case 36294:return S0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}var zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}},Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}},Vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Ru(s,e){s.seq.push(e),s.map[e.id]=e}function I0(s,e,t){let n=s.name,i=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),o=vl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ru(t,c===void 0?new zl(a,s,e):new Hl(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Vl(a),Ru(t,h)),t=h}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);I0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Cu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N0=37297,D0=0;function U0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function O0(s){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s),n;switch(e===t?n="":e===Po&&t===Co?n="LinearDisplayP3ToLinearSRGB":e===Co&&t===Po&&(n="LinearSRGBToLinearDisplayP3"),s){case Vt:case da:return[n,"LinearTransferOETF"];case St:case Mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U0(s.getShaderSource(e),o)}else return i}function F0(s,e){let t=O0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B0(s,e){let t;switch(e){case Gf:t="Linear";break;case Wf:t="Reinhard";break;case Xf:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case qf:t="AgX";break;case jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function H0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function As(s){return s!==""}function Lu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(s){return s.replace(G0,X0)}var W0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X0(s,e){let t=et[e];if(t===void 0){let n=W0.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(s){return s.replace(j0,q0)}function q0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Du(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function $0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ns:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function J0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Y0(t),c=$0(t),u=K0(t),h=J0(t),d=Z0(t),f=t.isWebGL2?"":k0(t),g=z0(t),_=H0(r),m=i.createProgram(),p,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),p.length>0&&(p+=`
`),b=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),b.length>0&&(b+=`
`)):(p=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),b=[f,Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?et.tonemapping_pars_fragment:"",t.toneMapping!==vi?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,F0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Gl(o),o=Lu(o,t),o=Iu(o,t),a=Gl(a),a=Lu(a,t),a=Iu(a,t),o=Nu(o),a=Nu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=x+p+o,I=x+b+a,P=Cu(i,i.VERTEX_SHADER,w),C=Cu(i,i.FRAGMENT_SHADER,I);i.attachShader(m,P),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function j(K){if(s.debug.checkShaderErrors){let le=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(P).trim(),O=i.getShaderInfoLog(C).trim(),W=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,P,C);else{let q=Pu(i,P,"vertex"),X=Pu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+q+`
`+X)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(N===""||O==="")&&(Y=!1);Y&&(K.diagnostics={runnable:W,programLog:le,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:b}})}i.deleteShader(P),i.deleteShader(C),E=new Ls(i,m),T=V0(i,m)}let E;this.getUniforms=function(){return E===void 0&&j(this),E};let T;this.getAttributes=function(){return T===void 0&&j(this),T};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,N0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=C,this}var ex=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xl(e),t.set(e,n)),n}},Xl=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(s,e,t,n,i,r,o){let a=new Ar,l=new Wl,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,T,H,K,le){let N=K.fog,O=le.geometry,W=E.isMeshStandardMaterial?K.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),q=Y&&Y.mapping===ha?Y.image.height:null,X=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=Z!==void 0?Z.length:0,de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let z,$,me,we;if(X){let vt=Hn[X];z=vt.vertexShader,$=vt.fragmentShader}else z=E.vertexShader,$=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),we=l.getFragmentShaderID(E);let be=s.getRenderTarget(),ze=le.isInstancedMesh===!0,Ee=le.isBatchedMesh===!0,Te=!!E.map,He=!!E.matcap,k=!!Y,Dt=!!E.aoMap,Me=!!E.lightMap,Oe=!!E.bumpMap,_e=!!E.normalMap,ot=!!E.displacementMap,G=!!E.emissiveMap,M=!!E.metalnessMap,y=!!E.roughnessMap,U=E.anisotropy>0,Q=E.clearcoat>0,ee=E.iridescence>0,ne=E.sheen>0,ye=E.transmission>0,ce=U&&!!E.anisotropyMap,he=Q&&!!E.clearcoatMap,ge=Q&&!!E.clearcoatNormalMap,We=Q&&!!E.clearcoatRoughnessMap,J=ee&&!!E.iridescenceMap,Qe=ee&&!!E.iridescenceThicknessMap,Ke=ne&&!!E.sheenColorMap,Ie=ne&&!!E.sheenRoughnessMap,Re=!!E.specularMap,fe=!!E.specularColorMap,A=!!E.specularIntensityMap,ie=ye&&!!E.transmissionMap,Se=ye&&!!E.thicknessMap,xe=!!E.gradientMap,te=!!E.alphaMap,L=E.alphaTest>0,oe=!!E.alphaHash,pe=!!E.extensions,Ne=!!O.attributes.uv1,Pe=!!O.attributes.uv2,Ve=!!O.attributes.uv3,tt=vi;return E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(tt=s.toneMapping),{isWebGL2:u,shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:$,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ee,instancing:ze,instancingColor:ze&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Vt,map:Te,matcap:He,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:q,aoMap:Dt,lightMap:Me,bumpMap:Oe,normalMap:_e,displacementMap:d&&ot,emissiveMap:G,normalMapObjectSpace:_e&&E.normalMapType===op,normalMapTangentSpace:_e&&E.normalMapType===bd,metalnessMap:M,roughnessMap:y,anisotropy:U,anisotropyMap:ce,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:We,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Qe,sheen:ne,sheenColorMap:Ke,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:fe,specularIntensityMap:A,transmission:ye,transmissionMap:ie,thicknessMap:Se,gradientMap:xe,opaque:E.transparent===!1&&E.blending===Cs,alphaMap:te,alphaTest:L,alphaHash:oe,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:Dt&&_(E.aoMap.channel),lightMapUv:Me&&_(E.lightMap.channel),bumpMapUv:Oe&&_(E.bumpMap.channel),normalMapUv:_e&&_(E.normalMap.channel),displacementMapUv:ot&&_(E.displacementMap.channel),emissiveMapUv:G&&_(E.emissiveMap.channel),metalnessMapUv:M&&_(E.metalnessMap.channel),roughnessMapUv:y&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:fe&&_(E.specularColorMap.channel),specularIntensityMapUv:A&&_(E.specularIntensityMap.channel),transmissionMapUv:ie&&_(E.transmissionMap.channel),thicknessMapUv:Se&&_(E.thicknessMap.channel),alphaMapUv:te&&_(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||U),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Pe,vertexUv3s:Ve,pointsUvs:le.isPoints===!0&&!!O.attributes.uv&&(Te||te),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===Et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ht,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:pe&&E.extensions.derivatives===!0,extensionFragDepth:pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let H in E.defines)T.push(H),T.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(b(T,E),x(T,E),T.push(s.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function b(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function w(E){let T=g[E.type],H;if(T){let K=Hn[T];H=Wp.clone(K.uniforms)}else H=E.uniforms;return H}function I(E,T){let H;for(let K=0,le=c.length;K<le;K++){let N=c[K];if(N.cacheKey===T){H=N,++H.usedTimes;break}}return H===void 0&&(H=new Q0(s,T,E,r),c.push(H)),H}function P(E){if(--E.usedTimes===0){let T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:j}}function nx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ix(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ou(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ix),n.length>1&&n.sort(d||Uu),i.length>1&&i.sort(d||Uu)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function sx(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Ou,s.set(n,[o])):i>=r.length?(o=new Ou,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ue};break;case"SpotLight":t={position:new S,direction:new S,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function ox(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ax=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cx(s,e){let t=new rx,n=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new S);let r=new S,o=new $e,a=new $e;function l(u,h){let d=0,f=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let _=0,m=0,p=0,b=0,x=0,w=0,I=0,P=0,C=0,j=0,E=0;u.sort(lx);let T=h===!0?Math.PI:1;for(let K=0,le=u.length;K<le;K++){let N=u[K],O=N.color,W=N.intensity,Y=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=O.r*W*T,f+=O.g*W*T,g+=O.b*W*T;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],W);E++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){let Z=N.shadow,se=n.get(N);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.directionalShadow[_]=se,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=N.shadow.matrix,w++}i.directional[_]=X,_++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(O).multiplyScalar(W*T),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[p]=X;let Z=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,Z.updateMatrices(N),N.castShadow&&j++),i.spotLightMatrix[p]=Z.matrix,N.castShadow){let se=n.get(N);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.spotShadow[p]=se,i.spotShadowMap[p]=q,P++}p++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=X,b++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*T),X.distance=N.distance,X.decay=N.decay,N.castShadow){let Z=N.shadow,se=n.get(N);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,se.shadowCameraNear=Z.camera.near,se.shadowCameraFar=Z.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=N.shadow.matrix,I++}i.point[m]=X,m++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(W*T),X.groundColor.copy(N.groundColor).multiplyScalar(W*T),i.hemi[x]=X,x++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let H=i.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==b||H.hemiLength!==x||H.numDirectionalShadows!==w||H.numPointShadows!==I||H.numSpotShadows!==P||H.numSpotMaps!==C||H.numLightProbes!==E)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=P+C-j,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=j,i.numLightProbes=E,H.directionalLength=_,H.pointLength=m,H.spotLength=p,H.rectAreaLength=b,H.hemiLength=x,H.numDirectionalShadows=w,H.numPointShadows=I,H.numSpotShadows=P,H.numSpotMaps=C,H.numLightProbes=E,i.version=ax++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){let w=u[b];if(w.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),d++}else if(w.isSpotLight){let I=i.spot[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let I=i.rectArea[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let I=i.point[f];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Fu(s,e){let t=new cx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hx(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Fu(s,e),t.set(r,[l])):o>=a.length?(l=new Fu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var jl=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`;function fx(s,e,t){let n=new Rr,i=new ae,r=new ae,o=new gt,a=new jl({depthPacking:rp}),l=new ql,c={},u=t.maxTextureSize,h={[Gn]:en,[en]:Gn,[Ht]:Ht},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let p=this.type;this.render=function(P,C,j){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let E=s.getRenderTarget(),T=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),K=s.state;K.setBlending(yi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let le=p!==ni&&this.type===ni,N=p===ni&&this.type!==ni;for(let O=0,W=P.length;O<W;O++){let Y=P[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let X=q.getFrameExtents();if(i.multiply(X),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||le===!0||N===!0){let se=this.type!==ni?{minFilter:Bt,magFilter:Bt}:{};q.map!==null&&q.map.dispose(),q.map=new ri(i.x,i.y,se),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let Z=q.getViewportCount();for(let se=0;se<Z;se++){let de=q.getViewport(se);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),K.viewport(o),q.updateMatrices(Y,se),n=q.getFrustum(),w(C,j,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===ni&&b(q,j),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,T,H)};function b(P,C){let j=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ri(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(C,null,j,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(C,null,j,f,_,null)}function x(P,C,j,E){let T=null,H=j.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)T=H;else if(T=j.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let K=T.uuid,le=C.uuid,N=c[K];N===void 0&&(N={},c[K]=N);let O=N[le];O===void 0&&(O=T.clone(),N[le]=O,C.addEventListener("dispose",I)),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,E===ni?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,j.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=s.properties.get(T);K.light=j}return T}function w(P,C,j,E,T){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===ni)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld);let le=e.update(P),N=P.material;if(Array.isArray(N)){let O=le.groups;for(let W=0,Y=O.length;W<Y;W++){let q=O[W],X=N[q.materialIndex];if(X&&X.visible){let Z=x(P,X,E,T);P.onBeforeShadow(s,P,C,j,le,Z,q),s.renderBufferDirect(j,null,le,Z,P,q),P.onAfterShadow(s,P,C,j,le,Z,q)}}}else if(N.visible){let O=x(P,N,E,T);P.onBeforeShadow(s,P,C,j,le,O,null),s.renderBufferDirect(j,null,le,O,P,null),P.onAfterShadow(s,P,C,j,le,O,null)}}let K=P.children;for(let le=0,N=K.length;le<N;le++)w(K[le],C,j,E,T)}function I(P){P.target.removeEventListener("dispose",I);for(let j in c){let E=c[j],T=P.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function px(s,e,t){let n=t.isWebGL2;function i(){let L=!1,oe=new gt,pe=null,Ne=new gt(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!L&&(s.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){L=Pe},setClear:function(Pe,Ve,tt,dt,vt){vt===!0&&(Pe*=dt,Ve*=dt,tt*=dt),oe.set(Pe,Ve,tt,dt),Ne.equals(oe)===!1&&(s.clearColor(Pe,Ve,tt,dt),Ne.copy(oe))},reset:function(){L=!1,pe=null,Ne.set(-1,0,0,0)}}}function r(){let L=!1,oe=null,pe=null,Ne=null;return{setTest:function(Pe){Pe?Ee(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!L&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(pe!==Pe){switch(Pe){case Df:s.depthFunc(s.NEVER);break;case Uf:s.depthFunc(s.ALWAYS);break;case Of:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case Ff:s.depthFunc(s.EQUAL);break;case Bf:s.depthFunc(s.GEQUAL);break;case kf:s.depthFunc(s.GREATER);break;case zf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){L=Pe},setClear:function(Pe){Ne!==Pe&&(s.clearDepth(Pe),Ne=Pe)},reset:function(){L=!1,oe=null,pe=null,Ne=null}}}function o(){let L=!1,oe=null,pe=null,Ne=null,Pe=null,Ve=null,tt=null,dt=null,vt=null;return{setTest:function(it){L||(it?Ee(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(it){oe!==it&&!L&&(s.stencilMask(it),oe=it)},setFunc:function(it,Xe,hn){(pe!==it||Ne!==Xe||Pe!==hn)&&(s.stencilFunc(it,Xe,hn),pe=it,Ne=Xe,Pe=hn)},setOp:function(it,Xe,hn){(Ve!==it||tt!==Xe||dt!==hn)&&(s.stencilOp(it,Xe,hn),Ve=it,tt=Xe,dt=hn)},setLocked:function(it){L=it},setClear:function(it){vt!==it&&(s.clearStencil(it),vt=it)},reset:function(){L=!1,oe=null,pe=null,Ne=null,Pe=null,Ve=null,tt=null,dt=null,vt=null}}}let a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,b=null,x=null,w=null,I=null,P=null,C=null,j=null,E=new Ue(0,0,0),T=0,H=!1,K=null,le=null,N=null,O=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=X>=2);let se=null,de={},z=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),me=new gt().fromArray(z),we=new gt().fromArray($);function be(L,oe,pe,Ne){let Pe=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(L,Ve),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<pe;tt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(oe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ve}let ze={};ze[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),ze[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ze[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(s.DEPTH_TEST),l.setFunc(To),G(!1),M(_h),Ee(s.CULL_FACE),_e(yi);function Ee(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Te(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function He(L,oe){return f[L]!==oe?(s.bindFramebuffer(L,oe),f[L]=oe,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=oe),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function k(L,oe){let pe=_,Ne=!1;if(L)if(pe=g.get(oe),pe===void 0&&(pe=[],g.set(oe,pe)),L.isWebGLMultipleRenderTargets){let Pe=L.texture;if(pe.length!==Pe.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,tt=Pe.length;Ve<tt;Ve++)pe[Ve]=s.COLOR_ATTACHMENT0+Ve;pe.length=Pe.length,Ne=!0}}else pe[0]!==s.COLOR_ATTACHMENT0&&(pe[0]=s.COLOR_ATTACHMENT0,Ne=!0);else pe[0]!==s.BACK&&(pe[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Dt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let Me={[Fi]:s.FUNC_ADD,[yf]:s.FUNC_SUBTRACT,[vf]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[bh]=s.MIN,Me[Mh]=s.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Me[bh]=L.MIN_EXT,Me[Mh]=L.MAX_EXT)}let Oe={[bf]:s.ZERO,[Mf]:s.ONE,[Ef]:s.SRC_COLOR,[Cl]:s.SRC_ALPHA,[Cf]:s.SRC_ALPHA_SATURATE,[Af]:s.DST_COLOR,[wf]:s.DST_ALPHA,[Sf]:s.ONE_MINUS_SRC_COLOR,[Pl]:s.ONE_MINUS_SRC_ALPHA,[Rf]:s.ONE_MINUS_DST_COLOR,[Tf]:s.ONE_MINUS_DST_ALPHA,[Pf]:s.CONSTANT_COLOR,[Lf]:s.ONE_MINUS_CONSTANT_COLOR,[If]:s.CONSTANT_ALPHA,[Nf]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(L,oe,pe,Ne,Pe,Ve,tt,dt,vt,it){if(L===yi){p===!0&&(Te(s.BLEND),p=!1);return}if(p===!1&&(Ee(s.BLEND),p=!0),L!==xf){if(L!==b||it!==H){if((x!==Fi||P!==Fi)&&(s.blendEquation(s.FUNC_ADD),x=Fi,P=Fi),it)switch(L){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xh:s.blendFunc(s.ONE,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,I=null,C=null,j=null,E.set(0,0,0),T=0,b=L,H=it}return}Pe=Pe||oe,Ve=Ve||pe,tt=tt||Ne,(oe!==x||Pe!==P)&&(s.blendEquationSeparate(Me[oe],Me[Pe]),x=oe,P=Pe),(pe!==w||Ne!==I||Ve!==C||tt!==j)&&(s.blendFuncSeparate(Oe[pe],Oe[Ne],Oe[Ve],Oe[tt]),w=pe,I=Ne,C=Ve,j=tt),(dt.equals(E)===!1||vt!==T)&&(s.blendColor(dt.r,dt.g,dt.b,vt),E.copy(dt),T=vt),b=L,H=!1}function ot(L,oe){L.side===Ht?Te(s.CULL_FACE):Ee(s.CULL_FACE);let pe=L.side===en;oe&&(pe=!pe),G(pe),L.blending===Cs&&L.transparent===!1?_e(yi):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ne=L.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function G(L){K!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),K=L)}function M(L){L!==mf?(Ee(s.CULL_FACE),L!==le&&(L===_h?s.cullFace(s.BACK):L===gf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),le=L}function y(L){L!==N&&(q&&s.lineWidth(L),N=L)}function U(L,oe,pe){L?(Ee(s.POLYGON_OFFSET_FILL),(O!==oe||W!==pe)&&(s.polygonOffset(oe,pe),O=oe,W=pe)):Te(s.POLYGON_OFFSET_FILL)}function Q(L){L?Ee(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function ee(L){L===void 0&&(L=s.TEXTURE0+Y-1),se!==L&&(s.activeTexture(L),se=L)}function ne(L,oe,pe){pe===void 0&&(se===null?pe=s.TEXTURE0+Y-1:pe=se);let Ne=de[pe];Ne===void 0&&(Ne={type:void 0,texture:void 0},de[pe]=Ne),(Ne.type!==L||Ne.texture!==oe)&&(se!==pe&&(s.activeTexture(pe),se=pe),s.bindTexture(L,oe||ze[L]),Ne.type=L,Ne.texture=oe)}function ye(){let L=de[se];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(L){me.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),me.copy(L))}function ie(L){we.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function Se(L,oe){let pe=h.get(oe);pe===void 0&&(pe=new WeakMap,h.set(oe,pe));let Ne=pe.get(L);Ne===void 0&&(Ne=s.getUniformBlockIndex(oe,L.name),pe.set(L,Ne))}function xe(L,oe){let Ne=h.get(oe).get(L);u.get(oe)!==Ne&&(s.uniformBlockBinding(oe,Ne,L.__bindingPointIndex),u.set(oe,Ne))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},se=null,de={},f={},g=new WeakMap,_=[],m=null,p=!1,b=null,x=null,w=null,I=null,P=null,C=null,j=null,E=new Ue(0,0,0),T=0,H=!1,K=null,le=null,N=null,O=null,W=null,me.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:Te,bindFramebuffer:He,drawBuffers:k,useProgram:Dt,setBlending:_e,setMaterial:ot,setFlipSided:G,setCullFace:M,setLineWidth:y,setPolygonOffset:U,setScissorTest:Q,activeTexture:ee,bindTexture:ne,unbindTexture:ye,compressedTexImage2D:ce,compressedTexImage3D:he,texImage2D:Re,texImage3D:fe,updateUBOMapping:Se,uniformBlockBinding:xe,texStorage2D:Ke,texStorage3D:Ie,texSubImage2D:ge,texSubImage3D:We,compressedTexSubImage2D:J,compressedTexSubImage3D:Qe,scissor:A,viewport:ie,reset:te}}function mx(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return f?new OffscreenCanvas(M,y):Tr("canvas")}function _(M,y,U,Q){let ee=1;if((M.width>Q||M.height>Q)&&(ee=Q/Math.max(M.width,M.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let ne=y?Io:Math.floor,ye=ne(ee*M.width),ce=ne(ee*M.height);h===void 0&&(h=g(ye,ce));let he=U?g(ye,ce):h;return he.width=ye,he.height=ce,he.getContext("2d").drawImage(M,0,0,ye,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+ce+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Ul(M.width)&&Ul(M.height)}function p(M){return a?!1:M.wrapS!==gn||M.wrapT!==gn||M.minFilter!==Bt&&M.minFilter!==on}function b(M,y){return M.generateMipmaps&&y&&M.minFilter!==Bt&&M.minFilter!==on}function x(M){s.generateMipmap(M)}function w(M,y,U,Q,ee=!1){if(a===!1)return y;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ne=y;if(y===s.RED&&(U===s.FLOAT&&(ne=s.R32F),U===s.HALF_FLOAT&&(ne=s.R16F),U===s.UNSIGNED_BYTE&&(ne=s.R8)),y===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(ne=s.R8UI),U===s.UNSIGNED_SHORT&&(ne=s.R16UI),U===s.UNSIGNED_INT&&(ne=s.R32UI),U===s.BYTE&&(ne=s.R8I),U===s.SHORT&&(ne=s.R16I),U===s.INT&&(ne=s.R32I)),y===s.RG&&(U===s.FLOAT&&(ne=s.RG32F),U===s.HALF_FLOAT&&(ne=s.RG16F),U===s.UNSIGNED_BYTE&&(ne=s.RG8)),y===s.RGBA){let ye=ee?Ro:lt.getTransfer(Q);U===s.FLOAT&&(ne=s.RGBA32F),U===s.HALF_FLOAT&&(ne=s.RGBA16F),U===s.UNSIGNED_BYTE&&(ne=ye===Et?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function I(M,y,U){return b(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Bt&&M.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function P(M){return M===Bt||M===Ao||M===gr?s.NEAREST:s.LINEAR}function C(M){let y=M.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&u.delete(y)}function j(M){let y=M.target;y.removeEventListener("dispose",j),H(y)}function E(M){let y=n.get(M);if(y.__webglInit===void 0)return;let U=M.source,Q=d.get(U);if(Q){let ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(M),Object.keys(Q).length===0&&d.delete(U)}n.remove(M)}function T(M){let y=n.get(M);s.deleteTexture(y.__webglTexture);let U=M.source,Q=d.get(U);delete Q[y.__cacheKey],o.memory.textures--}function H(M){let y=M.texture,U=n.get(M),Q=n.get(y);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(U.__webglFramebuffer[ee]))for(let ne=0;ne<U.__webglFramebuffer[ee].length;ne++)s.deleteFramebuffer(U.__webglFramebuffer[ee][ne]);else s.deleteFramebuffer(U.__webglFramebuffer[ee]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[ee])}else{if(Array.isArray(U.__webglFramebuffer))for(let ee=0;ee<U.__webglFramebuffer.length;ee++)s.deleteFramebuffer(U.__webglFramebuffer[ee]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ee=0;ee<U.__webglColorRenderbuffer.length;ee++)U.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[ee]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ee=0,ne=y.length;ee<ne;ee++){let ye=n.get(y[ee]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(y[ee])}n.remove(y),n.remove(M)}let K=0;function le(){K=0}function N(){let M=K;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),K+=1,M}function O(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function W(M,y){let U=n.get(M);if(M.isVideoTexture&&ot(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,M,y);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+y)}function Y(M,y){let U=n.get(M);if(M.version>0&&U.__version!==M.version){me(U,M,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+y)}function q(M,y){let U=n.get(M);if(M.version>0&&U.__version!==M.version){me(U,M,y);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+y)}function X(M,y){let U=n.get(M);if(M.version>0&&U.__version!==M.version){we(U,M,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+y)}let Z={[Vi]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},se={[Bt]:s.NEAREST,[Ao]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},de={[ap]:s.NEVER,[fp]:s.ALWAYS,[lp]:s.LESS,[Md]:s.LEQUAL,[cp]:s.EQUAL,[dp]:s.GEQUAL,[hp]:s.GREATER,[up]:s.NOTEQUAL};function z(M,y,U){if(U?(s.texParameteri(M,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,Z[y.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,se[y.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,se[y.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==gn||y.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,P(y.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,P(y.minFilter)),y.minFilter!==Bt&&y.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Bt||y.minFilter!==gr&&y.minFilter!==Mi||y.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function $(M,y){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",C));let Q=y.source,ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));let ne=O(y);if(ne!==M.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[ne].usedTimes++;let ye=ee[M.__cacheKey];ye!==void 0&&(ee[M.__cacheKey].usedTimes--,ye.usedTimes===0&&T(y)),M.__cacheKey=ne,M.__webglTexture=ee[ne].texture}return U}function me(M,y,U){let Q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=s.TEXTURE_3D);let ee=$(M,y),ne=y.source;t.bindTexture(Q,M.__webglTexture,s.TEXTURE0+U);let ye=n.get(ne);if(ne.version!==ye.__version||ee===!0){t.activeTexture(s.TEXTURE0+U);let ce=lt.getPrimaries(lt.workingColorSpace),he=y.colorSpace===En?null:lt.getPrimaries(y.colorSpace),ge=y.colorSpace===En||ce===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let We=p(y)&&m(y.image)===!1,J=_(y.image,We,!1,i.maxTextureSize);J=G(y,J);let Qe=m(J)||a,Ke=r.convert(y.format,y.colorSpace),Ie=r.convert(y.type),Re=w(y.internalFormat,Ke,Ie,y.colorSpace,y.isVideoTexture);z(Q,y,Qe);let fe,A=y.mipmaps,ie=a&&y.isVideoTexture!==!0&&Re!==xd,Se=ye.__version===void 0||ee===!0,xe=I(y,J,Qe);if(y.isDepthTexture)Re=s.DEPTH_COMPONENT,a?y.type===ii?Re=s.DEPTH_COMPONENT32F:y.type===_i?Re=s.DEPTH_COMPONENT24:y.type===ki?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:y.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===zi&&Re===s.DEPTH_COMPONENT&&y.type!==bc&&y.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=_i,Ie=r.convert(y.type)),y.format===Ds&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,y.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ki,Ie=r.convert(y.type))),Se&&(ie?t.texStorage2D(s.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,Ke,Ie,null));else if(y.isDataTexture)if(A.length>0&&Qe){ie&&Se&&t.texStorage2D(s.TEXTURE_2D,xe,Re,A[0].width,A[0].height);for(let te=0,L=A.length;te<L;te++)fe=A[te],ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Ke,Ie,fe.data):t.texImage2D(s.TEXTURE_2D,te,Re,fe.width,fe.height,0,Ke,Ie,fe.data);y.generateMipmaps=!1}else ie?(Se&&t.texStorage2D(s.TEXTURE_2D,xe,Re,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ke,Ie,J.data)):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,Ke,Ie,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Re,A[0].width,A[0].height,J.depth);for(let te=0,L=A.length;te<L;te++)fe=A[te],y.format!==Mn?Ke!==null?ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,J.depth,Ke,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Re,fe.width,fe.height,J.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,J.depth,Ke,Ie,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Re,fe.width,fe.height,J.depth,0,Ke,Ie,fe.data)}else{ie&&Se&&t.texStorage2D(s.TEXTURE_2D,xe,Re,A[0].width,A[0].height);for(let te=0,L=A.length;te<L;te++)fe=A[te],y.format!==Mn?Ke!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Ke,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Ke,Ie,fe.data):t.texImage2D(s.TEXTURE_2D,te,Re,fe.width,fe.height,0,Ke,Ie,fe.data)}else if(y.isDataArrayTexture)ie?(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Re,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ke,Ie,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,Ke,Ie,J.data);else if(y.isData3DTexture)ie?(Se&&t.texStorage3D(s.TEXTURE_3D,xe,Re,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ke,Ie,J.data)):t.texImage3D(s.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,Ke,Ie,J.data);else if(y.isFramebufferTexture){if(Se)if(ie)t.texStorage2D(s.TEXTURE_2D,xe,Re,J.width,J.height);else{let te=J.width,L=J.height;for(let oe=0;oe<xe;oe++)t.texImage2D(s.TEXTURE_2D,oe,Re,te,L,0,Ke,Ie,null),te>>=1,L>>=1}}else if(A.length>0&&Qe){ie&&Se&&t.texStorage2D(s.TEXTURE_2D,xe,Re,A[0].width,A[0].height);for(let te=0,L=A.length;te<L;te++)fe=A[te],ie?t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ke,Ie,fe):t.texImage2D(s.TEXTURE_2D,te,Re,Ke,Ie,fe);y.generateMipmaps=!1}else ie?(Se&&t.texStorage2D(s.TEXTURE_2D,xe,Re,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ke,Ie,J)):t.texImage2D(s.TEXTURE_2D,0,Re,Ke,Ie,J);b(y,Qe)&&x(Q),ye.__version=ne.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function we(M,y,U){if(y.image.length!==6)return;let Q=$(M,y),ee=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+U);let ne=n.get(ee);if(ee.version!==ne.__version||Q===!0){t.activeTexture(s.TEXTURE0+U);let ye=lt.getPrimaries(lt.workingColorSpace),ce=y.colorSpace===En?null:lt.getPrimaries(y.colorSpace),he=y.colorSpace===En||ye===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ge=y.isCompressedTexture||y.image[0].isCompressedTexture,We=y.image[0]&&y.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!ge&&!We?J[te]=_(y.image[te],!1,!0,i.maxCubemapSize):J[te]=We?y.image[te].image:y.image[te],J[te]=G(y,J[te]);let Qe=J[0],Ke=m(Qe)||a,Ie=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),fe=w(y.internalFormat,Ie,Re,y.colorSpace),A=a&&y.isVideoTexture!==!0,ie=ne.__version===void 0||Q===!0,Se=I(y,Qe,Ke);z(s.TEXTURE_CUBE_MAP,y,Ke);let xe;if(ge){A&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,fe,Qe.width,Qe.height);for(let te=0;te<6;te++){xe=J[te].mipmaps;for(let L=0;L<xe.length;L++){let oe=xe[L];y.format!==Mn?Ie!==null?A?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,Ie,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,Ie,Re,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,oe.width,oe.height,0,Ie,Re,oe.data)}}}else{xe=y.mipmaps,A&&ie&&(xe.length>0&&Se++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,fe,J[0].width,J[0].height));for(let te=0;te<6;te++)if(We){A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,Ie,Re,J[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,J[te].width,J[te].height,0,Ie,Re,J[te].data);for(let L=0;L<xe.length;L++){let pe=xe[L].image[te].image;A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,pe.width,pe.height,Ie,Re,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,pe.width,pe.height,0,Ie,Re,pe.data)}}else{A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Re,J[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,Ie,Re,J[te]);for(let L=0;L<xe.length;L++){let oe=xe[L];A?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,Ie,Re,oe.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,Ie,Re,oe.image[te])}}}b(y,Ke)&&x(s.TEXTURE_CUBE_MAP),ne.__version=ee.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function be(M,y,U,Q,ee,ne){let ye=r.convert(U.format,U.colorSpace),ce=r.convert(U.type),he=w(U.internalFormat,ye,ce,U.colorSpace);if(!n.get(y).__hasExternalTextures){let We=Math.max(1,y.width>>ne),J=Math.max(1,y.height>>ne);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,he,We,J,y.depth,0,ye,ce,null):t.texImage2D(ee,ne,he,We,J,0,ye,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,M),_e(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,n.get(U).__webglTexture,0,Oe(y)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,n.get(U).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(M,y,U){if(s.bindRenderbuffer(s.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||_e(y)){let ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ii?Q=s.DEPTH_COMPONENT32F:ee.type===_i&&(Q=s.DEPTH_COMPONENT24));let ne=Oe(y);_e(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,Q,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Q,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let Q=Oe(y);U&&_e(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,y.width,y.height):_e(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{let Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<Q.length;ee++){let ne=Q[ee],ye=r.convert(ne.format,ne.colorSpace),ce=r.convert(ne.type),he=w(ne.internalFormat,ye,ce,ne.colorSpace),ge=Oe(y);U&&_e(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,he,y.width,y.height):_e(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let Q=n.get(y.depthTexture).__webglTexture,ee=Oe(y);if(y.depthTexture.format===zi)_e(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ds)_e(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Te(M){let y=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ee(y.__webglFramebuffer,M)}else if(U){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=s.createRenderbuffer(),ze(y.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ze(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(M,y,U){let Q=n.get(M);y!==void 0&&be(Q.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Te(M)}function k(M){let y=M.texture,U=n.get(M),Q=n.get(y);M.addEventListener("dispose",j),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=y.version,o.memory.textures++);let ee=M.isWebGLCubeRenderTarget===!0,ne=M.isWebGLMultipleRenderTargets===!0,ye=m(M)||a;if(ee){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let he=0;he<y.mipmaps.length;he++)U.__webglFramebuffer[ce][he]=s.createFramebuffer()}else U.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)U.__webglFramebuffer[ce]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){let ce=M.texture;for(let he=0,ge=ce.length;he<ge;he++){let We=n.get(ce[he]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&_e(M)===!1){let ce=ne?y:[y];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){let ge=ce[he];U.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[he]);let We=r.convert(ge.format,ge.colorSpace),J=r.convert(ge.type),Qe=w(ge.internalFormat,We,J,ge.colorSpace,M.isXRRenderTarget===!0),Ke=Oe(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Qe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,U.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),z(s.TEXTURE_CUBE_MAP,y,ye);for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(U.__webglFramebuffer[ce][he],M,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else be(U.__webglFramebuffer[ce],M,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);b(y,ye)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let ce=M.texture;for(let he=0,ge=ce.length;he<ge;he++){let We=ce[he],J=n.get(We);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),z(s.TEXTURE_2D,We,ye),be(U.__webglFramebuffer,M,We,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),b(We,ye)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ce=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),z(ce,y,ye),a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(U.__webglFramebuffer[he],M,y,s.COLOR_ATTACHMENT0,ce,he);else be(U.__webglFramebuffer,M,y,s.COLOR_ATTACHMENT0,ce,0);b(y,ye)&&x(ce),t.unbindTexture()}M.depthBuffer&&Te(M)}function Dt(M){let y=m(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,ee=U.length;Q<ee;Q++){let ne=U[Q];if(b(ne,y)){let ye=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(ne).__webglTexture;t.bindTexture(ye,ce),x(ye),t.unbindTexture()}}}function Me(M){if(a&&M.samples>0&&_e(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,Q=M.height,ee=s.COLOR_BUFFER_BIT,ne=[],ye=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){ne.push(s.COLOR_ATTACHMENT0+ge),M.depthBuffer&&ne.push(ye);let We=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(We===!1&&(M.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]),We===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ye])),he){let J=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,U,Q,0,0,U,Q,ee,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);let We=n.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Oe(M){return Math.min(i.maxSamples,M.samples)}function _e(M){let y=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ot(M){let y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function G(M,y){let U=M.colorSpace,Q=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Dl||U!==Vt&&U!==En&&(lt.getTransfer(U)===Et?a===!1?e.has("EXT_sRGB")===!0&&Q===Mn?(M.format=Dl,M.minFilter=on,M.generateMipmaps=!1):y=No.sRGBToLinear(y):(Q!==Mn||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}this.allocateTextureUnit=N,this.resetTextureUnits=le,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=be,this.useMultisampledRTT=_e}function gx(s,e,t){let n=t.isWebGL2;function i(r,o=En){let a,l=lt.getTransfer(o);if(r===bi)return s.UNSIGNED_BYTE;if(r===fd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$f)return s.BYTE;if(r===Kf)return s.SHORT;if(r===bc)return s.UNSIGNED_SHORT;if(r===dd)return s.INT;if(r===_i)return s.UNSIGNED_INT;if(r===ii)return s.FLOAT;if(r===wr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jf)return s.ALPHA;if(r===Mn)return s.RGBA;if(r===Zf)return s.LUMINANCE;if(r===Qf)return s.LUMINANCE_ALPHA;if(r===zi)return s.DEPTH_COMPONENT;if(r===Ds)return s.DEPTH_STENCIL;if(r===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ep)return s.RED;if(r===md)return s.RED_INTEGER;if(r===tp)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===_d)return s.RGBA_INTEGER;if(r===qa||r===Ya||r===$a||r===Ka)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sh||r===wh||r===Th||r===Ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rh||r===Ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rh)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ch)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Lh||r===Ih||r===Nh||r===Dh||r===Uh||r===Oh||r===Fh||r===Bh||r===kh||r===zh||r===Hh||r===Vh||r===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ph)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ja||r===Wh||r===Xh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ja)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===np||r===jh||r===qh||r===Yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ja)return a.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Yl=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},qt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$l=class extends Wn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,b=[],x=[],w=new ae,I=null,P=new zt;P.layers.enable(1),P.viewport=new gt;let C=new zt;C.layers.enable(2),C.viewport=new gt;let j=[P,C],E=new Yl;E.layers.enable(1),E.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=b[z];return $===void 0&&($=new vr,b[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=b[z];return $===void 0&&($=new vr,b[z]=$),$.getGripSpace()},this.getHand=function(z){let $=b[z];return $===void 0&&($=new vr,b[z]=$),$.getHandSpace()};function K(z){let $=x.indexOf(z.inputSource);if($===-1)return;let me=b[$];me!==void 0&&(me.update(z.inputSource,z.frame,c||o),me.dispatchEvent({type:z.type,data:z.inputSource}))}function le(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",N);for(let z=0;z<b.length;z++){let $=x[z];$!==null&&(x[z]=null,b[z].disconnect($))}T=null,H=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",le),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ri(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,me=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Ds:zi,me=_.stencil?ki:_i);let be={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ri(d.textureWidth,d.textureHeight,{format:Mn,type:bi,depthTexture:new Ho(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let ze=e.properties.get(p);ze.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(z){for(let $=0;$<z.removed.length;$++){let me=z.removed[$],we=x.indexOf(me);we>=0&&(x[we]=null,b[we].disconnect(me))}for(let $=0;$<z.added.length;$++){let me=z.added[$],we=x.indexOf(me);if(we===-1){for(let ze=0;ze<b.length;ze++)if(ze>=x.length){x.push(me),we=ze;break}else if(x[ze]===null){x[ze]=me,we=ze;break}if(we===-1)break}let be=b[we];be&&be.connect(me)}}let O=new S,W=new S;function Y(z,$,me){O.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(me.matrixWorld);let we=O.distanceTo(W),be=$.projectionMatrix.elements,ze=me.projectionMatrix.elements,Ee=be[14]/(be[10]-1),Te=be[14]/(be[10]+1),He=(be[9]+1)/be[5],k=(be[9]-1)/be[5],Dt=(be[8]-1)/be[0],Me=(ze[8]+1)/ze[0],Oe=Ee*Dt,_e=Ee*Me,ot=we/(-Dt+Me),G=ot*-Dt;$.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(G),z.translateZ(ot),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let M=Ee+ot,y=Te+ot,U=Oe-G,Q=_e+(we-G),ee=He*Te/y*M,ne=k*Te/y*M;z.projectionMatrix.makePerspective(U,Q,ee,ne,M,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;E.near=C.near=P.near=z.near,E.far=C.far=P.far=z.far,(T!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,H=E.far);let $=z.parent,me=E.cameras;q(E,$);for(let we=0;we<me.length;we++)q(me[we],$);me.length===2?Y(E,P,C):E.projectionMatrix.copy(P.projectionMatrix),X(z,E,$)};function X(z,$,me){me===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(me.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Os*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let Z=null;function se(z,$){if(u=$.getViewerPose(c||o),g=$,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let we=!1;me.length!==E.cameras.length&&(E.cameras.length=0,we=!0);for(let be=0;be<me.length;be++){let ze=me[be],Ee=null;if(f!==null)Ee=f.getViewport(ze);else{let He=h.getViewSubImage(d,ze);Ee=He.viewport,be===0&&(e.setRenderTargetTextures(p,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(p))}let Te=j[be];Te===void 0&&(Te=new zt,Te.layers.enable(be),Te.viewport=new gt,j[be]=Te),Te.matrix.fromArray(ze.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ze.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),be===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),we===!0&&E.cameras.push(Te)}}for(let me=0;me<b.length;me++){let we=x[me],be=b[me];we!==null&&be!==void 0&&be.update(we,$,c||o)}Z&&Z(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let de=new Td;de.setAnimationLoop(se),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}};function xx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yx(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let w=x.program;n.uniformBlockBinding(b,w)}function c(b,x){let w=i[b.id];w===void 0&&(g(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",m));let I=x.program;n.updateUBOMapping(b,I);let P=e.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function u(b){let x=h();b.__bindingPointIndex=x;let w=s.createBuffer(),I=b.__size,P=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=i[b.id],w=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let P=0,C=w.length;P<C;P++){let j=Array.isArray(w[P])?w[P]:[w[P]];for(let E=0,T=j.length;E<T;E++){let H=j[E];if(f(H,P,E,I)===!0){let K=H.__offset,le=Array.isArray(H.value)?H.value:[H.value],N=0;for(let O=0;O<le.length;O++){let W=le[O],Y=_(W);typeof W=="number"||typeof W=="boolean"?(H.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,K+N,H.__data)):W.isMatrix3?(H.__data[0]=W.elements[0],H.__data[1]=W.elements[1],H.__data[2]=W.elements[2],H.__data[3]=0,H.__data[4]=W.elements[3],H.__data[5]=W.elements[4],H.__data[6]=W.elements[5],H.__data[7]=0,H.__data[8]=W.elements[6],H.__data[9]=W.elements[7],H.__data[10]=W.elements[8],H.__data[11]=0):(W.toArray(H.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,x,w,I){let P=b.value,C=x+"_"+w;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{let j=I[C];if(typeof P=="number"||typeof P=="boolean"){if(j!==P)return I[C]=P,!0}else if(j.equals(P)===!1)return j.copy(P),!0}return!1}function g(b){let x=b.uniforms,w=0,I=16;for(let C=0,j=x.length;C<j;C++){let E=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,H=E.length;T<H;T++){let K=E[T],le=Array.isArray(K.value)?K.value:[K.value];for(let N=0,O=le.length;N<O;N++){let W=le[N],Y=_(W),q=w%I;q!==0&&I-q<Y.boundary&&(w+=I-q),K.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=Y.storage}}}let P=w%I;return P>0&&(w+=I-P),b.__size=w,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){let x=b.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Pr=class{constructor(e={}){let{canvas:t=Rp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,w=!1,I=0,P=0,C=null,j=-1,E=null,T=new gt,H=new gt,K=null,le=new Ue(0),N=0,O=t.width,W=t.height,Y=1,q=null,X=null,Z=new gt(0,0,O,W),se=new gt(0,0,O,W),de=!1,z=new Rr,$=!1,me=!1,we=null,be=new $e,ze=new ae,Ee=new S,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return C===null?Y:1}let k=n;function Dt(v,R){for(let D=0;D<v.length;D++){let B=v[D],F=t.getContext(B,R);if(F!==null)return F}return null}try{let v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),k===null){let R=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&R.shift(),k=Dt(R,v),k===null)throw Dt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Me,Oe,_e,ot,G,M,y,U,Q,ee,ne,ye,ce,he,ge,We,J,Qe,Ke,Ie,Re,fe,A,ie;function Se(){Me=new B_(k),Oe=new I_(k,Me,e),Me.init(Oe),fe=new gx(k,Me,Oe),_e=new px(k,Me,Oe),ot=new H_(k),G=new nx,M=new mx(k,Me,_e,G,Oe,fe,ot),y=new D_(x),U=new F_(x),Q=new $p(k,Oe),A=new P_(k,Me,Q,Oe),ee=new k_(k,Q,ot,A),ne=new X_(k,ee,Q,ot),Ke=new W_(k,Oe,M),We=new N_(G),ye=new tx(x,y,U,Me,Oe,A,We),ce=new xx(x,G),he=new sx,ge=new hx(Me,Oe),Qe=new C_(x,y,U,_e,ne,d,l),J=new fx(x,ne,Oe),ie=new yx(k,ot,Oe,_e),Ie=new L_(k,Me,ot,Oe),Re=new z_(k,Me,ot,Oe),ot.programs=ye.programs,x.capabilities=Oe,x.extensions=Me,x.properties=G,x.renderLists=he,x.shadowMap=J,x.state=_e,x.info=ot}Se();let xe=new $l(x,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(O,W,!1))},this.getSize=function(v){return v.set(O,W)},this.setSize=function(v,R,D=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=v,W=R,t.width=Math.floor(v*Y),t.height=Math.floor(R*Y),D===!0&&(t.style.width=v+"px",t.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(O*Y,W*Y).floor()},this.setDrawingBufferSize=function(v,R,D){O=v,W=R,Y=D,t.width=Math.floor(v*D),t.height=Math.floor(R*D),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(Z)},this.setViewport=function(v,R,D,B){v.isVector4?Z.set(v.x,v.y,v.z,v.w):Z.set(v,R,D,B),_e.viewport(T.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(v){return v.copy(se)},this.setScissor=function(v,R,D,B){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,R,D,B),_e.scissor(H.copy(se).multiplyScalar(Y).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(v){_e.setScissorTest(de=v)},this.setOpaqueSort=function(v){q=v},this.setTransparentSort=function(v){X=v},this.getClearColor=function(v){return v.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(v=!0,R=!0,D=!0){let B=0;if(v){let F=!1;if(C!==null){let re=C.texture.format;F=re===_d||re===gd||re===md}if(F){let re=C.texture.type,ve=re===bi||re===_i||re===bc||re===ki||re===fd||re===pd,Ae=Qe.getClearColor(),Ce=Qe.getClearAlpha(),Fe=Ae.r,De=Ae.g,Le=Ae.b;ve?(f[0]=Fe,f[1]=De,f[2]=Le,f[3]=Ce,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Fe,g[1]=De,g[2]=Le,g[3]=Ce,k.clearBufferiv(k.COLOR,0,g))}else B|=k.COLOR_BUFFER_BIT}R&&(B|=k.DEPTH_BUFFER_BIT),D&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),ge.dispose(),G.dispose(),y.dispose(),U.dispose(),ne.dispose(),A.dispose(),ie.dispose(),ye.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",vt),xe.removeEventListener("sessionend",it),we&&(we.dispose(),we=null),Xe.stop()};function te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let v=ot.autoReset,R=J.enabled,D=J.autoUpdate,B=J.needsUpdate,F=J.type;Se(),ot.autoReset=v,J.enabled=R,J.autoUpdate=D,J.needsUpdate=B,J.type=F}function oe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function pe(v){let R=v.target;R.removeEventListener("dispose",pe),Ne(R)}function Ne(v){Pe(v),G.remove(v)}function Pe(v){let R=G.get(v).programs;R!==void 0&&(R.forEach(function(D){ye.releaseProgram(D)}),v.isShaderMaterial&&ye.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,D,B,F,re){R===null&&(R=Te);let ve=F.isMesh&&F.matrixWorld.determinant()<0,Ae=ja(v,R,D,B,F);_e.setMaterial(B,ve);let Ce=D.index,Fe=1;if(B.wireframe===!0){if(Ce=ee.getWireframeAttribute(D),Ce===void 0)return;Fe=2}let De=D.drawRange,Le=D.attributes.position,nt=De.start*Fe,Ut=(De.start+De.count)*Fe;re!==null&&(nt=Math.max(nt,re.start*Fe),Ut=Math.min(Ut,(re.start+re.count)*Fe)),Ce!==null?(nt=Math.max(nt,0),Ut=Math.min(Ut,Ce.count)):Le!=null&&(nt=Math.max(nt,0),Ut=Math.min(Ut,Le.count));let bt=Ut-nt;if(bt<0||bt===1/0)return;A.setup(F,B,Ae,D,Ce);let nn,at=Ie;if(Ce!==null&&(nn=Q.get(Ce),at=Re,at.setIndex(nn)),F.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*He()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(F.isLine){let je=B.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*He()),F.isLineSegments?at.setMode(k.LINES):F.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else F.isPoints?at.setMode(k.POINTS):F.isSprite&&at.setMode(k.TRIANGLES);if(F.isBatchedMesh)at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)at.renderInstances(nt,bt,F.count);else if(D.isInstancedBufferGeometry){let je=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,rs=Math.min(D.instanceCount,je);at.renderInstances(nt,bt,rs)}else at.render(nt,bt)};function Ve(v,R,D){v.transparent===!0&&v.side===Ht&&v.forceSinglePass===!1?(v.side=en,v.needsUpdate=!0,dn(v,R,D),v.side=Gn,v.needsUpdate=!0,dn(v,R,D),v.side=Ht):dn(v,R,D)}this.compile=function(v,R,D=null){D===null&&(D=v),m=ge.get(D),m.init(),b.push(m),D.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),v!==D&&v.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);let B=new Set;return v.traverse(function(F){let re=F.material;if(re)if(Array.isArray(re))for(let ve=0;ve<re.length;ve++){let Ae=re[ve];Ve(Ae,D,F),B.add(Ae)}else Ve(re,D,F),B.add(re)}),b.pop(),m=null,B},this.compileAsync=function(v,R,D=null){let B=this.compile(v,R,D);return new Promise(F=>{function re(){if(B.forEach(function(ve){G.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){F(v);return}setTimeout(re,10)}Me.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let tt=null;function dt(v){tt&&tt(v)}function vt(){Xe.stop()}function it(){Xe.start()}let Xe=new Td;Xe.setAnimationLoop(dt),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(v){tt=v,xe.setAnimationLoop(v),v===null?Xe.stop():Xe.start()},xe.addEventListener("sessionstart",vt),xe.addEventListener("sessionend",it),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(R),R=xe.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,R,C),m=ge.get(v,b.length),m.init(),b.push(m),be.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),z.setFromProjectionMatrix(be),me=this.localClippingEnabled,$=We.init(this.clippingPlanes,me),_=he.get(v,p.length),_.init(),p.push(_),hn(v,R,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,X),this.info.render.frame++,$===!0&&We.beginShadows();let D=m.state.shadowsArray;if(J.render(D,v,R),$===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,v),m.setupLights(x._useLegacyLights),R.isArrayCamera){let B=R.cameras;for(let F=0,re=B.length;F<re;F++){let ve=B[F];Jt(_,v,ve,ve.viewport)}}else Jt(_,v,R);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),v.isScene===!0&&v.onAfterRender(x,v,R),A.resetDefaultState(),j=-1,E=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function hn(v,R,D,B){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)D=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||z.intersectsSprite(v)){B&&Ee.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);let ve=ne.update(v),Ae=v.material;Ae.visible&&_.push(v,ve,Ae,D,Ee.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||z.intersectsObject(v))){let ve=ne.update(v),Ae=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ee.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ee.copy(ve.boundingSphere.center)),Ee.applyMatrix4(v.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){let Ce=ve.groups;for(let Fe=0,De=Ce.length;Fe<De;Fe++){let Le=Ce[Fe],nt=Ae[Le.materialIndex];nt&&nt.visible&&_.push(v,ve,nt,D,Ee.z,Le)}}else Ae.visible&&_.push(v,ve,Ae,D,Ee.z,null)}}let re=v.children;for(let ve=0,Ae=re.length;ve<Ae;ve++)hn(re[ve],R,D,B)}function Jt(v,R,D,B){let F=v.opaque,re=v.transmissive,ve=v.transparent;m.setupLightsView(D),$===!0&&We.setGlobalState(x.clippingPlanes,D),re.length>0&&ss(F,re,R,D),B&&_e.viewport(T.copy(B)),F.length>0&&un(F,R,D),re.length>0&&un(re,R,D),ve.length>0&&un(ve,R,D),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ss(v,R,D,B){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;let re=Oe.isWebGL2;we===null&&(we=new ri(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?wr:bi,minFilter:Mi,samples:re?4:0})),x.getDrawingBufferSize(ze),re?we.setSize(ze.x,ze.y):we.setSize(Io(ze.x),Io(ze.y));let ve=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(le),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();let Ae=x.toneMapping;x.toneMapping=vi,un(v,D,B),M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we);let Ce=!1;for(let Fe=0,De=R.length;Fe<De;Fe++){let Le=R[Fe],nt=Le.object,Ut=Le.geometry,bt=Le.material,nn=Le.group;if(bt.side===Ht&&nt.layers.test(B.layers)){let at=bt.side;bt.side=en,bt.needsUpdate=!0,ir(nt,D,B,Ut,bt,nn),bt.side=at,bt.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we)),x.setRenderTarget(ve),x.setClearColor(le,N),x.toneMapping=Ae}function un(v,R,D){let B=R.isScene===!0?R.overrideMaterial:null;for(let F=0,re=v.length;F<re;F++){let ve=v[F],Ae=ve.object,Ce=ve.geometry,Fe=B===null?ve.material:B,De=ve.group;Ae.layers.test(D.layers)&&ir(Ae,R,D,Ce,Fe,De)}}function ir(v,R,D,B,F,re){v.onBeforeRender(x,R,D,B,F,re),v.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(x,R,D,B,v,re),F.transparent===!0&&F.side===Ht&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,x.renderBufferDirect(D,R,B,F,v,re),F.side=Gn,F.needsUpdate=!0,x.renderBufferDirect(D,R,B,F,v,re),F.side=Ht):x.renderBufferDirect(D,R,B,F,v,re),v.onAfterRender(x,R,D,B,F,re)}function dn(v,R,D){R.isScene!==!0&&(R=Te);let B=G.get(v),F=m.state.lights,re=m.state.shadowsArray,ve=F.state.version,Ae=ye.getParameters(v,F.state,re,R,D),Ce=ye.getProgramCacheKey(Ae),Fe=B.programs;B.environment=v.isMeshStandardMaterial?R.environment:null,B.fog=R.fog,B.envMap=(v.isMeshStandardMaterial?U:y).get(v.envMap||B.environment),Fe===void 0&&(v.addEventListener("dispose",pe),Fe=new Map,B.programs=Fe);let De=Fe.get(Ce);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===ve)return rr(v,Ae),De}else Ae.uniforms=ye.getUniforms(v),v.onBuild(D,Ae,x),v.onBeforeCompile(Ae,x),De=ye.acquireProgram(Ae,Ce),Fe.set(Ce,De),B.uniforms=Ae.uniforms;let Le=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=We.uniform),rr(v,Ae),B.needsLights=V(v),B.lightsStateVersion=ve,B.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function sr(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Ls.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function rr(v,R){let D=G.get(v);D.outputColorSpace=R.outputColorSpace,D.batching=R.batching,D.instancing=R.instancing,D.instancingColor=R.instancingColor,D.skinning=R.skinning,D.morphTargets=R.morphTargets,D.morphNormals=R.morphNormals,D.morphColors=R.morphColors,D.morphTargetsCount=R.morphTargetsCount,D.numClippingPlanes=R.numClippingPlanes,D.numIntersection=R.numClipIntersection,D.vertexAlphas=R.vertexAlphas,D.vertexTangents=R.vertexTangents,D.toneMapping=R.toneMapping}function ja(v,R,D,B,F){R.isScene!==!0&&(R=Te),M.resetTextureUnits();let re=R.fog,ve=B.isMeshStandardMaterial?R.environment:null,Ae=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vt,Ce=(B.isMeshStandardMaterial?U:y).get(B.envMap||ve),Fe=B.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,De=!!D.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Le=!!D.morphAttributes.position,nt=!!D.morphAttributes.normal,Ut=!!D.morphAttributes.color,bt=vi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(bt=x.toneMapping);let nn=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,at=nn!==void 0?nn.length:0,je=G.get(B),rs=m.state.lights;if($===!0&&(me===!0||v!==E)){let Ge=v===E&&B.id===j;We.setState(B,v,Ge)}let Mt=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==rs.state.version||je.outputColorSpace!==Ae||F.isBatchedMesh&&je.batching===!1||!F.isBatchedMesh&&je.batching===!0||F.isInstancedMesh&&je.instancing===!1||!F.isInstancedMesh&&je.instancing===!0||F.isSkinnedMesh&&je.skinning===!1||!F.isSkinnedMesh&&je.skinning===!0||F.isInstancedMesh&&je.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&je.instancingColor===!1&&F.instanceColor!==null||je.envMap!==Ce||B.fog===!0&&je.fog!==re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==We.numPlanes||je.numIntersection!==We.numIntersection)||je.vertexAlphas!==Fe||je.vertexTangents!==De||je.morphTargets!==Le||je.morphNormals!==nt||je.morphColors!==Ut||je.toneMapping!==bt||Oe.isWebGL2===!0&&je.morphTargetsCount!==at)&&(Mt=!0):(Mt=!0,je.__version=B.version);let kn=je.currentProgram;Mt===!0&&(kn=dn(B,R,F));let or=!1,ui=!1,os=!1,Ft=kn.getUniforms(),zn=je.uniforms;if(_e.useProgram(kn.program)&&(or=!0,ui=!0,os=!0),B.id!==j&&(j=B.id,ui=!0),or||E!==v){Ft.setValue(k,"projectionMatrix",v.projectionMatrix),Ft.setValue(k,"viewMatrix",v.matrixWorldInverse);let Ge=Ft.map.cameraPosition;Ge!==void 0&&Ge.setValue(k,Ee.setFromMatrixPosition(v.matrixWorld)),Oe.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,ui=!0,os=!0)}if(F.isSkinnedMesh){Ft.setOptional(k,F,"bindMatrix"),Ft.setOptional(k,F,"bindMatrixInverse");let Ge=F.skeleton;Ge&&(Oe.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),Ft.setValue(k,"boneTexture",Ge.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Ft.setOptional(k,F,"batchingTexture"),Ft.setValue(k,"batchingTexture",F._matricesTexture,M));let as=D.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&Oe.isWebGL2===!0)&&Ke.update(F,D,kn),(ui||je.receiveShadow!==F.receiveShadow)&&(je.receiveShadow=F.receiveShadow,Ft.setValue(k,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zn.envMap.value=Ce,zn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ui&&(Ft.setValue(k,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&qr(zn,os),re&&B.fog===!0&&ce.refreshFogUniforms(zn,re),ce.refreshMaterialUniforms(zn,B,Y,W,we),Ls.upload(k,sr(je),zn,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ls.upload(k,sr(je),zn,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ft.setValue(k,"center",F.center),Ft.setValue(k,"modelViewMatrix",F.modelViewMatrix),Ft.setValue(k,"normalMatrix",F.normalMatrix),Ft.setValue(k,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ge=B.uniformsGroups;for(let fn=0,ar=Ge.length;fn<ar;fn++)if(Oe.isWebGL2){let lr=Ge[fn];ie.update(lr,kn),ie.bind(lr,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function qr(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function V(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,R,D){G.get(v.texture).__webglTexture=R,G.get(v.depthTexture).__webglTexture=D;let B=G.get(v);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=D===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,R){let D=G.get(v);D.__webglFramebuffer=R,D.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,D=0){C=v,I=R,P=D;let B=!0,F=null,re=!1,ve=!1;if(v){let Ce=G.get(v);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(v):Ce.__hasExternalTextures&&M.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);let De=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[R])?F=De[R][D]:F=De[R],re=!0):Oe.isWebGL2&&v.samples>0&&M.useMultisampledRTT(v)===!1?F=G.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[D]:F=De,T.copy(v.viewport),H.copy(v.scissor),K=v.scissorTest}else T.copy(Z).multiplyScalar(Y).floor(),H.copy(se).multiplyScalar(Y).floor(),K=de;if(_e.bindFramebuffer(k.FRAMEBUFFER,F)&&Oe.drawBuffers&&B&&_e.drawBuffers(v,F),_e.viewport(T),_e.scissor(H),_e.setScissorTest(K),re){let Ce=G.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ce.__webglTexture,D)}else if(ve){let Ce=G.get(v.texture),Fe=R||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,D||0,Fe)}j=-1},this.readRenderTargetPixels=function(v,R,D,B,F,re,ve){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){_e.bindFramebuffer(k.FRAMEBUFFER,Ae);try{let Ce=v.texture,Fe=Ce.format,De=Ce.type;if(Fe!==Mn&&fe.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=De===wr&&(Me.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(De!==bi&&fe.convert(De)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ii&&(Oe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-B&&D>=0&&D<=v.height-F&&k.readPixels(R,D,B,F,fe.convert(Fe),fe.convert(De),re)}finally{let Ce=C!==null?G.get(C).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(v,R,D=0){let B=Math.pow(2,-D),F=Math.floor(R.image.width*B),re=Math.floor(R.image.height*B);M.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,D,0,0,v.x,v.y,F,re),_e.unbindTexture()},this.copyTextureToTexture=function(v,R,D,B=0){let F=R.image.width,re=R.image.height,ve=fe.convert(D.format),Ae=fe.convert(D.type);M.setTexture2D(D,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment),R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,v.x,v.y,F,re,ve,Ae,R.image.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,v.x,v.y,R.mipmaps[0].width,R.mipmaps[0].height,ve,R.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,v.x,v.y,ve,Ae,R.image),B===0&&D.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(v,R,D,B,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let re=v.max.x-v.min.x+1,ve=v.max.y-v.min.y+1,Ae=v.max.z-v.min.z+1,Ce=fe.convert(B.format),Fe=fe.convert(B.type),De;if(B.isData3DTexture)M.setTexture3D(B,0),De=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)M.setTexture2DArray(B,0),De=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Le=k.getParameter(k.UNPACK_ROW_LENGTH),nt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ut=k.getParameter(k.UNPACK_SKIP_PIXELS),bt=k.getParameter(k.UNPACK_SKIP_ROWS),nn=k.getParameter(k.UNPACK_SKIP_IMAGES),at=D.isCompressedTexture?D.mipmaps[F]:D.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,at.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,v.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,v.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,v.min.z),D.isDataTexture||D.isData3DTexture?k.texSubImage3D(De,F,R.x,R.y,R.z,re,ve,Ae,Ce,Fe,at.data):D.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(De,F,R.x,R.y,R.z,re,ve,Ae,Ce,at.data)):k.texSubImage3D(De,F,R.x,R.y,R.z,re,ve,Ae,Ce,Fe,at),k.pixelStorei(k.UNPACK_ROW_LENGTH,Le),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,nt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,bt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nn),F===0&&B.generateMipmaps&&k.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),_e.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,_e.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===da?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Hi:vd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?St:Vt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Kl=class extends Pr{};Kl.prototype.isWebGL1Renderer=!0;var zs=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new S,Ir=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bu=new S,ku=new gt,zu=new gt,vx=new S,Hu=new $e,_o=new S,bl=new _n,Vu=new $e,Ml=new Un,Vo=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(i),e.ray.intersectsSphere(bl)!==!1&&(Vu.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(Vu),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ku.fromBufferAttribute(i.attributes.skinIndex,e),zu.fromBufferAttribute(i.attributes.skinWeight,e),Bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=zu.getComponent(r);if(o!==0){let a=ku.getComponent(r);Hu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vx.copy(Bu).applyMatrix4(Hu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Nr=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jl=class extends $t{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bt,u=Bt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gu=new $e,bx=new $e,Go=class s{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bx;Gu.multiplyMatrices(a,t[r]),Gu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Jl(t,e,e,Mn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nr),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Xi=class extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new $e,Wu=new $e,xo=[],Xu=new yt,Mx=new $e,fr=new Ye,pr=new _n,Wo=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Xu.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),pr.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ss),Wu.multiplyMatrices(n,Ss),fr.matrixWorld=Wu,fr.raycast(e,xo);for(let o=0,a=xo.length;o<a;o++){let l=xo[o];l.instanceId=r,l.object=this,t.push(l)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var On=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ju=new S,qu=new S,Yu=new $e,El=new Un,yo=new _n,an=class extends Rt{constructor(e=new mt,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ju.fromBufferAttribute(t,i-1),qu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ju.distanceTo(qu);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Yu.copy(i).invert(),El.copy(e.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,u=new S,h=new S,d=new S,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=p,w=b-1;x<w;x+=f){let I=g.getX(x),P=g.getX(x+1);if(c.fromBufferAttribute(m,I),u.fromBufferAttribute(m,P),El.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=p,w=b-1;x<w;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),El.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},$u=new S,Ku=new S,Xo=class extends an{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$u.fromBufferAttribute(t,i),Ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(Ku);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hs=class extends an{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Dr=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ju=new $e,Zl=new Un,vo=new _n,bo=new S,jo=class extends Rt{constructor(e=new mt,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Ju.copy(i).invert(),Zl.copy(e.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);bo.fromBufferAttribute(h,m),Zu(bo,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)bo.fromBufferAttribute(h,g),Zu(bo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zu(s,e,t,n,i,r,o){let a=Zl.distanceSqToPoint(s);if(a<t){let l=new S;Zl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var qo=class extends $t{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ae:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],o=[],a=new S,l=new $e;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ur=class extends wn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new ae,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ql=class extends Ur{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Mo=new S,Sl=new wc,wl=new wc,Tl=new wc,ec=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Mo.subVectors(i[0],i[1]).add(i[0]),c=Mo);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Mo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),wl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Tl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),wl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sl.calc(l),wl.calc(l),Tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Ex(s,e){let t=1-s;return t*t*e}function Sx(s,e){return 2*(1-s)*s*e}function wx(s,e){return s*s*e}function br(s,e,t,n){return Ex(s,e)+Sx(s,t)+wx(s,n)}function Tx(s,e){let t=1-s;return t*t*t*e}function Ax(s,e){let t=1-s;return 3*t*t*s*e}function Rx(s,e){return 3*(1-s)*s*s*e}function Cx(s,e){return s*s*s*e}function Mr(s,e,t,n,i){return Tx(s,e)+Ax(s,t)+Rx(s,n)+Cx(s,i)}var Yo=class extends wn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,i.x,r.x,o.x,a.x),Mr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends wn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,i.x,r.x,o.x,a.x),Mr(e,i.y,r.y,o.y,a.y),Mr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends wn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends wn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends wn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(br(e,i.x,r.x,o.x),br(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends wn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(br(e,i.x,r.x,o.x),br(e,i.y,r.y,o.y),br(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Qu(a,l.x,c.x,u.x,h.x),Qu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},ed=Object.freeze({__proto__:null,ArcCurve:Ql,CatmullRomCurve3:ec,CubicBezierCurve:Yo,CubicBezierCurve3:tc,EllipseCurve:Ur,LineCurve:$o,LineCurve3:nc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:ic,SplineCurve:Jo}),sc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ed[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ed[i.type]().fromJSON(i))}return this}},Zo=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $o(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ko(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Yo(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Ur(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qo=class s extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,u=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Or=class extends Zo{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Zo().fromJSON(i))}return this}},Px={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Id(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=Ux(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Fr(r,o,t,a,l,f,0),o}};function Id(s,e,t,n,i){let r,o;if(i===jx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=td(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=td(r,s[r],s[r+1],o);return o&&pa(o,o.next)&&(kr(o),o=o.next),o}function ji(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(pa(t,t.next)||At(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&zx(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ix(s,n,i,r):Lx(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),kr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Nx(ji(s),e,t),Fr(s,e,t,n,i,r,2)):o===2&&Dx(s,e,t,n,i,r):Fr(ji(s),e,t,n,i,r,1);break}}}function Lx(s){let e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Rs(i,a,r,l,o,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ix(s,e,t,n){let i=s.prev,r=s,o=s.next;if(At(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=rc(f,g,e,t,n),b=rc(_,m,e,t,n),x=s.prevZ,w=s.nextZ;for(;x&&x.z>=p&&w&&w.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Rs(a,u,l,h,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==i&&w!==o&&Rs(a,u,l,h,c,d,w.x,w.y)&&At(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Rs(a,u,l,h,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=b;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==i&&w!==o&&Rs(a,u,l,h,c,d,w.x,w.y)&&At(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Nx(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!pa(i,r)&&Nd(i,n,n.next,r)&&Br(i,r)&&Br(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),kr(n),kr(n.next),n=s=r),n=n.next}while(n!==s);return ji(n)}function Dx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gx(o,a)){let l=Dd(o,a);o=ji(o,o.next),l=ji(l,l.next),Fr(o,e,t,n,i,r,0),Fr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ux(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Id(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vx(c));for(i.sort(Ox),r=0;r<i.length;r++)t=Fx(i[r],t);return t}function Ox(s,e){return s.x-e.x}function Fx(s,e){let t=Bx(s,e);if(!t)return e;let n=Dd(t,s);return ji(n,n.next),ji(t,t.next)}function Bx(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Rs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Br(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&kx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function kx(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function zx(s,e,t,n){let i=s;do i.z===0&&(i.z=rc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hx(i)}function Hx(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function rc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Vx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Rs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Gx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wx(s,e)&&(Br(s,e)&&Br(e,s)&&Xx(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||pa(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function pa(s,e){return s.x===e.x&&s.y===e.y}function Nd(s,e,t,n){let i=So(At(s,e,t)),r=So(At(s,e,n)),o=So(At(t,n,s)),a=So(At(t,n,e));return!!(i!==r&&o!==a||i===0&&Eo(s,t,e)||r===0&&Eo(s,n,e)||o===0&&Eo(t,s,n)||a===0&&Eo(t,e,n))}function Eo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function So(s){return s>0?1:s<0?-1:0}function Wx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Br(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function Xx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Dd(s,e){let t=new oc(s.i,s.x,s.y),n=new oc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function td(s,e,t,n){let i=new oc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function oc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Er=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];nd(e),id(n,e);let o=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,id(n,t[l]);let a=Px.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function nd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function id(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ea=class s extends mt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new S,g=new ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,x=b,w=b+n+1,I=b+n+2,P=b+1;a.push(x,w,P),a.push(w,I,P)}}this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ta=class s extends mt{constructor(e=new Or([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ft(i,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Er.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Er.isClockWise(b)===!0&&(g[m]=b.reverse())}let _=Er.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){let b=_[m],x=b[0]+h,w=b[1]+h,I=b[2]+h;n.push(x,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qx(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function qx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ei=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new S,d=new S,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],x=p/n,w=0;p===0&&o===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){let P=I/t;h.x=-e*Math.cos(i+P*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+P*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(P+w,1-x),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let x=u[p][b+1],w=u[p][b],I=u[p+1][b],P=u[p+1][b+1];(p!==0||o>0)&&f.push(x,w,P),(p!==n-1||l<Math.PI)&&f.push(w,I,P)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var na=class s extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,b=(i+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ai=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends ai{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vs=class extends On{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function wo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $x(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends Si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kh:r=e,a=2*t-n;break;case Jh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:o=e,l=2*n-t;break;case Jh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,w=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+b*o[c+I]+x*o[l+I]+w*o[h+I];return r}},lc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},cc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Yx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Gi;var wi=class extends An{};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Us;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends An{};ia.prototype.ValueTypeName="color";var li=class extends An{};li.prototype.ValueTypeName="number";var hc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)It.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xn=class extends An{InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};Xn.prototype.ValueTypeName="quaternion";Xn.prototype.DefaultInterpolation=Gi;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends An{};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Us;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends An{};ci.prototype.ValueTypeName="vector";var sa=class{constructor(e,t=-1,n,i=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Jx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=$x(l);l=sd(l,1,u),c=sd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new li(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,_){if(f.length!==0){let m=[],p=[];Ud(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new li(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ci,f+".position",d,"pos",i),n(Xn,f+".quaternion",d,"rot",i),n(ci,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Kx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return ci;case"color":return ia;case"quaternion":return Xn;case"bool":case"boolean":return wi;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Kx(s.type);if(s.times===void 0){let t=[],n=[];Ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},uc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Zx=new uc,hi=class{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},dc=class extends Error{constructor(e,t){super(e),this.response=t}},zr=class extends hi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ti[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:w})=>{if(x)p.close();else{_+=w.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,C=u.length;P<C;P++){let j=u[P];j.onProgress&&j.onProgress(I)}p.enqueue(w),b()}})}}});return new Response(m)}else throw new dc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{xi.add(e,c);let u=ti[e];delete ti[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var fc=class extends hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Tr("img");function l(){u(),xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ra=class extends hi{constructor(e){super(e)}load(e,t,n,i){let r=new $t,o=new fc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Gs=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},oa=class extends Gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Al=new $e,rd=new S,od=new S,Hr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pc=class extends Hr{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},aa=class extends Gs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ad=new $e,mr=new S,Rl=new S,mc=class extends Hr{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad)}},Ws=class extends Gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gc=class extends Hr{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ai=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var la=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(e,l),r.manager.itemStart(e)}};var Tc="\\[\\]\\.:\\/",Qx=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",ey="[^"+Tc.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",Ac),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones","map"],_c=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){let t=ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);oy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=_c;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iy=new Float32Array(1);var ca=class{constructor(e,t,n=0,i=1/0){this.ray=new Un(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(ld),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)xc(e[i],this,n,t);return n.sort(ld),n}};function ld(s,e){return s.distance-e.distance}function xc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)xc(i[r],e,t,!0)}}var jn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Od={type:"change"},Rc={type:"start"},Fd={type:"end"},ma=new Un,Bd=new Dn,ay=Math.cos(70*Ze.DEG2RAD),ga=class extends Wn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ge),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Od),n.update(),r=i.NONE},this.update=(function(){let A=new S,ie=new It().setFromUnitVectors(e.up,new S(0,1,0)),Se=ie.clone().invert(),xe=new S,te=new It,L=new S,oe=2*Math.PI;return function(Ne=null){let Pe=n.object.position;A.copy(Pe).sub(n.target),A.applyQuaternion(ie),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&K(T(Ne)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ve=n.minAzimuthAngle,tt=n.maxAzimuthAngle;isFinite(Ve)&&isFinite(tt)&&(Ve<-Math.PI?Ve+=oe:Ve>Math.PI&&(Ve-=oe),tt<-Math.PI?tt+=oe:tt>Math.PI&&(tt-=oe),Ve<=tt?a.theta=Math.max(Ve,Math.min(tt,a.theta)):a.theta=a.theta>(Ve+tt)/2?Math.max(Ve,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Se),Pe.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let dt=!1;if(n.zoomToCursor&&P){let vt=null;if(n.object.isPerspectiveCamera){let it=A.length();vt=Z(it*c);let Xe=it-vt;n.object.position.addScaledVector(w,Xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let it=new S(I.x,I.y,0);it.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),dt=!0;let Xe=new S(I.x,I.y,0);Xe.unproject(n.object),n.object.position.sub(Xe).add(it),n.object.updateMatrixWorld(),vt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(vt).add(n.object.position):(ma.origin.copy(n.object.position),ma.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ma.direction))<ay?e.lookAt(n.target):(Bd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ma.intersectPlane(Bd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),dt=!0);return c=1,P=!1,dt||xe.distanceToSquared(n.object.position)>o||8*(1-te.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Od),xe.copy(n.object.position),te.copy(n.object.quaternion),L.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qe),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ge),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new jn,l=new jn,c=1,u=new S,h=new ae,d=new ae,f=new ae,g=new ae,_=new ae,m=new ae,p=new ae,b=new ae,x=new ae,w=new S,I=new ae,P=!1,C=[],j={},E=!1;function T(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function H(A){let ie=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*ie)}function K(A){l.theta-=A}function le(A){l.phi-=A}let N=(function(){let A=new S;return function(Se,xe){A.setFromMatrixColumn(xe,0),A.multiplyScalar(-Se),u.add(A)}})(),O=(function(){let A=new S;return function(Se,xe){n.screenSpacePanning===!0?A.setFromMatrixColumn(xe,1):(A.setFromMatrixColumn(xe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Se),u.add(A)}})(),W=(function(){let A=new S;return function(Se,xe){let te=n.domElement;if(n.object.isPerspectiveCamera){let L=n.object.position;A.copy(L).sub(n.target);let oe=A.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Se*oe/te.clientHeight,n.object.matrix),O(2*xe*oe/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Se*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),O(xe*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function Y(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(A,ie){if(!n.zoomToCursor)return;P=!0;let Se=n.domElement.getBoundingClientRect(),xe=A-Se.left,te=ie-Se.top,L=Se.width,oe=Se.height;I.x=xe/L*2-1,I.y=-(te/oe)*2+1,w.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function se(A){h.set(A.clientX,A.clientY)}function de(A){X(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function z(A){g.set(A.clientX,A.clientY)}function $(A){d.set(A.clientX,A.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let ie=n.domElement;K(2*Math.PI*f.x/ie.clientHeight),le(2*Math.PI*f.y/ie.clientHeight),h.copy(d),n.update()}function me(A){b.set(A.clientX,A.clientY),x.subVectors(b,p),x.y>0?Y(H(x.y)):x.y<0&&q(H(x.y)),p.copy(b),n.update()}function we(A){_.set(A.clientX,A.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_),n.update()}function be(A){X(A.clientX,A.clientY),A.deltaY<0?q(H(A.deltaY)):A.deltaY>0&&Y(H(A.deltaY)),n.update()}function ze(A){let ie=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?le(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?le(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ie=!0;break}ie&&(A.preventDefault(),n.update())}function Ee(A){if(C.length===1)h.set(A.pageX,A.pageY);else{let ie=fe(A),Se=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);h.set(Se,xe)}}function Te(A){if(C.length===1)g.set(A.pageX,A.pageY);else{let ie=fe(A),Se=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);g.set(Se,xe)}}function He(A){let ie=fe(A),Se=A.pageX-ie.x,xe=A.pageY-ie.y,te=Math.sqrt(Se*Se+xe*xe);p.set(0,te)}function k(A){n.enableZoom&&He(A),n.enablePan&&Te(A)}function Dt(A){n.enableZoom&&He(A),n.enableRotate&&Ee(A)}function Me(A){if(C.length==1)d.set(A.pageX,A.pageY);else{let Se=fe(A),xe=.5*(A.pageX+Se.x),te=.5*(A.pageY+Se.y);d.set(xe,te)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let ie=n.domElement;K(2*Math.PI*f.x/ie.clientHeight),le(2*Math.PI*f.y/ie.clientHeight),h.copy(d)}function Oe(A){if(C.length===1)_.set(A.pageX,A.pageY);else{let ie=fe(A),Se=.5*(A.pageX+ie.x),xe=.5*(A.pageY+ie.y);_.set(Se,xe)}m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_)}function _e(A){let ie=fe(A),Se=A.pageX-ie.x,xe=A.pageY-ie.y,te=Math.sqrt(Se*Se+xe*xe);b.set(0,te),x.set(0,Math.pow(b.y/p.y,n.zoomSpeed)),Y(x.y),p.copy(b);let L=(A.pageX+ie.x)*.5,oe=(A.pageY+ie.y)*.5;X(L,oe)}function ot(A){n.enableZoom&&_e(A),n.enablePan&&Oe(A)}function G(A){n.enableZoom&&_e(A),n.enableRotate&&Me(A)}function M(A){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",U)),Ke(A),A.pointerType==="touch"?We(A):Q(A))}function y(A){n.enabled!==!1&&(A.pointerType==="touch"?J(A):ee(A))}function U(A){Ie(A),C.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(Fd),r=i.NONE}function Q(A){let ie;switch(A.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Yi.DOLLY:if(n.enableZoom===!1)return;de(A),r=i.DOLLY;break;case Yi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;z(A),r=i.PAN}else{if(n.enableRotate===!1)return;se(A),r=i.ROTATE}break;case Yi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;se(A),r=i.ROTATE}else{if(n.enablePan===!1)return;z(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Rc)}function ee(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(A);break;case i.DOLLY:if(n.enableZoom===!1)return;me(A);break;case i.PAN:if(n.enablePan===!1)return;we(A);break}}function ne(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(Rc),be(ye(A)),n.dispatchEvent(Fd))}function ye(A){let ie=A.deltaMode,Se={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ie){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return A.ctrlKey&&!E&&(Se.deltaY*=10),Se}function ce(A){A.key==="Control"&&(E=!0,document.addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(A){A.key==="Control"&&(E=!1,document.removeEventListener("keyup",he,{passive:!0,capture:!0}))}function ge(A){n.enabled===!1||n.enablePan===!1||ze(A)}function We(A){switch(Re(A),C.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;Ee(A),r=i.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;Te(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(A),r=i.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Rc)}function J(A){switch(Re(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Oe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ot(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(A),n.update();break;default:r=i.NONE}}function Qe(A){n.enabled!==!1&&A.preventDefault()}function Ke(A){C.push(A.pointerId)}function Ie(A){delete j[A.pointerId];for(let ie=0;ie<C.length;ie++)if(C[ie]==A.pointerId){C.splice(ie,1);return}}function Re(A){let ie=j[A.pointerId];ie===void 0&&(ie=new ae,j[A.pointerId]=ie),ie.set(A.pageX,A.pageY)}function fe(A){let ie=A.pointerId===C[0]?C[1]:C[0];return j[ie]}n.domElement.addEventListener("contextmenu",Qe),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}};function Cc(s,e){if(e===yd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Vr||e===ua){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Vr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var _a=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Oc(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Bc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new Hc(t)}),this.register(function(t){return new Uc(t)}),this.register(function(t){return new Vc(t)}),this.register(function(t){return new Fc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new Gc(t)}),this.register(function(t){return new Nc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new $c(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ai.extractUrlBase(e);o=Ai.resolveURL(c,this.path)}else o=Ai.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gd){try{o[st.KHR_BINARY_GLTF]=new Kc(e)}catch(h){i&&i(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ih(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new Dc;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new Jc(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new Zc;break;case st.KHR_MESH_QUANTIZATION:o[h]=new Qc;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ly(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nc=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ue(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Vt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ws(u),c.distance=h;break;case"spot":c=new aa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Dc=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}},Uc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Oc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(r)}},Fc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Bc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},kc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}},Hc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},Gc=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Wc=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Xc=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},jc=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qc=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yc=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},$c=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new $e,m=new S,p=new It,b=new S(1,1,1),x=new Wo(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&b.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,_.compose(m,p,b));for(let w in l)if(w==="_COLOR_0"){let I=l[w];x.instanceColor=new Xi(I.array,I.itemSize,I.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);Rt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Gd="glTF",Gr=12,kd={JSON:1313821514,BIN:5130562},Kc=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Gr,r=new DataView(e,Gr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===kd.JSON){let c=new Uint8Array(e,Gr+o,a);this.content=n.decode(c)}else if(l===kd.BIN){let c=Gr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=th[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=th[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=js[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Vt,d)})})}},Zc=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qc=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},xa=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,x=p-d+h;for(let w=0;w!==a;w++){let I=o[_+w+a],P=o[_+w+l]*u,C=o[g+w+a],j=o[g+w]*u;r[w]=b*I+x*P+m*C+p*j}return r}},cy=new It,eh=class extends xa{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return cy.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zd={9728:Bt,9729:on,9984:Ao,9985:vc,9986:gr,9987:Mi},Hd={33071:gn,33648:Sr,10497:Vi},Pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},th={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:Gi,STEP:Us},Lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ai({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),s.DefaultMaterial}function Ki(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function fy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function py(s){let e,t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ic(t.attributes):e=s.indices+":"+Ic(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ic(s.targets[n]);return e}function Ic(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function my(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var gy=new $e,ih=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ly,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ra(this.options.manager):this.textureLoader=new la(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),Ci(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ai.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Pc[i.type],a=js[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Lt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Pc[i.type],c=js[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==h){let p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(b);x||(_=new c(a,p*f,i.count*f/u),x=new Lr(_,f/u),t.cache.add(b,x)),m=new Ir(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Lt(_,l,g);if(i.sparse!==void 0){let p=Pc.SCALAR,b=js[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,I=new b(o[1],x,i.sparse.count*p),P=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,j=I.length;C<j;C++){let E=I[C];if(m.setX(E,P[C*l]),l>=2&&m.setY(E,P[C*l+1]),l>=3&&m.setZ(E,P[C*l+2]),l>=4&&m.setW(E,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=zd[d.magFilter]||on,u.minFilter=zd[d.minFilter]||Mi,u.wrapS=Hd[d.wrapS]||Vi,u.wrapT=Hd[d.wrapT]||Vi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new $t(_);m.needsUpdate=!0,d(m)}),t.load(Ai.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||my(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Dr,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new On,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ai}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,St)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let u=r.alphaMode||Lc.OPAQUE;if(u===Lc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wt){let h=r.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],Vt)}return r.emissiveTexture!==void 0&&o!==wt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ki(i,h,r),h})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vd(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=py(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Vd(new mt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=o[f],p,b=c[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Vo(_,b):new Ye(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=Cc(p.geometry,ua):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=Cc(p.geometry,Vr));else if(m.mode===Rn.LINES)p=new Xo(_,b);else if(m.mode===Rn.LINE_STRIP)p=new an(_,b);else if(m.mode===Rn.LINE_LOOP)p=new Hs(_,b);else if(m.mode===Rn.POINTS)p=new jo(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ci(p,r),m.extensions&&Ki(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ki(i,h[0],r),h[0];let d=new qt;r.extensions&&Ki(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Ze.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new $e;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Go(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,x=d.length;b<x;b++){let w=d[b],I=f[b],P=g[b],C=_[b],j=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,I,P,C,j);if(E)for(let T=0;T<E.length;T++)p.push(E[T])}return new sa(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gy)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Nr:c.length>1?u=new qt:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ci(u,r),r.extensions&&Ki(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new qt;n.name&&(r.name=i.createUniqueName(n.name)),Ci(r,n),n.extensions&&Ki(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof xn||d instanceof $t)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ri[r.path]===Ri.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ri[r.path]){case Ri.weights:c=li;break;case Ri.rotation:c=Xn;break;case Ri.position:case Ri.scale:c=ci;break;default:switch(n.itemSize){case 1:c=li;break;case 2:case 3:default:c=ci;break}break}let u=i.interpolation!==void 0?hy[i.interpolation]:Gi,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ri[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Xn?eh:xa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _y(s,e,t){let n=e.attributes,i=new yt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){let u=nh(js[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new S,l=new S;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=nh(js[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Vd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=th[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ci(s,e),_y(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dy(s,e.targets,t):s})}var ya=class extends zs{constructor(e=null){super();let t=new Wi;t.deleteAttribute("uv");let n=new ai({side:en}),i=new ai,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ws(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ye(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ye(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ye(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new Ye(t,i);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let h=new Ye(t,i);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let d=new Ye(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Ye(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Ye(t,qs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Ye(t,qs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Ye(t,qs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Ye(t,qs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let b=new Ye(t,qs(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let x=new Ye(t,qs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function qs(s){let e=new wt;return e.color.setScalar(s),e}function Wd(s,e=[]){let t={links:new Map,joints:new Map,linkToJoint:new Map,jointToLink:new Map,meshesByLink:new Map,pickableMeshes:[]};s.traverse(n=>{(n.userData.urdf_link===!0||n.name==="pelvis"||n.name.endsWith("_link")||n.name.endsWith("_rubber_hand"))&&(n.userData.linkName=n.name,t.links.set(n.name,n)),n.name.endsWith("_joint")&&Array.isArray(n.userData.axis)&&t.joints.set(n.name,n)});for(let[n,i]of t.links){let r=i.parent;r!=null&&r.name.endsWith("_joint")&&t.linkToJoint.set(n,r),r&&t.joints.has(r.name)&&t.jointToLink.set(r.name,i)}s.traverse(n=>{if(!n.isMesh)return;let i=n;for(;i&&!i.userData.linkName;)i=i.parent;if(!i)return;let r=String(i.userData.linkName);n.userData.linkName=r;let o=t.meshesByLink.get(r)??[];o.push(n),t.meshesByLink.set(r,o);let a=t.linkToJoint.get(r);a&&t.joints.has(a.name)&&(n.userData.interactiveLink=!0,t.pickableMeshes.push(n))});for(let n of e){let i=t.links.get(n.name);i&&(i.userData.mass=n.mass,i.userData.centerOfMass=n.centerOfMass)}return s.updateMatrixWorld(!0),t}var va={targetJointName:"left_knee_joint",targetLinkName:"left_knee_link",jointNames:{leftHipPitch:"left_hip_pitch_joint",leftKnee:"left_knee_joint",leftAnklePitch:"left_ankle_pitch_joint",rightHipPitch:"right_hip_pitch_joint",rightKnee:"right_knee_joint",rightAnklePitch:"right_ankle_pitch_joint",supportFoot:"right_ankle_roll_link",movingFoot:"left_ankle_roll_link",root:"pelvis"},motion:{ankleCompensationRatio:-.6,hipCompensationRatio:-.4,supportKneeDegrees:80,supportAnklePitchDegrees:-40,maximumPelvisDropMeters:.08,automaticTargetDegrees:45,transitionSeconds:1.15},safety:{supportMarginMeters:.018,footContactHeightMeters:.008,collisionMarginMeters:.025,scanStepDegrees:5,updateIntervalSeconds:.1,collisionPairs:[{id:"lower-legs",first:"left_knee_link",second:"right_knee_link",label:"\u5DE6\u53F3\u5C0F\u817F"},{id:"feet",first:"left_ankle_roll_link",second:"right_ankle_roll_link",label:"\u5DE6\u53F3\u811A\u90E8"},{id:"left-thigh-knee",first:"left_hip_yaw_link",second:"left_knee_link",label:"\u5DE6\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},{id:"right-thigh-knee",first:"right_hip_yaw_link",second:"right_knee_link",label:"\u53F3\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},...["left","right"].flatMap(s=>{let e=s==="left"?"\u5DE6":"\u53F3";return[{id:`${s}-forearm-torso`,first:`${s}_elbow_link`,second:"torso_link",label:`${e}\u5C0F\u81C2\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-wrist-torso`,first:`${s}_wrist_pitch_link`,second:"torso_link",label:`${e}\u8155\u90E8\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-thigh-torso`,first:`${s}_hip_yaw_link`,second:"torso_link",label:`${e}\u5927\u817F\u4E0E\u8EAF\u5E72`,marginMeters:.01},...["left","right"].flatMap(t=>[{id:`${s}-upper-${t}-thigh`,first:`${s}_shoulder_yaw_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5927\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012},{id:`${s}-forearm-${t}-thigh`,first:`${s}_elbow_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5C0F\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012}])]})],collisionProxyScale:{left_hip_yaw_link:[.85,.45,.85],right_hip_yaw_link:[.85,.45,.85],left_knee_link:[.9,.6,.9],right_knee_link:[.9,.6,.9],left_ankle_roll_link:[1,.9,1],right_ankle_roll_link:[1,.9,1],torso_link:[.9,.92,.9],left_shoulder_yaw_link:[.88,.88,.88],right_shoulder_yaw_link:[.88,.88,.88],left_elbow_link:[.92,.9,.9],right_elbow_link:[.92,.9,.9],left_wrist_pitch_link:[.92,.9,.9],right_wrist_pitch_link:[.92,.9,.9]}},click:{maximumDistancePixels:5,maximumDurationMilliseconds:300},servoSeconds:.12,fallDelaySeconds:.5,discoveryChain:{id:"left-leg",label:"\u5DE6\u817F \xB7 \u9ACB\u2014\u819D\u2014\u8E1D",joints:[{name:"left_hip_pitch_joint",label:"\u9ACB \xB7 \u524D\u540E\u6446",link:"left_hip_yaw_link"},{name:"left_knee_joint",label:"\u819D \xB7 \u5C48\u4F38",link:"left_knee_link"},{name:"left_ankle_pitch_joint",label:"\u8E1D \xB7 \u4FEF\u4EF0",link:"left_ankle_roll_link"}],links:["left_hip_pitch_link","left_hip_roll_link","left_hip_yaw_link","left_knee_link","left_ankle_pitch_link","left_ankle_roll_link"],presets:[{id:"shallow",label:"\u8F7B\u5C48\u819D \xB7 30\xB0",kneeDegrees:30},{id:"crouch",label:"\u534F\u540C\u4E0B\u8E72 \xB7 45\xB0",kneeDegrees:45}]},interactionLimits:Object.fromEntries(["left","right"].flatMap(s=>[[`${s}_shoulder_pitch_joint`,{min:-90,max:90}],[`${s}_shoulder_roll_joint`,s==="left"?{min:0,max:100}:{min:-100,max:0}],[`${s}_shoulder_yaw_joint`,{min:-80,max:80}],[`${s}_elbow_joint`,{min:0,max:120}]])),partControls:[...["left","right"].flatMap(s=>[["hip_pitch","\u9ACB \xB7 \u524D\u540E\u6446",220,[`${s}_hip_yaw_link`,`${s}_hip_roll_link`]],["knee","\u819D \xB7 \u72EC\u7ACB\u5C48\u4F38",260,[]],["ankle_pitch","\u8E1D \xB7 \u4FEF\u4EF0",140,[`${s}_ankle_roll_link`]]].map(([e,t,n,i])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:"y",dragSensitivity:n,aliases:[...i]}))),{jointName:"waist_yaw_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u8F6C\u52A8",dragAxis:"x",dragSensitivity:220},{jointName:"waist_roll_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u4FA7\u503E",dragAxis:"x",dragSensitivity:100},{jointName:"waist_pitch_joint",label:"\u8170\u90E8 \xB7 \u524D\u540E\u4FEF\u4EF0",dragAxis:"y",dragSensitivity:100},...["left","right"].flatMap(s=>[["shoulder_pitch","\u80A9\u90E8\u524D\u540E\u6446","y"],["shoulder_roll","\u80A9\u90E8\u4FA7\u6446","x"],["shoulder_yaw","\u80A9\u90E8\u8F6C\u52A8","x"],["elbow","\u8098\u90E8\u5C48\u4F38","y"],["wrist_roll","\u624B\u8155\u6EDA\u8F6C","x"],["wrist_pitch","\u624B\u8155\u4FEF\u4EF0","y"],["wrist_yaw","\u624B\u8155\u8F6C\u52A8","x"]].map(([e,t,n])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:n,dragSensitivity:220,...e==="wrist_yaw"?{aliases:[`${s}_rubber_hand`]}:{}})))]};var ba=class{model;config;joints=new Map;root;rootBase;supportFoot;supportAnchor;movingFoot;movingFootBaseHeight;pelvisDrop=0;targetAngle=0;animation=null;playing=!1;playDirection=1;goals=new Map;segments=[];source="idle";teachingBaseline=null;teachingReturnSource="idle";get motionSource(){return this.source}constructor(e,t=va){this.model=e,this.config=t,e.traverse(o=>{if(!o.name.endsWith("_joint")||!Array.isArray(o.userData.axis))return;let{axis:a,lower:l,upper:c}=o.userData;!Number.isFinite(l)||!Number.isFinite(c)||this.joints.set(o.name,{node:o,base:o.quaternion.clone(),axis:new S(a[0],a[2],-a[1]).normalize(),lower:Ze.radToDeg(l),upper:Ze.radToDeg(c),angle:0})});let n=e.getObjectByName(t.jointNames.root);if(!n)throw new Error(`Missing root link: ${t.jointNames.root}`);this.root=n,this.rootBase=n.position.clone();let i=e.getObjectByName(t.jointNames.supportFoot);if(!i)throw new Error("Missing configured support foot");this.supportFoot=i;let r=e.getObjectByName(t.jointNames.movingFoot);if(!r)throw new Error("Missing configured moving foot");this.movingFoot=r,e.updateMatrixWorld(!0),this.supportAnchor=i.getWorldPosition(new S),this.movingFootBaseHeight=r.getWorldPosition(new S).y;for(let o of[t.jointNames.leftHipPitch,t.jointNames.leftKnee,t.jointNames.leftAnklePitch,t.jointNames.rightHipPitch,t.jointNames.rightKnee,t.jointNames.rightAnklePitch])if(!this.joints.has(o))throw new Error(`Missing configured joint: ${o}`)}getAngle(e){var t;return((t=this.joints.get(e))==null?void 0:t.angle)??0}getPerformancePose(){return Object.fromEntries([...this.joints].map(([e,t])=>[e,t.angle]))}applyPerformancePose(e){this.playing=!1,this.animation=null,this.segments=[],this.goals.clear(),this.source="chain",this.teachingBaseline=null;for(let[t]of this.joints){let n=this.getInteractionRange(t),i=e[t]??0;this.setJointAngle(t,Ze.clamp(Number.isFinite(i)?i:0,n.min,n.max))}this.root.position.copy(this.rootBase),this.maintainSupportAnchor()}getInteractionRange(e){let t=this.joints.get(e);if(!t)throw new Error(`Unknown joint: ${e}`);let n=this.config.interactionLimits[e],i=Math.max(t.lower,(n==null?void 0:n.min)??t.lower),r=Math.min(t.upper,(n==null?void 0:n.max)??t.upper);if(i>r)throw new Error(`Empty interaction range: ${e}`);return{min:i,max:r}}setControlledJoint(e,t){let n=this.joints.get(e);if(!n||!Number.isFinite(t))return(n==null?void 0:n.angle)??0;this.playing=!1,this.animation=null,this.segments=[],this.source="manual",this.teachingBaseline=null;let i=this.getInteractionRange(e),r=Ze.clamp(t,i.min,i.max);return this.goals.set(e,r),r}getRequestedAngle(e){return this.goals.get(e)??this.getAngle(e)}previewPose(e,t){let n=this.capture();try{for(let[i]of this.joints){let r=this.getInteractionRange(i),o=e[i]??0;this.setJointAngle(i,Ze.clamp(o,r.min,r.max))}return this.root.position.copy(this.rootBase),this.maintainSupportAnchor(),t()}finally{this.restore(n)}}maintainSupportAnchor(){this.model.updateMatrixWorld(!0);let e=this.supportFoot.getWorldPosition(new S),t=this.root.parent;this.root.position.add(t.worldToLocal(this.supportAnchor.clone()).sub(t.worldToLocal(e))),this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y),this.model.updateMatrixWorld(!0)}demonstratePose(e){this.pause(),this.source="teaching";let t=this.capture(),n=this.previewPose(e,()=>this.capture()),i=this.previewPose({},()=>this.capture());this.segments=[{from:t,to:n,duration:1.1,elapsed:0},{from:n,to:n,duration:1.2,elapsed:0},{from:n,to:i,duration:1,elapsed:0}]}demonstrateJoint(e){let t=this.teachingBaseline??this.capture(),n=this.teachingBaseline?this.teachingReturnSource:this.source;this.pause(),this.source="teaching",this.teachingBaseline=t,this.teachingReturnSource=n;let i=this.capture(),r=this.getInteractionRange(e),o=t.angles.get(e),a={...t,angles:new Map(t.angles)};a.angles.set(e,Ze.clamp(o+(r.max-o>=6?6:-6),r.min,r.max)),this.segments=[{from:i,to:a,duration:.3,elapsed:0},{from:a,to:a,duration:.35,elapsed:0},{from:a,to:t,duration:.45,elapsed:0}]}demonstrateChain(e){this.pause(),this.source="chain";let t=this.capture(),n,i;try{this.applyChain(0),n=this.capture(),this.applyChain(e),i=this.capture()}finally{this.restore(t)}this.segments=[{from:t,to:n,duration:.8,elapsed:0},{from:n,to:i,duration:1.2,elapsed:0,chainAngles:[0,e]},{from:i,to:i,duration:.5,elapsed:0,chainAngles:[e,e]},{from:i,to:n,duration:1.2,elapsed:0,chainAngles:[e,0]}]}setAngle(e){let t=this.config.jointNames.leftKnee,n=this.joints.get(t);return!n||!Number.isFinite(e)?0:(this.pause(),this.applyChain(Ze.clamp(e,n.lower,n.upper)),this.targetAngle=n.angle,n.angle)}transitionTo(e,t=this.config.motion.transitionSeconds){this.pause();let n=this.joints.get(this.config.jointNames.leftKnee),i=Ze.clamp(e,n.lower,n.upper);this.playing=!1,this.animation={from:n.angle,to:i,elapsed:0,duration:Math.max(.01,t)},this.targetAngle=i}play(){this.pause(),this.animation=null,this.playDirection=this.getAngle(this.config.jointNames.leftKnee)>=this.targetAngle?-1:1,this.playing=!0}pause(){this.playing=!1,this.animation=null,this.goals.clear(),this.segments=[],this.source!=="manual"&&(this.source="idle"),this.teachingBaseline=null}update(e){if(!Number.isFinite(e)||e<=0)return!1;if(this.segments.length){let o=e;for(;this.segments.length&&o>0;){let a=this.segments[0],l=Math.min(o,a.duration-a.elapsed);a.elapsed+=l,o-=l;let c=a.elapsed/a.duration,u=c*c*(3-2*c);if(a.chainAngles)this.applyChain(Ze.lerp(a.chainAngles[0],a.chainAngles[1],u));else{for(let[h,d]of a.to.angles)this.setJointAngle(h,Ze.lerp(a.from.angles.get(h),d,u));this.root.position.lerpVectors(a.from.root,a.to.root,u),this.pelvisDrop=Ze.lerp(a.from.drop,a.to.drop,u)}c>=1&&this.segments.shift()}return this.segments.length||(this.source=this.source==="teaching"?this.teachingReturnSource:"idle",this.teachingBaseline=null),this.model.updateMatrixWorld(!0),!0}if(this.goals.size){let o=1-Math.exp(-e/this.config.servoSeconds);for(let[a,l]of this.goals){let c=Ze.lerp(this.getAngle(a),l,o);Math.abs(c-l)<.001&&(c=l,this.goals.delete(a)),this.setJointAngle(a,c)}return this.model.updateMatrixWorld(!0),!0}if(this.animation){let o=this.animation;o.elapsed=Math.min(o.elapsed+Math.max(0,e),o.duration);let a=o.elapsed/o.duration,l=a*a*(3-2*a);return this.applyChain(Ze.lerp(o.from,o.to,l)),a>=1&&(this.animation=null),!0}if(!this.playing)return!1;Math.abs(this.targetAngle)<.001&&(this.targetAngle=this.config.motion.automaticTargetDegrees);let t=Math.min(0,this.targetAngle),n=Math.max(0,this.targetAngle),i=n-t,r=this.playDirection>0?this.getAngle(this.config.jointNames.leftKnee)-t:2*i-(this.getAngle(this.config.jointNames.leftKnee)-t);return r=(r+30*e)%(2*i),this.playDirection=r<i?1:-1,this.applyChain(t+(r<=i?r:2*i-r)),!0}get animating(){return this.animation!==null||this.playing||this.goals.size>0||this.segments.length>0}reset(){this.pause(),this.source="idle";for(let[e]of this.joints)this.setJointAngle(e,0);this.applyChain(0),this.targetAngle=0}preview(e,t){let n=this.capture(),i=this.targetAngle;try{return this.applyChain(e),t()}finally{this.restore(n),this.targetAngle=i}}capture(){return{angles:new Map([...this.joints].map(([e,t])=>[e,t.angle])),root:this.root.position.clone(),drop:this.pelvisDrop}}restore(e){for(let[t,n]of e.angles)this.setJointAngle(t,n);this.root.position.copy(e.root),this.pelvisDrop=e.drop,this.model.updateMatrixWorld(!0)}setJointAngle(e,t){let n=this.joints.get(e);if(!n)return;n.angle=Ze.clamp(t,n.lower,n.upper);let i=new It().setFromAxisAngle(n.axis,Ze.degToRad(n.angle));n.node.quaternion.copy(n.base).multiply(i)}applyChain(e){let{jointNames:t,motion:n}=this.config;this.root.position.copy(this.rootBase),this.setJointAngle(t.leftHipPitch,e*n.hipCompensationRatio),this.setJointAngle(t.leftKnee,e),this.setJointAngle(t.leftAnklePitch,e*n.ankleCompensationRatio);let i=this.movingFoot.getWorldPosition(new S).y-this.movingFootBaseHeight,r=Ze.clamp(i,0,n.maximumPelvisDropMeters),o=n.supportAnklePitchDegrees/n.supportKneeDegrees,a=-1-o,l=new S,c=g=>(this.setJointAngle(t.rightHipPitch,g*a),this.setJointAngle(t.rightKnee,g),this.setJointAngle(t.rightAnklePitch,g*o),this.supportFoot.getWorldPosition(l).y-this.supportAnchor.y),u=0,h=n.supportKneeDegrees;for(let g=0;g<10;g++){let _=(u+h)/2;c(_)<r?u=_:h=_}c(r===0?0:u);let d=this.root.parent.worldToLocal(this.supportAnchor.clone()),f=this.root.parent.worldToLocal(l.clone());this.root.position.add(d.sub(f)),this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y),this.model.updateMatrixWorld(!0)}};var Ma=class{mapping;originals=[];pulseMeshes=[];time=0;baseIntensity=new Map;activeKey="";constructor(e){this.mapping=e}highlightLink(e,t=7592102){this.apply(new Map([[e,t]]))}highlightChain(e,t,n=3308134,i=[]){let r=new Map;for(let o of e)r.set(o,o===t?n:4489069);for(let o of i)r.set(o,11754546);this.apply(r)}update(e,t=!1){this.time+=Math.min(Math.max(e,0),.05);let n=t?.7:.52+.26*(.5+.5*Math.sin(this.time*Math.PI*2*1.1));for(let i of this.pulseMeshes){let r=Array.isArray(i.material)?i.material:[i.material];for(let o of r){let a=this.baseIntensity.get(o);a!==void 0&&o.emissive&&(o.emissiveIntensity=a*n)}}}clear(){for(let{mesh:e,original:t,replacement:n}of this.originals){e.material=t;for(let i of Array.isArray(n)?n:[n])i.dispose()}this.originals.length=0,this.pulseMeshes=[],this.baseIntensity.clear(),this.activeKey=""}apply(e){let t=[...e].map(([n,i])=>`${n}:${i}`).join("|");if(t!==this.activeKey){this.clear(),this.activeKey=t;for(let[n,i]of e)for(let r of this.mapping.meshesByLink.get(n)??[]){let o=r.material,l=(Array.isArray(o)?o:[o]).map(c=>{let u=c.clone(),h=u;if(h.emissive){h.color.lerp(new Ue(i),.35),h.emissive.setHex(i);let d=.45;h.emissiveIntensity=d,this.baseIntensity.set(h,d)}else"color"in h&&h.color.lerp(new Ue(i),.32);return u});r.material=Array.isArray(o)?l:l[0],this.originals.push({mesh:r,original:o,replacement:Array.isArray(o)?l:l[0]}),this.pulseMeshes.push(r)}}}};var Ea=class{constructor(e,t,n,i,r,o){this.canvas=e;this.camera=t;this.mapping=n;this.config=i;this.onPick=r;this.drag=o;this.surfaceMeshes=[...n.meshesByLink.values()].flat(),e.addEventListener("pointerdown",this.pointerDown,!0),e.addEventListener("pointermove",this.pointerMove,!0),e.addEventListener("pointerup",this.pointerUp,!0),e.addEventListener("pointercancel",this.pointerCancel,!0),e.addEventListener("lostpointercapture",this.pointerCancel,!0)}raycaster=new ca;surfaceMeshes;gesture=null;resolveControl(e){var i,r;let t=(i=this.mapping.linkToJoint.get(e))==null?void 0:i.name,n=this.config.partControls.find(o=>{var a;return this.mapping.joints.has(o.jointName)&&(((a=o.aliases)==null?void 0:a.includes(e))||o.jointName===t)});return(r=this.drag)!=null&&r.resolveControl?this.drag.resolveControl(e,n):n}dispose(){this.finish(),this.canvas.removeEventListener("pointerdown",this.pointerDown,!0),this.canvas.removeEventListener("pointermove",this.pointerMove,!0),this.canvas.removeEventListener("pointerup",this.pointerUp,!0),this.canvas.removeEventListener("pointercancel",this.pointerCancel,!0),this.canvas.removeEventListener("lostpointercapture",this.pointerCancel,!0)}pick(e,t){var l;let n=this.canvas.getBoundingClientRect();this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(new ae((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.camera);let i=this.raycaster.intersectObjects(this.surfaceMeshes,!1)[0];if(!i)return;let r=String(i.object.userData.linkName),o=this.resolveControl(r),a=(o==null?void 0:o.jointName)??((l=this.mapping.linkToJoint.get(r))==null?void 0:l.name);return{linkName:r,jointName:a,control:o,correct:a===this.config.targetJointName}}reserve(e){e.preventDefault(),e.stopImmediatePropagation()}pointerDown=e=>{var n,i,r,o,a,l;if(this.gesture||e.button!==0||!e.isPrimary){this.finish();return}let t=((i=(n=this.drag)==null?void 0:n.enabled)==null?void 0:i.call(n))===!1?void 0:this.pick(e.clientX,e.clientY);this.gesture={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),part:t,dragging:!1,moved:!1},t!=null&&t.control&&this.drag&&(this.gesture.direction=(o=(r=this.drag).direction)==null?void 0:o.call(r,t),this.reserve(e),this.drag.onCaptureChange(!0),(l=(a=this.canvas).setPointerCapture)==null||l.call(a,e.pointerId),this.canvas.style.cursor="grabbing")};pointerMove=e=>{var l;let t=this.gesture;if(!t||e.pointerId!==t.id)return;let n=e.clientX-t.x,i=e.clientY-t.y;if(Math.hypot(n,i)>=this.config.click.maximumDistancePixels&&(t.moved=!0),!((l=t.part)!=null&&l.control)||!this.drag||(this.reserve(e),!t.moved))return;t.dragging||(t.dragging=!0,this.drag.onStart(t.part));let r=this.canvas.getBoundingClientRect(),o=t.part.control,a=t.direction?n/r.width*t.direction.x+i/r.height*t.direction.y:o.dragAxis==="y"?-i/r.height:n/r.width;this.drag.onMove(t.part,a*o.dragSensitivity)};pointerUp=e=>{var i;let t=this.gesture;if(!t||e.pointerId!==t.id)return;(i=t.part)!=null&&i.control&&this.drag&&this.reserve(e);let n=!t.moved&&!t.dragging&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<this.config.click.maximumDistancePixels&&performance.now()-t.time<this.config.click.maximumDurationMilliseconds;this.finish(),n&&t.part&&this.onPick(t.part)};pointerCancel=e=>{var t;((t=this.gesture)==null?void 0:t.id)===e.pointerId&&this.finish()};finish(){var t,n,i;let e=this.gesture;this.gesture=null,!(!((t=e==null?void 0:e.part)!=null&&t.control)||!this.drag)&&(e.dragging&&this.drag.onEnd(),this.drag.onCaptureChange(!1),(i=(n=this.canvas).hasPointerCapture)!=null&&i.call(n,e.id)&&this.canvas.releasePointerCapture(e.id),this.canvas.style.cursor="")}};function sh(s,e,t){return(e.x-s.x)*(t.z-s.z)-(e.z-s.z)*(t.x-s.x)}function rh(s){let e=[...s].sort((i,r)=>i.x-r.x||i.z-r.z);if(e.length<=1)return e;let t=[];for(let i of e){for(;t.length>=2&&sh(t[t.length-2],t[t.length-1],i)<=0;)t.pop();t.push(i)}let n=[];for(let i=e.length-1;i>=0;i--){let r=e[i];for(;n.length>=2&&sh(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}return t.pop(),n.pop(),t.concat(n)}function xy(s,e){if(e.length<3)return!1;let t=0;for(let n=0;n<e.length;n++){let i=sh(e[n],e[(n+1)%e.length],s);if(!(Math.abs(i)<1e-8)){if(!t)t=i>0?1:-1;else if((i>0?1:-1)!==t)return!1}}return!0}function yy(s,e,t){let n=t.x-e.x,i=t.z-e.z,r=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/(n*n+i*i||1)));return Math.hypot(s.x-(e.x+r*n),s.z-(e.z+r*i))}function vy(s,e){if(!e.length)return 1/0;let t=1/0;for(let n=0;n<e.length;n++)t=Math.min(t,yy(s,e[n],e[(n+1)%e.length]));return t}function Xd({projection:s,polygon:e,margin:t,approximate:n=!1}){let i={x:s.x,z:s.z},r=xy(i,e),o=vy(i,e);return{state:r?o<=t?"near":"balanced":"outside",projection:new S(s.x,0,s.z),polygon:e,marginMeters:o,approximate:n}}function jd(s,e){let t=new S,n=0,i=!1;for(let r of e){let o=Number(r.userData.mass),a=Array.isArray(r.userData.centerOfMass)?new S().fromArray(r.userData.centerOfMass):null;Number.isFinite(o)?o>0&&a?(t.add(r.localToWorld(a.clone()).multiplyScalar(o)),n+=o):o>0&&(i=!0):i=!0}return!n||i?{center:new yt().setFromObject(s).getCenter(new S),approximate:!0,mass:0}:{center:t.multiplyScalar(1/n),approximate:!1,mass:n}}function qd(s,e,t=.045){let n=[];for(let i of s){let r=new yt().setFromObject(i);if(!r.isEmpty()&&!(r.min.y>e+t))for(let o of[r.min.x,r.max.x])for(let a of[r.min.z,r.max.z])n.push({x:o,z:a})}return rh(n)}var rt={c:null,u:[new S,new S,new S],e:[]},ct={c:null,u:[new S,new S,new S],e:[]},Ct=[[],[],[]],qe=[[],[],[]],Tt=[],Ji=new S,Zi=new S,Qi=new S,Xt=new S,Yd=new S,$d=new S,Fn=new Je,Kd=new yt,Sa=new $e,Jd=new $e,Zd=new Un,es=class{constructor(e=new S,t=new S,n=new Je){this.center=e,this.halfSize=t,this.rotation=n}set(e,t,n){return this.center=e,this.halfSize=t,this.rotation=n,this}copy(e){return this.center.copy(e.center),this.halfSize.copy(e.halfSize),this.rotation.copy(e.rotation),this}clone(){return new this.constructor().copy(this)}getSize(e){return e.copy(this.halfSize).multiplyScalar(2)}clampPoint(e,t){let n=this.halfSize;Xt.subVectors(e,this.center),this.rotation.extractBasis(Ji,Zi,Qi),t.copy(this.center);let i=Ze.clamp(Xt.dot(Ji),-n.x,n.x);t.add(Ji.multiplyScalar(i));let r=Ze.clamp(Xt.dot(Zi),-n.y,n.y);t.add(Zi.multiplyScalar(r));let o=Ze.clamp(Xt.dot(Qi),-n.z,n.z);return t.add(Qi.multiplyScalar(o)),t}containsPoint(e){return Xt.subVectors(e,this.center),this.rotation.extractBasis(Ji,Zi,Qi),Math.abs(Xt.dot(Ji))<=this.halfSize.x&&Math.abs(Xt.dot(Zi))<=this.halfSize.y&&Math.abs(Xt.dot(Qi))<=this.halfSize.z}intersectsBox3(e){return this.intersectsOBB(by.fromBox3(e))}intersectsSphere(e){return this.clampPoint(e.center,$d),$d.distanceToSquared(e.center)<=e.radius*e.radius}intersectsOBB(e,t=Number.EPSILON){rt.c=this.center,rt.e[0]=this.halfSize.x,rt.e[1]=this.halfSize.y,rt.e[2]=this.halfSize.z,this.rotation.extractBasis(rt.u[0],rt.u[1],rt.u[2]),ct.c=e.center,ct.e[0]=e.halfSize.x,ct.e[1]=e.halfSize.y,ct.e[2]=e.halfSize.z,e.rotation.extractBasis(ct.u[0],ct.u[1],ct.u[2]);for(let r=0;r<3;r++)for(let o=0;o<3;o++)Ct[r][o]=rt.u[r].dot(ct.u[o]);Xt.subVectors(ct.c,rt.c),Tt[0]=Xt.dot(rt.u[0]),Tt[1]=Xt.dot(rt.u[1]),Tt[2]=Xt.dot(rt.u[2]);for(let r=0;r<3;r++)for(let o=0;o<3;o++)qe[r][o]=Math.abs(Ct[r][o])+t;let n,i;for(let r=0;r<3;r++)if(n=rt.e[r],i=ct.e[0]*qe[r][0]+ct.e[1]*qe[r][1]+ct.e[2]*qe[r][2],Math.abs(Tt[r])>n+i)return!1;for(let r=0;r<3;r++)if(n=rt.e[0]*qe[0][r]+rt.e[1]*qe[1][r]+rt.e[2]*qe[2][r],i=ct.e[r],Math.abs(Tt[0]*Ct[0][r]+Tt[1]*Ct[1][r]+Tt[2]*Ct[2][r])>n+i)return!1;return n=rt.e[1]*qe[2][0]+rt.e[2]*qe[1][0],i=ct.e[1]*qe[0][2]+ct.e[2]*qe[0][1],!(Math.abs(Tt[2]*Ct[1][0]-Tt[1]*Ct[2][0])>n+i||(n=rt.e[1]*qe[2][1]+rt.e[2]*qe[1][1],i=ct.e[0]*qe[0][2]+ct.e[2]*qe[0][0],Math.abs(Tt[2]*Ct[1][1]-Tt[1]*Ct[2][1])>n+i)||(n=rt.e[1]*qe[2][2]+rt.e[2]*qe[1][2],i=ct.e[0]*qe[0][1]+ct.e[1]*qe[0][0],Math.abs(Tt[2]*Ct[1][2]-Tt[1]*Ct[2][2])>n+i)||(n=rt.e[0]*qe[2][0]+rt.e[2]*qe[0][0],i=ct.e[1]*qe[1][2]+ct.e[2]*qe[1][1],Math.abs(Tt[0]*Ct[2][0]-Tt[2]*Ct[0][0])>n+i)||(n=rt.e[0]*qe[2][1]+rt.e[2]*qe[0][1],i=ct.e[0]*qe[1][2]+ct.e[2]*qe[1][0],Math.abs(Tt[0]*Ct[2][1]-Tt[2]*Ct[0][1])>n+i)||(n=rt.e[0]*qe[2][2]+rt.e[2]*qe[0][2],i=ct.e[0]*qe[1][1]+ct.e[1]*qe[1][0],Math.abs(Tt[0]*Ct[2][2]-Tt[2]*Ct[0][2])>n+i)||(n=rt.e[0]*qe[1][0]+rt.e[1]*qe[0][0],i=ct.e[1]*qe[2][2]+ct.e[2]*qe[2][1],Math.abs(Tt[1]*Ct[0][0]-Tt[0]*Ct[1][0])>n+i)||(n=rt.e[0]*qe[1][1]+rt.e[1]*qe[0][1],i=ct.e[0]*qe[2][2]+ct.e[2]*qe[2][0],Math.abs(Tt[1]*Ct[0][1]-Tt[0]*Ct[1][1])>n+i)||(n=rt.e[0]*qe[1][2]+rt.e[1]*qe[0][2],i=ct.e[0]*qe[2][1]+ct.e[1]*qe[2][0],Math.abs(Tt[1]*Ct[0][2]-Tt[0]*Ct[1][2])>n+i))}intersectsPlane(e){this.rotation.extractBasis(Ji,Zi,Qi);let t=this.halfSize.x*Math.abs(e.normal.dot(Ji))+this.halfSize.y*Math.abs(e.normal.dot(Zi))+this.halfSize.z*Math.abs(e.normal.dot(Qi)),n=e.normal.dot(this.center)-e.constant;return Math.abs(n)<=t}intersectRay(e,t){return this.getSize(Yd),Kd.setFromCenterAndSize(Xt.set(0,0,0),Yd),Sa.setFromMatrix3(this.rotation),Sa.setPosition(this.center),Jd.copy(Sa).invert(),Zd.copy(e).applyMatrix4(Jd),Zd.intersectBox(Kd,t)?t.applyMatrix4(Sa):null}intersectsRay(e){return this.intersectRay(e,Xt)!==null}fromBox3(e){return e.getCenter(this.center),e.getSize(this.halfSize).multiplyScalar(.5),this.rotation.identity(),this}equals(e){return e.center.equals(this.center)&&e.halfSize.equals(this.halfSize)&&e.rotation.equals(this.rotation)}applyMatrix4(e){let t=e.elements,n=Xt.set(t[0],t[1],t[2]).length(),i=Xt.set(t[4],t[5],t[6]).length(),r=Xt.set(t[8],t[9],t[10]).length();e.determinant()<0&&(n=-n),Fn.setFromMatrix4(e);let a=1/n,l=1/i,c=1/r;return Fn.elements[0]*=a,Fn.elements[1]*=a,Fn.elements[2]*=a,Fn.elements[3]*=l,Fn.elements[4]*=l,Fn.elements[5]*=l,Fn.elements[6]*=c,Fn.elements[7]*=c,Fn.elements[8]*=c,this.rotation.multiply(Fn),this.halfSize.x*=n,this.halfSize.y*=i,this.halfSize.z*=r,Xt.setFromMatrixPosition(e),this.center.add(Xt),this}},by=new es;function Qd(s){let e=new Map;for(let[t,n]of s){let i=new yt;for(let r of n)i.expandByObject(r);i.isEmpty()||e.set(t,i)}return e}var wa=class{proxies=new Map;safety;expanded=new es;constructor(e,t){this.safety=t,e.links.forEach(i=>i.updateWorldMatrix(!0,!1));let n=new Set(t.collisionPairs.flatMap(i=>[i.first,i.second]));for(let i of n){let r=e.links.get(i);if(!r)throw new Error(`Missing collision link: ${i}`);let o=new yt,a=r.matrixWorld.clone().invert();for(let c of e.meshesByLink.get(i)??[])c.geometry.boundingBox||c.geometry.computeBoundingBox(),o.union(c.geometry.boundingBox.clone().applyMatrix4(a.clone().multiply(c.matrixWorld)));if(o.isEmpty())throw new Error(`Missing collision geometry: ${i}`);let l=new es().fromBox3(o);l.halfSize.multiply(new S(...t.collisionProxyScale[i]??[1,1,1])),this.proxies.set(i,{link:r,local:l,world:new es})}}evaluate(){for(let e of this.proxies.values())e.world.copy(e.local).applyMatrix4(e.link.matrixWorld),e.world.center.copy(e.local.center).applyMatrix4(e.link.matrixWorld);return this.safety.collisionPairs.map(e=>{let t=this.proxies.get(e.first).world,n=this.proxies.get(e.second).world;return t.intersectsOBB(n)?{...e,state:"overlap",distance:0}:(this.expanded.copy(t),this.expanded.halfSize.addScalar(e.marginMeters??this.safety.collisionMarginMeters),{...e,state:this.expanded.intersectsOBB(n)?"near":"clear",distance:NaN})})}};function ef(s,e=0){let t=[...s].sort((o,a)=>o.angle-a.angle),n=t.findIndex(o=>Math.abs(o.angle-e)<1e-6);if(n<0||!t[n].safe)return{min:e,max:e};let i=n,r=n;for(;i>0&&t[i-1].safe;)i--;for(;r<t.length-1&&t[r+1].safe;)r++;return{min:t[i].angle,max:t[r].angle}}var Ta=class{model;mapping;pose;config;collisions;groundY=0;scan;last;constructor(e,t,n,i){this.model=e,this.mapping=t,this.pose=n,this.config=i,this.collisions=new wa(t,i.safety),this.last=this.evaluateRaw(),this.scan=this.scanRanges()}evaluate(){return this.last=this.evaluateRaw(),this.last}scanRanges(){let e=this.pose.joints.get(this.config.jointNames.leftKnee),t=this.config.safety.scanStepDegrees;if(!Number.isFinite(t)||t<=0)throw new Error("Invalid safety scan step");let n=[];for(let u=e.lower;u<e.upper;u+=t)n.push(u);n.push(e.upper),n.push(0);let i=n.map(u=>this.pose.preview(u,()=>({angle:u,result:this.evaluateRaw()}))),r=i.map(({angle:u,result:h})=>({angle:u,safe:h.balance.state!=="outside"})),o=i.map(({angle:u,result:h})=>({angle:u,safe:!h.overlapCollision})),a=ef(r),l=ef(o),c={min:Math.max(a.min,l.min),max:Math.min(a.max,l.max)};return c.min>c.max&&(c.min=0,c.max=0),this.model.updateMatrixWorld(!0),this.last=this.evaluateRaw(),{support:a,collision:l,combined:c,samples:n.length}}evaluateRaw(){this.model.updateMatrixWorld(!0);let e=jd(this.model,[...this.mapping.links.values()]),n=[this.config.jointNames.movingFoot,this.config.jointNames.supportFoot].map(g=>({name:g,object:this.mapping.links.get(g)})).filter(g=>g.object),i=Qd(new Map(n.map(g=>[g.name,this.mapping.meshesByLink.get(g.name)??[]]))),r=n.filter(g=>Math.abs(i.get(g.name).min.y-this.groundY)<=this.config.safety.footContactHeightMeters),o=r,a=r.length?Math.max(this.groundY,Math.min(...r.map(g=>i.get(g.name).min.y))):this.groundY,l=o.flatMap(g=>qd([g.object],this.groundY,this.config.safety.footContactHeightMeters)),c=rh(l),u=Xd({projection:{x:e.center.x,z:e.center.z},polygon:c,margin:this.config.safety.supportMarginMeters,approximate:e.approximate||r.length===0}),h=this.collisions.evaluate(),d=h.find(g=>g.state==="overlap"),f=u.state==="outside"||d?"danger":u.state==="near"||h.some(g=>g.state==="near")?"caution":"normal";return{balance:u,collisions:h,com:e.center,supportMode:r.length===2?"double":r.length===1?"single":"none",contactPlaneY:a,severity:f,overlapCollision:d}}};var Aa={balanced:3308134,near:11695666,outside:11815747},Ra=class{constructor(e,t=0){this.scene=e;this.groundY=t;this.group.name="g1-balance-overlay",this.group.visible=!1,e.add(this.group),this.group.add(this.projection,this.center,this.comLine),this.comLine.renderOrder=8,this.projection.rotation.x=-Math.PI/2,this.projection.renderOrder=9,this.center.renderOrder=9}group=new qt;areaMaterial=new wt({color:Aa.balanced,transparent:!0,opacity:.1,depthWrite:!1,side:Ht});lineMaterial=new On({color:Aa.balanced,transparent:!0,opacity:.8});projection=new Ye(new Qo(.012,20),new wt({color:Aa.balanced,depthTest:!0,depthWrite:!1,side:Ht}));center=new Ye(new Ei(.01,12,8),new wt({color:2571320,depthTest:!0}));area=null;outline=null;comLine=new an(new mt().setAttribute("position",new ft(new Float32Array(6),3)),this.lineMaterial);lastKey="";displayGroundY=0;update(e,t,n=this.groundY){this.group.visible=!0,this.displayGroundY=Math.max(this.groundY,n);let i=Aa[e.state];this.projection.position.set(e.projection.x,this.displayGroundY+.005,e.projection.z),this.center.position.copy(t),this.projection.material.color.setHex(i),this.lineMaterial.color.setHex(i);let r=this.displayGroundY.toFixed(4)+":"+e.state+":"+e.polygon.map(a=>`${a.x.toFixed(3)},${a.z.toFixed(3)}`).join(";");r!==this.lastKey&&(this.lastKey=r,this.updatePolygon(e,i));let o=this.comLine.geometry.attributes.position;o.setXYZ(0,e.projection.x,this.displayGroundY+.005,e.projection.z),o.setXYZ(1,t.x,t.y,t.z),o.needsUpdate=!0,this.comLine.geometry.computeBoundingSphere()}clear(){this.group.visible=!1}dispose(){var e,t,n;this.scene.remove(this.group),(e=this.area)==null||e.geometry.dispose(),(t=this.outline)==null||t.geometry.dispose(),(n=this.comLine)==null||n.geometry.dispose(),this.areaMaterial.dispose(),this.lineMaterial.dispose(),this.projection.geometry.dispose(),this.center.geometry.dispose(),this.projection.material.dispose(),this.center.material.dispose()}updatePolygon(e,t){if(this.area&&(this.group.remove(this.area),this.area.geometry.dispose()),this.outline&&(this.group.remove(this.outline),this.outline.geometry.dispose()),e.polygon.length<3){this.area=null,this.outline=null;return}this.areaMaterial.color.setHex(t),this.lineMaterial.color.setHex(t);let n=new Or;n.moveTo(e.polygon[0].x,e.polygon[0].z);for(let r=1;r<e.polygon.length;r++)n.lineTo(e.polygon[r].x,e.polygon[r].z);n.closePath(),this.area=new Ye(new ta(n),this.areaMaterial),this.area.rotation.x=Math.PI/2,this.area.position.y=this.displayGroundY+.003,this.area.renderOrder=7,this.group.add(this.area);let i=e.polygon.map(r=>new S(r.x,this.displayGroundY+.004,r.z));this.outline=new Hs(new mt().setFromPoints(i),this.lineMaterial),this.outline.renderOrder=8,this.group.add(this.outline)}};var Ca=class{constructor(e,t=[],n=0){this.model=e;this.feet=t;this.groundY=n;this.parent=e.parent,this.pivot.name="teaching-warning-sway",this.parent.add(this.pivot),this.pivot.add(e)}pivot=new qt;parent;footBox=new yt;transformed=!1;clearTransform(){this.transformed&&(this.pivot.quaternion.identity(),this.pivot.position.set(0,0,0),this.pivot.updateMatrixWorld(!0),this.transformed=!1)}render(e,t,n){if(this.clearTransform(),t&&!n){this.transformed=!0,this.pivot.rotation.set(Math.sin(e*5)*.004,0,Math.sin(e*4.1)*.006),this.pivot.updateMatrixWorld(!0);let i=1/0;for(let r of this.feet)i=Math.min(i,this.footBox.setFromObject(r).min.y);if(i<this.groundY){let r=this.parent.worldToLocal(new S(0,0,0)),o=this.parent.worldToLocal(new S(0,this.groundY-i+.001,0));this.pivot.position.add(o.sub(r)),this.pivot.updateMatrixWorld(!0)}}}renderFall(e,t,n,i){if(this.clearTransform(),i)return;this.transformed=!0;let r=e.clone().setY(0).normalize();r.lengthSq()<1e-8&&r.set(1,0,0);let o=new S(r.z,0,-r.x),a=Ze.clamp(n,0,1),l=Ze.degToRad(15)*a*a*(3-2*a),c=new It().setFromAxisAngle(o,l),u=this.parent.getWorldQuaternion(new It);this.pivot.quaternion.copy(u).invert().multiply(c).multiply(u);let h=this.parent.worldToLocal(t.clone());this.pivot.position.copy(h).sub(h.clone().applyQuaternion(this.pivot.quaternion)),this.pivot.updateMatrixWorld(!0);let d=1/0;for(let f of this.feet)d=Math.min(d,this.footBox.setFromObject(f).min.y);if(d<this.groundY){let f=this.parent.worldToLocal(new S),g=this.parent.worldToLocal(new S(0,this.groundY-d+.001,0));this.pivot.position.add(g.sub(f)),this.pivot.updateMatrixWorld(!0)}}dispose(){this.clearTransform(),this.parent.add(this.model),this.pivot.removeFromParent()}};function tf(s,e){if(!e)return!1;for(let t=s;t;t=t.parent??void 0)if(t===e)return!0;return!1}function oh(s,e,t){var r;let n=e.joints.get(t);return(r=s.filter(o=>o.state!=="clear").map(o=>{let a=tf(e.links.get(o.first),n),l=tf(e.links.get(o.second),n);return{link:l&&!a?o.second:o.first,score:(o.state==="overlap"?100:0)+(a||l?10:0)}}).sort((o,a)=>a.score-o.score)[0])==null?void 0:r.link}function nf(s,e,t,n,i,r){let o=e.clone().applyMatrix4(s),a=new S(0,-1,0),l=new S().crossVectors(t,a).normalize(),c=e.clone().add(a).applyMatrix4(s).y-o.y,u=e.clone().add(l).applyMatrix4(s).y-o.y,h=Math.hypot(c,u);return o.y<=i+r?0:Math.min(n,(o.y-i-r)/Math.max(h,1e-9))}var Pa=class{constructor(e,t=.5){this.fallDelaySeconds=t;this.discoveryJoints=new Set(e)}discoveryJoints;found=new Set;currentPhase="scan";currentMode="isolated";hasFallen=!1;outsideDuration=0;currentExperience="challenge";get discovered(){return this.found}get unlocked(){return this.discoveryJoints.size>0&&this.found.size===this.discoveryJoints.size}get phase(){return this.currentPhase}get mode(){return this.currentMode}get fallen(){return this.hasFallen}get outsideSeconds(){return this.outsideDuration}get experience(){return this.currentExperience}setExperience(e){this.resetPose(),this.currentExperience=e}discover(e){if(this.currentExperience!=="challenge"||this.currentMode!=="isolated"||this.hasFallen||!this.discoveryJoints.has(e)||this.found.has(e))return{added:!1,unlockedNow:!1};this.found.add(e);let t=this.unlocked;return t&&this.currentPhase==="scan"&&(this.currentPhase="unlocked"),{added:!0,unlockedNow:t}}beginChain(){return this.currentExperience==="challenge"&&!this.unlocked||this.hasFallen?!1:(this.currentMode="chain",this.outsideDuration=0,!0)}finishChain(){this.cancelChain(),this.currentExperience==="challenge"&&this.unlocked&&this.currentPhase!=="complete"&&(this.currentPhase="challenge")}cancelChain(){this.currentMode==="chain"&&(this.outsideDuration=0),this.currentMode="isolated"}update(e,t,n="manual"){return!Number.isFinite(e)||e<0?!1:this.currentExperience==="observe"||n!=="manual"||this.currentMode==="chain"||!t?(this.outsideDuration=0,!1):this.hasFallen||(this.outsideDuration+=e,this.outsideDuration<=this.fallDelaySeconds)?!1:(this.hasFallen=!0,this.currentPhase==="challenge"&&(this.currentPhase="complete"),!0)}resetPose(){this.hasFallen=!1,this.outsideDuration=0,this.cancelChain()}restart(){this.resetPose(),this.found.clear(),this.currentPhase="scan"}};var Be=(s,e,t)=>({name:s,label:e,degrees:t,tolerance:12}),Cn=[{id:"first-lift",title:"\u62AC\u8D77\u5C0F\u81C2",description:"\u7B2C\u4E00\u6B65\uFF0C\u53EA\u52A8\u4E00\u4E2A\u90E8\u4F4D\uFF1A\u6309\u4F4F\u4EAE\u8D77\u7684\u53F3\u5C0F\u81C2\uFF0C\u628A\u624B\u62AC\u5230\u8EAB\u524D\uFF0C\u50CF\u51C6\u5907\u63A5\u4F4F\u4E00\u4EF6\u5C0F\u793C\u7269\u3002",focusJoint:"right_elbow_joint",hints:["\u4E0A\u81C2\u4FDD\u6301\u81EA\u7136\u4E0B\u5782\uFF0C\u53EA\u5F2F\u66F2\u53F3\u8098\uFF0C\u8BA9\u5C0F\u81C2\u5411\u8EAB\u524D\u62AC\u8D77\u3002","\u624B\u638C\u9760\u8FD1\u8170\u90E8\u4E0A\u65B9\u5373\u53EF\uFF0C\u4E0D\u7528\u4E3E\u8FC7\u5934\u9876\uFF1B\u6253\u5F00\u8F6E\u5ED3\u53EF\u4EE5\u6BD4\u4E00\u6BD4\u3002"],joints:[Be("right_elbow_joint","\u53F3\u5C0F\u81C2 \xB7 \u5F2F\u66F2",60)]},{id:"wave",title:"\u6325\u624B\u62DB\u547C",description:"\u628A\u53F3\u624B\u4E3E\u5230\u5934\u65C1\uFF0C\u5411\u521A\u8FDB\u5C55\u5385\u7684\u6E38\u5BA2\u6253\u4E2A\u62DB\u547C\u3002",focusJoint:"right_elbow_joint",hints:["\u5148\u628A\u53F3\u81C2\u5411\u524D\u62AC\uFF0C\u518D\u5411\u5916\u6253\u5F00\uFF0C\u6700\u540E\u5F2F\u66F2\u53F3\u8098\u3002","\u8BA9\u53F3\u624B\u9AD8\u8FC7\u80A9\u8180\uFF0C\u624B\u8098\u4FDD\u6301\u5F2F\u66F2\uFF1B\u53EF\u4EE5\u6253\u5F00\u8F6E\u5ED3\u6BD4\u4E00\u6BD4\u3002"],joints:[Be("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-80),Be("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-80),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",60)]},{id:"welcome",title:"\u53CC\u81C2\u8FCE\u5BBE",description:"\u5C55\u5F00\u53CC\u81C2\uFF0C\u4E3A\u6E38\u5BA2\u9001\u4E0A\u4E00\u4E2A\u5927\u5927\u7684\u6B22\u8FCE\u3002",focusJoint:"left_shoulder_roll_joint",hints:["\u5DE6\u53F3\u80A9\u5411\u4E24\u4FA7\u6253\u5F00\uFF0C\u518D\u8BA9\u53CC\u8098\u5FAE\u5FAE\u5F2F\u66F2\u3002","\u4E24\u53EA\u624B\u8981\u62C9\u5F00\u8DDD\u79BB\uFF0C\u5DE6\u53F3\u5C3D\u91CF\u5BF9\u79F0\uFF0C\u4E0D\u7528\u671D\u524D\u62AC\u81C2\u3002"],joints:[Be("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",85),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",20),Be("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-85),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",20)]},{id:"offer",title:"\u5411\u524D\u9012\u7269",description:"\u5047\u60F3\u624B\u4E2D\u6709\u4E00\u4EF6\u5C0F\u793C\u7269\uFF0C\u628A\u5B83\u9012\u7ED9\u9762\u524D\u7684\u6E38\u5BA2\u3002",focusJoint:"left_elbow_joint",hints:["\u53CC\u80A9\u5411\u524D\u62AC\uFF0C\u53CC\u8098\u540C\u65F6\u5F2F\u66F2\uFF0C\u53CC\u624B\u4FDD\u6301\u5728\u8EAB\u4F53\u524D\u65B9\u3002","\u624B\u638C\u5E94\u9760\u8FD1\u80F8\u524D\u9AD8\u5EA6\uFF0C\u4E24\u8FB9\u624B\u81C2\u59FF\u6001\u76F8\u4F3C\u3002"],joints:[Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-65),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",50),Be("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-65),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",50)]},{id:"crouch",title:"\u5C48\u819D\u51C6\u5907",description:"\u8BA9 G1 \u8F7B\u8F7B\u8E72\u4E0B\uFF0C\u6446\u51FA\u51C6\u5907\u8D77\u8EAB\u7684\u59FF\u6001\u3002",focusJoint:"left_knee_joint",hints:["\u53CC\u819D\u5C48\u66F2\uFF0C\u9ACB\u4E0E\u8E1D\u5411\u76F8\u53CD\u65B9\u5411\u8865\u507F\uFF1B\u5DE6\u53F3\u4E00\u8D77\u8C03\u6574\u3002","\u8FD9\u662F\u8F7B\u8E72\uFF0C\u53CC\u811A\u5C3D\u91CF\u653E\u5E73\uFF0C\u9ACB\u548C\u8E1D\u7684\u53D8\u5316\u6BD4\u819D\u66F4\u5C0F\u3002"],joints:[Be("left_hip_pitch_joint","\u5DE6\u9ACB\u524D\u540E\u6446",-15),Be("left_knee_joint","\u5DE6\u819D\u5C48\u4F38",30),Be("left_ankle_pitch_joint","\u5DE6\u8E1D\u4FEF\u4EF0",-15),Be("right_hip_pitch_joint","\u53F3\u9ACB\u524D\u540E\u6446",-15),Be("right_knee_joint","\u53F3\u819D\u5C48\u4F38",30),Be("right_ankle_pitch_joint","\u53F3\u8E1D\u4FEF\u4EF0",-15)]},{id:"step",title:"\u62AC\u811A\u8DE8\u6B65",description:"\u53F3\u817F\u652F\u6491\uFF0C\u5DE6\u811A\u79BB\u5730\uFF0C\u51C6\u5907\u5411\u524D\u8FC8\u51FA\u4E00\u6B65\u3002",focusJoint:"left_knee_joint",hints:["\u5148\u8BA9\u5DE6\u5927\u817F\u5411\u524D\u62AC\uFF0C\u518D\u5F2F\u5DE6\u819D\uFF0C\u6700\u540E\u8C03\u6574\u5DE6\u811A\u8E1D\u3002","\u53EA\u8C03\u6574\u5DE6\u817F\uFF1B\u7528\u811A\u8E1D\u8865\u507F\uFF0C\u8BA9\u62AC\u8D77\u7684\u811A\u4E0D\u5411\u4E0B\u7EF7\u76F4\u3002"],joints:[Be("left_hip_pitch_joint","\u5DE6\u9ACB\u524D\u540E\u6446",-30),Be("left_knee_joint","\u5DE6\u819D\u5C48\u4F38",60),Be("left_ankle_pitch_joint","\u5DE6\u8E1D\u4FEF\u4EF0",-30)]},{id:"salute",title:"\u4E3E\u624B\u81F4\u610F",description:"\u62AC\u8D77\u53F3\u81C2\uFF0C\u8BA9\u53F3\u624B\u5347\u5230\u5934\u65C1\uFF0C\u5411\u6E38\u5BA2\u81F4\u610F\u3002",focusJoint:"right_elbow_joint",hints:["\u53F3\u80A9\u5411\u524D\u62AC\uFF0C\u7A0D\u5FAE\u5411\u5916\u6253\u5F00\uFF0C\u518D\u8C03\u6574\u53F3\u8098\uFF0C\u8BA9\u624B\u5347\u5230\u5934\u65C1\u3002","\u53F3\u81C2\u4E0D\u7528\u50CF\u6325\u624B\u65F6\u6253\u5F00\u5F97\u90A3\u4E48\u8FDC\uFF0C\u89C2\u5BDF\u624B\u638C\u7684\u9AD8\u5EA6\u3002"],joints:[Be("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-90),Be("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-25),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",20)]},{id:"cheer",title:"\u53CC\u624B\u52A0\u6CB9",description:"\u53CC\u624B\u4E3E\u9AD8\uFF0C\u6446\u51FA\u5E86\u795D\u6311\u6218\u6210\u529F\u7684\u59FF\u6001\u3002",focusJoint:"left_shoulder_pitch_joint",hints:["\u53CC\u81C2\u5411\u524D\u4E3E\u8D77\uFF0C\u518D\u5411\u5DE6\u53F3\u6253\u5F00\uFF0C\u53CC\u8098\u4FDD\u6301\u5F2F\u66F2\u3002","\u8BA9\u4E24\u53EA\u624B\u90FD\u9AD8\u8FC7\u80A9\u8180\uFF0C\u50CF\u4E3E\u624B\u6B22\u547C\uFF0C\u5DE6\u53F3\u5BF9\u79F0\u3002"],joints:[Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-90),Be("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",50),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",60),Be("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-90),Be("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-50),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",60)]},{id:"point",title:"\u4F38\u624B\u6307\u8DEF",description:"\u4F38\u51FA\u5DE6\u81C2\uFF0C\u4E3A\u6E38\u5BA2\u6307\u5411\u524D\u65B9\u7684\u5C55\u533A\u3002",focusJoint:"left_shoulder_pitch_joint",hints:["\u628A\u5DE6\u81C2\u5411\u524D\u62AC\uFF0C\u7A0D\u5411\u5916\u6253\u5F00\uFF0C\u5DE6\u8098\u53EA\u7559\u4E00\u70B9\u5F2F\u66F2\u3002","\u5DE6\u624B\u5411\u524D\u4F38\u8FDC\u4E00\u4E9B\uFF1B\u53F3\u81C2\u4FDD\u6301\u539F\u4F4D\u3002"],joints:[Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-30),Be("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",20),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",10)]},{id:"bow",title:"\u793C\u8C8C\u97A0\u8EAC",description:"\u7528\u8170\u90E8\u5E26\u52A8\u4E0A\u8EAB\u5411\u524D\u503E\uFF0C\u505A\u4E00\u4E2A\u793C\u8C8C\u7684\u97A0\u8EAC\u3002",focusJoint:"waist_pitch_joint",hints:["\u9009\u62E9\u8170\u90E8\u524D\u540E\u4FEF\u4EF0\uFF0C\u4E0A\u8EAB\u5411\u524D\u503E\uFF0C\u53CC\u8098\u7A0D\u7A0D\u5F2F\u8D77\u3002","\u817F\u4FDD\u6301\u539F\u4F4D\uFF0C\u8BA9\u52A8\u4F5C\u4E3B\u8981\u6765\u81EA\u8170\u90E8\uFF0C\u4E0D\u8981\u5C48\u819D\u4E0B\u8E72\u3002"],joints:[Be("waist_pitch_joint","\u8170\u90E8\u524D\u540E\u4FEF\u4EF0",25),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",25),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",25)]},{id:"turn",title:"\u8F6C\u8EAB\u4ECB\u7ECD",description:"\u4E0A\u8EAB\u8F6C\u5411\u4E00\u4FA7\uFF0C\u62AC\u8D77\u5DE6\u624B\uFF0C\u4ECB\u7ECD\u8EAB\u65C1\u7684\u5C55\u54C1\u3002",focusJoint:"waist_yaw_joint",hints:["\u5148\u8F6C\u52A8\u8170\u90E8\uFF0C\u518D\u62AC\u5DE6\u81C2\u3001\u5F2F\u5DE6\u8098\u3002\u53CC\u811A\u4E0D\u7528\u8F6C\u52A8\u3002","\u5DE6\u624B\u4FDD\u6301\u5728\u8EAB\u4F53\u524D\u65B9\uFF0C\u4E0A\u8EAB\u671D\u4E00\u4FA7\u8F6C\uFF0C\u907F\u514D\u53EA\u626D\u624B\u8155\u3002"],joints:[Be("waist_yaw_joint","\u8170\u90E8\u5DE6\u53F3\u8F6C\u52A8",35),Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-40),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",45)]},{id:"guard",title:"\u53CC\u81C2\u51C6\u5907",description:"\u53CC\u8098\u5F2F\u8D77\u3001\u53CC\u624B\u62AC\u5230\u8EAB\u524D\uFF0C\u6446\u51FA\u4E13\u6CE8\u7684\u51C6\u5907\u59FF\u6001\u3002",focusJoint:"right_elbow_joint",hints:["\u53CC\u80A9\u5411\u524D\u62AC\u5E76\u7A0D\u5FAE\u5411\u5916\u6253\u5F00\uFF0C\u53CC\u8098\u660E\u663E\u5F2F\u8D77\u3002","\u4E24\u53EA\u624B\u5E94\u9760\u8FD1\u80A9\u524D\uFF0C\u53CC\u81C2\u4E0D\u8981\u8D34\u8FDB\u8EAF\u5E72\u3002"],joints:[Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-85),Be("left_shoulder_roll_joint","\u5DE6\u80A9\u4FA7\u6446",20),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",75),Be("right_shoulder_pitch_joint","\u53F3\u80A9\u524D\u540E\u6446",-85),Be("right_shoulder_roll_joint","\u53F3\u80A9\u4FA7\u6446",-20),Be("right_elbow_joint","\u53F3\u8098\u5C48\u4F38",75)]},{id:"palm",title:"\u7FFB\u638C\u5C55\u793A",description:"\u62AC\u8D77\u5DE6\u81C2\uFF0C\u8F6C\u52A8\u624B\u8155\uFF0C\u628A\u624B\u638C\u5C55\u793A\u7ED9\u6E38\u5BA2\u3002",focusJoint:"left_wrist_roll_joint",hints:["\u5148\u62AC\u5DE6\u80A9\u3001\u5F2F\u5DE6\u8098\uFF0C\u8BA9\u624B\u5728\u80F8\u524D\uFF1B\u518D\u9009\u62E9\u624B\u8155\u6EDA\u8F6C\u3002","\u624B\u81C2\u8D1F\u8D23\u628A\u624B\u9001\u5230\u524D\u65B9\uFF0C\u624B\u8155\u8D1F\u8D23\u6539\u53D8\u638C\u9762\u7684\u671D\u5411\u3002"],joints:[Be("left_shoulder_pitch_joint","\u5DE6\u80A9\u524D\u540E\u6446",-60),Be("left_elbow_joint","\u5DE6\u8098\u5C48\u4F38",60),Be("left_wrist_roll_joint","\u5DE6\u624B\u8155\u6EDA\u8F6C",60)]}],Pi={minimumScore:80,errorSpanDegrees:60,neutralToleranceDegrees:8,collisionPenalty:25};function La(s){return Object.fromEntries(s.joints.map(e=>[e.name,e.degrees]))}function My(s,e){let t=new Map(s.joints.map(h=>[h.name,h])),n=s.joints.map(h=>{let d=e[h.name];return{name:h.name,target:h.degrees,actual:d,error:Number.isFinite(d)?Math.abs(d-h.degrees):1/0,tolerance:h.tolerance}}),i=Object.entries(e).filter(([h])=>!t.has(h)).map(([h,d])=>({name:h,target:0,actual:d,error:Number.isFinite(d)?Math.abs(d):1/0,tolerance:Pi.neutralToleranceDegrees})),r=n.map(h=>Math.min(1,h.error/Pi.errorSpanDegrees)),o=.6*r.reduce((h,d)=>h+d,0)/Math.max(1,n.length)+.4*Math.max(0,...r),a=Math.max(0,...i.map(h=>Math.max(0,h.error-h.tolerance)/Pi.errorSpanDegrees)),l=Math.max(0,100*(1-o-a)),u=[...[...n,...i]].sort((h,d)=>d.error/d.tolerance-h.error/h.tolerance)[0]??null;return{score:Math.round(l),matched:n.length>0&&Math.round(l)>=Pi.minimumScore,errors:n,adjustment:u}}var Ia=class{constructor(e,t={}){this.tasks=e;if(!e.length)throw new Error("Training requires at least one task");for(let n of e){let i=t[n.id];Number.isInteger(i)&&i>=0&&i<=100&&(this.results[n.id]=i)}}index=0;currentStatus="ready";visitorInput=!1;hints=0;results={};currentResult=0;currentScore={score:0,matched:!1,errors:[],adjustment:null};get task(){return this.tasks[this.index]}get taskIndex(){return this.index}get status(){return this.currentStatus}get hintLevel(){return this.hints}get canSubmit(){return this.currentStatus==="playing"&&this.visitorInput}get accuracy(){return this.currentScore}get bestScore(){return this.results[this.task.id]??0}get resultScore(){return this.currentResult}get completedCount(){return Object.values(this.results).filter(e=>e>=Pi.minimumScore).length}get records(){return{...this.results}}get totalScore(){return Object.values(this.results).reduce((e,t)=>e+t,0)}select(e){let t=this.tasks.findIndex(n=>n.id===e);if(t<0)throw new Error(`Unknown task: ${e}`);this.index=t,this.reset("ready")}start(){this.reset("playing")}preview(){this.reset("preview")}finishPreview(){this.currentStatus==="preview"&&this.reset("ready")}markInput(){this.currentStatus==="playing"&&(this.visitorInput=!0)}revealHint(){this.currentStatus!=="preview"&&(this.hints=Math.min(2,this.hints+1))}resume(){this.currentStatus==="review"&&(this.currentStatus="playing",this.visitorInput=!1,this.currentResult=0)}reset(e){this.currentStatus=e,this.visitorInput=!1,this.currentResult=0,this.hints=0,this.currentScore={score:0,matched:!1,errors:[],adjustment:null}}submit(e,t){return!this.canSubmit||!t.manual||!t.settled?!1:(this.currentScore=My(this.task,e),t.blocked&&(this.currentScore={...this.currentScore,score:Math.min(Pi.minimumScore-1,Math.max(0,this.currentScore.score-Pi.collisionPenalty)),matched:!1}),this.currentResult=this.currentScore.score,this.results[this.task.id]=Math.max(this.bestScore,this.currentResult),this.currentStatus=this.currentScore.matched?"complete":"review",!0)}};var Na=class{constructor(e,t){this.scene=e;this.pose=t;this.group.name="training_target_pose",this.group.visible=!1,e.add(this.group)}group=new qt;lineMaterial=new Vs({color:10252335,dashSize:.018,gapSize:.012,transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1});dotMaterial=new wt({color:12356930,transparent:!0,opacity:.7,depthTest:!1,depthWrite:!1});dotGeometry=new Ei(.012,8,6);show(e){this.clear(),this.pose.previewPose(La(e),()=>{let t=new Set(e.joints.map(i=>i.name)),n=[];[...t].some(i=>i.startsWith("waist_"))&&n.push(["pelvis","waist_yaw_joint","torso_link","head_link"]);for(let i of["left","right"])[...t].some(r=>r.startsWith(i+"_")&&/shoulder|elbow|wrist/.test(r))&&n.push([`${i}_shoulder_pitch_joint`,`${i}_elbow_joint`,`${i}_wrist_roll_joint`,`${i}_rubber_hand`]),[...t].some(r=>r.startsWith(i+"_")&&/hip|knee|ankle/.test(r))&&n.push([`${i}_hip_pitch_joint`,`${i}_knee_joint`,`${i}_ankle_pitch_joint`,`${i}_ankle_roll_link`]);for(let i of n){let r=i.map(a=>{var l;return(l=this.pose.model.getObjectByName(a))==null?void 0:l.getWorldPosition(new S)}).filter(a=>!!a);if(r.length<2)continue;let o=new an(new mt().setFromPoints(r),this.lineMaterial);o.computeLineDistances(),o.renderOrder=6,this.group.add(o)}for(let i of e.joints){let r=this.pose.model.getObjectByName(i.name);if(!r)continue;let o=new Ye(this.dotGeometry,this.dotMaterial);r.getWorldPosition(o.position),o.renderOrder=6,this.group.add(o)}for(let i of e.joints.filter(r=>r.name.includes("wrist"))){let r=this.pose.model.getObjectByName(`${i.name.split("_")[0]}_rubber_hand`);if(!r)continue;let o=new yt().setFromObject(r).getCenter(new S),a=r.getWorldQuaternion(new It),l=[new S(0,-.055,0),new S(0,.055,0),new S(0,0,0),new S(0,0,.065)],c=new an(new mt().setFromPoints(l.map(u=>u.applyQuaternion(a).add(o))),this.lineMaterial);c.computeLineDistances(),c.renderOrder=6,this.group.add(c)}}),this.group.visible=!0}hide(){this.group.visible=!1}clear(){for(let e of[...this.group.children])e.isLine&&e.geometry.dispose(),this.group.remove(e)}dispose(){this.clear(),this.group.removeFromParent(),this.dotGeometry.dispose(),this.lineMaterial.dispose(),this.dotMaterial.dispose()}};function ah(s){var t;if(/waist|torso|pelvis/.test(s))return"body";let e=(t=/^(left|right)_/.exec(s))==null?void 0:t[1];if(e){if(/shoulder|elbow|wrist|rubber_hand/.test(s))return`${e}-arm`;if(/hip|knee|ankle/.test(s))return`${e}-leg`}}function sf(s,e,t,n,i){let r=ah(t);if(!r)return;let o=new Set(s.joints.map(a=>a.name));return o.has(e)&&ah(e)===r?i.find(a=>a.jointName===e):n&&o.has(n.jointName)?n:i.find(a=>o.has(a.jointName)&&ah(a.jointName)===r)}function Da(s){return s.includes("elbow")?{increase:"\u5F2F\u8D77\u4E00\u70B9",decrease:"\u4F38\u76F4\u4E00\u70B9"}:s.includes("shoulder_pitch")?{increase:"\u5411\u540E\u653E\u4E00\u70B9",decrease:"\u5411\u524D\u62AC\u4E00\u70B9"}:s.includes("shoulder_roll")?s.startsWith("left_")?{increase:"\u5411\u5916\u6253\u5F00\u4E00\u70B9",decrease:"\u5411\u5185\u6536\u4E00\u70B9"}:{increase:"\u5411\u5185\u6536\u4E00\u70B9",decrease:"\u5411\u5916\u6253\u5F00\u4E00\u70B9"}:s.includes("hip_pitch")?{increase:"\u5411\u540E\u6536\u817F\u4E00\u70B9",decrease:"\u5411\u524D\u62AC\u817F\u4E00\u70B9"}:s.includes("knee")?{increase:"\u819D\u76D6\u518D\u5F2F\u4E00\u70B9",decrease:"\u819D\u76D6\u4F38\u76F4\u4E00\u70B9"}:s.includes("ankle_pitch")?{increase:"\u811A\u5C16\u538B\u4F4E\u4E00\u70B9",decrease:"\u811A\u5C16\u62AC\u9AD8\u4E00\u70B9"}:s.includes("waist_pitch")?{increase:"\u4E0A\u8EAB\u524D\u503E\u4E00\u70B9",decrease:"\u4E0A\u8EAB\u633A\u76F4\u4E00\u70B9"}:s.includes("waist_yaw")?{increase:"\u4E0A\u8EAB\u5411\u5DE6\u8F6C\u4E00\u70B9",decrease:"\u4E0A\u8EAB\u5411\u53F3\u8F6C\u4E00\u70B9"}:{increase:"\u6B63\u5411\u8F6C\u4E00\u70B9",decrease:"\u53CD\u5411\u8F6C\u4E00\u70B9"}}function rf(s){let e=s.name.startsWith("left_")?"\u5DE6":s.name.startsWith("right_")?"\u53F3":"",t=s.name.includes("elbow")?`${e}\u5C0F\u81C2`:s.name.includes("shoulder")?`${e}\u624B\u81C2`:s.name.includes("hip")?`${e}\u5927\u817F`:s.name.includes("knee")?`${e}\u819D\u76D6`:s.name.includes("ankle")?`${e}\u811A\u638C`:s.name.includes("wrist")?`${e}\u624B\u8155`:"\u4E0A\u8EAB";if(s.target===0&&Math.abs(s.actual)>s.tolerance)return`\u5148\u628A${t}\u8F6C\u56DE\u81EA\u7136\u59FF\u6001\uFF0C\u5176\u4ED6\u90E8\u4F4D\u6682\u65F6\u4FDD\u6301\u3002`;let n=Da(s.name),i=s.target>s.actual?n.increase:n.decrease;return`\u8BA9${t}${i}\uFF0C\u5176\u4ED6\u90E8\u4F4D\u5148\u4FDD\u6301\u3002`}function lh(s,e){let t=e.startsWith("left_")?"left":"right",n=/shoulder|elbow|wrist/.test(e)?`${t}_rubber_hand`:/hip|knee|ankle/.test(e)?`${t}_ankle_roll_link`:"head_link";return s.model.getObjectByName(n)}function Ua(s,e,t,n){let i=lh(s,t),r=new ae(n==="x"?1:0,n==="y"?-1:0);if(!i||t.includes("wrist"))return r;e.updateMatrixWorld(!0);let o=Object.fromEntries([...s.joints.keys()].map(f=>[f,s.getAngle(f)])),a=s.getInteractionRange(t),l=o[t],c=f=>s.previewPose({...o,[t]:Ze.clamp(f,a.min,a.max)},()=>i.getWorldPosition(new S).project(e)),u=c(l-12),h=c(l+12),d=new ae(h.x-u.x,u.y-h.y);return d.lengthSq()>1e-6?d.normalize():r}var of="g1-motion-training-best-v2",Oa=class{constructor(e){this.options=e;let t={};try{let i=JSON.parse(localStorage.getItem(of)??"{}");i&&typeof i=="object"&&!Array.isArray(i)&&(t=i)}catch{}this.state=new Ia(Cn,t),this.target=new Na(e.scene,e.pose);let n=(i,r,o)=>{let a=this.$(i);a.addEventListener(r,o),this.events.push(()=>a.removeEventListener(r,o))};for(let[i,r]of Cn.entries()){let o=r.joints.length===1?"\u5165\u95E8":r.joints.length<=3?"\u8FDB\u9636":"\u534F\u540C",a=document.createElement("option");if(a.value=r.id,a.textContent=`${String(i+1).padStart(2,"0")} / ${r.title} \xB7 ${o}`,this.$("training-task").append(a),i<3){let l=document.createElement("button");l.type="button",l.className="training-task-card",l.dataset.task=r.id;let c=document.createElement("span"),u=document.createElement("b"),h=document.createElement("small");c.textContent=`0${i+1} / ${o}`,u.textContent=r.title,h.textContent=`${r.joints.length} \u4E2A\u8C03\u8282\u90E8\u4F4D`,l.append(c,u,h),l.addEventListener("click",()=>this.select(r.id)),this.$("training-task-cards").append(l)}}n("enter-training","click",()=>this.enter()),n("leave-training","click",()=>this.leave()),n("training-task","change",()=>this.select(this.$("training-task").value)),n("training-start","click",()=>{this.state.status==="review"?(this.state.resume(),this.options.onChanged(),this.render()):this.start()}),n("training-preview","click",()=>this.preview()),n("training-reset","click",()=>this.start()),n("training-submit","click",()=>this.submit()),n("training-adjust","click",()=>{let i=this.state.accuracy.adjustment;i&&(this.state.resume(),this.setSelected(i.name),this.options.onChoose(i.name),this.options.onChanged(),this.lastRender="",this.render())});for(let[i,r]of[["training-less",-1],["training-more",1]])n(i,"click",()=>{this.state.status==="playing"&&this.options.onMove(this.selectedJoint,this.options.pose.getRequestedAngle(this.selectedJoint)+r*3)});n("training-next","click",()=>this.select(Cn[(this.state.taskIndex+1)%Cn.length].id)),n("training-hint","click",()=>{this.state.hintLevel<2?(this.state.revealHint(),this.state.hintLevel===2&&this.showTarget(!0)):this.showTarget(!this.targetVisible),this.lastRender="",this.render()}),this.renderRecords()}$=e=>document.getElementById(e);state;target;isActive=!1;selectedJoint="";targetVisible=!1;lastBlocked=!1;lastRender="";buttons=new Map;events=[];guidePosition=new S;guideDirection=new ae(0,-1);get active(){return this.isActive}enter(){this.isActive||(this.isActive=!0,this.state.select(this.state.task.id),this.options.onEnter(),this.buildTask(),this.options.onChanged())}leave(){this.isActive&&(this.isActive=!1,this.state.select(this.state.task.id),this.showTarget(!1),this.options.onExit(),this.options.onChanged())}select(e){this.state.select(e),this.options.onPoseReset(),this.buildTask(),this.options.onChanged()}showTarget(e){this.targetVisible=e,e?this.target.show(this.state.task):this.target.hide(),this.$("training-legend").hidden=!e}buildTask(){let e=this.state.task;this.showTarget(!1),this.lastBlocked=!1,this.$("training-task").value=e.id,this.$("training-description").textContent=e.description,this.$("training-number").textContent=`MOTION ${String(this.state.taskIndex+1).padStart(2,"0")} / ${String(Cn.length).padStart(2,"0")}`,this.$("pose-game").dataset.intro=String(e.id==="first-lift");for(let t of this.$("training-task-cards").querySelectorAll("button"))t.setAttribute("aria-pressed",String(t.dataset.task===e.id));this.$("training-joints").replaceChildren(),this.buttons.clear();for(let t of e.joints){let n=document.createElement("button");n.type="button",n.className="training-axis",n.dataset.joint=t.name;let i=document.createElement("b"),r=document.createElement("span");i.textContent=t.label;let o=this.options.controls.find(a=>a.jointName===t.name);r.textContent=Da(t.name).increase.replace("\u4E00\u70B9",""),n.append(i,r),n.addEventListener("click",()=>{this.state.status==="playing"&&(this.setSelected(t.name),this.options.onChoose(t.name))}),n.addEventListener("keydown",a=>{this.state.status!=="playing"||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.key)||(a.preventDefault(),this.setSelected(t.name),this.options.onMove(t.name,this.options.pose.getRequestedAngle(t.name)+(["ArrowUp","ArrowRight"].includes(a.key)?2:-2)))}),this.$("training-joints").append(n),this.buttons.set(t.name,n)}this.setSelected(e.focusJoint),this.options.onChoose(this.selectedJoint),this.lastRender="",this.render()}setSelected(e){var r;if(!(this.options.controls.some(o=>o.jointName===e)&&(this.state.task.joints.some(o=>o.name===e)||((r=this.state.accuracy.adjustment)==null?void 0:r.name)===e)))return;this.selectedJoint=e;for(let[o,a]of this.buttons)a.setAttribute("aria-pressed",String(o===e));let n=this.options.controls.find(o=>o.jointName===e),i=Da(e);this.$("training-drag-label").textContent=`\u5F53\u524D\uFF1A${this.options.labels[e]??e}\u3002\u62D6\u52A8\u4EAE\u8D77\u7684\u90E8\u4F4D\uFF0C\u6216\u7528\u4E0B\u65B9\u6309\u94AE\u5FAE\u8C03\u3002`,this.$("training-less").textContent=i.decrease,this.$("training-more").textContent=i.increase,this.guideDirection.copy(Ua(this.options.pose,this.options.camera,e,(n==null?void 0:n.dragAxis)??"y")),this.$("training-drag-arrow").style.transform=`rotate(${Math.atan2(this.guideDirection.y,this.guideDirection.x)}rad)`}resolveControl(e,t){let n=this.state.task,i=this.state.accuracy.adjustment,r=(i==null?void 0:i.name)===this.selectedJoint&&!n.joints.some(o=>o.name===i.name)?{...n,joints:[...n.joints,{name:i.name,label:"\u6062\u590D\u81EA\u7136\u59FF\u6001",degrees:0,tolerance:i.tolerance}]}:n;return sf(r,this.selectedJoint,e,t,this.options.controls)}markInput(){this.state.markInput()}start(){this.options.onPoseReset(),this.state.start(),this.lastBlocked=!1,this.showTarget(!1),this.setSelected(this.selectedJoint),this.options.onChoose(this.selectedJoint),this.options.onChanged(),this.lastRender="",this.render()}preview(){this.state.preview(),this.showTarget(!1),this.options.pose.demonstratePose(La(this.state.task)),this.options.onChanged(),this.render()}settled(){let e=this.options.pose;return!e.animating&&[...e.joints.keys()].every(t=>Math.abs(e.getAngle(t)-e.getRequestedAngle(t))<.1)}submit(){let e=this.options.conditions();if(e.dragging)return;let t=this.options.pose,n=Object.fromEntries([...t.joints.keys()].map(i=>[i,t.getAngle(i)]));if(this.state.submit(n,{manual:t.motionSource==="manual",settled:this.settled(),blocked:e.blocked})){this.lastBlocked=e.blocked,this.state.status==="review"&&this.state.accuracy.adjustment&&(this.setSelected(this.state.accuracy.adjustment.name),this.options.onChoose(this.state.accuracy.adjustment.name));try{localStorage.setItem(of,JSON.stringify(this.state.records))}catch{}if(this.renderRecords(),this.options.onChanged(),this.lastRender="",this.render(),this.state.status==="complete"){let i=this.$("pose-game");i.classList.remove("is-complete"),i.offsetWidth,i.classList.add("is-complete")}}}suspend(){this.lastRender=""}update(e,t){if(!this.isActive)return;this.state.status==="preview"&&!this.options.pose.animating&&(this.state.finishPreview(),this.options.onChanged());let n=this.$("training-drag-cue"),i=lh(this.options.pose,this.selectedJoint);if(this.state.status==="playing"&&i){this.options.camera.updateMatrixWorld(),i.getWorldPosition(this.guidePosition).project(this.options.camera);let r=this.guidePosition;n.hidden=r.z<-1||r.z>1||Math.abs(r.x)>.82||Math.abs(r.y)>.72,n.hidden||(n.style.left=`${(r.x*.5+.5)*this.options.viewer.clientWidth}px`,n.style.top=`${(-r.y*.5+.5)*this.options.viewer.clientHeight}px`)}else n.hidden=!0;this.render()}renderRecords(){this.$("training-total").textContent=`\u5DF2\u638C\u63E1 ${this.state.completedCount} / ${Cn.length}`,this.$("training-records").textContent=`\u672C\u673A\u7D2F\u8BA1 ${this.state.totalScore} / ${Cn.length*100} \u5206 \xB7 \u6BCF\u5173\u53EA\u8BA1\u6700\u9AD8\u5206`,this.$("training-entry-progress").textContent=`${Cn.length} \u4E2A\u52A8\u4F5C \xB7 \u5DF2\u638C\u63E1 ${this.state.completedCount}`}render(){let e=this.state.status,t=e==="review"||e==="complete",n=this.state.resultScore,i=this.state.canSubmit&&this.settled(),r=this.state.task.id==="first-lift",o=e==="ready"?r?"\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF1A\u53EA\u9700\u62AC\u8D77\u4EAE\u8D77\u7684\u5C0F\u81C2\u3002\u60F3\u5148\u770B\u770B\uFF1F\u70B9\u51FB\u89C2\u770B\u793A\u8303\u3002":"\u5148\u770B\u793A\u8303\uFF0C\u6216\u76F4\u63A5\u5F00\u59CB\u3002\u6446\u597D\u540E\u7531\u4F60\u63D0\u4EA4\u3002":e==="preview"?"\u7559\u610F\u624B\u3001\u811A\u600E\u6837\u79FB\u52A8\u3002\u793A\u8303\u7ED3\u675F\u540E\uFF0C\u6362\u4F60\u6765\u3002":e==="complete"?r?"\u7B2C\u4E00\u9897\u661F\u5230\u624B\uFF01\u4F60\u5DF2\u7ECF\u7528\u4E00\u4E2A\u5173\u8282\u8BA9\u5C0F\u81C2\u52A8\u8D77\u6765\u4E86\u3002":"\u52A8\u4F5C\u8FBE\u6210\uFF01\u6362\u4E2A\u52A8\u4F5C\u7EE7\u7EED\u63A2\u7D22\u3002":e==="review"?"\u5DF2\u7ECF\u627E\u5230\u8C03\u6574\u65B9\u5411\u4E86\u3002\u70B9\u51FB\u201C\u8C03\u6574\u8FD9\u4E2A\u90E8\u4F4D\u201D\uFF0C\u4FDD\u7559\u59FF\u6001\u7EE7\u7EED\u8BD5\u3002":this.state.canSubmit?i?"\u89C9\u5F97\u6446\u597D\u4E86\u5417\uFF1F\u70B9\u51FB\u63D0\u4EA4\uFF0C\u770B\u770B\u8FD9\u6B21\u505A\u5F97\u600E\u6837\u3002":"\u52A8\u4F5C\u6B63\u5728\u8DDF\u968F\u4F60\uFF0C\u505C\u7A33\u540E\u5C31\u53EF\u4EE5\u63D0\u4EA4\u3002":r?"\u6309\u4F4F\u4EAE\u8D77\u7684\u5C0F\u81C2\u62D6\u4E00\u4E0B\uFF0C\u8BA9\u624B\u62AC\u5230\u8EAB\u524D\u3002":"\u70B9\u9009\u8981\u8C03\u6574\u7684\u90E8\u4F4D\uFF0C\u6309\u4F4F\u4EAE\u8D77\u7684\u80A2\u4F53\u62D6\u52A8\u3002",a=JSON.stringify([e,n,i,o,this.state.hintLevel,this.targetVisible,this.lastBlocked,this.state.bestScore]);if(a===this.lastRender)return;this.lastRender=a;let l=this.$("pose-game");l.dataset.status=e,l.style.setProperty("--score",String(t?n:0)),this.$("training-score").textContent=t?String(n):"\u2014",this.$("training-score-label").textContent=t?"\u672C\u6B21\u52A8\u4F5C\u7CBE\u51C6\u5EA6":"\u63D0\u4EA4\u540E\u63ED\u6653",this.$("training-best").textContent=this.state.bestScore?`\u672C\u5173\u6700\u4F73 ${this.state.bestScore} \u5206`:"\u672C\u5173\u6700\u4F73 \xB7 \u7B49\u4F60\u521B\u9020",this.$("training-status").textContent=o;let c=this.$("training-start");c.textContent=e==="review"?"\u7EE7\u7EED\u8C03\u6574 \u2197":e==="complete"?"\u91CD\u65B0\u6311\u6218 \u2197":e==="playing"?"\u4ECE\u5934\u518D\u6765":"\u5F00\u59CB\u6446\u59FF \u2197",c.disabled=e==="preview",this.$("training-preview").disabled=e==="preview";let u=this.$("training-submit");u.hidden=e!=="playing",u.disabled=!i,this.$("training-next").hidden=!t,this.$("training-reset").hidden=e!=="playing";let h=this.$("training-adjust");h.hidden=e!=="review"||!this.state.accuracy.adjustment,h.hidden?h.textContent="\u8C03\u6574\u8FD9\u4E2A\u90E8\u4F4D \u2192":this.state.accuracy.adjustment&&(h.textContent=`\u8C03\u6574${this.options.labels[this.state.accuracy.adjustment.name]??"\u8FD9\u4E2A\u90E8\u4F4D"} \u2192`);for(let b of["training-less","training-more"])this.$(b).disabled=e!=="playing";for(let b of this.buttons.values())b.disabled=e!=="playing";for(let b of this.$("training-route").querySelectorAll("[data-phase]"))b.dataset.active=String(b.dataset.phase===(t?"submit":e==="playing"?"pose":"observe"));let d=this.$("training-hint");d.disabled=e==="preview",d.textContent=this.state.hintLevel===0?"\u9700\u8981\u4E00\u70B9\u63D0\u793A\uFF1F":this.state.hintLevel===1?"\u518D\u770B\u4E00\u773C\u76EE\u6807\u8F6E\u5ED3":this.targetVisible?"\u6536\u8D77\u76EE\u6807\u8F6E\u5ED3":"\u663E\u793A\u76EE\u6807\u8F6E\u5ED3",d.setAttribute("aria-expanded",String(this.state.hintLevel>0));let f=this.$("training-hint-copy");f.hidden=this.state.hintLevel===0,f.textContent=this.state.task.hints[Math.max(0,this.state.hintLevel-1)];let g=n>=98?"\u7CBE\u51C6\u590D\u523B":n>=90?"\u52A8\u4F5C\u719F\u7EC3":n>=80?"\u52A8\u4F5C\u8FBE\u6210":n>=60?"\u63A5\u8FD1\u76EE\u6807":"\u518D\u8BD5\u4E00\u6B21",_=this.state.accuracy.adjustment,m=_?rf(_):"\u8BD5\u7740\u8BB0\u4F4F\u52A8\u4F5C\u7684\u8F6E\u5ED3\uFF0C\u518D\u8C03\u6574\u5404\u4E2A\u90E8\u4F4D\u3002",p=this.lastBlocked?`\u90E8\u4F4D\u51FA\u73B0\u91CD\u53E0\uFF0C\u672C\u6B21\u5DF2\u6263\u5206\uFF1B\u5148\u6536\u56DE\u76F8\u78B0\u7684\u90E8\u4F4D\u3002${m}`:n>=98?"\u5404\u4E2A\u90E8\u4F4D\u914D\u5408\u5F97\u5F88\u5230\u4F4D\uFF01":m;this.$("training-review").hidden=!t,this.$("training-review").textContent=t?`${g} \xB7 ${p} ${this.state.hintLevel?"\u501F\u52A9\u63D0\u793A\u5B8C\u6210":"\u72EC\u7ACB\u5C1D\u8BD5\u5B8C\u6210"}\u3002`:"",this.$("training-result").hidden=e!=="complete",this.$("training-result-score").textContent=`${n} \u5206`,this.$("training-result-title").textContent=g,this.$("training-result-detail").textContent=`${this.state.task.title} \xB7 \u5DF2\u638C\u63E1 ${this.state.completedCount} / ${Cn.length}`,this.$("training-stars").textContent=t?n>=98?"\u2605\u2605\u2605":n>=90?"\u2605\u2605\u2606":n>=80?"\u2605\u2606\u2606":"\u2606\u2606\u2606":"\u2606\u2606\u2606",this.$("training-stars").setAttribute("aria-label",t?`\u83B7\u5F97 ${n>=98?3:n>=90?2:n>=80?1:0} \u9897\u661F`:"\u63D0\u4EA4\u540E\u83B7\u5F97\u661F\u661F")}dispose(){for(let e of this.events)e();this.target.dispose()}};var Wr=s=>Object.fromEntries(["left","right"].flatMap(e=>[[`${e}_hip_pitch_joint`,-s/2],[`${e}_knee_joint`,s],[`${e}_ankle_pitch_joint`,-s/2]])),_t=(s,e,t,n,i=0)=>({[`${s}_shoulder_pitch_joint`]:e,[`${s}_shoulder_roll_joint`]:t*(s==="left"?1:-1),[`${s}_elbow_joint`]:n,[`${s}_wrist_roll_joint`]:i}),Kt=(s={})=>({...Wr(6),..._t("left",-8,10,12),..._t("right",-8,10,12),...s}),Ey=s=>s.flatMap(e=>e==="waist"?["torso_link"]:e.endsWith("arm")?[`${e.split("-")[0]}_shoulder_yaw_link`,`${e.split("-")[0]}_elbow_link`,`${e.split("-")[0]}_wrist_pitch_link`]:[`${e.split("-")[0]}_hip_yaw_link`,`${e.split("-")[0]}_knee_link`,`${e.split("-")[0]}_ankle_roll_link`]);function tn(s,e,t,n,i,r,o){return{id:s,title:e,group:t,tags:n,description:i,links:Ey(r),frames:o.map((a,l)=>{let c=o[l-1],u=c&&Object.keys(a).length===Object.keys(c).length&&Object.entries(a).every(([h,d])=>c[h]===d);return{angles:a,duration:u?.24:l===0?.85:l===o.length-1?.65:.46}})}}var Bn=Kt({..._t("right",-75,65,60,-18)}),Ys=Kt({..._t("right",-75,80,68,18)}),Pt=Kt({..._t("left",-12,68,20),..._t("right",-12,68,20)}),$s=Kt({..._t("left",-32,42,35,25),waist_yaw_joint:10}),Fa=Kt({...Wr(10),waist_pitch_joint:18,..._t("left",-5,12,24),..._t("right",-5,12,24)}),qn=s=>Kt({..._t(s,-38,48,18,20),waist_yaw_joint:s==="left"?14:-14}),Yn=Kt({..._t("left",-50,18,45,30),..._t("right",-50,18,45,-30)}),Ks=Kt({..._t("left",-85,45,55),..._t("right",-85,45,55)}),Li=s=>Kt({..._t("left",-30,48+s*12,45),..._t("right",-30,48-s*12,45),waist_yaw_joint:s*12}),ts=s=>Kt({..._t("left",-58,20,70),..._t("right",-58,20,70),..._t(s,-68,22,18),waist_yaw_joint:s==="left"?8:-8}),ht=Kt({..._t("left",-20,30,35),..._t("right",-20,30,35)}),ch=Kt({..._t("right",-45,35,50)}),Yt=(s,e)=>Kt({..._t(s,-42,52,32,s==="left"?20:-20),waist_yaw_joint:e}),hh=(s,e)=>Kt({..._t("left",-85,s,e),..._t("right",-85,s,e)}),vn=(s,e)=>Kt({...Wr(s),..._t("left",-35,e,40),..._t("right",-35,e,40)}),uh=[tn("wave","\u6325\u624B\u62DB\u547C","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u81C2\u540E\u8FDE\u7EED\u5DE6\u53F3\u6325\u624B\uFF0C\u518D\u964D\u4F4E\u624B\u81C2\u63A5\u4F4F\u4E0B\u4E00\u6BB5\u52A8\u4F5C\u3002",["right-arm"],[ch,Bn,Ys,Bn,Ys,Bn,Ys,Bn,Ys,ch]),tn("welcome","\u53CC\u81C2\u8FCE\u5BBE","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u53CC\u81C2\u5C55\u5F00\u3001\u8F6C\u5411\u4E24\u4FA7\u81F4\u610F\uFF0C\u518D\u4EE5\u6B22\u8FCE\u59FF\u52BF\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[ht,Pt,Pt,{...Pt,waist_yaw_joint:10},Pt,{...Pt,waist_yaw_joint:-10},Pt,ht,Pt,ht]),tn("invite","\u5355\u81C2\u9080\u8BF7","\u62DB\u547C\u4E0E\u63A5\u5F85",["invite","upper"],"\u4F38\u81C2\u9080\u8BF7\u3001\u8F6C\u8EAB\u793A\u610F\uFF0C\u624B\u8155\u548C\u8098\u90E8\u63A5\u529B\u5F15\u5BFC\u6E38\u5BA2\u3002",["left-arm","waist"],[ht,$s,$s,Yt("left",16),qn("left"),$s,Yt("left",8),qn("left"),$s,ht]),tn("bow","\u793C\u8C8C\u97A0\u8EAC","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u5148\u5C55\u5F00\u53CC\u81C2\u81F4\u8C22\uFF0C\u518D\u6536\u81C2\u97A0\u8EAC\u3001\u8D77\u8EAB\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[ht,Pt,ht,Kt({...Wr(8),waist_pitch_joint:8}),Fa,Fa,Kt({...Wr(8),waist_pitch_joint:10}),ht,Pt,ht]),tn("guide-left","\u5DE6\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["left","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u5DE6\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","waist"],[ht,qn("left"),qn("left"),Yt("left",20),$s,qn("left"),Yt("left",8),$s,qn("left"),ht]),tn("guide-right","\u53F3\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["right","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u53F3\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["right-arm","waist"],[ht,qn("right"),qn("right"),Yt("right",-20),Yt("right",-8),qn("right"),Yt("right",-16),Yt("right",-8),qn("right"),ht]),tn("offer","\u53CC\u624B\u5448\u9012","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u624B\u6258\u8D77\u5C55\u54C1\uFF0C\u5DE6\u53F3\u5C55\u793A\uFF0C\u518D\u9001\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[ht,Yn,Yn,{...Yn,waist_yaw_joint:12},Yn,{...Yn,waist_yaw_joint:-12},Yn,ht,Yn,ht]),tn("turn","\u8F6C\u8EAB\u5C55\u793A","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u811A\u7559\u5728\u539F\u5730\uFF0C\u8170\u5E26\u52A8\u4E0A\u8EAB\uFF0C\u53CC\u81C2\u8F6E\u6D41\u5411\u4E24\u4FA7\u4ECB\u7ECD\u3002",["left-arm","right-arm","waist"],[ht,Yt("left",12),Yt("left",24),Pt,Yt("right",-12),Yt("right",-24),Pt,Yt("left",12),Yt("right",-12),ht]),tn("raise","\u53CC\u81C2\u4E0A\u4E3E","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u81C2\u4E0A\u4E3E\u3001\u5916\u5C55\u3001\u6536\u8098\uFF0C\u518D\u6B21\u4F38\u5C55\uFF0C\u5F62\u6210\u5B8C\u6574\u4E0A\u80A2\u4E50\u53E5\u3002",["left-arm","right-arm"],[ht,Ks,hh(55,65),Ks,hh(40,40),Ks,hh(55,65),Ks,Pt,ht]),tn("sway","\u5DE6\u53F3\u6446\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u6446\u81C2\u7A7F\u63D2\u8170\u90E8\u8F6C\u5411\uFF0C\u6700\u540E\u5C55\u5F00\u53CC\u81C2\u63A5\u4E0B\u4E00\u62CD\u3002",["left-arm","right-arm","waist"],[Li(-1),Li(1),Li(-1),Li(1),Pt,Li(-1),Li(1),Li(-1),Li(1),ht]),tn("pulse","\u5C48\u819D\u5F8B\u52A8","\u8282\u594F\u4E0E\u8868\u6F14",["lower","upper"],"\u6DF1\u6D45\u5C48\u819D\u4EA4\u66FF\uFF0C\u9ACB\u819D\u8E1D\u4E0E\u53CC\u81C2\u540C\u62CD\u914D\u5408\u3002",["left-leg","right-leg","left-arm","right-arm"],[vn(12,30),vn(30,45),vn(12,30),vn(24,40),vn(10,55),vn(30,45),vn(12,30),vn(24,40),vn(10,55),vn(6,30)]),tn("punch","\u4EA4\u66FF\u51FA\u62F3","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u51FA\u62F3\u63A5\u529B\uFF0C\u7A7F\u63D2\u6536\u8098\u548C\u5C55\u5F00\uFF0C\u8170\u90E8\u914D\u5408\u8F6C\u5411\u3002",["left-arm","right-arm","waist"],[ht,ts("left"),ts("right"),ts("left"),ts("right"),Pt,ts("right"),ts("left"),ts("right"),ht]),tn("salute","\u62AC\u624B\u81F4\u610F","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u8D77\u53F3\u81C2\u81F4\u610F\uFF0C\u8F6C\u5411\u4E24\u4FA7\u56DE\u5E94\u6E38\u5BA2\uFF0C\u518D\u5C55\u5F00\u56DE\u793C\u3002",["right-arm","waist"],[ch,Bn,{...Bn,waist_yaw_joint:-10},Bn,{...Bn,waist_yaw_joint:10},Bn,Ys,Bn,Pt,ht]),tn("open-close","\u5F00\u5408\u624B\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u8098\u6536\u62E2\u4E0E\u53CC\u81C2\u5C55\u5F00\u4EA4\u66FF\uFF0C\u6700\u540E\u9AD8\u4E3E\u53CC\u624B\u56DE\u5E94\u89C2\u4F17\u3002",["left-arm","right-arm"],[ht,Yn,Pt,Yn,Pt,Ks,Pt,Yn,Pt,ht]),tn("diagonal","\u5BF9\u89D2\u547C\u5E94","\u8282\u594F\u4E0E\u8868\u6F14",["upper","lower"],"\u5DE6\u53F3\u624B\u81C2\u8F6E\u6D41\u5C55\u5F00\uFF0C\u817F\u90E8\u8F7B\u5C48\u914D\u5408\u9AD8\u4F4E\u53D8\u5316\u3002",["left-arm","right-arm","left-leg","right-leg","waist"],[ht,Yt("left",12),vn(18,40),Yt("right",-12),vn(10,35),Yt("left",16),vn(24,45),Yt("right",-16),Pt,ht]),tn("finale","\u5C55\u5F00\u8C22\u5E55","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u53CC\u81C2\u4E3E\u8D77\u5411\u89C2\u4F17\u81F4\u8C22\uFF0C\u5C55\u5F00\u53CC\u624B\u540E\u97A0\u8EAC\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[ht,Ks,Pt,Bn,Ys,Pt,ht,Fa,Fa,ht])],Js=[{id:"reception",title:"01 / \u8FCE\u5BBE\u5C0F\u5267\u573A",brief:"\u6B22\u8FCE\u5149\u4E34\uFF01\u4ECE\u7B2C\u4E00\u58F0\u62DB\u547C\u5230\u6700\u540E\u7684\u9080\u8BF7\uFF0C\u63A5\u5F85\u4E00\u6279\u65B0\u6E38\u5BA2\u3002",rule:"\u5267\u672C\u5DF2\u6392\u597D\uFF0C\u70B9\u64AD\u653E\u5373\u53EF\u6B23\u8D4F\uFF1B\u70B9\u9009\u4EFB\u610F\u4E00\u6BB5\uFF0C\u4E5F\u80FD\u6362\u6210\u4F60\u7684\u52A8\u4F5C\u3002",slots:6,script:{title:"\u6B22\u8FCE\u5149\u4E34",tempo:"calm",steps:[{actionId:"wave",cue:"\u5F00\u573A \xB7 \u62DB\u624B\u95EE\u5019"},{actionId:"welcome",cue:"\u6B22\u8FCE \xB7 \u5411\u4E24\u4FA7\u81F4\u610F"},{actionId:"turn",cue:"\u4ECB\u7ECD \xB7 \u73AF\u987E\u5C55\u5385"},{actionId:"offer",cue:"\u5C55\u793A \xB7 \u5448\u4E0A\u5C55\u54C1"},{actionId:"invite",cue:"\u9080\u8BF7 \xB7 \u8BF7\u5F80\u8FD9\u8FB9\u8D70"},{actionId:"bow",cue:"\u6536\u5C3E \xB7 \u793C\u8C8C\u56DE\u793C"}]}},{id:"guide",title:"02 / \u5C55\u9986\u5C0F\u8BB2\u89E3",brief:"\u8DDF\u7740 G1 \u770B\u5C55\u54C1\uFF1A\u5148\u8FCE\u63A5\uFF0C\u518D\u6307\u5F15\u3001\u5C55\u793A\uFF0C\u6700\u540E\u9080\u8BF7\u53C2\u89C2\u3002",rule:"\u5267\u672C\u5DF2\u6392\u597D\uFF1B\u5DE6\u53F3\u4EE5\u673A\u5668\u4EBA\u81EA\u8EAB\u4E3A\u51C6\u3002\u53EF\u66FF\u6362\u52A8\u4F5C\uFF0C\u8BD5\u8BD5\u4F60\u7684\u8BB2\u89E3\u65B9\u5F0F\u3002",slots:6,script:{title:"\u8DDF\u7740 G1 \u901B\u5C55\u5385",tempo:"calm",steps:[{actionId:"salute",cue:"\u5F00\u573A \xB7 \u5411\u6E38\u5BA2\u81F4\u610F"},{actionId:"guide-left",cue:"\u6307\u5F15 \xB7 \u770B\u5DE6\u4FA7\u5C55\u54C1"},{actionId:"offer",cue:"\u5C55\u793A \xB7 \u8BF7\u770B\u8FD9\u4EF6\u5C55\u54C1"},{actionId:"turn",cue:"\u5C55\u5F00 \xB7 \u591A\u89D2\u5EA6\u4ECB\u7ECD"},{actionId:"invite",cue:"\u9080\u8BF7 \xB7 \u7EE7\u7EED\u5411\u524D\u53C2\u89C2"},{actionId:"bow",cue:"\u6536\u5C3E \xB7 \u611F\u8C22\u8046\u542C"}]}},{id:"dance",title:"03 / \u673A\u5668\u4EBA\u5F8B\u52A8\u79C0",brief:"\u624B\u81C2\u5F00\u5408\u3001\u5DE6\u53F3\u547C\u5E94\u3001\u5C48\u819D\u540C\u62CD\uFF0C\u4E00\u8D77\u770B G1 \u7684\u5C0F\u821E\u53F0\u3002",rule:"\u5267\u672C\u5DF2\u914D\u597D\u6D3B\u6CFC\u8282\u594F\uFF1B\u53EF\u66FF\u6362\u52A8\u4F5C\uFF0C\u8BA9\u9AD8\u4F4E\u4E0E\u5DE6\u53F3\u7684\u53D8\u5316\u66F4\u4E30\u5BCC\u3002",slots:6,script:{title:"G1 \u5F8B\u52A8\u5C0F\u821E\u53F0",tempo:"lively",steps:[{actionId:"raise",cue:"\u5F00\u573A \xB7 \u62AC\u81C2\u4EAE\u76F8"},{actionId:"sway",cue:"\u5C55\u5F00 \xB7 \u5DE6\u53F3\u5F8B\u52A8"},{actionId:"open-close",cue:"\u5C55\u5F00 \xB7 \u53CC\u81C2\u5F00\u5408"},{actionId:"pulse",cue:"\u9AD8\u6F6E \xB7 \u5168\u8EAB\u540C\u62CD"},{actionId:"diagonal",cue:"\u9AD8\u6F6E \xB7 \u5BF9\u89D2\u547C\u5E94"},{actionId:"finale",cue:"\u8C22\u5E55 \xB7 \u5411\u89C2\u4F17\u81F4\u8C22"}]}},{id:"free",title:"\u81EA\u7531 / \u6211\u7684\u673A\u5668\u4EBA\u79C0",brief:"\u60F3\u6F14\u5F97\u66F4\u4E30\u5BCC\uFF1F\u81EA\u7531\u7F16\u6392\u6700\u591A\u516B\u6BB5\u52A8\u4F5C\u3002",rule:"\u4EFB\u9009\u4E00\u81F3\u516B\u6B65\uFF0C\u516D\u6B65\u7EA6\u534A\u5206\u949F\uFF0C\u52A8\u4F5C\u8D8A\u591A\u6F14\u51FA\u8D8A\u957F\u3002",slots:8}];function Pn(s){let e=uh.find(t=>t.id===s);if(!e)throw new Error(`Unknown performance action: ${s}`);return e}function Sy(s,e,t){let n=e.map(Pn),i=h=>n.some(d=>d.tags.includes(h));if(s==="free")return{score:null,title:i("upper")&&i("lower")?"\u5168\u8EAB\u534F\u540C\u5C0F\u5BFC\u6F14":"\u6211\u7684 G1 \u9996\u6620\u793C",advice:"\u4F60\u7684\u4F5C\u54C1\u5B8C\u6210\u4E86\uFF01\u53EF\u4EE5\u6362\u4E00\u4E2A\u8282\u594F\uFF0C\u770B\u770B\u540C\u4E00\u6BB5\u52A8\u4F5C\u4F1A\u6709\u4EC0\u4E48\u4E0D\u540C\u3002",stars:3};let r=0,o="",a=n[0],l=n[n.length-1],c=a==null?void 0:a.tags.includes("greet"),u=l==null?void 0:l.tags.includes("close");if(s==="reception")r=20*Number(i("greet"))+20*Number(i("invite"))+20*Number(i("close")),r+=20*Number(c)+20*Number(u),o=i("greet")?i("invite")?i("close")?c?u?"\u6B22\u8FCE\u3001\u9080\u8BF7\u3001\u7ED3\u675F\u4E00\u6C14\u5475\u6210\uFF0C\u63A5\u5F85\u5C0F\u80FD\u624B\u5C31\u662F\u4F60\uFF01":"\u8C03\u6574\u987A\u5E8F\uFF1A\u628A\u97A0\u8EAC\u653E\u5728\u6700\u540E\u3002":"\u8C03\u6574\u987A\u5E8F\uFF1A\u5148\u628A\u62DB\u547C\u52A8\u4F5C\u653E\u5728\u5F00\u573A\u3002":"\u6700\u540E\u52A0\u4E00\u4E2A\u793C\u8C8C\u97A0\u8EAC\uFF0C\u4E3A\u63A5\u5F85\u753B\u4E0A\u53E5\u53F7\u3002":"\u518D\u52A0\u4E00\u4E2A\u9080\u8BF7\u6216\u4FA7\u5411\u6307\u5F15\uFF0C\u8BA9\u6E38\u5BA2\u77E5\u9053\u5F80\u54EA\u91CC\u8D70\u3002":"\u52A0\u5165\u6325\u624B\u6216\u53CC\u81C2\u8FCE\u5BBE\uFF0C\u5148\u548C\u6E38\u5BA2\u6253\u4E2A\u62DB\u547C\u3002";else if(s==="guide"){let h=e.indexOf("guide-left"),d=n.findIndex((f,g)=>g!==h&&f.tags.includes("show"));r=20*Number(i("greet"))+20*+(h>=0)+20*+(d>=0),r+=10*Number(c)+10*+(h>0&&h<e.length-1)+20*Number(u),o=h<0?"\u5C55\u54C1\u5728\u673A\u5668\u4EBA\u81EA\u8EAB\u7684\u5DE6\u4FA7\uFF0C\u628A\u6307\u5F15\u52A8\u4F5C\u6362\u6210\u201C\u5DE6\u4FA7\u6307\u5F15\u201D\u3002":i("greet")?d<0?"\u518D\u52A0\u53CC\u624B\u5448\u9012\u6216\u8F6C\u8EAB\u5C55\u793A\uFF0C\u7ED9\u5C55\u54C1\u4E00\u4E2A\u5C55\u793A\u73AF\u8282\u3002":c?u?"\u65B9\u5411\u6B63\u786E\uFF0C\u4ECB\u7ECD\u5B8C\u6574\uFF01\u4F60\u8BA9\u6BCF\u4E00\u6761\u8FD0\u52A8\u94FE\u90FD\u6709\u4E86\u4EFB\u52A1\u3002":"\u6700\u540E\u52A0\u4E0A\u793C\u8C8C\u97A0\u8EAC\uFF0C\u5B8C\u6210\u8FD9\u6B21\u8BB2\u89E3\u3002":"\u8C03\u6574\u987A\u5E8F\uFF1A\u628A\u6B22\u8FCE\u52A8\u4F5C\u653E\u5230\u5F00\u573A\u3002":"\u5148\u52A0\u4E00\u4E2A\u62DB\u547C\uFF0C\u8BA9\u6E38\u5BA2\u77E5\u9053\u8BB2\u89E3\u5F00\u59CB\u4E86\u3002"}else if(s==="dance"){let h=e.includes("pulse");r=30*Number(i("upper"))+30*Number(h)+20*+(new Set(e).size>=3)+20*+(t==="lively"),o=h?new Set(e).size<3?"\u8BD5\u8BD5\u81F3\u5C11\u4E09\u79CD\u52A8\u4F5C\uFF0C\u8BA9\u8FD9\u6BB5\u8868\u6F14\u66F4\u4E30\u5BCC\u3002":t!=="lively"?"\u628A\u8282\u594F\u5207\u5230\u201C\u6D3B\u6CFC\u201D\uFF0C\u8BA9\u52A8\u4F5C\u8DDF\u4E0A\u8FD9\u6B21\u4EFB\u52A1\u7684\u8282\u62CD\u3002":"\u624B\u81C2\u4E0E\u53CC\u817F\u63A5\u529B\u914D\u5408\uFF0C\u4F60\u5B8C\u6210\u4E86\u4E00\u573A\u6709\u8282\u594F\u7684\u673A\u5668\u4EBA\u79C0\uFF01":"\u52A0\u5165\u201C\u5C48\u819D\u5F8B\u52A8\u201D\uFF0C\u8BA9\u4E0B\u80A2\u4E5F\u8DDF\u4E0A\u8868\u6F14\u3002"}else throw new Error(`Unknown performance task: ${s}`);return{score:r,title:r>=90?"\u7CBE\u5F69\u5B8C\u6210":r>=80?"\u4EFB\u52A1\u8FBE\u6210":"\u518D\u6392\u4E00\u6B21\uFF0C\u4F1A\u66F4\u68D2",advice:o,stars:r>=90?3:r>=80?2:1}}var Ba=class{task=Js[0];steps=[];selected=0;tempo="calm";status="editing";result=null;previewing=!1;constructor(){this.selectTask(this.task.id)}get script(){return this.task.script}get usingScript(){let e=this.script;return!!(e&&this.tempo===e.tempo&&this.steps.length===e.steps.length&&this.steps.every((t,n)=>t===e.steps[n].actionId))}get busy(){return["playing","preview","paused"].includes(this.status)}get canPlay(){return!this.busy&&(this.task.id==="free"?this.steps.length>0:this.steps.length===this.task.slots)}selectTask(e){var n;if(this.busy)return;let t=Js.find(i=>i.id===e);if(!t)throw new Error("Unknown task");this.task=t,this.steps=[],this.selected=0,this.status="editing",this.result=null,this.tempo=((n=t.script)==null?void 0:n.tempo)??"calm",this.resetScript()}resetScript(){this.busy||!this.script||(this.steps=this.script.steps.map(e=>e.actionId),this.selected=0,this.tempo=this.script.tempo,this.invalidate())}sceneCue(e){var n;let t=(n=this.script)==null?void 0:n.steps[e];return t&&t.actionId===this.steps[e]?t.cue:"\u81EA\u9009 \xB7 \u7B2C "+(e+1)+" \u6BB5"}select(e){this.busy||(this.selected=Math.max(0,Math.min(this.task.slots-1,this.steps.length,Math.floor(e))))}choose(e){Pn(e),!this.busy&&(this.steps[this.selected]=e,this.invalidate())}move(e){if(this.busy)return;let t=this.selected+e;!this.steps[this.selected]||!this.steps[t]||([this.steps[this.selected],this.steps[t]]=[this.steps[t],this.steps[this.selected]],this.selected=t,this.invalidate())}remove(){this.busy||(this.steps.splice(this.selected,1),this.selected=Math.min(this.selected,this.steps.length,this.task.slots-1),this.invalidate())}setTempo(e){this.busy||(this.tempo=e,this.invalidate())}begin(e){return this.busy||!e&&!this.canPlay||e&&!this.steps[this.selected]?!1:(this.previewing=e,this.result=null,this.status=e?"preview":"playing",!0)}pause(){(this.status==="playing"||this.status==="preview")&&(this.status="paused")}resume(){this.status==="paused"&&(this.status=this.previewing?"preview":"playing")}stop(){this.status="editing",this.result=null}complete(){if(["playing","preview"].includes(this.status)){if(this.previewing){this.status="editing";return}this.result=this.usingScript?{score:null,title:this.script.title+" \xB7 \u6F14\u51FA\u5B8C\u6210",advice:"\u8FD9\u573A\u4E3B\u9898\u8868\u6F14\u5B8C\u6210\u4E86\uFF01\u53EF\u4EE5\u6362\u4E2A\u4E3B\u9898\uFF0C\u6216\u70B9\u9009\u4E00\u6BB5\u66FF\u6362\u52A8\u4F5C\uFF0C\u7F16\u51FA\u81EA\u5DF1\u7684\u7248\u672C\u3002",stars:0}:Sy(this.task.id,this.steps,this.tempo),this.status="result"}}invalidate(){this.result=null,this.status="editing"}};function dh(s,e,t){return Object.fromEntries([...new Set([...Object.keys(s),...Object.keys(e)])].map(n=>[n,(s[n]??0)+((e[n]??0)-(s[n]??0))*t]))}function fh(s,e){if(!s.length||s.length>8)throw new Error("Choose one to eight actions");let t=s.flatMap((r,o)=>Pn(r).frames.map(a=>({...a,actionIndex:o,actionId:r,phase:"action"}))),n=e==="lively"?.9:1,i=t.map(r=>({...r,duration:r.duration*n}));for(let r=1;r<i.length-2;r++){if(i[r].actionIndex===i[r+1].actionIndex)continue;let o=i[r-1].angles,a=i[r+2].angles,l=i[r].duration+i[r+1].duration+i[r+2].duration;Math.max(...[...new Set([...Object.keys(o),...Object.keys(a)])].map(u=>Math.abs((o[u]??0)-(a[u]??0))))>1e-6?(i[r]={...i[r],angles:dh(o,a,i[r].duration/l)},i[r+1]={...i[r+1],angles:dh(o,a,(i[r].duration+i[r+1].duration)/l)}):i[r+1]={...i[r+1],angles:dh(i[r].angles,a,i[r+1].duration/(i[r+1].duration+i[r+2].duration))}}return i.push({angles:{},duration:1.15*n,actionIndex:s.length-1,actionId:s[s.length-1],phase:"closing"}),i}function af(s,e){return s.length?fh(s,e).reduce((t,n)=>t+n.duration,0):0}var ka=class{index=0;elapsed=0;completed=0;paused=!1;keys;values;velocities;current;total;frames;constructor(e,t){if(!e.length||Object.values(t).some(n=>!Number.isFinite(n))||e.some(n=>!Number.isFinite(n.duration)||n.duration<=0||Object.values(n.angles).some(i=>!Number.isFinite(i))))throw new Error("Invalid performance timeline");this.frames=e,this.total=e.reduce((n,i)=>n+i.duration,0),this.keys=[...new Set([Object.keys(t),...e.map(n=>Object.keys(n.angles))].flat())],this.values=[t,...e.map(n=>n.angles)].map(n=>this.keys.map(i=>n[i]??0)),this.current=Object.fromEntries(this.keys.map((n,i)=>[n,this.values[0][i]])),this.velocities=this.values.map(()=>this.keys.map(()=>0));for(let n=1;n<this.values.length-1;n++){let i=e[n-1].duration,r=e[n].duration;for(let o=0;o<this.keys.length;o++){let a=(this.values[n][o]-this.values[n-1][o])/i,l=(this.values[n+1][o]-this.values[n][o])/r;if(a*l<=0)continue;let c=2*r+i,u=r+2*i,h=(c+u)/(c/a+u/l);this.velocities[n][o]=Math.sign(h)*Math.min(Math.abs(h),1.2*Math.min(Math.abs(a),Math.abs(l)))}}}get angles(){return this.current}get finished(){return this.index>=this.frames.length}get frame(){return this.frames[Math.min(this.index,this.frames.length-1)]}get progress(){return this.finished?1:(this.completed+this.elapsed)/this.total}pause(){this.paused=!0}resume(){this.paused=!1}update(e){if(this.paused||this.finished||!Number.isFinite(e)||e<=0)return!1;let t=e;for(;t>1e-10&&!this.finished;){let n=this.frames[this.index],i=Math.min(t,n.duration-this.elapsed);this.elapsed+=i,t-=i,this.elapsed>=n.duration-1e-10&&(this.completed+=n.duration,this.index++,this.elapsed=0)}if(this.finished){let n=this.values[this.values.length-1];for(let i=0;i<this.keys.length;i++)this.current[this.keys[i]]=n[i]}else{let n=this.index,i=this.frames[n].duration,r=this.elapsed/i,o=r*r,a=o*r,l=a*r,c=l*r,u=1-10*a+15*l-6*c,h=r-6*a+8*l-3*c,d=10*a-15*l+6*c,f=-4*a+7*l-3*c;for(let g=0;g<this.keys.length;g++)this.current[this.keys[g]]=u*this.values[n][g]+h*i*this.velocities[n][g]+d*this.values[n+1][g]+f*i*this.velocities[n+1][g]}return!0}};var za=class{constructor(e){this.options=e;let t=(r,o,a)=>{r.addEventListener(o,a),this.events.push(()=>r.removeEventListener(o,a))},n=(r,o)=>t(this.$(r),"click",o);for(let r of Js){let o=document.createElement("button");o.type="button",o.className="performance-task-card",o.dataset.task=r.id;let[a,l]=r.title.split(" / ");o.innerHTML="<span>"+a+"</span><b>"+l+"</b>",t(o,"click",()=>{this.options.game.busy||this.options.game.task.id===r.id||(this.options.game.selectTask(r.id),this.options.onReset(),this.render())}),this.taskButtons.push(o),this.$("performance-task-cards").append(o)}let i=new Map;for(let r of uh){let o=i.get(r.group);o||(o=document.createElement("optgroup"),o.label=r.group,i.set(r.group,o),this.actionSelect.append(o));let a=document.createElement("option");a.value=r.id,a.textContent=r.title,o.append(a)}for(let r=0;r<Math.max(...Js.map(o=>o.slots));r++){let o=document.createElement("button");o.type="button",o.className="performance-step",o.innerHTML="<span>0"+(r+1)+"</span><b>\uFF0B \u6DFB\u52A0\u52A8\u4F5C</b>",t(o,"click",()=>{this.options.game.select(r),this.render()}),this.stepButtons.push(o),this.$("performance-steps").append(o)}t(this.actionSelect,"change",()=>{this.actionSelect.value&&(this.options.game.choose(this.actionSelect.value),this.render())}),n("performance-top-entry",()=>this.activeState?this.leave():this.enter()),n("leave-performance",()=>this.leave()),n("performance-restore",()=>{this.options.game.busy||(this.options.game.resetScript(),this.options.onReset(),this.render())}),n("performance-preview",()=>this.options.onPreview()),n("performance-play",()=>this.options.onPlay()),n("performance-pause",()=>this.options.game.status==="paused"?this.options.onResume():this.options.onPause()),n("performance-stop",()=>this.options.onStop());for(let r of["calm","lively"])n("performance-tempo-"+r,()=>{this.options.game.setTempo(r),this.render()});n("performance-step-up",()=>{this.options.game.move(-1),this.render()}),n("performance-step-down",()=>{this.options.game.move(1),this.render()}),n("performance-step-remove",()=>{this.options.game.remove(),this.render()}),this.render()}$=e=>document.getElementById(e);events=[];stepButtons=[];taskButtons=[];actionSelect=this.$("performance-action");progress=this.$("performance-play-progress");lastRender="";lastPlayback="";playbackStep=null;activeState=!1;get active(){return this.activeState}enter(){this.activeState||(this.activeState=!0,this.options.onEnter(),this.render())}leave(){this.activeState&&(this.options.onStop(),this.activeState=!1,this.options.onExit(),this.render())}update(){this.activeState&&this.render()}playback(e,t,n,i){let r=Math.round(Math.max(0,Math.min(1,e))*100),o=[r,t,n,i].join("|");o!==this.lastPlayback&&(this.lastPlayback=o,this.playbackStep!==t&&(this.playbackStep=t,this.render()),this.progress.value=r,this.$("performance-now-label").textContent=n?"\u8C22\u5E55 / \u81EA\u7136\u6536\u56DE":i?"\u5355\u6B65\u9884\u89C8 / \u4E0D\u8BA1\u4EFB\u52A1\u5206":this.options.game.script?t+1+" / "+this.options.game.steps.length+" \xB7 "+this.options.game.sceneCue(t):"\u6B63\u5728\u6F14\u51FA / \u7B2C "+(t+1)+" \u6B65",this.stepButtons.forEach((a,l)=>a.dataset.playing=String(!n&&l===t)))}render(){let e=this.options.game,t=e.busy?this.playbackStep??(e.status==="preview"?e.selected:0):e.selected,n=e.steps[t],i=n?Pn(n):void 0,r=e.busy,o=e.status==="result"?e.result:null,a=JSON.stringify([this.activeState,e.task.id,e.steps,e.selected,t,e.tempo,e.status,o]);if(a===this.lastRender)return;this.lastRender=a,this.$("performance-game").dataset.status=e.status,this.$("performance-game").dataset.task=e.task.id;let l=this.$("performance-top-entry");l.setAttribute("aria-pressed",String(this.activeState)),l.querySelector("b").textContent=this.activeState?"\u8FD4\u56DE\u5173\u8282\u63A2\u7D22":"\u770B\u4E00\u573A G1 \u8868\u6F14",l.querySelector("small").textContent=this.activeState?"\u4FDD\u7559\u7F16\u6392 \xB7 \u968F\u65F6\u56DE\u6765\u7EE7\u7EED":"\u8FCE\u5BBE \xB7 \u8BB2\u89E3 \xB7 \u821E\u8E48 / \u4E00\u952E\u5F00\u6F14\uFF0C\u4E5F\u80FD\u6539\u7F16",this.$("performance-program-title").textContent=e.script?"THEME SHOW / "+e.script.title:"MOTION DIRECTOR / \u81EA\u7531\u521B\u4F5C",this.$("performance-sequence-label").textContent=e.script?"01 / "+(e.usingScript?"\u5267\u672C\u51FA\u573A\u987A\u5E8F":"\u6211\u7684\u6539\u7F16\u987A\u5E8F"):"01 / \u6392\u597D\u51FA\u573A\u987A\u5E8F";let c=this.$("performance-restore");c.hidden=!e.script,c.disabled=r||e.usingScript,this.$("performance-brief").textContent=e.task.brief,this.$("performance-help").textContent=e.task.rule;let u=e.steps.length?" \xB7 \u7EA6 "+Math.round(af(e.steps,e.tempo))+" \u79D2":"";this.$("performance-progress").textContent=e.steps.length+" / "+e.task.slots+" \u6B65"+u,this.$("performance-action-label").textContent=e.script&&i?"02 / "+e.sceneCue(t)+(r?"":" \xB7 \u53EF\u6362\u52A8\u4F5C"):r?"02 / \u5F53\u524D\u52A8\u4F5C \xB7 \u7B2C "+(t+1)+" \u6B65":"02 / \u4E3A\u7B2C "+(e.selected+1)+" \u6B65\u6311\u52A8\u4F5C",this.actionSelect.value=n??"",this.actionSelect.disabled=r,this.$("performance-action-title").textContent=(i==null?void 0:i.title)??"\u8BA9\u80A9\u3001\u8098\u3001\u8155\u4E00\u8D77\u914D\u5408",this.$("performance-action-detail").textContent=(i==null?void 0:i.description)??"\u4ECE\u83DC\u5355\u9009\u4E00\u4E2A\u52A8\u4F5C\uFF0C\u518D\u70B9\u5DE6\u8FB9\u7684\u7A7A\u6B65\u9AA4\u7EE7\u7EED\u6DFB\u52A0\u3002",this.$("performance-action-chain").textContent=i?this.chainLabel(i.links):"\u5355\u6B65\u9884\u89C8\u81EA\u7136\u6536\u56DE \xB7 \u8FDE\u7EED\u6F14\u51FA\u7ED3\u675F\u624D\u6536\u56DE",this.taskButtons.forEach(f=>{f.setAttribute("aria-pressed",String(f.dataset.task===e.task.id)),f.disabled=r}),this.stepButtons.forEach((f,g)=>{f.hidden=g>=e.task.slots,f.disabled=r||g>e.steps.length,f.setAttribute("aria-pressed",String(!r&&g===e.selected));let _=e.steps[g]?Pn(e.steps[g]).title:"\uFF0B \u6DFB\u52A0\u52A8\u4F5C";f.querySelector("b").textContent=_,f.title=e.sceneCue(g)+" / "+_,f.setAttribute("aria-label","\u7B2C "+(g+1)+" \u6B65\uFF1A"+_),r||(f.dataset.playing="false")});for(let f of["calm","lively"]){let g=this.$("performance-tempo-"+f);g.setAttribute("aria-pressed",String(e.tempo===f)),g.disabled=r}this.$("performance-step-up").disabled=r||!i||e.selected===0,this.$("performance-step-down").disabled=r||!i||e.selected>=e.steps.length-1,this.$("performance-step-remove").disabled=r||!i,this.$("performance-preview").disabled=r||!i;let h=this.$("performance-play");h.disabled=!e.canPlay,h.hidden=r,h.textContent=o?"\u518D\u6F14\u4E00\u904D \u2197":e.usingScript?"\u64AD\u653E\u4E3B\u9898\u8868\u6F14 \u2197":"\u64AD\u653E\u6574\u5957\u8868\u6F14 \u2197";let d=this.$("performance-pause");d.hidden=!r,d.textContent=e.status==="paused"?"\u7EE7\u7EED\u8868\u6F14":"\u6682\u505C",this.$("performance-stop").hidden=!r,r||(this.lastPlayback="",this.playbackStep=null,this.progress.value=o?100:0,this.$("performance-now-label").textContent=o?"\u6F14\u51FA\u5B8C\u6210 / \u6362\u4E2A\u4E3B\u9898\u6216\u6539\u7F16\u4E00\u6BB5":"03 / "+(e.canPlay?e.usingScript?"\u51C6\u5907\u5F00\u6F14 \xB7 "+e.script.title:"\u51C6\u5907\u5F00\u6F14":"\u8FD8\u5DEE "+(e.task.slots-e.steps.length)+" \u6B65")),this.$("performance-status").textContent=o?o.advice:r?e.status==="paused"?"\u5DF2\u6682\u505C\uFF0C\u70B9\u51FB\u7EE7\u7EED\u4ECE\u5F53\u524D\u59FF\u6001\u63A5\u7740\u6F14\u3002":e.status==="preview"?"\u7559\u610F\u6574\u6761\u8FD0\u52A8\u94FE\u600E\u6837\u914D\u5408\uFF0C\u9884\u89C8\u7ED3\u675F\u540E\u4F1A\u81EA\u7136\u6536\u56DE\u3002":"\u52A8\u4F5C\u4E4B\u95F4\u76F4\u63A5\u8854\u63A5\uFF0C\u6574\u5957\u7ED3\u675F\u7EDF\u4E00\u6536\u56DE\u3002\u62D6\u7A7A\u767D\u5904\u4ECD\u53EF\u65CB\u8F6C\u89C6\u89D2\u3002":e.usingScript?"\u5267\u672C\u5DF2\u6392\u597D\uFF0C\u70B9\u64AD\u653E\u5F00\u59CB\uFF1B\u4E5F\u53EF\u9009\u4E2D\u4E00\u6BB5\u66FF\u6362\u52A8\u4F5C\uFF0C\u7F16\u51FA\u4F60\u7684\u7248\u672C\u3002":i?e.canPlay?"\u4F60\u7684\u7F16\u6392\u5DF2\u51C6\u5907\u597D\uFF01\u53EF\u4EE5\u5148\u9884\u89C8\u5355\u6B65\uFF0C\u518D\u64AD\u653E\u6574\u5957\u5E76\u9886\u53D6\u4EFB\u52A1\u8BC4\u4EF7\u3002":"\u7B2C "+(e.selected+1)+" \u6B65\u5DF2\u9009\u597D\uFF0C\u70B9\u51FB\u5DE6\u8FB9\u4E0B\u4E00\u4E2A\u7A7A\u6B65\u9AA4\u7EE7\u7EED\u3002":"\u70B9\u9009\u4E00\u4E2A\u6B65\u9AA4\uFF0C\u518D\u4ECE\u52A8\u4F5C\u83DC\u5355\u6311\u9009\u3002\u6BCF\u4E00\u6B65\u90FD\u7531\u4F60\u51B3\u5B9A\u3002",this.$("performance-result").hidden=!o,this.$("performance-score-wrap").hidden=!o||o.score===null,this.$("performance-score").textContent=(o==null?void 0:o.score)==null?"\u2014":String(o.score),this.$("performance-result-title").textContent=(o==null?void 0:o.title)??"",this.$("performance-stars").textContent=o?"\u2605".repeat(o.stars)+"\u2606".repeat(3-o.stars):"\u2606\u2606\u2606",this.$("performance-stars").hidden=!!(o&&e.usingScript),this.$("performance-stars").setAttribute("aria-label","\u83B7\u5F97 "+((o==null?void 0:o.stars)??0)+" \u9897\u4EFB\u52A1\u661F\u661F")}chainLabel(e){let t=[];return e.some(n=>n.startsWith("left_")&&/shoulder|elbow|wrist/.test(n))&&t.push("\u5DE6\u81C2"),e.some(n=>n.startsWith("right_")&&/shoulder|elbow|wrist/.test(n))&&t.push("\u53F3\u81C2"),e.some(n=>n.startsWith("left_")&&/hip|knee|ankle/.test(n))&&t.push("\u5DE6\u817F"),e.some(n=>n.startsWith("right_")&&/hip|knee|ankle/.test(n))&&t.push("\u53F3\u817F"),e.includes("torso_link")&&t.push("\u8170\u90E8"),"\u8FD0\u52A8\u94FE / "+t.join(" + ")}dispose(){for(let e of this.events)e()}};var lf={pelvis:"\u9AA8\u76C6",left_hip_yaw_link:"\u5DE6\u5927\u817F",left_knee_link:"\u5DE6\u5C0F\u817F",left_ankle_pitch_link:"\u5DE6\u811A\u8E1D",left_ankle_roll_link:"\u5DE6\u811A",right_hip_yaw_link:"\u53F3\u5927\u817F",right_knee_link:"\u53F3\u5C0F\u817F",right_ankle_pitch_link:"\u53F3\u811A\u8E1D",right_ankle_roll_link:"\u53F3\u811A",torso_link:"\u8EAF\u5E72",head_link:"\u5934\u90E8",left_shoulder_pitch_link:"\u5DE6\u80A9",left_elbow_link:"\u5DE6\u8098",right_shoulder_pitch_link:"\u53F3\u80A9",right_elbow_link:"\u53F3\u8098"},wy={hip_pitch:"\u9ACB\u4FEF\u4EF0\u5173\u8282",hip_roll:"\u9ACB\u4FA7\u6446\u5173\u8282",hip_yaw:"\u9ACB\u65CB\u8F6C\u5173\u8282",knee:"\u819D\u5173\u8282",ankle_pitch:"\u8E1D\u4FEF\u4EF0\u5173\u8282",ankle_roll:"\u8E1D\u4FA7\u6446\u5173\u8282",shoulder_pitch:"\u80A9\u4FEF\u4EF0\u5173\u8282",shoulder_roll:"\u80A9\u4FA7\u6446\u5173\u8282",shoulder_yaw:"\u80A9\u65CB\u8F6C\u5173\u8282",elbow:"\u8098\u5173\u8282",wrist_roll:"\u8155\u6EDA\u8F6C\u5173\u8282",wrist_pitch:"\u8155\u4FEF\u4EF0\u5173\u8282",wrist_yaw:"\u8155\u65CB\u8F6C\u5173\u8282"};function Ty(s){if(lf[s])return lf[s];let e=/^(left|right)_(.+)_link$/.exec(s);return e?`${e[1]==="left"?"\u5DE6":"\u53F3"}${wy[e[2]]??"\u90E8\u4F4D"}`:s==="pelvis_contour_link"?"\u9AA8\u76C6\u5916\u58F3":"\u673A\u5668\u4EBA\u90E8\u4F4D"}function cf(s){let{model:e,camera:t,scene:n,viewer:i,canvas:r,onSelect:o}=s,a=s.config??va,l=a.discoveryChain,c=new Pa(l.joints.map(V=>V.name),a.fallDelaySeconds),u=new Map,h=V=>{let v=u.get(V);return v||(v=document.getElementById(V),u.set(V,v)),v},d=(V,v)=>{let R=h(V);R.textContent!==v&&(R.textContent=v)},f=Wd(e,s.records??[]),g=new Ca(e,[a.jointNames.movingFoot,a.jointNames.supportFoot].map(V=>f.links.get(V))),_=new ba(e,a),m=new Ta(e,f,_,a),p=new Ma(f),b=new Ra(n,0),x=h("knee-angle"),w=h("play-knee"),I=h("reset-knee"),P=h("select-knee"),C=h("knee-hotspot"),j=h("hint-knee"),E=h("highlight-link"),T=h("highlight-chain"),H=h("joint-select"),K=h("chain-preset"),le=h("replay-joint");for(let V of l.presets){let v=document.createElement("option");v.value=V.id,v.textContent=V.label,K.append(v)}K.value=l.presets[l.presets.length-1].id;for(let[V,v]of l.joints.entries()){let R=document.createElement("span");R.dataset.joint=v.name;let D=document.createElement("b");D.textContent=String(V+1).padStart(2,"0");let B=document.createElement("span");B.textContent=v.label,R.append(D,B),h("discovery-parts").append(R)}let N=a.partControls.filter(V=>_.joints.has(V.jointName));for(let V of N){let v=document.createElement("option");v.value=V.jointName,v.textContent=V.label,H.append(v)}let O=N.find(V=>V.jointName===a.targetJointName);H.value=O.jointName;let W=0,Y=!1,q=!1,X=0,Z=new S,se=new S,de=l.joints[0],z=null,$,me=!1,we=()=>O.jointName===a.targetJointName,be=matchMedia("(prefers-reduced-motion: reduce)");h("joint-controls").removeAttribute("inert");let ze=e.getObjectByName(a.targetJointName),Ee=!1,Te=!1,He=!1,k=NaN,Dt=-1/0,Me=0,Oe="",_e=!0,ot=0,G,M=new Ba,y,U,Q=!1,ee="";function ne(V=!1){var De,Le;let v=[c.phase,c.mode,c.fallen,c.experience,c.discovered.size,_.motionSource,Ee,G==null?void 0:G.active,G==null?void 0:G.state.taskIndex,G==null?void 0:G.state.status,y==null?void 0:y.active,M.status,M.task.id,M.steps.join(","),U==null?void 0:U.frame.actionId,U==null?void 0:U.frame.phase].join("|");if(!V&&v===ee)return;ee=v;let R=h("discovery-game");R.dataset.phase=c.phase,i.dataset.mode=c.mode,i.dataset.fallen=String(c.fallen),document.body.dataset.experience=c.experience,i.dataset.motion=_.motionSource;let D=c.experience==="observe",B=D||c.unlocked,F=(G==null?void 0:G.active)??!1,re=(y==null?void 0:y.active)??!1;document.body.dataset.training=String(F),document.body.dataset.performance=String(re),d("gesture-copy",re?"\u62D6\u7A7A\u767D\u8F6C\u89C6\u89D2 \xB7 \u53CC\u6307\u7F29\u653E":"\u62D6\u90E8\u4F4D\u6446\u59FF\u52BF \xB7 \u62D6\u7A7A\u767D\u8F6C\u89C6\u89D2"),h("analysis-details").querySelector("summary>span").textContent=re?"\u652F\u6491 / \u6709\u9650\u78B0\u649E":"\u652F\u6491 / \u78B0\u649E / \u8303\u56F4",h("mode-observe").setAttribute("aria-pressed",String(D)),h("mode-challenge").setAttribute("aria-pressed",String(!D)),R.hidden=D||F||re,h("observe-guide").hidden=!D||re,h("pose-game").hidden=!F,h("training-controls").hidden=!F,h("performance-game").hidden=!re,F||(h("training-legend").hidden=!0,h("training-drag-cue").hidden=!0),h("joint-controls").hidden=F||re,F||(h("training-result").hidden=!0),h("discovery-progress").textContent=`${c.discovered.size} / ${l.joints.length}`;for(let nt of h("discovery-parts").children){let Ut=nt;Ut.dataset.found=String(c.discovered.has(Ut.dataset.joint))}let ve={scan:["01 \xB7 \u627E\u5230\u72EC\u7ACB\u81EA\u7531\u5EA6","\u5728\u6A21\u578B\u4E0A\u70B9\u51FB\u5DE6\u9ACB\u3001\u5DE6\u819D\u3001\u5DE6\u8E1D\uFF0C\u770B\u770B\u6BCF\u4E2A\u90E8\u4F4D\u80FD\u600E\u6837\u52A8\u3002"],unlocked:["02 \xB7 \u770B\u5B83\u4EEC\u4E00\u8D77\u914D\u5408","\u5DE6\u817F\u8FD0\u52A8\u94FE\u5DF2\u89E3\u9501\uFF01\u70B9\u51FB\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\uFF0C\u89C2\u5BDF\u9ACB\u3001\u819D\u3001\u8E1D\u5982\u4F55\u914D\u5408\u3002"],challenge:["03 \xB7 \u8BD5\u8BD5\u5931\u8861\u7684\u8FB9\u754C","\u5355\u72EC\u62D6\u52A8\u5DE6\u9ACB\u5411\u524D\u6446\uFF0C\u89C2\u5BDF\u8D28\u5FC3\u3002\u8D8A\u754C\u6301\u7EED\u534A\u79D2\u4F1A\u5931\u53BB\u5E73\u8861\uFF0C\u590D\u4F4D\u5373\u53EF\u91CD\u8BD5\u3002"],complete:["\u63A2\u7D22\u5B8C\u6210 \xB7 \u4F60\u53D1\u73B0\u4E86\u534F\u540C\u7684\u610F\u4E49","\u540C\u4E00\u4E2A\u81EA\u7531\u5EA6\uFF0C\u5355\u72EC\u52A8\u548C\u914D\u5408\u52A8\u4F1A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u590D\u4F4D\u540E\u53EF\u4EE5\u7EE7\u7EED\u6BD4\u8F83\u3002"]},[Ae,Ce]=ve[c.phase];h("game-stage").textContent=Ae,h("game-instruction").textContent=Ce,h("chain-progress").textContent=c.unlocked?"\u5DE6\u817F\u8FD0\u52A8\u94FE \xB7 \u5DF2\u89E3\u9501 \u2713":"\u5DE6\u817F\u8FD0\u52A8\u94FE \xB7 \u5F85\u89E3\u9501",h("interaction-mode").textContent=c.mode==="chain"?"\u8FD0\u52A8\u94FE\u6F14\u793A":_.motionSource==="teaching"?"\u72EC\u7ACB\u52A8\u4F5C\u6F14\u793A":"\u5355\u5173\u8282\u89C2\u5BDF";for(let nt of document.querySelectorAll(".game-route [data-step]"))nt.dataset.active=String(nt.dataset.step===(c.phase==="complete"?"challenge":c.phase));let Fe=c.phase==="scan"?1:c.phase==="unlocked"?2:3;if(h("stage-step").textContent=D?"\u81EA\u7531\u89C2\u5BDF \xB7 \u70B9\u9009\u4EFB\u610F\u90E8\u4F4D":`\u53D1\u73B0\u6311\u6218 \xB7 0${Fe} / 03`,h("stage-instruction").textContent=D?"\u4E00\u4E2A\u81EA\u7531\u5EA6\uFF0C\u4F1A\u5E26\u6765\u600E\u6837\u7684\u52A8\u4F5C\uFF1F":c.phase==="scan"?"\u70B9\u4E00\u70B9\u5DE6\u817F\uFF0C\u53D1\u73B0\u5B83\u7684\u72EC\u7ACB\u52A8\u4F5C":c.phase==="unlocked"?"\u81EA\u7531\u5EA6\u627E\u9F50\u4E86\uFF0C\u770B\u5B83\u4EEC\u4E00\u8D77\u914D\u5408":c.phase==="challenge"?"\u8BD5\u7740\u6446\u52A8\u5DE6\u9ACB\uFF0C\u89C2\u5BDF\u5931\u8861\u8FB9\u754C":"\u4F60\u53D1\u73B0\u4E86\uFF1A\u52A8\u4F5C\u9700\u8981\u76F8\u4E92\u914D\u5408",h("stage-task-detail").textContent=_.motionSource==="teaching"?"\u6B63\u5728\u6F14\u793A\u72EC\u7ACB\u52A8\u4F5C \xB7 \u968F\u540E\u56DE\u5230\u539F\u59FF\u6001":c.mode==="chain"?"\u9ACB\u2014\u819D\u2014\u8E1D\u6B63\u5728\u914D\u5408 \xB7 \u5BF9\u4FA7\u817F\u53C2\u4E0E\u652F\u6491":D?"\u70B9\u9009\u90E8\u4F4D\u770B\u52A8\u4F5C\uFF0C\u6309\u4F4F\u90E8\u4F4D\u53EF\u62D6\u52A8":c.phase==="scan"?`\u5DF2\u53D1\u73B0 ${c.discovered.size} / ${l.joints.length} \u4E2A\u6848\u4F8B \xB7 \u6BCF\u70B9\u4E2D\u4E00\u5904\uFF0CG1 \u90FD\u4F1A\u52A8\u7ED9\u4F60\u770B`:c.phase==="unlocked"?"\u70B9\u51FB\u4E0B\u65B9\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\uFF0C\u6BD4\u8F83\u72EC\u7ACB\u4E0E\u534F\u540C":c.phase==="challenge"?"\u4E3B\u52A8\u62D6\u52A8\u8D8A\u754C\u534A\u79D2\u4F1A\u503E\u659C \xB7 \u590D\u4F4D\u5373\u53EF\u518D\u8BD5":"\u590D\u4F4D\u4FDD\u7559\u8FDB\u5EA6\uFF0C\u91CD\u65B0\u63A2\u7D22\u53EF\u4ECE\u5934\u518D\u6765",F&&(h("stage-step").textContent=`\u52A8\u4F5C\u8BAD\u7EC3 \xB7 ${String(G.state.taskIndex+1).padStart(2,"0")} / ${Cn.length}`,h("stage-instruction").textContent=G.state.task.title,h("stage-task-detail").textContent=G.state.status==="preview"?"\u5148\u89C2\u5BDF\u5404\u4E2A\u90E8\u4F4D\u5982\u4F55\u914D\u5408 \xB7 \u793A\u8303\u4E0D\u8BA1\u5206":G.state.status==="complete"?"\u52A8\u4F5C\u8FBE\u6210\uFF01\u6311\u6218\u4E0B\u4E00\u5173\uFF0C\u6216\u91CD\u7EC3\u5237\u65B0\u7EAA\u5F55":G.state.status==="review"?"\u6210\u7EE9\u5DF2\u63ED\u6653 \xB7 \u7EE7\u7EED\u8C03\u6574\u6216\u6362\u4E2A\u52A8\u4F5C":G.state.status==="playing"?"\u4EB2\u624B\u62D6\u52A8\u5BF9\u5E94\u80A2\u4F53 \xB7 \u6446\u597D\u540E\u70B9\u51FB\u63D0\u4EA4":"\u5148\u770B\u52A8\u4F5C\uFF0C\u518D\u81EA\u5DF1\u8BD5 \xB7 \u9700\u8981\u65F6\u53EF\u70B9\u63D0\u793A"),re){let nt=U==null?void 0:U.frame;h("stage-step").textContent=(M.script?"\u4E3B\u9898\u5267\u573A \xB7 ":"\u52A8\u4F5C\u7F16\u6392 \xB7 ")+M.task.title.split(" / ")[1],h("stage-instruction").textContent=nt?nt.phase==="closing"?"\u6F14\u51FA\u8C22\u5E55\uFF0C\u56DE\u5230\u7AD9\u59FF":Q?Pn(nt.actionId).title:M.script?M.sceneCue(nt.actionIndex):Pn(nt.actionId).title:((De=M.result)==null?void 0:De.title)??((Le=M.script)==null?void 0:Le.title)??"\u628A\u51E0\u4E2A\u52A8\u4F5C\uFF0C\u8FDE\u6210\u4E00\u573A\u8868\u6F14",h("stage-task-detail").textContent=M.status==="paused"?"\u5DF2\u6682\u505C \xB7 \u4ECE\u5F53\u524D\u59FF\u6001\u7EE7\u7EED":nt?"\u5F53\u524D\u8FD0\u52A8\u94FE\u5DF2\u70B9\u4EAE \xB7 \u62D6\u7A7A\u767D\u5904\u65CB\u8F6C\u89C2\u5BDF":M.status==="result"?M.usingScript?"\u8FD8\u60F3\u6F14\u70B9\u4EC0\u4E48\uFF1F\u6362\u4E2A\u4E3B\u9898\uFF0C\u6216\u66FF\u6362\u4E00\u6BB5\u52A8\u4F5C\u3002":"\u4EFB\u52A1\u5206\u8BC4\u4EF7\u7EC4\u5408\u4E0E\u987A\u5E8F\uFF0C\u4E0D\u662F\u52A8\u4F5C\u5B89\u5168\u8BA4\u8BC1":M.usingScript?"\u5267\u672C\u5DF2\u51C6\u5907\u597D \xB7 \u70B9\u51FB\u64AD\u653E\uFF0C\u6B23\u8D4F\u5B8C\u6574\u8868\u6F14":"\u70B9\u9009\u6B65\u9AA4\uFF0C\u66FF\u6362\u52A8\u4F5C\uFF0C\u7F16\u51FA\u81EA\u5DF1\u7684\u7248\u672C",ge.visible=!1}w.disabled=!B||c.fallen||re,le.disabled=!Ee||c.fallen||c.mode==="chain",K.disabled=!B||c.fallen||c.mode==="chain",w.textContent=c.mode==="chain"?"\u505C\u6B62\u6F14\u793A":B?"\u6F14\u793A\u6574\u6761\u94FE":`\u627E\u5230 ${l.joints.length-c.discovered.size} \u5904\u540E\u89E3\u9501`,w.setAttribute("aria-pressed",String(c.mode==="chain")),x.disabled=c.fallen||!Ee||re,H.disabled=c.fallen||re,T.disabled=!Ee||c.fallen,h("fall-notice").hidden=!c.fallen}let ye=V=>`${Math.round(V)}\xB0`,ce=V=>V.min>V.max?"\u65E0\u8FDE\u7EED\u53C2\u8003\u533A\u95F4":`${ye(V.min)} \u81F3 ${ye(V.max)}`,he=_.joints.get(a.targetJointName);x.min=String(he.lower),x.max=String(he.upper),x.step="any",h("lower-limit").textContent=ye(he.lower),h("upper-limit").textContent=ye(he.upper),h("range-mechanical").textContent=ce({min:he.lower,max:he.upper}),h("range-support").textContent=ce(m.scan.support),h("range-collision").textContent=ce(m.scan.combined),h("range-combined").textContent=ce({min:he.lower,max:he.upper});let ge=new qt;ge.name="knee_angle_guide",ge.position.copy(ze.position),ge.quaternion.copy(_.joints.get(a.targetJointName).base),ge.visible=!1,ze.parent.add(ge);let We=.13,J=.025,Qe=We,Ke=new S(0,-1,0),Ie=new S(0,0,-.082),Re=_.joints.get(a.targetJointName).axis,fe=(V,v=Qe)=>Ke.clone().applyAxisAngle(Re,Ze.degToRad(V)).multiplyScalar(v).add(Ie),A=Array.from({length:81},(V,v)=>fe(he.lower+(he.upper-he.lower)*v/80)),ie=new an(new mt().setFromPoints(A),new Vs({color:4747869,dashSize:.009,gapSize:.006,transparent:!0,opacity:.6,depthTest:!0,depthWrite:!1}));ie.computeLineDistances(),ge.add(ie);let Se=new an(new mt().setFromPoints([Ie,fe(0,Qe+J)]),new On({color:1535065,depthTest:!0,depthWrite:!1}));ge.add(Se);let xe=new an(new mt().setFromPoints([Ie,fe(0,Qe+J)]),new On({color:11560247,depthTest:!0,depthWrite:!1}));ge.add(xe);let te=new Float32Array(432),L=new mt;L.setAttribute("position",new Lt(te,3)),ge.add(new Ye(L,new wt({color:1535065,transparent:!0,opacity:.14,side:Ht,depthTest:!0,depthWrite:!1})));let oe=new Ye(new na(.027,.003,8,36),new wt({color:1535065,depthTest:!0,depthWrite:!1}));oe.position.copy(Ie),ge.add(oe);let pe=new Ye(new Ei(.005,8,8),new wt({color:11560247,depthTest:!0,depthWrite:!1}));ge.add(pe),ge.traverse(V=>{V.renderOrder=8});let Ne=V=>{var v;if(!c.fallen){if(V.control){if(dt(V.control),G!=null&&G.active){Ve("\u9009\u4E2D\u81EA\u7531\u5EA6\u540E\uFF0C\u6309\u4F4F\u5BF9\u5E94\u80A2\u4F53\u62D6\u52A8\u3002\u6446\u597D\u540E\u518D\u63D0\u4EA4\u8BC4\u5206\u3002"),Xe();return}let R=c.discover(V.control.jointName);R.unlockedNow?(h("discovery-game").classList.remove("is-unlocking"),h("discovery-game").offsetWidth,h("discovery-game").classList.add("is-unlocking"),Ve("\u4E09\u4E2A\u72EC\u7ACB\u81EA\u7531\u5EA6\u627E\u9F50\u4E86\uFF01\u8FD0\u52A8\u94FE\u5DF2\u89E3\u9501\uFF0C\u8BD5\u8BD5\u201C\u6F14\u793A\u6574\u6761\u94FE\u201D\u3002")):R.added&&Ve(`\u53D1\u73B0\u4E86${V.control.label}\uFF01\u518D\u627E\u627E\u53E6\u5916\u7684\u90E8\u4F4D\u3002`),tt(R.added);let D=((v=l.joints.find(B=>B.name===O.jointName))==null?void 0:v.link)??V.linkName;o(f.links.get(D).getWorldPosition(new S),O.jointName),ne();return}Ve(V.linkName==="head_link"?"\u8FD9\u7248 G1 \u5934\u90E8\u56FA\u5B9A\uFF0C\u6CA1\u6709\u72EC\u7ACB\u9888\u5173\u8282\u3002\u8BD5\u7740\u62D6\u52A8\u8EAF\u5E72\uFF0C\u6216\u9009\u62E9\u8170\u90E8\u8F6C\u52A8\u3002":`\u4F60\u70B9\u5230${Ty(V.linkName)}\u4E86\u3002\u8BD5\u8BD5\u5DE6\u811A\u3001\u8170\u90E8\u6216\u53CC\u81C2\uFF1B\u62D6\u52A8\u7A7A\u767D\u5904\u53EF\u4EE5\u65CB\u8F6C\u89C6\u89D2\u3002`)}},Pe=new Ea(r,t,f,a,Ne,{direction:V=>G!=null&&G.active?Ua(_,t,V.control.jointName,V.control.dragAxis):new ae(V.control.dragAxis==="x"?1:0,V.control.dragAxis==="y"?-1:0),resolveControl:(V,v)=>G!=null&&G.active?G.resolveControl(V,v):v,enabled:()=>!c.fallen&&!(y!=null&&y.active)&&(!(G!=null&&G.active)||G.state.status==="playing"),onCaptureChange:V=>{V&&(g.clearTransform(),c.mode==="chain"&&_.pause(),c.cancelChain(),He=!1,_e=!0,Xe()),s.onGestureCapture(V)},onStart:V=>{g.clearTransform(),G!=null&&G.active||_.pause(),dt(V.control),W=_.getAngle(O.jointName),q=!0,i.dataset.dragging="true"},onMove:(V,v)=>ss(W+v),onEnd:()=>{q=!1,delete i.dataset.dragging,_e=!0}});function Ve(V){Oe=V,Me=performance.now()+2200,h("joint-status").textContent=V}function tt(V=!1){_.demonstrateJoint(O.jointName),c.update(0,!1,"teaching");let v={left_hip_pitch_joint:"\u9ACB\u8BA9\u6574\u6761\u817F\u524D\u540E\u6446\u52A8",left_knee_joint:"\u819D\u5F2F\u66F2\uFF0C\u5C0F\u817F\u8DDF\u7740\u8FD0\u52A8",left_ankle_pitch_joint:"\u8E1D\u8F6C\u52A8\uFF0C\u6539\u53D8\u811A\u638C\u7684\u671D\u5411"};h("feedback-kicker").textContent=V?"\u53D1\u73B0\u4E00\u4E2A\u81EA\u7531\u5EA6":c.experience==="observe"?"\u72EC\u7ACB\u52A8\u4F5C\u89C2\u5BDF":"\u518D\u770B\u4E00\u6B21\u72EC\u7ACB\u52A8\u4F5C",h("feedback-part").textContent=O.label,h("feedback-description").textContent=v[O.jointName]??"\u89C2\u5BDF\u8FD9\u4E2A\u8F6C\u8F74\u5982\u4F55\u5E26\u52A8\u4E0B\u6E38\u90E8\u4EF6";let R=h("discovery-feedback");R.hidden=!1,R.classList.remove("is-entering"),R.offsetWidth,R.classList.add("is-entering"),ot=performance.now()+2400,_e=!0,Jt(!0),Xe()}function dt(V){if(c.fallen)return;g.clearTransform(),_.motionSource!=="teaching"&&!(G!=null&&G.active)&&_.pause(),c.cancelChain(),He=!1,z=null,O=V,H.value=V.jointName,G!=null&&G.active&&G.setSelected(V.jointName);let v=_.joints.get(V.jointName),R=_.getInteractionRange(V.jointName);x.min=String(R.min),x.max=String(R.max),h("lower-limit").textContent=ye(R.min),h("upper-limit").textContent=ye(R.max),h("range-mode").textContent=`${a.interactionLimits[V.jointName]?"\u4EA4\u4E92\u9650\u4F4D":"\u673A\u68B0\u9650\u4F4D"} \xB7 \u96F6\u4F4D 0\xB0`,h("range-mechanical").textContent=ce({min:v.lower,max:v.upper}),h("range-combined").textContent=ce(R),h("caption-label").textContent=`${V.label} \xB7 \u6A21\u578B\u89D2\u5EA6`,h("active-part-label").textContent=V.label,E.textContent="\u5F53\u524D\u90E8\u4F4D",E.setAttribute("aria-pressed","true"),T.setAttribute("aria-pressed","false"),vt(),Ve(`${V.label}\u5DF2\u9009\u4E2D\u3002${V.dragAxis==="y"?"\u4E0A\u4E0B":"\u5DE6\u53F3"}\u62D6\u52A8\u90E8\u4F4D\uFF0C\u6216\u7528\u6ED1\u5757\u8C03\u6574\u3002`)}function vt(){g.clearTransform(),Ee=!0,h("safety-panel").closest(".observation-panel").classList.add("is-teaching"),ge.visible=we(),h("joint-caption").removeAttribute("hidden"),h("safety-panel").removeAttribute("hidden"),P.setAttribute("aria-pressed","true"),P.innerHTML='\u9000\u51FA\u6446\u59FF <span aria-hidden="true">\xD7</span>',[x,w,I,E,T].forEach(V=>V.disabled=!1),j.hidden=!1,C.classList.add("is-active"),ne(!0),_e=!0,k=NaN,Xe(),Jt(!0)}function it(){g.clearTransform(),Y=!1,z=null,me=!1,i.dataset.warning="normal",h("imbalance-edge").hidden=!0,h("pose-warning").hidden=!0,Ee=!1,Te=!1,Me=0,_.reset(),c.resetPose(),X=0,p.clear(),ge.visible=!1,b.clear(),h("safety-panel").closest(".observation-panel").classList.remove("is-teaching"),h("joint-caption").setAttribute("hidden",""),h("safety-panel").setAttribute("hidden",""),P.setAttribute("aria-pressed","false"),P.innerHTML='\u5F00\u59CB\u63A2\u7D22 <span aria-hidden="true">\u2197</span>',[x,w,I,E,T].forEach(V=>V.disabled=!0),j.hidden=!1,C.classList.remove("is-active"),Xe()}function Xe(){let V=_.getAngle(O.jointName),v=_.joints.get(O.jointName),R=String(_.getRequestedAngle(O.jointName)),D=ye(V);if(x.value!==R&&(x.value=R),x.getAttribute("aria-valuetext")!==D&&x.setAttribute("aria-valuetext",D),d("angle-value",D),d("stage-angle",D),d("chain-readout",`\u5DE6\u9ACB ${ye(_.getAngle(a.jointNames.leftHipPitch))} \xB7 \u5DE6\u819D ${ye(_.getAngle(a.jointNames.leftKnee))} \xB7 \u5DE6\u8E1D ${ye(_.getAngle(a.jointNames.leftAnklePitch))} \xB7 \u9AA8\u76C6 \u2193${(_.pelvisDrop*100).toFixed(1)} cm`),ne(),c.fallen){d("joint-status","\u5931\u53BB\u5E73\u8861\uFF01\u70B9\u51FB\u201C\u5168\u8EAB\u590D\u4F4D\u201D\u540E\u53EF\u4EE5\u7EE7\u7EED\u3002");return}if(performance.now()<Me){d("joint-status",Oe);return}if(_.motionSource==="teaching"){d("joint-status","\u72EC\u7ACB\u52A8\u4F5C\u6F14\u793A\uFF1A\u7F13\u6162\u8F6C\u52A8\u3001\u7A0D\u4F5C\u505C\u7559\uFF0C\u518D\u56DE\u5230\u539F\u59FF\u6001\u3002");return}Ee?m.last.balance.state==="outside"?d("joint-status",c.experience==="observe"?"\u8D28\u5FC3\u5728\u7B80\u5316\u652F\u6491\u8303\u56F4\u5916\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u89C2\u5BDF\u6216\u590D\u4F4D\u3002":"\u5931\u8861\u4E86\uFF01\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C\uFF0C\u8BA9\u8D28\u5FC3\u56DE\u5230\u652F\u6491\u8303\u56F4\u3002"):z?d("joint-status",`${O.label}\u5DF2\u5230\u4EA4\u4E92${z}\uFF0C\u8BD5\u7740\u6362\u4E2A\u65B9\u5411\u3002`):m.last.overlapCollision?d("joint-status",`${m.last.overlapCollision.label}\u4EE3\u7406\u76D2\u91CD\u53E0\u3002\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C\u3002`):V>=v.upper-.01?d("joint-status","\u5DF2\u5230 URDF \u6A21\u578B\u673A\u68B0\u4E0A\u9650\u3002"):V<=v.lower+.01?d("joint-status","\u5DF2\u5230 URDF \u6A21\u578B\u673A\u68B0\u4E0B\u9650\u3002"):c.mode==="chain"?d("joint-status","\u9ACB\u2014\u819D\u2014\u8E1D\u6B63\u5728\u914D\u5408\uFF0C\u5BF9\u4FA7\u817F\u652F\u6491\u3002\u62D6\u52A8\u53EF\u5207\u56DE\u5355\u5173\u8282\u3002"):Math.abs(V)<.01?d("joint-status","\u5DF2\u6062\u590D\u6A21\u578B\u96F6\u4F4D\u3002"):d("joint-status","\u62D6\u90E8\u4F4D\u6446\u59FF\u52BF\uFF0C\u62D6\u7A7A\u767D\u8F6C\u89C6\u89D2\uFF1B\u8B66\u544A\u4E0D\u4F1A\u62E6\u4F4F\u4F60\u3002"):d("joint-status","\u62D6\u52A8\u5DE6\u811A\u3001\u8170\u90E8\u6216\u624B\u81C2\uFF0C\u8BD5\u7740\u7ED9 G1 \u6446\u4E2A\u59FF\u52BF\u3002")}function hn(V){ge.updateWorldMatrix(!0,!1);let v=nf(ge.matrixWorld,Ie,Re,We+J,0,.018);Qe=Math.max(0,v-J),ge.visible=Ee&&we()&&Qe>.03&&!(y!=null&&y.active);for(let R=0;R<81;R++)ie.geometry.attributes.position.setXYZ(R,...fe(he.lower+(he.upper-he.lower)*R/80).toArray());ie.geometry.attributes.position.needsUpdate=!0,ie.computeLineDistances(),Se.geometry.attributes.position.setXYZ(1,...fe(0,Qe+J).toArray()),Se.geometry.attributes.position.needsUpdate=!0,xe.geometry.attributes.position.setXYZ(1,...fe(V,Qe+J).toArray()),xe.geometry.attributes.position.needsUpdate=!0,pe.position.copy(fe(V,Qe+J));for(let R=0;R<48;R++){let D=fe(V*R/48),B=fe(V*(R+1)/48);te.set([...Ie.toArray(),...D.toArray(),...B.toArray()],R*9)}L.attributes.position.needsUpdate=!0}function Jt(V=!1){var Ft,zn,as;let v=performance.now();if(!V&&v-Dt<a.safety.updateIntervalSeconds*1e3)return;Dt=v,g.clearTransform();let R=m.evaluate();Y=R.balance.state==="outside";let D=_.motionSource==="teaching",B=!!(y!=null&&y.active);i.dataset.warning=D?"teaching":R.severity,h("imbalance-edge").hidden=D||R.severity!=="danger"||!!(G!=null&&G.active&&!R.overlapCollision);let F=h("pose-warning"),re=R.collisions.filter(Ge=>Ge.state!=="clear"),ve=re.filter(Ge=>Ge.state==="overlap");if(me=!D&&R.severity!=="normal"||z!==null,$=void 0,F.dataset.state=R.severity==="danger"?"danger":"caution",ve.length){$=oh(ve,f,O.jointName);let Ge=ve.find(fn=>fn.first===$||fn.second===$);d("pose-warning",`${Ge.label}\u53EF\u80FD\u76F8\u78B0\uFF0C\u8BD5\u7740\u6536\u56DE\u52A8\u4F5C`)}else if(z)$=(Ft=f.jointToLink.get(O.jointName))==null?void 0:Ft.name,d("pose-warning",`${O.label}\u5DF2\u5230\u4EA4\u4E92${z}`);else if(Y)d("pose-warning",B?"\u652F\u6491\u6295\u5F71\u8D8A\u754C \xB7 \u7F16\u6392\u52A8\u4F5C\u4EC5\u4F5C\u6559\u5B66\u89C2\u5BDF":G!=null&&G.active?"\u652F\u6491\u6295\u5F71\u8D8A\u754C \xB7 \u672C\u5173\u53EA\u8BC4\u59FF\u6001\u5339\u914D":"\u5931\u8861\u4E86\uFF01\u8BD5\u7740\u628A\u52A8\u4F5C\u6536\u56DE\u6765");else if(re.length){$=oh(re,f,O.jointName);let Ge=re.find(fn=>fn.first===$||fn.second===$);d("pose-warning",`${Ge.label}\u63A5\u8FD1\uFF0C\u8BD5\u7740\u6362\u4E2A\u59FF\u52BF`)}else d("pose-warning","\u8D28\u5FC3\u63A5\u8FD1\u652F\u6491\u8FB9\u754C\uFF0C\u7EE7\u7EED\u8BD5\u8BD5\u770B");let Ae={balanced:["\u5E73\u8861","\u4F4D\u4E8E\u652F\u6491\u8303\u56F4\u5185"],near:["\u63A5\u8FD1\u8FB9\u754C","\u8D28\u5FC3\u9760\u8FD1\u652F\u6491\u8303\u56F4\u8FB9\u7F18"],outside:["\u5931\u8861\u8B66\u544A","\u8D28\u5FC3\u6295\u5F71\u8D85\u51FA\u7B80\u5316\u652F\u6491\u8303\u56F4"]},[Ce,Fe]=Ae[R.balance.state],De=h("balance-state");d("balance-state",D?"\u6559\u5B66\u52A8\u4F5C \xB7 \u4EC5\u89C2\u5BDF":Ce),De.dataset.state=R.balance.state,d("balance-detail",D?`\u5355\u8F74\u52A8\u4F5C\u53EF\u80FD\u6539\u53D8\u811A\u5E95\u63A5\u89E6\uFF0C\u652F\u6491\u4E3A\u51E0\u4F55\u8FD1\u4F3C\uFF1B\u672C\u6BB5\u4E0D\u89E6\u53D1\u503E\u5012\u3002${Fe}`:`${Fe} \xB7 ${R.supportMode==="double"?"\u53CC\u811A":R.supportMode==="single"?"\u5355\u811A":"\u672A\u63A5\u5730"} \xB7 \u652F\u6491\u8FD1\u4F3C${R.balance.approximate?" / \u8D28\u5FC3\u8FD1\u4F3C":""}`),h("analysis-details").dataset.state=D?"teaching":R.severity,d("com-coordinates",`CoM \u6295\u5F71 \xB7 X ${R.balance.projection.x.toFixed(2)} / Z ${R.balance.projection.z.toFixed(2)} m`);let Le=h("collision-status");Le.dataset.state=re.some(Ge=>Ge.state==="overlap")?"overlap":re.length?"near":"clear",d("collision-status",re.length?`\u63A5\u8FD1 / \u91CD\u53E0\uFF1A${re.map(Ge=>Ge.label).join("\u3001")}`:`${a.safety.collisionPairs.length} \u7EC4\u5173\u952E\u90E8\u4F4D\u672A\u53D1\u73B0\u63A5\u8FD1`);let nt=[...new Set(re.flatMap(Ge=>[Ge.first,Ge.second]))],Ut=((zn=l.joints.find(Ge=>Ge.name===O.jointName))==null?void 0:zn.link)??((as=f.jointToLink.get(O.jointName))==null?void 0:as.name)??a.targetLinkName,bt=G!=null&&G.active?[O].flatMap(Ge=>{var lr;let fn=(lr=f.jointToLink.get(Ge.jointName))==null?void 0:lr.name,ar=Ge.jointName.split("_")[0];return[fn,.../shoulder|elbow/.test(Ge.jointName)?[`${ar}_elbow_link`,`${ar}_wrist_pitch_link`,`${ar}_rubber_hand`]:[]].filter(pf=>!!pf)}):[],nn=B&&U?Pn(U.frame.actionId).links:[];B&&!U?p.clear():p.highlightChain(nn.length?nn:bt.length?bt:He?l.links:[Ut],nn[0]??Ut,3308134,nt),p.update(0,be.matches),b.update(R.balance,R.com,R.contactPlaneY);let at=[...R.balance.polygon,{x:R.com.x,z:R.com.z}],je=Math.min(...at.map(Ge=>Ge.x)),rs=Math.max(...at.map(Ge=>Ge.x)),Mt=Math.min(...at.map(Ge=>Ge.z)),kn=Math.max(...at.map(Ge=>Ge.z)),or=Math.min(154/Math.max(kn-Mt,.1),45/Math.max(rs-je,.1)),ui=Ge=>[90+(Ge.z-(Mt+kn)/2)*or,32-(Ge.x-(je+rs)/2)*or];h("balance-map-outline").setAttribute("d",R.balance.polygon.length<3?"":R.balance.polygon.map((Ge,fn)=>`${fn?"L":"M"}${ui(Ge).join(" ")}`).join(" ")+" Z");let os=ui(R.com);h("balance-map-point").setAttribute("cx",String(os[0])),h("balance-map-point").setAttribute("cy",String(os[1])),h("balance-map").dataset.state=R.balance.state,_e=!1,Xe()}P.addEventListener("click",()=>{Ee?it():dt(O)}),H.addEventListener("change",()=>{let V=N.find(v=>v.jointName===H.value);V&&dt(V)}),le.addEventListener("click",()=>{Ee&&!c.fallen&&tt()});for(let V of["observe","challenge"])h(`mode-${V}`).addEventListener("click",()=>{if(y==null||y.leave(),c.experience===V){G==null||G.leave();return}G==null||G.leave(),c.setExperience(V),un(),Te=!1,dt(O),h("discovery-feedback").hidden=!0,ot=0,Ve(V==="observe"?"\u81EA\u7531\u89C2\u5BDF\uFF1A\u70B9\u90E8\u4F4D\u770B\u72EC\u7ACB\u52A8\u4F5C\uFF0C\u6216\u76F4\u63A5\u6F14\u793A\u6574\u6761\u5DE6\u817F\u94FE\u3002":"\u53D1\u73B0\u6311\u6218\uFF1A\u70B9\u51FB\u5DE6\u9ACB\u3001\u5DE6\u819D\u3001\u5DE6\u8E1D\uFF0C\u6BCF\u627E\u5230\u4E00\u5904\u90FD\u4F1A\u7ACB\u5373\u6F14\u793A\u3002"),s.onChain(),Xe()});C.addEventListener("click",()=>{let V=N.find(v=>v.jointName===de.name);Ne({linkName:de.link,jointName:V.jointName,control:V,correct:V.jointName===a.targetJointName}),Te=!1}),j.addEventListener("click",()=>{de=l.joints.find(V=>!c.discovered.has(V.name))??l.joints[0],Te=!0,C.querySelector("span").textContent=de.label,C.setAttribute("aria-label",`\u9009\u4E2D\u6A21\u578B\u4E0A\u7684${de.label}`),o(f.links.get(de.link).getWorldPosition(new S),de.name),Ve(`\u7EFF\u8272\u6807\u8BB0\u6307\u5411\u5DE6${de.label}\uFF0C\u70B9\u51FB\u6A21\u578B\u6216\u6807\u8BB0\u8BD5\u8BD5\u770B\u3002`)}),E.addEventListener("click",()=>{He=!1,E.setAttribute("aria-pressed","true"),T.setAttribute("aria-pressed","false"),Jt(!0)}),T.addEventListener("click",()=>{He=!0,E.setAttribute("aria-pressed","false"),T.setAttribute("aria-pressed","true"),Jt(!0)});function ss(V){if(c.fallen)return;g.clearTransform(),c.cancelChain(),He=!1,Me=0,h("discovery-feedback").hidden=!0,ot=0,_.setControlledJoint(O.jointName,V),G!=null&&G.active&&G.markInput();let v=_.getInteractionRange(O.jointName);z=a.interactionLimits[O.jointName]?V<=v.min+.005?"\u4E0B\u9650":V>=v.max-.005?"\u4E0A\u9650":null:null,_e=!0,Xe(),hn(_.getAngle(a.targetJointName)),Jt()}x.addEventListener("input",()=>ss(Number(x.value))),x.addEventListener("keydown",V=>{let v=_.getRequestedAngle(O.jointName),R=_.getInteractionRange(O.jointName),D={ArrowLeft:v-1,ArrowDown:v-1,ArrowRight:v+1,ArrowUp:v+1,Home:R.min,End:R.max};V.key in D&&(V.preventDefault(),ss(D[V.key]))}),w.addEventListener("click",()=>{if(c.mode==="chain"){_.pause(),c.cancelChain(),He=!1,Xe(),Jt(!0);return}if(!c.beginChain())return;g.clearTransform(),He=!0,z=null,E.setAttribute("aria-pressed","false"),T.setAttribute("aria-pressed","true");let V=l.presets.find(v=>v.id===K.value);_.demonstrateChain(V.kneeDegrees),Ve("\u5148\u5E73\u6ED1\u56DE\u5230\u7AD9\u59FF\uFF0C\u518D\u770B\u9ACB\u3001\u819D\u3001\u8E1D\u4E00\u8D77\u914D\u5408\u3002"),Xe(),Jt(!0),s.onChain()});function un(){g.clearTransform(),z=null,Me=0,_.reset(),c.resetPose(),X=0,He=!1,h("discovery-feedback").hidden=!0,ot=0,Xe(),hn(0),Jt(!0)}I.addEventListener("click",un),h("recover-pose").addEventListener("click",un),h("restart-game").addEventListener("click",()=>{c.restart(),un()});let ir=()=>{document.hidden&&(G==null||G.suspend(),M.busy&&rr(),_.motionSource!=="teaching"&&_.pause(),c.cancelChain(),c.update(0,!1),Xe())};document.addEventListener("visibilitychange",ir);let dn=new S;function sr(V){let v=V?[M.steps[M.selected]]:M.steps;!v[0]||!M.begin(V)||(g.clearTransform(),_.pause(),Q=V,U=new ka(fh(v,M.tempo),_.getPerformancePose()),s.onPerformance(),y==null||y.update(),Xe())}function rr(){M.pause(),U==null||U.pause(),y==null||y.update(),Xe()}function ja(){M.resume(),U==null||U.resume(),y==null||y.update(),Xe()}function qr(){U=void 0,M.stop(),Q=!1,_.reset(),y==null||y.update(),Xe(),Jt(!0)}return G=new Oa({pose:_,scene:n,camera:t,viewer:i,controls:N,labels:Object.fromEntries(N.map(V=>[V.jointName,V.label])),onEnter:()=>{Te=!1,un(),vt(),s.onTraining()},onExit:()=>{un(),s.onChain()},onPoseReset:un,onChoose:V=>{let v=N.find(R=>R.jointName===V);v&&dt(v)},onMove:(V,v)=>{let R=N.find(D=>D.jointName===V);R&&(dt(R),ss(v))},onChanged:()=>{_e=!0,Xe(),Jt(!0)},conditions:()=>(Jt(!0),{blocked:!!m.last.overlapCollision,dragging:q})}),y=new za({game:M,onEnter:()=>{G==null||G.leave(),Te=!1,un(),vt(),ge.visible=!1,s.onPerformance()},onExit:()=>{it(),s.onChain()},onReset:()=>{qr(),un()},onPreview:()=>sr(!0),onPlay:()=>sr(!1),onPause:rr,onResume:ja,onStop:qr}),it(),{update(V,v){g.clearTransform();let R=_.motionSource,D=U?!1:_.update(V);U&&M.status!=="paused"&&(U.update(V),_.applyPerformancePose(U.angles),D=!0,y==null||y.playback(U.progress,Q?M.selected:U.frame.actionIndex,U.frame.phase==="closing",Q),U.finished&&(M.complete(),U=void 0,Q=!1,_.pause(),y==null||y.update())),D&&(_e=!0),G!=null&&G.active&&D&&_.maintainSupportAnchor(),R==="teaching"&&_.motionSource!=="teaching"&&(Jt(!0),Xe()),c.mode==="chain"&&!_.animating&&(c.finishChain(),He=!1,Ve(c.experience==="observe"?"\u94FE\u6761\u6F14\u793A\u5B8C\u6210\u3002\u70B9\u9009\u4E00\u4E2A\u90E8\u4F4D\uFF0C\u6BD4\u8F83\u72EC\u7ACB\u52A8\u4F5C\u4E0E\u76F8\u4E92\u914D\u5408\u7684\u533A\u522B\u3002":"\u94FE\u6761\u6F14\u793A\u5B8C\u6210\uFF01\u73B0\u5728\u5355\u72EC\u62D6\u52A8\u5DE6\u9ACB\uFF0C\u8BD5\u8BD5\u5931\u8861\u8FB9\u754C\u3002"),_e=!0,Xe());let B=_.getAngle(O.jointName);if(B!==k&&(k=B,Xe(),Ee&&we()&&hn(_.getAngle(a.targetJointName))),Me>0&&performance.now()>=Me&&(Me=0,Xe()),p.update(V,be.matches),Ee&&_e&&Jt(),G!=null&&G.active){let Ae=G.state.status;G.update(V,!!m.last.overlapCollision),Ae!==G.state.status&&Xe()}if(ot>0&&performance.now()>=ot&&(h("discovery-feedback").hidden=!0,ot=0),c.update(V,Ee&&Y&&!(G!=null&&G.active)&&!(y!=null&&y.active),R==="teaching"?"teaching":_.motionSource)){_.pause(),X=0;let{projection:Ae,polygon:Ce}=m.last.balance,Fe=new S,De=1/0;for(let Le=0;Le<Ce.length;Le++){let nt=new S(Ce[Le].x,0,Ce[Le].z),bt=new S(Ce[(Le+1)%Ce.length].x,0,Ce[(Le+1)%Ce.length].z).clone().sub(nt),nn=Ze.clamp(Ae.clone().sub(nt).dot(bt)/(bt.lengthSq()||1),0,1),at=nt.addScaledVector(bt,nn),je=at.distanceToSquared(Ae);je<De&&(De=je,Fe=at)}se.copy(Fe).setY(m.last.contactPlaneY),Z.copy(Ae).sub(Fe).setY(0).normalize(),Z.lengthSq()<1e-8&&Z.set(1,0,0),Xe()}Te&&((f.links.get(de.link)??ze).getWorldPosition(dn),dn.project(t));let F=!Te||c.fallen||dn.z>1||dn.z<-1||Math.abs(dn.x)>.94||Math.abs(dn.y)>.9;C.hidden!==F&&(C.hidden=F),C.hidden||(C.style.left=(dn.x*.5+.5)*i.clientWidth+"px",C.style.top=(-dn.y*.5+.5)*i.clientHeight+"px"),c.fallen?(X+=V,g.renderFall(Z,se,X/.65,be.matches)):g.render(v/1e3,Ee&&Y&&!q&&_.motionSource==="manual"&&c.experience==="challenge"&&!(G!=null&&G.active),be.matches),y==null||y.update(),y!=null&&y.active&&ne();let re=h("pose-warning"),ve=!Ee||!me||c.fallen;return re.hidden!==ve&&(re.hidden=ve),Ee||D||c.fallen},dispose(){document.removeEventListener("visibilitychange",ir),G==null||G.dispose(),y==null||y.dispose(),Pe.dispose(),p.clear(),b.dispose(),g.dispose(),ge.removeFromParent(),h("imbalance-edge").hidden=!0,h("pose-warning").hidden=!0,h("fall-notice").hidden=!0}}}var Ha=class{ratio=1;base=1;scale=1;warmup=2;seconds=0;frames=0;resize(e,t,n){let i=Math.max(1,e*t);return this.base=Math.min(1,Number.isFinite(n)&&n>0?n:1,Math.sqrt(1e6/i)),this.ratio=this.base*this.scale,this.resetSamples(),this.ratio}observe(e,t){if(!t||!Number.isFinite(e)||e<=0||e>.2)return this.resetSamples(),null;if(this.warmup>0)return this.warmup-=e,null;if(this.seconds+=e,this.frames++,this.seconds<1.5||this.frames<30)return null;let n=this.seconds/this.frames;return this.seconds=0,this.frames=0,n<=.027||this.scale<=.65?null:(this.scale=Math.max(.65,this.scale*.85),this.ratio=this.base*this.scale,this.ratio)}resetSamples(){this.warmup=2,this.seconds=0,this.frames=0}};var Va=class{constructor(e,t){this.canvas=e;this.controls=t;this.document=e.ownerDocument,this.window=this.document.defaultView,e.addEventListener("pointerdown",this.track),e.addEventListener("pointerup",this.forget),e.addEventListener("pointercancel",this.forget),e.addEventListener("lostpointercapture",this.lostCapture),this.window.addEventListener("pointerup",this.outsideEnd,!0),this.window.addEventListener("pointercancel",this.outsideEnd,!0),this.window.addEventListener("blur",this.cancelAll),this.document.addEventListener("visibilitychange",this.visibilityChanged)}pointers=new Map;document;window;track=e=>{this.controls.enabled&&this.pointers.set(e.pointerId,e.pointerType)};forget=e=>{this.pointers.delete(e.pointerId)};lostCapture=e=>{this.cancel(e.pointerId)};outsideEnd=e=>{e.composedPath().includes(this.canvas)||this.cancel(e.pointerId)};visibilityChanged=()=>{this.document.hidden&&this.cancelAll()};cancelAll=()=>{for(let e of[...this.pointers.keys()])this.cancel(e)};cancel(e){let t=this.pointers.get(e);t!==void 0&&(this.pointers.delete(e),this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:e,pointerType:t})))}dispose(){this.cancelAll(),this.canvas.removeEventListener("pointerdown",this.track),this.canvas.removeEventListener("pointerup",this.forget),this.canvas.removeEventListener("pointercancel",this.forget),this.canvas.removeEventListener("lostpointercapture",this.lostCapture),this.window.removeEventListener("pointerup",this.outsideEnd,!0),this.window.removeEventListener("pointercancel",this.outsideEnd,!0),this.window.removeEventListener("blur",this.cancelAll),this.document.removeEventListener("visibilitychange",this.visibilityChanged)}};var ut=s=>document.getElementById(s),tr=ut("viewer"),Wa=matchMedia("(prefers-reduced-motion: reduce)"),ph=[...document.querySelectorAll("[data-view]")],Ay=[...document.querySelectorAll("button:disabled")],cn,ke,Nt,$n,ln,Zs,Xr=1,Qs=0,jr=!1,Ga,hf=!1,mh=new Ha,ns=!0,uf=new S;function is(s){jr=s,ut("auto-rotate").setAttribute("aria-pressed",String(s)),ut("auto-rotate").querySelector("span").textContent=s?"\u6682\u505C\u65CB\u8F6C":"\u81EA\u52A8\u65CB\u8F6C"}function nr(){ph.forEach(s=>s.setAttribute("aria-pressed","false")),ln=null}function gh(){if(!cn)return;let s=tr.clientWidth,e=tr.clientHeight;Nt.aspect=s/e,Nt.updateProjectionMatrix(),cn.setPixelRatio(mh.resize(s,e,devicePixelRatio)),cn.setSize(s,e),ns=!0}function er(s,e=!1,t=!1,n=!1){is(!1),ke.enableDamping=!1,ke.update(),ke.enableDamping=!0,ph.forEach(l=>l.setAttribute("aria-pressed",String(l.dataset.view===s)));let i={front:Math.PI/2,side:Math.PI,back:-Math.PI/2,overview:Math.PI/4},r=Xr*Math.max(1,.75/Nt.aspect)*(t||n?1.1:1),o=uf.clone();t&&(o.y+=.06),n&&(o.y-=.06);let a=new S(Math.sin(i[s])*r,r*.14,Math.cos(i[s])*r).add(o);e||Wa.matches?(Nt.position.copy(a),ke.target.copy(o),ln=null,ke.update()):ln={from:Nt.position.clone(),to:a,fromTarget:ke.target.clone(),toTarget:o,start:performance.now()},ut("view-name").textContent=n?"\u8868\u6F14\u5168\u8EAB\u89C6\u89D2":t?"\u8BAD\u7EC3\u5168\u8EAB\u89C6\u89D2":{front:"\u6B63\u9762\u89C6\u89D2",side:"\u4FA7\u9762\u89C6\u89D2",back:"\u80CC\u9762\u89C6\u89D2",overview:"\u659C\u524D\u89C6\u89D2"}[s]}function Ry(s,e){is(!1),nr(),ke.enableDamping=!1,ke.update(),ke.enableDamping=!0;let t=/hip|knee|ankle/.test(e),n=e.startsWith("right_"),i=s.clone();i.y=t?.68:Ze.clamp(i.y,.6,1.05);let r=Xr*Math.max(t?.98:.8,.64/Nt.aspect),o=t?new S(.45,.12,n?.9:-.9):new S(.9,.12,n?.55:-.55),a=i.clone().add(o.normalize().multiplyScalar(r));Wa.matches?(ke.target.copy(i),Nt.position.copy(a),ke.update()):ln={from:Nt.position.clone(),to:a,fromTarget:ke.target.clone(),toTarget:i,start:performance.now(),duration:400},ut("view-name").textContent="\u5173\u8282\u89C2\u5BDF\u89C6\u89D2"}function Cy(s){console.error("G1 viewer:",s),ut("loading").hidden=!1,ut("loading-message").textContent="\u6A21\u578B\u6682\u65F6\u65E0\u6CD5\u663E\u793A",ut("loading").querySelector("small").textContent="\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u652F\u6301 WebGL\uFF0C\u5E76\u901A\u8FC7\u672C\u5730\u9884\u89C8\u5730\u5740\u6253\u5F00\u3002",ut("loading").querySelector(".loader-ring").hidden=!0,ut("retry").hidden=!1}async function Py(){try{cn=new Pr({antialias:!0,alpha:!0,powerPreference:"high-performance"}),cn.outputColorSpace=St,cn.toneMapping=yc,cn.toneMappingExposure=1.22,ut("canvas-host").appendChild(cn.domElement),cn.domElement.setAttribute("aria-hidden","true"),$n=new zs,Nt=new zt(31,1,.01,100),ke=new ga(Nt,cn.domElement),ke.enableDamping=!0,ke.dampingFactor=.085,ke.enablePan=!1,ke.minPolarAngle=.25,ke.maxPolarAngle=Math.PI*.53,ke.rotateSpeed=.6,ke.zoomSpeed=.7,ke.addEventListener("change",()=>{ns=!0}),ke.addEventListener("start",()=>{is(!1),nr(),ut("view-name").textContent="\u81EA\u7531\u89C6\u89D2"}),new Va(cn.domElement,ke);let s=new ya,e=new ks(cn);$n.environment=e.fromScene(s,.04).texture,s.dispose(),e.dispose(),$n.add(new oa(16777215,7898486,2));let t=new qi(16774884,3);t.position.set(3,5,4),$n.add(t);let n=new qi(14216420,2);n.position.set(-3,2,-4),$n.add(n),Zs=(await new _a().loadAsync("assets/g1-sample.glb",_=>{_.total&&(ut("loading-message").textContent=`\u6B63\u5728\u88C5\u914D G1\u2026 ${Math.round(_.loaded/_.total*100)}%`)})).scene,Zs.traverse(_=>{_.isMesh&&(_.material.side=Ht)}),$n.add(Zs);let r=new yt().setFromObject(Zs),o=r.getSize(new S),a=r.getCenter(new S);ke.target.copy(a),uf.copy(a),Xr=o.y/(2*Math.tan(Ze.degToRad(Nt.fov/2)))*1.32,ke.minDistance=Xr*.47,ke.maxDistance=Xr*2.2;let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d"),u=c.createRadialGradient(64,64,0,64,64,64);u.addColorStop(0,"rgba(24,48,32,.3)"),u.addColorStop(.4,"rgba(24,48,32,.12)"),u.addColorStop(1,"rgba(24,48,32,0)"),c.fillStyle=u,c.fillRect(0,0,128,128);let h=new Ye(new Cr(1.35,1.1),new wt({map:new qo(l),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(a.x,r.min.y+.002,a.z),$n.add(h);let d=new Ye(new ea(.62,.622,96),new wt({color:7179379,transparent:!0,opacity:.3,side:Ht,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(a.x,r.min.y+.001,a.z),$n.add(d),gh(),er("overview",!0),Ay.forEach(_=>{_.disabled=!1});let f=await fetch("assets/model-info.json").then(_=>{if(!_.ok)throw new Error("Unable to load model metadata");return _.json()}),g=!0;Ga=cf({model:Zs,camera:Nt,scene:$n,viewer:tr,canvas:cn.domElement,records:f.links,onSelect:Ry,onChain:()=>er("side"),onTraining:()=>er("overview",!1,!0),onPerformance:()=>er("front",!1,!1,!0),onGestureCapture:_=>{_?(is(!1),nr(),ke.enableDamping=!1,ke.update(),ke.enableDamping=!0,g=ke.enabled,ke.enabled=!1):ke.enabled=g}}),ut("loading").hidden=!0,document.body.dataset.ready="true",requestAnimationFrame(df)}catch(s){Cy(s)}}function df(s){if(requestAnimationFrame(df),document.hidden||Qs&&s-Qs<1e3/60-.5)return;let e=Qs?Math.max(0,(s-Qs)/1e3):0;Qs=s;let t=!!ln||jr;if(ln){let l=Math.min(Math.max(s-ln.start,0)/(ln.duration??650),1),c=l*l*(3-2*l),u=new jn().setFromVector3(ln.from.clone().sub(ln.fromTarget)),h=new jn().setFromVector3(ln.to.clone().sub(ln.toTarget)),d=h.theta-u.theta;d=Math.atan2(Math.sin(d),Math.cos(d));let f=new jn(Ze.lerp(u.radius,h.radius,c),Ze.lerp(u.phi,h.phi,c),u.theta+d*c);ke.target.lerpVectors(ln.fromTarget,ln.toTarget,c),Nt.position.setFromSpherical(f).add(ke.target),l===1&&(ln=null)}else if(jr){let l=Nt.position.clone().sub(ke.target);l.applyAxisAngle(new S(0,1,0),e*.16),Nt.position.copy(ke.target).add(l)}ke.update();let n=Nt.position.clone().sub(ke.target),i=(Ze.radToDeg(Math.atan2(n.z,n.x))+360)%360,r=String(Math.round(i)%360).padStart(3,"0")+"\xB0";ut("azimuth").textContent!==r&&(ut("azimuth").textContent=r);let o=(Ga==null?void 0:Ga.update(e,s))??!1,a=mh.observe(e,t||o);a!==null&&(cn.setPixelRatio(a),ns=!0),(ns||t||o)&&(cn.render($n,Nt),ns=!1)}ph.forEach(s=>s.addEventListener("click",()=>er(s.dataset.view)));ut("auto-rotate").addEventListener("click",()=>{nr(),is(!jr),ut("view-name").textContent=jr?"\u73AF\u7ED5\u89C2\u5BDF":"\u81EA\u7531\u89C6\u89D2"});ut("reset").addEventListener("click",()=>er("overview"));function Xa(s){nr();let e=Nt.position.clone().sub(ke.target);e.setLength(Ze.clamp(e.length()*s,ke.minDistance,ke.maxDistance)),Nt.position.copy(ke.target).add(e),ke.update()}ut("zoom-in").addEventListener("click",()=>Xa(.85));ut("zoom-out").addEventListener("click",()=>Xa(1.18));async function ff(){try{await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{ut("fullscreen").title="\u8BF7\u5728\u89E6\u6478\u6216\u70B9\u51FB\u540E\u91CD\u8BD5\u5168\u5C4F"}}async function Ly(){document.fullscreenElement?await document.exitFullscreen():await ff()}ut("fullscreen").addEventListener("click",Ly);ut("fullscreen-reenter").addEventListener("click",ff);document.documentElement.requestFullscreen||(ut("fullscreen").hidden=!0,ut("fullscreen-reenter").hidden=!0);document.addEventListener("fullscreenchange",()=>{let s=!!document.fullscreenElement;s&&(hf=!0),ut("fullscreen").setAttribute("aria-label",s?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F\u67E5\u770B"),ut("fullscreen").setAttribute("aria-pressed",String(s)),ut("fullscreen-reenter").hidden=s||!hf,gh()});ut("retry").addEventListener("click",()=>location.reload());tr.addEventListener("keydown",s=>{if(!(!Zs||s.target!==tr)){if(s.key==="+"||s.key==="=")s.preventDefault(),Xa(.85);else if(s.key==="-")s.preventDefault(),Xa(1.18);else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s.key)){s.preventDefault(),is(!1),nr();let e=new jn().setFromVector3(Nt.position.clone().sub(ke.target));s.key==="ArrowLeft"&&(e.theta-=.15),s.key==="ArrowRight"&&(e.theta+=.15),s.key==="ArrowUp"&&(e.phi-=.1),s.key==="ArrowDown"&&(e.phi+=.1),e.phi=Ze.clamp(e.phi,ke.minPolarAngle,ke.maxPolarAngle),Nt.position.setFromSpherical(e).add(ke.target),ke.update(),ut("view-name").textContent="\u81EA\u7531\u89C6\u89D2"}}});Wa.addEventListener("change",()=>{Wa.matches&&is(!1)});document.addEventListener("visibilitychange",()=>{Qs=0,ns=!0,mh.resetSamples()});for(let s of["click","input","change"])document.addEventListener(s,()=>{ns=!0});new ResizeObserver(gh).observe(tr);Py();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
