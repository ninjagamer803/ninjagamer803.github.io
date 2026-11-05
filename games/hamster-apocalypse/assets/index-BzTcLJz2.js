(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",Uc=0,Co=1,Nc=2,ql=1,Yl=2,Vn=3,ui=0,Ke=1,an=2,li=0,es=1,di=2,Po=3,Lo=4,Fc=5,bi=100,Oc=101,zc=102,Bc=103,kc=104,Gc=200,Hc=201,Vc=202,Wc=203,Ma=204,Sa=205,Xc=206,qc=207,Yc=208,Kc=209,$c=210,Zc=211,jc=212,Jc=213,Qc=214,ya=0,Ea=1,wa=2,ss=3,Ta=4,ba=5,Aa=6,Ra=7,Kl=0,th=1,eh=2,ci=0,nh=1,ih=2,sh=3,rh=4,ah=5,oh=6,lh=7,$l=300,rs=301,as=302,Ca=303,Pa=304,Fr=306,zs=1e3,Ci=1001,La=1002,mn=1003,ch=1004,$s=1005,Cn=1006,Gr=1007,Pi=1008,Kn=1009,Zl=1010,jl=1011,Bs=1012,ho=1013,Li=1014,Xn=1015,Vs=1016,uo=1017,fo=1018,os=1020,Jl=35902,Ql=1021,tc=1022,Sn=1023,ec=1024,nc=1025,ns=1026,ls=1027,ic=1028,po=1029,sc=1030,mo=1031,go=1033,Sr=33776,yr=33777,Er=33778,wr=33779,Da=35840,Ia=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,za=37496,Ba=37808,ka=37809,Ga=37810,Ha=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Ka=37817,$a=37818,Za=37819,ja=37820,Ja=37821,Tr=36492,Qa=36494,to=36495,rc=36283,eo=36284,no=36285,io=36286,hh=3200,uh=3201,ac=0,dh=1,si="",sn="srgb",us="srgb-linear",Or="linear",de="srgb",zi=7680,Do=519,fh=512,ph=513,mh=514,oc=515,gh=516,_h=517,xh=518,vh=519,Io=35044,Uo="300 es",qn=2e3,Pr=2001;class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let No=1234567;const Is=Math.PI/180,ks=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function _o(i,t){return(i%t+t)%t}function Mh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sh(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function yh(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Eh(i,t=1){return t-Math.abs(_o(i,t*2)-t)}function wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Th(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ah(i,t){return i+Math.random()*(t-i)}function Rh(i){return i*(.5-Math.random())}function Ch(i){i!==void 0&&(No=i);let t=No+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ph(i){return i*Is}function Lh(i){return i*ks}function Dh(i){return(i&i-1)===0&&i!==0}function Ih(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:Is,RAD2DEG:ks,generateUUID:fs,clamp:Je,euclideanModulo:_o,mapLinear:Mh,inverseLerp:Sh,lerp:Us,damp:yh,pingpong:Eh,smoothstep:wh,smootherstep:Th,randInt:bh,randFloat:Ah,randFloatSpread:Rh,seededRandom:Ch,degToRad:Ph,radToDeg:Lh,isPowerOfTwo:Dh,ceilPowerOfTwo:Ih,floorPowerOfTwo:Uh,setQuaternionFromProperEuler:Nh,normalize:Ze,denormalize:Ji};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],w=s[4],M=s[7],z=s[2],R=s[5],A=s[8];return r[0]=o*v+a*E+l*z,r[3]=o*m+a*w+l*R,r[6]=o*d+a*M+l*A,r[1]=c*v+h*E+u*z,r[4]=c*m+h*w+u*R,r[7]=c*d+h*M+u*A,r[2]=f*v+p*E+g*z,r[5]=f*m+p*w+g*R,r[8]=f*d+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new zt;function lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){const i=Lr("canvas");return i.style.display="block",i}const Fo={};function Cs(i){i in Fo||(Fo[i]=!0,console.warn(i))}function Oh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Or:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Oo=[.64,.33,.3,.6,.15,.06],zo=[.2126,.7152,.0722],Bo=[.3127,.329],ko=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[us]:{primaries:Oo,whitePoint:Bo,transfer:Or,toXYZ:ko,fromXYZ:Go,luminanceCoefficients:zo,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Oo,whitePoint:Bo,transfer:de,toXYZ:ko,fromXYZ:Go,luminanceCoefficients:zo,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Bi;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Lr("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gh=0;class cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class Qe extends ds{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Ci,s=Ci,r=Cn,o=Pi,a=Sn,l=Kn,c=Qe.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=fs(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=$l;Qe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(p+1)/2,z=(d+1)/2,R=(h+f)/4,A=(u+v)/4,D=(g+m)/4;return w>M&&w>z?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=A/n):M>z?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=D/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=A/r,s=D/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vh extends ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hc extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wh extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const z=Math.sqrt(w),R=Math.atan2(z,d*E);m=Math.sin(m*R)/z,a=Math.sin(a*R)/z}const M=a*E;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-a){const z=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=z,c*=z,h*=z,u*=z}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new P,Ho=new Ws;class Ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),js.subVectors(this.max,ys),ki.subVectors(t.a,ys),Gi.subVectors(t.b,ys),Hi.subVectors(t.c,ys),Jn.subVectors(Gi,ki),Qn.subVectors(Hi,Gi),_i.subVectors(ki,Hi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Xr(e,ki,Gi,Hi,js)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,ki,Gi,Hi,js))?!1:(Js.crossVectors(Jn,Qn),e=[Js.x,Js.y,Js.z],Xr(e,ki,Gi,Hi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Zs=new Ii,ki=new P,Gi=new P,Hi=new P,Jn=new P,Qn=new P,_i=new P,ys=new P,js=new P,Js=new P,xi=new P;function Xr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xh=new Ii,Es=new P,qr=new P;class xo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(qr)),this.expandByPoint(Es.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new P,Yr=new P,Qs=new P,ti=new P,Kr=new P,tr=new P,$r=new P;class qh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yr.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qs),a=ti.dot(this.direction),l=-ti.dot(Qs),c=ti.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yr).addScaledVector(Qs,f),p}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),tr.subVectors(n,t),$r.crossVectors(Kr,tr);let o=this.direction.dot($r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const l=a*this.direction.dot(tr.crossVectors(ti,tr));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(ti));if(c<0||l+c>o)return null;const h=-a*ti.dot($r);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yh,t,Kh)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ei.crossVectors(n,ln),ei.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ei.crossVectors(n,ln)),ei.normalize(),er.crossVectors(ln,ei),s[0]=ei.x,s[4]=er.x,s[8]=ln.x,s[1]=ei.y,s[5]=er.y,s[9]=ln.y,s[2]=ei.z,s[6]=er.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],w=n[7],M=n[11],z=n[15],R=s[0],A=s[4],D=s[8],y=s[12],_=s[1],C=s[5],q=s[9],V=s[13],j=s[2],et=s[6],J=s[10],st=s[14],Z=s[3],mt=s[7],_t=s[11],St=s[15];return r[0]=o*R+a*_+l*j+c*Z,r[4]=o*A+a*C+l*et+c*mt,r[8]=o*D+a*q+l*J+c*_t,r[12]=o*y+a*V+l*st+c*St,r[1]=h*R+u*_+f*j+p*Z,r[5]=h*A+u*C+f*et+p*mt,r[9]=h*D+u*q+f*J+p*_t,r[13]=h*y+u*V+f*st+p*St,r[2]=g*R+v*_+m*j+d*Z,r[6]=g*A+v*C+m*et+d*mt,r[10]=g*D+v*q+m*J+d*_t,r[14]=g*y+v*V+m*st+d*St,r[3]=E*R+w*_+M*j+z*Z,r[7]=E*A+w*C+M*et+z*mt,r[11]=E*D+w*q+M*J+z*_t,r[15]=E*y+w*V+M*st+z*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,w=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,M=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,z=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,R=e*E+n*w+s*M+r*z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*A,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*A,t[4]=w*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=M*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=z*A,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,E=l*c,w=l*h,M=l*u,z=n.x,R=n.y,A=n.z;return s[0]=(1-(v+d))*z,s[1]=(p+M)*z,s[2]=(g-w)*z,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(f+d))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+w)*A,s[9]=(m-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h;let g,v;if(a===qn)g=(o+r)*u,v=-2*u;else if(a===Pr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new P,xn=new Te,Yh=new P(0,0,0),Kh=new P(1,1,1),ei=new P,er=new P,ln=new P,Vo=new Te,Wo=new Ws;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $h=0;const Xo=new P,Wi=new Ws,Bn=new Te,nr=new P,ws=new P,Zh=new P,jh=new Ws,qo=new P(1,0,0),Yo=new P(0,1,0),Ko=new P(0,0,1),$o={type:"added"},Jh={type:"removed"},Xi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Ve extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new P,e=new Dn,n=new Ws,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new zt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(ws,nr,this.up):Bn.lookAt(nr,ws,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new P,kn=new P,jr=new P,Gn=new P,qi=new P,Yi=new P,Zo=new P,Jr=new P,Qr=new P,ta=new P,ea=new me,na=new me,ia=new me;class Mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),kn.subVectors(n,e),jr.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(kn),l=vn.dot(jr),c=kn.dot(kn),h=kn.dot(jr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),kn.subVectors(t,e),vn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,n),Yi.subVectors(r,n),Jr.subVectors(t,n);const l=qi.dot(Jr),c=Yi.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,s);const h=qi.dot(Qr),u=Yi.dot(Qr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);ta.subVectors(t,r);const p=qi.dot(ta),g=Yi.dot(ta);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zo.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Zo,a);const d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ir={h:0,s:0,l:0};function sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=_o(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Qt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Je(Xe.r*255,0,255))*65536+Math.round(Je(Xe.g*255,0,255))*256+Math.round(Je(Xe.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=sn){Qt.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ir);const n=Us(ni.h,ir.h,e),s=Us(ni.s,ir.s,e),r=Us(ni.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Jt;Jt.NAMES=dc;let Qh=0;class Xs extends ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=fs(),this.name="",this.blending=es,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fe extends Xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new P,sr=new Zt;class Ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}}class fc extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pc extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tu=0;const fn=new Te,ra=new Ve,Ki=new P,cn=new Ii,Ts=new Ii,ke=new P;class wn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lc(t)?pc:fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,Ts.min),cn.expandByPoint(ke),ke.addVectors(cn.max,Ts.max),cn.expandByPoint(ke)):(cn.expandByPoint(Ts.min),cn.expandByPoint(Ts.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),ke.add(Ki)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,f=new Zt,p=new Zt,g=new Zt,v=new P,m=new P;function d(D,y,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[D].add(v),a[y].add(v),a[_].add(v),l[D].add(m),l[y].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,y=E.length;D<y;++D){const _=E[D],C=_.start,q=_.count;for(let V=C,j=C+q;V<j;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const w=new P,M=new P,z=new P,R=new P;function A(D){z.fromBufferAttribute(s,D),R.copy(z);const y=a[D];w.copy(y),w.sub(z.multiplyScalar(z.dot(y))).normalize(),M.crossVectors(R,y);const C=M.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,C)}for(let D=0,y=E.length;D<y;++D){const _=E[D],C=_.start,q=_.count;for(let V=C,j=C+q;V<j;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new Te,vi=new qh,rr=new xo,Jo=new P,ar=new P,or=new P,lr=new P,aa=new P,cr=new P,Qo=new P,hr=new P;class X extends Ve{constructor(t=new wn,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(aa.fromBufferAttribute(u,t),o?cr.addScaledVector(aa,h):cr.addScaledVector(aa.sub(e),h))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(rr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(rr,Jo)===null||vi.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(jo.copy(r).invert(),vi.copy(t.ray).applyMatrix4(jo),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,z=w;M<z;M+=3){const R=a.getX(M),A=a.getX(M+1),D=a.getX(M+2);s=ur(this,d,t,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=ur(this,o,t,n,c,h,u,E,w,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,z=w;M<z;M+=3){const R=M,A=M+1,D=M+2;s=ur(this,d,t,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=m,w=m+1,M=m+2;s=ur(this,o,t,n,c,h,u,E,w,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function eu(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;hr.copy(a),hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);const h=eu(i,t,e,n,ar,or,lr,Qo);if(h){const u=new P;Mn.getBarycoord(Qo,ar,or,lr,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,a,l,c,u,new Zt)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,u,new Zt)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Mn.getNormal(ar,or,lr,f.normal),h.face=f,h.barycoord=u}return h}class gt extends wn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(v,m,d,E,w,M,z,R,A,D,y){const _=M/A,C=z/D,q=M/2,V=z/2,j=R/2,et=A+1,J=D+1;let st=0,Z=0;const mt=new P;for(let _t=0;_t<J;_t++){const St=_t*C-V;for(let Ht=0;Ht<et;Ht++){const se=Ht*_-q;mt[v]=se*E,mt[m]=St*w,mt[d]=j,c.push(mt.x,mt.y,mt.z),mt[v]=0,mt[m]=0,mt[d]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Ht/A),u.push(1-_t/D),st+=1}}for(let _t=0;_t<D;_t++)for(let St=0;St<A;St++){const Ht=f+St+et*_t,se=f+St+et*(_t+1),tt=f+(St+1)+et*(_t+1),at=f+(St+1)+et*_t;l.push(Ht,se,at),l.push(se,tt,at),Z+=6}a.addGroup(p,Z,y),p+=Z,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function nu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const iu={clone:cs,merge:je};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gc extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,tl=new Zt,el=new Zt;class un extends gc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Zi=1;class au extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un($i,Zi,t,e);s.layers=this.layers,this.add(s);const r=new un($i,Zi,t,e);r.layers=this.layers,this.add(r);const o=new un($i,Zi,t,e);o.layers=this.layers,this.add(o);const a=new un($i,Zi,t,e);a.layers=this.layers,this.add(a);const l=new un($i,Zi,t,e);l.layers=this.layers,this.add(l);const c=new un($i,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _c extends Qe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _c(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:li});r.uniforms.tEquirect.value=e;const o=new X(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Cn),new au(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const oa=new P,lu=new P,cu=new zt;class wi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oa.subVectors(n,e).cross(lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cu.getNormalMatrix(t),s=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new xo,dr=new P;class vo{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],w=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-d).normalize(),n[1].setComponents(l+r,f+c,m+p,M+d).normalize(),n[2].setComponents(l+o,f+h,m+g,M+E).normalize(),n[3].setComponents(l-o,f-h,m-g,M-E).normalize(),n[4].setComponents(l-a,f-u,m-v,M-w).normalize(),e===qn)n[5].setComponents(l+a,f+u,m+v,M+w).normalize();else if(e===Pr)n[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hu(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class hn extends wn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let w=0;w<c;w++){const M=w*u-r;g.push(M,-E,0),v.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const w=E+c*d,M=E+c*(d+1),z=E+1+c*(d+1),R=E+1+c*d;p.push(w,M,R),p.push(M,z,R)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
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
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
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
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,hd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,af=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vf=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Mf=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Af=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Rf=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cf=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Pf=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lf=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Df=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,If=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Uf=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Ff=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Of=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,zf=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,kf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Hf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,kt={alphahash_fragment:uu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:_u,aomap_pars_fragment:xu,batching_pars_vertex:vu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:yu,bsdfs:Eu,iridescence_fragment:wu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Iu,common:Uu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:zu,emissivemap_fragment:Bu,emissivemap_pars_fragment:ku,colorspace_fragment:Gu,colorspace_pars_fragment:Hu,envmap_fragment:Vu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:id,envmap_vertex:Yu,fog_vertex:Ku,fog_pars_vertex:$u,fog_fragment:Zu,fog_pars_fragment:ju,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:td,lights_lambert_pars_fragment:ed,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:xd,map_particle_fragment:vd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Ed,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:bd,morphtarget_vertex:Ad,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:zd,packing:Bd,premultiplied_alpha_fragment:kd,project_vertex:Gd,dithering_fragment:Hd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:Kd,shadowmask_pars_fragment:$d,skinbase_vertex:Zd,skinning_pars_vertex:jd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:tf,specularmap_pars_fragment:ef,tonemapping_fragment:nf,tonemapping_pars_fragment:sf,transmission_fragment:rf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:df,backgroundCube_vert:ff,backgroundCube_frag:pf,cube_vert:mf,cube_frag:gf,depth_vert:_f,depth_frag:xf,distanceRGBA_vert:vf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:yf,linedashed_vert:Ef,linedashed_frag:wf,meshbasic_vert:Tf,meshbasic_frag:bf,meshlambert_vert:Af,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Uf,meshphysical_vert:Nf,meshphysical_frag:Ff,meshtoon_vert:Of,meshtoon_frag:zf,points_vert:Bf,points_frag:kf,shadow_vert:Gf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:Wf},ft={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},An={basic:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:je([ft.points,ft.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:je([ft.common,ft.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:je([ft.sprite,ft.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:je([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:je([ft.lights,ft.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};An.physical={uniforms:je([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const fr={r:0,b:0,g:0},Si=new Dn,Xf=new Te;function qf(i,t,e,n,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function v(E){let w=!1;const M=g(E);M===null?d(a,l):M&&M.isColor&&(d(M,1),w=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===Fr)?(h===void 0&&(h=new X(new gt(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:cs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(w.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Si)),h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==de,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new X(new hn(2,2),new fi({name:"BackgroundMaterial",uniforms:cs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,w){E.getRGB(fr,mc(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:v,addToRenderList:m}}function Yf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,C,q,V,j){let et=!1;const J=u(V,q,C);r!==J&&(r=J,c(r.object)),et=p(_,V,q,j),et&&g(_,V,q,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,M(_,C,q,V),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,C,q){const V=q.wireframe===!0;let j=n[_.id];j===void 0&&(j={},n[_.id]=j);let et=j[C.id];et===void 0&&(et={},j[C.id]=et);let J=et[V];return J===void 0&&(J=f(l()),et[V]=J),J}function f(_){const C=[],q=[],V=[];for(let j=0;j<e;j++)C[j]=0,q[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:q,attributeDivisors:V,object:_,attributes:{},index:null}}function p(_,C,q,V){const j=r.attributes,et=C.attributes;let J=0;const st=q.getAttributes();for(const Z in st)if(st[Z].location>=0){const _t=j[Z];let St=et[Z];if(St===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),_t===void 0||_t.attribute!==St||St&&_t.data!==St.data)return!0;J++}return r.attributesNum!==J||r.index!==V}function g(_,C,q,V){const j={},et=C.attributes;let J=0;const st=q.getAttributes();for(const Z in st)if(st[Z].location>=0){let _t=et[Z];_t===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor));const St={};St.attribute=_t,_t&&_t.data&&(St.data=_t.data),j[Z]=St,J++}r.attributes=j,r.attributesNum=J,r.index=V}function v(){const _=r.newAttributes;for(let C=0,q=_.length;C<q;C++)_[C]=0}function m(_){d(_,0)}function d(_,C){const q=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;q[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),j[_]!==C&&(i.vertexAttribDivisor(_,C),j[_]=C)}function E(){const _=r.newAttributes,C=r.enabledAttributes;for(let q=0,V=C.length;q<V;q++)C[q]!==_[q]&&(i.disableVertexAttribArray(q),C[q]=0)}function w(_,C,q,V,j,et,J){J===!0?i.vertexAttribIPointer(_,C,q,j,et):i.vertexAttribPointer(_,C,q,V,j,et)}function M(_,C,q,V){v();const j=V.attributes,et=q.getAttributes(),J=C.defaultAttributeValues;for(const st in et){const Z=et[st];if(Z.location>=0){let mt=j[st];if(mt===void 0&&(st==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),st==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),mt!==void 0){const _t=mt.normalized,St=mt.itemSize,Ht=t.get(mt);if(Ht===void 0)continue;const se=Ht.buffer,tt=Ht.type,at=Ht.bytesPerElement,yt=tt===i.INT||tt===i.UNSIGNED_INT||mt.gpuType===ho;if(mt.isInterleavedBufferAttribute){const pt=mt.data,Pt=pt.stride,Dt=mt.offset;if(pt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Z.locationSize;Vt++)d(Z.location+Vt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Vt=0;Vt<Z.locationSize;Vt++)m(Z.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Vt=0;Vt<Z.locationSize;Vt++)w(Z.location+Vt,St/Z.locationSize,tt,_t,Pt*at,(Dt+St/Z.locationSize*Vt)*at,yt)}else{if(mt.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)d(Z.location+pt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let pt=0;pt<Z.locationSize;pt++)m(Z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let pt=0;pt<Z.locationSize;pt++)w(Z.location+pt,St/Z.locationSize,tt,_t,St*at,St/Z.locationSize*pt*at,yt)}}else if(J!==void 0){const _t=J[st];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Z.location,_t);break;case 3:i.vertexAttrib3fv(Z.location,_t);break;case 4:i.vertexAttrib4fv(Z.location,_t);break;default:i.vertexAttrib1fv(Z.location,_t)}}}}E()}function z(){D();for(const _ in n){const C=n[_];for(const q in C){const V=C[q];for(const j in V)h(V[j].object),delete V[j];delete C[q]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const q in C){const V=C[q];for(const j in V)h(V[j].object),delete V[j];delete C[q]}delete n[_.id]}function A(_){for(const C in n){const q=n[C];if(q[_.id]===void 0)continue;const V=q[_.id];for(const j in V)h(V[j].object),delete V[j];delete q[_.id]}}function D(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:z,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Kf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:z,maxSamples:R}}function Zf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let M=d.clippingState||null;l.value=M,M=h(g,f,w,p);for(let z=0;z!==w;++z)M[z]=e[z];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,M=p;w!==v;++w,M+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function jf(i){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=rs:a===Pa&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ca||a===Pa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ou(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class vc extends gc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,nl=[.125,.215,.35,.446,.526,.582],Ai=20,la=new vc,il=new Jt;let ca=null,ha=0,ua=0,da=!1;const Ti=(1+Math.sqrt(5))/2,ji=1/Ti,sl=[new P(-Ti,ji,0),new P(Ti,ji,0),new P(-ji,0,Ti),new P(ji,0,Ti),new P(0,Ti,-ji),new P(0,Ti,ji),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=da,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Vs,format:Sn,colorSpace:us,depthBuffer:!1},s=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=Qf(r,t,e)}return s}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(il),h.toneMapping=ci,h.autoClear=!1;const p=new Fe({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new X(new gt,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(il),v=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const w=this._cubeSize;pr(s,E*w,d>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sl[(s-r-1)%sl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const d=[];let E=0;for(let A=0;A<Ai;++A){const D=A/v,y=Math.exp(-D*D/2);d.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const M=this._sizeLods[s],z=3*M*(s>w-Qi?s-w+Qi:0),R=4*(this._cubeSize-M);pr(e,z,R,3*M,2*M),l.setRenderTarget(e),l.render(u,la)}}function Jf(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=nl[o-i+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),w=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,y=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(y,v*g*R),w.set(f,m*g*R);const _=[R,R,R,R,R,R];M.set(_,d*g*R)}const z=new wn;z.setAttribute("position",new Ln(E,v)),z.setAttribute("uv",new Ln(w,m)),z.setAttribute("faceIndex",new Ln(M,d)),t.push(z),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qf(i,t,e){const n=new Float32Array(Ai),s=new P(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ol(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ll(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function tp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ca||l===Pa,h=l===rs||l===as;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new rl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function np(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let w=0,M=E.length;w<M;w+=3){const z=E[w+0],R=E[w+1],A=E[w+2];f.push(z,R,R,A,A,z)}}else if(g!==void 0){const E=g.array;v=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){const z=w+0,R=w+1,A=w+2;f.push(z,R,R,A,A,z)}}else return;const m=new(lc(f)?pc:fc)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ip(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let _=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let z=a.attributes.position.count*M,R=1;z>t.maxTextureSize&&(R=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const A=new Float32Array(z*R*4*u),D=new hc(A,z,R,u);D.type=Xn,D.needsUpdate=!0;const y=M*4;for(let C=0;C<u;C++){const q=d[C],V=E[C],j=w[C],et=z*R*4*C;for(let J=0;J<q.count;J++){const st=J*y;g===!0&&(s.fromBufferAttribute(q,J),A[et+st+0]=s.x,A[et+st+1]=s.y,A[et+st+2]=s.z,A[et+st+3]=0),v===!0&&(s.fromBufferAttribute(V,J),A[et+st+4]=s.x,A[et+st+5]=s.y,A[et+st+6]=s.z,A[et+st+7]=0),m===!0&&(s.fromBufferAttribute(j,J),A[et+st+8]=s.x,A[et+st+9]=s.y,A[et+st+10]=s.z,A[et+st+11]=j.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new Zt(z,R)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ap(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Mc extends Qe{constructor(t,e,n,s,r,o,a,l,c,h=ns){if(h!==ns&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Li),n===void 0&&h===ls&&(n=os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sc=new Qe,cl=new Mc(1,1),yc=new hc,Ec=new Wh,wc=new _c,hl=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hl[s];if(r===void 0&&(r=new Float32Array(s),hl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),Be(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),Be(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),Be(e,n)}}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=oc,r=cl):r=Sc,e.setTexture2D(t||r,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ec,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wc,s)}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yc,s)}function bp(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Cp(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Pp(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ip(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Np(i,t){i.uniform2iv(this.addr,t)}function Fp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function Bp(i,t){i.uniform2uiv(this.addr,t)}function kp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Hp(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sc,r[o])}function Vp(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ec,r[o])}function Wp(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wc,r[o])}function Xp(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yc,r[o])}function qp(i){switch(i){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return zp;case 36294:return Bp;case 36295:return kp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bp(e.type)}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class $p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function ml(i,t){i.seq.push(t),i.map[t.id]=t}function Zp(i,t,e){const n=i.name,s=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),o=fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ml(e,c===void 0?new Yp(a,i,t):new Kp(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $p(a),ml(e,u)),e=u}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jp=37297;let Jp=0;function Qp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _l=new zt;function tm(i){Qt._getMatrix(_l,Qt.workingColorSpace,i);const t=`mat3( ${_l.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),o)}else return s}function em(i,t){const e=tm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nm(i,t){let e;switch(t){case nh:e="Linear";break;case ih:e="Reinhard";break;case sh:e="Cineon";break;case rh:e="ACESFilmic";break;case oh:e="AgX";break;case lh:e="Neutral";break;case ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new P;function im(){Qt.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function rm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function vl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(i){return i.replace(om,cm)}const lm=new Map;function cm(i,t){let e=kt[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return so(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(hm,um)}function um(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function fm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case th:t="ENVMAP_BLENDING_MIX";break;case eh:t="ENVMAP_BLENDING_ADD";break}return t}function gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _m(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dm(e),c=fm(e),h=pm(e),u=mm(e),f=gm(e),p=sm(e),g=rm(r),v=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),d.length>0&&(d+=`
`)):(m=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),d=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?kt.tonemapping_pars_fragment:"",e.toneMapping!==ci?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,em("linearToOutputTexel",e.outputColorSpace),im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=so(o),o=vl(o,e),o=Ml(o,e),a=so(a),a=vl(a,e),a=Ml(a,e),o=Sl(o),a=Sl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=E+m+o,M=E+d+a,z=gl(s,s.VERTEX_SHADER,w),R=gl(s,s.FRAGMENT_SHADER,M);s.attachShader(v,z),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(z).trim(),j=s.getShaderInfoLog(R).trim();let et=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,z,R);else{const st=xl(s,z,"vertex"),Z=xl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+st+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||j==="")&&(J=!1);J&&(C.diagnostics={runnable:et,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(z),s.deleteShader(R),D=new br(s,v),y=am(s,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,jp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=R,this}let xm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mm(t),e.set(t,n)),n}}class Mm{constructor(t){this.id=xm++,this.code=t,this.usedTimes=0}}function Sm(i,t,e,n,s,r,o){const a=new uc,l=new vm,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,_,C,q,V){const j=q.fog,et=V.geometry,J=y.isMeshStandardMaterial?q.environment:null,st=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),Z=st&&st.mapping===Fr?st.image.height:null,mt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const _t=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,St=_t!==void 0?_t.length:0;let Ht=0;et.morphAttributes.position!==void 0&&(Ht=1),et.morphAttributes.normal!==void 0&&(Ht=2),et.morphAttributes.color!==void 0&&(Ht=3);let se,tt,at,yt;if(mt){const $t=An[mt];se=$t.vertexShader,tt=$t.fragmentShader}else se=y.vertexShader,tt=y.fragmentShader,l.update(y),at=l.getVertexShaderID(y),yt=l.getFragmentShaderID(y);const pt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Dt=V.isInstancedMesh===!0,Vt=V.isBatchedMesh===!0,ge=!!y.map,Wt=!!y.matcap,ye=!!st,B=!!y.aoMap,tn=!!y.lightMap,Yt=!!y.bumpMap,Kt=!!y.normalMap,Rt=!!y.displacementMap,ue=!!y.emissiveMap,At=!!y.metalnessMap,b=!!y.roughnessMap,x=y.anisotropy>0,T=y.clearcoat>0,L=y.dispersion>0,I=y.iridescence>0,U=y.sheen>0,K=y.transmission>0,Q=x&&!!y.anisotropyMap,$=T&&!!y.clearcoatMap,xt=T&&!!y.clearcoatNormalMap,it=T&&!!y.clearcoatRoughnessMap,lt=I&&!!y.iridescenceMap,Mt=I&&!!y.iridescenceThicknessMap,vt=U&&!!y.sheenColorMap,ut=U&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,It=!!y.specularColorMap,te=!!y.specularIntensityMap,F=K&&!!y.transmissionMap,dt=K&&!!y.thicknessMap,G=!!y.gradientMap,Y=!!y.alphaMap,rt=y.alphaTest>0,ot=!!y.alphaHash,Lt=!!y.extensions;let ne=ci;y.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ee={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:tt,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Vt,batchingColor:Vt&&V._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&V.instanceColor!==null,instancingMorph:Dt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:us,alphaToCoverage:!!y.alphaToCoverage,map:ge,matcap:Wt,envMap:ye,envMapMode:ye&&st.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:tn,bumpMap:Yt,normalMap:Kt,displacementMap:f&&Rt,emissiveMap:ue,normalMapObjectSpace:Kt&&y.normalMapType===dh,normalMapTangentSpace:Kt&&y.normalMapType===ac,metalnessMap:At,roughnessMap:b,anisotropy:x,anisotropyMap:Q,clearcoat:T,clearcoatMap:$,clearcoatNormalMap:xt,clearcoatRoughnessMap:it,dispersion:L,iridescence:I,iridescenceMap:lt,iridescenceThicknessMap:Mt,sheen:U,sheenColorMap:vt,sheenRoughnessMap:ut,specularMap:Ut,specularColorMap:It,specularIntensityMap:te,transmission:K,transmissionMap:F,thicknessMap:dt,gradientMap:G,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:rt,alphaHash:ot,combine:y.combine,mapUv:ge&&v(y.map.channel),aoMapUv:B&&v(y.aoMap.channel),lightMapUv:tn&&v(y.lightMap.channel),bumpMapUv:Yt&&v(y.bumpMap.channel),normalMapUv:Kt&&v(y.normalMap.channel),displacementMapUv:Rt&&v(y.displacementMap.channel),emissiveMapUv:ue&&v(y.emissiveMap.channel),metalnessMapUv:At&&v(y.metalnessMap.channel),roughnessMapUv:b&&v(y.roughnessMap.channel),anisotropyMapUv:Q&&v(y.anisotropyMap.channel),clearcoatMapUv:$&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(y.sheenRoughnessMap.channel),specularMapUv:Ut&&v(y.specularMap.channel),specularColorMapUv:It&&v(y.specularColorMap.channel),specularIntensityMapUv:te&&v(y.specularIntensityMap.channel),transmissionMapUv:F&&v(y.transmissionMap.channel),thicknessMapUv:dt&&v(y.thicknessMap.channel),alphaMapUv:Y&&v(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Kt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!et.attributes.uv&&(ge||Y),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:V.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ht,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function d(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)_.push(C),_.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(_,y),w(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function E(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function w(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const _=g[y.type];let C;if(_){const q=An[_];C=iu.clone(q.uniforms)}else C=y.uniforms;return C}function z(y,_){let C;for(let q=0,V=h.length;q<V;q++){const j=h[q];if(j.cacheKey===_){C=j,++C.usedTimes;break}}return C===void 0&&(C=new _m(i,_,y,r),h.push(C)),C}function R(y){if(--y.usedTimes===0){const _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:z,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:D}}function ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function El(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function a(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Em),n.length>1&&n.sort(f||El),s.length>1&&s.sort(f||El)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new wl,i.set(n,[o])):s>=r.length?(o=new wl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Jt};break;case"SpotLight":e={position:new P,direction:new P,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Am=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){const t=new Tm,e=bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Te,o=new Te;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,w=0,M=0,z=0,R=0,A=0;c.sort(Rm);for(let y=0,_=c.length;y<_;y++){const C=c[y],q=C.color,V=C.intensity,j=C.distance,et=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=q.r*V,u+=q.g*V,f+=q.b*V;else if(C.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(C.sh.coefficients[J],V);A++}else if(C.isDirectionalLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const st=C.shadow,Z=e.get(C);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=J,p++}else if(C.isSpotLight){const J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(q).multiplyScalar(V),J.distance=j,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,n.spot[v]=J;const st=C.shadow;if(C.map&&(n.spotLightMap[z]=C.map,z++,st.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=st.matrix,C.castShadow){const Z=e.get(C);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=et,M++}v++}else if(C.isRectAreaLight){const J=t.get(C);J.color.copy(q).multiplyScalar(V),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=J,m++}else if(C.isPointLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){const st=C.shadow,Z=e.get(C);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,Z.shadowCameraNear=st.camera.near,Z.shadowCameraFar=st.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=J,g++}else if(C.isHemisphereLight){const J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(V),J.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==z||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+z-R,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=z,D.numLightProbes=A,n.version=Am++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const w=c[d];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(w.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Tl(i){const t=new Cm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tl(i),t.set(s,[a])):r>=o.length?(a=new Tl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lm extends Xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Nm(i,t,e){let n=new vo;const s=new Zt,r=new Zt,o=new me,a=new Lm({depthPacking:uh}),l=new Dm,c={},h=e.maxTextureSize,u={[ui]:Ke,[Ke]:ui,[an]:an},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new X(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let d=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),q=i.state;q.setBlending(li),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=d!==Vn&&this.type===Vn,j=d===Vn&&this.type!==Vn;for(let et=0,J=R.length;et<J;et++){const st=R[et],Z=st.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const mt=Z.getFrameExtents();if(s.multiply(mt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,Z.mapSize.y=r.y)),Z.map===null||V===!0||j===!0){const St=this.type!==Vn?{minFilter:mn,magFilter:mn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Di(s.x,s.y,St),Z.map.texture.name=st.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const _t=Z.getViewportCount();for(let St=0;St<_t;St++){const Ht=Z.getViewport(St);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),q.viewport(o),Z.updateMatrices(st,St),n=Z.getFrustum(),M(A,D,Z.camera,st,this.type)}Z.isPointLightShadow!==!0&&this.type===Vn&&E(Z,D),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,_,C)};function E(R,A){const D=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Di(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,p,v,null)}function w(R,A,D,y){let _=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)_=C;else if(_=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=_.uuid,V=A.uuid;let j=c[q];j===void 0&&(j={},c[q]=j);let et=j[V];et===void 0&&(et=_.clone(),j[V]=et,A.addEventListener("dispose",z)),_=et}if(_.visible=A.visible,_.wireframe=A.wireframe,y===Vn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const q=i.properties.get(_);q.light=D}return _}function M(R,A,D,y,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const V=t.update(R),j=R.material;if(Array.isArray(j)){const et=V.groups;for(let J=0,st=et.length;J<st;J++){const Z=et[J],mt=j[Z.materialIndex];if(mt&&mt.visible){const _t=w(R,mt,y,_);R.onBeforeShadow(i,R,A,D,V,_t,Z),i.renderBufferDirect(D,null,V,_t,R,Z),R.onAfterShadow(i,R,A,D,V,_t,Z)}}}else if(j.visible){const et=w(R,j,y,_);R.onBeforeShadow(i,R,A,D,V,et,null),i.renderBufferDirect(D,null,V,et,R,null),R.onAfterShadow(i,R,A,D,V,et,null)}}const q=R.children;for(let V=0,j=q.length;V<j;V++)M(q[V],A,D,y,_)}function z(R){R.target.removeEventListener("dispose",z);for(const D in c){const y=c[D],_=R.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const Fm={[ya]:Ea,[wa]:Aa,[Ta]:Ra,[ss]:ba,[Ea]:ya,[Aa]:wa,[Ra]:Ta,[ba]:ss};function Om(i,t){function e(){let F=!1;const dt=new me;let G=null;const Y=new me(0,0,0,0);return{setMask:function(rt){G!==rt&&!F&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){F=rt},setClear:function(rt,ot,Lt,ne,Ee){Ee===!0&&(rt*=ne,ot*=ne,Lt*=ne),dt.set(rt,ot,Lt,ne),Y.equals(dt)===!1&&(i.clearColor(rt,ot,Lt,ne),Y.copy(dt))},reset:function(){F=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,G=null,Y=null,rt=null;return{setReversed:function(ot){if(dt!==ot){const Lt=t.get("EXT_clip_control");dt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ne=rt;rt=null,this.setClear(ne)}dt=ot},getReversed:function(){return dt},setTest:function(ot){ot?pt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ot){G!==ot&&!F&&(i.depthMask(ot),G=ot)},setFunc:function(ot){if(dt&&(ot=Fm[ot]),Y!==ot){switch(ot){case ya:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ot}},setLocked:function(ot){F=ot},setClear:function(ot){rt!==ot&&(dt&&(ot=1-ot),i.clearDepth(ot),rt=ot)},reset:function(){F=!1,G=null,Y=null,rt=null,dt=!1}}}function s(){let F=!1,dt=null,G=null,Y=null,rt=null,ot=null,Lt=null,ne=null,Ee=null;return{setTest:function($t){F||($t?pt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function($t){dt!==$t&&!F&&(i.stencilMask($t),dt=$t)},setFunc:function($t,De,$e){(G!==$t||Y!==De||rt!==$e)&&(i.stencilFunc($t,De,$e),G=$t,Y=De,rt=$e)},setOp:function($t,De,$e){(ot!==$t||Lt!==De||ne!==$e)&&(i.stencilOp($t,De,$e),ot=$t,Lt=De,ne=$e)},setLocked:function($t){F=$t},setClear:function($t){Ee!==$t&&(i.clearStencil($t),Ee=$t)},reset:function(){F=!1,dt=null,G=null,Y=null,rt=null,ot=null,Lt=null,ne=null,Ee=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,w=null,M=null,z=null,R=null,A=new Jt(0,0,0),D=0,y=!1,_=null,C=null,q=null,V=null,j=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,st=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=st>=2);let mt=null,_t={};const St=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),se=new me().fromArray(St),tt=new me().fromArray(Ht);function at(F,dt,G,Y){const rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(F,ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<G;Lt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(dt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}const yt={};yt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(ss),Yt(!1),Kt(Co),pt(i.CULL_FACE),B(li);function pt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Dt(F,dt){return u[F]!==dt?(i.bindFramebuffer(F,dt),u[F]=dt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Vt(F,dt){let G=p,Y=!1;if(F){G=f.get(dt),G===void 0&&(G=[],f.set(dt,G));const rt=F.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=rt.length;ot<Lt;ot++)G[ot]=i.COLOR_ATTACHMENT0+ot;G.length=rt.length,Y=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Y=!0);Y&&i.drawBuffers(G)}function ge(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Wt={[bi]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};Wt[Bc]=i.MIN,Wt[kc]=i.MAX;const ye={[Gc]:i.ZERO,[Hc]:i.ONE,[Vc]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,dt,G,Y,rt,ot,Lt,ne,Ee,$t){if(F===li){v===!0&&(Pt(i.BLEND),v=!1);return}if(v===!1&&(pt(i.BLEND),v=!0),F!==Fc){if(F!==m||$t!==y){if((d!==bi||M!==bi)&&(i.blendEquation(i.FUNC_ADD),d=bi,M=bi),$t)switch(F){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,w=null,z=null,R=null,A.set(0,0,0),D=0,m=F,y=$t}return}rt=rt||dt,ot=ot||G,Lt=Lt||Y,(dt!==d||rt!==M)&&(i.blendEquationSeparate(Wt[dt],Wt[rt]),d=dt,M=rt),(G!==E||Y!==w||ot!==z||Lt!==R)&&(i.blendFuncSeparate(ye[G],ye[Y],ye[ot],ye[Lt]),E=G,w=Y,z=ot,R=Lt),(ne.equals(A)===!1||Ee!==D)&&(i.blendColor(ne.r,ne.g,ne.b,Ee),A.copy(ne),D=Ee),m=F,y=!1}function tn(F,dt){F.side===an?Pt(i.CULL_FACE):pt(i.CULL_FACE);let G=F.side===Ke;dt&&(G=!G),Yt(G),F.blending===es&&F.transparent===!1?B(li):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Y=F.stencilWrite;a.setTest(Y),Y&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(F){_!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),_=F)}function Kt(F){F!==Uc?(pt(i.CULL_FACE),F!==C&&(F===Co?i.cullFace(i.BACK):F===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),C=F}function Rt(F){F!==q&&(J&&i.lineWidth(F),q=F)}function ue(F,dt,G){F?(pt(i.POLYGON_OFFSET_FILL),(V!==dt||j!==G)&&(i.polygonOffset(dt,G),V=dt,j=G)):Pt(i.POLYGON_OFFSET_FILL)}function At(F){F?pt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function b(F){F===void 0&&(F=i.TEXTURE0+et-1),mt!==F&&(i.activeTexture(F),mt=F)}function x(F,dt,G){G===void 0&&(mt===null?G=i.TEXTURE0+et-1:G=mt);let Y=_t[G];Y===void 0&&(Y={type:void 0,texture:void 0},_t[G]=Y),(Y.type!==F||Y.texture!==dt)&&(mt!==G&&(i.activeTexture(G),mt=G),i.bindTexture(F,dt||yt[F]),Y.type=F,Y.texture=dt)}function T(){const F=_t[mt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(F){se.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function ut(F){tt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function Ut(F,dt){let G=c.get(dt);G===void 0&&(G=new WeakMap,c.set(dt,G));let Y=G.get(F);Y===void 0&&(Y=i.getUniformBlockIndex(dt,F.name),G.set(F,Y))}function It(F,dt){const Y=c.get(dt).get(F);l.get(dt)!==Y&&(i.uniformBlockBinding(dt,Y,F.__bindingPointIndex),l.set(dt,Y))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,_t={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,w=null,M=null,z=null,R=null,A=new Jt(0,0,0),D=0,y=!1,_=null,C=null,q=null,V=null,j=null,se.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Pt,bindFramebuffer:Dt,drawBuffers:Vt,useProgram:ge,setBlending:B,setMaterial:tn,setFlipSided:Yt,setCullFace:Kt,setLineWidth:Rt,setPolygonOffset:ue,setScissorTest:At,activeTexture:b,bindTexture:x,unbindTexture:T,compressedTexImage2D:L,compressedTexImage3D:I,texImage2D:lt,texImage3D:Mt,updateUBOMapping:Ut,uniformBlockBinding:It,texStorage2D:xt,texStorage3D:it,texSubImage2D:U,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:$,scissor:vt,viewport:ut,reset:te}}function bl(i,t,e,n){const s=zm(n);switch(e){case Ql:return i*t;case ec:return i*t;case nc:return i*t*2;case ic:return i*t/s.components*s.byteLength;case po:return i*t/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case mo:return i*t*2/s.components*s.byteLength;case tc:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case go:return i*t*4/s.components*s.byteLength;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case Kn:case Zl:return{byteLength:1,components:1};case Bs:case jl:case Vs:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case Li:case ho:case Xn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Lr("canvas")}function v(b,x,T){let L=1;const I=At(b);if((I.width>T||I.height>T)&&(L=T/Math.max(I.width,I.height)),L<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const U=Math.floor(L*I.width),K=Math.floor(L*I.height);u===void 0&&(u=g(U,K));const Q=x?g(U,K):u;return Q.width=U,Q.height=K,Q.getContext("2d").drawImage(b,0,0,U,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+U+"x"+K+")."),Q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,x,T,L,I=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=x;if(x===i.RED&&(T===i.FLOAT&&(U=i.R32F),T===i.HALF_FLOAT&&(U=i.R16F),T===i.UNSIGNED_BYTE&&(U=i.R8)),x===i.RED_INTEGER&&(T===i.UNSIGNED_BYTE&&(U=i.R8UI),T===i.UNSIGNED_SHORT&&(U=i.R16UI),T===i.UNSIGNED_INT&&(U=i.R32UI),T===i.BYTE&&(U=i.R8I),T===i.SHORT&&(U=i.R16I),T===i.INT&&(U=i.R32I)),x===i.RG&&(T===i.FLOAT&&(U=i.RG32F),T===i.HALF_FLOAT&&(U=i.RG16F),T===i.UNSIGNED_BYTE&&(U=i.RG8)),x===i.RG_INTEGER&&(T===i.UNSIGNED_BYTE&&(U=i.RG8UI),T===i.UNSIGNED_SHORT&&(U=i.RG16UI),T===i.UNSIGNED_INT&&(U=i.RG32UI),T===i.BYTE&&(U=i.RG8I),T===i.SHORT&&(U=i.RG16I),T===i.INT&&(U=i.RG32I)),x===i.RGB_INTEGER&&(T===i.UNSIGNED_BYTE&&(U=i.RGB8UI),T===i.UNSIGNED_SHORT&&(U=i.RGB16UI),T===i.UNSIGNED_INT&&(U=i.RGB32UI),T===i.BYTE&&(U=i.RGB8I),T===i.SHORT&&(U=i.RGB16I),T===i.INT&&(U=i.RGB32I)),x===i.RGBA_INTEGER&&(T===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),T===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),T===i.UNSIGNED_INT&&(U=i.RGBA32UI),T===i.BYTE&&(U=i.RGBA8I),T===i.SHORT&&(U=i.RGBA16I),T===i.INT&&(U=i.RGBA32I)),x===i.RGB&&T===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),x===i.RGBA){const K=I?Or:Qt.getTransfer(L);T===i.FLOAT&&(U=i.RGBA32F),T===i.HALF_FLOAT&&(U=i.RGBA16F),T===i.UNSIGNED_BYTE&&(U=K===de?i.SRGB8_ALPHA8:i.RGBA8),T===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),T===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function M(b,x){let T;return b?x===null||x===Li||x===os?T=i.DEPTH24_STENCIL8:x===Xn?T=i.DEPTH32F_STENCIL8:x===Bs&&(T=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===os?T=i.DEPTH_COMPONENT24:x===Xn?T=i.DEPTH_COMPONENT32F:x===Bs&&(T=i.DEPTH_COMPONENT16),T}function z(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==mn&&b.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&h.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),_(x)}function D(b){const x=n.get(b);if(x.__webglInit===void 0)return;const T=b.source,L=f.get(T);if(L){const I=L[x.__cacheKey];I.usedTimes--,I.usedTimes===0&&y(b),Object.keys(L).length===0&&f.delete(T)}n.remove(b)}function y(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const T=b.source,L=f.get(T);delete L[x.__cacheKey],o.memory.textures--}function _(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(x.__webglFramebuffer[L]))for(let I=0;I<x.__webglFramebuffer[L].length;I++)i.deleteFramebuffer(x.__webglFramebuffer[L][I]);else i.deleteFramebuffer(x.__webglFramebuffer[L]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[L])}else{if(Array.isArray(x.__webglFramebuffer))for(let L=0;L<x.__webglFramebuffer.length;L++)i.deleteFramebuffer(x.__webglFramebuffer[L]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let L=0;L<x.__webglColorRenderbuffer.length;L++)x.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[L]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const T=b.textures;for(let L=0,I=T.length;L<I;L++){const U=n.get(T[L]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(T[L])}n.remove(b)}let C=0;function q(){C=0}function V(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function j(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function et(b,x){const T=n.get(b);if(b.isVideoTexture&&Rt(b),b.isRenderTargetTexture===!1&&b.version>0&&T.__version!==b.version){const L=b.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(T,b,x);return}}e.bindTexture(i.TEXTURE_2D,T.__webglTexture,i.TEXTURE0+x)}function J(b,x){const T=n.get(b);if(b.version>0&&T.__version!==b.version){tt(T,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,T.__webglTexture,i.TEXTURE0+x)}function st(b,x){const T=n.get(b);if(b.version>0&&T.__version!==b.version){tt(T,b,x);return}e.bindTexture(i.TEXTURE_3D,T.__webglTexture,i.TEXTURE0+x)}function Z(b,x){const T=n.get(b);if(b.version>0&&T.__version!==b.version){at(T,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+x)}const mt={[zs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},_t={[mn]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},St={[fh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[oc]:i.LEQUAL,[mh]:i.EQUAL,[xh]:i.GEQUAL,[gh]:i.GREATER,[_h]:i.NOTEQUAL};function Ht(b,x){if(x.type===Xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Gr||x.magFilter===$s||x.magFilter===Pi||x.minFilter===Cn||x.minFilter===Gr||x.minFilter===$s||x.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,mt[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,mt[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,mt[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==$s&&x.minFilter!==Pi||x.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const T=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(b,x){let T=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const L=x.source;let I=f.get(L);I===void 0&&(I={},f.set(L,I));const U=j(x);if(U!==b.__cacheKey){I[U]===void 0&&(I[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,T=!0),I[U].usedTimes++;const K=I[b.__cacheKey];K!==void 0&&(I[b.__cacheKey].usedTimes--,K.usedTimes===0&&y(x)),b.__cacheKey=U,b.__webglTexture=I[U].texture}return T}function tt(b,x,T){let L=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(L=i.TEXTURE_3D);const I=se(b,x),U=x.source;e.bindTexture(L,b.__webglTexture,i.TEXTURE0+T);const K=n.get(U);if(U.version!==K.__version||I===!0){e.activeTexture(i.TEXTURE0+T);const Q=Qt.getPrimaries(Qt.workingColorSpace),$=x.colorSpace===si?null:Qt.getPrimaries(x.colorSpace),xt=x.colorSpace===si||Q===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let it=v(x.image,!1,s.maxTextureSize);it=ue(x,it);const lt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type);let vt=w(x.internalFormat,lt,Mt,x.colorSpace,x.isVideoTexture);Ht(L,x);let ut;const Ut=x.mipmaps,It=x.isVideoTexture!==!0,te=K.__version===void 0||I===!0,F=U.dataReady,dt=z(x,it);if(x.isDepthTexture)vt=M(x.format===ls,x.type),te&&(It?e.texStorage2D(i.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,vt,it.width,it.height,0,lt,Mt,null));else if(x.isDataTexture)if(Ut.length>0){It&&te&&e.texStorage2D(i.TEXTURE_2D,dt,vt,Ut[0].width,Ut[0].height);for(let G=0,Y=Ut.length;G<Y;G++)ut=Ut[G],It?F&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,lt,Mt,ut.data):e.texImage2D(i.TEXTURE_2D,G,vt,ut.width,ut.height,0,lt,Mt,ut.data);x.generateMipmaps=!1}else It?(te&&e.texStorage2D(i.TEXTURE_2D,dt,vt,it.width,it.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,lt,Mt,it.data)):e.texImage2D(i.TEXTURE_2D,0,vt,it.width,it.height,0,lt,Mt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,vt,Ut[0].width,Ut[0].height,it.depth);for(let G=0,Y=Ut.length;G<Y;G++)if(ut=Ut[G],x.format!==Sn)if(lt!==null)if(It){if(F)if(x.layerUpdates.size>0){const rt=bl(ut.width,ut.height,x.format,x.type);for(const ot of x.layerUpdates){const Lt=ut.data.subarray(ot*rt/ut.data.BYTES_PER_ELEMENT,(ot+1)*rt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ot,ut.width,ut.height,1,lt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,it.depth,lt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,vt,ut.width,ut.height,it.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,it.depth,lt,Mt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,vt,ut.width,ut.height,it.depth,0,lt,Mt,ut.data)}else{It&&te&&e.texStorage2D(i.TEXTURE_2D,dt,vt,Ut[0].width,Ut[0].height);for(let G=0,Y=Ut.length;G<Y;G++)ut=Ut[G],x.format!==Sn?lt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,lt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,G,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,lt,Mt,ut.data):e.texImage2D(i.TEXTURE_2D,G,vt,ut.width,ut.height,0,lt,Mt,ut.data)}else if(x.isDataArrayTexture)if(It){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,vt,it.width,it.height,it.depth),F)if(x.layerUpdates.size>0){const G=bl(it.width,it.height,x.format,x.type);for(const Y of x.layerUpdates){const rt=it.data.subarray(Y*G/it.data.BYTES_PER_ELEMENT,(Y+1)*G/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,it.width,it.height,1,lt,Mt,rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,lt,Mt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,lt,Mt,it.data);else if(x.isData3DTexture)It?(te&&e.texStorage3D(i.TEXTURE_3D,dt,vt,it.width,it.height,it.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,lt,Mt,it.data)):e.texImage3D(i.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,lt,Mt,it.data);else if(x.isFramebufferTexture){if(te)if(It)e.texStorage2D(i.TEXTURE_2D,dt,vt,it.width,it.height);else{let G=it.width,Y=it.height;for(let rt=0;rt<dt;rt++)e.texImage2D(i.TEXTURE_2D,rt,vt,G,Y,0,lt,Mt,null),G>>=1,Y>>=1}}else if(Ut.length>0){if(It&&te){const G=At(Ut[0]);e.texStorage2D(i.TEXTURE_2D,dt,vt,G.width,G.height)}for(let G=0,Y=Ut.length;G<Y;G++)ut=Ut[G],It?F&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,lt,Mt,ut):e.texImage2D(i.TEXTURE_2D,G,vt,lt,Mt,ut);x.generateMipmaps=!1}else if(It){if(te){const G=At(it);e.texStorage2D(i.TEXTURE_2D,dt,vt,G.width,G.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,Mt,it)}else e.texImage2D(i.TEXTURE_2D,0,vt,lt,Mt,it);m(x)&&d(L),K.__version=U.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function at(b,x,T){if(x.image.length!==6)return;const L=se(b,x),I=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+T);const U=n.get(I);if(I.version!==U.__version||L===!0){e.activeTexture(i.TEXTURE0+T);const K=Qt.getPrimaries(Qt.workingColorSpace),Q=x.colorSpace===si?null:Qt.getPrimaries(x.colorSpace),$=x.colorSpace===si||K===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const xt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!xt&&!it?lt[Y]=v(x.image[Y],!0,s.maxCubemapSize):lt[Y]=it?x.image[Y].image:x.image[Y],lt[Y]=ue(x,lt[Y]);const Mt=lt[0],vt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),Ut=w(x.internalFormat,vt,ut,x.colorSpace),It=x.isVideoTexture!==!0,te=U.__version===void 0||L===!0,F=I.dataReady;let dt=z(x,Mt);Ht(i.TEXTURE_CUBE_MAP,x);let G;if(xt){It&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,Mt.width,Mt.height);for(let Y=0;Y<6;Y++){G=lt[Y].mipmaps;for(let rt=0;rt<G.length;rt++){const ot=G[rt];x.format!==Sn?vt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,0,0,ot.width,ot.height,vt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,Ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,0,0,ot.width,ot.height,vt,ut,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,Ut,ot.width,ot.height,0,vt,ut,ot.data)}}}else{if(G=x.mipmaps,It&&te){G.length>0&&dt++;const Y=At(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(it){It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,vt,ut,lt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,lt[Y].width,lt[Y].height,0,vt,ut,lt[Y].data);for(let rt=0;rt<G.length;rt++){const Lt=G[rt].image[Y].image;It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,0,0,Lt.width,Lt.height,vt,ut,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,Ut,Lt.width,Lt.height,0,vt,ut,Lt.data)}}else{It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,vt,ut,lt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,vt,ut,lt[Y]);for(let rt=0;rt<G.length;rt++){const ot=G[rt];It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,0,0,vt,ut,ot.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,Ut,vt,ut,ot.image[Y])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),U.__version=I.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function yt(b,x,T,L,I,U){const K=r.convert(T.format,T.colorSpace),Q=r.convert(T.type),$=w(T.internalFormat,K,Q,T.colorSpace),xt=n.get(x),it=n.get(T);if(it.__renderTarget=x,!xt.__hasExternalTextures){const lt=Math.max(1,x.width>>U),Mt=Math.max(1,x.height>>U);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?e.texImage3D(I,U,$,lt,Mt,x.depth,0,K,Q,null):e.texImage2D(I,U,$,lt,Mt,0,K,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,I,it.__webglTexture,0,Yt(x)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,I,it.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,x,T){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const L=x.depthTexture,I=L&&L.isDepthTexture?L.type:null,U=M(x.stencilBuffer,I),K=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=Yt(x);Kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,U,x.width,x.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,U,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,U,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,b)}else{const L=x.textures;for(let I=0;I<L.length;I++){const U=L[I],K=r.convert(U.format,U.colorSpace),Q=r.convert(U.type),$=w(U.internalFormat,K,Q,U.colorSpace),xt=Yt(x);T&&Kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,$,x.width,x.height):Kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(x.depthTexture);L.__renderTarget=x,(!L.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et(x.depthTexture,0);const I=L.__webglTexture,U=Yt(x);if(x.depthTexture.format===ns)Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(x.depthTexture.format===ls)Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const x=n.get(b),T=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const L=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),L){const I=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,L.removeEventListener("dispose",I)};L.addEventListener("dispose",I),x.__depthDisposeCallback=I}x.__boundDepthTexture=L}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,b)}else if(T){x.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[L]),x.__webglDepthbuffer[L]===void 0)x.__webglDepthbuffer[L]=i.createRenderbuffer(),pt(x.__webglDepthbuffer[L],b,!1);else{const I=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,U)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pt(x.__webglDepthbuffer,b,!1);else{const L=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,I)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(b,x,T){const L=n.get(b);x!==void 0&&yt(L.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),T!==void 0&&Dt(b)}function ge(b){const x=b.texture,T=n.get(b),L=n.get(x);b.addEventListener("dispose",A);const I=b.textures,U=b.isWebGLCubeRenderTarget===!0,K=I.length>1;if(K||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=x.version,o.memory.textures++),U){T.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){T.__webglFramebuffer[Q]=[];for(let $=0;$<x.mipmaps.length;$++)T.__webglFramebuffer[Q][$]=i.createFramebuffer()}else T.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){T.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)T.__webglFramebuffer[Q]=i.createFramebuffer()}else T.__webglFramebuffer=i.createFramebuffer();if(K)for(let Q=0,$=I.length;Q<$;Q++){const xt=n.get(I[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Kt(b)===!1){T.__webglMultisampledFramebuffer=i.createFramebuffer(),T.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let Q=0;Q<I.length;Q++){const $=I[Q];T.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,T.__webglColorRenderbuffer[Q]);const xt=r.convert($.format,$.colorSpace),it=r.convert($.type),lt=w($.internalFormat,xt,it,$.colorSpace,b.isXRRenderTarget===!0),Mt=Yt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,T.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(T.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(T.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)yt(T.__webglFramebuffer[Q][$],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$);else yt(T.__webglFramebuffer[Q],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){for(let Q=0,$=I.length;Q<$;Q++){const xt=I[Q],it=n.get(xt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ht(i.TEXTURE_2D,xt),yt(T.__webglFramebuffer,b,xt,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(xt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Ht(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)yt(T.__webglFramebuffer[$],b,x,i.COLOR_ATTACHMENT0,Q,$);else yt(T.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,Q,0);m(x)&&d(Q),e.unbindTexture()}b.depthBuffer&&Dt(b)}function Wt(b){const x=b.textures;for(let T=0,L=x.length;T<L;T++){const I=x[T];if(m(I)){const U=E(b),K=n.get(I).__webglTexture;e.bindTexture(U,K),d(U),e.unbindTexture()}}}const ye=[],B=[];function tn(b){if(b.samples>0){if(Kt(b)===!1){const x=b.textures,T=b.width,L=b.height;let I=i.COLOR_BUFFER_BIT;const U=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(b),Q=x.length>1;if(Q)for(let $=0;$<x.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let $=0;$<x.length;$++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[$]);const xt=n.get(x[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,T,L,0,0,T,L,I,i.NEAREST),l===!0&&(ye.length=0,B.length=0,ye.push(i.COLOR_ATTACHMENT0+$),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ye.push(U),B.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let $=0;$<x.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,K.__webglColorRenderbuffer[$]);const xt=n.get(x[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Yt(b){return Math.min(s.maxSamples,b.samples)}function Kt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ue(b,x){const T=b.colorSpace,L=b.format,I=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||T!==us&&T!==si&&(Qt.getTransfer(T)===de?(L!==Sn||I!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),x}function At(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=et,this.setTexture2DArray=J,this.setTexture3D=st,this.setTextureCube=Z,this.rebindTextures=Vt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Kt}function km(i,t){function e(n,s=si){let r;const o=Qt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.BYTE;if(n===jl)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===tc)return i.RGB;if(n===Sn)return i.RGBA;if(n===ec)return i.LUMINANCE;if(n===nc)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===po)return i.RED_INTEGER;if(n===sc)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===Sr||n===yr||n===Er||n===wr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===Za||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Qa||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===eo||n===no||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gm extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:Vm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=new Xm,m=e.getContextAttributes();let d=null,E=null;const w=[],M=[],z=new Zt;let R=null;const A=new un;A.viewport=new me;const D=new un;D.viewport=new me;const y=[A,D],_=new Gm;let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=w[tt];return at===void 0&&(at=new pa,w[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=w[tt];return at===void 0&&(at=new pa,w[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=w[tt];return at===void 0&&(at=new pa,w[tt]=at),at.getHandSpace()};function V(tt){const at=M.indexOf(tt.inputSource);if(at===-1)return;const yt=w[at];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,c||o),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function j(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",et);for(let tt=0;tt<w.length;tt++){const at=M[tt];at!==null&&(M[tt]=null,w[tt].disconnect(at))}C=null,q=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",j),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Di(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,yt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ls:ns,yt=m.stencil?os:Li);const Pt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Di(f.textureWidth,f.textureHeight,{format:Sn,type:Kn,depthTexture:new Mc(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function et(tt){for(let at=0;at<tt.removed.length;at++){const yt=tt.removed[at],pt=M.indexOf(yt);pt>=0&&(M[pt]=null,w[pt].disconnect(yt))}for(let at=0;at<tt.added.length;at++){const yt=tt.added[at];let pt=M.indexOf(yt);if(pt===-1){for(let Dt=0;Dt<w.length;Dt++)if(Dt>=M.length){M.push(yt),pt=Dt;break}else if(M[Dt]===null){M[Dt]=yt,pt=Dt;break}if(pt===-1)break}const Pt=w[pt];Pt&&Pt.connect(yt)}}const J=new P,st=new P;function Z(tt,at,yt){J.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(yt.matrixWorld);const pt=J.distanceTo(st),Pt=at.projectionMatrix.elements,Dt=yt.projectionMatrix.elements,Vt=Pt[14]/(Pt[10]-1),ge=Pt[14]/(Pt[10]+1),Wt=(Pt[9]+1)/Pt[5],ye=(Pt[9]-1)/Pt[5],B=(Pt[8]-1)/Pt[0],tn=(Dt[8]+1)/Dt[0],Yt=Vt*B,Kt=Vt*tn,Rt=pt/(-B+tn),ue=Rt*-B;if(at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ue),tt.translateZ(Rt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Pt[10]===-1)tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const At=Vt+Rt,b=ge+Rt,x=Yt-ue,T=Kt+(pt-ue),L=Wt*ge/b*At,I=ye*ge/b*At;tt.projectionMatrix.makePerspective(x,T,L,I,At,b),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function mt(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let at=tt.near,yt=tt.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(yt=v.depthFar)),_.near=D.near=A.near=at,_.far=D.far=A.far=yt,(C!==_.near||q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,q=_.far),A.layers.mask=tt.layers.mask|2,D.layers.mask=tt.layers.mask|4,_.layers.mask=A.layers.mask|D.layers.mask;const pt=tt.parent,Pt=_.cameras;mt(_,pt);for(let Dt=0;Dt<Pt.length;Dt++)mt(Pt[Dt],pt);Pt.length===2?Z(_,A,D):_.projectionMatrix.copy(A.projectionMatrix),_t(tt,_,pt)};function _t(tt,at,yt){yt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ks*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let St=null;function Ht(tt,at){if(h=at.getViewerPose(c||o),g=at,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let pt=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Dt=0;Dt<yt.length;Dt++){const Vt=yt[Dt];let ge=null;if(p!==null)ge=p.getViewport(Vt);else{const ye=u.getViewSubImage(f,Vt);ge=ye.viewport,Dt===0&&(t.setRenderTargetTextures(E,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(E))}let Wt=y[Dt];Wt===void 0&&(Wt=new un,Wt.layers.enable(Dt),Wt.viewport=new me,y[Dt]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ge.x,ge.y,ge.width,ge.height),Dt===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(Wt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Dt=u.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,s.renderState)}}for(let yt=0;yt<w.length;yt++){const pt=M[yt],Pt=w[yt];pt!==null&&Pt!==void 0&&Pt.update(pt,at,c||o)}St&&St(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const se=new xc;se.setAnimationLoop(Ht),this.setAnimationLoop=function(tt){St=tt},this.dispose=function(){}}}const yi=new Dn,Ym=new Te;function Km(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),w=E.envMap,M=E.envMapRotation;w&&(m.envMap.value=w,yi.copy(M),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(yi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const M=w.program;n.uniformBlockBinding(E,M)}function c(E,w){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const z=w.program;n.updateUBOMapping(E,z);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){const w=u();E.__bindingPointIndex=w;const M=i.createBuffer(),z=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,z,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=s[E.id],M=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,A=M.length;R<A;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,_=D.length;y<_;y++){const C=D[y];if(p(C,R,y,z)===!0){const q=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let et=0;et<V.length;et++){const J=V[et],st=v(J);typeof J=="number"||typeof J=="boolean"?(C.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,q+j,C.__data)):J.isMatrix3?(C.__data[0]=J.elements[0],C.__data[1]=J.elements[1],C.__data[2]=J.elements[2],C.__data[3]=0,C.__data[4]=J.elements[3],C.__data[5]=J.elements[4],C.__data[6]=J.elements[5],C.__data[7]=0,C.__data[8]=J.elements[6],C.__data[9]=J.elements[7],C.__data[10]=J.elements[8],C.__data[11]=0):(J.toArray(C.__data,j),j+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,M,z){const R=E.value,A=w+"_"+M;if(z[A]===void 0)return typeof R=="number"||typeof R=="boolean"?z[A]=R:z[A]=R.clone(),!0;{const D=z[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return z[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(E){const w=E.uniforms;let M=0;const z=16;for(let A=0,D=w.length;A<D;A++){const y=Array.isArray(w[A])?w[A]:[w[A]];for(let _=0,C=y.length;_<C;_++){const q=y[_],V=Array.isArray(q.value)?q.value:[q.value];for(let j=0,et=V.length;j<et;j++){const J=V[j],st=v(J),Z=M%z,mt=Z%st.boundary,_t=Z+mt;M+=mt,_t!==0&&z-_t<st.storage&&(M+=z-_t),q.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=st.storage}}}const R=M%z;return R>0&&(M+=z-R),E.__size=M,E.__cache={},this}function v(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Zm{constructor(t={}){const{canvas:e=Fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let z=!1,R=0,A=0,D=null,y=-1,_=null;const C=new me,q=new me;let V=null;const j=new Jt(0);let et=0,J=e.width,st=e.height,Z=1,mt=null,_t=null;const St=new me(0,0,J,st),Ht=new me(0,0,J,st);let se=!1;const tt=new vo;let at=!1,yt=!1;const pt=new Te,Pt=new Te,Dt=new P,Vt=new me,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ye(){return D===null?Z:1}let B=n;function tn(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),B===null){const O="webgl2";if(B=tn(O,S),B===null)throw tn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Yt,Kt,Rt,ue,At,b,x,T,L,I,U,K,Q,$,xt,it,lt,Mt,vt,ut,Ut,It,te,F;function dt(){Yt=new ep(B),Yt.init(),It=new km(B,Yt),Kt=new $f(B,Yt,t,It),Rt=new Om(B,Yt),Kt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),ue=new sp(B),At=new ym,b=new Bm(B,Yt,Rt,At,Kt,It,ue),x=new jf(M),T=new tp(M),L=new hu(B),te=new Yf(B,L),I=new np(B,L,ue,te),U=new ap(B,I,L,ue),vt=new rp(B,Kt,b),it=new Zf(At),K=new Sm(M,x,T,Yt,Kt,te,it),Q=new Km(M,At),$=new wm,xt=new Pm(Yt),Mt=new qf(M,x,T,Rt,U,p,l),lt=new Nm(M,U,Kt),F=new $m(B,ue,Kt,Rt),ut=new Kf(B,Yt,ue),Ut=new ip(B,Yt,ue),ue.programs=K.programs,M.capabilities=Kt,M.extensions=Yt,M.properties=At,M.renderLists=$,M.shadowMap=lt,M.state=Rt,M.info=ue}dt();const G=new qm(M,B);this.xr=G,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=Yt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Yt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(J,st,!1))},this.getSize=function(S){return S.set(J,st)},this.setSize=function(S,O,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,st=O,e.width=Math.floor(S*Z),e.height=Math.floor(O*Z),H===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(J*Z,st*Z).floor()},this.setDrawingBufferSize=function(S,O,H){J=S,st=O,Z=H,e.width=Math.floor(S*H),e.height=Math.floor(O*H),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,O,H,W){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,O,H,W),Rt.viewport(C.copy(St).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,O,H,W){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,O,H,W),Rt.scissor(q.copy(Ht).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){Rt.setScissorTest(se=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(S=!0,O=!0,H=!0){let W=0;if(S){let N=!1;if(D!==null){const nt=D.texture.format;N=nt===go||nt===mo||nt===po}if(N){const nt=D.texture.type,ct=nt===Kn||nt===Li||nt===Bs||nt===os||nt===uo||nt===fo,Et=Mt.getClearColor(),wt=Mt.getClearAlpha(),Nt=Et.r,Ot=Et.g,Tt=Et.b;ct?(g[0]=Nt,g[1]=Ot,g[2]=Tt,g[3]=wt,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Nt,v[1]=Ot,v[2]=Tt,v[3]=wt,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT),H&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),$.dispose(),xt.dispose(),At.dispose(),x.dispose(),T.dispose(),U.dispose(),te.dispose(),F.dispose(),K.dispose(),G.dispose(),G.removeEventListener("sessionstart",mi),G.removeEventListener("sessionend",Ni),en.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const S=ue.autoReset,O=lt.enabled,H=lt.autoUpdate,W=lt.needsUpdate,N=lt.type;dt(),ue.autoReset=S,lt.enabled=O,lt.autoUpdate=H,lt.needsUpdate=W,lt.type=N}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Lt(S){const O=S.target;O.removeEventListener("dispose",Lt),ne(O)}function ne(S){Ee(S),At.remove(S)}function Ee(S){const O=At.get(S).programs;O!==void 0&&(O.forEach(function(H){K.releaseProgram(H)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,H,W,N,nt){O===null&&(O=ge);const ct=N.isMesh&&N.matrixWorld.determinant()<0,Et=_s(S,O,H,W,N);Rt.setMaterial(W,ct);let wt=H.index,Nt=1;if(W.wireframe===!0){if(wt=I.getWireframeAttribute(H),wt===void 0)return;Nt=2}const Ot=H.drawRange,Tt=H.attributes.position;let ee=Ot.start*Nt,_e=(Ot.start+Ot.count)*Nt;nt!==null&&(ee=Math.max(ee,nt.start*Nt),_e=Math.min(_e,(nt.start+nt.count)*Nt)),wt!==null?(ee=Math.max(ee,0),_e=Math.min(_e,wt.count)):Tt!=null&&(ee=Math.max(ee,0),_e=Math.min(_e,Tt.count));const xe=_e-ee;if(xe<0||xe===1/0)return;te.setup(N,W,Et,H,wt);let nn,re=ut;if(wt!==null&&(nn=L.get(wt),re=Ut,re.setIndex(nn)),N.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*ye()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(N.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*ye()),N.isLineSegments?re.setMode(B.LINES):N.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else N.isPoints?re.setMode(B.POINTS):N.isSprite&&re.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)re.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))re.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,Fn=N._multiDrawCounts,ae=N._multiDrawCount,gn=wt?L.get(wt).bytesPerElement:1,Oi=At.get(W).currentProgram.getUniforms();for(let on=0;on<ae;on++)Oi.setValue(B,"_gl_DrawID",on),re.render(bt[on]/gn,Fn[on])}else if(N.isInstancedMesh)re.renderInstances(ee,xe,N.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fn=Math.min(H.instanceCount,bt);re.renderInstances(ee,xe,Fn)}else re.render(ee,xe)};function $t(S,O,H){S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=Ke,S.needsUpdate=!0,Un(S,O,H),S.side=ui,S.needsUpdate=!0,Un(S,O,H),S.side=an):Un(S,O,H)}this.compile=function(S,O,H=null){H===null&&(H=S),d=xt.get(H),d.init(O),w.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const W=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const Et=nt[ct];$t(Et,H,N),W.add(Et)}else $t(nt,H,N),W.add(nt)}),w.pop(),d=null,W},this.compileAsync=function(S,O,H=null){const W=this.compile(S,O,H);return new Promise(N=>{function nt(){if(W.forEach(function(ct){At.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){N(S);return}setTimeout(nt,10)}Yt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let De=null;function $e(S){De&&De(S)}function mi(){en.stop()}function Ni(){en.start()}const en=new xc;en.setAnimationLoop($e),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(S){De=S,G.setAnimationLoop(S),S===null?en.stop():en.start()},G.addEventListener("sessionstart",mi),G.addEventListener("sessionend",Ni),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(O),O=G.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,D),d=xt.get(S,w.length),d.init(O),w.push(d),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),tt.setFromProjectionMatrix(Pt),yt=this.localClippingEnabled,at=it.init(this.clippingPlanes,yt),m=$.get(S,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&Fi(nt,O,-1/0,M.sortObjects)}Fi(S,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(mt,_t),Wt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Wt&&Mt.addToRenderList(m,S),this.info.render.frame++,at===!0&&it.beginShadows();const H=d.state.shadowsArray;lt.render(H,S,O),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(d.setupLights(),O.isArrayCamera){const nt=O.cameras;if(N.length>0)for(let ct=0,Et=nt.length;ct<Et;ct++){const wt=nt[ct];gs(W,N,S,wt)}Wt&&Mt.render(S);for(let ct=0,Et=nt.length;ct<Et;ct++){const wt=nt[ct];ms(m,S,wt,wt.viewport)}}else N.length>0&&gs(W,N,S,O),Wt&&Mt.render(S),ms(m,S,O);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(M,S,O),te.resetDefaultState(),y=-1,_=null,w.pop(),w.length>0?(d=w[w.length-1],at===!0&&it.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Fi(S,O,H,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){W&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const ct=U.update(S),Et=S.material;Et.visible&&m.push(S,ct,Et,H,Vt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||tt.intersectsObject(S))){const ct=U.update(S),Et=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Vt.copy(ct.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(Et)){const wt=ct.groups;for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Tt=wt[Nt],ee=Et[Tt.materialIndex];ee&&ee.visible&&m.push(S,ct,ee,H,Vt.z,Tt)}}else Et.visible&&m.push(S,ct,Et,H,Vt.z,null)}}const nt=S.children;for(let ct=0,Et=nt.length;ct<Et;ct++)Fi(nt[ct],O,H,W)}function ms(S,O,H,W){const N=S.opaque,nt=S.transmissive,ct=S.transparent;d.setupLightsView(H),at===!0&&it.setGlobalState(M.clippingPlanes,H),W&&Rt.viewport(C.copy(W)),N.length>0&&Ie(N,O,H),nt.length>0&&Ie(nt,O,H),ct.length>0&&Ie(ct,O,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function gs(S,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new Di(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Vs:Kn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const nt=d.state.transmissionRenderTarget[W.id],ct=W.viewport||C;nt.setSize(ct.z,ct.w);const Et=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(j),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&Mt.render(H);const wt=M.toneMapping;M.toneMapping=ci;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),at===!0&&it.setGlobalState(M.clippingPlanes,W),Ie(S,H,W),b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Tt=0,ee=O.length;Tt<ee;Tt++){const _e=O[Tt],xe=_e.object,nn=_e.geometry,re=_e.material,bt=_e.group;if(re.side===an&&xe.layers.test(W.layers)){const Fn=re.side;re.side=Ke,re.needsUpdate=!0,gi(xe,H,W,nn,re,bt),re.side=Fn,re.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt))}M.setRenderTarget(Et),M.setClearColor(j,et),Nt!==void 0&&(W.viewport=Nt),M.toneMapping=wt}function Ie(S,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){const ct=S[N],Et=ct.object,wt=ct.geometry,Nt=W===null?ct.material:W,Ot=ct.group;Et.layers.test(H.layers)&&gi(Et,O,H,wt,Nt,Ot)}}function gi(S,O,H,W,N,nt){S.onBeforeRender(M,O,H,W,N,nt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,O,H,W,S,nt),N.transparent===!0&&N.side===an&&N.forceSinglePass===!1?(N.side=Ke,N.needsUpdate=!0,M.renderBufferDirect(H,O,W,N,S,nt),N.side=ui,N.needsUpdate=!0,M.renderBufferDirect(H,O,W,N,S,nt),N.side=an):M.renderBufferDirect(H,O,W,N,S,nt),S.onAfterRender(M,O,H,W,N,nt)}function Un(S,O,H){O.isScene!==!0&&(O=ge);const W=At.get(S),N=d.state.lights,nt=d.state.shadowsArray,ct=N.state.version,Et=K.getParameters(S,N.state,nt,O,H),wt=K.getProgramCacheKey(Et);let Nt=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?T:x).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",Lt),Nt=new Map,W.programs=Nt);let Ot=Nt.get(wt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===ct)return Nn(S,Et),Ot}else Et.uniforms=K.getUniforms(S),S.onBeforeCompile(Et,M),Ot=K.acquireProgram(Et,wt),Nt.set(wt,Ot),W.uniforms=Et.uniforms;const Tt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Nn(S,Et),W.needsLights=vs(S),W.lightsStateVersion=ct,W.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Ks(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=br.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Nn(S,O){const H=At.get(S);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function _s(S,O,H,W,N){O.isScene!==!0&&(O=ge),b.resetTextureUnits();const nt=O.fog,ct=W.isMeshStandardMaterial?O.environment:null,Et=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:us,wt=(W.isMeshStandardMaterial?T:x).get(W.envMap||ct),Nt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color;let xe=ci;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=M.toneMapping);const nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=nn!==void 0?nn.length:0,bt=At.get(W),Fn=d.state.lights;if(at===!0&&(yt===!0||S!==_)){const dn=S===_&&W.id===y;it.setState(W,S,dn)}let ae=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Fn.state.version||bt.outputColorSpace!==Et||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==wt||W.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==it.numPlanes||bt.numIntersection!==it.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==Ot||bt.morphTargets!==Tt||bt.morphNormals!==ee||bt.morphColors!==_e||bt.toneMapping!==xe||bt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,bt.__version=W.version);let gn=bt.currentProgram;ae===!0&&(gn=Un(W,O,N));let Oi=!1,on=!1,Ms=!1;const ve=gn.getUniforms(),Tn=bt.uniforms;if(Rt.useProgram(gn.program)&&(Oi=!0,on=!0,Ms=!0),W.id!==y&&(y=W.id,on=!0),Oi||_!==S){Rt.buffers.depth.getReversed()?(pt.copy(S.projectionMatrix),zh(pt),Bh(pt),ve.setValue(B,"projectionMatrix",pt)):ve.setValue(B,"projectionMatrix",S.projectionMatrix),ve.setValue(B,"viewMatrix",S.matrixWorldInverse);const Zn=ve.map.cameraPosition;Zn!==void 0&&Zn.setValue(B,Dt.setFromMatrixPosition(S.matrixWorld)),Kt.logarithmicDepthBuffer&&ve.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,on=!0,Ms=!0)}if(N.isSkinnedMesh){ve.setOptional(B,N,"bindMatrix"),ve.setOptional(B,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ve.setValue(B,"boneTexture",dn.boneTexture,b))}N.isBatchedMesh&&(ve.setOptional(B,N,"batchingTexture"),ve.setValue(B,"batchingTexture",N._matricesTexture,b),ve.setOptional(B,N,"batchingIdTexture"),ve.setValue(B,"batchingIdTexture",N._indirectTexture,b),ve.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(B,"batchingColorTexture",N._colorsTexture,b));const Ss=H.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&vt.update(N,H,gn),(on||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,ve.setValue(B,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=wt,Tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),on&&(ve.setValue(B,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&xs(Tn,Ms),nt&&W.fog===!0&&Q.refreshFogUniforms(Tn,nt),Q.refreshMaterialUniforms(Tn,W,Z,st,d.state.transmissionRenderTarget[S.id]),br.upload(B,Ks(bt),Tn,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(br.upload(B,Ks(bt),Tn,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(B,"center",N.center),ve.setValue(B,"modelViewMatrix",N.modelViewMatrix),ve.setValue(B,"normalMatrix",N.normalMatrix),ve.setValue(B,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let Zn=0,jn=dn.length;Zn<jn;Zn++){const Ro=dn[Zn];F.update(Ro,gn),F.bind(Ro,gn)}}return gn}function xs(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function vs(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,O,H){At.get(S.texture).__webglTexture=O,At.get(S.depthTexture).__webglTexture=H;const W=At.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const H=At.get(S);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,H=0){D=S,R=O,A=H;let W=!0,N=null,nt=!1,ct=!1;if(S){const wt=At.get(S);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(wt.__hasExternalTextures)b.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Tt=S.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&At.has(Tt)&&(S.width!==Tt.image.width||S.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ct=!0);const Ot=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?N=Ot[O][H]:N=Ot[O],nt=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?N=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[H]:N=Ot,C.copy(S.viewport),q.copy(S.scissor),V=S.scissorTest}else C.copy(St).multiplyScalar(Z).floor(),q.copy(Ht).multiplyScalar(Z).floor(),V=se;if(Rt.bindFramebuffer(B.FRAMEBUFFER,N)&&W&&Rt.drawBuffers(S,N),Rt.viewport(C),Rt.scissor(q),Rt.setScissorTest(V),nt){const wt=At.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,H)}else if(ct){const wt=At.get(S.texture),Nt=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Nt)}y=-1},this.readRenderTargetPixels=function(S,O,H,W,N,nt,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(Et=Et[ct]),Et){Rt.bindFramebuffer(B.FRAMEBUFFER,Et);try{const wt=S.texture,Nt=wt.format,Ot=wt.type;if(!Kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&H>=0&&H<=S.height-N&&B.readPixels(O,H,W,N,It.convert(Nt),It.convert(Ot),nt)}finally{const wt=D!==null?At.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,O,H,W,N,nt,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(Et=Et[ct]),Et){const wt=S.texture,Nt=wt.format,Ot=wt.type;if(!Kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-W&&H>=0&&H<=S.height-N){Rt.bindFramebuffer(B.FRAMEBUFFER,Et);const Tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.bufferData(B.PIXEL_PACK_BUFFER,nt.byteLength,B.STREAM_READ),B.readPixels(O,H,W,N,It.convert(Nt),It.convert(Ot),0);const ee=D!==null?At.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,ee);const _e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Oh(B,_e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,nt),B.deleteBuffer(Tt),B.deleteSync(_e),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,H=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-H),N=Math.floor(S.image.width*W),nt=Math.floor(S.image.height*W),ct=O!==null?O.x:0,Et=O!==null?O.y:0;b.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,ct,Et,N,nt),Rt.unbindTexture()},this.copyTextureToTexture=function(S,O,H=null,W=null,N=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],O=arguments[2],N=arguments[3]||0,H=null);let nt,ct,Et,wt,Nt,Ot,Tt,ee,_e;const xe=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(nt=H.max.x-H.min.x,ct=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Nt=H.min.y,Ot=H.isBox3?H.min.z:0):(nt=xe.width,ct=xe.height,Et=xe.depth||1,wt=0,Nt=0,Ot=0),W!==null?(Tt=W.x,ee=W.y,_e=W.z):(Tt=0,ee=0,_e=0);const nn=It.convert(O.format),re=It.convert(O.type);let bt;O.isData3DTexture?(b.setTexture3D(O,0),bt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(b.setTexture2DArray(O,0),bt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(O,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const Fn=B.getParameter(B.UNPACK_ROW_LENGTH),ae=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=B.getParameter(B.UNPACK_SKIP_PIXELS),Oi=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const Ms=S.isDataArrayTexture||S.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Tn=At.get(S),Ss=At.get(O),dn=At.get(Tn.__renderTarget),Zn=At.get(Ss.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,dn.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let jn=0;jn<Et;jn++)Ms&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(S).__webglTexture,N,Ot+jn),S.isDepthTexture?(ve&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(O).__webglTexture,N,_e+jn),B.blitFramebuffer(wt,Nt,nt,ct,Tt,ee,nt,ct,B.DEPTH_BUFFER_BIT,B.NEAREST)):ve?B.copyTexSubImage3D(bt,N,Tt,ee,_e+jn,wt,Nt,nt,ct):B.copyTexSubImage2D(bt,N,Tt,ee,_e+jn,wt,Nt,nt,ct);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ve?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(bt,N,Tt,ee,_e,nt,ct,Et,nn,re,xe.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,N,Tt,ee,_e,nt,ct,Et,nn,xe.data):B.texSubImage3D(bt,N,Tt,ee,_e,nt,ct,Et,nn,re,xe):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Tt,ee,nt,ct,nn,re,xe.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Tt,ee,xe.width,xe.height,nn,xe.data):B.texSubImage2D(B.TEXTURE_2D,N,Tt,ee,nt,ct,nn,re,xe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Fn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),N===0&&O.generateMipmaps&&B.generateMipmap(bt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(S,O,H=null,W=null,N=0){return S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,S=arguments[2],O=arguments[3],N=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,H,W,N)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,Rt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class So{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new So(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jm extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Br extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dr extends wn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new Zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends wn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(p,2));function E(){const M=new P,z=new P;let R=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const y=[],_=D/r,C=_*(e-t)+t;for(let q=0;q<=s;q++){const V=q/s,j=V*l+a,et=Math.sin(j),J=Math.cos(j);z.x=C*et,z.y=-_*n+m,z.z=C*J,u.push(z.x,z.y,z.z),M.set(et,A,J).normalize(),f.push(M.x,M.y,M.z),p.push(V,1-_),y.push(g++)}v.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){const _=v[y][D],C=v[y+1][D],q=v[y+1][D+1],V=v[y][D+1];(t>0||y!==0)&&(h.push(_,C,V),R+=3),(e>0||y!==r-1)&&(h.push(C,q,V),R+=3)}c.addGroup(d,R,0),d+=R}function w(M){const z=g,R=new Zt,A=new P;let D=0;const y=M===!0?t:e,_=M===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;const C=g;for(let q=0;q<=s;q++){const j=q/s*l+a,et=Math.cos(j),J=Math.sin(j);A.x=y*J,A.y=m*_,A.z=y*et,u.push(A.x,A.y,A.z),f.push(0,_,0),R.x=et*.5+.5,R.y=J*.5*_+.5,p.push(R.x,R.y),g++}for(let q=0;q<s;q++){const V=z+q,j=C+q;M===!0?h.push(j,j+1,V):h.push(j+1,j,V),D+=3}c.addGroup(d,D,M===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yo extends wn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const w=new P,M=new P,z=new P;for(let R=0;R<e.length;R+=3)p(e[R+0],w),p(e[R+1],M),p(e[R+2],z),l(w,M,z,E)}function l(E,w,M,z){const R=z+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const y=E.clone().lerp(M,D/R),_=w.clone().lerp(M,D/R),C=R-D;for(let q=0;q<=C;q++)q===0&&D===R?A[D][q]=y:A[D][q]=y.clone().lerp(_,q/C)}for(let D=0;D<R;D++)for(let y=0;y<2*(R-D)-1;y++){const _=Math.floor(y/2);y%2===0?(f(A[D][_+1]),f(A[D+1][_]),f(A[D][_])):(f(A[D][_+1]),f(A[D+1][_+1]),f(A[D+1][_]))}}function c(E){const w=new P;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(E),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){const E=new P;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const M=m(E)/2/Math.PI+.5,z=d(E)/Math.PI+.5;o.push(M,1-z)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const w=o[E+0],M=o[E+2],z=o[E+4],R=Math.max(w,M,z),A=Math.min(w,M,z);R>.9&&A<.1&&(w<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),z<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,w){const M=E*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function g(){const E=new P,w=new P,M=new P,z=new P,R=new Zt,A=new Zt,D=new Zt;for(let y=0,_=0;y<r.length;y+=9,_+=6){E.set(r[y+0],r[y+1],r[y+2]),w.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),R.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),D.set(o[_+4],o[_+5]),z.copy(E).add(w).add(M).divideScalar(3);const C=m(z);v(R,_+0,E,C),v(A,_+2,w,C),v(D,_+4,M,C)}}function v(E,w,M,z){z<0&&E.x===1&&(o[w]=E.x-1),M.x===0&&M.z===0&&(o[w]=z/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.vertices,t.indices,t.radius,t.details)}}class Eo extends yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}class Bt extends wn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const E=[],w=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let z=0;z<=e;z++){const R=z/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(R+M,1-w),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const w=h[d][E+1],M=h[d][E],z=h[d+1][E],R=h[d+1][E+1];(d!==0||o>0)&&p.push(w,M,R),(d!==n-1||l<Math.PI)&&p.push(M,z,R)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ht extends Xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wo extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jm extends wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new Te,Al=new P,Rl=new P;class Tc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cl=new Te,bs=new P,ga=new P;class Qm extends Tc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class ai extends wo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t0 extends Tc{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class n0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const qs={hammy:{name:"HAMMY",colors:{fur:14262363,pink:15243930}},teddy:{name:"TEDDY",colors:{fur:10910802,pink:14256264}},snowy:{name:"SNOWY",colors:{fur:15789542,pink:15243930}}};class bc{constructor(t,e=qs.hammy.colors){const n=this.g=new jt,s=this._tan=new ht({color:e.fur,roughness:.9}),r=this._pink=new ht({color:e.pink,roughness:.8});this._baseFur=e.fur,this._basePink=e.pink;const o=new ht({color:4870712,roughness:.7,metalness:.2}),a=new ht({color:3949104,roughness:.7}),l=new ht({color:1381653,roughness:.4}),c=new ht({color:3027245,roughness:.5,metalness:.5}),h=(y,_,C=0,q=0,V=0)=>{const j=new X(y,_);return j.position.set(C,q,V),j.castShadow=!0,n.add(j),j};h(new Bt(.3,16,12),s,0,.55,0).scale.set(1,1.15,.85),this._cloth=[];const f=h(new gt(.52,.45,.34),o,0,.62,.06);this._cloth.push(f);const p=h(new gt(.1,.5,.42),a,-.16,.62,0),g=h(new gt(.1,.5,.42),a,.16,.62,0),v=h(new gt(.14,.14,.08),a,-.14,.5,.25),m=h(new gt(.14,.14,.08),a,.1,.48,.25);this._cloth.push(p,g,v,m);const d=this.head=new jt;d.position.set(0,1.08,.04),n.add(d);const E=new X(new Bt(.27,16,12),s);E.scale.set(1.1,1,.95),E.castShadow=!0,d.add(E);for(const y of[-1,1]){const _=new X(new Bt(.1,10,8),s);_.position.set(y*.19,.2,-.03),_.scale.set(1,1.3,1),d.add(_);const C=new X(new Bt(.055,8,6),r);C.position.set(y*.19,.22,.02),d.add(C)}const w=new X(new Bt(.3,16,10,0,Math.PI*2,0,Math.PI*.55),o);w.position.y=.12,w.castShadow=!0,d.add(w),this._cloth.push(w);const M=new X(new Me(.33,.33,.05,16),o);M.position.y=.05,d.add(M),this._cloth.push(M);for(const y of[-1,1]){const _=new X(new Bt(.04,8,8),l);_.position.set(y*.1,.02,.23),d.add(_)}const z=new X(new Bt(.035,8,8),r);z.position.set(0,-.06,.25),d.add(z);for(const y of[-1,1]){const _=new X(new Bt(.08,8,8),s.clone());e.fur===15789542&&_.material.color.set(16777215),_.position.set(y*.2,-.1,.16),_.scale.set(1,.8,.7),d.add(_)}this.armL=this._arm(n,o,-.32,.7),this.armR=this._arm(n,o,.32,.7),this.gun=new X(new gt(.07,.1,.55),c),this.gun.position.set(.08,.72,-.35),this.gun.castShadow=!0,n.add(this.gun),this._cloth.push(this.gun);const R=new X(new gt(.05,.16,.1),c);R.position.set(.08,.6,-.2),R.rotation.x=.3,n.add(R),this._cloth.push(R),this.legL=this._leg(n,-.13),this.legR=this._leg(n,.13),this.bootL=h(new gt(.15,.12,.24),a,0,0,-.03),this.legL.add(this.bootL),this.bootL.position.y=-.34,this._cloth.push(this.bootL),this.bootR=h(new gt(.15,.12,.24),a,0,0,-.03),this.legR.add(this.bootR),this.bootR.position.y=-.34,this._cloth.push(this.bootR),this.pack=new jt;const A=h(new gt(.34,.42,.16),c,0,.6,.3);this.pack.add(A),this.flames=[];const D=new Fe({color:16752688,transparent:!0,opacity:.85,blending:di,depthWrite:!1});for(const y of[-.1,.1]){const _=h(new Ui(.05,.14,6),a,y,.38,.34);_.rotation.x=Math.PI,this.pack.add(_);const C=new X(new Ui(.05,.28,6),D.clone());C.position.set(y,.18,.34),C.rotation.x=Math.PI,C.visible=!1,this.pack.add(C),this.flames.push(C)}this.pack.visible=!1,n.add(this.pack),n.scale.setScalar(.95),n.visible=!1,t.add(n)}setPack(t){this.pack.visible=t}setGold(t){if(t){this._goldMat||(this._goldMat=new ht({color:16765514,emissive:11171584,emissiveIntensity:.8,roughness:.3,metalness:.55}));for(const e of this._cloth)e.visible=!1;this._savedMats=[],this.g.traverse(e=>{e.isMesh&&e.visible&&(this._savedMats.push([e,e.material]),e.material=this._goldMat)})}else{for(const[e,n]of this._savedMats||[])e.material=n;this._savedMats=[];for(const e of this._cloth)e.visible=!0}}set visible(t){this.g.visible=t}get visible(){return this.g.visible}_arm(t,e,n,s){const r=new jt;r.position.set(n,s,0);const o=new X(new gt(.12,.3,.12),e);return o.position.y=-.15,o.castShadow=!0,r.add(o),r.rotation.x=-1.25,t.add(r),r}_leg(t,e){const n=new jt;n.position.set(e,.38,0);const s=new X(new gt(.13,.38,.13),new ht({color:5595200,roughness:.8}));return s.position.y=-.19,s.castShadow=!0,n.add(s),t.add(n),n}update(t){this.g.position.set(t.pos.x,t.pos.y,t.pos.z),this.g.rotation.y=t.yaw;for(const r of this.flames)if(r.visible=this.pack.visible&&!!t.flying,r.visible){const o=.7+Math.random()*.6;r.scale.set(o,.8+Math.random()*.7,o)}const e=t.bobT,n=t.moving,s=n?Math.sin(e*6):0;this.legL.rotation.x=s*.7,this.legR.rotation.x=-s*.7,this.armL.rotation.x=-1.25+s*.12,this.armR.rotation.x=-1.25-s*.12,this.g.position.y=t.pos.y+Math.abs(Math.cos(e*6))*.05*(n?1:.2),this.head.rotation.z=Math.sin(e*.9)*.08}}const Ae=256,Ne=160;class i0{constructor(t,e){this.canvas=document.createElement("canvas"),this.canvas.width=Ae,this.canvas.height=Ne,this.ctx=this.canvas.getContext("2d"),this.tex=new Br(this.canvas),this.tex.colorSpace=sn,this.mesh=t,this.light=e,t.material=new Fe({map:this.tex,toneMapped:!1}),this.t=Math.random()*40,this.channel=0,this.nextSwitch=this.t+18+Math.random()*14,this.staticT=0,this.acc=0,this.onChannel=null}update(t){if(this.t+=t,this.t>=this.nextSwitch&&(this.staticT=.6,this.channel=1-this.channel,this.nextSwitch=this.t+20+Math.random()*16,this.onChannel&&this.onChannel(this.channel)),this.staticT>0&&(this.staticT-=t),this.acc+=t,this.acc<1/20)return;this.acc=0,this.draw(),this.tex.needsUpdate=!0;const e=this.channel===0?[.4,.62,1]:[1,.75,.35],n=.85+Math.random()*.3+(this.staticT>0?.2:0);this.light&&(this.light.color.setRGB(e[0]*n,e[1]*n,e[2]*n),this.light.intensity=18*n)}draw(){const t=this.ctx;t.save(),this.staticT>0?this.drawStatic(t):this.channel===0?this.drawNews(t):this.drawCartoon(t),this.overlay(t),t.restore()}drawNews(t){const e=this.t,n=t.createLinearGradient(0,0,0,Ne);n.addColorStop(0,"#16324f"),n.addColorStop(1,"#0b1c30"),t.fillStyle=n,t.fillRect(0,0,Ae,Ne),t.fillStyle="rgba(255,255,255,0.05)";for(let p=-20+e*6%40;p<Ae;p+=40)t.fillRect(p,0,14,Ne);const s=Ae/2,r=66,o=Math.sin(e*2.2)*2,a=e%3.4>3.2,l=Math.sin(e*5)*.7;t.save(),t.translate(s,r+o),t.fillStyle="#c98d5a",t.beginPath(),t.ellipse(34,22,8,5,.6,0,7),t.fill(),t.fillStyle="#e8b077",t.beginPath(),t.ellipse(0,8,34,30,0,0,7),t.fill(),t.fillStyle="#f7dcc0",t.beginPath(),t.ellipse(0,18,22,17,0,0,7),t.fill(),t.fillStyle="#e8b077",t.beginPath(),t.ellipse(0,-18,24,21,0,0,7),t.fill();for(const p of[-1,1])t.beginPath(),t.ellipse(p*16,-34,8,8,p*.4,0,7),t.fill(),t.fillStyle="#d98a8a",t.beginPath(),t.ellipse(p*16,-33,4.5,4.5,p*.4,0,7),t.fill(),t.fillStyle="#e8b077";t.fillStyle="#222",a?(t.fillRect(-11,-20,7,2),t.fillRect(4,-20,7,2)):(t.beginPath(),t.ellipse(-8,-20,3,4,0,0,7),t.fill(),t.beginPath(),t.ellipse(8,-20,3,4,0,0,7),t.fill()),t.fillStyle="#d98a8a",t.beginPath(),t.ellipse(0,-12,3,2.5,0,0,7),t.fill(),t.strokeStyle="#7a4a2a",t.lineWidth=1.5,t.beginPath(),t.arc(0,-9,5,.2,Math.PI-.2),t.stroke(),t.strokeStyle="#e8b077",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(-24,6),t.lineTo(-34,20),t.stroke(),t.beginPath(),t.moveTo(24,4),t.lineTo(24+Math.cos(-1.9+l)*16,4+Math.sin(-1.9+l)*16),t.stroke(),t.restore();const c=Math.sin(e*4)>-.6;t.fillStyle=c?"#d33":"#611",t.fillRect(8,10,30,14),t.fillStyle="#fff",t.font="bold 10px monospace",t.fillText("LIVE",13,21),t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(Ae-52,8,44,14),t.fillStyle="#7ec8ff",t.font="bold 10px monospace",t.fillText("HamtV",Ae-45,19),t.fillStyle="#c22",t.fillRect(0,Ne-22,Ae,22),t.fillStyle="#fff",t.font="bold 11px monospace";const h="  !! HAMSTER APOCALYPSE DAY 12 — ZOMBIE SIGHTINGS UP 400% — CHOCOLATE CRIMES AT RECORD — EXPERTS SUGGEST NAPS !!  ",u=t.measureText(h).width;let f=e*40%u;for(let p=-f;p<Ae;p+=u)t.fillText(h,p,Ne-6);t.fillStyle="#fff",t.fillRect(0,Ne-22,58,22),t.fillStyle="#c22",t.font="bold 11px monospace",t.fillText("BREAKING",6,Ne-6)}drawCartoon(t){const e=this.t,n=t.createLinearGradient(0,0,0,Ne);n.addColorStop(0,"#ffd76e"),n.addColorStop(1,"#ff9d4d"),t.fillStyle=n,t.fillRect(0,0,Ae,Ne),t.fillStyle="#67b24f",t.fillRect(0,Ne-40,Ae,40),t.save(),t.translate(Ae-36,30),t.rotate(e*.8),t.fillStyle="#fff2b0";for(let h=0;h<8;h++)t.rotate(Math.PI/4),t.fillRect(-2,-26,4,12);t.restore(),t.fillStyle="#fff2b0",t.beginPath(),t.arc(Ae-36,30,13,0,7),t.fill();const s=Math.abs(Math.sin(e*6))*14,r=Math.sin(e*3)*10,o=1+Math.sin(e*6+Math.PI)*.12,a=Ae/2+r,l=Ne-34-s;t.save(),t.translate(a,l),t.scale(2-o,o),t.fillStyle="#8a5a2b",t.beginPath(),t.ellipse(0,-6,22,20,0,0,7),t.fill(),t.beginPath(),t.ellipse(0,-28,16,14,0,0,7),t.fill();for(const h of[-1,1])t.beginPath(),t.ellipse(h*11,-38,5.5,5.5,h*.4,0,7),t.fill();t.strokeStyle="#ffe9c9",t.lineWidth=2,t.beginPath(),t.arc(-6,-30,3,Math.PI+.5,-.5),t.stroke(),t.beginPath(),t.arc(6,-30,3,Math.PI+.5,-.5),t.stroke(),t.fillStyle="#5a2d10",t.beginPath(),t.arc(0,-22,4,0,Math.PI),t.fill(),t.strokeStyle="#8a5a2b",t.lineWidth=5,t.lineCap="round";const c=Math.sin(e*6)*.5;t.beginPath(),t.moveTo(-16,-8),t.lineTo(-16-Math.cos(.9+c)*12,-8-Math.sin(.9+c)*12),t.stroke(),t.beginPath(),t.moveTo(16,-8),t.lineTo(16+Math.cos(.9-c)*12,-8-Math.sin(.9-c)*12),t.stroke(),t.restore(),t.fillStyle="rgba(255,255,255,0.9)",t.font="14px monospace";for(let h=0;h<3;h++){const u=e*1.4+h*2.1,f=a+Math.sin(u+h*2.4)*30,p=l-50-u*20%46;t.globalAlpha=Math.max(0,1-u*20%46/46),t.fillText(h%2?"♪":"♫",f,p)}t.globalAlpha=1,t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(6,8,118,16),t.fillStyle="#ffe9a0",t.font="bold 11px monospace",t.fillText("HAMSTER TIME!",12,20)}drawStatic(t){const e=t.createImageData(Ae,Ne),n=e.data;for(let r=0;r<n.length;r+=4){const o=Math.random()*255|0;n[r]=n[r+1]=n[r+2]=o,n[r+3]=255}t.putImageData(e,0,0),t.fillStyle="rgba(255,255,255,0.8)",t.font="bold 14px monospace";const s="CH "+(this.channel+3);t.fillText(s,(Ae-t.measureText(s).width)/2,Ne/2+5)}overlay(t){t.fillStyle="rgba(0,0,0,0.18)";for(let n=0;n<Ne;n+=3)t.fillRect(0,n,Ae,1);Math.random()<.06&&(t.fillStyle="rgba(255,255,255,0.15)",t.fillRect(0,Math.random()*Ne|0,Ae,3));const e=t.createRadialGradient(Ae/2,Ne/2,Ne/2,Ae/2,Ne/2,Ae*.72);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.5)"),t.fillStyle=e,t.fillRect(0,0,Ae,Ne)}}const Ei=45,s0=48,r0=72,gr=130;function a0(){const i=[];for(let t=0;t<5;t++){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.fillStyle="#c9c9cf",n.fillRect(0,0,64,64),n.fillStyle="#3a3d44",n.fillRect(12,8,40,46);const s=Math.random()<.5;n.fillStyle=s?Math.random()<.75?"#ffca6e":"#8fc7ff":"#181b22",n.fillRect(15,11,34,40),n.fillStyle="#3a3d44",n.fillRect(15,29,34,3),n.fillRect(30,11,3,40),t===1?(n.fillStyle="#8a8f96",n.fillRect(20,55,18,8),n.fillStyle="#55585e",n.fillRect(22,57,14,4)):t===2?(n.strokeStyle="#0c0d10",n.lineWidth=1,n.beginPath(),n.moveTo(18,14),n.lineTo(28,24),n.lineTo(24,36),n.lineTo(36,44),n.stroke()):t===3?(n.fillStyle="#3d6b2e",n.fillRect(18,5,8,6),n.fillRect(38,4,8,7)):t===4&&(n.fillStyle="#26282e",n.fillRect(8,55,48,6));const r=new Br(e);r.magFilter=mn,i.push(r)}return i}function _a(i,t){const e=document.createElement("canvas");e.width=1024,e.height=256;const n=e.getContext("2d");n.fillStyle="#0b0a12",n.fillRect(0,0,1024,256),n.strokeStyle=t,n.lineWidth=10,n.strokeRect(14,14,996,228);let s=120;do{if(n.font=`bold ${s}px monospace`,n.measureText(i).width<940)break;s-=8}while(s>30);n.textAlign="center",n.textBaseline="middle",n.shadowColor=t,n.shadowBlur=30,n.fillStyle=t,n.fillText(i,512,130),n.fillText(i,512,130);const r=new Br(e);return r.colorSpace=sn,r}function o0(){const i=document.createElement("canvas");i.width=128,i.height=96;const t=i.getContext("2d");return t.fillStyle="#4a4a33",t.fillRect(0,0,128,96),t.strokeStyle="#1e1e12",t.lineWidth=6,t.strokeRect(4,4,120,88),t.fillStyle="#d8d08a",t.font="bold 30px monospace",t.textAlign="center",t.fillText("AMMO",64,52),t.fillStyle="#8a8a5a",t.fillRect(20,66,88,8),new Br(i)}function l0(i){const t=[],e=[];let n=!1,s=null;function r(T,L,I,U,K=100){const Q=new Ii(new P(T-I/2,0,L-U/2),new P(T+I/2,K,L+U/2));return t.push(Q),Q}const o=new X(new Dr(175,64),new ht({color:3355962,roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,i.add(o);const a=new ht({color:2500653,roughness:1});for(const T of[-110,0,110]){const L=new X(new hn(350,9),a);L.rotation.x=-Math.PI/2,L.position.set(0,.01,T),i.add(L);const I=new X(new hn(9,350),a);I.rotation.x=-Math.PI/2,I.position.set(T,.01,0),i.add(I)}const l=new X(new Dr(Ei,48),new ht({color:4877109,roughness:1}));c0(l.material.color),l.rotation.x=-Math.PI/2,l.position.y=.02,l.receiveShadow=!0,i.add(l);const c=new ht({color:9075285,roughness:1});for(const[T,L,I,U]of[[0,0,0,Ei*2],[0,0,Math.PI/2,Ei*2]]){const K=new X(new hn(4,U),c);K.rotation.x=-Math.PI/2,K.rotation.z=I,K.position.set(T,.035,L),K.receiveShadow=!0,i.add(K)}const h=new jt,u=new ht({color:7829102,roughness:.9}),f=new X(new Me(3,3.4,.7,24),u);f.position.y=.35;const p=new X(new Me(2.5,2.5,.65,24),new ht({color:3036518,roughness:.2,metalness:.4}));p.position.y=.5;const g=new X(new Me(.35,.5,2.2,12),u);g.position.y=1.3;const v=new X(new Me(1.3,.5,.4,16),u);v.position.y=2.3,h.add(f,p,g,v),h.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),i.add(h),r(0,0,7,7,3);const m=new ht({color:5916210,roughness:1}),d=[new ht({color:4025134,roughness:1}),new ht({color:5012021,roughness:1}),new ht({color:3495466,roughness:1})],E=new ht({color:3814188,roughness:1});function w(T,L,I=!1){const U=new jt,K=2+Math.random()*1.2,Q=new X(new Me(.18,.3,K,8),I?E:m);if(Q.position.y=K/2,Q.castShadow=!0,U.add(Q),I)for(let $=0;$<3;$++){const xt=new X(new Me(.05,.12,1.4,5),E);xt.position.y=K*(.6+$*.15),xt.rotation.z=($%2?1:-1)*(.7+Math.random()*.5),xt.rotation.y=Math.random()*Math.PI,xt.castShadow=!0,U.add(xt)}else{const $=d[Math.random()*d.length|0];for(let xt=0;xt<3;xt++){const it=1.5-xt*.35,lt=new X(new Eo(it,1),$);lt.position.set((Math.random()-.5)*.8,K+.5+xt*.7,(Math.random()-.5)*.8),lt.castShadow=!0,U.add(lt)}}U.position.set(T,0,L),U.rotation.y=Math.random()*Math.PI*2,i.add(U),r(T,L,1.1,1.1,K+4)}let M=0,z=0;for(;M<12&&z<200;){z++;const T=Math.random()*Math.PI*2,L=10+Math.random()*(Ei-13),I=Math.cos(T)*L,U=Math.sin(T)*L;Math.abs(I)<4||Math.abs(U)<4||Math.hypot(I,U)<7||(w(I,U),M++)}for(let T=0;T<8;T++){const L=T/8*Math.PI*2+Math.random()*.3,I=41+Math.random()*3;w(Math.cos(L)*I,Math.sin(L)*I,!0)}const R=new ht({color:3032101,roughness:1}),A=36;for(let T=0;T<A;T++){const L=T/A*Math.PI*2,I=new X(new gt(4.4,.7,.8),R);I.position.set(Math.cos(L)*(Ei-1.2),.35,Math.sin(L)*(Ei-1.2)),I.rotation.y=-L+Math.PI/2,i.add(I)}const D=new ht({color:7031342,roughness:1});for(let T=0;T<4;T++){const L=T/4*Math.PI*2+Math.PI/4,I=Math.cos(L)*22,U=Math.sin(L)*22,K=new jt,Q=new X(new gt(2.4,.12,.6),D);Q.position.y=.5;const $=new X(new gt(2.4,.5,.1),D);$.position.set(0,.8,-.25);const xt=new X(new gt(.12,.5,.55),D);xt.position.set(-1,.25,0);const it=xt.clone();it.position.x=1,K.add(Q,$,xt,it),K.position.set(I,0,U),K.rotation.y=-L+Math.PI/2,i.add(K),r(I,U,2.6,1.2,1.5)}const y=a0(),_=[3882822,4604218,3818056,4868674,3356992,4472892,4079174],C=new gt(1,1,1),q=[];function V(T,L){const I=y[Math.random()*y.length|0].clone();I.wrapS=I.wrapT=zs,I.repeat.set(Math.max(2,Math.round(T/2.4)),Math.max(2,Math.round(L/3.4)));const U=_[Math.random()*_.length|0];return new ht({color:U,roughness:.9,map:I,emissiveMap:I,emissive:6968880,emissiveIntensity:.5})}function j(T,L,I){const U=new ht({color:3027256,roughness:1}),K=new ht({color:2237482,roughness:1});return[V(T,I),V(T,I),U,K,V(L,I),V(L,I)]}function et(T,L,I,U,K,Q){const $=new X(C,Q);return $.scale.set(I,K,U),$.position.set(T,K/2,L),$.castShadow=!0,$.receiveShadow=!0,i.add($),$}const J=new ht({color:2764083,roughness:1}),st=new ht({color:3948617,roughness:1}),Z=new ht({color:9080726,roughness:.7,metalness:.4}),mt=new ht({color:1711394,roughness:.6}),_t=new ht({color:7811880,roughness:1}),St=new ht({color:2500652,roughness:.7,metalness:.5}),Ht=new ht({color:7031354,roughness:.8}),se=new ht({color:5593182,roughness:.6}),tt=new ht({color:16724770,emissive:16720401,emissiveIntensity:3}),at=[new Fe({map:_a("HUNGRY JACKS","#ff8818"),side:an,fog:!1,toneMapped:!1}),new Fe({map:_a("HAMSTER SOCCER","#22ddff"),side:an,fog:!1,toneMapped:!1})],yt=[new ht({color:1707266,emissive:16746520,emissiveIntensity:.7,fog:!1}),new ht({color:136218,emissive:2285055,emissiveIntensity:.7,fog:!1})];function pt(T,L,I){const U=new jt,K=new X(new gt(L+.9,I+.9,.18),yt[T]);U.add(K);const Q=new X(new hn(L,I),at[T]);Q.position.z=.12,U.add(Q);for(const $ of[-1,1]){const xt=new X(new gt(.3,2.8,.3),St);xt.position.set($*L*.35,-(I/2+1.3),0),U.add(xt)}return U}function Pt(T,L,I,U,K,Q=-1){const $=new jt,xt=new X(new gt(I+.3,.5,U+.3),J);xt.position.set(T,K+.25,L),$.add(xt);const it=new X(new gt(I-.5,.14,U-.5),st);it.position.set(T,K+.07,L),it.receiveShadow=!0,$.add(it);const lt=2+(Math.random()*3|0);for(let G=0;G<lt;G++){const Y=new X(new gt(.9,.6,.7),Z);Y.position.set(T+(Math.random()-.5)*Math.max(1,I-3),K+.45,L+(Math.random()-.5)*Math.max(1,U-3)),Y.castShadow=!0,$.add(Y)}if(Math.random()<.4){const G=T+(Math.random()-.5)*Math.max(1,I-5),Y=L+(Math.random()-.5)*Math.max(1,U-5),rt=new X(new Me(1.2,1.35,1.7,10),Ht);rt.position.set(G,K+2.6,Y),rt.castShadow=!0,$.add(rt);for(const ot of[-.8,.8])for(const Lt of[-.8,.8]){const ne=new X(new Me(.07,.1,1.8,5),se);ne.position.set(G+ot,K+1,Y+Lt),$.add(ne)}}else if(Math.random()<.5){const G=T+(Math.random()-.5)*Math.max(1,I-4),Y=L+(Math.random()-.5)*Math.max(1,U-4),rt=new X(new Me(.05,.1,4.5,5),se);rt.position.set(G,K+2.3,Y),$.add(rt);const ot=new X(new Bt(.17,6,6),tt);ot.position.set(G,K+4.6,Y),$.add(ot)}const Mt=Math.sign(T)||1,vt=Math.sign(L)||1,ut=Math.abs(T)>=Math.abs(L),Ut=new X(new hn(1.7,2.8),mt),It=new X(new gt(2.7,.1,1.2),_t);if(ut?(Ut.position.set(T+Mt*(I/2+.04),1.4,L+(Math.random()-.5)*Math.max(1,U-3.4)),Ut.rotation.y=Mt>0?Math.PI/2:-Math.PI/2,It.position.set(T+Mt*(I/2+.6),3,L+(Math.random()-.5)*Math.max(1,U-3.4))):(Ut.position.set(T+(Math.random()-.5)*Math.max(1,I-3.4),1.4,L+vt*(U/2+.04)),Ut.rotation.y=vt>0?0:Math.PI,It.position.set(T+(Math.random()-.5)*Math.max(1,I-3.4),3,L+vt*(U/2+.6))),It.castShadow=!0,$.add(Ut,It),Math.random()<.55){const G=Math.min(7,Math.max(2,(K-3)/3.2|0));for(let Y=1;Y<=G;Y++){const rt=new X(new gt(2.3,.07,1.05),St);rt.position.set(T+Mt*(I/2+.55),Y*3.1,L+(Y%2?1:-1)*Math.min(1.5,U/2-1)),$.add(rt)}}const te=new X(new gt(I+.6,.55,U+.6),st);te.position.set(T,K-.28,L),$.add(te);for(const G of[-1,1])for(const Y of[-1,1]){const rt=new X(new gt(.55,K+.4,.55),J);rt.position.set(T+G*(I/2+.06),K/2,L+Y*(U/2+.06)),$.add(rt)}const F=Math.random()<.5?1:-1,dt=Math.min(8,Math.max(1,(K-5)/3.4|0));for(let G=1;G<=dt;G++){const Y=G*3.4;if(Y>K-2.6)break;const rt=T+(Math.random()-.5)*Math.max(1,(ut?I:U)*.6),ot=L+(ut?F*(U/2+.55):(Math.random()-.5)*Math.max(1,U*.6)),Lt=ut?rt:T+F*(I/2+.55),ne=ot,Ee=new X(new gt(2.3,.14,1.05),st);Ee.position.set(Lt,Y,ne),Ee.castShadow=!0,$.add(Ee);const $t=new X(ut?new gt(2.3,.45,.07):new gt(.07,.45,2.3),St);$t.position.set(Lt+(ut?0:F*.45),Y+.28,ne+(ut?F*.45:0)),$.add($t)}if(Q>=0||Math.random()<.8){const G=Q>=0?Q:Math.random()*at.length|0,Y=pt(G,11,2.8),rt=T+(Math.random()-.5)*I*.5,ot=L+(Math.random()-.5)*U*.5;Y.position.set(rt,K+2.8,ot),Y.rotation.y=Math.atan2(-rt,-ot),$.add(Y)}for(let G=0;G<2;G++){const Y=new X(new gt(2.4,.1,1.1),_t);ut?Y.position.set(T+Mt*(I/2+.55),3,L+(Math.random()-.5)*Math.max(1,U-3)):Y.position.set(T+(Math.random()-.5)*Math.max(1,I-3),3,L+vt*(U/2+.55)),Y.castShadow=!0,$.add(Y)}i.add($)}let Dt=0;for(;q.length<26&&Dt<400;){Dt++;const T=Math.random()*Math.PI*2,L=74+Math.random()*40,I=Math.cos(T)*L,U=Math.sin(T)*L,K=11+Math.random()*10,Q=11+Math.random()*10,$=12+Math.random()*38;for(const lt of q)if(Math.hypot(lt.x-I,lt.z-U)<(lt.w+K)/2+4){Dt=-9999;break}Dt<0&&(Dt=0),q.push({x:I,z:U,w:K,d:Q});const xt=et(I,U,K,Q,$,j(K,Q,$));xt.castShadow=!0;const it=r(I,U,K,Q,$);e.push({x:I,z:U,w:K,d:Q,h:$,mesh:xt,col:it}),Pt(I,U,K,Q,$)}function Vt(T){const L=Math.abs(-T.x)>=Math.abs(-T.z),I=(L?-T.x:-T.z)<0?-1:1,U=L?T.w/2:T.d/2,K=4,Q=3,$=(N,nt,ct=.1)=>new P(T.x+(L?I*(K-N):nt),ct,T.z+(L?nt:I*(Q-N))),xt=(N,nt,ct=.1)=>new P(T.x+(L?-I*(K-N):nt),ct,T.z+(L?nt:-I*(Q-N))),it=(N,nt,ct=.1)=>new P(T.x+(L?I*(U+N):nt),ct,T.z+(L?nt:I*(U+N)));T.col.isSecret=!0;const lt=new P,Mt=new P,vt=new jt,ut=new ht({color:1927722,emissive:4063098,emissiveIntensity:2.4,fog:!1}),Ut=new ht({color:2236456,roughness:.8}),It=new X(new gt(2.2,3,.2),ut);It.position.y=1.5,vt.add(It);for(const N of[-1.3,1.3]){const nt=new X(new gt(.3,3.2,.28),Ut);nt.position.set(N,1.6,.05),vt.add(nt)}const te=new X(new gt(3,.35,.28),Ut);te.position.set(0,3.3,.05),vt.add(te);const F=new ai(5635976,60,16,2);F.position.set(0,3.8,.8),vt.add(F);const dt=new X(new hn(4.2,1.05),new Fe({map:_a("ENTER","#3dff7a"),side:an,fog:!1,toneMapped:!1}));dt.position.set(0,4.3,.12),vt.add(dt);const G=new X(new gt(.9,28,.9),new Fe({color:4063098,transparent:!0,opacity:.3,blending:di,depthWrite:!1,fog:!1}));G.position.set(0,13,.5),vt.add(G);const Y=new X(new gt(3.4,.08,2.6),new ht({color:1192728,emissive:2883430,emissiveIntensity:1.6,fog:!1}));Y.position.y=.04;const rt=new jt;rt.add(Y),rt.position.copy(it(1.9,2.8,0)),rt.rotation.y=L?I>0?Math.PI/2:-Math.PI/2:I>0?0:Math.PI,i.add(rt),vt.position.copy(it(.1,2.8,0)),vt.rotation.y=L?I>0?Math.PI/2:-Math.PI/2:I>0?0:Math.PI,i.add(vt),lt.copy(it(1.5,2.8,.1)),Mt.copy(it(2.7,2.8,.1));const ot=new X(new gt(8,3,6),new ht({color:10127986,roughness:.95,side:Ke}));ot.position.set(T.x,1.5,T.z),i.add(ot);const Lt=new X(new gt(7.8,.1,5.8),new ht({color:7034948,roughness:.9}));Lt.position.set(T.x,.05,T.z),i.add(Lt);const ne=new ai(16763274,90,16,1.4);ne.position.set(T.x,2.6,T.z),i.add(ne);const Ee=new X(new Bt(.16,8,8),new Fe({color:16767392,fog:!1,toneMapped:!1}));Ee.position.set(T.x,2.6,T.z),i.add(Ee);const $t=$(1.3,2.2),De=xt(.145,0),$e=new P(T.x,0,T.z),mi=(N,nt)=>Math.atan2(-(nt.x-N.x),-(nt.z-N.z)),Ni=new ht({color:10115648,roughness:.9}),en=new jt,Fi=new X(new gt(3,.5,1.2),Ni);Fi.position.y=.3,en.add(Fi);const ms=new X(new gt(3,.9,.3),Ni);ms.position.set(0,.85,-.5),en.add(ms);for(const N of[-1.65,1.65]){const nt=new X(new gt(.35,.7,1.2),Ni);nt.position.set(N,.45,0),en.add(nt)}en.position.copy($e),en.rotation.y=mi($e,De)+Math.PI,i.add(en);const gs=new P,Ie=new bc(i,qs.hammy.colors);Ie.visible=!0,Ie._cloth.forEach(N=>N.visible=!1),Ie.armL.children[0].material=Ie._tan,Ie.armR.children[0].material=Ie._tan,Ie.legL.children[0].material=Ie._tan,Ie.legR.children[0].material=Ie._tan,Ie.g.position.copy($e).add(gs.copy(De).sub($e).setY(0).normalize().multiplyScalar(.15)),Ie.g.position.y=.6,Ie.g.rotation.y=mi($e,De)+Math.PI,Ie.g.scale.set(1.7,.95,1.5);const gi=new X(new hn(2.2,1.35));gi.position.set(0,1.3,-.14),gi.rotation.y=Math.PI;const Un=new ai(6728447,25,9,1.5);Un.position.copy(De).add(gs.copy($t).sub(De).setY(0).normalize().multiplyScalar(.6)),Un.y=1.3,i.add(Un);const Ks=new i0(gi,Un),Nn=new jt,_s=new X(new gt(2.3,.5,.28),new ht({color:3812900,roughness:.8}));_s.position.y=.25,_s.castShadow=!0,Nn.add(_s);const xs=new X(new gt(2.5,1.6,.25),new ht({color:1842210,roughness:.5}));xs.position.y=1.3,xs.castShadow=!0,Nn.add(xs),Nn.add(gi),Nn.position.copy(De),Nn.rotation.y=mi(De,$t),i.add(Nn),r(T.x,T.z-Q,8,.35,3),r(T.x,T.z+Q,8,.35,3),r(T.x-K,T.z,.35,6,3),r(T.x+K,T.z,.35,6,3);const vs=new X(new gt(1.2,2.2,.1),ut);vs.position.copy($(.06,2,1.25)),L||(vs.rotation.y=Math.PI/2),i.add(vs);const S=T.x+(L?I*(U+1.7):2),O=T.z+(L?2:I*(U+1.7)),H=3.1,W=new X(new gt(4.2,.18,2.6),st);W.position.set(S,H-.09,O),W.castShadow=!0,i.add(W);for(const N of[-2.05,2.05])for(const nt of[-1.25,1.25]){const ct=new X(new gt(.1,.9,.1),St);ct.position.set(S+N,H+.4,O+nt),i.add(ct)}for(const[N,nt]of[[0,-1.25],[0,1.25],[-2.05,0],[2.05,0]]){const ct=new X(new gt(N!==0?.08:4.2,.08,nt!==0?.08:2.6),St);ct.position.set(S+N,H+.85,O+nt),i.add(ct)}e.push({x:S,z:O,w:4.2,d:2.6,h:H}),t.push(new Ii(new P(S-2.1,H-.12,O-1.3),new P(S+2.1,H,O+1.3))),s={col:T.col,shell:T.mesh,door:lt,outside:Mt,entry:$(1.3,2.2),balconyDoor:$(1.3,2),balconyPos:new P(S,H+.1,O),tv:Ks,fat:Ie.g,beam:G.material,faceYaw:mi($t,De)}}let ge=null;for(const[T,L]of[[0,0],[Math.PI,1]]){let I=null,U=1e9;for(const K of e){const Q=Math.atan2(K.z,K.x);let $=Math.abs(Q-T);$>Math.PI&&($=Math.PI*2-$),$<U&&(U=$,I=K)}if(I){const K=pt(L,16,4.4);K.position.set(I.x,I.h+3.8,I.z),K.rotation.y=Math.atan2(-I.x,-I.z),i.add(K),L===0&&(ge=I)}}ge&&Vt(ge);const Wt=y[2].clone();Wt.wrapS=Wt.wrapT=zs,Wt.repeat.set(4,6);const ye=new ht({color:2237739,roughness:1,map:Wt,emissiveMap:Wt,emissive:5917224,emissiveIntensity:.4});for(let T=0;T<34;T++){const L=T/34*Math.PI*2+Math.random()*.2,I=138+Math.random()*30,U=14+Math.random()*16,K=14+Math.random()*16,Q=18+Math.random()*55;et(Math.cos(L)*I,Math.sin(L)*I,U,K,Q,ye)}const B=new ht({color:2895411,roughness:.8}),tn=new ht({color:16767370,emissive:16762458,emissiveIntensity:2});for(let T=0;T<10;T++){const L=T/10*Math.PI*2+.15,I=Math.cos(L)*56,U=Math.sin(L)*56,K=new X(new Me(.1,.14,4.2,6),B);K.position.set(I,2.1,U);const Q=new X(new gt(1,.1,.1),B);Q.position.set(I+.4*Math.cos(L),4.2,U+.4*Math.sin(L));const $=new X(new Bt(.18,8,8),tn);$.position.set(I+.85*Math.cos(L),4.15,U+.85*Math.sin(L)),i.add(K,Q,$)}const Yt=new ht({color:5659198,roughness:.7,metalness:.3}),Kt=o0(),Rt=new ht({map:Kt,emissiveMap:Kt,emissive:8947780,emissiveIntensity:.7}),ue=[];function At(T,L){const I=new jt,U=new X(new gt(1.15,.9,.85),Yt);U.position.y=.45,U.castShadow=!0;const K=new X(new hn(.9,.65),Rt);K.position.set(0,.5,.431);const Q=new X(new gt(1.25,.12,.95),Yt);Q.position.y=.96;const $=new ai(13943386,.7,6,2);$.position.y=1.4,I.add(U,K,Q,$),I.position.set(T,0,L),I.rotation.y=Math.random()*Math.PI*2,i.add(I);const xt={group:I,active:!0,respawnT:0,pos:new P(T,.5,L)};return ue.push(xt),r(T,L,1.3,1.3,1.2),xt}for(let T=0;T<20;T++){const L=Math.random()*Math.PI*2,I=s0+Math.random()*(r0-6);At(Math.cos(L)*I,Math.sin(L)*I)}function b(){const T=Math.random()*Math.PI*2,L=49+Math.random()*9;return new P(Math.cos(T)*L,0,Math.sin(T)*L)}function x(T,L){for(const U of t){if(T.y>U.max.y-.5||T.y+.6<U.min.y||n&&U.isSecret)continue;const K=pn.clamp(T.x,U.min.x,U.max.x),Q=pn.clamp(T.z,U.min.z,U.max.z);let $=T.x-K,xt=T.z-Q;const it=$*$+xt*xt;if(it<L*L)if(it>1e-8){const lt=Math.sqrt(it);$/=lt,xt/=lt,T.x=K+$*L,T.z=Q+xt*L}else{const lt=T.x-U.min.x,Mt=U.max.x-T.x,vt=T.z-U.min.z,ut=U.max.z-T.z,Ut=Math.min(lt,Mt,vt,ut);Ut===lt?T.x=U.min.x-L:Ut===Mt?T.x=U.max.x+L:Ut===vt?T.z=U.min.z-L:T.z=U.max.z+L}}const I=Math.hypot(T.x,T.z);I>gr+35&&(T.x*=(gr+35)/I,T.z*=(gr+35)/I)}return{colliders:t,crates:ue,spawnZombiePos:b,resolveCollision:x,bounds:gr+35,parkR:Ei,buildings:e,secret:s,setSecretWalls:T=>{n=!!T}}}function c0(i){i.offsetHSL(0,.02,-.02)}class Ll{constructor(t,e,n,s){this.pos=new P(e,n,s),this.yaw=0,this.pitch=0,this.cool=0,this.recoil=0,this.flash=0;const r=this.g=new jt,o=new ht({color:4870720,roughness:.5,metalness:.5}),a=new ht({color:3356206,roughness:.5,metalness:.5}),l=new X(new Me(.9,1.2,.8,12),o);l.position.y=.4,l.castShadow=!0,r.add(l),this.rod=new jt,this.rod.position.y=1.1;const c=new X(new gt(1.6,.75,1.2),o);c.position.y=.1,c.castShadow=!0;const h=this.barrel=new X(new gt(.24,.24,1.9),a);h.position.set(0,.1,-1.1),h.castShadow=!0;const u=new X(new gt(.3,.3,.3),a);u.position.set(0,.1,-2);const f=new X(new Bt(.22,6,6),new Fe({color:16760928,transparent:!0,opacity:0,blending:di,depthWrite:!1}));f.position.set(0,.1,-2.25),this.flashM=f,this.rod.add(c,h,u,f);const p=new X(new Bt(.12,6,6),new ht({color:4521830,emissive:2293572,emissiveIntensity:2}));p.position.set(.6,.6,0),r.add(this.rod,p),r.position.set(e,n,s),t.add(r)}aim(t,e){this.yaw=t,this.pitch=e,this.rod.rotation.y=t,this.rod.rotation.x=e}canFire(){return this.cool<=0}fire(){this.cool=.32,this.recoil=1,this.flash=1}update(t){this.cool-=t,this.recoil=Math.max(0,this.recoil-t*5),this.flash=Math.max(0,this.flash-t*9),this.barrel.position.z=-1.1-this.recoil*.25,this.flashM.material.opacity=this.flash*.9}muzzle(t=new P){return this.flashM.getWorldPosition(t),t}}function h0(i,t){const e=[],n=t.filter(s=>s.h>=11&&s.h<=34).sort((s,r)=>Math.hypot(s.x,s.z)-70+(s.h-18)*.8-(Math.hypot(r.x,r.z)-70)-(r.h-18)*.8).slice(0,5);for(const s of n){const r=(Math.random()-.5)*Math.max(1,s.w-5),o=(Math.random()-.5)*Math.max(1,s.d-5);e.push(new Ll(i,s.x+r,s.h+.14,s.z+o))}if(!e.length&&t.length){const s=t[0];e.push(new Ll(i,s.x,s.h+.14,s.z))}return e}const u0=1.65,d0=new P;class f0{constructor(t){this.camera=t,this.pos=new P(0,0,10),this.vel=new P,this.yaw=Math.PI,this.pitch=0,this.health=100,this.maxHealth=100,this.onGround=!0,this.shake=0,this.bobT=0,this.moving=!1,this.dead=!1,this.viewMode=0,this.fovTarget=72,this.jetpack=!1,this.lookVelYaw=0,this.lookVelPitch=0,this.fuel=100,this.flying=!1,this.maxAlt=60,this.speedMul=1,this.super=!1,t.rotation.order="YXZ"}get eyePos(){return new P(this.pos.x,this.pos.y+u0,this.pos.z)}handleMouse(t,e){this.yaw-=t*.0022,this.pitch-=e*.0022,this.pitch=pn.clamp(this.pitch,-Math.PI/2+.05,Math.PI/2-.05)}forward(t=new P){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}update(t,e,n){if(this.dead)return;const s=(e.ArrowLeft?1:0)-(e.ArrowRight?1:0),r=(e.ArrowUp?1:0)-(e.ArrowDown?1:0),o=1-Math.pow(1e-5,t);this.lookVelYaw+=(s*3.4-this.lookVelYaw)*o,this.lookVelPitch+=(r*3-this.lookVelPitch)*o,s===0&&Math.abs(this.lookVelYaw)<.02&&(this.lookVelYaw=0),r===0&&Math.abs(this.lookVelPitch)<.02&&(this.lookVelPitch=0),this.yaw+=this.lookVelYaw*t,this.pitch+=this.lookVelPitch*t,this.pitch=pn.clamp(this.pitch,-Math.PI/2+.05,Math.PI/2-.05);let a=(e.KeyD?1:0)-(e.KeyA?1:0),l=(e.KeyW?1:0)-(e.KeyS?1:0);const c=Math.hypot(a,l);c>1&&(a/=c,l/=c),this.moving=c>0;const h=(e.ShiftLeft||e.ShiftRight?8.2:5.2)*this.speedMul,u=this.forward(),f=new P(-u.z,0,u.x),p=(u.x*l+f.x*a)*h,g=(u.z*l+f.z*a)*h,v=1-Math.pow(1e-4,t);this.vel.x+=(p-this.vel.x)*v,this.vel.z+=(g-this.vel.z)*v,this.vel.y-=22*t,e.Space&&this.onGround&&(this.vel.y=8.2,this.onGround=!1),this.flying=!1,(this.jetpack||this.super)&&e.Space&&(this.fuel>0||this.super)&&this.pos.y<this.maxAlt&&(this.vel.y=Math.min(this.vel.y+42*t,8.5),this.fuel=Math.max(0,this.fuel-24*t),this.flying=!0,this.onGround=!1),this.fuel=Math.min(100,this.fuel+(this.onGround?55:12)*t),this.pos.y>this.maxAlt&&(this.pos.y=this.maxAlt,this.vel.y>0&&(this.vel.y=0)),this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t,this.pos.z+=this.vel.z*t,this.pos.y<=0&&(this.pos.y=0,this.vel.y=0,this.onGround=!0),n(this.pos,.55);const m=Math.hypot(this.vel.x,this.vel.z);this.onGround&&m>1&&(this.bobT+=m*t*1.7),this.shake=Math.max(0,this.shake-t*2.5);const d=this.eyePos,E=Math.sin(this.bobT*6)*.035*Math.min(1,m/5),w=Math.cos(this.bobT*3)*.02*Math.min(1,m/5),M=this.shake;if(this.viewMode===2){const z=d0.set(d.x-u.x*2.5,d.y+.55-E*.5,d.z-u.z*2.5),R=1-Math.pow(1e-4,t);this.camera.position.lerp(z,R),this.camera.lookAt(d.x+u.x*2,d.y-.6,d.z+u.z*2)}else this.camera.position.set(d.x+w+(Math.random()-.5)*M*.12,d.y+E+(Math.random()-.5)*M*.12,d.z+(Math.random()-.5)*M*.12),this.camera.rotation.set(this.pitch+(Math.random()-.5)*M*.05,this.yaw+(Math.random()-.5)*M*.05,(Math.random()-.5)*M*.04);return this.fovTarget=this.viewMode===1?52:72,this.camera.fov+=(this.fovTarget-this.camera.fov)*Math.min(1,t*14),Math.abs(this.camera.fov-this.fovTarget)>.01&&this.camera.updateProjectionMatrix(),{bobX:w,bobY:E,hSpeed:m,flying:this.flying,fuel:this.fuel}}damage(t){return this.dead?!1:(this.health-=t,this.shake=Math.min(1.2,this.shake+t/25),this.health<=0?(this.health=0,this.dead=!0,!0):!1)}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}}const ro={pistol:{id:"pistol",key:"1",name:'M9 "HAMSTER"',sfx:"pistol",auto:!1,dmg:34,rate:.34,mag:12,startReserve:36,reload:1.15,spread:.014,pellets:1,range:120,vm:[.24,-.26,-.45]},shotgun:{id:"shotgun",key:"2",name:'SAWED-OFF "CRUNCHER"',sfx:"shotgun",auto:!1,dmg:11,rate:.9,mag:6,startReserve:24,reload:2.4,spread:.06,pellets:8,range:42,vm:[.26,-.24,-.52]},rifle:{id:"rifle",key:"3",name:'AK "SEED SLINGER"',sfx:"rifle",auto:!0,dmg:26,rate:.105,mag:30,startReserve:90,reload:2,spread:.024,pellets:1,range:160,vm:[.28,-.25,-.55]},knife:{id:"knife",key:"4",name:"COMBAT KNIFE",sfx:"knife",melee:!0,auto:!0,dmg:55,rate:.5,mag:0,startReserve:0,reload:0,vm:[.22,-.26,-.42]},rocket:{id:"rocket",key:"5",name:'RPG "HAMSMER"',sfx:"rocket",auto:!1,dmg:170,rate:1.2,mag:4,startReserve:10,reload:2.8,spread:.005,pellets:1,range:120,projectile:!0,splash:4.5,speed:24,vm:[.3,-.3,-.62]}};function we(i,t,e,n,s=0,r=0,o=0,a=0,l=0){const c=new X(new gt(i,t,e),n);return c.position.set(s,r,o),c.rotation.x=a,c.rotation.z=l,c}function _r(i,t,e,n=0,s=0,r=0,o=Math.PI/2){const a=new X(new Me(i,i,t,10),e);return a.position.set(n,s,r),a.rotation.z=o,a}const oe={metal:new ht({color:3816762,roughness:.5,metalness:.6}),dark:new ht({color:2434852,roughness:.6,metalness:.5}),wood:new ht({color:5915430,roughness:.8}),olive:new ht({color:4870712,roughness:.7,metalness:.3}),steel:new ht({color:9080981,roughness:.25,metalness:.9}),paw:new ht({color:14262363,roughness:.9}),pawPad:new ht({color:15912862,roughness:.9})};function As(i){for(const t of[-1,1]){const e=new X(new Bt(.035,8,8),oe.paw);e.scale.set(1,1.25,1),e.position.set(.05*t-.02,-.09,-.05*t),i.add(e);const n=new X(new Bt(.02,8,8),oe.pawPad);n.position.set(.05*t-.02,-.1,-.05*t+.015),i.add(n)}}function xr(i,t){const e=new X(new hn(.22,.22),new Fe({color:16761963,transparent:!0,opacity:.9,blending:di,depthWrite:!1}));return e.position.set(0,.015,t),e.visible=!1,i.add(e),e}function p0(i){const t=new jt;let e=null;if(i==="pistol")t.add(we(.075,.075,.16,oe.metal)),t.add(we(.06,.13,.07,oe.dark,0,-.09,.055,-.25)),t.add(we(.05,.03,.05,oe.dark,0,-.01,.11)),t.add(we(.02,.02,.1,oe.dark,0,.045,-.02)),As(t),e=xr(t,-.14);else if(i==="shotgun")t.add(_r(.028,.42,oe.metal,0,.02,-.1)),t.add(we(.07,.06,.16,oe.metal,0,0,.08)),t.add(we(.08,.07,.12,oe.wood,0,-.02,.18)),t.add(we(.065,.11,.2,oe.wood,0,-.08,.28,-.18)),As(t),e=xr(t,-.33);else if(i==="rifle")t.add(we(.075,.08,.3,oe.wood,0,0,.05)),t.add(we(.06,.07,.16,oe.metal,0,.005,-.14)),t.add(_r(.02,.3,oe.metal,0,.01,-.33)),t.add(we(.03,.14,.07,oe.metal,0,-.1,.1,.35)),t.add(we(.055,.09,.14,oe.wood,0,-.06,.24,-.15)),t.add(we(.02,.05,.03,oe.dark,0,.065,-.1)),t.add(we(.015,.045,.02,oe.dark,0,.06,-.36)),t.add(we(.05,.03,.06,oe.dark,0,-.1,.2,.3)),As(t),e=xr(t,-.5);else if(i==="rocket"){t.add(_r(.05,.5,oe.metal,0,.035,-.15)),t.add(_r(.055,.06,oe.dark,0,.035,.12)),t.add(we(.07,.07,.16,oe.dark,0,.035,-.44));const n=new X(new Ui(.04,.12,8),oe.dark);n.position.set(0,.035,-.58),n.rotation.x=-Math.PI/2,t.add(n),t.add(we(.05,.06,.18,oe.wood,0,-.05,.2,-.25)),t.add(we(.03,.03,.03,oe.dark,0,.1,-.08)),t.add(we(.03,.03,.03,oe.dark,0,.1,-.44)),t.add(we(.04,.03,.06,oe.olive,.07,.03,-.1)),As(t),e=xr(t,-.64)}else if(i==="knife"){t.add(we(.03,.06,.12,oe.wood,0,0,.06)),t.add(we(.01,.05,.01,oe.steel,0,.01,0));const n=we(.045,.09,.14,oe.steel,0,.015,-.12);n.geometry=new gt(.045,.09,.14),t.add(n),t.add(we(.008,.02,.1,oe.dark,0,-.02,-.12)),As(t)}return t.userData.flash=e,t}class m0{constructor(t,e){this.def=t,this.mag=t.mag,this.reserve=t.startReserve,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.recoil=0,this.popT=0,this.group=p0(t.id);const[n,s,r]=t.vm;this.basePos=new P(n,s,r),this.group.position.copy(this.basePos),t.melee&&(this.group.rotation.z=-.35),this.group.visible=!1,this.hidden=!0,this.locked=!1,this.muzzleWorld=new P,e.add(this.group)}get isMelee(){return!!this.def.melee}setVisibility(t){this.group.visible=t,this.hidden=!t,t&&(this.popT=1)}tryFire(){if(this.cooldown>0)return"wait";if(this.reloading)return"reloading";if(!this.isMelee&&this.mag<=0){if(this.reserve>0)this.startReload();else return this.cooldown=.25,"empty";return"empty"}return this.mag-=this.isMelee?0:1,this.cooldown=this.def.rate,this.recoil=1,"fire"}startReload(){return this.isMelee||this.reloading||this.mag>=this.def.mag||this.reserve<=0?!1:(this.reloading=!0,this.reloadT=0,!0)}update(t,e,n,s,r=0){if(this.cooldown=Math.max(0,this.cooldown-t),this.recoil*=Math.pow(5e-4,t),this.popT=Math.max(0,this.popT-t*5),this.reloading&&(this.reloadT+=t,this.reloadT>=this.def.reload)){const u=this.def.mag-this.mag,f=Math.min(u,this.reserve);this.mag+=f,this.reserve-=f,this.reloading=!1,this.onReloadEnd&&this.onReloadEnd()}if(this.hidden)return;const o=this.reloading?Math.sin(Math.min(1,this.reloadT/this.def.reload)*Math.PI):0,a=this.popT*this.popT;this.group.position.set(this.basePos.x+n-this.recoil*.012+r*-this.basePos.x,this.basePos.y+s-o*.12-a*.14+r*(-.17-this.basePos.y),this.basePos.z+this.recoil*.06+r*(-.38-this.basePos.z));const c=-o*.55+this.recoil*.14*(1-r)+a*.9+r*.18;this.group.rotation.x=c+s*1.2*(1-r),this.group.rotation.y=(n*.5+this.recoil*-.03)*(1-r),this.group.rotation.z=(this.isMelee?-.35:0)+this.recoil*.05*(1-r);const h=this.group.userData.flash;if(h&&(h.visible=this.recoil>.55,h.visible)){h.rotation.z=Math.random()*Math.PI;const u=.7+Math.random()*.6;h.scale.set(u,u,1),h.getWorldPosition(this.muzzleWorld)}}}const g0={walker:{hp:60,speed:2.1,dmg:9,scale:1,score:100,tint:7175514},runner:{hp:40,speed:3.9,dmg:6,scale:.85,score:150,tint:8018506},brute:{hp:240,speed:1.5,dmg:22,scale:1.5,score:400,tint:4872786},flyer:{hp:50,speed:3.4,dmg:8,scale:.9,score:150,tint:8023966,flying:!0},boss:{hp:2e3,speed:2,dmg:30,scale:3,score:2e3,tint:3360558}};class vr{constructor(t,e,n,s){const r=g0[n];this.typeId=n,this.type=r,this.hp=r.hp,this.state="chase",this.pos=e.clone(),this.knock=new P,this.attackT=Math.random()*.5,this.attackAnim=0,this.flying=!!r.flying,this.alt=2.3+Math.random()*.9,this.wobPhase=Math.random()*6.28,this.bikeT=0,this.stampT=0,this.animT=Math.random()*10,this.deadT=0,this.resolve=s,this.wanderTarget=e.clone();const o=r.scale,a=this.g=new jt,l=new ht({color:r.tint,roughness:1}),c=new ht({color:4011312,roughness:1});this.mats=[l,c],this.typeId==="boss"&&(l.color.set(3032102),c.color.set(2367258));const h=new X(new gt(.65,1.05,.4),l);h.position.y=1.15,h.castShadow=!0,a.add(h);const u=new X(new gt(.7,.5,.45),c);u.position.y=.95,a.add(u);const f=new X(new gt(.42,.45,.42),l);f.position.y=1.95,f.castShadow=!0,a.add(f),this.head=f;const p=new ht({color:2228224,emissive:16720401,emissiveIntensity:2});for(const g of[-.1,.1]){const v=new X(new gt(.07,.05,.03),p);v.position.set(g,1.98,.21),a.add(v)}if(this.armL=this._limb(l,c,.18,.85,-.45,1.5),this.armR=this._limb(l,c,.18,.85,.45,1.5),a.add(this.armL,this.armR),this.legL=this._limb(c,c,.2,.95,-.18,.95),this.legR=this._limb(c,c,.2,.95,.18,.95),a.add(this.legL,this.legR),this.typeId==="boss"){h.scale.set(1.5,1.25,1.4),f.scale.setScalar(1.25);for(const g of[-.55,.55]){const v=new X(new Ui(.16,.55,6),l);v.position.set(g,1.7,0),v.rotation.z=g<0?.7:-.7,v.castShadow=!0,a.add(v)}p.emissiveIntensity=3.2}if(this.flying){const g=[14703182,5939424,14725198,9494624,12611808];for(let v=0;v<3;v++){const m=v/3*Math.PI*2+Math.random()*.7,d=Math.cos(m)*.3*o,E=Math.sin(m)*.3*o,w=new X(new Bt(.3*o,10,10),new ht({color:g[(v+Math.floor(Math.random()*5))%5],roughness:.4}));w.scale.set(.8,1,.8),w.position.set(d,2*o,E),this.balloon=w,a.add(w);const M=new X(new Me(.012,.012,.6*o,4),new Fe({color:12303308}));M.position.set(d*.7,1.65*o,E*.7),a.add(M)}}a.scale.setScalar(o),a.position.copy(e),this.scale=o,t.add(a)}_limb(t,e,n,s,r,o){const a=new jt;a.position.set(r,o,0);const l=new X(new gt(n,s,n),t);return l.position.y=-s/2,l.castShadow=!0,a.add(l),a}update(t,e,n){if(this.state==="dead"){this.deadT+=t;const a=Math.min(1,this.deadT/.5);this.g.rotation.x=-a*Math.PI/2*(this.fallDir||1),this.g.rotation.z=a*(this.fallDir||1)*.8,this.pos.y-=(this.flying?3:0)*t,this.g.position.y=this.pos.y;return}if(this.flying){this.wobPhase+=t*2.2;const a=e.x-this.pos.x,l=e.z-this.pos.z,c=Math.hypot(a,l)||1;this.pos.y<1.1?this.pos.y+=t*1.7:c<1.8&&this.pos.y>.1?this.pos.y-=t*1.4:this.pos.y+=(this.alt-this.pos.y)*Math.min(1,t*1.2),this.pos.x+=a/c*this.type.speed*t,this.pos.z+=l/c*this.type.speed*t,this.g.position.set(this.pos.x+Math.sin(this.wobPhase)*.18,this.pos.y,this.pos.z+Math.cos(this.wobPhase*.8)*.18),this.g.rotation.y=Math.atan2(a,l),this._animate(t,this.type.speed),this.g.position.y=this.pos.y,c<1.35&&this.pos.y<1&&this.attackT<=0&&(this.attackT=1.5,n(this.type.dmg,this.pos));return}const s=e.x-this.pos.x,r=e.z-this.pos.z,o=Math.hypot(s,r);if(this.state==="idle"&&o<26&&(this.state="chase"),this.state==="idle"){const a=this.wanderTarget.x-this.pos.x,l=this.wanderTarget.z-this.pos.z;Math.hypot(a,l)<1?this.wanderTarget.copy(this.pos).add(new P((Math.random()-.5)*14,0,(Math.random()-.5)*14)):this._move(s,r,.9,t)}else o>1.6?this._move(s,r,this.type.speed*(this.typeId==="runner"?1+Math.sin(this.animT*3)*.25:1),t):(this.g.rotation.y=Math.atan2(s,r),this.attackT-=t,this.attackAnim=Math.max(0,this.attackAnim-t*3),this.attackT<=0&&(this.attackT=.95+Math.random()*.35,this.attackAnim=1,n(this.type.dmg*(.8+Math.random()*.4),this.pos)),this._animate(t,1.5));this._animate(t,o>1.6?this.type.speed:.5),this.knock.lengthSq()>.001&&(this.pos.addScaledVector(this.knock,t),this.knock.multiplyScalar(Math.max(0,1-6*t)),this.resolve(this.pos,.5*this.scale)),this.g.position.copy(this.pos),this.g.position.y=0}_move(t,e,n,s){const r=Math.hypot(t,e)||1;this.pos.x+=t/r*n*s,this.pos.z+=e/r*n*s,this.pos.y=0,this.resolve(this.pos,.5*this.scale),this.g.rotation.y=Math.atan2(t,e)}_animate(t,e){this.animT+=t*(2+e*1.6);const n=Math.sin(this.animT*2.4),s=-1.2+Math.sin(this.animT*1.1)*.25-this.attackAnim*.5;this.armL.rotation.x=s,this.armR.rotation.x=s+.3,this.armL.rotation.z=-.25+Math.sin(this.animT*1.1)*.15,this.armR.rotation.z=.25-Math.sin(this.animT*1.1)*.15,this.legL.rotation.x=n*.55,this.legR.rotation.x=-n*.55,this.g.position.y=Math.abs(Math.sin(this.animT*2.4))*.08,this.head.rotation.z=Math.sin(this.animT*.7)*.12}hitTest(t,e,n,s,r,o,a){const l=this.scale,c=this.pos.x,h=this.pos.z,u=this.pos.y,f=u+.15*l,p=u+2.35*l,g=p-f,v=1,m=g*g,d=s*(c-t)+r*(f-e)+o*(h-n);let E;Math.abs(g*r)<1e-6?E=d:E=m*d/(v*m),E=Math.max(0,Math.min(E,a));const w=t+s*E,M=e+r*E,z=n+o*E,R=pn.clamp(M,f,p),A=(w-c)*(w-c)+(M-R)*(M-R)+(z-h)*(z-h),D=.55*l;return A<D*D?{t:E,point:new P(w,M,z),head:M>u+1.7*l}:null}takeDamage(t,e,n){return this.state==="dead"?!1:(this.hp-=t,this.knock.addScaledVector(n,2.2),this.hp<=0?(this.state="dead",this.deadT=0,this.fallDir=Math.random()<.5?-1:1,this.flying&&(this.balloon&&(this.balloon.visible=!1),audio.pop()),!0):!1)}dispose(t){t.remove(this.g)}}class _0{constructor(t,e){this.scene=t,this.world=e,this.zombies=[],this.queue=[],this.spawnT=0,this.spawnInterval=1.5,this.wave=0,this.waveStarted=!1,this.growlT=1,this.onGrowl=null}get aliveCount(){let t=0;for(const e of this.zombies)e.state!=="dead"&&t++;return t}hasAliveBoss(){return this.zombies.some(t=>t.typeId==="boss"&&t.state!=="dead")}summonBoss(){if(this.hasAliveBoss())return!1;const t=new vr(this.scene,this.world.spawnZombiePos(),"boss",this.world.resolveCollision);return this.zombies.push(t),!0}startWave(t){this.wave=t,this.waveStarted=!0;const e=t===1?4:Math.min(6+t*3,42);this.queue=[],t===10&&!this.hasAliveBoss()&&this.queue.push("boss");for(let n=0;n<e;n++)this.queue.push(this.pickType(t));this.spawnInterval=Math.max(.6,2.2-t*.15),this.spawnT=.5}get waveCleared(){return this.waveStarted&&this.queue.length===0&&this.aliveCount===0}pickType(t){const e=Math.random();return t>=3&&e<Math.min(.3,.08+t*.03)?"brute":t>=5&&e<.3?"flyer":t>=2&&e<.35+t*.05?"runner":"walker"}addAmbient(t){for(let e=0;e<t;e++){const n=new vr(this.scene,this.world.spawnZombiePos(),"walker",this.world.resolveCollision);n.state="idle",this.zombies.push(n)}}update(t,e,n){if(this.queue.length>0&&(this.spawnT-=t,this.spawnT<=0)){this.spawnT=this.spawnInterval*(.7+Math.random()*.6);const s=this.queue.shift(),r=new vr(this.scene,this.world.spawnZombiePos(),s,this.world.resolveCollision);this.zombies.push(r)}if(this.growlT-=t,this.growlT<=0&&this.onGrowl){let s=null,r=30;for(const o of this.zombies){if(o.state==="dead")continue;const a=o.pos.distanceTo(e);a<r&&(r=a,s=o)}s&&(this.onGrowl(r),this.growlT=2+Math.random()*3)}for(let s=this.zombies.length-1;s>=0;s--){const r=this.zombies[s];r.update(t,e,n),r.state==="dead"&&r.deadT>4&&(r.dispose(this.scene),this.zombies.splice(s,1))}}dropAt(t){if(Math.random()<.25){const e=new vr(this.scene,t,Math.random()<.5?"walker":"runner",this.world.resolveCollision);return this.zombies.push(e),!0}return!1}}class x0{constructor(t,e=180){this.scene=t,this.pool=[],this.geo=new gt(1,1,1);for(let n=0;n<e;n++){const s=new X(this.geo,new Fe({color:16777215}));s.visible=!1,t.add(s),this.pool.push({mesh:s,vel:new P,rot:new P,life:0,maxLife:1,grav:0,active:!1})}}spawnBurst(t,{color:e=0,count:n=6,speed:s=2,up:r=2,size:o=.07,grav:a=-14,life:l=.7,dir:c=null,spread:h=1}={}){let u=0;for(const f of this.pool){if(u>=n)break;if(f.active)continue;f.active=!0,f.mesh.visible=!0,f.mesh.position.copy(t),f.mesh.position.x+=(Math.random()-.5)*.15,f.mesh.position.y+=(Math.random()-.5)*.15,f.mesh.position.z+=(Math.random()-.5)*.15;const p=s*(.4+Math.random()*.8);c?(f.vel.copy(c).multiplyScalar(p*.8),f.vel.x+=(Math.random()-.5)*p*h,f.vel.y+=(Math.random()-.5)*p*h,f.vel.z+=(Math.random()-.5)*p*h):f.vel.set((Math.random()-.5)*p*2,Math.random()*r,(Math.random()-.5)*p*2);const g=o*(.5+Math.random());f.mesh.scale.set(g,g,g),f.rot.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),f.life=l*(.6+Math.random()*.6),f.maxLife=f.life,f.grav=a,f.mesh.material.color.setHex(e),f.mesh.material.opacity=1,f.mesh.material.transparent=!0,u++}}update(t){for(const e of this.pool){if(!e.active)continue;if(e.life-=t,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vel.y+=e.grav*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.position.y<.05&&(e.mesh.position.y=.05,e.vel.y*=-.3,e.vel.x*=.7,e.vel.z*=.7),e.mesh.rotation.x+=e.rot.x*t,e.mesh.rotation.y+=e.rot.y*t,e.mesh.rotation.z+=e.rot.z*t;const n=e.life/e.maxLife;n<.4&&(e.mesh.material.opacity=n/.4)}}}class v0{constructor(){this.ctx=null,this.master=null,this.noiseBuf=null}unlock(){if(!this.ctx){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.4,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}_ready(){return this.ctx?this.ctx:null}_noise({lp:t=1200,dur:e=.15,gain:n=.6,hp:s=0}={}){const r=this._ready();if(!r)return;const o=r.currentTime,a=r.createBufferSource();a.buffer=this.noiseBuf,a.playbackRate.value=.8+Math.random()*.4;const l=r.createGain();l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(.001,o+e);const c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=t,c.Q.value=.8;let h=a;if(h.connect(c),h=c,s>0){const u=r.createBiquadFilter();u.type="highpass",u.frequency.value=s,h.connect(u),h=u}h.connect(l),l.connect(this.master),a.start(o),a.stop(o+e+.05)}_osc({type:t="sine",f0:e=200,f1:n=80,dur:s=.15,gain:r=.4}={}){const o=this._ready();if(!o)return;const a=o.currentTime,l=o.createOscillator();l.type=t,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(1,n),a+s);const c=o.createGain();c.gain.setValueAtTime(r,a),c.gain.exponentialRampToValueAtTime(.001,a+s),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+s+.05)}shoot(t){switch(t){case"pistol":this._noise({lp:2200,dur:.14,gain:.7,hp:300}),this._osc({type:"square",f0:180,f1:50,dur:.09,gain:.35});break;case"shotgun":this._noise({lp:950,dur:.32,gain:1}),this._osc({type:"square",f0:110,f1:35,dur:.18,gain:.5});break;case"rifle":this._noise({lp:1500,dur:.12,gain:.55,hp:200}),this._osc({type:"square",f0:150,f1:45,dur:.07,gain:.3});break;case"knife":this._noise({lp:600,dur:.18,gain:.25,hp:800});break;case"rocket":this._noise({lp:900,dur:.55,gain:.9,hp:80}),this._osc({type:"sawtooth",f0:80,f1:300,dur:.5,gain:.3});break;default:this._noise({lp:1400,dur:.12,gain:.5})}}explosion(){this._noise({lp:480,dur:.8,gain:1.3}),this._osc({type:"sine",f0:130,f1:28,dur:.7,gain:.9}),this._osc({type:"square",f0:75,f1:22,dur:.55,gain:.4})}powerup(){[440,587,784,1046].forEach((e,n)=>setTimeout(()=>this._osc({type:"square",f0:e,f1:e,dur:.12,gain:.3}),n*110))}bossRoar(){const t=this._ready();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(48,e),n.frequency.linearRampToValueAtTime(30,e+1.4);const s=t.createOscillator();s.frequency.value=5.5;const r=t.createGain();r.gain.value=10,s.connect(r),r.connect(n.frequency);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=240;const a=t.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.6,e+.2),a.gain.exponentialRampToValueAtTime(.001,e+1.5),n.connect(o),o.connect(a),a.connect(this.master),n.start(e),s.start(e),n.stop(e+1.6),s.stop(e+1.6),this._noise({lp:300,dur:1.2,gain:.7})}jet(t){const e=this._ready();if(e){if(!this.jetSrc){this.jetSrc=e.createBufferSource(),this.jetSrc.buffer=this.noiseBuf,this.jetSrc.loop=!0,this.jetSrc.playbackRate.value=.5;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=520,this.jetGain=e.createGain(),this.jetGain.gain.value=0,this.jetSrc.connect(n),n.connect(this.jetGain),this.jetGain.connect(this.master),this.jetSrc.start()}this.jetGain.gain.setTargetAtTime(t?.3:0,e.currentTime,.06)}}engine(t){const e=this._ready();if(e){if(!this.engSrc){this.engSrc=e.createBufferSource(),this.engSrc.buffer=this.noiseBuf,this.engSrc.loop=!0,this.engSrc.playbackRate.value=.35;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=200,n.Q.value=2;const s=e.createOscillator();s.frequency.value=23;const r=e.createGain();r.gain.value=80,s.connect(r),r.connect(n.frequency),s.start(),this.engGain=e.createGain(),this.engGain.gain.value=0,this.engSrc.connect(n),n.connect(this.engGain),this.engGain.connect(this.master),this.engSrc.start()}this.engGain.gain.setTargetAtTime(t?.24:0,e.currentTime,.08)}}stampede(){for(let t=0;t<8;t++)setTimeout(()=>this._osc({type:"square",f0:650+Math.random()*600,f1:1400+Math.random()*700,dur:.11,gain:.1}),t*75);this._noise({lp:900,dur:1.2,gain:.5}),setTimeout(()=>this._noise({lp:400,dur:.9,gain:.45}),250)}empty(){this._osc({type:"square",f0:240,f1:180,dur:.045,gain:.25})}click(){this._osc({type:"square",f0:600,f1:400,dur:.05,gain:.2})}pop(){this._ready()&&(this._osc({type:"sine",f0:300,f1:900,dur:.08,gain:.35}),this._noise({dur:.06,gain:.3,lp:6e3}))}punch(){this._osc({type:"sine",f0:150,f1:55,dur:.13,gain:.55}),this._noise({dur:.08,gain:.35,lp:2500}),this._osc({type:"square",f0:1100,f1:400,dur:.06,gain:.12})}reloadStart(){this._osc({type:"square",f0:700,f1:500,dur:.04,gain:.2}),setTimeout(()=>this._osc({type:"square",f0:500,f1:400,dur:.04,gain:.2}),180)}reloadEnd(){this._osc({type:"square",f0:420,f1:620,dur:.06,gain:.3})}hurt(){this._noise({lp:220,dur:.25,gain:.8}),this._osc({type:"sine",f0:95,f1:40,dur:.3,gain:.6})}tvStatic(){const t=this._ready();if(!t)return;const e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf,n.playbackRate.value=1.4;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=950,s.Q.value=.6;const r=t.createGain();r.gain.setValueAtTime(.22,e),r.gain.setValueAtTime(.1,e+.35),r.gain.setValueAtTime(.2,e+.7),r.gain.exponentialRampToValueAtTime(.001,e+1.4),n.connect(s),s.connect(r),r.connect(this.master),n.start(e,Math.random()*.5,1.4),n.stop(e+1.45)}zombieHit(){this._noise({lp:700,dur:.09,gain:.35,hp:200}),this._osc({type:"triangle",f0:320,f1:110,dur:.1,gain:.3})}zombieDeath(){this._osc({type:"sawtooth",f0:130,f1:28,dur:.55,gain:.3}),this._noise({lp:500,dur:.3,gain:.3})}growl(){const t=this._ready();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(55+Math.random()*20,e),n.frequency.linearRampToValueAtTime(40,e+.7);const s=t.createOscillator();s.frequency.value=7+Math.random()*4;const r=t.createGain();r.gain.value=14,s.connect(r),r.connect(n.frequency);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=320;const a=t.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.22,e+.12),a.gain.exponentialRampToValueAtTime(.001,e+.75),n.connect(o),o.connect(a),a.connect(this.master),n.start(e),s.start(e),n.stop(e+.8),s.stop(e+.8)}pickup(){this._osc({type:"sine",f0:520,f1:780,dur:.09,gain:.3}),setTimeout(()=>this._osc({type:"sine",f0:780,f1:1100,dur:.12,gain:.3}),90)}switch(){this._osc({type:"square",f0:350,f1:250,dur:.05,gain:.2})}waveHorn(){this._osc({type:"sawtooth",f0:90,f1:90,dur:.6,gain:.25}),this._osc({type:"sawtooth",f0:135,f1:135,dur:.6,gain:.18})}cannon(){this._ready()&&(this._noise({lp:500,dur:.5,gain:.5}),this._osc({type:"sine",f0:70,f1:30,dur:.45,gain:.5}))}bossKilled(){this.explosion(),[220,196,164,110].forEach((e,n)=>setTimeout(()=>this._osc({type:"sawtooth",f0:e,f1:e*.5,dur:.3,gain:.4}),n*180))}}const M0=140,S0=60/M0/2,Hn=S0,Dl=256,y0={E:41.2,C:65.41,G:49,B:61.74},E0={E:[82.41,123.47,164.81],C:[130.81,196,261.63],G:[98,146.83,196],B:[123.47,185,246.94]},w0=["E","E","C","G","E","E","C","G"],Il=["E","G","C","B","E","G","C","B"],T0=["G","G","C","B","G","G","C","B"],b0=[w0,Il,T0,Il];class A0{constructor(t){this.fx=t,this.timer=null,this.slot=0,this.nextT=0,this.muted=!1,this.gain=null,this.shaper=null,this.comp=null}get playing(){return this.timer!==null}start(){const t=this.fx._ready();if(!t||this.timer)return;const e=256,n=new Float32Array(e);for(let s=0;s<e;s++){const r=s/(e-1)*2-1;n[s]=Math.tanh(6*r)}this.shaper=t.createWaveShaper(),this.shaper.curve=n,this.shaper.oversample="2x",this.gain=t.createGain(),this.gain.gain.value=this.muted?0:.85,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=8,this.comp.ratio.value=6,this.comp.attack.value=.005,this.comp.release.value=.12,this.gain.connect(this.comp),this.comp.connect(this.fx.master),this.slot=0,this.nextT=t.currentTime+.1,this.timer=setInterval(()=>this._tick(),25)}stop(){this.timer&&(clearInterval(this.timer),this.timer=null,this.gain&&this.gain.gain.setTargetAtTime(0,this.fx.ctx.currentTime,.08))}setMuted(t){this.muted=t,this.gain&&this.gain.gain.setTargetAtTime(t?0:.85,this.fx.ctx.currentTime,.05)}_tick(){const t=this.fx.ctx;for(;this.nextT<t.currentTime+.18;)this._slot(this.slot%Dl,this.nextT),this.nextT+=Hn,this.slot++}_slot(t,e){const n=t/8|0,s=t%8,r=n/8|0,o=r%2===1,a=b0[r][n%8],l=n===Dl/8-1;if((s===0||s===3||s===4)&&this.kick(e,s===0),(s===2||s===6)&&this.snare(e,!0),l&&s>=6)for(let c=0;c<4;c++)this.snare(e+c/2*Hn,!1);this.hat(e,!o&&s%2===0),this.bass(e,y0[a],s%2===0),this.guitar(e,E0[a],s%2===1)}kick(t,e=!1){const n=this.fx.ctx,s=n.createOscillator();s.type="sine",s.frequency.setValueAtTime(130,t),s.frequency.exponentialRampToValueAtTime(38,t+.16);const r=n.createGain();r.gain.setValueAtTime(e?1.1:.8,t),r.gain.exponentialRampToValueAtTime(.001,t+.2),s.connect(r),r.connect(this.gain),s.start(t),s.stop(t+.22)}snare(t,e=!1){const n=this.fx.ctx,s=n.createBufferSource();s.buffer=this.fx.noiseBuf,s.playbackRate.value=1.2+Math.random()*.2;const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=1900,r.Q.value=.8;const o=n.createGain();o.gain.setValueAtTime(e?.85:.5,t),o.gain.exponentialRampToValueAtTime(.001,t+.13),s.connect(r),r.connect(o),o.connect(this.gain),s.start(t,Math.random()*.5,.15);const a=n.createOscillator();a.type="triangle",a.frequency.setValueAtTime(210,t),a.frequency.exponentialRampToValueAtTime(130,t+.08);const l=n.createGain();l.gain.setValueAtTime(.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.09),a.connect(l),l.connect(this.gain),a.start(t),a.stop(t+.1)}hat(t,e=!1){const n=this.fx.ctx,s=n.createBufferSource();s.buffer=this.fx.noiseBuf,s.playbackRate.value=1.5;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=7500;const o=n.createGain(),a=e?.3:.16;o.gain.setValueAtTime(a,t),o.gain.exponentialRampToValueAtTime(.001,t+(e?.16:.035)),s.connect(r),r.connect(o),o.connect(this.gain),s.start(t,Math.random()*.5,e?.18:.05)}bass(t,e,n){const s=this.fx.ctx,r=s.createOscillator();r.type="square",r.frequency.value=e;const o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(500,t),o.frequency.exponentialRampToValueAtTime(220,t+Hn);const a=s.createGain(),l=n?.5:.34;a.gain.setValueAtTime(l,t),a.gain.setValueAtTime(l,t+Hn*.75),a.gain.exponentialRampToValueAtTime(.001,t+Hn*.92),r.connect(o),o.connect(a),a.connect(this.gain),r.start(t),r.stop(t+Hn)}guitar(t,e,n){const s=this.fx.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=n?950:2800;const o=s.createGain(),a=n?.16:.26;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(a,t+.008),o.gain.setValueAtTime(a,t+Hn*.7),o.gain.exponentialRampToValueAtTime(.001,t+Hn*.95),r.connect(this.shaper),this.shaper.connect(o),o.connect(this.gain);for(const l of e)for(const c of[-8,8]){const h=s.createOscillator();h.type="sawtooth",h.frequency.value=l,h.detune.value=c,h.connect(r),h.start(t),h.stop(t+Hn)}}}class R0{constructor(t,e,n,s){this.resolve=s,this.pos=new P(e,0,n),this.yaw=0,this.speed=0,this.lean=0,this.riding=!1,this.maxSpeed=15,s(this.pos,.55);const r=this.g=new jt,o=new ht({color:5002808,roughness:.7,metalness:.3}),a=new ht({color:2303519,roughness:.8,metalness:.4}),l=new ht({color:1315860,roughness:1}),c=new ht({color:16773836,emissive:16771504,emissiveIntensity:2.2}),h=(E,w,M,z,R,A,D,y=0,_=0)=>{const C=new X(new gt(E,w,M),z);return C.position.set(R,A,D),C.rotation.x=y,C.rotation.z=_,C.castShadow=!0,r.add(C),C},u=new Me(.34,.34,.14,14);u.rotateZ(Math.PI/2),this.wheelF=new X(u,l),this.wheelF.position.set(0,.34,.62),this.wheelF.castShadow=!0,this.wheelR=new X(u,l),this.wheelR.position.set(0,.34,-.62),this.wheelR.castShadow=!0;const f=new Me(.09,.09,.16,8);f.rotateZ(Math.PI/2);for(const E of[this.wheelF,this.wheelR]){const w=new X(f,a);w.position.copy(E.position),r.add(w),r.add(E)}h(.18,.06,.6,o,0,.62,.62,-.15,0),h(.2,.06,.62,o,0,.62,-.62,.15,0),h(.2,.16,.95,a,0,.55,-.05),h(.26,.2,.5,o,0,.78,.16),h(.22,.09,.5,a,0,.85,-.3),h(.18,.05,.34,a,0,.93,-.62);const p=new X(new Me(.22,.22,.09,12),l);p.rotation.x=Math.PI/2,p.position.set(0,.98,-.82),r.add(p);const g=new X(new Me(.025,.025,.56,8),a);g.rotation.z=Math.PI/2,g.position.set(0,1.05,.52),r.add(g),h(.04,.42,.04,a,-.14,.8,.6),h(.04,.42,.04,a,.14,.8,.6);const v=new X(new Me(.035,.045,.6,8),a);v.rotation.x=Math.PI/2,v.position.set(.14,.45,-.25),r.add(v);const m=new X(new Bt(.07,10,10),c);m.position.set(0,.82,.68),r.add(m);const d=new ai(16771504,3,10,2);d.position.set(0,.82,.75),r.add(d),r.position.copy(this.pos),t.add(r)}forward(t=new P){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(t=new P){const e=this.forward();return t.set(-e.z,0,e.x)}setRiding(t){t!==this.riding&&(this.riding=t,t||(this.speed=0,this.lean=0))}update(t,e,n){if(!this.riding)this.lean*=Math.max(0,1-t*4),this.speed=0;else{const r=e.KeyW?1:0,o=e.KeyS?1:0,a=(e.KeyD?1:0)-(e.KeyA?1:0);r?this.speed+=13*t:o?this.speed-=Math.sign(this.speed)*26*t:this.speed-=Math.sign(this.speed)*5*t,!r&&!o&&Math.abs(this.speed)<.3&&(this.speed=0),this.speed=pn.clamp(this.speed,-4,this.maxSpeed);const l=-a*2.7*Math.min(1,Math.abs(this.speed)/6)*Math.sign(this.speed||1)*t;this.yaw+=l,this.lean+=(-a*Math.min(1,Math.abs(this.speed)/8)*.22-this.lean)*Math.min(1,t*10),this.pos.addScaledVector(this.forward(),this.speed*t);const c=Math.hypot(this.pos.x,this.pos.z);c>164&&(this.pos.x*=164/c,this.pos.z*=164/c),n(this.pos,.55)}this.g.position.copy(this.pos),this.g.rotation.set(0,this.yaw,this.lean);const s=this.speed*t/.34;this.wheelF.rotation.x-=s,this.wheelR.rotation.x-=s}}class C0{constructor(t,e,n,s){this.pos=new P(e,0,n),s(this.pos,1),this.yaw=Math.random()*Math.PI*2,this.speed=0,this.lean=0,this.riding=!1,this.aimYaw=0,this.cool=0,this.recoil=0,this.maxSpeed=9;const r=this.g=new jt,o=new ht({color:4015158,roughness:.85,metalness:.2}),a=new ht({color:2106140,roughness:.9}),l=new X(new gt(2,.4,3.2),o);l.position.y=.45,l.castShadow=!0,r.add(l);for(const A of[-1,1]){const D=new X(new gt(.42,.6,3.5),a);D.position.set(A*1.15,.45,0),D.castShadow=!0,r.add(D)}const c=new X(new Bt(.1,8,8),new ht({color:546,emissive:16771488,emissiveIntensity:1.6}));c.position.set(0,.7,-1.55),r.add(c);const h=this.ball=new jt;h.position.set(0,1.55,.1),r.add(h);const u=new X(new Bt(1.15,24,18),new ht({color:10475752,transparent:!0,opacity:.3,roughness:.12,metalness:.05,side:an}));u.castShadow=!1,h.add(u);const f=new X(new Bt(1.155,14,10),new Fe({color:3041912,wireframe:!0,transparent:!0,opacity:.55}));h.add(f),this.ham=new jt;const p=new ht({color:14262363,roughness:.9}),g=new ht({color:15243930,roughness:.8}),v=new X(new Bt(.42,10,10),p);v.scale.set(1,.9,1.2),v.position.y=-.25,this.ham.add(v);const m=new X(new Bt(.3,10,10),p);m.position.set(0,.15,.38),this.ham.add(m);for(const A of[-1,1]){const D=new X(new Bt(.11,8,8),g);D.position.set(A*.18,.4,.3),this.ham.add(D)}const d=new X(new Bt(.06,6,6),g);d.position.set(0,.1,.66),this.ham.add(d),this.ham.position.set(0,-.1,.1),h.add(this.ham);const E=new X(new gt(.55,.16,.55),new ht({color:3352863,roughness:1}));E.position.set(0,2.52,.38),E.castShadow=!0,r.add(E);const w=new X(new gt(.5,.42,.14),new ht({color:3352863,roughness:1}));w.position.set(0,2.8,.72),r.add(w),this.turret=new jt,this.turret.position.set(0,2.55,.05),r.add(this.turret);const M=new X(new gt(.78,.42,.95),o);M.position.y=.18,M.castShadow=!0,this.turret.add(M);const z=this.barrel=new X(new Me(.12,.14,1.9,10),a);z.rotation.x=Math.PI/2,z.position.set(0,.2,-1.6),z.castShadow=!0,this.turret.add(z);const R=new X(new Me(.17,.17,.22,10),o);R.rotation.x=Math.PI/2,R.position.set(0,.2,-2.5),this.turret.add(R),r.position.copy(this.pos),t.add(r)}forward(t){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t}right(t){return t.set(-Math.cos(this.yaw),0,Math.sin(this.yaw)),t}setRiding(t){this.riding=t}update(t,e,n){if(this.cool=Math.max(0,this.cool-t),this.recoil=Math.max(0,this.recoil-t*3.2),this.barrel.position.z=-1.6-this.recoil*.3,this.riding){const s=(e.KeyW?1:0)-(e.KeyS?1:0);this.speed+=s*5.5*t,s===0&&(this.speed*=Math.max(0,1-2.2*t)),this.speed=pn.clamp(this.speed,-2.5,this.maxSpeed);const r=(e.KeyD?1:0)-(e.KeyA?1:0);this.yaw-=r*1.3*t*pn.clamp(Math.abs(this.speed)/3,0,1)*Math.sign(this.speed||1),this.lean+=(r*.05*Math.min(1,Math.abs(this.speed)/5)-this.lean)*Math.min(1,t*5)}else this.speed*=Math.max(0,1-4*t),this.lean*=Math.max(0,1-5*t);this.forward(Ul),this.pos.addScaledVector(Ul,this.speed*t),this.pos.x=pn.clamp(this.pos.x,-164,164),this.pos.z=pn.clamp(this.pos.z,-164,164),n(this.pos,1),this.g.position.copy(this.pos),this.g.rotation.y=this.yaw,this.g.rotation.z=-this.lean,this.ball.rotation.z=-this.lean*1.4,this.ball.rotation.x=-Math.min(.15,Math.abs(this.speed)*.012),this.ham.rotation.y+=t*(1.5+Math.abs(this.speed)*.5),this.turret.rotation.y=this.aimYaw-this.yaw}}const Ul=new P;class P0{constructor(t,e,n,s){this.pos=new P(e,0,n),s(this.pos,1.15),this.vel=new P,this.speed=0,this.yaw=0,this.lean=0,this.riding=!1,this.maxSpeed=11;const r=this.g=new jt;this.ball=new jt,this.ball.position.y=1.25,r.add(this.ball);const o=new X(new Bt(1.25,24,18),new ht({color:10871018,transparent:!0,opacity:.26,roughness:.1,metalness:.05,side:an}));this.ball.add(o),this.ribs=new X(new Bt(1.255,14,10),new Fe({color:3041912,wireframe:!0,transparent:!0,opacity:.5})),this.ball.add(this.ribs),this.ham=new jt;const a=new ht({color:14262363,roughness:.9}),l=new ht({color:15243930,roughness:.8}),c=new X(new Bt(.45,10,10),a);c.scale.set(1,.9,1.2),c.position.y=-.3,this.ham.add(c);const h=new X(new Bt(.32,10,10),a);h.position.set(0,.12,.4),this.ham.add(h);for(const f of[-1,1]){const p=new X(new Bt(.12,8,8),l);p.position.set(f*.19,.38,.32),this.ham.add(p)}const u=new X(new Bt(.06,6,6),l);u.position.set(0,.06,.7),this.ham.add(u),this.ham.position.y=-.15,this.ball.add(this.ham),r.position.copy(this.pos),t.add(r)}forward(t){return this.vel.lengthSq()>.01?t.copy(this.vel).normalize():t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t}right(t){return t.set(-Math.cos(this.yaw),0,Math.sin(this.yaw)),t}setRiding(t){this.riding=t}update(t,e,n){if(this.riding){const s=Math.sin(this.inputYaw||0),r=Math.cos(this.inputYaw||0),o=(e.KeyD?1:0)-(e.KeyA?1:0),a=(e.KeyW?1:0)-(e.KeyS?1:0);let l=-s*a+r*o,c=-r*a-s*o;const h=Math.hypot(l,c);h>.01&&(l/=h,c/=h,this.vel.x+=l*16*t,this.vel.z+=c*16*t,this.yaw=Math.atan2(-l,-c));const u=Math.max(0,1-.9*t);this.vel.multiplyScalar(u)}else this.vel.multiplyScalar(Math.max(0,1-2.5*t));this.speed=this.vel.length(),this.speed>this.maxSpeed&&this.vel.multiplyScalar(this.maxSpeed/this.speed),this.pos.addScaledVector(this.vel,t),this.pos.x=pn.clamp(this.pos.x,-164,164),this.pos.z=pn.clamp(this.pos.z,-164,164),n(this.pos,1.15),this.lean+=((-this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw))*.02-this.lean)*Math.min(1,t*4),this.g.position.copy(this.pos),this.g.rotation.y=this.yaw,this.ball.rotation.x=-this.vel.z*.02-this.speed*.05,this.ball.rotation.z=this.lean,this.ham.rotation.y+=t*(1.2+this.speed*.6)}}const In=new Zm({antialias:!0});In.setSize(innerWidth,innerHeight);In.setPixelRatio(Math.min(devicePixelRatio,2));In.shadowMap.enabled=!0;In.shadowMap.type=Yl;document.body.appendChild(In.domElement);const pe=new jm;pe.background=new Jt(7235161);pe.fog=new So(7235161,60,260);const Xt=new un(72,innerWidth/innerHeight,.05,400);pe.add(Xt);const L0=new Jm(10129277,3025700,1.1);pe.add(L0);const En=new e0(16757611,1.6);En.position.set(80,60,-120);En.castShadow=!0;En.shadow.mapSize.set(2048,2048);En.shadow.camera.left=-70;En.shadow.camera.right=70;En.shadow.camera.top=70;En.shadow.camera.bottom=-70;En.shadow.camera.far=400;En.target.position.set(0,0,0);pe.add(En,En.target);const D0=new X(new Bt(350,24,16),new Fe({color:7235161,side:Ke,vertexColors:!1}));pe.add(D0);const Ac=new Fe({color:16734746});for(let i=0;i<6;i++){const t=i/6*Math.PI*2+.4,e=new X(new Bt(6+Math.random()*6,8,8),Ac.clone());e.position.set(Math.cos(t)*160,20+Math.random()*25,Math.sin(t)*160),e.userData.phase=Math.random()*10,pe.add(e)}const Ce=l0(pe),Rc=h0(pe,Ce.buildings);let Re=null,bn=0,ao=0,Ri=null;const Ar=[];let xa=null;const ie=Ce.secret;let rn="none",Ir=0,Ls=0;const k=new f0(Xt),Cc="hammy";let Pe=null;const le=new _0(pe,Ce),He=new x0(pe),Ct=new v0;ie!=null&&ie.tv&&(ie.tv.onChannel=()=>{rn!=="none"&&Ct.tvStatic()});const hs=new A0(Ct),Se={},ri=["pistol","shotgun","rifle","knife","rocket"];let Ye="pistol";for(const i of ri)Se[i]=new m0(ro[i],Xt),Se[i].onReloadEnd=()=>Ct.reloadEnd();Se.rocket.locked=!0;Se[Ye].setVisibility(!0);const Ys=new ai(16752704,0,8,2);Ys.position.set(.3,-.2,-.7);Xt.add(Ys);let be="menu",Rn=0,Pc=0,yn=parseInt(localStorage.getItem("hamsterHigh")||"0",10)||0;const I0=yn;let Nl=!1,Gs=!1,fe=null,Fl=!1,qt=null,Ol=!1,ce=null,zl=!1;function kr(){return fe&&fe.riding?fe:qt&&qt.riding?qt:ce&&ce.riding?ce:null}let oo=!0;const Ds=[];function U0(){Pe&&pe.remove(Pe.g),Pe=new bc(pe,qs[Cc].colors),Gs&&Pe.setPack(!0)}U0();let Rr=0,Rs=0,Ns=null;const pi=["FIRST-PERSON","OPTICS","OVER-THE-SHOULDER"];let he=0,Fs=0;const ts={};let To=!1,Ur=!1,Hs=!1;addEventListener("keydown",i=>{if(ts[i.code]=!0,i.code.startsWith("Arrow")&&i.preventDefault(),(i.key==="?"||i.code==="Slash"&&i.shiftKey)&&pg(),be==="menu"){(i.code==="Space"||i.code==="Enter")&&Ao();return}if(be!=="playing")return;const t=Se[Ye];i.code==="KeyR"&&t.startReload()&&Ct.reloadStart(),i.code==="KeyQ"&&Bl(ri[(ri.indexOf(Ye)+1)%ri.length]),i.code==="KeyC"&&(he=(he+1)%pi.length,k.viewMode=he,Ct.switch(),$n.textContent=`VIEW: ${pi[he]} [C]`);for(let e=0;e<ri.length;e++)i.code===`Digit${e+1}`&&Bl(ri[e]);i.code==="KeyE"&&(J0(),H0()||W0()),i.code==="KeyF"&&(Ur||(Hs=!0),Ur=!0),i.code==="KeyJ"&&Sg(),i.code==="KeyM"&&hs.setMuted(!hs.muted),i.code==="KeyT"&&eg(),i.code==="KeyB"&&tg(),i.code==="KeyH"&&Mg(),i.code==="KeyG"&&Q0()});addEventListener("keyup",i=>{ts[i.code]=!1,i.code==="KeyF"&&(Ur=!1)});addEventListener("mousedown",i=>{if(be==="menu"||be==="paused"){Ao();return}if(be==="dead"){location.reload();return}i.button===0&&(To=!0,Hs=!0)});addEventListener("mouseup",i=>{i.button===0&&(To=!1,Hs=!1)});addEventListener("mousemove",i=>{document.pointerLockElement===In.domElement&&k.handleMouse(i.movementX,i.movementY)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===In.domElement?(be==="menu"?Ao():(be="playing",hs.start()),mg()):be==="playing"&&(be="paused",_g(),hs.stop())});addEventListener("resize",()=>{Xt.aspect=innerWidth/innerHeight,Xt.updateProjectionMatrix(),In.setSize(innerWidth,innerHeight)});function Bl(i){if(i!==Ye){if(Se[i].locked){Ct.empty();return}Se[Ye].setVisibility(!1),Ye=i,Se[Ye].setVisibility(!0),Se[Ye].cooldown=Math.max(Se[Ye].cooldown,.25),Se[Ye].reloading=!1,Ct.switch()}}function N0(i,t,e,n,s,r,o){let a=0,l=1/0;const c=[i,t,e],h=[n,s,r];for(let u=0;u<3;u++)if(Math.abs(h[u])<1e-8){if(c[u]<o.min[u]||c[u]>o.max[u])return null}else{let f=(o.min[u]-c[u])/h[u],p=(o.max[u]-c[u])/h[u];if(f>p&&([f,p]=[p,f]),a=Math.max(a,f),l=Math.min(l,p),a>l)return null}return a}const Gt=new P,F0=new P(0,1,0),Ge=new P,Ft=new P,Wn=new P;function O0(){if(kr())return;if(Re){X0();return}if(k.super){$0();return}const i=Se[Ye],t=i.def,e=i.tryFire();if(e==="wait"||e==="reloading")return;if(e==="empty"){Ct.empty(),i.startReload()&&Ct.reloadStart();return}if(e!=="fire")return;if(Ct.shoot(t.sfx),Ys.intensity=3,t.projectile){B0(t);return}if(t.melee){k.forward(Gt);let r=null,o=1e9;for(const a of le.zombies){if(a.state==="dead")continue;const l=a.pos.clone().add(new P(0,1,0)).sub(k.eyePos),c=l.length();c>2.4*a.scale+.6||l.normalize().dot(Gt)<.55||c<o&&(o=c,r=a)}if(r){const a=r.pos.clone().sub(k.eyePos).normalize(),l=k.eyePos.clone().addScaledVector(a,Math.min(o,1.2));He.spawnBurst(l,{color:5939258,count:8,speed:2.5,up:2,size:.08});const c=r.takeDamage(t.dmg,l,a);hi(c,!1)}return}Xt.getWorldDirection(Gt);const n=Xt.position.clone(),s=i.muzzleWorld.lengthSq()?i.muzzleWorld.clone():n;for(let r=0;r<t.pellets;r++){const o=t.spread*(k.moving?1.6:1)*(Fs>.5?.55:1),a=Gt.clone();a.x+=(Math.random()-.5)*o*2,a.y+=(Math.random()-.5)*o*2,a.z+=(Math.random()-.5)*o*2,a.normalize();let l=t.range;for(const g of Ce.colliders){const v=N0(n.x,n.y,n.z,a.x,a.y,a.z,g);v!==null&&v<l&&(l=v)}let c=null,h=1/0,u=null,f=!1;for(const g of le.zombies){if(g.state==="dead")continue;const v=g.hitTest(n.x,n.y,n.z,a.x,a.y,a.z,l);v&&v.t<h&&(h=v.t,c=g,u=v.point,f=v.head)}const p=a.clone().multiplyScalar(-.2).add(new P(.6,1.2,.3)).normalize();if(He.spawnBurst(s,{color:13148746,count:1,speed:2.2,up:1,size:.045,grav:-12,life:1.4,dir:p,spread:.6}),c){const g=1-Math.min(.5,h/t.range*.6),v=t.dmg*g*(f?2:1),m=a.clone();He.spawnBurst(u,{color:5939258,count:f?10:6,speed:2.5,up:2,size:.07,dir:a,spread:.5});const d=c.takeDamage(v,u,m);hi(d,f&&!d)}else if(l<t.range){const g=n.clone().addScaledVector(a,l);He.spawnBurst(g,{color:12298359,count:4,speed:2,up:1.5,size:.05})}}}function hi(i,t){i&&(Ct.zombieDeath(),Pc++),Ct.zombieHit(),vg(i,t)}const Os=[],Nr=[];for(let i=0;i<3;i++){const t=new ai(16748608,0,22,2);pe.add(t),Nr.push(t)}let kl=0;function z0(){const i=new jt,t=new ht({color:2895402,roughness:.5,metalness:.6}),e=new X(new Me(.07,.07,.45,8),t);i.add(e);const n=new X(new Ui(.07,.2,8),t);return n.position.y=.3,i.add(n),pe.add(i),i}function B0(i){Xt.getWorldDirection(Gt);const t=i.spread*(1-Fs*.4);Gt.x+=(Math.random()-.5)*t*2,Gt.y+=(Math.random()-.5)*t*2,Gt.z+=(Math.random()-.5)*t*2,Gt.normalize();const e=Se[Ye].muzzleWorld,n=e.lengthSq()>.01?e.clone():Xt.position.clone();n.addScaledVector(Gt,.6),Os.push({pos:n,vel:Gt.clone().multiplyScalar(i.speed),life:i.range/i.speed,dmg:i.dmg,splash:i.splash,mesh:z0()})}function k0(i,t,e){Ct.explosion(),He.spawnBurst(i,{color:16752688,count:16,speed:8,up:2,size:.15,grav:3,life:.7}),He.spawnBurst(i,{color:4868682,count:14,speed:4,up:3.5,size:.24,grav:-.5,life:1.1});const n=Nr[kl=(kl+1)%Nr.length];n.position.copy(i),n.intensity=10,i.distanceTo(Xt.position)<45&&(k.shake=Math.min(1.2,k.shake+.5));for(const s of le.zombies){if(s.state==="dead")continue;const r=s.pos.x-i.x,o=s.pos.z-i.z,a=Math.hypot(r,o,(i.y-s.pos.y-1.1*s.scale)*1.4),l=e+.8*s.scale;if(a<l){const c=Ge.set(r,0,o).normalize(),h=s.takeDamage(t*Math.max(.2,1-a/l),i,c);hi(h,!1)}}}function G0(){let i=!1;for(const t of Ce.buildings)k.pos.x>t.x-t.w/2-.25&&k.pos.x<t.x+t.w/2+.25&&k.pos.z>t.z-t.d/2-.25&&k.pos.z<t.z+t.d/2+.25&&k.vel.y<=.01&&k.pos.y<t.h+1.6&&k.pos.y>t.h-2.6&&(k.pos.y=t.h,k.vel.y=0,k.onGround=!0,i=!0);if(k.onGround&&k.pos.y>.05&&!i){let t=!1;for(const e of Ce.buildings)if(k.pos.x>e.x-e.w/2&&k.pos.x<e.x+e.w/2&&k.pos.z>e.z-e.d/2&&k.pos.z<e.z+e.d/2&&Math.abs(k.pos.y-e.h)<.7){t=!0;break}t||(k.onGround=!1)}}function H0(){if(!ie)return!1;const i=k.pos;if(rn==="none"){if(!kr()&&!Re&&i.y<3.5&&i.distanceTo(ie.door)<2.4)return rn="room",Ls=0,ie.shell.visible=!1,Ce.setSecretWalls(!0),i.copy(ie.entry),k.vel.y=0,k.yaw=ie.faceYaw,k.pitch=-.08,k.lookVelYaw=0,k.lookVelPitch=0,he!==0&&(Ir=he),he=0,k.viewMode=0,$n.textContent=`VIEW: ${pi[0]} [C]`,Ct.tvStatic(),oi.textContent="“Wait… is there a zombie apocalypse going on?”",oi.classList.remove("hidden"),!0}else if(rn==="room"){if(i.distanceTo(ie.balconyDoor)<1.8)return rn="balcony",i.copy(ie.balconyPos),k.vel.y=0,oi.textContent="“Careful up there. The little guys come in twos.”",!0;if(i.distanceTo(ie.entry)<1.8)return V0(),!0}else if(rn==="balcony"&&i.distanceTo(ie.balconyPos)<2.4)return rn="room",i.copy(ie.balconyDoor),k.vel.y=0,k.yaw=ie.faceYaw,k.pitch=-.08,k.lookVelYaw=0,k.lookVelPitch=0,he!==0&&(Ir=he),he=0,k.viewMode=0,$n.textContent=`VIEW: ${pi[0]} [C]`,oi.classList.add("hidden"),!0;return!1}function V0(){ie&&(rn="none",Ce.setSecretWalls(!1),ie.shell.visible=!0,k.pos.copy(ie.outside),k.vel.y=0,he=Ir,k.viewMode=Ir,$n.textContent=`VIEW: ${pi[he]} [C]`,oi.classList.add("hidden"))}function W0(){if(be!=="playing")return;if(Re){Re=null,k.vel.set(0,0,0),k.onGround=!0,Ct.click();return}let i=null,t=2.8;for(const e of Rc){const n=Math.hypot(e.pos.x-k.pos.x,e.pos.z-k.pos.z);Math.abs(e.pos.y-k.pos.y)<1.8&&n<t&&(t=n,i=e)}i&&(Re=i,fe&&fe.riding&&fe.setRiding(!1),qt&&qt.riding&&qt.setRiding(!1),ce&&ce.riding&&ce.setRiding(!1),Ct.powerup(),qe("TURRET MOUNTED!  [F / LMB] FIRE  •  [E] DROP"))}function X0(){const i=Re;if(!i.canFire())return;i.fire(),Ct.cannon(),k.shake=Math.min(1.2,k.shake+.12),Xt.getWorldDirection(Gt),i.muzzle(Ft);let t=-1,e=null;for(const r of le.zombies){if(r.state==="dead")continue;const o=r.pos.x-Ft.x,a=r.pos.y+r.scale-Ft.y,l=r.pos.z-Ft.z,c=o*Gt.x+a*Gt.y+l*Gt.z;if(c<0||c>150)continue;const h=o-Gt.x*c,u=a-Gt.y*c,f=l-Gt.z*c;Math.hypot(h,u,f)<.8*r.scale+.25&&(t<0||c<t)&&(t=c,e=r)}const n=120,s=new X(new gt(.16,.16,1),new Fe({color:16769184,blending:di,transparent:!0,opacity:.9,depthWrite:!1}));s.scale.set(1,1,.01),s.position.copy(Ft),s.lookAt(Ft.clone().add(Gt)),pe.add(s),Ar.push({pos:Ft.clone(),vel:new P,mesh:s,life:e?.5:.25,done:!0,dir:Gt.clone(),len:n,grow:0}),e&&(Wn.copy(Ft).addScaledVector(Gt,t),hi(e.takeDamage(60,Wn,Gt),!1),He.spawnBurst(Wn,{color:16762980,count:12,speed:3.5,up:1,size:.11,life:.45,grav:5}))}function q0(){bn>0||(bn=25,k.super=!0,k.speedMul=1.65,k.jetpack=!0,k.fuel=100,Pe&&Pe.setGold(!0),Pe&&Pe.setPack(!1),Ct.powerup(),Ct.bossRoar(),qe("GOLDEN SEED!  SUIT RIPPED — PURE GOLD HAMMY!  [25s]"),Pn.style.opacity=.35,he=2,$n.textContent=`VIEW: ${pi[he]} [C]`)}function Y0(){k.super=!1,k.speedMul=1,Pe&&Pe.setGold(!1),Pe&&Pe.setPack(!!k.jetpack),he===2&&(he=0,$n.textContent=`VIEW: ${pi[he]} [C]`),qe("GOLD FADES — SUIT BACK ON.")}function K0(i,t,e=1){if(Ri)return;const n=new jt,s=new X(new Bt(.3,12,10),new ht({color:16765514,emissive:11171584,emissiveIntensity:1.4,roughness:.3,metalness:.6}));s.scale.set(1,1.4,.85);const r=new X(new Bt(.55,10,8),new Fe({color:16765514,transparent:!0,opacity:.22,blending:di,depthWrite:!1})),o=new ai(16765514,6,9);n.add(s,r,o),n.position.set(i,e+1.2,t),pe.add(n),Ri=n}function $0(){if(ao>0)return;ao=.35,Ct.punch(),k.shake=Math.min(1.2,k.shake+.25),k.forward(Gt),Xt.getWorldDirection(Ge);let i=!1;for(const t of le.zombies){if(t.state==="dead")continue;const e=t.pos.x-k.pos.x,n=t.pos.y+1*t.scale-k.pos.y,s=t.pos.z-k.pos.z,r=Math.hypot(e,n,s);r>2.4||(e*Ge.x+n*Ge.y+s*Ge.z)/(r||1)<.45||(i=!0,Ft.set(t.pos.x,t.pos.y+1.1*t.scale,t.pos.z),He.spawnBurst(Ft,{color:16765514,count:14,speed:4.5,up:2.5,size:.16,life:.55,grav:6}),hi(t.takeDamage(220,Ft,Ge),!1))}i||He.spawnBurst(Ft.copy(k.pos).add(Ge).setY(k.pos.y+1.2),{color:16770698,count:6,speed:2,size:.08,life:.3,grav:2})}function Z0(i,t){if(kr()||Re||rn==="room"||k.pos.y>2.6)return;k.super&&(i*=.5),Ct.hurt(),Pn.style.opacity=1,k.damage(i)&&j0()}function j0(){be="dead",hs.stop(),Rn>yn&&(yn=Rn),yn>(parseInt(localStorage.getItem("hamsterHigh")||"0",10)||0)&&localStorage.setItem("hamsterHigh",String(yn)),document.exitPointerLock(),xg()}function Lc(i){i.active&&(i.active=!1,i.respawnT=22,i.group.visible=!1,Ct.pickup(),Se.pistol.reserve+=24,Se.shotgun.reserve+=8,Se.rifle.reserve+=30,Se.rocket.locked||(Se.rocket.reserve+=4),k.heal(20))}function J0(){Ns&&Lc(Ns)}function Q0(){!fe||be!=="playing"||(fe.riding?(fe.setRiding(!1),Ct.click(),fe.right(Ft),k.pos.set(fe.pos.x+Ft.x,0,fe.pos.z+Ft.z),k.vel.set(0,0,0),k.onGround=!0,Ce.resolveCollision(k.pos,.55)):k.pos.distanceTo(fe.pos)<2.3?(qt&&qt.riding&&qt.setRiding(!1),fe.setRiding(!0),fe.yaw=k.yaw,he!==0&&(he=0,k.viewMode=0,$n.textContent="VIEW: FIRST-PERSON [C]"),Ct.click()):Ct.empty())}function tg(){!ce||be!=="playing"||(ce.riding?(ce.setRiding(!1),Ct.click(),ce.right(Ft),k.pos.set(ce.pos.x+Ft.x*1.4,0,ce.pos.z+Ft.z*1.4),k.vel.set(0,0,0),k.onGround=!0,Ce.resolveCollision(k.pos,.55)):k.pos.distanceTo(ce.pos)<2.8&&(fe&&fe.riding&&fe.setRiding(!1),qt&&qt.riding&&qt.setRiding(!1),ce.setRiding(!0),ce.inputYaw=k.yaw,Ct.click(),he!==0&&(he=0,k.viewMode=0,$n.textContent=`VIEW: ${pi[he]} [C]`)))}function eg(){!qt||be!=="playing"||(qt.riding?(qt.setRiding(!1),Ct.click(),qt.right(Ft),k.pos.set(qt.pos.x+Ft.x,0,qt.pos.z+Ft.z),k.vel.set(0,0,0),k.onGround=!0,Ce.resolveCollision(k.pos,.55)):k.pos.distanceTo(qt.pos)<3.2?(fe&&fe.riding&&fe.setRiding(!1),qt.setRiding(!0),he!==0&&(he=0,k.viewMode=0,$n.textContent="VIEW: FIRST-PERSON [C]"),Ct.click()):Ct.empty())}function ng(){const i=new X(new Bt(.22,10,10),new ht({color:2829094,roughness:.5,metalness:.5}));Xt.getWorldDirection(Gt);const t=new P(k.pos.x+Gt.x*1.2,2.75,k.pos.z+Gt.z*1.2);i.position.copy(t),pe.add(i);const e=new P(Gt.x*24,3.5+Gt.y*24,Gt.z*24);Os.push({pos:t,vel:e,mesh:i,life:3,dmg:120,splash:4.5}),Ct.cannon(),qt.cool=1.4,qt.recoil=1,Ys.intensity=2.5,k.shake=Math.min(1,k.shake+.3)}const Le=i=>document.getElementById(i),ig=Le("wave"),sg=Le("score"),rg=Le("hiscore"),Gl=Le("healthfill"),ag=Le("weaponname"),og=Le("ammo"),lg=Le("reloadtip"),Hl=Le("pickuptip"),lo=Le("hitmark"),Mr=Le("banner"),Pn=Le("vignette"),Dc=Le("overlay"),cg=Le("overlay-content"),hg=Le("weapons"),ug=Le("legend"),$n=Le("view"),dg=Le("fuelbar"),Vl=Le("fuelfill"),fg=Le("bossbar"),Wl=Le("bossfill"),oi=Le("fatline");function pg(){ug.classList.toggle("hidden")}const Cr={};for(const i of ri){const t=document.createElement("div");t.className="wslot",t.innerHTML=`<span class="wkey">${ro[i].key}</span>${ro[i].name}`,hg.appendChild(t),Cr[i]=t}function qe(i){Mr.textContent=i,Mr.classList.remove("hidden","show"),Mr.offsetWidth,Mr.classList.add("show")}function bo(i){cg.innerHTML=i,Dc.classList.remove("hidden")}function mg(){Dc.classList.add("hidden")}function gg(){bo(`
    <h1>HAMSTER APOCALYPSE</h1>
    <h2>CENTRAL PARK LAST STAND</h2>
    <p>The dead are pouring out of the city and <b>everything wants his seeds</b>.
    It's <b>HAMMY</b> against the world.</p>
    ${yn>0?`<p style="color:#e8b44a;letter-spacing:2px">LOCAL RECORD: ${yn.toLocaleString()}</p>`:""}
    <div class="controls">
      <b>W A S D</b><span>move</span>
      <b>MOUSE / ARROWS</b><span>aim & look</span>
      <b>LMB / F</b><span>fire</span>
      <b>SHIFT</b><span>sprint</span>
      <b>SPACE</b><span>jump · hold to fly (wave 10)</span>
      <b>1 – 5</b><span>switch weapons</span>
      <b>Q</b><span>cycle weapons</span>
      <b>R</b><span>reload</span>
      <b>E</b><span>take ammo / mount turret</span>
      <b>J</b><span>summon the zombie king (chaos mode)</span>
      <b>G</b><span>ride / dismount the motorcycle (wave 3+)</span>
      <b>T</b><span>drive the M1-Hamster tank (wave 5+) · click = cannon</span>
      <b>B</b><span>roll the hamster ball (wave 7+) · free 8-way, look around inside</span>
      <b>H</b><span>hamster stampede — 50 hamsters charge where you look (1×/wave)</span>
      <b>C</b><span>cycle camera view</span>
      <b>M</b><span>soundtrack on/off — “Wheek and Roll”</span>
      <b>?</b><span>controls legend</span>
    </div>
    <p>Clear each wave. Scavenge the <b>ammo crates</b> in the
    streets when you run dry. Do not let them hug you.</p>
    <p style="color:#e8b44a">Wave 10: a <b>GIANT ZOMBIE</b> awakens… and so does
    <b>the jetpack + rocket launcher</b>.</p>
    <div class="prompt">CLICK or SPACE TO DEPLOY</div>
  `)}function _g(){bo(`
    <h1 style="font-size:40px">PAUSED</h1>
    <p>The horde waits for you…</p>
    <div class="prompt">CLICK TO RESUME</div>
  `)}function xg(){const i=Rn>I0&&Rn>0;bo(`
    <h1 style="color:#c85a4a">YOU DIED</h1>
    <h2>${qs[Cc].name} HAS FALLEN</h2>
    ${i?'<div class="stat" style="color:#e8b44a">NEW HIGH SCORE!</div>':""}
    <div class="stat">SCORE ${Rn.toLocaleString()}</div>
    <div class="stat">HI&nbsp;SCORE ${yn.toLocaleString()}</div>
    <div class="stat">KILLS ${Pc}</div>
    <div class="stat">WAVE ${le.wave}</div>
    <div class="prompt">CLICK TO TRY AGAIN</div>
  `)}function vg(i,t){lo.classList.remove("hidden"),lo.classList.toggle("ks",i||t),Rr=i?.25:.12}function Mg(){if(!oo||be!=="playing")return;oo=!1,Ct.stampede(),qe("HAMMY SUMMONS THE STAMPEDE!"),k.shake=Math.min(1.2,k.shake+.6);const i=qs.hammy.colors,t=k.forward(Gt),e=new P(-t.z,0,t.x),n=50;for(let s=0;s<n;s++){const r=s/n*Math.PI*2,o=1.2+Math.random()*3.5;let a=Math.cos(r)*o,l=Math.sin(r)*o;a-=t.x*o*.8,l-=t.z*o*.8,a+=e.x*(Math.random()-.5)*3,l+=e.z*(Math.random()-.5)*3;const c=new P(k.pos.x+a,0,k.pos.z+l),h=t.clone(),u=new jt,f=new ht({color:i.fur,roughness:.9}),p=new ht({color:i.pink,roughness:.8}),g=new X(new Bt(.3,8,8),f);g.position.y=.3,g.scale.set(1,.85,1.15),g.castShadow=!0;const v=new X(new Bt(.22,8,8),f);v.position.set(0,.62,.18),v.castShadow=!0,u.add(g,v);for(const d of[-1,1]){const E=new X(new Bt(.07,6,6),p);E.position.set(d*.11,.82,.14),u.add(E)}const m=new X(new Bt(.04,6,6),p);m.position.set(0,.58,.38),u.add(m),u.scale.setScalar(.9),u.position.copy(c),pe.add(u),He.spawnBurst(c,{color:i.fur,count:8,speed:2,up:1.5,size:.12,life:.5}),Ds.push({g:u,pos:c,dir:h,speed:13+Math.random()*6,life:3+Math.random()*1})}}function Sg(){Gs?Ct.click():(Gs=!0,k.jetpack=!0,Se.rocket.locked=!1,Pe.setPack(!0),Ct.powerup(),qe("JETPACK + ROCKET LAUNCHER ACQUIRED!")),le.summonBoss()?(Pn.style.opacity=Math.max(parseFloat(Pn.style.opacity),.5),setTimeout(()=>{be==="playing"&&(Ct.bossRoar(),qe("THE ZOMBIE KING HAS AWAKENED"))},1400)):Ct.empty()}let Xl=!0;function Ao(){Ct.unlock(),hs.start(),ie&&(rn="none",Ce.setSecretWalls(!1),ie.shell.visible=!0,oi.classList.add("hidden")),Xl&&(Xl=!1,le.addAmbient(2),qe("WAVE 1"),Ct.waveHorn(),le.startWave(1),oo=!0),be="playing",In.domElement.requestPointerLock()}const yg=new n0;let va=0;function Eg(i){if(be!=="playing")return;if(le.waveCleared&&(Rs===0&&(Rs=3.5,qe("WAVE CLEARED")),Rs-=i,Rs<=0)){if(Rs=0,le.startWave(le.wave+1),qe(`WAVE ${le.wave}`),Ct.waveHorn(),le.wave>=3&&!Fl){Fl=!0;const l=k.pos;fe=new R0(pe,l.x+1.6,l.z-1.2,Ce.resolveCollision),fe.yaw=k.yaw,Ct.powerup(),qe("MOTORCYCLE ACQUIRED!  [G] TO RIDE")}if(le.wave>=5&&!Ol){Ol=!0;const l=k.pos;qt=new C0(pe,l.x+2.2,l.z-1.8,Ce.resolveCollision),qt.yaw=k.yaw,Ct.powerup(),qe("M1-HAMSTER TANK ACQUIRED!  [T] TO DRIVE  •  CLICK = CANNON")}if(le.wave>=7&&!zl){zl=!0;const l=k.pos;ce=new P0(pe,l.x+1.8,l.z-1.6,Ce.resolveCollision),Ct.powerup(),qe("THE HAMSTER BALL ACQUIRED!  [B] TO ROLL")}le.wave===10&&!Gs&&(Gs=!0,k.jetpack=!0,Se.rocket.locked=!1,Pe.setPack(!0),setTimeout(()=>{be==="playing"&&(Ct.powerup(),qe("JETPACK + ROCKET LAUNCHER ACQUIRED!"),setTimeout(()=>{be==="playing"&&(Ct.bossRoar(),qe("THE GIANT HAS AWAKENED"),Pn.style.opacity=Math.max(parseFloat(Pn.style.opacity),.5))},3e3))},1200))}const t=kr(),e=!!t,n=k.update(i,e||Re?{}:ts,Ce.resolveCollision);!e&&!Re&&G0(),fe&&fe.update(i,e?{}:ts,Ce.resolveCollision),qt&&(qt.riding&&(qt.aimYaw=k.yaw),qt.update(i,e?{}:ts,Ce.resolveCollision)),ce&&(ce.riding&&(ce.inputYaw=k.yaw),ce.update(i,e?{}:ts,Ce.resolveCollision)),e&&(k.pos.copy(t.pos),k.vel.set(0,0,0),k.onGround=!0),Re&&(k.pos.set(Re.pos.x,Re.pos.y,Re.pos.z),k.vel.set(0,0,0),k.onGround=!0),xa=null;for(const l of Rc){if(l.update(i),l===Re)continue;Math.hypot(l.pos.x-k.pos.x,l.pos.z-k.pos.z)<2.8&&Math.abs(l.pos.y-k.pos.y)<1.8&&(xa=l)}if(Re){Xt.getWorldDirection(Gt);const l=Math.hypot(Gt.x,Gt.z);Re.aim(Math.atan2(-Gt.x,-Gt.z),l>.02?Math.asin(-Gt.y/Math.sqrt(1-Gt.y*Gt.y)):0)}if(le.update(i,k.pos,Z0),e&&Math.abs(t.speed)>3){t.forward(Gt);for(const l of le.zombies){if(l.state==="dead")continue;if(l.bikeT>0){l.bikeT-=i;continue}if(Math.abs(l.pos.y)>1.6*l.scale)continue;const c=Math.hypot(l.pos.x-t.pos.x,l.pos.z-t.pos.z),h=(t===qt?1.3:t===ce?1.1:.6)+.55*l.scale;if(c<h){l.bikeT=.55;const u=t===qt?45+Math.abs(t.speed)*9:30+Math.abs(t.speed)*7;Ct.zombieHit(),Ge.set(l.pos.x,.5*l.scale+1,l.pos.z),He.spawnBurst(Ge,{color:5939258,count:12,speed:3.5,up:3,size:.14,life:.6,grav:8}),hi(l.takeDamage(u,Ge,Gt),!1),t===ce?t.vel.multiplyScalar(.55):t.speed*=t===qt?.85:.72,k.shake=Math.min(1,k.shake+(t===qt?.18:t===ce?.3:.25))}}}for(const l of le.zombies)l.state==="dead"&&!l.scored&&(l.scored=!0,Rn+=l.type.score+le.wave*10,l.typeId==="boss"&&(Ct.bossKilled(),k.health=Math.min(k.maxHealth,k.health+30),K0(l.pos.x,l.pos.z,0),setTimeout(()=>{be==="playing"&&qe("THE GOLDEN SEED GLOWS…  GRAB IT!")},1500)));if(Fs+=((he===1?1:0)-Fs)*Math.min(1,i*12),he===2&&!e?(Pe.visible=!0,Pe.update(k)):Pe.visible=!1,Se[Ye].group.visible=!Se[Ye].hidden&&he!==2&&!e&&!Re&&!k.super,Re){const l=Re;Xt.position.set(l.pos.x,l.pos.y+1.9,l.pos.z),Xt.rotation.set(k.pitch,k.yaw,0),Xt.fov!==68&&(Xt.fov=68,Xt.updateProjectionMatrix())}else if(e&&he!==2){const l=Math.min(1,Math.abs(t.speed)/(t===qt?9:t===ce?11:15))*.05;if(t===qt){Xt.getWorldDirection(Ft),Wn.set(-Ft.z,0,Ft.x);const c=Math.hypot(Ft.x,Ft.z)||1,h=t.pos.x+Ft.x/c*1.8,u=t.pos.z+Ft.z/c*1.8;h-(k.pos.x+Ft.x*1.8);const f=t.pos.y+2.75-(k.pos.y+1.65);u-(k.pos.z+Ft.z*1.8),Xt.position.set(k.pos.x+Wn.x*.6+(Math.random()-.5)*l,t.pos.y+3.3+(Math.random()-.5)*l*.6+Math.max(0,f)*.25,k.pos.z+Wn.z*.6+(Math.random()-.5)*l),Xt.rotation.set(0,k.yaw,-t.lean*.4),Xt.fov=78,Xt.updateProjectionMatrix(),s&&qt.cool<=0&&ng()}else t===ce?(Xt.position.set(k.pos.x+(Math.random()-.5)*l*.9,t.pos.y+1.8+(Math.random()-.5)*l*.5,k.pos.z+(Math.random()-.5)*l*.9),Xt.rotation.set(k.pitch,k.yaw,-t.lean*.3),Xt.fov=82,Xt.updateProjectionMatrix()):(t.forward(Ft),Xt.position.set(t.pos.x-Ft.x*.12+(Math.random()-.5)*l,t.pos.y+1.16+(Math.random()-.5)*l*.5,t.pos.z-Ft.z*.12+(Math.random()-.5)*l),Xt.rotation.set(-.03+(Math.random()-.5)*l*.4,t.yaw,-t.lean*.55),Xt.fov=80,Xt.updateProjectionMatrix())}const s=To||Ur,r=Se[Ye];if((r.def.auto&&s||!r.def.auto&&s&&Hs&&r.cooldown<=0||s&&(Re||k.super))&&(r.def.auto||(Hs=!1),O0()),r.update(i,s,n.bobX,n.bobY,Fs),Ys.intensity*=Math.pow(.001,i),He.update(i),bn>0&&(bn-=i,bn<=0?Y0():He.spawnBurst(k.eyePos,{color:16765514,count:1,speed:.3,up:-.4,size:.1,life:.4,grav:-1})),ao-=i,Ri){const l=Ri.position;l.y=1.2+Math.sin(performance.now()/300)*.25,Ri.rotation.y+=i*1.6,Math.hypot(l.x-k.pos.x,l.z-k.pos.z)<1.7&&Math.abs(l.y-k.pos.y)<2.5&&(pe.remove(Ri),Ri=null,q0())}for(let l=Ar.length-1;l>=0;l--){const c=Ar[l];c.life-=i;let h=c.life<=0;if(c.done?(c.grow=Math.min(c.len,c.grow+3e3*i),c.mesh.scale.z=Math.max(.01,c.grow),c.mesh.position.copy(c.pos).addScaledVector(c.dir,c.grow/2),c.mesh.material.opacity=Math.min(.9,c.life*2.5)):(c.pos.addScaledVector(c.vel,i),c.mesh.position.copy(c.pos)),!h&&!c.done){for(const u of le.zombies)if(u.state!=="dead"&&Math.abs(c.pos.x-u.pos.x)<.9*u.scale+.3&&Math.abs(c.pos.z-u.pos.z)<.9*u.scale+.3&&Math.abs(c.pos.y-(u.pos.y+1*u.scale))<1.4*u.scale){hi(u.takeDamage(55,c.pos,c.vel),!1),h=!0;break}}h&&(pe.remove(c.mesh),Ar.splice(l,1))}if(Ds.length)for(let l=Ds.length-1;l>=0;l--){const c=Ds[l];c.life-=i,c.pos.addScaledVector(c.dir,c.speed*i),c.g.position.set(c.pos.x,Math.abs(Math.sin(c.life*32))*.22,c.pos.z),c.g.rotation.y=Math.atan2(c.dir.x,c.dir.z),He.spawnBurst(c.pos,{color:9077362,count:1,speed:.5,size:.1,life:.35,grav:0});for(const h of le.zombies)if(h.state!=="dead"){if(h.stampT>0){h.stampT-=i;continue}if(!(Math.abs(h.pos.y)>1.3*h.scale)&&Math.hypot(h.pos.x-c.pos.x,h.pos.z-c.pos.z)<.8*h.scale+.55){h.stampT=h.typeId==="boss"?.12:.4;const u=(65+le.wave*5)*(h.typeId==="boss"?8:1);Ct.zombieHit(),Ge.set(h.pos.x,.5*h.scale+1,h.pos.z),He.spawnBurst(Ge,{color:5939258,count:10,speed:3,up:3,size:.13,life:.55,grav:8}),hi(h.takeDamage(u,Ge,c.dir),!1)}}(c.life<=0||c.pos.length()>260)&&(pe.remove(c.g),c.g.traverse(h=>{h.geometry&&h.geometry.dispose()}),Ds.splice(l,1))}if(Ct.jet(n.flying&&!e),Ct.engine(e&&t!==ce&&Math.abs(t.speed)>.4),n.flying&&!k.super&&(k.forward(Ft),Ge.set(k.pos.x-Ft.x*.45,k.pos.y+.3,k.pos.z-Ft.z*.45),He.spawnBurst(Ge,{color:16752688,count:2,speed:1.4,up:-3,size:.1,life:.28,grav:2}),he!==2)){Xt.getWorldDirection(Ft),Wn.set(-Ft.z,0,Ft.x);for(const l of[-1,1])Ge.set(Xt.position.x-Ft.x*.7+Wn.x*.45*l,Xt.position.y-.4-Ft.y*.7,Xt.position.z-Ft.z*.7+Wn.z*.45*l),He.spawnBurst(Ge,{color:16756800,count:1,speed:.6,up:-2,size:.07,life:.2})}for(let l=Os.length-1;l>=0;l--){const c=Os[l];c.life-=i,c.vel.y-=1.2*i,c.pos.addScaledVector(c.vel,i),c.mesh.position.copy(c.pos),c.mesh.quaternion.setFromUnitVectors(F0,Ge.copy(c.vel).normalize()),He.spawnBurst(c.pos,{color:16761963,count:1,speed:.3,size:.06,life:.2,grav:-1});let h=c.life<=0||c.pos.y<.06;if(!h){for(const u of le.zombies)if(u.state!=="dead"&&Math.abs(c.pos.x-u.pos.x)<.8*u.scale+.35&&Math.abs(c.pos.z-u.pos.z)<.8*u.scale+.35&&Math.abs(c.pos.y-(u.pos.y+1.1*u.scale))<1.2*u.scale){h=!0;break}}if(!h)for(const u of Ce.colliders){const f=u.box||u;if(c.pos.x>f.min.x&&c.pos.x<f.max.x&&c.pos.y>f.min.y&&c.pos.y<f.max.y&&c.pos.z>f.min.z&&c.pos.z<f.max.z){h=!0;break}}h&&(k0(c.pos,c.dmg,c.splash),pe.remove(c.mesh),Os.splice(l,1))}for(const l of Nr)l.intensity*=Math.pow(.001,i);Ns=null;let o=2.3;for(const l of Ce.crates){if(!l.active){l.respawnT-=i,l.respawnT<=0&&(l.active=!0,l.group.visible=!0);continue}const c=l.pos.distanceTo(k.pos);if(c<1.15){Lc(l);continue}c<o&&(o=c,Ns=l)}if(ie&&rn!=="none"){ie.tv.update(i);const l=Math.sin(performance.now()*.0022)*.05;ie.fat.scale.set(1.7+l,.95,1.5-l*.8)}ie&&(ie.beam.opacity=.2+Math.sin(performance.now()*.003)*.12),rn==="room"&&ie&&(Ls+=i,Ls>5&&Ls-i<=5&&(oi.textContent="“I was in the middle of my show. Do NOT touch the remote.”"),Ls>11&&oi.classList.add("hidden"));let a=null;if(Re?a="[E] DROP  •  [F] FIRE":bn>0?a=`SUPER HAMMY! ${Math.ceil(bn)}s  •  [F] PUNCH  •  [SPACE] FLY`:rn==="room"?a=k.pos.distanceTo(ie.balconyDoor)<1.8?"[E] UP TO THE BALCONY":"[E] EXIT":rn==="balcony"?a="[E] BACK INSIDE":ie&&k.pos.distanceTo(ie.door)<4?a="[E] ENTER — SOMEONE LIVES HERE":ie&&k.pos.distanceTo(ie.door)<60?a="FOLLOW THE GREEN LIGHT BEAM — HUNGRY JACKS BUILDING":xa?a="[E] MOUNT TURRET":Ns&&(a="[E] TAKE AMMO"),fe&&(fe.riding?a="[G] DISMOUNT":fe.pos.distanceTo(k.pos)<2.6&&(a="[G] RIDE")),qt&&(qt.riding?a="[T] EXIT":qt.pos.distanceTo(k.pos)<3.2&&(a="[T] DRIVE")),ce&&(ce.riding?a="[B] EXIT":ce.pos.distanceTo(k.pos)<2.8&&(a="[B] ROLL")),Hl.textContent=a||"[E] TAKE AMMO",Hl.classList.toggle("hidden",!a),Pn.style.opacity=Math.max(0,parseFloat(Pn.style.opacity)-i*1.6),Rr>0&&(Rr-=i,Rr<=0&&lo.classList.add("hidden")),va-=i,va<=0){va=.1,ig.textContent=`WAVE ${le.wave||1}`,sg.textContent=`SCORE ${Rn.toLocaleString()}`,Rn>yn&&(yn=Rn,Nl||(Nl=!0,qe("NEW HIGH SCORE!"),Ct.powerup())),rg.textContent=`HI ${Math.max(yn,Rn).toLocaleString()}`;const l=k.health/k.maxHealth;Gl.style.width=`${l*100}%`,Gl.classList.toggle("low",l<.3),ag.textContent=r.def.name,og.innerHTML=r.isMelee?"∞":`${r.mag} <span class="res">/ ${r.reserve}</span>`,lg.classList.toggle("hidden",!r.reloading);for(const h of ri){Cr[h].classList.toggle("active",h===Ye);const u=Se[h],f=Cr[h].querySelector(".wammo");f&&f.remove();const p=document.createElement("span");p.className="wammo",p.textContent=u.locked?"🔒":u.isMelee?"∞":u.reserve,Cr[h].appendChild(p)}dg.classList.toggle("hidden",!k.jetpack),k.jetpack&&(Vl.style.width=`${k.fuel}%`,Vl.classList.toggle("low",k.fuel<25));const c=le.zombies.find(h=>h.typeId==="boss"&&h.state!=="dead");fg.classList.toggle("hidden",!c&&bn<=0),c?Wl.style.width=`${Math.max(0,c.hp/c.type.hp)*100}%`:bn>0&&(Wl.style.width=`${Math.max(0,bn/25)*100}%`)}for(const l of pe.children)(l.material===Ac||l.userData&&l.userData.phase!==void 0)&&l.material.color.setHSL(.05+Math.sin(performance.now()/300+l.userData.phase)*.02,.9,.55+Math.sin(performance.now()/120+l.userData.phase)*.1)}le.onGrowl=i=>{Ct.growl(),i<8&&(Pn.style.opacity=Math.max(parseFloat(Pn.style.opacity),.25))};le.addAmbient(3);gg();function Ic(){requestAnimationFrame(Ic);const i=Math.min(yg.getDelta(),.05);Eg(i),be==="menu"&&Pe&&(Pe.visible=!0,Pe.g.position.set(0,0,14),Pe.g.rotation.y+=i*.7),In.render(pe,Xt)}Ic();
