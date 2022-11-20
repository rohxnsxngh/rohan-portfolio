(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="143",Mm=0,Du=1,wm=2,Xh=1,Sm=2,Cs=3,Gs=0,Cn=1,Qr=2,Tm=1,Ai=0,Xr=1,Ru=2,Iu=3,Fu=4,Em=5,Ur=100,Cm=101,Am=102,Ou=103,Nu=104,Pm=200,Lm=201,Dm=202,Rm=203,jh=204,$h=205,Im=206,Fm=207,Om=208,Nm=209,zm=210,Um=0,Bm=1,km=2,Yl=3,Gm=4,Vm=5,Hm=6,Wm=7,zc=0,qm=1,Xm=2,ii=0,jm=1,$m=2,Ym=3,Zm=4,Km=5,Yh=300,es=301,ts=302,Zl=303,Kl=304,fa=306,Jl=1e3,wn=1001,Ql=1002,Nt=1003,zu=1004,Uu=1005,cn=1006,Jm=1007,ha=1008,gr=1009,Qm=1010,eg=1011,Zh=1012,tg=1013,sr=1014,or=1015,Vs=1016,ng=1017,ig=1018,jr=1020,rg=1021,sg=1022,kn=1023,og=1024,ag=1025,cr=1026,ns=1027,lg=1028,cg=1029,ug=1030,fg=1031,hg=1033,Ja=33776,Qa=33777,el=33778,tl=33779,Bu=35840,ku=35841,Gu=35842,Vu=35843,dg=36196,Hu=37492,Wu=37496,qu=37808,Xu=37809,ju=37810,$u=37811,Yu=37812,Zu=37813,Ku=37814,Ju=37815,Qu=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,of=36492,_r=3e3,nt=3001,pg=3200,mg=3201,Kh=0,gg=1,Kn="srgb",ar="srgb-linear",nl=7680,_g=519,af=35044,lf="300 es",ec=1035;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,cf=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function xg(r,e){return(r%e+e)%e}function rl(r,e,t){return(1-t)*r+t*e}function uf(r){return(r&r-1)===0&&r!==0}function tc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class un{constructor(){un.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],v=i[1],S=i[4],y=i[7],b=i[2],A=i[5],P=i[8];return s[0]=o*d+a*v+l*b,s[3]=o*p+a*S+l*A,s[6]=o*_+a*y+l*P,s[1]=c*d+u*v+f*b,s[4]=c*p+u*S+f*A,s[7]=c*_+u*y+f*P,s[2]=h*d+m*v+g*b,s[5]=h*p+m*S+g*A,s[8]=h*_+m*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const sl={[Kn]:{[ar]:ur},[ar]:{[Kn]:Bo}},vn={legacyMode:!0,get workingColorSpace(){return ar},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(sl[e]&&sl[e][t]!==void 0){const n=sl[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},yn={h:0,s:0,l:0},co={h:0,s:0,l:0};function ol(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function uo(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ar){return this.r=e,this.g=t,this.b=n,vn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ar){if(e=xg(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ol(o,s,e+1/3),this.g=ol(o,s,e),this.b=ol(o,s,e-1/3)}return vn.toWorkingColorSpace(this,i),this}setStyle(e,t=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,vn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,vn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kn){const n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return vn.fromWorkingColorSpace(uo(this,dt),e),jt(dt.r*255,0,255)<<16^jt(dt.g*255,0,255)<<8^jt(dt.b*255,0,255)<<0}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ar){vn.fromWorkingColorSpace(uo(this,dt),t);const n=dt.r,i=dt.g,s=dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ar){return vn.fromWorkingColorSpace(uo(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Kn){return vn.fromWorkingColorSpace(uo(this,dt),e),e!==Kn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=n,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(co);const n=rl(yn.h,co.h,t),i=rl(yn.s,co.s,t),s=rl(yn.l,co.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=Qh;let wr;class ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Yo("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class td{constructor(e=null){this.isSource=!0,this.uuid=no(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(al(i[o].image)):s.push(al(i[o]))}else s=al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ed.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vg=0;class Dn extends ds{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=wn,i=wn,s=cn,o=ha,a=kn,l=gr,c=1,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=no(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Yh;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,b=(_+1)/2,A=(u+h)/4,P=(f+d)/4,x=(g+p)/4;return S>y&&S>b?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=P/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=P/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-d)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends ds{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nd extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yg extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-a;const _=l*h+c*m+u*g+f*d,v=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const b=Math.sqrt(S),A=Math.atan2(b,_*v);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}const y=a*v;if(l=l*p+h*y,c=c*p+m*y,u=u*p+g*y,f=f*p+d*y,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new O,ff=new ps;class io{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Hi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hi)}else n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox),cl.applyMatrix4(e.matrixWorld),this.union(cl);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),fo.subVectors(this.max,Ms),Sr.subVectors(e.a,Ms),Tr.subVectors(e.b,Ms),Er.subVectors(e.c,Ms),pi.subVectors(Tr,Sr),mi.subVectors(Er,Tr),Wi.subVectors(Sr,Er);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Wi.z,Wi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Wi.z,0,-Wi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Wi.y,Wi.x,0];return!ul(t,Sr,Tr,Er,fo)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Sr,Tr,Er,fo))?!1:(ho.crossVectors(pi,mi),t=[ho.x,ho.y,ho.z],ul(t,Sr,Tr,Er,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Hi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new O,new O,new O,new O,new O,new O,new O,new O],Hi=new O,cl=new io,Sr=new O,Tr=new O,Er=new O,pi=new O,mi=new O,Wi=new O,Ms=new O,fo=new O,ho=new O,qi=new O;function ul(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qi.fromArray(r,s);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bg=new io,hf=new O,po=new O,fl=new O;class da{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){fl.subVectors(e,this.center);const t=fl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(fl.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?po.set(0,0,1).multiplyScalar(e.radius):po.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hf.copy(e.center).add(po)),this.expandByPoint(hf.copy(e.center).sub(po)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new O,hl=new O,mo=new O,gi=new O,dl=new O,go=new O,pl=new O;class id{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=gi.dot(this.direction),l=-gi.dot(mo),c=gi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(mo).multiplyScalar(h).add(hl),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){dl.subVectors(t,e),go.subVectors(n,e),pl.crossVectors(dl,go);let o=this.direction.dot(pl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(gi,go));if(l<0)return null;const c=a*this.direction.dot(dl.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(pl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,wg)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),_i.crossVectors(n,Wt),_i.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),_i.crossVectors(n,Wt)),_i.normalize(),_o.crossVectors(Wt,_i),i[0]=_i.x,i[4]=_o.x,i[8]=Wt.x,i[1]=_i.y,i[5]=_o.y,i[9]=Wt.y,i[2]=_i.z,i[6]=_o.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],v=n[3],S=n[7],y=n[11],b=n[15],A=i[0],P=i[4],x=i[8],T=i[12],R=i[1],I=i[5],ne=i[9],Q=i[13],N=i[2],X=i[6],U=i[10],G=i[14],V=i[3],B=i[7],$=i[11],le=i[15];return s[0]=o*A+a*R+l*N+c*V,s[4]=o*P+a*I+l*X+c*B,s[8]=o*x+a*ne+l*U+c*$,s[12]=o*T+a*Q+l*G+c*le,s[1]=u*A+f*R+h*N+m*V,s[5]=u*P+f*I+h*X+m*B,s[9]=u*x+f*ne+h*U+m*$,s[13]=u*T+f*Q+h*G+m*le,s[2]=g*A+d*R+p*N+_*V,s[6]=g*P+d*I+p*X+_*B,s[10]=g*x+d*ne+p*U+_*$,s[14]=g*T+d*Q+p*G+_*le,s[3]=v*A+S*R+y*N+b*V,s[7]=v*P+S*I+y*X+b*B,s[11]=v*x+S*ne+y*U+b*$,s[15]=v*T+S*Q+y*G+b*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*m-n*l*m)+d*(+t*l*m-t*c*h+s*o*h-i*o*m+i*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],v=f*p*c-d*h*c+d*l*m-a*p*m-f*l*_+a*h*_,S=g*h*c-u*p*c-g*l*m+o*p*m+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*m-o*d*m-u*a*_+o*f*_,b=g*f*l-u*d*l-g*a*h+o*d*h+u*a*p-o*f*p,A=t*v+n*S+i*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=v*P,e[1]=(d*h*s-f*p*s-d*i*m+n*p*m+f*i*_-n*h*_)*P,e[2]=(a*p*s-d*l*s+d*i*c-n*p*c-a*i*_+n*l*_)*P,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*m-n*l*m)*P,e[4]=S*P,e[5]=(u*p*s-g*h*s+g*i*m-t*p*m-u*i*_+t*h*_)*P,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*_-t*l*_)*P,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*m+t*l*m)*P,e[8]=y*P,e[9]=(g*f*s-u*d*s-g*n*m+t*d*m+u*n*_-t*f*_)*P,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*P,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*P,e[12]=b*P,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*p+t*f*p)*P,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*p-t*a*p)*P,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,d=o*u,p=o*f,_=a*f,v=l*c,S=l*u,y=l*f,b=n.x,A=n.y,P=n.z;return i[0]=(1-(d+_))*b,i[1]=(m+y)*b,i[2]=(g-S)*b,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(h+_))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(g+S)*P,i[9]=(p-v)*P,i[10]=(1-(h+d))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Cr.set(i[0],i[1],i[2]).length();const o=Cr.set(i[4],i[5],i[6]).length(),a=Cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/s,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new O,bn=new at,Mg=new O(0,0,0),wg=new O(1,1,1),_i=new O,_o=new O,Wt=new O,df=new at,pf=new ps;class ro{constructor(e=0,t=0,n=0,i=ro.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ro.DefaultOrder="XYZ";ro.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const mf=new O,Ar=new ps,jn=new at,xo=new O,ws=new O,Tg=new O,Eg=new ps,gf=new O(1,0,0),_f=new O(0,1,0),xf=new O(0,0,1),Cg={type:"added"},vf={type:"removed"};class Dt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DefaultUp.clone();const e=new O,t=new ro,n=new ps,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new un}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ws,xo,this.up):jn.lookAt(xo,ws,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(jn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DefaultUp=new O(0,1,0);Dt.DefaultMatrixAutoUpdate=!0;const Mn=new O,$n=new O,ml=new O,Yn=new O,Pr=new O,Lr=new O,yf=new O,gl=new O,_l=new O,xl=new O;class ei{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),$n.subVectors(n,t),ml.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot($n),l=Mn.dot(ml),c=$n.dot($n),u=$n.dot(ml),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Yn),l.set(0,0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),$n.subVectors(e,t),Mn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Mn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ei.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Pr.subVectors(i,n),Lr.subVectors(s,n),gl.subVectors(e,n);const l=Pr.dot(gl),c=Lr.dot(gl);if(l<=0&&c<=0)return t.copy(n);_l.subVectors(e,i);const u=Pr.dot(_l),f=Lr.dot(_l);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Pr,o);xl.subVectors(e,s);const m=Pr.dot(xl),g=Lr.dot(xl);if(g>=0&&m<=g)return t.copy(s);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Lr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return yf.subVectors(s,i),a=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(yf,a);const _=1/(p+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(Pr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ag=0;class ms extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Xr,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jh,this.blendDst=$h,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Tm;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Gs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sd extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new O,vo=new Ue;class An{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=af,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new qe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ue),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new O),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ke),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class od extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ad extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pg=0;const sn=new at,vl=new Dt,Dr=new O,qt=new io,Ss=new io,gt=new O;class tn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?ad:od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new un().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(qt.min,Ss.min),qt.expandByPoint(gt),gt.addVectors(qt.max,Ss.max),qt.expandByPoint(gt)):(qt.expandByPoint(Ss.min),qt.expandByPoint(Ss.max))}qt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),gt.add(Dr)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new O,u[R]=new O;const f=new O,h=new O,m=new O,g=new Ue,d=new Ue,p=new Ue,_=new O,v=new O;function S(R,I,ne){f.fromArray(i,R*3),h.fromArray(i,I*3),m.fromArray(i,ne*3),g.fromArray(o,R*2),d.fromArray(o,I*2),p.fromArray(o,ne*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const Q=1/(d.x*p.y-p.x*d.y);!isFinite(Q)||(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(Q),v.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(Q),c[R].add(_),c[I].add(_),c[ne].add(_),u[R].add(v),u[I].add(v),u[ne].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,I=y.length;R<I;++R){const ne=y[R],Q=ne.start,N=ne.count;for(let X=Q,U=Q+N;X<U;X+=3)S(n[X+0],n[X+1],n[X+2])}const b=new O,A=new O,P=new O,x=new O;function T(R){P.fromArray(s,R*3),x.copy(P);const I=c[R];b.copy(I),b.sub(P.multiplyScalar(P.dot(I))).normalize(),A.crossVectors(x,I);const Q=A.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=Q}for(let R=0,I=y.length;R<I;++R){const ne=y[R],Q=ne.start,N=ne.count;for(let X=Q,U=Q+N;X<U;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new An(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const bf=new at,Rr=new id,yl=new da,xi=new O,vi=new O,yi=new O,bl=new O,Ml=new O,wl=new O,yo=new O,bo=new O,Mo=new O,wo=new Ue,So=new Ue,To=new Ue,Sl=new O,Eo=new O;class ht extends Dt{constructor(e=new tn,t=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),e.ray.intersectsSphere(yl)===!1)||(bf.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(bf),n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=S,A=y;b<A;b+=3){const P=a.getX(b),x=a.getX(b+1),T=a.getX(b+2);o=Co(this,v,e,Rr,l,c,u,f,h,P,x,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const S=a.getX(_),y=a.getX(_+1),b=a.getX(_+2);o=Co(this,i,e,Rr,l,c,u,f,h,S,y,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=S,A=y;b<A;b+=3){const P=b,x=b+1,T=b+2;o=Co(this,v,e,Rr,l,c,u,f,h,P,x,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const S=_,y=_+1,b=_+2;o=Co(this,i,e,Rr,l,c,u,f,h,S,y,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Lg(r,e,t,n,i,s,o,a){let l;if(e.side===Cn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Qr,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:r}}function Co(r,e,t,n,i,s,o,a,l,c,u,f){xi.fromBufferAttribute(i,c),vi.fromBufferAttribute(i,u),yi.fromBufferAttribute(i,f);const h=r.morphTargetInfluences;if(s&&h){yo.set(0,0,0),bo.set(0,0,0),Mo.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=h[g],_=s[g];p!==0&&(bl.fromBufferAttribute(_,c),Ml.fromBufferAttribute(_,u),wl.fromBufferAttribute(_,f),o?(yo.addScaledVector(bl,p),bo.addScaledVector(Ml,p),Mo.addScaledVector(wl,p)):(yo.addScaledVector(bl.sub(xi),p),bo.addScaledVector(Ml.sub(vi),p),Mo.addScaledVector(wl.sub(yi),p)))}xi.add(yo),vi.add(bo),yi.add(Mo)}r.isSkinnedMesh&&(r.boneTransform(c,xi),r.boneTransform(u,vi),r.boneTransform(f,yi));const m=Lg(r,e,t,n,xi,vi,yi,Sl);if(m){a&&(wo.fromBufferAttribute(a,c),So.fromBufferAttribute(a,u),To.fromBufferAttribute(a,f),m.uv=ei.getUV(Sl,xi,vi,yi,wo,So,To,new Ue)),l&&(wo.fromBufferAttribute(l,c),So.fromBufferAttribute(l,u),To.fromBufferAttribute(l,f),m.uv2=ei.getUV(Sl,xi,vi,yi,wo,So,To,new Ue));const g={a:c,b:u,c:f,normal:new O,materialIndex:0};ei.getNormal(xi,vi,yi,g.normal),m.face=g}return m}class so extends tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function g(d,p,_,v,S,y,b,A,P,x,T){const R=y/P,I=b/x,ne=y/2,Q=b/2,N=A/2,X=P+1,U=x+1;let G=0,V=0;const B=new O;for(let $=0;$<U;$++){const le=$*I-Q;for(let re=0;re<X;re++){const oe=re*R-ne;B[d]=oe*v,B[p]=le*S,B[_]=N,c.push(B.x,B.y,B.z),B[d]=0,B[p]=0,B[_]=A>0?1:-1,u.push(B.x,B.y,B.z),f.push(re/P),f.push(1-$/x),G+=1}}for(let $=0;$<x;$++)for(let le=0;le<P;le++){const re=h+le+X*$,oe=h+le+X*($+1),pe=h+(le+1)+X*($+1),Me=h+(le+1)+X*$;l.push(re,oe,Me),l.push(oe,pe,Me),V+=6}a.addGroup(m,V,T),m+=V,h+=G}}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function Dg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const ld={clone:is,merge:Mt};var Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends cd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(il*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=90,Fr=1;class Fg extends Dt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new $t(Ir,Fr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const s=new $t(Ir,Fr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);const o=new $t(Ir,Fr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new $t(Ir,Fr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new $t(Ir,Fr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new $t(Ir,Fr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ud extends Dn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Og extends Ii{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ud(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new so(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Ai});s.uniforms.tEquirect.value=t;const o=new ht(i,s),a=t.minFilter;return t.minFilter===ha&&(t.minFilter=cn),new Fg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Tl=new O,Ng=new O,zg=new un;class Ji{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tl.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zg.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new da,Ao=new O;class Uc{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],v=n[14],S=n[15];return t[0].setComponents(a-i,f-l,d-h,S-p).normalize(),t[1].setComponents(a+i,f+l,d+h,S+p).normalize(),t[2].setComponents(a+s,f+c,d+m,S+_).normalize(),t[3].setComponents(a-s,f-c,d-m,S-_).normalize(),t[4].setComponents(a-o,f-u,d-g,S-v).normalize(),t[5].setComponents(a+o,f+u,d+g,S+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ao.x=i.normal.x>0?e.max.x:e.min.x,Ao.y=i.normal.y>0?e.max.y:e.min.y,Ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ug(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Bc extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const v=_*h-o;for(let S=0;S<c;S++){const y=S*f-s;g.push(y,-v,0),d.push(0,0,1),p.push(S/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const S=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),A=v+1+c*_;m.push(S,y,A),m.push(y,b,A)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(p,2))}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg="vec3 transformed = vec3( position );",Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,$g=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,o_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d_=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,w_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,E_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,C_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,I_=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,F_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
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
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,Z_=`#ifdef USE_MORPHTARGETS
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
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,J_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,g0=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,_0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,x0=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,A0=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,P0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,L0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,D0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,R0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,I0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,F0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,G0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,H0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Q0=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ix=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hx=`uniform float rotation;
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
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:Bg,alphamap_pars_fragment:kg,alphatest_fragment:Gg,alphatest_pars_fragment:Vg,aomap_fragment:Hg,aomap_pars_fragment:Wg,begin_vertex:qg,beginnormal_vertex:Xg,bsdfs:jg,iridescence_fragment:$g,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:r_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:o_,displacementmap_pars_vertex:a_,displacementmap_vertex:l_,emissivemap_fragment:c_,emissivemap_pars_fragment:u_,encodings_fragment:f_,encodings_pars_fragment:h_,envmap_fragment:d_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:C_,envmap_vertex:__,fog_vertex:x_,fog_pars_vertex:v_,fog_fragment:y_,fog_pars_fragment:b_,gradientmap_pars_fragment:M_,lightmap_fragment:w_,lightmap_pars_fragment:S_,lights_lambert_vertex:T_,lights_pars_begin:E_,lights_toon_fragment:A_,lights_toon_pars_fragment:P_,lights_phong_fragment:L_,lights_phong_pars_fragment:D_,lights_physical_fragment:R_,lights_physical_pars_fragment:I_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:N_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:B_,logdepthbuf_vertex:k_,map_fragment:G_,map_pars_fragment:V_,map_particle_fragment:H_,map_particle_pars_fragment:W_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:X_,morphcolor_vertex:j_,morphnormal_vertex:$_,morphtarget_pars_vertex:Y_,morphtarget_vertex:Z_,normal_fragment_begin:K_,normal_fragment_maps:J_,normal_pars_fragment:Q_,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:o0,output_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:h0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:b0,skinnormal_vertex:M0,specularmap_fragment:w0,specularmap_pars_fragment:S0,tonemapping_fragment:T0,tonemapping_pars_fragment:E0,transmission_fragment:C0,transmission_pars_fragment:A0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:D0,uv2_pars_fragment:R0,uv2_pars_vertex:I0,uv2_vertex:F0,worldpos_vertex:O0,background_vert:N0,background_frag:z0,cube_vert:U0,cube_frag:B0,depth_vert:k0,depth_frag:G0,distanceRGBA_vert:V0,distanceRGBA_frag:H0,equirect_vert:W0,equirect_frag:q0,linedashed_vert:X0,linedashed_frag:j0,meshbasic_vert:$0,meshbasic_frag:Y0,meshlambert_vert:Z0,meshlambert_frag:K0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:fx,sprite_vert:hx,sprite_frag:dx},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new un},uv2Transform:{value:new un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}}},Nn={basic:{uniforms:Mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Mt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Mt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Mt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Mt([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Mt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Mt([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Mt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Mt([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new un},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:Mt([he.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Mt([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Mt([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Nn.physical={uniforms:Mt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function px(r,e,t,n,i,s){const o=new qe(0);let a=i===!0?0:1,l,c,u=null,f=0,h=null;function m(d,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const S=r.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fa)?(c===void 0&&(c=new ht(new so(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:is(Nn.cube.uniforms),vertexShader:Nn.cube.vertexShader,fragmentShader:Nn.cube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ht(new Bc(2,2),new si({name:"BackgroundMaterial",uniforms:is(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(o,a)},render:m}}function mx(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(N,X,U,G,V){let B=!1;if(o){const $=d(G,U,X);c!==$&&(c=$,m(c.object)),B=_(N,G,U,V),B&&v(N,G,U,V)}else{const $=X.wireframe===!0;(c.geometry!==G.id||c.program!==U.id||c.wireframe!==$)&&(c.geometry=G.id,c.program=U.id,c.wireframe=$,B=!0)}V!==null&&t.update(V,34963),(B||u)&&(u=!1,x(N,X,U,G),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,X,U){const G=U.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let B=V[X.id];B===void 0&&(B={},V[X.id]=B);let $=B[G];return $===void 0&&($=p(h()),B[G]=$),$}function p(N){const X=[],U=[],G=[];for(let V=0;V<i;V++)X[V]=0,U[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:U,attributeDivisors:G,object:N,attributes:{},index:null}}function _(N,X,U,G){const V=c.attributes,B=X.attributes;let $=0;const le=U.getAttributes();for(const re in le)if(le[re].location>=0){const pe=V[re];let Me=B[re];if(Me===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;$++}return c.attributesNum!==$||c.index!==G}function v(N,X,U,G){const V={},B=X.attributes;let $=0;const le=U.getAttributes();for(const re in le)if(le[re].location>=0){let pe=B[re];pe===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),V[re]=Me,$++}c.attributes=V,c.attributesNum=$,c.index=G}function S(){const N=c.newAttributes;for(let X=0,U=N.length;X<U;X++)N[X]=0}function y(N){b(N,0)}function b(N,X){const U=c.newAttributes,G=c.enabledAttributes,V=c.attributeDivisors;U[N]=1,G[N]===0&&(r.enableVertexAttribArray(N),G[N]=1),V[N]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),V[N]=X)}function A(){const N=c.newAttributes,X=c.enabledAttributes;for(let U=0,G=X.length;U<G;U++)X[U]!==N[U]&&(r.disableVertexAttribArray(U),X[U]=0)}function P(N,X,U,G,V,B){n.isWebGL2===!0&&(U===5124||U===5125)?r.vertexAttribIPointer(N,X,U,V,B):r.vertexAttribPointer(N,X,U,G,V,B)}function x(N,X,U,G){if(n.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const V=G.attributes,B=U.getAttributes(),$=X.defaultAttributeValues;for(const le in B){const re=B[le];if(re.location>=0){let oe=V[le];if(oe===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const pe=oe.normalized,Me=oe.itemSize,ee=t.get(oe);if(ee===void 0)continue;const De=ee.buffer,we=ee.type,Se=ee.bytesPerElement;if(oe.isInterleavedBufferAttribute){const xe=oe.data,He=xe.stride,Ce=oe.offset;if(xe.isInstancedInterleavedBuffer){for(let C=0;C<re.locationSize;C++)b(re.location+C,xe.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let C=0;C<re.locationSize;C++)y(re.location+C);r.bindBuffer(34962,De);for(let C=0;C<re.locationSize;C++)P(re.location+C,Me/re.locationSize,we,pe,He*Se,(Ce+Me/re.locationSize*C)*Se)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<re.locationSize;xe++)b(re.location+xe,oe.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<re.locationSize;xe++)y(re.location+xe);r.bindBuffer(34962,De);for(let xe=0;xe<re.locationSize;xe++)P(re.location+xe,Me/re.locationSize,we,pe,Me*Se,Me/re.locationSize*xe*Se)}}else if($!==void 0){const pe=$[le];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(re.location,pe);break;case 3:r.vertexAttrib3fv(re.location,pe);break;case 4:r.vertexAttrib4fv(re.location,pe);break;default:r.vertexAttrib1fv(re.location,pe)}}}}A()}function T(){ne();for(const N in a){const X=a[N];for(const U in X){const G=X[U];for(const V in G)g(G[V].object),delete G[V];delete X[U]}delete a[N]}}function R(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const U in X){const G=X[U];for(const V in G)g(G[V].object),delete G[V];delete X[U]}delete a[N.id]}function I(N){for(const X in a){const U=a[X];if(U[N.id]===void 0)continue;const G=U[N.id];for(const V in G)g(G[V].object),delete G[V];delete U[N.id]}}function ne(){Q(),u=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:Q,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:y,disableUnusedAttributes:A}}function gx(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function _x(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),v=r.getParameter(36349),S=h>0,y=o||e.has("OES_texture_float"),b=S&&y,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function xx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ji,a=new un,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,S=v*4;let y=_.clippingState||null;l.value=y,y=u(g,h,S,m);for(let b=0;b!==S;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,y=m;S!==d;++S,y+=4)o.copy(f[S]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function vx(r){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=es:a===Kl&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zl||a===Kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Og(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class kc extends cd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Mf=[.125,.215,.35,.446,.526,.582],nr=20,El=new kc,wf=new qe;let Cl=null;const Qi=(1+Math.sqrt(5))/2,Nr=1/Qi,Sf=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Qi,Nr),new O(0,Qi,-Nr),new O(Nr,0,Qi),new O(-Nr,0,Qi),new O(Qi,Nr,0),new O(-Qi,Nr,0)];class Tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vs,format:kn,encoding:_r,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(s)),this._blurMaterial=bx(s,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(wf),u.toneMapping=ii,u.autoClear=!1;const m=new sd({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new ht(new so,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(wf),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const S=this._cubeSize;Po(i,v*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,El)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Sf[(i-1)%Sf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ht(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):nr;p>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);const _=[];let v=0;for(let P=0;P<nr;++P){const x=P/d,T=Math.exp(-x*x/2);_.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<_.length;P++)_[P]=_[P]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const y=this._sizeLods[i],b=3*y*(i>S-Gr?i-S+Gr:0),A=4*(this._cubeSize-y);Po(t,b,A,3*y,2*y),l.setRenderTarget(t),l.render(f,El)}}function yx(r){const e=[],t=[],n=[];let i=r;const s=r-Gr+1+Mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Gr?l=Mf[o-r+Gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,v=new Float32Array(d*g*m),S=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,x=A>2?0:-1,T=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(T,d*g*A),S.set(h,p*g*A);const R=[A,A,A,A,A,A];y.set(R,_*g*A)}const b=new tn;b.setAttribute("position",new An(v,d)),b.setAttribute("uv",new An(S,p)),b.setAttribute("faceIndex",new An(y,_)),e.push(b),i>Gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bx(r,e,t){const n=new Float32Array(nr),i=new O(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cf(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Af(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function Mx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Kl,u=l===es||l===ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Tf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Tf(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sx(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let S=0,y=v.length;S<y;S+=3){const b=v[S+0],A=v[S+1],P=v[S+2];h.push(b,A,A,P,P,b)}}else{const v=g.array;d=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const b=S+0,A=S+1,P=S+2;h.push(b,A,A,P,P,b)}}const p=new(Jh(h)?ad:od)(h,1);p.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Tx(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Ex(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cx(r,e){return r[0]-e[0]}function Ax(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Al(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Px(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let U=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),b===!0&&(R=2),A===!0&&(R=3);let I=u.attributes.position.count*R,ne=1;I>e.maxTextureSize&&(ne=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Q=new Float32Array(I*ne*4*p),N=new nd(Q,I,ne,p);N.type=or,N.needsUpdate=!0;const X=R*4;for(let G=0;G<p;G++){const V=P[G],B=x[G],$=T[G],le=I*ne*4*G;for(let re=0;re<V.count;re++){const oe=re*X;y===!0&&(o.fromBufferAttribute(V,re),V.normalized===!0&&Al(o,V),Q[le+oe+0]=o.x,Q[le+oe+1]=o.y,Q[le+oe+2]=o.z,Q[le+oe+3]=0),b===!0&&(o.fromBufferAttribute(B,re),B.normalized===!0&&Al(o,B),Q[le+oe+4]=o.x,Q[le+oe+5]=o.y,Q[le+oe+6]=o.z,Q[le+oe+7]=0),A===!0&&(o.fromBufferAttribute($,re),$.normalized===!0&&Al(o,$),Q[le+oe+8]=o.x,Q[le+oe+9]=o.y,Q[le+oe+10]=o.z,Q[le+oe+11]=$.itemSize===4?o.w:1)}}_={count:p,texture:N,size:new Ue(I,ne)},s.set(u,_),u.addEventListener("dispose",U)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];const S=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let b=0;b<d;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<d;b++){const A=p[b];A[0]=b,A[1]=m[b]}p.sort(Ax);for(let b=0;b<8;b++)b<d&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Cx);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let S=0;for(let b=0;b<8;b++){const A=a[b],P=A[0],x=A[1];P!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+b)!==_[P]&&u.setAttribute("morphTarget"+b,_[P]),v&&u.getAttribute("morphNormal"+b)!==v[P]&&u.setAttribute("morphNormal"+b,v[P]),i[b]=x,S+=x):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),v&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Lx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hd=new Dn,dd=new nd,pd=new yg,md=new ud,Pf=[],Lf=[],Df=new Float32Array(16),Rf=new Float32Array(9),If=new Float32Array(4);function gs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pf[i];if(s===void 0&&(s=new Float32Array(i),Pf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pa(r,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Dx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function Ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;If.set(n),r.uniformMatrix2fv(this.addr,!1,If),It(t,n)}}function Nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Rf.set(n),r.uniformMatrix3fv(this.addr,!1,Rf),It(t,n)}}function zx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Df.set(n),r.uniformMatrix4fv(this.addr,!1,Df),It(t,n)}}function Ux(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bx(r,e){const t=this.cache;Rt(t,e)||(r.uniform2iv(this.addr,e),It(t,e))}function kx(r,e){const t=this.cache;Rt(t,e)||(r.uniform3iv(this.addr,e),It(t,e))}function Gx(r,e){const t=this.cache;Rt(t,e)||(r.uniform4iv(this.addr,e),It(t,e))}function Vx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hx(r,e){const t=this.cache;Rt(t,e)||(r.uniform2uiv(this.addr,e),It(t,e))}function Wx(r,e){const t=this.cache;Rt(t,e)||(r.uniform3uiv(this.addr,e),It(t,e))}function qx(r,e){const t=this.cache;Rt(t,e)||(r.uniform4uiv(this.addr,e),It(t,e))}function Xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||hd,i)}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pd,i)}function $x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||md,i)}function Yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function Zx(r){switch(r){case 5126:return Dx;case 35664:return Rx;case 35665:return Ix;case 35666:return Fx;case 35674:return Ox;case 35675:return Nx;case 35676:return zx;case 5124:case 35670:return Ux;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Hx;case 36295:return Wx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Yx}}function Kx(r,e){r.uniform1fv(this.addr,e)}function Jx(r,e){const t=gs(e,this.size,2);r.uniform2fv(this.addr,t)}function Qx(r,e){const t=gs(e,this.size,3);r.uniform3fv(this.addr,t)}function ev(r,e){const t=gs(e,this.size,4);r.uniform4fv(this.addr,t)}function tv(r,e){const t=gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nv(r,e){const t=gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iv(r,e){const t=gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rv(r,e){r.uniform1iv(this.addr,e)}function sv(r,e){r.uniform2iv(this.addr,e)}function ov(r,e){r.uniform3iv(this.addr,e)}function av(r,e){r.uniform4iv(this.addr,e)}function lv(r,e){r.uniform1uiv(this.addr,e)}function cv(r,e){r.uniform2uiv(this.addr,e)}function uv(r,e){r.uniform3uiv(this.addr,e)}function fv(r,e){r.uniform4uiv(this.addr,e)}function hv(r,e,t){const n=e.length,i=pa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||hd,i[s])}function dv(r,e,t){const n=e.length,i=pa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||pd,i[s])}function pv(r,e,t){const n=e.length,i=pa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||md,i[s])}function mv(r,e,t){const n=e.length,i=pa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||dd,i[s])}function gv(r){switch(r){case 5126:return Kx;case 35664:return Jx;case 35665:return Qx;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zx(t.type)}}class xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gv(t.type)}}class vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function Ff(r,e){r.seq.push(e),r.map[e.id]=e}function yv(r,e,t){const n=r.name,i=n.length;for(Pl.lastIndex=0;;){const s=Pl.exec(n),o=Pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ff(t,c===void 0?new _v(a,r,e):new xv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new vv(a),Ff(t,f)),t=f}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);yv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Of(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let bv=0;function Mv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wv(r){switch(r){case _r:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Nf(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Mv(r.getShaderSource(e),o)}else return i}function Sv(r,e){const t=wv(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tv(r,e){let t;switch(e){case jm:t="Linear";break;case $m:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case Zm:t="ACESFilmic";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ev(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function Cv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function As(r){return r!==""}function zf(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(r){return r.replace(Pv,Lv)}function Lv(r,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nc(t)}const Dv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(r){return r.replace(Rv,gd).replace(Dv,Iv)}function Iv(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),gd(r,e,t,n)}function gd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Cs&&(e="SHADOWMAP_TYPE_VSM"),e}function Ov(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function zv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case qm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fv(t),c=Ov(t),u=Nv(t),f=zv(t),h=Uv(t),m=t.isWebGL2?"":Ev(t),g=Cv(s),d=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(As).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(As).join(`
`),_.length>0&&(_+=`
`)):(p=[kf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),_=[m,kf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ii?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Sv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=nc(o),o=zf(o,t),o=Uf(o,t),a=nc(a),a=zf(a,t),a=Uf(a,t),o=Bf(o),a=Bf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+p+o,y=v+_+a,b=Of(i,35633,S),A=Of(i,35632,y);if(i.attachShader(d,b),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(b).trim(),I=i.getShaderInfoLog(A).trim();let ne=!0,Q=!0;if(i.getProgramParameter(d,35714)===!1){ne=!1;const N=Nf(i,b,"vertex"),X=Nf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+N+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||I==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ne,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:I,prefix:_}})}i.deleteShader(b),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new ko(i,d)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=Av(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=A,this}let kv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Vv(e);t.set(e,n)}return t.get(e)}}class Vv{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}}function Hv(r,e,t,n,i,s,o){const a=new rd,l=new Gv,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,R,I,ne){const Q=I.fog,N=ne.geometry,X=x.isMeshStandardMaterial?I.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),G=!!U&&U.mapping===fa?U.image.height:null,V=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const B=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=B!==void 0?B.length:0;let le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let re,oe,pe,Me;if(V){const He=Nn[V];re=He.vertexShader,oe=He.fragmentShader}else re=x.vertexShader,oe=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const ee=r.getRenderTarget(),De=x.alphaTest>0,we=x.clearcoat>0,Se=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:re,fragmentShader:oe,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ee===null?r.outputEncoding:ee.isXRRenderTarget===!0?ee.texture.encoding:_r,map:!!x.map,matcap:!!x.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:G,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===gg,tangentSpaceNormalMap:x.normalMapType===Kh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===nt,clearcoat:we,clearcoatMap:we&&!!x.clearcoatMap,clearcoatRoughnessMap:we&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!x.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!x.iridescenceMap,iridescenceThicknessMap:Se&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Xr,alphaMap:!!x.alphaMap,alphaTest:De,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!N.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Q,useFog:x.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:ii,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qr,flipSided:x.side===Cn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(T,x),v(T,x),T.push(r.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),x.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),x.push(a.mask)}function S(x){const T=g[x.type];let R;if(T){const I=Nn[T];R=ld.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,T){let R;for(let I=0,ne=c.length;I<ne;I++){const Q=c[I];if(Q.cacheKey===T){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new Bv(r,T,x,s),c.push(R)),R}function b(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:P}}function Wv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,m,g,d,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function a(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||qv),n.length>1&&n.sort(h||Gf),i.length>1&&i.sort(h||Gf)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Xv(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Vf,r.set(n,[s])):i>=r.get(n).length?(s=new Vf,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function $v(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Yv=0;function Zv(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Kv(r,e){const t=new jv,n=$v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,o=new at,a=new at;function l(u,f){let h=0,m=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,_=0,v=0,S=0,y=0,b=0,A=0;u.sort(Zv);const P=f!==!0?Math.PI:1;for(let T=0,R=u.length;T<R;T++){const I=u[T],ne=I.color,Q=I.intensity,N=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=ne.r*Q*P,m+=ne.g*Q*P,g+=ne.b*Q*P;else if(I.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],Q);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*P),I.castShadow){const G=I.shadow,V=n.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=I.shadow.matrix,y++}i.directional[d]=U,d++}else if(I.isSpotLight){const U=t.get(I);if(U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(ne).multiplyScalar(Q*P),U.distance=N,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,I.castShadow){const G=I.shadow,V=n.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=X,i.spotShadowMatrix[_]=I.shadow.matrix,A++}i.spot[_]=U,_++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(ne).multiplyScalar(Q),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=U,v++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*P),U.distance=I.distance,U.decay=I.decay,I.castShadow){const G=I.shadow,V=n.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=U,p++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(Q*P),U.groundColor.copy(I.groundColor).multiplyScalar(Q*P),i.hemi[S]=U,S++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==v||x.hemiLength!==S||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=A,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=v,x.hemiLength=S,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=A,i.version=Yv++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const y=u[v];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Hf(r,e){const t=new Kv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jv(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Hf(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Hf(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Qv extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ey extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
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
}`;function iy(r,e,t){let n=new Uc;const i=new Ue,s=new Ue,o=new Ke,a=new Qv({depthPacking:mg}),l=new ey,c={},u=t.maxTextureSize,f={0:Cn,1:Gs,2:Qr},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ht(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh,this.render=function(y,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Ai),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,ne=y.length;I<ne;I++){const Q=y[I],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const X=N.getFrameExtents();if(i.multiply(X),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const G=this.type!==Cs?{minFilter:Nt,magFilter:Nt}:{};N.map=new Ii(i.x,i.y,G),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const U=N.getViewportCount();for(let G=0;G<U;G++){const V=N.getViewport(G);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(o),N.updateMatrices(Q,G),n=N.getFrustum(),S(b,A,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===Cs&&_(N,A),N.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(P,x,T)};function _(y,b){const A=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ii(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(b,null,A,h,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(b,null,A,m,d,null)}function v(y,b,A,P,x,T){let R=null;const I=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0?R=I:R=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const ne=R.uuid,Q=b.uuid;let N=c[ne];N===void 0&&(N={},c[ne]=N);let X=N[Q];X===void 0&&(X=R.clone(),N[Q]=X),R=X}return R.visible=b.visible,R.wireframe=b.wireframe,T===Cs?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:f[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=P,R.farDistance=x),R}function S(y,b,A,P,x){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Cs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const I=e.update(y),ne=y.material;if(Array.isArray(ne)){const Q=I.groups;for(let N=0,X=Q.length;N<X;N++){const U=Q[N],G=ne[U.materialIndex];if(G&&G.visible){const V=v(y,G,P,A.near,A.far,x);r.renderBufferDirect(A,null,I,V,y,U)}}}else if(ne.visible){const Q=v(y,ne,P,A.near,A.far,x);r.renderBufferDirect(A,null,I,Q,y,null)}}const R=y.children;for(let I=0,ne=R.length;I<ne;I++)S(R[I],b,A,P,x)}}function ry(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const ge=new Ke;let Z=null;const ve=new Ke(0,0,0,0);return{setMask:function(_e){Z!==_e&&!D&&(r.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Ge,mt,st,hi){hi===!0&&(_e*=st,Ge*=st,mt*=st),ge.set(_e,Ge,mt,st),ve.equals(ge)===!1&&(r.clearColor(_e,Ge,mt,st),ve.copy(ge))},reset:function(){D=!1,Z=null,ve.set(-1,0,0,0)}}}function s(){let D=!1,ge=null,Z=null,ve=null;return{setTest:function(_e){_e?De(2929):we(2929)},setMask:function(_e){ge!==_e&&!D&&(r.depthMask(_e),ge=_e)},setFunc:function(_e){if(Z!==_e){if(_e)switch(_e){case Um:r.depthFunc(512);break;case Bm:r.depthFunc(519);break;case km:r.depthFunc(513);break;case Yl:r.depthFunc(515);break;case Gm:r.depthFunc(514);break;case Vm:r.depthFunc(518);break;case Hm:r.depthFunc(516);break;case Wm:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Z=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ve!==_e&&(r.clearDepth(_e),ve=_e)},reset:function(){D=!1,ge=null,Z=null,ve=null}}}function o(){let D=!1,ge=null,Z=null,ve=null,_e=null,Ge=null,mt=null,st=null,hi=null;return{setTest:function(et){D||(et?De(2960):we(2960))},setMask:function(et){ge!==et&&!D&&(r.stencilMask(et),ge=et)},setFunc:function(et,Wn,nn){(Z!==et||ve!==Wn||_e!==nn)&&(r.stencilFunc(et,Wn,nn),Z=et,ve=Wn,_e=nn)},setOp:function(et,Wn,nn){(Ge!==et||mt!==Wn||st!==nn)&&(r.stencilOp(et,Wn,nn),Ge=et,mt=Wn,st=nn)},setLocked:function(et){D=et},setClear:function(et){hi!==et&&(r.clearStencil(et),hi=et)},reset:function(){D=!1,ge=null,Z=null,ve=null,_e=null,Ge=null,mt=null,st=null,hi=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,S=null,y=null,b=null,A=null,P=null,x=null,T=!1,R=null,I=null,ne=null,Q=null,N=null;const X=r.getParameter(35661);let U=!1,G=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=G>=2);let B=null,$={};const le=r.getParameter(3088),re=r.getParameter(2978),oe=new Ke().fromArray(le),pe=new Ke().fromArray(re);function Me(D,ge,Z){const ve=new Uint8Array(4),_e=r.createTexture();r.bindTexture(D,_e),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let Ge=0;Ge<Z;Ge++)r.texImage2D(ge+Ge,0,6408,1,1,0,6408,5121,ve);return _e}const ee={};ee[3553]=Me(3553,3553,1),ee[34067]=Me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(Yl),K(!1),J(Du),De(2884),L(Ai);function De(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function we(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Se(D,ge){return m[D]!==ge?(r.bindFramebuffer(D,ge),m[D]=ge,n&&(D===36009&&(m[36160]=ge),D===36160&&(m[36009]=ge)),!0):!1}function xe(D,ge){let Z=d,ve=!1;if(D)if(Z=g.get(ge),Z===void 0&&(Z=[],g.set(ge,Z)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(Z.length!==_e.length||Z[0]!==36064){for(let Ge=0,mt=_e.length;Ge<mt;Ge++)Z[Ge]=36064+Ge;Z.length=_e.length,ve=!0}}else Z[0]!==36064&&(Z[0]=36064,ve=!0);else Z[0]!==1029&&(Z[0]=1029,ve=!0);ve&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function He(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const Ce={[Ur]:32774,[Cm]:32778,[Am]:32779};if(n)Ce[Ou]=32775,Ce[Nu]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ce[Ou]=D.MIN_EXT,Ce[Nu]=D.MAX_EXT)}const C={[Pm]:0,[Lm]:1,[Dm]:768,[jh]:770,[zm]:776,[Om]:774,[Im]:772,[Rm]:769,[$h]:771,[Nm]:775,[Fm]:773};function L(D,ge,Z,ve,_e,Ge,mt,st){if(D===Ai){_===!0&&(we(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),D!==Em){if(D!==v||st!==T){if((S!==Ur||A!==Ur)&&(r.blendEquation(32774),S=Ur,A=Ur),st)switch(D){case Xr:r.blendFuncSeparate(1,771,1,771);break;case Ru:r.blendFunc(1,1);break;case Iu:r.blendFuncSeparate(0,769,0,1);break;case Fu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xr:r.blendFuncSeparate(770,771,1,771);break;case Ru:r.blendFunc(770,1);break;case Iu:r.blendFuncSeparate(0,769,0,1);break;case Fu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,P=null,x=null,v=D,T=st}return}_e=_e||ge,Ge=Ge||Z,mt=mt||ve,(ge!==S||_e!==A)&&(r.blendEquationSeparate(Ce[ge],Ce[_e]),S=ge,A=_e),(Z!==y||ve!==b||Ge!==P||mt!==x)&&(r.blendFuncSeparate(C[Z],C[ve],C[Ge],C[mt]),y=Z,b=ve,P=Ge,x=mt),v=D,T=null}function q(D,ge){D.side===Qr?we(2884):De(2884);let Z=D.side===Cn;ge&&(Z=!Z),K(Z),D.blending===Xr&&D.transparent===!1?L(Ai):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ve=D.stencilWrite;c.setTest(ve),ve&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(32926):we(32926)}function K(D){R!==D&&(D?r.frontFace(2304):r.frontFace(2305),R=D)}function J(D){D!==Mm?(De(2884),D!==I&&(D===Du?r.cullFace(1029):D===wm?r.cullFace(1028):r.cullFace(1032))):we(2884),I=D}function se(D){D!==ne&&(U&&r.lineWidth(D),ne=D)}function ae(D,ge,Z){D?(De(32823),(Q!==ge||N!==Z)&&(r.polygonOffset(ge,Z),Q=ge,N=Z)):we(32823)}function ce(D){D?De(3089):we(3089)}function ue(D){D===void 0&&(D=33984+X-1),B!==D&&(r.activeTexture(D),B=D)}function w(D,ge){B===null&&ue();let Z=$[B];Z===void 0&&(Z={type:void 0,texture:void 0},$[B]=Z),(Z.type!==D||Z.texture!==ge)&&(r.bindTexture(D,ge||ee[D]),Z.type=D,Z.texture=ge)}function M(){const D=$[B];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function F(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){oe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function ye(D){pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function Te(D,ge){let Z=f.get(ge);Z===void 0&&(Z=new WeakMap,f.set(ge,Z));let ve=Z.get(D);ve===void 0&&(ve=r.getUniformBlockIndex(ge,D.name),Z.set(D,ve))}function Be(D,ge){const ve=f.get(ge).get(D);u.get(D)!==ve&&(r.uniformBlockBinding(ge,ve,D.__bindingPointIndex),u.set(D,ve))}function Oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},B=null,$={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,S=null,y=null,b=null,A=null,P=null,x=null,T=!1,R=null,I=null,ne=null,Q=null,N=null,oe.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:we,bindFramebuffer:Se,drawBuffers:xe,useProgram:He,setBlending:L,setMaterial:q,setFlipSided:K,setCullFace:J,setLineWidth:se,setPolygonOffset:ae,setScissorTest:ce,activeTexture:ue,bindTexture:w,unbindTexture:M,compressedTexImage2D:F,texImage2D:fe,texImage3D:de,updateUBOMapping:Te,uniformBlockBinding:Be,texStorage2D:me,texStorage3D:z,texSubImage2D:H,texSubImage3D:Y,compressedTexSubImage2D:ie,scissor:be,viewport:ye,reset:Oe}}function sy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return _?new OffscreenCanvas(w,M):Yo("canvas")}function S(w,M,F,H){let Y=1;if((w.width>H||w.height>H)&&(Y=H/Math.max(w.width,w.height)),Y<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ie=M?tc:Math.floor,me=ie(Y*w.width),z=ie(Y*w.height);d===void 0&&(d=v(me,z));const fe=F?v(me,z):d;return fe.width=me,fe.height=z,fe.getContext("2d").drawImage(w,0,0,me,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+me+"x"+z+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return uf(w.width)&&uf(w.height)}function b(w){return a?!1:w.wrapS!==wn||w.wrapT!==wn||w.minFilter!==Nt&&w.minFilter!==cn}function A(w,M){return w.generateMipmaps&&M&&w.minFilter!==Nt&&w.minFilter!==cn}function P(w){r.generateMipmap(w)}function x(w,M,F,H,Y=!1){if(a===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=M;return M===6403&&(F===5126&&(ie=33326),F===5131&&(ie=33325),F===5121&&(ie=33321)),M===33319&&(F===5126&&(ie=33328),F===5131&&(ie=33327),F===5121&&(ie=33323)),M===6408&&(F===5126&&(ie=34836),F===5131&&(ie=34842),F===5121&&(ie=H===nt&&Y===!1?35907:32856),F===32819&&(ie=32854),F===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function T(w,M,F){return A(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){return w===Nt||w===zu||w===Uu?9728:9729}function I(w){const M=w.target;M.removeEventListener("dispose",I),Q(M),M.isVideoTexture&&g.delete(M)}function ne(w){const M=w.target;M.removeEventListener("dispose",ne),X(M)}function Q(w){const M=n.get(w);if(M.__webglInit===void 0)return;const F=w.source,H=p.get(F);if(H){const Y=H[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&N(w),Object.keys(H).length===0&&p.delete(F)}n.remove(w)}function N(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const F=w.source,H=p.get(F);delete H[M.__cacheKey],o.memory.textures--}function X(w){const M=w.texture,F=n.get(w),H=n.get(M);if(H.__webglTexture!==void 0&&(r.deleteTexture(H.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)r.deleteFramebuffer(F.__webglFramebuffer[Y]),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Y]);else{if(r.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Y=0;Y<F.__webglColorRenderbuffer.length;Y++)F.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Y]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Y=0,ie=M.length;Y<ie;Y++){const me=n.get(M[Y]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(M[Y])}n.remove(M),n.remove(w)}let U=0;function G(){U=0}function V(){const w=U;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),U+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function $(w,M){const F=n.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const H=w.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,F.__webglTexture)}function le(w,M){const F=n.get(w);if(w.version>0&&F.__version!==w.version){we(F,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,F.__webglTexture)}function re(w,M){const F=n.get(w);if(w.version>0&&F.__version!==w.version){we(F,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,F.__webglTexture)}function oe(w,M){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Se(F,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,F.__webglTexture)}const pe={[Jl]:10497,[wn]:33071,[Ql]:33648},Me={[Nt]:9728,[zu]:9984,[Uu]:9986,[cn]:9729,[Jm]:9985,[ha]:9987};function ee(w,M,F){if(F?(r.texParameteri(w,10242,pe[M.wrapS]),r.texParameteri(w,10243,pe[M.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,pe[M.wrapR]),r.texParameteri(w,10240,Me[M.magFilter]),r.texParameteri(w,10241,Me[M.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(M.wrapS!==wn||M.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,R(M.magFilter)),r.texParameteri(w,10241,R(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(M.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function De(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",I));const H=M.source;let Y=p.get(H);Y===void 0&&(Y={},p.set(H,Y));const ie=B(M);if(ie!==w.__cacheKey){Y[ie]===void 0&&(Y[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Y[ie].usedTimes++;const me=Y[w.__cacheKey];me!==void 0&&(Y[w.__cacheKey].usedTimes--,me.usedTimes===0&&N(M)),w.__cacheKey=ie,w.__webglTexture=Y[ie].texture}return F}function we(w,M,F){let H=3553;M.isDataArrayTexture&&(H=35866),M.isData3DTexture&&(H=32879);const Y=De(w,M),ie=M.source;if(t.activeTexture(33984+F),t.bindTexture(H,w.__webglTexture),ie.version!==ie.__currentVersion||Y===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const me=b(M)&&y(M.image)===!1;let z=S(M.image,me,!1,u);z=ue(M,z);const fe=y(z)||a,de=s.convert(M.format,M.encoding);let be=s.convert(M.type),ye=x(M.internalFormat,de,be,M.encoding,M.isVideoTexture);ee(H,M,fe);let Te;const Be=M.mipmaps,Oe=a&&M.isVideoTexture!==!0,D=ie.__currentVersion===void 0||Y===!0,ge=T(M,z,fe);if(M.isDepthTexture)ye=6402,a?M.type===or?ye=36012:M.type===sr?ye=33190:M.type===jr?ye=35056:ye=33189:M.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===cr&&ye===6402&&M.type!==Zh&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,be=s.convert(M.type)),M.format===ns&&ye===6402&&(ye=34041,M.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=jr,be=s.convert(M.type))),D&&(Oe?t.texStorage2D(3553,1,ye,z.width,z.height):t.texImage2D(3553,0,ye,z.width,z.height,0,de,be,null));else if(M.isDataTexture)if(Be.length>0&&fe){Oe&&D&&t.texStorage2D(3553,ge,ye,Be[0].width,Be[0].height);for(let Z=0,ve=Be.length;Z<ve;Z++)Te=Be[Z],Oe?t.texSubImage2D(3553,Z,0,0,Te.width,Te.height,de,be,Te.data):t.texImage2D(3553,Z,ye,Te.width,Te.height,0,de,be,Te.data);M.generateMipmaps=!1}else Oe?(D&&t.texStorage2D(3553,ge,ye,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,de,be,z.data)):t.texImage2D(3553,0,ye,z.width,z.height,0,de,be,z.data);else if(M.isCompressedTexture){Oe&&D&&t.texStorage2D(3553,ge,ye,Be[0].width,Be[0].height);for(let Z=0,ve=Be.length;Z<ve;Z++)Te=Be[Z],M.format!==kn?de!==null?Oe?t.compressedTexSubImage2D(3553,Z,0,0,Te.width,Te.height,de,Te.data):t.compressedTexImage2D(3553,Z,ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,Z,0,0,Te.width,Te.height,de,be,Te.data):t.texImage2D(3553,Z,ye,Te.width,Te.height,0,de,be,Te.data)}else if(M.isDataArrayTexture)Oe?(D&&t.texStorage3D(35866,ge,ye,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,de,be,z.data)):t.texImage3D(35866,0,ye,z.width,z.height,z.depth,0,de,be,z.data);else if(M.isData3DTexture)Oe?(D&&t.texStorage3D(32879,ge,ye,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,de,be,z.data)):t.texImage3D(32879,0,ye,z.width,z.height,z.depth,0,de,be,z.data);else if(M.isFramebufferTexture){if(D)if(Oe)t.texStorage2D(3553,ge,ye,z.width,z.height);else{let Z=z.width,ve=z.height;for(let _e=0;_e<ge;_e++)t.texImage2D(3553,_e,ye,Z,ve,0,de,be,null),Z>>=1,ve>>=1}}else if(Be.length>0&&fe){Oe&&D&&t.texStorage2D(3553,ge,ye,Be[0].width,Be[0].height);for(let Z=0,ve=Be.length;Z<ve;Z++)Te=Be[Z],Oe?t.texSubImage2D(3553,Z,0,0,de,be,Te):t.texImage2D(3553,Z,ye,de,be,Te);M.generateMipmaps=!1}else Oe?(D&&t.texStorage2D(3553,ge,ye,z.width,z.height),t.texSubImage2D(3553,0,0,0,de,be,z)):t.texImage2D(3553,0,ye,de,be,z);A(M,fe)&&P(H),ie.__currentVersion=ie.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Se(w,M,F){if(M.image.length!==6)return;const H=De(w,M),Y=M.source;if(t.activeTexture(33984+F),t.bindTexture(34067,w.__webglTexture),Y.version!==Y.__currentVersion||H===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const ie=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,z=[];for(let Z=0;Z<6;Z++)!ie&&!me?z[Z]=S(M.image[Z],!1,!0,c):z[Z]=me?M.image[Z].image:M.image[Z],z[Z]=ue(M,z[Z]);const fe=z[0],de=y(fe)||a,be=s.convert(M.format,M.encoding),ye=s.convert(M.type),Te=x(M.internalFormat,be,ye,M.encoding),Be=a&&M.isVideoTexture!==!0,Oe=Y.__currentVersion===void 0||H===!0;let D=T(M,fe,de);ee(34067,M,de);let ge;if(ie){Be&&Oe&&t.texStorage2D(34067,D,Te,fe.width,fe.height);for(let Z=0;Z<6;Z++){ge=z[Z].mipmaps;for(let ve=0;ve<ge.length;ve++){const _e=ge[ve];M.format!==kn?be!==null?Be?t.compressedTexSubImage2D(34069+Z,ve,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(34069+Z,ve,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+Z,ve,0,0,_e.width,_e.height,be,ye,_e.data):t.texImage2D(34069+Z,ve,Te,_e.width,_e.height,0,be,ye,_e.data)}}}else{ge=M.mipmaps,Be&&Oe&&(ge.length>0&&D++,t.texStorage2D(34067,D,Te,z[0].width,z[0].height));for(let Z=0;Z<6;Z++)if(me){Be?t.texSubImage2D(34069+Z,0,0,0,z[Z].width,z[Z].height,be,ye,z[Z].data):t.texImage2D(34069+Z,0,Te,z[Z].width,z[Z].height,0,be,ye,z[Z].data);for(let ve=0;ve<ge.length;ve++){const Ge=ge[ve].image[Z].image;Be?t.texSubImage2D(34069+Z,ve+1,0,0,Ge.width,Ge.height,be,ye,Ge.data):t.texImage2D(34069+Z,ve+1,Te,Ge.width,Ge.height,0,be,ye,Ge.data)}}else{Be?t.texSubImage2D(34069+Z,0,0,0,be,ye,z[Z]):t.texImage2D(34069+Z,0,Te,be,ye,z[Z]);for(let ve=0;ve<ge.length;ve++){const _e=ge[ve];Be?t.texSubImage2D(34069+Z,ve+1,0,0,be,ye,_e.image[Z]):t.texImage2D(34069+Z,ve+1,Te,be,ye,_e.image[Z])}}}A(M,de)&&P(34067),Y.__currentVersion=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xe(w,M,F,H,Y){const ie=s.convert(F.format,F.encoding),me=s.convert(F.type),z=x(F.internalFormat,ie,me,F.encoding);n.get(M).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,z,M.width,M.height,M.depth,0,ie,me,null):t.texImage2D(Y,0,z,M.width,M.height,0,ie,me,null)),t.bindFramebuffer(36160,w),ae(M)?h.framebufferTexture2DMultisampleEXT(36160,H,Y,n.get(F).__webglTexture,0,se(M)):r.framebufferTexture2D(36160,H,Y,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(w,M,F){if(r.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let H=33189;if(F||ae(M)){const Y=M.depthTexture;Y&&Y.isDepthTexture&&(Y.type===or?H=36012:Y.type===sr&&(H=33190));const ie=se(M);ae(M)?h.renderbufferStorageMultisampleEXT(36161,ie,H,M.width,M.height):r.renderbufferStorageMultisample(36161,ie,H,M.width,M.height)}else r.renderbufferStorage(36161,H,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const H=se(M);F&&ae(M)===!1?r.renderbufferStorageMultisample(36161,H,35056,M.width,M.height):ae(M)?h.renderbufferStorageMultisampleEXT(36161,H,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const H=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0;Y<H.length;Y++){const ie=H[Y],me=s.convert(ie.format,ie.encoding),z=s.convert(ie.type),fe=x(ie.internalFormat,me,z,ie.encoding),de=se(M);F&&ae(M)===!1?r.renderbufferStorageMultisample(36161,de,fe,M.width,M.height):ae(M)?h.renderbufferStorageMultisampleEXT(36161,de,fe,M.width,M.height):r.renderbufferStorage(36161,fe,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Ce(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const H=n.get(M.depthTexture).__webglTexture,Y=se(M);if(M.depthTexture.format===cr)ae(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):r.framebufferTexture2D(36160,36096,3553,H,0);else if(M.depthTexture.format===ns)ae(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):r.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function C(w){const M=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,w)}else if(F){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]=r.createRenderbuffer(),He(M.__webglDepthbuffer[H],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),He(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function L(w,M,F){const H=n.get(w);M!==void 0&&xe(H.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&C(w)}function q(w){const M=w.texture,F=n.get(w),H=n.get(M);w.addEventListener("dispose",ne),w.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=M.version,o.memory.textures++);const Y=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,me=y(w)||a;if(Y){F.__webglFramebuffer=[];for(let z=0;z<6;z++)F.__webglFramebuffer[z]=r.createFramebuffer()}else{if(F.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){const z=w.texture;for(let fe=0,de=z.length;fe<de;fe++){const be=n.get(z[fe]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ae(w)===!1){const z=ie?M:[M];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let fe=0;fe<z.length;fe++){const de=z[fe];F.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(36161,F.__webglColorRenderbuffer[fe]);const be=s.convert(de.format,de.encoding),ye=s.convert(de.type),Te=x(de.internalFormat,be,ye,de.encoding),Be=se(w);r.renderbufferStorageMultisample(36161,Be,Te,w.width,w.height),r.framebufferRenderbuffer(36160,36064+fe,36161,F.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),He(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),ee(34067,M,me);for(let z=0;z<6;z++)xe(F.__webglFramebuffer[z],w,M,36064,34069+z);A(M,me)&&P(34067),t.unbindTexture()}else if(ie){const z=w.texture;for(let fe=0,de=z.length;fe<de;fe++){const be=z[fe],ye=n.get(be);t.bindTexture(3553,ye.__webglTexture),ee(3553,be,me),xe(F.__webglFramebuffer,w,be,36064+fe,3553),A(be,me)&&P(3553)}t.unbindTexture()}else{let z=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?z=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,H.__webglTexture),ee(z,M,me),xe(F.__webglFramebuffer,w,M,36064,z),A(M,me)&&P(z),t.unbindTexture()}w.depthBuffer&&C(w)}function K(w){const M=y(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let H=0,Y=F.length;H<Y;H++){const ie=F[H];if(A(ie,M)){const me=w.isWebGLCubeRenderTarget?34067:3553,z=n.get(ie).__webglTexture;t.bindTexture(me,z),P(me),t.unbindTexture()}}}function J(w){if(a&&w.samples>0&&ae(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,H=w.height;let Y=16384;const ie=[],me=w.stencilBuffer?33306:36096,z=n.get(w),fe=w.isWebGLMultipleRenderTargets===!0;if(fe)for(let de=0;de<M.length;de++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let de=0;de<M.length;de++){ie.push(36064+de),w.depthBuffer&&ie.push(me);const be=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(be===!1&&(w.depthBuffer&&(Y|=256),w.stencilBuffer&&(Y|=1024)),fe&&r.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[de]),be===!0&&(r.invalidateFramebuffer(36008,[me]),r.invalidateFramebuffer(36009,[me])),fe){const ye=n.get(M[de]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ye,0)}r.blitFramebuffer(0,0,F,H,0,0,F,H,Y,9728),m&&r.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let de=0;de<M.length;de++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,z.__webglColorRenderbuffer[de]);const be=n.get(M[de]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,be,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function se(w){return Math.min(f,w.samples)}function ae(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(w){const M=o.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ue(w,M){const F=w.encoding,H=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ec||F!==_r&&(F===nt?a===!1?e.has("EXT_sRGB")===!0&&H===kn?(w.format=ec,w.minFilter=cn,w.generateMipmaps=!1):M=ed.sRGBToLinear(M):(H!==kn||Y!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),M}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=L,this.setupRenderTarget=q,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ae}function oy(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===gr)return 5121;if(s===ng)return 32819;if(s===ig)return 32820;if(s===Qm)return 5120;if(s===eg)return 5122;if(s===Zh)return 5123;if(s===tg)return 5124;if(s===sr)return 5125;if(s===or)return 5126;if(s===Vs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rg)return 6406;if(s===kn)return 6408;if(s===og)return 6409;if(s===ag)return 6410;if(s===cr)return 6402;if(s===ns)return 34041;if(s===lg)return 6403;if(s===sg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ec)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===cg)return 36244;if(s===ug)return 33319;if(s===fg)return 33320;if(s===hg)return 36249;if(s===Ja||s===Qa||s===el||s===tl)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bu||s===ku||s===Gu||s===Vu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hu||s===Wu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hu)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qu||s===Xu||s===ju||s===$u||s===Yu||s===Zu||s===Ku||s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ju)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$u)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ku)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ju)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ef)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===of)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===of)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===jr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ay extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ly={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const v=new Ps;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[d.jointName]=v,c.add(v)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class cy extends Dn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=sr),n===void 0&&u===ns&&(n=jr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class uy extends ds{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],v=[],S=new $t;S.layers.enable(1),S.viewport=new Ke;const y=new $t;y.layers.enable(2),y.viewport=new Ke;const b=[S,y],A=new ay;A.layers.enable(1),A.layers.enable(2);let P=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=_[B];return $===void 0&&($=new Ll,_[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=_[B];return $===void 0&&($=new Ll,_[B]=$),$.getGripSpace()},this.getHand=function(B){let $=_[B];return $===void 0&&($=new Ll,_[B]=$),$.getHandSpace()};function T(B){const $=v.indexOf(B.inputSource);if($===-1)return;const le=_[$];le!==void 0&&le.dispatchEvent({type:B.type,data:B.inputSource})}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",I);for(let B=0;B<_.length;B++){const $=v[B];$!==null&&(v[B]=null,_[B].disconnect($))}P=null,x=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:h}),p=new Ii(h.framebufferWidth,h.framebufferHeight,{format:kn,type:gr,encoding:e.outputEncoding})}else{let $=null,le=null,re=null;g.depth&&(re=g.stencil?35056:33190,$=g.stencil?ns:cr,le=g.stencil?jr:sr);const oe={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),p=new Ii(f.textureWidth,f.textureHeight,{format:kn,type:gr,depthTexture:new cy(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const pe=e.properties.get(p);pe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let $=0;$<B.removed.length;$++){const le=B.removed[$],re=v.indexOf(le);re>=0&&(v[re]=null,_[re].dispatchEvent({type:"disconnected",data:le}))}for(let $=0;$<B.added.length;$++){const le=B.added[$];let re=v.indexOf(le);if(re===-1){for(let pe=0;pe<_.length;pe++)if(pe>=v.length){v.push(le),re=pe;break}else if(v[pe]===null){v[pe]=le,re=pe;break}if(re===-1)break}const oe=_[re];oe&&oe.dispatchEvent({type:"connected",data:le})}}const ne=new O,Q=new O;function N(B,$,le){ne.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);const re=ne.distanceTo(Q),oe=$.projectionMatrix.elements,pe=le.projectionMatrix.elements,Me=oe[14]/(oe[10]-1),ee=oe[14]/(oe[10]+1),De=(oe[9]+1)/oe[5],we=(oe[9]-1)/oe[5],Se=(oe[8]-1)/oe[0],xe=(pe[8]+1)/pe[0],He=Me*Se,Ce=Me*xe,C=re/(-Se+xe),L=C*-Se;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(L),B.translateZ(C),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const q=Me+C,K=ee+C,J=He-L,se=Ce+(re-L),ae=De*ee/K*q,ce=we*ee/K*q;B.projectionMatrix.makePerspective(J,se,ae,ce,q,K)}function X(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=y.near=S.near=B.near,A.far=y.far=S.far=B.far,(P!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,x=A.far);const $=B.parent,le=A.cameras;X(A,$);for(let oe=0;oe<le.length;oe++)X(le[oe],$);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.position.copy(A.position),B.quaternion.copy(A.quaternion),B.scale.copy(A.scale),B.matrix.copy(A.matrix),B.matrixWorld.copy(A.matrixWorld);const re=B.children;for(let oe=0,pe=re.length;oe<pe;oe++)re[oe].updateMatrixWorld(!0);le.length===2?N(A,S,y):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){f!==null&&(f.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let U=null;function G(B,$){if(c=$.getViewerPose(l||o),m=$,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let re=!1;le.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let oe=0;oe<le.length;oe++){const pe=le[oe];let Me=null;if(h!==null)Me=h.getViewport(pe);else{const De=u.getViewSubImage(f,pe);Me=De.viewport,oe===0&&(e.setRenderTargetTextures(p,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let ee=b[oe];ee===void 0&&(ee=new $t,ee.layers.enable(oe),ee.viewport=new Ke,b[oe]=ee),ee.matrix.fromArray(pe.transform.matrix),ee.projectionMatrix.fromArray(pe.projectionMatrix),ee.viewport.set(Me.x,Me.y,Me.width,Me.height),oe===0&&A.matrix.copy(ee.matrix),re===!0&&A.cameras.push(ee)}}for(let le=0;le<_.length;le++){const re=v[le],oe=_[le];re!==null&&oe!==void 0&&oe.update(re,$,l||o)}U&&U(B,$),m=null}const V=new fd;V.setAnimationLoop(G),this.setAnimationLoop=function(B){U=B},this.dispose=function(){}}}function fy(r,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,_,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Cn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Cn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Cn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function c(v,S){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",p));const b=S.program;n.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const S=f();v.__bindingPointIndex=S;const y=r.createBuffer(),b=v.__size,A=v.usage;return r.bindBuffer(35345,y),r.bufferData(35345,b,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(35345,S);for(let A=0,P=y.length;A<P;A++){const x=y[A];if(m(x,A,b)===!0){const T=x.value,R=x.__offset;typeof T=="number"?(x.__data[0]=T,r.bufferSubData(35345,R,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):T.toArray(x.__data),r.bufferSubData(35345,R,x.__data))}}r.bindBuffer(35345,null)}function m(v,S,y){const b=v.value;if(y[S]===void 0)return typeof b=="number"?y[S]=b:y[S]=b.clone(),!0;if(typeof b=="number"){if(y[S]!==b)return y[S]=b,!0}else{const A=y[S];if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(v){const S=v.uniforms;let y=0;const b=16;let A=0;for(let P=0,x=S.length;P<x;P++){const T=S[P],R=d(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,P>0){A=y%b;const I=b-A;A!==0&&I-R.boundary<0&&(y+=b-A,T.__offset=y)}y+=R.storage}return A=y%b,A>0&&(y+=b-A),v.__size=y,v.__cache={},this}function d(v){const S=v.value,y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(v){const S=v.target;S.removeEventListener("dispose",p);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function dy(){const r=Yo("canvas");return r.style.display="block",r}function _d(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:dy(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=_r,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,v=0,S=null,y=-1,b=null;const A=new Ke,P=new Ke;let x=null,T=e.width,R=e.height,I=1,ne=null,Q=null;const N=new Ke(0,0,T,R),X=new Ke(0,0,T,R);let U=!1;const G=new Uc;let V=!1,B=!1,$=null;const le=new at,re=new Ue,oe=new O,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return S===null?I:1}let ee=t;function De(E,k){for(let j=0;j<E.length;j++){const W=E[j],te=e.getContext(W,k);if(te!==null)return te}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),ee===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),ee=De(k,E),ee===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let we,Se,xe,He,Ce,C,L,q,K,J,se,ae,ce,ue,w,M,F,H,Y,ie,me,z,fe,de;function be(){we=new wx(ee),Se=new _x(ee,we,r),we.init(Se),z=new oy(ee,we,Se),xe=new ry(ee,we,Se),He=new Ex,Ce=new Wv,C=new sy(ee,we,xe,Ce,Se,z,He),L=new vx(d),q=new Mx(d),K=new Ug(ee,Se),fe=new mx(ee,we,K,Se),J=new Sx(ee,K,He,fe),se=new Lx(ee,J,K,He),Y=new Px(ee,Se,C),M=new xx(Ce),ae=new Hv(d,L,q,we,Se,fe,M),ce=new fy(d,Ce),ue=new Xv,w=new Jv(we,Se),H=new px(d,L,xe,se,u,o),F=new iy(d,se,Se),de=new hy(ee,He,Se,xe),ie=new gx(ee,we,He,Se),me=new Tx(ee,we,He,Se),He.programs=ae.programs,d.capabilities=Se,d.extensions=we,d.properties=Ce,d.renderLists=ue,d.shadowMap=F,d.state=xe,d.info=He}be();const ye=new uy(d,ee);this.xr=ye,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(T,R,!1))},this.getSize=function(E){return E.set(T,R)},this.setSize=function(E,k,j){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,R=k,e.width=Math.floor(E*I),e.height=Math.floor(k*I),j!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(T*I,R*I).floor()},this.setDrawingBufferSize=function(E,k,j){T=E,R=k,I=j,e.width=Math.floor(E*j),e.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,k,j,W){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,k,j,W),xe.viewport(A.copy(N).multiplyScalar(I).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,k,j,W){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,k,j,W),xe.scissor(P.copy(X).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){xe.setScissorTest(U=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(E=!0,k=!0,j=!0){let W=0;E&&(W|=16384),k&&(W|=256),j&&(W|=1024),ee.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),ue.dispose(),w.dispose(),Ce.dispose(),L.dispose(),q.dispose(),se.dispose(),fe.dispose(),de.dispose(),ae.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ge),ye.removeEventListener("sessionend",mt),$&&($.dispose(),$=null),st.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=He.autoReset,k=F.enabled,j=F.autoUpdate,W=F.needsUpdate,te=F.type;be(),He.autoReset=E,F.enabled=k,F.autoUpdate=j,F.needsUpdate=W,F.type=te}function Oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function D(E){const k=E.target;k.removeEventListener("dispose",D),ge(k)}function ge(E){Z(E),Ce.remove(E)}function Z(E){const k=Ce.get(E).programs;k!==void 0&&(k.forEach(function(j){ae.releaseProgram(j)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,W,te,Ee){k===null&&(k=pe);const Ae=te.isMesh&&te.matrixWorld.determinant()<0,Re=xm(E,k,j,W,te);xe.setMaterial(W,Ae);let Pe=j.index;const Xe=j.attributes.position;if(Pe===null){if(Xe===void 0||Xe.count===0)return}else if(Pe.count===0)return;let ke=1;W.wireframe===!0&&(Pe=J.getWireframeAttribute(j),ke=2),fe.setup(te,W,Re,j,Pe);let Ve,tt=ie;Pe!==null&&(Ve=K.get(Pe),tt=me,tt.setIndex(Ve));const Vi=Pe!==null?Pe.count:Xe.count,yr=j.drawRange.start*ke,br=j.drawRange.count*ke,In=Ee!==null?Ee.start*ke:0,We=Ee!==null?Ee.count*ke:1/0,Mr=Math.max(yr,In),lt=Math.min(Vi,yr+br,In+We)-1,rn=Math.max(0,lt-Mr+1);if(rn!==0){if(te.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Me()),tt.setMode(1)):tt.setMode(4);else if(te.isLine){let di=W.linewidth;di===void 0&&(di=1),xe.setLineWidth(di*Me()),te.isLineSegments?tt.setMode(1):te.isLineLoop?tt.setMode(2):tt.setMode(3)}else te.isPoints?tt.setMode(0):te.isSprite&&tt.setMode(4);if(te.isInstancedMesh)tt.renderInstances(Mr,rn,te.count);else if(j.isInstancedBufferGeometry){const di=Math.min(j.instanceCount,j._maxInstanceCount);tt.renderInstances(Mr,rn,di)}else tt.render(Mr,rn)}},this.compile=function(E,k){h=w.get(E),h.init(),g.push(h),E.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(j){const W=j.material;if(W)if(Array.isArray(W))for(let te=0;te<W.length;te++){const Ee=W[te];$a(Ee,E,j)}else $a(W,E,j)}),g.pop(),h=null};let ve=null;function _e(E){ve&&ve(E)}function Ge(){st.stop()}function mt(){st.start()}const st=new fd;st.setAnimationLoop(_e),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(E){ve=E,ye.setAnimationLoop(E),E===null?st.stop():st.start()},ye.addEventListener("sessionstart",Ge),ye.addEventListener("sessionend",mt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(k),k=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,k,S),h=w.get(E,g.length),h.init(),g.push(h),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(le),B=this.localClippingEnabled,V=M.init(this.clippingPlanes,B,k),f=ue.get(E,m.length),f.init(),m.push(f),hi(E,k,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(ne,Q),V===!0&&M.beginShadows();const j=h.state.shadowsArray;if(F.render(j,E,k),V===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(f,E),h.setupLights(d.physicallyCorrectLights),k.isArrayCamera){const W=k.cameras;for(let te=0,Ee=W.length;te<Ee;te++){const Ae=W[te];et(f,E,Ae,Ae.viewport)}}else et(f,E,k);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(d,E,k),fe.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function hi(E,k,j,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){W&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Ae=se.update(E),Re=E.material;Re.visible&&f.push(E,Ae,Re,j,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==He.render.frame&&(E.skeleton.update(),E.skeleton.frame=He.render.frame),!E.frustumCulled||G.intersectsObject(E))){W&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Ae=se.update(E),Re=E.material;if(Array.isArray(Re)){const Pe=Ae.groups;for(let Xe=0,ke=Pe.length;Xe<ke;Xe++){const Ve=Pe[Xe],tt=Re[Ve.materialIndex];tt&&tt.visible&&f.push(E,Ae,tt,j,oe.z,Ve)}}else Re.visible&&f.push(E,Ae,Re,j,oe.z,null)}}const Ee=E.children;for(let Ae=0,Re=Ee.length;Ae<Re;Ae++)hi(Ee[Ae],k,j,W)}function et(E,k,j,W){const te=E.opaque,Ee=E.transmissive,Ae=E.transparent;h.setupLightsView(j),Ee.length>0&&Wn(te,k,j),W&&xe.viewport(A.copy(W)),te.length>0&&nn(te,k,j),Ee.length>0&&nn(Ee,k,j),Ae.length>0&&nn(Ae,k,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Wn(E,k,j){const W=Se.isWebGL2;$===null&&($=new Ii(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Vs:gr,minFilter:ha,samples:W&&s===!0?4:0})),d.getDrawingBufferSize(re),W?$.setSize(re.x,re.y):$.setSize(tc(re.x),tc(re.y));const te=d.getRenderTarget();d.setRenderTarget($),d.clear();const Ee=d.toneMapping;d.toneMapping=ii,nn(E,k,j),d.toneMapping=Ee,C.updateMultisampleRenderTarget($),C.updateRenderTargetMipmap($),d.setRenderTarget(te)}function nn(E,k,j){const W=k.isScene===!0?k.overrideMaterial:null;for(let te=0,Ee=E.length;te<Ee;te++){const Ae=E[te],Re=Ae.object,Pe=Ae.geometry,Xe=W===null?Ae.material:W,ke=Ae.group;Re.layers.test(j.layers)&&_m(Re,k,j,Pe,Xe,ke)}}function _m(E,k,j,W,te,Ee){E.onBeforeRender(d,k,j,W,te,Ee),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(d,k,j,W,E,Ee),te.transparent===!0&&te.side===Qr?(te.side=Cn,te.needsUpdate=!0,d.renderBufferDirect(j,k,W,te,E,Ee),te.side=Gs,te.needsUpdate=!0,d.renderBufferDirect(j,k,W,te,E,Ee),te.side=Qr):d.renderBufferDirect(j,k,W,te,E,Ee),E.onAfterRender(d,k,j,W,te,Ee)}function $a(E,k,j){k.isScene!==!0&&(k=pe);const W=Ce.get(E),te=h.state.lights,Ee=h.state.shadowsArray,Ae=te.state.version,Re=ae.getParameters(E,te.state,Ee,k,j),Pe=ae.getProgramCacheKey(Re);let Xe=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?q:L).get(E.envMap||W.environment),Xe===void 0&&(E.addEventListener("dispose",D),Xe=new Map,W.programs=Xe);let ke=Xe.get(Pe);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===Ae)return Pu(E,Re),ke}else Re.uniforms=ae.getUniforms(E),E.onBuild(j,Re,d),E.onBeforeCompile(Re,d),ke=ae.acquireProgram(Re,Pe),Xe.set(Pe,ke),W.uniforms=Re.uniforms;const Ve=W.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=M.uniform),Pu(E,Re),W.needsLights=ym(E),W.lightsStateVersion=Ae,W.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.directionalShadowMap.value=te.state.directionalShadowMap,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotShadowMap.value=te.state.spotShadowMap,Ve.spotShadowMatrix.value=te.state.spotShadowMatrix,Ve.pointShadowMap.value=te.state.pointShadowMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix);const tt=ke.getUniforms(),Vi=ko.seqWithValue(tt.seq,Ve);return W.currentProgram=ke,W.uniformsList=Vi,ke}function Pu(E,k){const j=Ce.get(E);j.outputEncoding=k.outputEncoding,j.instancing=k.instancing,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function xm(E,k,j,W,te){k.isScene!==!0&&(k=pe),C.resetTextureUnits();const Ee=k.fog,Ae=W.isMeshStandardMaterial?k.environment:null,Re=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:_r,Pe=(W.isMeshStandardMaterial?q:L).get(W.envMap||Ae),Xe=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!W.normalMap&&!!j.attributes.tangent,Ve=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,Vi=!!j.morphAttributes.color,yr=W.toneMapped?d.toneMapping:ii,br=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,In=br!==void 0?br.length:0,We=Ce.get(W),Mr=h.state.lights;if(V===!0&&(B===!0||E!==b)){const Ht=E===b&&W.id===y;M.setState(W,E,Ht)}let lt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mr.state.version||We.outputEncoding!==Re||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||We.envMap!==Pe||W.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==M.numPlanes||We.numIntersection!==M.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==ke||We.morphTargets!==Ve||We.morphNormals!==tt||We.morphColors!==Vi||We.toneMapping!==yr||Se.isWebGL2===!0&&We.morphTargetsCount!==In)&&(lt=!0):(lt=!0,We.__version=W.version);let rn=We.currentProgram;lt===!0&&(rn=$a(W,k,te));let di=!1,ys=!1,Ya=!1;const At=rn.getUniforms(),bs=We.uniforms;if(xe.useProgram(rn.program)&&(di=!0,ys=!0,Ya=!0),W.id!==y&&(y=W.id,ys=!0),di||b!==E){if(At.setValue(ee,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&At.setValue(ee,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,ys=!0,Ya=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Ht=At.map.cameraPosition;Ht!==void 0&&Ht.setValue(ee,oe.setFromMatrixPosition(E.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(ee,"isOrthographic",E.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||te.isSkinnedMesh)&&At.setValue(ee,"viewMatrix",E.matrixWorldInverse)}if(te.isSkinnedMesh){At.setOptional(ee,te,"bindMatrix"),At.setOptional(ee,te,"bindMatrixInverse");const Ht=te.skeleton;Ht&&(Se.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),At.setValue(ee,"boneTexture",Ht.boneTexture,C),At.setValue(ee,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Za=j.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&Se.isWebGL2===!0)&&Y.update(te,j,W,rn),(ys||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,At.setValue(ee,"receiveShadow",te.receiveShadow)),ys&&(At.setValue(ee,"toneMappingExposure",d.toneMappingExposure),We.needsLights&&vm(bs,Ya),Ee&&W.fog===!0&&ce.refreshFogUniforms(bs,Ee),ce.refreshMaterialUniforms(bs,W,I,R,$),ko.upload(ee,We.uniformsList,bs,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ko.upload(ee,We.uniformsList,bs,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(ee,"center",te.center),At.setValue(ee,"modelViewMatrix",te.modelViewMatrix),At.setValue(ee,"normalMatrix",te.normalMatrix),At.setValue(ee,"modelMatrix",te.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ht=W.uniformsGroups;for(let Ka=0,bm=Ht.length;Ka<bm;Ka++)if(Se.isWebGL2){const Lu=Ht[Ka];de.update(Lu,rn),de.bind(Lu,rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rn}function vm(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ym(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,k,j){Ce.get(E.texture).__webglTexture=k,Ce.get(E.depthTexture).__webglTexture=j;const W=Ce.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const j=Ce.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){S=E,_=k,v=j;let W=!0;if(E){const Pe=Ce.get(E);Pe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),W=!1):Pe.__webglFramebuffer===void 0?C.setupRenderTarget(E):Pe.__hasExternalTextures&&C.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture)}let te=null,Ee=!1,Ae=!1;if(E){const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ae=!0);const Xe=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(te=Xe[k],Ee=!0):Se.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?te=Ce.get(E).__webglMultisampledFramebuffer:te=Xe,A.copy(E.viewport),P.copy(E.scissor),x=E.scissorTest}else A.copy(N).multiplyScalar(I).floor(),P.copy(X).multiplyScalar(I).floor(),x=U;if(xe.bindFramebuffer(36160,te)&&Se.drawBuffers&&W&&xe.drawBuffers(E,te),xe.viewport(A),xe.scissor(P),xe.setScissorTest(x),Ee){const Pe=Ce.get(E.texture);ee.framebufferTexture2D(36160,36064,34069+k,Pe.__webglTexture,j)}else if(Ae){const Pe=Ce.get(E.texture),Xe=k||0;ee.framebufferTextureLayer(36160,36064,Pe.__webglTexture,j||0,Xe)}y=-1},this.readRenderTargetPixels=function(E,k,j,W,te,Ee,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){xe.bindFramebuffer(36160,Re);try{const Pe=E.texture,Xe=Pe.format,ke=Pe.type;if(Xe!==kn&&z.convert(Xe)!==ee.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Vs&&(we.has("EXT_color_buffer_half_float")||Se.isWebGL2&&we.has("EXT_color_buffer_float"));if(ke!==gr&&z.convert(ke)!==ee.getParameter(35738)&&!(ke===or&&(Se.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&j>=0&&j<=E.height-te&&ee.readPixels(k,j,W,te,z.convert(Xe),z.convert(ke),Ee)}finally{const Pe=S!==null?Ce.get(S).__webglFramebuffer:null;xe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,k,j=0){const W=Math.pow(2,-j),te=Math.floor(k.image.width*W),Ee=Math.floor(k.image.height*W);C.setTexture2D(k,0),ee.copyTexSubImage2D(3553,j,0,0,E.x,E.y,te,Ee),xe.unbindTexture()},this.copyTextureToTexture=function(E,k,j,W=0){const te=k.image.width,Ee=k.image.height,Ae=z.convert(j.format),Re=z.convert(j.type);C.setTexture2D(j,0),ee.pixelStorei(37440,j.flipY),ee.pixelStorei(37441,j.premultiplyAlpha),ee.pixelStorei(3317,j.unpackAlignment),k.isDataTexture?ee.texSubImage2D(3553,W,E.x,E.y,te,Ee,Ae,Re,k.image.data):k.isCompressedTexture?ee.compressedTexSubImage2D(3553,W,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Ae,k.mipmaps[0].data):ee.texSubImage2D(3553,W,E.x,E.y,Ae,Re,k.image),W===0&&j.generateMipmaps&&ee.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j,W,te=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Pe=z.convert(W.format),Xe=z.convert(W.type);let ke;if(W.isData3DTexture)C.setTexture3D(W,0),ke=32879;else if(W.isDataArrayTexture)C.setTexture2DArray(W,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(37440,W.flipY),ee.pixelStorei(37441,W.premultiplyAlpha),ee.pixelStorei(3317,W.unpackAlignment);const Ve=ee.getParameter(3314),tt=ee.getParameter(32878),Vi=ee.getParameter(3316),yr=ee.getParameter(3315),br=ee.getParameter(32877),In=j.isCompressedTexture?j.mipmaps[0]:j.image;ee.pixelStorei(3314,In.width),ee.pixelStorei(32878,In.height),ee.pixelStorei(3316,E.min.x),ee.pixelStorei(3315,E.min.y),ee.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?ee.texSubImage3D(ke,te,k.x,k.y,k.z,Ee,Ae,Re,Pe,Xe,In.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(ke,te,k.x,k.y,k.z,Ee,Ae,Re,Pe,In.data)):ee.texSubImage3D(ke,te,k.x,k.y,k.z,Ee,Ae,Re,Pe,Xe,In),ee.pixelStorei(3314,Ve),ee.pixelStorei(32878,tt),ee.pixelStorei(3316,Vi),ee.pixelStorei(3315,yr),ee.pixelStorei(32877,br),te===0&&W.generateMipmaps&&ee.generateMipmap(ke),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){_=0,v=0,S=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class py extends _d{}py.prototype.isWebGL1Renderer=!0;class my extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class xd extends ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wf=new at,ic=new id,Lo=new da,Do=new O;class gy extends Dt{constructor(e=new tn,t=new xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Wf.copy(i).invert(),ic.copy(e.ray).applyMatrix4(Wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,d=m;g<d;g++){const p=c.getX(g);Do.fromBufferAttribute(f,p),qf(Do,p,l,i,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,d=m;g<d;g++)Do.fromBufferAttribute(f,g),qf(Do,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qf(r,e,t,n,i,s,o){const a=ic.distanceSqToPoint(r);if(a<t){const l=new O;ic.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Vc extends tn{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new O,f=new O,h=new O;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const d=g/i*s,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(d),f.y=(e+t*Math.cos(p))*Math.sin(d),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),u.x=e*Math.cos(d),u.y=e*Math.sin(d),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const d=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,v=(i+1)*m+g;o.push(d,p,v),o.push(p,_,v)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}static fromJSON(e){return new Vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xn extends tn{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],f=new O,h=new O,m=new O,g=new O,d=new O,p=new O,_=new O;for(let S=0;S<=n;++S){const y=S/n*s*Math.PI*2;v(y,s,o,e,m),v(y+.01,s,o,e,g),p.subVectors(g,m),_.addVectors(g,m),d.crossVectors(p,_),_.crossVectors(d,p),d.normalize(),_.normalize();for(let b=0;b<=i;++b){const A=b/i*Math.PI*2,P=-t*Math.cos(A),x=t*Math.sin(A);f.x=m.x+(P*_.x+x*d.x),f.y=m.y+(P*_.y+x*d.y),f.z=m.z+(P*_.z+x*d.z),l.push(f.x,f.y,f.z),h.subVectors(f,m).normalize(),c.push(h.x,h.y,h.z),u.push(S/n),u.push(b/i)}}for(let S=1;S<=n;S++)for(let y=1;y<=i;y++){const b=(i+1)*(S-1)+(y-1),A=(i+1)*S+(y-1),P=(i+1)*S+y,x=(i+1)*(S-1)+y;a.push(b,A,x),a.push(A,P,x)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2));function v(S,y,b,A,P){const x=Math.cos(S),T=Math.sin(S),R=b/y*S,I=Math.cos(R);P.x=A*(2+I)*.5*x,P.y=A*(2+I)*T*.5,P.z=A*Math.sin(R)*.5}}static fromJSON(e){return new xn(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class _y extends ms{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const vy=new xy;class vd{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zn={};class yy extends Error{constructor(e,t){super(e),this.response=t}}class by extends vd{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let d=0;const p=new ReadableStream({start(_){v();function v(){f.read().then(({done:S,value:y})=>{if(S)_.close();else{d+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:m});for(let A=0,P=u.length;A<P;A++){const x=u[A];x.onProgress&&x.onProgress(b)}_.enqueue(y),v()}})}}});return new Response(p)}else throw new yy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Xf.add(e,c);const u=Zn[e];delete Zn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yd extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jf=new at,$f=new O,Yf=new O;class My{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),Yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yf),t.updateMatrixWorld(),jf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zf=new at,Ts=new O,Dl=new O;class wy extends My{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Dl.copy(n.position),Dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dl),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zf)}}class Sy extends yd{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ty extends yd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ro;const bd={getContext:function(){return Ro===void 0&&(Ro=new(window.AudioContext||window.webkitAudioContext)),Ro},setContext:function(r){Ro=r}};class Ey extends vd{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new by(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);bd.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Hc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kf(){return(typeof performance>"u"?Date:performance).now()}const Xi=new O,Jf=new ps,Cy=new O,ji=new O;class Ay extends Dt{constructor(){super(),this.type="AudioListener",this.context=bd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Hc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Xi,Jf,Cy),ji.set(0,0,-1).applyQuaternion(Jf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Xi.x,i),t.positionY.linearRampToValueAtTime(Xi.y,i),t.positionZ.linearRampToValueAtTime(Xi.z,i),t.forwardX.linearRampToValueAtTime(ji.x,i),t.forwardY.linearRampToValueAtTime(ji.y,i),t.forwardZ.linearRampToValueAtTime(ji.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Xi.x,Xi.y,Xi.z),t.setOrientation(ji.x,ji.y,ji.z,n.x,n.y,n.z)}}class Py extends Dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function Jn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Md(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rs={duration:.5,overwrite:!1,delay:0},Wc,Bt,ft,fn=1e8,$e=1/fn,rc=Math.PI*2,Ly=rc/4,Dy=0,wd=Math.sqrt,Ry=Math.cos,Iy=Math.sin,xt=function(e){return typeof e=="string"},it=function(e){return typeof e=="function"},oi=function(e){return typeof e=="number"},qc=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},kt=function(e){return e!==!1},Sd=function(){return typeof window<"u"},Io=function(e){return it(e)||xt(e)},Td=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tt=Array.isArray,sc=/(?:-?\.?\d|\.)+/gi,Ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,Ad=/[^,'"\[\]\s]+/gi,Fy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,ln,oc,Xc,Jt={},Zo={},Pd,Ld=function(e){return(Zo=xr(e,Jt))&&Qt},jc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ko=function(e,t){return!t&&console.warn(e)},Dd=function(e,t){return e&&(Jt[e]=t)&&Zo&&(Zo[e]=t)||Jt},Hs=function(){return 0},Oy={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},Ny={suppressEvents:!0},$c={},Pi=[],ac={},Rd,Xt={},Il={},Qf=30,Vo=[],Yc="",Zc=function(e){var t=e[0],n,i;if(Vn(t)||it(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vo.length;i--&&!Vo[i].targetTest(t););n=Vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ep(e[i],n)))||e.splice(i,1);return e},fr=function(e){return e._gsap||Zc(hn(e))[0]._gsap},Id=function(e,t,n){return(n=e[t])&&it(n)?e[t]():qc(n)&&e.getAttribute&&e.getAttribute(t)||n},Gt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},$r=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},zy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Jo=function(){var e=Pi.length,t=Pi.slice(0),n,i;for(ac={},Pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fd=function(e,t,n,i){Pi.length&&Jo(),e.render(t,n,i||Bt&&t<0&&(e._initted||e._startAt)),Pi.length&&Jo()},Od=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ad).length<2?t:xt(e)?e.trim():e},Nd=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Uy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xr=function(e,t){for(var n in t)e[n]=t[n];return e},eh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Fs=function(e){var t=e.parent||Je,n=e.keyframes?Uy(Tt(e.keyframes)):_n;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},By=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},zd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ma=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ky=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lc=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(Go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Gy=function r(e){return!e||e._ts&&r(e.parent)},th=function(e){return e._repeat?ss(e._tTime,e=e.duration()+e._rDelay)*e:0},ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ea=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ga=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},_a=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ga(e),n._dirty||hr(n,e)),e},Ud=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ea(e.rawTime(),t),(!t._dur||oo(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},Bn=function(e,t,n,i){return t.parent&&Fi(t),t._start=vt((oi(n)?n:n||e!==Je?an(e,n,t):e._time)+t._delay),t._end=vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zd(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),i||Ud(e,t),e._ts<0&&_a(e,e._tTime),e},Bd=function(e,t){return(Jt.ScrollTrigger||jc("scrollTrigger",t))&&Jt.ScrollTrigger.create(t,e)},kd=function(e,t,n,i,s){if(Jc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rd!==Yt.frame)return Pi.push(e),e._lazy=[s,i],1},Vy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hy=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Vy(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=oo(0,e._tDur,t),u=ss(l,a),e._yoyo&&u&1&&(o=1-o),u!==ss(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||i||e._zTime===$e||!t&&e._zTime){if(!e._initted&&kd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&lc(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fi(e,1),!n&&!Bt&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},os=function(e,t,n,i){var s=e._repeat,o=vt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:vt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&_a(e,e._tTime=e._tDur*a),e.parent&&ga(e),n||hr(e.parent,e),e},nh=function(e){return e instanceof Ut?hr(e):os(e,e._dur)},qy={_start:0,endTime:Hs,totalDuration:Hs},an=function r(e,t,n){var i=e.labels,s=e._recent||qy,o=e.duration()>=fn?s.endTime(!1):e._dur,a,l,c;return xt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Tt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Os=function(e,t,n){var i=oi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kt(l.vars.inherit)&&l.parent;o.immediateRender=kt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new pt(t[0],o,t[s+1])},Bi=function(e,t){return e||e===0?t(e):t},oo=function(e,t,n){return n<e?e:n>t?t:n},St=function(e,t){return!xt(e)||!(t=Fy.exec(e))?"":t[1]},Xy=function(e,t,n){return Bi(n,function(i){return oo(e,t,i)})},uc=[].slice,Gd=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==ln},jy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return xt(i)&&!t||Gd(i,1)?(s=n).push.apply(s,hn(i)):n.push(i)})||n},hn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):xt(e)&&!n&&(oc||!as())?uc.call((t||Xc).querySelectorAll(e),0):Tt(e)?jy(e,n):Gd(e)?uc.call(e,0):e?[e]:[]},fc=function(e){return e=hn(e)[0]||Ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hn(t,n.querySelectorAll?n:n===e?Ko("Invalid scope")||Xc.createElement("div"):e)}},Vd=function(e){return e.sort(function(){return .5-Math.random()})},Hd=function(e){if(it(e))return e;var t=Vn(e)?e:{each:e},n=dr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return xt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||t).length,p=o[d],_,v,S,y,b,A,P,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,fn])[1],!T){for(P=-fn;P<(P=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=o[d]=[],_=l?Math.min(T,d)*u-.5:i%T,v=T===fn?0:l?d*f/T-.5:i/T|0,P=0,x=fn,A=0;A<d;A++)S=A%T-_,y=v-(A/T|0),p[A]=b=c?Math.abs(c==="y"?y:S):wd(S*S+y*y),b>P&&(P=b),b<x&&(x=b);i==="random"&&Vd(p),p.max=P-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=St(t.amount||t.each)||0,n=n&&d<0?Kd(n):n}return d=(p[h]-p.min)/p.max||0,vt(p.b+(n?n(d):d)*p.v)+p.u}},hc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(oi(n)?0:St(n))}},Wd=function(e,t){var n=Tt(e),i,s;return!n&&Vn(e)&&(i=n=e.radius||fn,e.values?(e=hn(e.values),(s=!oi(e[0]))&&(i*=i)):e=hc(e.increment)),Bi(t,n?it(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fn,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||oi(o)?u:u+St(o)}:hc(e))},qd=function(e,t,n,i){return Bi(Tt(e)?!t:n===!0?!!(n=0):!i,function(){return Tt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Yy=function(e,t){return function(n){return e(parseFloat(n))+(t||St(n))}},Zy=function(e,t,n){return jd(e,t,0,1,n)},Xd=function(e,t,n){return Bi(n,function(i){return e[~~t(i)]})},Ky=function r(e,t,n){var i=t-e;return Tt(e)?Xd(e,r(0,e.length),t):Bi(n,function(s){return(i+(s-e)%i)%i+e})},Jy=function r(e,t,n){var i=t-e,s=i*2;return Tt(e)?Xd(e,r(0,e.length-1),t):Bi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ws=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Ad:sc),n+=e.substr(t,i-t)+qd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},jd=function(e,t,n,i,s){var o=t-e,a=i-n;return Bi(s,function(l){return n+((l-e)/o*a||0)})},Qy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=xt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Tt(e)&&!Tt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=xr(Tt(e)?[]:{},e));if(!u){for(l in t)Kc.call(a,e,l,"get",t[l]);s=function(g){return tu(g,a)||(o?e.p:e)}}}return Bi(n,s)},ih=function(e,t,n){var i=e.labels,s=fn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(e,t,n){var i=e.vars,s=i[t],o=ft,a=e._ctx,l,c,u;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Pi.length&&Jo(),a&&(ft=a),u=l?s.apply(c,l):s.call(c),ft=o,u},Ls=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&dn(e,"onInterrupt"),e},Hr,eb=function(e){e=!e.name&&e.default||e;var t=e.name,n=it(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Hs,render:tu,add:Kc,kill:gb,modifier:mb,rawVars:0},o={targetTest:0,get:0,getSetter:eu,aliases:{},register:0};if(as(),e!==i){if(Xt[t])return;_n(i,_n(Qo(e,s),o)),xr(i.prototype,xr(s,Qo(e,o))),Xt[i.prop=t]=i,e.targetTest&&(Vo.push(i),$c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dd(t,i),e.register&&e.register(Qt,i,Vt)},Ye=255,Ds={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},Fl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},$d=function(e,t,n){var i=e?oi(e)?[e>>16,e>>8&Ye,e&Ye]:0:Ds.black,s,o,a,l,c,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ds[e])i=Ds[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(sc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Fl(l+1/3,s,o),i[1]=Fl(l,s,o),i[2]=Fl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(sc)||Ds.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ye,o=i[1]/Ye,a=i[2]/Ye,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(e){var t=[],n=[],i=-1;return e.split(Li).forEach(function(s){var o=s.match(Vr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},rh=function(e,t,n){var i="",s=(e+i).match(Li),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=$d(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Li,"1").split(Vr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Li),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Li=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ds)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),tb=/hsl[a]?\(/,Zd=function(e){var t=e.join(" "),n;if(Li.lastIndex=0,Li.test(t))return n=tb.test(t),e[1]=rh(e[1],n),e[0]=rh(e[0],n,Yd(e[1])),!0},qs,Yt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,m,g=function d(p){var _=r()-i,v=p===!0,S,y,b,A;if(_>e&&(n+=_-t),i+=_,b=i-n,S=b-o,(S>0||v)&&(A=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=S+(S>=s?4:s-S),y=1),v||(l=c(d)),y)for(m=0;m<a.length;m++)a[m](b,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Pd&&(!oc&&Sd()&&(ln=oc=window,Xc=ln.document||{},Jt.gsap=Qt,(ln.gsapVersions||(ln.gsapVersions=[])).push(Qt.version),Ld(Zo||ln.GreenSockGlobals||!ln.gsap&&ln||{}),u=ln.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},qs=1,g(2))},sleep:function(){(u?ln.cancelAnimationFrame:clearTimeout)(l),qs=0,c=Hs},lagSmoothing:function(p,_){e=p||1/$e,t=Math.min(_,e,0)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,_,v){var S=_?function(y,b,A,P){p(y,b,A,P),f.remove(S)}:p;return f.remove(p),a[v?"unshift":"push"](S),as(),S},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},f}(),as=function(){return!qs&&Yt.wake()},Ne={},nb=/^[\d.\-M][\d.\-,\s]/,ib=/["']/g,rb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ib,"").trim():+c,i=l.substr(a+1).trim();return t},sb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ob=function(e){var t=(e+"").split("("),n=Ne[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rb(t[1])]:sb(e).split(",").map(Od)):Ne._CE&&nb.test(e)?Ne._CE("",e):n},Kd=function(e){return function(t){return 1-e(1-t)}},Jd=function r(e,t){for(var n=e._first,i;n;)n instanceof Ut?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},dr=function(e,t){return e&&(it(e)?e:Ne[e]||ob(e))||t},vr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Gt(e,function(a){Ne[a]=Jt[a]=s,Ne[o=a.toLowerCase()]=n;for(var l in s)Ne[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ne[a+"."+l]=s[l]}),s},Qd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ol=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Iy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Qd(a);return s=rc/s,l.config=function(c,u){return r(e,c,u)},l},Nl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Qd(n);return i.config=function(s){return r(e,s)},i};Gt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;vr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;vr("Elastic",Ol("in"),Ol("out"),Ol());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};vr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);vr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});vr("Circ",function(r){return-(wd(1-r*r)-1)});vr("Sine",function(r){return r===1?1:-Ry(r*Ly)+1});vr("Back",Nl("in"),Nl("out"),Nl());Ne.SteppedEase=Ne.steps=Jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-$e;return function(a){return((i*oo(0,o,a)|0)+s)*n}}};rs.ease=Ne["quad.out"];Gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Yc+=r+","+r+"Params,"});var ep=function(e,t){this.id=Dy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Id,this.set=t?t.getSetter:eu},ls=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,os(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),qs||Yt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_a(this,n),!s._dp||s.parent||Ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ss(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(oo(-this._delay,this._tDur,i),!0),ga(this),ky(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ea(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ny);var i=Bt;return Bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$e)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=it(n)?n:Nd,a=function(){var c=i.then;i.then=null,it(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ls(this)},r}();_n(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Ut=function(r){Md(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kt(n.sortChildren),Je&&Bn(n.parent||Je,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bd(Jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Os(0,arguments,this),this},t.from=function(i,s,o){return Os(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Os(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pt(i,s,an(this,o),1),this},t.call=function(i,s,o){return Bn(this,pt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new pt(i,o,an(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Fs(o).immediateRender=kt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Fs(a).immediateRender=kt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:vt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,d,p,_,v,S,y,b,A,P;if(this!==Je&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,S=this._ts,_=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=vt(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),b=ss(this._tTime,p),!a&&this._tTime&&b!==d&&(b=d),A&&d&1&&(h=c-h,P=1),d!==b&&!this._lock){var x=A&&b&1,T=x===(A&&d&1);if(d<b&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(P?0:vt(d*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Jd(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Wy(this,vt(a),vt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-$e);break}}m=g}else{m=this._last;for(var R=i<0?i:h;m;){if(g=m._prev,(m._act||R<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,s,o||Bt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=R?-$e:$e);break}}m=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-$e)._zTime=h>=a?1:-1,this._ts))return this._start=y,ga(this),this.render(i,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(dn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(oi(s)||(s=an(this,s,i)),!(i instanceof ls)){if(Tt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(xt(i))return this.addLabel(i,s);if(it(i))i=pt.delayedCall(0,i);else return this}return this!==i?Bn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof pt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return xt(i)?this.removeLabel(i):it(i)?this.killTweensOf(i):(ma(this,i),i===this._recent&&(this._recent=this._last),hr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(Yt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=pt.delayedCall(0,s||Hs,o);return a.data="isPause",this._hasPause=1,Bn(this,a,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&Fi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ti!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hn(i),l=this._first,c=oi(s),u;l;)l instanceof pt?zy(l._targets,a)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=an(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=pt.to(o,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$e,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&os(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,_n({startAt:{time:an(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ih(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ih(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return hr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=fn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;os(o,o===Je&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Je._ts&&(Fd(Je,ea(i,Je)),Rd=Yt.frame),Yt.frame>=Qf){Qf+=Kt.autoSleep||120;var s=Je._first;if((!s||!s._ts)&&Kt.autoSleep&&Yt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yt.sleep()}}},e}(ls);_n(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});var ab=function(e,t,n,i,s,o,a){var l=new Vt(this._pt,e,t,0,1,op,null,s),c=0,u=0,f,h,m,g,d,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ws(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),h=n.match(Rl)||[];f=Rl.exec(i);)g=f[0],d=i.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?$r(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Cd.test(i)||_)&&(l.e=0),this._pt=l,l},Kc=function(e,t,n,i,s,o,a,l,c,u){it(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:it(f)?c?e[t.indexOf("set")||!it(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=it(f)?c?hb:rp:Qc,g;if(xt(i)&&(~i.indexOf("random(")&&(i=Ws(i)),i.charAt(1)==="="&&(g=$r(h,i)+(St(h)||0),(g||g===0)&&(i=g))),!u||h!==i||dc)return!isNaN(h*i)&&i!==""?(g=new Vt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?pb:sp,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&jc(t,i),ab.call(this,e,t,h,i,m,l||Kt.stringFilter,c))},lb=function(e,t,n,i,s){if(it(e)&&(e=Ns(e,s,t,n,i)),!Vn(e)||e.style&&e.nodeType||Tt(e)||Td(e))return xt(e)?Ns(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ns(e[a],s,t,n,i);return o},tp=function(e,t,n,i,s,o){var a,l,c,u;if(Xt[e]&&(a=new Xt[e]).init(s,a.rawVars?t[e]:lb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Vt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Hr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ti,dc,Jc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,v=e._targets,S=e.parent,y=S&&S.data==="nested"?S.vars.targets:v,b=e._overwrite==="auto"&&!Wc,A=e.timeline,P,x,T,R,I,ne,Q,N,X,U,G,V,B;if(A&&(!g||!s)&&(s="none"),e._ease=dr(s,rs.ease),e._yEase=m?Kd(dr(m===!0?s:m,rs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(N=v[0]?fr(v[0]).harness:0,V=N&&i[N.prop],P=Qo(i,$c),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Go:Oy),_._lazy=0),o){if(Fi(e._startAt=pt.set(v,_n({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:kt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,t<0&&(Bt||!a&&!d)&&e._startAt.revert(Go),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),T=_n({overwrite:!1,data:"isFromStart",lazy:a&&kt(l),immediateRender:a,stagger:0,parent:S},P),V&&(T[N.prop]=V),Fi(e._startAt=pt.set(v,T)),e._startAt._dp=0,t<0&&(Bt?e._startAt.revert(Go):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&kt(l)||l&&!p,x=0;x<v.length;x++){if(I=v[x],Q=I._gsap||Zc(v)[x]._gsap,e._ptLookup[x]=U={},ac[Q.id]&&Pi.length&&Jo(),G=y===v?x:y.indexOf(I),N&&(X=new N).init(I,V||P,e,G,y)!==!1&&(e._pt=R=new Vt(e._pt,I,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function($){U[$]=R}),X.priority&&(ne=1)),!N||V)for(T in P)Xt[T]&&(X=tp(T,P,e,G,I,y))?X.priority&&(ne=1):U[T]=R=Kc.call(e,I,T,"get",P[T],G,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(I,e._op[x]),b&&e._pt&&(Ti=e,Je.killTweensOf(I,U,e.globalTime(t)),B=!e.parent,Ti=0),e._pt&&l&&(ac[Q.id]=1)}ne&&ap(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,g&&t<=0&&A.render(fn,!0,!0)},cb=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return dc=1,e.vars[t]="+=0",Jc(e,a),dc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ot(n)+St(u.e)),u.b&&(u.b=c.s+St(u.b))},ub=function(e,t){var n=e[0]?fr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=xr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Tt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ns=function(e,t,n,i,s){return it(e)?e.call(t,n,i,s):xt(e)&&~e.indexOf("random(")?Ws(e):e},np=Yc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ip={};Gt(np+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ip[r]=1});var pt=function(r){Md(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Fs(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Je,S=(Tt(n)||Td(n)?oi(n[0]):"length"in i)?[n]:hn(n),y,b,A,P,x,T,R,I;if(a._targets=S.length?Zc(S):Ko("GSAP target "+n+" not found. https://greensock.com",!Kt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||Io(c)||Io(u)){if(i=a.vars,y=a.timeline=new Ut({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:S}),y.kill(),y.parent=y._dp=Jn(a),y._start=0,h||Io(c)||Io(u)){if(P=S.length,R=h&&Hd(h),Vn(h))for(x in h)~np.indexOf(x)&&(I||(I={}),I[x]=h[x]);for(b=0;b<P;b++)A=Qo(i,ip),A.stagger=0,_&&(A.yoyoEase=_),I&&xr(A,I),T=S[b],A.duration=+Ns(c,Jn(a),b,T,S),A.delay=(+Ns(u,Jn(a),b,T,S)||0)-a._delay,!h&&P===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(T,A,R?R(b,T,S):0),y._ease=Ne.none;y.duration()?c=u=0:a.timeline=0}else if(g){Fs(_n(y.vars.defaults,{ease:"none"})),y._ease=dr(g.ease||i.ease||"none");var ne=0,Q,N,X;if(Tt(g))g.forEach(function(U){return y.to(S,U,">")}),y.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||fb(x,g[x],A,g.easeEach);for(x in A)for(Q=A[x].sort(function(U,G){return U.t-G.t}),ne=0,b=0;b<Q.length;b++)N=Q[b],X={ease:N.e,duration:(N.t-(b?Q[b-1].t:0))/100*c},X[x]=N.v,y.to(S,X,ne),ne+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!Wc&&(Ti=Jn(a),Je.killTweensOf(S),Ti=0),Bn(v,Jn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===vt(v._time)&&kt(f)&&Gy(Jn(a))&&v.data!=="nested")&&(a._tTime=-$e,a.render(Math.max(0,-u)||0)),p&&Bd(Jn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-$e&&!u?l:i<$e?0:i,h,m,g,d,p,_,v,S,y;if(!c)Hy(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,S=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,o);if(h=vt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),p=ss(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==p&&(S&&this._yEase&&Jd(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(vt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(kd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&(dn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;S&&S.render(i<0?i:!h&&_?-$e:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&lc(this,i,s,o),dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&lc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fi(this,1),!s&&!(u&&!a)&&(f||a||_)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){qs||Yt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Jc(this,l),c=this._ease(l/this._dur),cb(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(_a(this,0),this.parent||zd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ti&&Ti.vars.overwrite!==!0)._first||Ls(this),this.parent&&o!==this.timeline.totalDuration()&&os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hn(i):a,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!s||s==="all")&&By(a,l))return s==="all"&&(this._pt=0),Ls(this);for(f=this._op=this._op||[],s!=="all"&&(xt(s)&&(d={},Gt(s,function(v){return d[v]=1}),s=d),s=ub(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(f[_]=s,g=h,m={}):(m=f[_]=f[_]||{},g=s);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ma(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Os(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Os(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Je.killTweensOf(i,s,o)},e}(ls);_n(pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gt("staggerTo,staggerFrom,staggerFromTo",function(r){pt[r]=function(){var e=new Ut,t=uc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qc=function(e,t,n){return e[t]=n},rp=function(e,t,n){return e[t](n)},hb=function(e,t,n,i){return e[t](i.fp,n)},db=function(e,t,n){return e.setAttribute(t,n)},eu=function(e,t){return it(e[t])?rp:qc(e[t])&&e.setAttribute?db:Qc},sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},op=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},tu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},gb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ma(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_b=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ap=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Vt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||sp,this.d=l||this,this.set=c||Qc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_b,this.m=n,this.mt=s,this.tween=i},r}();Gt(Yc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return $c[r]=1});Jt.TweenMax=Jt.TweenLite=pt;Jt.TimelineLite=Jt.TimelineMax=Ut;Je=new Ut({sortChildren:!1,defaults:rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kt.stringFilter=Zd;var cs=[],Ho={},xb=[],sh=0,zl=function(e){return(Ho[e]||xb).map(function(t){return t()})},pc=function(){var e=Date.now(),t=[];e-sh>2&&(zl("matchMediaInit"),cs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ln.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),sh=e,zl("matchMedia"))},lp=function(){function r(t,n){this.selector=n&&fc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){it(n)&&(s=i,i=n,n=it);var o=this,a=function(){var c=ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=fc(s)),ft=o,f=i.apply(o,arguments),it(f)&&o._r.push(f),ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===it?a(o):n?o[n]=a:a},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ls)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=cs.indexOf(this);~a&&cs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),vb=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Vn(n)||(n={matches:n});var o=new lp(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ln.matchMedia(n[c]),l&&(cs.indexOf(o)<0&&cs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(pc):l.addEventListener("change",pc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ta={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return eb(i)})},timeline:function(e){return new Ut(e)},getTweensOf:function(e,t){return Je.getTweensOf(e,t)},getProperty:function(e,t,n,i){xt(e)&&(e=hn(e)[0]);var s=fr(e||{}).get,o=n?Nd:Od;return n==="native"&&(n=""),e&&(t?o((Xt[t]&&Xt[t].get||s)(e,t,n,i)):function(a,l,c){return o((Xt[a]&&Xt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hn(e),e.length>1){var i=e.map(function(u){return Qt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Xt[t],a=fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Hr._pt=0,f.init(e,n?u+n:u,Hr,0,[e]),f.render(1,f),Hr._pt&&tu(1,Hr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Qt.to(e,xr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dr(e.ease,rs.ease)),eh(rs,e||{})},config:function(e){return eh(Kt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xt[a]&&!Jt[a]&&Ko(t+" effect requires "+a+" plugin.")}),Il[t]=function(a,l,c){return n(hn(a),_n(l||{},s),c)},o&&(Ut.prototype[t]=function(a,l,c){return this.add(Il[t](a,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ne[e]=dr(t)},parseEase:function(e,t){return arguments.length?dr(e,t):Ne},getById:function(e){return Je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ut(e),i,s;for(n.smoothChildTiming=kt(e.smoothChildTiming),Je.remove(n),n._dp=0,n._time=n._tTime=Je._time,i=Je._first;i;)s=i._next,(t||!(!i._dur&&i instanceof pt&&i.vars.onComplete===i._targets[0]))&&Bn(n,i,i._start-i._delay),i=s;return Bn(Je,n,0),n},context:function(e,t){return e?new lp(e,t):ft},matchMedia:function(e){return new vb(e)},matchMediaRefresh:function(){return cs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pc()},addEventListener:function(e,t){var n=Ho[e]||(Ho[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ho[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ky,wrapYoyo:Jy,distribute:Hd,random:qd,snap:Wd,normalize:Zy,getUnit:St,clamp:Xy,splitColor:$d,toArray:hn,selector:fc,mapRange:jd,pipe:$y,unitize:Yy,interpolate:Qy,shuffle:Vd},install:Ld,effects:Il,ticker:Yt,updateRoot:Ut.updateRoot,plugins:Xt,globalTimeline:Je,core:{PropTween:Vt,globals:Dd,Tween:pt,Timeline:Ut,Animation:ls,getCache:fr,_removeLinkedListItem:ma,reverting:function(){return Bt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Wc=e}}};Gt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ta[r]=pt[r]});Yt.add(Ut.updateRoot);Hr=ta.to({},{duration:0});var yb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=yb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(xt(s)&&(l={},Gt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}bb(a,s)}}}},Qt=ta.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",hc),Ul("modifiers"),Ul("snap",Wd))||ta;pt.version=Ut.version=Qt.version="3.11.3";Pd=1;Sd()&&as();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oh,Ei,Yr,nu,lr,ah,iu,Mb=function(){return typeof window<"u"},ai={},er=180/Math.PI,Zr=Math.PI/180,zr=Math.atan2,lh=1e8,ru=/([A-Z])/g,wb=/(left|right|width|margin|padding|x)/i,Sb=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Eb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},up=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ab=function(e,t,n){return e.style[t]=n},Pb=function(e,t,n){return e.style.setProperty(t,n)},Lb=function(e,t,n){return e._gsap[t]=n},Db=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Rb=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ib=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Qe="transform",Pn=Qe+"Origin",Fb=function(e,t){var n=this,i=this.target,s=i.style;if(e in ai){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Qn(i,e)),this.props.indexOf(Qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=Qe}(s||t)&&this.props.push(e,t,s[e])},fp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ob=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(ru,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=iu(),s&&!s.isStart&&!n[Qe]&&(fp(n),i.uncache=1)}},hp=function(e,t){var n={target:e,props:[],revert:Ob,save:Fb};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},dp,gc=function(e,t){var n=Ei.createElementNS?Ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return n.style?n:Ei.createElement(e)},Gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ru,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,us(t)||t,1)||""},ch="O,Moz,ms,Ms,Webkit".split(","),us=function(e,t,n){var i=t||lr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ch[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ch[o]:"")+e},_c=function(){Mb()&&window.document&&(oh=window,Ei=oh.document,Yr=Ei.documentElement,lr=gc("div")||{style:{}},gc("div"),Qe=us(Qe),Pn=Qe+"Origin",lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dp=!!us("perspective"),iu=Qt.core.reverting,nu=1)},Bl=function r(e){var t=gc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Yr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Yr.removeChild(t),this.style.cssText=s,o},uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},pp=function(e){var t;try{t=e.getBBox()}catch{t=Bl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Bl||(t=Bl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+uh(e,["x","cx","x1"])||0,y:+uh(e,["y","cy","y1"])||0,width:0,height:0}:t},mp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pp(e))},Xs=function(e,t){if(t){var n=e.style;t in ai&&t!==Pn&&(t=Qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ru,"-$1").toLowerCase())):n.removeAttribute(t)}},Ci=function(e,t,n,i,s,o){var a=new Vt(e._pt,t,n,0,1,o?up:cp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},fh={deg:1,rad:1,turn:1},Nb={grid:1,flex:1},Oi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=lr.style,l=wb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,_;return i===o||!s||fh[i]||fh[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&mp(e),(m||o==="%")&&(ai[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ot(m?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ei||!d.appendChild)&&(d=Ei.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Yt.time&&!p.uncache?ot(s/p.width*f):((m||o==="%")&&!Nb[Gn(d,"display")]&&(a.position=Gn(e,"position")),d===e&&(a.position="static"),d.appendChild(lr),g=lr[u],d.removeChild(lr),a.position="absolute",l&&m&&(p=fr(d),p.time=Yt.time,p.width=d[u]),ot(h?g*s/f:g&&s?f/g*s:0))))},Qn=function(e,t,n,i){var s;return nu||_c(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(s=$s(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ia(Gn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=na[t]&&na[t](e,t,n)||Gn(e,t)||Id(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Oi(e,t,s,n)+n:s},zb=function(e,t,n,i){if(!n||n==="none"){var s=us(t,e,1),o=s&&Gn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gn(e,"borderTopColor"))}var a=new Vt(this._pt,e.style,t,0,1,op),l=0,c=0,u,f,h,m,g,d,p,_,v,S,y,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Gn(e,t)||i,e.style[t]=n),u=[n,i],Zd(u),n=u[0],i=u[1],h=n.match(Vr)||[],b=i.match(Vr)||[],b.length){for(;f=Vr.exec(i);)p=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=$r(m,p)+y),_=parseFloat(p),S=p.substr((_+"").length),l=Vr.lastIndex-S.length,S||(S=S||Kt.units[t]||y,l===i.length&&(i+=S,a.e+=S)),y!==S&&(m=Oi(e,t,d,S)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?up:cp;return Cd.test(i)&&(a.e=0),this._pt=a,a},hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ub=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=hh[n]||n,t[1]=hh[i]||i,t.join(" ")},Bb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ai[a]&&(l=1,a=a==="transformOrigin"?Pn:Qe),Xs(n,a);l&&(Xs(n,Qe),o&&(o.svg&&n.removeAttribute("transform"),$s(n,1),o.uncache=1,fp(i)))}},na={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Vt(e._pt,t,n,0,0,Bb);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},js=[1,0,0,1,0,0],gp={},_p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dh=function(e){var t=Gn(e,Qe);return _p(t)?js:t.substr(7).match(Ed).map(ot)},su=function(e,t){var n=e._gsap||fr(e),i=e.style,s=dh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?js:s):(s===js&&!e.offsetParent&&e!==Yr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Yr.appendChild(e)),s=dh(e),l?i.display=l:Xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Yr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xc=function(e,t,n,i,s,o){var a=e._gsap,l=s||su(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],v=l[5],S=t.split(" "),y=parseFloat(S[0])||0,b=parseFloat(S[1])||0,A,P,x,T;n?l!==js&&(P=m*p-g*d)&&(x=y*(p/P)+b*(-d/P)+(d*v-p*_)/P,T=y*(-g/P)+b*(m/P)-(m*v-g*_)/P,y=x,b=T):(A=pp(e),y=A.x+(~S[0].indexOf("%")?y/100*A.width:y),b=A.y+(~(S[1]||S[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&a.smooth?(_=y-c,v=b-u,a.xOffset=f+(_*m+v*d)-_,a.yOffset=h+(_*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Pn]="0px 0px",o&&(Ci(o,a,"xOrigin",c,y),Ci(o,a,"yOrigin",u,b),Ci(o,a,"xOffset",f,a.xOffset),Ci(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},$s=function(e,t){var n=e._gsap||new ep(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gn(e,Pn)||"0",u,f,h,m,g,d,p,_,v,S,y,b,A,P,x,T,R,I,ne,Q,N,X,U,G,V,B,$,le,re,oe,pe,Me;return u=f=h=d=p=_=v=S=y=0,m=g=1,n.svg=!!(e.getCTM&&mp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qe]!=="none"?l[Qe]:"")),i.scale=i.rotate=i.translate="none"),P=su(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),xc(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,P)),b=n.xOrigin||0,A=n.yOrigin||0,P!==js&&(I=P[0],ne=P[1],Q=P[2],N=P[3],u=X=P[4],f=U=P[5],P.length===6?(m=Math.sqrt(I*I+ne*ne),g=Math.sqrt(N*N+Q*Q),d=I||ne?zr(ne,I)*er:0,v=Q||N?zr(Q,N)*er+d:0,v&&(g*=Math.abs(Math.cos(v*Zr))),n.svg&&(u-=b-(b*I+A*Q),f-=A-(b*ne+A*N))):(Me=P[6],oe=P[7],$=P[8],le=P[9],re=P[10],pe=P[11],u=P[12],f=P[13],h=P[14],x=zr(Me,re),p=x*er,x&&(T=Math.cos(-x),R=Math.sin(-x),G=X*T+$*R,V=U*T+le*R,B=Me*T+re*R,$=X*-R+$*T,le=U*-R+le*T,re=Me*-R+re*T,pe=oe*-R+pe*T,X=G,U=V,Me=B),x=zr(-Q,re),_=x*er,x&&(T=Math.cos(-x),R=Math.sin(-x),G=I*T-$*R,V=ne*T-le*R,B=Q*T-re*R,pe=N*R+pe*T,I=G,ne=V,Q=B),x=zr(ne,I),d=x*er,x&&(T=Math.cos(x),R=Math.sin(x),G=I*T+ne*R,V=X*T+U*R,ne=ne*T-I*R,U=U*T-X*R,I=G,X=V),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=ot(Math.sqrt(I*I+ne*ne+Q*Q)),g=ot(Math.sqrt(U*U+Me*Me)),x=zr(X,U),v=Math.abs(x)>2e-4?x*er:0,y=pe?1/(pe<0?-pe:pe):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_p(Gn(e,Qe)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ot(m),n.scaleY=ot(g),n.rotation=ot(d)+a,n.rotationX=ot(p)+a,n.rotationY=ot(_)+a,n.skewX=v+a,n.skewY=S+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Pn]=ia(c)),n.xOffset=n.yOffset=0,n.force3D=Kt.force3D,n.renderTransform=n.svg?Gb:dp?xp:kb,n.uncache=0,n},ia=function(e){return(e=e.split(" "))[0]+" "+e[1]},kl=function(e,t,n){var i=St(t);return ot(parseFloat(t)+parseFloat(Oi(e,"x",n+"px",i)))+i},kb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xp(e,t)},$i="0deg",Es="0px",Yi=") ",xp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,S=n.zOrigin,y="",b=_==="auto"&&e&&e!==1||_===!0;if(S&&(f!==$i||u!==$i)){var A=parseFloat(u)*Zr,P=Math.sin(A),x=Math.cos(A),T;A=parseFloat(f)*Zr,T=Math.cos(A),o=kl(v,o,P*T*-S),a=kl(v,a,-Math.sin(A)*-S),l=kl(v,l,x*T*-S+S)}p!==Es&&(y+="perspective("+p+Yi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||o!==Es||a!==Es||l!==Es)&&(y+=l!==Es||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yi),c!==$i&&(y+="rotate("+c+Yi),u!==$i&&(y+="rotateY("+u+Yi),f!==$i&&(y+="rotateX("+f+Yi),(h!==$i||m!==$i)&&(y+="skew("+h+", "+m+Yi),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Yi),v.style[Qe]=y||"translate(0, 0)"},Gb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,S=parseFloat(o),y=parseFloat(a),b,A,P,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zr,c*=Zr,b=Math.cos(l)*f,A=Math.sin(l)*f,P=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Zr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),P*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),b*=T,A*=T)),b=ot(b),A=ot(A),P=ot(P),x=ot(x)):(b=f,x=h,A=P=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Oi(m,"x",o,"px"),y=Oi(m,"y",a,"px")),(g||d||p||_)&&(S=ot(S+g-(g*b+d*P)+p),y=ot(y+d-(g*A+d*x)+_)),(i||s)&&(T=m.getBBox(),S=ot(S+i/100*T.width),y=ot(y+s/100*T.height)),T="matrix("+b+","+A+","+P+","+x+","+S+","+y+")",m.setAttribute("transform",T),v&&(m.style[Qe]=T)},Vb=function(e,t,n,i,s){var o=360,a=xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?er:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*lh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*lh)%o-~~(c/o)*o)),e._pt=h=new Vt(e._pt,t,n,i,c,Tb),h.e=u,h.u="deg",e._props.push(n),h},ph=function(e,t){for(var n in t)e[n]=t[n];return e},Hb=function(e,t,n){var i=ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Qe]=t,a=$s(n,1),Xs(n,Qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qe],o[Qe]=t,a=$s(n,1),o[Qe]=c);for(l in ai)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=St(c),g=St(u),f=m!==g?Oi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Vt(e._pt,a,l,f,h-f,mc),e._pt.u=g||0,e._props.push(l));ph(a,i)};Gt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});na[e>1?"border"+r:r]=function(a,l,c,u,f){var h,m;if(arguments.length<4)return h=o.map(function(g){return Qn(a,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,m,f)}});var vp={name:"css",register:_c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,v,S,y,b,A,P,x;nu||_c(),this.styles=this.styles||hp(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Xt[d]&&tp(d,t,n,i,e,s)))){if(m=typeof u,g=na[d],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ws(u)),g)g(this,e,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(p=St(c),_=St(u)),_?p!==_&&(c=Oi(e,d,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,d),o.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],xt(c)&&~c.indexOf("random(")&&(c=Ws(c)),St(c+"")||(c+=Kt.units[d]||St(Qn(e,d))||""),(c+"").charAt(1)==="="&&(c=Qn(e,d))):c=Qn(e,d),h=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),d in ni&&(d==="autoAlpha"&&(h===1&&Qn(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Ci(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=ni[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in ai,S){if(this.styles.save(d),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||$s(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Vt(this._pt,a,Qe,0,1,b.renderTransform,b,0,-1),y.dep=1),d==="scale")this._pt=new Vt(this._pt,b,"scaleY",h,(v?$r(h,v+f):f)-h||0,mc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Pn,0,a[Pn]),u=Ub(u),b.svg?xc(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&Ci(this,b,"zOrigin",b.zOrigin,_),Ci(this,a,d,ia(c),ia(u)));continue}else if(d==="svgOrigin"){xc(e,u,1,A,0,this);continue}else if(d in gp){Vb(this,b,d,h,v?$r(h,v+u):u);continue}else if(d==="smoothOrigin"){Ci(this,b,"smooth",b.smooth,u);continue}else if(d==="force3D"){b[d]=u;continue}else if(d==="transform"){Hb(this,u,e);continue}}else d in a||(d=us(d)||d);if(S||(f||f===0)&&(h||h===0)&&!Sb.test(u)&&d in a)p=(c+"").substr((h+"").length),f||(f=0),_=St(u)||(d in Kt.units?Kt.units[d]:p),p!==_&&(h=Oi(e,d,c,_)),this._pt=new Vt(this._pt,S?b:a,d,h,(v?$r(h,v+f):f)-h,!S&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Cb:mc),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Eb);else if(d in a)zb.call(this,e,d,c,v?v+u:u);else if(d in e)this.add(e,d,c||e[d],v?v+u:u,i,s);else{jc(d,u);continue}S||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}P&&ap(this)},render:function(e,t){if(t.tween._time||!iu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qn,aliases:ni,getSetter:function(e,t,n){var i=ni[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==Pn&&(e._gsap.x||Qn(e,"x"))?n&&ah===n?t==="scale"?Db:Lb:(ah=n||{})&&(t==="scale"?Rb:Ib):e.style&&!qc(e.style[t])?Ab:~t.indexOf("-")?Pb:eu(e,t)},core:{_removeProperty:Xs,_getMatrix:su}};Qt.utils.checkPrefix=us;Qt.core.getStyleSaver=hp;(function(r,e,t,n){var i=Gt(r+","+e+","+t,function(s){ai[s]=1});Gt(e,function(s){Kt.units[s]="deg",gp[s]=1}),ni[i[13]]=r+","+e,Gt(n,function(s){var o=s.split(":");ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kt.units[r]="px"});Qt.registerPlugin(vp);var yp=Qt.registerPlugin(vp)||Qt;yp.core.Tween;const mh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class xa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Wb=new kc(-1,1,1,-1,0,1),ou=new tn;ou.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));ou.setAttribute("uv",new yt([0,2,0,0,2,0],2));class qb{constructor(e){this._mesh=new ht(ou,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ra extends xa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof si?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ld.clone(e.uniforms),this.material=new si({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qb(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class gh extends xa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xb extends xa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class jb{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ue);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],mh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ra===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ra(mh),this.clock=new Hc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(o instanceof gh?n=!0:o instanceof Xb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new kc(-1,1,1,-1,0,1);const bp=new tn;bp.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));bp.setAttribute("uv",new yt([0,2,0,0,2,0],2));class $b extends xa{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Yb={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float l = luminance( texel.rgb );

			gl_FragColor = vec4( l, l, l, texel.w );

		}`},Zb={uniforms:{tDiffuse:{value:null},resolution:{value:new Ue}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		void main() {

			vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

		// kernel definition (in glsl matrices are filled in column-major order)

			const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
			const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

		// fetch the 3x3 neighbourhood of a fragment

		// first column

			float tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) ).r;
			float tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) ).r;
			float tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) ).r;

		// second column

			float tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) ).r;
			float tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) ).r;
			float tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) ).r;

		// third column

			float tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) ).r;
			float tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) ).r;
			float tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) ).r;

		// gradient value in x direction

			float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
				Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
				Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

		// gradient value in y direction

			float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
				Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
				Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

		// magnitute of the total gradient

			float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

			gl_FragColor = vec4( vec3( G ), 1 );

		}`};function Kb(r){const e=new Ay;r.add(e);const t=new Py(e);new Ey().load("/src/assets/SleepFruitsSubwayStation.mp3",function(i){t.setBuffer(i),t.setLoop(!0),t.setVolume(.25),t.play()})}const Jb=document.querySelector("canvas.webgl"),ao=new my,rt=4,Rn=new _y({color:"#ffeded"}),va=new ht(new xn(1,.25,125,15,2,7),Rn),ya=new ht(new xn(.4,.35,100,16),Rn),ki=new ht(new xn(.2,.35,100,16),Rn),ba=new ht(new xn(.8,.6,55,8,9,3),Rn),Gi=new ht(new Vc(1,.4,16,60),Rn),Ma=new ht(new xn(.5,.25,77,8,20,1),Rn),wa=new ht(new xn(.5,.05,70,5,17.5,12),Rn),Sa=new ht(new xn(1e-4,1,194,5,2,70),Rn),Ta=new ht(new xn(.2,1,80,10,50,3),Rn),Ea=new ht(new xn(2,.05,43,14,14,14),Rn),Ca=new ht(new xn(1.2,.4,120,10,10,1),Rn),Aa=Gi.clone(),Pa=ki.clone(),La=Gi.clone(),Da=ki.clone(),Ra=Gi.clone(),Ia=ki.clone(),Fa=Gi.clone(),Oa=ki.clone();ba.position.y=-rt*0;ya.position.y=-rt*1;ki.position.y=-rt*2.2;Gi.position.y=-rt*2.2;Ma.position.y=-rt*2.5;wa.position.y=-rt*3.85;va.position.y=-rt*5.5;Sa.position.y=-rt*6.5;Ca.position.y=-rt*8;Ta.position.y=-rt*9.25;Ea.position.y=-rt*11;Aa.position.y=-rt*10;Pa.position.y=-rt*10;La.position.y=-rt*12;Da.position.y=-rt*12;Ra.position.y=-rt*14;Ia.position.y=-rt*14;Fa.position.y=-rt*3;Oa.position.y=-rt*3;va.position.x=0;ya.position.x=1;ki.position.x=2;ba.position.x=0;Gi.position.x=2;Ma.position.x=-2.75;wa.position.x=2;Sa.position.x=0;Ta.position.x=0;Ea.position.x=0;Ca.position.x=0;Aa.position.x=0;Pa.position.x=0;La.position.x=0;Da.position.x=0;Ra.position.x=0;Ia.position.x=0;Fa.position.x=-1;Oa.position.x=-1;const au=[va,ya,ki,ba,Gi,Ma,wa,Sa,Ta,Ea,Ca,Aa,Pa,La,Da,Ra,Ia,Fa,Oa];ao.add(va,ya,ki,ba,Gi,Ma,wa,Sa,Ta,Ea,Ca,Aa,Pa,La,Da,Ra,Ia,Fa,Oa);const Mp=500,Wo=new Float32Array(Mp*3);for(let r=0;r<Mp;r++)Wo[r*3+0]=(Math.random()-.5)*10,Wo[r*3+1]=rt*.5-Math.random()*rt*au.length,Wo[r*3+2]=(Math.random()-.5)*10;const wp=new tn;wp.setAttribute("position",new An(Wo,3));const Qb=new xd({sizeAttenuation:!0,size:.03,transparent:!0,alphaTest:.5}),e1=new gy(wp,Qb);ao.add(e1);const t1=new Ty(13421772,.4);ao.add(t1);const zt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{zt.width=window.innerWidth,zt.height=window.innerHeight,Ni.aspect=zt.width/zt.height,Ni.updateProjectionMatrix(),Ys.setSize(zt.width,zt.height),Ys.setPixelRatio(Math.min(window.devicePixelRatio,2)),lo.setSize(window.innerWidth,window.innerHeight),Zs.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,Zs.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio});let vc=window.scrollY,Gl=0;window.addEventListener("scroll",()=>{vc=window.scrollY;const r=Math.round(vc/zt.height);r!=Gl&&(Gl=r,yp.to(au[Gl].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3"}))});const fs={};fs.x=0;fs.y=0;window.addEventListener("mousemove",r=>{fs.x=r.clientX/zt.width-.5,fs.y=r.clientY/zt.height-.5});const Wr=new Ps;ao.add(Wr);const Ni=new $t(35,zt.width/zt.height,.1,100);Ni.position.z=6;Wr.add(Ni);Kb(Ni);const n1=new Sy(16777215,.8);Ni.add(n1);const Ys=new _d({canvas:Jb,alpha:!0,antialias:!1});Ys.setSize(zt.width,zt.height);Ys.setPixelRatio(Math.min(window.devicePixelRatio,2));const lo=new jb(Ys),i1=new $b(ao,Ni);lo.addPass(i1);const r1=new ra(Yb);lo.addPass(r1);const Zs=new ra(Zb);Zs.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio;Zs.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio;lo.addPass(Zs);const s1=new Hc;let _h=0;const Sp=()=>{const r=s1.getElapsedTime(),e=r-_h;_h=r;for(const i of au)i.rotation.x+=e*.1,i.rotation.y+=e*.12;Ni.position.y=-vc/zt.height*rt;const t=fs.x*.5,n=-fs.y*.5;Wr.position.x+=(t-Wr.position.x)*10*e,Wr.position.y+=(n-Wr.position.y)*10*e,lo.render(),window.requestAnimationFrame(Sp)};Sp();let Na=document.querySelector("path"),Ks=Na.getTotalLength();Na.style.strokeDasharray=Ks+" "+Ks;Na.style.strokeDasharray=Ks;window.addEventListener("scroll",()=>{var r=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight),e=Ks*r;Na.style.strokeDashoffset=Ks-e});function lu(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const o1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a1=lu(o1);function Tp(r){return!!r||r===""}function cu(r){if(Le(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Ct(n)?u1(n):cu(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ct(r))return r;if(Ft(r))return r}}const l1=/;(?![^(]*\))/g,c1=/:(.+)/;function u1(r){const e={};return r.split(l1).forEach(t=>{if(t){const n=t.split(c1);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function uu(r){let e="";if(Ct(r))e=r;else if(Le(r))for(let t=0;t<r.length;t++){const n=uu(r[t]);n&&(e+=n+" ")}else if(Ft(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Ze={},Kr=[],Ln=()=>{},f1=()=>!1,h1=/^on[^a-z]/,za=r=>h1.test(r),fu=r=>r.startsWith("onUpdate:"),Et=Object.assign,hu=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},d1=Object.prototype.hasOwnProperty,ze=(r,e)=>d1.call(r,e),Le=Array.isArray,zs=r=>Ua(r)==="[object Map]",p1=r=>Ua(r)==="[object Set]",Ie=r=>typeof r=="function",Ct=r=>typeof r=="string",du=r=>typeof r=="symbol",Ft=r=>r!==null&&typeof r=="object",Ep=r=>Ft(r)&&Ie(r.then)&&Ie(r.catch),m1=Object.prototype.toString,Ua=r=>m1.call(r),g1=r=>Ua(r).slice(8,-1),_1=r=>Ua(r)==="[object Object]",pu=r=>Ct(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,qo=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},x1=/-(\w)/g,Hn=Ba(r=>r.replace(x1,(e,t)=>t?t.toUpperCase():"")),v1=/\B([A-Z])/g,_s=Ba(r=>r.replace(v1,"-$1").toLowerCase()),ka=Ba(r=>r.charAt(0).toUpperCase()+r.slice(1)),Vl=Ba(r=>r?`on${ka(r)}`:""),sa=(r,e)=>!Object.is(r,e),Hl=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},oa=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},y1=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let xh;const b1=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let On;class M1{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&On&&(this.parent=On,this.index=(On.scopes||(On.scopes=[])).push(this)-1)}run(e){if(this.active){const t=On;try{return On=this,e()}finally{On=t}}}on(){On=this}off(){On=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function w1(r,e=On){e&&e.active&&e.effects.push(r)}const mu=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Cp=r=>(r.w&zi)>0,Ap=r=>(r.n&zi)>0,S1=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=zi},T1=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Cp(i)&&!Ap(i)?i.delete(r):e[t++]=i,i.w&=~zi,i.n&=~zi}e.length=t}},yc=new WeakMap;let Rs=0,zi=1;const bc=30;let Sn;const pr=Symbol(""),Mc=Symbol("");class gu{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,w1(this,n)}run(){if(!this.active)return this.fn();let e=Sn,t=Di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Sn,Sn=this,Di=!0,zi=1<<++Rs,Rs<=bc?S1(this):vh(this),this.fn()}finally{Rs<=bc&&T1(this),zi=1<<--Rs,Sn=this.parent,Di=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Sn===this?this.deferStop=!0:this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Di=!0;const Pp=[];function xs(){Pp.push(Di),Di=!1}function vs(){const r=Pp.pop();Di=r===void 0?!0:r}function en(r,e,t){if(Di&&Sn){let n=yc.get(r);n||yc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=mu()),Lp(i)}}function Lp(r,e){let t=!1;Rs<=bc?Ap(r)||(r.n|=zi,t=!Cp(r)):t=!r.has(Sn),t&&(r.add(Sn),Sn.deps.push(r))}function li(r,e,t,n,i,s){const o=yc.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Le(r))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Le(r)?pu(t)&&a.push(o.get("length")):(a.push(o.get(pr)),zs(r)&&a.push(o.get(Mc)));break;case"delete":Le(r)||(a.push(o.get(pr)),zs(r)&&a.push(o.get(Mc)));break;case"set":zs(r)&&a.push(o.get(pr));break}if(a.length===1)a[0]&&wc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);wc(mu(l))}}function wc(r,e){const t=Le(r)?r:[...r];for(const n of t)n.computed&&yh(n);for(const n of t)n.computed||yh(n)}function yh(r,e){(r!==Sn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const E1=lu("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(du)),C1=_u(),A1=_u(!1,!0),P1=_u(!0),bh=L1();function L1(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=je(this);for(let s=0,o=this.length;s<o;s++)en(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){xs();const n=je(this)[e].apply(this,t);return vs(),n}}),r}function _u(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?X1:Np:e?Op:Fp).get(n))return n;const o=Le(n);if(!r&&o&&ze(bh,i))return Reflect.get(bh,i,s);const a=Reflect.get(n,i,s);return(du(i)?Dp.has(i):E1(i))||(r||en(n,"get",i),e)?a:Lt(a)?o&&pu(i)?a:a.value:Ft(a)?r?zp(a):yu(a):a}}const D1=Rp(),R1=Rp(!0);function Rp(r=!1){return function(t,n,i,s){let o=t[n];if(Js(o)&&Lt(o)&&!Lt(i))return!1;if(!r&&!Js(i)&&(Sc(i)||(i=je(i),o=je(o)),!Le(t)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=Le(t)&&pu(n)?Number(n)<t.length:ze(t,n),l=Reflect.set(t,n,i,s);return t===je(s)&&(a?sa(i,o)&&li(t,"set",n,i):li(t,"add",n,i)),l}}function I1(r,e){const t=ze(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&li(r,"delete",e,void 0),n}function F1(r,e){const t=Reflect.has(r,e);return(!du(e)||!Dp.has(e))&&en(r,"has",e),t}function O1(r){return en(r,"iterate",Le(r)?"length":pr),Reflect.ownKeys(r)}const Ip={get:C1,set:D1,deleteProperty:I1,has:F1,ownKeys:O1},N1={get:P1,set(r,e){return!0},deleteProperty(r,e){return!0}},z1=Et({},Ip,{get:A1,set:R1}),xu=r=>r,Ga=r=>Reflect.getPrototypeOf(r);function Fo(r,e,t=!1,n=!1){r=r.__v_raw;const i=je(r),s=je(e);t||(e!==s&&en(i,"get",e),en(i,"get",s));const{has:o}=Ga(i),a=n?xu:t?wu:Mu;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Oo(r,e=!1){const t=this.__v_raw,n=je(t),i=je(r);return e||(r!==i&&en(n,"has",r),en(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function No(r,e=!1){return r=r.__v_raw,!e&&en(je(r),"iterate",pr),Reflect.get(r,"size",r)}function Mh(r){r=je(r);const e=je(this);return Ga(e).has.call(e,r)||(e.add(r),li(e,"add",r,r)),this}function wh(r,e){e=je(e);const t=je(this),{has:n,get:i}=Ga(t);let s=n.call(t,r);s||(r=je(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?sa(e,o)&&li(t,"set",r,e):li(t,"add",r,e),this}function Sh(r){const e=je(this),{has:t,get:n}=Ga(e);let i=t.call(e,r);i||(r=je(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&li(e,"delete",r,void 0),s}function Th(){const r=je(this),e=r.size!==0,t=r.clear();return e&&li(r,"clear",void 0,void 0),t}function zo(r,e){return function(n,i){const s=this,o=s.__v_raw,a=je(o),l=e?xu:r?wu:Mu;return!r&&en(a,"iterate",pr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Uo(r,e,t){return function(...n){const i=this.__v_raw,s=je(i),o=zs(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?xu:e?wu:Mu;return!e&&en(s,"iterate",l?Mc:pr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bi(r){return function(...e){return r==="delete"?!1:this}}function U1(){const r={get(s){return Fo(this,s)},get size(){return No(this)},has:Oo,add:Mh,set:wh,delete:Sh,clear:Th,forEach:zo(!1,!1)},e={get(s){return Fo(this,s,!1,!0)},get size(){return No(this)},has:Oo,add:Mh,set:wh,delete:Sh,clear:Th,forEach:zo(!1,!0)},t={get(s){return Fo(this,s,!0)},get size(){return No(this,!0)},has(s){return Oo.call(this,s,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:zo(!0,!1)},n={get(s){return Fo(this,s,!0,!0)},get size(){return No(this,!0)},has(s){return Oo.call(this,s,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Uo(s,!1,!1),t[s]=Uo(s,!0,!1),e[s]=Uo(s,!1,!0),n[s]=Uo(s,!0,!0)}),[r,t,e,n]}const[B1,k1,G1,V1]=U1();function vu(r,e){const t=e?r?V1:G1:r?k1:B1;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(ze(t,i)&&i in n?t:n,i,s)}const H1={get:vu(!1,!1)},W1={get:vu(!1,!0)},q1={get:vu(!0,!1)},Fp=new WeakMap,Op=new WeakMap,Np=new WeakMap,X1=new WeakMap;function j1(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $1(r){return r.__v_skip||!Object.isExtensible(r)?0:j1(g1(r))}function yu(r){return Js(r)?r:bu(r,!1,Ip,H1,Fp)}function Y1(r){return bu(r,!1,z1,W1,Op)}function zp(r){return bu(r,!0,N1,q1,Np)}function bu(r,e,t,n,i){if(!Ft(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=$1(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function Jr(r){return Js(r)?Jr(r.__v_raw):!!(r&&r.__v_isReactive)}function Js(r){return!!(r&&r.__v_isReadonly)}function Sc(r){return!!(r&&r.__v_isShallow)}function Up(r){return Jr(r)||Js(r)}function je(r){const e=r&&r.__v_raw;return e?je(e):r}function Bp(r){return oa(r,"__v_skip",!0),r}const Mu=r=>Ft(r)?yu(r):r,wu=r=>Ft(r)?zp(r):r;function Z1(r){Di&&Sn&&(r=je(r),Lp(r.dep||(r.dep=mu())))}function K1(r,e){r=je(r),r.dep&&wc(r.dep)}function Lt(r){return!!(r&&r.__v_isRef===!0)}function J1(r){return Lt(r)?r.value:r}const Q1={get:(r,e,t)=>J1(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Lt(i)&&!Lt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function kp(r){return Jr(r)?r:new Proxy(r,Q1)}class eM{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new gu(e,()=>{this._dirty||(this._dirty=!0,K1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=je(this);return Z1(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tM(r,e,t=!1){let n,i;const s=Ie(r);return s?(n=r,i=Ln):(n=r.get,i=r.set),new eM(n,i,s||!i,t)}function Ri(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){Va(s,e,t)}return i}function gn(r,e,t,n){if(Ie(r)){const s=Ri(r,e,t,n);return s&&Ep(s)&&s.catch(o=>{Va(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(gn(r[s],e,t,n));return i}function Va(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ri(l,null,10,[r,o,a]);return}}nM(r,t,i,n)}function nM(r,e,t,n=!0){console.error(r)}let aa=!1,Tc=!1;const Zt=[];let ti=0;const Us=[];let Is=null,Br=0;const Bs=[];let wi=null,kr=0;const Gp=Promise.resolve();let Su=null,Ec=null;function iM(r){const e=Su||Gp;return r?e.then(this?r.bind(this):r):e}function rM(r){let e=ti+1,t=Zt.length;for(;e<t;){const n=e+t>>>1;Qs(Zt[n])<r?e=n+1:t=n}return e}function Vp(r){(!Zt.length||!Zt.includes(r,aa&&r.allowRecurse?ti+1:ti))&&r!==Ec&&(r.id==null?Zt.push(r):Zt.splice(rM(r.id),0,r),Hp())}function Hp(){!aa&&!Tc&&(Tc=!0,Su=Gp.then(Xp))}function sM(r){const e=Zt.indexOf(r);e>ti&&Zt.splice(e,1)}function Wp(r,e,t,n){Le(r)?t.push(...r):(!e||!e.includes(r,r.allowRecurse?n+1:n))&&t.push(r),Hp()}function oM(r){Wp(r,Is,Us,Br)}function aM(r){Wp(r,wi,Bs,kr)}function Ha(r,e=null){if(Us.length){for(Ec=e,Is=[...new Set(Us)],Us.length=0,Br=0;Br<Is.length;Br++)Is[Br]();Is=null,Br=0,Ec=null,Ha(r,e)}}function qp(r){if(Ha(),Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,wi){wi.push(...e);return}for(wi=e,wi.sort((t,n)=>Qs(t)-Qs(n)),kr=0;kr<wi.length;kr++)wi[kr]();wi=null,kr=0}}const Qs=r=>r.id==null?1/0:r.id;function Xp(r){Tc=!1,aa=!0,Ha(r),Zt.sort((t,n)=>Qs(t)-Qs(n));const e=Ln;try{for(ti=0;ti<Zt.length;ti++){const t=Zt[ti];t&&t.active!==!1&&Ri(t,null,14)}}finally{ti=0,Zt.length=0,qp(),aa=!1,Su=null,(Zt.length||Us.length||Bs.length)&&Xp(r)}}function lM(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||Ze;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||Ze;h&&(i=t.map(m=>m.trim())),f&&(i=t.map(y1))}let a,l=n[a=Vl(e)]||n[a=Vl(Hn(e))];!l&&s&&(l=n[a=Vl(_s(e))]),l&&gn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,gn(c,r,6,i)}}function jp(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Ie(r)){const l=c=>{const u=jp(c,e,!0);u&&(a=!0,Et(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(n.set(r,null),null):(Le(s)?s.forEach(l=>o[l]=null):Et(o,s),n.set(r,o),o)}function Wa(r,e){return!r||!za(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(r,e[0].toLowerCase()+e.slice(1))||ze(r,_s(e))||ze(r,e))}let Tn=null,$p=null;function la(r){const e=Tn;return Tn=r,$p=r&&r.type.__scopeId||null,e}function cM(r,e=Tn,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Nh(-1);const s=la(e),o=r(...i);return la(s),n._d&&Nh(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Wl(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:d}=r;let p,_;const v=la(r);try{if(t.shapeFlag&4){const y=i||n;p=Un(u.call(y,y,f,s,m,h,g)),_=l}else{const y=e;p=Un(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:uM(l)}}catch(y){ks.length=0,Va(y,r,1),p=wt(ri)}let S=p;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:b}=S;y.length&&b&7&&(o&&y.some(fu)&&(_=fM(_,o)),S=Ui(S,_))}return t.dirs&&(S=Ui(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,la(v),p}const uM=r=>{let e;for(const t in r)(t==="class"||t==="style"||za(t))&&((e||(e={}))[t]=r[t]);return e},fM=(r,e)=>{const t={};for(const n in r)(!fu(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function hM(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Eh(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Wa(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Eh(n,o,c):!0:!!o;return!1}function Eh(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Wa(t,s))return!0}return!1}function dM({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const pM=r=>r.__isSuspense;function mM(r,e){e&&e.pendingBranch?Le(r)?e.effects.push(...r):e.effects.push(r):aM(r)}function gM(r,e){if(_t){let t=_t.provides;const n=_t.parent&&_t.parent.provides;n===t&&(t=_t.provides=Object.create(n)),t[r]=e}}function ql(r,e,t=!1){const n=_t||Tn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ie(e)?e.call(n.proxy):e}}const Ch={};function Xl(r,e,t){return Yp(r,e,t)}function Yp(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=Ze){const a=_t;let l,c=!1,u=!1;if(Lt(r)?(l=()=>r.value,c=Sc(r)):Jr(r)?(l=()=>r,n=!0):Le(r)?(u=!0,c=r.some(_=>Jr(_)||Sc(_)),l=()=>r.map(_=>{if(Lt(_))return _.value;if(Jr(_))return qr(_);if(Ie(_))return Ri(_,a,2)})):Ie(r)?e?l=()=>Ri(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),gn(r,a,3,[h])}:l=Ln,e&&n){const _=l;l=()=>qr(_())}let f,h=_=>{f=p.onStop=()=>{Ri(_,a,4)}};if(to)return h=Ln,e?t&&gn(e,a,3,[l(),u?[]:void 0,h]):l(),Ln;let m=u?[]:Ch;const g=()=>{if(!!p.active)if(e){const _=p.run();(n||c||(u?_.some((v,S)=>sa(v,m[S])):sa(_,m)))&&(f&&f(),gn(e,a,3,[_,m===Ch?void 0:m,h]),m=_)}else p.run()};g.allowRecurse=!!e;let d;i==="sync"?d=g:i==="post"?d=()=>Ot(g,a&&a.suspense):d=()=>oM(g);const p=new gu(l,d);return e?t?g():m=p.run():i==="post"?Ot(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&hu(a.scope.effects,p)}}function _M(r,e,t){const n=this.proxy,i=Ct(r)?r.includes(".")?Zp(n,r):()=>n[r]:r.bind(n,n);let s;Ie(e)?s=e:(s=e.handler,t=e);const o=_t;hs(this);const a=Yp(i,s.bind(n),t);return o?hs(o):mr(),a}function Zp(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function qr(r,e){if(!Ft(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Lt(r))qr(r.value,e);else if(Le(r))for(let t=0;t<r.length;t++)qr(r[t],e);else if(p1(r)||zs(r))r.forEach(t=>{qr(t,e)});else if(_1(r))for(const t in r)qr(r[t],e);return r}function xM(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return em(()=>{r.isMounted=!0}),tm(()=>{r.isUnmounting=!0}),r}const on=[Function,Array],vM={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},setup(r,{slots:e}){const t=ow(),n=xM();let i;return()=>{const s=e.default&&Jp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==ri){o=d;break}}const a=je(r),{mode:l}=a;if(n.isLeaving)return jl(o);const c=Ah(o);if(!c)return jl(o);const u=Cc(c,a,n,t);Ac(c,u);const f=t.subTree,h=f&&Ah(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(h&&h.type!==ri&&(!ir(c,h)||m)){const d=Cc(h,a,n,t);if(Ac(h,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update()},jl(o);l==="in-out"&&c.type!==ri&&(d.delayLeave=(p,_,v)=>{const S=Kp(n,h);S[String(h.key)]=h,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return o}}},yM=vM;function Kp(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Cc(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:_,onAppearCancelled:v}=e,S=String(r.key),y=Kp(t,r),b=(x,T)=>{x&&gn(x,n,9,T)},A=(x,T)=>{const R=T[1];b(x,T),Le(x)?x.every(I=>I.length<=1)&&R():x.length<=1&&R()},P={mode:s,persisted:o,beforeEnter(x){let T=a;if(!t.isMounted)if(i)T=d||a;else return;x._leaveCb&&x._leaveCb(!0);const R=y[S];R&&ir(r,R)&&R.el._leaveCb&&R.el._leaveCb(),b(T,[x])},enter(x){let T=l,R=c,I=u;if(!t.isMounted)if(i)T=p||l,R=_||c,I=v||u;else return;let ne=!1;const Q=x._enterCb=N=>{ne||(ne=!0,N?b(I,[x]):b(R,[x]),P.delayedLeave&&P.delayedLeave(),x._enterCb=void 0)};T?A(T,[x,Q]):Q()},leave(x,T){const R=String(r.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return T();b(f,[x]);let I=!1;const ne=x._leaveCb=Q=>{I||(I=!0,T(),Q?b(g,[x]):b(m,[x]),x._leaveCb=void 0,y[R]===r&&delete y[R])};y[R]=r,h?A(h,[x,ne]):ne()},clone(x){return Cc(x,e,t,n)}};return P}function jl(r){if(qa(r))return r=Ui(r),r.children=null,r}function Ah(r){return qa(r)?r.children?r.children[0]:void 0:r}function Ac(r,e){r.shapeFlag&6&&r.component?Ac(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function Jp(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===zn?(o.patchFlag&128&&i++,n=n.concat(Jp(o.children,e,a))):(e||o.type!==ri)&&n.push(a!=null?Ui(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const Xo=r=>!!r.type.__asyncLoader,qa=r=>r.type.__isKeepAlive;function bM(r,e){Qp(r,"a",e)}function MM(r,e){Qp(r,"da",e)}function Qp(r,e,t=_t){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(Xa(e,n,t),t){let i=t.parent;for(;i&&i.parent;)qa(i.parent.vnode)&&wM(n,e,t,i),i=i.parent}}function wM(r,e,t,n){const i=Xa(e,r,n,!0);nm(()=>{hu(n[e],i)},t)}function Xa(r,e,t=_t,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;xs(),hs(t);const a=gn(e,t,r,o);return mr(),vs(),a});return n?i.unshift(s):i.push(s),s}}const ci=r=>(e,t=_t)=>(!to||r==="sp")&&Xa(r,e,t),SM=ci("bm"),em=ci("m"),TM=ci("bu"),EM=ci("u"),tm=ci("bum"),nm=ci("um"),CM=ci("sp"),AM=ci("rtg"),PM=ci("rtc");function LM(r,e=_t){Xa("ec",r,e)}function Zi(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(xs(),gn(l,t,8,[r.el,a,r,e]),vs())}}const im="components";function Mi(r,e){return RM(im,r,!0,e)||r}const DM=Symbol();function RM(r,e,t=!0,n=!1){const i=Tn||_t;if(i){const s=i.type;if(r===im){const a=fw(s,!1);if(a&&(a===e||a===Hn(e)||a===ka(Hn(e))))return s}const o=Ph(i[r]||s[r],e)||Ph(i.appContext[r],e);return!o&&n?s:o}}function Ph(r,e){return r&&(r[e]||r[Hn(e)]||r[ka(Hn(e))])}const Pc=r=>r?pm(r)?Au(r)||r.proxy:Pc(r.parent):null,ca=Et(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Pc(r.parent),$root:r=>Pc(r.root),$emit:r=>r.emit,$options:r=>sm(r),$forceUpdate:r=>r.f||(r.f=()=>Vp(r.update)),$nextTick:r=>r.n||(r.n=iM.bind(r.proxy)),$watch:r=>_M.bind(r)}),IM={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Ze&&ze(n,e))return o[e]=1,n[e];if(i!==Ze&&ze(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&ze(c,e))return o[e]=3,s[e];if(t!==Ze&&ze(t,e))return o[e]=4,t[e];Lc&&(o[e]=0)}}const u=ca[e];let f,h;if(u)return e==="$attrs"&&en(r,"get",e),u(r);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&ze(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ze(h,e))return h[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return i!==Ze&&ze(i,e)?(i[e]=t,!0):n!==Ze&&ze(n,e)?(n[e]=t,!0):ze(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==Ze&&ze(r,o)||e!==Ze&&ze(e,o)||(a=s[0])&&ze(a,o)||ze(n,o)||ze(ca,o)||ze(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:ze(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Lc=!0;function FM(r){const e=sm(r),t=r.proxy,n=r.ctx;Lc=!1,e.beforeCreate&&Lh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:_,beforeUnmount:v,destroyed:S,unmounted:y,render:b,renderTracked:A,renderTriggered:P,errorCaptured:x,serverPrefetch:T,expose:R,inheritAttrs:I,components:ne,directives:Q,filters:N}=e;if(c&&OM(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];Ie(V)&&(n[G]=V.bind(t))}if(i){const G=i.call(t,t);Ft(G)&&(r.data=yu(G))}if(Lc=!0,s)for(const G in s){const V=s[G],B=Ie(V)?V.bind(t,t):Ie(V.get)?V.get.bind(t,t):Ln,$=!Ie(V)&&Ie(V.set)?V.set.bind(t):Ln,le=dw({get:B,set:$});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>le.value,set:re=>le.value=re})}if(a)for(const G in a)rm(a[G],n,t,G);if(l){const G=Ie(l)?l.call(t):l;Reflect.ownKeys(G).forEach(V=>{gM(V,G[V])})}u&&Lh(u,r,"c");function U(G,V){Le(V)?V.forEach(B=>G(B.bind(t))):V&&G(V.bind(t))}if(U(SM,f),U(em,h),U(TM,m),U(EM,g),U(bM,d),U(MM,p),U(LM,x),U(PM,A),U(AM,P),U(tm,v),U(nm,y),U(CM,T),Le(R))if(R.length){const G=r.exposed||(r.exposed={});R.forEach(V=>{Object.defineProperty(G,V,{get:()=>t[V],set:B=>t[V]=B})})}else r.exposed||(r.exposed={});b&&r.render===Ln&&(r.render=b),I!=null&&(r.inheritAttrs=I),ne&&(r.components=ne),Q&&(r.directives=Q)}function OM(r,e,t=Ln,n=!1){Le(r)&&(r=Dc(r));for(const i in r){const s=r[i];let o;Ft(s)?"default"in s?o=ql(s.from||i,s.default,!0):o=ql(s.from||i):o=ql(s),Lt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Lh(r,e,t){gn(Le(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function rm(r,e,t,n){const i=n.includes(".")?Zp(t,n):()=>t[n];if(Ct(r)){const s=e[r];Ie(s)&&Xl(i,s)}else if(Ie(r))Xl(i,r.bind(t));else if(Ft(r))if(Le(r))r.forEach(s=>rm(s,e,t,n));else{const s=Ie(r.handler)?r.handler.bind(t):e[r.handler];Ie(s)&&Xl(i,s,r)}}function sm(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>ua(l,c,o,!0)),ua(l,e,o)),s.set(e,l),l}function ua(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&ua(r,s,t,!0),i&&i.forEach(o=>ua(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=NM[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const NM={data:Dh,props:tr,emits:tr,methods:tr,computed:tr,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:tr,directives:tr,watch:UM,provide:Dh,inject:zM};function Dh(r,e){return e?r?function(){return Et(Ie(r)?r.call(this,this):r,Ie(e)?e.call(this,this):e)}:e:r}function zM(r,e){return tr(Dc(r),Dc(e))}function Dc(r){if(Le(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Pt(r,e){return r?[...new Set([].concat(r,e))]:e}function tr(r,e){return r?Et(Et(Object.create(null),r),e):e}function UM(r,e){if(!r)return e;if(!e)return r;const t=Et(Object.create(null),r);for(const n in e)t[n]=Pt(r[n],e[n]);return t}function BM(r,e,t,n=!1){const i={},s={};oa(s,ja,1),r.propsDefaults=Object.create(null),om(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:Y1(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function kM(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=je(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wa(r.emitsOptions,h))continue;const m=e[h];if(l)if(ze(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Hn(h);i[g]=Rc(l,a,g,m,r,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{om(r,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!ze(e,f)&&((u=_s(f))===f||!ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(i[f]=Rc(l,a,f,void 0,r,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ze(e,f)&&!0)&&(delete s[f],c=!0)}c&&li(r,"set","$attrs")}function om(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(qo(l))continue;const c=e[l];let u;i&&ze(i,u=Hn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Wa(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=je(t),c=a||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Rc(i,l,f,c[f],r,!ze(c,f))}}return o}function Rc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=ze(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ie(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(hs(i),n=c[t]=l.call(null,e),mr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===_s(t))&&(n=!0))}return n}function am(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Ie(r)){const u=f=>{l=!0;const[h,m]=am(f,e,!0);Et(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return n.set(r,Kr),Kr;if(Le(s))for(let u=0;u<s.length;u++){const f=Hn(s[u]);Rh(f)&&(o[f]=Ze)}else if(s)for(const u in s){const f=Hn(u);if(Rh(f)){const h=s[u],m=o[f]=Le(h)||Ie(h)?{type:h}:h;if(m){const g=Oh(Boolean,m.type),d=Oh(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||ze(m,"default"))&&a.push(f)}}}const c=[o,a];return n.set(r,c),c}function Rh(r){return r[0]!=="$"}function Ih(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function Fh(r,e){return Ih(r)===Ih(e)}function Oh(r,e){return Le(e)?e.findIndex(t=>Fh(t,r)):Ie(e)&&Fh(e,r)?0:-1}const lm=r=>r[0]==="_"||r==="$stable",Tu=r=>Le(r)?r.map(Un):[Un(r)],GM=(r,e,t)=>{if(e._n)return e;const n=cM((...i)=>Tu(e(...i)),t);return n._c=!1,n},cm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(lm(i))continue;const s=r[i];if(Ie(s))e[i]=GM(i,s,n);else if(s!=null){const o=Tu(s);e[i]=()=>o}}},um=(r,e)=>{const t=Tu(e);r.slots.default=()=>t},VM=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=je(e),oa(e,"_",t)):cm(e,r.slots={})}else r.slots={},e&&um(r,e);oa(r.slots,ja,1)},HM=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=Ze;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Et(i,e),!t&&a===1&&delete i._):(s=!e.$stable,cm(e,i)),o=e}else e&&(um(r,e),o={default:1});if(s)for(const a in i)!lm(a)&&!(a in o)&&delete i[a]};function fm(){return{app:null,config:{isNativeTag:f1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WM=0;function qM(r,e){return function(n,i=null){Ie(n)||(n=Object.assign({},n)),i!=null&&!Ft(i)&&(i=null);const s=fm(),o=new Set;let a=!1;const l=s.app={_uid:WM++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:pw,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ie(c.install)?(o.add(c),c.install(l,...u)):Ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=wt(n,i);return h.appContext=s,u&&e?e(h,c):r(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Au(h.component)||h.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ic(r,e,t,n,i=!1){if(Le(r)){r.forEach((h,m)=>Ic(h,e&&(Le(e)?e[m]:e),t,n,i));return}if(Xo(n)&&!i)return;const s=n.shapeFlag&4?Au(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,ze(f,c)&&(f[c]=null)):Lt(c)&&(c.value=null)),Ie(l))Ri(l,a,12,[o,u]);else{const h=Ct(l),m=Lt(l);if(h||m){const g=()=>{if(r.f){const d=h?u[l]:l.value;i?Le(d)&&hu(d,s):Le(d)?d.includes(s)||d.push(s):h?(u[l]=[s],ze(f,l)&&(f[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=o,ze(f,l)&&(f[l]=o)):m&&(l.value=o,r.k&&(u[r.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=mM;function XM(r){return jM(r)}function jM(r,e){const t=b1();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ln,cloneNode:g,insertStaticContent:d}=r,p=(C,L,q,K=null,J=null,se=null,ae=!1,ce=null,ue=!!L.dynamicChildren)=>{if(C===L)return;C&&!ir(C,L)&&(K=we(C),oe(C,J,se,!0),C=null),L.patchFlag===-2&&(ue=!1,L.dynamicChildren=null);const{type:w,ref:M,shapeFlag:F}=L;switch(w){case Eu:_(C,L,q,K);break;case ri:v(C,L,q,K);break;case jo:C==null&&S(L,q,K,ae);break;case zn:Q(C,L,q,K,J,se,ae,ce,ue);break;default:F&1?A(C,L,q,K,J,se,ae,ce,ue):F&6?N(C,L,q,K,J,se,ae,ce,ue):(F&64||F&128)&&w.process(C,L,q,K,J,se,ae,ce,ue,xe)}M!=null&&J&&Ic(M,C&&C.ref,se,L||C,!L)},_=(C,L,q,K)=>{if(C==null)n(L.el=a(L.children),q,K);else{const J=L.el=C.el;L.children!==C.children&&c(J,L.children)}},v=(C,L,q,K)=>{C==null?n(L.el=l(L.children||""),q,K):L.el=C.el},S=(C,L,q,K)=>{[C.el,C.anchor]=d(C.children,L,q,K,C.el,C.anchor)},y=({el:C,anchor:L},q,K)=>{let J;for(;C&&C!==L;)J=h(C),n(C,q,K),C=J;n(L,q,K)},b=({el:C,anchor:L})=>{let q;for(;C&&C!==L;)q=h(C),i(C),C=q;i(L)},A=(C,L,q,K,J,se,ae,ce,ue)=>{ae=ae||L.type==="svg",C==null?P(L,q,K,J,se,ae,ce,ue):R(C,L,J,se,ae,ce,ue)},P=(C,L,q,K,J,se,ae,ce)=>{let ue,w;const{type:M,props:F,shapeFlag:H,transition:Y,patchFlag:ie,dirs:me}=C;if(C.el&&g!==void 0&&ie===-1)ue=C.el=g(C.el);else{if(ue=C.el=o(C.type,se,F&&F.is,F),H&8?u(ue,C.children):H&16&&T(C.children,ue,null,K,J,se&&M!=="foreignObject",ae,ce),me&&Zi(C,null,K,"created"),F){for(const fe in F)fe!=="value"&&!qo(fe)&&s(ue,fe,null,F[fe],se,C.children,K,J,De);"value"in F&&s(ue,"value",null,F.value),(w=F.onVnodeBeforeMount)&&Fn(w,K,C)}x(ue,C,C.scopeId,ae,K)}me&&Zi(C,null,K,"beforeMount");const z=(!J||J&&!J.pendingBranch)&&Y&&!Y.persisted;z&&Y.beforeEnter(ue),n(ue,L,q),((w=F&&F.onVnodeMounted)||z||me)&&Ot(()=>{w&&Fn(w,K,C),z&&Y.enter(ue),me&&Zi(C,null,K,"mounted")},J)},x=(C,L,q,K,J)=>{if(q&&m(C,q),K)for(let se=0;se<K.length;se++)m(C,K[se]);if(J){let se=J.subTree;if(L===se){const ae=J.vnode;x(C,ae,ae.scopeId,ae.slotScopeIds,J.parent)}}},T=(C,L,q,K,J,se,ae,ce,ue=0)=>{for(let w=ue;w<C.length;w++){const M=C[w]=ce?Si(C[w]):Un(C[w]);p(null,M,L,q,K,J,se,ae,ce)}},R=(C,L,q,K,J,se,ae)=>{const ce=L.el=C.el;let{patchFlag:ue,dynamicChildren:w,dirs:M}=L;ue|=C.patchFlag&16;const F=C.props||Ze,H=L.props||Ze;let Y;q&&Ki(q,!1),(Y=H.onVnodeBeforeUpdate)&&Fn(Y,q,L,C),M&&Zi(L,C,q,"beforeUpdate"),q&&Ki(q,!0);const ie=J&&L.type!=="foreignObject";if(w?I(C.dynamicChildren,w,ce,q,K,ie,se):ae||B(C,L,ce,null,q,K,ie,se,!1),ue>0){if(ue&16)ne(ce,L,F,H,q,K,J);else if(ue&2&&F.class!==H.class&&s(ce,"class",null,H.class,J),ue&4&&s(ce,"style",F.style,H.style,J),ue&8){const me=L.dynamicProps;for(let z=0;z<me.length;z++){const fe=me[z],de=F[fe],be=H[fe];(be!==de||fe==="value")&&s(ce,fe,de,be,J,C.children,q,K,De)}}ue&1&&C.children!==L.children&&u(ce,L.children)}else!ae&&w==null&&ne(ce,L,F,H,q,K,J);((Y=H.onVnodeUpdated)||M)&&Ot(()=>{Y&&Fn(Y,q,L,C),M&&Zi(L,C,q,"updated")},K)},I=(C,L,q,K,J,se,ae)=>{for(let ce=0;ce<L.length;ce++){const ue=C[ce],w=L[ce],M=ue.el&&(ue.type===zn||!ir(ue,w)||ue.shapeFlag&70)?f(ue.el):q;p(ue,w,M,null,K,J,se,ae,!0)}},ne=(C,L,q,K,J,se,ae)=>{if(q!==K){for(const ce in K){if(qo(ce))continue;const ue=K[ce],w=q[ce];ue!==w&&ce!=="value"&&s(C,ce,w,ue,ae,L.children,J,se,De)}if(q!==Ze)for(const ce in q)!qo(ce)&&!(ce in K)&&s(C,ce,q[ce],null,ae,L.children,J,se,De);"value"in K&&s(C,"value",q.value,K.value)}},Q=(C,L,q,K,J,se,ae,ce,ue)=>{const w=L.el=C?C.el:a(""),M=L.anchor=C?C.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:Y}=L;Y&&(ce=ce?ce.concat(Y):Y),C==null?(n(w,q,K),n(M,q,K),T(L.children,q,M,J,se,ae,ce,ue)):F>0&&F&64&&H&&C.dynamicChildren?(I(C.dynamicChildren,H,q,J,se,ae,ce),(L.key!=null||J&&L===J.subTree)&&hm(C,L,!0)):B(C,L,q,M,J,se,ae,ce,ue)},N=(C,L,q,K,J,se,ae,ce,ue)=>{L.slotScopeIds=ce,C==null?L.shapeFlag&512?J.ctx.activate(L,q,K,ae,ue):X(L,q,K,J,se,ae,ue):U(C,L,ue)},X=(C,L,q,K,J,se,ae)=>{const ce=C.component=sw(C,K,J);if(qa(C)&&(ce.ctx.renderer=xe),aw(ce),ce.asyncDep){if(J&&J.registerDep(ce,G),!C.el){const ue=ce.subTree=wt(ri);v(null,ue,L,q)}return}G(ce,C,L,q,J,se,ae)},U=(C,L,q)=>{const K=L.component=C.component;if(hM(C,L,q))if(K.asyncDep&&!K.asyncResolved){V(K,L,q);return}else K.next=L,sM(K.update),K.update();else L.el=C.el,K.vnode=L},G=(C,L,q,K,J,se,ae)=>{const ce=()=>{if(C.isMounted){let{next:M,bu:F,u:H,parent:Y,vnode:ie}=C,me=M,z;Ki(C,!1),M?(M.el=ie.el,V(C,M,ae)):M=ie,F&&Hl(F),(z=M.props&&M.props.onVnodeBeforeUpdate)&&Fn(z,Y,M,ie),Ki(C,!0);const fe=Wl(C),de=C.subTree;C.subTree=fe,p(de,fe,f(de.el),we(de),C,J,se),M.el=fe.el,me===null&&dM(C,fe.el),H&&Ot(H,J),(z=M.props&&M.props.onVnodeUpdated)&&Ot(()=>Fn(z,Y,M,ie),J)}else{let M;const{el:F,props:H}=L,{bm:Y,m:ie,parent:me}=C,z=Xo(L);if(Ki(C,!1),Y&&Hl(Y),!z&&(M=H&&H.onVnodeBeforeMount)&&Fn(M,me,L),Ki(C,!0),F&&Ce){const fe=()=>{C.subTree=Wl(C),Ce(F,C.subTree,C,J,null)};z?L.type.__asyncLoader().then(()=>!C.isUnmounted&&fe()):fe()}else{const fe=C.subTree=Wl(C);p(null,fe,q,K,C,J,se),L.el=fe.el}if(ie&&Ot(ie,J),!z&&(M=H&&H.onVnodeMounted)){const fe=L;Ot(()=>Fn(M,me,fe),J)}(L.shapeFlag&256||me&&Xo(me.vnode)&&me.vnode.shapeFlag&256)&&C.a&&Ot(C.a,J),C.isMounted=!0,L=q=K=null}},ue=C.effect=new gu(ce,()=>Vp(w),C.scope),w=C.update=()=>ue.run();w.id=C.uid,Ki(C,!0),w()},V=(C,L,q)=>{L.component=C;const K=C.vnode.props;C.vnode=L,C.next=null,kM(C,L.props,K,q),HM(C,L.children,q),xs(),Ha(void 0,C.update),vs()},B=(C,L,q,K,J,se,ae,ce,ue=!1)=>{const w=C&&C.children,M=C?C.shapeFlag:0,F=L.children,{patchFlag:H,shapeFlag:Y}=L;if(H>0){if(H&128){le(w,F,q,K,J,se,ae,ce,ue);return}else if(H&256){$(w,F,q,K,J,se,ae,ce,ue);return}}Y&8?(M&16&&De(w,J,se),F!==w&&u(q,F)):M&16?Y&16?le(w,F,q,K,J,se,ae,ce,ue):De(w,J,se,!0):(M&8&&u(q,""),Y&16&&T(F,q,K,J,se,ae,ce,ue))},$=(C,L,q,K,J,se,ae,ce,ue)=>{C=C||Kr,L=L||Kr;const w=C.length,M=L.length,F=Math.min(w,M);let H;for(H=0;H<F;H++){const Y=L[H]=ue?Si(L[H]):Un(L[H]);p(C[H],Y,q,null,J,se,ae,ce,ue)}w>M?De(C,J,se,!0,!1,F):T(L,q,K,J,se,ae,ce,ue,F)},le=(C,L,q,K,J,se,ae,ce,ue)=>{let w=0;const M=L.length;let F=C.length-1,H=M-1;for(;w<=F&&w<=H;){const Y=C[w],ie=L[w]=ue?Si(L[w]):Un(L[w]);if(ir(Y,ie))p(Y,ie,q,null,J,se,ae,ce,ue);else break;w++}for(;w<=F&&w<=H;){const Y=C[F],ie=L[H]=ue?Si(L[H]):Un(L[H]);if(ir(Y,ie))p(Y,ie,q,null,J,se,ae,ce,ue);else break;F--,H--}if(w>F){if(w<=H){const Y=H+1,ie=Y<M?L[Y].el:K;for(;w<=H;)p(null,L[w]=ue?Si(L[w]):Un(L[w]),q,ie,J,se,ae,ce,ue),w++}}else if(w>H)for(;w<=F;)oe(C[w],J,se,!0),w++;else{const Y=w,ie=w,me=new Map;for(w=ie;w<=H;w++){const Oe=L[w]=ue?Si(L[w]):Un(L[w]);Oe.key!=null&&me.set(Oe.key,w)}let z,fe=0;const de=H-ie+1;let be=!1,ye=0;const Te=new Array(de);for(w=0;w<de;w++)Te[w]=0;for(w=Y;w<=F;w++){const Oe=C[w];if(fe>=de){oe(Oe,J,se,!0);continue}let D;if(Oe.key!=null)D=me.get(Oe.key);else for(z=ie;z<=H;z++)if(Te[z-ie]===0&&ir(Oe,L[z])){D=z;break}D===void 0?oe(Oe,J,se,!0):(Te[D-ie]=w+1,D>=ye?ye=D:be=!0,p(Oe,L[D],q,null,J,se,ae,ce,ue),fe++)}const Be=be?$M(Te):Kr;for(z=Be.length-1,w=de-1;w>=0;w--){const Oe=ie+w,D=L[Oe],ge=Oe+1<M?L[Oe+1].el:K;Te[w]===0?p(null,D,q,ge,J,se,ae,ce,ue):be&&(z<0||w!==Be[z]?re(D,q,ge,2):z--)}}},re=(C,L,q,K,J=null)=>{const{el:se,type:ae,transition:ce,children:ue,shapeFlag:w}=C;if(w&6){re(C.component.subTree,L,q,K);return}if(w&128){C.suspense.move(L,q,K);return}if(w&64){ae.move(C,L,q,xe);return}if(ae===zn){n(se,L,q);for(let F=0;F<ue.length;F++)re(ue[F],L,q,K);n(C.anchor,L,q);return}if(ae===jo){y(C,L,q);return}if(K!==2&&w&1&&ce)if(K===0)ce.beforeEnter(se),n(se,L,q),Ot(()=>ce.enter(se),J);else{const{leave:F,delayLeave:H,afterLeave:Y}=ce,ie=()=>n(se,L,q),me=()=>{F(se,()=>{ie(),Y&&Y()})};H?H(se,ie,me):me()}else n(se,L,q)},oe=(C,L,q,K=!1,J=!1)=>{const{type:se,props:ae,ref:ce,children:ue,dynamicChildren:w,shapeFlag:M,patchFlag:F,dirs:H}=C;if(ce!=null&&Ic(ce,null,q,C,!0),M&256){L.ctx.deactivate(C);return}const Y=M&1&&H,ie=!Xo(C);let me;if(ie&&(me=ae&&ae.onVnodeBeforeUnmount)&&Fn(me,L,C),M&6)ee(C.component,q,K);else{if(M&128){C.suspense.unmount(q,K);return}Y&&Zi(C,null,L,"beforeUnmount"),M&64?C.type.remove(C,L,q,J,xe,K):w&&(se!==zn||F>0&&F&64)?De(w,L,q,!1,!0):(se===zn&&F&384||!J&&M&16)&&De(ue,L,q),K&&pe(C)}(ie&&(me=ae&&ae.onVnodeUnmounted)||Y)&&Ot(()=>{me&&Fn(me,L,C),Y&&Zi(C,null,L,"unmounted")},q)},pe=C=>{const{type:L,el:q,anchor:K,transition:J}=C;if(L===zn){Me(q,K);return}if(L===jo){b(C);return}const se=()=>{i(q),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:ae,delayLeave:ce}=J,ue=()=>ae(q,se);ce?ce(C.el,se,ue):ue()}else se()},Me=(C,L)=>{let q;for(;C!==L;)q=h(C),i(C),C=q;i(L)},ee=(C,L,q)=>{const{bum:K,scope:J,update:se,subTree:ae,um:ce}=C;K&&Hl(K),J.stop(),se&&(se.active=!1,oe(ae,C,L,q)),ce&&Ot(ce,L),Ot(()=>{C.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},De=(C,L,q,K=!1,J=!1,se=0)=>{for(let ae=se;ae<C.length;ae++)oe(C[ae],L,q,K,J)},we=C=>C.shapeFlag&6?we(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),Se=(C,L,q)=>{C==null?L._vnode&&oe(L._vnode,null,null,!0):p(L._vnode||null,C,L,null,null,null,q),qp(),L._vnode=C},xe={p,um:oe,m:re,r:pe,mt:X,mc:T,pc:B,pbc:I,n:we,o:r};let He,Ce;return e&&([He,Ce]=e(xe)),{render:Se,hydrate:He,createApp:qM(Se,He)}}function Ki({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function hm(r,e,t=!1){const n=r.children,i=e.children;if(Le(n)&&Le(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Si(i[s]),a.el=o.el),t||hm(o,a))}}function $M(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const YM=r=>r.__isTeleport,zn=Symbol(void 0),Eu=Symbol(void 0),ri=Symbol(void 0),jo=Symbol(void 0),ks=[];let En=null;function pn(r=!1){ks.push(En=r?null:[])}function ZM(){ks.pop(),En=ks[ks.length-1]||null}let eo=1;function Nh(r){eo+=r}function KM(r){return r.dynamicChildren=eo>0?En||Kr:null,ZM(),eo>0&&En&&En.push(r),r}function mn(r,e,t,n,i,s){return KM(ut(r,e,t,n,i,s,!0))}function JM(r){return r?r.__v_isVNode===!0:!1}function ir(r,e){return r.type===e.type&&r.key===e.key}const ja="__vInternal",dm=({key:r})=>r!=null?r:null,$o=({ref:r,ref_key:e,ref_for:t})=>r!=null?Ct(r)||Lt(r)||Ie(r)?{i:Tn,r,k:e,f:!!t}:r:null;function ut(r,e=null,t=null,n=0,i=null,s=r===zn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&dm(e),ref:e&&$o(e),scopeId:$p,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Cu(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),eo>0&&!o&&En&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&En.push(l),l}const wt=QM;function QM(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===DM)&&(r=ri),JM(r)){const a=Ui(r,e,!0);return t&&Cu(a,t),eo>0&&!s&&En&&(a.shapeFlag&6?En[En.indexOf(r)]=a:En.push(a)),a.patchFlag|=-2,a}if(hw(r)&&(r=r.__vccOpts),e){e=ew(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=uu(a)),Ft(l)&&(Up(l)&&!Le(l)&&(l=Et({},l)),e.style=cu(l))}const o=Ct(r)?1:pM(r)?128:YM(r)?64:Ft(r)?4:Ie(r)?2:0;return ut(r,e,t,n,i,o,s,!0)}function ew(r){return r?Up(r)||ja in r?Et({},r):r:null}function Ui(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?nw(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&dm(a),ref:e&&e.ref?t&&i?Le(i)?i.concat($o(e)):[i,$o(e)]:$o(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==zn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ui(r.ssContent),ssFallback:r.ssFallback&&Ui(r.ssFallback),el:r.el,anchor:r.anchor}}function tw(r=" ",e=0){return wt(Eu,null,r,e)}function ui(r,e){const t=wt(jo,null,r);return t.staticCount=e,t}function Un(r){return r==null||typeof r=="boolean"?wt(ri):Le(r)?wt(zn,null,r.slice()):typeof r=="object"?Si(r):wt(Eu,null,String(r))}function Si(r){return r.el===null||r.memo?r:Ui(r)}function Cu(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Cu(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(ja in e)?e._ctx=Tn:i===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Tn},t=32):(e=String(e),n&64?(t=16,e=[tw(e)]):t=8);r.children=e,r.shapeFlag|=t}function nw(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=uu([e.class,n.class]));else if(i==="style")e.style=cu([e.style,n.style]);else if(za(i)){const s=e[i],o=n[i];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Fn(r,e,t,n=null){gn(r,e,7,[t,n])}const iw=fm();let rw=0;function sw(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||iw,s={uid:rw++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new M1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(n,i),emitsOptions:jp(n,i),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:n.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lM.bind(null,s),r.ce&&r.ce(s),s}let _t=null;const ow=()=>_t||Tn,hs=r=>{_t=r,r.scope.on()},mr=()=>{_t&&_t.scope.off(),_t=null};function pm(r){return r.vnode.shapeFlag&4}let to=!1;function aw(r,e=!1){to=e;const{props:t,children:n}=r.vnode,i=pm(r);BM(r,t,i,e),VM(r,n);const s=i?lw(r,e):void 0;return to=!1,s}function lw(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=Bp(new Proxy(r.ctx,IM));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?uw(r):null;hs(r),xs();const s=Ri(n,r,0,[r.props,i]);if(vs(),mr(),Ep(s)){if(s.then(mr,mr),e)return s.then(o=>{zh(r,o,e)}).catch(o=>{Va(o,r,0)});r.asyncDep=s}else zh(r,s,e)}else mm(r,e)}function zh(r,e,t){Ie(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Ft(e)&&(r.setupState=kp(e)),mm(r,t)}let Uh;function mm(r,e,t){const n=r.type;if(!r.render){if(!e&&Uh&&!n.render){const i=n.template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Et(Et({isCustomElement:s,delimiters:a},o),l);n.render=Uh(i,c)}}r.render=n.render||Ln}hs(r),xs(),FM(r),vs(),mr()}function cw(r){return new Proxy(r.attrs,{get(e,t){return en(r,"get","$attrs"),e[t]}})}function uw(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=cw(r))},slots:r.slots,emit:r.emit,expose:e}}function Au(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(kp(Bp(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in ca)return ca[t](r)}}))}function fw(r,e=!0){return Ie(r)?r.displayName||r.name:r.name||e&&r.__name}function hw(r){return Ie(r)&&"__vccOpts"in r}const dw=(r,e)=>tM(r,e,to),pw="3.2.37",mw="http://www.w3.org/2000/svg",rr=typeof document<"u"?document:null,Bh=rr&&rr.createElement("template"),gw={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?rr.createElementNS(mw,r):rr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>rr.createTextNode(r),createComment:r=>rr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>rr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},cloneNode(r){const e=r.cloneNode(!0);return"_value"in r&&(e._value=r._value),e},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Bh.innerHTML=n?`<svg>${r}</svg>`:r;const a=Bh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function _w(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function xw(r,e,t){const n=r.style,i=Ct(t);if(t&&!i){for(const s in t)Fc(n,s,t[s]);if(e&&!Ct(e))for(const s in e)t[s]==null&&Fc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const kh=/\s*!important$/;function Fc(r,e,t){if(Le(t))t.forEach(n=>Fc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=vw(r,e);kh.test(t)?r.setProperty(_s(n),t.replace(kh,""),"important"):r[n]=t}}const Gh=["Webkit","Moz","ms"],$l={};function vw(r,e){const t=$l[e];if(t)return t;let n=Hn(e);if(n!=="filter"&&n in r)return $l[e]=n;n=ka(n);for(let i=0;i<Gh.length;i++){const s=Gh[i]+n;if(s in r)return $l[e]=s}return e}const Vh="http://www.w3.org/1999/xlink";function yw(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Vh,e.slice(6,e.length)):r.setAttributeNS(Vh,e,t);else{const s=a1(e);t==null||s&&!Tp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function bw(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t==null?"":t;(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Tp(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}const[gm,Mw]=(()=>{let r=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(r=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[r,e]})();let Oc=0;const ww=Promise.resolve(),Sw=()=>{Oc=0},Tw=()=>Oc||(ww.then(Sw),Oc=gm());function Ew(r,e,t,n){r.addEventListener(e,t,n)}function Cw(r,e,t,n){r.removeEventListener(e,t,n)}function Aw(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Pw(e);if(n){const c=s[e]=Lw(n,i);Ew(r,a,c,l)}else o&&(Cw(r,a,o,l),s[e]=void 0)}}const Hh=/(?:Once|Passive|Capture)$/;function Pw(r){let e;if(Hh.test(r)){e={};let t;for(;t=r.match(Hh);)r=r.slice(0,r.length-t[0].length),e[t[0].toLowerCase()]=!0}return[_s(r.slice(2)),e]}function Lw(r,e){const t=n=>{const i=n.timeStamp||gm();(Mw||i>=t.attached-1)&&gn(Dw(n,t.value),e,5,[n])};return t.value=r,t.attached=Tw(),t}function Dw(r,e){if(Le(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Wh=/^on[a-z]/,Rw=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?_w(r,n,i):e==="style"?xw(r,t,n):za(e)?fu(e)||Aw(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(r,e,n,i))?bw(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),yw(r,e,n,i))};function Iw(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Wh.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Wh.test(e)&&Ct(t)?!1:e in r}const Fw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yM.props;const Ow=Et({patchProp:Rw},gw);let qh;function Nw(){return qh||(qh=XM(Ow))}const zw=(...r)=>{const e=Nw().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Uw(n);if(!i)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Uw(r){return Ct(r)?document.querySelector(r):r}const fi=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Bw={},kw={class:"backdrop-blur-sm"},Gw=ui('<h4 class="text-center tablet:text-left text-2xl font-bold tablet:text-4xl font-bold mb-4"> Software Engineering Intern @ <strong class="text-2xl text-regal-blue tablet:text-regal-blue">Tesla</strong></h4><ul class="text-sm font-semibold tablet:text-xl font-semibold"><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Collaborated with software engineers to develop and test application procedures for system efficiency. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Wrote clean Schema\u2019s and used Flyway, an open source migration tool, to migrate versions into a database. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Designed sleek frontend UI/UX interface using Vue.js, Tailwind, Bootstrap, AG-Grid, ApexCharts, Three.js for a variety of projects. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Utilized state management with Vuex to create scalable organized code and centralized API/data-fetching logic. </li><li> - Built REST API\u2019s in .NET with C# for multiple CRUD applications. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Assisting the Texas Giga Factory BIM team who is responsible for managing the digital model and data representations of the factory and its productions assets used by engineering, construction, manufacturing, and operations teams. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Providing design and construction coordination services aimed at maximizing constructibility, safety, maintainability, and future factory expansion options. Implementing myriad of technology and processes used to maintain all factory models and their associated data in as close to real-time as possible. </li><li class="mb-5"><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Using LIDAR scanning and reality capture with Cintoo to map the factory and resolve clashes. </li><p style="color:white;"><strong class="text-sm text-regal-blue tablet:text-regal-blue">Tech Stack &amp; Tools:</strong> .NET 4.7.2, Vue.js, PostgreSQL, Tailwind CSS, Three.js, Bootstrap, Express.js </p><p class="float-right text-regal-blue my-6">Jan. 2022 - Sept. 2022</p></ul>',2),Vw=[Gw];function Hw(r,e){return pn(),mn("div",kw,Vw)}const Ww=fi(Bw,[["render",Hw]]),qw={},Xw=ut("h2",{class:"shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"}," Contact Me ",-1),jw={class:"flex mt-4 cursor-pointer"},$w={class:"mr-2 ml-8 tablet:mr-8",href:"mailto:rohan.singh.do@gmail.com"},Yw={viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},class:"animate-pulse w-8 tablet:w-16",fill:"#73D7FF"},Zw=ut("path",{stroke:"#73D7FF",fill:"#73D7FF",d:"M23.092,237.505h143.969c6.897,0,12.488,5.591,12.488,12.488v64.537c0,6.897,5.591,12.488,12.488,12.488h127.925     c6.897,0,12.488-5.591,12.488-12.488v-64.537c0-6.897,5.591-12.488,12.488-12.488h143.969c9.056,0,15.1-9.337,11.394-17.599     l-64.87-144.604c-3.02-6.732-9.711-11.064-17.09-11.064H93.659c-7.379,0-14.07,4.332-17.091,11.064L11.699,219.906     C7.992,228.168,14.036,237.505,23.092,237.505z"},null,-1),Kw=ut("path",{stroke:"#73D7FF",fill:"#73D7FF",d:"M499.512,262.481H369.914c-6.897,0-12.488,5.591-12.488,12.488v64.537c0,6.897-5.591,12.488-12.488,12.488H167.062     c-6.897,0-12.488-5.591-12.488-12.488v-64.537c0-6.897-5.591-12.488-12.488-12.488H12.488C5.591,262.481,0,268.071,0,274.968     V429.03c0,10.345,8.387,18.732,18.732,18.732h474.537c10.345,0,18.732-8.387,18.732-18.732V274.968     C512,268.071,506.409,262.481,499.512,262.481z"},null,-1),Jw=[Zw,Kw],Qw=ui('<a class="mr-2 tablet:mr-8" href="https://github.com/rohxnsxngh"><svg class="animate-pulse w-8 tablet:w-16" viewBox="0 0 48 48" fill="#73D7FF"><rect width="48" height="48" fill="#73D7FFe" fill-opacity="0.01"></rect><path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#73D7FF" stroke="#73D7FF"></path><path d="M19.183 45.4715C18.9896 45.2218 18.9896 42.9972 19.183 38.798C17.1112 38.8695 15.8022 38.7257 15.256 38.3666C14.4368 37.8279 13.6166 36.1666 12.8889 34.9958C12.1612 33.825 10.546 33.6399 9.8938 33.3782C9.24158 33.1164 9.07785 32.0495 11.691 32.8564C14.3042 33.6633 14.4316 35.8606 15.256 36.3744C16.0804 36.8882 18.0512 36.6634 18.9446 36.2518C19.8379 35.8402 19.7722 34.3077 19.9315 33.7006C20.1329 33.1339 19.423 33.0082 19.4074 33.0036C18.5353 33.0036 13.9537 32.0072 12.6952 27.5705C11.4368 23.1339 13.0579 20.234 13.9227 18.9874C14.4992 18.1563 14.4482 16.3851 13.7697 13.6736C16.2333 13.3588 18.1344 14.1342 19.4732 16C19.4745 16.0107 21.2283 14.9571 24 14.9571C26.7718 14.9571 27.7551 15.8153 28.514 16C29.2728 16.1847 29.8798 12.734 34.5666 13.6736C33.5881 15.5968 32.7686 18 33.3941 18.9874C34.0195 19.9748 36.4742 23.1146 34.9664 27.5705C33.9611 30.5412 31.9851 32.3522 29.0382 33.0036C28.7002 33.1114 28.5313 33.2854 28.5313 33.5254C28.5313 33.8855 28.9881 33.9248 29.6463 35.6116C30.085 36.7361 30.1167 39.9479 29.7413 45.2469C28.7904 45.489 28.0506 45.6515 27.5219 45.7346C26.5845 45.8819 25.5667 45.9645 24.5666 45.9964C23.5666 46.0283 23.2193 46.0247 21.8368 45.896C20.9151 45.8102 20.0305 45.6687 19.183 45.4715Z" stroke="#73D7FF" fill="#73D7FF"></path></svg></a>',1),eS={class:"mr-2 tablet:mr-8",href:"https://www.linkedin.com/in/rohan-singh1122/"},tS={class:"animate-pulse w-8 tablet:w-16",viewBox:"0 0 310 310",style:{"enable-background":"new 0 0 310 310"},"xml:space":"preserve"},nS=ut("path",{stroke:"#73D7FF",fill:"#73D7FF",d:"M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"},null,-1),iS=ut("path",{stroke:"#73D7FF",fill:"#73D7FF",d:"M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"},null,-1),rS=ut("path",{stroke:"#73D7FF",fill:"#73D7FF",d:"M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"},null,-1),sS=[nS,iS,rS],oS={class:"mr-2 tablet:mr-8",href:"https://www.instagram.com/rohxnsxngh/"},aS={class:"animate-pulse w-8 tablet:w-16",x:"0px",y:"0px",viewBox:"0 0 239.04 239.04",style:{"enable-background":"new 0 0 239.04 239.04"},"xml:space":"preserve"},lS=ui('<path stroke="#73D7FF" fill="#73D7FF" d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872   c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118   c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251   c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"></path><path d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438   c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957   c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"></path><path stroke="#73D7FF" fill="#73D7FF" d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654   c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"></path><path stroke="#73D7FF" fill="#73D7FF" d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185   c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"></path><path d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814   C93.282,101.457,89.661,116.261,93.282,126.483z"></path>',5),cS=[lS];function uS(r,e){return pn(),mn("div",null,[Xw,ut("div",jw,[ut("a",$w,[(pn(),mn("svg",Yw,Jw))]),Qw,ut("a",eS,[(pn(),mn("svg",tS,sS))]),ut("a",oS,[(pn(),mn("svg",aS,cS))])])])}const fS=fi(qw,[["render",uS]]),hS={},dS={class:"backdrop-blur-sm"},pS=ui('<h2 class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> Notable Skills </h2><h6 class="text-2xl tablet:text-4xl text-regal-blue font-bold mb-4"> Languages </h6><p class="text-sm tablet:text-xl font-semibold mb-10"> Python, Javscript, Typescript, Java, C#, MATLAB, R, SQL, Rust </p><h6 class="text-2xl tablet:text-4xl text-regal-blue font-bold mb-4"> Technologies </h6><p class="text-sm tablet:text-xl font-semibold mb-10"> NodeJS, PostgreSQL, MySQL, MongoDB, ReactJS, VueJS, Git, ThreeJS, ExpressJS, .NET </p><h6 class="text-2xl tablet:text-4xl text-regal-blue font-bold mb-4"> Mechanical Engineering </h6><p class="text-sm tablet:text-xl font-semibold mb-10"> SolidWorks, Autodesk Inventor, Autodesk Fusion 360, Machine Shop, Laser Cutting, 3D Printing, Welding </p>',7),mS=[pS];function gS(r,e){return pn(),mn("div",dS,mS)}const _S=fi(hS,[["render",gS]]),xS={},vS=ui(`<div class="tablet: backdrop-blur-sm mt-72"><h1 class="text-6xl shadow-sky-800 shadow-sm text-center font-bold tablet:text-8xl text-regal-blue mb-5"> Rohan Singh </h1></div><svg class="blur-none w-24 mx-auto my-32 animate-bounce" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560"><g id="Rounded_Rectangle_33_copy_4_1_"><path stroke="#73D7FF" fill="#73D7FF" d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937\r
		c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937\r
		c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"></path></g></svg>`,2),yS=[vS];function bS(r,e){return pn(),mn("div",null,yS)}const MS=fi(xS,[["render",bS]]);const wS={},SS=ui('<a href="#home" data-v-f64a6ec7>Home</a><a href="#about" data-v-f64a6ec7>About</a><a href="#turtle" data-v-f64a6ec7>Projects</a><a href="#river" data-v-f64a6ec7>Experience</a><a href="#contact" data-v-f64a6ec7>Contact</a><div class="animation start-home" data-v-f64a6ec7></div>',6),TS=[SS];function ES(r,e){return pn(),mn("nav",null,TS)}const CS=fi(wS,[["render",ES],["__scopeId","data-v-f64a6ec7"]]),AS="/rohan-portfolio/assets/turtle-robotics-home.b5de62b2.gif",PS="/rohan-portfolio/assets/three-portfolio.92fc4999.gif",LS={},DS={class:"backdrop-blur-sm"},RS=ui('<h2 class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> Projects </h2><div id="turtle" class="relative w-full my-20"><div><div class="my-6"><h1 class="font-bold shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"> Texas A&amp;M Robotics and Leadership Experience Homepage: </h1><p class="text-sm font-semibold tablet:text-xl font-semibold"> Texas A&amp;M Robotics and Leadership Experience (TURTLE) homepage which was built with VueJS, Tailwind, and utlized the Texas A&amp;M REST API. This webpage is used by the Texas A&amp;M Robotics team to display projects, contacts, announcements, and recruit new members to the organization. It is currently being hosted internally by Texas A&amp;M under their clubs &amp; organization subsection. </p></div><img class="w-84" src="'+AS+'"></div></div><div id="three-portfolio" class="relative w-full my-20"><div><div class="my-6"><h1 class="font-bold shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"> Experimental Portfolio Built with ThreeJS, Vue, Vite, and AmmoJS </h1><p class="text-sm font-semibold tablet:text-xl font-semibold"> Personal webpage built in ThreeJS, VueJS, Vite, and AmmoJS. The idea was to use WebGL and create an infinite plane with waternormals being reflected throughout. Next, utilize first person controls and AmmoJS which is a physics engine to allow the user to interact and explore its environment. Using lighting and fog effects, among other easter eggs, the webpage should slowly lead the user letting them discover each part of the portfolio. This short clip doesn&#39;t do it justice so go to my github and check it out! This project is still in development. </p></div><img class="w-84" src="'+PS+'"></div></div><div id="strandbeest" class="relative w-full my-20"><div><div class="my-6"><h1 class="font-build shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"> \u{1F6A7} Mechanical Strandbeest Kinematics Experiment Coming Soon \u{1F6A7}: </h1><p class="text-sm font-semibold tablet:text-md font-semibold"></p></div></div></div>',4),IS=[RS];function FS(r,e){return pn(),mn("div",DS,IS)}const OS=fi(LS,[["render",FS]]),NS={},zS={class:"backdrop-blur-sm"},US=ui('<h2 class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> Experience </h2><h4 class="text-center tablet:text-left text-2xl font-bold tablet:text-4xl font-bold mb-4"> Software Engineering Intern @ <strong class="text-2xl text-regal-blue tablet:text-regal-blue">RiverProject</strong></h4><ul class="text-sm font-semibold tablet:text-xl font-semibold"><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Provided software and hardware troubleshooting to maintain performance levels. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Collaborated with software engineers to develop and test REST API in Rust and create data models and migrations for a centralized database. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Wrote clear, clean code in Vue.js and Tailwind to help develop RiverProject.io company homepage. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Collaborated effectively with members of software development team and personnel in other departments. </li><li><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Built Mock REST API\u2019s in Express.js for human resourcing and designed employee management homepage in Vue.js with typescript and Frontend authentification integration </li><li class="mb-5"><strong class="text-sm text-regal-blue tablet:text-regal-blue text-2xl">- </strong>Implemented of our logging, metrics, alerting, and load testing with Grafana loki, mimir and k6 solutions for development of discord bot </li><p><strong class="text-sm text-regal-blue tablet:text-regal-blue">Tech Stack &amp; Tools:</strong> Rust, Vue.js, Typescript, PostgreSQL, Tailwind CSS, Grafani loki, Mimir </p><p class="float-right text-regal-blue my-6">Sept. 2022 - Present</p></ul>',3),BS=[US];function kS(r,e){return pn(),mn("div",zS,BS)}const GS=fi(NS,[["render",kS]]),VS={},HS={class:"backdrop-blur-sm"},WS=ui('<h1 class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> Welcome </h1><p class="text-sm font-semibold tablet:text-xl"> I\u2019m a mechanical engineer with a knack for software development! I\u2019ll graduate from Texas A&amp;M in 2023 with my B.S. in Mechanical Engineering and a minor in Computer Science. Thank you for visiting my portfolio! I really hope you enjoy it as much as I enjoyed building it. If you have any questions or comments, feel free to contact me! </p><h1 class="text-center tablet:text-left my-10 shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> About Me </h1><p class="text-sm font-semibold tablet:text-xl"> I was born in India on April 8, 2001. Little did I know that I wouldn\u2019t stay in one place for more than 2 years throughout my life until I turned 15. I moved from India to Africa to Prague to the United States. When we finally touched down in the States we continued moving for my dad\u2019s job from Texas to California to Oregon to New Jersey and so on. When I turned 15, we finally settled down in Frisco, TX. I consider myself lucky to have walked through so many different perspectives and I want to continue to explore everything this life has to offer! From a young age, I\u2019ve always wanted to create and build. Whether it was Legos, or Minecraft, or drawing. When I was in middle school, I joined a Lego robotics team which sparked my interest in robotics and mechatronics. This is also where I threw on my training wheels and started to ride into the programming world. In 2019, I got accepted into Texas A&amp;M to study Mechanical Engineering and Computer Science. This was where I started to get serious about programming since I was required to take classes in it. In the middle of my junior year, I got the opportunity to take an 8-month internship at Tesla where I met my boss, <a class="text-regal-blue underline" href="https://www.linkedin.com/in/rudderdon/">Don Rudder</a>, who forced my eyes open at the true capabilities of software development/engineering. I largely consider him my inspiration for truly starting to dive into the world of software. Not to mention, he\u2019s an absolute legend :). I also love learning about the universe and space exploration which is an industry I want to explore at some point in my career. My ultimate goal is to find the intersection between creative design, artistic expression, mechanical engineering, and software development\u2026 then I want to live in that world forever. </p><h1 class="text-center tablet:text-left my-10 shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"> My Hobbies </h1><p class="text-sm font-semibold tablet:text-xl"> One of the largest parts of my youth was soccer and tennis, but mainly tennis. I\u2019ve been competing since I was 8 years old and at my highest, I was ranked #10 in Texas for U16s and #42 in the entire nation. When I turned 16, I suffered a rotator cuff injury in my shoulder which unfortunately derailed my tennis career but allowed me to explore other sports such as basketball which I picked up in college. I also enjoy drawing and using computer aided design to 3D print anything I can dream up. In college, I\u2019m an active member of the Texas A&amp;M Robotics Leadership and Experience organization, also known as TURTLE (clever little acronym), and an intramural basketball player! I also like to volunteer whenever I can. Some other hobbies I enjoy are working out, cooking, and playing video games (unsurprisingly). </p><p class="my-10 text-sm font-semibold tablet:text-xl"> Thank you for taking the time to read about me! I hope you enjoy going exploring the rest of my portfolio website. If you have any questions or comments, I would love to hear them. You can reach me through the <a class="text-regal-blue underline" href="#contact">contact</a> page or my email at <a class="text-regal-blue underline" href="mailto:rohan.singh.do@gmail.com">rohan.singh.do@gmail.com</a>. </p>',7),qS=[WS];function XS(r,e){return pn(),mn("div",HS,qS)}const jS=fi(VS,[["render",XS]]),$S={name:"home",components:{ExperienceTesla:Ww,Projects:OS,ExperienceRiver:GS,Contact:fS,Skills:_S,About:jS,Home:MS,MenuPage:CS}},YS={class:"block"},ZS={class:"block section",id:"home"},KS=ut("br",null,null,-1),JS={class:"block section",id:"about"},QS={class:"block section",id:"river"},e2={class:"block section",id:"tesla"},t2={class:"block section",id:"turtle"},n2={class:"block section",id:"skills"},i2={class:"block section",id:"contact"};function r2(r,e,t,n,i,s){const o=Mi("MenuPage"),a=Mi("Home"),l=Mi("About"),c=Mi("ExperienceRiver"),u=Mi("ExperienceTesla"),f=Mi("Projects"),h=Mi("Skills"),m=Mi("Contact");return pn(),mn("div",YS,[wt(o),ut("section",ZS,[wt(a),KS]),ut("section",JS,[wt(l)]),ut("section",QS,[wt(c)]),ut("section",e2,[wt(u)]),ut("section",t2,[wt(f)]),ut("section",n2,[wt(h)]),ut("section",i2,[wt(m)])])}const s2=fi($S,[["render",r2]]);zw(s2).mount("#app");
