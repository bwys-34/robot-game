(()=>{var Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,Cc=1,gd=2;var mu=1,_d=2,qn=3,Cn=0,Gt=1,tn=2;var hi=0,ms=1,Pc=2,Lc=3,Ic=4,yd=5,Ii=100,xd=101,vd=102,Dc=103,Nc=104,bd=200,Md=201,Sd=202,Ed=203,Wa=204,Xa=205,wd=206,Ad=207,Td=208,Rd=209,Cd=210,Pd=211,Ld=212,Id=213,Dd=214,Nd=0,Ud=1,Od=2,Kr=3,Fd=4,Bd=5,kd=6,zd=7,gu=0,Hd=1,Vd=2,ui=0,Gd=1,Wd=2,Xd=3,wl=4,qd=5,Yd=6,Uc="attached",jd="detached",_u=300,ys=301,xs=302,qa=303,Ya=304,Io=306,Fi=1e3,nn=1001,er=1002,Et=1003,Jr=1004;var $s=1005;var Yt=1006,Al=1007;var fi=1008;var di=1009,$d=1010,Zd=1011,Tl=1012,yu=1013,li=1014,Yn=1015,tr=1016,xu=1017,vu=1018,Ni=1020,Kd=1021,un=1023,Jd=1024,Qd=1025,Ui=1026,vs=1027,ef=1028,bu=1029,tf=1030,Mu=1031,Su=1033,ua=33776,da=33777,fa=33778,pa=33779,Oc=35840,Fc=35841,Bc=35842,kc=35843,Eu=36196,zc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,jc=37814,$c=37815,Zc=37816,Kc=37817,Jc=37818,Qc=37819,eh=37820,th=37821,ma=36492,nh=36494,ih=36495,nf=36283,sh=36284,rh=36285,oh=36286;var bs=2300,Bi=2301,ga=2302,ah=2400,lh=2401,ch=2402,sf=2500;var wu=0,Do=1,fr=2,Au=3e3,Oi=3001,rf=3200,of=3201,Tu=0,af=1,dn="",ht="srgb",Tt="srgb-linear",Rl="display-p3",No="display-p3-linear",Qr="linear",ct="srgb",eo="rec709",to="p3";var $i=7680;var hh=519,lf=512,cf=513,hf=514,Ru=515,uf=516,df=517,ff=518,pf=519,ja=35044;var uh="300 es",$a=1035,jn=2e3,no=2001,Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=1234567,Zs=Math.PI/180,Ms=180/Math.PI;function Sn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function Cl(s,e){return(s%e+e)%e}function mf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ks(s,e,t){return(1-t)*s+t*e}function _f(s,e,t,n){return Ks(s,e,1-Math.exp(-t*n))}function yf(s,e=1){return e-Math.abs(Cl(s,e*2)-e)}function xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mf(s,e){return s+Math.random()*(e-s)}function Sf(s){return s*(.5-Math.random())}function Ef(s){s!==void 0&&(dh=s);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wf(s){return s*Zs}function Af(s){return s*Ms}function Za(s){return(s&s-1)===0&&s!==0}function Tf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rf(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ft={DEG2RAD:Zs,RAD2DEG:Ms,generateUUID:Sn,clamp:Ut,euclideanModulo:Cl,mapLinear:mf,inverseLerp:gf,lerp:Ks,damp:_f,pingpong:yf,smoothstep:xf,smootherstep:vf,randInt:bf,randFloat:Mf,randFloatSpread:Sf,seededRandom:Ef,degToRad:wf,radToDeg:Af,isPowerOfTwo:Za,ceilPowerOfTwo:Tf,floorPowerOfTwo:io,setQuaternionFromProperEuler:Rf,normalize:st,denormalize:Rn},Ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],S=i[7],P=i[2],T=i[5],A=i[8];return r[0]=o*_+a*x+l*P,r[3]=o*m+a*y+l*T,r[6]=o*p+a*S+l*A,r[1]=c*_+h*x+u*P,r[4]=c*m+h*y+u*T,r[7]=c*p+h*S+u*A,r[2]=d*_+f*x+g*P,r[5]=d*m+f*y+g*T,r[8]=d*p+f*S+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Be;function Cu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cf(){let s=nr("canvas");return s.style.display="block",s}var fh={};function Js(s){s in fh||(fh[s]=!0,console.warn(s))}var ph=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[Tt]:{transfer:Qr,primaries:eo,toReference:s=>s,fromReference:s=>s},[ht]:{transfer:ct,primaries:eo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[No]:{transfer:Qr,primaries:to,toReference:s=>s.applyMatrix3(mh),fromReference:s=>s.applyMatrix3(ph)},[Rl]:{transfer:ct,primaries:to,toReference:s=>s.convertSRGBToLinear().applyMatrix3(mh),fromReference:s=>s.applyMatrix3(ph).convertLinearToSRGB()}},Pf=new Set([Tt,No]),et={enabled:!0,_workingColorSpace:Tt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Pf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Sr[e].toReference,i=Sr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Sr[s].primaries},getTransfer:function(s){return s===dn?Qr:Sr[s].transfer}};function gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ya(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zi,so=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=nr("canvas")),Zi.width=e.width,Zi.height=e.height;let n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gs(t[n]/255)*255):t[n]=gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lf=0,ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(xa(i[o].image)):r.push(xa(i[o]))}else r=xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?so.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,Ft=class s extends Pn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=nn,i=nn,r=Yt,o=fi,a=un,l=di,c=s.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Sn(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?ht:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Oi:Au}set encoding(e){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?ht:dn}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=_u;Ft.DEFAULT_ANISOTROPY=1;var rt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,S=(f+1)/2,P=(p+1)/2,T=(h+d)/4,A=(u+_)/4,D=(g+m)/4;return y>S&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=A/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=D/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends Pn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oi?ht:dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oo=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ja=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),T=Math.atan2(P,p*x);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let S=a*x;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new C,gh=new xt,Kt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),wr.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),Ji.subVectors(e.b,Vs),Qi.subVectors(e.c,Vs),ii.subVectors(Ji,Ki),si.subVectors(Qi,Ji),Ti.subVectors(Ki,Qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,si.z,0,-si.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ti.y,Ti.x,0];return!ba(t,Ki,Ji,Qi,wr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ki,Ji,Qi,wr))?!1:(Ar.crossVectors(ii,si),t=[Ar.x,Ar.y,Ar.z],ba(t,Ki,Ji,Qi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zn=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,Er=new Kt,Ki=new C,Ji=new C,Qi=new C,ii=new C,si=new C,Ti=new C,Vs=new C,wr=new C,Ar=new C,Ri=new C;function ba(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ri.fromArray(s,r);let a=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Df=new Kt,Gs=new C,Ma=new C,sn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Ma)),this.expandByPoint(Gs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new C,Sa=new C,Tr=new C,ri=new C,Ea=new C,Rr=new C,wa=new C,pi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Sa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=ri.dot(this.direction),l=-ri.dot(Tr),c=ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(Tr,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){Ea.subVectors(t,e),Rr.subVectors(n,e),wa.crossVectors(Ea,Rr);let o=this.direction.dot(wa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);let l=a*this.direction.dot(Rr.crossVectors(ri,Rr));if(l<0)return null;let c=a*this.direction.dot(Ea.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Uf)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),oi.crossVectors(n,Qt),oi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),oi.crossVectors(n,Qt)),oi.normalize(),Cr.crossVectors(Qt,oi),i[0]=oi.x,i[4]=Cr.x,i[8]=Qt.x,i[1]=oi.y,i[5]=Cr.y,i[9]=Qt.y,i[2]=oi.z,i[6]=Cr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],S=n[11],P=n[15],T=i[0],A=i[4],D=i[8],v=i[12],w=i[1],O=i[5],N=i[9],X=i[13],I=i[2],F=i[6],W=i[10],j=i[14],Y=i[3],q=i[7],Z=i[11],ne=i[15];return r[0]=o*T+a*w+l*I+c*Y,r[4]=o*A+a*O+l*F+c*q,r[8]=o*D+a*N+l*W+c*Z,r[12]=o*v+a*X+l*j+c*ne,r[1]=h*T+u*w+d*I+f*Y,r[5]=h*A+u*O+d*F+f*q,r[9]=h*D+u*N+d*W+f*Z,r[13]=h*v+u*X+d*j+f*ne,r[2]=g*T+_*w+m*I+p*Y,r[6]=g*A+_*O+m*F+p*q,r[10]=g*D+_*N+m*W+p*Z,r[14]=g*v+_*X+m*j+p*ne,r[3]=x*T+y*w+S*I+P*Y,r[7]=x*A+y*O+S*F+P*q,r[11]=x*D+y*N+S*W+P*Z,r[15]=x*v+y*X+S*j+P*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,S=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=t*x+n*y+i*S+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=x*A,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=y*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=S*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=P*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,y=l*h,S=l*u,P=n.x,T=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+S)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+y)*A,i[9]=(m-x)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=es.set(i[0],i[1],i[2]).length(),o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);let c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===no)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=jn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h,g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===no)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},es=new C,vn=new qe,Nf=new C(0,0,0),Uf=new C(1,1,1),oi=new C,Cr=new C,Qt=new C,_h=new qe,yh=new xt,Ss=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Of=0,xh=new C,ts=new xt,Vn=new qe,Pr=new C,Ws=new C,Ff=new C,Bf=new xt,vh=new C(1,0,0),bh=new C(0,1,0),Mh=new C(0,0,1),kf={type:"added"},zf={type:"removed"},dt=class s extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new Ss,n=new xt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Be}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ws,Pr,this.up):Vn.lookAt(Pr,Ws,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Vn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};dt.DEFAULT_UP=new C(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new C,Gn=new C,Aa=new C,Wn=new C,ns=new C,is=new C,Sh=new C,Ta=new C,Ra=new C,Ca=new C,Lr=!1,ds=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Gn.subVectors(n,t),Aa.subVectors(e,t);let o=bn.dot(bn),a=bn.dot(Gn),l=bn.dot(Aa),c=Gn.dot(Gn),h=Gn.dot(Aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Gn.subVectors(e,t),bn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ns.subVectors(i,n),is.subVectors(r,n),Ta.subVectors(e,n);let l=ns.dot(Ta),c=is.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,i);let h=ns.dot(Ra),u=is.dot(Ra);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ns,o);Ca.subVectors(e,r);let f=ns.dot(Ca),g=is.dot(Ca);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(is,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Sh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Cl(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pa(o,r,e+1/3),this.g=Pa(o,r,e),this.b=Pa(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return et.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ut(Vt.r*255,0,255))*65536+Math.round(Ut(Vt.g*255,0,255))*256+Math.round(Ut(Vt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ht){et.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,i=Vt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ir);let n=Ks(ai.h,Ir.h,t),i=Ks(ai.s,Ir.s,t),r=Ks(ai.l,Ir.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ee;Ee.NAMES=Pu;var Hf=0,rn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=ms,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bt=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new C,Dr=new Ae,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}};var lo=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var co=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Vf=0,hn=new qe,La=new dt,ss=new C,en=new Kt,Xs=new Kt,It=new C,vt=class s extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?co:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(en.min,Xs.min),en.expandByPoint(It),It.addVectors(en.max,Xs.max),en.expandByPoint(It)):(en.expandByPoint(Xs.min),en.expandByPoint(Xs.max))}en.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),It.add(ss)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new C,h[w]=new C;let u=new C,d=new C,f=new C,g=new Ae,_=new Ae,m=new Ae,p=new C,x=new C;function y(w,O,N){u.fromArray(i,w*3),d.fromArray(i,O*3),f.fromArray(i,N*3),g.fromArray(o,w*2),_.fromArray(o,O*2),m.fromArray(o,N*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(X),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(X),c[w].add(p),c[O].add(p),c[N].add(p),h[w].add(x),h[O].add(x),h[N].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,O=S.length;w<O;++w){let N=S[w],X=N.start,I=N.count;for(let F=X,W=X+I;F<W;F+=3)y(n[F+0],n[F+1],n[F+2])}let P=new C,T=new C,A=new C,D=new C;function v(w){A.fromArray(r,w*3),D.copy(A);let O=c[w];P.copy(O),P.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(D,O);let X=T.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=X}for(let w=0,O=S.length;w<O;++w){let N=S[w],X=N.start,I=N.count;for(let F=X,W=X+I;F<W;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new qe,Ci=new pi,Nr=new sn,wh=new C,rs=new C,os=new C,as=new C,Ia=new C,Ur=new C,Or=new Ae,Fr=new Ae,Br=new Ae,Ah=new C,Th=new C,Rh=new C,kr=new C,zr=new C,De=class extends dt{constructor(e=new vt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,e),o?Ur.addScaledVector(Ia,h):Ur.addScaledVector(Ia.sub(t),h))}t.add(Ur)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Nr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Nr,wh)===null||Ci.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,P=y;S<P;S+=3){let T=a.getX(S),A=a.getX(S+1),D=a.getX(S+2);i=Hr(this,p,e,n,c,h,u,T,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);i=Hr(this,o,e,n,c,h,u,x,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,P=y;S<P;S+=3){let T=S,A=S+1,D=S+2;i=Hr(this,p,e,n,c,h,u,T,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=m,y=m+1,S=m+2;i=Hr(this,o,e,n,c,h,u,x,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Gf(s,e,t,n,i,r,o,a){let l;if(e.side===Gt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Cn,a),l===null)return null;zr.copy(a),zr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:s}}function Hr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,rs),s.getVertexPosition(l,os),s.getVertexPosition(c,as);let h=Gf(s,e,t,n,rs,os,as,kr);if(h){i&&(Or.fromBufferAttribute(i,a),Fr.fromBufferAttribute(i,l),Br.fromBufferAttribute(i,c),h.uv=ds.getInterpolation(kr,rs,os,as,Or,Fr,Br,new Ae)),r&&(Or.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),Br.fromBufferAttribute(r,c),h.uv1=ds.getInterpolation(kr,rs,os,as,Or,Fr,Br,new Ae),h.uv2=h.uv1),o&&(Ah.fromBufferAttribute(o,a),Th.fromBufferAttribute(o,l),Rh.fromBufferAttribute(o,c),h.normal=ds.getInterpolation(kr,rs,os,as,Ah,Th,Rh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ds.getNormal(rs,os,as,u.normal),h.face=u}return h}var fn=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(_,m,p,x,y,S,P,T,A,D,v){let w=S/A,O=P/D,N=S/2,X=P/2,I=T/2,F=A+1,W=D+1,j=0,Y=0,q=new C;for(let Z=0;Z<W;Z++){let ne=Z*O-X;for(let ce=0;ce<F;ce++){let G=ce*w-N;q[_]=G*x,q[m]=ne*y,q[p]=I,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(ce/A),u.push(1-Z/D),j+=1}}for(let Z=0;Z<D;Z++)for(let ne=0;ne<A;ne++){let ce=d+ne+F*Z,G=d+ne+F*(Z+1),$=d+(ne+1)+F*(Z+1),le=d+(ne+1)+F*Z;l.push(ce,G,le),l.push(G,$,le),Y+=6}a.addGroup(f,Y,v),f+=Y,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function Wf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lu(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}var Xf={clone:Es,merge:qt},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ho=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ls=-90,cs=1,Qa=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wt(ls,cs,e,t);i.layers=this.layers,this.add(i);let r=new wt(ls,cs,e,t);r.layers=this.layers,this.add(r);let o=new wt(ls,cs,e,t);o.layers=this.layers,this.add(o);let a=new wt(ls,cs,e,t);a.layers=this.layers,this.add(a);let l=new wt(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new wt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?ht:dn),this.texture=new uo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:hi});r.uniforms.tEquirect.value=t;let o=new De(i,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Yt),new Qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Da=new C,jf=new C,$f=new Be,Mn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Da.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$f.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new sn,Vr=new C,ir=class{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],y=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+o,d+h,m+g,S+x).normalize(),n[3].setComponents(l-o,d-h,m-g,S-x).normalize(),n[4].setComponents(l-a,d-u,m-_,S-y).normalize(),t===jn)n[5].setComponents(l+a,d+u,m+_,S+y).normalize();else if(t===no)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Iu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zf(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var ws=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let x=p*d-o;for(let y=0;y<c;y++){let S=y*u-r;g.push(S,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,S=x+c*(p+1),P=x+1+c*(p+1),T=x+1+c*p;f.push(y,S,T),f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
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
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:yp,color_vertex:xp,common:vp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:Ap,colorspace_fragment:Tp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Wp,envmap_vertex:Dp,fog_vertex:Np,fog_pars_vertex:Up,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_fragment:kp,lightmap_pars_fragment:zp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Gp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:jp,lights_physical_fragment:$p,lights_physical_pars_fragment:Zp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:ym,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Tm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Om,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:km,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:$m,background_vert:Zm,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:yg,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Ag,shadow_frag:Tg,sprite_vert:Rg,sprite_frag:Cg},re={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tn={basic:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([re.points,re.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([re.common,re.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([re.sprite,re.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([re.lights,re.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Tn.physical={uniforms:qt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Gr={r:0,b:0,g:0};function Pg(s,e,t,n,i,r,o){let a=new Ee(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),x=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Io)?(h===void 0&&(h=new De(new fn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Es(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=et.getTransfer(y.colorSpace)!==ct,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new De(new ws(2,2),new Zn({name:"BackgroundMaterial",uniforms:Es(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Gr,Lu(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Lg(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(I,F,W,j,Y){let q=!1;if(o){let Z=_(j,W,F);c!==Z&&(c=Z,f(c.object)),q=p(I,j,W,Y),q&&x(I,j,W,Y)}else{let Z=F.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==Z)&&(c.geometry=j.id,c.program=W.id,c.wireframe=Z,q=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(I,F,W,j),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,F,W){let j=W.wireframe===!0,Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let q=Y[F.id];q===void 0&&(q={},Y[F.id]=q);let Z=q[j];return Z===void 0&&(Z=m(d()),q[j]=Z),Z}function m(I){let F=[],W=[],j=[];for(let Y=0;Y<i;Y++)F[Y]=0,W[Y]=0,j[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:j,object:I,attributes:{},index:null}}function p(I,F,W,j){let Y=c.attributes,q=F.attributes,Z=0,ne=W.getAttributes();for(let ce in ne)if(ne[ce].location>=0){let $=Y[ce],le=q[ce];if(le===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==j}function x(I,F,W,j){let Y={},q=F.attributes,Z=0,ne=W.getAttributes();for(let ce in ne)if(ne[ce].location>=0){let $=q[ce];$===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let le={};le.attribute=$,$&&$.data&&(le.data=$.data),Y[ce]=le,Z++}c.attributes=Y,c.attributesNum=Z,c.index=j}function y(){let I=c.newAttributes;for(let F=0,W=I.length;F<W;F++)I[F]=0}function S(I){P(I,0)}function P(I,F){let W=c.newAttributes,j=c.enabledAttributes,Y=c.attributeDivisors;W[I]=1,j[I]===0&&(s.enableVertexAttribArray(I),j[I]=1),Y[I]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),Y[I]=F)}function T(){let I=c.newAttributes,F=c.enabledAttributes;for(let W=0,j=F.length;W<j;W++)F[W]!==I[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function A(I,F,W,j,Y,q,Z){Z===!0?s.vertexAttribIPointer(I,F,W,Y,q):s.vertexAttribPointer(I,F,W,j,Y,q)}function D(I,F,W,j){if(n.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Y=j.attributes,q=W.getAttributes(),Z=F.defaultAttributeValues;for(let ne in q){let ce=q[ne];if(ce.location>=0){let G=Y[ne];if(G===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let $=G.normalized,le=G.itemSize,ye=t.get(G);if(ye===void 0)continue;let ge=ye.buffer,Ue=ye.type,Oe=ye.bytesPerElement,Te=n.isWebGL2===!0&&(Ue===s.INT||Ue===s.UNSIGNED_INT||G.gpuType===yu);if(G.isInterleavedBufferAttribute){let Ye=G.data,k=Ye.stride,Nt=G.offset;if(Ye.isInstancedInterleavedBuffer){for(let Me=0;Me<ce.locationSize;Me++)P(ce.location+Me,Ye.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Me=0;Me<ce.locationSize;Me++)S(ce.location+Me);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Me=0;Me<ce.locationSize;Me++)A(ce.location+Me,le/ce.locationSize,Ue,$,k*Oe,(Nt+le/ce.locationSize*Me)*Oe,Te)}else{if(G.isInstancedBufferAttribute){for(let Ye=0;Ye<ce.locationSize;Ye++)P(ce.location+Ye,G.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ye=0;Ye<ce.locationSize;Ye++)S(ce.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Ye=0;Ye<ce.locationSize;Ye++)A(ce.location+Ye,le/ce.locationSize,Ue,$,le*Oe,le/ce.locationSize*Ye*Oe,Te)}}else if(Z!==void 0){let $=Z[ne];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ce.location,$);break;case 3:s.vertexAttrib3fv(ce.location,$);break;case 4:s.vertexAttrib4fv(ce.location,$);break;default:s.vertexAttrib1fv(ce.location,$)}}}}T()}function v(){N();for(let I in a){let F=a[I];for(let W in F){let j=F[W];for(let Y in j)g(j[Y].object),delete j[Y];delete F[W]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let W in F){let j=F[W];for(let Y in j)g(j[Y].object),delete j[Y];delete F[W]}delete a[I.id]}function O(I){for(let F in a){let W=a[F];if(W[I.id]===void 0)continue;let j=W[I.id];for(let Y in j)g(j[Y].object),delete j[Y];delete W[I.id]}}function N(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:X,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function Ig(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Dg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,S=o||e.has("OES_texture_float"),P=y&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:T}}function Ng(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Mn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,y=x*4,S=p.clippingState||null;l.value=S,S=h(g,d,y,f);for(let P=0;P!==y;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ug(s){let e=new WeakMap;function t(o,a){return a===qa?o.mapping=ys:a===Ya&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Ya)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new el(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var As=class extends ho{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fs=4,Ch=[.125,.215,.35,.446,.526,.582],Di=20,Na=new As,Ph=new Ee,Ua=null,Oa=0,Fa=0,Li=(1+Math.sqrt(5))/2,hs=1/Li,Lh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Li,hs),new C(0,Li,-hs),new C(hs,0,Li),new C(-hs,0,Li),new C(Li,hs,0),new C(-Li,hs,0)],Ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Oa,Fa),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:tr,format:un,colorSpace:Tt,depthBuffer:!1},i=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Fg(r,e,t)}return i}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,i){let a=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=ui,h.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new De(new fn,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ph),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Wr(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ys||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Lh[(i-1)%Lh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new De(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);let p=[],x=0;for(let A=0;A<Di;++A){let D=A/_,v=Math.exp(-D*D/2);p.push(v),A===0?x+=v:A<m&&(x+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let S=this._sizeLods[i],P=3*S*(i>y-fs?i-y+fs:0),T=4*(this._cubeSize-S);Wr(t,P,T,3*S,2*S),l.setRenderTarget(t),l.render(u,Na)}};function Og(s){let e=[],t=[],n=[],i=s,r=s-fs+1+Ch.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-fs?l=Ch[o-s+fs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,D=T>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(v,_*g*T),y.set(d,m*g*T);let w=[T,T,T,T,T,T];S.set(w,p*g*T)}let P=new vt;P.setAttribute("position",new At(x,_)),P.setAttribute("uv",new At(y,m)),P.setAttribute("faceIndex",new At(S,p)),e.push(P),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ih(s,e,t){let n=new $n(s,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fg(s,e,t){let n=new Float32Array(Di),i=new C(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Dh(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Nh(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function Bg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qa||l===Ya,h=l===ys||l===xs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ts(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ts(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let x=f.array;_=f.version;for(let y=0,S=x.length;y<S;y+=3){let P=x[y+0],T=x[y+1],A=x[y+2];d.push(P,T,T,A,A,P)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){let P=y+0,T=y+1,A=y+2;d.push(P,T,T,A,A,P)}}else return;let m=new(Cu(d)?co:lo)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hg(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Vg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gg(s,e){return s[0]-e[0]}function Wg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Xg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let I=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;x===!0&&(D=1),y===!0&&(D=2),S===!0&&(D=3);let v=h.attributes.position.count*D,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let O=new Float32Array(v*w*4*g),N=new oo(O,v,w,g);N.type=Yn,N.needsUpdate=!0;let X=D*4;for(let F=0;F<g;F++){let W=P[F],j=T[F],Y=A[F],q=v*w*4*F;for(let Z=0;Z<W.count;Z++){let ne=Z*X;x===!0&&(o.fromBufferAttribute(W,Z),O[q+ne+0]=o.x,O[q+ne+1]=o.y,O[q+ne+2]=o.z,O[q+ne+3]=0),y===!0&&(o.fromBufferAttribute(j,Z),O[q+ne+4]=o.x,O[q+ne+5]=o.y,O[q+ne+6]=o.z,O[q+ne+7]=0),S===!0&&(o.fromBufferAttribute(Y,Z),O[q+ne+8]=o.x,O[q+ne+9]=o.y,O[q+ne+10]=o.z,O[q+ne+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:N,size:new Ae(v,w)},r.set(h,_),h.addEventListener("dispose",I)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<f;y++){let S=g[y];S[0]=y,S[1]=d[y]}g.sort(Wg);for(let y=0;y<8;y++)y<f&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Gg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let S=a[y],P=S[0],T=S[1];P!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+y)!==_[P]&&h.setAttribute("morphTarget"+y,_[P]),m&&h.getAttribute("morphNormal"+y)!==m[P]&&h.setAttribute("morphNormal"+y,m[P]),i[y]=T,p+=T):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function qg(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var fo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=li),n===void 0&&h===vs&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Du=new Ft,Nu=new fo(1,1);Nu.compareFunction=Ru;var Uu=new oo,Ou=new Ja,Fu=new uo,Uh=[],Oh=[],Fh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function Is(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Uh[i];if(r===void 0&&(r=new Float32Array(i),Uh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Uo(s,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function $g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function Zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function Kg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;kh.set(n),s.uniformMatrix2fv(this.addr,!1,kh),Ct(t,n)}}function Jg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Bh.set(n),s.uniformMatrix3fv(this.addr,!1,Bh),Ct(t,n)}}function Qg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Fh.set(n),s.uniformMatrix4fv(this.addr,!1,Fh),Ct(t,n)}}function e_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function n_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function i_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function s_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function l_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Nu:Du;t.setTexture2D(e||r,i)}function c_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ou,i)}function h_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fu,i)}function u_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uu,i)}function d_(s){switch(s){case 5126:return Yg;case 35664:return jg;case 35665:return $g;case 35666:return Zg;case 35674:return Kg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function f_(s,e){s.uniform1fv(this.addr,e)}function p_(s,e){let t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function m_(s,e){let t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function g_(s,e){let t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function __(s,e){let t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y_(s,e){let t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x_(s,e){let t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function v_(s,e){s.uniform1iv(this.addr,e)}function b_(s,e){s.uniform2iv(this.addr,e)}function M_(s,e){s.uniform3iv(this.addr,e)}function S_(s,e){s.uniform4iv(this.addr,e)}function E_(s,e){s.uniform1uiv(this.addr,e)}function w_(s,e){s.uniform2uiv(this.addr,e)}function A_(s,e){s.uniform3uiv(this.addr,e)}function T_(s,e){s.uniform4uiv(this.addr,e)}function R_(s,e,t){let n=this.cache,i=e.length,r=Uo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Du,r[o])}function C_(s,e,t){let n=this.cache,i=e.length,r=Uo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ou,r[o])}function P_(s,e,t){let n=this.cache,i=e.length,r=Uo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fu,r[o])}function L_(s,e,t){let n=this.cache,i=e.length,r=Uo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uu,r[o])}function I_(s){switch(s){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return y_;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return b_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return w_;case 36295:return A_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}},il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ba=/(\w+)(\])?(\[|\.)?/g;function zh(s,e){s.seq.push(e),s.map[e.id]=e}function D_(s,e,t){let n=s.name,i=n.length;for(Ba.lastIndex=0;;){let r=Ba.exec(n),o=Ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zh(t,c===void 0?new tl(a,s,e):new nl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new il(a),zh(t,u)),t=u}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);D_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Hh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N_=37297,U_=0;function O_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function F_(s){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s),n;switch(e===t?n="":e===to&&t===eo?n="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(n="LinearSRGBToLinearDisplayP3"),s){case Tt:case No:return[n,"LinearTransferOETF"];case ht:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+O_(s.getShaderSource(e),o)}else return i}function B_(s,e){let t=F_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function k_(s,e){let t;switch(e){case Gd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case wl:t="ACESFilmic";break;case Yd:t="AgX";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function H_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function V_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ps(s){return s!==""}function Gh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(W_,q_)}var X_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q_(s,e){let t=Ve[e];if(t===void 0){let n=X_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}var Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(s){return s.replace(Y_,j_)}function j_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case xs:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function J_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Vd:e="ENVMAP_BLENDING_ADD";break}return e}function Q_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$_(t),c=Z_(t),h=K_(t),u=J_(t),d=Q_(t),f=t.isWebGL2?"":z_(t),g=H_(t),_=V_(r),m=i.createProgram(),p,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),x.length>0&&(x+=`
`)):(p=[qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),x=[f,qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ui?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=sl(o),o=Gh(o,t),o=Wh(o,t),a=sl(a),a=Gh(a,t),a=Wh(a,t),o=Xh(o),a=Xh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=y+p+o,P=y+x+a,T=Hh(i,i.VERTEX_SHADER,S),A=Hh(i,i.FRAGMENT_SHADER,P);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(N){if(s.debug.checkShaderErrors){let X=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(T).trim(),F=i.getShaderInfoLog(A).trim(),W=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,A);else{let Y=Vh(i,T,"vertex"),q=Vh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+Y+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(I===""||F==="")&&(j=!1);j&&(N.diagnostics={runnable:W,programLog:X,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:x}})}i.deleteShader(T),i.deleteShader(A),v=new _s(i,m),w=G_(i,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,N_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var t0=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ol(e),t.set(e,n)),n}},ol=class{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}};function n0(s,e,t,n,i,r,o){let a=new ao,l=new rl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,w,O,N,X){let I=N.fog,F=X.geometry,W=v.isMeshStandardMaterial?N.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),Y=j&&j.mapping===Io?j.image.height:null,q=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=Z!==void 0?Z.length:0,ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let G,$,le,ye;if(q){let _t=Tn[q];G=_t.vertexShader,$=_t.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,l.update(v),le=l.getVertexShaderID(v),ye=l.getFragmentShaderID(v);let ge=s.getRenderTarget(),Ue=X.isInstancedMesh===!0,Oe=X.isBatchedMesh===!0,Te=!!v.map,Ye=!!v.matcap,k=!!j,Nt=!!v.aoMap,Me=!!v.lightMap,Pe=!!v.bumpMap,pe=!!v.normalMap,lt=!!v.displacementMap,ke=!!v.emissiveMap,E=!!v.metalnessMap,b=!!v.roughnessMap,B=v.anisotropy>0,ee=v.clearcoat>0,J=v.iridescence>0,te=v.sheen>0,me=v.transmission>0,ae=B&&!!v.anisotropyMap,fe=ee&&!!v.clearcoatMap,we=ee&&!!v.clearcoatNormalMap,ze=ee&&!!v.clearcoatRoughnessMap,K=J&&!!v.iridescenceMap,Qe=J&&!!v.iridescenceThicknessMap,Ge=te&&!!v.sheenColorMap,Le=te&&!!v.sheenRoughnessMap,be=!!v.specularMap,he=!!v.specularColorMap,R=!!v.specularIntensityMap,ie=me&&!!v.transmissionMap,_e=me&&!!v.thicknessMap,de=!!v.gradientMap,Q=!!v.alphaMap,L=v.alphaTest>0,se=!!v.alphaHash,oe=!!v.extensions,Re=!!F.attributes.uv1,Se=!!F.attributes.uv2,je=!!F.attributes.uv3,$e=ui;return v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Oe,instancing:Ue,instancingColor:Ue&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Tt,map:Te,matcap:Ye,envMap:k,envMapMode:k&&j.mapping,envMapCubeUVHeight:Y,aoMap:Nt,lightMap:Me,bumpMap:Pe,normalMap:pe,displacementMap:d&&lt,emissiveMap:ke,normalMapObjectSpace:pe&&v.normalMapType===af,normalMapTangentSpace:pe&&v.normalMapType===Tu,metalnessMap:E,roughnessMap:b,anisotropy:B,anisotropyMap:ae,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:Qe,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:be,specularColorMap:he,specularIntensityMap:R,transmission:me,transmissionMap:ie,thicknessMap:_e,gradientMap:de,opaque:v.transparent===!1&&v.blending===ms,alphaMap:Q,alphaTest:L,alphaHash:se,combine:v.combine,mapUv:Te&&_(v.map.channel),aoMapUv:Nt&&_(v.aoMap.channel),lightMapUv:Me&&_(v.lightMap.channel),bumpMapUv:Pe&&_(v.bumpMap.channel),normalMapUv:pe&&_(v.normalMap.channel),displacementMapUv:lt&&_(v.displacementMap.channel),emissiveMapUv:ke&&_(v.emissiveMap.channel),metalnessMapUv:E&&_(v.metalnessMap.channel),roughnessMapUv:b&&_(v.roughnessMap.channel),anisotropyMapUv:ae&&_(v.anisotropyMap.channel),clearcoatMapUv:fe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(v.sheenRoughnessMap.channel),specularMapUv:be&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:R&&_(v.specularIntensityMap.channel),transmissionMapUv:ie&&_(v.transmissionMap.channel),thicknessMapUv:_e&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Se,vertexUv3s:je,pointsUvs:X.isPoints===!0&&!!F.attributes.uv&&(Te||Q),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(w,v),y(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){let w=g[v.type],O;if(w){let N=Tn[w];O=Xf.clone(N.uniforms)}else O=v.uniforms;return O}function P(v,w){let O;for(let N=0,X=c.length;N<X;N++){let I=c[N];if(I.cacheKey===w){O=I,++O.usedTimes;break}}return O===void 0&&(O=new e0(s,w,v,r),c.push(O)),O}function T(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function i0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function s0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jh(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||s0),n.length>1&&n.sort(d||Yh),i.length>1&&i.sort(d||Yh)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function r0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new jh,s.set(n,[o])):i>=r.length?(o=new jh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function o0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function a0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var l0=0;function c0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function h0(s,e){let t=new o0,n=a0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let r=new C,o=new qe,a=new qe;function l(h,u){let d=0,f=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,p=0,x=0,y=0,S=0,P=0,T=0,A=0,D=0,v=0;h.sort(c0);let w=u===!0?Math.PI:1;for(let N=0,X=h.length;N<X;N++){let I=h[N],F=I.color,W=I.intensity,j=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*W*w,f+=F.g*W*w,g+=F.b*W*w;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],W);v++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let Z=I.shadow,ne=n.get(I);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.directionalShadow[_]=ne,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=q,_++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(W*w),q.distance=j,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[p]=q;let Z=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[p]=Z.matrix,I.castShadow){let ne=n.get(I);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=Y,T++}p++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(F).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=q,x++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*w),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Z=I.shadow,ne=n.get(I);ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=I.shadow.matrix,P++}i.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(W*w),q.groundColor.copy(I.groundColor).multiplyScalar(W*w),i.hemi[y]=q,y++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let O=i.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==S||O.numPointShadows!==P||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=v,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=S,O.numPointShadows=P,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=v,i.version=l0++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let S=h[x];if(S.isDirectionalLight){let P=i.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),d++}else if(S.isSpotLight){let P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let P=i.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let P=i.point[f];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let P=i.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function $h(s,e){let t=new h0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function u0(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new $h(s,e),t.set(r,[l])):o>=a.length?(l=new $h(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var al=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function p0(s,e,t){let n=new ir,i=new Ae,r=new Ae,o=new rt,a=new al({depthPacking:of}),l=new ll,c={},h=t.maxTextureSize,u={[Cn]:Gt,[Gt]:Cn,[tn]:tn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(T,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),w=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),N=s.state;N.setBlending(hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let X=p!==qn&&this.type===qn,I=p===qn&&this.type!==qn;for(let F=0,W=T.length;F<W;F++){let j=T[F],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let q=Y.getFrameExtents();if(i.multiply(q),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||I===!0){let ne=this.type!==qn?{minFilter:Et,magFilter:Et}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $n(i.x,i.y,ne),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let Z=Y.getViewportCount();for(let ne=0;ne<Z;ne++){let ce=Y.getViewport(ne);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),N.viewport(o),Y.updateMatrices(j,ne),n=Y.getFrustum(),S(A,D,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&x(Y,D),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,w,O)};function x(T,A){let D=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,D,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,D,f,_,null)}function y(T,A,D,v){let w=null,O=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=D.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=w.uuid,X=A.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let F=I[X];F===void 0&&(F=w.clone(),I[X]=F,A.addEventListener("dispose",P)),w=F}if(w.visible=A.visible,w.wireframe=A.wireframe,v===qn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let N=s.properties.get(w);N.light=D}return w}function S(T,A,D,v,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let X=e.update(T),I=T.material;if(Array.isArray(I)){let F=X.groups;for(let W=0,j=F.length;W<j;W++){let Y=F[W],q=I[Y.materialIndex];if(q&&q.visible){let Z=y(T,q,v,w);T.onBeforeShadow(s,T,A,D,X,Z,Y),s.renderBufferDirect(D,null,X,Z,T,Y),T.onAfterShadow(s,T,A,D,X,Z,Y)}}}else if(I.visible){let F=y(T,I,v,w);T.onBeforeShadow(s,T,A,D,X,F,null),s.renderBufferDirect(D,null,X,F,T,null),T.onAfterShadow(s,T,A,D,X,F,null)}}let N=T.children;for(let X=0,I=N.length;X<I;X++)S(N[X],A,D,v,w)}function P(T){T.target.removeEventListener("dispose",P);for(let D in c){let v=c[D],w=T.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function m0(s,e,t){let n=t.isWebGL2;function i(){let L=!1,se=new rt,oe=null,Re=new rt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!L&&(s.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){L=Se},setClear:function(Se,je,$e,pt,_t){_t===!0&&(Se*=pt,je*=pt,$e*=pt),se.set(Se,je,$e,pt),Re.equals(se)===!1&&(s.clearColor(Se,je,$e,pt),Re.copy(se))},reset:function(){L=!1,oe=null,Re.set(-1,0,0,0)}}}function r(){let L=!1,se=null,oe=null,Re=null;return{setTest:function(Se){Se?Oe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Se){se!==Se&&!L&&(s.depthMask(Se),se=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case Nd:s.depthFunc(s.NEVER);break;case Ud:s.depthFunc(s.ALWAYS);break;case Od:s.depthFunc(s.LESS);break;case Kr:s.depthFunc(s.LEQUAL);break;case Fd:s.depthFunc(s.EQUAL);break;case Bd:s.depthFunc(s.GEQUAL);break;case kd:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Re!==Se&&(s.clearDepth(Se),Re=Se)},reset:function(){L=!1,se=null,oe=null,Re=null}}}function o(){let L=!1,se=null,oe=null,Re=null,Se=null,je=null,$e=null,pt=null,_t=null;return{setTest:function(Je){L||(Je?Oe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Je){se!==Je&&!L&&(s.stencilMask(Je),se=Je)},setFunc:function(Je,Mt,An){(oe!==Je||Re!==Mt||Se!==An)&&(s.stencilFunc(Je,Mt,An),oe=Je,Re=Mt,Se=An)},setOp:function(Je,Mt,An){(je!==Je||$e!==Mt||pt!==An)&&(s.stencilOp(Je,Mt,An),je=Je,$e=Mt,pt=An)},setLocked:function(Je){L=Je},setClear:function(Je){_t!==Je&&(s.clearStencil(Je),_t=Je)},reset:function(){L=!1,se=null,oe=null,Re=null,Se=null,je=null,$e=null,pt=null,_t=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,S=null,P=null,T=null,A=null,D=null,v=new Ee(0,0,0),w=0,O=!1,N=null,X=null,I=null,F=null,W=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,q=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=q>=2);let ne=null,ce={},G=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new rt().fromArray(G),ye=new rt().fromArray($);function ge(L,se,oe,Re){let Se=new Uint8Array(4),je=s.createTexture();s.bindTexture(L,je),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<oe;$e++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(se+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return je}let Ue={};Ue[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(s.DEPTH_TEST),l.setFunc(Kr),ke(!1),E(Cc),Oe(s.CULL_FACE),pe(hi);function Oe(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Te(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ye(L,se){return f[L]!==se?(s.bindFramebuffer(L,se),f[L]=se,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function k(L,se){let oe=_,Re=!1;if(L)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),L.isWebGLMultipleRenderTargets){let Se=L.texture;if(oe.length!==Se.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let je=0,$e=Se.length;je<$e;je++)oe[je]=s.COLOR_ATTACHMENT0+je;oe.length=Se.length,Re=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Re=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Re=!0);Re&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Nt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let Me={[Ii]:s.FUNC_ADD,[xd]:s.FUNC_SUBTRACT,[vd]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[Dc]=s.MIN,Me[Nc]=s.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Me[Dc]=L.MIN_EXT,Me[Nc]=L.MAX_EXT)}let Pe={[bd]:s.ZERO,[Md]:s.ONE,[Sd]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[Cd]:s.SRC_ALPHA_SATURATE,[Td]:s.DST_COLOR,[wd]:s.DST_ALPHA,[Ed]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[Rd]:s.ONE_MINUS_DST_COLOR,[Ad]:s.ONE_MINUS_DST_ALPHA,[Pd]:s.CONSTANT_COLOR,[Ld]:s.ONE_MINUS_CONSTANT_COLOR,[Id]:s.CONSTANT_ALPHA,[Dd]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(L,se,oe,Re,Se,je,$e,pt,_t,Je){if(L===hi){p===!0&&(Te(s.BLEND),p=!1);return}if(p===!1&&(Oe(s.BLEND),p=!0),L!==yd){if(L!==x||Je!==O){if((y!==Ii||T!==Ii)&&(s.blendEquation(s.FUNC_ADD),y=Ii,T=Ii),Je)switch(L){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.ONE,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,P=null,A=null,D=null,v.set(0,0,0),w=0,x=L,O=Je}return}Se=Se||se,je=je||oe,$e=$e||Re,(se!==y||Se!==T)&&(s.blendEquationSeparate(Me[se],Me[Se]),y=se,T=Se),(oe!==S||Re!==P||je!==A||$e!==D)&&(s.blendFuncSeparate(Pe[oe],Pe[Re],Pe[je],Pe[$e]),S=oe,P=Re,A=je,D=$e),(pt.equals(v)===!1||_t!==w)&&(s.blendColor(pt.r,pt.g,pt.b,_t),v.copy(pt),w=_t),x=L,O=!1}function lt(L,se){L.side===tn?Te(s.CULL_FACE):Oe(s.CULL_FACE);let oe=L.side===Gt;se&&(oe=!oe),ke(oe),L.blending===ms&&L.transparent===!1?pe(hi):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function E(L){L!==md?(Oe(s.CULL_FACE),L!==X&&(L===Cc?s.cullFace(s.BACK):L===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),X=L}function b(L){L!==I&&(Y&&s.lineWidth(L),I=L)}function B(L,se,oe){L?(Oe(s.POLYGON_OFFSET_FILL),(F!==se||W!==oe)&&(s.polygonOffset(se,oe),F=se,W=oe)):Te(s.POLYGON_OFFSET_FILL)}function ee(L){L?Oe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function J(L){L===void 0&&(L=s.TEXTURE0+j-1),ne!==L&&(s.activeTexture(L),ne=L)}function te(L,se,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+j-1:oe=ne);let Re=ce[oe];Re===void 0&&(Re={type:void 0,texture:void 0},ce[oe]=Re),(Re.type!==L||Re.texture!==se)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(L,se||Ue[L]),Re.type=L,Re.texture=se)}function me(){let L=ce[ne];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(L){le.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ie(L){ye.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function _e(L,se){let oe=u.get(se);oe===void 0&&(oe=new WeakMap,u.set(se,oe));let Re=oe.get(L);Re===void 0&&(Re=s.getUniformBlockIndex(se,L.name),oe.set(L,Re))}function de(L,se){let Re=u.get(se).get(L);h.get(se)!==Re&&(s.uniformBlockBinding(se,Re,L.__bindingPointIndex),h.set(se,Re))}function Q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ne=null,ce={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,S=null,P=null,T=null,A=null,D=null,v=new Ee(0,0,0),w=0,O=!1,N=null,X=null,I=null,F=null,W=null,le.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Te,bindFramebuffer:Ye,drawBuffers:k,useProgram:Nt,setBlending:pe,setMaterial:lt,setFlipSided:ke,setCullFace:E,setLineWidth:b,setPolygonOffset:B,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:me,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:be,texImage3D:he,updateUBOMapping:_e,uniformBlockBinding:de,texStorage2D:Ge,texStorage3D:Le,texSubImage2D:we,texSubImage3D:ze,compressedTexSubImage2D:K,compressedTexSubImage3D:Qe,scissor:R,viewport:ie,reset:Q}}function g0(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return f?new OffscreenCanvas(E,b):nr("canvas")}function _(E,b,B,ee){let J=1;if((E.width>ee||E.height>ee)&&(J=ee/Math.max(E.width,E.height)),J<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let te=b?io:Math.floor,me=te(J*E.width),ae=te(J*E.height);u===void 0&&(u=g(me,ae));let fe=B?g(me,ae):u;return fe.width=me,fe.height=ae,fe.getContext("2d").drawImage(E,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+ae+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Za(E.width)&&Za(E.height)}function p(E){return a?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Et&&E.minFilter!==Yt}function x(E,b){return E.generateMipmaps&&b&&E.minFilter!==Et&&E.minFilter!==Yt}function y(E){s.generateMipmap(E)}function S(E,b,B,ee,J=!1){if(a===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=b;if(b===s.RED&&(B===s.FLOAT&&(te=s.R32F),B===s.HALF_FLOAT&&(te=s.R16F),B===s.UNSIGNED_BYTE&&(te=s.R8)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(te=s.R8UI),B===s.UNSIGNED_SHORT&&(te=s.R16UI),B===s.UNSIGNED_INT&&(te=s.R32UI),B===s.BYTE&&(te=s.R8I),B===s.SHORT&&(te=s.R16I),B===s.INT&&(te=s.R32I)),b===s.RG&&(B===s.FLOAT&&(te=s.RG32F),B===s.HALF_FLOAT&&(te=s.RG16F),B===s.UNSIGNED_BYTE&&(te=s.RG8)),b===s.RGBA){let me=J?Qr:et.getTransfer(ee);B===s.FLOAT&&(te=s.RGBA32F),B===s.HALF_FLOAT&&(te=s.RGBA16F),B===s.UNSIGNED_BYTE&&(te=me===ct?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(E,b,B){return x(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){return E===Et||E===Jr||E===$s?s.NEAREST:s.LINEAR}function A(E){let b=E.target;b.removeEventListener("dispose",A),v(b),b.isVideoTexture&&h.delete(b)}function D(E){let b=E.target;b.removeEventListener("dispose",D),O(b)}function v(E){let b=n.get(E);if(b.__webglInit===void 0)return;let B=E.source,ee=d.get(B);if(ee){let J=ee[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(ee).length===0&&d.delete(B)}n.remove(E)}function w(E){let b=n.get(E);s.deleteTexture(b.__webglTexture);let B=E.source,ee=d.get(B);delete ee[b.__cacheKey],o.memory.textures--}function O(E){let b=E.texture,B=n.get(E),ee=n.get(b);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let te=0;te<B.__webglFramebuffer[J].length;te++)s.deleteFramebuffer(B.__webglFramebuffer[J][te]);else s.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)s.deleteFramebuffer(B.__webglFramebuffer[J]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,te=b.length;J<te;J++){let me=n.get(b[J]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(b[J])}n.remove(b),n.remove(E)}let N=0;function X(){N=0}function I(){let E=N;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),N+=1,E}function F(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function W(E,b){let B=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,E,b);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function j(E,b){let B=n.get(E);if(E.version>0&&B.__version!==E.version){le(B,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function Y(E,b){let B=n.get(E);if(E.version>0&&B.__version!==E.version){le(B,E,b);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function q(E,b){let B=n.get(E);if(E.version>0&&B.__version!==E.version){ye(B,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}let Z={[Fi]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[er]:s.MIRRORED_REPEAT},ne={[Et]:s.NEAREST,[Jr]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Al]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},ce={[lf]:s.NEVER,[pf]:s.ALWAYS,[cf]:s.LESS,[Ru]:s.LEQUAL,[hf]:s.EQUAL,[ff]:s.GEQUAL,[uf]:s.GREATER,[df]:s.NOTEQUAL};function G(E,b,B){if(B?(s.texParameteri(E,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Z[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ne[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ne[b.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==nn||b.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Et&&b.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Et||b.minFilter!==$s&&b.minFilter!==fi||b.type===Yn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function $(E,b){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",A));let ee=b.source,J=d.get(ee);J===void 0&&(J={},d.set(ee,J));let te=F(b);if(te!==E.__cacheKey){J[te]===void 0&&(J[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[te].usedTimes++;let me=J[E.__cacheKey];me!==void 0&&(J[E.__cacheKey].usedTimes--,me.usedTimes===0&&w(b)),E.__cacheKey=te,E.__webglTexture=J[te].texture}return B}function le(E,b,B){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);let J=$(E,b),te=b.source;t.bindTexture(ee,E.__webglTexture,s.TEXTURE0+B);let me=n.get(te);if(te.version!==me.__version||J===!0){t.activeTexture(s.TEXTURE0+B);let ae=et.getPrimaries(et.workingColorSpace),fe=b.colorSpace===dn?null:et.getPrimaries(b.colorSpace),we=b.colorSpace===dn||ae===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ze=p(b)&&m(b.image)===!1,K=_(b.image,ze,!1,i.maxTextureSize);K=ke(b,K);let Qe=m(K)||a,Ge=r.convert(b.format,b.colorSpace),Le=r.convert(b.type),be=S(b.internalFormat,Ge,Le,b.colorSpace,b.isVideoTexture);G(ee,b,Qe);let he,R=b.mipmaps,ie=a&&b.isVideoTexture!==!0&&be!==Eu,_e=me.__version===void 0||J===!0,de=P(b,K,Qe);if(b.isDepthTexture)be=s.DEPTH_COMPONENT,a?b.type===Yn?be=s.DEPTH_COMPONENT32F:b.type===li?be=s.DEPTH_COMPONENT24:b.type===Ni?be=s.DEPTH24_STENCIL8:be=s.DEPTH_COMPONENT16:b.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ui&&be===s.DEPTH_COMPONENT&&b.type!==Tl&&b.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=li,Le=r.convert(b.type)),b.format===vs&&be===s.DEPTH_COMPONENT&&(be=s.DEPTH_STENCIL,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,Le=r.convert(b.type))),_e&&(ie?t.texStorage2D(s.TEXTURE_2D,1,be,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,be,K.width,K.height,0,Ge,Le,null));else if(b.isDataTexture)if(R.length>0&&Qe){ie&&_e&&t.texStorage2D(s.TEXTURE_2D,de,be,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)he=R[Q],ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,Ge,Le,he.data):t.texImage2D(s.TEXTURE_2D,Q,be,he.width,he.height,0,Ge,Le,he.data);b.generateMipmaps=!1}else ie?(_e&&t.texStorage2D(s.TEXTURE_2D,de,be,K.width,K.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Ge,Le,K.data)):t.texImage2D(s.TEXTURE_2D,0,be,K.width,K.height,0,Ge,Le,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,be,R[0].width,R[0].height,K.depth);for(let Q=0,L=R.length;Q<L;Q++)he=R[Q],b.format!==un?Ge!==null?ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,K.depth,Ge,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,be,he.width,he.height,K.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,K.depth,Ge,Le,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,be,he.width,he.height,K.depth,0,Ge,Le,he.data)}else{ie&&_e&&t.texStorage2D(s.TEXTURE_2D,de,be,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)he=R[Q],b.format!==un?Ge!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,Ge,Le,he.data):t.texImage2D(s.TEXTURE_2D,Q,be,he.width,he.height,0,Ge,Le,he.data)}else if(b.isDataArrayTexture)ie?(_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,be,K.width,K.height,K.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ge,Le,K.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,K.width,K.height,K.depth,0,Ge,Le,K.data);else if(b.isData3DTexture)ie?(_e&&t.texStorage3D(s.TEXTURE_3D,de,be,K.width,K.height,K.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ge,Le,K.data)):t.texImage3D(s.TEXTURE_3D,0,be,K.width,K.height,K.depth,0,Ge,Le,K.data);else if(b.isFramebufferTexture){if(_e)if(ie)t.texStorage2D(s.TEXTURE_2D,de,be,K.width,K.height);else{let Q=K.width,L=K.height;for(let se=0;se<de;se++)t.texImage2D(s.TEXTURE_2D,se,be,Q,L,0,Ge,Le,null),Q>>=1,L>>=1}}else if(R.length>0&&Qe){ie&&_e&&t.texStorage2D(s.TEXTURE_2D,de,be,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)he=R[Q],ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ge,Le,he):t.texImage2D(s.TEXTURE_2D,Q,be,Ge,Le,he);b.generateMipmaps=!1}else ie?(_e&&t.texStorage2D(s.TEXTURE_2D,de,be,K.width,K.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Le,K)):t.texImage2D(s.TEXTURE_2D,0,be,Ge,Le,K);x(b,Qe)&&y(ee),me.__version=te.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ye(E,b,B){if(b.image.length!==6)return;let ee=$(E,b),J=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);let te=n.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);let me=et.getPrimaries(et.workingColorSpace),ae=b.colorSpace===dn?null:et.getPrimaries(b.colorSpace),fe=b.colorSpace===dn||me===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let we=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,K=[];for(let Q=0;Q<6;Q++)!we&&!ze?K[Q]=_(b.image[Q],!1,!0,i.maxCubemapSize):K[Q]=ze?b.image[Q].image:b.image[Q],K[Q]=ke(b,K[Q]);let Qe=K[0],Ge=m(Qe)||a,Le=r.convert(b.format,b.colorSpace),be=r.convert(b.type),he=S(b.internalFormat,Le,be,b.colorSpace),R=a&&b.isVideoTexture!==!0,ie=te.__version===void 0||ee===!0,_e=P(b,Qe,Ge);G(s.TEXTURE_CUBE_MAP,b,Ge);let de;if(we){R&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,he,Qe.width,Qe.height);for(let Q=0;Q<6;Q++){de=K[Q].mipmaps;for(let L=0;L<de.length;L++){let se=de[L];b.format!==un?Le!==null?R?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,se.width,se.height,Le,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,se.width,se.height,Le,be,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,he,se.width,se.height,0,Le,be,se.data)}}}else{de=b.mipmaps,R&&ie&&(de.length>0&&_e++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,he,K[0].width,K[0].height));for(let Q=0;Q<6;Q++)if(ze){R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,K[Q].width,K[Q].height,Le,be,K[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,K[Q].width,K[Q].height,0,Le,be,K[Q].data);for(let L=0;L<de.length;L++){let oe=de[L].image[Q].image;R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,oe.width,oe.height,Le,be,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,he,oe.width,oe.height,0,Le,be,oe.data)}}else{R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,be,K[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,Le,be,K[Q]);for(let L=0;L<de.length;L++){let se=de[L];R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,Le,be,se.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,he,Le,be,se.image[Q])}}}x(b,Ge)&&y(s.TEXTURE_CUBE_MAP),te.__version=J.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ge(E,b,B,ee,J,te){let me=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),fe=S(B.internalFormat,me,ae,B.colorSpace);if(!n.get(b).__hasExternalTextures){let ze=Math.max(1,b.width>>te),K=Math.max(1,b.height>>te);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,te,fe,ze,K,b.depth,0,me,ae,null):t.texImage2D(J,te,fe,ze,K,0,me,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,J,n.get(B).__webglTexture,0,Pe(b)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,J,n.get(B).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(E,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let ee=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||pe(b)){let J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Yn?ee=s.DEPTH_COMPONENT32F:J.type===li&&(ee=s.DEPTH_COMPONENT24));let te=Pe(b);pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let ee=Pe(b);B&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<ee.length;J++){let te=ee[J],me=r.convert(te.format,te.colorSpace),ae=r.convert(te.type),fe=S(te.internalFormat,me,ae,te.colorSpace),we=Pe(b);B&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,fe,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let ee=n.get(b.depthTexture).__webglTexture,J=Pe(b);if(b.depthTexture.format===Ui)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(b.depthTexture.format===vs)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Te(E){let b=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,E)}else if(B){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ue(b.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ue(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(E,b,B){let ee=n.get(E);b!==void 0&&ge(ee.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Te(E)}function k(E){let b=E.texture,B=n.get(E),ee=n.get(b);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,o.memory.textures++);let J=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,me=m(E)||a;if(J){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let fe=0;fe<b.mipmaps.length;fe++)B.__webglFramebuffer[ae][fe]=s.createFramebuffer()}else B.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)B.__webglFramebuffer[ae]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){let ae=E.texture;for(let fe=0,we=ae.length;fe<we;fe++){let ze=n.get(ae[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&pe(E)===!1){let ae=te?b:[b];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let we=ae[fe];B.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);let ze=r.convert(we.format,we.colorSpace),K=r.convert(we.type),Qe=S(we.internalFormat,ze,K,we.colorSpace,E.isXRRenderTarget===!0),Ge=Pe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Qe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),G(s.TEXTURE_CUBE_MAP,b,me);for(let ae=0;ae<6;ae++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ge(B.__webglFramebuffer[ae][fe],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ge(B.__webglFramebuffer[ae],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(b,me)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let ae=E.texture;for(let fe=0,we=ae.length;fe<we;fe++){let ze=ae[fe],K=n.get(ze);t.bindTexture(s.TEXTURE_2D,K.__webglTexture),G(s.TEXTURE_2D,ze,me),ge(B.__webglFramebuffer,E,ze,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),x(ze,me)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ae=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),G(ae,b,me),a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ge(B.__webglFramebuffer[fe],E,b,s.COLOR_ATTACHMENT0,ae,fe);else ge(B.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,ae,0);x(b,me)&&y(ae),t.unbindTexture()}E.depthBuffer&&Te(E)}function Nt(E){let b=m(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,J=B.length;ee<J;ee++){let te=B[ee];if(x(te,b)){let me=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(te).__webglTexture;t.bindTexture(me,ae),y(me),t.unbindTexture()}}}function Me(E){if(a&&E.samples>0&&pe(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,ee=E.height,J=s.COLOR_BUFFER_BIT,te=[],me=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(E),fe=E.isWebGLMultipleRenderTargets===!0;if(fe)for(let we=0;we<b.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let we=0;we<b.length;we++){te.push(s.COLOR_ATTACHMENT0+we),E.depthBuffer&&te.push(me);let ze=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ze===!1&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),fe){let K=n.get(b[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<b.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);let ze=n.get(b[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(E){return Math.min(i.maxSamples,E.samples)}function pe(E){let b=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(E){let b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function ke(E,b){let B=E.colorSpace,ee=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===$a||B!==Tt&&B!==dn&&(et.getTransfer(B)===ct?a===!1?e.has("EXT_sRGB")===!0&&ee===un?(E.format=$a,E.minFilter=Yt,E.generateMipmaps=!1):b=so.sRGBToLinear(b):(ee!==un||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=I,this.resetTextureUnits=X,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function _0(s,e,t){let n=t.isWebGL2;function i(r,o=dn){let a,l=et.getTransfer(o);if(r===di)return s.UNSIGNED_BYTE;if(r===xu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$d)return s.BYTE;if(r===Zd)return s.SHORT;if(r===Tl)return s.UNSIGNED_SHORT;if(r===yu)return s.INT;if(r===li)return s.UNSIGNED_INT;if(r===Yn)return s.FLOAT;if(r===tr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kd)return s.ALPHA;if(r===un)return s.RGBA;if(r===Jd)return s.LUMINANCE;if(r===Qd)return s.LUMINANCE_ALPHA;if(r===Ui)return s.DEPTH_COMPONENT;if(r===vs)return s.DEPTH_STENCIL;if(r===$a)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ef)return s.RED;if(r===bu)return s.RED_INTEGER;if(r===tf)return s.RG;if(r===Mu)return s.RG_INTEGER;if(r===Su)return s.RGBA_INTEGER;if(r===ua||r===da||r===fa||r===pa)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oc||r===Fc||r===Bc||r===kc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Oc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zc||r===Hc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zc)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===jc||r===$c||r===Zc||r===Kc||r===Jc||r===Qc||r===eh||r===th)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===th)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ma||r===nh||r===ih)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ma)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ih)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nf||r===sh||r===rh||r===oh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var cl=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hl=class extends Pn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,x=[],y=[],S=new Ae,P=null,T=new wt;T.layers.enable(1),T.viewport=new rt;let A=new wt;A.layers.enable(2),A.viewport=new rt;let D=[T,A],v=new cl;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=x[G];return $===void 0&&($=new Qs,x[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=x[G];return $===void 0&&($=new Qs,x[G]=$),$.getGripSpace()},this.getHand=function(G){let $=x[G];return $===void 0&&($=new Qs,x[G]=$),$.getHandSpace()};function N(G){let $=y.indexOf(G.inputSource);if($===-1)return;let le=x[$];le!==void 0&&(le.update(G.inputSource,G.frame,c||o),le.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",I);for(let G=0;G<x.length;G++){let $=y[G];$!==null&&(y[G]=null,x[G].disconnect($))}w=null,O=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",X),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new $n(f.framebufferWidth,f.framebufferHeight,{format:un,type:di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,le=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?vs:Ui,le=_.stencil?Ni:li);let ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new $n(d.textureWidth,d.textureHeight,{format:un,type:di,depthTexture:new fo(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(G){for(let $=0;$<G.removed.length;$++){let le=G.removed[$],ye=y.indexOf(le);ye>=0&&(y[ye]=null,x[ye].disconnect(le))}for(let $=0;$<G.added.length;$++){let le=G.added[$],ye=y.indexOf(le);if(ye===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=y.length){y.push(le),ye=Ue;break}else if(y[Ue]===null){y[Ue]=le,ye=Ue;break}if(ye===-1)break}let ge=x[ye];ge&&ge.connect(le)}}let F=new C,W=new C;function j(G,$,le){F.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);let ye=F.distanceTo(W),ge=$.projectionMatrix.elements,Ue=le.projectionMatrix.elements,Oe=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),Ye=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],Nt=(ge[8]-1)/ge[0],Me=(Ue[8]+1)/Ue[0],Pe=Oe*Nt,pe=Oe*Me,lt=ye/(-Nt+Me),ke=lt*-Nt;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ke),G.translateZ(lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let E=Oe+lt,b=Te+lt,B=Pe-ke,ee=pe+(ye-ke),J=Ye*Te/b*E,te=k*Te/b*E;G.projectionMatrix.makePerspective(B,ee,J,te,E,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.near=A.near=T.near=G.near,v.far=A.far=T.far=G.far,(w!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);let $=G.parent,le=v.cameras;Y(v,$);for(let ye=0;ye<le.length;ye++)Y(le[ye],$);le.length===2?j(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),q(G,v,$)};function q(G,$,le){le===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ms*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Z=null;function ne(G,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ye=!1;le.length!==v.cameras.length&&(v.cameras.length=0,ye=!0);for(let ge=0;ge<le.length;ge++){let Ue=le[ge],Oe=null;if(f!==null)Oe=f.getViewport(Ue);else{let Ye=u.getViewSubImage(d,Ue);Oe=Ye.viewport,ge===0&&(e.setRenderTargetTextures(p,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(p))}let Te=D[ge];Te===void 0&&(Te=new wt,Te.layers.enable(ge),Te.viewport=new rt,D[ge]=Te),Te.matrix.fromArray(Ue.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ue.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ge===0&&(v.matrix.copy(Te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ye===!0&&v.cameras.push(Te)}}for(let le=0;le<x.length;le++){let ye=y[le],ge=x[le];ye!==null&&ge!==void 0&&ge.update(ye,$,c||o)}Z&&Z(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ce=new Iu;ce.setAnimationLoop(ne),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}};function x0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v0(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){let S=y.program;n.uniformBlockBinding(x,S)}function c(x,y){let S=i[x.id];S===void 0&&(g(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(x,P);let T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){let y=u();x.__bindingPointIndex=y;let S=s.createBuffer(),P=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=i[x.id],S=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,A=S.length;T<A;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,w=D.length;v<w;v++){let O=D[v];if(f(O,T,v,P)===!0){let N=O.__offset,X=Array.isArray(O.value)?O.value:[O.value],I=0;for(let F=0;F<X.length;F++){let W=X[F],j=_(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,N+I,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,I),I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,S,P){let T=x.value,A=y+"_"+S;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{let D=P[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return P[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(x){let y=x.uniforms,S=0,P=16;for(let A=0,D=y.length;A<D;A++){let v=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,O=v.length;w<O;w++){let N=v[w],X=Array.isArray(N.value)?N.value:[N.value];for(let I=0,F=X.length;I<F;I++){let W=X[I],j=_(W),Y=S%P;Y!==0&&P-Y<j.boundary&&(S+=P-Y),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=j.storage}}}let T=S%P;return T>0&&(S+=P-T),x.__size=S,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var sr=class{constructor(e={}){let{canvas:t=Cf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;let y=this,S=!1,P=0,T=0,A=null,D=-1,v=null,w=new rt,O=new rt,N=null,X=new Ee(0),I=0,F=t.width,W=t.height,j=1,Y=null,q=null,Z=new rt(0,0,F,W),ne=new rt(0,0,F,W),ce=!1,G=new ir,$=!1,le=!1,ye=null,ge=new qe,Ue=new Ae,Oe=new C,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?j:1}let k=n;function Nt(M,U){for(let H=0;H<M.length;H++){let V=M[H],z=t.getContext(V,U);if(z!==null)return z}return null}try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),k===null){let U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),k=Nt(U,M),k===null)throw Nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Pe,pe,lt,ke,E,b,B,ee,J,te,me,ae,fe,we,ze,K,Qe,Ge,Le,be,he,R,ie;function _e(){Me=new kg(k),Pe=new Dg(k,Me,e),Me.init(Pe),he=new _0(k,Me,Pe),pe=new m0(k,Me,Pe),lt=new Vg(k),ke=new i0,E=new g0(k,Me,pe,ke,Pe,he,lt),b=new Ug(y),B=new Bg(y),ee=new Zf(k,Pe),R=new Lg(k,Me,ee,Pe),J=new zg(k,ee,lt,R),te=new qg(k,J,ee,lt),Ge=new Xg(k,Pe,E),ze=new Ng(ke),me=new n0(y,b,B,Me,Pe,R,ze),ae=new x0(y,ke),fe=new r0,we=new u0(Me,Pe),Qe=new Pg(y,b,B,pe,te,d,l),K=new p0(y,te,Pe),ie=new v0(k,lt,Pe,pe),Le=new Ig(k,Me,lt,Pe),be=new Hg(k,Me,lt,Pe),lt.programs=me.programs,y.capabilities=Pe,y.extensions=Me,y.properties=ke,y.renderLists=fe,y.shadowMap=K,y.state=pe,y.info=lt}_e();let de=new hl(y,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(F,W,!1))},this.getSize=function(M){return M.set(F,W)},this.setSize=function(M,U,H=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=M,W=U,t.width=Math.floor(M*j),t.height=Math.floor(U*j),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(F*j,W*j).floor()},this.setDrawingBufferSize=function(M,U,H){F=M,W=U,j=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,U,H,V){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,U,H,V),pe.viewport(w.copy(Z).multiplyScalar(j).floor())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,U,H,V){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,H,V),pe.scissor(O.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){pe.setScissorTest(ce=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let z=!1;if(A!==null){let ue=A.texture.format;z=ue===Su||ue===Mu||ue===bu}if(z){let ue=A.texture.type,xe=ue===di||ue===li||ue===Tl||ue===Ni||ue===xu||ue===vu,Ce=Qe.getClearColor(),Ie=Qe.getClearAlpha(),We=Ce.r,Fe=Ce.g,He=Ce.b;xe?(f[0]=We,f[1]=Fe,f[2]=He,f[3]=Ie,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=We,g[1]=Fe,g[2]=He,g[3]=Ie,k.clearBufferiv(k.COLOR,0,g))}else V|=k.COLOR_BUFFER_BIT}U&&(V|=k.DEPTH_BUFFER_BIT),H&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),we.dispose(),ke.dispose(),b.dispose(),B.dispose(),te.dispose(),R.dispose(),ie.dispose(),me.dispose(),de.dispose(),de.removeEventListener("sessionstart",_t),de.removeEventListener("sessionend",Je),ye&&(ye.dispose(),ye=null),Mt.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let M=lt.autoReset,U=K.enabled,H=K.autoUpdate,V=K.needsUpdate,z=K.type;_e(),lt.autoReset=M,K.enabled=U,K.autoUpdate=H,K.needsUpdate=V,K.type=z}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let U=M.target;U.removeEventListener("dispose",oe),Re(U)}function Re(M){Se(M),ke.remove(M)}function Se(M){let U=ke.get(M).programs;U!==void 0&&(U.forEach(function(H){me.releaseProgram(H)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,z,ue){U===null&&(U=Te);let xe=z.isMesh&&z.matrixWorld.determinant()<0,Ce=ud(M,U,H,V,z);pe.setMaterial(V,xe);let Ie=H.index,We=1;if(V.wireframe===!0){if(Ie=J.getWireframeAttribute(H),Ie===void 0)return;We=2}let Fe=H.drawRange,He=H.attributes.position,yt=Fe.start*We,Jt=(Fe.start+Fe.count)*We;ue!==null&&(yt=Math.max(yt,ue.start*We),Jt=Math.min(Jt,(ue.start+ue.count)*We)),Ie!==null?(yt=Math.max(yt,0),Jt=Math.min(Jt,Ie.count)):He!=null&&(yt=Math.max(yt,0),Jt=Math.min(Jt,He.count));let Lt=Jt-yt;if(Lt<0||Lt===1/0)return;R.setup(z,V,Ce,H,Ie);let kn,ut=Le;if(Ie!==null&&(kn=ee.get(Ie),ut=be,ut.setIndex(kn)),z.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*Ye()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(z.isLine){let Xe=V.linewidth;Xe===void 0&&(Xe=1),pe.setLineWidth(Xe*Ye()),z.isLineSegments?ut.setMode(k.LINES):z.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else z.isPoints?ut.setMode(k.POINTS):z.isSprite&&ut.setMode(k.TRIANGLES);if(z.isBatchedMesh)ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ut.renderInstances(yt,Lt,z.count);else if(H.isInstancedBufferGeometry){let Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,aa=Math.min(H.instanceCount,Xe);ut.renderInstances(yt,Lt,aa)}else ut.render(yt,Lt)};function je(M,U,H){M.transparent===!0&&M.side===tn&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,Mr(M,U,H),M.side=Cn,M.needsUpdate=!0,Mr(M,U,H),M.side=tn):Mr(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),m=we.get(H),m.init(),x.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(y._useLegacyLights);let V=new Set;return M.traverse(function(z){let ue=z.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let Ce=ue[xe];je(Ce,H,z),V.add(Ce)}else je(ue,H,z),V.add(ue)}),x.pop(),m=null,V},this.compileAsync=function(M,U,H=null){let V=this.compile(M,U,H);return new Promise(z=>{function ue(){if(V.forEach(function(xe){ke.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){z(M);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $e=null;function pt(M){$e&&$e(M)}function _t(){Mt.stop()}function Je(){Mt.start()}let Mt=new Iu;Mt.setAnimationLoop(pt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(M){$e=M,de.setAnimationLoop(M),M===null?Mt.stop():Mt.start()},de.addEventListener("sessionstart",_t),de.addEventListener("sessionend",Je),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,A),m=we.get(M,x.length),m.init(),x.push(m),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(ge),le=this.localClippingEnabled,$=ze.init(this.clippingPlanes,le),_=fe.get(M,p.length),_.init(),p.push(_),An(M,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,q),this.info.render.frame++,$===!0&&ze.beginShadows();let H=m.state.shadowsArray;if(K.render(H,M,U),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,M),m.setupLights(y._useLegacyLights),U.isArrayCamera){let V=U.cameras;for(let z=0,ue=V.length;z<ue;z++){let xe=V[z];Sc(_,M,xe,xe.viewport)}}else Sc(_,M,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,U),R.resetDefaultState(),D=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function An(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){V&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let xe=te.update(M),Ce=M.material;Ce.visible&&_.push(M,xe,Ce,H,Oe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){let xe=te.update(M),Ce=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){let Ie=xe.groups;for(let We=0,Fe=Ie.length;We<Fe;We++){let He=Ie[We],yt=Ce[He.materialIndex];yt&&yt.visible&&_.push(M,xe,yt,H,Oe.z,He)}}else Ce.visible&&_.push(M,xe,Ce,H,Oe.z,null)}}let ue=M.children;for(let xe=0,Ce=ue.length;xe<Ce;xe++)An(ue[xe],U,H,V)}function Sc(M,U,H,V){let z=M.opaque,ue=M.transmissive,xe=M.transparent;m.setupLightsView(H),$===!0&&ze.setGlobalState(y.clippingPlanes,H),ue.length>0&&hd(z,ue,U,H),V&&pe.viewport(w.copy(V)),z.length>0&&br(z,U,H),ue.length>0&&br(ue,U,H),xe.length>0&&br(xe,U,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function hd(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ue=Pe.isWebGL2;ye===null&&(ye=new $n(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?tr:di,minFilter:fi,samples:ue?4:0})),y.getDrawingBufferSize(Ue),ue?ye.setSize(Ue.x,Ue.y):ye.setSize(io(Ue.x),io(Ue.y));let xe=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(X),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Ce=y.toneMapping;y.toneMapping=ui,br(M,H,V),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye);let Ie=!1;for(let We=0,Fe=U.length;We<Fe;We++){let He=U[We],yt=He.object,Jt=He.geometry,Lt=He.material,kn=He.group;if(Lt.side===tn&&yt.layers.test(V.layers)){let ut=Lt.side;Lt.side=Gt,Lt.needsUpdate=!0,Ec(yt,H,V,Jt,Lt,kn),Lt.side=ut,Lt.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye)),y.setRenderTarget(xe),y.setClearColor(X,I),y.toneMapping=Ce}function br(M,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=M.length;z<ue;z++){let xe=M[z],Ce=xe.object,Ie=xe.geometry,We=V===null?xe.material:V,Fe=xe.group;Ce.layers.test(H.layers)&&Ec(Ce,U,H,Ie,We,Fe)}}function Ec(M,U,H,V,z,ue){M.onBeforeRender(y,U,H,V,z,ue),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(y,U,H,V,M,ue),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,y.renderBufferDirect(H,U,V,z,M,ue),z.side=Cn,z.needsUpdate=!0,y.renderBufferDirect(H,U,V,z,M,ue),z.side=tn):y.renderBufferDirect(H,U,V,z,M,ue),M.onAfterRender(y,U,H,V,z,ue)}function Mr(M,U,H){U.isScene!==!0&&(U=Te);let V=ke.get(M),z=m.state.lights,ue=m.state.shadowsArray,xe=z.state.version,Ce=me.getParameters(M,z.state,ue,U,H),Ie=me.getProgramCacheKey(Ce),We=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?B:b).get(M.envMap||V.environment),We===void 0&&(M.addEventListener("dispose",oe),We=new Map,V.programs=We);let Fe=We.get(Ie);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===xe)return Ac(M,Ce),Fe}else Ce.uniforms=me.getUniforms(M),M.onBuild(H,Ce,y),M.onBeforeCompile(Ce,y),Fe=me.acquireProgram(Ce,Ie),We.set(Ie,Fe),V.uniforms=Ce.uniforms;let He=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=ze.uniform),Ac(M,Ce),V.needsLights=fd(M),V.lightsStateVersion=xe,V.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function wc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=_s.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ac(M,U){let H=ke.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ud(M,U,H,V,z){U.isScene!==!0&&(U=Te),E.resetTextureUnits();let ue=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,Ce=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tt,Ie=(V.isMeshStandardMaterial?B:b).get(V.envMap||xe),We=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),He=!!H.morphAttributes.position,yt=!!H.morphAttributes.normal,Jt=!!H.morphAttributes.color,Lt=ui;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let kn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=kn!==void 0?kn.length:0,Xe=ke.get(V),aa=m.state.lights;if($===!0&&(le===!0||M!==v)){let cn=M===v&&V.id===D;ze.setState(V,M,cn)}let mt=!1;V.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==aa.state.version||Xe.outputColorSpace!==Ce||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||Xe.envMap!==Ie||V.fog===!0&&Xe.fog!==ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Fe||Xe.morphTargets!==He||Xe.morphNormals!==yt||Xe.morphColors!==Jt||Xe.toneMapping!==Lt||Pe.isWebGL2===!0&&Xe.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Xe.__version=V.version);let wi=Xe.currentProgram;mt===!0&&(wi=Mr(V,U,z));let Tc=!1,Hs=!1,la=!1,zt=wi.getUniforms(),Ai=Xe.uniforms;if(pe.useProgram(wi.program)&&(Tc=!0,Hs=!0,la=!0),V.id!==D&&(D=V.id,Hs=!0),Tc||v!==M){zt.setValue(k,"projectionMatrix",M.projectionMatrix),zt.setValue(k,"viewMatrix",M.matrixWorldInverse);let cn=zt.map.cameraPosition;cn!==void 0&&cn.setValue(k,Oe.setFromMatrixPosition(M.matrixWorld)),Pe.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&zt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Hs=!0,la=!0)}if(z.isSkinnedMesh){zt.setOptional(k,z,"bindMatrix"),zt.setOptional(k,z,"bindMatrixInverse");let cn=z.skeleton;cn&&(Pe.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),zt.setValue(k,"boneTexture",cn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(zt.setOptional(k,z,"batchingTexture"),zt.setValue(k,"batchingTexture",z._matricesTexture,E));let ca=H.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Pe.isWebGL2===!0)&&Ge.update(z,H,wi),(Hs||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,zt.setValue(k,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ai.envMap.value=Ie,Ai.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Hs&&(zt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&dd(Ai,la),ue&&V.fog===!0&&ae.refreshFogUniforms(Ai,ue),ae.refreshMaterialUniforms(Ai,V,j,W,ye),_s.upload(k,wc(Xe),Ai,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_s.upload(k,wc(Xe),Ai,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&zt.setValue(k,"center",z.center),zt.setValue(k,"modelViewMatrix",z.modelViewMatrix),zt.setValue(k,"normalMatrix",z.normalMatrix),zt.setValue(k,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let cn=V.uniformsGroups;for(let ha=0,pd=cn.length;ha<pd;ha++)if(Pe.isWebGL2){let Rc=cn[ha];ie.update(Rc,wi),ie.bind(Rc,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function dd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function fd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,H){ke.get(M.texture).__webglTexture=U,ke.get(M.depthTexture).__webglTexture=H;let V=ke.get(M);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){let H=ke.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){A=M,P=U,T=H;let V=!0,z=null,ue=!1,xe=!1;if(M){let Ie=ke.get(M);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(k.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?E.setupRenderTarget(M):Ie.__hasExternalTextures&&E.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);let We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(xe=!0);let Fe=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?z=Fe[U][H]:z=Fe[U],ue=!0):Pe.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?z=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[H]:z=Fe,w.copy(M.viewport),O.copy(M.scissor),N=M.scissorTest}else w.copy(Z).multiplyScalar(j).floor(),O.copy(ne).multiplyScalar(j).floor(),N=ce;if(pe.bindFramebuffer(k.FRAMEBUFFER,z)&&Pe.drawBuffers&&V&&pe.drawBuffers(M,z),pe.viewport(w),pe.scissor(O),pe.setScissorTest(N),ue){let Ie=ke.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,H)}else if(xe){let Ie=ke.get(M.texture),We=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,We)}D=-1},this.readRenderTargetPixels=function(M,U,H,V,z,ue,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){pe.bindFramebuffer(k.FRAMEBUFFER,Ce);try{let Ie=M.texture,We=Ie.format,Fe=Ie.type;if(We!==un&&he.convert(We)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=Fe===tr&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Fe!==di&&he.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Yn&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-z&&k.readPixels(U,H,V,z,he.convert(We),he.convert(Fe),ue)}finally{let Ie=A!==null?ke.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(M,U,H=0){let V=Math.pow(2,-H),z=Math.floor(U.image.width*V),ue=Math.floor(U.image.height*V);E.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,M.x,M.y,z,ue),pe.unbindTexture()},this.copyTextureToTexture=function(M,U,H,V=0){let z=U.image.width,ue=U.image.height,xe=he.convert(H.format),Ce=he.convert(H.type);E.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,M.x,M.y,z,ue,xe,Ce,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,V,M.x,M.y,xe,Ce,U.image),V===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H,V,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,Ce=M.max.z-M.min.z+1,Ie=he.convert(V.format),We=he.convert(V.type),Fe;if(V.isData3DTexture)E.setTexture3D(V,0),Fe=k.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)E.setTexture2DArray(V,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let He=k.getParameter(k.UNPACK_ROW_LENGTH),yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Jt=k.getParameter(k.UNPACK_SKIP_PIXELS),Lt=k.getParameter(k.UNPACK_SKIP_ROWS),kn=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=H.isCompressedTexture?H.mipmaps[z]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Fe,z,U.x,U.y,U.z,ue,xe,Ce,Ie,We,ut.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Fe,z,U.x,U.y,U.z,ue,xe,Ce,Ie,ut.data)):k.texSubImage3D(Fe,z,U.x,U.y,U.z,ue,xe,Ce,Ie,We,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Lt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,kn),z===0&&V.generateMipmaps&&k.generateMipmap(Fe),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){P=0,T=0,A=null,pe.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===No?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Oi:Au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?ht:Tt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ul=class extends sr{};ul.prototype.isWebGL1Renderer=!0;var po=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new C,or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Zh=new C,Kh=new rt,Jh=new rt,b0=new C,Qh=new qe,Xr=new C,ka=new sn,eu=new qe,za=new pi,mo=class extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),e.ray.intersectsSphere(ka)!==!1&&(eu.copy(i).invert(),za.copy(e.ray).applyMatrix4(eu),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Kh.fromBufferAttribute(i.attributes.skinIndex,e),Jh.fromBufferAttribute(i.attributes.skinWeight,e),Zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Jh.getComponent(r);if(o!==0){let a=Kh.getComponent(r);Qh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(b0.copy(Zh).applyMatrix4(Qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ar=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},dl=class extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Et,h=Et,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tu=new qe,M0=new qe,go=class s{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:M0;tu.multiplyMatrices(a,t[r]),tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new dl(t,e,e,un,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ar),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ki=class extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},us=new qe,nu=new qe,qr=[],iu=new Kt,S0=new qe,qs=new De,Ys=new sn,_o=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),iu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(iu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ys.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),nu.multiplyMatrices(n,us),qs.matrixWorld=nu,qs.raycast(e,qr);for(let o=0,a=qr.length;o<a;o++){let l=qr[o];l.instanceId=r,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Kn=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},su=new C,ru=new C,ou=new qe,Ha=new pi,Yr=new sn,mi=class extends dt{constructor(e=new vt,t=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)su.fromBufferAttribute(t,i-1),ru.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=su.distanceTo(ru);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;ou.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=p,S=x-1;y<S;y+=f){let P=g.getX(y),T=g.getX(y+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,T),Ha.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,S=x-1;y<S;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Ha.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},au=new C,lu=new C,zi=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)au.fromBufferAttribute(t,i),lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+au.distanceTo(lu);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yo=class extends mi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},lr=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cu=new qe,fl=new pi,jr=new sn,$r=new C,xo=class extends dt{constructor(e=new vt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;cu.copy(i).invert(),fl.copy(e.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);$r.fromBufferAttribute(u,m),hu($r,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)$r.fromBufferAttribute(u,g),hu($r,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hu(s,e,t,n,i,r,o){let a=fl.distanceSqToPoint(s);if(a<t){let l=new C;fl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var vo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bo=class s extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cs=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function x(){let S=new C,P=new C,T=0,A=(t-e)/n;for(let D=0;D<=r;D++){let v=[],w=D/r,O=w*(t-e)+e;for(let N=0;N<=i;N++){let X=N/i,I=X*l+a,F=Math.sin(I),W=Math.cos(I);P.x=O*F,P.y=-w*n+m,P.z=O*W,u.push(P.x,P.y,P.z),S.set(F,A,W).normalize(),d.push(S.x,S.y,S.z),f.push(X,1-w),v.push(g++)}_.push(v)}for(let D=0;D<i;D++)for(let v=0;v<r;v++){let w=_[v][D],O=_[v+1][D],N=_[v+1][D+1],X=_[v][D+1];h.push(w,O,X),h.push(O,N,X),T+=6}c.addGroup(p,T,0),p+=T}function y(S){let P=g,T=new Ae,A=new C,D=0,v=S===!0?e:t,w=S===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let O=g;for(let N=0;N<=i;N++){let I=N/i*l+a,F=Math.cos(I),W=Math.sin(I);A.x=v*W,A.y=m*w,A.z=v*F,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=F*.5+.5,T.y=W*.5*w+.5,f.push(T.x,T.y),g++}for(let N=0;N<i;N++){let X=P+N,I=O+N;S===!0?h.push(I,I+1,X):h.push(I+1,I,X),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class s extends Cs{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var So=class s extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new C,g=new Ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let x=p+m,y=x,S=x+n+1,P=x+n+2,T=x+1;a.push(y,S,T),a.push(S,P,T)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var cr=class s extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){let T=P/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let y=h[p][x+1],S=h[p][x],P=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(y,S,T),(p!==n-1||l<Math.PI)&&f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Eo=class s extends vt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new C,d=new C,f=new C,g=new C,_=new C,m=new C,p=new C;for(let y=0;y<=n;++y){let S=y/n*r*Math.PI*2;x(S,r,o,e,f),x(S+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let P=0;P<=i;++P){let T=P/i*Math.PI*2,A=-t*Math.cos(T),D=t*Math.sin(T);u.x=f.x+(A*p.x+D*_.x),u.y=f.y+(A*p.y+D*_.y),u.z=f.z+(A*p.z+D*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(P/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){let P=(i+1)*(y-1)+(S-1),T=(i+1)*y+(S-1),A=(i+1)*y+S,D=(i+1)*(y-1)+S;a.push(P,T,D),a.push(T,A,D)}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2));function x(y,S,P,T,A){let D=Math.cos(y),v=Math.sin(y),w=P/S*y,O=Math.cos(w);A.x=T*(2+O)*.5*D,A.y=T*(2+O)*v*.5,A.z=T*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var Pt=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends Pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Zr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function E0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function w0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Bu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:r=e,a=2*t-n;break;case ch:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:o=e,l=2*n-t;break;case ch:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+x*o[c+P]+y*o[l+P]+S*o[u+P];return r}},ml=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zr(t,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zr(e.times,Array),values:Zr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Bi:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Bi;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&E0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ga,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Bi;var _i=class extends mn{};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=bs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends mn{};wo.prototype.ValueTypeName="color";var Jn=class extends mn{};Jn.prototype.ValueTypeName="number";var _l=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ln=class extends mn{InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};Ln.prototype.ValueTypeName="quaternion";Ln.prototype.DefaultInterpolation=Bi;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends mn{};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=bs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends mn{};Qn.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t=-1,n,i=sf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(T0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=w0(l);l=uu(l,1,h),c=uu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Jn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];Bu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){let y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Jn(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Qn,f+".position",d,"pos",i),n(Ln,f+".quaternion",d,"rot",i),n(Qn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function A0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jn;case"vector":case"vector2":case"vector3":case"vector4":return Qn;case"color":return wo;case"quaternion":return Ln;case"bool":case"boolean":return _i;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function T0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=A0(s.type);if(s.times===void 0){let t=[],n=[];Bu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},yl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},R0=new yl,ei=class{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xn={},xl=class extends Error{constructor(e,t){super(e),this.response=t}},hr=class extends ei{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let D=h[T];D.onProgress&&D.onProgress(P)}p.enqueue(S),x()}})}}});return new Response(m)}else throw new xl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(e,c);let h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var vl=class extends ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=nr("img");function l(){h(),ci.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var To=class extends ei{constructor(e){super(e)}load(e,t,n,i){let r=new Ft,o=new vl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ps=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ro=class extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Va=new qe,du=new C,fu=new C,ur=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bl=class extends ur{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Co=class extends Ps{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pu=new qe,js=new C,Ga=new C,Ml=class extends ur{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Ga.copy(n.position),Ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}},Ls=class extends Ps{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sl=class extends ur{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hi=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ci.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(e,l),r.manager.itemStart(e)}};var Ll="\\[\\]\\.:\\/",C0=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",P0="[^"+Ll.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",Il),I0=/(WCOD+)?/.source.replace("WCOD",P0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),N0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),U0=new RegExp("^"+L0+I0+D0+N0+"$"),O0=["material","materials","bones","map"],El=class{constructor(e,t,n){let i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(e){let t=U0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=El;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ry=new Float32Array(1);var dr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lo=class extends zi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new vt;h.setAttribute("position",new it(l,3)),h.setAttribute("color",new it(c,3));let u=new Kn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var zu={type:"change"},Dl={type:"start"},Hu={type:"end"},Oo=new pi,Vu=new Mn,F0=Math.cos(70*ft.DEG2RAD),Fo=class extends Pn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",we),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zu),n.update(),r=i.NONE},this.update=(function(){let R=new C,ie=new xt().setFromUnitVectors(e.up,new C(0,1,0)),_e=ie.clone().invert(),de=new C,Q=new xt,L=new C,se=2*Math.PI;return function(Re=null){let Se=n.object.position;R.copy(Se).sub(n.target),R.applyQuaternion(ie),a.setFromVector3(R),n.autoRotate&&r===i.NONE&&N(w(Re)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let je=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(je)&&isFinite($e)&&(je<-Math.PI?je+=se:je>Math.PI&&(je-=se),$e<-Math.PI?$e+=se:$e>Math.PI&&($e-=se),je<=$e?a.theta=Math.max(je,Math.min($e,a.theta)):a.theta=a.theta>(je+$e)/2?Math.max(je,a.theta):Math.min($e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(_e),Se.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let pt=!1;if(n.zoomToCursor&&T){let _t=null;if(n.object.isPerspectiveCamera){let Je=R.length();_t=Z(Je*c);let Mt=Je-_t;n.object.position.addScaledVector(S,Mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Je=new C(P.x,P.y,0);Je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pt=!0;let Mt=new C(P.x,P.y,0);Mt.unproject(n.object),n.object.position.sub(Mt).add(Je),n.object.updateMatrixWorld(),_t=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;_t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(_t).add(n.object.position):(Oo.origin.copy(n.object.position),Oo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Oo.direction))<F0?e.lookAt(n.target):(Vu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Oo.intersectPlane(Vu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pt=!0);return c=1,T=!1,pt||de.distanceToSquared(n.object.position)>o||8*(1-Q.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(zu),de.copy(n.object.position),Q.copy(n.object.quaternion),L.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qe),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",we),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new dr,l=new dr,c=1,h=new C,u=new Ae,d=new Ae,f=new Ae,g=new Ae,_=new Ae,m=new Ae,p=new Ae,x=new Ae,y=new Ae,S=new C,P=new Ae,T=!1,A=[],D={},v=!1;function w(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function O(R){let ie=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*ie)}function N(R){l.theta-=R}function X(R){l.phi-=R}let I=(function(){let R=new C;return function(_e,de){R.setFromMatrixColumn(de,0),R.multiplyScalar(-_e),h.add(R)}})(),F=(function(){let R=new C;return function(_e,de){n.screenSpacePanning===!0?R.setFromMatrixColumn(de,1):(R.setFromMatrixColumn(de,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(_e),h.add(R)}})(),W=(function(){let R=new C;return function(_e,de){let Q=n.domElement;if(n.object.isPerspectiveCamera){let L=n.object.position;R.copy(L).sub(n.target);let se=R.length();se*=Math.tan(n.object.fov/2*Math.PI/180),I(2*_e*se/Q.clientHeight,n.object.matrix),F(2*de*se/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(_e*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),F(de*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R,ie){if(!n.zoomToCursor)return;T=!0;let _e=n.domElement.getBoundingClientRect(),de=R-_e.left,Q=ie-_e.top,L=_e.width,se=_e.height;P.x=de/L*2-1,P.y=-(Q/se)*2+1,S.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ne(R){u.set(R.clientX,R.clientY)}function ce(R){q(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function G(R){g.set(R.clientX,R.clientY)}function $(R){d.set(R.clientX,R.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ie=n.domElement;N(2*Math.PI*f.x/ie.clientHeight),X(2*Math.PI*f.y/ie.clientHeight),u.copy(d),n.update()}function le(R){x.set(R.clientX,R.clientY),y.subVectors(x,p),y.y>0?j(O(y.y)):y.y<0&&Y(O(y.y)),p.copy(x),n.update()}function ye(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_),n.update()}function ge(R){q(R.clientX,R.clientY),R.deltaY<0?Y(O(R.deltaY)):R.deltaY>0&&j(O(R.deltaY)),n.update()}function Ue(R){let ie=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),n.update())}function Oe(R){if(A.length===1)u.set(R.pageX,R.pageY);else{let ie=he(R),_e=.5*(R.pageX+ie.x),de=.5*(R.pageY+ie.y);u.set(_e,de)}}function Te(R){if(A.length===1)g.set(R.pageX,R.pageY);else{let ie=he(R),_e=.5*(R.pageX+ie.x),de=.5*(R.pageY+ie.y);g.set(_e,de)}}function Ye(R){let ie=he(R),_e=R.pageX-ie.x,de=R.pageY-ie.y,Q=Math.sqrt(_e*_e+de*de);p.set(0,Q)}function k(R){n.enableZoom&&Ye(R),n.enablePan&&Te(R)}function Nt(R){n.enableZoom&&Ye(R),n.enableRotate&&Oe(R)}function Me(R){if(A.length==1)d.set(R.pageX,R.pageY);else{let _e=he(R),de=.5*(R.pageX+_e.x),Q=.5*(R.pageY+_e.y);d.set(de,Q)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ie=n.domElement;N(2*Math.PI*f.x/ie.clientHeight),X(2*Math.PI*f.y/ie.clientHeight),u.copy(d)}function Pe(R){if(A.length===1)_.set(R.pageX,R.pageY);else{let ie=he(R),_e=.5*(R.pageX+ie.x),de=.5*(R.pageY+ie.y);_.set(_e,de)}m.subVectors(_,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(_)}function pe(R){let ie=he(R),_e=R.pageX-ie.x,de=R.pageY-ie.y,Q=Math.sqrt(_e*_e+de*de);x.set(0,Q),y.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),j(y.y),p.copy(x);let L=(R.pageX+ie.x)*.5,se=(R.pageY+ie.y)*.5;q(L,se)}function lt(R){n.enableZoom&&pe(R),n.enablePan&&Pe(R)}function ke(R){n.enableZoom&&pe(R),n.enableRotate&&Me(R)}function E(R){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",B)),Ge(R),R.pointerType==="touch"?ze(R):ee(R))}function b(R){n.enabled!==!1&&(R.pointerType==="touch"?K(R):J(R))}function B(R){Le(R),A.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(Hu),r=i.NONE}function ee(R){let ie;switch(R.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Vi.DOLLY:if(n.enableZoom===!1)return;ce(R),r=i.DOLLY;break;case Vi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;G(R),r=i.PAN}else{if(n.enableRotate===!1)return;ne(R),r=i.ROTATE}break;case Vi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ne(R),r=i.ROTATE}else{if(n.enablePan===!1)return;G(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Dl)}function J(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(R);break;case i.DOLLY:if(n.enableZoom===!1)return;le(R);break;case i.PAN:if(n.enablePan===!1)return;ye(R);break}}function te(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Dl),ge(me(R)),n.dispatchEvent(Hu))}function me(R){let ie=R.deltaMode,_e={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ie){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return R.ctrlKey&&!v&&(_e.deltaY*=10),_e}function ae(R){R.key==="Control"&&(v=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(R){R.key==="Control"&&(v=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function we(R){n.enabled===!1||n.enablePan===!1||Ue(R)}function ze(R){switch(be(R),A.length){case 1:switch(n.touches.ONE){case Gi.ROTATE:if(n.enableRotate===!1)return;Oe(R),r=i.TOUCH_ROTATE;break;case Gi.PAN:if(n.enablePan===!1)return;Te(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(R),r=i.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Dl)}function K(R){switch(be(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Pe(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;lt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(R),n.update();break;default:r=i.NONE}}function Qe(R){n.enabled!==!1&&R.preventDefault()}function Ge(R){A.push(R.pointerId)}function Le(R){delete D[R.pointerId];for(let ie=0;ie<A.length;ie++)if(A[ie]==R.pointerId){A.splice(ie,1);return}}function be(R){let ie=D[R.pointerId];ie===void 0&&(ie=new Ae,D[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function he(R){let ie=R.pointerId===A[0]?A[1]:A[0];return D[ie]}n.domElement.addEventListener("contextmenu",Qe),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}};function Nl(s,e){if(e===wu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fr||e===Do){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===fr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Bo=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new ec(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=xi.extractUrlBase(e);o=xi.resolveURL(c,this.path)}else o=xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yu){try{o[Ze.KHR_BINARY_GLTF]=new tc(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new lc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new kl;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new nc(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new ic;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new sc;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function B0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bl=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Tt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ls(h),c.distance=u;break;case"spot":c=new Co(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},kl=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(i)}},zl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Hl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(r)}},Vl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Gl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Wl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Xl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],Tt),Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Yl=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],Tt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}},jl=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},$l=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Zl=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Kl=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Jl=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ql=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},ec=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new qe,m=new C,p=new xt,x=new C(1,1,1),y=new _o(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(m,p,x));for(let S in l)if(S==="_COLOR_0"){let P=l[S];y.instanceColor=new ki(P.array,P.itemSize,P.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Yu="glTF",pr=12,Gu={JSON:1313821514,BIN:5130562},tc=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-pr,r=new DataView(e,pr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Gu.JSON){let c=new Uint8Array(e,pr+o,a);this.content=n.decode(c)}else if(l===Gu.BIN){let c=pr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=oc[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=oc[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ds[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,Tt,d)})})}},ic=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},sc=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},ko=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let S=0;S!==a;S++){let P=o[_+S+a],T=o[_+S+l]*h,A=o[g+S+a],D=o[g+S]*h;r[S]=x*P+y*T+m*A+p*D}return r}},k0=new xt,rc=class extends ko{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return k0.fromArray(r).normalize().toArray(r),r}},gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wu={9728:Et,9729:Yt,9984:Jr,9985:Al,9986:$s,9987:fi},Xu={33071:nn,33648:er,10497:Fi},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z0={CUBICSPLINE:void 0,LINEAR:Bi,STEP:bs},Ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function Wi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V0(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function G0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W0(s){let e,t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fl(t.attributes):e=s.indices+":"+Fl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Fl(s.targets[n]);return e}function Fl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ac(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function X0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var q0=new qe,lc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new B0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new To(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Wi(r,a,i),bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(xi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ul[i.type],a=Ds[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ul[i.type],c=Ds[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(x);y||(_=new c(a,p*f,i.count*f/h),y=new rr(_,f/h),t.cache.add(x,y)),m=new or(y,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new At(_,l,g);if(i.sparse!==void 0){let p=Ul.SCALAR,x=Ds[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,P=new x(o[1],y,i.sparse.count*p),T=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=P.length;A<D;A++){let v=P[A];if(m.setX(v,T[A*l]),l>=2&&m.setY(v,T[A*l+1]),l>=3&&m.setZ(v,T[A*l+2]),l>=4&&m.setW(v,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wu[d.magFilter]||Yt,h.minFilter=Wu[d.minFilter]||fi,h.wrapS=Xu[d.wrapS]||Fi,h.wrapT=Xu[d.wrapT]||Fi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Ft(_);m.needsUpdate=!0,d(m)}),t.load(xi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||X0(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new lr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Kn,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Pt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=tn);let h=r.alphaMode||Ol.OPAQUE;if(h===Ol.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ol.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){let u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],Tt)}return r.emissiveTexture!==void 0&&o!==Bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Wi(i,u,r),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return qu(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=W0(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=qu(new vt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?H0(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,x=c[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mo(_,x):new De(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=Nl(p.geometry,Do):m.mode===gn.TRIANGLE_FAN&&(p.geometry=Nl(p.geometry,fr));else if(m.mode===gn.LINES)p=new zi(_,x);else if(m.mode===gn.LINE_STRIP)p=new mi(_,x);else if(m.mode===gn.LINE_LOOP)p=new yo(_,x);else if(m.mode===gn.POINTS)p=new xo(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&G0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),m.extensions&&Wi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Wi(i,u[0],r),u[0];let d=new Ot;r.extensions&&Wi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(ft.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new As(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new go(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let x=0,y=d.length;x<y;x++){let S=d[x],P=f[x],T=g[x],A=_[x],D=m[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let v=n._createAnimationTracks(S,P,T,A,D);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}return new Ao(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,q0)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ar:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&Wi(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),bi(r,n),n.extensions&&Wi(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof rn||d instanceof Ft)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=Jn;break;case vi.rotation:c=Ln;break;case vi.position:case vi.scale:c=Qn;break;default:switch(n.itemSize){case 1:c=Jn;break;case 2:case 3:default:c=Qn;break}break}let h=i.interpolation!==void 0?z0[i.interpolation]:Bi,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+vi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ac(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ln?rc:ko;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Y0(s,e,t){let n=e.attributes,i=new Kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=ac(Ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=ac(Ds[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new sn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qu(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=oc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Tt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),bi(s,e),Y0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?V0(s,e.targets,t):s})}var zo=class extends Rs{constructor(e=null){super();let t=new fn;t.deleteAttribute("uv");let n=new Pt({side:Gt}),i=new Pt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ls(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new De(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new De(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new De(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new De(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new De(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new De(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new De(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new De(t,Ns(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new De(t,Ns(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new De(t,Ns(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new De(t,Ns(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let x=new De(t,Ns(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let y=new De(t,Ns(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ns(s){let e=new Bt;return e.color.setScalar(s),e}var Ho=class{ratio=1;base=1;scale=1;warmup=2;seconds=0;frames=0;resize(e,t,n){let i=Math.max(1,e*t);return this.base=Math.min(1,Number.isFinite(n)&&n>0?n:1,Math.sqrt(1e6/i)),this.ratio=this.base*this.scale,this.resetSamples(),this.ratio}observe(e,t){if(!t||!Number.isFinite(e)||e<=0||e>.2)return this.resetSamples(),null;if(this.warmup>0)return this.warmup-=e,null;if(this.seconds+=e,this.frames++,this.seconds<1.5||this.frames<30)return null;let n=this.seconds/this.frames;return this.seconds=0,this.frames=0,n<=.027||this.scale<=.65?null:(this.scale=Math.max(.65,this.scale*.85),this.ratio=this.base*this.scale,this.ratio)}resetSamples(){this.warmup=2,this.seconds=0,this.frames=0}};var jt=s=>s==="damp"||s==="zero"||s==="debug",on={shoulderRest:-8,shoulderRoll:8,elbowRest:18,armResponse:.085,strideGain:260,maxSwing:20,sideSwing:7,turnSwing:6,steppingSwing:10,elbowFollow:.4,lateralRoll:4},Xi=[{id:"locomotion",title:"\u884C\u8D70",hint:"\u4E3B\u52A8\u4FDD\u6301\u5E73\u8861 \xB7 \u6447\u6746\u9A7E\u9A76",copy:"\u5DE6\u6447\u6746\u79FB\u52A8\uFF0C\u53F3\u6447\u6746\u8F6C\u8EAB\uFF1B\u677E\u5F00\u6447\u6746\u540E\u53CC\u811A\u7AD9\u7A33\uFF0C\u53EF\u5207\u6362\u4F4E\u901F / \u9AD8\u901F\u3002"},{id:"stand",title:"\u9501\u5B9A\u7AD9\u7ACB",hint:"\u4FDD\u6301\u7AD9\u59FF \xB7 \u539F\u5730\u4E92\u52A8",copy:"\u5173\u8282\u4E3B\u52A8\u7EF4\u6301\u7AD9\u59FF\uFF0C\u6447\u6746\u4E0D\u518D\u9A71\u52A8\u884C\u8D70\uFF1B\u4ECD\u53EF\u6325\u624B\u3001\u63E1\u624B\u7B49\u539F\u5730\u4E92\u52A8\u3002"},{id:"damp",title:"\u963B\u5C3C",hint:"\u5173\u8282\u6709\u963B\u529B \xB7 \u4E0D\u4E3B\u52A8\u7AD9\u7A33",copy:"\u50CF\u7ED9\u5173\u8282\u5E26\u4E0A\u5239\u8F66\uFF0C\u6709\u963B\u529B\u4F46\u4E0D\u4E3B\u52A8\u7AD9\u7A33\u3002\u7F51\u9875\u4EE5\u6162\u6162\u5012\u5730\u793A\u610F\uFF1BLB + X \u8D77\u8EAB\u3002"},{id:"zero",title:"\u96F6\u529B\u77E9",hint:"\u7535\u673A\u4E0D\u51FA\u529B \xB7 \u4E0D\u7EF4\u6301\u7AD9\u59FF",copy:"\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u5173\u8282\u653E\u677E\uFF0C\u4E5F\u4E0D\u7EF4\u6301\u7AD9\u59FF\u3002\u7F51\u9875\u4EE5\u8F83\u5FEB\u5012\u5730\u793A\u610F\uFF1BLB + X \u8D77\u8EAB\u3002"},{id:"performance",title:"\u52A8\u4F5C\u8868\u6F14",hint:"\u539F\u5730\u534F\u540C\u52A8\u4F5C \xB7 RB + \u5F69\u8272\u952E\u8DF3\u821E",copy:"\u6309\u4F4F RB\uFF0C\u518D\u6309 A / B / X / Y \u64AD\u653E\u56DB\u79CD\u821E\u8E48\u3002\u677E\u5F00\u6447\u6746\u7AD9\u7A33\u540E\u518D\u8868\u6F14\uFF1B\u5176\u4ED6\u52A8\u4F5C\u4ECD\u53EF\u4ECE\u83DC\u5355\u9009\u62E9\u3002"},{id:"debug",title:"\u8C03\u8BD5\u5B9E\u9A8C",hint:"\u865A\u62DF\u540A\u67B6\u652F\u6491 \xB7 \u6682\u505C\u8FD0\u52A8\u63A7\u5236",copy:"\u4ECE\u963B\u5C3C\u6216\u96F6\u529B\u77E9\u8FDB\u5165\uFF0C\u89C2\u5BDF\u4F4D\u7F6E\u6307\u4EE4\u3001\u5173\u8282\u8DDF\u968F\u4E0E\u89D2\u5EA6\u8BEF\u5DEE\uFF0C\u5B8C\u6210\u4E09\u4E2A\u6821\u51C6\u5C0F\u5B9E\u9A8C\u3002\u7F51\u9875\u6559\u5B66\u6269\u5C55\uFF0C\u4E0D\u8FDE\u63A5\u5B9E\u673A\u3002"}],bt={room:{minX:-3.2,maxX:3.2,minZ:-3.55,maxZ:2.1},radius:.28,slowSpeed:.24,fastSpeed:.82,turnSpeed:1.4,accelerationSeconds:.18,spawn:{x:0,z:0,yaw:Math.PI},welcome:{x:0,z:-1.55,radius:.5},visitor:{x:0,z:-3.05},destination:{x:1.3,z:-.65,radius:.55},exhibit:{x:2.35,z:-.65},obstacles:[{id:"\u5C55\u53F0\u8FB9\u7F18",x:1.97,z:-1.15,width:.76,depth:1},{id:"\u5DE6\u4FA7\u5C55\u53F0",x:-2.73,z:-1.15,width:.76,depth:1},{id:"\u6E38\u5BA2\u4F4D\u7F6E",x:-.23,z:-3.28,width:.46,depth:.46}]},qi={forward:0,strafe:0,turn:0,look:0,stop:!1,wave:!1,invite:!1,camera:!1,pause:!1};var ju={targetJointName:"left_knee_joint",targetLinkName:"left_knee_link",jointNames:{leftHipPitch:"left_hip_pitch_joint",leftKnee:"left_knee_joint",leftAnklePitch:"left_ankle_pitch_joint",rightHipPitch:"right_hip_pitch_joint",rightKnee:"right_knee_joint",rightAnklePitch:"right_ankle_pitch_joint",supportFoot:"right_ankle_roll_link",movingFoot:"left_ankle_roll_link",root:"pelvis"},motion:{ankleCompensationRatio:-.6,hipCompensationRatio:-.4,supportKneeDegrees:80,supportAnklePitchDegrees:-40,maximumPelvisDropMeters:.08,automaticTargetDegrees:45,transitionSeconds:1.15},safety:{supportMarginMeters:.018,footContactHeightMeters:.008,collisionMarginMeters:.025,scanStepDegrees:5,updateIntervalSeconds:.1,collisionPairs:[{id:"lower-legs",first:"left_knee_link",second:"right_knee_link",label:"\u5DE6\u53F3\u5C0F\u817F"},{id:"feet",first:"left_ankle_roll_link",second:"right_ankle_roll_link",label:"\u5DE6\u53F3\u811A\u90E8"},{id:"left-thigh-knee",first:"left_hip_yaw_link",second:"left_knee_link",label:"\u5DE6\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},{id:"right-thigh-knee",first:"right_hip_yaw_link",second:"right_knee_link",label:"\u53F3\u5927\u817F\u4E0E\u819D\u4E0B\u7ED3\u6784",marginMeters:.01},...["left","right"].flatMap(s=>{let e=s==="left"?"\u5DE6":"\u53F3";return[{id:`${s}-forearm-torso`,first:`${s}_elbow_link`,second:"torso_link",label:`${e}\u5C0F\u81C2\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-wrist-torso`,first:`${s}_wrist_pitch_link`,second:"torso_link",label:`${e}\u8155\u90E8\u4E0E\u8EAF\u5E72`,marginMeters:.012},{id:`${s}-thigh-torso`,first:`${s}_hip_yaw_link`,second:"torso_link",label:`${e}\u5927\u817F\u4E0E\u8EAF\u5E72`,marginMeters:.01},...["left","right"].flatMap(t=>[{id:`${s}-upper-${t}-thigh`,first:`${s}_shoulder_yaw_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5927\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012},{id:`${s}-forearm-${t}-thigh`,first:`${s}_elbow_link`,second:`${t}_hip_yaw_link`,label:`${e}\u5C0F\u81C2\u4E0E${t==="left"?"\u5DE6":"\u53F3"}\u5927\u817F`,marginMeters:.012}])]})],collisionProxyScale:{left_hip_yaw_link:[.85,.45,.85],right_hip_yaw_link:[.85,.45,.85],left_knee_link:[.9,.6,.9],right_knee_link:[.9,.6,.9],left_ankle_roll_link:[1,.9,1],right_ankle_roll_link:[1,.9,1],torso_link:[.9,.92,.9],left_shoulder_yaw_link:[.88,.88,.88],right_shoulder_yaw_link:[.88,.88,.88],left_elbow_link:[.92,.9,.9],right_elbow_link:[.92,.9,.9],left_wrist_pitch_link:[.92,.9,.9],right_wrist_pitch_link:[.92,.9,.9]}},click:{maximumDistancePixels:5,maximumDurationMilliseconds:300},servoSeconds:.12,fallDelaySeconds:.5,discoveryChain:{id:"left-leg",label:"\u5DE6\u817F \xB7 \u9ACB\u2014\u819D\u2014\u8E1D",joints:[{name:"left_hip_pitch_joint",label:"\u9ACB \xB7 \u524D\u540E\u6446",link:"left_hip_yaw_link"},{name:"left_knee_joint",label:"\u819D \xB7 \u5C48\u4F38",link:"left_knee_link"},{name:"left_ankle_pitch_joint",label:"\u8E1D \xB7 \u4FEF\u4EF0",link:"left_ankle_roll_link"}],links:["left_hip_pitch_link","left_hip_roll_link","left_hip_yaw_link","left_knee_link","left_ankle_pitch_link","left_ankle_roll_link"],presets:[{id:"shallow",label:"\u8F7B\u5C48\u819D \xB7 30\xB0",kneeDegrees:30},{id:"crouch",label:"\u534F\u540C\u4E0B\u8E72 \xB7 45\xB0",kneeDegrees:45}]},interactionLimits:Object.fromEntries(["left","right"].flatMap(s=>[[`${s}_shoulder_pitch_joint`,{min:-90,max:90}],[`${s}_shoulder_roll_joint`,s==="left"?{min:0,max:100}:{min:-100,max:0}],[`${s}_shoulder_yaw_joint`,{min:-80,max:80}],[`${s}_elbow_joint`,{min:0,max:120}]])),partControls:[...["left","right"].flatMap(s=>[["hip_pitch","\u9ACB \xB7 \u524D\u540E\u6446",220,[`${s}_hip_yaw_link`,`${s}_hip_roll_link`]],["knee","\u819D \xB7 \u72EC\u7ACB\u5C48\u4F38",260,[]],["ankle_pitch","\u8E1D \xB7 \u4FEF\u4EF0",140,[`${s}_ankle_roll_link`]]].map(([e,t,n,i])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:"y",dragSensitivity:n,aliases:[...i]}))),{jointName:"waist_yaw_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u8F6C\u52A8",dragAxis:"x",dragSensitivity:220},{jointName:"waist_roll_joint",label:"\u8170\u90E8 \xB7 \u5DE6\u53F3\u4FA7\u503E",dragAxis:"x",dragSensitivity:100},{jointName:"waist_pitch_joint",label:"\u8170\u90E8 \xB7 \u524D\u540E\u4FEF\u4EF0",dragAxis:"y",dragSensitivity:100},...["left","right"].flatMap(s=>[["shoulder_pitch","\u80A9\u90E8\u524D\u540E\u6446","y"],["shoulder_roll","\u80A9\u90E8\u4FA7\u6446","x"],["shoulder_yaw","\u80A9\u90E8\u8F6C\u52A8","x"],["elbow","\u8098\u90E8\u5C48\u4F38","y"],["wrist_roll","\u624B\u8155\u6EDA\u8F6C","x"],["wrist_pitch","\u624B\u8155\u4FEF\u4EF0","y"],["wrist_yaw","\u624B\u8155\u8F6C\u52A8","x"]].map(([e,t,n])=>({jointName:`${s}_${e}_joint`,label:`${s==="left"?"\u5DE6":"\u53F3"}${t}`,dragAxis:n,dragSensitivity:220,...e==="wrist_yaw"?{aliases:[`${s}_rubber_hand`]}:{}})))]};var mr=s=>Object.fromEntries(["left","right"].flatMap(e=>[[`${e}_hip_pitch_joint`,-s/2],[`${e}_knee_joint`,s],[`${e}_ankle_pitch_joint`,-s/2]])),ot=(s,e,t,n,i=0)=>({[`${s}_shoulder_pitch_joint`]:e,[`${s}_shoulder_roll_joint`]:t*(s==="left"?1:-1),[`${s}_elbow_joint`]:n,[`${s}_wrist_roll_joint`]:i}),kt=(s={})=>({...mr(6),...ot("left",-8,10,12),...ot("right",-8,10,12),...s}),j0=s=>s.flatMap(e=>e==="waist"?["torso_link"]:e.endsWith("arm")?[`${e.split("-")[0]}_shoulder_yaw_link`,`${e.split("-")[0]}_elbow_link`,`${e.split("-")[0]}_wrist_pitch_link`]:[`${e.split("-")[0]}_hip_yaw_link`,`${e.split("-")[0]}_knee_link`,`${e.split("-")[0]}_ankle_roll_link`]);function Wt(s,e,t,n,i,r,o){return{id:s,title:e,group:t,tags:n,description:i,links:j0(r),frames:o.map((a,l)=>{let c=o[l-1],h=c&&Object.keys(a).length===Object.keys(c).length&&Object.entries(a).every(([u,d])=>c[u]===d);return{angles:a,duration:h?.24:l===0?.85:l===o.length-1?.65:.46}})}}var En=kt({...ot("right",-75,65,60,-18)}),Us=kt({...ot("right",-75,80,68,18)}),gt=kt({...ot("left",-12,68,20),...ot("right",-12,68,20)}),Os=kt({...ot("left",-32,42,35,25),waist_yaw_joint:10}),Vo=kt({...mr(10),waist_pitch_joint:18,...ot("left",-5,12,24),...ot("right",-5,12,24)}),In=s=>kt({...ot(s,-38,48,18,20),waist_yaw_joint:s==="left"?14:-14}),Dn=kt({...ot("left",-50,18,45,30),...ot("right",-50,18,45,-30)}),Fs=kt({...ot("left",-85,45,55),...ot("right",-85,45,55)}),Mi=s=>kt({...ot("left",-30,48+s*12,45),...ot("right",-30,48-s*12,45),waist_yaw_joint:s*12}),Yi=s=>kt({...ot("left",-58,20,70),...ot("right",-58,20,70),...ot(s,-68,22,18),waist_yaw_joint:s==="left"?8:-8}),tt=kt({...ot("left",-20,30,35),...ot("right",-20,30,35)}),cc=kt({...ot("right",-45,35,50)}),Dt=(s,e)=>kt({...ot(s,-42,52,32,s==="left"?20:-20),waist_yaw_joint:e}),hc=(s,e)=>kt({...ot("left",-85,s,e),...ot("right",-85,s,e)}),an=(s,e)=>kt({...mr(s),...ot("left",-35,e,40),...ot("right",-35,e,40)}),uc=[Wt("wave","\u6325\u624B\u62DB\u547C","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u81C2\u540E\u8FDE\u7EED\u5DE6\u53F3\u6325\u624B\uFF0C\u518D\u964D\u4F4E\u624B\u81C2\u63A5\u4F4F\u4E0B\u4E00\u6BB5\u52A8\u4F5C\u3002",["right-arm"],[cc,En,Us,En,Us,En,Us,En,Us,cc]),Wt("welcome","\u53CC\u81C2\u8FCE\u5BBE","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u53CC\u81C2\u5C55\u5F00\u3001\u8F6C\u5411\u4E24\u4FA7\u81F4\u610F\uFF0C\u518D\u4EE5\u6B22\u8FCE\u59FF\u52BF\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[tt,gt,gt,{...gt,waist_yaw_joint:10},gt,{...gt,waist_yaw_joint:-10},gt,tt,gt,tt]),Wt("invite","\u5355\u81C2\u9080\u8BF7","\u62DB\u547C\u4E0E\u63A5\u5F85",["invite","upper"],"\u4F38\u81C2\u9080\u8BF7\u3001\u8F6C\u8EAB\u793A\u610F\uFF0C\u624B\u8155\u548C\u8098\u90E8\u63A5\u529B\u5F15\u5BFC\u6E38\u5BA2\u3002",["left-arm","waist"],[tt,Os,Os,Dt("left",16),In("left"),Os,Dt("left",8),In("left"),Os,tt]),Wt("bow","\u793C\u8C8C\u97A0\u8EAC","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u5148\u5C55\u5F00\u53CC\u81C2\u81F4\u8C22\uFF0C\u518D\u6536\u81C2\u97A0\u8EAC\u3001\u8D77\u8EAB\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[tt,gt,tt,kt({...mr(8),waist_pitch_joint:8}),Vo,Vo,kt({...mr(8),waist_pitch_joint:10}),tt,gt,tt]),Wt("guide-left","\u5DE6\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["left","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u5DE6\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["left-arm","waist"],[tt,In("left"),In("left"),Dt("left",20),Os,In("left"),Dt("left",8),Os,In("left"),tt]),Wt("guide-right","\u53F3\u4FA7\u6307\u5F15","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["right","invite","show","upper"],"\u4F38\u81C2\u6307\u5F15\u53F3\u4FA7\uFF0C\u6539\u53D8\u4ECB\u7ECD\u89D2\u5EA6\uFF0C\u518D\u56DE\u8EAB\u9762\u5411\u6E38\u5BA2\u3002",["right-arm","waist"],[tt,In("right"),In("right"),Dt("right",-20),Dt("right",-8),In("right"),Dt("right",-16),Dt("right",-8),In("right"),tt]),Wt("offer","\u53CC\u624B\u5448\u9012","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u624B\u6258\u8D77\u5C55\u54C1\uFF0C\u5DE6\u53F3\u5C55\u793A\uFF0C\u518D\u9001\u5411\u6E38\u5BA2\u3002",["left-arm","right-arm","waist"],[tt,Dn,Dn,{...Dn,waist_yaw_joint:12},Dn,{...Dn,waist_yaw_joint:-12},Dn,tt,Dn,tt]),Wt("turn","\u8F6C\u8EAB\u5C55\u793A","\u4ECB\u7ECD\u4E0E\u5C55\u793A",["show","upper"],"\u53CC\u811A\u7559\u5728\u539F\u5730\uFF0C\u8170\u5E26\u52A8\u4E0A\u8EAB\uFF0C\u53CC\u81C2\u8F6E\u6D41\u5411\u4E24\u4FA7\u4ECB\u7ECD\u3002",["left-arm","right-arm","waist"],[tt,Dt("left",12),Dt("left",24),gt,Dt("right",-12),Dt("right",-24),gt,Dt("left",12),Dt("right",-12),tt]),Wt("raise","\u53CC\u81C2\u4E0A\u4E3E","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u81C2\u4E0A\u4E3E\u3001\u5916\u5C55\u3001\u6536\u8098\uFF0C\u518D\u6B21\u4F38\u5C55\uFF0C\u5F62\u6210\u5B8C\u6574\u4E0A\u80A2\u4E50\u53E5\u3002",["left-arm","right-arm"],[tt,Fs,hc(55,65),Fs,hc(40,40),Fs,hc(55,65),Fs,gt,tt]),Wt("sway","\u5DE6\u53F3\u6446\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u6446\u81C2\u7A7F\u63D2\u8170\u90E8\u8F6C\u5411\uFF0C\u6700\u540E\u5C55\u5F00\u53CC\u81C2\u63A5\u4E0B\u4E00\u62CD\u3002",["left-arm","right-arm","waist"],[Mi(-1),Mi(1),Mi(-1),Mi(1),gt,Mi(-1),Mi(1),Mi(-1),Mi(1),tt]),Wt("pulse","\u5C48\u819D\u5F8B\u52A8","\u8282\u594F\u4E0E\u8868\u6F14",["lower","upper"],"\u6DF1\u6D45\u5C48\u819D\u4EA4\u66FF\uFF0C\u9ACB\u819D\u8E1D\u4E0E\u53CC\u81C2\u540C\u62CD\u914D\u5408\u3002",["left-leg","right-leg","left-arm","right-arm"],[an(12,30),an(30,45),an(12,30),an(24,40),an(10,55),an(30,45),an(12,30),an(24,40),an(10,55),an(6,30)]),Wt("punch","\u4EA4\u66FF\u51FA\u62F3","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u5DE6\u53F3\u51FA\u62F3\u63A5\u529B\uFF0C\u7A7F\u63D2\u6536\u8098\u548C\u5C55\u5F00\uFF0C\u8170\u90E8\u914D\u5408\u8F6C\u5411\u3002",["left-arm","right-arm","waist"],[tt,Yi("left"),Yi("right"),Yi("left"),Yi("right"),gt,Yi("right"),Yi("left"),Yi("right"),tt]),Wt("salute","\u62AC\u624B\u81F4\u610F","\u62DB\u547C\u4E0E\u63A5\u5F85",["greet","upper"],"\u62AC\u8D77\u53F3\u81C2\u81F4\u610F\uFF0C\u8F6C\u5411\u4E24\u4FA7\u56DE\u5E94\u6E38\u5BA2\uFF0C\u518D\u5C55\u5F00\u56DE\u793C\u3002",["right-arm","waist"],[cc,En,{...En,waist_yaw_joint:-10},En,{...En,waist_yaw_joint:10},En,Us,En,gt,tt]),Wt("open-close","\u5F00\u5408\u624B\u81C2","\u8282\u594F\u4E0E\u8868\u6F14",["upper"],"\u53CC\u8098\u6536\u62E2\u4E0E\u53CC\u81C2\u5C55\u5F00\u4EA4\u66FF\uFF0C\u6700\u540E\u9AD8\u4E3E\u53CC\u624B\u56DE\u5E94\u89C2\u4F17\u3002",["left-arm","right-arm"],[tt,Dn,gt,Dn,gt,Fs,gt,Dn,gt,tt]),Wt("diagonal","\u5BF9\u89D2\u547C\u5E94","\u8282\u594F\u4E0E\u8868\u6F14",["upper","lower"],"\u5DE6\u53F3\u624B\u81C2\u8F6E\u6D41\u5C55\u5F00\uFF0C\u817F\u90E8\u8F7B\u5C48\u914D\u5408\u9AD8\u4F4E\u53D8\u5316\u3002",["left-arm","right-arm","left-leg","right-leg","waist"],[tt,Dt("left",12),an(18,40),Dt("right",-12),an(10,35),Dt("left",16),an(24,45),Dt("right",-16),gt,tt]),Wt("finale","\u5C55\u5F00\u8C22\u5E55","\u62DB\u547C\u4E0E\u63A5\u5F85",["close","upper","lower"],"\u53CC\u81C2\u4E3E\u8D77\u5411\u89C2\u4F17\u81F4\u8C22\uFF0C\u5C55\u5F00\u53CC\u624B\u540E\u97A0\u8EAC\u56DE\u793C\u3002",["left-arm","right-arm","waist","left-leg","right-leg"],[tt,Fs,gt,En,Us,gt,tt,Vo,Vo,tt])];function $u(s){let e=uc.find(t=>t.id===s);if(!e)throw new Error(`Unknown performance action: ${s}`);return e}function dc(s,e,t){return Object.fromEntries([...new Set([...Object.keys(s),...Object.keys(e)])].map(n=>[n,(s[n]??0)+((e[n]??0)-(s[n]??0))*t]))}function Zu(s,e){if(!s.length||s.length>8)throw new Error("Choose one to eight actions");let t=s.flatMap((r,o)=>$u(r).frames.map(a=>({...a,actionIndex:o,actionId:r,phase:"action"}))),n=e==="lively"?.9:1,i=t.map(r=>({...r,duration:r.duration*n}));for(let r=1;r<i.length-2;r++){if(i[r].actionIndex===i[r+1].actionIndex)continue;let o=i[r-1].angles,a=i[r+2].angles,l=i[r].duration+i[r+1].duration+i[r+2].duration;Math.max(...[...new Set([...Object.keys(o),...Object.keys(a)])].map(h=>Math.abs((o[h]??0)-(a[h]??0))))>1e-6?(i[r]={...i[r],angles:dc(o,a,i[r].duration/l)},i[r+1]={...i[r+1],angles:dc(o,a,(i[r].duration+i[r+1].duration)/l)}):i[r+1]={...i[r+1],angles:dc(i[r].angles,a,i[r+1].duration/(i[r+1].duration+i[r+2].duration))}}return i.push({angles:{},duration:1.15*n,actionIndex:s.length-1,actionId:s[s.length-1],phase:"closing"}),i}var Go=class{index=0;elapsed=0;completed=0;paused=!1;keys;values;velocities;current;total;frames;constructor(e,t){if(!e.length||Object.values(t).some(n=>!Number.isFinite(n))||e.some(n=>!Number.isFinite(n.duration)||n.duration<=0||Object.values(n.angles).some(i=>!Number.isFinite(i))))throw new Error("Invalid performance timeline");this.frames=e,this.total=e.reduce((n,i)=>n+i.duration,0),this.keys=[...new Set([Object.keys(t),...e.map(n=>Object.keys(n.angles))].flat())],this.values=[t,...e.map(n=>n.angles)].map(n=>this.keys.map(i=>n[i]??0)),this.current=Object.fromEntries(this.keys.map((n,i)=>[n,this.values[0][i]])),this.velocities=this.values.map(()=>this.keys.map(()=>0));for(let n=1;n<this.values.length-1;n++){let i=e[n-1].duration,r=e[n].duration;for(let o=0;o<this.keys.length;o++){let a=(this.values[n][o]-this.values[n-1][o])/i,l=(this.values[n+1][o]-this.values[n][o])/r;if(a*l<=0)continue;let c=2*r+i,h=r+2*i,u=(c+h)/(c/a+h/l);this.velocities[n][o]=Math.sign(u)*Math.min(Math.abs(u),1.2*Math.min(Math.abs(a),Math.abs(l)))}}}get angles(){return this.current}get finished(){return this.index>=this.frames.length}get frame(){return this.frames[Math.min(this.index,this.frames.length-1)]}get progress(){return this.finished?1:(this.completed+this.elapsed)/this.total}pause(){this.paused=!0}resume(){this.paused=!1}update(e){if(this.paused||this.finished||!Number.isFinite(e)||e<=0)return!1;let t=e;for(;t>1e-10&&!this.finished;){let n=this.frames[this.index],i=Math.min(t,n.duration-this.elapsed);this.elapsed+=i,t-=i,this.elapsed>=n.duration-1e-10&&(this.completed+=n.duration,this.index++,this.elapsed=0)}if(this.finished){let n=this.values[this.values.length-1];for(let i=0;i<this.keys.length;i++)this.current[this.keys[i]]=n[i]}else{let n=this.index,i=this.frames[n].duration,r=this.elapsed/i,o=r*r,a=o*r,l=a*r,c=l*r,h=1-10*a+15*l-6*c,u=r-6*a+8*l-3*c,d=10*a-15*l+6*c,f=-4*a+7*l-3*c;for(let g=0;g<this.keys.length;g++)this.current[this.keys[g]]=h*this.values[n][g]+u*i*this.velocities[n][g]+d*this.values[n+1][g]+f*i*this.velocities[n+1][g]}return!0}};var Nn=[{id:"wave",title:"\u6325\u624B\u62DB\u547C",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u62AC\u8D77\u53F3\u624B\uFF0C\u8FDE\u7EED\u6325\u52A8\u524D\u81C2\u6B22\u8FCE\u6E38\u5BA2\u3002"},{id:"handshake",title:"\u4F38\u624B\u63E1\u624B",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u53F3\u81C2\u524D\u4F38\uFF0C\u624B\u8155\u671D\u5411\u6E38\u5BA2\uFF0C\u8F7B\u8F7B\u4E0A\u4E0B\u56DE\u5E94\u3002"},{id:"invite",title:"\u9080\u8BF7\u6307\u5F15",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u4F38\u81C2\u793A\u610F\uFF0C\u8BF7\u6E38\u5BA2\u4E00\u8D77\u8BA4\u8BC6\u53F3\u4FA7\u5C55\u54C1\u3002"},{id:"bow",title:"\u793C\u8C8C\u97A0\u8EAC",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u6536\u81C2\u3001\u5F2F\u8170\u81F4\u610F\uFF0C\u518D\u5E73\u987A\u56DE\u5230\u7AD9\u59FF\u3002"},{id:"clap",title:"\u62CD\u624B\u9F13\u638C",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u81C2\u62AC\u5230\u80F8\u524D\uFF0C\u53CC\u624B\u9760\u8FD1\u3001\u5206\u5F00\uFF0C\u8F7B\u62CD\u4E09\u6B21\u3002"},{id:"raise",title:"\u53CC\u81C2\u4E0A\u4E3E",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u81C2\u5411\u4E0A\u5C55\u5F00\uFF0C\u518D\u5C48\u8098\u6536\u56DE\u3002"},{id:"stretch",title:"\u8212\u5C55\u53CC\u81C2",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u53CC\u624B\u5C55\u5F00\uFF0C\u5411\u4E24\u4FA7\u6E38\u5BA2\u6253\u4E2A\u62DB\u547C\u3002"},{id:"dance",title:"\u5DE6\u53F3\u5F8B\u52A8",group:"\u52A8\u4F5C\u8868\u6F14",description:"\u624B\u81C2\u3001\u8170\u90E8\u548C\u5C48\u819D\u914D\u5408\u7684\u7B80\u77ED\u5F8B\u52A8\u3002"},{id:"robotdance",title:"\u673A\u68B0\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u81C2\u4EA4\u66FF\u5C48\u4F38\uFF0C\u914D\u5408\u8170\u90E8\u5C0F\u5E45\u8F6C\u52A8\uFF0C\u5C55\u793A\u673A\u68B0\u821E\u8282\u594F\u3002"},{id:"armdance",title:"\u53CC\u81C2\u6446\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u81C2\u5411\u4E24\u4FA7\u5C55\u5F00\uFF0C\u518D\u4EA4\u66FF\u62AC\u8D77\uFF0C\u914D\u5408\u8170\u90E8\u5DE6\u53F3\u8F7B\u6446\u3002"},{id:"cheerdance",title:"\u52A0\u6CB9\u821E",group:"\u5FEB\u6377\u821E\u8E48",description:"\u53CC\u624B\u4ECE\u80F8\u524D\u4E3E\u8D77\uFF0C\u5DE6\u53F3\u4EA4\u66FF\u52A0\u6CB9\uFF0C\u6700\u540E\u4E00\u8D77\u6536\u56DE\u3002"},{id:"turnwave",title:"\u8F6C\u8EAB\u6325\u624B",group:"\u63A5\u5F85\u4E92\u52A8",description:"\u7AD9\u5B9A\u540E\u5411\u4FA7\u9762\u8F6C\u8EAB\uFF0C\u6325\u624B\u56DE\u5E94\uFF0C\u518D\u56DE\u5230\u539F\u671D\u5411\u3002"},{id:"sit",title:"\u5C48\u819D\u8E72\u5750",group:"\u5168\u8EAB\u52A8\u4F5C",description:"\u5C48\u819D\u964D\u4F4E\u8EAB\u4F53\uFF0C\u77ED\u6682\u505C\u7559\u540E\u7AD9\u8D77\uFF1B\u662F\u7F51\u9875\u8E72\u5750\u6F14\u793A\u3002"},{id:"jump",title:"\u539F\u5730\u8DF3\u8DC3",group:"\u865A\u62DF\u7279\u6280",description:"\u84C4\u529B\u3001\u8E6C\u5730\u3001\u817E\u7A7A\uFF0C\u518D\u5C48\u819D\u7F13\u51B2\u843D\u5730\u3002\u4EC5\u4E3A\u7F51\u9875\u52A8\u753B\u3002"},{id:"backflip",title:"\u540E\u7A7A\u7FFB",group:"\u865A\u62DF\u7279\u6280",description:"\u5C48\u819D\u84C4\u529B\u3001\u817E\u7A7A\u540E\u7FFB\u4E00\u5468\u3001\u843D\u5730\u7F13\u51B2\u3002\u4EC5\u4E3A\u7F51\u9875\u7279\u6280\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u673A\u80FD\u529B\u3002"}],Wo=[{button:0,key:"A",action:"dance",title:"\u5F8B\u52A8"},{button:1,key:"B",action:"robotdance",title:"\u673A\u68B0\u821E"},{button:2,key:"X",action:"armdance",title:"\u53CC\u81C2\u6446\u821E"},{button:3,key:"Y",action:"cheerdance",title:"\u52A0\u6CB9\u821E"}],Bs=s=>Nn.find(e=>e.id===s),Ku=s=>Nn.some(e=>e.id===s),$0={left_shoulder_pitch_joint:-8,left_shoulder_roll_joint:8,left_elbow_joint:15,right_shoulder_pitch_joint:-8,right_shoulder_roll_joint:-8,right_elbow_joint:15,waist_yaw_joint:0,waist_pitch_joint:0,waist_roll_joint:0},Ne=(s,e=.45)=>({angles:{...$0,...s},duration:e});function fc(s){if(s==="robotdance"){let t={left_shoulder_pitch_joint:-35,left_shoulder_roll_joint:25,left_elbow_joint:80,right_shoulder_pitch_joint:-12,right_elbow_joint:30,waist_yaw_joint:12},n={right_shoulder_pitch_joint:-35,right_shoulder_roll_joint:-25,right_elbow_joint:80,left_shoulder_pitch_joint:-12,left_elbow_joint:30,waist_yaw_joint:-12};return[Ne({},.45),Ne(t,.55),Ne(n,.55),Ne(t,.55),Ne(n,.55),Ne(t,.55),Ne(n,.55),Ne({},.8)]}if(s==="armdance"){let t={left_shoulder_pitch_joint:-20,left_shoulder_roll_joint:50,left_elbow_joint:35,right_shoulder_pitch_joint:-20,right_shoulder_roll_joint:-50,right_elbow_joint:35},n={...t,left_shoulder_pitch_joint:-65,left_elbow_joint:60,waist_roll_joint:5},i={...t,right_shoulder_pitch_joint:-65,right_elbow_joint:60,waist_roll_joint:-5};return[Ne({},.45),Ne(t,.6),Ne(n,.65),Ne(i,.65),Ne(n,.65),Ne(i,.65),Ne(t,.6),Ne({},.8)]}if(s==="cheerdance"){let t={left_shoulder_pitch_joint:-45,left_shoulder_roll_joint:20,left_elbow_joint:85,right_shoulder_pitch_joint:-45,right_shoulder_roll_joint:-20,right_elbow_joint:85},n={...t,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:6},i={...t,right_shoulder_pitch_joint:-120,right_elbow_joint:35,waist_yaw_joint:-6};return[Ne({},.45),Ne(t,.6),Ne(n,.6),Ne(i,.6),Ne(n,.6),Ne(i,.6),Ne({...n,...i,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:0},.7),Ne(t,.6),Ne({},.8)]}if(s==="backflip"||s==="jump"||s==="sit")return[Ne({},.4),Ne({left_shoulder_pitch_joint:-45,right_shoulder_pitch_joint:-45},.7),Ne({},.8)];if(s==="turnwave")return fc("wave");if(s==="handshake"){let t={right_shoulder_pitch_joint:-42,right_shoulder_roll_joint:-12,right_elbow_joint:38,right_wrist_roll_joint:-25};return[Ne({},.45),Ne(t,.7),Ne({...t,right_shoulder_pitch_joint:-48},.38),Ne({...t,right_shoulder_pitch_joint:-38},.38),Ne({...t,right_shoulder_pitch_joint:-48},.38),Ne(t,.38),Ne({},.8)]}if(s==="clap"){let t={left_shoulder_pitch_joint:-50,left_shoulder_roll_joint:25,left_shoulder_yaw_joint:-10,left_elbow_joint:40,left_wrist_roll_joint:-60,right_shoulder_pitch_joint:-50,right_shoulder_roll_joint:-25,right_shoulder_yaw_joint:10,right_elbow_joint:40,right_wrist_roll_joint:60},n={...t,left_shoulder_roll_joint:10,right_shoulder_roll_joint:-10};return[Ne({},.45),Ne(t,.7),Ne(n,.36),Ne(t,.36),Ne(n,.36),Ne(t,.36),Ne(n,.36),Ne(t,.4),Ne({},.8)]}let e=s==="stretch"?"welcome":s==="dance"?"sway":s;if(!uc.some(t=>t.id===e))throw new Error(`Missing drive action ${s}`);return Zu([e],"lively").map(t=>({...t,angles:Object.fromEntries(Object.entries(t.angles).filter(([n])=>!/^((left|right)_(hip|knee|ankle))/.test(n)))}))}var Un=s=>{let e=Math.max(0,Math.min(1,s));return e*e*e*(10+e*(-15+6*e))},ti={backflip:3.25,jump:2.65,sit:4.2},On={takeoff:.8,flight:{backflip:1.15,jump:.7},sitDown:1.1,sitRise:2.7},Xo=s=>typeof s=="string"&&s in ti;function Ju(s,e){let t=ti[s],n=Math.max(0,Math.min(t,e));if(s==="sit"){let{sitDown:c,sitRise:h}=On,u=n<c?Un(n/c):n<h?1:1-Un((n-h)/(t-h));return{pitch:0,height:0,knee:16+54*u,arm:-8-30*u,phase:n<c?"\u5C48\u819D\u4E0B\u6C89":n<h?"\u4FDD\u6301\u8E72\u5750":"\u6062\u590D\u7AD9\u7ACB"}}let i=On.takeoff,r=On.flight[s],o=i+r;if(n<i){let c=n<.55?Un(n/.55):1-Un((n-.55)/.25);return{pitch:0,height:0,knee:16+48*c,arm:-8-44*c,phase:"\u84C4\u529B\u8E6C\u5730"}}if(n<o){let c=(n-i)/r,h=Math.sin(Math.PI*c);return{pitch:s==="backflip"?-Math.PI*2*Un(c):0,height:4*(s==="backflip"?.88:.34)*c*(1-c),knee:16+54*h,arm:-8-60*h,phase:s==="backflip"?"\u817E\u7A7A\u540E\u7FFB":"\u817E\u7A7A"}}let a=(n-o)/(t-o),l=a<.28?Un(a/.28):1-Un((a-.28)/.72);return{pitch:s==="backflip"?-Math.PI*2:0,height:0,knee:16+42*l,arm:-8-25*l,phase:a<.4?"\u843D\u5730\u7F13\u51B2":"\u6062\u590D\u7AD9\u7ACB"}}var _n=[{id:"elbow",title:"\u53F3\u8098 \xB7 \u5F2F\u66F2",joint:"right_elbow_joint",rest:15,min:5,max:105,goal:70,direction:1,copy:"\u7535\u673A\u628A\u524D\u81C2\u8F6C\u5230\u76EE\u6807\u89D2\u5EA6\uFF0C\u4F4D\u7F6E\u8BEF\u5DEE\u8D8A\u5C0F\uFF0C\u6821\u51C6\u8D8A\u51C6\u786E\u3002"},{id:"shoulder",title:"\u53F3\u80A9 \xB7 \u62AC\u81C2",joint:"right_shoulder_pitch_joint",rest:-8,min:-75,max:10,goal:-50,direction:-1,copy:"\u80A9\u90E8\u7ED5\u6A2A\u8F74\u524D\u540E\u6446\u3002\u5DE6\u6746\u5411\u4E0A\u62AC\u81C2\uFF0C\u8D1F\u89D2\u5EA6\u53EA\u662F\u6A21\u578B\u5750\u6807\u7684\u7EA6\u5B9A\u3002"},{id:"waist",title:"\u8170\u90E8 \xB7 \u8F6C\u52A8",joint:"waist_yaw_joint",rest:0,min:-25,max:25,goal:18,direction:1,copy:"\u4E0B\u8EAB\u56FA\u5B9A\u65F6\uFF0C\u8170\u90E8\u8BA9\u4E0A\u8EAB\u8F6C\u5411\u3002\u8FD9\u91CC\u72EC\u7ACB\u63A7\u5236\u4E00\u4E2A\u65CB\u8F6C\u81EA\u7531\u5EA6\u3002"}],qo=class{selected="elbow";target=15;settled=0;positions={elbow:15,shoulder:-8,waist:0};completed=new Set;feedback="\u628A\u5B9E\u9645\u89D2\u5EA6\u8C03\u5230\u91D1\u8272\u76EE\u6807\u9644\u8FD1\uFF0C\u677E\u6746\u505C\u7A33\uFF0C\u518D\u6309 A \u786E\u8BA4\u3002";get spec(){return _n.find(e=>e.id===this.selected)}get angle(){return this.positions[this.selected]}angleForJoint(e){let t=_n.find(n=>n.joint===e);return t?this.positions[t.id]:void 0}get error(){return Math.abs(this.angle-this.spec.goal)}select(e){_n.some(t=>t.id===e)&&(this.selected=e,this.resetPose())}step(e){let t=_n.findIndex(n=>n.id===this.selected);this.select(_n[(t+Math.sign(e)+_n.length)%_n.length].id)}resetPose(){this.target=this.spec.rest,this.settled=0,this.demonstrating=!1,this.feedback="\u63A8\u5DE6\u6746\u8C03\u8282\uFF0C\u677E\u5F00\u540E\u7B49\u5F85\u7535\u673A\u8DDF\u4E0A\uFF0C\u518D\u786E\u8BA4\u76EE\u6807\u3002"}reset(){this.completed.clear(),this.selected="elbow";for(let e of _n)this.positions[e.id]=e.rest;this.resetPose()}diagnose(){this.target=this.spec.goal,this.settled=0,this.feedback="\u6B63\u5728\u6F14\u793A\u8BCA\u65AD\u59FF\u6001 \xB7 \u793A\u8303\u4E0D\u8BA1\u5206\uFF0C\u8BF7\u590D\u4F4D\u540E\u81EA\u5DF1\u5C1D\u8BD5\u3002",this.demonstrating=!0}demonstrating=!1;update(e,t){if(!Number.isFinite(e)||e<=0)return;let n=Math.min(.1,e),i=t.labAdjust??t.forward;if(!Number.isFinite(i))return;t.labSelect&&this.select(t.labSelect),t.labStep&&this.step(t.labStep),t.labReset&&(this.resetPose(),this.demonstrating=!1),Math.abs(i)>.02&&(this.target=Math.max(this.spec.min,Math.min(this.spec.max,this.target+i*this.spec.direction*38*n)),this.demonstrating=!1,this.feedback="\u89C2\u5BDF\u5B9E\u9645\u89D2\u5EA6\u600E\u6837\u8DDF\u4E0A\u6307\u4EE4\uFF0C\u63A5\u8FD1\u76EE\u6807\u540E\u677E\u5F00\u6447\u6746\u3002");let r=1-Math.exp(-n/.13);for(let o of _n)this.positions[o.id]+=((o.id===this.selected?this.target:o.rest)-this.positions[o.id])*r;this.settled=Math.abs(i)<.02&&Math.abs(this.target-this.angle)<1?this.settled+n:0,(t.labConfirm||t.wave)&&this.confirm()}confirm(){if(this.demonstrating){this.feedback="\u8FD9\u662F\u8BCA\u65AD\u793A\u8303 \xB7 \u8BF7\u6309\u590D\u4F4D\uFF0C\u518D\u624B\u52A8\u8C03\u8282\u540E\u786E\u8BA4\u3002";return}if(this.settled<.4){this.feedback="\u5148\u677E\u5F00\u6447\u6746\uFF0C\u7B49\u5B9E\u9645\u89D2\u5EA6\u7A33\u5B9A\uFF0C\u518D\u786E\u8BA4\u4E00\u6B21\u3002";return}if(this.error>4){this.feedback=`\u8FD8\u5DEE\u7EA6 ${Math.round(this.error)}\xB0 \xB7 ${this.spec.title}\u9700\u8981\u518D\u8C03\u4E00\u70B9\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u5C1D\u8BD5\u3002`;return}this.completed.add(this.selected),this.feedback=this.completed.size===_n.length?"\u4E09\u4E2A\u5173\u8282\u6821\u51C6\u5B8C\u6210\uFF01\u4F60\u5DF2\u4F53\u9A8C\u6307\u4EE4\u3001\u4F3A\u670D\u8DDF\u968F\u4E0E\u4F4D\u7F6E\u8BEF\u5DEE\u3002":"\u6821\u51C6\u6210\u529F\uFF01\u6362\u4E00\u4E2A\u5173\u8282\uFF0C\u770B\u770B\u4E0D\u540C\u81EA\u7531\u5EA6\u7684\u4F5C\u7528\u3002"}};var pc=["walk","turn","stand","damp","recover","perform","complete"],Yo=class{index=0;progress=0;amount=0;lastDistance=0;lastYaw=Math.PI;get step(){return pc[this.index]}get score(){return this.step==="complete"?100:Math.round(this.index/6*100)}reset(){this.index=0,this.progress=this.amount=this.lastDistance=0,this.lastYaw=Math.PI}next(){this.index=Math.min(6,this.index+1),this.amount=0,this.progress=this.index===6?1:0}update(e,t){var o;let n=Math.max(0,t.distance-this.lastDistance),i=Math.abs(Math.atan2(Math.sin(t.yaw-this.lastYaw),Math.cos(t.yaw-this.lastYaw)));if(this.lastDistance=t.distance,this.lastYaw=t.yaw,!t.running||t.paused||t.experience!=="mission"||this.step==="complete")return;let r=t.body==="upright"&&!t.needsNeutral;switch(this.step){case"walk":r&&t.mode==="locomotion"&&(this.amount+=Math.min(n,.09)),this.progress=Math.min(1,this.amount/.8);break;case"turn":r&&t.mode==="locomotion"&&(this.amount+=Math.min(i,.2)),this.progress=Math.min(1,this.amount/(Math.PI/4));break;case"stand":this.amount=r&&t.mode==="stand"?this.amount+e:0,this.progress=Math.min(1,this.amount/.6);break;case"damp":this.progress=t.mode==="damp"?t.body==="fallen"?1:t.body==="falling"?.45:.1:0;break;case"recover":this.progress=t.body==="upright"&&t.mode==="stand"?1:t.body==="recovering"?.5:0;break;case"perform":this.progress=t.mode==="performance"?(o=t.gesture)!=null&&o.includes("dance")?.6:.2:0;break}this.progress>=1&&this.next()}finishAction(e,t){t.running&&!t.paused&&t.experience==="mission"&&this.step==="perform"&&t.mode==="performance"&&e.includes("dance")&&this.next()}};function mc(s,e,t,n,i){let r=e==="exhibition-android",o=r?"LB":"LT",a=(h,u)=>t?u:h,l=!t&&!r?"LT \u7EC4\u5408\u9700\u6309\u4F4F\u6EE1 2 \u79D2\u3002":"";return{walk:{title:"\u8BA9 G1 \u8FC8\u51FA\u7B2C\u4E00\u6B65",instruction:"\u8F7B\u63A8\u5DE6\u6447\u6746\uFF0C\u8D70\u51FA 0.8 \u7C73\u3002\u524D\u8FDB\u3001\u540E\u9000\u6216\u4FA7\u79FB\u90FD\u53EF\u4EE5\u3002",keys:a("L \u5DE6\u6447\u6746","WASD / \u5C4F\u5E55\u65B9\u5411\u952E"),knowledge:"\u6447\u6746\u63A7\u5236\u79FB\u52A8\u65B9\u5411\uFF1B\u677E\u5F00\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u51CF\u901F\u7AD9\u7A33\u3002",focus:"walk",button:"\u6309\u4F4F\u4E0B\u65B9\u65B9\u5411\u952E",command:null},turn:{title:"\u6362\u4E2A\u65B9\u5411\u770B\u770B",instruction:"\u677E\u5F00\u5DE6\u6447\u6746\uFF0C\u63A8\u52A8\u53F3\u6447\u6746\uFF0C\u8BA9\u8EAB\u4F53\u8F6C\u8FC7\u7EA6 45\xB0\u3002",keys:a("R \u53F3\u6447\u6746 \u2190 / \u2192","Q / E \xB7 \u6216\u5C4F\u5E55\u5DE6\u8F6C / \u53F3\u8F6C"),knowledge:"\u8F6C\u5411\u6539\u53D8\u8EAB\u4F53\u671D\u5411\uFF0C\u968F\u540E\u201C\u524D\u8FDB\u201D\u4E5F\u4F1A\u6CBF\u65B0\u7684\u65B9\u5411\u884C\u8D70\u3002",focus:"turn",button:"\u6309\u4F4F\u4E0B\u65B9\u8F6C\u5411\u952E",command:null},stand:{title:"\u7AD9\u7A33\uFF0C\u51C6\u5907\u5207\u6362\u6A21\u5F0F",instruction:"\u5207\u5230\u201C\u9501\u5B9A\u7AD9\u7ACB\u201D\uFF0C\u89C2\u5BDF\u6447\u6746\u4E0D\u518D\u5E26\u52A8\u884C\u8D70\u3002",keys:a(r?"\u70B9\u4E0A\u65B9\u300C\u9501\u5B9A\u7AD9\u7ACB\u300D":"LT + \u2191","\u70B9\u51FB\u300C\u9501\u5B9A\u7AD9\u7ACB\u300D"),knowledge:"\u7AD9\u7ACB\u6A21\u5F0F\u4ECD\u4E3B\u52A8\u63A7\u5236\u5173\u8282\uFF0C\u4EE5\u7EF4\u6301\u59FF\u6001\u3002"+l,focus:"stand",button:"\u5207\u6362\u9501\u5B9A\u7AD9\u7ACB",command:{mode:"stand"}},damp:{title:"\u5173\u8282\u6709\u963B\u529B\uFF0C\u8FD8\u80FD\u7AD9\u4F4F\u5417\uFF1F",instruction:"\u5207\u6362\u201C\u963B\u5C3C\u201D\uFF0C\u89C2\u5BDF\u673A\u5668\u4EBA\u5931\u53BB\u4E3B\u52A8\u652F\u6491\u540E\u7F13\u6162\u5012\u4E0B\u3002",keys:a(`${o} + B`,"\u70B9\u51FB\u300C\u963B\u5C3C\u6A21\u5F0F\u300D"),knowledge:"\u963B\u5C3C\u63D0\u4F9B\u8FD0\u52A8\u963B\u529B\uFF0C\u4E0D\u8D1F\u8D23\u4E3B\u52A8\u7AD9\u7A33\uFF1B\u96F6\u529B\u77E9\u66F4\u653E\u677E\u3002\u5012\u5730\u4E3A\u7F51\u9875\u793A\u610F\u3002"+l,focus:"damp",button:"\u4F53\u9A8C\u963B\u5C3C",command:{mode:"damp"}},recover:{title:"\u73B0\u5728\uFF0C\u7531\u4F60\u6276\u5B83\u8D77\u6765",instruction:n==="falling"?"\u7B49\u6A21\u578B\u843D\u5730\uFF0C\u518D\u6309\u8D77\u8EAB\u7EC4\u5408\u952E\u3002":n==="recovering"?"\u6B63\u5728\u6536\u62E2\u56DB\u80A2\u3001\u6062\u590D\u652F\u6491\uFF0C\u8BF7\u7A0D\u5019\u2026":"\u6309\u8D77\u8EAB\u7EC4\u5408\u952E\uFF0C\u89C2\u5BDF\u673A\u5668\u4EBA\u6062\u590D\u7AD9\u7ACB\u3002",keys:a(`${o} + X`,"\u70B9\u51FB\u300C\u8D77\u8EAB\u590D\u4F4D\u300D"),knowledge:"\u5012\u5730\u540E\u4E0D\u80FD\u76F4\u63A5\u884C\u8D70\uFF0C\u5148\u6062\u590D\u652F\u6491\uFF0C\u518D\u677E\u5F00\u6447\u6746\u91CD\u65B0\u63A5\u7BA1\u3002"+l,focus:"recover",button:n==="recovering"?"\u6B63\u5728\u8D77\u8EAB\u2026":"\u8D77\u8EAB\u590D\u4F4D",command:{recover:!0}},perform:{title:"\u7528\u4E00\u6BB5\u8868\u6F14\uFF0C\u5B8C\u6210\u521D\u4F53\u9A8C",instruction:i!=="performance"?"\u5148\u5207\u5230\u201C\u52A8\u4F5C\u8868\u6F14\u201D\uFF0C\u518D\u7528 RB + \u5F69\u8272\u952E\u9009\u62E9\u4E00\u6BB5\u821E\u8E48\u3002":"\u8BD5\u8BD5 RB + A / B / X / Y\uFF0C\u7B49\u6574\u6BB5\u52A8\u4F5C\u6F14\u5B8C\u3002",keys:a("RB + A / B / X / Y","\u70B9\u4E0B\u65B9\u4EFB\u4E00\u821E\u8E48\u5361\u7247"),knowledge:"\u8D70\u8DEF\u3001\u7AD9\u7ACB\u4E0E\u8868\u6F14\u4F7F\u7528\u4E0D\u540C\u63A7\u5236\u65B9\u5F0F\uFF1B\u5168\u8EAB\u52A8\u4F5C\u4F9D\u9760\u591A\u4E2A\u5173\u8282\u534F\u540C\u3002",focus:"perform",button:i!=="performance"?"\u8FDB\u5165\u52A8\u4F5C\u8868\u6F14":"\u8BD5\u8BD5\u5DE6\u53F3\u5F8B\u52A8",command:i!=="performance"?{mode:"performance"}:{actionTrigger:"dance"}},complete:{title:"\u4F60\u5DF2\u7ECF\u4F1A\u9A7E\u9A76 G1 \u4E86",instruction:"\u79FB\u52A8\u3001\u6A21\u5F0F\u5207\u6362\u3001\u5012\u5730\u6062\u590D\u548C\u8868\u6F14\uFF0C\u5168\u90E8\u4EB2\u624B\u5B8C\u6210\u3002",keys:"6 / 6 \xB7 \u5165\u95E8\u5B8C\u6210",knowledge:"\u7EE7\u7EED\u63A2\u7D22\u5176\u4ED6\u52A8\u4F5C\uFF0C\u6216\u5207\u56DE\u81EA\u7531\u4F53\u9A8C\u3002\u6240\u6709\u52A8\u4F5C\u5747\u4E3A\u7F51\u9875\u6A21\u62DF\uFF0C\u4E0D\u8FDE\u63A5\u5B9E\u673A\u3002",focus:"complete",button:"\u7EE7\u7EED\u81EA\u7531\u4F53\u9A8C",command:null}}[s.step]}var ks=(s,e)=>Math.atan2(Math.sin(s-e),Math.cos(s-e)),jo=class{lab=new qo;tutorial=new Yo;x=bt.spawn.x;z=bt.spawn.z;yaw=bt.spawn.yaw;vx=0;vz=0;angular=0;speed=0;distance=0;seconds=0;get stage(){return this.tutorial.step}gesture=null;running=!1;paused=!1;contact="";message="\u51C6\u5907\u597D\u4E86\u5417\uFF1F\u63A5\u8FC7\u624B\u67C4\uFF0C\u6210\u4E3A G1 \u7684\u9A7E\u9A76\u5458\u3002";score=0;stars=0;arriveHold=0;touches=0;contactBefore=!1;mode="locomotion";selectedAction="wave";needsNeutral=!1;speedMode="slow";stepping=!1;body="upright";bodyProgress=0;fallDuration=1.2;fallDirection=0;falls=0;fallCause="mode";impactX=0;impactZ=0;recoil=null;obstacles;experience;constructor(e={}){this.obstacles=e.obstacles??bt.obstacles,this.experience=e.experience??"mission"}setExperience(e){e!==this.experience&&(this.reset(),this.experience=e,this.suspend(e==="mission"?"\u64CD\u4F5C\u5165\u95E8\u51C6\u5907\u597D\u4E86 \xB7 \u6309 A \u5F00\u59CB\uFF0C\u8DDF\u968F\u516D\u6B65\u63D0\u793A\u4EB2\u81EA\u8BD5\u4E00\u8BD5\u3002":"\u81EA\u7531\u4F53\u9A8C \xB7 \u6309 A \u5F00\u59CB\uFF0C\u5148\u8BD5\u8BD5\u79FB\u52A8\u4E0E LB / RB \u7EC4\u5408\u952E\u3002"))}get target(){return bt.welcome}get targetDistance(){return Math.hypot(this.x-this.target.x,this.z-this.target.z)}get facingError(){let e=bt.visitor;return ks(Math.atan2(e.x-this.x,e.z-this.z),this.yaw)}start(){this.running=!0,this.paused=!1,jt(this.mode)&&this.mode!=="debug"&&this.body==="upright"&&this.beginFall(),this.message=this.mode==="locomotion"?this.experience==="free"?"\u81EA\u7531\u9A7E\u9A76\u5F00\u59CB\u4E86 \xB7 \u5DE6\u6746\u79FB\u52A8\uFF0C\u53F3\u6746\u8F6C\u8EAB\uFF1B\u7AD9\u7A33\u540E\u8BD5\u8BD5 RB + \u5F69\u8272\u952E\u3002":"\u8DDF\u968F\u4E0B\u65B9\u5165\u95E8\u63D0\u793A\u64CD\u4F5C\uFF1B\u6BCF\u5B8C\u6210\u4E00\u6B65\uFF0C\u4F1A\u81EA\u52A8\u70B9\u4EAE\u4E0B\u4E00\u6B65\u3002":Xi.find(e=>e.id===this.mode).copy}suspend(e="\u5DF2\u6682\u505C \xB7 \u70B9\u51FB\u7EE7\u7EED\u540E\u518D\u64CD\u63A7"){this.paused=!0,this.stop(),this.message=e}stop(){this.vx=this.vz=this.angular=this.speed=0}setMode(e){if(!Xi.some(i=>i.id===e)||e===this.mode&&!(this.body==="recovering"&&jt(e)))return;if(e==="debug"&&!jt(this.mode)){this.message="\u5148\u5207\u6362\u963B\u5C3C\u6216\u96F6\u529B\u77E9\uFF0C\u518D\u7528\u4E0B\u65B9\u300C\u5173\u8282\u5B9E\u9A8C\u300D\u5361\u7247\u6216\u5BF9\u5E94\u7EC4\u5408\u952E\u8FDB\u5165\u3002";return}if(this.mode==="debug"&&!["debug","damp","zero"].includes(e)){this.message="\u8C03\u8BD5\u7531\u865A\u62DF\u540A\u67B6\u652F\u6491 \xB7 \u5148\u9000\u51FA\u5230\u963B\u5C3C\uFF0C\u518D\u8D77\u8EAB\u6062\u590D\u884C\u8D70\u3002";return}if(this.body!=="upright"&&!jt(e)){this.message="\u6A21\u578B\u5DF2\u5931\u53BB\u652F\u6491 \xB7 \u8BF7\u5148\u8D77\u8EAB\u590D\u4F4D\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5207\u56DE\u884C\u8D70\u3002";return}let t=this.vx,n=this.vz;this.stop(),this.mode=e,this.gesture=null,this.arriveHold=0,this.needsNeutral=!0,this.stepping=!1,e==="debug"?(this.lab.reset(),this.body="recovering",this.bodyProgress=0):jt(e)&&this.running&&(this.body==="upright"||this.body==="recovering")&&this.beginFall(t,n),this.message=Xi.find(i=>i.id===e).copy}beginFall(e=0,t=0){this.fallCause="mode",this.body="falling",this.bodyProgress=0,this.fallDuration=this.mode==="zero"?.68:1.25,this.falls++,this.fallDirection=Math.hypot(e,t)>.04?Math.atan2(e,t)-this.yaw:0}collide(){if(this.body!=="upright")return;let e=Math.hypot(this.impactX,this.impactZ)||1,t=this.impactX/e,n=this.impactZ/e;this.beginFall(t,n),this.fallCause="collision",this.fallDuration=.55,this.fallDirection=Math.atan2(t,n)-this.yaw,this.recoil={x:this.x,z:this.z,nx:t,nz:n},this.stop(),this.gesture=null,this.stepping=!1,this.needsNeutral=!0,this.message=`\u78B0\u5230${this.contact}\uFF0C\u5931\u53BB\u5E73\u8861 \xB7 \u7B49\u843D\u5730\u540E\u8D77\u8EAB\uFF0C\u518D\u677E\u5F00\u6447\u6746\u7EE7\u7EED\u3002`}recover(){if(this.body!=="fallen"){this.message=this.body==="falling"?"\u7B49\u5F85\u6A21\u578B\u843D\u5730\u540E\u518D\u8D77\u8EAB\u3002":"\u5F53\u524D\u65E0\u9700\u8D77\u8EAB\u590D\u4F4D\u3002";return}this.stop(),this.gesture=null,this.body="recovering",this.bodyProgress=0,this.stepping=!1,this.message="\u8D77\u8EAB\u590D\u4F4D\u4E2D \xB7 \u6536\u62E2\u56DB\u80A2\u3001\u6062\u590D\u652F\u6491\uFF0C\u5B8C\u6210\u540E\u8BF7\u677E\u5F00\u6447\u6746\u3002"}selectAction(e){Ku(e)&&(this.selectedAction=e,!this.gesture&&this.body==="upright"&&(this.message=`\u5DF2\u9009\u62E9${Bs(e).title} \xB7 \u7AD9\u7A33\u540E\u6309 A \u6F14\u793A\u3002`))}reset(){this.x=bt.spawn.x,this.z=bt.spawn.z,this.yaw=bt.spawn.yaw,this.stop(),this.distance=this.seconds=this.arriveHold=this.score=this.stars=this.touches=0,this.tutorial.reset(),this.gesture=null,this.contact="",this.running=!1,this.paused=!1,this.contactBefore=!1,this.message=this.experience==="free"?"\u81EA\u7531\u4F53\u9A8C\u51C6\u5907\u597D\u4E86 \xB7 \u5148\u8BD5\u8BD5\u79FB\u52A8\u4E0E LB / RB \u7EC4\u5408\u952E\u3002":"\u65B0\u7684\u64CD\u4F5C\u5165\u95E8\u51C6\u5907\u597D\u4E86\u3002",this.mode="locomotion",this.selectedAction="wave",this.needsNeutral=!1,this.lab.reset(),this.body="upright",this.bodyProgress=0,this.falls=0,this.speedMode="slow",this.stepping=!1,this.fallCause="mode",this.impactX=this.impactZ=0,this.recoil=null}update(e,t){!Number.isFinite(e)||e<=0||(this.updateState(e,t),this.tutorial.update(Math.min(.1,e),this),this.score=this.experience==="mission"?this.tutorial.score:0,this.stars=this.stage==="complete"?3:0)}updateState(e,t){if(!Number.isFinite(e)||e<=0||![t.forward,t.strafe,t.turn,t.look].every(Number.isFinite))return;if(t.stop&&this.running){this.suspend("\u7F51\u9875\u5DF2\u6682\u505C \xB7 \u677E\u5F00 B\uFF0C\u6309 A \u7EE7\u7EED\uFF1B\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u518D\u51FA\u53D1\u3002");return}if(t.mode){this.setMode(t.mode);return}if(t.cycleMode){let o=["locomotion","stand","performance"];this.setMode(o[(o.indexOf(this.mode)+1)%o.length]);return}if(t.actionSelect&&this.selectAction(t.actionSelect),t.actionStep){let o=Nn.findIndex(a=>a.id===this.selectedAction);this.selectAction(Nn[(o+Math.sign(t.actionStep)+Nn.length)%Nn.length].id)}if(t.pause&&this.running){this.paused?this.start():this.suspend();return}if(t.toggleStand&&this.paused&&this.running){this.start();return}if(!this.running||this.paused)return;if(t.recover&&this.recover(),t.speedMode&&(this.speedMode=t.speedMode),t.toggleStand&&this.setMode(this.mode==="locomotion"?"stand":"locomotion"),t.stepping&&this.body==="upright"&&!jt(this.mode)&&(this.setMode("locomotion"),this.stepping=!0,this.message="\u6301\u7EED\u8E0F\u6B65 \xB7 \u53CC\u811A\u4EA4\u66FF\u62AC\u843D\uFF1B\u5355\u51FB\u83DC\u5355\u952E\uFF08\u2261\uFF09\u56DE\u5230\u7AD9\u7ACB\u3002"),t.diagnose&&this.mode!=="debug"&&(this.message="\u8BF7\u5148\u4ECE\u963B\u5C3C\u6216\u96F6\u529B\u77E9\u8FDB\u5165\u8C03\u8BD5\u5B9E\u9A8C\u3002"),this.body!=="upright"){if(this.stop(),this.body==="falling"){if(this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,e)/this.fallDuration),this.fallCause==="collision"&&this.recoil){let o=this.bodyProgress*(2-this.bodyProgress)*.18;this.x=this.recoil.x+this.recoil.nx*o,this.z=this.recoil.z+this.recoil.nz*o}this.bodyProgress>=1&&(this.body="fallen",this.message=this.fallCause==="collision"?`\u78B0\u649E\u5012\u5730 \xB7 ${this.contact}\u3002\u8BF7\u8D77\u8EAB\u590D\u4F4D\uFF0C\u518D\u6062\u590D\u884C\u8D70\u3002`:"\u6A21\u578B\u5DF2\u5012\u5730 \xB7 \u7528\u4E0B\u65B9\u300C\u8D77\u8EAB\u590D\u4F4D\u300D\u5361\u7247\u6216\u5BF9\u5E94\u7EC4\u5408\u952E\u6062\u590D\u652F\u6491\u3002")}else this.body==="recovering"&&(this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,e)/2.1),this.bodyProgress>=1&&(this.body="upright",this.mode!=="debug"&&(this.mode="stand"),this.needsNeutral=!0,this.message=this.mode==="debug"?"\u865A\u62DF\u540A\u67B6\u5DF2\u5C31\u7EEA \xB7 \u677E\u5F00\u6447\u6746\uFF0C\u5F00\u59CB\u5173\u8282\u5B9E\u9A8C\u3002":"\u5DF2\u7AD9\u7A33 \xB7 \u677E\u5F00\u6309\u952E\u540E\uFF0C\u7528\u6062\u590D\u884C\u8D70\u5361\u7247\u63A5\u7BA1\u3002"));return}if(this.needsNeutral)if([t.forward,t.strafe,t.turn,t.look].every(a=>Math.abs(a)<.02)&&!t.wave&&!t.invite)this.needsNeutral=!1;else{this.message="\u6A21\u5F0F\u5DF2\u5207\u6362 \xB7 \u5148\u677E\u5F00\u6447\u6746\u548C\u52A8\u4F5C\u952E\uFF0C\u518D\u5F00\u59CB\u64CD\u4F5C\u3002";return}if(this.mode==="debug"){this.stop(),this.gesture=null,(t.diagnose||t.invite)&&this.lab.diagnose(),this.lab.update(e,t),this.message=this.lab.feedback;return}let n=Math.min(e,.1),i=Math.max(1,Math.ceil(n/(1/120))),r=n/i;this.contact="";for(let o=0;o<i;o++)if(this.integrate(r,t),this.contact){this.collide();break}this.contact&&!this.contactBefore&&this.touches++,this.contactBefore=!!this.contact,this.body==="upright"&&(this.gesture||(t.actionTrigger?(this.selectAction(t.actionTrigger),this.beginGesture(t.actionTrigger)):t.wave?this.beginGesture(this.selectedAction):t.invite&&this.beginGesture("invite")))}integrate(e,t){this.seconds+=e;let n=Math.max(1,Math.hypot(t.forward,t.strafe)),i=this.speedMode==="fast"?bt.fastSpeed:bt.slowSpeed,r=this.mode==="locomotion"&&!this.gesture&&this.body==="upright",o=r?t.forward/n*i:0,a=r?t.strafe/n*i:0,l=1-Math.exp(-e/bt.accelerationSeconds);this.angular+=(Math.max(-1,Math.min(1,t.turn))*bt.turnSpeed*(r?1:0)-this.angular)*l,this.yaw=ks(this.yaw+this.angular*e,0);let c=Math.sin(this.yaw)*o-Math.cos(this.yaw)*a,h=Math.cos(this.yaw)*o+Math.sin(this.yaw)*a;this.vx+=(c-this.vx)*l,this.vz+=(h-this.vz)*l;let u=this.x,d=this.z;this.x=this.moveAxis(this.x+this.vx*e,this.z,"x"),this.z=this.moveAxis(this.x,this.z+this.vz*e,"z"),this.speed=Math.hypot(this.x-u,this.z-d)/e,this.distance+=this.speed*e;let f=this.speed<.055&&Math.abs(this.angular)<.14;this.arriveHold=f&&this.targetDistance<=this.target.radius?this.arriveHold+e:0}moveAxis(e,t,n){let{room:i,radius:r}=bt,o=n==="x"?e:t,a=Math.max((n==="x"?i.minX:i.minZ)+r,Math.min((n==="x"?i.maxX:i.maxZ)-r,o));a!==o&&(this.contact="\u5C55\u5385\u5899\u9762",this.impactX=n==="x"?Math.sign(a-o):0,this.impactZ=n==="z"?Math.sign(a-o):0);for(let l of this.obstacles){let c=n==="x"?a:e,h=n==="z"?a:t;c>l.x-r&&c<l.x+l.width+r&&h>l.z-r&&h<l.z+l.depth+r&&(this.contact=l.id,a=n==="x"?this.x:this.z,this.impactX=n==="x"?this.x<l.x+l.width/2?-1:1:0,this.impactZ=n==="z"?this.z<l.z+l.depth/2?-1:1:0)}return a}beginGesture(e){if(jt(this.mode)||this.body!=="upright"){this.message="\u5F53\u524D\u6CA1\u6709\u7AD9\u7ACB\u652F\u6491 \xB7 \u5148\u8D77\u8EAB\u590D\u4F4D\uFF0C\u518D\u6267\u884C\u52A8\u4F5C\u3002";return}if(e==="backflip"||e==="jump"){let{room:t}=bt,n=.95,i=this.x<t.minX+n||this.x>t.maxX-n||this.z<t.minZ+n||this.z>t.maxZ-n,r=this.obstacles.some(o=>this.x>o.x-n&&this.x<o.x+o.width+n&&this.z>o.z-n&&this.z<o.z+o.depth+n);if(i||r){this.message="\u8FD9\u91CC\u7A7A\u95F4\u4E0D\u8DB3 \xB7 \u8BF7\u5148\u8D70\u5230\u7A7A\u65F7\u7684\u5C55\u5385\u4E2D\u592E\u518D\u505A\u7279\u6280\u3002";return}}if(this.speed>.07||Math.abs(this.angular)>.2){this.message="\u5148\u677E\u5F00\u6447\u6746\uFF0C\u7AD9\u7A33\u540E\u518D\u505A\u52A8\u4F5C\u3002";return}this.gesture=e,this.message=Bs(e).description}finishGesture(e){this.gesture===e&&(this.tutorial.finishAction(e,this),this.gesture=null,this.score=this.experience==="mission"?this.tutorial.score:0,this.stars=this.stage==="complete"?3:0,this.stage==="complete"&&(this.message="\u64CD\u4F5C\u5165\u95E8\u5B8C\u6210\uFF01\u4F60\u5DF2\u7ECF\u5B66\u4F1A\u79FB\u52A8\u3001\u5207\u6362\u6A21\u5F0F\u3001\u8D77\u8EAB\u548C\u8868\u6F14\u3002"))}};function Z0(s,e){let t=[],n=[],i=0;for(let a of e)i+=a,n.push(i);let r=(a,l,c,h=.65)=>t.push({at:a,cue:l,action:s,pitch:c,strength:h}),o=a=>n[Math.min(a,n.length-1)]??0;if(s==="jump"||s==="backflip"){let a=On.flight[s];r(0,"servo",150),r(On.takeoff,"swoosh",s==="backflip"?800:1200,.9),s==="backflip"&&r(On.takeoff+a*.48,"swoosh",1600,.7),r(On.takeoff+a,"landing",70,1),r(ti[s]-.16,"bell",523,.4)}else if(s==="sit")r(0,"servo",180),r(On.sitDown,"servo",120,.4),r(On.sitRise,"servo",240),r(ti.sit-.12,"bell",440,.35);else if(s==="clap"){r(0,"servo",240,.35);for(let a of[2,4,6])r(o(a),"clap",void 0,.9)}else if(["dance","robotdance","armdance","cheerdance"].includes(s)){r(0,s==="armdance"?"bell":"kick",s==="armdance"?523:void 0,.55);for(let a=0;a<e.length-1;a++){let l=a?n[a-1]:0;s==="dance"?(r(o(a),a%2?"snare":"kick"),r(l+e[a]*.5,"hat",void 0,.4)):s==="robotdance"?(r(o(a),"servo",a%2?320:190,.8),a%2===0&&r(o(a),"kick",void 0,.55)):s==="armdance"?(r(o(a),"bell",[523,659,587,784][a%4],.6),r(l+e[a]*.5,"hat",void 0,.35)):(r(o(a),a%2?"clap":"kick",void 0,.65),a%2&&r(o(a),"bell",[523,659,784][Math.floor(a/2)%3],.55))}r(i-.08,"bell",784,.4)}else if(s==="wave"||s==="turnwave"){r(0,"bell",660,.5);for(let a=1;a<e.length-2;a++)r(o(a),"servo",a%2?310:420,.38);s==="turnwave"&&r(o(0),"swoosh",700,.35)}else if(s==="handshake"){r(0,"servo",220,.5),r(o(1),"bell",523,.45);for(let a of[2,3,4,5])r(o(a),"servo",a%2?190:260,.35)}else s==="bow"?(r(0,"bell",523,.45),r(o(2),"servo",160,.4),r(o(4),"bell",392,.4),r(o(6),"servo",220,.45),r(i-.18,"bell",659,.5)):s==="raise"||s==="stretch"?(r(0,"servo",240,.35),r(o(0),"swoosh",1100,.5),r(o(1),"bell",s==="raise"?784:659,.5),r(o(4),"swoosh",800,.45),r(i-.12,"bell",523,.35)):(r(0,"servo",220,.4),r(o(0),"swoosh",900,.45),r(o(1),"bell",587,.5),r(o(5),"servo",260,.35),r(i-.12,"bell",659,.4));return t.sort((a,l)=>a.at-l.at)}var gr=class{duration;markers;index=0;previous=-1e-8;events=[];constructor(e,t){this.duration=Xo(e)?ti[e]:t.reduce((n,i)=>n+i,0),this.markers=Z0(e,t)}advanceTo(e){if(this.events.length=0,!Number.isFinite(e)||e<this.previous)return this.events;let t=Math.min(this.duration,e);for(;this.index<this.markers.length&&this.markers[this.index].at<=t+1e-8;){let n=this.markers[this.index++];n.at>this.previous&&t-n.at<=.14&&this.events.push(n)}return this.previous=t,this.events}};var $o=class{constructor(e){this.model=e;e.rotation.y=-Math.PI/2,this.body.position.y=.65,e.position.y=-.65,this.body.add(e),this.group.add(this.body),this.group.name="G1_driving_carrier",e.traverse(t=>{let n=t;if(n.isMesh){n.geometry.boundingBox||n.geometry.computeBoundingBox();let h=n.geometry.boundingBox,u=[];for(let d of[h.min.x,h.max.x])for(let f of[h.min.y,h.max.y])for(let g of[h.min.z,h.max.z])u.push(new C(d,f,g));this.shell.push({node:t,corners:u})}if(!t.name.endsWith("_joint")||!Array.isArray(t.userData.axis))return;let{axis:i,lower:r,upper:o}=t.userData;if(!Number.isFinite(r)||!Number.isFinite(o))return;let a=ju.interactionLimits[t.name],l=Math.max(ft.radToDeg(r),(a==null?void 0:a.min)??-1/0),c=Math.min(ft.radToDeg(o),(a==null?void 0:a.max)??1/0);/hip_pitch/.test(t.name)&&(l=Math.max(l,-40),c=Math.min(c,35)),/hip_roll/.test(t.name)&&(l=Math.max(l,-18),c=Math.min(c,18)),/hip_yaw/.test(t.name)&&(l=Math.max(l,-25),c=Math.min(c,25)),/knee/.test(t.name)&&(l=Math.max(l,0),c=Math.min(c,75)),this.joints.set(t.name,{node:t,base:t.quaternion.clone(),axis:new C(i[0],i[2],-i[1]).normalize(),min:l,max:c,angle:0})}),this.group.updateMatrixWorld(!0);for(let t of["left","right"]){let n=e.getObjectByName(`${t}_ankle_pitch_joint`),i=e.getObjectByName(`${t}_ankle_roll_link`);if(!n||!i)throw new Error("G1 driving model is missing leg joints");let r=new Kt,o=i.matrixWorld.clone().invert();i.traverse(c=>{let h=c;h.isMesh&&(h.geometry.boundingBox||h.geometry.computeBoundingBox(),r.union(h.geometry.boundingBox.clone().applyMatrix4(o.clone().multiply(h.matrixWorld))))});let a=[];for(let c of[r.min.x,r.max.x])for(let h of[r.min.y,r.max.y])for(let u of[r.min.z,r.max.z])a.push(new C(c,h,u));let l=n.getWorldPosition(new C);this.feet.push({side:t,ankle:n,link:i,corners:a,rest:l,target:l.clone(),from:l.clone(),to:l.clone(),elapsed:0,duration:.28,swing:!1,yaw:0,fromYaw:0,toYaw:0}),this.set(`${t}_hip_pitch_joint`,-7),this.set(`${t}_knee_joint`,14),this.set(`${t}_ankle_pitch_joint`,-7)}e.position.y=-.658}group=new Ot;body=new Ot;joints=new Map;footfalls=[];actionSounds=[];actionSoundClock=null;feet=[];nextFoot=0;action=null;activeGesture=null;point=new C;jointRotation=new xt;legBase=new C;legError=new C;legColumns=[new C,new C,new C];jacobian=new Be;transpose=new Be;normal=new Be;initialized=!1;gaitPhase=0;danceTime=0;danceDepth=0;clipTime=0;activeBodyClip=null;bodyStage="upright";shell=[];transitionAngles={};transitionRotation=new xt;transitionPosition=new C;reset(){this.footfalls.length=0,this.actionSounds.length=0,this.actionSoundClock=null,this.gaitPhase=0,this.initialized=!1,this.action=null,this.activeGesture=null,this.nextFoot=0,this.danceDepth=this.danceTime=0,this.bodyStage="upright",this.activeBodyClip=null,this.clipTime=0,this.body.quaternion.identity(),this.body.position.set(0,.65,0);for(let[e]of this.joints)this.set(e,0);for(let e of this.feet)e.swing=!1,this.set(`${e.side}_hip_pitch_joint`,-7),this.set(`${e.side}_knee_joint`,14),this.set(`${e.side}_ankle_pitch_joint`,-7);this.model.position.y=-.658,this.group.updateMatrixWorld(!0)}set(e,t){let n=this.joints.get(e);if(!n)return;let i=ft.clamp(t,n.min,n.max);n.angle!==i&&(n.angle=i,n.node.quaternion.copy(n.base).multiply(this.jointRotation.setFromAxisAngle(n.axis,ft.degToRad(i))))}nominal(e){return this.group.localToWorld(e.rest.clone()).setY(e.rest.y)}update(e,t){if(this.footfalls.length=0,this.actionSounds.length=0,t.paused)return null;let n=Math.max(0,Math.min(.05,Number.isFinite(e)?e:0));this.group.position.set(t.x,0,t.z),this.group.rotation.y=t.yaw;let i=t.body??"upright";if(i!=="upright")return this.updateFallen(i,t),this.bodyStage=i,null;if(this.bodyStage!=="upright"&&(this.bodyStage="upright",this.body.quaternion.identity(),this.body.position.set(0,.65,0),this.model.position.y=-.656,this.initialized=!1),t.mode==="debug"&&t.lab)return this.updateDebug(n,t.lab),null;if(Xo(t.gesture))return this.updateBodyClip(n,t.gesture,t);this.activeBodyClip&&(this.activeBodyClip=null,this.initialized=!1),this.body.quaternion.identity(),this.body.position.set(0,.65,0),t.gesture!==this.activeGesture&&(this.action=null,this.activeGesture=null,this.actionSoundClock=null),this.danceTime=t.gesture==="dance"?this.danceTime+n:0;let r=t.gesture==="dance"?.012+.018*(1-Math.cos(this.danceTime*5)):0;if(this.danceDepth=ft.lerp(this.danceDepth,r,1-Math.exp(-n/.14)),this.model.position.y=-.656-this.danceDepth,this.group.updateWorldMatrix(!0,!1),!this.initialized){for(let h of this.feet)h.target.copy(this.nominal(h)),h.yaw=t.yaw,h.swing=!1;this.initialized=!0}let o=t.speed>.018||Math.abs(t.angular)>.065;if(!this.feet.some(h=>h.swing)){let h=this.feet.map(d=>this.nominal(d).distanceTo(d.target)+Math.abs(ks(t.yaw,d.yaw))*.16),u=o||t.stepping?this.nextFoot:h[0]>=h[1]?0:1;if(h[1-u]>h[u]+.12&&(u=1-u),h[u]>(o?.055:.004)||t.stepping&&!t.gesture){let d=this.feet[u];d.from.copy(d.target),d.to.copy(this.nominal(d));let f=Math.abs(t.vx*Math.cos(t.yaw)-t.vz*Math.sin(t.yaw));d.duration=t.stepping&&!o?.38:f>.2||Math.abs(t.angular)>.6?.19:.28;let g=d.duration*.5;d.to.x+=t.vx*g,d.to.z+=t.vz*g,d.fromYaw=d.yaw,d.toYaw=t.yaw,d.elapsed=0,d.swing=!0,this.nextFoot=1-u}}for(let h of this.feet){if(h.swing){h.elapsed+=n;let u=Math.min(1,h.elapsed/h.duration),d=u*u*(3-2*u);h.target.lerpVectors(h.from,h.to,d),h.target.y+=Math.sin(Math.PI*u)*.055,h.yaw=h.fromYaw+ks(h.toYaw,h.fromYaw)*d,this.gaitPhase=(h.side==="left"?-1:1)*Math.cos(Math.PI*u),u>=1&&(h.swing=!1,h.target.copy(h.to),h.yaw=h.toYaw,this.footfalls.push({side:h.side,strength:ft.clamp(.3+h.from.distanceTo(h.to)*2,.3,1)}))}this.solveLeg(h,t.yaw)}if(t.gesture&&t.gesture!==this.activeGesture){let h=Object.fromEntries([...this.joints].filter(([d])=>!/^((left|right)_(hip|knee|ankle))/.test(d)).map(([d,f])=>[d,f.angle])),u=fc(t.gesture).map(d=>({...d,actionId:t.gesture,actionIndex:0,phase:"action"}));this.action=new Go(u,h),this.activeGesture=t.gesture,this.actionSoundClock=new gr(t.gesture,u.map(d=>d.duration))}let l=null;if(this.action){this.action.update(n);for(let[h,u]of Object.entries(this.action.angles))this.set(h,u);this.actionSoundClock&&this.actionSounds.push(...this.actionSoundClock.advanceTo(this.action.progress*this.actionSoundClock.duration)),t.gesture==="turnwave"&&(this.body.rotation.y=Math.sin(Math.PI*this.action.progress)*Math.PI*.48),this.action.finished&&(l=this.activeGesture,this.action=null,this.activeGesture=null)}else{let h=this.feet[0].target.x-this.feet[1].target.x,u=this.feet[0].target.z-this.feet[1].target.z,d=h*Math.sin(t.yaw)+u*Math.cos(t.yaw)-(this.feet[0].rest.z-this.feet[1].rest.z),f=ft.clamp((t.vx*Math.cos(t.yaw)-t.vz*Math.sin(t.yaw))/.24,-1,1),g=Math.min(1,Math.abs(t.vx*Math.sin(t.yaw)+t.vz*Math.cos(t.yaw))/.24),_=Math.min(1,Math.abs(t.angular)/1.4),m=t.stepping&&!o?1:0,p=ft.clamp(d*on.strideGain*g+this.gaitPhase*(Math.abs(f)*on.sideSwing+_*on.turnSwing+m*on.steppingSwing),-on.maxSwing,on.maxSwing);for(let[x,y]of this.joints){if(/^((left|right)_(hip|knee|ankle))/.test(x))continue;let S=x.startsWith("left")?1:-1,P=t.mode==="damp",T=x.includes("shoulder_pitch")?P?0:on.shoulderRest+S*p:x.includes("shoulder_roll")?S*(P?3:on.shoulderRoll+S*this.gaitPhase*f*on.lateralRoll):x.includes("elbow")?P?3:on.elbowRest-S*p*on.elbowFollow:0;this.set(x,ft.lerp(y.angle,T,1-Math.exp(-n/(P?.45:on.armResponse))))}}this.group.updateMatrixWorld(!0);let c=Math.min(...this.soleHeights());return this.model.position.y-=c,this.group.updateMatrixWorld(!0),l}captureTransition(){this.transitionAngles=Object.fromEntries([...this.joints].map(([e,t])=>[e,t.angle])),this.transitionRotation.copy(this.body.quaternion),this.transitionPosition.copy(this.body.position)}standingAngle(e){return/hip_pitch|ankle_pitch/.test(e)?-8:/knee/.test(e)?16:/shoulder_pitch/.test(e)?-8:/shoulder_roll/.test(e)?e.startsWith("left")?8:-8:/elbow/.test(e)?15:0}updateDebug(e,t){this.action=null,this.activeGesture=null,this.activeBodyClip=null,this.actionSoundClock=null,this.initialized=!1,this.body.quaternion.identity(),this.body.position.set(0,.65,0),this.model.position.y=-.656;let n=1-Math.exp(-e/.14);for(let[i,r]of this.joints)this.set(i,t.angleForJoint(i)??ft.lerp(r.angle,this.standingAngle(i),n));this.group.updateMatrixWorld(!0),this.body.position.y-=Math.min(...this.soleHeights()),this.group.updateMatrixWorld(!0)}updateFallen(e,t){this.bodyStage!==e&&e!=="fallen"&&this.captureTransition(),this.action=null,this.activeGesture=null,this.activeBodyClip=null,this.actionSoundClock=null,this.initialized=!1;let n=e==="fallen"?1:Un(t.bodyProgress??0),i=e==="recovering";for(let[l]of this.joints){let c=/hip_pitch/.test(l)?-18:/knee/.test(l)?36:/ankle_pitch/.test(l)?-18:/shoulder_roll/.test(l)?l.startsWith("left")?6:-6:0;this.set(l,ft.lerp(this.transitionAngles[l]??0,i?this.standingAngle(l):c,n))}let r=t.fallDirection??0,o=i?new xt:new xt().setFromEuler(new Ss(Math.cos(r)*1.48,0,-Math.sin(r)*1.48));this.body.quaternion.slerpQuaternions(this.transitionRotation,o,n),this.body.position.lerpVectors(this.transitionPosition,new C(0,.65,0),n),this.model.position.y=-.656,this.group.updateMatrixWorld(!0);let a=this.shellMinimum();this.body.position.y+=Math.max(0,.003-a),i||(this.body.position.y-=Math.max(0,a-.003)*n),this.group.updateMatrixWorld(!0)}updateBodyClip(e,t,n){this.activeBodyClip!==t&&(this.activeBodyClip=t,this.clipTime=0,this.action=null,this.activeGesture=null,this.actionSoundClock=new gr(t,[]),this.captureTransition()),this.clipTime=Math.min(ti[t],this.clipTime+e);let i=Ju(t,this.clipTime),r=Un(this.clipTime/.35);this.actionSoundClock&&this.actionSounds.push(...this.actionSoundClock.advanceTo(this.clipTime));for(let[o]of this.joints){let a=/knee/.test(o)?i.knee:/hip_pitch|ankle_pitch/.test(o)?-i.knee*.5:/shoulder_pitch/.test(o)?i.arm:this.standingAngle(o);this.set(o,ft.lerp(this.transitionAngles[o]??a,a,r))}return this.body.position.set(0,.65+i.height,0),this.body.rotation.set(i.pitch,0,0),this.model.position.y=-.656,this.group.updateMatrixWorld(!0),i.height>0?this.body.position.y+=Math.max(0,.003-this.shellMinimum()):this.body.position.y-=Math.min(...this.soleHeights()),this.group.updateMatrixWorld(!0),this.initialized=!1,this.clipTime>=ti[t]?(this.body.quaternion.identity(),this.activeBodyClip=null,t):null}shellMinimum(){let e=1/0;for(let{node:t,corners:n}of this.shell)for(let i of n)e=Math.min(e,this.point.copy(i).applyMatrix4(t.matrixWorld).y);return e}solveLeg(e,t){let n=[`${e.side}_hip_pitch_joint`,`${e.side}_hip_roll_joint`,`${e.side}_knee_joint`];this.set(`${e.side}_hip_yaw_joint`,ft.radToDeg(ks(e.yaw,t)));let i=this.legBase,r=this.legError,o=this.legColumns;for(let a=0;a<4&&(e.ankle.getWorldPosition(i),r.copy(e.target).sub(i),!(r.lengthSq()<1e-6));a++){for(let _=0;_<n.length;_++){let m=n[_],p=this.joints.get(m),x=p.angle,y=x+.5<=p.max?.5:-.5;this.set(m,x+y);let S=p.angle-x;e.ankle.getWorldPosition(o[_]).sub(i).multiplyScalar(1/ft.degToRad(S)),this.set(m,x)}let[l,c,h]=o,u=this.jacobian.set(l.x,c.x,h.x,l.y,c.y,h.y,l.z,c.z,h.z),d=this.transpose.copy(u).transpose(),f=this.normal.copy(d).multiply(u);for(let _ of[0,4,8])f.elements[_]+=8e-4;let g=r.applyMatrix3(d).applyMatrix3(f.invert());for(let _=0;_<3;_++){let m=this.joints.get(n[_]);this.set(n[_],m.angle+ft.radToDeg(ft.clamp(g.getComponent(_),-.18,.18)))}}this.set(`${e.side}_ankle_pitch_joint`,-this.joints.get(n[0]).angle-this.joints.get(n[2]).angle),this.set(`${e.side}_ankle_roll_joint`,-this.joints.get(n[1]).angle)}soleHeights(){return this.feet.map(e=>Math.min(...e.corners.map(t=>this.point.copy(t).applyMatrix4(e.link.matrixWorld).y)))}footPositions(){return this.feet.map(e=>e.ankle.getWorldPosition(new C))}};var Zo=class{constructor(e,t){this.canvas=e;this.controls=t;this.document=e.ownerDocument,this.window=this.document.defaultView,e.addEventListener("pointerdown",this.track),e.addEventListener("pointerup",this.forget),e.addEventListener("pointercancel",this.forget),e.addEventListener("lostpointercapture",this.lostCapture),this.window.addEventListener("pointerup",this.outsideEnd,!0),this.window.addEventListener("pointercancel",this.outsideEnd,!0),this.window.addEventListener("blur",this.cancelAll),this.document.addEventListener("visibilitychange",this.visibilityChanged)}pointers=new Map;document;window;track=e=>{this.controls.enabled&&this.pointers.set(e.pointerId,e.pointerType)};forget=e=>{this.pointers.delete(e.pointerId)};lostCapture=e=>{this.cancel(e.pointerId)};outsideEnd=e=>{e.composedPath().includes(this.canvas)||this.cancel(e.pointerId)};visibilityChanged=()=>{this.document.hidden&&this.cancelAll()};cancelAll=()=>{for(let e of[...this.pointers.keys()])this.cancel(e)};cancel(e){let t=this.pointers.get(e);t!==void 0&&(this.pointers.delete(e),this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:e,pointerType:t})))}dispose(){this.cancelAll(),this.canvas.removeEventListener("pointerdown",this.track),this.canvas.removeEventListener("pointerup",this.forget),this.canvas.removeEventListener("pointercancel",this.forget),this.canvas.removeEventListener("lostpointercapture",this.lostCapture),this.window.removeEventListener("pointerup",this.outsideEnd,!0),this.window.removeEventListener("pointercancel",this.outsideEnd,!0),this.window.removeEventListener("blur",this.cancelAll),this.document.removeEventListener("visibilitychange",this.visibilityChanged)}};var Ko=class{constructor(e){this.host=e;this.scene.background=new Ee("#e5ede3"),this.scene.fog=new po("#e5ede3",10,22),this.renderer.outputColorSpace=ht,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.13,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.camera.position.set(.35,2.55,3.5),this.controls=new Fo(this.camera,this.renderer.domElement),this.controls.addEventListener("change",()=>{this.dirty=!0}),this.controls.target.copy(this.focus),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.enablePan=!1,this.controls.minDistance=1.8,this.controls.maxDistance=10,this.controls.minPolarAngle=.18,this.controls.maxPolarAngle=Math.PI*.46,this.controls.rotateSpeed=.65,this.controls.enabled=!1,this.controls.update();let t=this.renderer.domElement;t.addEventListener("pointerdown",D=>{this.orbitPointers.set(D.pointerId,{x:D.clientX,y:D.clientY}),this.controls.enabled=!0,this.orbitPointers.size>1&&(this.overview=!0)},{capture:!0}),t.addEventListener("pointermove",D=>{let v=this.orbitPointers.get(D.pointerId);v&&Math.hypot(D.clientX-v.x,D.clientY-v.y)>=5&&(this.overview=!0)},{capture:!0});let n=D=>{this.orbitPointers.delete(D.pointerId),this.orbitPointers.size||(this.controls.enabled=this.overview,this.overview||this.clearOrbitDamping())};for(let D of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(D,n,{capture:!0});new Zo(t,this.controls),this.scene.add(new Ro(16383989,8427911,2.4));let i=new Hi(16774109,3);i.position.set(3,6,4),this.scene.add(i);let r=new Hi(13494497,1.2);r.position.set(-4,3,-3),this.scene.add(r);let o=new Ts(this.renderer),a=new zo;this.scene.environment=o.fromScene(a,.04).texture,a.dispose(),o.dispose();let l=new De(new ws(30,30),new Pt({color:"#e3ebdf",roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-.012,this.scene.add(l);let c=new Lo(14,28,11716013,13359302);c.position.y=-.009,c.material.transparent=!0,c.material.opacity=.45,this.scene.add(c);let h=bt.room,u=new vt().setFromPoints([new C(h.minX,0,h.minZ),new C(h.maxX,0,h.minZ),new C(h.maxX,0,h.maxZ),new C(h.minX,0,h.maxZ),new C(h.minX,0,h.minZ)]);this.scene.add(new mi(u,new Kn({color:9875610})));let d=new Pt({color:"#91ad99",transparent:!0,opacity:.32,roughness:.85,depthWrite:!1}),f=h.maxX-h.minX,g=h.maxZ-h.minZ;for(let D of[h.minZ-.04,h.maxZ+.04]){let v=new De(new fn(f,.65,.08),d);v.position.set((h.minX+h.maxX)/2,.325,D),v.name="exhibition-wall",this.scene.add(v)}for(let D of[h.minX-.04,h.maxX+.04]){let v=new De(new fn(.08,.65,g),d);v.position.set(D,.325,(h.minZ+h.maxZ)/2),v.name="exhibition-wall",this.scene.add(v)}for(let D of bt.obstacles.slice(0,2)){let v=new De(new fn(D.width,.48,D.depth),new Pt({color:"#a8bfa7",roughness:.75}));v.position.set(D.x+D.width/2,.24,D.z+D.depth/2),this.scene.add(v);let w=new De(new fn(D.width+.04,.035,D.depth+.04),new Pt({color:"#e9eddf"}));w.position.copy(v.position).setY(.5),this.scene.add(w);let O=new Ot,N=new De(new Eo(.17,.055,48,8),new Pt({color:D.x>0?"#cfad63":"#6d9889",roughness:.4,metalness:.25}));N.position.y=.76,O.add(N),O.position.set(v.position.x,0,v.position.z),this.scene.add(O)}let _=new Ot,m=new Pt({color:"#c4a67b",roughness:.95}),p=new De(new Cs(.12,.18,.57,12),m);p.position.y=.59;let x=new De(new cr(.115,16,12),new Pt({color:"#ead9b8"}));x.position.y=1.02,_.add(p,x);for(let D of[-.075,.075]){let v=new De(new Cs(.042,.045,.31,8),new Pt({color:"#65766a"}));v.position.set(D,.155,0),_.add(v)}_.position.set(bt.visitor.x,0,bt.visitor.z),this.scene.add(_),this.marker=new De(new So(.4,.49,48),new Bt({color:"#c69a3a",side:tn,transparent:!0,opacity:.8,depthWrite:!1})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.006,this.scene.add(this.marker);let y=new De(new bo(.4,40),new Bt({color:"#eac765",transparent:!0,opacity:.18,depthWrite:!1}));y.position.z=.001,this.marker.add(y),this.pointer=new De(new Mo(.09,.19,3),new Pt({color:"#bd913b"})),this.scene.add(this.pointer);let S=document.createElement("canvas");S.width=S.height=64;let P=S.getContext("2d"),T=P.createRadialGradient(32,32,0,32,32,32);T.addColorStop(0,"rgba(34,61,40,.24)"),T.addColorStop(1,"rgba(34,61,40,0)"),P.fillStyle=T,P.fillRect(0,0,64,64),this.shadow=new De(new ws(.95,.75),new Bt({map:new vo(S),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.002,this.scene.add(this.shadow);let A=[[-.62,0,0],[-.62,1.72,0],[-.62,1.72,0],[.62,1.72,0],[.62,1.72,0],[.62,0,0],[0,1.72,0],[0,1.27,0]].map(D=>new C(...D));this.debugSupport.add(new zi(new vt().setFromPoints(A),new Kn({color:7773578,transparent:!0,opacity:.65}))),this.debugSupport.visible=!1,this.debugMarker.visible=!1,this.scene.add(this.debugSupport,this.debugMarker),new ResizeObserver(()=>this.resize()).observe(e),this.resize()}scene=new Rs;camera=new wt(46,1,.03,40);renderer=new sr({antialias:!0,powerPreference:"high-performance"});controls;rig=null;overview=!1;explicitOverview=!1;orbitPointers=new Map;elevation=0;budget=new Ho;marker;pointer;shadow;debugSupport=new Ot;debugMarker=new De(new cr(.055,12,8),new Bt({color:13740620,transparent:!0,opacity:.65,depthTest:!1}));focus=new C(0,.7,0);cameraTarget=new C;drawnCamera=new C(1/0,1/0,1/0);drawnRotation=new xt;pose=[];dirty=!0;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;time=0;async load(){let e=await new Bo().loadAsync("../assets/g1-sample.glb");this.rig=new $o(e.scene),this.scene.add(this.rig.group)}resize(){this.dirty=!0;let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.budget.resize(e,t,devicePixelRatio)),this.renderer.setSize(e,t)}toggleCamera(e=!this.overview,t=!0){this.clearOrbitDamping(),this.explicitOverview=e,this.overview=e,this.controls.enabled=e,e&&t?(this.camera.position.set(4.8,5.8,5),this.controls.target.set(0,.2,-.8)):this.controls.target.copy(this.focus),this.controls.update()}clearOrbitDamping(){let e=this.camera.position.clone(),t=this.camera.quaternion.clone(),n=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.update(),this.controls.enableDamping=n,this.camera.position.copy(e),this.camera.quaternion.copy(t)}reset(){var e;(e=this.rig)==null||e.reset(),this.toggleCamera(!1),this.elevation=0,this.dirty=!0}update(e,t,n,i=!1){var c,h,u;let r=((c=this.rig)==null?void 0:c.update(e,t))??null;this.debugSupport.visible=t.mode==="debug",this.debugMarker.visible=t.mode==="debug"&&t.body==="upright",this.debugSupport.position.set(t.x,0,t.z),this.debugSupport.rotation.y=t.yaw,this.debugMarker.visible&&((u=(h=this.rig)==null?void 0:h.joints.get(t.lab.spec.joint))==null||u.node.getWorldPosition(this.debugMarker.position),this.debugMarker.material.color.setHex(t.lab.completed.has(t.lab.selected)?4103794:13740620)),this.time+=e,this.marker.position.x=t.target.x,this.marker.position.z=t.target.z,this.marker.visible=t.experience==="mission"&&t.stage==="walk",this.marker.visible&&this.marker.scale.setScalar(this.reduced?1:1+Math.sin(this.time*2.5)*.035);let o=t.target;this.pointer.rotation.z=Math.PI,this.pointer.visible=t.experience==="mission"&&t.stage==="walk",this.pointer.visible&&this.pointer.position.set(o.x,1.48+(this.reduced?0:Math.sin(this.time*2)*.035),o.z),this.shadow.position.set(t.x,.002,t.z),this.shadow.rotation.z=-t.yaw;let a=t.body==="fallen"?.27:t.body==="falling"?.72-.4*t.bodyProgress:t.body==="recovering"?.27+.45*t.bodyProgress:.72,l=t.gesture==="backflip"?1.02:a;if(this.focus.set(t.x,l,t.z),this.overview&&!this.explicitOverview&&!this.orbitPointers.size&&t.running&&!t.paused&&(i||t.speed>.018||Math.abs(t.angular)>.065||Math.abs(n)>.05)&&this.toggleCamera(!1),this.overview)this.controls.update();else{this.elevation=ft.clamp(this.elevation+n*e*.7,-.25,.75);let d=t.mode==="debug",f=t.yaw+(d?Math.PI*.75:0),g=(d?2.3:t.gesture==="backflip"?4.1:3.4)*Math.max(1,.72/this.camera.aspect),_=this.cameraTarget.set(t.x-Math.sin(f)*g,(d?1.55:2.35)+this.elevation,t.z-Math.cos(f)*g);this.camera.position.lerp(_,1-Math.exp(-e/.35)),this.controls.target.lerp(this.focus,1-Math.exp(-e/.14)),this.camera.lookAt(this.controls.target)}return r}render(e,t){let n=this.budget.observe(e,t);n!==null&&(this.renderer.setPixelRatio(n),this.renderer.setSize(this.host.clientWidth,this.host.clientHeight),this.dirty=!0);let i=0,r=o=>{(!Number.isFinite(this.pose[i])||Math.abs(this.pose[i]-o)>1e-6)&&(this.pose[i]=o,this.dirty=!0),i++};if(this.rig){let{group:o,body:a,model:l,joints:c}=this.rig;for(let h of[o.position.x,o.position.z,o.rotation.y,l.position.y,a.position.y,a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w])r(h);for(let h of c.values())r(h.angle)}r(Number(this.debugSupport.visible)),r(Number(this.debugMarker.visible)),this.debugMarker.visible&&(r(this.debugMarker.position.x),r(this.debugMarker.position.y),r(this.debugMarker.position.z),r(this.debugMarker.material.color.getHex())),r(Number(this.marker.visible)),r(Number(this.pointer.visible)),this.marker.visible&&(r(this.marker.position.x),r(this.marker.position.z),r(this.marker.scale.x),r(this.pointer.position.y)),this.marker.visible&&!this.reduced&&(this.dirty=!0),(this.camera.position.distanceToSquared(this.drawnCamera)>1e-9||1-Math.abs(this.camera.quaternion.dot(this.drawnRotation))>1e-10)&&(this.dirty=!0),this.dirty&&(this.renderer.render(this.scene,this.camera),this.drawnCamera.copy(this.camera.position),this.drawnRotation.copy(this.camera.quaternion),this.dirty=!1)}};var Qu=[{button:0,key:"A",title:"\u6062\u590D\u884C\u8D70",copy:"\u7AD9\u7ACB\u540E\u63A5\u7BA1\u6447\u6746",command:{mode:"locomotion"}},{button:1,key:"B",title:"\u963B\u5C3C\u6A21\u5F0F",copy:"\u6709\u963B\u529B\uFF0C\u6162\u6162\u5012\u5730",command:{mode:"damp"}},{button:2,key:"X",title:"\u8D77\u8EAB\u590D\u4F4D",copy:"\u5012\u5730\u540E\u91CD\u65B0\u7AD9\u8D77\u6765",command:{recover:!0}},{button:3,key:"Y",title:"\u96F6\u529B\u77E9",copy:"\u4E0D\u51FA\u529B\uFF0C\u8FC5\u901F\u5012\u5730",command:{mode:"zero"}}];var ed=[0,1,3,4,8,9,null,null,null,null,null,null,12,13,14,15];function Jo(s,e){if(!s.connected||s.mapping!=="standard")return null;if(e==="standard")return s.axes.length>=4&&s.buttons.length>=10?s:null;if(e!=="exhibition-android"||s.id!=="Xbox Wireless Controller"||s.axes.length!==4||s.buttons.length!==16)return null;let t=s.buttons[6].value,n=s.buttons[7].value;return![t,n].every(i=>Number.isFinite(i)&&i>=0&&i<=1)||!s.axes.slice(0,2).every(i=>Number.isFinite(i)&&Math.abs(i)<=1.05)||!ed.every(i=>i===null||Number.isFinite(s.buttons[i].value)&&s.buttons[i].value>=0&&s.buttons[i].value<=1.05)?null:{id:s.id,index:s.index,mapping:"standard",connected:!0,axes:[s.axes[0],s.axes[1],t*2-1,n*2-1],buttons:ed.map(i=>i===null?{pressed:!1,value:0}:s.buttons[i])}}var ji=class s{constructor(e=()=>performance.now(),t="standard"){this.clock=e;this.profile=t}device=null;neutral=!1;buttons=[];downAt=new Map;tapAt=new Map;used=new Set;startAt=null;consumed=new Set;triggerKeys=new Set;locomotionChord=!1;setProfile(e){this.suspend(),this.profile=e}get active(){return this.device!==null}static supported(e){return e.connected&&e.mapping==="standard"&&e.axes.length>=4&&e.buttons.length>=10}arm(e){return this.suspend(),Jo(e,this.profile)?(this.device={id:e.id,index:e.index},!0):!1}suspend(){this.device=null,this.neutral=!1,this.buttons=[],this.downAt.clear(),this.tapAt.clear(),this.used.clear(),this.consumed.clear(),this.triggerKeys.clear(),this.locomotionChord=!1,this.startAt=null}read(e,t,n="locomotion"){let i={ready:!1,status:"paused",command:{...qi}};if(!this.device)return i;let r=x=>(this.suspend(),{...i,status:x});if(!t)return r("paused");let o=e.find(x=>(x==null?void 0:x.connected)&&x.id===this.device.id&&x.index===this.device.index);if(!o)return r("disconnected");let a=Jo(o,this.profile);if(!a||!s.supported(a)||!a.axes.slice(0,4).every(x=>Number.isFinite(x)&&Math.abs(x)<=1.05))return r("unsupported");let l=a.buttons.map(x=>x.pressed||x.value>.5);if(!this.neutral){if(this.buttons=l,a.axes.slice(0,4).some(x=>Math.abs(x)>.16)||l.some(Boolean))return{...i,status:"neutral"};this.neutral=!0}let c=x=>{let y=Math.max(-1,Math.min(1,a.axes[x]));return Math.abs(y)<.16?0:Math.sign(y)*(Math.abs(y)-.16)/.84},h=x=>!!(l[x]&&!this.buttons[x]);i.ready=!0,i.status="ready";let u=this.clock();for(let x of[0,1,2,3])l[x]?(l[4]||l[5]||l[6]||l[7]||l[8])&&this.consumed.add(x):this.consumed.delete(x);for(let x of[4,5,6,7])h(x)&&(this.downAt.set(x,u),this.used.delete(x));let d=!!(l[4]||l[5]||l[6]||l[7]||l[8]);i.command={forward:-c(1)||0,strafe:c(0),turn:-c(2)||0,look:-c(3)||0,wave:!d&&!this.consumed.has(0)&&h(0),stop:!d&&!this.consumed.has(1)&&!!l[1],invite:!d&&!this.consumed.has(2)&&h(2),camera:!d&&!this.consumed.has(3)&&h(3),pause:!1,cycleMode:!1,actionStep:d?0:Number(h(15))-Number(h(14))};let f=i.command,g=l[6]&&u-(this.downAt.get(6)??u)>=2e3;if(this.profile==="standard"){let x=y=>{var S;return Math.max(0,Math.min(1,((S=a.buttons[y])==null?void 0:S.value)??0))};i.triggers={left:x(6),right:x(7),holdProgress:l[6]?Math.min(1,(u-(this.downAt.get(6)??u))/2e3):0}}if(l[4]&&[0,1,2,3,5,6,7,8,9].some(x=>l[x])&&this.used.add(4),l[5]&&[0,1,2,3,4,6,7,8,9].some(x=>l[x])&&this.used.add(5),l[4]&&!l[5]&&!l[6]&&!l[7]&&!l[8]){let x=Qu.find(y=>h(y.button));x&&Object.assign(f,x.command)}if(l[5]&&!l[4]&&!l[6]&&!l[7]&&!l[8]&&["locomotion","stand","performance"].includes(n)){let x=Wo.find(y=>h(y.button));x&&(f.actionTrigger=x.action)}!l[5]&&this.buttons[5]&&!this.used.has(5)&&!d&&(f.cycleMode=!0),l[6]&&(l[7]||[0,1,2,3,12,14].some(x=>l[x]))&&this.used.add(6);let _=[1,3,2,12,14,0],m=_.filter(x=>l[x]);for(let x of _)(!l[6]||!l[x])&&this.triggerKeys.delete(x);if(l[6]&&l[7])for(let x of m)this.triggerKeys.add(x);if(g&&!l[7]&&m.length===1){let x=m[0];this.triggerKeys.has(x)||(this.triggerKeys.add(x),x===1?f.mode="damp":x===3?f.mode="zero":x===2?f.recover=!0:x===12?f.mode="stand":x===14?f.actionTrigger="sit":x===0&&(n==="debug"?f.diagnose=!0:f.actionTrigger="sit"))}l[7]&&l[0]&&!this.locomotionChord&&!l[6]&&!l[4]&&!l[5]&&!l[8]&&(f.mode="locomotion"),this.locomotionChord=!!(l[7]&&l[0]),l[6]&&l[7]&&(h(6)||h(7))&&this.used.add(7),g&&l[7]&&!this.used.has(99)&&(f.mode="debug",this.used.add(99)),(!l[6]||!l[7])&&this.used.delete(99),this.profile==="exhibition-android"&&l[4]&&l[5]&&u-Math.max(this.downAt.get(4)??u,this.downAt.get(5)??u)>=800&&!this.used.has(98)&&(f.mode="debug",this.used.add(98)),(!l[4]||!l[5])&&this.used.delete(98),l[8]&&(h(0)?f.actionTrigger="handshake":h(3)?f.actionTrigger="wave":h(2)&&(f.actionTrigger="turnwave")),n==="debug"&&(f.actionStep=0,f.wave=f.invite=f.camera=!1,f.actionTrigger=void 0,d||(f.labStep=Number(h(15))-Number(h(14)),f.labConfirm=h(0),f.diagnose=h(2),f.labReset=h(3)),d&&(f.forward=f.strafe=0));for(let x of[4,6])if(!l[x]&&this.buttons[x]){let y=u-(this.downAt.get(x)??u),S=this.tapAt.get(x);y<350&&!this.used.has(x)?S!==void 0&&u-S<330?(f.speedMode=x===6?"slow":"fast",this.tapAt.delete(x)):this.tapAt.set(x,u):this.tapAt.delete(x),this.downAt.delete(x)}return d?this.startAt=null:h(9)&&(this.startAt!==null&&u-this.startAt<330?(f.stepping=!0,this.startAt=null):this.startAt=u),this.startAt!==null&&u-this.startAt>=330&&(f.toggleStand=!0,this.startAt=null),this.buttons=l,i}},Qo=class{constructor(e="standard"){this.profile=e}held=new Set;blocked=!1;setProfile(e){this.profile=e,this.held.clear(),this.block()}block(){this.blocked=!0}read(e,t,n){let i=e.map(a=>a?Jo(a,this.profile):null).filter(a=>!!a);t||this.block(),t&&i.length&&i.every(a=>a.buttons.every(l=>!l.pressed&&l.value<=.5))&&(this.blocked=!1);let r=new Set,o=!1;for(let a of i){let l=`${a.index}:${a.id}`,c=a.buttons[0].pressed||a.buttons[0].value>.5;c&&r.add(l),n&&t&&!this.blocked&&c&&!this.held.has(l)&&a.buttons.slice(1).every(h=>!h.pressed&&h.value<=.5)&&(o=!0)}return this.held=r,o}};var ea=class{markup=new WeakMap;property(e,t,n){e[t]!==n&&(e[t]=n)}attribute(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}html(e,t){this.markup.get(e)!==t&&(e.innerHTML=t,this.markup.set(e,t))}};var ta=class{pointers=new Map;counts=new Map;press(e,t){this.release(e),this.pointers.set(e,t),this.counts.set(t,(this.counts.get(t)??0)+1)}release(e){let t=this.pointers.get(e);if(t===void 0)return;this.pointers.delete(e);let n=(this.counts.get(t)??1)-1;n>0?this.counts.set(t,n):this.counts.delete(t)}has(e){return this.counts.has(e)}clear(){this.pointers.clear(),this.counts.clear()}};function gc(s,e){let t=s==="exhibition-android",n=t?"LB":"LT",i=[{id:"A",keys:t?"LB + A":"RT + A",title:"\u6062\u590D\u884C\u8D70",copy:"\u7AD9\u7A33\u540E\u63A5\u7BA1\u6447\u6746",command:{mode:"locomotion"}},{id:"B",keys:`${n} + B`,title:"\u963B\u5C3C\u6A21\u5F0F",copy:"\u6709\u5173\u8282\u963B\u529B\uFF0C\u4E0D\u4E3B\u52A8\u652F\u6491",command:{mode:"damp"}},{id:"X",keys:`${n} + X`,title:"\u8D77\u8EAB\u590D\u4F4D",copy:"\u5012\u5730\u540E\u6062\u590D\u7AD9\u7ACB",command:{recover:!0}},{id:"Y",keys:`${n} + Y`,title:"\u96F6\u529B\u77E9",copy:"\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u4E0D\u4FDD\u6301\u7AD9\u59FF",command:{mode:"zero"}},{id:"stand",keys:t?"\u70B9\u51FB\u5361\u7247":"LT + \u2191",title:"\u9501\u5B9A\u7AD9\u7ACB",copy:"\u539F\u5730\u7AD9\u7A33\uFF0C\u505C\u6B62\u884C\u8D70",command:{mode:"stand"}},{id:"debug",keys:t?"LB + RB":"LT + RT",title:"\u5173\u8282\u5B9E\u9A8C",copy:t?"\u5148\u963B\u5C3C\uFF0C\u518D\u53CC\u80A9\u952E\u6309\u4F4F 0.8 \u79D2":"\u5148\u963B\u5C3C\uFF0C\u53CC\u6273\u673A\u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2",command:{mode:"debug"}}],r={locomotion:t?"LB + A \u884C\u8D70\uFF1B\u5DE6\u6746\u79FB\u52A8\u3001\u53F3\u6746\u8F6C\u5411\u3002\u4F4E\u901F\u7528\u5C4F\u5E55\u6309\u94AE\uFF0CLB \u8FDE\u6309\u4E24\u6B21\u5207\u9AD8\u901F\u3002":"RT + A \u884C\u8D70\uFF1B\u5DE6\u6746\u79FB\u52A8\u3001\u53F3\u6746\u8F6C\u5411\u3002LT \u8FDE\u6309\u4E24\u6B21\u4F4E\u901F\uFF0CLB \u8FDE\u6309\u4E24\u6B21\u9AD8\u901F\u3002",stand:t?"\u7528\u4E0A\u65B9\u9501\u5B9A\u7AD9\u7ACB\u6216\u5361\u7247\u5207\u6362\uFF1B\u6447\u6746\u4E0D\u518D\u79FB\u52A8\u6A21\u578B\uFF0CLB + A \u6062\u590D\u884C\u8D70\u3002":"LT + \u5341\u5B57\u952E \u2191 \u9501\u5B9A\u7AD9\u7ACB\uFF08LT \u9700\u6309\u6EE1 2 \u79D2\uFF09\uFF1BRT + A \u6062\u590D\u884C\u8D70\u3002\u83DC\u5355\u952E\u5355\u51FB\u5207\u7AD9\u7ACB / \u884C\u8D70\u3002",damp:`${n} + B\uFF1A\u5173\u8282\u6709\u963B\u529B\uFF0C\u4F46\u4E0D\u4E3B\u52A8\u652F\u6491\uFF1B\u7F51\u9875\u4EE5\u6162\u5012\u793A\u610F\u3002${n} + X \u8D77\u8EAB\u3002${t?"LB + RB \u6309\u4F4F 0.8 \u79D2":"LT + RT \u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2"}\u8FDB\u5165\u5173\u8282\u5B9E\u9A8C\u3002`,zero:`${n} + Y\uFF1A\u7535\u673A\u4E0D\u51FA\u529B\uFF0C\u4E0D\u7EF4\u6301\u7AD9\u59FF\uFF1B\u7F51\u9875\u4EE5\u5FEB\u5012\u793A\u610F\u3002${n} + X \u8D77\u8EAB\u3002${t?"LB + RB \u6309\u4F4F 0.8 \u79D2":"LT + RT \u6309\u4F4F\u81F3 LT \u6EE1 2 \u79D2"}\u8FDB\u5165\u5173\u8282\u5B9E\u9A8C\u3002`,performance:t?"RB + A/B/X/Y \u64AD\u653E\u56DB\u79CD\u7F51\u9875\u821E\u8E48\uFF1B\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5176\u4ED6\u52A8\u4F5C\uFF0CA \u64AD\u653E\u3002":"RB + A/B/X/Y \u64AD\u653E\u56DB\u79CD\u7F51\u9875\u821E\u8E48\uFF1B\u89C6\u56FE\u952E + A \u63E1\u624B\u3001+ Y \u6325\u624B\u3002LT + \u2190 \u8E72\u5750\uFF0CLT + A \u5C48\u819D\u793A\u610F\u3002",debug:`\u865A\u62DF\u540A\u67B6\u652F\u6491 \xB7 \u6682\u505C\u8FD0\u52A8\u63A7\u5236\u3002\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5173\u8282\uFF0C\u5DE6\u6746\u4E0A\u4E0B\u8C03\u89D2\u5EA6\uFF0CA \u786E\u8BA4\uFF1B${t?"X":"LT + A \u6216 X"}\u770B\u8BCA\u65AD\u793A\u8303\uFF0CY \u590D\u4F4D\u3002${n} + B \u9000\u51FA\u3002`};return{cards:i,copy:r[e],heading:t?"\u5C55\u5385\u5B89\u5353 \xB7 LB / RB \u66FF\u4EE3\u64CD\u4F5C":"\u7535\u8111\u6807\u51C6 \xB7 LT / RT \u5B8C\u6574\u64CD\u4F5C",hint:t?"\u6309\u5DF2\u6D4B\u901A\u9053\u64CD\u4F5C\uFF1BLT / RT \u4E0D\u7ED1\u5B9A":"\u7EC4\u5408\u952E\u53EF\u540C\u65F6\u6309\u4F4F\uFF1BLT \u9700\u6EE1 2 \u79D2\uFF0CRT + A \u76F4\u63A5\u6309"}}var ve=s=>document.getElementById(s),na=class{feedback=new ea;nodes=new Map;node(e){let t=this.nodes.get(e);return t||(t=ve(e),this.nodes.set(e,t)),t}held=new ta;keys=new Set;pending={};guideProfile="";tutorialCommand=null;constructor(){ve("tutorial-action").addEventListener("click",()=>{this.tutorialCommand?Object.assign(this.pending,this.tutorialCommand):document.querySelector('button[data-experience="free"]').click()});for(let r of document.querySelectorAll("[data-drive-mode]"))r.addEventListener("click",()=>{this.pending.mode=r.dataset.driveMode});ve("recover-body").addEventListener("click",()=>{this.pending.recover=!0}),ve("step-toggle").addEventListener("click",()=>{this.stepping?this.pending.mode="stand":this.pending.stepping=!0});for(let r of document.querySelectorAll("[data-drive-speed]"))r.addEventListener("click",()=>{this.pending.speedMode=r.dataset.driveSpeed});let e=ve("performance-shortcuts");for(let r of Wo){let o=document.createElement("button");o.dataset.performanceAction=r.action,o.innerHTML=`<kbd>RB + ${r.key}</kbd><span>${r.title}</span>`,o.addEventListener("click",()=>{this.pending.actionTrigger=r.action}),e.append(o)}for(let r of gc("standard","locomotion").cards){let o=document.createElement("button");o.dataset.modeShortcut=r.id,o.innerHTML=`<kbd>${r.keys}</kbd><b>${r.title}</b><small>${r.copy}</small>`,o.addEventListener("click",()=>Object.assign(this.pending,r.command)),ve("mode-cards").append(o)}for(let r of _n){let o=document.createElement("button");o.dataset.labJoint=r.id,o.textContent=r.title,o.addEventListener("click",()=>{this.pending.labSelect=r.id}),ve("lab-joints").append(o)}for(let[r,o]of Object.entries({"lab-confirm":{labConfirm:!0},"lab-demo":{diagnose:!0},"lab-reset":{labReset:!0},"lab-exit":{mode:"damp"}}))ve(r).addEventListener("click",()=>Object.assign(this.pending,o));let t=ve("action-select");for(let r of[...new Set(Nn.map(o=>o.group))]){let o=document.createElement("optgroup");o.label=r;for(let a of Nn.filter(l=>l.group===r))o.append(new Option(a.title,a.id));t.append(o)}t.addEventListener("change",()=>{this.pending.actionSelect=t.value});for(let r of[-1,1])ve(r<0?"action-prev":"action-next").addEventListener("click",()=>{this.pending.actionStep=r});for(let r of document.querySelectorAll("[data-hold]")){r.addEventListener("pointerdown",o=>{o.button===0&&(o.preventDefault(),r.setPointerCapture(o.pointerId),this.held.press(o.pointerId,r.dataset.hold))});for(let o of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(o,a=>this.held.release(a.pointerId));r.addEventListener("contextmenu",o=>o.preventDefault())}let n={"action-wave":"wave","action-menu-play":"wave","action-invite":"invite","emergency-stop":"stop"};for(let[r,o]of Object.entries(n))ve(r).addEventListener("click",()=>{this.pending[o]=!0});let i=new Set(["w","s","a","d","q","e","arrowleft","arrowright","arrowup","arrowdown"," ","1","2","c","p","escape","m","[","]","r"]);document.addEventListener("keydown",r=>{let o=r.target;if(o.closest("input,select,textarea,[contenteditable=true]")||r.key===" "&&o.closest("button,a"))return;let a=r.key.toLowerCase();if(!i.has(a)||(r.preventDefault(),this.keys.add(a),r.repeat))return;a==="m"&&(this.pending.cycleMode=!0),a==="r"&&(this.pending.recover=!0),(a==="["||a==="]")&&(this.pending.actionStep=a==="["?-1:1);let l={" ":"wave",1:"wave",2:"invite",c:"camera",p:"pause",escape:"stop"};l[a]&&(this.pending[l[a]]=!0)}),document.addEventListener("keyup",r=>this.keys.delete(r.key.toLowerCase())),ve("show-touch").addEventListener("click",()=>{let r=ve("touch-controls");r.hidden=!r.hidden,ve("show-touch").setAttribute("aria-expanded",String(!r.hidden)),document.body.dataset.touch=String(!r.hidden),this.held.clear()})}stepping=!1;clear(){this.held.clear(),this.keys.clear(),this.pending={}}read(e){let t={...qi,...this.pending};if(this.pending={},t.labAdjust=this.held.has("lab-increase")?1:this.held.has("lab-decrease")?-1:void 0,!e)return t;let n=(i,r)=>this.keys.has(i)||this.held.has(r);return t.forward=Number(n("w","forward"))-Number(n("s","back")),t.strafe=Number(n("d","right"))-Number(n("a","left")),t.turn=Number(n("q","turn-left")||this.keys.has("arrowleft"))-Number(n("e","turn-right")||this.keys.has("arrowright")),t.look=Number(this.keys.has("arrowup"))-Number(this.keys.has("arrowdown")),t}render(e,t){let n=this.feedback,i=N=>this.node(N),r=t.source==="pad"&&t.layout==="exhibition-android",o=gc(r?"exhibition-android":"standard",e.mode),a=e.mode==="debug";if(this.guideProfile!==(r?"android":t.source)){this.guideProfile=r?"android":t.source;for(let N of o.cards){let X=document.querySelector(`[data-mode-shortcut="${N.id}"]`);n.property(X.querySelector("kbd"),"textContent",t.source==="manual"?"\u70B9\u51FB":N.keys),n.property(X.querySelector("small"),"textContent",N.copy)}}if(n.property(i("control-profile-title"),"textContent",t.source==="manual"?"\u89E6\u5C4F / \u952E\u76D8 \xB7 \u70B9\u5361\u7247\u64CD\u4F5C":o.heading),n.property(i("control-profile-hint"),"textContent",t.source==="manual"?"\u5361\u7247\u4E0E\u624B\u67C4\u4F7F\u7528\u540C\u4E00\u5957\u72B6\u6001\u5207\u6362":o.hint),n.property(i("mode-modifier-label"),"textContent",r?"LB":"LT / RT"),n.property(document.querySelector(".control-columns"),"hidden",a),n.property(i("lab-panel"),"hidden",!a),a){let N=e.lab;n.property(i("lab-progress"),"textContent",`${N.completed.size} / 3`),n.property(i("lab-goal"),"textContent",`${N.spec.goal}\xB0`),n.property(i("lab-command"),"textContent",`${N.target.toFixed(1)}\xB0`),n.property(i("lab-angle"),"textContent",`${N.angle.toFixed(1)}\xB0`),n.property(i("lab-error"),"textContent",`${N.error.toFixed(1)}\xB0`),n.property(i("lab-feedback"),"textContent",e.body!=="upright"?"\u865A\u62DF\u540A\u67B6\u6B63\u5728\u6276\u8D77\u6A21\u578B\uFF0C\u8BF7\u7A0D\u5019\u2026":e.needsNeutral?"\u8BF7\u5148\u677E\u5F00\u6447\u6746\u548C\u6309\u952E\uFF0C\u518D\u5F00\u59CB\u5173\u8282\u5B9E\u9A8C\u3002":N.feedback),n.property(i("lab-knowledge"),"textContent",N.spec.copy),n.property(i("lab-help"),"textContent",t.source==="manual"?"W / S \u6216\u6309\u4F4F \u2212 / + \u8C03\u8282 \xB7 \u677E\u5F00\u505C\u7A33\u540E\u70B9\u786E\u8BA4":"\u5341\u5B57\u952E\u5DE6\u53F3\u9009\u5173\u8282 \xB7 \u5DE6\u6746\u4E0A / \u4E0B\u8C03\u8282 \xB7 A \u786E\u8BA4 \xB7 X \u8BCA\u65AD\u793A\u8303 \xB7 Y \u590D\u4F4D");for(let[X,I,F]of[["lab-confirm","A \u786E\u8BA4\u6821\u51C6","1 \u786E\u8BA4\u6821\u51C6"],["lab-demo","X \u8BCA\u65AD\u793A\u8303","2 \u8BCA\u65AD\u793A\u8303"],["lab-reset","Y \u5173\u8282\u590D\u4F4D","\u5173\u8282\u590D\u4F4D"]])n.property(i(X),"textContent",t.source==="manual"?F:I);for(let X of document.querySelectorAll("[data-lab-joint]"))n.attribute(X,"aria-pressed",String(X.dataset.labJoint===N.selected)),n.attribute(X,"data-complete",String(N.completed.has(X.dataset.labJoint)));for(let X of document.querySelectorAll("#lab-panel button"))n.property(X,"disabled",!e.running||e.paused||e.body!=="upright"||e.needsNeutral)}n.attribute(document.body,"data-experience",e.experience),n.attribute(i("source-manual"),"aria-pressed",String(t.source==="manual")),n.attribute(i("source-pad"),"aria-pressed",String(t.source==="pad")),n.property(document.querySelector(".mission-card"),"hidden",e.experience!=="mission");for(let N of document.querySelectorAll("button[data-experience]"))n.attribute(N,"aria-pressed",String(N.dataset.experience===e.experience)),n.property(N,"disabled",!t.loaded);let l=t.input;n.attribute(document.body,"data-input",l),n.attribute(document.body,"data-stage",e.stage),n.attribute(document.body,"data-mode",e.mode),n.attribute(document.body,"data-action",e.selectedAction),n.attribute(document.body,"data-body",e.body),n.attribute(document.body,"data-stepping",String(e.stepping)),n.attribute(document.body,"data-speed",e.speedMode),this.stepping=e.stepping;let c={slow:"\u4F4E\u901F",fast:"\u9AD8\u901F"};n.property(i("speed-status"),"textContent",`\u5F53\u524D\uFF1A${c[e.speedMode]}`);for(let N of document.querySelectorAll("[data-drive-speed]")){let X=N.dataset.driveSpeed;n.attribute(N,"aria-pressed",String(X===e.speedMode)),n.property(N,"disabled",!e.running||e.paused||e.body!=="upright"||jt(e.mode)),n.property(N.querySelector("small"),"textContent",t.source==="manual"||r&&X==="slow"?"\u70B9\u51FB\u5207\u6362":{slow:"LT \u8FDE\u6309 2 \u6B21",fast:"LB \u8FDE\u6309 2 \u6B21"}[X]),n.property(N,"title",t.source==="manual"||r&&X==="slow"?"\u70B9\u51FB\u5207\u6362\u901F\u5EA6\u6863":X==="slow"?"LT \u5DE6\u540E\u6273\u673A\u5FEB\u901F\u6309\u4E0B\u5E76\u677E\u5F00\u4E24\u6B21":"LB \u5DE6\u80A9\u952E\u5FEB\u901F\u6309\u4E0B\u5E76\u677E\u5F00\u4E24\u6B21")}n.property(i("speed-help"),"textContent",e.running?e.paused?"\u5DF2\u6682\u505C \xB7 \u7EE7\u7EED\u540E\u53EF\u8C03\u901F\u3002":e.body!=="upright"||jt(e.mode)?"\u5148\u8D77\u8EAB\u6062\u590D\u7AD9\u7ACB\uFF0C\u518D\u5207\u884C\u8D70\u4F53\u9A8C\u901F\u5EA6\u3002":e.mode!=="locomotion"?"\u901F\u5EA6\u6863\u5DF2\u8BB0\u4F4F \xB7 \u5207\u56DE\u884C\u8D70\u6A21\u5F0F\u540E\u751F\u6548\u3002":`${{slow:"\u4F4E\u901F\u9002\u5408\u9760\u8FD1\u76EE\u6807",fast:"\u9AD8\u901F\u9002\u5408\u5FEB\u901F\u79FB\u52A8"}[e.speedMode]} \xB7 ${t.source==="pad"?"\u6447\u6746\u63A8\u5F97\u8D8A\u8FDC\uFF0C\u8D70\u5F97\u8D8A\u5FEB":"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u5207\u6863"}\u3002\u901F\u5EA6\u4E3A\u7F51\u9875\u6A21\u62DF\u3002`:"\u9ED8\u8BA4\u4F4E\u901F \xB7 \u5F00\u59CB\u4F53\u9A8C\u540E\u53EF\u5207\u6362\u9AD8\u4F4E\u901F\u3002"),n.attribute(i("step-toggle"),"aria-pressed",String(e.stepping)),n.property(i("step-toggle"),"textContent",e.stepping?"\u505C\u6B62\u8E0F\u6B65":"\u6301\u7EED\u8E0F\u6B65"),n.property(i("step-toggle"),"disabled",!e.running||e.paused||e.body!=="upright"||jt(e.mode)||!!e.gesture);let h=i("recover-body");n.property(h,"disabled",!e.running||e.paused||e.body!=="fallen"),n.property(h,"textContent",e.body==="recovering"?"\u6B63\u5728\u8D77\u8EAB\u2026":"\u8D77\u8EAB\u590D\u4F4D");let u={upright:a?"\u540A\u67B6\u5173\u8282\u5B9E\u9A8C":jt(e.mode)?"\u5F85\u542F\u52A8":e.stepping?"\u6301\u7EED\u8E0F\u6B65":Xi.find(N=>N.id===e.mode).title,falling:"\u5931\u53BB\u652F\u6491",fallen:"\u5DF2\u5012\u5730",recovering:a?"\u540A\u67B6\u6276\u8D77\u4E2D":"\u8D77\u8EAB\u590D\u4F4D"}[e.body];n.property(i("robot-state"),"textContent",u);for(let N of document.querySelectorAll("[data-drive-mode]"))n.attribute(N,"aria-pressed",String(N.dataset.driveMode===e.mode)),n.property(N,"disabled",!t.loaded);let d=Xi.find(N=>N.id===e.mode);n.property(i("mode-title"),"textContent",`${d.title} \xB7 ${d.hint}`),n.property(i("mode-copy"),"textContent",o.copy),n.property(i("pause-key"),"textContent",r?"\u89E6\u5C4F":t.source==="pad"?"\u2261":"P"),n.property(i("pause-key-copy"),"textContent",r?"\u5207\u6362\u4E0A\u65B9\u6A21\u5F0F":t.source==="pad"?"\u7AD9\u7ACB / \u884C\u8D70":"\u6682\u505C / \u7EE7\u7EED"),n.attribute(i("pause-key"),"aria-label",r?"\u83DC\u5355\u952E\u672A\u8BFB\u5230\uFF0C\u8BF7\u70B9\u51FB\u6A21\u5F0F\u6309\u94AE":t.source==="pad"?"\u83DC\u5355\u952E\uFF0C\u4E09\u6A2A\u7EBF\u56FE\u6807":"P \u952E"),n.property(i("performance-shortcuts"),"hidden",!1),n.property(i("normal-gestures"),"hidden",!1),n.property(i("action-menu-play"),"hidden",e.mode!=="performance"),n.property(i("action-menu-play"),"textContent",t.source==="pad"?"A \u25B6":"\u64AD\u653E \u25B6");for(let N of document.querySelectorAll("[data-performance-action]"))n.property(N,"disabled",!e.running||e.paused||!!e.gesture||e.needsNeutral||e.body!=="upright"||jt(e.mode)),n.attribute(N,"aria-pressed",String(e.gesture===N.dataset.performanceAction));for(let N of document.querySelectorAll("[data-mode-shortcut]")){let X=o.cards.find(I=>I.id===N.dataset.modeShortcut);n.property(N,"disabled",!e.running||e.paused||(X.command.recover?e.body!=="fallen":X.command.mode==="debug"?!["damp","zero"].includes(e.mode):["locomotion","stand"].includes(X.command.mode??"")&&e.body!=="upright")),n.attribute(N,"aria-pressed",String(X.command.recover?e.body==="recovering":e.mode===X.command.mode))}n.property(i("mode-shortcuts"),"textContent",t.source==="manual"?"\u5361\u7247\u5747\u53EF\u76F4\u63A5\u70B9\u51FB \xB7 P \u6682\u505C / \u7EE7\u7EED\uFF0CR \u8D77\u8EAB\u3002":r?"A \u7EE7\u7EED\u3001B \u6682\u505C\uFF1B\u4F4E\u901F\u70B9\u5C4F\u5E55\u3002LB / RB \u4E3A\u5C55\u5385\u66FF\u4EE3\u6620\u5C04\u3002":"LT \u7EC4\u5408\u53EF\u540C\u65F6\u6309\u4F4F\u81F3\u6EE1 2 \u79D2\uFF1BRT + A \u884C\u8D70\u3002RB \u821E\u8E48\u4E3A\u7F51\u9875\u6269\u5C55\uFF0CA \u7EE7\u7EED\u3001B \u6682\u505C\u3002"),n.property(i("pad-layout"),"title",r?"\u6309\u5C55\u5385\u7167\u7247\u4E2D\u7684\u901A\u9053\u8F6C\u6362\uFF1B\u672A\u6D4B\u8BD5\u7684\u6309\u952E\u4E0D\u7ED1\u5B9A":"\u6807\u51C6\u6D4F\u89C8\u5668\u5E03\u5C40\uFF0C\u7535\u8111\u4FDD\u6301\u539F\u63A7\u5236");let f=Bs(e.selectedAction),g=i("action-select");g.value!==e.selectedAction&&(g.value=e.selectedAction),n.property(i("selected-action-title"),"textContent",f.title),n.property(i("action-description"),"textContent",f.description),n.attribute(document.body,"data-motion",e.paused?"paused":e.body!=="upright"?e.body:e.gesture??(e.speed>.02?"walking":"idle")),n.property(i("connection-label"),"textContent",t.source==="manual"?"\u952E\u76D8 / \u89E6\u5C4F":l==="ready"?"\u624B\u67C4\u5DF2\u63A5\u901A":l==="waiting"?"\u6B63\u5728\u7B49\u5F85\u624B\u67C4":"\u624B\u67C4\u8F93\u5165\u5DF2\u6682\u505C"),n.attribute(i("connection-label").parentElement,"data-ready",String(l==="ready")),n.property(i("input-status"),"textContent",a&&t.source==="manual"&&e.running&&!e.paused?"\u5173\u8282\u5B9E\u9A8C \xB7 W / S \u8C03\u8282\uFF0C1 \u786E\u8BA4\u30012 \u793A\u8303\uFF1B\u4E5F\u53EF\u6309\u4F4F\u5C4F\u5E55 \u2212 / +\u3002":t.copy);let _=i("drive-start");n.property(_,"disabled",!t.loaded||t.waiting||!e.paused&&e.running&&l==="ready");let m=t.source==="pad"?"A":"\u2197",p=e.experience==="mission"?"\u4EFB\u52A1":"\u4F53\u9A8C";n.html(_,t.waiting?"\u7B49\u5F85\u8FDE\u63A5\u2026 <span>\u25CC</span>":e.paused?`\u7EE7\u7EED${p} <span>${m}</span>`:e.running?"\u9A7E\u9A76\u4E2D <span>\u2197</span>":`\u5F00\u59CB${p} <span>${m}</span>`);let x=i("drive-pause");n.property(x,"disabled",!t.loaded||!e.running&&!t.waiting),n.property(x,"textContent",t.waiting?"\u53D6\u6D88":e.paused?"\u7EE7\u7EED":"\u6682\u505C");for(let N of["action-wave","action-menu-play","action-invite"])n.property(i(N),"disabled",!e.running||e.paused||!!e.gesture||jt(e.mode)||e.body!=="upright"||e.needsNeutral);n.property(i("emergency-stop"),"disabled",!e.running&&!t.waiting);let y=e.tutorial,S=mc(y,r?"exhibition-android":"standard",t.source==="manual",e.body,e.mode);n.property(i("mission-step"),"textContent",`${String(Math.min(6,y.index+1)).padStart(2,"0")} / 06`),n.property(i("mission-title"),"textContent",S.title);let P=e.body!=="upright"&&!["damp","recover"].includes(e.stage),T=P?"\u78B0\u649E\u4E2D\u65AD\u4E86\u8FD9\u4E00\u6B65\uFF0C\u5148\u8D77\u8EAB\u6062\u590D\u652F\u6491\u3002\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4\u4F1A\u4FDD\u7559\u3002":t.source==="manual"&&e.stage==="walk"?"\u6309\u4F4F\u524D\u8FDB\u3001\u540E\u9000\u6216\u4FA7\u79FB\uFF0C\u4EB2\u624B\u8D70\u51FA 0.8 \u7C73\u3002":t.source==="manual"&&e.stage==="turn"?"\u6309\u4F4F\u5DE6\u8F6C\u6216\u53F3\u8F6C\uFF0C\u8BA9\u8EAB\u4F53\u8F6C\u8FC7\u7EA6 45\xB0\u3002":S.instruction;n.property(i("mission-description"),"textContent",T);let A=Math.round(y.progress*100),D=mc({step:"recover"},r?"exhibition-android":"standard",t.source==="manual",e.body,e.mode);n.property(i("tutorial-key"),"textContent",P?D.keys:S.keys),n.property(i("tutorial-knowledge"),"textContent",S.knowledge),n.attribute(i("tutorial-progress"),"style",`transform:scaleX(${A/100})`),n.attribute(i("tutorial-progress").parentElement,"aria-valuenow",String(A)),n.property(i("arrival-progress"),"textContent",e.paused||!e.running?"\u6309 A \u6216\u70B9\u51FB\u5F00\u59CB\uFF0C\u8DDF\u7740\u63D0\u793A\u8BD5\u4E00\u8BD5":P?"\u8D77\u8EAB\u540E\u7EE7\u7EED\u5F53\u524D\u6B65\u9AA4":e.gesture?"\u6B63\u5728\u8868\u6F14 \xB7 \u7B49\u52A8\u4F5C\u5B8C\u6574\u7ED3\u675F":e.stage==="walk"?`\u5DF2\u8D70 ${Math.min(.8,y.progress*.8).toFixed(1)} / 0.8 m`:e.stage==="turn"?`\u5DF2\u8F6C ${Math.round(y.progress*45)} / 45\xB0`:e.stage==="complete"?"\u5168\u90E8\u5B8C\u6210 \xB7 \u53EF\u4EE5\u81EA\u7531\u63A2\u7D22\u4E86":`\u64CD\u4F5C\u8FDB\u5EA6 ${A}%`),this.tutorialCommand=P?D.command:S.command,n.property(i("tutorial-action"),"hidden",!this.tutorialCommand&&e.stage!=="complete"),n.property(i("tutorial-action"),"textContent",P?D.button:S.button),n.property(i("tutorial-action"),"disabled",e.stage!=="complete"&&(!e.running||e.paused||!!e.gesture||(e.stage==="recover"||P)&&e.body!=="fallen"));let v=y.index<2?0:y.index<5?1:2;["arrival","greeting","guide"].forEach((N,X)=>n.attribute(i(`route-${N}`),"data-state",e.stage==="complete"||X<v?"done":X===v?"current":"")),n.attribute(document.body,"data-tutorial",e.experience==="mission"?P?"recover":S.focus:""),n.property(i("drive-message"),"textContent",e.message),n.attribute(i("drive-message"),"data-warning",String(!!e.contact||e.body==="fallen"||e.body==="falling")),n.property(i("drive-result"),"hidden",e.experience!=="mission"||e.stage!=="complete"),n.property(i("result-stars"),"textContent","\u2605".repeat(e.stars)+"\u2606".repeat(3-e.stars)),n.html(i("result-score"),`${e.score} <small>\u5206</small>`),n.property(i("speed"),"textContent",e.speed.toFixed(2)),n.property(i("motion-label"),"textContent",e.paused?"\u5DF2\u6682\u505C":e.body!=="upright"?u:e.gesture?Bs(e.gesture).title:e.speed>.02||Math.abs(e.angular)>.1?"\u6B63\u5728\u8FC8\u6B65":e.running?u:"\u7B49\u5F85\u51FA\u53D1"),n.property(i("distance-travelled"),"textContent",`${e.distance.toFixed(1)} m`),n.property(i("fall-count"),"textContent",String(e.falls)),n.property(i("elapsed"),"textContent",`${String(Math.floor(e.seconds/60)).padStart(2,"0")}:${String(Math.floor(e.seconds%60)).padStart(2,"0")}`);let w=document.getElementById("map-robot");n.attribute(w,"transform",`translate(${90+e.x*24.5} ${94+e.z*24.5}) rotate(${180-e.yaw*180/Math.PI})`),n.attribute(w,"data-x",String(e.x)),n.attribute(w,"data-z",String(e.z)),n.attribute(w,"data-yaw",String(e.yaw));let O=document.getElementById("map-target");n.attribute(O,"cx",String(90+e.target.x*24.5)),n.attribute(O,"cy",String(94+e.target.z*24.5)),n.attribute(O,"visibility",e.experience==="mission"&&e.stage==="walk"?"visible":"hidden")}};var nd=pc,_c=class{previous;events=[];update(e,t){this.events.length=0;let n=this.previous,i=e.running&&!e.paused;if(n){let r;i&&e.body==="falling"&&n.body!=="falling"?r="warning":i&&e.experience==="mission"&&n.experience==="mission"&&nd.indexOf(e.stage)>nd.indexOf(n.stage)?r="success":i&&(!n.running||n.paused||n.body==="recovering"&&e.body==="upright")?r="ready":n.running&&!n.paused&&!i?r="pause":e.mode!==n.mode?r="mode":i&&e.speedMode!==n.speedMode?r="speed":i&&e.gesture&&e.gesture!==n.gesture?r="action":i&&e.contact&&e.contact!==n.contact&&(r="warning"),r&&this.events.push({cue:r})}if(i&&e.body==="upright")for(let r of t)this.events.push({cue:"footstep",...r});return this.previous?Object.assign(this.previous,e):this.previous={...e},this.events}},K0={ready:[440,660],pause:[440,330],mode:[392,523],speed:[523,784],action:[523,659],success:[523,659,784],warning:[220,165]},_r={master:.72,volume:2.7,duration:1.45,minimumDuration:.13,hold:.55};function J0(s,e,t="clear"){let n=s.createGain(),i=s.createWaveShaper();n.gain.value=t==="minimal"?.6:_r.master;let r=new Float32Array(2049);for(let o=0;o<r.length;o++)r[o]=.8*Math.tanh((o/(r.length-1)*2-1)*1.5);return i.curve=r,n.connect(i),i.connect(e),n}var yc=class{constructor(e,t,n="original"){this.context=e;this.output=t;this.profile=n;this.noise=e.createBuffer(1,Math.ceil(e.sampleRate*.24),e.sampleRate);let i=this.noise.getChannelData(0),r=1947;for(let o=0;o<i.length;o++)r=Math.imul(r,1664525)+1013904223|0,i[o]=(r>>>0)/2147483648-1}noise;voices=new Map;lastWarning=-1/0;lastAction=-1/0;lastStep=-1/0;get activeVoices(){return this.voices.size}play(e){if(this.profile==="minimal"){this.playMinimal(e);return}if("action"in e){this.playAction(e);return}let t=this.context.currentTime;if(e.cue==="warning"){if(t-this.lastWarning<.8)return;this.lastWarning=t}if(e.cue==="footstep"){let i=Math.max(.2,Math.min(1,e.strength??.5)),r=this.context.createBufferSource(),o=this.context.createBiquadFilter();r.buffer=this.noise,o.type="lowpass",o.frequency.value=e.side==="left"?1050:1150,r.connect(o),this.envelope(r,o,t,.085,.18*i,[o]),this.tone(e.side==="left"?125:135,t,.07,.22*i,55);return}let n=this.profile==="clear"?.21:e.cue==="warning"?.13:.095;K0[e.cue].forEach((i,r)=>this.tone(i,t+r*(n*.85),n,e.cue==="warning"?.11:.085))}playMinimal(e){let t=this.context.currentTime;if("action"in e){if(!["bell","clap","landing"].includes(e.cue)||t-this.lastAction<1.1)return;this.lastAction=t,this.tone(e.cue==="landing"?520:660,t,.16,.105,void 0,!0);return}if(e.cue==="footstep"){if(t-this.lastStep<.32)return;this.lastStep=t;let i=this.context.createBufferSource(),r=this.context.createBiquadFilter();i.buffer=this.noise,r.type="lowpass",r.frequency.value=900,i.connect(r),this.envelope(i,r,t,.065,.045*Math.min(1,e.strength??.5),[r]);return}if(e.cue==="warning"){if(t-this.lastWarning<1.5)return;this.lastWarning=t}(e.cue==="ready"||e.cue==="success"?[587,784]:e.cue==="warning"?[523]:[659]).forEach((i,r)=>this.tone(i,t+r*.14,.18,e.cue==="success"?.16:.14))}playAction(e){let t=this.context.currentTime,n=Math.max(.2,Math.min(1,e.strength??.65));switch(e.cue){case"servo":this.tone(e.pitch??190,t,.15,.1*n,(e.pitch??190)*1.35,!0,"triangle");break;case"swoosh":this.burst("bandpass",e.pitch??900,(e.pitch??900)*2.4,t,.22,.2*n);break;case"clap":this.burst("highpass",1e3,1400,t,.1,.48*n),this.burst("bandpass",1800,1200,t+.014,.065,.22*n);break;case"kick":this.tone(145,t,.15,.3*n,48,!0);break;case"snare":this.burst("highpass",900,1300,t,.12,.27*n),this.tone(145,t,.075,.1*n,85,!0);break;case"hat":this.burst("highpass",6500,8e3,t,.06,.28*n);break;case"bell":this.tone(e.pitch??659,t,.2,.11*n,e.pitch??659,!0),this.tone((e.pitch??659)*2,t,.12,.025*n,(e.pitch??659)*2,!0);break;case"landing":this.burst("lowpass",600,240,t,.18,.45*n),this.tone(115,t,.18,.32*n,44,!0);break}}burst(e,t,n,i,r,o){let a=this.context.createBufferSource(),l=this.context.createBiquadFilter();a.buffer=this.noise,this.profile==="clear"&&(t=Math.min(2200,Math.max(500,t)),n=Math.min(2600,Math.max(500,n))),l.type=e,l.Q.value=.7,l.frequency.setValueAtTime(t,i),l.frequency.exponentialRampToValueAtTime(n,i+r),a.connect(l),this.envelope(a,l,i,r,o,[l],!0)}tone(e,t,n,i,r=e,o=!1,a="sine"){if(this.profile==="clear"){let c=h=>Math.min(3200,Math.max(420,h<300?h*4:h));e=c(e),r=c(r),a==="sine"&&(a="triangle")}let l=this.context.createOscillator();l.type=a,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(r,t+n),this.envelope(l,l,t,n,i,[],o)}envelope(e,t,n,i,r,o,a=!1){if(this.voices.size>=16){e.disconnect();for(let c of o)c.disconnect();return}this.profile==="clear"&&(i=Math.max(_r.minimumDuration,i*_r.duration),r*=_r.volume);let l=this.context.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+(this.profile==="clear"?.012:.004)),this.profile==="clear"&&l.gain.setValueAtTime(r,n+i*_r.hold),this.profile==="minimal"&&l.gain.setValueAtTime(r,n+i*.4),l.gain.exponentialRampToValueAtTime(1e-4,n+i),t.connect(l),l.connect(this.output),this.voices.set(e,{nodes:[e,l,...o],performance:a}),e.onended=()=>{this.release(e)},e.start(n),e.stop(n+i+.008)}release(e){let t=this.voices.get(e);if(t){this.voices.delete(e),e.onended=null;for(let n of t.nodes)n.disconnect()}}stop(){for(let e of this.voices.keys()){try{e.stop()}catch{}this.release(e)}}stopPerformance(){for(let[e,t]of this.voices)if(t.performance){try{e.stop()}catch{}this.release(e)}}},ia=class{constructor(e){this.changed=e}context;output;bank;tracker=new _c;wanted=!1;interrupted=!1;pending=!1;failed=!1;generation=0;wasActive=!1;previousGesture=null;previousMode;get status(){var e;return this.failed?"unavailable":this.pending?"pending":this.wanted?this.interrupted||((e=this.context)==null?void 0:e.state)!=="running"?"resume":"on":"off"}async toggle(){if(this.pending)return;if(this.status==="on"){this.disable();return}let e=++this.generation;this.wanted=!0,this.pending=!0,this.changed(this.status);try{if(!this.context){let i=globalThis.AudioContext??globalThis.webkitAudioContext;if(!i)throw new Error("Web Audio unavailable");this.context=new i,this.output=J0(this.context,this.context.destination,"minimal"),this.bank=new yc(this.context,this.output,"minimal"),this.context.addEventListener("statechange",()=>this.changed(this.status))}this.failed=!1,this.interrupted=!1;let t,n=!1;try{n=await Promise.race([this.context.resume().then(()=>!0),new Promise(i=>{t=setTimeout(()=>i(!1),1800)})])}finally{clearTimeout(t)}if(e!==this.generation)return;this.interrupted=!n||this.context.state!=="running",this.interrupted||this.bank.play({cue:"ready"})}catch{this.failed=!this.bank,this.interrupted=!0,this.failed&&(this.wanted=!1)}finally{e===this.generation&&(this.pending=!1,this.changed(this.status))}}disable(){var e,t;++this.generation,this.wanted=!1,this.pending=!1,(e=this.bank)==null||e.stop(),(t=this.context)==null||t.suspend().catch(()=>{}),this.changed(this.status)}interrupt(){var e,t;++this.generation,this.pending=!1,this.interrupted=this.wanted,(e=this.bank)==null||e.stop(),(t=this.context)==null||t.suspend().catch(()=>{}),this.changed(this.status)}update(e,t,n){var o,a,l,c,h;let i=this.tracker.update(e,t),r=e.running&&!e.paused;if(this.wasActive&&!r&&((o=this.bank)==null||o.stop()),this.wasActive=r,(e.gesture&&this.previousGesture!==e.gesture||this.previousMode!==void 0&&this.previousMode!==e.mode||!r||e.body!=="upright")&&((a=this.bank)==null||a.stopPerformance()),this.previousGesture=e.gesture,this.previousMode=e.mode,this.status==="on")try{for(let u of i)(u.cue!=="action"||n===void 0)&&((l=this.bank)==null||l.play(u));if(r&&e.body==="upright")for(let u of n??[])(c=this.bank)==null||c.play(u)}catch{this.failed=!0,(h=this.bank)==null||h.stop(),this.changed(this.status)}}};var Q0={duration:300,startDelay:0,strongMagnitude:.55,weakMagnitude:.35},ey={duration:800,startDelay:0,strongMagnitude:.8,weakMagnitude:.45};function ra(s){var e;return s!=null&&s.connected?typeof((e=s.vibrationActuator)==null?void 0:e.playEffect)=="function"?"ready":"unsupported":"no-device"}var xc=class{constructor(e=1500){this.timeoutMs=e}cancel=null;stop(){var e;(e=this.cancel)==null||e.call(this)}async run(e,t=Q0){if(this.cancel)return{status:"busy",message:"\u6B63\u5728\u6D4B\u8BD5\uFF0C\u8BF7\u7A0D\u5019\u3002"};let n=ra(e);if(n==="no-device")return{status:"no-device",message:"\u5C1A\u672A\u8BFB\u5230\u624B\u67C4\uFF0C\u8BF7\u70B9\u51FB\u9875\u9762\u5E76\u6309 A \u5524\u9192\u3002"};if(n==="unsupported")return{status:"unsupported",message:"\u5DF2\u8BFB\u5230\u624B\u67C4\uFF0C\u4F46\u5F53\u524D\u8FDE\u63A5\u6CA1\u6709\u63D0\u4F9B\u9707\u52A8\u63A5\u53E3\u3002"};let i=e.vibrationActuator;return new Promise(r=>{let o=!1,a=()=>{var h,u;try{(u=(h=i.reset)==null?void 0:h.call(i))==null||u.catch(()=>{})}catch{}},l=(h,u)=>{o||(o=!0,clearTimeout(c),this.cancel=null,h!=="completed"&&a(),r({status:h,message:u}))},c=setTimeout(()=>l("timeout","\u9A71\u52A8\u6CA1\u6709\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8BF7\u68C0\u67E5\u624B\u67C4\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"),this.timeoutMs);this.cancel=()=>l("interrupted","\u6D4B\u8BD5\u5DF2\u505C\u6B62\uFF0C\u53EF\u4EE5\u91CD\u65B0\u6D4B\u8BD5\u3002");try{Promise.resolve(i.playEffect("dual-rumble",t)).then(h=>h==="complete"?l("completed","\u6307\u4EE4\u5DF2\u5B8C\u6210\u3002\u4F60\u662F\u5426\u611F\u89C9\u5230\u624B\u67C4\u9707\u52A8\uFF1F"):l("interrupted","\u6307\u4EE4\u88AB\u4E2D\u65AD\uFF0C\u4FDD\u6301\u9875\u9762\u5728\u524D\u53F0\u540E\u91CD\u8BD5\u3002")).catch(()=>l("error","\u6D4F\u89C8\u5668\u6216\u9A71\u52A8\u672A\u63A5\u53D7\u9707\u52A8\u6307\u4EE4\uFF0C\u8BF7\u5C1D\u8BD5 USB \u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"))}catch{l("error","\u9707\u52A8\u6307\u4EE4\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u548C\u8FDE\u63A5\u65B9\u5F0F\u3002")}})}},sa=class{enabled=!0;output=new xc;lastBody="";device="";setEnabled(e){this.enabled=e,e||this.interrupt()}interrupt(){this.output.stop()}update(e,t,n){let i=this.lastBody==="falling"&&e.body==="fallen";this.lastBody=e.body;let r=t!=null&&t.connected?`${t.index??0}:${t.id??""}`:"";if(r!==this.device&&(this.interrupt(),this.device=r,i=!1),!this.enabled||!n||!e.running||e.paused||!(t!=null&&t.connected)||e.body==="recovering"||e.body==="upright"){this.interrupt();return}i&&ra(t)==="ready"&&this.output.run(t,ey)}};var wn="standard";try{localStorage.getItem("g1-drive-layout-v1")==="exhibition-android"&&(wn="exhibition-android")}catch{}var nt=new jo({experience:"free"}),ni=new ji(void 0,wn),bc=new Qo(wn),xr=new na,vr=new ia(ty),Ei=new sa;try{Ei.setEnabled(localStorage.getItem("g1-drive-haptics-v1")!=="off")}catch{}function rd(s){let e=ve("haptic-toggle"),t=ra(s),n=t==="no-device"?"\u9707\u52A8\u5F85\u63A5":t==="unsupported"?"\u9707\u52A8\u4E0D\u53EF\u7528":Ei.enabled?"\u9707\u52A8\u5DF2\u5F00":"\u9707\u52A8\u5DF2\u5173";e.textContent!==n&&(e.textContent=n);let i=String(Ei.enabled);e.getAttribute("aria-pressed")!==i&&e.setAttribute("aria-pressed",i);let r=t!=="ready",o=t==="ready"?"\u6454\u673A\u843D\u5730\u9707\u52A8 0.8 \u79D2 \xB7 \u70B9\u51FB\u5F00\u5173":"\u5F53\u524D\u8BBE\u5907\u672A\u63D0\u4F9B\u9707\u52A8\u63A5\u53E3\uFF0C\u753B\u9762\u63D0\u793A\u4ECD\u53EF\u7528";e.disabled!==r&&(e.disabled=r),e.title!==o&&(e.title=o)}ve("haptic-toggle").addEventListener("click",()=>{Ei.setEnabled(!Ei.enabled);try{localStorage.setItem("g1-drive-haptics-v1",Ei.enabled?"on":"off")}catch{}rd(od().find(s=>String(s.index)===Si))});function ty(s){let e=ve("sound-toggle"),t={off:"\u5F00\u542F\u97F3\u6548",on:"\u97F3\u6548\u5DF2\u5F00",pending:"\u97F3\u6548\u5F00\u542F\u4E2D\u2026",resume:"\u6062\u590D\u97F3\u6548",unavailable:"\u97F3\u6548\u4E0D\u53EF\u7528"};e.textContent=t[s],e.dataset.sound=s,e.setAttribute("aria-pressed",String(s==="on")),e.disabled=s==="pending"||s==="unavailable",e.title=s==="on"?"\u70B9\u51FB\u9759\u97F3 \xB7 \u7B80\u7EA6\u8F7B\u63D0\u793A\uFF0C\u65E0\u8FDE\u7EED\u9F13\u70B9":"\u70B9\u51FB\u5F00\u542F\u7B80\u7EA6\u97F3\u6548 \xB7 \u4E0D\u5F71\u54CD\u624B\u67C4\u8FDE\u63A5"}ve("sound-toggle").addEventListener("click",()=>{vr.toggle()});var Ke,Fn="pad",zs=!1,Bn=!1,$t="paused",Zt="\u6309 A \u5F00\u59CB\u4F53\u9A8C \xB7 \u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1\uFF1B\u4E5F\u53EF\u70B9\u51FB\u5F00\u59CB\u3002",id="",Si="",yr=0,oa=0,sd=!1,od=()=>{try{return[...navigator.getGamepads()].filter(s=>!!(s!=null&&s.connected))}catch{return[]}},ln=()=>xr.render(nt,{source:Fn,input:$t,copy:Zt,loaded:zs,waiting:Bn,armed:ni.active,layout:wn});function yn(s="\u7A97\u53E3\u5DF2\u6682\u505C \xB7 \u56DE\u5230\u6B64\u9875\u540E\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED",e="paused"){Ei.interrupt(),Bn=!1,bc.block(),ni.suspend(),xr.clear(),nt.suspend(s),$t=e,Zt=s,ln()}function Mc(){if(zs){if(xr.clear(),ve("drive-viewer").focus({preventScroll:!0}),Fn==="manual"){Bn=!1,$t="ready",Zt="WASD \u79FB\u52A8 \xB7 Q/E \u8F6C\u8EAB \xB7 M \u6A21\u5F0F \xB7 [ / ] \u9009\u52A8\u4F5C \xB7 1 \u6267\u884C \xB7 P \u6682\u505C",nt.start(),ln();return}ni.suspend(),Bn=!0,$t="waiting",Zt="\u6B63\u5728\u7B49\u5F85\u624B\u67C4 \xB7 \u6309 A \u5524\u9192\uFF0C\u7136\u540E\u677E\u5F00\u5168\u90E8\u6309\u952E\u4E0E\u6447\u6746\u3002",ln()}}function ad(s){yn("\u5207\u6362\u5B8C\u6210 \xB7 \u70B9\u51FB\u5F00\u59CB\u4F53\u9A8C"),Fn=s,ve("source-pad").setAttribute("aria-pressed",String(s==="pad")),ve("source-manual").setAttribute("aria-pressed",String(s==="manual")),ve("device-controls").hidden=s!=="pad",ve("left-stick-label").textContent=s==="pad"?"\u5DE6\u6447\u6746 \xB7 \u79FB\u52A8":"WASD \xB7 \u79FB\u52A8",ve("right-stick-label").textContent=s==="pad"?"\u53F3\u6447\u6746 \xB7 \u8F6C\u5411":"Q / E \xB7 \u8F6C\u8EAB",ve("right-stick-copy").textContent=s==="pad"?"\u5DE6\u53F3\u8F6C\u8EAB / \u4E0A\u4E0B\u8C03\u89C6\u89D2":"\u65B9\u5411\u952E\u4E5F\u53EF\u8F6C\u8EAB / \u8C03\u89C6\u89D2";for(let[e,t,n]of[["wave-key","A","1"],["invite-key","X","2"],["stop-key","B","Esc"],["pause-key","\u2261","P"]])ve(e).textContent=s==="pad"?t:n;ve("pause-key").setAttribute("aria-label",s==="pad"?"\u83DC\u5355\u952E\uFF0C\u4E09\u6A2A\u7EBF\u56FE\u6807":"P \u952E"),ve("pause-key-copy").textContent=s==="pad"?"\u7AD9\u7ACB / \u884C\u8D70":"\u6682\u505C / \u7EE7\u7EED",ve("touch-controls").hidden=s!=="manual",ve("show-touch").setAttribute("aria-expanded",String(s==="manual")),document.body.dataset.touch=String(s==="manual"),Zt=s==="pad"?"\u6309 A \u5F00\u59CB / \u7EE7\u7EED \xB7 \u677E\u5F00\u5168\u90E8\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1\u3002":"WASD \u79FB\u52A8 \xB7 Q/E \u8F6C\u8EAB \xB7 1 \u6325\u624B \xB7 2 \u9080\u8BF7\uFF0C\u6216\u6309\u4F4F\u4E0B\u65B9\u5C4F\u5E55\u65B9\u5411\u952E\u3002",ln()}function ny(){if(Bn){yn("\u5DF2\u53D6\u6D88\u7B49\u5F85 \xB7 \u70B9\u51FB\u5F00\u59CB\u53EF\u91CD\u65B0\u8FDE\u63A5");return}if(nt.paused){Mc();return}nt.suspend(),xr.clear(),$t="paused",Zt=Fn==="pad"?"\u5DF2\u6682\u505C \xB7 \u6309 A \u7EE7\u7EED\uFF0C\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746\u540E\u63A5\u7BA1":"\u5DF2\u6682\u505C \xB7 \u6309 P \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85",ln()}ve("drive-start").addEventListener("click",Mc);ve("drive-pause").addEventListener("click",ny);for(let s of document.querySelectorAll("button[data-experience]"))s.addEventListener("click",()=>{let e=s.dataset.experience;e!==nt.experience&&(yn(),nt.setExperience(e),Ke==null||Ke.reset(),Zt=nt.message,ln())});ve("drive-reset").addEventListener("click",()=>{yn("\u4EFB\u52A1\u5DF2\u91CD\u7F6E \xB7 \u6309 A \u6216\u70B9\u51FB\u5F00\u59CB\u63A5\u5F85"),nt.reset(),Ke==null||Ke.reset(),ln()});ve("source-pad").addEventListener("click",()=>ad("pad"));ve("source-manual").addEventListener("click",()=>ad("manual"));ve("device-select").addEventListener("change",s=>{Si=s.target.value,yn("\u5DF2\u9009\u62E9\u8BBE\u5907 \xB7 \u70B9\u51FB\u5F00\u59CB\u63A5\u5F85")});ve("pad-layout").value=wn;ve("pad-layout").addEventListener("change",s=>{yn("\u5E03\u5C40\u5DF2\u5207\u6362 \xB7 \u677E\u5F00\u53CC\u6447\u6746\u548C\u6309\u952E\uFF0C\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85"),wn=s.target.value==="exhibition-android"?"exhibition-android":"standard",ni.setProfile(wn),bc.setProfile(wn);try{localStorage.setItem("g1-drive-layout-v1",wn)}catch{}ln()});ve("camera-toggle").addEventListener("click",()=>{Ke==null||Ke.toggleCamera(),vc()});ve("retry").addEventListener("click",()=>location.reload());function vc(){let s=ve("camera-toggle"),e=String(!!(Ke!=null&&Ke.overview)),t=String(nt.mode==="debug");s.dataset.overview===e&&s.dataset.lab===t||(s.dataset.overview=e,s.dataset.lab=t,s.innerHTML=(Ke!=null&&Ke.overview?"\u8FD4\u56DE\u8DDF\u968F":"\u5207\u6362\u5168\u666F")+(nt.mode==="debug"?"":" <kbd>Y</kbd>"))}async function ld(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Zt="\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u5168\u5C4F\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u83DC\u5355\u8FDB\u5165\u5168\u5C4F\u3002",ln()}}ve("fullscreen").addEventListener("click",ld);ve("fullscreen-reenter").addEventListener("click",ld);document.addEventListener("fullscreenchange",()=>{let s=!!document.fullscreenElement;s&&(sd=!0),ve("fullscreen").textContent=s?"\u9000\u51FA\u5168\u5C4F \u2199":"\u5168\u5C4F \u2197",ve("fullscreen").setAttribute("aria-pressed",String(s)),ve("fullscreen-reenter").hidden=s||!sd,Ke==null||Ke.resize()});window.addEventListener("blur",()=>{vr.interrupt(),yn()});document.addEventListener("visibilitychange",()=>{document.hidden&&(vr.interrupt(),yn("\u9875\u9762\u5DF2\u5207\u5230\u540E\u53F0 \xB7 \u56DE\u5230\u6B64\u9875\u540E\u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85"))});window.addEventListener("pagehide",()=>{vr.interrupt(),yn()});function iy(s){let e=s.map(n=>`${n.index}:${n.id}:${n.mapping}`).join("|");if(e===id)return;id=e;let t=ve("device-select");if(t.replaceChildren(...s.map(n=>new Option(`${n.index+1} \xB7 ${n.id}`,String(n.index)))),s.length||t.add(new Option("\u672A\u8BFB\u5230\u624B\u67C4 \xB7 \u6309 A \u5524\u9192","")),s.some(n=>String(n.index)===Si))t.value=Si;else{let n=s.find(i=>ji.supported(i)&&/045e.*02e0|Xbox|STANDARD GAMEPAD/i.test(i.id))??s.find(i=>ji.supported(i))??s[0];Si=n?String(n.index):"",t.value=Si}}function cd(s){var r,o;if(requestAnimationFrame(cd),yr&&s-yr<1e3/61)return;let e=yr?Math.min(.1,(s-yr)/1e3):1/60;if(yr=s,document.hidden)return;let t=od();oa+=e,oa>=.1&&iy(t);let n=t.find(a=>String(a.index)===Si)??t.find(a=>ji.supported(a))??t[0];bc.read(n?[n]:[],document.hasFocus(),zs&&Fn==="pad"&&!Bn&&$t!=="neutral"&&(!nt.running||nt.paused))&&(Si=String(n.index),Mc());let i=xr.read(Fn==="manual");if(Bn&&Fn==="pad"){let a=n;a&&(ni.arm(a)?(Bn=!1,$t="neutral",Zt="\u5DF2\u627E\u5230\u624B\u67C4 \xB7 \u677E\u5F00\u53CC\u6447\u6746\u4E0E\u6309\u952E\uFF0C\u51C6\u5907\u63A5\u7BA1\u3002"):(Bn=!1,$t="unsupported",Zt=wn==="exhibition-android"?"\u8BBE\u5907\u4E0E\u5C55\u5385\u5B9E\u6D4B\u6620\u5C04\u4E0D\u7B26 \xB7 \u9700 Xbox Wireless Controller\u30014 \u8F74 / 16 \u6309\u94AE\uFF1B\u53EF\u5207\u56DE\u6807\u51C6\u5E03\u5C40\u6216\u6309\u952E\u68C0\u6D4B\u3002":"\u5F53\u524D\u8BBE\u5907\u6CA1\u6709\u6807\u51C6\u6620\u5C04 \xB7 \u8BF7\u5207\u6362\u5DF2\u6D4B\u5E03\u5C40\uFF0C\u6216\u4F7F\u7528\u952E\u76D8 / \u89E6\u5C4F\u3002"))}if(Fn==="pad"&&ni.active){let a=ni.read(t,document.hasFocus(),nt.mode);if(a.ready){$t==="neutral"&&nt.start();for(let l of["wave","invite","stop","pause","camera"])a.command[l]||=i[l];for(let l of["mode","actionStep","actionSelect","actionTrigger","speedMode","recover","toggleStand","stepping","diagnose","labSelect","labStep","labAdjust","labConfirm","labReset"])i[l]!==void 0&&(a.command[l]=i[l]);if(a.command.cycleMode||=i.cycleMode,a.command.actionStep=i.actionStep??a.command.actionStep,a.command.actionSelect=i.actionSelect??a.command.actionSelect,i=a.command,$t=nt.paused?"paused":"ready",Zt=nt.paused?"\u7F51\u9875\u5DF2\u6682\u505C \xB7 \u677E\u5F00 B\uFF0C\u6309 A \u7EE7\u7EED\uFF0C\u518D\u677E\u5F00\u6309\u952E\u4E0E\u6447\u6746":nt.mode==="debug"?"\u5173\u8282\u5B9E\u9A8C \xB7 \u5DE6\u6746\u8C03\u89D2\u5EA6\uFF0C\u5341\u5B57\u952E\u9009\u5173\u8282\uFF1BA \u786E\u8BA4\uFF0CX \u793A\u8303\uFF0CY \u590D\u4F4D\u3002":wn==="standard"?"RT + A \u884C\u8D70\uFF1BLT \u4E0E B / Y / X \u7EC4\u5408\uFF0CLT \u9700\u6309\u6EE1 2 \u79D2\u3002":"\u5C55\u5385\u5B89\u5353 \xB7 \u5DE6\u6746\u79FB\u52A8\uFF0C\u53F3\u6746\u8F6C\u8EAB\uFF1BLB \u5207\u72B6\u6001\uFF0CRB + \u5F69\u8272\u952E\u8DF3\u821E\u3002",a.triggers){let{left:l,right:c,holdProgress:h}=a.triggers,u=l>.5?h<1?` \xB7 LT \u786E\u8BA4 ${(h*2).toFixed(1)} / 2 \u79D2`:" \xB7 LT \u7EC4\u5408\u5DF2\u5C31\u7EEA":"";Zt=`LT ${Math.round(l*100)}% \xB7 RT ${Math.round(c*100)}%${u} \xB7 ${Zt}`}}else a.status==="neutral"?($t="neutral",Zt="\u8BF7\u677E\u5F00\u53CC\u6447\u6746\u3001\u80A9\u952E\u3001\u6273\u673A\u548C\u5168\u90E8\u6309\u952E\uFF0C\u56DE\u4E2D\u540E\u81EA\u52A8\u63A5\u7BA1\u3002",i={...qi}):yn(a.status==="disconnected"?"\u624B\u67C4\u5DF2\u65AD\u5F00 \xB7 \u91CD\u65B0\u8FDE\u63A5\u540E\u677E\u5F00\u6309\u952E\uFF0C\u518D\u6309 A \u7EE7\u7EED":a.status==="unsupported"?"\u8F93\u5165\u4E0E\u6240\u9009\u6620\u5C04\u4E0D\u7B26 \xB7 \u8BF7\u5148\u68C0\u67E5\u6309\u952E\u5E03\u5C40\u6216\u8FDB\u5165\u6309\u952E\u68C0\u6D4B":"\u8F93\u5165\u5DF2\u6682\u505C \xB7 \u6309 A \u6216\u70B9\u51FB\u7EE7\u7EED\u63A5\u5F85",a.status)}if(i.stop&&Bn&&(yn("\u5DF2\u53D6\u6D88\u7B49\u5F85"),i={...qi}),i.camera&&(Ke==null||Ke.toggleCamera(),vc()),nt.update(e,i),Ei.update(nt,n,Fn==="pad"&&ni.active),nt.paused&&$t==="ready"?$t="paused":!nt.paused&&nt.running&&(Fn==="manual"||ni.active)&&$t==="paused"&&($t="ready"),Ke&&zs){let a=nt.mode==="locomotion"&&[i.forward,i.strafe,i.turn].some(c=>Math.abs(c)>.05),l=Ke.update(e,nt,i.look,a);l&&nt.finishGesture(l),Ke.render(e,nt.running&&!nt.paused),vc()}vr.update(nt,((r=Ke==null?void 0:Ke.rig)==null?void 0:r.footfalls)??[],(o=Ke==null?void 0:Ke.rig)==null?void 0:o.actionSounds),oa>=.1&&(ln(),rd(n),oa=0)}async function sy(){try{Ke=new Ko(ve("drive-viewer")),Ke.renderer.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),yn("\u753B\u9762\u8FDE\u63A5\u4E2D\u65AD \xB7 \u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762"),zs=!1,ve("loading-copy").textContent="\u753B\u9762\u9700\u8981\u91CD\u65B0\u52A0\u8F7D",ve("loading").hidden=!1,ve("retry").hidden=!1,ln()}),await Ke.load(),Ke.update(1/60,nt,0),Ke.render(1/60,!1),zs=!0,ve("loading").hidden=!0,document.body.dataset.ready="true",ln(),requestAnimationFrame(cd)}catch(s){console.error("G1 driving:",s),ve("loading-copy").textContent="\u6A21\u578B\u6682\u65F6\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u91CD\u8BD5",ve("retry").hidden=!1,Zt="\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u652F\u6301 WebGL\uFF0C\u5E76\u901A\u8FC7\u672C\u5730\u9884\u89C8\u5730\u5740\u6253\u5F00\u3002",ln()}}sy();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
