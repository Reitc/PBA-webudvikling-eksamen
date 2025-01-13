(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Au(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Ds=[],An=()=>{},Hb=()=>!1,Qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Su=t=>t.startsWith("onUpdate:"),st=Object.assign,Cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kb=Object.prototype.hasOwnProperty,Le=(t,e)=>Kb.call(t,e),ce=Array.isArray,Os=t=>co(t)==="[object Map]",Ja=t=>co(t)==="[object Set]",Lh=t=>co(t)==="[object Date]",_e=t=>typeof t=="function",et=t=>typeof t=="string",fn=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",wg=t=>(je(t)||_e(t))&&_e(t.then)&&_e(t.catch),Eg=Object.prototype.toString,co=t=>Eg.call(t),zb=t=>co(t).slice(8,-1),Tg=t=>co(t)==="[object Object]",Pu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wb=/-(\w)/g,ln=Ya(t=>t.replace(Wb,(e,n)=>n?n.toUpperCase():"")),Gb=/\B([A-Z])/g,ds=Ya(t=>t.replace(Gb,"-$1").toLowerCase()),Xa=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),ra=Ya(t=>t?`on${Xa(t)}`:""),Er=(t,e)=>!Object.is(t,e),sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ig=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Qb=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Mh;const Za=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uo(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?Zb(r):uo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||je(t))return t}const Jb=/;(?![^(]*\))/g,Yb=/:([^]+)/,Xb=/\/\*[^]*?\*\//g;function Zb(t){const e={};return t.replace(Xb,"").split(Jb).forEach(n=>{if(n){const r=n.split(Yb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wt(t){let e="";if(et(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=wt(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ew="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tw=Au(ew);function Ag(t){return!!t||t===""}function nw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=el(t[r],e[r]);return n}function el(t,e){if(t===e)return!0;let n=Lh(t),r=Lh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?nw(t,e):!1;if(n=je(t),r=je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!el(t[o],e[o]))return!1}}return String(t)===String(e)}function rw(t,e){return t.findIndex(n=>el(n,e))}const Sg=t=>!!(t&&t.__v_isRef===!0),se=t=>et(t)?t:t==null?"":ce(t)||je(t)&&(t.toString===Eg||!_e(t.toString))?Sg(t)?se(t.value):JSON.stringify(t,Cg,2):String(t),Cg=(t,e)=>Sg(e)?Cg(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:Ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:fn(e)?nc(e):je(e)&&!ce(e)&&!Tg(e)?String(e):e,nc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class Pg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rg(t){return new Pg(t)}function kg(){return Ft}function sw(t,e=!1){Ft&&Ft.cleanups.push(t)}let He;const rc=new WeakSet;class xg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Og(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fh(this),Vg(this);const e=He,n=hn;He=this,hn=!0;try{return this.fn()}finally{Ng(this),He=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xu(e);this.deps=this.depsTail=void 0,Fh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oc(this)&&this.run()}get dirty(){return Oc(this)}}let Dg=0,ki,xi;function Og(t,e=!1){if(t.flags|=8,e){t.next=xi,xi=t;return}t.next=ki,ki=t}function Ru(){Dg++}function ku(){if(--Dg>0)return;if(xi){let e=xi;for(xi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Vg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ng(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xu(r),iw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qi))return;t.globalVersion=qi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Oc(t)){t.flags&=-3;return}const n=He,r=hn;He=t,hn=!0;try{Vg(t);const s=t.fn(t._value);(e.version===0||Er(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,hn=r,Ng(t),t.flags&=-3}}function xu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const Mg=[];function Vr(){Mg.push(hn),hn=!1}function Nr(){const t=Mg.pop();hn=t===void 0?!0:t}function Fh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let qi=0;class ow{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!He||!hn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new ow(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,Fg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,qi++,this.notify(e)}notify(e){Ru();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ku()}}}function Fg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Fg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wa=new WeakMap,es=Symbol(""),Vc=Symbol(""),Hi=Symbol("");function kt(t,e,n){if(hn&&He){let r=wa.get(t);r||wa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Du),s.map=r,s.key=n),s.track()}}function $n(t,e,n,r,s,i){const o=wa.get(t);if(!o){qi++;return}const l=c=>{c&&c.trigger()};if(Ru(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&Pu(n);if(c&&n==="length"){const h=Number(r);o.forEach((p,g)=>{(g==="length"||g===Hi||!fn(g)&&g>=h)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Hi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(es)),Os(t)&&l(o.get(Vc)));break;case"delete":c||(l(o.get(es)),Os(t)&&l(o.get(Vc)));break;case"set":Os(t)&&l(o.get(es));break}}ku()}function aw(t,e){const n=wa.get(t);return n&&n.get(e)}function Ts(t){const e=Se(t);return e===t?e:(kt(e,"iterate",Hi),rn(t)?e:e.map(xt))}function tl(t){return kt(t=Se(t),"iterate",Hi),t}const lw={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,xt)},concat(...t){return Ts(this).concat(...t.map(e=>ce(e)?Ts(e):e))},entries(){return sc(this,"entries",t=>(t[1]=xt(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(xt),arguments)},find(t,e){return Mn(this,"find",t,e,xt,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,xt,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return Ts(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return Uh(this,"reduce",t,e)},reduceRight(t,...e){return Uh(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return Ts(this).toReversed()},toSorted(t){return Ts(this).toSorted(t)},toSpliced(...t){return Ts(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return sc(this,"values",xt)}};function sc(t,e,n){const r=tl(t),s=r[e]();return r!==t&&!rn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const cw=Array.prototype;function Mn(t,e,n,r,s,i){const o=tl(t),l=o!==t&&!rn(t),c=o[e];if(c!==cw[e]){const p=c.apply(t,i);return l?xt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,xt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function Uh(t,e,n,r){const s=tl(t);let i=n;return s!==t&&(rn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,xt(l),c,t)}),s[e](i,...r)}function ic(t,e,n){const r=Se(t);kt(r,"iterate",Hi);const s=r[e](...n);return(s===-1||s===!1)&&Nu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function _i(t,e,n=[]){Vr(),Ru();const r=Se(t)[e].apply(t,n);return ku(),Nr(),r}const uw=Au("__proto__,__v_isRef,__isVue"),Ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function dw(t){fn(t)||(t=String(t));const e=Se(this);return kt(e,"has",t),e.hasOwnProperty(t)}class Bg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ww:Hg:i?qg:jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=lw[n]))return c;if(n==="hasOwnProperty")return dw}const l=Reflect.get(e,n,rt(e)?e:r);return(fn(n)?Ug.has(n):uw(n))||(s||kt(e,"get",n),i)?l:rt(l)?o&&Pu(n)?l:l.value:je(l)?s?zg(l):ho(l):l}}class $g extends Bg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ss(i);if(!rn(r)&&!ss(r)&&(i=Se(i),r=Se(r)),!ce(e)&&rt(i)&&!rt(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&Pu(n)?Number(n)<e.length:Le(e,n),l=Reflect.set(e,n,r,rt(e)?e:s);return e===Se(s)&&(o?Er(r,i)&&$n(e,"set",n,r):$n(e,"add",n,r)),l}deleteProperty(e,n){const r=Le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&$n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!Ug.has(n))&&kt(e,"has",n),r}ownKeys(e){return kt(e,"iterate",ce(e)?"length":es),Reflect.ownKeys(e)}}class hw extends Bg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fw=new $g,pw=new hw,gw=new $g(!0);const Nc=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function mw(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Os(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Nc:e?Lc:xt;return!e&&kt(i,"iterate",c?Vc:es),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function zo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _w(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(Er(s,l)&&kt(o,"get",s),kt(o,"get",l));const{has:c}=Ko(o),u=e?Nc:t?Lc:xt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&kt(Se(s),"iterate",es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(Er(s,l)&&kt(o,"has",s),kt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?Nc:t?Lc:xt;return!t&&kt(c,"iterate",es),l.forEach((h,p)=>s.call(i,u(h),u(p),o))}};return st(n,t?{add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear")}:{add(s){!e&&!rn(s)&&!ss(s)&&(s=Se(s));const i=Se(this);return Ko(i).has.call(i,s)||(i.add(s),$n(i,"add",s,s)),this},set(s,i){!e&&!rn(i)&&!ss(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=Ko(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Er(i,h)&&$n(o,"set",s,i):$n(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=Ko(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&$n(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&$n(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=mw(s,t,e)}),n}function Ou(t,e){const n=_w(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Le(n,s)&&s in r?n:r,s,i)}const yw={get:Ou(!1,!1)},vw={get:Ou(!1,!0)},bw={get:Ou(!0,!1)};const jg=new WeakMap,qg=new WeakMap,Hg=new WeakMap,ww=new WeakMap;function Ew(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ew(zb(t))}function ho(t){return ss(t)?t:Vu(t,!1,fw,yw,jg)}function Kg(t){return Vu(t,!1,gw,vw,qg)}function zg(t){return Vu(t,!0,pw,bw,Hg)}function Vu(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Tw(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Tr(t){return ss(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function Nu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Lu(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&Ig(t,"__v_skip",!0),t}const xt=t=>je(t)?ho(t):t,Lc=t=>je(t)?zg(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function be(t){return Wg(t,!1)}function Iw(t){return Wg(t,!0)}function Wg(t,e){return rt(t)?t:new Aw(t,e)}class Aw{constructor(e,n){this.dep=new Du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||rn(e)||ss(e);e=r?e:Se(e),Er(e,n)&&(this._rawValue=e,this._value=r?e:xt(e),this.dep.trigger())}}function ts(t){return rt(t)?t.value:t}const Sw={get:(t,e,n)=>e==="__v_raw"?t:ts(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Gg(t){return Tr(t)?t:new Proxy(t,Sw)}function Cw(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=Rw(t,n);return e}class Pw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return aw(Se(this._object),this._key)}}function Rw(t,e,n){const r=t[e];return rt(r)?r:new Pw(t,e,n)}class kw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return Og(this,!0),!0}get value(){const e=this.dep.track();return Lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xw(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new kw(r,s,n)}const Wo={},Ea=new WeakMap;let zr;function Dw(t,e=!1,n=zr){if(n){let r=Ea.get(n);r||Ea.set(n,r=[]),r.push(t)}}function Ow(t,e,n=Be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=W=>s?W:rn(W)||s===!1||s===0?jn(W,1):jn(W);let h,p,g,v,P=!1,k=!1;if(rt(t)?(p=()=>t.value,P=rn(t)):Tr(t)?(p=()=>u(t),P=!0):ce(t)?(k=!0,P=t.some(W=>Tr(W)||rn(W)),p=()=>t.map(W=>{if(rt(W))return W.value;if(Tr(W))return u(W);if(_e(W))return c?c(W,2):W()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vr();try{g()}finally{Nr()}}const W=zr;zr=h;try{return c?c(t,3,[v]):t(v)}finally{zr=W}}:p=An,e&&s){const W=p,re=s===!0?1/0:s;p=()=>jn(W(),re)}const O=kg(),F=()=>{h.stop(),O&&Cu(O.effects,h)};if(i&&e){const W=e;e=(...re)=>{W(...re),F()}}let j=k?new Array(t.length).fill(Wo):Wo;const H=W=>{if(!(!(h.flags&1)||!h.dirty&&!W))if(e){const re=h.run();if(s||P||(k?re.some((le,S)=>Er(le,j[S])):Er(re,j))){g&&g();const le=zr;zr=h;try{const S=[re,j===Wo?void 0:k&&j[0]===Wo?[]:j,v];c?c(e,3,S):e(...S),j=re}finally{zr=le}}}else h.run()};return l&&l(H),h=new xg(p),h.scheduler=o?()=>o(H,!1):H,v=W=>Dw(W,!1,h),g=h.onStop=()=>{const W=Ea.get(h);if(W){if(c)c(W,4);else for(const re of W)re();Ea.delete(h)}},e?r?H(!0):j=h.run():o?o(H.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function jn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rt(t))jn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(Ja(t)||Os(t))t.forEach(r=>{jn(r,e,n)});else if(Tg(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t,e,n,r){try{return r?t(...r):t()}catch(s){nl(s,e,n)}}function pn(t,e,n,r){if(_e(t)){const s=fo(t,e,n,r);return s&&wg(s)&&s.catch(i=>{nl(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function nl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,c,u)===!1)return}l=l.parent}if(i){Vr(),fo(i,null,10,[t,c,u]),Nr();return}}Vw(t,n,s,r,o)}function Vw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ut=[];let En=-1;const Vs=[];let fr=null,As=0;const Qg=Promise.resolve();let Ta=null;function po(t){const e=Ta||Qg;return t?e.then(this?t.bind(this):t):e}function Nw(t){let e=En+1,n=Ut.length;for(;e<n;){const r=e+n>>>1,s=Ut[r],i=Ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Mu(t){if(!(t.flags&1)){const e=Ki(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=Ki(n)?Ut.push(t):Ut.splice(Nw(e),0,t),t.flags|=1,Jg()}}function Jg(){Ta||(Ta=Qg.then(Xg))}function Lw(t){ce(t)?Vs.push(...t):fr&&t.id===-1?fr.splice(As+1,0,t):t.flags&1||(Vs.push(t),t.flags|=1),Jg()}function Bh(t,e,n=En+1){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Yg(t){if(Vs.length){const e=[...new Set(Vs)].sort((n,r)=>Ki(n)-Ki(r));if(Vs.length=0,fr){fr.push(...e);return}for(fr=e,As=0;As<fr.length;As++){const n=fr[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fr=null,As=0}}const Ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xg(t){try{for(En=0;En<Ut.length;En++){const e=Ut[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ut.length;En++){const e=Ut[En];e&&(e.flags&=-2)}En=-1,Ut.length=0,Yg(),Ta=null,(Ut.length||Vs.length)&&Xg()}}let lt=null,Zg=null;function Ia(t){const e=lt;return lt=t,Zg=t&&t.type.__scopeId||null,e}function Ze(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jh(-1);const i=Ia(e);let o;try{o=t(...s)}finally{Ia(i),r._d&&Jh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ve(t,e){if(lt===null)return t;const n=cl(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Be]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function qr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Vr(),pn(c,n,8,[t.el,l,t,e]),Nr())}}const Mw=Symbol("_vte"),em=t=>t.__isTeleport,pr=Symbol("_leaveCb"),Go=Symbol("_enterCb");function tm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return il(()=>{t.isMounted=!0}),cm(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],nm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},rm=t=>{const e=t.subTree;return e.component?rm(e.component):e},Fw={name:"BaseTransition",props:nm,setup(t,{slots:e}){const n=Ku(),r=tm();return()=>{const s=e.default&&Fu(e.default(),!0);if(!s||!s.length)return;const i=sm(s),o=Se(t),{mode:l}=o;if(r.isLeaving)return oc(i);const c=$h(i);if(!c)return oc(i);let u=zi(c,o,r,n,g=>u=g);c.type!==Bt&&is(c,u);const h=n.subTree,p=h&&$h(h);if(p&&p.type!==Bt&&!Gr(c,p)&&rm(n).type!==Bt){const g=zi(p,o,r,n);if(is(p,g),l==="out-in"&&c.type!==Bt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave},oc(i);l==="in-out"&&c.type!==Bt&&(g.delayLeave=(v,P,k)=>{const O=im(r,p);O[String(p.key)]=p,v[pr]=()=>{P(),v[pr]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}};function sm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const Uw=Fw;function im(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zi(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:O,onAppear:F,onAfterAppear:j,onAppearCancelled:H}=e,W=String(t.key),re=im(n,t),le=(y,I)=>{y&&pn(y,r,9,I)},S=(y,I)=>{const C=I[1];le(y,I),ce(y)?y.every(A=>A.length<=1)&&C():y.length<=1&&C()},b={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=O||c;else return;y[pr]&&y[pr](!0);const C=re[W];C&&Gr(t,C)&&C.el[pr]&&C.el[pr](),le(I,[y])},enter(y){let I=u,C=h,A=p;if(!n.isMounted)if(i)I=F||u,C=j||h,A=H||p;else return;let E=!1;const Pe=y[Go]=Qe=>{E||(E=!0,Qe?le(A,[y]):le(C,[y]),b.delayedLeave&&b.delayedLeave(),y[Go]=void 0)};I?S(I,[y,Pe]):Pe()},leave(y,I){const C=String(t.key);if(y[Go]&&y[Go](!0),n.isUnmounting)return I();le(g,[y]);let A=!1;const E=y[pr]=Pe=>{A||(A=!0,I(),Pe?le(k,[y]):le(P,[y]),y[pr]=void 0,re[C]===t&&delete re[C])};re[C]=t,v?S(v,[y,E]):E()},clone(y){const I=zi(y,e,n,r,s);return s&&s(I),I}};return b}function oc(t){if(rl(t))return t=Pr(t),t.children=null,t}function $h(t){if(!rl(t))return em(t.type)&&t.children?sm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&_e(n.default))return n.default()}}function is(t,e){t.shapeFlag&6&&t.component?(t.transition=e,is(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===me?(o.patchFlag&128&&s++,r=r.concat(Fu(o.children,e,l))):(e||o.type!==Bt)&&r.push(l!=null?Pr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function er(t,e){return _e(t)?st({name:t.name},e,{setup:t}):t}function om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mc(t,e,n,r,s=!1){if(ce(t)){t.forEach((P,k)=>Mc(P,e&&(ce(e)?e[k]:e),n,r,s));return}if(Ns(r)&&!s)return;const i=r.shapeFlag&4?cl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Be?l.refs={}:l.refs,p=l.setupState,g=Se(p),v=p===Be?()=>!1:P=>Le(g,P);if(u!=null&&u!==c&&(et(u)?(h[u]=null,v(u)&&(p[u]=null)):rt(u)&&(u.value=null)),_e(c))fo(c,l,12,[o,h]);else{const P=et(c),k=rt(c);if(P||k){const O=()=>{if(t.f){const F=P?v(c)?p[c]:h[c]:c.value;s?ce(F)&&Cu(F,i):ce(F)?F.includes(i)||F.push(i):P?(h[c]=[i],v(c)&&(p[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else P?(h[c]=o,v(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(h[t.k]=o))};o?(O.id=-1,Qt(O,n)):O()}}}Za().requestIdleCallback;Za().cancelIdleCallback;const Ns=t=>!!t.type.__asyncLoader,rl=t=>t.type.__isKeepAlive;function Bw(t,e){am(t,"a",e)}function $w(t,e){am(t,"da",e)}function am(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rl(s.parent.vnode)&&jw(r,e,n,s),s=s.parent}}function jw(t,e,n,r){const s=sl(e,t,r,!0);um(()=>{Cu(r[e],s)},n)}function sl(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vr();const l=go(n),c=pn(e,n,t,o);return l(),Nr(),c});return r?s.unshift(i):s.push(i),i}}const tr=t=>(e,n=ft)=>{(!Qi||t==="sp")&&sl(t,(...r)=>e(...r),n)},qw=tr("bm"),il=tr("m"),Hw=tr("bu"),lm=tr("u"),cm=tr("bum"),um=tr("um"),Kw=tr("sp"),zw=tr("rtg"),Ww=tr("rtc");function Gw(t,e=ft){sl("ec",t,e)}const Uu="components",Qw="directives";function We(t,e){return $u(Uu,t,!0,e)||t}const dm=Symbol.for("v-ndc");function Bu(t){return et(t)?$u(Uu,t,!1)||t:t||dm}function Jw(t){return $u(Qw,t)}function $u(t,e,n=!0,r=!1){const s=lt||ft;if(s){const i=s.type;if(t===Uu){const l=F0(i,!1);if(l&&(l===e||l===ln(e)||l===Xa(ln(e))))return i}const o=jh(s[t]||i[t],e)||jh(s.appContext[t],e);return!o&&r?i:o}}function jh(t,e){return t&&(t[e]||t[ln(e)]||t[Xa(ln(e))])}function $e(t,e,n,r){let s;const i=n,o=ce(t);if(o||et(t)){const l=o&&Tr(t);let c=!1;l&&(c=!rn(t),t=tl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(c?xt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function Yw(t,e,n={},r,s){if(lt.ce||lt.parent&&Ns(lt.parent)&&lt.parent.ce)return V(),bt(me,null,[we("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),V();const o=i&&hm(i(n)),l=n.key||o&&o.key,c=bt(me,{key:(l&&!fn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function hm(t){return t.some(e=>Gi(e)?!(e.type===Bt||e.type===me&&!hm(e.children)):!0)?t:null}function Xw(t,e){const n={};for(const r in t)n[ra(r)]=t[r];return n}const Fc=t=>t?Om(t)?cl(t):Fc(t.parent):null,Di=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fc(t.parent),$root:t=>Fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ju(t),$forceUpdate:t=>t.f||(t.f=()=>{Mu(t.update)}),$nextTick:t=>t.n||(t.n=po.bind(t.proxy)),$watch:t=>b0.bind(t)}),ac=(t,e)=>t!==Be&&!t.__isScriptSetup&&Le(t,e),Zw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ac(r,e))return o[e]=1,r[e];if(s!==Be&&Le(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,i[e];if(n!==Be&&Le(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const h=Di[e];let p,g;if(h)return e==="$attrs"&&kt(t.attrs,"get",""),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Be&&Le(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Le(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ac(s,e)?(s[e]=n,!0):r!==Be&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Be&&Le(t,o)||ac(e,o)||(l=i[0])&&Le(l,o)||Le(r,o)||Le(Di,o)||Le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function e0(t){const e=ju(t),n=t.proxy,r=t.ctx;Uc=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:p,mounted:g,beforeUpdate:v,updated:P,activated:k,deactivated:O,beforeDestroy:F,beforeUnmount:j,destroyed:H,unmounted:W,render:re,renderTracked:le,renderTriggered:S,errorCaptured:b,serverPrefetch:y,expose:I,inheritAttrs:C,components:A,directives:E,filters:Pe}=e;if(u&&t0(u,r,null),o)for(const de in o){const ve=o[de];_e(ve)&&(r[de]=ve.bind(n))}if(s){const de=s.call(n,n);je(de)&&(t.data=ho(de))}if(Uc=!0,i)for(const de in i){const ve=i[de],gt=_e(ve)?ve.bind(n,n):_e(ve.get)?ve.get.bind(n,n):An,Vt=!_e(ve)&&_e(ve.set)?ve.set.bind(n):An,jt=Ee({get:gt,set:Vt});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>jt.value,set:qe=>jt.value=qe})}if(l)for(const de in l)fm(l[de],r,n,de);if(c){const de=_e(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ve=>{ia(ve,de[ve])})}h&&Hh(h,t,"c");function De(de,ve){ce(ve)?ve.forEach(gt=>de(gt.bind(n))):ve&&de(ve.bind(n))}if(De(qw,p),De(il,g),De(Hw,v),De(lm,P),De(Bw,k),De($w,O),De(Gw,b),De(Ww,le),De(zw,S),De(cm,j),De(um,W),De(Kw,y),ce(I))if(I.length){const de=t.exposed||(t.exposed={});I.forEach(ve=>{Object.defineProperty(de,ve,{get:()=>n[ve],set:gt=>n[ve]=gt})})}else t.exposed||(t.exposed={});re&&t.render===An&&(t.render=re),C!=null&&(t.inheritAttrs=C),A&&(t.components=A),E&&(t.directives=E),y&&om(t)}function t0(t,e,n=An){ce(t)&&(t=Bc(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hh(t,e,n){pn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,r){let s=r.includes(".")?Cm(n,r):()=>n[r];if(et(t)){const i=e[t];_e(i)&&Ir(s,i)}else if(_e(t))Ir(s,t.bind(n));else if(je(t))if(ce(t))t.forEach(i=>fm(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Ir(s,i,t)}}function ju(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Aa(c,u,o,!0)),Aa(c,e,o)),je(e)&&i.set(e,c),c}function Aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Aa(t,i,n,!0),s&&s.forEach(o=>Aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=n0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const n0={data:Kh,props:zh,emits:zh,methods:Ei,computed:Ei,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ei,directives:Ei,watch:s0,provide:Kh,inject:r0};function Kh(t,e){return e?t?function(){return st(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function r0(t,e){return Ei(Bc(t),Bc(e))}function Bc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?st(Object.create(null),t,e):e}function zh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:st(Object.create(null),qh(t),qh(e??{})):e}function s0(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Mt(t[r],e[r]);return n}function pm(){return{app:null,config:{isNativeTag:Hb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function o0(t,e){return function(r,s=null){_e(r)||(r=st({},r)),s!=null&&!je(s)&&(s=null);const i=pm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:i0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:B0,get config(){return i.config},set config(h){},use(h,...p){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...p)):_e(h)&&(o.add(h),h(u,...p))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,p){return p?(i.components[h]=p,u):i.components[h]},directive(h,p){return p?(i.directives[h]=p,u):i.directives[h]},mount(h,p,g){if(!c){const v=u._ceVNode||we(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(v,h):t(v,h,g),c=!0,u._container=h,h.__vue_app__=u,cl(v.component)}},onUnmount(h){l.push(h)},unmount(){c&&(pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,p){return i.provides[h]=p,u},runWithContext(h){const p=ns;ns=u;try{return h()}finally{ns=p}}};return u}}let ns=null;function ia(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=ft||lt;if(r||ns){const s=ns?ns._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function a0(){return!!(ft||lt||ns)}const gm={},mm=()=>Object.create(gm),_m=t=>Object.getPrototypeOf(t)===gm;function l0(t,e,n,r=!1){const s={},i=mm();t.propsDefaults=Object.create(null),ym(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function c0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(ol(t.emitsOptions,g))continue;const v=e[g];if(c)if(Le(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const P=ln(g);s[P]=$c(c,l,P,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{ym(t,e,s,i)&&(u=!0);let h;for(const p in l)(!e||!Le(e,p)&&((h=ds(p))===p||!Le(e,h)))&&(c?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=$c(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Le(e,p))&&(delete i[p],u=!0)}u&&$n(t.attrs,"set","")}function ym(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ri(c))continue;const u=e[c];let h;s&&Le(s,h=ln(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:ol(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Be;for(let h=0;h<i.length;h++){const p=i[h];n[p]=$c(s,c,p,u[p],t,!Le(u,p))}}return o}function $c(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Le(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=go(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ds(n))&&(r=!0))}return r}const u0=new WeakMap;function vm(t,e,n=!1){const r=n?u0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const h=p=>{c=!0;const[g,v]=vm(p,e,!0);st(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return je(t)&&r.set(t,Ds),Ds;if(ce(i))for(let h=0;h<i.length;h++){const p=ln(i[h]);Wh(p)&&(o[p]=Be)}else if(i)for(const h in i){const p=ln(h);if(Wh(p)){const g=i[h],v=o[p]=ce(g)||_e(g)?{type:g}:st({},g),P=v.type;let k=!1,O=!0;if(ce(P))for(let F=0;F<P.length;++F){const j=P[F],H=_e(j)&&j.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(O=!1)}else k=_e(P)&&P.name==="Boolean";v[0]=k,v[1]=O,(k||Le(v,"default"))&&l.push(p)}}const u=[o,l];return je(t)&&r.set(t,u),u}function Wh(t){return t[0]!=="$"&&!Ri(t)}const bm=t=>t[0]==="_"||t==="$stable",qu=t=>ce(t)?t.map(Tn):[Tn(t)],d0=(t,e,n)=>{if(e._n)return e;const r=Ze((...s)=>qu(e(...s)),n);return r._c=!1,r},wm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bm(s))continue;const i=t[s];if(_e(i))e[s]=d0(s,i,r);else if(i!=null){const o=qu(i);e[s]=()=>o}}},Em=(t,e)=>{const n=qu(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},h0=(t,e,n)=>{const r=t.slots=mm();if(t.vnode.shapeFlag&32){const s=e._;s?(Tm(r,e,n),n&&Ig(r,"_",s,!0)):wm(e,r)}else e&&Em(t,e)},f0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Tm(s,e,n):(i=!e.$stable,wm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const l in s)!bm(l)&&o[l]==null&&delete s[l]},Qt=C0;function p0(t){return g0(t)}function g0(t,e){const n=Za();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:p,nextSibling:g,setScopeId:v=An,insertStaticContent:P}=t,k=(w,T,x,B=null,L=null,K=null,X=void 0,J=null,Q=!!T.dynamicChildren)=>{if(w===T)return;w&&!Gr(w,T)&&(B=N(w),qe(w,L,K,!0),w=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null);const{type:z,ref:ae,shapeFlag:Z}=T;switch(z){case al:O(w,T,x,B);break;case Bt:F(w,T,x,B);break;case oa:w==null&&j(T,x,B,X);break;case me:A(w,T,x,B,L,K,X,J,Q);break;default:Z&1?re(w,T,x,B,L,K,X,J,Q):Z&6?E(w,T,x,B,L,K,X,J,Q):(Z&64||Z&128)&&z.process(w,T,x,B,L,K,X,J,Q,ee)}ae!=null&&L&&Mc(ae,w&&w.ref,K,T||w,!T)},O=(w,T,x,B)=>{if(w==null)r(T.el=l(T.children),x,B);else{const L=T.el=w.el;T.children!==w.children&&u(L,T.children)}},F=(w,T,x,B)=>{w==null?r(T.el=c(T.children||""),x,B):T.el=w.el},j=(w,T,x,B)=>{[w.el,w.anchor]=P(w.children,T,x,B,w.el,w.anchor)},H=({el:w,anchor:T},x,B)=>{let L;for(;w&&w!==T;)L=g(w),r(w,x,B),w=L;r(T,x,B)},W=({el:w,anchor:T})=>{let x;for(;w&&w!==T;)x=g(w),s(w),w=x;s(T)},re=(w,T,x,B,L,K,X,J,Q)=>{T.type==="svg"?X="svg":T.type==="math"&&(X="mathml"),w==null?le(T,x,B,L,K,X,J,Q):y(w,T,L,K,X,J,Q)},le=(w,T,x,B,L,K,X,J)=>{let Q,z;const{props:ae,shapeFlag:Z,transition:ie,dirs:ne}=w;if(Q=w.el=o(w.type,K,ae&&ae.is,ae),Z&8?h(Q,w.children):Z&16&&b(w.children,Q,null,B,L,lc(w,K),X,J),ne&&qr(w,null,B,"created"),S(Q,w,w.scopeId,X,B),ae){for(const Oe in ae)Oe!=="value"&&!Ri(Oe)&&i(Q,Oe,null,ae[Oe],K,B);"value"in ae&&i(Q,"value",null,ae.value,K),(z=ae.onVnodeBeforeMount)&&wn(z,B,w)}ne&&qr(w,null,B,"beforeMount");const he=m0(L,ie);he&&ie.beforeEnter(Q),r(Q,T,x),((z=ae&&ae.onVnodeMounted)||he||ne)&&Qt(()=>{z&&wn(z,B,w),he&&ie.enter(Q),ne&&qr(w,null,B,"mounted")},L)},S=(w,T,x,B,L)=>{if(x&&v(w,x),B)for(let K=0;K<B.length;K++)v(w,B[K]);if(L){let K=L.subTree;if(T===K||Rm(K.type)&&(K.ssContent===T||K.ssFallback===T)){const X=L.vnode;S(w,X,X.scopeId,X.slotScopeIds,L.parent)}}},b=(w,T,x,B,L,K,X,J,Q=0)=>{for(let z=Q;z<w.length;z++){const ae=w[z]=J?gr(w[z]):Tn(w[z]);k(null,ae,T,x,B,L,K,X,J)}},y=(w,T,x,B,L,K,X)=>{const J=T.el=w.el;let{patchFlag:Q,dynamicChildren:z,dirs:ae}=T;Q|=w.patchFlag&16;const Z=w.props||Be,ie=T.props||Be;let ne;if(x&&Hr(x,!1),(ne=ie.onVnodeBeforeUpdate)&&wn(ne,x,T,w),ae&&qr(T,w,x,"beforeUpdate"),x&&Hr(x,!0),(Z.innerHTML&&ie.innerHTML==null||Z.textContent&&ie.textContent==null)&&h(J,""),z?I(w.dynamicChildren,z,J,x,B,lc(T,L),K):X||ve(w,T,J,null,x,B,lc(T,L),K,!1),Q>0){if(Q&16)C(J,Z,ie,x,L);else if(Q&2&&Z.class!==ie.class&&i(J,"class",null,ie.class,L),Q&4&&i(J,"style",Z.style,ie.style,L),Q&8){const he=T.dynamicProps;for(let Oe=0;Oe<he.length;Oe++){const ke=he[Oe],It=Z[ke],dt=ie[ke];(dt!==It||ke==="value")&&i(J,ke,It,dt,L,x)}}Q&1&&w.children!==T.children&&h(J,T.children)}else!X&&z==null&&C(J,Z,ie,x,L);((ne=ie.onVnodeUpdated)||ae)&&Qt(()=>{ne&&wn(ne,x,T,w),ae&&qr(T,w,x,"updated")},B)},I=(w,T,x,B,L,K,X)=>{for(let J=0;J<T.length;J++){const Q=w[J],z=T[J],ae=Q.el&&(Q.type===me||!Gr(Q,z)||Q.shapeFlag&70)?p(Q.el):x;k(Q,z,ae,null,B,L,K,X,!0)}},C=(w,T,x,B,L)=>{if(T!==x){if(T!==Be)for(const K in T)!Ri(K)&&!(K in x)&&i(w,K,T[K],null,L,B);for(const K in x){if(Ri(K))continue;const X=x[K],J=T[K];X!==J&&K!=="value"&&i(w,K,J,X,L,B)}"value"in x&&i(w,"value",T.value,x.value,L)}},A=(w,T,x,B,L,K,X,J,Q)=>{const z=T.el=w?w.el:l(""),ae=T.anchor=w?w.anchor:l("");let{patchFlag:Z,dynamicChildren:ie,slotScopeIds:ne}=T;ne&&(J=J?J.concat(ne):ne),w==null?(r(z,x,B),r(ae,x,B),b(T.children||[],x,ae,L,K,X,J,Q)):Z>0&&Z&64&&ie&&w.dynamicChildren?(I(w.dynamicChildren,ie,x,L,K,X,J),(T.key!=null||L&&T===L.subTree)&&Im(w,T,!0)):ve(w,T,x,ae,L,K,X,J,Q)},E=(w,T,x,B,L,K,X,J,Q)=>{T.slotScopeIds=J,w==null?T.shapeFlag&512?L.ctx.activate(T,x,B,X,Q):Pe(T,x,B,L,K,X,Q):Qe(w,T,Q)},Pe=(w,T,x,B,L,K,X)=>{const J=w.component=O0(w,B,L);if(rl(w)&&(J.ctx.renderer=ee),V0(J,!1,X),J.asyncDep){if(L&&L.registerDep(J,De,X),!w.el){const Q=J.subTree=we(Bt);F(null,Q,T,x)}}else De(J,w,T,x,L,K,X)},Qe=(w,T,x)=>{const B=T.component=w.component;if(A0(w,T,x))if(B.asyncDep&&!B.asyncResolved){de(B,T,x);return}else B.next=T,B.update();else T.el=w.el,B.vnode=T},De=(w,T,x,B,L,K,X)=>{const J=()=>{if(w.isMounted){let{next:Z,bu:ie,u:ne,parent:he,vnode:Oe}=w;{const At=Am(w);if(At){Z&&(Z.el=Oe.el,de(w,Z,X)),At.asyncDep.then(()=>{w.isUnmounted||J()});return}}let ke=Z,It;Hr(w,!1),Z?(Z.el=Oe.el,de(w,Z,X)):Z=Oe,ie&&sa(ie),(It=Z.props&&Z.props.onVnodeBeforeUpdate)&&wn(It,he,Z,Oe),Hr(w,!0);const dt=cc(w),mt=w.subTree;w.subTree=dt,k(mt,dt,p(mt.el),N(mt),w,L,K),Z.el=dt.el,ke===null&&S0(w,dt.el),ne&&Qt(ne,L),(It=Z.props&&Z.props.onVnodeUpdated)&&Qt(()=>wn(It,he,Z,Oe),L)}else{let Z;const{el:ie,props:ne}=T,{bm:he,m:Oe,parent:ke,root:It,type:dt}=w,mt=Ns(T);if(Hr(w,!1),he&&sa(he),!mt&&(Z=ne&&ne.onVnodeBeforeMount)&&wn(Z,ke,T),Hr(w,!0),ie&&Ne){const At=()=>{w.subTree=cc(w),Ne(ie,w.subTree,w,L,null)};mt&&dt.__asyncHydrate?dt.__asyncHydrate(ie,w,At):At()}else{It.ce&&It.ce._injectChildStyle(dt);const At=w.subTree=cc(w);k(null,At,x,B,w,L,K),T.el=At.el}if(Oe&&Qt(Oe,L),!mt&&(Z=ne&&ne.onVnodeMounted)){const At=T;Qt(()=>wn(Z,ke,At),L)}(T.shapeFlag&256||ke&&Ns(ke.vnode)&&ke.vnode.shapeFlag&256)&&w.a&&Qt(w.a,L),w.isMounted=!0,T=x=B=null}};w.scope.on();const Q=w.effect=new xg(J);w.scope.off();const z=w.update=Q.run.bind(Q),ae=w.job=Q.runIfDirty.bind(Q);ae.i=w,ae.id=w.uid,Q.scheduler=()=>Mu(ae),Hr(w,!0),z()},de=(w,T,x)=>{T.component=w;const B=w.vnode.props;w.vnode=T,w.next=null,c0(w,T.props,B,x),f0(w,T.children,x),Vr(),Bh(w),Nr()},ve=(w,T,x,B,L,K,X,J,Q=!1)=>{const z=w&&w.children,ae=w?w.shapeFlag:0,Z=T.children,{patchFlag:ie,shapeFlag:ne}=T;if(ie>0){if(ie&128){Vt(z,Z,x,B,L,K,X,J,Q);return}else if(ie&256){gt(z,Z,x,B,L,K,X,J,Q);return}}ne&8?(ae&16&&Tt(z,L,K),Z!==z&&h(x,Z)):ae&16?ne&16?Vt(z,Z,x,B,L,K,X,J,Q):Tt(z,L,K,!0):(ae&8&&h(x,""),ne&16&&b(Z,x,B,L,K,X,J,Q))},gt=(w,T,x,B,L,K,X,J,Q)=>{w=w||Ds,T=T||Ds;const z=w.length,ae=T.length,Z=Math.min(z,ae);let ie;for(ie=0;ie<Z;ie++){const ne=T[ie]=Q?gr(T[ie]):Tn(T[ie]);k(w[ie],ne,x,null,L,K,X,J,Q)}z>ae?Tt(w,L,K,!0,!1,Z):b(T,x,B,L,K,X,J,Q,Z)},Vt=(w,T,x,B,L,K,X,J,Q)=>{let z=0;const ae=T.length;let Z=w.length-1,ie=ae-1;for(;z<=Z&&z<=ie;){const ne=w[z],he=T[z]=Q?gr(T[z]):Tn(T[z]);if(Gr(ne,he))k(ne,he,x,null,L,K,X,J,Q);else break;z++}for(;z<=Z&&z<=ie;){const ne=w[Z],he=T[ie]=Q?gr(T[ie]):Tn(T[ie]);if(Gr(ne,he))k(ne,he,x,null,L,K,X,J,Q);else break;Z--,ie--}if(z>Z){if(z<=ie){const ne=ie+1,he=ne<ae?T[ne].el:B;for(;z<=ie;)k(null,T[z]=Q?gr(T[z]):Tn(T[z]),x,he,L,K,X,J,Q),z++}}else if(z>ie)for(;z<=Z;)qe(w[z],L,K,!0),z++;else{const ne=z,he=z,Oe=new Map;for(z=he;z<=ie;z++){const Nt=T[z]=Q?gr(T[z]):Tn(T[z]);Nt.key!=null&&Oe.set(Nt.key,z)}let ke,It=0;const dt=ie-he+1;let mt=!1,At=0;const sr=new Array(dt);for(z=0;z<dt;z++)sr[z]=0;for(z=ne;z<=Z;z++){const Nt=w[z];if(It>=dt){qe(Nt,L,K,!0);continue}let tn;if(Nt.key!=null)tn=Oe.get(Nt.key);else for(ke=he;ke<=ie;ke++)if(sr[ke-he]===0&&Gr(Nt,T[ke])){tn=ke;break}tn===void 0?qe(Nt,L,K,!0):(sr[tn-he]=z+1,tn>=At?At=tn:mt=!0,k(Nt,T[tn],x,null,L,K,X,J,Q),It++)}const _s=mt?_0(sr):Ds;for(ke=_s.length-1,z=dt-1;z>=0;z--){const Nt=he+z,tn=T[Nt],ys=Nt+1<ae?T[Nt+1].el:B;sr[z]===0?k(null,tn,x,ys,L,K,X,J,Q):mt&&(ke<0||z!==_s[ke]?jt(tn,x,ys,2):ke--)}}},jt=(w,T,x,B,L=null)=>{const{el:K,type:X,transition:J,children:Q,shapeFlag:z}=w;if(z&6){jt(w.component.subTree,T,x,B);return}if(z&128){w.suspense.move(T,x,B);return}if(z&64){X.move(w,T,x,ee);return}if(X===me){r(K,T,x);for(let Z=0;Z<Q.length;Z++)jt(Q[Z],T,x,B);r(w.anchor,T,x);return}if(X===oa){H(w,T,x);return}if(B!==2&&z&1&&J)if(B===0)J.beforeEnter(K),r(K,T,x),Qt(()=>J.enter(K),L);else{const{leave:Z,delayLeave:ie,afterLeave:ne}=J,he=()=>r(K,T,x),Oe=()=>{Z(K,()=>{he(),ne&&ne()})};ie?ie(K,he,Oe):Oe()}else r(K,T,x)},qe=(w,T,x,B=!1,L=!1)=>{const{type:K,props:X,ref:J,children:Q,dynamicChildren:z,shapeFlag:ae,patchFlag:Z,dirs:ie,cacheIndex:ne}=w;if(Z===-2&&(L=!1),J!=null&&Mc(J,null,x,w,!0),ne!=null&&(T.renderCache[ne]=void 0),ae&256){T.ctx.deactivate(w);return}const he=ae&1&&ie,Oe=!Ns(w);let ke;if(Oe&&(ke=X&&X.onVnodeBeforeUnmount)&&wn(ke,T,w),ae&6)Wt(w.component,x,B);else{if(ae&128){w.suspense.unmount(x,B);return}he&&qr(w,null,T,"beforeUnmount"),ae&64?w.type.remove(w,T,x,ee,B):z&&!z.hasOnce&&(K!==me||Z>0&&Z&64)?Tt(z,T,x,!1,!0):(K===me&&Z&384||!L&&ae&16)&&Tt(Q,T,x),B&&Ke(w)}(Oe&&(ke=X&&X.onVnodeUnmounted)||he)&&Qt(()=>{ke&&wn(ke,T,w),he&&qr(w,null,T,"unmounted")},x)},Ke=w=>{const{type:T,el:x,anchor:B,transition:L}=w;if(T===me){bn(x,B);return}if(T===oa){W(w);return}const K=()=>{s(x),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:X,delayLeave:J}=L,Q=()=>X(x,K);J?J(w.el,K,Q):Q()}else K()},bn=(w,T)=>{let x;for(;w!==T;)x=g(w),s(w),w=x;s(T)},Wt=(w,T,x)=>{const{bum:B,scope:L,job:K,subTree:X,um:J,m:Q,a:z}=w;Gh(Q),Gh(z),B&&sa(B),L.stop(),K&&(K.flags|=8,qe(X,w,T,x)),J&&Qt(J,T),Qt(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Tt=(w,T,x,B=!1,L=!1,K=0)=>{for(let X=K;X<w.length;X++)qe(w[X],T,x,B,L)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=g(w.anchor||w.el),x=T&&T[Mw];return x?g(x):T};let q=!1;const G=(w,T,x)=>{w==null?T._vnode&&qe(T._vnode,null,null,!0):k(T._vnode||null,w,T,null,null,null,x),T._vnode=w,q||(q=!0,Bh(),Yg(),q=!1)},ee={p:k,um:qe,m:jt,r:Ke,mt:Pe,mc:b,pc:ve,pbc:I,n:N,o:t};let Te,Ne;return{render:G,hydrate:Te,createApp:o0(G,Te)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function m0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=gr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Im(o,l)),l.type===al&&(l.el=o.el)}}function _0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Am(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Am(e)}function Gh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const y0=Symbol.for("v-scx"),v0=()=>en(y0);function Ir(t,e,n){return Sm(t,e,n)}function Sm(t,e,n=Be){const{immediate:r,deep:s,flush:i,once:o}=n,l=st({},n),c=e&&r||!e&&i!=="post";let u;if(Qi){if(i==="sync"){const v=v0();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=An,v.resume=An,v.pause=An,v}}const h=ft;l.call=(v,P,k)=>pn(v,h,P,k);let p=!1;i==="post"?l.scheduler=v=>{Qt(v,h&&h.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,P)=>{P?v():Mu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,h&&(v.id=h.uid,v.i=h))};const g=Ow(t,e,l);return Qi&&(u?u.push(g):c&&g()),g}function b0(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?Cm(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=go(this),l=Sm(s,i.bind(r),n);return o(),l}function Cm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const w0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function E0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&w0(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>et(h)?h.trim():h)),o.number&&(s=n.map(ba)));let l,c=r[l=ra(e)]||r[l=ra(ln(e))];!c&&i&&(c=r[l=ra(ds(e))]),c&&pn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pn(u,t,6,s)}}function Pm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const h=Pm(u,e,!0);h&&(l=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(je(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):st(o,i),je(t)&&r.set(t,o),o)}function ol(t,e){return!t||!Qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,ds(e))||Le(t,e))}function cc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:p,data:g,setupState:v,ctx:P,inheritAttrs:k}=t,O=Ia(t);let F,j;try{if(n.shapeFlag&4){const W=s||r,re=W;F=Tn(u.call(re,W,h,p,v,g,P)),j=l}else{const W=e;F=Tn(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),j=e.props?l:T0(l)}}catch(W){Oi.length=0,nl(W,t,1),F=we(Bt)}let H=F;if(j&&k!==!1){const W=Object.keys(j),{shapeFlag:re}=H;W.length&&re&7&&(i&&W.some(Su)&&(j=I0(j,i)),H=Pr(H,j,!1,!0))}return n.dirs&&(H=Pr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&is(H,n.transition),F=H,Ia(O),F}const T0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qa(n))&&((e||(e={}))[n]=t[n]);return e},I0=(t,e)=>{const n={};for(const r in t)(!Su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function A0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qh(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==r[g]&&!ol(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ol(n,i))return!0}return!1}function S0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rm=t=>t.__isSuspense;function C0(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Lw(t)}const me=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),Oi=[];let Xt=null;function V(t=!1){Oi.push(Xt=t?null:[])}function P0(){Oi.pop(),Xt=Oi[Oi.length-1]||null}let Wi=1;function Jh(t){Wi+=t,t<0&&Xt&&(Xt.hasOnce=!0)}function km(t){return t.dynamicChildren=Wi>0?Xt||Ds:null,P0(),Wi>0&&Xt&&Xt.push(t),t}function U(t,e,n,r,s,i){return km(m(t,e,n,r,s,i,!0))}function bt(t,e,n,r,s){return km(we(t,e,n,r,s,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const xm=({key:t})=>t??null,aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||rt(t)||_e(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===me?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xm(e),ref:e&&aa(e),scopeId:Zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Hu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Wi>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const we=R0;function R0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dm)&&(t=Bt),Gi(t)){const l=Pr(t,e,!0);return n&&Hu(l,n),Wi>0&&!i&&Xt&&(l.shapeFlag&6?Xt[Xt.indexOf(t)]=l:Xt.push(l)),l.patchFlag=-2,l}if(U0(t)&&(t=t.__vccOpts),e){e=k0(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=wt(l)),je(c)&&(Nu(c)&&!ce(c)&&(c=st({},c)),e.style=uo(c))}const o=et(t)?1:Rm(t)?128:em(t)?64:je(t)?4:_e(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function k0(t){return t?Nu(t)||_m(t)?st({},t):t:null}function Pr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?ll(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&xm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(aa(e)):[i,aa(e)]:aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pr(t.ssContent),ssFallback:t.ssFallback&&Pr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&is(h,c.clone(h)),h}function ot(t=" ",e=0){return we(al,null,t,e)}function Dm(t,e){const n=we(oa,null,t);return n.staticCount=e,n}function $t(t="",e=!1){return e?(V(),bt(Bt,null,t)):we(Bt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?we(Bt):ce(t)?we(me,null,t.slice()):Gi(t)?gr(t):we(al,null,String(t))}function gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pr(t)}function Hu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_m(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function ll(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wt([e.class,r.class]));else if(s==="style")e.style=uo([e.style,r.style]);else if(Qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(t,e,n,r=null){pn(t,e,7,[n,r])}const x0=pm();let D0=0;function O0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||x0,i={uid:D0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(r,s),emitsOptions:Pm(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=E0.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Ku=()=>ft||lt;let Sa,jc;{const t=Za(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Sa=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),jc=e("__VUE_SSR_SETTERS__",n=>Qi=n)}const go=t=>{const e=ft;return Sa(t),t.scope.on(),()=>{t.scope.off(),Sa(e)}},Yh=()=>{ft&&ft.scope.off(),Sa(null)};function Om(t){return t.vnode.shapeFlag&4}let Qi=!1;function V0(t,e=!1,n=!1){e&&jc(e);const{props:r,children:s}=t.vnode,i=Om(t);l0(t,r,i,e),h0(t,s,n);const o=i?N0(t,e):void 0;return e&&jc(!1),o}function N0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zw);const{setup:r}=n;if(r){Vr();const s=t.setupContext=r.length>1?M0(t):null,i=go(t),o=fo(r,t,0,[t.props,s]),l=wg(o);if(Nr(),i(),(l||t.sp)&&!Ns(t)&&om(t),l){if(o.then(Yh,Yh),e)return o.then(c=>{Xh(t,c,e)}).catch(c=>{nl(c,t,0)});t.asyncDep=o}else Xh(t,o,e)}else Vm(t,e)}function Xh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Gg(e)),Vm(t,n)}let Zh;function Vm(t,e,n){const r=t.type;if(!t.render){if(!e&&Zh&&!r.render){const s=r.template||ju(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=st(st({isCustomElement:i,delimiters:l},o),c);r.render=Zh(s,u)}}t.render=r.render||An}{const s=go(t);Vr();try{e0(t)}finally{Nr(),s()}}}const L0={get(t,e){return kt(t,"get",""),t[e]}};function M0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,L0),slots:t.slots,emit:t.emit,expose:e}}function cl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gg(Lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function F0(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function U0(t){return _e(t)&&"__vccOpts"in t}const Ee=(t,e)=>xw(t,e,Qi);function zu(t,e,n){const r=arguments.length;return r===2?je(e)&&!ce(e)?Gi(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gi(n)&&(n=[n]),we(t,e,n))}const B0="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qc;const ef=typeof window<"u"&&window.trustedTypes;if(ef)try{qc=ef.createPolicy("vue",{createHTML:t=>t})}catch{}const Nm=qc?t=>qc.createHTML(t):t=>t,$0="http://www.w3.org/2000/svg",j0="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,tf=Bn&&Bn.createElement("template"),q0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Bn.createElementNS($0,t):e==="mathml"?Bn.createElementNS(j0,t):n?Bn.createElement(t,{is:n}):Bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{tf.innerHTML=Nm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=tf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lr="transition",yi="animation",$s=Symbol("_vtc"),Lm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mm=st({},nm,Lm),H0=t=>(t.displayName="Transition",t.props=Mm,t),K0=H0((t,{slots:e})=>zu(Uw,Fm(t),e)),Kr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},nf=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function Fm(t){const e={};for(const A in t)A in Lm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,P=z0(s),k=P&&P[0],O=P&&P[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:H,onLeave:W,onLeaveCancelled:re,onBeforeAppear:le=F,onAppear:S=j,onAppearCancelled:b=H}=e,y=(A,E,Pe)=>{dr(A,E?h:l),dr(A,E?u:o),Pe&&Pe()},I=(A,E)=>{A._isLeaving=!1,dr(A,p),dr(A,v),dr(A,g),E&&E()},C=A=>(E,Pe)=>{const Qe=A?S:j,De=()=>y(E,A,Pe);Kr(Qe,[E,De]),rf(()=>{dr(E,A?c:i),Un(E,A?h:l),nf(Qe)||sf(E,r,k,De)})};return st(e,{onBeforeEnter(A){Kr(F,[A]),Un(A,i),Un(A,o)},onBeforeAppear(A){Kr(le,[A]),Un(A,c),Un(A,u)},onEnter:C(!1),onAppear:C(!0),onLeave(A,E){A._isLeaving=!0;const Pe=()=>I(A,E);Un(A,p),Un(A,g),Bm(),rf(()=>{A._isLeaving&&(dr(A,p),Un(A,v),nf(W)||sf(A,r,O,Pe))}),Kr(W,[A,Pe])},onEnterCancelled(A){y(A,!1),Kr(H,[A])},onAppearCancelled(A){y(A,!0),Kr(b,[A])},onLeaveCancelled(A){I(A),Kr(re,[A])}})}function z0(t){if(t==null)return null;if(je(t))return[uc(t.enter),uc(t.leave)];{const e=uc(t);return[e,e]}}function uc(t){return Qb(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$s]||(t[$s]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[$s];n&&(n.delete(e),n.size||(t[$s]=void 0))}function rf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let W0=0;function sf(t,e,n,r){const s=t._endId=++W0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Um(t,e);if(!o)return r();const u=o+"end";let h=0;const p=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++h>=c&&p()};setTimeout(()=>{h<c&&p()},l+1),t.addEventListener(u,g)}function Um(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${lr}Delay`),i=r(`${lr}Duration`),o=of(s,i),l=r(`${yi}Delay`),c=r(`${yi}Duration`),u=of(l,c);let h=null,p=0,g=0;e===lr?o>0&&(h=lr,p=o,g=i.length):e===yi?u>0&&(h=yi,p=u,g=c.length):(p=Math.max(o,u),h=p>0?o>u?lr:yi:null,g=h?h===lr?i.length:c.length:0);const v=h===lr&&/\b(transform|all)(,|$)/.test(r(`${lr}Property`).toString());return{type:h,timeout:p,propCount:g,hasTransform:v}}function of(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>af(n)+af(t[r])))}function af(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bm(){return document.body.offsetHeight}function G0(t,e,n){const r=t[$s];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lf=Symbol("_vod"),Q0=Symbol("_vsh"),J0=Symbol(""),Y0=/(^|;)\s*display\s*:/;function X0(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&la(r,l,"")}else for(const o in e)n[o]==null&&la(r,o,"");for(const o in n)o==="display"&&(i=!0),la(r,o,n[o])}else if(s){if(e!==n){const o=r[J0];o&&(n+=";"+o),r.cssText=n,i=Y0.test(n)}}else e&&t.removeAttribute("style");lf in t&&(t[lf]=i?r.display:"",t[Q0]&&(r.display="none"))}const cf=/\s*!important$/;function la(t,e,n){if(ce(n))n.forEach(r=>la(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Z0(t,e);cf.test(n)?t.setProperty(ds(r),n.replace(cf,""),"important"):t[r]=n}}const uf=["Webkit","Moz","ms"],dc={};function Z0(t,e){const n=dc[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return dc[e]=r;r=Xa(r);for(let s=0;s<uf.length;s++){const i=uf[s]+r;if(i in t)return dc[e]=i}return e}const df="http://www.w3.org/1999/xlink";function hf(t,e,n,r,s,i=tw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n):n==null||i&&!Ag(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function ff(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Nm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ag(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function eE(t,e,n,r){t.removeEventListener(e,n,r)}const pf=Symbol("_vei");function tE(t,e,n,r,s=null){const i=t[pf]||(t[pf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=nE(e);if(r){const u=i[e]=iE(r,s);Qr(t,l,u,c)}else o&&(eE(t,l,o,c),i[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function nE(t){let e;if(gf.test(t)){e={};let r;for(;r=t.match(gf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let hc=0;const rE=Promise.resolve(),sE=()=>hc||(rE.then(()=>hc=0),hc=Date.now());function iE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(oE(r,n.value),e,5,[r])};return n.value=t,n.attached=sE(),n}function oE(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?G0(t,r,o):e==="style"?X0(t,n,r):Qa(e)?Su(e)||tE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,o))?(ff(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?ff(t,ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hf(t,e,r,o))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mf(e)&&et(n)?!1:e in t}const $m=new WeakMap,jm=new WeakMap,Ca=Symbol("_moveCb"),_f=Symbol("_enterCb"),cE=t=>(delete t.props.mode,t),uE=cE({name:"TransitionGroup",props:st({},Mm,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ku(),r=tm();let s,i;return lm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!gE(s[0].el,n.vnode.el,o))return;s.forEach(hE),s.forEach(fE);const l=s.filter(pE);Bm(),l.forEach(c=>{const u=c.el,h=u.style;Un(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=u[Ca]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ca]=null,dr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Se(t),l=Fm(o);let c=o.tag||me;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),is(h,zi(h,l,r,n)),$m.set(h,h.el.getBoundingClientRect()))}i=e.default?Fu(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&is(h,zi(h,l,r,n))}return we(c,null,i)}}}),dE=uE;function hE(t){const e=t.el;e[Ca]&&e[Ca](),e[_f]&&e[_f]()}function fE(t){jm.set(t,t.el.getBoundingClientRect())}function pE(t){const e=$m.get(t),n=jm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function gE(t,e,n){const r=t.cloneNode(),s=t[$s];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Um(r);return i.removeChild(r),o}const Pa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>sa(e,n):e};function mE(t){t.target.composing=!0}function yf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign"),Je={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ls]=Pa(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ba(l)),t[Ls](l)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",mE),Qr(t,"compositionend",yf),Qr(t,"change",yf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ls]=Pa(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ba(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Jr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ja(e);Qr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ba(Ra(o)):Ra(o));t[Ls](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,po(()=>{t._assigning=!1})}),t[Ls]=Pa(r)},mounted(t,{value:e}){vf(t,e)},beforeUpdate(t,e,n){t[Ls]=Pa(n)},updated(t,{value:e}){t._assigning||vf(t,e)}};function vf(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Ja(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ra(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=rw(e,l)>-1}else o.selected=e.has(l);else if(el(Ra(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ra(t){return"_value"in t?t._value:t.value}const _E=["ctrl","shift","alt","meta"],yE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_E.some(n=>t[`${n}Key`]&&!e.includes(n))},qn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=yE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},vE=st({patchProp:aE},q0);let bf;function bE(){return bf||(bf=p0(vE))}const qm=(...t)=>{const e=bE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=EE(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function EE(t){return et(t)?document.querySelector(t):t}var TE=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Hm;const ul=t=>Hm=t,Km=Symbol();function Hc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vi||(Vi={}));function IE(){const t=Rg(!0),e=t.run(()=>be({}));let n=[],r=[];const s=Lu({install(i){ul(s),s._a=i,i.provide(Km,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!TE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const zm=()=>{};function wf(t,e,n,r=zm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&kg()&&sw(s),s}function Is(t,...e){t.slice().forEach(n=>{n(...e)})}const AE=t=>t(),Ef=Symbol(),fc=Symbol();function Kc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hc(s)&&Hc(r)&&t.hasOwnProperty(n)&&!rt(r)&&!Tr(r)?t[n]=Kc(s,r):t[n]=r}return t}const SE=Symbol();function CE(t){return!Hc(t)||!t.hasOwnProperty(SE)}const{assign:hr}=Object;function PE(t){return!!(rt(t)&&t.effect)}function RE(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const h=Cw(n.state.value[t]);return hr(h,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=Lu(Ee(()=>{ul(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return c=Wm(t,u,e,n,r,!0),c}function Wm(t,e,n={},r,s,i){let o;const l=hr({actions:{}},n),c={deep:!0};let u,h,p=[],g=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),be({});let k;function O(b){let y;u=h=!1,typeof b=="function"?(b(r.state.value[t]),y={type:Vi.patchFunction,storeId:t,events:v}):(Kc(r.state.value[t],b),y={type:Vi.patchObject,payload:b,storeId:t,events:v});const I=k=Symbol();po().then(()=>{k===I&&(u=!0)}),h=!0,Is(p,y,r.state.value[t])}const F=i?function(){const{state:y}=n,I=y?y():{};this.$patch(C=>{hr(C,I)})}:zm;function j(){o.stop(),p=[],g=[],r._s.delete(t)}const H=(b,y="")=>{if(Ef in b)return b[fc]=y,b;const I=function(){ul(r);const C=Array.from(arguments),A=[],E=[];function Pe(de){A.push(de)}function Qe(de){E.push(de)}Is(g,{args:C,name:I[fc],store:re,after:Pe,onError:Qe});let De;try{De=b.apply(this&&this.$id===t?this:re,C)}catch(de){throw Is(E,de),de}return De instanceof Promise?De.then(de=>(Is(A,de),de)).catch(de=>(Is(E,de),Promise.reject(de))):(Is(A,De),De)};return I[Ef]=!0,I[fc]=y,I},W={_p:r,$id:t,$onAction:wf.bind(null,g),$patch:O,$reset:F,$subscribe(b,y={}){const I=wf(p,b,y.detached,()=>C()),C=o.run(()=>Ir(()=>r.state.value[t],A=>{(y.flush==="sync"?h:u)&&b({storeId:t,type:Vi.direct,events:v},A)},hr({},c,y)));return I},$dispose:j},re=ho(W);r._s.set(t,re);const S=(r._a&&r._a.runWithContext||AE)(()=>r._e.run(()=>(o=Rg()).run(()=>e({action:H}))));for(const b in S){const y=S[b];if(rt(y)&&!PE(y)||Tr(y))i||(P&&CE(y)&&(rt(y)?y.value=P[b]:Kc(y,P[b])),r.state.value[t][b]=y);else if(typeof y=="function"){const I=H(y,b);S[b]=I,l.actions[b]=y}}return hr(re,S),hr(Se(re),S),Object.defineProperty(re,"$state",{get:()=>r.state.value[t],set:b=>{O(y=>{hr(y,b)})}}),r._p.forEach(b=>{hr(re,o.run(()=>b({store:re,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(re.$state,P),u=!0,h=!0,re}/*! #__NO_SIDE_EFFECTS__ */function Wu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=a0();return l=l||(u?en(Km,null):null),l&&ul(l),l=Hm,l._s.has(r)||(i?Wm(r,e,s,l):RE(r,s,l)),l._s.get(r)}return o.$id=r,o}var Tf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[h],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new xE;const g=i<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DE=function(t){const e=Gm(t);return Qm.encodeByteArray(e,!0)},ka=function(t){return DE(t).replace(/\./g,"")},Jm=function(t){try{return Qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=()=>OE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof Tf>"u")return;const t=Tf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jm(t[1]);return e&&JSON.parse(e)},dl=()=>{try{return VE()||NE()||LE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ym=t=>{var e,n;return(n=(e=dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ME=t=>{const e=Ym(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xm=()=>{var t;return(t=dl())===null||t===void 0?void 0:t.config},Zm=t=>{var e;return(e=dl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ka(JSON.stringify(n)),ka(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function $E(){var t;const e=(t=dl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KE(){return!$E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function t_(){try{return typeof indexedDB=="object"}catch{return!1}}function n_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function zE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new vn(s,l,r)}}function GE(t,e){return t.replace(QE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(If(i)&&If(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YE(t,e){const n=new XE(t,e);return n.subscribe.bind(n)}class XE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=1e3,tT=2,nT=4*60*60*1e3,rT=.5;function Af(t,e=eT,n=tT){const r=e*Math.pow(n,t),s=Math.round(rT*r*(Math.random()-.5)*2);return Math.min(nT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oT(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iT(t){return t===Wr?void 0:t}function oT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const lT={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},cT=Ie.INFO,uT={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},dT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=cT,this._logHandler=dT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const hT=(t,e)=>e.some(n=>t instanceof n);let Sf,Cf;function fT(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pT(){return Cf||(Cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r_=new WeakMap,zc=new WeakMap,s_=new WeakMap,gc=new WeakMap,Gu=new WeakMap;function gT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&r_.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function mT(t){if(zc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _T(t){Wc=t(Wc)}function yT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return s_.set(r,e.sort?e.sort():[e]),Ar(r)}:pT().includes(t)?function(...e){return t.apply(mc(this),e),Ar(r_.get(this))}:function(...e){return Ar(t.apply(mc(this),e))}}function vT(t){return typeof t=="function"?yT(t):(t instanceof IDBTransaction&&mT(t),hT(t,fT())?new Proxy(t,Wc):t)}function Ar(t){if(t instanceof IDBRequest)return gT(t);if(gc.has(t))return gc.get(t);const e=vT(t);return e!==t&&(gc.set(t,e),Gu.set(e,t)),e}const mc=t=>Gu.get(t);function i_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ar(o.result),c.oldVersion,c.newVersion,Ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const bT=["get","getKey","getAll","getAllKeys","count"],wT=["put","add","delete","clear"],_c=new Map;function Pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return _c.set(e,i),i}_T(t=>({...t,get:(e,n,r)=>Pf(e,n)||t.get(e,n,r),has:(e,n)=>!!Pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gc="@firebase/app",Rf="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new hl("@firebase/app"),IT="@firebase/app-compat",AT="@firebase/analytics-compat",ST="@firebase/analytics",CT="@firebase/app-check-compat",PT="@firebase/app-check",RT="@firebase/auth",kT="@firebase/auth-compat",xT="@firebase/database",DT="@firebase/data-connect",OT="@firebase/database-compat",VT="@firebase/functions",NT="@firebase/functions-compat",LT="@firebase/installations",MT="@firebase/installations-compat",FT="@firebase/messaging",UT="@firebase/messaging-compat",BT="@firebase/performance",$T="@firebase/performance-compat",jT="@firebase/remote-config",qT="@firebase/remote-config-compat",HT="@firebase/storage",KT="@firebase/storage-compat",zT="@firebase/firestore",WT="@firebase/vertexai",GT="@firebase/firestore-compat",QT="firebase",JT="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",YT={[Gc]:"fire-core",[IT]:"fire-core-compat",[ST]:"fire-analytics",[AT]:"fire-analytics-compat",[PT]:"fire-app-check",[CT]:"fire-app-check-compat",[RT]:"fire-auth",[kT]:"fire-auth-compat",[xT]:"fire-rtdb",[DT]:"fire-data-connect",[OT]:"fire-rtdb-compat",[VT]:"fire-fn",[NT]:"fire-fn-compat",[LT]:"fire-iid",[MT]:"fire-iid-compat",[FT]:"fire-fcm",[UT]:"fire-fcm-compat",[BT]:"fire-perf",[$T]:"fire-perf-compat",[jT]:"fire-rc",[qT]:"fire-rc-compat",[HT]:"fire-gcs",[KT]:"fire-gcs-compat",[zT]:"fire-fst",[GT]:"fire-fst-compat",[WT]:"fire-vertex","fire-js":"fire-js",[QT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Map,XT=new Map,Jc=new Map;function kf(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Jc.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Da.values())kf(n,t);for(const n of XT.values())kf(n,t);return!0}function _o(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new hs("app","Firebase",ZT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=JT;function o_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=Xm()),!n)throw Sr.create("no-options");const i=Da.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new aT(s);for(const c of Jc.values())o.addComponent(c);const l=new eI(n,r,o);return Da.set(s,l),l}function a_(t=Qc){const e=Da.get(t);if(!e&&t===Qc&&Xm())return o_();if(!e)throw Sr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=YT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}xn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-heartbeat-database",nI=1,Ji="firebase-heartbeat-store";let yc=null;function l_(){return yc||(yc=i_(tI,nI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),yc}async function rI(t){try{const n=(await l_()).transaction(Ji),r=await n.objectStore(Ji).get(c_(t));return await n.done,r}catch(e){if(e instanceof vn)Jn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function xf(t,e){try{const r=(await l_()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,c_(t)),await r.done}catch(n){if(n instanceof vn)Jn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function c_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,iI=30*24*60*60*1e3;class oI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Df();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=iI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Df(),{heartbeatsToSend:r,unsentEntries:s}=aI(this._heartbeatsCache.heartbeats),i=ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function Df(){return new Date().toISOString().substring(0,10)}function aI(t,e=sI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t_()?n_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Of(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){xn(new gn("platform-logger",e=>new ET(e),"PRIVATE")),xn(new gn("heartbeat",e=>new oI(e),"PRIVATE")),sn(Gc,Rf,t),sn(Gc,Rf,"esm2017"),sn("fire-js","")}cI("");var uI="firebase",dI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(uI,dI,"app");const u_="@firebase/installations",Qu="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=1e4,h_=`w:${Qu}`,f_="FIS_v2",hI="https://firebaseinstallations.googleapis.com/v1",fI=60*60*1e3,pI="installations",gI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new hs(pI,gI,mI);function p_(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_({projectId:t}){return`${hI}/projects/${t}/installations`}function m_(t){return{token:t.token,requestStatus:2,expiresIn:yI(t.expiresIn),creationTime:Date.now()}}async function __(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function y_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _I(t,{refreshToken:e}){const n=y_(t);return n.append("Authorization",vI(e)),n}async function v_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yI(t){return Number(t.replace("s","000"))}function vI(t){return`${f_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=g_(t),s=y_(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:f_,appId:t.appId,sdkVersion:h_},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await v_(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:m_(u.authToken)}}else throw await __("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^[cdef][\w-]{21}$/,Yc="";function TI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=II(t);return EI.test(n)?n:Yc}catch{return Yc}}function II(t){return wI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;function E_(t,e){const n=fl(t);T_(n,e),AI(n,e)}function T_(t,e){const n=w_.get(t);if(n)for(const r of n)r(e)}function AI(t,e){const n=SI();n&&n.postMessage({key:t,fid:e}),CI()}let Yr=null;function SI(){return!Yr&&"BroadcastChannel"in self&&(Yr=new BroadcastChannel("[Firebase] FID Change"),Yr.onmessage=t=>{T_(t.data.key,t.data.fid)}),Yr}function CI(){w_.size===0&&Yr&&(Yr.close(),Yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebase-installations-database",RI=1,as="firebase-installations-store";let vc=null;function Ju(){return vc||(vc=i_(PI,RI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),vc}async function Oa(t,e){const n=fl(t),s=(await Ju()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&E_(t,e.fid),e}async function I_(t){const e=fl(t),r=(await Ju()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function pl(t,e){const n=fl(t),s=(await Ju()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&E_(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(t){let e;const n=await pl(t.appConfig,r=>{const s=kI(r),i=xI(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Yc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kI(t){const e=t||{fid:TI(),registrationStatus:0};return A_(e)}function xI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=DI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:OI(t)}:{installationEntry:e}}async function DI(t,e){try{const n=await bI(t,e);return Oa(t.appConfig,n)}catch(n){throw p_(n)&&n.customData.serverCode===409?await I_(t.appConfig):await Oa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function OI(t){let e=await Vf(t.appConfig);for(;e.registrationStatus===1;)await b_(100),e=await Vf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yu(t);return r||n}return e}function Vf(t){return pl(t,e=>{if(!e)throw os.create("installation-not-found");return A_(e)})}function A_(t){return VI(t)?{fid:t.fid,registrationStatus:0}:t}function VI(t){return t.registrationStatus===1&&t.registrationTime+d_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI({appConfig:t,heartbeatServiceProvider:e},n){const r=LI(t,n),s=_I(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:h_,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await v_(()=>fetch(r,l));if(c.ok){const u=await c.json();return m_(u)}else throw await __("Generate Auth Token",c)}function LI(t,{fid:e}){return`${g_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t,e=!1){let n;const r=await pl(t.appConfig,i=>{if(!S_(i))throw os.create("not-registered");const o=i.authToken;if(!e&&UI(o))return i;if(o.requestStatus===1)return n=MI(t,e),i;{if(!navigator.onLine)throw os.create("app-offline");const l=$I(i);return n=FI(t,l),l}});return n?await n:r.authToken}async function MI(t,e){let n=await Nf(t.appConfig);for(;n.authToken.requestStatus===1;)await b_(100),n=await Nf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xu(t,e):r}function Nf(t){return pl(t,e=>{if(!S_(e))throw os.create("not-registered");const n=e.authToken;return jI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function FI(t,e){try{const n=await NI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Oa(t.appConfig,r),n}catch(n){if(p_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await I_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oa(t.appConfig,r)}throw n}}function S_(t){return t!==void 0&&t.registrationStatus===2}function UI(t){return t.requestStatus===2&&!BI(t)}function BI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+fI}function $I(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function jI(t){return t.requestStatus===1&&t.requestTime+d_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Yu(e);return r?r.catch(console.error):Xu(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e=!1){const n=t;return await KI(n),(await Xu(n,e)).token}async function KI(t){const{registrationPromise:e}=await Yu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){if(!t||!t.options)throw bc("App Configuration");if(!t.name)throw bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bc(t){return os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="installations",WI="installations-internal",GI=t=>{const e=t.getProvider("app").getImmediate(),n=zI(e),r=_o(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},QI=t=>{const e=t.getProvider("app").getImmediate(),n=_o(e,C_).getImmediate();return{getId:()=>qI(n),getToken:s=>HI(n,s)}};function JI(){xn(new gn(C_,GI,"PUBLIC")),xn(new gn(WI,QI,"PRIVATE"))}JI();sn(u_,Qu);sn(u_,Qu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="analytics",YI="firebase_id",XI="origin",ZI=60*1e3,e1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new hl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},on=new hs("analytics","Analytics",t1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){if(!t.startsWith(Zu)){const e=on.create("invalid-gtag-resource",{gtagURL:t});return Kt.warn(e.message),""}return t}function P_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function r1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function s1(t,e){const n=r1("firebase-js-sdk-policy",{createScriptURL:n1}),r=document.createElement("script"),s=`${Zu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function i1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function o1(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await P_(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Kt.error(l)}t("config",s,i)}async function a1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await P_(n);for(const c of o){const u=l.find(p=>p.measurementId===c),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Kt.error(i)}}function l1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await a1(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await o1(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Kt.error(l)}}return s}function c1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=l1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function u1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=30,h1=1e3;class f1{constructor(e={},n=h1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const R_=new f1;function p1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function g1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:p1(r)},i=e1.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw on.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function m1(t,e=R_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw on.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw on.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new v1;return setTimeout(async()=>{l.abort()},ZI),k_({appId:r,apiKey:s,measurementId:i},o,l,e)}async function k_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=R_){var i;const{appId:o,measurementId:l}=t;try{await _1(r,e)}catch(c){if(l)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await g1(t);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!y1(u)){if(s.deleteThrottleMetadata(o),l)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Af(n,s.intervalMillis,d1):Af(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,p),Kt.debug(`Calling attemptFetch again in ${h} millis`),k_(t,p,r,s)}}function _1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(on.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function y1(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class v1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function b1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(){if(t_())try{await n_()}catch(t){return Kt.warn(on.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kt.warn(on.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E1(t,e,n,r,s,i,o){var l;const c=m1(t);c.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Kt.error(v)),e.push(c);const u=w1().then(v=>{if(v)return r.getId()}),[h,p]=await Promise.all([c,u]);u1(i)||s1(i,h.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[XI]="firebase",g.update=!0,p!=null&&(g[YI]=p),s("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.app=e}_delete(){return delete Ni[this.app.options.appId],Promise.resolve()}}let Ni={},Mf=[];const Ff={};let wc="dataLayer",I1="gtag",Uf,x_,Bf=!1;function A1(){const t=[];if(e_()&&t.push("This is a browser extension environment."),zE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=on.create("invalid-analytics-context",{errorInfo:e});Kt.warn(n.message)}}function S1(t,e,n){A1();const r=t.options.appId;if(!r)throw on.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw on.create("no-api-key");if(Ni[r]!=null)throw on.create("already-exists",{id:r});if(!Bf){i1(wc);const{wrappedGtag:i,gtagCore:o}=c1(Ni,Mf,Ff,wc,I1);x_=i,Uf=o,Bf=!0}return Ni[r]=E1(t,Mf,Ff,e,Uf,wc,n),new T1(t)}function C1(t,e,n,r){t=pt(t),b1(x_,Ni[t.app.options.appId],e,n,r).catch(s=>Kt.error(s))}const $f="@firebase/analytics",jf="0.10.10";function P1(){xn(new gn(Lf,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return S1(r,s,n)},"PUBLIC")),xn(new gn("analytics-internal",t,"PRIVATE")),sn($f,jf),sn($f,jf,"esm2017");function t(e){try{const n=e.getProvider(Lf).getImmediate();return{logEvent:(r,s,i)=>C1(n,r,s,i)}}catch(n){throw on.create("interop-component-reg-failed",{reason:n})}}}P1();const R1={apiKey:"AIzaSyAKbSY7jKqZTBE3mDcoEQ-pXWG2kfUhPis",authDomain:"cella-test-bachelor-webshop.firebaseapp.com",projectId:"cella-test-bachelor-webshop",storageBucket:"cella-test-bachelor-webshop.firebasestorage.app",messagingSenderId:"612340253229",appId:"1:612340253229:web:80409e12f8eb7807352ea4",measurementId:"G-X1W52SYSJY"},gl=o_(R1);function ed(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=D_,O_=new hs("auth","Firebase",D_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new hl("@firebase/auth");function x1(t,...e){Va.logLevel<=Ie.WARN&&Va.warn(`Auth (${Xs}): ${t}`,...e)}function ca(t,...e){Va.logLevel<=Ie.ERROR&&Va.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw td(t,...e)}function Sn(t,...e){return td(t,...e)}function V_(t,e,n){const r=Object.assign(Object.assign({},k1()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return V_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O_.create(t,...e)}function fe(t,e,...n){if(!t)throw td(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function Yn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function D1(){return qf()==="http:"||qf()==="https:"}function qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D1()||e_()||"connection"in navigator)?navigator.onLine:!0}function V1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=BE()||qE()}get(){return O1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new yo(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return L_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jE()||(u.referrerPolicy="no-referrer"),N_.fetch()(M_(t,t.config.apiHost,n,l),u)})}async function L_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N1),e);try{const s=new F1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qo(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw V_(t,h,u);mn(t,h)}}catch(s){if(s instanceof vn)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function M_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?nd(t.config,s):`${t.config.apiScheme}://${s}`}function M1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),L1.get())})}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}function Hf(t){return t!==void 0&&t.enterprise!==void 0}class U1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return M1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B1(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function F_(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j1(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=rd(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Li(Ec(s.auth_time)),issuedAtTime:Li(Ec(s.iat)),expirationTime:Li(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jm(n);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(t){const e=rd(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&q1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function q1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Yi(t,F_(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?U_(i.providerUserInfo):[],l=z1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function K1(t){const e=pt(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function U_(t){return t.map(e=>{var{providerId:n}=e,r=ed(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e){const n=await L_(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=M_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",N_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G1(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await W1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j1(this,e)}reload(){return K1(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Yi(this,$1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:H,emailVerified:W,isAnonymous:re,providerData:le,stsTokenManager:S}=n;fe(H&&S,e,"internal-error");const b=Ms.fromJSON(this.name,S);fe(typeof H=="string",e,"internal-error"),cr(p,e.name),cr(g,e.name),fe(typeof W=="boolean",e,"internal-error"),fe(typeof re=="boolean",e,"internal-error"),cr(v,e.name),cr(P,e.name),cr(k,e.name),cr(O,e.name),cr(F,e.name),cr(j,e.name);const y=new Kn({uid:H,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:re,photoURL:P,phoneNumber:v,tenantId:k,stsTokenManager:b,createdAt:F,lastLoginAt:j});return le&&Array.isArray(le)&&(y.providerData=le.map(I=>Object.assign({},I))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?U_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const c=new Kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B_.type="NONE";const Wf=B_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=ua("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(zn(Wf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(Wf);const o=ua(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const p=Kn._fromJSON(e,h);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(W_(e))return"Webos";if(j_(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $_(t=Ot()){return/firefox\//i.test(t)}function j_(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(t=Ot()){return/crios\//i.test(t)}function H_(t=Ot()){return/iemobile/i.test(t)}function K_(t=Ot()){return/android/i.test(t)}function z_(t=Ot()){return/blackberry/i.test(t)}function W_(t=Ot()){return/webos/i.test(t)}function sd(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Q1(t=Ot()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J1(){return HE()&&document.documentMode===10}function G_(t=Ot()){return sd(t)||K_(t)||W_(t)||z_(t)||/windows phone/i.test(t)||H_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e=[]){let n;switch(t){case"Browser":n=Gf(Ot());break;case"Worker":n=`${Gf(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=6;class eA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Z1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new Y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await F_(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Wn(this));const n=e?pt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X1(this),n=new eA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await G1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fs(t){return pt(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=YE(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nA(t){ml=t}function J_(t){return ml.loadJS(t)}function rA(){return ml.recaptchaEnterpriseScript}function sA(){return ml.gapiScript}function iA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oA{constructor(){this.enterprise=new aA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class aA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const lA="recaptcha-enterprise",Y_="NO_RECAPTCHA";class cA{constructor(e){this.type=lA,this.auth=fs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{B1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new U1(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Hf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Y_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Hf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rA();c.length!==0&&(c+=l),J_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Jf(t,e,n,r=!1,s=!1){const i=new cA(t);let o;if(s)o=Y_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function eu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e){const n=_o(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hA(t,e,n){const r=fs(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=X_(e),{host:o,port:l}=fA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),pA()}function X_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fA(t){const e=X_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yf(o)}}}function Yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function gA(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function _A(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function yA(t,e){return _A(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function bA(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends id{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,n,"signInWithPassword",mA);case"emailLink":return vA(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,r,"signUpPassword",gA);case"emailLink":return bA(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="http://localhost";class ls extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ed(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TA(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,r=Ti(Ii(t)).deep_link_id;return(r?Ti(Ii(r)).link:null)||r||n||e||t}class od{constructor(e){var n,r,s,i,o,l;const c=Ti(Ii(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,p=EA((s=c.mode)!==null&&s!==void 0?s:null);fe(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TA(e);try{return new od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=od.parseLink(n);return fe(r,"argument-error"),Xi._fromEmailAndCode(e,r.code,r.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends bo{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends bo{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends bo{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return vo(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=Xf(r);return new cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xf(r);return new cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function ey(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function AA(t,e,n=!1){const r=await Yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Yi(t,ey(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=rd(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t,e,n=!1){if(In(t.app))return Promise.reject(Wn(t));const r="signIn",s=await ey(t,r,e),i=await cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CA(t,e){return ty(fs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t){const e=fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PA(t,e,n){if(In(t.app))return Promise.reject(Wn(t));const r=fs(t),o=await eu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ny(t),c}),l=await cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RA(t,e,n){return In(t.app)?Promise.reject(Wn(t)):CA(pt(t),Zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ny(t),r})}async function kA(t,e){const n=pt(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await yA(n.auth,s);i!==t.email&&await t.reload()}function xA(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function DA(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function OA(t){return pt(t).signOut()}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1e3,NA=10;class sy extends ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);J1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const LA=sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const oy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await MA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=ad("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function UA(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function BA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $A(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jA(){return ay()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebaseLocalStorageDb",qA=1,Fa="firebaseLocalStorage",cy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yl(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function HA(){const t=indexedDB.deleteDatabase(ly);return new wo(t).toPromise()}function tu(){const t=indexedDB.open(ly,qA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:cy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await HA(),e(await tu()))})})}async function Zf(t,e,n){const r=yl(t,!0).put({[cy]:e,value:n});return new wo(r).toPromise()}async function KA(t,e){const n=yl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function ep(t,e){const n=yl(t,!0).delete(e);return new wo(n).toPromise()}const zA=800,WA=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BA(),!this.activeServiceWorker)return;this.sender=new FA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Zf(e,Ma,"1"),await ep(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ep(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yl(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const GA=uy;new yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e){return e?zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JA(t){return ty(t.auth,new ld(t),t.bypassAuthState)}function YA(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),SA(n,new ld(t),t.bypassAuthState)}async function XA(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),AA(n,new ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JA;case"linkViaPopup":case"linkViaRedirect":return XA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:mn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new yo(2e3,1e4);class xs extends dy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZA.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="pendingRedirect",da=new Map;class tS extends dy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await nS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nS(t,e){const n=iS(e),r=sS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rS(t,e){da.set(t._key(),e)}function sS(t){return zn(t._redirectPersistence)}function iS(t){return ua(eS,t.config.apiKey,t.name)}async function oS(t,e,n=!1){if(In(t.app))return Promise.reject(Wn(t));const r=fs(t),s=QA(r,e),o=await new tS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=10*60*1e3;class lS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aS&&this.cachedEventUids.clear(),this.cachedEventUids.has(tp(e))}saveEventToCache(e){this.cachedEventUids.add(tp(e)),this.lastProcessedEventTime=Date.now()}}function tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hS=/^https?/;async function fS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uS(t);for(const n of e)try{if(pS(n))return}catch{}mn(t,"unauthorized-domain")}function pS(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hS.test(n))return!1;if(dS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new yo(3e4,6e4);function np(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mS(t){return new Promise((e,n)=>{var r,s,i;function o(){np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{np(),n(Sn(t,"network-request-failed"))},timeout:gS.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=iA("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},J_(`${sA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ha=null,e})}let ha=null;function _S(t){return ha=ha||mS(t),ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new yo(5e3,15e3),vS="__/auth/iframe",bS="emulator/auth/iframe",wS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nd(e,bS):`https://${t.config.authDomain}/${vS}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},s=ES.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mo(r).slice(1)}`}async function IS(t){const e=await _S(t),n=Cn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},yS.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SS=500,CS=600,PS="_blank",RS="http://localhost";class rp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kS(t,e,n,r=SS,s=CS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},AS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ot().toLowerCase();n&&(l=q_(u)?PS:n),$_(u)&&(e=e||RS,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(Q1(u)&&l!=="_self")return xS(e||"",l),new rp(null);const p=window.open(e||"",l,h);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new rp(p)}function xS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="__/auth/handler",OS="emulator/auth/handler",VS=encodeURIComponent("fac");async function sp(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:s};if(e instanceof Z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof bo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${VS}=${encodeURIComponent(c)}`:"";return`${NS(t)}?${mo(l).slice(1)}${u}`}function NS({config:t}){return t.emulator?nd(t,OS):`https://${t.authDomain}/${DS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class LS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=oS,this._overrideRedirectResult=rS}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sp(e,n,r,Xc(),s);return kS(e,o,ad())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await sp(e,n,r,Xc(),s);return UA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IS(e),r=new lS(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G_()||j_()||sd()}}const MS=LS;var ip="@firebase/auth",op="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BS(t){xn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(t)},u=new tA(r,s,i,c);return dA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new gn("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new FS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(ip,op,US(t)),sn(ip,op,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=5*60,jS=Zm("authIdTokenMaxAge")||$S;let ap=null;const qS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jS)return;const s=n==null?void 0:n.token;ap!==s&&(ap=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HS(t=a_()){const e=_o(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uA(t,{popupRedirectResolver:MS,persistence:[GA,LA,oy]}),r=Zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qS(i.toString());DA(n,o,()=>o(n.currentUser)),xA(n,l=>o(l))}}const s=Ym("auth");return s&&hA(n,`http://${s}`),n}function KS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BS("Browser");var lp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,fy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,b){function y(){}y.prototype=b.prototype,S.D=b.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(I,C,A){for(var E=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)E[Pe-2]=arguments[Pe];return b.prototype[C].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,b,y){y||(y=0);var I=Array(16);if(typeof b=="string")for(var C=0;16>C;++C)I[C]=b.charCodeAt(y++)|b.charCodeAt(y++)<<8|b.charCodeAt(y++)<<16|b.charCodeAt(y++)<<24;else for(C=0;16>C;++C)I[C]=b[y++]|b[y++]<<8|b[y++]<<16|b[y++]<<24;b=S.g[0],y=S.g[1],C=S.g[2];var A=S.g[3],E=b+(A^y&(C^A))+I[0]+3614090360&4294967295;b=y+(E<<7&4294967295|E>>>25),E=A+(C^b&(y^C))+I[1]+3905402710&4294967295,A=b+(E<<12&4294967295|E>>>20),E=C+(y^A&(b^y))+I[2]+606105819&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(b^C&(A^b))+I[3]+3250441966&4294967295,y=C+(E<<22&4294967295|E>>>10),E=b+(A^y&(C^A))+I[4]+4118548399&4294967295,b=y+(E<<7&4294967295|E>>>25),E=A+(C^b&(y^C))+I[5]+1200080426&4294967295,A=b+(E<<12&4294967295|E>>>20),E=C+(y^A&(b^y))+I[6]+2821735955&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(b^C&(A^b))+I[7]+4249261313&4294967295,y=C+(E<<22&4294967295|E>>>10),E=b+(A^y&(C^A))+I[8]+1770035416&4294967295,b=y+(E<<7&4294967295|E>>>25),E=A+(C^b&(y^C))+I[9]+2336552879&4294967295,A=b+(E<<12&4294967295|E>>>20),E=C+(y^A&(b^y))+I[10]+4294925233&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(b^C&(A^b))+I[11]+2304563134&4294967295,y=C+(E<<22&4294967295|E>>>10),E=b+(A^y&(C^A))+I[12]+1804603682&4294967295,b=y+(E<<7&4294967295|E>>>25),E=A+(C^b&(y^C))+I[13]+4254626195&4294967295,A=b+(E<<12&4294967295|E>>>20),E=C+(y^A&(b^y))+I[14]+2792965006&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(b^C&(A^b))+I[15]+1236535329&4294967295,y=C+(E<<22&4294967295|E>>>10),E=b+(C^A&(y^C))+I[1]+4129170786&4294967295,b=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(b^y))+I[6]+3225465664&4294967295,A=b+(E<<9&4294967295|E>>>23),E=C+(b^y&(A^b))+I[11]+643717713&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^b&(C^A))+I[0]+3921069994&4294967295,y=C+(E<<20&4294967295|E>>>12),E=b+(C^A&(y^C))+I[5]+3593408605&4294967295,b=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(b^y))+I[10]+38016083&4294967295,A=b+(E<<9&4294967295|E>>>23),E=C+(b^y&(A^b))+I[15]+3634488961&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^b&(C^A))+I[4]+3889429448&4294967295,y=C+(E<<20&4294967295|E>>>12),E=b+(C^A&(y^C))+I[9]+568446438&4294967295,b=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(b^y))+I[14]+3275163606&4294967295,A=b+(E<<9&4294967295|E>>>23),E=C+(b^y&(A^b))+I[3]+4107603335&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^b&(C^A))+I[8]+1163531501&4294967295,y=C+(E<<20&4294967295|E>>>12),E=b+(C^A&(y^C))+I[13]+2850285829&4294967295,b=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(b^y))+I[2]+4243563512&4294967295,A=b+(E<<9&4294967295|E>>>23),E=C+(b^y&(A^b))+I[7]+1735328473&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^b&(C^A))+I[12]+2368359562&4294967295,y=C+(E<<20&4294967295|E>>>12),E=b+(y^C^A)+I[5]+4294588738&4294967295,b=y+(E<<4&4294967295|E>>>28),E=A+(b^y^C)+I[8]+2272392833&4294967295,A=b+(E<<11&4294967295|E>>>21),E=C+(A^b^y)+I[11]+1839030562&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^b)+I[14]+4259657740&4294967295,y=C+(E<<23&4294967295|E>>>9),E=b+(y^C^A)+I[1]+2763975236&4294967295,b=y+(E<<4&4294967295|E>>>28),E=A+(b^y^C)+I[4]+1272893353&4294967295,A=b+(E<<11&4294967295|E>>>21),E=C+(A^b^y)+I[7]+4139469664&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^b)+I[10]+3200236656&4294967295,y=C+(E<<23&4294967295|E>>>9),E=b+(y^C^A)+I[13]+681279174&4294967295,b=y+(E<<4&4294967295|E>>>28),E=A+(b^y^C)+I[0]+3936430074&4294967295,A=b+(E<<11&4294967295|E>>>21),E=C+(A^b^y)+I[3]+3572445317&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^b)+I[6]+76029189&4294967295,y=C+(E<<23&4294967295|E>>>9),E=b+(y^C^A)+I[9]+3654602809&4294967295,b=y+(E<<4&4294967295|E>>>28),E=A+(b^y^C)+I[12]+3873151461&4294967295,A=b+(E<<11&4294967295|E>>>21),E=C+(A^b^y)+I[15]+530742520&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^b)+I[2]+3299628645&4294967295,y=C+(E<<23&4294967295|E>>>9),E=b+(C^(y|~A))+I[0]+4096336452&4294967295,b=y+(E<<6&4294967295|E>>>26),E=A+(y^(b|~C))+I[7]+1126891415&4294967295,A=b+(E<<10&4294967295|E>>>22),E=C+(b^(A|~y))+I[14]+2878612391&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~b))+I[5]+4237533241&4294967295,y=C+(E<<21&4294967295|E>>>11),E=b+(C^(y|~A))+I[12]+1700485571&4294967295,b=y+(E<<6&4294967295|E>>>26),E=A+(y^(b|~C))+I[3]+2399980690&4294967295,A=b+(E<<10&4294967295|E>>>22),E=C+(b^(A|~y))+I[10]+4293915773&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~b))+I[1]+2240044497&4294967295,y=C+(E<<21&4294967295|E>>>11),E=b+(C^(y|~A))+I[8]+1873313359&4294967295,b=y+(E<<6&4294967295|E>>>26),E=A+(y^(b|~C))+I[15]+4264355552&4294967295,A=b+(E<<10&4294967295|E>>>22),E=C+(b^(A|~y))+I[6]+2734768916&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~b))+I[13]+1309151649&4294967295,y=C+(E<<21&4294967295|E>>>11),E=b+(C^(y|~A))+I[4]+4149444226&4294967295,b=y+(E<<6&4294967295|E>>>26),E=A+(y^(b|~C))+I[11]+3174756917&4294967295,A=b+(E<<10&4294967295|E>>>22),E=C+(b^(A|~y))+I[2]+718787259&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~b))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+b&4294967295,S.g[1]=S.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+C&4294967295,S.g[3]=S.g[3]+A&4294967295}r.prototype.u=function(S,b){b===void 0&&(b=S.length);for(var y=b-this.blockSize,I=this.B,C=this.h,A=0;A<b;){if(C==0)for(;A<=y;)s(this,S,A),A+=this.blockSize;if(typeof S=="string"){for(;A<b;)if(I[C++]=S.charCodeAt(A++),C==this.blockSize){s(this,I),C=0;break}}else for(;A<b;)if(I[C++]=S[A++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=b},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var b=1;b<S.length-8;++b)S[b]=0;var y=8*this.o;for(b=S.length-8;b<S.length;++b)S[b]=y&255,y/=256;for(this.u(S),S=Array(16),b=y=0;4>b;++b)for(var I=0;32>I;I+=8)S[y++]=this.g[b]>>>I&255;return S};function i(S,b){var y=l;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=b(S)}function o(S,b){this.h=b;for(var y=[],I=!0,C=S.length-1;0<=C;C--){var A=S[C]|0;I&&A==b||(y[C]=A,I=!1)}this.g=y}var l={};function c(S){return-128<=S&&128>S?i(S,function(b){return new o([b|0],0>b?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return O(u(-S));for(var b=[],y=1,I=0;S>=y;I++)b[I]=S/y|0,y*=4294967296;return new o(b,0)}function h(S,b){if(S.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S.charAt(0)=="-")return O(h(S.substring(1),b));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(b,8)),I=p,C=0;C<S.length;C+=8){var A=Math.min(8,S.length-C),E=parseInt(S.substring(C,C+A),b);8>A?(A=u(Math.pow(b,A)),I=I.j(A).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var S=0,b=1,y=0;y<this.g.length;y++){var I=this.i(y);S+=(0<=I?I:4294967296+I)*b,b*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(k(this))return"-"+O(this).toString(S);for(var b=u(Math.pow(S,6)),y=this,I="";;){var C=W(y,b).g;y=F(y,C.j(b));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=C,P(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var b=0;b<S.g.length;b++)if(S.g[b]!=0)return!1;return!0}function k(S){return S.h==-1}t.l=function(S){return S=F(this,S),k(S)?-1:P(S)?0:1};function O(S){for(var b=S.g.length,y=[],I=0;I<b;I++)y[I]=~S.g[I];return new o(y,~S.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(S){for(var b=Math.max(this.g.length,S.g.length),y=[],I=0,C=0;C<=b;C++){var A=I+(this.i(C)&65535)+(S.i(C)&65535),E=(A>>>16)+(this.i(C)>>>16)+(S.i(C)>>>16);I=E>>>16,A&=65535,E&=65535,y[C]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(S,b){return S.add(O(b))}t.j=function(S){if(P(this)||P(S))return p;if(k(this))return k(S)?O(this).j(O(S)):O(O(this).j(S));if(k(S))return O(this.j(O(S)));if(0>this.l(v)&&0>S.l(v))return u(this.m()*S.m());for(var b=this.g.length+S.g.length,y=[],I=0;I<2*b;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<S.g.length;C++){var A=this.i(I)>>>16,E=this.i(I)&65535,Pe=S.i(C)>>>16,Qe=S.i(C)&65535;y[2*I+2*C]+=E*Qe,j(y,2*I+2*C),y[2*I+2*C+1]+=A*Qe,j(y,2*I+2*C+1),y[2*I+2*C+1]+=E*Pe,j(y,2*I+2*C+1),y[2*I+2*C+2]+=A*Pe,j(y,2*I+2*C+2)}for(I=0;I<b;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=b;I<2*b;I++)y[I]=0;return new o(y,0)};function j(S,b){for(;(S[b]&65535)!=S[b];)S[b+1]+=S[b]>>>16,S[b]&=65535,b++}function H(S,b){this.g=S,this.h=b}function W(S,b){if(P(b))throw Error("division by zero");if(P(S))return new H(p,p);if(k(S))return b=W(O(S),b),new H(O(b.g),O(b.h));if(k(b))return b=W(S,O(b)),new H(O(b.g),b.h);if(30<S.g.length){if(k(S)||k(b))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=b;0>=I.l(S);)y=re(y),I=re(I);var C=le(y,1),A=le(I,1);for(I=le(I,2),y=le(y,2);!P(I);){var E=A.add(I);0>=E.l(S)&&(C=C.add(y),A=E),I=le(I,1),y=le(y,1)}return b=F(S,C.j(b)),new H(C,b)}for(C=p;0<=S.l(b);){for(y=Math.max(1,Math.floor(S.m()/b.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),E=A.j(b);k(E)||0<E.l(S);)y-=I,A=u(y),E=A.j(b);P(A)&&(A=g),C=C.add(A),S=F(S,E)}return new H(C,S)}t.A=function(S){return W(this,S).h},t.and=function(S){for(var b=Math.max(this.g.length,S.g.length),y=[],I=0;I<b;I++)y[I]=this.i(I)&S.i(I);return new o(y,this.h&S.h)},t.or=function(S){for(var b=Math.max(this.g.length,S.g.length),y=[],I=0;I<b;I++)y[I]=this.i(I)|S.i(I);return new o(y,this.h|S.h)},t.xor=function(S){for(var b=Math.max(this.g.length,S.g.length),y=[],I=0;I<b;I++)y[I]=this.i(I)^S.i(I);return new o(y,this.h^S.h)};function re(S){for(var b=S.g.length+1,y=[],I=0;I<b;I++)y[I]=S.i(I)<<1|S.i(I-1)>>>31;return new o(y,S.h)}function le(S,b){var y=b>>5;b%=32;for(var I=S.g.length-y,C=[],A=0;A<I;A++)C[A]=0<b?S.i(A+y)>>>b|S.i(A+y+1)<<32-b:S.i(A+y);return new o(C,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,rs=o}).apply(typeof lp<"u"?lp:typeof self<"u"?self:typeof window<"u"?window:{});var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var py,Ai,gy,fa,nu,my,_y,yy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jo=="object"&&Jo];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var R=a[_];if(!(R in f))break e;f=f[R]}a=a[a.length-1],_=f[a],d=d(_),d!=_&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,_=!1,R={next:function(){if(!_&&f<a.length){var D=f++;return{value:d(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,_),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function v(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function P(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,R,D){for(var Y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Y[Ue-2]=arguments[Ue];return d.prototype[R].apply(_,Y)}}function k(a){const d=a.length;if(0<d){const f=Array(d);for(let _=0;_<d;_++)f[_]=a[_];return f}return[]}function O(a,d){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const R=a.length||0,D=_.length||0;a.length=R+D;for(let Y=0;Y<D;Y++)a[R+Y]=_[Y]}else a.push(_)}}class F{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function j(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var re=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function le(a,d,f){for(const _ in a)d.call(f,a[_],_,a)}function S(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function b(a){const d={};for(const f in a)d[f]=a[f];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let f,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(f in _)a[f]=_[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function C(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=gt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Pe{constructor(){this.h=this.g=null}add(d,f){const _=Qe.get();_.set(d,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Qe=new F(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,ve=!1,gt=new Pe,Vt=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(jt)}};var jt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){A(f)}var d=Qe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}ve=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Wt(a,d){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(re){e:{try{W(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Wt.aa.h.call(this)}}P(Wt,Ke);var Tt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),q=0;function G(a,d,f,_,R){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!_,this.ha=R,this.key=++q,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,d,f,_,R){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var Y=w(a,d,_,R);return-1<Y?(d=a[Y],f||(d.fa=!1)):(d=new G(d,this.src,D,!!_,R),d.fa=f,a.push(d)),d};function Ne(a,d){var f=d.type;if(f in a.g){var _=a.g[f],R=Array.prototype.indexOf.call(_,d,void 0),D;(D=0<=R)&&Array.prototype.splice.call(_,R,1),D&&(ee(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,d,f,_){for(var R=0;R<a.length;++R){var D=a[R];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==_)return R}return-1}var T="closure_lm_"+(1e6*Math.random()|0),x={};function B(a,d,f,_,R){if(Array.isArray(d)){for(var D=0;D<d.length;D++)B(a,d[D],f,_,R);return null}return f=ie(f),a&&a[N]?a.K(d,f,u(_)?!!_.capture:!!_,R):L(a,d,f,!1,_,R)}function L(a,d,f,_,R,D){if(!d)throw Error("Invalid event type");var Y=u(R)?!!R.capture:!!R,Ue=ae(a);if(Ue||(a[T]=Ue=new Te(a)),f=Ue.add(d,f,_,Y,D),f.proxy)return f;if(_=K(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)bn||(R=Y),R===void 0&&(R=!1),a.addEventListener(d.toString(),_,R);else if(a.attachEvent)a.attachEvent(Q(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return d.call(a.src,a.listener,f)}const d=z;return a}function X(a,d,f,_,R){if(Array.isArray(d))for(var D=0;D<d.length;D++)X(a,d[D],f,_,R);else _=u(_)?!!_.capture:!!_,f=ie(f),a&&a[N]?(a=a.i,d=String(d).toString(),d in a.g&&(D=a.g[d],f=w(D,f,_,R),-1<f&&(ee(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[d],a.h--)))):a&&(a=ae(a))&&(d=a.g[d.toString()],a=-1,d&&(a=w(d,f,_,R)),(f=-1<a?d[a]:null)&&J(f))}function J(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[N])Ne(d.i,a);else{var f=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(f,_,a.capture):d.detachEvent?d.detachEvent(Q(f),_):d.addListener&&d.removeListener&&d.removeListener(_),(f=ae(d))?(Ne(f,a),f.h==0&&(f.src=null,d[T]=null)):ee(a)}}}function Q(a){return a in x?x[a]:x[a]="on"+a}function z(a,d){if(a.da)a=!0;else{d=new Wt(d,this);var f=a.listener,_=a.ha||a.src;a.fa&&J(a),a=f.call(_,d)}return a}function ae(a){return a=a[T],a instanceof Te?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(d){return a.handleEvent(d)}),a[Z])}function ne(){qe.call(this),this.i=new Te(this),this.M=this,this.F=null}P(ne,qe),ne.prototype[N]=!0,ne.prototype.removeEventListener=function(a,d,f,_){X(this,a,d,f,_)};function he(a,d){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new Ke(d,a);else if(d instanceof Ke)d.target=d.target||a;else{var R=d;d=new Ke(_,a),I(d,R)}if(R=!0,f)for(var D=f.length-1;0<=D;D--){var Y=d.g=f[D];R=Oe(Y,_,!0,d)&&R}if(Y=d.g=a,R=Oe(Y,_,!0,d)&&R,R=Oe(Y,_,!1,d)&&R,f)for(D=0;D<f.length;D++)Y=d.g=f[D],R=Oe(Y,_,!1,d)&&R}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],_=0;_<f.length;_++)ee(f[_]);delete a.g[d],a.h--}}this.F=null},ne.prototype.K=function(a,d,f,_){return this.i.add(String(a),d,!1,f,_)},ne.prototype.L=function(a,d,f,_){return this.i.add(String(a),d,!0,f,_)};function Oe(a,d,f,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,D=0;D<d.length;++D){var Y=d[D];if(Y&&!Y.da&&Y.capture==f){var Ue=Y.listener,_t=Y.ha||Y.src;Y.fa&&Ne(a.i,Y),R=Ue.call(_t,_)!==!1&&R}}return R&&!_.defaultPrevented}function ke(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function It(a){a.g=ke(()=>{a.g=null,a.i&&(a.i=!1,It(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class dt extends qe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){qe.call(this),this.h=a,this.g={}}P(mt,qe);var At=[];function sr(a){le(a.g,function(d,f){this.g.hasOwnProperty(f)&&J(d)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),sr(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _s=l.JSON.stringify,Nt=l.JSON.parse,tn=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ys(){}ys.prototype.h=null;function Kd(a){return a.h||(a.h=a.i())}function zd(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jl(){Ke.call(this,"d")}P(jl,Ke);function ql(){Ke.call(this,"c")}P(ql,Ke);var Ur={},Wd=null;function ko(){return Wd=Wd||new ne}Ur.La="serverreachability";function Gd(a){Ke.call(this,Ur.La,a)}P(Gd,Ke);function oi(a){const d=ko();he(d,new Gd(d))}Ur.STAT_EVENT="statevent";function Qd(a,d){Ke.call(this,Ur.STAT_EVENT,a),this.stat=d}P(Qd,Ke);function Lt(a){const d=ko();he(d,new Qd(d,a))}Ur.Ma="timingevent";function Jd(a,d){Ke.call(this,Ur.Ma,a),this.size=d}P(Jd,Ke);function ai(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function wb(a,d,f,_,R,D){a.info(function(){if(a.g)if(D)for(var Y="",Ue=D.split("&"),_t=0;_t<Ue.length;_t++){var xe=Ue[_t].split("=");if(1<xe.length){var St=xe[0];xe=xe[1];var Ct=St.split("_");Y=2<=Ct.length&&Ct[1]=="type"?Y+(St+"="+xe+"&"):Y+(St+"=redacted&")}}else Y=null;else Y=D;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+d+`
`+f+`
`+Y})}function Eb(a,d,f,_,R,D,Y){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+d+`
`+f+`
`+D+" "+Y})}function vs(a,d,f,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ib(a,f)+(_?" "+_:"")})}function Tb(a,d){a.info(function(){return"TIMEOUT: "+d})}li.prototype.info=function(){};function Ib(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var R=_[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var Y=1;Y<R.length;Y++)R[Y]=""}}}}return _s(f)}catch{return d}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hl;function Do(){}P(Do,ys),Do.prototype.g=function(){return new XMLHttpRequest},Do.prototype.i=function(){return{}},Hl=new Do;function ir(a,d,f,_){this.j=a,this.i=d,this.l=f,this.R=_||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xd}function Xd(){this.i=null,this.g="",this.h=!1}var Zd={},Kl={};function zl(a,d,f){a.L=1,a.v=Lo(Nn(d)),a.m=f,a.P=!0,eh(a,null)}function eh(a,d){a.F=Date.now(),Oo(a),a.A=Nn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),ph(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Xd,a.g=Dh(a.j,f?d:null,!a.m),0<a.O&&(a.M=new dt(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,_=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(At[0]=R.toString()),R=At);for(var D=0;D<R.length;D++){var Y=B(f,R[D],_||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),oi(),wb(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ln(a)==3?d.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=Ln(this.g);var d=this.g.Ba();const Es=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||wh(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=Es?oi(3):oi(2)),Wl(this);var f=this.g.Z();this.X=f;t:if(th(this)){var _=wh(this.g);a="";var R=_.length,D=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),ci(this);var Y="";break t}this.h.i=new l.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(D&&d==R-1)});_.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=f==200,Eb(this.i,this.u,this.A,this.l,this.R,Ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,_t=this.g;if((Ue=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ue)){var xe=Ue;break t}}xe=null}if(f=xe)vs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gl(this,f);else{this.o=!1,this.s=3,Lt(12),Br(this),ci(this);break e}}if(this.P){f=!0;let cn;for(;!this.J&&this.C<Y.length;)if(cn=Ab(this,Y),cn==Kl){Ct==4&&(this.s=4,Lt(14),f=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Zd){this.s=4,Lt(15),vs(this.i,this.l,Y,"[Invalid Chunk]"),f=!1;break}else vs(this.i,this.l,cn,null),Gl(this,cn);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||Y.length!=0||this.h.h||(this.s=1,Lt(16),f=!1),this.o=this.o&&f,!f)vs(this.i,this.l,Y,"[Invalid Chunked Response]"),Br(this),ci(this);else if(0<Y.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),ec(St),St.M=!0,Lt(11))}}else vs(this.i,this.l,Y,null),Gl(this,Y);Ct==4&&Br(this),this.o&&!this.J&&(Ct==4?Ph(this.j,this):(this.o=!1,Oo(this)))}else jb(this.g),f==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Br(this),ci(this)}}}catch{}finally{}};function th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ab(a,d){var f=a.C,_=d.indexOf(`
`,f);return _==-1?Kl:(f=Number(d.substring(f,_)),isNaN(f)?Zd:(_+=1,_+f>d.length?Kl:(d=d.slice(_,_+f),a.C=_+f,d)))}ir.prototype.cancel=function(){this.J=!0,Br(this)};function Oo(a){a.S=Date.now()+a.I,nh(a,a.I)}function nh(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ai(g(a.ba,a),d)}function Wl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Tb(this.i,this.A),this.L!=2&&(oi(),Lt(17)),Br(this),this.s=2,ci(this)):nh(this,this.S-a)};function ci(a){a.j.G==0||a.J||Ph(a.j,a)}function Br(a){Wl(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,sr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Gl(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Ql(f.h,a))){if(!a.K&&Ql(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)jo(f),Bo(f);else break e;Zl(f),Lt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ai(g(f.Za,f),6e3));if(1>=ih(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&jo(f),!j(d))for(R=f.Da.g.parse(d),d=0;d<R.length;d++){let xe=R[d];if(f.T=xe[0],xe=xe[1],f.G==2)if(xe[0]=="c"){f.K=xe[1],f.ia=xe[2];const St=xe[3];St!=null&&(f.la=St,f.j.info("VER="+f.la));const Ct=xe[4];Ct!=null&&(f.Aa=Ct,f.j.info("SVER="+f.Aa));const Es=xe[5];Es!=null&&typeof Es=="number"&&0<Es&&(_=1.5*Es,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const cn=a.g;if(cn){const Ho=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var D=_.h;D.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Jl(D,D.h),D.h=null))}if(_.D){const tc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(_.ya=tc,ze(_.I,_.D,tc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var Y=a;if(_.qa=xh(_,_.J?_.ia:null,_.W),Y.K){oh(_.h,Y);var Ue=Y,_t=_.L;_t&&(Ue.I=_t),Ue.B&&(Wl(Ue),Oo(Ue)),_.g=Y}else Sh(_);0<f.i.length&&$o(f)}else xe[0]!="stop"&&xe[0]!="close"||jr(f,7);else f.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?jr(f,7):Xl(f):xe[0]!="noop"&&f.l&&f.l.ta(xe),f.v=0)}}oi(4)}catch{}}var Sb=class{constructor(a,d){this.g=a,this.map=d}};function rh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function Ql(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Jl(a,d){a.g?a.g.add(d):a.h=d}function oh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return k(a.i)}function Cb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],f=a.length,_=0;_<f;_++)d.push(a[_]);return d}d=[],f=0;for(_ in a)d[f++]=a[_];return d}function Pb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const _ in a)d[f++]=_;return d}}}function lh(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=Pb(a),_=Cb(a),R=_.length,D=0;D<R;D++)d.call(void 0,_[D],f&&f[D],a)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rb(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),R=null;if(0<=_){var D=a[f].substring(0,_);R=a[f].substring(_+1)}else D=a[f];d(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Vo(this,a.j),this.o=a.o,this.g=a.g,No(this,a.s),this.l=a.l;var d=a.i,f=new hi;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),uh(this,f),this.m=a.m}else a&&(d=String(a).match(ch))?(this.h=!1,Vo(this,d[1]||"",!0),this.o=ui(d[2]||""),this.g=ui(d[3]||"",!0),No(this,d[4]),this.l=ui(d[5]||"",!0),uh(this,d[6]||"",!0),this.m=ui(d[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}$r.prototype.toString=function(){var a=[],d=this.j;d&&a.push(di(d,dh,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(di(d,dh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(di(f,f.charAt(0)=="/"?Db:xb,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",di(f,Vb)),a.join("")};function Nn(a){return new $r(a)}function Vo(a,d,f){a.j=f?ui(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function uh(a,d,f){d instanceof hi?(a.i=d,Nb(a.i,a.h)):(f||(d=di(d,Ob)),a.i=new hi(d,a.h))}function ze(a,d,f){a.i.set(d,f)}function Lo(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ui(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function di(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,kb),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dh=/[#\/\?@]/g,xb=/[#\?:]/g,Db=/[#\?]/g,Ob=/[#\?@]/g,Vb=/#/g;function hi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&Rb(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=hi.prototype,t.add=function(a,d){or(this),this.i=null,a=bs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function hh(a,d){or(a),d=bs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function fh(a,d){return or(a),d=bs(a,d),a.g.has(d)}t.forEach=function(a,d){or(this),this.g.forEach(function(f,_){f.forEach(function(R){a.call(d,R,_,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let _=0;_<d.length;_++){const R=a[_];for(let D=0;D<R.length;D++)f.push(d[_])}return f},t.V=function(a){or(this);let d=[];if(typeof a=="string")fh(this,a)&&(d=d.concat(this.g.get(bs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return or(this),this.i=null,a=bs(this,a),fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ph(a,d,f){hh(a,d),0<f.length&&(a.i=null,a.g.set(bs(a,d),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var _=d[f];const D=encodeURIComponent(String(_)),Y=this.V(_);for(_=0;_<Y.length;_++){var R=D;Y[_]!==""&&(R+="="+encodeURIComponent(String(Y[_]))),a.push(R)}}return this.i=a.join("&")};function bs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Nb(a,d){d&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,_){var R=_.toLowerCase();_!=R&&(hh(this,_),ph(this,R,f))},a)),a.j=d}function Lb(a,d){const f=new li;if(l.Image){const _=new Image;_.onload=v(ar,f,"TestLoadImage: loaded",!0,d,_),_.onerror=v(ar,f,"TestLoadImage: error",!1,d,_),_.onabort=v(ar,f,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(ar,f,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function Mb(a,d){const f=new li,_=new AbortController,R=setTimeout(()=>{_.abort(),ar(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(R),D.ok?ar(f,"TestPingServer: ok",!0,d):ar(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),ar(f,"TestPingServer: error",!1,d)})}function ar(a,d,f,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(f)}catch{}}function Fb(){this.g=new tn}function Ub(a,d,f){const _=f||"";try{lh(a,function(R,D){let Y=R;u(R)&&(Y=_s(R)),d.push(_+D+"="+encodeURIComponent(Y))})}catch(R){throw d.push(_+"type="+encodeURIComponent("_badmap")),R}}function Mo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Mo,ys),Mo.prototype.g=function(){return new Fo(this.l,this.j)},Mo.prototype.i=function(a){return function(){return a}}({});function Fo(a,d){ne.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Fo,ne),t=Fo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?fi(this):pi(this),this.readyState==3&&gh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,fi(this))},t.Qa=function(a){this.g&&(this.response=a,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pi(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mh(a){let d="";return le(a,function(f,_){d+=_,d+=":",d+=f,d+=`\r
`}),d}function Yl(a,d,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=mh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ze(a,d,f))}function Xe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Xe,ne);var Bb=/^https?$/i,$b=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hl.g(),this.v=this.o?Kd(this.o):Kd(Hl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){_h(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)f.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($b,d,void 0))||_||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Y]of f)this.g.setRequestHeader(D,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){_h(this,D)}};function _h(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,yh(a),Uo(a)}function yh(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uo(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vh(this):this.bb())},t.bb=function(){vh(this)};function vh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)ke(a.Ea,0,a);else if(he(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var _;if(_=Y===0){var R=String(a.D).match(ch)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),_=!Bb.test(R?R.toLowerCase():"")}f=_}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var D=2<Ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",yh(a)}}finally{Uo(a)}}}}function Uo(a,d){if(a.g){bh(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||he(a,"ready");try{f.onreadystatechange=_}catch{}}}function bh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Nt(d)}};function wh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jb(a){const d={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(j(a[_]))continue;var f=C(a[_]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=d[R]||[];d[R]=D,D.push(f)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Eh(a){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,a),this.cb=gi("retryDelaySeedMs",1e4,a),this.Wa=gi("forwardChannelMaxRetries",2,a),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(a&&a.concurrentRequestLimit),this.Da=new Fb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Eh.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,_){Lt(0),this.W=a,this.H=d||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=xh(this,null,this.W),$o(this)};function Xl(a){if(Th(a),a.G==3){var d=a.U++,f=Nn(a.I);if(ze(f,"SID",a.K),ze(f,"RID",d),ze(f,"TYPE","terminate"),mi(a,f),d=new ir(a,a.j,d),d.L=2,d.v=Lo(Nn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Dh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Oo(d)}kh(a)}function Bo(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function Th(a){Bo(a),a.u&&(l.clearTimeout(a.u),a.u=null),jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $o(a){if(!sh(a.h)&&!a.s){a.s=!0;var d=a.Ga;de||Vt(),ve||(de(),ve=!0),gt.add(d,a),a.B=0}}function qb(a,d){return ih(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ai(g(a.Ga,a,d),Rh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new ir(this,this.j,a);let D=this.o;if(this.S&&(D?(D=b(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Ah(this,R,d),f=Nn(this.I),ze(f,"RID",a),ze(f,"CVER",22),this.D&&ze(f,"X-HTTP-Session-Id",this.D),mi(this,f),D&&(this.O?d="headers="+encodeURIComponent(String(mh(D)))+"&"+d:this.m&&Yl(f,this.m,D)),Jl(this.h,R),this.Ua&&ze(f,"TYPE","init"),this.P?(ze(f,"$req",d),ze(f,"SID","null"),R.T=!0,zl(R,f,null)):zl(R,f,d),this.G=2}}else this.G==3&&(a?Ih(this,a):this.i.length==0||sh(this.h)||Ih(this))};function Ih(a,d){var f;d?f=d.l:f=a.U++;const _=Nn(a.I);ze(_,"SID",a.K),ze(_,"RID",f),ze(_,"AID",a.T),mi(a,_),a.m&&a.o&&Yl(_,a.m,a.o),f=new ir(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Ah(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Jl(a.h,f),zl(f,_,d)}function mi(a,d){a.H&&le(a.H,function(f,_){ze(d,_,f)}),a.l&&lh({},function(f,_){ze(d,_,f)})}function Ah(a,d,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let D=-1;for(;;){const Y=["count="+f];D==-1?0<f?(D=R[0].g,Y.push("ofs="+D)):D=0:Y.push("ofs="+D);let Ue=!0;for(let _t=0;_t<f;_t++){let xe=R[_t].g;const St=R[_t].map;if(xe-=D,0>xe)D=Math.max(0,R[_t].g-100),Ue=!1;else try{Ub(St,Y,"req"+xe+"_")}catch{_&&_(St)}}if(Ue){_=Y.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,_}function Sh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;de||Vt(),ve||(de(),ve=!0),gt.add(d,a),a.v=0}}function Zl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ai(g(a.Fa,a),Rh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ai(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Bo(this),Ch(this))};function ec(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ch(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Nn(a.qa);ze(d,"RID","rpc"),ze(d,"SID",a.K),ze(d,"AID",a.T),ze(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(d,"TO",a.ja),ze(d,"TYPE","xmlhttp"),mi(a,d),a.m&&a.o&&Yl(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Lo(Nn(d)),f.m=null,f.P=!0,eh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Bo(this),Zl(this),Lt(19))};function jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ph(a,d){var f=null;if(a.g==d){jo(a),ec(a),a.g=null;var _=2}else if(Ql(a.h,d))f=d.D,oh(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;_=ko(),he(_,new Jd(_,f)),$o(a)}else Sh(a);else if(R=d.s,R==3||R==0&&0<d.X||!(_==1&&qb(a,d)||_==2&&Zl(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),R){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Rh(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function jr(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),_=a.Xa;const R=!_;_=new $r(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vo(_,"https"),Lo(_),R?Lb(_.toString(),f):Mb(_.toString(),f)}else Lt(2);a.G=0,a.l&&a.l.sa(d),kh(a),Th(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function kh(a){if(a.G=0,a.ka=[],a.l){const d=ah(a.h);(d.length!=0||a.i.length!=0)&&(O(a.ka,d),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function xh(a,d,f){var _=f instanceof $r?Nn(f):new $r(f);if(_.g!="")d&&(_.g=d+"."+_.g),No(_,_.s);else{var R=l.location;_=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var D=new $r(null);_&&Vo(D,_),d&&(D.g=d),R&&No(D,R),f&&(D.l=f),_=D}return f=a.D,d=a.ya,f&&d&&ze(_,f,d),ze(_,"VER",a.la),mi(a,_),_}function Dh(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Xe(new Mo({eb:f})):new Xe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}t=Oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qo(){}qo.prototype.g=function(a,d){return new Gt(a,d)};function Gt(a,d){ne.call(this),this.g=new Eh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!j(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!j(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ws(this)}P(Gt,ne),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Xl(this.g)},Gt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=_s(a),a=f);d.i.push(new Sb(d.Ya++,a)),d.G==3&&$o(d)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Xl(this.g),delete this.g,Gt.aa.N.call(this)};function Vh(a){jl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}P(Vh,jl);function Nh(){ql.call(this),this.status=1}P(Nh,ql);function ws(a){this.g=a}P(ws,Oh),ws.prototype.ua=function(){he(this.g,"a")},ws.prototype.ta=function(a){he(this.g,new Vh(a))},ws.prototype.sa=function(a){he(this.g,new Nh)},ws.prototype.ra=function(){he(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,yy=function(){return new qo},_y=function(){return ko()},my=Ur,nu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,fa=xo,Yd.COMPLETE="complete",gy=Yd,zd.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Ai=zd,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,py=Xe}).apply(typeof Jo<"u"?Jo:typeof self<"u"?self:typeof window<"u"?window:{});const cp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new hl("@firebase/firestore");function Ss(){return us.logLevel}function te(t,...e){if(us.logLevel<=Ie.DEBUG){const n=e.map(cd);us.debug(`Firestore (${ei}): ${t}`,...n)}}function Xn(t,...e){if(us.logLevel<=Ie.ERROR){const n=e.map(cd);us.error(`Firestore (${ei}): ${t}`,...n)}}function js(t,...e){if(us.logLevel<=Ie.WARN){const n=e.map(cd);us.warn(`Firestore (${ei}): ${t}`,...n)}}function cd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Me(t,e){t||pe()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class WS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GS{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new vy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Rt(e)}}class QS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class JS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new YS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ct(0,0))}static max(){return new ge(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends Zi{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const eC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Zi{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return eC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ge.fromString(e))}static fromName(e){return new ue(Ge.fromString(e).popFirst(5))}static empty(){return new ue(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ge(e.slice()))}}function tC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Rr(s,ue.empty(),e)}function nC(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(ge.min(),ue.empty(),-1)}static max(){return new Rr(ge.max(),ue.empty(),-1)}}function rC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==sC)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function oC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vl.oe=-1;function bl(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function aC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=up(e)),e=cC(t.get(n),e);return up(e)}function cC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function up(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hp(this.data.getIterator())}getIteratorFrom(e){return new hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ut(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ey("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const uC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=uC.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wl(t){const e=t.mapValue.fields.__previous_value__;return ud(e)?wl(e):e}function eo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ud(t)?4:fC(t)?9007199254740991:hC(t)?10:11:pe()}function Dn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),l=kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),l=nt(i.doubleValue);return o===l?Ua(o)===Ua(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(dp(o)!==dp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function no(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return fp(t.timestampValue,e.timestampValue);case 4:return fp(eo(t),eo(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xr(i),c=xr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ce(l[u],c[u]);if(h!==0)return h}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ce(nt(i.latitude),nt(o.latitude));return l!==0?l:Ce(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const p=i.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=Ce(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:pp(v,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xo.mapValue&&o===Xo.mapValue)return 0;if(i===Xo.mapValue)return 1;if(o===Xo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const g=Ce(c[p],h[p]);if(g!==0)return g;const v=Hs(l[c[p]],u[h[p]]);if(v!==0)return v}return Ce(c.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function fp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=kr(t),r=kr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function pp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Hs(n[s],r[s]);if(i)return i}return Ce(n.length,r.length)}function Ks(t){return ru(t)}function ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ru(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ru(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function pa(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wl(t);return e?16+pa(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+pa(o)}),s}(t.mapValue);default:throw pe()}}function su(t){return!!t&&"integerValue"in t}function dd(t){return!!t&&"arrayValue"in t}function gp(t){return!!t&&"nullValue"in t}function mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function hC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=vt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Mi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ga(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Mi(this.value))}}function Ty(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new vt([n]);if(ga(r)){const i=Ty(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Dt(e,0,ge.min(),ge.min(),ge.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Dt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,ge.min(),ge.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ge.min(),ge.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function _p(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function pC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{}class at extends Iy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mC(e,n,r):n==="array-contains"?new vC(e,r):n==="in"?new bC(e,r):n==="not-in"?new wC(e,r):n==="array-contains-any"?new EC(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _C(e,r):new yC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Iy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return Ay(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ay(t){return t.op==="and"}function Sy(t){return gC(t)&&Ay(t)}function gC(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function iu(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(Sy(t))return t.filters.map(e=>iu(e)).join(",");{const e=t.filters.map(n=>iu(n)).join(",");return`${t.op}(${e})`}}function Cy(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)}(t,e):t instanceof On?function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Cy(o,s.filters[l]),!0):!1}(t,e):void pe()}function Py(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(Py).join(" ,")+"}"}(t):"Filter"}class mC extends at{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class _C extends at{constructor(e,n){super(e,"in",n),this.keys=Ry("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yC extends at{constructor(e,n){super(e,"not-in",n),this.keys=Ry("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ry(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class vC extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dd(n)&&no(n.arrayValue,this.value)}}class bC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class wC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class EC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function vp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TC(t,e,n,r,s,i,o)}function hd(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>iu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.ue=n}return e.ue}function fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yp(t.startAt,e.startAt)&&yp(t.endAt,e.endAt)}function ou(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IC(t,e,n,r,s,i,o,l){return new El(t,e,n,r,s,i,o,l)}function pd(t){return new El(t)}function bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AC(t){return t.collectionGroup!==null}function Fi(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $a(i,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new $a(vt.keyField(),r))}return e.ce}function Pn(t){const e=ye(t);return e.le||(e.le=SC(e,Fi(t))),e.le}function SC(t,e){if(t.limitType==="F")return vp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $a(s.field,i)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return vp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function au(t,e,n){return new El(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tl(t,e){return fd(Pn(t),Pn(e))&&t.limitType===e.limitType}function ky(t){return`${hd(Pn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Py(s)).join(", ")}]`),bl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ks(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Fi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=_p(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Fi(r),s)||r.endAt&&!function(o,l,c){const u=_p(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Fi(r),s))}(t,e)}function CC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xy(t){return(e,n)=>{let r=!1;for(const s of Fi(t)){const i=PC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function PC(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Hs(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new Ye(ue.comparator);function Zn(){return RC}const Dy=new Ye(ue.comparator);function Si(...t){let e=Dy;for(const n of t)e=e.insert(n.key,n);return e}function Oy(t){let e=Dy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return Ui()}function Vy(){return Ui()}function Ui(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const kC=new Ye(ue.comparator),xC=new ut(ue.comparator);function Ae(...t){let e=xC;for(const n of t)e=e.add(n);return e}const DC=new ut(Ce);function OC(){return DC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Ny(t){return{integerValue:""+t}}function VC(t,e){return aC(e)?Ny(e):gd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}function NC(t,e,n){return t instanceof ro?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ud(i)&&(i=wl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof so?My(t,e):t instanceof io?Fy(t,e):function(s,i){const o=Ly(s,i),l=wp(o)+wp(s.Pe);return su(o)&&su(s.Pe)?Ny(l):gd(s.serializer,l)}(t,e)}function LC(t,e,n){return t instanceof so?My(t,e):t instanceof io?Fy(t,e):n}function Ly(t,e){return t instanceof ja?function(r){return su(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ro extends Al{}class so extends Al{constructor(e){super(),this.elements=e}}function My(t,e){const n=Uy(e);for(const r of t.elements)n.some(s=>Dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class io extends Al{constructor(e){super(),this.elements=e}}function Fy(t,e){let n=Uy(e);for(const r of t.elements)n=n.filter(s=>!Dn(s,r));return{arrayValue:{values:n}}}class ja extends Al{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wp(t){return nt(t.integerValue||t.doubleValue)}function Uy(t){return dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.field=e,this.transform=n}}function FC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof so&&s instanceof so||r instanceof io&&s instanceof io?qs(r.elements,s.elements,Dn):r instanceof ja&&s instanceof ja?Dn(r.Pe,s.Pe):r instanceof ro&&s instanceof ro}(t.transform,e.transform)}class UC{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sl{}function By(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new md(t.key,an.none()):new Eo(t.key,t.data,an.none());{const n=t.data,r=Ht.empty();let s=new ut(vt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Zt(s.toArray()),an.none())}}function BC(t,e,n){t instanceof Eo?function(s,i,o){const l=s.value.clone(),c=Tp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Tp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($y(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bi(t,e,n,r){return t instanceof Eo?function(i,o,l,c){if(!ma(i.precondition,o))return l;const u=i.value.clone(),h=Ip(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,c){if(!ma(i.precondition,o))return l;const u=Ip(i.fieldTransforms,c,o),h=o.data;return h.setAll($y(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $C(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ly(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function Ep(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>FC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends Sl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Sl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $y(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tp(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,LC(o,l,n[s]))}return r}function Ip(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NC(i,o,e))}return r}class md extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jC extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=By(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Ep(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Ep(n,r))}}class _d{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return kC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _d(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Re;function zC(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function jy(t){if(t===void 0)return Xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case it.OK:return $.OK;case it.CANCELLED:return $.CANCELLED;case it.UNKNOWN:return $.UNKNOWN;case it.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case it.INTERNAL:return $.INTERNAL;case it.UNAVAILABLE:return $.UNAVAILABLE;case it.UNAUTHENTICATED:return $.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case it.NOT_FOUND:return $.NOT_FOUND;case it.ALREADY_EXISTS:return $.ALREADY_EXISTS;case it.PERMISSION_DENIED:return $.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case it.ABORTED:return $.ABORTED;case it.OUT_OF_RANGE:return $.OUT_OF_RANGE;case it.UNIMPLEMENTED:return $.UNIMPLEMENTED;case it.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Re=it||(it={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new rs([4294967295,4294967295],0);function Ap(t){const e=WC().encode(t),n=new fy;return n.update(e),new Uint8Array(n.digest())}function Sp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rs([n,r],0),new rs([s,i],0)]}class yd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=rs.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(rs.fromNumber(r)));return s.compare(GC)===1&&(s=new rs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ap(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yd(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Ap(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cl(ge.min(),s,new Ye(Ce),Zn(),Ae())}}class To{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new To(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class qy{constructor(e,n){this.targetId=e,this.me=n}}class Hy{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cp{constructor(){this.fe=0,this.ge=Pp(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new To(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Pp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zn(),this.qe=Zo(),this.Qe=Zo(),this.Ke=new Ye(Ce)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(ou(i))if(r===0){const o=new ue(i.path);this.We(n,o,Dt.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(c){if(c instanceof Ey)return js("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new yd(o,s,i)}catch(c){return js(c instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&ou(l.target)){const c=new ue(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Dt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ae();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Cl(e,n,this.Ke,this.ke,r);return this.ke=Zn(),this.qe=Zo(),this.Qe=Zo(),this.Ke=new Ye(Ce),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Cp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(Ce),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Ce),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Cp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Zo(){return new Ye(ue.comparator)}function Pp(){return new Ye(ue.comparator)}const JC={asc:"ASCENDING",desc:"DESCENDING"},YC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XC={and:"AND",or:"OR"};class ZC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lu(t,e){return t.useProto3Json||bl(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ky(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eP(t,e){return qa(t,e.toTimestamp())}function Rn(t){return Me(!!t),ge.fromTimestamp(function(n){const r=kr(n);return new ct(r.seconds,r.nanos)}(t))}function vd(t,e){return cu(t,e).canonicalString()}function cu(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zy(t){const e=Ge.fromString(t);return Me(Yy(e)),e}function uu(t,e){return vd(t.databaseId,e.path)}function Ic(t,e){const n=zy(e);if(n.get(1)!==t.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Gy(n))}function Wy(t,e){return vd(t.databaseId,e)}function tP(t){const e=zy(t);return e.length===4?Ge.emptyPath():Gy(e)}function du(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gy(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rp(t,e,n){return{name:uu(t,e),fields:n.value.mapValue.fields}}function nP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?$.UNKNOWN:jy(u.code);return new oe(h,u.message||"")}(o);n=new Hy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):ge.min(),l=new Ht({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new _a(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?Rn(r.readTime):ge.min(),o=Dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _a([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new _a([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KC(s,i),l=r.targetId;n=new qy(l,o)}}return n}function rP(t,e){let n;if(e instanceof Eo)n={update:Rp(t,e.key,e.value)};else if(e instanceof md)n={delete:uu(t,e.key)};else if(e instanceof Mr)n={update:Rp(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof jC))return pe();n={verify:uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ro)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof so)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ja)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function sP(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Rn(s.updateTime):Rn(i);return o.isEqual(ge.min())&&(o=Rn(i)),new UC(o,s.transformResults||[])}(n,e))):[]}function iP(t,e){return{documents:[Wy(t,e.path)]}}function oP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wy(t,s);const i=function(u){if(u.length!==0)return Jy(On.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ps(g.field),direction:cP(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=lu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function aP(t){let e=tP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const g=Qy(p);return g instanceof On&&Sy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new $a(Rs(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,bl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new Ba(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new Ba(v,g)}(n.endAt)),IC(e,s,o,i,l,"F",c,u)}function lP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>Qy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function cP(t){return JC[t]}function uP(t){return YC[t]}function dP(t){return XC[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Rs(t){return vt.fromServerFormat(t.fieldPath)}function Jy(t){return t instanceof at?function(n){if(n.op==="=="){if(mp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(gp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(gp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:uP(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(s=>Jy(s));return r.length===1?r[0]:{compositeFilter:{op:dP(n.op),filters:r}}}(t):pe()}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ht=e}}function pP(t){const e=aP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.ln=new mP}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Rr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class mP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(41943040,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new zs(0)}static Qn(){return new zs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp([t,e],[n,r]){const s=Ce(t,n);return s===0?Ce(e,r):s}class _P{constructor(e){this.Gn=e,this.buffer=new ut(xp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Yn(3e5)})}}class vP{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(vl.oe);const r=new _P(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(kp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Ss()<=Ie.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function bP(t,e){return new vP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bi(r.mutation,s,Zt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Si();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Zn();const o=Ui(),l=function(){return Ui()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Mr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Bi(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var p;return l.set(u,new EP(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ui();let s=new Ye((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Zt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,p=Vy();h.forEach(g=>{if(!i.has(g)){const v=By(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Xr());let l=-1,c=i;return o.next(u=>M.forEach(u,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(h=>({batchId:l,changes:Oy(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(p,g){return new El(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let l=Si();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Bi(h.mutation,u,Zt.empty(),ct.now()),Il(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:pP(s.bundledQuery),readTime:Rn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.overlays=new Ye(ue.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Xr(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Xr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return M.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HC(n,r));let i=this.Er.get(n);i===void 0&&(i=Ae(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.dr=new ut(ht.Ar),this.Rr=new ut(ht.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ht(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ue(new Ge([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ue(new Ge([])),r=new ht(n,e),s=new ht(n,e+1);let i=Ae();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ue.comparator(e.key,n.key)||Ce(e.br,n.br)}static Vr(e,n){return Ce(e.br,n.br)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(ht.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ht(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ce);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ht(new ue(i),0);let l=new ut(Ce);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),M.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ht(n,0),s=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Zn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rC(nC(h),r)<=0||(s.has(h.key)||Il(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RP(this)}getSize(e){return M.resolve(this.size)}}class RP extends wP{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.persistence=e,this.Br=new ps(n=>hd(n),fd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new bd,this.targetCount=0,this.Qr=zs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new vl(0),this.Ur=!1,this.Ur=!0,this.Wr=new SP,this.referenceDelegate=e(this),this.Gr=new kP(this),this.indexManager=new gP,this.remoteDocumentCache=function(s){return new PP(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new fP(n),this.jr=new IP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new CP(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new xP(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class xP extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class wd{constructor(e){this.persistence=e,this.Zr=new bd,this.Xr=null}static ei(e){return new wd(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const s=ue.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.ri=new ps(r=>lC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=bP(this,n)}static ei(e,n){return new Ha(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pa(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ed(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return KE()?8:oC(Ot())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DP;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Ss()<=Ie.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(Ss()<=Ie.DEBUG&&te("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Ss()<=Ie.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):M.resolve())}Xi(e,n){if(bp(n))return M.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=au(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,au(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return bp(n)||s.isEqual(ge.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?M.resolve(null):(Ss()<=Ie.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.os(e,o,n,tC(s,-1)).next(l=>l))})}rs(e,n){let r=new ut(xy(e));return n.forEach((s,i)=>{Il(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Ss()<=Ie.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(Ce),this.cs=new ps(i=>hd(i),fd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function NP(t,e,n,r){return new VP(t,e,n,r)}async function Zy(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function LP(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const p=u.batch,g=p.keys();let v=M.resolve();return g.forEach(P=>{v=v.next(()=>h.getEntry(c,P)).next(k=>{const O=u.docVersions.get(P);Me(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ev(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function MP(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;l.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Et.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(p,v),function(k,O,F){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,v,h)&&l.push(n.Gr.updateTargetData(i,v))});let c=Zn(),u=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(FP(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(ge.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function FP(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Zn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function UP(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BP(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function hu(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Dp(t,e,n){const r=ye(t);let s=ge.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const p=ye(c),g=p.cs.get(h);return g!==void 0?M.resolve(p.us.get(g)):p.Gr.getTargetData(u,h)}(r,o,Pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ae())).next(l=>($P(r,CC(e),l),{documents:l,ds:i})))}function $P(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Op{constructor(){this.activeTargetIds=OC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jP{constructor(){this._o=new Op,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Op,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=null;function Ac(){return ea===null?ea=function(){return 268435456+Math.round(2147483648*Math.random())}():ea++,"0x"+ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class zP extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Ac(),c=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw js("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",c,"request:",s),h})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=HP[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Ac();return new Promise((o,l)=>{const c=new py;c.setWithCredentials(!0),c.listenOnce(gy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case fa.NO_ERROR:const h=c.getResponseJson();te(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case fa.TIMEOUT:te(Pt,`RPC '${e}' ${i} timed out`),l(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const p=c.getStatus();if(te(Pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const P=function(O){const F=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(F)>=0?F:$.UNKNOWN}(v.status);l(new oe(P,v.message))}else l(new oe($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new oe($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{te(Pt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Ac(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yy(),l=_y(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");te(Pt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=o.createWebChannel(h,c);let g=!1,v=!1;const P=new KP({Eo:O=>{v?te(Pt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(te(Pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(Pt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Ao:()=>p.close()}),k=(O,F,j)=>{O.listen(F,H=>{try{j(H)}catch(W){setTimeout(()=>{throw W},0)}})};return k(p,Ai.EventType.OPEN,()=>{v||(te(Pt,`RPC '${e}' stream ${s} transport opened.`),P.So())}),k(p,Ai.EventType.CLOSE,()=>{v||(v=!0,te(Pt,`RPC '${e}' stream ${s} transport closed`),P.Do())}),k(p,Ai.EventType.ERROR,O=>{v||(v=!0,js(Pt,`RPC '${e}' stream ${s} transport errored:`,O),P.Do(new oe($.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ai.EventType.MESSAGE,O=>{var F;if(!v){const j=O.data[0];Me(!!j);const H=j,W=(H==null?void 0:H.error)||((F=H[0])===null||F===void 0?void 0:F.error);if(W){te(Pt,`RPC '${e}' stream ${s} received error:`,W);const re=W.status;let le=function(y){const I=it[y];if(I!==void 0)return jy(I)}(re),S=W.message;le===void 0&&(le=$.INTERNAL,S="Unknown error status: "+re+" with message "+W.message),v=!0,P.Do(new oe(le,S)),p.close()}else te(Pt,`RPC '${e}' stream ${s} received:`,j),P.vo(j)}}),k(l,my.STAT_EVENT,O=>{O.stat===nu.PROXY?te(Pt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===nu.NOPROXY&&te(Pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){return new ZC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new tv(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new oe($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WP extends nv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=nP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Rn(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=du(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ou(c)?{documents:iP(i,c)}:{query:oP(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ky(i,o.resumeToken);const u=lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=qa(i,o.snapshotVersion.toTimestamp());const u=lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=lP(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=du(this.serializer),n.removeTarget=e,this.c_(n)}}class GP extends nv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=sP(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=du(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rP(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,cu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,cu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class JP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Xn(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{gs(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.k_.add(4),await Io(u),u.K_.set("Unknown"),u.k_.delete(4),await Rl(u)}(this))})}),this.K_=new JP(r,s)}}async function Rl(t){if(gs(t))for(const e of t.q_)await e(!0)}async function Io(t){for(const e of t.q_)await e(!1)}function rv(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Sd(n)?Ad(n):ri(n).s_()&&Id(n,e))}function Td(t,e){const n=ye(t),r=ri(n);n.B_.delete(e),r.s_()&&sv(n,e),n.B_.size===0&&(r.s_()?r.a_():gs(n)&&n.K_.set("Unknown"))}function Id(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ri(t).V_(e)}function sv(t,e){t.U_.xe(e),ri(t).m_(e)}function Ad(t){t.U_=new QC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ri(t).start(),t.K_.F_()}function Sd(t){return gs(t)&&!ri(t).i_()&&t.B_.size>0}function gs(t){return ye(t).k_.size===0}function iv(t){t.U_=void 0}async function XP(t){t.K_.set("Online")}async function ZP(t){t.B_.forEach((e,n)=>{Id(t,e)})}async function eR(t,e){iv(t),Sd(t)?(t.K_.O_(e),Ad(t)):t.K_.set("Unknown")}async function tR(t,e,n){if(t.K_.set("Online"),e instanceof Hy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof _a?t.U_.$e(e):e instanceof qy?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await ev(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),sv(i,c);const p=new wr(h.target,c,u,h.sequenceNumber);Id(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!ni(e))throw e;t.k_.add(1),await Io(t),t.K_.set("Offline"),n||(n=()=>ev(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Rl(t)})}function ov(t,e){return e().catch(n=>Ka(t,n,e))}async function kl(t){const e=ye(t),n=Or(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;nR(e);)try{const s=await UP(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,rR(e,s)}catch(s){await Ka(e,s)}av(e)&&lv(e)}function nR(t){return gs(t)&&t.L_.length<10}function rR(t,e){t.L_.push(e);const n=Or(t);n.s_()&&n.f_&&n.g_(e.mutations)}function av(t){return gs(t)&&!Or(t).i_()&&t.L_.length>0}function lv(t){Or(t).start()}async function sR(t){Or(t).w_()}async function iR(t){const e=Or(t);for(const n of t.L_)e.g_(n.mutations)}async function oR(t,e,n){const r=t.L_.shift(),s=_d.from(r,e,n);await ov(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kl(t)}async function aR(t,e){e&&Or(t).f_&&await async function(r,s){if(function(o){return zC(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();Or(r).__(),await ov(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kl(r)}}(t,e),av(t)&&lv(t)}async function Np(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.k_.add(3),await Io(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Rl(n)}async function lR(t,e){const n=ye(t);e?(n.k_.delete(2),await Rl(n)):e||(n.k_.add(2),await Io(n),n.K_.set("Unknown"))}function ri(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new WP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:XP.bind(null,t),mo:ZP.bind(null,t),po:eR.bind(null,t),R_:tR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Sd(t)?Ad(t):t.K_.set("Unknown")):(await t.W_.stop(),iv(t))})),t.W_}function Or(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new GP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:sR.bind(null,t),po:aR.bind(null,t),p_:iR.bind(null,t),y_:oR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await kl(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Cd(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pd(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),ni(t))return new oe($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.z_=new Ye(ue.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ws(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class uR{constructor(){this.queries=Mp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Mp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new oe($.ABORTED,"Firestore shutting down"))}}function Mp(){return new ps(t=>ky(t),Tl)}async function cv(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new cR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Pd(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Rd(n)}async function uv(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dR(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Rd(n)}function hR(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Rd(t){t.X_.forEach(e=>{e.next()})}var fu,Fp;(Fp=fu||(fu={})).na="default",Fp.Cache="cache";class dv{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==fu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.key=e}}class fv{constructor(e){this.key=e}}class fR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ae(),this.mutatedKeys=Ae(),this.Va=xy(e),this.ma=new Bs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Lp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),v=Il(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;g&&v?g.data.isEqual(v.data)?P!==k&&(r.track({type:3,doc:v}),O=!0):this.ya(g,v)||(r.track({type:2,doc:v}),O=!0,(c&&this.Va(v,c)>0||u&&this.Va(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),O=!0):g&&!v&&(r.track({type:1,doc:g}),O=!0,(c||u)&&(l=!0)),O&&(v?(o=o.add(v),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,p)=>function(v,P){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(v)-k(P)}(h.type,p.type)||this.Va(h.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Ws(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Lp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ae(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new fv(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new hv(r))}),n}va(e){this.da=e.ds,this.Ra=Ae();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ws.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class pR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gR{constructor(e){this.key=e,this.Fa=!1}}class mR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new ps(l=>ky(l),Tl),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ue.comparator),this.Ba=new Map,this.ka=new bd,this.qa={},this.Qa=new Map,this.Ka=zs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function _R(t,e,n=!0){const r=vv(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await pv(r,e,n,!0),s}async function yR(t,e){const n=vv(t);await pv(n,e,!0,!1)}async function pv(t,e,n,r){const s=await BP(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await vR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&rv(t.remoteStore,s),l}async function vR(t,e,n,r,s){t.Ua=(p,g,v)=>async function(k,O,F,j){let H=O.view.ga(F);H.ss&&(H=await Dp(k.localStore,O.query,!1).then(({documents:S})=>O.view.ga(S,H)));const W=j&&j.targetChanges.get(O.targetId),re=j&&j.targetMismatches.get(O.targetId)!=null,le=O.view.applyChanges(H,k.isPrimaryClient,W,re);return Bp(k,O.targetId,le.ba),le.snapshot}(t,p,g,v);const i=await Dp(t.localStore,e,!0),o=new fR(e,i.ds),l=o.ga(i.documents),c=To.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Bp(t,n,u.ba);const h=new pR(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function bR(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Tl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Td(r.remoteStore,s.targetId),pu(r,s.targetId)}).catch(ti)):(pu(r,s.targetId),await hu(r.localStore,s.targetId,!0))}async function wR(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Td(n.remoteStore,r.targetId))}async function ER(t,e,n){const r=RR(t);try{const s=await function(o,l){const c=ye(o),u=ct.now(),h=l.reduce((v,P)=>v.add(P.key),Ae());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Zn(),k=Ae();return c.hs.getEntries(v,h).next(O=>{P=O,P.forEach((F,j)=>{j.isValidDocument()||(k=k.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,P)).next(O=>{p=O;const F=[];for(const j of l){const H=$C(j,p.get(j.key).overlayedDocument);H!=null&&F.push(new Mr(j.key,H,Ty(H.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,F,l)}).next(O=>{g=O;const F=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(v,O.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Oy(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(Ce)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ao(r,s.changes),await kl(r.remoteStore)}catch(s){const i=Pd(s,"Failed to persist write");n.reject(i)}}async function gv(t,e){const n=ye(t);try{const r=await MP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Me(o.Fa):s.removedDocuments.size>0&&(Me(o.Fa),o.Fa=!1))}),await Ao(n,r,e)}catch(r){await ti(r)}}function Up(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((h,p)=>{for(const g of p.J_)g.ea(l)&&(u=!0)}),u&&Rd(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TR(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ue.comparator);o=o.insert(i,Dt.newNoDocument(i,ge.min()));const l=Ae().add(i),c=new Cl(ge.min(),new Map,new Ye(Ce),o,l);await gv(r,c),r.La=r.La.remove(i),r.Ba.delete(e),kd(r)}else await hu(r.localStore,e,!1).then(()=>pu(r,e,n)).catch(ti)}async function IR(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await LP(n.localStore,e);_v(n,r,null),mv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,s)}catch(s){await ti(s)}}async function AR(t,e,n){const r=ye(t);try{const s=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);_v(r,e,n),mv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,s)}catch(s){await ti(s)}}function mv(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function _v(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function pu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||yv(t,r)})}function yv(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Td(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),kd(t))}function Bp(t,e,n){for(const r of n)r instanceof hv?(t.ka.addReference(r.key,e),SR(t,r)):r instanceof fv?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||yv(t,r.key)):pe()}function SR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),kd(t))}function kd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ue(Ge.fromString(e)),r=t.Ka.next();t.Ba.set(r,new gR(n)),t.La=t.La.insert(n,r),rv(t.remoteStore,new wr(Pn(pd(n.path)),r,"TargetPurposeLimboResolution",vl.oe))}}async function Ao(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ed.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const h=ye(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,g=>M.forEach(g.Wi,v=>h.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>M.forEach(g.Gi,v=>h.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!ni(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=h.us.get(g),P=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(P);h.us=h.us.insert(g,k)}}}(r.localStore,i))}async function CR(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Zy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new oe($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.Ts)}}function PR(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return Ae().add(r.key);{let s=Ae();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function vv(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TR.bind(null,e),e.Ma.R_=dR.bind(null,e.eventManager),e.Ma.Wa=hR.bind(null,e.eventManager),e}function RR(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AR.bind(null,e),e}class za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return NP(this.persistence,new OP,e.initialUser,this.serializer)}ja(e){return new Xy(wd.ei,this.serializer)}za(e){return new jP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}za.provider={build:()=>new za};class kR extends za{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Me(this.persistence.referenceDelegate instanceof Ha);const r=this.persistence.referenceDelegate.garbageCollector;return new yP(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new Xy(r=>Ha.ei(r,n),this.serializer)}}class gu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CR.bind(null,this.syncEngine),await lR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uR}()}createDatastore(e){const n=Pl(e.databaseInfo.databaseId),r=function(i){return new zP(i)}(e.databaseInfo);return function(i,o,l,c){return new QP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new YP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Up(this.syncEngine,n,0),function(){return Vp.p()?new Vp:new qP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const p=new mR(s,i,o,l,c,u);return h&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Io(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gu.provider={build:()=>new gu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=by.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DR(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Np(e.remoteStore,s)),t._onlineComponents=e}async function DR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;js("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new za)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new kR(void 0));return t._offlineComponents}async function wv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await $p(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await $p(t,new gu))),t._onlineComponents}function OR(t){return wv(t).then(e=>e.syncEngine)}async function Ev(t){const e=await wv(t),n=e.eventManager;return n.onListen=_R.bind(null,e.syncEngine),n.onUnlisten=bR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wR.bind(null,e.syncEngine),n}function VR(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new bv({next:g=>{h.eu(),o.enqueueAndForget(()=>uv(i,p));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new oe($.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new oe($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new dv(pd(l.path),h,{includeMetadataChanges:!0,ua:!0});return cv(i,p)}(await Ev(t),t.asyncQueue,e,n,r)),r.promise}function NR(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new bv({next:g=>{h.eu(),o.enqueueAndForget(()=>uv(i,p)),g.fromCache&&c.source==="server"?u.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new dv(l,h,{includeMetadataChanges:!0,ua:!0});return cv(i,p)}(await Ev(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e,n){if(!n)throw new oe($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LR(t,e,n,r){if(e===!0&&r===!0)throw new oe($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qp(t){if(!ue.isDocumentKey(t))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(ue.isDocumentKey(t))throw new oe($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xd(t);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zS;switch(r.type){case"firstParty":return new JS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jp.get(n);r&&(te("ComponentProvider","Removing Datastore"),jp.delete(n),r.terminate())}(this),Promise.resolve()}}function MR(t,e,n,r={}){var s;const i=(t=_n(t,xl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Rt.MOCK_USER;else{l=UE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new WS(new vy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dl(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Cr extends Dl{constructor(e,n,r){super(e,n,pd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new ue(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function mu(t,e,...n){if(t=pt(t),Iv("collection","path",e),t instanceof xl){const r=Ge.fromString(e,...n);return Hp(r),new Cr(t,null,r)}{if(!(t instanceof zt||t instanceof Cr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Hp(r),new Cr(t.firestore,null,r)}}function Gs(t,e,...n){if(t=pt(t),arguments.length===1&&(e=by.newId()),Iv("doc","path",e),t instanceof xl){const r=Ge.fromString(e,...n);return qp(r),new zt(t,null,new ue(r))}{if(!(t instanceof zt||t instanceof Cr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return qp(r),new zt(t.firestore,t instanceof Cr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new tv(this,"async_queue_retry"),this.fu=()=>{const r=Sc();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Gn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ni(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Cd.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class ms extends xl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zp(e),this._firestoreClient=void 0,await e}}}function Dd(t,e){const n=typeof t=="object"?t:a_(),r=typeof t=="string"?t:"(default)",s=_o(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ME("firestore");i&&MR(s,...i)}return s}function Od(t){if(t._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||FR(t),t._firestoreClient}function FR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new dC(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Tv(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new xR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(Et.fromBase64String(e))}catch(n){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^__.*__$/;class BR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}class Av{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Wa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Sv(this.Mu)&&UR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class $R{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pl(e)}$u(e,n,r,s=!1){return new Ld({Mu:e,methodName:n,Ku:r,path:vt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Md(t){const e=t._freezeSettings(),n=Pl(t._databaseId);return new $R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cv(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Ud("Data must be an object, but it was:",o,r);const l=Pv(r,o);let c,u;if(i.merge)c=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=_u(e,p,n);if(!o.contains(g))throw new oe($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kv(h,g)||h.push(g)}c=new Zt(h),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new BR(new Ht(l),c,u)}class Nl extends Vl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nl}}class Fd extends Vl{_toFieldTransform(e){return new MC(e.path,new ro)}isEqual(e){return e instanceof Fd}}function jR(t,e,n,r){const s=t.$u(1,e,n);Ud("Data must be an object, but it was:",s,r);const i=[],o=Ht.empty();Lr(r,(c,u)=>{const h=Bd(e,c,n);u=pt(u);const p=s.Bu(h);if(u instanceof Nl)i.push(h);else{const g=Ll(u,p);g!=null&&(i.push(h),o.set(h,g))}});const l=new Zt(i);return new Av(o,l,s.fieldTransforms)}function qR(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[_u(e,r,n)],c=[s];if(i.length%2!=0)throw new oe($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(_u(e,i[g])),c.push(i[g+1]);const u=[],h=Ht.empty();for(let g=l.length-1;g>=0;--g)if(!kv(u,l[g])){const v=l[g];let P=c[g];P=pt(P);const k=o.Bu(v);if(P instanceof Nl)u.push(v);else{const O=Ll(P,k);O!=null&&(u.push(v),h.set(v,O))}}const p=new Zt(u);return new Av(h,p,o.fieldTransforms)}function Ll(t,e){if(Rv(t=pt(t)))return Ud("Unsupported field value:",e,t),Pv(t,e);if(t instanceof Vl)return function(r,s){if(!Sv(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ll(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Vd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:Ky(s.serializer,r._byteString)};if(r instanceof zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nd)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return gd(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${xd(r)}`)}(t,e)}function Pv(t,e){const n={};return wy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Ll(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Rv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Vd||t instanceof Qs||t instanceof zt||t instanceof Vl||t instanceof Nd)}function Ud(t,e,n){if(!Rv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function _u(t,e,n){if((e=pt(e))instanceof Ol)return e._internalPath;if(typeof e=="string")return Bd(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const HR=new RegExp("[~\\*/\\[\\]]");function Bd(t,e,n){if(e.search(HR)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ol(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new oe($.INVALID_ARGUMENT,l+t+c)}function kv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KR extends xv{data(){return super.data()}}function Dv(t,e){return typeof e=="string"?Bd(t,e):e instanceof Ol?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WR{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new Nd(i)}convertGeoPoint(e){return new Vd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Me(Yy(r));const s=new to(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vv extends xv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ya extends Vv{data(e={}){return super.data(e)}}class GR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ya(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:QR(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){t=_n(t,zt);const e=_n(t.firestore,ms);return VR(Od(e),t._key).then(n=>ZR(e,t,n))}class Nv extends WR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function yu(t){t=_n(t,Dl);const e=_n(t.firestore,ms),n=Od(e),r=new Nv(e);return zR(t._query),NR(n,t._query).then(s=>new GR(e,r,t,s))}function YR(t,e,n){t=_n(t,zt);const r=_n(t.firestore,ms),s=Ov(t.converter,e);return Ml(r,[Cv(Md(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function Lv(t,e,n,...r){t=_n(t,zt);const s=_n(t.firestore,ms),i=Md(s);let o;return o=typeof(e=pt(e))=="string"||e instanceof Ol?qR(i,"updateDoc",t._key,e,n,r):jR(i,"updateDoc",t._key,e),Ml(s,[o.toMutation(t._key,an.exists(!0))])}function XR(t){return Ml(_n(t.firestore,ms),[new md(t._key,an.none())])}function vu(t,e){const n=_n(t.firestore,ms),r=Gs(t),s=Ov(t.converter,e);return Ml(n,[Cv(Md(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function Ml(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>ER(await OR(r),s,i)),i.promise}(Od(t),e)}function ZR(t,e,n){const r=n.docs.get(e._key),s=new Nv(t);return new Vv(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}function Wp(){return new Fd("serverTimestamp")}(function(e,n=!0){(function(s){ei=s})(Xs),xn(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ms(new GS(r.getProvider("auth-internal")),new XS(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),sn(cp,"4.7.5",e),sn(cp,"4.7.5","esm2017")})();const Pc=HS(gl),Gp=Dd(gl),Fr=Wu("auth",()=>{const t=be(JSON.parse(localStorage.getItem("user"))||null);return{user:t,register:async(l,c)=>{const h=(await PA(Pc,l,c)).user,p={email:h.email,role:"regular",verified:h.emailVerified,createdAt:new Date().toISOString()};await YR(Gs(Gp,"users",h.uid),p),await kA(h),t.value={uid:h.uid,email:h.email,role:"regular",verified:h.emailVerified},localStorage.setItem("user",JSON.stringify(t.value))},login:async(l,c)=>{const h=(await RA(Pc,l,c)).user;if(!h.emailVerified)throw new Error("Email er ikke bekræftet. Check din indbakke.");const p=Gs(Gp,"users",h.uid),g=await JR(p);if(!g.exists())throw new Error("Ingen bruger fundet. Kontakt support.");const v=g.data();t.value={uid:h.uid,email:h.email,role:v.role,verified:h.emailVerified},localStorage.setItem("user",JSON.stringify(t.value))},logout:async()=>{await OA(Pc),t.value=null,localStorage.removeItem("user")},isAuthenticated:()=>t.value!==null,isVerified:()=>{var l;return(l=t.value)==null?void 0:l.verified},isAdmin:()=>{var l;return((l=t.value)==null?void 0:l.role)==="admin"}}}),tt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ek={name:"Navbar",setup(){const t=Fr(),e=()=>{t.logout()},n=Ee(()=>t.isAuthenticated()),r=Ee(()=>{var s;return(s=t.user)==null?void 0:s.email});return{isAuthenticated:n,userEmail:r,handleLogout:e}}},tk={class:"flex justify-between items-center flex-nowrap bg-dark-brown p-4 sm:p-0 sm:px-5"},nk={id:"user-nav",class:"flex w-full sm:w-auto items-center justify-center sm:justify-start sm:flex-row flex-row space-y-0 space-x-1 sm:space-x-2 p-1"},rk={class:"text-base text-gray-300 font-light"};function sk(t,e,n,r,s,i){const o=We("router-link");return V(),U("nav",tk,[m("div",nk,[r.isAuthenticated?(V(),U(me,{key:0},[m("span",rk,"Velkommen, "+se(r.userEmail),1),e[2]||(e[2]=m("span",{class:"text-gray-500 hidden sm:inline"},"|",-1)),m("button",{onClick:e[0]||(e[0]=(...l)=>r.handleLogout&&r.handleLogout(...l)),class:"text-base text-gray-300 font-light hover:text-gray-400"}," Log ud "),e[3]||(e[3]=m("span",{class:"text-white hidden sm:inline"},"|",-1)),we(o,{id:"admin-link",to:"/admin",class:"text-base text-whitefont-light hover:text-light-brown"},{default:Ze(()=>e[1]||(e[1]=[ot(" Admin Panel ")])),_:1})],64)):(V(),U(me,{key:1},[we(o,{id:"login-link",to:"/login",class:"text-base text-white font-extralight hover:text-light-brown"},{default:Ze(()=>e[4]||(e[4]=[ot(" Login ")])),_:1}),e[6]||(e[6]=m("span",{class:"text-white hidden sm:inline"},"|",-1)),we(o,{id:"register-link",to:"/register",class:"text-base text-white font-light hover:text-light-brown"},{default:Ze(()=>e[5]||(e[5]=[ot(" Registrere ")])),_:1})],64))]),e[7]||(e[7]=Dm('<div id="some-links" class="flex justify-center sm:w-auto sm:justify-end space-x-1 sm:space-x-2 mt- sm:mt-0" data-v-f2c7fc2c><a href="https://instagram.com" aria-label="Instagram" class="text-white" data-v-f2c7fc2c><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" data-v-f2c7fc2c><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" data-v-f2c7fc2c></path></svg></a><a href="https://facebook.com" aria-label="Facebook" class="text-white" data-v-f2c7fc2c><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 24 24" data-v-f2c7fc2c><path d="M12 2.04c-5.507 0-10 4.493-10 10.003 0 4.991 3.657 9.127 8.437 9.87v-6.987h-2.54v-2.883h2.54v-2.189c0-2.506 1.493-3.894 3.777-3.894 1.094 0 2.239.195 2.239.195v2.465h-1.261c-1.241 0-1.627.771-1.627 1.562v1.861h2.771l-.443 2.883h-2.328v6.987c4.781-.742 8.437-4.879 8.437-9.87 0-5.51-4.493-10.003-10-10.003z" data-v-f2c7fc2c></path></svg></a><a href="https://linkedin.com" aria-label="LinkedIn" class="text-white" data-v-f2c7fc2c><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 50 50" data-v-f2c7fc2c><path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" data-v-f2c7fc2c></path></svg></a></div>',1))])}const ik=tt(ek,[["render",sk],["__scopeId","data-v-f2c7fc2c"]]),So=Wu("cart",()=>{const t=Fr(),e=be(o()),n=l=>{const c=e.value.find(u=>u.id===l.id&&u.name===l.name);c?c.quantity+=1:e.value.push({...l,quantity:1})},r=l=>{e.value.splice(l,1)},s=Ee(()=>e.value.reduce((l,c)=>{if(c.price.toLowerCase().includes("kontakt"))return l;const u=parseFloat(c.price.toLowerCase().replace("dkk","").replace(",","").trim());return isNaN(u)?l:l+u*c.quantity},0)),i=Ee(()=>{var u;const c=((u=t.user)==null?void 0:u.role)==="elite"?.9:1;return parseFloat((s.value*c).toFixed(2))});Ir(e,l=>{localStorage.setItem("cartItems",JSON.stringify(l))},{deep:!0});function o(){const l=localStorage.getItem("cartItems");return l?JSON.parse(l):[]}return{cartItems:e,cartSubtotal:s,cartTotal:i,addToCart:n,removeFromCart:r}}),bu=Dd(gl),Qp=mu(bu,"products"),Vn=()=>{const t=be([]);return(async()=>{const c=await yu(Qp),u=[];c.forEach(h=>{const p=h.data();u.push({...p,id:h.id})}),t.value=u})().catch(console.error),{allProducts:t,getProductsByCategory:c=>t.value.filter(u=>u.categories.includes(c)),getProductsByCategoryAndSubcategory:(c,u)=>t.value.filter(h=>h.categories.includes(c)&&h.subcategories.includes(u)),getSubcategoriesByCategory:c=>{const u=new Set;return t.value.forEach(h=>{h.categories.includes(c)&&h.subcategories.length>0&&h.subcategories.forEach(p=>u.add(p))}),Array.from(u)},addProduct:async c=>{const u=await vu(Qp,{...c}),h={...c,id:u.id};t.value.push(h)},updateProduct:async c=>{const u=Gs(bu,"products",c.id),h={...c};delete h.id,await Lv(u,h);const p=t.value.findIndex(g=>g.id===c.id);p!==-1&&(t.value[p]={...c})},deleteProduct:async c=>{const u=Gs(bu,"products",c.toString());await XR(u),t.value=t.value.filter(h=>h.id!==c)}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof document<"u";function Mv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ok(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mv(t.default)}const Fe=Object.assign;function Rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const $i=()=>{},yn=Array.isArray,Fv=/#/g,ak=/&/g,lk=/\//g,ck=/=/g,uk=/\?/g,Uv=/\+/g,dk=/%5B/g,hk=/%5D/g,Bv=/%5E/g,fk=/%60/g,$v=/%7B/g,pk=/%7C/g,jv=/%7D/g,gk=/%20/g;function $d(t){return encodeURI(""+t).replace(pk,"|").replace(dk,"[").replace(hk,"]")}function mk(t){return $d(t).replace($v,"{").replace(jv,"}").replace(Bv,"^")}function wu(t){return $d(t).replace(Uv,"%2B").replace(gk,"+").replace(Fv,"%23").replace(ak,"%26").replace(fk,"`").replace($v,"{").replace(jv,"}").replace(Bv,"^")}function _k(t){return wu(t).replace(ck,"%3D")}function yk(t){return $d(t).replace(Fv,"%23").replace(uk,"%3F")}function vk(t){return t==null?"":yk(t).replace(lk,"%2F")}function oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bk=/\/$/,wk=t=>t.replace(bk,"");function kc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Ak(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:oo(o)}}function Ek(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&qv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ik(t[n],e[n]))return!1;return!0}function Ik(t,e){return yn(t)?Yp(t,e):yn(e)?Yp(e,t):t===e}function Yp(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ak(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ur={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ao;(function(t){t.pop="pop",t.push="push"})(ao||(ao={}));var ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ji||(ji={}));function Sk(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wk(t)}const Ck=/^[^#]+#/;function Pk(t,e){return t.replace(Ck,"#")+e}function Rk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fl=()=>({left:window.scrollX,top:window.scrollY});function kk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Rk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xp(t,e){return(history.state?history.state.position-e:-1)+t}const Eu=new Map;function xk(t,e){Eu.set(t,e)}function Dk(t){const e=Eu.get(t);return Eu.delete(t),e}let Ok=()=>location.protocol+"//"+location.host;function Hv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Jp(c,"")}return Jp(n,t)+r+s}function Vk(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=Hv(t,location),P=n.value,k=e.value;let O=0;if(g){if(n.value=v,e.value=g,o&&o===P){o=null;return}O=k?g.position-k.position:0}else r(v);s.forEach(F=>{F(n.value,P,{delta:O,type:ao.pop,direction:O?O>0?ji.forward:ji.back:ji.unknown})})};function c(){o=n.value}function u(g){s.push(g);const v=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(v),v}function h(){const{history:g}=window;g.state&&g.replaceState(Fe({},g.state,{scroll:Fl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Zp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fl():null}}function Nk(t){const{history:e,location:n}=window,r={value:Hv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Ok()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[h?"replace":"assign"](g)}}function o(c,u){const h=Fe({},e.state,Zp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=Fe({},s.value,e.state,{forward:c,scroll:Fl()});i(h.current,h,!0);const p=Fe({},Zp(r.value,c,null),{position:h.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Lk(t){t=Sk(t);const e=Nk(t),n=Vk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Fe({location:"",base:t,go:r,createHref:Pk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mk(t){return typeof t=="string"||t&&typeof t=="object"}function Kv(t){return typeof t=="string"||typeof t=="symbol"}const zv=Symbol("");var eg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(eg||(eg={}));function Ys(t,e){return Fe(new Error,{type:t,[zv]:!0},e)}function Fn(t,e){return t instanceof Error&&zv in t&&(e==null||!!(t.type&e))}const tg="[^/]+?",Fk={sensitive:!1,strict:!1,start:!0,end:!0},Uk=/[.+*?^${}()[\]/\\]/g;function Bk(t,e){const n=Fe({},Fk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Uk,"\\$&"),v+=40;else if(g.type===1){const{value:P,repeatable:k,optional:O,regexp:F}=g;i.push({name:P,repeatable:k,optional:O});const j=F||tg;if(j!==tg){v+=10;try{new RegExp(`(${j})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+W.message)}}let H=k?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(H=O&&u.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),s+=H,v+=20,O&&(v+=-8),k&&(v+=-20),j===".*"&&(v+=-50)}h.push(v)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),p={};if(!h)return null;for(let g=1;g<h.length;g++){const v=h[g]||"",P=i[g-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function c(u){let h="",p=!1;for(const g of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const v of g)if(v.type===0)h+=v.value;else if(v.type===1){const{value:P,repeatable:k,optional:O}=v,F=P in u?u[P]:"";if(yn(F)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=yn(F)?F.join("/"):F;if(!j)if(O)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);h+=j}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function $k(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$k(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ng(r))return 1;if(ng(s))return-1}return s.length-r.length}function ng(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jk={type:0,value:""},qk=/[a-zA-Z0-9_]/;function Hk(t){if(!t)return[[]];if(t==="/")return[[jk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:qk.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Kk(t,e,n){const r=Bk(Hk(t.path),n),s=Fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zk(t,e){const n=[],r=new Map;e=og({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,v){const P=!v,k=sg(p);k.aliasOf=v&&v.record;const O=og(e,p),F=[k];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of W)F.push(sg(Fe({},k,{components:v?v.record.components:k.components,path:re,aliasOf:v?v.record:k})))}let j,H;for(const W of F){const{path:re}=W;if(g&&re[0]!=="/"){const le=g.record.path,S=le[le.length-1]==="/"?"":"/";W.path=g.record.path+(re&&S+re)}if(j=Kk(W,g,O),v?v.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),P&&p.name&&!ig(j)&&o(p.name)),Gv(j)&&c(j),k.children){const le=k.children;for(let S=0;S<le.length;S++)i(le[S],j,v&&v.children[S])}v=v||j}return H?()=>{o(H)}:$i}function o(p){if(Kv(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=Qk(p,n);n.splice(g,0,p),p.record.name&&!ig(p)&&r.set(p.record.name,p)}function u(p,g){let v,P={},k,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ys(1,{location:p});O=v.record.name,P=Fe(rg(g.params,v.keys.filter(H=>!H.optional).concat(v.parent?v.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&rg(p.params,v.keys.map(H=>H.name))),k=v.stringify(P)}else if(p.path!=null)k=p.path,v=n.find(H=>H.re.test(k)),v&&(P=v.parse(k),O=v.record.name);else{if(v=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!v)throw Ys(1,{location:p,currentLocation:g});O=v.record.name,P=Fe({},g.params,p.params),k=v.stringify(P)}const F=[];let j=v;for(;j;)F.unshift(j.record),j=j.parent;return{name:O,path:k,params:P,matched:F,meta:Gk(F)}}t.forEach(p=>i(p));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function rg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Wk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Wk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ig(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gk(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function og(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qk(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wv(t,e[i])<0?r=i:n=i+1}const s=Jk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Jk(t){let e=t;for(;e=e.parent;)if(Gv(e)&&Wv(t,e)===0)return e}function Gv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Yk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uv," "),o=i.indexOf("="),l=oo(o<0?i:i.slice(0,o)),c=o<0?null:oo(i.slice(o+1));if(l in e){let u=e[l];yn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function ag(t){let e="";for(let n in t){const r=t[n];if(n=_k(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&wu(i)):[r&&wu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Zk=Symbol(""),lg=Symbol(""),Ul=Symbol(""),jd=Symbol(""),Tu=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ys(4,{from:n,to:e})):g instanceof Error?c(g):Mk(g)?c(Ys(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(h);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Mv(c)){const h=(c.__vccOpts||c)[e];h&&i.push(mr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=ok(h)?h.default:h;o.mods[l]=h,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&mr(v,n,r,o,l,s)()}))}}return i}function cg(t){const e=en(Ul),n=en(jd),r=Ee(()=>{const c=ts(t.to);return e.resolve(c)}),s=Ee(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],p=n.matched;if(!h||!p.length)return-1;const g=p.findIndex(Js.bind(null,h));if(g>-1)return g;const v=ug(c[u-2]);return u>1&&ug(h)===v&&p[p.length-1].path!==v?p.findIndex(Js.bind(null,c[u-2])):g}),i=Ee(()=>s.value>-1&&rx(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&qv(n.params,r.value.params));function l(c={}){return nx(c)?e[ts(t.replace)?"replace":"push"](ts(t.to)).catch($i):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const ex=er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cg,setup(t,{slots:e}){const n=ho(cg(t)),{options:r}=en(Ul),s=Ee(()=>({[dg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tx=ex;function nx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rx(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ug(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dg=(t,e,n)=>t??e??n,sx=er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Tu),s=Ee(()=>t.route||r.value),i=en(lg,0),o=Ee(()=>{let u=ts(i);const{matched:h}=s.value;let p;for(;(p=h[u])&&!p.components;)u++;return u}),l=Ee(()=>s.value.matched[o.value]);ia(lg,Ee(()=>o.value+1)),ia(Zk,l),ia(Tu,s);const c=be();return Ir(()=>[c.value,l.value,t.name],([u,h,p],[g,v,P])=>{h&&(h.instances[p]=u,v&&v!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=v.leaveGuards),h.updateGuards.size||(h.updateGuards=v.updateGuards))),u&&h&&(!v||!Js(h,v)||!g)&&(h.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,p=l.value,g=p&&p.components[h];if(!g)return hg(n.default,{Component:g,route:u});const v=p.props[h],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,O=zu(g,Fe({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[h]=null)},ref:c}));return hg(n.default,{Component:O,route:u})||O}}});function hg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ix=sx;function ox(t){const e=zk(t.routes,t),n=t.parseQuery||Yk,r=t.stringifyQuery||ag,s=t.history,i=vi(),o=vi(),l=vi(),c=Iw(ur);let u=ur;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Rc.bind(null,N=>""+N),p=Rc.bind(null,vk),g=Rc.bind(null,oo);function v(N,q){let G,ee;return Kv(N)?(G=e.getRecordMatcher(N),ee=q):ee=N,e.addRoute(ee,G)}function P(N){const q=e.getRecordMatcher(N);q&&e.removeRoute(q)}function k(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function F(N,q){if(q=Fe({},q||c.value),typeof N=="string"){const T=kc(n,N,q.path),x=e.resolve({path:T.path},q),B=s.createHref(T.fullPath);return Fe(T,x,{params:g(x.params),hash:oo(T.hash),redirectedFrom:void 0,href:B})}let G;if(N.path!=null)G=Fe({},N,{path:kc(n,N.path,q.path).path});else{const T=Fe({},N.params);for(const x in T)T[x]==null&&delete T[x];G=Fe({},N,{params:p(T)}),q.params=p(q.params)}const ee=e.resolve(G,q),Te=N.hash||"";ee.params=h(g(ee.params));const Ne=Ek(r,Fe({},N,{hash:mk(Te),path:ee.path})),w=s.createHref(Ne);return Fe({fullPath:Ne,hash:Te,query:r===ag?Xk(N.query):N.query||{}},ee,{redirectedFrom:void 0,href:w})}function j(N){return typeof N=="string"?kc(n,N,c.value.path):Fe({},N)}function H(N,q){if(u!==N)return Ys(8,{from:q,to:N})}function W(N){return S(N)}function re(N){return W(Fe(j(N),{replace:!0}))}function le(N){const q=N.matched[N.matched.length-1];if(q&&q.redirect){const{redirect:G}=q;let ee=typeof G=="function"?G(N):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),Fe({query:N.query,hash:N.hash,params:ee.path!=null?{}:N.params},ee)}}function S(N,q){const G=u=F(N),ee=c.value,Te=N.state,Ne=N.force,w=N.replace===!0,T=le(G);if(T)return S(Fe(j(T),{state:typeof T=="object"?Fe({},Te,T.state):Te,force:Ne,replace:w}),q||G);const x=G;x.redirectedFrom=q;let B;return!Ne&&Tk(r,ee,G)&&(B=Ys(16,{to:x,from:ee}),jt(ee,ee,!0,!1)),(B?Promise.resolve(B):I(x,ee)).catch(L=>Fn(L)?Fn(L,2)?L:Vt(L):ve(L,x,ee)).then(L=>{if(L){if(Fn(L,2))return S(Fe({replace:w},j(L.to),{state:typeof L.to=="object"?Fe({},Te,L.to.state):Te,force:Ne}),q||x)}else L=A(x,ee,!0,w,Te);return C(x,ee,L),L})}function b(N,q){const G=H(N,q);return G?Promise.reject(G):Promise.resolve()}function y(N){const q=bn.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(N):N()}function I(N,q){let G;const[ee,Te,Ne]=ax(N,q);G=xc(ee.reverse(),"beforeRouteLeave",N,q);for(const T of ee)T.leaveGuards.forEach(x=>{G.push(mr(x,N,q))});const w=b.bind(null,N,q);return G.push(w),Tt(G).then(()=>{G=[];for(const T of i.list())G.push(mr(T,N,q));return G.push(w),Tt(G)}).then(()=>{G=xc(Te,"beforeRouteUpdate",N,q);for(const T of Te)T.updateGuards.forEach(x=>{G.push(mr(x,N,q))});return G.push(w),Tt(G)}).then(()=>{G=[];for(const T of Ne)if(T.beforeEnter)if(yn(T.beforeEnter))for(const x of T.beforeEnter)G.push(mr(x,N,q));else G.push(mr(T.beforeEnter,N,q));return G.push(w),Tt(G)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),G=xc(Ne,"beforeRouteEnter",N,q,y),G.push(w),Tt(G))).then(()=>{G=[];for(const T of o.list())G.push(mr(T,N,q));return G.push(w),Tt(G)}).catch(T=>Fn(T,8)?T:Promise.reject(T))}function C(N,q,G){l.list().forEach(ee=>y(()=>ee(N,q,G)))}function A(N,q,G,ee,Te){const Ne=H(N,q);if(Ne)return Ne;const w=q===ur,T=ks?history.state:{};G&&(ee||w?s.replace(N.fullPath,Fe({scroll:w&&T&&T.scroll},Te)):s.push(N.fullPath,Te)),c.value=N,jt(N,q,G,w),Vt()}let E;function Pe(){E||(E=s.listen((N,q,G)=>{if(!Wt.listening)return;const ee=F(N),Te=le(ee);if(Te){S(Fe(Te,{replace:!0}),ee).catch($i);return}u=ee;const Ne=c.value;ks&&xk(Xp(Ne.fullPath,G.delta),Fl()),I(ee,Ne).catch(w=>Fn(w,12)?w:Fn(w,2)?(S(w.to,ee).then(T=>{Fn(T,20)&&!G.delta&&G.type===ao.pop&&s.go(-1,!1)}).catch($i),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ve(w,ee,Ne))).then(w=>{w=w||A(ee,Ne,!1),w&&(G.delta&&!Fn(w,8)?s.go(-G.delta,!1):G.type===ao.pop&&Fn(w,20)&&s.go(-1,!1)),C(ee,Ne,w)}).catch($i)}))}let Qe=vi(),De=vi(),de;function ve(N,q,G){Vt(N);const ee=De.list();return ee.length?ee.forEach(Te=>Te(N,q,G)):console.error(N),Promise.reject(N)}function gt(){return de&&c.value!==ur?Promise.resolve():new Promise((N,q)=>{Qe.add([N,q])})}function Vt(N){return de||(de=!N,Pe(),Qe.list().forEach(([q,G])=>N?G(N):q()),Qe.reset()),N}function jt(N,q,G,ee){const{scrollBehavior:Te}=t;if(!ks||!Te)return Promise.resolve();const Ne=!G&&Dk(Xp(N.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return po().then(()=>Te(N,q,Ne)).then(w=>w&&kk(w)).catch(w=>ve(w,N,q))}const qe=N=>s.go(N);let Ke;const bn=new Set,Wt={currentRoute:c,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:F,options:t,push:W,replace:re,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:De.add,isReady:gt,install(N){const q=this;N.component("RouterLink",tx),N.component("RouterView",ix),N.config.globalProperties.$router=q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ts(c)}),ks&&!Ke&&c.value===ur&&(Ke=!0,W(s.location).catch(Te=>{}));const G={};for(const Te in ur)Object.defineProperty(G,Te,{get:()=>c.value[Te],enumerable:!0});N.provide(Ul,q),N.provide(jd,Kg(G)),N.provide(Tu,c);const ee=N.unmount;bn.add(N),N.unmount=function(){bn.delete(N),bn.size<1&&(u=ur,E&&E(),E=null,c.value=ur,Ke=!1,de=!1),ee()}}};function Tt(N){return N.reduce((q,G)=>q.then(()=>y(G)),Promise.resolve())}return Wt}function ax(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Js(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Js(u,c))||s.push(c))}return[n,r,s]}function Co(){return en(Ul)}function Qv(t){return en(jd)}const Jv="/img/global_logo.png",lx={name:"Header",computed:{isBlogActive(){return this.$route.path.startsWith("/blog")},isButikActive(){return this.$route.path==="/"||this.$route.path.startsWith("/category")||this.$route.path.startsWith("/product")}},setup(){const e=So().cartItems,n=be(""),r=be(!1),{allProducts:s}=Vn(),i=Co(),o=Ee(()=>n.value?s.value.filter(g=>g.name.toLowerCase().includes(n.value.toLowerCase())):[]);return{cartItems:e,searchQuery:n,showDropdown:r,filteredProducts:o,onInput:()=>{r.value=n.value.length>0},goToProduct:g=>{r.value=!1,n.value="",i.push(`/product/${g}`)},closeDropdown:()=>{r.value=!1},onSearch:()=>{},highlightMatch:(g,v)=>{if(!v)return g;const P=v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),k=new RegExp(`(${P})`,"gi");return g.replace(k,'<span class="text-navbar-green font-bold">$1</span>')}}}},cx={class:"bg-light-brown py-4 px-4 sm:px-20 flex flex-col md:flex-col lg:flex-row items-center justify-between h-auto lg:h-28 space-y-4 md:space-y-6 lg:space-y-0"},ux={class:"flex-shrink-0"},dx={class:"container mt-5 mx-auto"},hx={class:"flex justify-center space-x-4 sm:space-x-8 font"},fx={class:"container mx-auto flex justify-center"},px={id:"search-bar",class:"w-full max-w-2xl mx-auto relative flex items-center"},gx={key:0,class:"absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-52 overflow-y-auto p-2 shadow-lg",style:{top:"calc(100% + 4px)"}},mx=["onClick"],_x={class:"flex items-center justify-between"},yx={class:"flex items-center space-x-6"},vx=["src"],bx=["innerHTML"],wx={class:"text-gray-500 text-sm italic"},Ex={class:"relative p-1 rounded-md"},Tx={class:"absolute -top-2 -right-2 bg-navbar-green text-white rounded-full text-xs px-2 py-1"};function Ix(t,e,n,r,s,i){const o=We("router-link"),l=Jw("click-outside");return V(),U("header",cx,[m("div",ux,[we(o,{to:"/"},{default:Ze(()=>e[3]||(e[3]=[m("img",{src:Jv,alt:"Logo",class:"h-24 w-auto"},null,-1)])),_:1})]),m("div",dx,[m("div",hx,[we(o,{id:"butik-link",to:"/",class:wt(["text-xl text-white font-semibold hover:text-dark-brown focus:text-white",{"active-link":i.isButikActive}])},{default:Ze(()=>e[4]||(e[4]=[ot(" Butik ")])),_:1},8,["class"]),e[6]||(e[6]=m("a",{id:"cellatest-link",href:"https://www.cellatest.com/",target:"_blank",rel:"noopener noreferrer",class:"text-xl text-white font-semibold hover:text-dark-brown focus:text-white"}," CELLA TEST ",-1)),we(o,{id:"blog-link",to:"/blog",class:wt(["text-xl text-white font-semibold hover:text-dark-brown focus:text-white",{"active-link":i.isBlogActive}])},{default:Ze(()=>e[5]||(e[5]=[ot(" Blog ")])),_:1},8,["class"]),e[7]||(e[7]=m("a",{id:"kontakt-link",href:"https://www.cellatest.com/kontakt",target:"_blank",rel:"noopener noreferrer",class:"text-xl text-white font-semibold hover:text-dark-brown focus:text-white"}," Kontakt ",-1))])]),m("div",fx,[Ve((V(),U("div",px,[Ve(m("input",{type:"text",placeholder:"Søg efter produkter",class:"w-full h-12 pl-4 pr-12 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green","onUpdate:modelValue":e[0]||(e[0]=c=>r.searchQuery=c),onInput:e[1]||(e[1]=(...c)=>r.onInput&&r.onInput(...c))},null,544),[[Je,r.searchQuery]]),m("button",{class:"absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center pr-4",onClick:e[2]||(e[2]=(...c)=>r.onSearch&&r.onSearch(...c))},e[8]||(e[8]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-navbar-green",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)])),we(K0,{name:"dropdown"},{default:Ze(()=>[r.showDropdown&&r.filteredProducts.length>0?(V(),U("ul",gx,[(V(!0),U(me,null,$e(r.filteredProducts,c=>(V(),U("li",{key:c.id,class:"py-2 px-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-100 cursor-pointer",onClick:u=>r.goToProduct(c.id)},[m("div",_x,[m("div",yx,[m("img",{src:c.image,alt:"Product image",class:"w-16 h-16 rounded object-cover border border-gray-200 shadow-sm"},null,8,vx),m("span",{innerHTML:r.highlightMatch(c.name,r.searchQuery)},null,8,bx)]),m("span",wx,se(c.category),1)])],8,mx))),128))])):$t("",!0)]),_:1})])),[[l,r.closeDropdown]]),e[10]||(e[10]=m("div",{class:"flex space-x-6"},null,-1)),m("div",Ex,[we(o,{id:"cart-link",to:"/cart",class:"block text-white"},{default:Ze(()=>e[9]||(e[9]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13H7z"})],-1)])),_:1}),m("span",Tx,se(r.cartItems.length),1)])])])}const Ax=tt(lx,[["render",Ix],["__scopeId","data-v-8dca19d7"]]),Sx={name:"Footer"},Cx={class:"bg-light-brown py-8 text-white mt-40 pb-0"};function Px(t,e,n,r,s,i){return V(),U("footer",Cx,e[0]||(e[0]=[Dm('<div class="container mx-auto px-4" data-v-793cc86c><div class="grid grid-cols-1 gap-8 place-items-top md:grid-cols-3" data-v-793cc86c><div id="left-section" class="flex flex-col space-y-4 items-center md:items-start text-center md:text-left" data-v-793cc86c><h3 class="text-2xl font-bold" data-v-793cc86c>Nyttige links</h3><ul class="space-y-2 text-lg" data-v-793cc86c><li data-v-793cc86c><a href="https://bemergroup.com/da_DK/home" target="_blank" rel="noopener noreferrer" class="hover:underline" data-v-793cc86c>Bemer</a></li><li data-v-793cc86c><a href="https://www.instagram.com/stutteri_hindsholm/?hl=da" target="_blank" rel="noopener noreferrer" class="hover:underline" data-v-793cc86c>Stutteri Hindsholm</a></li><li data-v-793cc86c><a href="https://www.cell-wellbeing.com/" target="_blank" rel="noopener noreferrer" class="hover:underline" data-v-793cc86c>Cell Wellbeing</a></li><li data-v-793cc86c><a href="https://www.cellatest.com/gdpr-cookies" target="_blank" rel="noopener noreferrer" class="hover:underline" data-v-793cc86c>Cookie og GDPR politik</a></li></ul></div><div class="flex flex-col items-center space-y-4 mt-8" data-v-793cc86c><img src="'+Jv+'" alt="Cella Test Logo" class="w-36 h-36" data-v-793cc86c></div><div id="right-section" class="flex flex-col space-y-4 items-center md:items-end text-center md:text-right" data-v-793cc86c><h3 class="text-2xl font-bold" data-v-793cc86c>Kontakt</h3><ul class="space-y-2 text-lg" data-v-793cc86c><li data-v-793cc86c><p class="text-lg" data-v-793cc86c>Kølstrupvej 45, 5330 Munkebo</p></li><li data-v-793cc86c><p class="text-lg" data-v-793cc86c>Email: <a href="mailto:info@cellatest.com" class="hover:underline" data-v-793cc86c>info@cellatest.com</a></p></li><li data-v-793cc86c><p class="text-lg" data-v-793cc86c>Telefon: +45 22 29 00 82</p></li><li data-v-793cc86c><p class="text-lg" data-v-793cc86c>CVR: 40715355</p></li></ul></div></div><div class="flex justify-center mt-8 space-x-4" data-v-793cc86c><a href="https://www.instagram.com/cella_test_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300" data-v-793cc86c><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 50 50" data-v-793cc86c><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" data-v-793cc86c></path></svg></a><a href="https://www.facebook.com/Testdinhest/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300" data-v-793cc86c><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 50 50" data-v-793cc86c><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" data-v-793cc86c></path></svg></a><a href="https://www.linkedin.com/in/cella-test-aps-229035247" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300" data-v-793cc86c><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" data-v-793cc86c><path d="M12,0C5.372,0,0,5.372,0,12c0,6.628,5.372,12,12,12s12-5.372,12-12C24,5.372,18.628,0,12,0z M9.545,17.545H7.091V10.18 h2.454V17.545z M8.318,9.09c-0.786,0-1.424-0.638-1.424-1.424c0-0.786,0.638-1.424,1.424-1.424s1.424,0.638,1.424,1.424 C9.742,8.452,9.104,9.09,8.318,9.09z M18.545,17.545h-2.454v-3.636c0-0.867-0.015-1.982-1.208-1.982 c-1.208,0-1.393,0.945-1.393,1.918v3.7H11.036V10.18h2.355v1.005h0.034c0.328-0.621,1.128-1.275,2.325-1.275 c2.484,0,2.944,1.635,2.944,3.761V17.545z" data-v-793cc86c></path></svg></a></div></div><div class="bg-dark-brown text-center mt-8 p-2" data-v-793cc86c><p class="text-xs" data-v-793cc86c>© 2021 CELLA TEST</p></div>',2)]))}const Rx=tt(Sx,[["render",Px],["__scopeId","data-v-793cc86c"]]),kx={name:"App",components:{Navbar:ik,Header:Ax,Footer:Rx}},xx={id:"app",class:"bg-beige"};function Dx(t,e,n,r,s,i){const o=We("Navbar"),l=We("Header"),c=We("router-view"),u=We("Footer");return V(),U("div",xx,[we(o),we(l),we(c),we(u)])}const Ox=tt(kx,[["render",Dx]]),Vx="/img/Human-Lines-Shopping-LogoIcons-mobile.png",Nx="/img/Horse-Lines-Shopping-LogoIcons-mobile.png",Lx="/img/Dog-Lines-Shopping-LogoIcons-mobile.png",Mx="/img/Cat-Lines-Shopping-LogoIcons-mobile.png",Fx={name:"ProductCategories"},Ux={class:"container mt-5 mx-auto px-2"},Bx={class:"md:flex justify-center"},$x={class:"md:flex mt-5 justify-center"};function jx(t,e,n,r,s,i){const o=We("router-link");return V(),U("div",Ux,[m("div",Bx,[we(o,{to:"/category/mennesker",class:"category-card"},{default:Ze(()=>e[0]||(e[0]=[m("div",{class:"flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg"},[m("div",{class:"lg:flex lg:items-center"},[m("div",{class:"lg:flex-shrink-0"},[m("img",{class:"rounded-lg w-24 md:w-32 lg:w-40",src:Vx,alt:""})]),m("div",{class:"mt-4 lg:mt-0 lg:ml-6"},[m("div",{class:"uppercase tracking-wide text-lg text-black font-bold hover:underline"},"Mennesker"),m("a",{href:"#",class:"block mt-1 text-lg leading-tight font-semibold text-gray-900"},"Opdag produkter, der styrker din sundhed og livskvalitet")])])],-1)])),_:1}),we(o,{to:"/category/heste",class:"category-card"},{default:Ze(()=>e[1]||(e[1]=[m("div",{class:"flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg"},[m("div",{class:"lg:flex lg:items-center"},[m("div",{class:"lg:flex-shrink-0"},[m("img",{class:"rounded-lg w-24 md:w-32 lg:w-40",src:Nx,alt:""})]),m("div",{class:"mt-4 lg:mt-0 lg:ml-6"},[m("div",{class:"uppercase tracking-wide text-lg text-black font-bold hover:underline"},"Heste"),m("a",{href:"#",class:"block mt-1 text-lg leading-tight font-semibold text-gray-900"},"Støt din hests sundhed med de rette løsninger")])])],-1)])),_:1})]),m("div",$x,[we(o,{to:"/category/hunde",class:"category-card"},{default:Ze(()=>e[2]||(e[2]=[m("div",{class:"flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg"},[m("div",{class:"lg:flex lg:items-center"},[m("div",{class:"lg:flex-shrink-0"},[m("img",{class:"rounded-lg w-24 md:w-32 lg:w-40",src:Lx,alt:""})]),m("div",{class:"mt-4 lg:mt-0 lg:ml-6"},[m("div",{class:"uppercase tracking-wide text-lg text-black font-bold hover:underline"},"Hunde"),m("a",{href:"#",class:"block mt-1 text-lg leading-tight font-semibold text-gray-900"},"Hold din hund sund med pålidelige produkter")])])],-1)])),_:1}),we(o,{to:"/category/katte",class:"category-card"},{default:Ze(()=>e[3]||(e[3]=[m("div",{class:"flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg"},[m("div",{class:"lg:flex lg:items-center"},[m("div",{class:"lg:flex-shrink-0"},[m("img",{class:"rounded-lg w-24 md:w-32 lg:w-40",src:Mx,alt:""})]),m("div",{class:"mt-4 lg:mt-0 lg:ml-6"},[m("div",{class:"uppercase tracking-wide text-lg text-black font-bold hover:underline"},"Katte"),m("a",{href:"#",class:"block mt-1 text-lg leading-tight font-semibold text-gray-900"},"Sørg for din kats sundhed med kærlige løsninger")])])],-1)])),_:1})])])}const qx=tt(Fx,[["render",jx],["__scopeId","data-v-e717f47e"]]);var Hx=Object.defineProperty,fg=Object.getOwnPropertySymbols,Kx=Object.prototype.hasOwnProperty,zx=Object.prototype.propertyIsEnumerable,pg=(t,e,n)=>e in t?Hx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yv=(t,e)=>{for(var n in e||(e={}))Kx.call(e,n)&&pg(t,n,e[n]);if(fg)for(var n of fg(e))zx.call(e,n)&&pg(t,n,e[n]);return t},Bl=t=>typeof t=="function",$l=t=>typeof t=="string",Xv=t=>$l(t)&&t.trim().length>0,Wx=t=>typeof t=="number",Zr=t=>typeof t>"u",lo=t=>typeof t=="object"&&t!==null,Gx=t=>kn(t,"tag")&&Xv(t.tag),Zv=t=>window.TouchEvent&&t instanceof TouchEvent,eb=t=>kn(t,"component")&&tb(t.component),Qx=t=>Bl(t)||lo(t),tb=t=>!Zr(t)&&($l(t)||Qx(t)||eb(t)),gg=t=>lo(t)&&["height","width","right","left","top","bottom"].every(e=>Wx(t[e])),kn=(t,e)=>(lo(t)||Bl(t))&&e in t,Jx=(t=>()=>t++)(0);function Dc(t){return Zv(t)?t.targetTouches[0].clientX:t.clientX}function mg(t){return Zv(t)?t.targetTouches[0].clientY:t.clientY}var Yx=t=>{Zr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},Po=t=>eb(t)?Po(t.component):Gx(t)?er({render(){return t}}):typeof t=="string"?t:Se(ts(t)),Xx=t=>{if(typeof t=="string")return t;const e=kn(t,"props")&&lo(t.props)?t.props:{},n=kn(t,"listeners")&&lo(t.listeners)?t.listeners:{};return{component:Po(t),props:e,listeners:n}},Zx=()=>typeof window<"u",qd=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},e2=t=>["on","off","emit"].every(e=>kn(t,e)&&Bl(t[e])),Jt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Jt||(Jt={}));var Ga;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Ga||(Ga={}));var Yt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Yt||(Yt={}));var dn="Vue-Toastification",un={type:{type:String,default:Jt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},nb={type:un.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},va={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:un.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Iu={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},rb={transition:{type:[Object,String],default:`${dn}__bounce`}},t2={position:{type:String,default:Ga.TOP_RIGHT},draggable:un.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:un.trueBoolean,pauseOnHover:un.trueBoolean,closeOnClick:un.trueBoolean,timeout:Iu.timeout,hideProgressBar:Iu.hideProgressBar,toastClassName:un.classNames,bodyClassName:un.classNames,icon:nb.customIcon,closeButton:va.component,closeButtonClassName:va.classNames,showCloseButtonOnHover:va.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new qd}},n2={id:{type:[String,Number],required:!0,default:0},type:un.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},r2={container:{type:[Object,Function],default:()=>document.body},newestOnTop:un.trueBoolean,maxToasts:{type:Number,default:20},transition:rb.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:un.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Qn={CORE_TOAST:t2,TOAST:n2,CONTAINER:r2,PROGRESS_BAR:Iu,ICON:nb,TRANSITION:rb,CLOSE_BUTTON:va},sb=er({name:"VtProgressBar",props:Qn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${dn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function s2(t,e){return V(),U("div",{style:uo(t.style),class:wt(t.cpClass)},null,6)}sb.render=s2;var i2=sb,ib=er({name:"VtCloseButton",props:Qn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Po(this.component):"button"},classes(){const t=[`${dn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),o2=ot(" × ");function a2(t,e){return V(),bt(Bu(t.buttonComponent),ll({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Ze(()=>[o2]),_:1},16,["aria-label","class"])}ib.render=a2;var l2=ib,ob={},c2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u2=m("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),d2=[u2];function h2(t,e){return V(),U("svg",c2,d2)}ob.render=h2;var f2=ob,ab={},p2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},g2=m("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),m2=[g2];function _2(t,e){return V(),U("svg",p2,m2)}ab.render=_2;var _g=ab,lb={},y2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},v2=m("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),b2=[v2];function w2(t,e){return V(),U("svg",y2,b2)}lb.render=w2;var E2=lb,cb={},T2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},I2=m("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),A2=[I2];function S2(t,e){return V(),U("svg",T2,A2)}cb.render=S2;var C2=cb,ub=er({name:"VtIcon",props:Qn.ICON,computed:{customIconChildren(){return kn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return $l(this.customIcon)?this.trimValue(this.customIcon):kn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return kn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:tb(this.customIcon)?Po(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Jt.DEFAULT]:_g,[Jt.INFO]:_g,[Jt.SUCCESS]:f2,[Jt.ERROR]:C2,[Jt.WARNING]:E2}[this.type]},iconClasses(){const t=[`${dn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Xv(t)?t.trim():e}}});function P2(t,e){return V(),bt(Bu(t.component),{class:wt(t.iconClasses)},{default:Ze(()=>[ot(se(t.customIconChildren),1)]),_:1},8,["class"])}ub.render=P2;var R2=ub,db=er({name:"VtToast",components:{ProgressBar:i2,CloseButton:l2,Icon:R2},inheritAttrs:!1,props:Object.assign({},Qn.CORE_TOAST,Qn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${dn}__toast`,`${dn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${dn}__toast--rtl`),t},bodyClasses(){return[`${dn}__toast-${$l(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return gg(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:kn,getVueComponentFromObj:Po,closeToast(){this.eventBus.emit(Yt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Dc(t),y:mg(t)},this.dragStart=Dc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Dc(t),y:mg(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,gg(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),k2=["role"];function x2(t,e){const n=We("Icon"),r=We("CloseButton"),s=We("ProgressBar");return V(),U("div",{class:wt(t.classes),style:uo(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(V(),bt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):$t("v-if",!0),m("div",{role:t.accessibility.toastRole||"alert",class:wt(t.bodyClasses)},[typeof t.content=="string"?(V(),U(me,{key:0},[ot(se(t.content),1)],2112)):(V(),bt(Bu(t.getVueComponentFromObj(t.content)),ll({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},Xw(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,k2),t.closeButton?(V(),bt(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:qn(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):$t("v-if",!0),t.timeout?(V(),bt(s,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):$t("v-if",!0)],38)}db.render=x2;var D2=db,hb=er({name:"VtTransition",props:Qn.TRANSITION,emits:["leave"],methods:{hasProp:kn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function O2(t,e){return V(),bt(dE,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Ze(()=>[Yw(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}hb.render=O2;var V2=hb,fb=er({name:"VueToastification",devtools:{hide:!0},components:{Toast:D2,VtTransition:V2},props:Object.assign({},Qn.CORE_TOAST,Qn.CONTAINER,Qn.TRANSITION),data(){return{count:0,positions:Object.values(Ga),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Yt.ADD,this.addToast),t.on(Yt.CLEAR,this.clearToasts),t.on(Yt.DISMISS,this.dismissToast),t.on(Yt.UPDATE,this.updateToast),t.on(Yt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Bl(t)&&(t=await t()),Yx(this.$el),t.appendChild(this.$el)},setToast(t){Zr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=Xx(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Zr(e)&&!Zr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Zr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${dn}__container`,t].concat(this.defaults.containerClassName)}}});function N2(t,e){const n=We("Toast"),r=We("VtTransition");return V(),U("div",null,[(V(!0),U(me,null,$e(t.positions,s=>(V(),U("div",{key:s},[we(r,{transition:t.defaults.transition,class:wt(t.getClasses(s))},{default:Ze(()=>[(V(!0),U(me,null,$e(t.getPositionToasts(s),i=>(V(),bt(n,ll({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}fb.render=N2;var L2=fb,yg=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new qd;e&&po(()=>{const i=qm(L2,Yv({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(Zr(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${dn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const l=Object.assign({},{id:Jx(),type:Jt.DEFAULT},o,{content:i});return n.emit(Yt.ADD,l),l.id};r.clear=()=>n.emit(Yt.CLEAR,void 0),r.updateDefaults=i=>{n.emit(Yt.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(Yt.DISMISS,i)};function s(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(Yt.UPDATE,{id:i,options:u,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Jt.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Jt.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Jt.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Jt.WARNING})),r},M2=()=>{const t=()=>console.warn(`[${dn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function pb(t){return Zx()?e2(t)?yg({eventBus:t},!1):yg(t,!0):M2()}var gb=Symbol("VueToastification"),mb=new qd,F2=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=pb(Yv({eventBus:mb},e));t.provide(gb,n)},Hd=t=>{const e=Ku()?en(gb,void 0):void 0;return e||pb(mb)},U2=F2;const B2={name:"ProductCard",props:{product:Object},setup(){const t=So(),e=Hd();return{addToCart:s=>{t.cartItems.find(i=>i.id===s.id)?e.warning("Produktet er allerede tilføjet i kurven!",{icon:"⚠️",toastClassName:"bg-[#e6dfd4] text-[#5e4b3f] font-bold"}):(t.addToCart(s),e.success("Produktet er tilføjet i kurven!",{icon:"✔️",toastClassName:"bg-[#95ad81] text-white font-bold"}))},requiresSelection:s=>s.price==="Kontakt for pris"?!0:[31,36,37,38].includes(s.id)}}},$2={id:"product-card",class:"bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col w-full h-full"},j2={class:"flex-grow flex flex-col items-center"},q2=["src","alt"],H2={class:"text-base font-semibold text-center text-dark-brown px-2"},K2={class:"text-start text-black mb-4 line-clamp-3 px-2"},z2={class:"text-xl font-bold text-dark-green text-end mb-4 px-2"},W2=["disabled"];function G2(t,e,n,r,s,i){const o=We("router-link");return V(),U("div",$2,[m("div",j2,[m("img",{src:n.product.image,alt:n.product.name,class:"w-full h-48 object-contain mb-4 rounded"},null,8,q2),m("h3",H2,se(n.product.name),1),m("p",K2,se(n.product.description),1)]),m("p",z2,se(n.product.price),1),m("button",{id:"add-to-cart-btn",onClick:e[0]||(e[0]=l=>r.addToCart(n.product)),disabled:r.requiresSelection(n.product),class:wt({"bg-light-green text-white font-semibold py-2 px-4 rounded w-full hover:bg-dark-green transition":!0,"opacity-50 cursor-not-allowed":r.requiresSelection(n.product)})}," Læg i kurv ",10,W2),we(o,{id:"read-more-btn",to:`/product/${n.product.id}`,class:"bg-light-brown text-white font-semibold py-2 px-4 rounded w-full hover:bg-dark-brown transition mt-2 text-center block"},{default:Ze(()=>e[1]||(e[1]=[ot(" Læs Mere ")])),_:1},8,["to"])])}const si=tt(B2,[["render",G2],["__scopeId","data-v-41e66f41"]]),Q2={name:"FeaturedProducts",components:{ProductCard:si},setup(){const e=Vn().allProducts;return{randomProducts:Ee(()=>{const r=e.value;return r.length===0?[]:[...r].sort(()=>.5-Math.random()).slice(0,8)})}}},J2={class:"container mt-10 mx-auto px-4 md:px-10"},Y2={key:0,class:"grid gap-10 p-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"},X2={key:1,class:"text-center text-black mt-6"};function Z2(t,e,n,r,s,i){const o=We("ProductCard");return V(),U("section",J2,[e[0]||(e[0]=m("h2",{class:"text-3xl font-bold text-center text-dark-brown mb-8"},"UDVALGTE PRODUKTER",-1)),r.randomProducts.length>0?(V(),U("div",Y2,[(V(!0),U(me,null,$e(r.randomProducts,l=>(V(),bt(o,{key:l.id,product:l},null,8,["product"]))),128))])):(V(),U("p",X2,"Ingen produkter at vise."))])}const eD=tt(Q2,[["render",Z2]]),tD={name:"HomePage",components:{ProductCategories:qx,FeaturedProducts:eD}};function nD(t,e,n,r,s,i){const o=We("ProductCategories"),l=We("FeaturedProducts");return V(),U("div",null,[we(o),we(l)])}const rD=tt(tD,[["render",nD],["__scopeId","data-v-b6d1aeed"]]);function sD(){const t=localStorage.getItem("featuredProductIds");return t?JSON.parse(t):[]}const iD=Wu("featuredProducts",()=>{const t=be(sD()),e=Vn(),n=Ee(()=>e.allProducts.value.filter(i=>t.value.includes(i.id)));function r(i){t.value.includes(i)||t.value.push(i)}function s(i){t.value=t.value.filter(o=>o!==i)}return Ir(t,i=>{localStorage.setItem("featuredProductIds",JSON.stringify(i))},{deep:!0}),{featuredProductIds:t,featuredProducts:n,addFeaturedProduct:r,removeFeaturedProduct:s}}),oD="/assets/logo-CkAEtsad.png",aD={name:"AdminPanel",setup(){const t=Fr(),e=Dd(gl),n=mu(e,"users"),r=mu(e,"messages"),s=be(!1),i=be(null),o=be(""),l=q=>{i.value=q,s.value=!0},c=()=>{s.value=!1,o.value=""},u=async()=>{if(!i.value||!o.value.trim())return;const G={from:t.user.email,to:i.value.email,content:o.value.trim(),timestamp:Wp()};await vu(r,G),c()},h=be([]),p=Ee(()=>h.value.filter(q=>q.role==="admin")),g=be(""),v=be([]),P=async()=>{const q=await yu(n),G=[];q.forEach(ee=>{G.push({id:ee.id,...ee.data()})}),h.value=G},k=async q=>{const G=Gs(e,"users",q.id);try{if(!t.isAdmin())throw new Error("Insufficient permissions");await Lv(G,{role:q.role}),console.log(`User role updated to: ${q.role}`)}catch(ee){console.error("Error updating user role:",ee)}},O=async()=>{if(!g.value.trim())return;const G={from:t.user.email,to:"all",content:g.value.trim(),timestamp:Wp()};await vu(r,G),g.value="",F()},F=async()=>{const q=await yu(r),G=[];q.forEach(ee=>{G.push(ee.data())}),G.sort((ee,Te)=>{var Ne,w;return(((Ne=Te.timestamp)==null?void 0:Ne.seconds)||0)-(((w=ee.timestamp)==null?void 0:w.seconds)||0)}),v.value=G},j=Vn(),H=iD(),{allProducts:W,addProduct:re,updateProduct:le,deleteProduct:S}=j,{featuredProductIds:b,addFeaturedProduct:y,removeFeaturedProduct:I}=H,C=be(["mennesker","heste","hunde","katte"]),A=be(["Vitaminer & Mineraler","Fordøjelse","Collagen","Olie"]),E=be({name:"",description:"",fullDescription:"",price:"DKK 250.00",image:"",categories:[],subcategories:[]}),Pe=be([]),Qe=be([]),De=()=>{E.value.categories=Pe.value,E.value.subcategories=Qe.value,re({...E.value}),E.value={name:"",description:"",fullDescription:"",price:"DKK 250.00",image:"",categories:[],subcategories:[]},Pe.value=[],Qe.value=[]},de=be(!1),ve=be({id:null,name:"",description:"",fullDescription:"",price:"",image:"",categories:[],subcategories:[]}),gt=be([]),Vt=be([]),jt=q=>{ve.value={...q},gt.value=q.categories,Vt.value=q.subcategories,de.value=!0},qe=()=>{de.value=!1},Ke=()=>{ve.value.categories=gt.value,ve.value.subcategories=Vt.value,le(ve.value),qe()},bn=q=>{confirm("Er du sikker på at du vil slette dette produkt?")&&S(q)},Wt=q=>b.includes(q),Tt=q=>{Wt(q)?I(q):y(q)},N=q=>q?q.toDate().toLocaleString():"N/A";return il(()=>{P(),F()}),{fallbackLogo:oD,admins:p,showMessageModal:s,selectedAdmin:i,message:o,openMessageModal:l,closeMessageModal:c,sendMessage:u,users:h,updateUserRole:k,loadUsers:P,messageContent:g,sendBroadcastMessage:O,allMessages:v,allProducts:W,newProduct:E,availableCategories:C,availableSubcategories:A,selectedCategories:Pe,selectedSubcategories:Qe,handleAddProduct:De,showEditModal:de,editProductData:ve,selectedEditCategories:gt,selectedEditSubcategories:Vt,openEditModal:jt,closeEditModal:qe,handleEditProduct:Ke,handleDelete:bn,isFeatured:Wt,toggleFeatured:Tt,formatTimestamp:N}}},lD={class:"container mt-10 mx-auto px-4 md:px-10"},cD={class:"bg-blog-post p-6 rounded-lg shadow-md mb-8"},uD={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},dD=["src"],hD={class:"flex-1"},fD={class:"text-xl font-semibold"},pD={class:"text-gray-700"},gD=["onClick"],mD={key:0,class:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"},_D={class:"bg-white p-6 rounded-lg shadow-md max-w-md w-full relative"},yD={class:"text-2xl font-semibold text-navbar-green mb-4"},vD={class:"flex justify-end space-x-4 mt-4"},bD={class:"bg-blog-post p-6 rounded-lg shadow-md mb-8 mt-8"},wD={class:"overflow-x-auto"},ED={class:"min-w-full table-auto bg-white border"},TD={class:"px-4 py-2 border-b"},ID={class:"block font-medium text-gray-900"},AD={class:"block text-sm text-gray-500 md:hidden capitalize"},SD={class:"px-4 py-2 border-b capitalize hidden md:table-cell"},CD={class:"px-4 py-2 border-b"},PD=["onUpdate:modelValue","onChange"],RD={class:"bg-blog-post p-6 rounded-lg shadow-md mb-8 mt-8"},kD={class:"mt-8"},xD={class:"text-sm text-gray-500 mb-1"},DD={class:"text-gray-800"},OD={class:"bg-blog-post p-6 rounded-lg shadow-md mb-8"},VD={class:"flex gap-4"},ND={class:"flex-1"},LD={class:"flex-1"},MD=["value"],FD=["value"],UD={class:"overflow-x-auto"},BD={class:"min-w-full bg-blog-post border"},$D={class:"px-6 py-4 border-b"},jD={class:"px-6 py-4 border-b"},qD={class:"px-6 py-4 border-b"},HD={class:"px-6 py-4 border-b"},KD=["checked","onChange"],zD={class:"px-6 py-4 border-b"},WD=["onClick"],GD=["onClick"],QD={key:0,class:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"},JD={class:"bg-white p-6 rounded-lg shadow-md max-w-md w-full relative"},YD={class:"flex gap-4"},XD={class:"flex-1"},ZD={class:"flex-1"},eO=["value"],tO=["value"],nO={class:"flex justify-end space-x-4"};function rO(t,e,n,r,s,i){return V(),U("section",lD,[e[55]||(e[55]=m("h2",{class:"text-3xl font-bold text-left text-navbar-green mb-8"},"Admin Panel",-1)),m("div",cD,[e[25]||(e[25]=m("h3",{class:"text-3xl font-bold text-left text-navbar-green mb-3"},"Administratorer",-1)),m("div",uD,[(V(!0),U(me,null,$e(r.admins,o=>(V(),U("div",{key:o.id,class:"flex items-center p-1 bg-white rounded-lg shadow-md mb-1"},[m("img",{src:o.picture||r.fallbackLogo,alt:"Admin Picture",class:"w-16 h-16 rounded-full mr-4"},null,8,dD),m("div",hD,[m("h3",fD,se(o.name||"No Name"),1),m("p",pD,se(o.email),1),m("p",{class:wt({"text-green-500":o.online,"text-red-500":!o.online})},se(o.online?"Online":"Offline"),3)]),m("a",{href:"#",onClick:qn(l=>r.openMessageModal(o),["prevent"]),class:"text-gray-500 hover:text-gray-700 mr-4"},e[22]||(e[22]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},[m("path",{d:"M12 12.713l11.985-6.713-11.985-6.713-11.985 6.713 11.985 6.713zm0 2.287l-12-6.75v11.75h24v-11.75l-12 6.75z"})],-1)]),8,gD)]))),128))]),r.showMessageModal?(V(),U("div",mD,[m("div",_D,[m("h3",yD,"Send Besked til "+se(r.selectedAdmin.name),1),m("form",{onSubmit:e[2]||(e[2]=qn((...o)=>r.sendMessage&&r.sendMessage(...o),["prevent"]))},[m("div",null,[e[23]||(e[23]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"message"},"Besked",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.message=o),id:"message",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.message]])]),m("div",vD,[m("button",{type:"button",onClick:e[1]||(e[1]=(...o)=>r.closeMessageModal&&r.closeMessageModal(...o)),class:"bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition"}," Annuller "),e[24]||(e[24]=m("button",{type:"submit",class:"bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"}," Send Besked ",-1))])],32)])])):$t("",!0)]),m("div",bD,[e[28]||(e[28]=m("h3",{class:"text-2xl font-semibold text-navbar-green mb-4"},"Brugerstyring",-1)),m("div",wD,[m("table",ED,[e[27]||(e[27]=m("thead",null,[m("tr",null,[m("th",{class:"px-4 py-3 border-b text-left"},"Email"),m("th",{class:"px-4 py-3 border-b text-left hidden md:table-cell"},"Nuværende Rolle"),m("th",{class:"px-4 py-3 border-b text-left"},"Skift Rolle")])],-1)),m("tbody",null,[(V(!0),U(me,null,$e(r.users,(o,l)=>(V(),U("tr",{key:l,class:"hover:bg-gray-50"},[m("td",TD,[m("span",ID,se(o.email),1),m("span",AD," Rolle: "+se(o.role),1)]),m("td",SD,se(o.role),1),m("td",CD,[Ve(m("select",{"onUpdate:modelValue":c=>o.role=c,onChange:c=>r.updateUserRole(o),class:"border p-2 rounded w-full bg-white"},e[26]||(e[26]=[m("option",{value:"regular"},"Regular",-1),m("option",{value:"elite"},"Elite",-1)]),40,PD),[[Jr,o.role]])])]))),128))])])])]),m("div",RD,[e[35]||(e[35]=m("h3",{class:"text-2xl font-semibold text-navbar-green mb-4"},"Fællesbeskeder",-1)),m("form",{onSubmit:e[4]||(e[4]=qn((...o)=>r.sendBroadcastMessage&&r.sendBroadcastMessage(...o),["prevent"]))},[e[29]||(e[29]=m("label",{class:"block text-gray-700 font-semibold mb-2"},"Besked",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.messageContent=o),class:"border p-2 rounded w-full mb-4",placeholder:"Skriv din besked her..."},null,512),[[Je,r.messageContent]]),e[30]||(e[30]=m("button",{type:"submit",class:"bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"}," Send Besked til Alle ",-1))],32),m("div",kD,[e[34]||(e[34]=m("h4",{class:"text-xl font-bold text-navbar-green mb-2"},"All Messages",-1)),(V(!0),U(me,null,$e(r.allMessages,(o,l)=>(V(),U("div",{key:l,class:"bg-white p-4 rounded shadow mb-2"},[m("p",xD,[e[31]||(e[31]=m("strong",null,"Fra:",-1)),ot(" "+se(o.from)+" ",1),e[32]||(e[32]=m("strong",null,"Til:",-1)),ot(" "+se(o.to==="all"?"Alle":o.to)+" ",1),e[33]||(e[33]=m("strong",null,"Dato:",-1)),ot(" "+se(r.formatTimestamp(o.timestamp)),1)]),m("p",DD,se(o.content),1)]))),128))])]),m("div",OD,[e[44]||(e[44]=m("h3",{class:"text-2xl font-semibold text-navbar-green mb-4"},"Tilføj Ny Produkt",-1)),m("form",{onSubmit:e[12]||(e[12]=qn((...o)=>r.handleAddProduct&&r.handleAddProduct(...o),["prevent"])),class:"space-y-4"},[m("div",null,[e[36]||(e[36]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"name"},"Navn",-1)),Ve(m("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>r.newProduct.name=o),type:"text",id:"name",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.newProduct.name]])]),m("div",null,[e[37]||(e[37]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"description"},"Kort Beskrivelse",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.newProduct.description=o),id:"description",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.newProduct.description]])]),m("div",null,[e[38]||(e[38]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"fullDescription"},"Fuldbeskrivelse",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.newProduct.fullDescription=o),id:"fullDescription",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.newProduct.fullDescription]])]),m("div",VD,[m("div",ND,[e[39]||(e[39]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"price"},"Pris",-1)),Ve(m("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>r.newProduct.price=o),type:"text",id:"price",placeholder:"e.g. DKK 250.00 eller 'Kontakt for pris'",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.newProduct.price]])]),m("div",LD,[e[40]||(e[40]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"image"},"Billede (URL)",-1)),Ve(m("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>r.newProduct.image=o),type:"text",id:"image",placeholder:"/img/produkter/epinutrics_epic.jpg",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.newProduct.image]])])]),m("div",null,[e[41]||(e[41]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"categories"},"Kategorier",-1)),Ve(m("select",{id:"categories","onUpdate:modelValue":e[10]||(e[10]=o=>r.selectedCategories=o),multiple:"",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},[(V(!0),U(me,null,$e(r.availableCategories,o=>(V(),U("option",{key:o,value:o},se(o),9,MD))),128))],512),[[Jr,r.selectedCategories]])]),m("div",null,[e[42]||(e[42]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"subcategories"},"Underkategorier",-1)),Ve(m("select",{id:"subcategories","onUpdate:modelValue":e[11]||(e[11]=o=>r.selectedSubcategories=o),multiple:"",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},[(V(!0),U(me,null,$e(r.availableSubcategories,o=>(V(),U("option",{key:o,value:o},se(o),9,FD))),128))],512),[[Jr,r.selectedSubcategories]])]),e[43]||(e[43]=m("button",{type:"submit",class:"bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"}," Tilføj Produkt ",-1))],32)]),m("div",UD,[m("table",BD,[e[45]||(e[45]=m("thead",null,[m("tr",null,[m("th",{class:"px-6 py-3 border-b text-left"},"#"),m("th",{class:"px-6 py-3 border-b text-left"},"Produktnavn"),m("th",{class:"px-6 py-3 border-b text-left"},"Kategori(er)"),m("th",{class:"px-6 py-3 border-b text-left"},"Udvalgt"),m("th",{class:"px-6 py-3 border-b text-left"},"Handlinger")])],-1)),m("tbody",null,[(V(!0),U(me,null,$e(r.allProducts,o=>(V(),U("tr",{key:o.id,class:"hover:bg-gray-50"},[m("td",$D,se(o.id),1),m("td",jD,se(o.name),1),m("td",qD,se(o.categories.join(", ")),1),m("td",HD,[m("input",{type:"checkbox",checked:r.isFeatured(o.id),onChange:l=>r.toggleFeatured(o.id)},null,40,KD)]),m("td",zD,[m("button",{class:"bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition mr-2",onClick:l=>r.openEditModal(o)}," Rediger ",8,WD),m("button",{class:"bg-red-500 text-white font-semibold py-1 px-3 rounded hover:bg-red-600 transition",onClick:l=>r.handleDelete(o.id)}," Slet ",8,GD)])]))),128))])])]),r.showEditModal?(V(),U("div",QD,[m("div",JD,[e[54]||(e[54]=m("h3",{class:"text-2xl font-semibold text-navbar-green mb-4"},"Rediger Produkt",-1)),m("form",{onSubmit:e[21]||(e[21]=qn((...o)=>r.handleEditProduct&&r.handleEditProduct(...o),["prevent"])),class:"space-y-4"},[m("div",null,[e[46]||(e[46]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editName"},"Navn",-1)),Ve(m("input",{"onUpdate:modelValue":e[13]||(e[13]=o=>r.editProductData.name=o),type:"text",id:"editName",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.editProductData.name]])]),m("div",null,[e[47]||(e[47]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editDescription"},"Kort Beskrivelse",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[14]||(e[14]=o=>r.editProductData.description=o),id:"editDescription",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.editProductData.description]])]),m("div",null,[e[48]||(e[48]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editFullDescription"},"Fuldbeskrivelse",-1)),Ve(m("textarea",{"onUpdate:modelValue":e[15]||(e[15]=o=>r.editProductData.fullDescription=o),id:"editFullDescription",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.editProductData.fullDescription]])]),m("div",YD,[m("div",XD,[e[49]||(e[49]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editPrice"},"Pris",-1)),Ve(m("input",{"onUpdate:modelValue":e[16]||(e[16]=o=>r.editProductData.price=o),type:"text",id:"editPrice",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.editProductData.price]])]),m("div",ZD,[e[50]||(e[50]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editImage"},"Billede (URL)",-1)),Ve(m("input",{"onUpdate:modelValue":e[17]||(e[17]=o=>r.editProductData.image=o),type:"text",id:"editImage",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},null,512),[[Je,r.editProductData.image]])])]),m("div",null,[e[51]||(e[51]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editCategories"},"Kategorier",-1)),Ve(m("select",{id:"editCategories","onUpdate:modelValue":e[18]||(e[18]=o=>r.selectedEditCategories=o),multiple:"",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},[(V(!0),U(me,null,$e(r.availableCategories,o=>(V(),U("option",{key:o,value:o},se(o),9,eO))),128))],512),[[Jr,r.selectedEditCategories]])]),m("div",null,[e[52]||(e[52]=m("label",{class:"block text-gray-700 font-semibold mb-2",for:"editSubcategories"},"Underkategorier",-1)),Ve(m("select",{id:"editSubcategories","onUpdate:modelValue":e[19]||(e[19]=o=>r.selectedEditSubcategories=o),multiple:"",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"},[(V(!0),U(me,null,$e(r.availableSubcategories,o=>(V(),U("option",{key:o,value:o},se(o),9,tO))),128))],512),[[Jr,r.selectedEditSubcategories]])]),m("div",nO,[m("button",{type:"button",onClick:e[20]||(e[20]=(...o)=>r.closeEditModal&&r.closeEditModal(...o)),class:"bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition"}," Annuller "),e[53]||(e[53]=m("button",{type:"submit",class:"bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"}," Gem ændringer ",-1))])],32)])])):$t("",!0)])}const sO=tt(aD,[["render",rO],["__scopeId","data-v-8e2789b9"]]),iO={name:"CategoryPage",components:{ProductCard:si},setup(){const t=Qv(),{getProductsByCategory:e}=Vn();return{products:e(t.params.name)}}},oO={class:"container mt-10 mx-auto"},aO={class:"text-3xl font-bold text-center text-dark-brown mb-8"},lO={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"},cO=["src","alt"],uO={class:"text-lg font-semibold text-center text-black"},dO={class:"text-center text-black mb-2"},hO={class:"text-lg font-bold text-dark-brown"};function fO(t,e,n,r,s,i){return V(),U("section",oO,[m("h2",aO,se(t.categoryTitle),1),m("div",lO,[(V(!0),U(me,null,$e(r.products,(o,l)=>(V(),U("div",{key:l,class:"bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center w-full"},[m("img",{src:o.image,alt:o.name,class:"w-full h-48 object-cover mb-4 rounded"},null,8,cO),m("h3",uO,se(o.name),1),m("p",dO,se(o.description),1),m("p",hO,se(o.price),1),e[0]||(e[0]=m("button",{class:"bg-light-green text-white font-semibold py-2 px-4 rounded mt-3 w-full hover:bg-dark-green transition"},"Læg i kurv",-1))]))),128))])])}const pO=tt(iO,[["render",fO],["__scopeId","data-v-45261355"]]),gO={name:"MenneskerPage",components:{ProductCard:si},setup(){const t=Vn(),e=Ee(()=>t.getSubcategoriesByCategory("mennesker"));return{sortedSubcategories:Ee(()=>[...e.value].sort((i,o)=>i==="Andre produkter"?1:o==="Andre produkter"?-1:0)),getProductsBySubcategory:s=>t.getProductsByCategoryAndSubcategory("mennesker",s)}}},mO={class:"container mt-10 mx-auto px-4 md:px-10"},_O={class:"text-2xl font-semibold mb-4"},yO={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"};function vO(t,e,n,r,s,i){const o=We("ProductCard");return V(),U("section",mO,[e[0]||(e[0]=m("h2",{class:"text-3xl font-bold text-left text-dark-brown mb-8"},"Produkter til Mennesker",-1)),(V(!0),U(me,null,$e(r.sortedSubcategories,(l,c)=>(V(),U("div",{key:c,class:"mb-10"},[m("h3",_O,se(l),1),m("div",yO,[(V(!0),U(me,null,$e(r.getProductsBySubcategory(l),(u,h)=>(V(),bt(o,{key:h,product:u},null,8,["product"]))),128))])]))),128))])}const bO=tt(gO,[["render",vO],["__scopeId","data-v-7a264c4f"]]),wO={name:"HestePage",components:{ProductCard:si},setup(){const t=Vn(),e=Ee(()=>t.getSubcategoriesByCategory("heste"));return{sortedSubcategories:Ee(()=>[...e.value].sort((i,o)=>i==="Andre produkter"?1:o==="Andre produkter"?-1:0)),getProductsBySubcategory:s=>t.getProductsByCategoryAndSubcategory("heste",s)}}},EO={class:"container mt-10 mx-auto px-4 md:px-10"},TO={class:"text-2xl font-semibold mb-4"},IO={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"};function AO(t,e,n,r,s,i){const o=We("ProductCard");return V(),U("section",EO,[e[0]||(e[0]=m("h2",{class:"text-3xl font-bold text-left text-dark-brown mb-8"},"Produkter til Heste",-1)),(V(!0),U(me,null,$e(r.sortedSubcategories,(l,c)=>(V(),U("div",{key:c,class:"mb-10"},[m("h3",TO,se(l),1),m("div",IO,[(V(!0),U(me,null,$e(r.getProductsBySubcategory(l),(u,h)=>(V(),bt(o,{key:h,product:u},null,8,["product"]))),128))])]))),128))])}const SO=tt(wO,[["render",AO],["__scopeId","data-v-f3979f2b"]]),CO={name:"HundePage",components:{ProductCard:si},setup(){const t=Vn(),e=Ee(()=>t.getSubcategoriesByCategory("hunde"));return{sortedSubcategories:Ee(()=>[...e.value].sort((i,o)=>i==="Andre produkter"?1:o==="Andre produkter"?-1:0)),getProductsBySubcategory:s=>t.getProductsByCategoryAndSubcategory("hunde",s)}}},PO={class:"container mt-10 mx-auto px-4 md:px-10"},RO={class:"text-2xl font-semibold mb-4"},kO={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"};function xO(t,e,n,r,s,i){const o=We("ProductCard");return V(),U("section",PO,[e[0]||(e[0]=m("h2",{class:"text-3xl font-bold text-left text-dark-brown mb-8"},"Produkter til Hunde",-1)),(V(!0),U(me,null,$e(r.sortedSubcategories,(l,c)=>(V(),U("div",{key:c,class:"mb-10"},[m("h3",RO,se(l),1),m("div",kO,[(V(!0),U(me,null,$e(r.getProductsBySubcategory(l),(u,h)=>(V(),bt(o,{key:h,product:u},null,8,["product"]))),128))])]))),128))])}const DO=tt(CO,[["render",xO],["__scopeId","data-v-d2ff06d7"]]),OO={name:"KattePage",components:{ProductCard:si},setup(){const t=Vn(),e=Ee(()=>t.getSubcategoriesByCategory("katte"));return{sortedSubcategories:Ee(()=>[...e.value].sort((i,o)=>i==="Andre produkter"?1:o==="Andre produkter"?-1:0)),getProductsBySubcategory:s=>t.getProductsByCategoryAndSubcategory("katte",s)}}},VO={class:"container mt-10 mx-auto px-4 md:px-10"},NO={class:"text-2xl font-semibold mb-4"},LO={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"};function MO(t,e,n,r,s,i){const o=We("ProductCard");return V(),U("section",VO,[e[0]||(e[0]=m("h2",{class:"text-3xl font-bold text-left text-dark-brown mb-8"},"Produkter til Katte",-1)),(V(!0),U(me,null,$e(r.sortedSubcategories,(l,c)=>(V(),U("div",{key:c,class:"mb-10"},[m("h3",NO,se(l),1),m("div",LO,[(V(!0),U(me,null,$e(r.getProductsBySubcategory(l),(u,h)=>(V(),bt(o,{key:h,product:u},null,8,["product"]))),128))])]))),128))])}const FO=tt(OO,[["render",MO],["__scopeId","data-v-0cbb0362"]]),UO={name:"CartPage",setup(){const t=So(),e=Co();console.log("Cart Page Cart Items:",t.cartItems);const n=Ee(()=>t.cartItems),r=Ee(()=>t.cartTotal);return{cartItems:n,cartTotal:r,removeFromCart:o=>{t.removeFromCart(o)},goToPayment:()=>{e.push("/payment")}}}},BO={class:"cart-page-container"},$O={class:"cart-content container mt-10 mx-auto px-4 md:px-10"},jO={key:0,id:"cart-items",class:"space-y-4"},qO=["src","alt"],HO={class:"flex-grow"},KO={class:"text-lg font-semibold text-black"},zO={class:"text-sm text-black"},WO={class:"text-lg font-bold text-dark-brown"},GO={class:"flex items-center mt-2"},QO=["onUpdate:modelValue"],JO=["onClick"],YO={class:"text-right mt-6"},XO={class:"text-xl font-bold"},ZO={key:1,class:"text-center text-black mt-6"};function eV(t,e,n,r,s,i){return V(),U("div",BO,[m("section",$O,[e[2]||(e[2]=m("h2",{class:"text-3xl font-bold text-left text-dark-brown mb-8"},"Din Indkøbskurv",-1)),r.cartItems.length>0?(V(),U("div",jO,[(V(!0),U(me,null,$e(r.cartItems,(o,l)=>(V(),U("div",{key:o.id,class:"flex items-center justify-between bg-white p-4 rounded-lg shadow"},[m("img",{src:o.image,alt:o.name,class:"w-20 h-20 object-contain mr-4 rounded"},null,8,qO),m("div",HO,[m("h3",KO,se(o.name),1),m("p",zO,se(o.description),1),m("p",WO,se(o.price),1),m("div",GO,[e[1]||(e[1]=m("label",{class:"text-sm mr-2"},"Antal:",-1)),Ve(m("input",{type:"number","onUpdate:modelValue":c=>o.quantity=c,min:"1",class:"w-12 border rounded text-center"},null,8,QO),[[Je,o.quantity]])])]),m("button",{onClick:c=>r.removeFromCart(l),class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"},"Fjern",8,JO)]))),128)),m("div",YO,[m("h3",XO,"Total: DKK "+se(r.cartTotal),1),m("button",{id:"checkout",class:"bg-light-green text-white font-semibold py-2 px-6 rounded mt-4 hover:bg-dark-green transition",onClick:e[0]||(e[0]=(...o)=>r.goToPayment&&r.goToPayment(...o))}," Til Betaling ")])])):(V(),U("p",ZO,"Din kurv er tom."))])])}const tV=tt(UO,[["render",eV],["__scopeId","data-v-b2c930bd"]]),nV={name:"ProductPage",setup(){const t=Qv(),e=Co(),n=Hd(),r=Vn(),s=So(),i=be(null),o=be(null);Ir([()=>r.allProducts.value,()=>t.params.id],()=>{const k=t.params.id,O=r.allProducts.value.find(F=>F.id===k);i.value=O||null},{immediate:!0});const c=Ee(()=>{if(!i.value||!u(i.value))return[];const k=[];switch(i.value.id){case 31:k.push({label:"Leje pr. uge",price:"DKK 1,500.00"},{label:"Køb af sæt",price:"DKK 32,550.00"},{label:"Køb af dækken",price:"DKK 18,585.00"},{label:"Køb af gamacher",price:"DKK 20,265.00"});break;case 36:k.push({label:"1L",price:"DKK 299.00"},{label:"3L",price:"DKK 699.00"});break;case 37:k.push({label:"1L",price:"DKK 119.00"},{label:"3L",price:"DKK 299.00"});break;case 38:k.push({label:"1L",price:"DKK 99.00"},{label:"3L",price:"DKK 249.00"});break}return k}),u=k=>k.price==="Kontakt for pris"?!1:[31,36,37,38].includes(k.id),h=()=>{if(!i.value)return;s.cartItems.some(O=>{var F;return u(i.value)?O.name===`${i.value.name} - ${(F=o.value)==null?void 0:F.label}`:O.id===i.value.id})?n.warning("Produktet er allerede tilføjet i kurven!"):(p(),n.success("Produktet er tilføjet i kurven!"))},p=()=>{if(u(i.value)&&o.value){const k={...i.value,price:o.value.price,name:`${i.value.name} - ${o.value.label}`};s.addToCart(k)}else s.addToCart(i.value)},g=Ee(()=>{var k,O,F;return(k=i.value)!=null&&k.fullDescription?i.value.fullDescription.split(`
`):((F=(O=i.value)==null?void 0:O.description)==null?void 0:F.split(`
`))||[]});return{product:i,formattedDescription:g,productOptions:c,selectedOption:o,addToCartWithNotification:h,requiresSelection:u,redirectToContact:()=>{window.location.href="https://www.cellatest.com/kontakt"},goBack:()=>e.go(-1)}}},rV={class:"container mt-10 mx-auto px-4 md:px-10"},sV={key:0,id:"product-detail",class:"product-detail grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 m-4"},iV={class:"columns-auto bg-white border rounded-lg p-4"},oV=["src","alt"],aV={class:"columns-auto bg-white border rounded-lg p-4 flex flex-col"},lV={class:"flex-grow"},cV={class:"text-4xl font-bold text-dark-brown mb-4"},uV={class:"text-2xl font-bold text-dark-green mt-4"},dV={key:0,class:"mb-4"},hV=["value"],fV={class:"flex items-center gap-2 mt-4 mb-4"},pV=["disabled"],gV={key:1,class:"text-center text-black mt-6"},mV={id:"product-desc",class:"bg-white bg-white border rounded-lg m-4 p-4 flex-col place-content-center"},_V={class:"text-lg text-black mb-6"},yV={key:0};function vV(t,e,n,r,s,i){return V(),U("section",rV,[m("div",null,[r.product?(V(),U("div",sV,[m("div",iV,[m("img",{src:r.product.image,alt:r.product.name,class:"product-image rounded"},null,8,oV)]),m("div",aV,[m("div",lV,[m("h2",cV,se(r.product.name),1),m("p",uV,se(r.product.price),1),r.requiresSelection(r.product)?(V(),U("div",dV,[e[5]||(e[5]=m("label",{for:"option",class:"block font-semibold mb-2"},"Vælg en mulighed:",-1)),Ve(m("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.selectedOption=o),class:"border rounded-lg p-2 w-full",id:"option"},[e[4]||(e[4]=m("option",{disabled:"",value:""},"-- Vælg en mulighed --",-1)),(V(!0),U(me,null,$e(r.productOptions,(o,l)=>(V(),U("option",{key:l,value:o},se(o.label)+" - "+se(o.price),9,hV))),128))],512),[[Jr,r.selectedOption]])])):$t("",!0)]),m("div",fV,[m("button",{onClick:e[1]||(e[1]=(...o)=>r.goBack&&r.goBack(...o)),class:"bg-dark-brown text-white font-semibold py-2 px-4 rounded hover:bg-light-brown transition"}," Tilbage "),r.product.price==="Kontakt for pris"?(V(),U("button",{key:0,onClick:e[2]||(e[2]=(...o)=>r.redirectToContact&&r.redirectToContact(...o)),class:"bg-light-brown text-white font-semibold py-2 px-4 rounded hover:bg-dark-brown transition"}," Kontakt for Pris ")):(V(),U("button",{key:1,onClick:e[3]||(e[3]=(...o)=>r.addToCartWithNotification&&r.addToCartWithNotification(...o)),disabled:r.requiresSelection(r.product)&&!r.selectedOption,class:"bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"}," Læg i kurv ",8,pV))])])])):(V(),U("p",gV,"Produktet bliver hentet...")),m("div",mV,[e[6]||(e[6]=m("h2",{class:"text-4xl font-bold text-dark-brown mb-4"},"Beskrivelse",-1)),m("p",_V,[(V(!0),U(me,null,$e(r.formattedDescription,(o,l)=>(V(),U("span",{key:l},[ot(se(o)+" ",1),l<r.formattedDescription.length-1?(V(),U("br",yV)):$t("",!0)]))),128))])])])])}const bV=tt(nV,[["render",vV],["__scopeId","data-v-5a115501"]]),wV={name:"BlogCard",props:{id:{type:Number,required:!0},title:{type:String,required:!0},excerpt:{type:String,required:!0},image:{type:String,required:!0}}},EV={class:"bg-blog-card p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col justify-between"},TV=["src","alt"],IV={class:"text-xl font-bold text-blak mb-2"},AV={class:"text-black mb-4 line-clamp-3"};function SV(t,e,n,r,s,i){const o=We("router-link");return V(),U("article",EV,[m("div",null,[m("img",{src:n.image,alt:n.title,class:"w-full h-40 object-cover mb-4 rounded"},null,8,TV),m("h3",IV,se(n.title),1),m("p",AV,se(n.excerpt),1)]),we(o,{to:`/blog/${n.id}`,class:"text-dark-green font-semibold hover:underline mt-auto"},{default:Ze(()=>e[0]||(e[0]=[ot(" Læs Mere ")])),_:1},8,["to"])])}const CV=tt(wV,[["render",SV],["__scopeId","data-v-df24c5f1"]]),PV={name:"BlogPage",components:{BlogCard:CV},data(){return{featuredPosts:[{id:1,title:"Forstå Din Sundhed Gennem Hårcelletest",excerpt:"Lær hvordan epigenetisk hårcelleanalyse kan give dig indsigt i din krops behov og balance.",image:"/img/blog/haarcelletest.jpg"},{id:2,title:"5 Tips til Optimal Kost for Dig og Dit Kæledyr",excerpt:"Opdag hvordan korrekt ernæring kan forbedre velvære for både mennesker og dyr.",image:"/img/blog/kost_guide.jpg"},{id:3,title:"Sådan Forbedrer Du Dit Immunforsvar",excerpt:"Opdag praktiske tips til at styrke dit immunforsvar og holde dig rask.",image:"/img/blog/immunforsvar_tips.jpg"},{id:4,title:"Hårcelletest for Dyr",excerpt:"Lær hvordan hårcelletest kan hjælpe med at forbedre dit kæledyrs sundhed.",image:"/img/blog/haarcelletest_dyr.jpg"},{id:5,title:"Fordele ved Naturlige Kosttilskud til Kæledyr",excerpt:"Find ud af, hvordan kosttilskud kan forbedre dit kæledyrs velvære.",image:"/img/blog/kosttilskud_dyr.jpg"}]}}},RV={class:"container mt-10 mx-auto px-4 md:px-10"},kV={class:"mb-16"},xV={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"};function DV(t,e,n,r,s,i){const o=We("BlogCard");return V(),U("section",RV,[e[1]||(e[1]=m("h1",{class:"text-4xl font-bold text-dark-brown text-center mb-8"}," Velkommen til Vores Blog ",-1)),e[2]||(e[2]=m("p",{class:"text-lg text-black text-center mb-10"}," Opdag dybdegående artikler om sundhed, velvære og epigenetisk analyse for både dig og dine kæledyr. Vi er her for at hjælpe dig med at leve et sundt og balanceret liv. ",-1)),m("div",kV,[e[0]||(e[0]=m("h2",{class:"text-3xl font-semibold text-dark-brown mb-6"},"Udvalgte Artikler",-1)),m("div",xV,[(V(!0),U(me,null,$e(s.featuredPosts,(l,c)=>(V(),bt(o,{key:c,id:l.id,title:l.title,excerpt:l.excerpt,image:l.image},null,8,["id","title","excerpt","image"]))),128))])])])}const OV=tt(PV,[["render",DV],["__scopeId","data-v-a85d34c1"]]),VV={name:"BlogPostPage",data(){return{posts:[{id:1,title:"Forstå Din Sundhed Gennem Hårcelletest",image:"/img/blog/haarcelletest.jpg",content:["Epigenetisk hårcelleanalyse er en innovativ metode til at forstå din krops unikke behov. Ved hjælp af enkle prøver fra dit hår kan vi kortlægge, hvordan din krop reagerer på miljøfaktorer, næringsstoffer og stress.","Denne teknologi hjælper dig med at identificere områder, hvor din krop måske mangler balance, og giver konkrete forslag til kosttilskud, livsstilsændringer og miljømæssige forbedringer.","Opdag hvordan små justeringer kan gøre en stor forskel i din sundhed og velvære."]},{id:2,title:"5 Tips til Optimal Kost for Dig og Dit Kæledyr",image:"/img/blog/kost_guide.jpg",content:["En sund kost er fundamentet for et langt og lykkeligt liv – både for mennesker og kæledyr. Her er vores bedste tips:","1. Prioritér naturlige og økologiske ingredienser i dine måltider.","2. Tilføj essentielle fedtsyrer som omega-3 til både din og dit kæledyrs kost for en sund hud og pels.","3. Sørg for at inkludere nok protein til muskelopbygning og vedligeholdelse.","4. Undgå forarbejdede fødevarer og tilsætningsstoffer, som kan belaste kroppen.","5. Hydrer regelmæssigt og sørg for adgang til rent drikkevand hele dagen."]},{id:3,title:"Sådan Forbedrer Du Dit Immunforsvar",image:"/img/blog/immunforsvar_tips.jpg",content:["Dit immunforsvar spiller en afgørende rolle i at beskytte din krop mod skadelige bakterier, vira og andre patogener. Et stærkt immunforsvar hjælper dig med at holde sygdomme på afstand og giver din krop mulighed for at genoprette balancen hurtigt.","For at styrke dit immunforsvar er det vigtigt at fokusere på tre nøgleområder: kost, motion og mental sundhed. Her er vores bedste tips til, hvordan du kan opnå dette:","","1. Optimer din kost:","En varieret og næringsrig kost er afgørende for at opbygge et stærkt immunforsvar. Sørg for at inkludere:","- Vitaminer og mineraler som vitamin C, D og zink. Disse næringsstoffer findes i produkter som *Epinutrics Vitamin Complex* og *Epinutrics Magnesium*.","- Antioxidanter fra naturlige kilder som frugt og grøntsager, der beskytter dine celler mod skader.","- Fermenterede produkter med probiotika, som *NDS Probiotic Performance*, for at støtte en sund tarmflora, som er tæt forbundet med immunforsvaret.","","2. Bevæg dig regelmæssigt:","Motion forbedrer blodcirkulationen og hjælper med at transportere immunceller effektivt rundt i kroppen. Moderate aktiviteter som gåture, yoga eller let styrketræning kan booste dit immunforsvar uden at overbelaste det.","","3. Støt din mentale sundhed:","Stress kan svække immunforsvaret. Det er vigtigt at finde tid til afslapning gennem meditation, mindfulness eller blot en god nattesøvn. Overvej kosttilskud som *Epinutrics EPI-C*, der indeholder ingredienser som acerola og multebær for at støtte mental og fysisk balance.","","Ved at fokusere på disse tre områder og vælge kvalitetsprodukter fra CELLA TEST, kan du styrke dit immunforsvar og forbedre din livskvalitet. Husk, små ændringer kan have en stor indflydelse!"]},{id:4,title:"Hårcelletest for Dyr",image:"/img/blog/haarcelletest_dyr.jpg",content:["Hårcelletest for dyr er en banebrydende metode, der hjælper kæledyrsejere med at forstå deres kæledyrs sundhed og trivsel bedre. Ved at analysere hårceller kan vi identificere ubalancer og behov, der påvirker dit kæledyrs velbefindende.","","Hvordan fungerer hårcelletesten?","Hårcelletesten bruger avanceret epigenetisk teknologi til at kortlægge dit kæledyrs respons på miljømæssige og ernæringsmæssige faktorer. Med en simpel prøve af dit kæledyrs hår kan vi:","- Identificere mangler i næringsstoffer som vitaminer og mineraler.","- Afsløre følsomheder eller belastninger fra miljøet.","- Udarbejde skræddersyede anbefalinger for kosttilskud og livsstilsændringer.","","Fordele ved hårcelletest for dyr:","1. Individuel tilpasning: Hvert kæledyr er unikt, og testen hjælper med at skabe en specifik plan for dit kæledyr baseret på dets unikke behov.","2. Forebyggelse af sundhedsproblemer: Ved at opdage ubalancer tidligt kan du handle proaktivt for at undgå større sundhedsproblemer i fremtiden.","3. Naturlig støtte: Mange af anbefalingerne fokuserer på naturlige løsninger og kosttilskud, såsom dem fra CELLATEST, der er designet specifikt til kæledyrs behov.","","Eksempler på anvendelse:","- En hund, der lider af hudproblemer, kan have gavn af tilskud som *NDS Probiotic Pet* for at støtte en sund tarmflora og et stærkt immunforsvar.","- En kat med lav energi kan få anbefalet vitaminer og mineraler fra *Epinutrics Pet Complex*, der understøtter generel vitalitet.","","Hvordan kommer du i gang?","At tage en hårcelletest er enkelt og smertefrit. Alt, hvad du skal gøre, er at indsamle en lille hårprøve fra dit kæledyr og indsende den til analyse. På baggrund af resultaterne modtager du en detaljeret rapport med skræddersyede anbefalinger, der kan forbedre dit kæledyrs sundhed.","","Giv dit kæledyr den omsorg, det fortjener, og opdag fordelene ved hårcelletest med CELLATEST. Din firbenede ven vil takke dig for det!"]},{id:5,title:"Fordele ved Naturlige Kosttilskud til Kæledyr",image:"/img/blog/kosttilskud_dyr.jpg",content:["Naturlige kosttilskud til kæledyr kan være en fantastisk måde at støtte dit kæledyrs sundhed og trivsel på. Med fokus på ingredienser af høj kvalitet og uden unødvendige tilsætningsstoffer, tilbyder naturlige kosttilskud en skånsom og effektiv måde at adressere forskellige behov hos dine firbenede venner.","","Hvorfor vælge naturlige kosttilskud?","1. Sikkerhed og renhed: Naturlige kosttilskud indeholder ofte færre kemikalier og kunstige tilsætningsstoffer, hvilket gør dem mere skånsomme mod dit kæledyrs fordøjelsessystem.","2. Høj biotilgængelighed: Ingredienser som omega-3-fedtsyrer, probiotika og vitaminer i naturlige former absorberes lettere af kroppen og giver bedre resultater.","3. Forebyggelse: Ved at vælge naturlige løsninger kan du styrke dit kæledyrs immunsystem og hjælpe med at forebygge almindelige sundhedsproblemer såsom ledproblemer, hudirritation og fordøjelsesproblemer.","","Eksempler på naturlige kosttilskud:","- NDS Probiotic Pet: Hjælper med at opretholde en sund tarmflora og understøtter fordøjelsessundheden hos både hunde og katte.","- Epinutrics Pet Complex: Indeholder essentielle vitaminer og mineraler, der styrker energi og vitalitet hos kæledyr i alle aldre.","- Naturlige olier: Omega-3 og 6-fedtsyrer hjælper med at forbedre hudens sundhed og giver en skinnende pels.","","Hvordan vælger du de rigtige kosttilskud?","Når du vælger kosttilskud til dit kæledyr, er det vigtigt at overveje følgende:","- Dit kæledyrs alder og specifikke behov (f.eks. ledstøtte eller fordøjelsessundhed).","- Kvaliteten af ingredienserne – vælg altid produkter uden kunstige tilsætningsstoffer.","- Anbefalinger fra en dyrlæge eller sundhedsprofessionel, der forstår dit kæledyrs helbred.","","Tips til anvendelse:","1. Introducér kosttilskud gradvist for at sikre, at dit kæledyr vænner sig til smagen og ingredienserne.","2. Følg altid doseringsanvisningerne nøje for at undgå overdosering.","3. Kombinér kosttilskud med en afbalanceret kost og regelmæssig motion for optimale resultater.","","Naturlige kosttilskud fra CELLATEST tilbyder en pålidelig måde at støtte dit kæledyrs sundhed på. Ved at vælge produkter af høj kvalitet kan du hjælpe din firbenede ven med at leve et langt, sundt og lykkeligt liv."]}],post:null}},created(){const t=parseInt(this.$route.params.id,10);this.post=this.posts.find(e=>e.id===t)}},NV={class:"container mt-10 mx-auto px-4 md:px-10"},LV={key:0,class:"text-center"},MV={class:"text-4xl font-bold text-dark-brown mb-6"},FV=["src","alt"],UV={class:"bg-blog-post p-6 rounded-lg shadow-md text-left mt-6 space-y-6"},BV={key:1,class:"text-center text-black"};function $V(t,e,n,r,s,i){return V(),U("section",NV,[s.post?(V(),U("div",LV,[m("h1",MV,se(s.post.title),1),m("img",{src:s.post.image,alt:s.post.title,class:"w-full h-64 object-cover rounded mb-6"},null,8,FV),m("div",UV,[(V(!0),U(me,null,$e(s.post.content,(o,l)=>(V(),U("p",{key:l,class:"text-lg text-black leading-relaxed"},se(o),1))),128))])])):(V(),U("p",BV,"Indlæser..."))])}const jV=tt(VV,[["render",$V],["__scopeId","data-v-50e19781"]]),qV={name:"LoginPage",setup(){const t=be(""),e=be(""),n=be(""),r=be(""),s=Fr(),i=Co(),o=()=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;n.value=t.value.trim()===""?"Email er påkrævet.":h.test(t.value)?"":"Indtast en gyldig email."},l=()=>{r.value=e.value.trim()===""?"Adgangskode er påkrævet.":e.value.length<6?"Adgangskode skal være mindst 6 tegn.":""},c=Ee(()=>!n.value&&!r.value&&t.value&&e.value);return{email:t,password:e,emailError:n,passwordError:r,validateEmail:o,validatePassword:l,handleLogin:async()=>{if(o(),l(),!!c.value)try{await s.login(t.value,e.value);const h=i.currentRoute.value.query.redirect||"/";i.push(h)}catch(h){console.error("Login failed:",h)}},isValid:c}}},HV={class:"container mt-10 mx-auto px-4 md:px-10"},KV={class:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"},zV={class:"mb-4"},WV={key:0,class:"text-red-500 text-sm mt-1"},GV={class:"mb-6"},QV={key:0,class:"text-red-500 text-sm mt-1"},JV=["disabled"],YV={class:"mt-6 text-center text-dark-brown"};function XV(t,e,n,r,s,i){const o=We("router-link");return V(),U("section",HV,[m("div",KV,[e[9]||(e[9]=m("h2",{class:"text-2xl font-bold text-dark-brown mb-6 text-center"},"Log ind på din konto",-1)),m("form",{onSubmit:e[4]||(e[4]=qn((...l)=>r.handleLogin&&r.handleLogin(...l),["prevent"]))},[m("div",zV,[e[5]||(e[5]=m("label",{class:"block text-black font-semibold mb-2",for:"email"},"Email",-1)),Ve(m("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),type:"email",id:"email",class:wt(["w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",{"border-red-500":r.emailError}]),onInput:e[1]||(e[1]=(...l)=>r.validateEmail&&r.validateEmail(...l))},null,34),[[Je,r.email]]),r.emailError?(V(),U("p",WV,se(r.emailError),1)):$t("",!0)]),m("div",GV,[e[6]||(e[6]=m("label",{class:"block text-black font-semibold mb-2",for:"password"},"Adgangskode",-1)),Ve(m("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.password=l),type:"password",id:"password",class:wt(["w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green",{"border-red-500":r.passwordError}]),onInput:e[3]||(e[3]=(...l)=>r.validatePassword&&r.validatePassword(...l))},null,34),[[Je,r.password]]),r.passwordError?(V(),U("p",QV,se(r.passwordError),1)):$t("",!0)]),m("button",{type:"submit",class:"w-full bg-light-green text-white font-semibold py-3 rounded-lg hover:bg-dark-green transition",disabled:!r.isValid}," Log ind ",8,JV)],32),m("p",YV,[e[8]||(e[8]=ot(" Har du ikke en konto? ")),we(o,{to:"/register",class:"text-dark-green font-semibold hover:underline"},{default:Ze(()=>e[7]||(e[7]=[ot(" Registrer dig her ")])),_:1})])])])}const ZV=tt(qV,[["render",XV],["__scopeId","data-v-c47f3e0a"]]),eN={name:"RegisterPage",setup(){const t=be(""),e=be(""),n=be(""),r=be(""),s=be(""),i=be(""),o=Fr(),l=Co(),c=Hd(),u=()=>{const P=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;r.value=t.value.trim()===""?"Email er påkrævet.":P.test(t.value)?"":"Indtast en gyldig email."},h=()=>{s.value=e.value.trim()===""?"Adgangskode er påkrævet.":e.value.length<6?"Adgangskode skal være mindst 6 tegn.":""},p=()=>{i.value=n.value.trim()===""?"Bekræft adgangskode er påkrævet.":n.value!==e.value?"Adgangskoderne stemmer ikke overens.":""},g=Ee(()=>!r.value&&!s.value&&!i.value&&t.value&&e.value&&n.value);return{email:t,password:e,confirmPassword:n,emailError:r,passwordError:s,confirmPasswordError:i,validateEmail:u,validatePassword:h,validateConfirmPassword:p,handleRegister:async()=>{if(u(),h(),p(),!!g.value)try{await o.register(t.value,e.value),c.success("Tjek din email for at bekræfte din konto."),l.push("/login")}catch(P){c.error(P.message||"Registrering mislykkedes. Prøv igen.")}},isValid:g}}},tN={class:"container mt-10 mx-auto px-4 md:px-10"},nN={class:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"},rN={class:"mb-4"},sN={key:0,class:"text-red-500 text-sm mt-1"},iN={class:"mb-4"},oN={key:0,class:"text-red-500 text-sm mt-1"},aN={class:"mb-6"},lN={key:0,class:"text-red-500 text-sm mt-1"},cN=["disabled"],uN={class:"mt-6 text-center text-black"};function dN(t,e,n,r,s,i){const o=We("router-link");return V(),U("section",tN,[m("div",nN,[e[12]||(e[12]=m("h2",{class:"text-2xl font-bold text-dark-brown mb-6 text-center"},"Opret en ny konto",-1)),m("form",{onSubmit:e[6]||(e[6]=qn((...l)=>r.handleRegister&&r.handleRegister(...l),["prevent"]))},[m("div",rN,[e[7]||(e[7]=m("label",{class:"block text-black font-semibold mb-2",for:"email"},"Email",-1)),Ve(m("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),type:"email",id:"email",class:wt(["w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green",{"border-red-500":r.emailError}]),onInput:e[1]||(e[1]=(...l)=>r.validateEmail&&r.validateEmail(...l))},null,34),[[Je,r.email]]),r.emailError?(V(),U("p",sN,se(r.emailError),1)):$t("",!0)]),m("div",iN,[e[8]||(e[8]=m("label",{class:"block text-black font-semibold mb-2",for:"password"},"Adgangskode",-1)),Ve(m("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.password=l),type:"password",id:"password",class:wt(["w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green",{"border-red-500":r.passwordError}]),onInput:e[3]||(e[3]=(...l)=>r.validatePassword&&r.validatePassword(...l))},null,34),[[Je,r.password]]),r.passwordError?(V(),U("p",oN,se(r.passwordError),1)):$t("",!0)]),m("div",aN,[e[9]||(e[9]=m("label",{class:"block text-black font-semibold mb-2",for:"confirmPassword"},"Bekræft adgangskode",-1)),Ve(m("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.confirmPassword=l),type:"password",id:"confirmPassword",class:wt(["w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green",{"border-red-500":r.confirmPasswordError}]),onInput:e[5]||(e[5]=(...l)=>r.validateConfirmPassword&&r.validateConfirmPassword(...l))},null,34),[[Je,r.confirmPassword]]),r.confirmPasswordError?(V(),U("p",lN,se(r.confirmPasswordError),1)):$t("",!0)]),m("button",{type:"submit",class:"w-full bg-light-green text-white font-semibold py-3 rounded-lg hover:bg-dark-green transition",disabled:!r.isValid}," Opret konto ",8,cN)],32),m("p",uN,[e[11]||(e[11]=ot(" Har du allerede en konto? ")),we(o,{to:"/login",class:"text-dark-green font-semibold hover:underline"},{default:Ze(()=>e[10]||(e[10]=[ot(" Log ind her ")])),_:1})])])])}const hN=tt(eN,[["render",dN],["__scopeId","data-v-6ee3a072"]]);var _b="https://js.stripe.com/v3",fN=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,vg="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",pN=function(){for(var e=document.querySelectorAll('script[src^="'.concat(_b,'"]')),n=0;n<e.length;n++){var r=e[n];if(fN.test(r.src))return r}return null},bg=function(e){var n="",r=document.createElement("script");r.src="".concat(_b).concat(n);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(r),r},gN=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"5.4.0",startTime:n})},bi=null,ta=null,na=null,mN=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},_N=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},yN=function(e){return bi!==null?bi:(bi=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(vg),window.Stripe){n(window.Stripe);return}try{var s=pN();if(s&&e)console.warn(vg);else if(!s)s=bg(e);else if(s&&na!==null&&ta!==null){var i;s.removeEventListener("load",na),s.removeEventListener("error",ta),(i=s.parentNode)===null||i===void 0||i.removeChild(s),s=bg(e)}na=_N(n,r),ta=mN(r),s.addEventListener("load",na),s.addEventListener("error",ta)}catch(o){r(o);return}}),bi.catch(function(n){return bi=null,Promise.reject(n)}))},vN=function(e,n,r){if(e===null)return null;var s=e.apply(void 0,n);return gN(s,r),s},wi,yb=!1,vb=function(){return wi||(wi=yN(null).catch(function(e){return wi=null,Promise.reject(e)}),wi)};Promise.resolve().then(function(){return vb()}).catch(function(t){yb||console.warn(t)});var bN=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];yb=!0;var s=Date.now();return vb().then(function(i){return vN(i,n,s)})};const wN={name:"PaymentPage",setup(){const t=bN("pk_test_51QafV7Ruib7MNBzAKFp8POBIkJ0r4LDGPXSvkNm4BHDuh0ffyRTbuFiDTZt072s8Oqp3Gc45xB0KVz27xoWrE67F00RkRvmhEq"),e=So(),n=Fr(),r=be(""),s=be(""),i=be(""),o=be(""),l=be("Danmark"),c=be(!1),u=Ee(()=>e.cartItems),h=Ee(()=>e.cartSubtotal.toFixed(2)),p=Ee(()=>e.cartTotal.toFixed(2));let g,v,P;const k=Ee(()=>{var F;return((F=n.user)==null?void 0:F.role)==="elite"});return il(async()=>{g=await t,v=g.elements(),P=v.create("card"),P.mount("#card-element")}),{fullName:r,address:s,postalCode:i,city:o,country:l,orderCompleted:c,cartItems:u,cartTotal:p,handlePayment:async()=>{try{const F=await fetch("http://localhost:3000/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:Math.round(p.value*100)})}),{clientSecret:j}=await F.json(),{error:H,paymentIntent:W}=await g.confirmCardPayment(j,{payment_method:{card:P,billing_details:{name:r.value,address:{line1:s.value,city:o.value,postal_code:i.value,country:l.value}}}});H?(console.error("Payment error:",H.message),alert(`Payment failed: ${H.message}`)):W.status==="succeeded"&&(console.log("Payment succeeded:",W),e.cartItems.splice(0,e.cartItems.length),c.value=!0)}catch(F){console.error("Payment process error:",F.message),alert(`Payment process failed: ${F.message}`)}},cartSubtotal:h,isElite:k}}},EN={key:0,class:"container mx-auto mt-10 px-4 md:px-10"},TN={class:"grid grid-cols-1 lg:grid-cols-2 gap-8"},IN={class:"bg-white p-6 rounded-lg shadow-md"},AN={class:"mb-4"},SN={class:"mb-4"},CN={class:"mb-4 flex space-x-4"},PN={class:"flex-1"},RN={class:"flex-1"},kN={class:"mb-4"},xN={class:"bg-white p-6 rounded-lg shadow-md"},DN={class:"font-medium text-gray-800"},ON={class:"text-sm text-gray-500"},VN={class:"font-medium text-navbar-green"},NN={key:0,class:"mt-4 flex justify-between items-center"},LN={class:"text-xl font-bold text-navbar-green"},MN={key:1,class:"mt-1 flex justify-between items-center text-red-600"},FN={class:"text-xl font-bold"},UN={class:"mt-4 flex justify-between items-center"},BN={class:"text-xl font-bold text-navbar-green"},$N={key:1,class:"container mx-auto mt-10 px-4 md:px-10 text-center bg-white p-6 rounded-lg shadow-md"};function jN(t,e,n,r,s,i){const o=We("router-link");return r.orderCompleted?(V(),U("section",$N,[e[24]||(e[24]=m("h2",{class:"text-3xl font-bold text-navbar-green mb-4"},"Tak for din ordre!",-1)),e[25]||(e[25]=m("p",{class:"text-lg text-gray-700 mb-6"}," Din betaling er gennemført, og vi er i gang med at pakke din ordre. ",-1)),we(o,{to:"/",class:"bg-light-green text-white font-semibold py-3 px-6 rounded hover:bg-dark-green transition"},{default:Ze(()=>e[23]||(e[23]=[ot(" Tilbage til Forsiden ")])),_:1})])):(V(),U("section",EN,[e[22]||(e[22]=m("h2",{class:"text-3xl font-bold text-navbar-green mb-6"},"Betaling",-1)),m("div",TN,[m("div",IN,[e[17]||(e[17]=m("h3",{class:"text-xl font-semibold text-dark-brown mb-4"},"Leveringsoplysninger",-1)),m("form",{onSubmit:e[5]||(e[5]=qn((...l)=>r.handlePayment&&r.handlePayment(...l),["prevent"])),class:"space-y-4"},[m("div",AN,[e[6]||(e[6]=m("label",{class:"block text-gray-800 font-medium",for:"fullName"},"Fulde Navn",-1)),Ve(m("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.fullName=l),type:"text",id:"fullName",class:"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.fullName]])]),m("div",SN,[e[7]||(e[7]=m("label",{class:"block text-gray-800 font-medium",for:"address"},"Adresse",-1)),Ve(m("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>r.address=l),type:"text",id:"address",class:"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.address]])]),m("div",CN,[m("div",PN,[e[8]||(e[8]=m("label",{class:"block text-gray-800 font-medium",for:"postalCode"},"Postnr.",-1)),Ve(m("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.postalCode=l),type:"text",id:"postalCode",class:"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.postalCode]])]),m("div",RN,[e[9]||(e[9]=m("label",{class:"block text-gray-800 font-medium",for:"city"},"By",-1)),Ve(m("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>r.city=l),type:"text",id:"city",class:"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},null,512),[[Je,r.city]])])]),m("div",kN,[e[11]||(e[11]=m("label",{class:"block text-gray-800 font-medium",for:"country"},"Land",-1)),Ve(m("select",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.country=l),id:"country",class:"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green",required:""},e[10]||(e[10]=[m("option",{value:"DK"},"Danmark",-1),m("option",{value:"US"},"USA",-1),m("option",{value:"GB"},"Storbritannien",-1),m("option",{value:"FR"},"Frankrig",-1)]),512),[[Jr,r.country]])]),e[12]||(e[12]=m("hr",{class:"my-4"},null,-1)),e[13]||(e[13]=m("h3",{class:"text-xl font-semibold text-dark-brown mb-4"},"Betalingsoplysninger",-1)),e[14]||(e[14]=m("div",{id:"card-element",class:"w-full p-2 border rounded"},null,-1)),e[15]||(e[15]=m("div",{id:"card-errors",role:"alert",class:"text-red-500 mt-2"},null,-1)),e[16]||(e[16]=m("div",{class:"text-right mt-6"},[m("button",{type:"submit",class:"bg-light-green text-white font-semibold py-3 px-6 rounded hover:bg-dark-green transition"}," Betal nu ")],-1))],32)]),m("div",xN,[e[21]||(e[21]=m("h3",{class:"text-xl font-semibold text-dark-brown mb-4"},"Ordresammendrag",-1)),(V(!0),U(me,null,$e(r.cartItems,(l,c)=>(V(),U("div",{key:c,class:"flex justify-between border-b py-2"},[m("div",null,[m("p",DN,se(l.name),1),m("p",ON,"Antal: "+se(l.quantity),1)]),m("p",VN,se(l.price),1)]))),128)),r.cartSubtotal!==r.cartTotal?(V(),U("div",NN,[e[18]||(e[18]=m("p",{class:"text-lg font-semibold"},"Subtotal:",-1)),m("p",LN,"DKK "+se(r.cartSubtotal),1)])):$t("",!0),r.isElite?(V(),U("div",MN,[e[19]||(e[19]=m("p",{class:"text-lg font-semibold"},"Elite Rabat (10%):",-1)),m("p",FN,"- DKK "+se((r.cartSubtotal-r.cartTotal).toFixed(2)),1)])):$t("",!0),m("div",UN,[e[20]||(e[20]=m("p",{class:"text-lg font-semibold"},"Total:",-1)),m("p",BN,"DKK "+se(r.cartTotal),1)])])])]))}const qN=tt(wN,[["render",jN],["__scopeId","data-v-427cdbfc"]]),HN=[{path:"/admin",component:sO,beforeEnter:(t,e,n)=>{const r=Fr();!r.isAuthenticated()||!r.isVerified()||!r.isAdmin()?n({path:"/login",query:{redirect:t.fullPath}}):n()}},{path:"/",component:rD},{path:"/login",component:ZV},{path:"/register",component:hN},{path:"/cart",component:tV},{path:"/category/mennesker",component:bO},{path:"/category/heste",component:SO},{path:"/category/hunde",component:DO},{path:"/category/katte",component:FO},{path:"/category/:name",component:pO},{path:"/product/:id",component:bV},{path:"/payment",component:qN},{path:"/blog",component:OV},{path:"/blog/:id",component:jV}],bb=ox({history:Lk(),routes:HN,linkActiveClass:"active-link",linkExactActiveClass:"exact-active-link"});bb.beforeEach((t,e,n)=>{const r=Fr();["/cart","/payment"].includes(t.path)&&(!r.isAuthenticated()||!r.isVerified())?n({path:"/login",query:{redirect:t.fullPath}}):n()});const KN={beforeMount(t,e){t.clickOutsideEvent=n=>{t===n.target||t.contains(n.target)||e.value(n)},document.addEventListener("click",t.clickOutsideEvent)},unmounted(t){document.removeEventListener("click",t.clickOutsideEvent)}},Ro=qm(Ox);Ro.use(IE());Ro.use(bb);Ro.directive("click-outside",KN);Ro.use(U2,{position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});Ro.mount("#app");
