import{L as hd,_ as dd,C as fd,r as za,c as md,F as gd,h as Qt,l as pd,m as _d,y as yd,k as dc,p as Id,u as Td,o as Ed,z as wd,d as dn,A as fc,e as fs,S as Ad,B as vd,D as Rd,G as mc}from"./firebase-core-KR78PDdE.js";var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ce,gc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function y(){}y.prototype=p.prototype,I.F=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(E,T,v){for(var _=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)_[Pt-2]=arguments[Pt];return p.prototype[T].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,y){y||(y=0);const E=Array(16);if(typeof p=="string")for(var T=0;T<16;++T)E[T]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(T=0;T<16;++T)E[T]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],T=I.g[2];let v=I.g[3],_;_=p+(v^y&(T^v))+E[0]+3614090360&4294967295,p=y+(_<<7&4294967295|_>>>25),_=v+(T^p&(y^T))+E[1]+3905402710&4294967295,v=p+(_<<12&4294967295|_>>>20),_=T+(y^v&(p^y))+E[2]+606105819&4294967295,T=v+(_<<17&4294967295|_>>>15),_=y+(p^T&(v^p))+E[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(v^y&(T^v))+E[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=v+(T^p&(y^T))+E[5]+1200080426&4294967295,v=p+(_<<12&4294967295|_>>>20),_=T+(y^v&(p^y))+E[6]+2821735955&4294967295,T=v+(_<<17&4294967295|_>>>15),_=y+(p^T&(v^p))+E[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(v^y&(T^v))+E[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=v+(T^p&(y^T))+E[9]+2336552879&4294967295,v=p+(_<<12&4294967295|_>>>20),_=T+(y^v&(p^y))+E[10]+4294925233&4294967295,T=v+(_<<17&4294967295|_>>>15),_=y+(p^T&(v^p))+E[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(v^y&(T^v))+E[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=v+(T^p&(y^T))+E[13]+4254626195&4294967295,v=p+(_<<12&4294967295|_>>>20),_=T+(y^v&(p^y))+E[14]+2792965006&4294967295,T=v+(_<<17&4294967295|_>>>15),_=y+(p^T&(v^p))+E[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(T^v&(y^T))+E[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=v+(y^T&(p^y))+E[6]+3225465664&4294967295,v=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(v^p))+E[11]+643717713&4294967295,T=v+(_<<14&4294967295|_>>>18),_=y+(v^p&(T^v))+E[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^v&(y^T))+E[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=v+(y^T&(p^y))+E[10]+38016083&4294967295,v=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(v^p))+E[15]+3634488961&4294967295,T=v+(_<<14&4294967295|_>>>18),_=y+(v^p&(T^v))+E[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^v&(y^T))+E[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=v+(y^T&(p^y))+E[14]+3275163606&4294967295,v=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(v^p))+E[3]+4107603335&4294967295,T=v+(_<<14&4294967295|_>>>18),_=y+(v^p&(T^v))+E[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^v&(y^T))+E[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=v+(y^T&(p^y))+E[2]+4243563512&4294967295,v=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(v^p))+E[7]+1735328473&4294967295,T=v+(_<<14&4294967295|_>>>18),_=y+(v^p&(T^v))+E[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(y^T^v)+E[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=v+(p^y^T)+E[8]+2272392833&4294967295,v=p+(_<<11&4294967295|_>>>21),_=T+(v^p^y)+E[11]+1839030562&4294967295,T=v+(_<<16&4294967295|_>>>16),_=y+(T^v^p)+E[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^v)+E[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=v+(p^y^T)+E[4]+1272893353&4294967295,v=p+(_<<11&4294967295|_>>>21),_=T+(v^p^y)+E[7]+4139469664&4294967295,T=v+(_<<16&4294967295|_>>>16),_=y+(T^v^p)+E[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^v)+E[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=v+(p^y^T)+E[0]+3936430074&4294967295,v=p+(_<<11&4294967295|_>>>21),_=T+(v^p^y)+E[3]+3572445317&4294967295,T=v+(_<<16&4294967295|_>>>16),_=y+(T^v^p)+E[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^v)+E[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=v+(p^y^T)+E[12]+3873151461&4294967295,v=p+(_<<11&4294967295|_>>>21),_=T+(v^p^y)+E[15]+530742520&4294967295,T=v+(_<<16&4294967295|_>>>16),_=y+(T^v^p)+E[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(T^(y|~v))+E[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=v+(y^(p|~T))+E[7]+1126891415&4294967295,v=p+(_<<10&4294967295|_>>>22),_=T+(p^(v|~y))+E[14]+2878612391&4294967295,T=v+(_<<15&4294967295|_>>>17),_=y+(v^(T|~p))+E[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~v))+E[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=v+(y^(p|~T))+E[3]+2399980690&4294967295,v=p+(_<<10&4294967295|_>>>22),_=T+(p^(v|~y))+E[10]+4293915773&4294967295,T=v+(_<<15&4294967295|_>>>17),_=y+(v^(T|~p))+E[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~v))+E[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=v+(y^(p|~T))+E[15]+4264355552&4294967295,v=p+(_<<10&4294967295|_>>>22),_=T+(p^(v|~y))+E[6]+2734768916&4294967295,T=v+(_<<15&4294967295|_>>>17),_=y+(v^(T|~p))+E[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~v))+E[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=v+(y^(p|~T))+E[11]+3174756917&4294967295,v=p+(_<<10&4294967295|_>>>22),_=T+(p^(v|~y))+E[2]+718787259&4294967295,T=v+(_<<15&4294967295|_>>>17),_=y+(v^(T|~p))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+v&4294967295}n.prototype.v=function(I,p){p===void 0&&(p=I.length);const y=p-this.blockSize,E=this.C;let T=this.h,v=0;for(;v<p;){if(T==0)for(;v<=y;)s(this,I,v),v+=this.blockSize;if(typeof I=="string"){for(;v<p;)if(E[T++]=I.charCodeAt(v++),T==this.blockSize){s(this,E),T=0;break}}else for(;v<p;)if(E[T++]=I[v++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=p},n.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;p=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=p&255,p/=256;for(this.v(I),I=Array(16),p=0,y=0;y<4;++y)for(let E=0;E<32;E+=8)I[p++]=this.g[y]>>>E&255;return I};function i(I,p){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function a(I,p){this.h=p;const y=[];let E=!0;for(let T=I.length-1;T>=0;T--){const v=I[T]|0;E&&v==p||(y[T]=v,E=!1)}this.g=y}var u={};function l(I){return-128<=I&&I<128?i(I,function(p){return new a([p|0],p<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return D(d(-I));const p=[];let y=1;for(let E=0;I>=y;E++)p[E]=I/y|0,y*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(m(I.substring(1),p));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let E=g;for(let v=0;v<I.length;v+=8){var T=Math.min(8,I.length-v);const _=parseInt(I.substring(v,v+T),p);T<8?(T=d(Math.pow(p,T)),E=E.j(T).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=l(0),R=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(k(this))return-D(this).m();let I=0,p=1;for(let y=0;y<this.g.length;y++){const E=this.i(y);I+=(E>=0?E:4294967296+E)*p,p*=4294967296}return I},r.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(k(this))return"-"+D(this).toString(I);const p=d(Math.pow(I,6));var y=this;let E="";for(;;){const T=Y(y,p).g;y=Q(y,T.j(p));let v=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,M(y))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},r.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(let p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function k(I){return I.h==-1}r.l=function(I){return I=Q(this,I),k(I)?-1:M(I)?0:1};function D(I){const p=I.g.length,y=[];for(let E=0;E<p;E++)y[E]=~I.g[E];return new a(y,~I.h).add(R)}r.abs=function(){return k(this)?D(this):this},r.add=function(I){const p=Math.max(this.g.length,I.g.length),y=[];let E=0;for(let T=0;T<=p;T++){let v=E+(this.i(T)&65535)+(I.i(T)&65535),_=(v>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=_>>>16,v&=65535,_&=65535,y[T]=_<<16|v}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Q(I,p){return I.add(D(p))}r.j=function(I){if(M(this)||M(I))return g;if(k(this))return k(I)?D(this).j(D(I)):D(D(this).j(I));if(k(I))return D(this.j(D(I)));if(this.l(S)<0&&I.l(S)<0)return d(this.m()*I.m());const p=this.g.length+I.g.length,y=[];for(var E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<I.g.length;T++){const v=this.i(E)>>>16,_=this.i(E)&65535,Pt=I.i(T)>>>16,Ie=I.i(T)&65535;y[2*E+2*T]+=_*Ie,j(y,2*E+2*T),y[2*E+2*T+1]+=v*Ie,j(y,2*E+2*T+1),y[2*E+2*T+1]+=_*Pt,j(y,2*E+2*T+1),y[2*E+2*T+2]+=v*Pt,j(y,2*E+2*T+2)}for(I=0;I<p;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=p;I<2*p;I++)y[I]=0;return new a(y,0)};function j(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function U(I,p){this.g=I,this.h=p}function Y(I,p){if(M(p))throw Error("division by zero");if(M(I))return new U(g,g);if(k(I))return p=Y(D(I),p),new U(D(p.g),D(p.h));if(k(p))return p=Y(I,D(p)),new U(D(p.g),p.h);if(I.g.length>30){if(k(I)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var y=R,E=p;E.l(I)<=0;)y=X(y),E=X(E);var T=$(y,1),v=$(E,1);for(E=$(E,2),y=$(y,2);!M(E);){var _=v.add(E);_.l(I)<=0&&(T=T.add(y),v=_),E=$(E,1),y=$(y,1)}return p=Q(I,T.j(p)),new U(T,p)}for(T=g;I.l(p)>=0;){for(y=Math.max(1,Math.floor(I.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=d(y),_=v.j(p);k(_)||_.l(I)>0;)y-=E,v=d(y),_=v.j(p);M(v)&&(v=R),T=T.add(v),I=Q(I,_)}return new U(T,I)}r.B=function(I){return Y(this,I).h},r.and=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<p;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},r.or=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<p;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},r.xor=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<p;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function X(I){const p=I.g.length+1,y=[];for(let E=0;E<p;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function $(I,p){const y=p>>5;p%=32;const E=I.g.length-y,T=[];for(let v=0;v<E;v++)T[v]=p>0?I.i(v+y)>>>p|I.i(v+y+1)<<32-p:I.i(v+y);return new a(T,I.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,gc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ce=a}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pc,Yn,_c,es,Pi,yc,Ic,Tc;(function(){var r,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wr=="object"&&Wr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function u(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function l(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=l,d.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,A,P){for(var x=Array(arguments.length-2),z=2;z<arguments.length;z++)x[z-2]=arguments[z];return c.prototype[A].apply(f,x)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function M(o,c){for(let f=1;f<arguments.length;f++){const A=arguments[f];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const P=A.length||0;o.length=h+P;for(let x=0;x<P;x++)o[h+x]=A[x]}else o.push(A)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(o){a.setTimeout(()=>{throw o},0)}function Q(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,h){const f=U.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var U=new k(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let X,$=!1,I=new j,p=()=>{const o=Promise.resolve(void 0);X=()=>{o.then(y)}};function y(){for(var o;o=Q();){try{o.h.call(o.g)}catch(h){D(h)}var c=U;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}$=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function Pt(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(Pt,T),Pt.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Pt.Z.h.call(this)},Pt.prototype.h=function(){Pt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ie="closure_listenable_"+(Math.random()*1e6|0),Nh=0;function kh(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Nh,this.da=this.fa=!1}function Nr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function kr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Mh(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function jo(o){const c={};for(const h in o)c[h]=o[h];return c}const zo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Go(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let P=0;P<zo.length;P++)h=zo[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Mr(o){this.src=o,this.g={},this.h=0}Mr.prototype.add=function(o,c,h,f,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const x=Xs(o,c,f,A);return x>-1?(c=o[x],h||(c.fa=!1)):(c=new kh(c,this.src,P,!!f,A),c.fa=h,o.push(c)),c};function Hs(o,c){const h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),P;(P=A>=0)&&Array.prototype.splice.call(f,A,1),P&&(Nr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Xs(o,c,h,f){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return A}return-1}var Ys="closure_lm_"+(Math.random()*1e6|0),Js={};function Ko(o,c,h,f,A){if(Array.isArray(c)){for(let P=0;P<c.length;P++)Ko(o,c[P],h,f,A);return null}return h=Wo(h),o&&o[Ie]?o.J(c,h,u(f)?!!f.capture:!1,A):Oh(o,c,h,!1,f,A)}function Oh(o,c,h,f,A,P){if(!c)throw Error("Invalid event type");const x=u(A)?!!A.capture:!!A;let z=ti(o);if(z||(o[Ys]=z=new Mr(o)),h=z.add(c,h,f,x,P),h.proxy)return h;if(f=Fh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)v||(A=x),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(Qo(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Fh(){function o(h){return c.call(o.src,o.listener,h)}const c=Lh;return o}function $o(o,c,h,f,A){if(Array.isArray(c))for(var P=0;P<c.length;P++)$o(o,c[P],h,f,A);else f=u(f)?!!f.capture:!!f,h=Wo(h),o&&o[Ie]?(o=o.i,P=String(c).toString(),P in o.g&&(c=o.g[P],h=Xs(c,h,f,A),h>-1&&(Nr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[P],o.h--)))):o&&(o=ti(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Xs(c,h,f,A)),(h=o>-1?c[o]:null)&&Zs(h))}function Zs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ie])Hs(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Qo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ti(c))?(Hs(h,o),h.h==0&&(h.src=null,c[Ys]=null)):Nr(o)}}}function Qo(o){return o in Js?Js[o]:Js[o]="on"+o}function Lh(o,c){if(o.da)o=!0;else{c=new Pt(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&Zs(o),o=h.call(f,c)}return o}function ti(o){return o=o[Ys],o instanceof Mr?o:null}var ei="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wo(o){return typeof o=="function"?o:(o[ei]||(o[ei]=function(c){return o.handleEvent(c)}),o[ei])}function yt(){E.call(this),this.i=new Mr(this),this.M=this,this.G=null}g(yt,E),yt.prototype[Ie]=!0,yt.prototype.removeEventListener=function(o,c,h,f){$o(this,o,c,h,f)};function wt(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var A=c;c=new T(f,o),Go(c,A)}A=!0;let P,x;if(h)for(x=h.length-1;x>=0;x--)P=c.g=h[x],A=Or(P,f,!0,c)&&A;if(P=c.g=o,A=Or(P,f,!0,c)&&A,A=Or(P,f,!1,c)&&A,h)for(x=0;x<h.length;x++)P=c.g=h[x],A=Or(P,f,!1,c)&&A}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)Nr(h[f]);delete o.g[c],o.h--}}this.G=null},yt.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},yt.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Or(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let P=0;P<c.length;++P){const x=c[P];if(x&&!x.da&&x.capture==h){const z=x.listener,dt=x.ha||x.src;x.fa&&Hs(o.i,x),A=z.call(dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Uh(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Ho(o){o.g=Uh(()=>{o.g=null,o.i&&(o.i=!1,Ho(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Bh extends E{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(o){E.call(this),this.h=o,this.g={}}g(Cn,E);var Xo=[];function Yo(o){kr(o.g,function(c,h){this.g.hasOwnProperty(h)&&Zs(c)},o),o.g={}}Cn.prototype.N=function(){Cn.Z.N.call(this),Yo(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=a.JSON.stringify,qh=a.JSON.parse,jh=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Jo(){}function Zo(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ri(){T.call(this,"d")}g(ri,T);function si(){T.call(this,"c")}g(si,T);var Te={},ta=null;function Fr(){return ta=ta||new yt}Te.Ia="serverreachability";function ea(o){T.call(this,Te.Ia,o)}g(ea,T);function Dn(o){const c=Fr();wt(c,new ea(c))}Te.STAT_EVENT="statevent";function na(o,c){T.call(this,Te.STAT_EVENT,o),this.stat=c}g(na,T);function At(o){const c=Fr();wt(c,new na(c,o))}Te.Ja="timingevent";function ra(o,c){T.call(this,Te.Ja,o),this.size=c}g(ra,T);function Nn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function kn(){this.g=!0}kn.prototype.ua=function(){this.g=!1};function zh(o,c,h,f,A,P){o.info(function(){if(o.g)if(P){var x="",z=P.split("&");for(let et=0;et<z.length;et++){var dt=z[et].split("=");if(dt.length>1){const mt=dt[0];dt=dt[1];const Ut=mt.split("_");x=Ut.length>=2&&Ut[1]=="type"?x+(mt+"="+dt+"&"):x+(mt+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+x})}function Gh(o,c,h,f,A,P,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+P+" "+x})}function He(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+$h(o,h)+(f?" "+f:"")})}function Kh(o,c){o.info(function(){return"TIMEOUT: "+c})}kn.prototype.info=function(){};function $h(o,c){if(!o.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var h=P[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let x=1;x<f.length;x++)f[x]=""}}}}return ni(P)}catch{return c}}var Lr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ia;function ii(){}g(ii,Jo),ii.prototype.g=function(){return new XMLHttpRequest},ia=new ii;function Mn(o){return encodeURIComponent(String(o))}function Qh(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Jt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new Cn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oa}function oa(){this.i=null,this.g="",this.h=!1}var aa={},oi={};function ai(o,c,h){o.M=1,o.A=Br(Lt(c)),o.u=h,o.R=!0,ua(o,null)}function ua(o,c){o.F=Date.now(),Ur(o),o.B=Lt(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Ea(h.i,"t",f),o.C=0,h=o.j.L,o.h=new oa,o.g=Ua(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Bh(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Xo[0]=A.toString()),A=Xo);for(let P=0;P<A.length;P++){const x=Ko(h,A[P],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=o.J?jo(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Dn(),zh(o.i,o.v,o.B,o.l,o.S,o.u)}Jt.prototype.ba=function(o){o=o.target;const c=this.O;c&&ee(o)==3?c.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)t:{const z=ee(this.g),dt=this.g.ya(),et=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Sa(this.g)))){this.K||z!=4||dt==7||(dt==8||et<=0?Dn(3):Dn(2)),ui(this);var c=this.g.ca();this.X=c;var h=Wh(this);if(this.o=c==200,Gh(this.i,this.v,this.B,this.l,this.S,z,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var P=f;break e}}P=null}if(o=P)He(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ci(this,o);else{this.o=!1,this.m=3,At(12),Ee(this),On(this);break t}}if(this.R){o=!0;let mt;for(;!this.K&&this.C<h.length;)if(mt=Hh(this,h),mt==oi){z==4&&(this.m=4,At(14),o=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==aa){this.m=4,At(15),He(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else He(this.i,this.l,mt,null),ci(this,mt);if(ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||h.length!=0||this.h.h||(this.m=1,At(16),o=!1),this.o=this.o&&o,!o)He(this.i,this.l,h,"[Invalid Chunked Response]"),Ee(this),On(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),_i(x),x.P=!0,At(11))}}else He(this.i,this.l,h,null),ci(this,h);z==4&&Ee(this),this.o&&!this.K&&(z==4?Ma(this.j,this):(this.o=!1,Ur(this)))}else cd(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Ee(this),On(this)}}}catch{}finally{}};function Wh(o){if(!ca(o))return o.g.la();const c=Sa(o.g);if(c==="")return"";let h="";const f=c.length,A=ee(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ee(o),On(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<f;P++)o.h.h=!0,h+=o.h.i.decode(c[P],{stream:!(A&&P==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function ca(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Hh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?oi:(h=Number(c.substring(h,f)),isNaN(h)?aa:(f+=1,f+h>c.length?oi:(c=c.slice(f,f+h),o.C=f+h,c)))}Jt.prototype.cancel=function(){this.K=!0,Ee(this)};function Ur(o){o.T=Date.now()+o.H,la(o,o.H)}function la(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Nn(d(o.aa,o),c)}function ui(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Jt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Kh(this.i,this.B),this.M!=2&&(Dn(),At(17)),Ee(this),this.m=2,On(this)):la(this,this.T-o)};function On(o){o.j.I==0||o.K||Ma(o.j,o)}function Ee(o){ui(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Yo(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function ci(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||li(h.h,o))){if(!o.L&&li(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Kr(h),zr(h);else break t;pi(h),At(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Nn(d(h.Va,h),6e3));fa(h.h)<=1&&h.ta&&(h.ta=void 0)}else Ae(h,11)}else if((o.L||h.g==o)&&Kr(h),!_(c))for(A=h.Ba.g.parse(c),c=0;c<A.length;c++){let et=A[c];const mt=et[0];if(!(mt<=h.K))if(h.K=mt,et=et[1],h.I==2)if(et[0]=="c"){h.M=et[1],h.ba=et[2];const Ut=et[3];Ut!=null&&(h.ka=Ut,h.j.info("VER="+h.ka));const ve=et[4];ve!=null&&(h.za=ve,h.j.info("SVER="+h.za));const ne=et[5];ne!=null&&typeof ne=="number"&&ne>0&&(f=1.5*ne,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const re=o.g;if(re){const Qr=re.g?re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var P=f.h;P.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(hi(P,P.h),P.h=null))}if(f.G){const yi=re.g?re.g.getResponseHeader("X-HTTP-Session-Id"):null;yi&&(f.wa=yi,nt(f.J,f.G,yi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var x=o;if(f.na=La(f,f.L?f.ba:null,f.W),x.L){ma(f.h,x);var z=x,dt=f.O;dt&&(z.H=dt),z.D&&(ui(z),Ur(z)),f.g=x}else Na(f);h.i.length>0&&Gr(h)}else et[0]!="stop"&&et[0]!="close"||Ae(h,7);else h.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Ae(h,7):gi(h):et[0]!="noop"&&h.l&&h.l.qa(et),h.A=0)}}Dn(4)}catch{}}var Xh=class{constructor(o,c){this.g=o,this.map=c}};function ha(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function da(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fa(o){return o.h?1:o.g?o.g.size:0}function li(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function hi(o,c){o.g?o.g.add(c):o.h=c}function ma(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ha.prototype.cancel=function(){if(this.i=ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ga(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yh(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let A,P=null;f>=0?(A=o[h].substring(0,f),P=o[h].substring(f+1)):A=o[h],c(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Zt?(this.l=o.l,Fn(this,o.j),this.o=o.o,this.g=o.g,Ln(this,o.u),this.h=o.h,di(this,wa(o.i)),this.m=o.m):o&&(c=String(o).match(pa))?(this.l=!1,Fn(this,c[1]||"",!0),this.o=Un(c[2]||""),this.g=Un(c[3]||"",!0),Ln(this,c[4]),this.h=Un(c[5]||"",!0),di(this,c[6]||"",!0),this.m=Un(c[7]||"")):(this.l=!1,this.i=new qn(null,this.l))}Zt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Bn(c,_a,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Bn(c,_a,!0),"@"),o.push(Mn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Bn(h,h.charAt(0)=="/"?td:Zh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Bn(h,nd)),o.join("")},Zt.prototype.resolve=function(o){const c=Lt(this);let h=!!o.j;h?Fn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Ln(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=c.h.lastIndexOf("/");A!=-1&&(f=c.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let x=0;x<A.length;){const z=A[x++];z=="."?f&&x==A.length&&P.push(""):z==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),f&&x==A.length&&P.push("")):(P.push(z),f=!0)}f=P.join("/")}else f=A}return h?c.h=f:h=o.i.toString()!=="",h?di(c,wa(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Lt(o){return new Zt(o)}function Fn(o,c,h){o.j=h?Un(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ln(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function di(o,c,h){c instanceof qn?(o.i=c,rd(o.i,o.l)):(h||(c=Bn(c,ed)),o.i=new qn(c,o.l))}function nt(o,c,h){o.i.set(c,h)}function Br(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Un(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Jh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _a=/[#\/\?@]/g,Zh=/[#\?:]/g,td=/[#\?]/g,ed=/[#\?@]/g,nd=/#/g;function qn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function we(o){o.g||(o.g=new Map,o.h=0,o.i&&Yh(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=qn.prototype,r.add=function(o,c){we(this),this.i=null,o=Xe(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ya(o,c){we(o),c=Xe(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ia(o,c){return we(o),c=Xe(o,c),o.g.has(c)}r.forEach=function(o,c){we(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)};function Ta(o,c){we(o);let h=[];if(typeof c=="string")Ia(o,c)&&(h=h.concat(o.g.get(Xe(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}r.set=function(o,c){return we(this),this.i=null,o=Xe(this,o),Ia(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=Ta(this,o),o.length>0?String(o[0]):c):c};function Ea(o,c,h){ya(o,c),h.length>0&&(o.i=null,o.g.set(Xe(o,c),S(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const A=Mn(h);h=Ta(this,h);for(let P=0;P<h.length;P++){let x=A;h[P]!==""&&(x+="="+Mn(h[P])),o.push(x)}}return this.i=o.join("&")};function wa(o){const c=new qn;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Xe(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function rd(o,c){c&&!o.j&&(we(o),o.i=null,o.g.forEach(function(h,f){const A=f.toLowerCase();f!=A&&(ya(this,f),Ea(this,A,h))},o)),o.j=c}function sd(o,c){const h=new kn;if(a.Image){const f=new Image;f.onload=m(te,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(te,h,"TestLoadImage: error",!1,c,f),f.onabort=m(te,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(te,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function id(o,c){const h=new kn,f=new AbortController,A=setTimeout(()=>{f.abort(),te(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?te(h,"TestPingServer: ok",!0,c):te(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),te(h,"TestPingServer: error",!1,c)})}function te(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function od(){this.g=new jh}function fi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(fi,Jo),fi.prototype.g=function(){return new qr(this.i,this.h)};function qr(o,c){yt.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(qr,yt),r=qr.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,zn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Aa(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Aa(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?jn(this):zn(this),this.readyState==3&&Aa(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,jn(this))},r.Na=function(o){this.g&&(this.response=o,jn(this))},r.ga=function(){this.g&&jn(this)};function jn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,zn(o)}r.setRequestHeader=function(o,c){this.A.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function va(o){let c="";return kr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function mi(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=va(h),typeof o=="string"?h!=null&&Mn(h):nt(o,c,h))}function ot(o){yt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ot,yt);var ad=/^https?$/i,ud=["POST","PUT"];r=ot.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ia.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Ra(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(ud,c,void 0)>=0)||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of h)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Ra(this,P)}};function Ra(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Pa(o),jr(o)}function Pa(o){o.A||(o.A=!0,wt(o,"complete"),wt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,wt(this,"complete"),wt(this,"abort"),jr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),ot.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Va(this):this.Xa())},r.Xa=function(){Va(this)};function Va(o){if(o.h&&typeof i<"u"){if(o.v&&ee(o)==4)setTimeout(o.Ca.bind(o),0);else if(wt(o,"readystatechange"),ee(o)==4){o.h=!1;try{const P=o.ca();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=P===0){let x=String(o.D).match(pa)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!ad.test(x?x.toLowerCase():"")}h=f}if(h)wt(o,"complete"),wt(o,"success");else{o.o=6;try{var A=ee(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Pa(o)}}finally{jr(o)}}}}function jr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||wt(o,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ee(o){return o.g?o.g.readyState:0}r.ca=function(){try{return ee(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),qh(c)}};function Sa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function cd(o){const c={};o=(o.g&&ee(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=Qh(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[A]||[];c[A]=P,P.push(h)}Mh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ba(o){this.za=0,this.i=[],this.j=new kn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,o),this.Za=Gn("retryDelaySeedMs",1e4,o),this.Ta=Gn("forwardChannelMaxRetries",2,o),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ha(o&&o.concurrentRequestLimit),this.Ba=new od,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ba.prototype,r.ka=8,r.I=1,r.connect=function(o,c,h,f){At(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=La(this,null,this.W),Gr(this)};function gi(o){if(Ca(o),o.I==3){var c=o.V++,h=Lt(o.J);if(nt(h,"SID",o.M),nt(h,"RID",c),nt(h,"TYPE","terminate"),Kn(o,h),c=new Jt(o,o.j,c),c.M=2,c.A=Br(Lt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ua(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ur(c)}Fa(o)}function zr(o){o.g&&(_i(o),o.g.cancel(),o.g=null)}function Ca(o){zr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Kr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Gr(o){if(!da(o.h)&&!o.m){o.m=!0;var c=o.Ea;X||p(),$||(X(),$=!0),I.add(c,o),o.D=0}}function ld(o,c){return fa(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Nn(d(o.Ea,o,c),Oa(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Jt(this,this.j,o);let P=this.o;if(this.U&&(P?(P=jo(P),Go(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Da(this,A,c),h=Lt(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),Kn(this,h),P&&(this.R?c="headers="+Mn(va(P))+"&"+c:this.u&&mi(h,this.u,P)),hi(this.h,A),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",c),nt(h,"SID","null"),A.U=!0,ai(A,h,null)):ai(A,h,c),this.I=2}}else this.I==3&&(o?xa(this,o):this.i.length==0||da(this.h)||xa(this))};function xa(o,c){var h;c?h=c.l:h=o.V++;const f=Lt(o.J);nt(f,"SID",o.M),nt(f,"RID",h),nt(f,"AID",o.K),Kn(o,f),o.u&&o.o&&mi(f,o.u,o.o),h=new Jt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Da(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),hi(o.h,h),ai(h,f,c)}function Kn(o,c){o.H&&kr(o.H,function(h,f){nt(c,f,h)}),o.l&&kr({},function(h,f){nt(c,f,h)})}function Da(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;t:{var A=o.i;let z=-1;for(;;){const dt=["count="+h];z==-1?h>0?(z=A[0].g,dt.push("ofs="+z)):z=0:dt.push("ofs="+z);let et=!0;for(let mt=0;mt<h;mt++){var P=A[mt].g;const Ut=A[mt].map;if(P-=z,P<0)z=Math.max(0,A[mt].g-100),et=!1;else try{P="req"+P+"_"||"";try{var x=Ut instanceof Map?Ut:Object.entries(Ut);for(const[ve,ne]of x){let re=ne;u(ne)&&(re=ni(ne)),dt.push(P+ve+"="+encodeURIComponent(re))}}catch(ve){throw dt.push(P+"type="+encodeURIComponent("_badmap")),ve}}catch{f&&f(Ut)}}if(et){x=dt.join("&");break t}}x=void 0}return o=o.i.splice(0,h),c.G=o,x}function Na(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;X||p(),$||(X(),$=!0),I.add(c,o),o.A=0}}function pi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Nn(d(o.Da,o),Oa(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,ka(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Nn(d(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),zr(this),ka(this))};function _i(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ka(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Lt(o.na);nt(c,"RID","rpc"),nt(c,"SID",o.M),nt(c,"AID",o.K),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(c,"TO",o.ia),nt(c,"TYPE","xmlhttp"),Kn(o,c),o.u&&o.o&&mi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Br(Lt(c)),h.u=null,h.R=!0,ua(h,o)}r.Va=function(){this.C!=null&&(this.C=null,zr(this),pi(this),At(19))};function Kr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ma(o,c){var h=null;if(o.g==c){Kr(o),_i(o),o.g=null;var f=2}else if(li(o.h,c))h=c.G,ma(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;f=Fr(),wt(f,new ra(f,h)),Gr(o)}else Na(o);else if(A=c.m,A==3||A==0&&c.X>0||!(f==1&&ld(o,c)||f==2&&pi(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Ae(o,5);break;case 4:Ae(o,10);break;case 3:Ae(o,6);break;default:Ae(o,2)}}}function Oa(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Ae(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const A=!f;f=new Zt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Fn(f,"https"),Br(f),A?sd(f.toString(),h):id(f.toString(),h)}else At(2);o.I=0,o.l&&o.l.pa(c),Fa(o),Ca(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Fa(o){if(o.I=0,o.ja=[],o.l){const c=ga(o.h);(c.length!=0||o.i.length!=0)&&(M(o.ja,c),M(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function La(o,c,h){var f=h instanceof Zt?Lt(h):new Zt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var A=a.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const P=new Zt(null);f&&Fn(P,f),c&&(P.g=c),A&&Ln(P,A),h&&(P.h=h),f=P}return h=o.G,c=o.wa,h&&c&&nt(f,h,c),nt(f,"VER",o.ka),Kn(o,f),f}function Ua(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ot(new fi({ab:h})):new ot(o.ma),c.Fa(o.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ba(){}r=Ba.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function $r(){}$r.prototype.g=function(o,c){return new St(o,c)};function St(o,c){yt.call(this),this.g=new ba(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Ye(this)}g(St,yt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){gi(this.g)},St.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ni(o),o=h);c.i.push(new Xh(c.Ya++,o)),c.I==3&&Gr(c)},St.prototype.N=function(){this.g.l=null,delete this.j,gi(this.g),delete this.g,St.Z.N.call(this)};function qa(o){ri.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(qa,ri);function ja(){si.call(this),this.status=1}g(ja,si);function Ye(o){this.g=o}g(Ye,Ba),Ye.prototype.ra=function(){wt(this.g,"a")},Ye.prototype.qa=function(o){wt(this.g,new qa(o))},Ye.prototype.pa=function(o){wt(this.g,new ja)},Ye.prototype.oa=function(){wt(this.g,"b")},$r.prototype.createWebChannel=$r.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Tc=function(){return new $r},Ic=function(){return Fr()},yc=Te,Pi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,es=Lr,sa.COMPLETE="complete",_c=sa,Zo.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",yt.prototype.listen=yt.prototype.J,Yn=Zo,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,pc=ot}).apply(typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{});const Ka="@firebase/firestore",$a="4.9.3";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Pn="12.7.0";/**
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
 */const Fe=new hd("@firebase/firestore");function sn(){return Fe.logLevel}function b(r,...t){if(Fe.logLevel<=Qt.DEBUG){const e=t.map(Yi);Fe.debug(`Firestore (${Pn}): ${r}`,...e)}}function vt(r,...t){if(Fe.logLevel<=Qt.ERROR){const e=t.map(Yi);Fe.error(`Firestore (${Pn}): ${r}`,...e)}}function Le(r,...t){if(Fe.logLevel<=Qt.WARN){const e=t.map(Yi);Fe.warn(`Firestore (${Pn}): ${r}`,...e)}}function Yi(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ec(r,n,e)}function Ec(r,t,e){let n=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw vt(n),new Error(n)}function F(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Ec(t,s,n)}function q(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends gd{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class wc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Vd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sd{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){F(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string",31837,{l:n}),new wc(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class bd{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cd{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new bd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,md(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){F(this.o===void 0,3512);const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qa(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(F(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Qa(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dd(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Ji{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Dd(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function Vi(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return Ii(s)===Ii(i)?B(s,i):Ii(s)?1:-1}return B(r.length,t.length)}const Nd=55296,kd=57343;function Ii(r){const t=r.charCodeAt(0);return t>=Nd&&t<=kd}function fn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Ac(r){return r+"\0"}/**
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
 */const Wa="__name__";class Bt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Bt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return B(t.length,e.length)}static compareSegments(t,e){const n=Bt.isNumericId(t),s=Bt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Bt.extractNumericId(t).compare(Bt.extractNumericId(e)):Vi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ce.fromString(t.substring(4,t.length-2))}}class H extends Bt{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Md=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Bt{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return Md.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wa}static keyField(){return new it([Wa])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new C(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new C(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(H.fromString(t))}static fromName(t){return new N(H.fromString(t).popFirst(5))}static empty(){return new N(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new H(t.slice()))}}/**
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
 */function vc(r,t,e){if(!e)throw new C(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Od(r,t,e,n){if(t===!0&&n===!0)throw new C(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ha(r){if(!N.isDocumentKey(r))throw new C(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Xa(r){if(N.isDocumentKey(r))throw new C(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rc(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Cs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function de(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Cs(r);throw new C(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ct(r,t){const e={typeString:r};return t&&(e.value=t),e}function vr(r,t){if(!Rc(r))throw new C(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new C(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ya=-62135596800,Ja=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Ja);return new J(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ya)throw new C(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ja}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(vr(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ya;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:ct("string",J._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new J(0,0))}static max(){return new L(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const lr=-1;class ms{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Si(r){return r.fields.find(t=>t.kind===2)}function Pe(r){return r.fields.filter(t=>t.kind!==2)}ms.UNKNOWN_ID=-1;class ns{constructor(t,e){this.fieldPath=t,this.kind=e}}class hr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new hr(0,Dt.min())}}function Fd(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new J(e+1,0):new J(e,n));return new Dt(s,N.empty(),t)}function Pc(r){return new Dt(r.readTime,r.key,lr)}class Dt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Dt(L.min(),N.empty(),lr)}static max(){return new Dt(L.max(),N.empty(),lr)}}function Zi(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
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
 */const Vc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ke(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Vc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(s=>s?w.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new w((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++u,u===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new w((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
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
 */const bt="SimpleDb";class xs{static open(t,e,n,s){try{return new xs(e,t.transaction(s,n))}catch(i){throw new nr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new zt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new nr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=to(n.target.error);this.S.reject(new nr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(b(bt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ud(e)}}class le{static delete(t){return b(bt,"Removing database:",t),Se(vd().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!Rd())return!1;if(le.F())return!0;const t=fs(),e=le.M(t),n=0<e&&e<10,s=bc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,le.M(fs())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(b(bt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new nr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new C(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new nr(t,a))},s.onupgradeneeded=i=>{b(bt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{b(bt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const u=xs.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.C(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return l.catch(()=>{}),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(b(bt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function bc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Ld{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return Se(this.U.delete())}}class nr extends C{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function _e(r){return r.name==="IndexedDbTransactionError"}class Ud{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b(bt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(b(bt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Se(n)}add(t){return b(bt,"ADD",this.store.name,t,t),Se(this.store.add(t))}get(t){return Se(this.store.get(t)).next(e=>(e===void 0&&(e=null),b(bt,"GET",this.store.name,t,e),e))}delete(t){return b(bt,"DELETE",this.store.name,t),Se(this.store.delete(t))}count(){return b(bt,"COUNT",this.store.name),Se(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(u,l)=>{a.push(l)}).next(()=>a)}}Y(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}Z(t,e){b(bt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const s=this.cursor(n);return this.H(s,(i,a,u)=>u.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new w((n,s)=>{e.onerror=i=>{const a=to(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}H(t,e){const n=[];return new w((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Ld(u),d=e(u.primaryKey,u.value,l);if(d instanceof w){const m=d.catch(g=>(l.done(),w.reject(g)));n.push(m)}l.isDone?s():l.G===null?u.continue():u.continue(l.G)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Se(r){return new w((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=to(n.target.error);e(s)}})}let Za=!1;function to(r){const t=le.M(fs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Za||(Za=!0,setTimeout(()=>{throw n},0)),n}}return r}const rr="IndexBackfiller";class Bd{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){b(rr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();b(rr,`Documents written: ${e}`)}catch(e){_e(e)?b(rr,"Ignoring IndexedDB error during index backfill: ",e):await Ke(e)}await this.re(6e4)})}}class qd{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return b(rr,`Processing collection: ${a}`),this.oe(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(u=>(b(rr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Pc(i);Zi(a,n)>0&&(n=a)}),new Dt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class kt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}kt.ce=-1;/**
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
 */const Ne=-1;function Ds(r){return r==null}function dr(r){return r===0&&1/r==-1/0}function jd(r){return typeof r=="number"&&Number.isInteger(r)&&!dr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const gs="";function Et(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=tu(t)),t=zd(r.get(e),t);return tu(t)}function zd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case gs:e+="";break;default:e+=i}}return e}function tu(r){return r+gs+""}function qt(r){const t=r.length;if(F(t>=2,64408,{path:r}),t===2)return F(r.charAt(0)===gs&&r.charAt(1)==="",56145,{path:r}),H.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(gs,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new H(n)}/**
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
 */const Ve="remoteDocuments",Rr="owner",Je="owner",fr="mutationQueues",Gd="userId",Ft="mutations",eu="batchId",De="userMutationsIndex",nu=["userId","batchId"];/**
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
 */function rs(r,t){return[r,Et(t)]}function Cc(r,t,e){return[r,Et(t),e]}const Kd={},mn="documentMutations",ps="remoteDocumentsV14",$d=["prefixPath","collectionGroup","readTime","documentId"],ss="documentKeyIndex",Qd=["prefixPath","collectionGroup","documentId"],xc="collectionGroupIndex",Wd=["collectionGroup","readTime","prefixPath","documentId"],mr="remoteDocumentGlobal",bi="remoteDocumentGlobalKey",gn="targets",Dc="queryTargetsIndex",Hd=["canonicalId","targetId"],pn="targetDocuments",Xd=["targetId","path"],eo="documentTargetsIndex",Yd=["path","targetId"],_s="targetGlobalKey",ke="targetGlobal",gr="collectionParents",Jd=["collectionId","parent"],_n="clientMetadata",Zd="clientId",Ns="bundles",tf="bundleId",ks="namedQueries",ef="name",no="indexConfiguration",nf="indexId",Ci="collectionGroupIndex",rf="collectionGroup",sr="indexState",sf=["indexId","uid"],Nc="sequenceNumberIndex",of=["uid","sequenceNumber"],ir="indexEntries",af=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],kc="documentKeyIndex",uf=["indexId","uid","orderedDocumentKey"],Ms="documentOverlays",cf=["userId","collectionPath","documentId"],xi="collectionPathOverlayIndex",lf=["userId","collectionPath","largestBatchId"],Mc="collectionGroupOverlayIndex",hf=["userId","collectionGroup","largestBatchId"],ro="globals",df="name",Oc=[fr,Ft,mn,Ve,gn,Rr,ke,pn,_n,mr,gr,Ns,ks],ff=[...Oc,Ms],Fc=[fr,Ft,mn,ps,gn,Rr,ke,pn,_n,mr,gr,Ns,ks,Ms],Lc=Fc,so=[...Lc,no,sr,ir],mf=so,Uc=[...so,ro],gf=Uc;/**
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
 */class Di extends Sc{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function ft(r,t){const e=q(r);return le.O(e.le,t)}/**
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
 */function ru(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function $e(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Bc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class st{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hr(this.root,t,this.comparator,!0)}}class Hr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new _t(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new su(this.data.getIterator())}getIteratorFrom(t){return new su(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class su{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ze(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Mt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new tt(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class qc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qc("Invalid base64 string: "+i):i}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const pf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(F(!!r,39018),typeof r=="string"){let t=0;const e=pf.exec(r);if(F(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
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
 */const jc="server_timestamp",zc="__type__",Gc="__previous_value__",Kc="__local_write_time__";function io(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[zc])==null?void 0:n.stringValue)===jc}function Os(r){const t=r.mapValue.fields[Gc];return io(t)?Os(t):t}function pr(r){const t=Ht(r.mapValue.fields[Kc].timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class _f{constructor(t,e,n,s,i,a,u,l,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m}}const ys="(default)";class Ue{constructor(t,e){this.projectId=t,this.database=e||ys}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database===ys}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const oo="__type__",$c="__max__",ue={mapValue:{fields:{__type__:{stringValue:$c}}}},ao="__vector__",yn="value",is={nullValue:"NULL_VALUE"};function fe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?io(r)?4:Qc(r)?9007199254740991:Fs(r)?10:11:O(28295,{value:r})}function $t(r,t){if(r===t)return!0;const e=fe(r);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return pr(r).isEqual(pr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ht(s.timestampValue),u=Ht(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?dr(a)===dr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return fn(r.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(ru(a)!==ru(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!$t(a[l],u[l])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function _r(r,t){return(r.values||[]).find(e=>$t(e,t))!==void 0}function me(r,t){if(r===t)return 0;const e=fe(r),n=fe(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=rt(i.integerValue||i.doubleValue),l=rt(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return iu(r.timestampValue,t.timestampValue);case 4:return iu(pr(r),pr(t));case 5:return Vi(r.stringValue,t.stringValue);case 6:return function(i,a){const u=Xt(i),l=Xt(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=B(u[d],l[d]);if(m!==0)return m}return B(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=B(rt(i.latitude),rt(a.latitude));return u!==0?u:B(rt(i.longitude),rt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ou(r.arrayValue,t.arrayValue);case 10:return function(i,a){var R,S,M,k;const u=i.fields||{},l=a.fields||{},d=(R=u[yn])==null?void 0:R.arrayValue,m=(S=l[yn])==null?void 0:S.arrayValue,g=B(((M=d==null?void 0:d.values)==null?void 0:M.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return g!==0?g:ou(d,m)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===ue.mapValue&&a===ue.mapValue)return 0;if(i===ue.mapValue)return 1;if(a===ue.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const R=Vi(l[g],m[g]);if(R!==0)return R;const S=me(u[l[g]],d[m[g]]);if(S!==0)return S}return B(l.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function iu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Ht(r),n=Ht(t),s=B(e.seconds,n.seconds);return s!==0?s:B(e.nanos,n.nanos)}function ou(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=me(e[s],n[s]);if(i)return i}return B(e.length,n.length)}function In(r){return Ni(r)}function Ni(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Xt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Ni(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Ni(e.fields[a])}`;return s+"}"}(r.mapValue):O(61005,{value:r})}function os(r){switch(fe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Os(r);return t?16+os(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+os(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return $e(n.fields,(i,a)=>{s+=i.length+os(a)}),s}(r.mapValue);default:throw O(13486,{value:r})}}function yr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ki(r){return!!r&&"integerValue"in r}function Ir(r){return!!r&&"arrayValue"in r}function au(r){return!!r&&"nullValue"in r}function uu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function as(r){return!!r&&"mapValue"in r}function Fs(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[oo])==null?void 0:n.stringValue)===ao}function or(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return $e(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=or(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=or(r.arrayValue.values[e]);return t}return{...r}}function Qc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$c}const Wc={mapValue:{fields:{[oo]:{stringValue:ao},[yn]:{arrayValue:{}}}}};function yf(r){return"nullValue"in r?is:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?yr(Ue.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Fs(r)?Wc:{mapValue:{}}:O(35942,{value:r})}function If(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?yr(Ue.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Wc:"mapValue"in r?Fs(r)?{mapValue:{}}:ue:O(61959,{value:r})}function cu(r,t){const e=me(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function lu(r,t){const e=me(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!as(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=or(e)}setAll(t){let e=it.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=or(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());as(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];as(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){$e(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Vt(or(this.value))}}function Hc(r){const t=[];return $e(r.fields,(e,n)=>{const s=new it([e]);if(as(n)){const i=Hc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Mt(t)}/**
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
 */class at{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,L.min(),L.min(),L.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,s){return new at(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new at(t,2,e,L.min(),L.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,L.min(),L.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tn{constructor(t,e){this.position=t,this.inclusive=e}}function hu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=me(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function du(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!$t(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Tf(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Xc{}class K extends Xc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ef(t,e,n):e==="array-contains"?new vf(t,n):e==="in"?new nl(t,n):e==="not-in"?new Rf(t,n):e==="array-contains-any"?new Pf(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new wf(t,n):new Af(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(me(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Xc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Z(t,e)}matches(t){return En(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function En(r){return r.op==="and"}function Mi(r){return r.op==="or"}function uo(r){return Yc(r)&&En(r)}function Yc(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function Oi(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+In(r.value);if(uo(r))return r.filters.map(t=>Oi(t)).join(",");{const t=r.filters.map(e=>Oi(e)).join(",");return`${r.op}(${t})`}}function Jc(r,t){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Jc(a,s.filters[u]),!0):!1}(r,t):void O(19439)}function Zc(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function tl(r){return r instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${In(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(tl).join(" ,")+"}"}(r):"Filter"}class Ef extends K{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class wf extends K{constructor(t,e){super(t,"in",e),this.keys=el("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Af extends K{constructor(t,e){super(t,"not-in",e),this.keys=el("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function el(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class vf extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ir(e)&&_r(e.arrayValue,this.value)}}class nl extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_r(this.value.arrayValue,e)}}class Rf extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_r(this.value.arrayValue,e)}}class Pf extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ir(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>_r(this.value.arrayValue,n))}}/**
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
 */class Vf{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function Fi(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Vf(r,t,e,n,s,i,a)}function Be(r){const t=q(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Oi(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Ds(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>In(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>In(n)).join(",")),t.Te=e}return t.Te}function Pr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Tf(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Jc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!du(r.startAt,t.startAt)&&du(r.endAt,t.endAt)}function Is(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ts(r,t){return r.filters.filter(e=>e instanceof K&&e.field.isEqual(t))}function fu(r,t,e){let n=is,s=!0;for(const i of Ts(r,t)){let a=is,u=!0;switch(i.op){case"<":case"<=":a=yf(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=is}cu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];cu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function mu(r,t,e){let n=ue,s=!0;for(const i of Ts(r,t)){let a=ue,u=!0;switch(i.op){case">=":case">":a=If(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ue}lu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];lu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Vn{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Sf(r,t,e,n,s,i,a,u){return new Vn(r,t,e,n,s,i,a,u)}function Ls(r){return new Vn(r)}function gu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rl(r){return r.collectionGroup!==null}function ar(r){const t=q(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(it.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Tr(i,n))}),e.has(it.keyField().canonicalString())||t.Ie.push(new Tr(it.keyField(),n))}return t.Ie}function Ot(r){const t=q(r);return t.Ee||(t.Ee=bf(t,ar(r))),t.Ee}function bf(r,t){if(r.limitType==="F")return Fi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tr(s.field,i)});const e=r.endAt?new Tn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Tn(r.startAt.position,r.startAt.inclusive):null;return Fi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Li(r,t){const e=r.filters.concat([t]);return new Vn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ui(r,t,e){return new Vn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Us(r,t){return Pr(Ot(r),Ot(t))&&r.limitType===t.limitType}function sl(r){return`${Be(Ot(r))}|lt:${r.limitType}`}function on(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>tl(s)).join(", ")}]`),Ds(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>In(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>In(s)).join(",")),`Target(${n})`}(Ot(r))}; limitType=${r.limitType})`}function Vr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of ar(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=hu(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,ar(n),s)||n.endAt&&!function(a,u,l){const d=hu(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,ar(n),s))}(r,t)}function Cf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function il(r){return(t,e)=>{let n=!1;for(const s of ar(r)){const i=xf(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function xf(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?me(l,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
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
 */class Yt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Bc(this.inner)}size(){return this.innerSize}}/**
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
 */const Df=new st(N.comparator);function Ct(){return Df}const ol=new st(N.comparator);function Jn(...r){let t=ol;for(const e of r)t=t.insert(e.key,e);return t}function al(r){let t=ol;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function jt(){return ur()}function ul(){return ur()}function ur(){return new Yt(r=>r.toString(),(r,t)=>r.isEqual(t))}const Nf=new st(N.comparator),kf=new tt(N.comparator);function G(...r){let t=kf;for(const e of r)t=t.add(e);return t}const Mf=new tt(B);function Of(){return Mf}/**
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
 */function co(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function cl(r){return{integerValue:""+r}}function Ff(r,t){return jd(t)?cl(t):co(r,t)}/**
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
 */class Bs{constructor(){this._=void 0}}function Lf(r,t,e){return r instanceof Er?function(s,i){const a={fields:{[zc]:{stringValue:jc},[Kc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&io(i)&&(i=Os(i)),i&&(a.fields[Gc]=i),{mapValue:a}}(e,t):r instanceof wn?hl(r,t):r instanceof An?dl(r,t):function(s,i){const a=ll(s,i),u=pu(a)+pu(s.Ae);return ki(a)&&ki(s.Ae)?cl(u):co(s.serializer,u)}(r,t)}function Uf(r,t,e){return r instanceof wn?hl(r,t):r instanceof An?dl(r,t):e}function ll(r,t){return r instanceof wr?function(n){return ki(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Er extends Bs{}class wn extends Bs{constructor(t){super(),this.elements=t}}function hl(r,t){const e=fl(t);for(const n of r.elements)e.some(s=>$t(s,n))||e.push(n);return{arrayValue:{values:e}}}class An extends Bs{constructor(t){super(),this.elements=t}}function dl(r,t){let e=fl(t);for(const n of r.elements)e=e.filter(s=>!$t(s,n));return{arrayValue:{values:e}}}class wr extends Bs{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function pu(r){return rt(r.integerValue||r.doubleValue)}function fl(r){return Ir(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Bf{constructor(t,e){this.field=t,this.transform=e}}function qf(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof An&&s instanceof An?fn(n.elements,s.elements,$t):n instanceof wr&&s instanceof wr?$t(n.Ae,s.Ae):n instanceof Er&&s instanceof Er}(r.transform,t.transform)}class jf{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function us(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class qs{}function ml(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new lo(r.key,xt.none()):new Sn(r.key,r.data,xt.none());{const e=r.data,n=Vt.empty();let s=new tt(it.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ye(r.key,n,new Mt(s.toArray()),xt.none())}}function zf(r,t,e){r instanceof Sn?function(s,i,a){const u=s.value.clone(),l=yu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ye?function(s,i,a){if(!us(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=yu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(gl(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function cr(r,t,e,n){return r instanceof Sn?function(i,a,u,l){if(!us(i.precondition,a))return u;const d=i.value.clone(),m=Iu(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ye?function(i,a,u,l){if(!us(i.precondition,a))return u;const d=Iu(i.fieldTransforms,l,a),m=a.data;return m.setAll(gl(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return us(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Gf(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=ll(n.transform,s||null);i!=null&&(e===null&&(e=Vt.empty()),e.set(n.field,i))}return e||null}function _u(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fn(n,s,(i,a)=>qf(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Sn extends qs{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ye extends qs{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function yu(r,t,e){const n=new Map;F(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Uf(a,u,e[s]))}return n}function Iu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Lf(i,a,t))}return n}class lo extends qs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pl extends qs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ho{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&zf(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=cr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=cr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ul();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=ml(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,(e,n)=>_u(e,n))&&fn(this.baseMutations,t.baseMutations,(e,n)=>_u(e,n))}}class fo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){F(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Nf}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new fo(t,e,n,s)}}/**
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
 */class mo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Kf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ut,W;function $f(r){switch(r){case V.OK:return O(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function _l(r){if(r===void 0)return vt("GRPC error has no .code"),V.UNKNOWN;switch(r){case ut.OK:return V.OK;case ut.CANCELLED:return V.CANCELLED;case ut.UNKNOWN:return V.UNKNOWN;case ut.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ut.INTERNAL:return V.INTERNAL;case ut.UNAVAILABLE:return V.UNAVAILABLE;case ut.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ut.NOT_FOUND:return V.NOT_FOUND;case ut.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ut.ABORTED:return V.ABORTED;case ut.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ut.DATA_LOSS:return V.DATA_LOSS;default:return O(39323,{code:r})}}(W=ut||(ut={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Qf(){return new TextEncoder}/**
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
 */const Wf=new ce([4294967295,4294967295],0);function Tu(r){const t=Qf().encode(r),e=new gc;return e.update(t),new Uint8Array(e.digest())}function Eu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ce([e,n],0),new ce([s,i],0)]}class go{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Zn(`Invalid padding: ${e}`);if(n<0)throw new Zn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ce.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(ce.fromNumber(n)));return s.compare(Wf)===1&&(s=new ce([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Tu(t),[n,s]=Eu(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new go(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=Tu(t),[n,s]=Eu(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class js{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Sr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new js(L.min(),s,new st(B),Ct(),G())}}class Sr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Sr(n,e,G(),G(),G())}}/**
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
 */class cs{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class yl{constructor(t,e){this.targetId=t,this.Ce=e}}class Il{constructor(t,e,n=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class wu{constructor(){this.ve=0,this.Fe=Au(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),n=G();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}}),new Sr(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Au()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,F(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Hf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ct(),this.Je=Xr(),this.He=Xr(),this.Ye=new st(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Is(i))if(n===0){const a=new N(i.path);this.et(e,a,at.newNoDocument(a,L.min()))}else F(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=Xt(n).toUint8Array()}catch(l){if(l instanceof qc)return Le("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new go(a,s,i)}catch(l){return Le(l instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const u=this.ot(a);if(u){if(i.current&&Is(u.target)){const l=new N(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,at.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let n=G();this.He.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new js(t,e,this.Ye,this.je,n);return this.je=Ct(),this.Je=Xr(),this.He=Xr(),this.Ye=new st(B),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new wu,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new tt(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new tt(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new wu),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Xr(){return new st(N.comparator)}function Au(){return new st(N.comparator)}const Xf={asc:"ASCENDING",desc:"DESCENDING"},Yf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jf={and:"AND",or:"OR"};class Zf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Bi(r,t){return r.useProto3Json||Ds(t)?t:{value:t}}function vn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function tm(r,t){return vn(r,t.toTimestamp())}function Rt(r){return F(!!r,49232),L.fromTimestamp(function(e){const n=Ht(e);return new J(n.seconds,n.nanos)}(r))}function po(r,t){return qi(r,t).canonicalString()}function qi(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function El(r){const t=H.fromString(r);return F(Cl(t),10190,{key:t.toString()}),t}function Es(r,t){return po(r.databaseId,t.path)}function Me(r,t){const e=El(t);if(e.get(1)!==r.databaseId.projectId)throw new C(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N(vl(e))}function wl(r,t){return po(r.databaseId,t)}function Al(r){const t=El(r);return t.length===4?H.emptyPath():vl(t)}function ji(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vl(r){return F(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vu(r,t,e){return{name:Es(r,t),fields:e.value.mapValue.fields}}function em(r,t,e){const n=Me(r,t.name),s=Rt(t.updateTime),i=t.createTime?Rt(t.createTime):L.min(),a=new Vt({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function nm(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(F(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(F(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?V.UNKNOWN:_l(d.code);return new C(m,d.message||"")}(a);e=new Il(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Me(r,n.document.name),i=Rt(n.document.updateTime),a=n.document.createTime?Rt(n.document.createTime):L.min(),u=new Vt({mapValue:{fields:n.document.fields}}),l=at.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new cs(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Me(r,n.document),i=n.readTime?Rt(n.readTime):L.min(),a=at.newNoDocument(s,i),u=n.removedTargetIds||[];e=new cs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Me(r,n.document),i=n.removedTargetIds||[];e=new cs([],i,s,null)}else{if(!("filter"in t))return O(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Kf(s,i),u=n.targetId;e=new yl(u,a)}}return e}function ws(r,t){let e;if(t instanceof Sn)e={update:vu(r,t.key,t.value)};else if(t instanceof lo)e={delete:Es(r,t.key)};else if(t instanceof ye)e={update:vu(r,t.key,t.data),updateMask:um(t.fieldMask)};else{if(!(t instanceof pl))return O(16599,{Vt:t.type});e={verify:Es(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof Er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(r,t.precondition)),e}function zi(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?xt.updateTime(Rt(i.updateTime)):i.exists!==void 0?xt.exists(i.exists):xt.none()}(t.currentDocument):xt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)F(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new Er;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new wn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new An(m)}else"increment"in u?l=new wr(a,u.increment):O(16584,{proto:u});const d=it.fromServerFormat(u.fieldPath);return new Bf(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Me(r,t.update.name),i=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Mt(d.map(m=>it.fromServerFormat(m)))}(t.updateMask);return new ye(s,i,a,e,n)}return new Sn(s,i,e,n)}if(t.delete){const s=Me(r,t.delete);return new lo(s,e)}if(t.verify){const s=Me(r,t.verify);return new pl(s,e)}return O(1463,{proto:t})}function rm(r,t){return r&&r.length>0?(F(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Rt(s.updateTime):Rt(i);return a.isEqual(L.min())&&(a=Rt(i)),new jf(a,s.transformResults||[])}(e,t))):[]}function Rl(r,t){return{documents:[wl(r,t.path)]}}function Pl(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=wl(r,s);const i=function(d){if(d.length!==0)return bl(Z.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(R){return{field:an(R.field),direction:im(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Bi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Vl(r){let t=Al(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){F(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(g){const R=Sl(g);return R instanceof Z&&uo(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(R=>function(M){return new Tr(un(M.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(R))}(e.orderBy));let u=null;e.limit&&(u=function(g){let R;return R=typeof g=="object"?g.value:g,Ds(R)?null:R}(e.limit));let l=null;e.startAt&&(l=function(g){const R=!!g.before,S=g.values||[];return new Tn(S,R)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const R=!g.before,S=g.values||[];return new Tn(S,R)}(e.endAt)),Sf(t,s,a,i,u,"F",l,d)}function sm(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=un(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=un(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=un(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=un(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return K.create(un(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>Sl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function im(r){return Xf[r]}function om(r){return Yf[r]}function am(r){return Jf[r]}function an(r){return{fieldPath:r.canonicalString()}}function un(r){return it.fromServerFormat(r.fieldPath)}function bl(r){return r instanceof K?function(e){if(e.op==="=="){if(uu(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NAN"}};if(au(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uu(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NAN"}};if(au(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(e.field),op:om(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>bl(s));return n.length===1?n[0]:{compositeFilter:{op:am(e.op),filters:n}}}(r):O(54877,{filter:r})}function um(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Cl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Wt{constructor(t,e,n,s,i=L.min(),a=L.min(),u=ht.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xl{constructor(t){this.yt=t}}function cm(r,t){let e;if(t.document)e=em(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=N.fromSegments(t.noDocument.path),s=je(t.noDocument.readTime);e=at.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=N.fromSegments(t.unknownDocument.path),s=je(t.unknownDocument.version);e=at.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new J(s[0],s[1]);return L.fromTimestamp(i)}(t.readTime)),e}function Ru(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:As(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Es(i,a.key),fields:a.data.value.mapValue.fields,updateTime:vn(i,a.version.toTimestamp()),createTime:vn(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:qe(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:qe(t.version)}}return n}function As(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function qe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function je(r){const t=new J(r.seconds,r.nanoseconds);return L.fromTimestamp(t)}function be(r,t){const e=(t.baseMutations||[]).map(i=>zi(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>zi(r.yt,i)),s=J.fromMillis(t.localWriteTimeMs);return new ho(t.batchId,s,e,n)}function tr(r){const t=je(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?je(r.lastLimboFreeSnapshotVersion):L.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return F(a===1,1966,{count:a}),Ot(Ls(Al(i.documents[0])))}(r.query):function(i){return Ot(Vl(i))}(r.query),new Wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ht.fromBase64String(r.resumeToken))}function Dl(r,t){const e=qe(t.snapshotVersion),n=qe(t.lastLimboFreeSnapshotVersion);let s;s=Is(t.target)?Rl(r.yt,t.target):Pl(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Be(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Nl(r){const t=Vl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ui(t,t.limit,"L"):t}function Ti(r,t){return new mo(t.largestBatchId,zi(r.yt,t.overlayMutation))}function Pu(r,t){const e=t.path.lastSegment();return[r,Et(t.path.popLast()),e]}function Vu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:qe(n.readTime),documentKey:Et(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class lm{getBundleMetadata(t,e){return Su(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:je(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Su(t).put(function(s){return{bundleId:s.id,createTime:qe(Rt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return bu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Nl(i.bundledQuery),readTime:je(i.readTime)}}(n)})}saveNamedQuery(t,e){return bu(t).put(function(s){return{name:s.name,readTime:qe(Rt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Su(r){return ft(r,Ns)}function bu(r){return ft(r,ks)}/**
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
 */class zs{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new zs(t,n)}getOverlay(t,e){return $n(t).get(Pu(this.userId,e)).next(n=>n?Ti(this.serializer,n):null)}getOverlays(t,e){const n=jt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new mo(e,a);s.push(this.St(t,u))}),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Et(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push($n(t).Z(xi,u))}),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=Et(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $n(t).J(xi,a).next(u=>{for(const l of u){const d=Ti(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return $n(t).ee({index:Mc,range:u},(l,d,m)=>{const g=Ti(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()}).next(()=>i)}St(t,e){return $n(t).put(function(s,i,a){const[u,l,d]=Pu(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ws(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function $n(r){return ft(r,Ms)}/**
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
 */class hm{bt(t){return ft(t,ro)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?ht.fromUint8Array(n):ht.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class Ce{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),dr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=Ht(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Xt(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Qc(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Fs(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):O(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,u;const n=t.fields||{};this.Ft(e,53);const s=yn,i=((u=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:u.length)||0;this.Ft(e,15),e.Mt(rt(i)),this.Ot(s,e),this.Ct(n[s],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),N.fromName(t).path.forEach(n=>{this.Ft(e,60),this.Ut(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Ce.Kt=new Ce;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=255;function dm(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Cu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=dm(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class fm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(t){const e=this.en(t),n=Cu(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=Cu(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(tn),this.sn(255)}_n(){this.an(tn),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===tn?(this.sn(tn),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===tn?(this.an(tn),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class mm{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class gm{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class Qn{constructor(){this.cn=new fm,this.ln=new mm(this.cn),this.hn=new gm(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class xe{constructor(t,e,n,s){this.Tn=t,this.In=e,this.En=n,this.dn=s}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new xe(this.Tn,this.In,this.En,n)}Rn(t,e,n){return{indexId:this.Tn,uid:t,arrayValue:ls(this.En),directionalValue:ls(this.dn),orderedDocumentKey:ls(e),documentKey:n.path.toArray()}}Vn(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function se(r,t){let e=r.Tn-t.Tn;return e!==0?e:(e=xu(r.En,t.En),e!==0?e:(e=xu(r.dn,t.dn),e!==0?e:N.comparator(r.In,t.In)))}function xu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function ls(r){return mc()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function Du(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Nu{constructor(t){this.mn=new tt((e,n)=>it.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const n=e;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(t){if(F(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=Si(t);if(e!==void 0&&!this.wn(e))return!1;const n=Pe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const u=this.mn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.Sn(u,l)||!this.bn(this.fn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],u))return!1}return!0}Dn(){if(this.pn)return null;let t=new tt(it.comparator);const e=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ns(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ns(n.field,0))}for(const n of this.fn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ns(n.field,n.dir==="asc"?0:1)));return new ms(ms.UNKNOWN_ID,this.collectionId,e,hr.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function kl(r){var e,n;if(F(r instanceof K||r instanceof Z,20012),r instanceof K){if(r instanceof nl){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>K.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const t=r.filters.map(s=>kl(s));return Z.create(t,r.op)}function pm(r){if(r.getFilters().length===0)return[];const t=$i(kl(r));return F(Ml(t),7391),Gi(t)||Ki(t)?[t]:t.getFilters()}function Gi(r){return r instanceof K}function Ki(r){return r instanceof Z&&uo(r)}function Ml(r){return Gi(r)||Ki(r)||function(e){if(e instanceof Z&&Mi(e)){for(const n of e.getFilters())if(!Gi(n)&&!Ki(n))return!1;return!0}return!1}(r)}function $i(r){if(F(r instanceof K||r instanceof Z,34018),r instanceof K)return r;if(r.filters.length===1)return $i(r.filters[0]);const t=r.filters.map(n=>$i(n));let e=Z.create(t,r.op);return e=vs(e),Ml(e)?e:(F(e instanceof Z,64498),F(En(e),40251),F(e.filters.length>1,57927),e.filters.reduce((n,s)=>_o(n,s)))}function _o(r,t){let e;return F(r instanceof K||r instanceof Z,38388),F(t instanceof K||t instanceof Z,25473),e=r instanceof K?t instanceof K?function(s,i){return Z.create([s,i],"and")}(r,t):ku(r,t):t instanceof K?ku(t,r):function(s,i){if(F(s.filters.length>0&&i.filters.length>0,48005),En(s)&&En(i))return Zc(s,i.getFilters());const a=Mi(s)?s:i,u=Mi(s)?i:s,l=a.filters.map(d=>_o(d,u));return Z.create(l,"or")}(r,t),vs(e)}function ku(r,t){if(En(t))return Zc(t,r.getFilters());{const e=t.filters.map(n=>_o(r,n));return Z.create(e,"or")}}function vs(r){if(F(r instanceof K||r instanceof Z,11850),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return vs(t[0]);if(Yc(r))return r;const e=t.map(s=>vs(s)),n=[];return e.forEach(s=>{s instanceof K?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class _m{constructor(){this.Cn=new yo}addToCollectionParentIndex(t,e){return this.Cn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Dt.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class yo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(H.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(H.comparator)).toArray()}}/**
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
 */const Mu="IndexedDbIndexManager",Yr=new Uint8Array(0);class ym{constructor(t,e){this.databaseId=e,this.vn=new yo,this.Fn=new Yt(n=>Be(n),(n,s)=>Pr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:n,parent:Et(s)};return Ou(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Ac(e),""],!1,!0);return Ou(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(qt(a.parent))}return n})}addFieldIndex(t,e){const n=Wn(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=nn(t);return i.next(u=>{a.put(Vu(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=Wn(t),s=nn(t),i=en(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Wn(t),n=en(t),s=nn(t);return e.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(t,e){return w.forEach(this.Mn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Nu(n).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=en(t);let s=!0;const i=new Map;return w.forEach(this.Mn(e),a=>this.xn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=G();const u=[];return w.forEach(i,(l,d)=>{b(Mu,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`}(l)} to execute ${Be(e)}`);const m=function(U,Y){const X=Si(Y);if(X===void 0)return null;for(const $ of Ts(U,X.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(d,l),g=function(U,Y){const X=new Map;for(const $ of Pe(Y))for(const I of Ts(U,$.fieldPath))switch(I.op){case"==":case"in":X.set($.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return X.set($.fieldPath.canonicalString(),I.value),Array.from(X.values())}return null}(d,l),R=function(U,Y){const X=[];let $=!0;for(const I of Pe(Y)){const p=I.kind===0?fu(U,I.fieldPath,U.startAt):mu(U,I.fieldPath,U.startAt);X.push(p.value),$&&($=p.inclusive)}return new Tn(X,$)}(d,l),S=function(U,Y){const X=[];let $=!0;for(const I of Pe(Y)){const p=I.kind===0?mu(U,I.fieldPath,U.endAt):fu(U,I.fieldPath,U.endAt);X.push(p.value),$&&($=p.inclusive)}return new Tn(X,$)}(d,l),M=this.On(l,d,R),k=this.On(l,d,S),D=this.Nn(l,d,g),Q=this.Bn(l.indexId,m,M,R.inclusive,k,S.inclusive,D);return w.forEach(Q,j=>n.Y(j,e.limit).next(U=>{U.forEach(Y=>{const X=N.fromSegments(Y.documentKey);a.has(X)||(a=a.add(X),u.push(X))})}))}).next(()=>u)}return w.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=pm(Z.create(t.filters,"and")).map(n=>Fi(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const R=e?this.Ln(e[g/d]):Yr,S=this.kn(t,R,n[g%d],s),M=this.qn(t,R,i[g%d],a),k=u.map(D=>this.kn(t,R,D,!0));m.push(...this.createRange(S,M,k))}return m}kn(t,e,n,s){const i=new xe(t,N.empty(),e,n);return s?i:i.An()}qn(t,e,n,s){const i=new xe(t,N.empty(),e,n);return s?i.An():i}xn(t,e){const n=new Nu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.yn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Mn(e);return w.forEach(s,i=>this.xn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new tt(it.comparator),m=!1;for(const g of l.filters)for(const R of g.getFlattenedFilters())R.field.isKeyField()||(R.op==="array-contains"||R.op==="array-contains-any"?m=!0:d=d.add(R.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Qn(t,e){const n=new Qn;for(const s of Pe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);Ce.Kt.Dt(i,a)}return n.un()}Ln(t){const e=new Qn;return Ce.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const n=new Qn;return Ce.Kt.Dt(yr(this.databaseId,e),n.Pn(function(i){const a=Pe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}Nn(t,e,n){if(n===null)return[];let s=[];s.push(new Qn);let i=0;for(const a of Pe(t)){const u=n[i++];for(const l of s)if(this.Un(e,a.fieldPath)&&Ir(u))s=this.Kn(s,a,u);else{const d=l.Pn(a.kind);Ce.Kt.Dt(u,d)}}return this.Wn(s)}On(t,e,n){return this.Nn(t,e,n.position)}Wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new Qn;l.seed(u.un()),Ce.Kt.Dt(a,l.Pn(e.kind)),i.push(l)}return i}Un(t,e){return!!t.filters.find(n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Wn(t),s=nn(t);return(e?n.J(Ci,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(m,g){const R=g?new hr(g.sequenceNumber,new Dt(je(g.readTime),new N(qt(g.documentKey)),g.largestBatchId)):hr.empty(),S=m.fields.map(([M,k])=>new ns(it.fromServerFormat(M),k));return new ms(m.indexId,m.collectionGroup,S,R)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:B(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=Wn(t),i=nn(t);return this.Gn(t).next(a=>s.J(Ci,IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,l=>i.put(Vu(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,l=>this.zn(t,s,l).next(d=>{const m=this.jn(i,l);return d.isEqual(m)?w.resolve():this.Jn(t,i,l,d,m)}))))})}Hn(t,e,n,s){return en(t).put(s.Rn(this.uid,this.$n(n,e.key),e.key))}Yn(t,e,n,s){return en(t).delete(s.Vn(this.uid,this.$n(n,e.key),e.key))}zn(t,e,n){const s=en(t);let i=new tt(se);return s.ee({index:kc,range:IDBKeyRange.only([n.indexId,this.uid,ls(this.$n(n,e))])},(a,u)=>{i=i.add(new xe(n.indexId,e,Du(u.arrayValue),Du(u.directionalValue)))}).next(()=>i)}jn(t,e){let n=new tt(se);const s=this.Qn(e,t);if(s==null)return n;const i=Si(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Ir(a))for(const u of a.arrayValue.values||[])n=n.add(new xe(e.indexId,t.key,this.Ln(u),s))}else n=n.add(new xe(e.indexId,t.key,Yr,s));return n}Jn(t,e,n,s,i){b(Mu,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,g,R){const S=l.getIterator(),M=d.getIterator();let k=Ze(S),D=Ze(M);for(;k||D;){let Q=!1,j=!1;if(k&&D){const U=m(k,D);U<0?j=!0:U>0&&(Q=!0)}else k!=null?j=!0:Q=!0;Q?(g(D),D=Ze(M)):j?(R(k),k=Ze(S)):(k=Ze(S),D=Ze(M))}}(s,i,se,u=>{a.push(this.Hn(t,e,n,u))},u=>{a.push(this.Yn(t,e,n,u))}),w.waitFor(a)}Gn(t){let e=1;return nn(t).ee({index:Nc,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>se(a,u)).filter((a,u,l)=>!u||se(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=se(a,t),l=se(a,e);if(u===0)s[0]=t.An();else if(u>0&&l<0)s.push(a),s.push(a.An());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const u=s[a].Vn(this.uid,Yr,N.empty()),l=s[a+1].Vn(this.uid,Yr,N.empty());i.push(IDBKeyRange.bound(u,l))}return i}Zn(t,e){return se(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Fu)}getMinOffset(t,e){return w.mapArray(this.Mn(e),n=>this.xn(t,n).next(s=>s||O(44426))).next(Fu)}}function Ou(r){return ft(r,gr)}function en(r){return ft(r,ir)}function Wn(r){return ft(r,no)}function nn(r){return ft(r,sr)}function Fu(r){F(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Zi(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Dt(t.readTime,t.documentKey,e)}/**
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
 */const Lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ol=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Fl(r,t,e){const n=r.store(Ft),s=r.store(mn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.ee({range:a},(m,g,R)=>(u++,R.delete()));i.push(l.next(()=>{F(u===1,47070,{batchId:e.batchId})}));const d=[];for(const m of e.mutations){const g=Cc(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next(()=>d)}function Rs(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Ol,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class Gs{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(t,e,n,s){F(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new Gs(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ie(t).ee({index:De,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=cn(t),a=ie(t);return a.add({}).next(u=>{F(typeof u=="number",49019);const l=new ho(u,e,n,s),d=function(S,M,k){const D=k.baseMutations.map(j=>ws(S.yt,j)),Q=k.mutations.map(j=>ws(S.yt,j));return{userId:M,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:Q}}(this.serializer,this.userId,l),m=[];let g=new tt((R,S)=>B(R.canonicalString(),S.canonicalString()));for(const R of s){const S=Cc(this.userId,R.key.path,u);g=g.add(R.key.path.popLast()),m.push(a.put(d)),m.push(i.put(S,Kd))}return g.forEach(R=>{m.push(this.indexManager.addToCollectionParentIndex(t,R))}),t.addOnCommittedListener(()=>{this.Xn[u]=l.keys()}),w.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return ie(t).get(e).next(n=>n?(F(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),be(this.serializer,n)):null)}er(t,e){return this.Xn[e]?w.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ie(t).ee({index:De,range:s},(a,u,l)=>{u.userId===this.userId&&(F(u.batchId>=n,47524,{tr:n}),i=be(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ne;return ie(t).ee({index:De,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ne],[this.userId,Number.POSITIVE_INFINITY]);return ie(t).J(De,e).next(n=>n.map(s=>be(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=rs(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return cn(t).ee({range:s},(a,u,l)=>{const[d,m,g]=a,R=qt(m);if(d===this.userId&&e.path.isEqual(R))return ie(t).get(g).next(S=>{if(!S)throw O(61480,{nr:a,batchId:g});F(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:g}),i.push(be(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(B);const s=[];return e.forEach(i=>{const a=rs(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=cn(t).ee({range:u},(d,m,g)=>{const[R,S,M]=d,k=qt(S);R===this.userId&&i.path.isEqual(k)?n=n.add(M):g.done()});s.push(l)}),w.waitFor(s).next(()=>this.rr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=rs(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(B);return cn(t).ee({range:a},(l,d,m)=>{const[g,R,S]=l,M=qt(R);g===this.userId&&n.isPrefixOf(M)?M.length===s&&(u=u.add(S)):m.done()}).next(()=>this.rr(t,u))}rr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(ie(t).get(i).next(a=>{if(a===null)throw O(35274,{batchId:i});F(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(be(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Fl(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return cn(t).ee({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=qt(i[1]);s.push(l)}else u.done()}).next(()=>{F(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return Ll(t,this.userId,e)}_r(t){return Ul(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ne,lastStreamToken:""})}}function Ll(r,t,e){const n=rs(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return cn(r).ee({range:i,X:!0},(u,l,d)=>{const[m,g,R]=u;m===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function ie(r){return ft(r,Ft)}function cn(r){return ft(r,mn)}function Ul(r){return ft(r,fr)}/**
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
 */class ze{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ze(0)}static cr(){return new ze(-1)}}/**
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
 */class Im{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const n=new ze(e.highestTargetId);return e.highestTargetId=n.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>L.fromTimestamp(new J(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.lr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.hr(t,s)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(n=>(n.targetCount+=1,this.Tr(e,n),this.hr(t,n))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>rn(t).delete(e.targetId)).next(()=>this.lr(t)).next(n=>(F(n.targetCount>0,8065),n.targetCount-=1,this.hr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return rn(t).ee((a,u)=>{const l=tr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(t,e){return rn(t).ee((n,s)=>{const i=tr(s);e(i)})}lr(t){return Uu(t).get(_s).next(e=>(F(e!==null,2888),e))}hr(t,e){return Uu(t).put(_s,e)}Pr(t,e){return rn(t).put(Dl(this.serializer,e))}Tr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Be(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return rn(t).ee({range:s,index:Dc},(a,u,l)=>{const d=tr(u);Pr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=ae(t);return e.forEach(a=>{const u=Et(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=ae(t);return w.forEach(e,i=>{const a=Et(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=ae(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ae(t);let i=G();return s.ee({range:n,X:!0},(a,u,l)=>{const d=qt(a[1]),m=new N(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=Et(e.path),s=IDBKeyRange.bound([n],[Ac(n)],!1,!0);let i=0;return ae(t).ee({index:eo,X:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return rn(t).get(e).next(n=>n?tr(n):null)}}function rn(r){return ft(r,gn)}function Uu(r){return ft(r,ke)}function ae(r){return ft(r,pn)}/**
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
 */const Bu="LruGarbageCollector",Tm=1048576;function qu([r,t],[e,n]){const s=B(r,e);return s===0?B(t,n):s}class Em{constructor(t){this.Ir=t,this.buffer=new tt(qu),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();qu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Bl{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){b(Bu,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_e(e)?b(Bu,"Ignoring IndexedDB error during garbage collection: ",e):await Ke(e)}await this.Vr(3e5)})}}class wm{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(kt.ce);const n=new Em(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Lu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lu):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),sn()<=Qt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function ql(r,t){return new wm(r,t)}/**
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
 */class Am{constructor(t,e){this.db=t,this.garbageCollector=ql(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return Jr(t,n)}removeReference(t,e,n){return Jr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Jr(t,e)}br(t,e){return function(s,i){let a=!1;return Ul(s).te(u=>Ll(s,u,i).next(l=>(l&&(a=!0),w.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,u)=>{if(u<=e){const l=this.br(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,L.min()),ae(t).delete(function(g){return[0,Et(g.path)]}(a))))});s.push(l)}}).next(()=>w.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Jr(t,e)}Sr(t,e){const n=ae(t);let s,i=kt.ce;return n.ee({index:eo},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==kt.ce&&e(new N(qt(s)),i),i=d,s=l):i=kt.ce}).next(()=>{i!==kt.ce&&e(new N(qt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Jr(r,t){return ae(r).put(function(n,s){return{targetId:0,path:Et(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class jl{constructor(){this.changes=new Yt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class vm{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Re(t).put(n)}removeEntry(t,e,n){return Re(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],As(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Dr(t,n)))}getEntry(t,e){let n=at.newInvalidDocument(e);return Re(t).ee({index:ss,range:IDBKeyRange.only(Hn(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}vr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return Re(t).ee({index:ss,range:IDBKeyRange.only(Hn(e))},(s,i)=>{n={document:this.Cr(e,i),size:Rs(i)}}).next(()=>n)}getEntries(t,e){let n=Ct();return this.Fr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Mr(t,e){let n=Ct(),s=new st(N.comparator);return this.Fr(t,e,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,Rs(a))}).next(()=>({documents:n,Or:s}))}Fr(t,e,n){if(e.isEmpty())return w.resolve();let s=new tt(Gu);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Hn(s.first()),Hn(s.last())),a=s.getIterator();let u=a.getNext();return Re(t).ee({index:ss,range:i},(l,d,m)=>{const g=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Gu(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.j(Hn(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),As(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Re(t).J(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Ct();for(const g of d){const R=this.Cr(N.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);R.isFoundDocument()&&(Vr(e,R)||s.has(R.key))&&(m=m.insert(R.key,R))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=Ct();const a=zu(e,n),u=zu(e,Dt.max());return Re(t).ee({index:xc,range:IDBKeyRange.bound(a,u,!0)},(l,d,m)=>{const g=this.Cr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new Rm(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return ju(t).get(bi).next(e=>(F(!!e,20021),e))}Dr(t,e){return ju(t).put(bi,e)}Cr(t,e){if(e){const n=cm(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(L.min())))return n}return at.newInvalidDocument(t)}}function zl(r){return new vm(r)}class Rm extends jl{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new Yt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>B(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Ru(this.Nr.serializer,a);s=s.add(i.path.popLast());const d=Rs(l);n+=d-u.size,e.push(this.Nr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Ru(this.Nr.serializer,a.convertToNoDocument(L.min()));e.push(this.Nr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(n=>(this.Br.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:n,Or:s})=>(s.forEach((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function ju(r){return ft(r,mr)}function Re(r){return ft(r,ps)}function Hn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function zu(r,t){const e=t.documentKey.path.toArray();return[r,As(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Gu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=B(e[i],n[i]),s)return s;return s=B(e.length,n.length),s||(s=B(e[e.length-2],n[n.length-2]),s||B(e[e.length-1],n[n.length-1]))}/**
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
 */class Pm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Gl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&cr(n.mutation,s,Mt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,G()).next(()=>n))}getLocalViewOfDocuments(t,e,n=G()){const s=jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=Jn();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,G()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Ct();const a=ur(),u=function(){return ur()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ye)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),cr(m.mutation,d,m.mutation.getFieldMask(),J.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>u.set(d,new Pm(m,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const n=ur();let s=new st((a,u)=>a-u),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Mt.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||G()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=ul();m.forEach(R=>{if(!i.has(R)){const S=ml(e.get(R),n.get(R));S!==null&&g.set(R,S),i=i.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):rl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(jt());let u=lr,l=i;return a.next(d=>w.forEach(d,(m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{l=l.insert(m,R)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,G())).next(m=>({batchId:u,changes:al(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let s=Jn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Jn();return this.indexManager.getCollectionParents(t,i).next(u=>w.forEach(u,l=>{const d=function(g,R){return new Vn(R,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((g,R)=>{a=a.insert(g,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))});let u=Jn();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&cr(m.mutation,d,Mt.empty(),J.now()),Vr(e,d)&&(u=u.insert(l,d))}),u})}}/**
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
 */class Vm{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return w.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:Nl(s.bundledQuery),readTime:Rt(s.readTime)}}(e)),w.resolve()}}/**
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
 */class Sm{constructor(){this.overlays=new st(N.comparator),this.qr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new N(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new st((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=jt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=jt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return w.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new mo(e,n));let i=this.qr.get(e);i===void 0&&(i=G(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
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
 */class bm{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
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
 */class Io{constructor(){this.Qr=new tt(gt.$r),this.Ur=new tt(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new N(new H([])),n=new gt(e,t),s=new gt(e,t+1),i=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new N(new H([])),n=new gt(e,t),s=new gt(e,t+1);let i=G();return this.Ur.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new gt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return N.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||N.comparator(t.key,e.key)}}/**
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
 */class Cm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new tt(gt.$r)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ho(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new gt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Ne:this.tr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],a=>{const u=this.Xr(a.Yr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(B);return e.forEach(s=>{const i=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],u=>{n=n.add(u.Yr)})}),w.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;N.isDocumentKey(i)||(i=i.child(""));const a=new gt(new N(i),0);let u=new tt(B);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Yr)),!0)},a),w.resolve(this.ti(u))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){F(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return w.forEach(e.mutations,s=>{const i=new gt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new gt(e,0),s=this.Zr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class xm{constructor(t){this.ri=t,this.docs=function(){return new st(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=Ct();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ct();const a=e.path,u=new N(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zi(Pc(m),n)<=0||(s.has(m.key)||Vr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}ii(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Dm(this)}getSize(t){return w.resolve(this.size)}}class Dm extends jl{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Nm{constructor(t){this.persistence=t,this.si=new Yt(e=>Be(e),Pr),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Io,this.targetCount=0,this.ai=ze.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),w.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new ze(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.Pr(e),w.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this._i.containsKey(e))}}/**
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
 */class To{constructor(t,e){this.ui={},this.overlays={},this.ci=new kt(0),this.li=!1,this.li=!0,this.hi=new bm,this.referenceDelegate=t(this),this.Pi=new Nm(this),this.indexManager=new _m,this.remoteDocumentCache=function(s){return new xm(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new xl(e),this.Ii=new Vm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new Cm(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new km(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return w.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class km extends Sc{constructor(t){super(),this.currentSequenceNumber=t}}class Ks{constructor(t){this.persistence=t,this.Ri=new Io,this.Vi=null}static mi(t){return new Ks(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),w.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.fi,n=>{const s=N.fromPath(n);return this.gi(t,s).next(i=>{i||e.removeEntry(s,L.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return w.or([()=>w.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Ps{constructor(t,e){this.persistence=t,this.pi=new Yt(n=>Et(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=ql(this,e)}static mi(t,e){return new Ps(t,e)}Ei(){}di(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return w.forEach(this.pi,(n,s)=>this.br(t,n,s).next(i=>i?w.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(u=>{u||(n++,i.removeEntry(a,L.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),w.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=os(t.data.value)),e}br(t,e,n){return w.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Mm{constructor(t){this.serializer=t}k(t,e,n,s){const i=new xs("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Rr)}(t),function(l){l.createObjectStore(fr,{keyPath:Gd}),l.createObjectStore(Ft,{keyPath:eu,autoIncrement:!0}).createIndex(De,nu,{unique:!0}),l.createObjectStore(mn)}(t),Ku(t),function(l){l.createObjectStore(Ve)}(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(pn),l.deleteObjectStore(gn),l.deleteObjectStore(ke)}(t),Ku(t)),a=a.next(()=>function(l){const d=l.store(ke),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return d.put(_s,m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Ft).J().next(g=>{l.deleteObjectStore(Ft),l.createObjectStore(Ft,{keyPath:eu,autoIncrement:!0}).createIndex(De,nu,{unique:!0});const R=d.store(Ft),S=g.map(M=>R.put(M));return w.waitFor(S)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(_n,{keyPath:Zd})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.yi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(mr)}(t),this.wi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.bi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Di(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(Ns,{keyPath:tf})})(t),function(l){l.createObjectStore(ks,{keyPath:ef})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(Ms,{keyPath:cf});d.createIndex(xi,lf,{unique:!1}),d.createIndex(Mc,hf,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(ps,{keyPath:$d});d.createIndex(ss,Qd),d.createIndex(xc,Wd)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(Ve))),n<14&&s>=14&&(a=a.next(()=>this.Fi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(no,{keyPath:nf,autoIncrement:!0}).createIndex(Ci,rf,{unique:!1}),l.createObjectStore(sr,{keyPath:sf}).createIndex(Nc,of,{unique:!1}),l.createObjectStore(ir,{keyPath:af}).createIndex(kc,uf,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(sr).clear()}).next(()=>{e.objectStore(ir).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(ro,{keyPath:df})})(t)})),n<18&&s>=18&&mc()&&(a=a.next(()=>{e.objectStore(sr).clear()}).next(()=>{e.objectStore(ir).clear()})),a}wi(t){let e=0;return t.store(Ve).ee((n,s)=>{e+=Rs(s)}).next(()=>{const n={byteSize:e};return t.store(mr).put(bi,n)})}yi(t){const e=t.store(fr),n=t.store(Ft);return e.J().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ne],[i.userId,i.lastAcknowledgedBatchId]);return n.J(De,a).next(u=>w.forEach(u,l=>{F(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=be(this.serializer,l);return Fl(t,i.userId,d).next(()=>{})}))}))}Si(t){const e=t.store(pn),n=t.store(Ve);return t.store(ke).get(_s).next(s=>{const i=[];return n.ee((a,u)=>{const l=new H(a),d=function(g){return[0,Et(g)]}(l);i.push(e.get(d).next(m=>m?w.resolve():(g=>e.put({targetId:0,path:Et(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(i))})}bi(t,e){t.createObjectStore(gr,{keyPath:Jd});const n=e.store(gr),s=new yo,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Et(l)})}};return e.store(Ve).ee({X:!0},(a,u)=>{const l=new H(a);return i(l.popLast())}).next(()=>e.store(mn).ee({X:!0},([a,u,l],d)=>{const m=qt(u);return i(m.popLast())}))}Di(t){const e=t.store(gn);return e.ee((n,s)=>{const i=tr(s),a=Dl(this.serializer,i);return e.put(a)})}Ci(t,e){const n=e.store(Ve),s=[];return n.ee((i,a)=>{const u=e.store(ps),l=function(g){return g.document?new N(H.fromString(g.document.name).popFirst(5)):g.noDocument?N.fromSegments(g.noDocument.path):g.unknownDocument?N.fromSegments(g.unknownDocument.path):O(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>w.waitFor(s))}Fi(t,e){const n=e.store(Ft),s=zl(this.serializer),i=new To(Ks.mi,this.serializer.yt);return n.J().next(a=>{const u=new Map;return a.forEach(l=>{let d=u.get(l.userId)??G();be(this.serializer,l).keys().forEach(m=>d=d.add(m)),u.set(l.userId,d)}),w.forEach(u,(l,d)=>{const m=new pt(d),g=zs.wt(this.serializer,m),R=i.getIndexManager(m),S=Gs.wt(m,this.serializer,R,i.referenceDelegate);return new Gl(s,S,g,R).recalculateAndSaveOverlaysForDocumentKeys(new Di(e,kt.ce),l).next()})})}}function Ku(r){r.createObjectStore(pn,{keyPath:Xd}).createIndex(eo,Yd,{unique:!0}),r.createObjectStore(gn,{keyPath:"targetId"}).createIndex(Dc,Hd,{unique:!0}),r.createObjectStore(ke)}const oe="IndexedDbPersistence",Ei=18e5,wi=5e3,Ai="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Om="main";class Eo{constructor(t,e,n,s,i,a,u,l,d,m,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Mi=i,this.window=a,this.document=u,this.xi=d,this.Oi=m,this.Ni=g,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=R=>Promise.resolve(),!Eo.v())throw new C(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Am(this,s),this.$i=e+Om,this.serializer=new xl(l),this.Ui=new le(this.$i,this.Ni,new Mm(this.serializer)),this.hi=new hm,this.Pi=new Im(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zl(this.serializer),this.Ii=new lm,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,m===!1&&vt(oe,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(V.FAILED_PRECONDITION,Ai);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new kt(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Zr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(_e(t))return b(oe,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b(oe,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return Xn(t).get(Je).next(e=>w.resolve(this.es(e)))}ts(t){return Zr(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Ei)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=ft(e,_n);return n.J().next(s=>{const i=this.ss(s,Ei),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?w.resolve(!0):Xn(t).get(Je).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,wi)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new C(V.FAILED_PRECONDITION,Ai);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zr(t).J().next(n=>this.ss(n,wi).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&b(oe,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Rr,_n],t=>{const e=new Di(t,kt.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(n=>this.rs(n.updateTimeMs,e)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Zr(t).J().next(e=>this.ss(e,Ei).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return Gs.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new ym(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return zs.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,n){b(oe,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?gf:l===17?Uc:l===16?mf:l===15?so:l===14?Lc:l===13?Fc:l===12?ff:l===11?Oc:void O(60245)}(this.Ni);let a;return this.Ui.runTransaction(t,s,i,u=>(a=new Di(u,this.ci?this.ci.next():kt.ce),e==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw vt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new C(V.FAILED_PRECONDITION,Vc);return n(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Is(t){return Xn(t).get(Je).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,wi)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new C(V.FAILED_PRECONDITION,Ai)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xn(t).put(Je,e)}static v(){return le.v()}Zi(t){const e=Xn(t);return e.get(Je).next(n=>this.es(n)?(b(oe,"Releasing primary lease."),e.delete(Je)):w.resolve())}rs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(vt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;fc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const n=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return b(oe,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return vt(oe,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){vt("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Xn(r){return ft(r,Rr)}function Zr(r){return ft(r,_n)}function Fm(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class wo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=G(),s=G();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wo(t,e.fromCache,n,s)}}/**
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
 */class Lm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Kl{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fc()?8:bc(fs())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Lm;return this.Ss(t,e,a).next(u=>{if(i.result=u,this.Vs)return this.bs(t,e,a,u.size)})}).next(()=>i.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(sn()<=Qt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",on(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),w.resolve()):(sn()<=Qt.DEBUG&&b("QueryEngine","Query:",on(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(sn()<=Qt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",on(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):w.resolve())}ys(t,e){if(gu(e))return w.resolve(null);let n=Ot(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ui(e,null,"F"),n=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=G(...i);return this.ps.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ds(e,u);return this.Cs(e,d,a,l.readTime)?this.ys(t,Ui(e,null,"F")):this.vs(t,d,e,l)}))})))}ws(t,e,n,s){return gu(e)||s.isEqual(L.min())?w.resolve(null):this.ps.getDocuments(t,n).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,n,s)?w.resolve(null):(sn()<=Qt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),on(e)),this.vs(t,a,e,Fd(s,lr)).next(u=>u))})}Ds(t,e){let n=new tt(il(t));return e.forEach((s,i)=>{Vr(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return sn()<=Qt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",on(e)),this.ps.getDocumentsMatchingQuery(t,e,Dt.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ao="LocalStore",Um=3e8;class Bm{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new st(B),this.xs=new Yt(i=>Be(i),Pr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gl(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function $l(r,t,e,n){return new Bm(r,t,e,n)}async function Ql(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=G();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function qm(r,t){const e=q(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(u,l,d,m){const g=d.batch,R=g.keys();let S=w.resolve();return R.forEach(M=>{S=S.next(()=>m.getEntry(l,M)).next(k=>{const D=d.docVersions.get(M);F(D!==null,48541),k.version.compareTo(D)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Wl(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function jm(r,t){const e=q(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach((m,g)=>{const R=s.get(g);if(!R)return;u.push(e.Pi.removeMatchingKeys(i,m.removedDocuments,g).next(()=>e.Pi.addMatchingKeys(i,m.addedDocuments,g)));let S=R.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(g,S),function(k,D,Q){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Um?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(R,S,m)&&u.push(e.Pi.updateTargetData(i,S))});let l=Ct(),d=G();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),u.push(zm(i,a,t.documentUpdates).next(m=>{l=m.ks,d=m.qs})),!n.isEqual(L.min())){const m=e.Pi.getLastRemoteSnapshotVersion(i).next(g=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(m)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ms=s,i))}function zm(r,t,e){let n=G(),s=G();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Ct();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(L.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):b(Ao,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{ks:a,qs:s}})}function Gm(r,t){const e=q(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ne),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Km(r,t){const e=q(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(i=>i?(s=i,w.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new Wt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Qi(r,t,e){const n=q(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_e(a))throw a;b(Ao,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function $u(r,t,e){const n=q(r);let s=L.min(),i=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const g=q(l),R=g.xs.get(m);return R!==void 0?w.resolve(g.Ms.get(R)):g.Pi.getTargetData(d,m)}(n,a,Ot(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?i:G())).next(u=>($m(n,Cf(t),u),{documents:u,Qs:i})))}function $m(r,t,e){let n=r.Os.get(t)||L.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(t,n)}class Qu{constructor(){this.activeTargetIds=Of()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hl{constructor(){this.Mo=new Qu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Qu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Qm{Oo(t){}shutdown(){}}/**
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
 */const Wu="ConnectivityMonitor";class Hu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){b(Wu,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){b(Wu,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ts=null;function Wi(){return ts===null?ts=function(){return 268435456+Math.round(2147483648*Math.random())}():ts++,"0x"+ts.toString(16)}/**
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
 */const vi="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Hm{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===ys?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const a=Wi(),u=this.zo(t,e.toUriEncodedString());b(vi,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(u),m=dc(d);return this.Jo(t,u,l,n,m).then(g=>(b(vi,`Received RPC '${t}' ${a}: `,g),g),g=>{throw Le(vi,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",n),g})}Ho(t,e,n,s,i,a){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const n=Wm[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Xm{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const It="WebChannelConnection";class Ym extends Hm{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Wi();return new Promise((u,l)=>{const d=new pc;d.setWithCredentials(!0),d.listenOnce(_c.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case es.NO_ERROR:const g=d.getResponseJson();b(It,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case es.TIMEOUT:b(It,`RPC '${t}' ${a} timed out`),l(new C(V.DEADLINE_EXCEEDED,"Request time out"));break;case es.HTTP_ERROR:const R=d.getStatus();if(b(It,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const M=S==null?void 0:S.error;if(M&&M.status&&M.message){const k=function(Q){const j=Q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(j)>=0?j:V.UNKNOWN}(M.status);l(new C(k,M.message))}else l(new C(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new C(V.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{b(It,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);b(It,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)})}T_(t,e,n){const s=Wi(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tc(),u=Ic(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");b(It,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);this.I_(g);let R=!1,S=!1;const M=new Xm({Yo:D=>{S?b(It,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(b(It,`Opening RPC '${t}' stream ${s} transport.`),g.open(),R=!0),b(It,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},Zo:()=>g.close()}),k=(D,Q,j)=>{D.listen(Q,U=>{try{j(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return k(g,Yn.EventType.OPEN,()=>{S||(b(It,`RPC '${t}' stream ${s} transport opened.`),M.o_())}),k(g,Yn.EventType.CLOSE,()=>{S||(S=!0,b(It,`RPC '${t}' stream ${s} transport closed`),M.a_(),this.E_(g))}),k(g,Yn.EventType.ERROR,D=>{S||(S=!0,Le(It,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),M.a_(new C(V.UNAVAILABLE,"The operation could not be completed")))}),k(g,Yn.EventType.MESSAGE,D=>{var Q;if(!S){const j=D.data[0];F(!!j,16349);const U=j,Y=(U==null?void 0:U.error)||((Q=U[0])==null?void 0:Q.error);if(Y){b(It,`RPC '${t}' stream ${s} received error:`,Y);const X=Y.status;let $=function(y){const E=ut[y];if(E!==void 0)return _l(E)}(X),I=Y.message;$===void 0&&($=V.INTERNAL,I="Unknown error status: "+X+" with message "+Y.message),S=!0,M.a_(new C($,I)),g.close()}else b(It,`RPC '${t}' stream ${s} received:`,j),M.u_(j)}}),k(u,yc.STAT_EVENT,D=>{D.stat===Pi.PROXY?b(It,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Pi.NOPROXY&&b(It,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{M.__()},0),M}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
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
 */function Jm(){return typeof window<"u"?window:null}function hs(){return typeof document<"u"?document:null}/**
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
 */function $s(r){return new Zf(r,!0)}/**
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
 */class Xl{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Xu="PersistentStream";class Yl{constructor(t,e,n,s,i,a,u,l){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(vt(e.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new C(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return b(Xu,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(b(Xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zm extends Yl{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=nm(this.serializer,t),n=function(i){if(!("targetChange"in i))return L.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Rt(a.readTime):L.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=ji(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Is(l)?{documents:Rl(i,l)}:{query:Pl(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Tl(i,a.resumeToken);const d=Bi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=vn(i,a.snapshotVersion.toTimestamp());const d=Bi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=sm(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=ji(this.serializer),e.removeTarget=t,this.q_(e)}}class tg extends Yl{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return F(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,F(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){F(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=rm(t.writeResults,t.commitTime),n=Rt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=ji(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ws(this.serializer,n))};this.q_(e)}}/**
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
 */class eg{}class ng extends eg{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new C(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,qi(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(V.UNKNOWN,i.toString())})}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(t,qi(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vt(e),this.aa=!1):b("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ge="RemoteStore";class sg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{Qe(this)&&(b(Ge,"Restarting streams for network reachability change."),await async function(l){const d=q(l);d.Ea.add(4),await br(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Qs(d)}(this))})}),this.Ra=new rg(n,s)}}async function Qs(r){if(Qe(r))for(const t of r.da)await t(!0)}async function br(r){for(const t of r.da)await t(!1)}function Jl(r,t){const e=q(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Vo(e)?Po(e):bn(e).O_()&&Ro(e,t))}function vo(r,t){const e=q(r),n=bn(e);e.Ia.delete(t),n.O_()&&Zl(e,t),e.Ia.size===0&&(n.O_()?n.L_():Qe(e)&&e.Ra.set("Unknown"))}function Ro(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}bn(r).Y_(t)}function Zl(r,t){r.Va.Ue(t),bn(r).Z_(t)}function Po(r){r.Va=new Hf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),bn(r).start(),r.Ra.ua()}function Vo(r){return Qe(r)&&!bn(r).x_()&&r.Ia.size>0}function Qe(r){return q(r).Ea.size===0}function th(r){r.Va=void 0}async function ig(r){r.Ra.set("Online")}async function og(r){r.Ia.forEach((t,e)=>{Ro(r,t)})}async function ag(r,t){th(r),Vo(r)?(r.Ra.ha(t),Po(r)):r.Ra.set("Unknown")}async function ug(r,t,e){if(r.Ra.set("Online"),t instanceof Il&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(r,t)}catch(n){b(Ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Vs(r,n)}else if(t instanceof cs?r.Va.Ze(t):t instanceof yl?r.Va.st(t):r.Va.tt(t),!e.isEqual(L.min()))try{const n=await Wl(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Va.Tt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const m=i.Ia.get(l);if(!m)return;i.Ia.set(l,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),Zl(i,l);const g=new Wt(m.target,l,d,m.sequenceNumber);Ro(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){b(Ge,"Failed to raise snapshot:",n),await Vs(r,n)}}async function Vs(r,t,e){if(!_e(t))throw t;r.Ea.add(1),await br(r),r.Ra.set("Offline"),e||(e=()=>Wl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b(Ge,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Qs(r)})}function eh(r,t){return t().catch(e=>Vs(r,e,t))}async function Cr(r){const t=q(r),e=ge(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ne;for(;cg(t);)try{const s=await Gm(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,lg(t,s)}catch(s){await Vs(t,s)}nh(t)&&rh(t)}function cg(r){return Qe(r)&&r.Ta.length<10}function lg(r,t){r.Ta.push(t);const e=ge(r);e.O_()&&e.X_&&e.ea(t.mutations)}function nh(r){return Qe(r)&&!ge(r).x_()&&r.Ta.length>0}function rh(r){ge(r).start()}async function hg(r){ge(r).ra()}async function dg(r){const t=ge(r);for(const e of r.Ta)t.ea(e.mutations)}async function fg(r,t,e){const n=r.Ta.shift(),s=fo.from(n,t,e);await eh(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Cr(r)}async function mg(r,t){t&&ge(r).X_&&await async function(n,s){if(function(a){return $f(a)&&a!==V.ABORTED}(s.code)){const i=n.Ta.shift();ge(n).B_(),await eh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cr(n)}}(r,t),nh(r)&&rh(r)}async function Yu(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),b(Ge,"RemoteStore received new credentials");const n=Qe(e);e.Ea.add(3),await br(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Qs(e)}async function gg(r,t){const e=q(r);t?(e.Ea.delete(2),await Qs(e)):t||(e.Ea.add(2),await br(e),e.Ra.set("Unknown"))}function bn(r){return r.ma||(r.ma=function(e,n,s){const i=q(e);return i.sa(),new Zm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:ig.bind(null,r),t_:og.bind(null,r),r_:ag.bind(null,r),H_:ug.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Vo(r)?Po(r):r.Ra.set("Unknown")):(await r.ma.stop(),th(r))})),r.ma}function ge(r){return r.fa||(r.fa=function(e,n,s){const i=q(e);return i.sa(),new tg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:hg.bind(null,r),r_:mg.bind(null,r),ta:dg.bind(null,r),na:fg.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Cr(r)):(await r.fa.stop(),r.Ta.length>0&&(b(Ge,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class So{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new So(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(r,t){if(vt("AsyncQueue",`${t}: ${r}`),_e(r))return new C(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ln{static emptySet(t){return new ln(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=Jn(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ln)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ln;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Ju{constructor(){this.ga=new st(N.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Rn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Rn(t,e,ln.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Us(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class pg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class _g{constructor(){this.queries=Zu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=q(e),i=s.queries;s.queries=Zu(),i.forEach((a,u)=>{for(const l of u.Sa)l.onError(n)})})(this,new C(V.ABORTED,"Firestore shutting down"))}}function Zu(){return new Yt(r=>sl(r),Us)}async function sh(r,t){const e=q(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new pg,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=bo(a,`Initialization of query '${on(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Co(e)}async function ih(r,t){const e=q(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function yg(r,t){const e=q(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(n=!0);a.wa=s}}n&&Co(e)}function Ig(r,t,e){const n=q(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Co(r){r.Ca.forEach(t=>{t.next()})}var Hi,tc;(tc=Hi||(Hi={})).Ma="default",tc.Cache="cache";class oh{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Rn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Hi.Cache}}/**
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
 */class ah{constructor(t){this.key=t}}class uh{constructor(t){this.key=t}}class Tg{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=il(t),this.tu=new ln(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Ju,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,g)=>{const R=s.get(m),S=Vr(this.query,g)?g:null,M=!!R&&this.mutatedKeys.has(R.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;R&&S?R.data.isEqual(S.data)?M!==k&&(n.track({type:3,doc:S}),D=!0):this.su(R,S)||(n.track({type:2,doc:S}),D=!0,(l&&this.eu(S,l)>0||d&&this.eu(S,d)<0)&&(u=!0)):!R&&S?(n.track({type:0,doc:S}),D=!0):R&&!S&&(n.track({type:1,doc:R}),D=!0,(l||d)&&(u=!0)),D&&(S?(a=a.add(S),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Cs:u,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,g)=>function(S,M){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:D})}};return k(S)-k(M)}(m.type,g.type)||this.eu(m.doc,g.doc)),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new Rn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ju,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=G(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new uh(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new ah(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Rn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xo="SyncEngine";class Eg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wg{constructor(t){this.key=t,this.hu=!1}}class Ag{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Yt(u=>sl(u),Us),this.Iu=new Map,this.Eu=new Set,this.du=new st(N.comparator),this.Au=new Map,this.Ru=new Io,this.Vu={},this.mu=new Map,this.fu=ze.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vg(r,t,e=!0){const n=mh(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ch(n,t,e,!0),s}async function Rg(r,t){const e=mh(r);await ch(e,t,!0,!1)}async function ch(r,t,e,n){const s=await Km(r.localStore,Ot(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Pg(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Jl(r.remoteStore,s),u}async function Pg(r,t,e,n,s){r.pu=(g,R,S)=>async function(k,D,Q,j){let U=D.view.ru(Q);U.Cs&&(U=await $u(k.localStore,D.query,!1).then(({documents:I})=>D.view.ru(I,U)));const Y=j&&j.targetChanges.get(D.targetId),X=j&&j.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(U,k.isPrimaryClient,Y,X);return nc(k,D.targetId,$.au),$.snapshot}(r,g,R,S);const i=await $u(r.localStore,t,!0),a=new Tg(t,i.Qs),u=a.ru(i.documents),l=Sr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);nc(r,e,d.au);const m=new Eg(t,e,a);return r.Tu.set(t,m),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function Vg(r,t,e){const n=q(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(a=>!Us(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&vo(n.remoteStore,s.targetId),Xi(n,s.targetId)}).catch(Ke)):(Xi(n,s.targetId),await Qi(n.localStore,s.targetId,!0))}async function Sg(r,t){const e=q(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),vo(e.remoteStore,n.targetId))}async function bg(r,t,e){const n=gh(r);try{const s=await function(a,u){const l=q(a),d=J.now(),m=u.reduce((S,M)=>S.add(M.key),G());let g,R;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let M=Ct(),k=G();return l.Ns.getEntries(S,m).next(D=>{M=D,M.forEach((Q,j)=>{j.isValidDocument()||(k=k.add(Q))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,M)).next(D=>{g=D;const Q=[];for(const j of u){const U=Gf(j,g.get(j.key).overlayedDocument);U!=null&&Q.push(new ye(j.key,U,Hc(U.value.mapValue),xt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,Q,u)}).next(D=>{R=D;const Q=D.applyToLocalDocumentSet(g,k);return l.documentOverlayCache.saveOverlays(S,D.batchId,Q)})}).then(()=>({batchId:R.batchId,changes:al(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new st(B)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await xr(n,s.changes),await Cr(n.remoteStore)}catch(s){const i=bo(s,"Failed to persist write");e.reject(i)}}async function lh(r,t){const e=q(r);try{const n=await jm(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?F(a.hu,14607):s.removedDocuments.size>0&&(F(a.hu,42227),a.hu=!1))}),await xr(e,n,t)}catch(n){await Ke(n)}}function ec(r,t,e){const n=q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=q(a);l.onlineState=u;let d=!1;l.queries.forEach((m,g)=>{for(const R of g.Sa)R.va(u)&&(d=!0)}),d&&Co(l)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Cg(r,t,e){const n=q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new st(N.comparator);a=a.insert(i,at.newNoDocument(i,L.min()));const u=G().add(i),l=new js(L.min(),new Map,new st(B),a,u);await lh(n,l),n.du=n.du.remove(i),n.Au.delete(t),Do(n)}else await Qi(n.localStore,t,!1).then(()=>Xi(n,t,e)).catch(Ke)}async function xg(r,t){const e=q(r),n=t.batch.batchId;try{const s=await qm(e.localStore,t);dh(e,n,null),hh(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await xr(e,s)}catch(s){await Ke(s)}}async function Dg(r,t,e){const n=q(r);try{const s=await function(a,u){const l=q(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(F(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);dh(n,t,e),hh(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await xr(n,s)}catch(s){await Ke(s)}}function hh(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function dh(r,t,e){const n=q(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function Xi(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||fh(r,n)})}function fh(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(vo(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Do(r))}function nc(r,t,e){for(const n of e)n instanceof ah?(r.Ru.addReference(n.key,t),Ng(r,n)):n instanceof uh?(b(xo,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||fh(r,n.key)):O(19791,{wu:n})}function Ng(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(b(xo,"New document in limbo: "+e),r.Eu.add(n),Do(r))}function Do(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new N(H.fromString(t)),n=r.fu.next();r.Au.set(n,new wg(e)),r.du=r.du.insert(e,n),Jl(r.remoteStore,new Wt(Ot(Ls(e.path)),n,"TargetPurposeLimboResolution",kt.ce))}}async function xr(r,t,e){const n=q(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((u,l)=>{a.push(n.pu(l,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=wo.As(l.targetId,d);i.push(g)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(l,d){const m=q(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(d,R=>w.forEach(R.Es,S=>m.persistence.referenceDelegate.addReference(g,R.targetId,S)).next(()=>w.forEach(R.ds,S=>m.persistence.referenceDelegate.removeReference(g,R.targetId,S)))))}catch(g){if(!_e(g))throw g;b(Ao,"Failed to update sequence numbers: "+g)}for(const g of d){const R=g.targetId;if(!g.fromCache){const S=m.Ms.get(R),M=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(M);m.Ms=m.Ms.insert(R,k)}}}(n.localStore,i))}async function kg(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){b(xo,"User change. New user:",t.toKey());const n=await Ql(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(u=>{u.forEach(l=>{l.reject(new C(V.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await xr(e,n.Ls)}}function Mg(r,t){const e=q(r),n=e.Au.get(t);if(n&&n.hu)return G().add(n.key);{let s=G();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function mh(r){const t=q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=lh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cg.bind(null,t),t.Pu.H_=yg.bind(null,t.eventManager),t.Pu.yu=Ig.bind(null,t.eventManager),t}function gh(r){const t=q(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dg.bind(null,t),t}class Ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$s(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return $l(this.persistence,new Kl,t.initialUser,this.serializer)}Cu(t){return new To(Ks.mi,this.serializer)}Du(t){return new Hl}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ar.provider={build:()=>new Ar};class Og extends Ar{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){F(this.persistence.referenceDelegate instanceof Ps,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Bl(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new To(n=>Ps.mi(n,e),this.serializer)}}class Fg extends Ar{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await gh(this.xu.syncEngine),await Cr(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return $l(this.persistence,new Kl,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Bl(n,t.asyncQueue,e)}Mu(t,e){const n=new qd(e,this.persistence);return new Bd(t.asyncQueue,n)}Cu(t){const e=Fm(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Eo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Jm(),hs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Hl}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ec(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=kg.bind(null,this.syncEngine),await gg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _g}()}createDatastore(t){const e=$s(t.databaseInfo.databaseId),n=function(i){return new Ym(i)}(t.databaseInfo);return function(i,a,u,l){return new ng(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new sg(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>ec(this.syncEngine,e,0),function(){return Hu.v()?new Hu:new Qm}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,m){const g=new Ag(s,i,a,u,l,d);return m&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=q(s);b(Ge,"RemoteStore shutting down."),i.Ea.add(5),await br(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ss.provider={build:()=>new Ss};/**
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
 */class ph{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const pe="FirestoreClient";class Lg{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Ji.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{b(pe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(b(pe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ri(r,t){r.asyncQueue.verifyOperationInProgress(),b(pe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ql(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function rc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ug(r);b(pe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Yu(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Yu(t.remoteStore,s)),r._onlineComponents=t}async function Ug(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(pe,"Using user provided OfflineComponentProvider");try{await Ri(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await Ri(r,new Ar)}}else b(pe,"Using default OfflineComponentProvider"),await Ri(r,new Og(void 0));return r._offlineComponents}async function _h(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(pe,"Using user provided OnlineComponentProvider"),await rc(r,r._uninitializedComponentsProvider._online)):(b(pe,"Using default OnlineComponentProvider"),await rc(r,new Ss))),r._onlineComponents}function Bg(r){return _h(r).then(t=>t.syncEngine)}async function yh(r){const t=await _h(r),e=t.eventManager;return e.onListen=vg.bind(null,t.syncEngine),e.onUnlisten=Vg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sg.bind(null,t.syncEngine),e}function qg(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new ph({next:R=>{m.Nu(),a.enqueueAndForget(()=>ih(i,g));const S=R.docs.has(u);!S&&R.fromCache?d.reject(new C(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&l&&l.source==="server"?d.reject(new C(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),g=new oh(Ls(u.path),m,{includeMetadataChanges:!0,qa:!0});return sh(i,g)}(await yh(r),r.asyncQueue,t,e,n)),n.promise}function jg(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new ph({next:R=>{m.Nu(),a.enqueueAndForget(()=>ih(i,g)),R.fromCache&&l.source==="server"?d.reject(new C(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),g=new oh(u,m,{includeMetadataChanges:!0,qa:!0});return sh(i,g)}(await yh(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Ih(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const sc=new Map;/**
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
 */const Th="firestore.googleapis.com",ic=!0;class oc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new C(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Th,this.ssl=ic}else this.host=t.host,this.ssl=t.ssl??ic;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ol;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Tm)throw new C(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Od("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ih(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new C(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new C(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new C(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ws{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Pd;switch(n.type){case"firstParty":return new Cd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sc.get(e);n&&(b("ComponentProvider","Removing Datastore"),sc.delete(e),n.terminate())}(this),Promise.resolve()}}function zg(r,t,e,n={}){var d;r=de(r,Ws);const s=dc(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&(Id(`https://${u}`),Td("Firestore",!0)),i.host!==Th&&i.host!==u&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:n};if(!Ed(l,a)&&(r._setSettings(l),n.mockUserToken)){let m,g;if(typeof n.mockUserToken=="string")m=n.mockUserToken,g=pt.MOCK_USER;else{m=wd(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new C(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new pt(R)}r._authCredentials=new Vd(new wc(m,g))}}/**
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
 */class We{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new We(this.firestore,t,this._query)}}class lt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new he(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(vr(e,lt._jsonSchema))return new lt(t,n||null,new N(H.fromString(e.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:ct("string",lt._jsonSchemaVersion),referencePath:ct("string")};class he extends We{constructor(t,e,n){super(t,e,Ls(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new N(t))}withConverter(t){return new he(this.firestore,t,this._path)}}function up(r,t,...e){if(r=dn(r),vc("collection","path",t),r instanceof Ws){const n=H.fromString(t,...e);return Xa(n),new he(r,null,n)}{if(!(r instanceof lt||r instanceof he))throw new C(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Xa(n),new he(r.firestore,null,n)}}function cp(r,t,...e){if(r=dn(r),arguments.length===1&&(t=Ji.newId()),vc("doc","path",t),r instanceof Ws){const n=H.fromString(t,...e);return Ha(n),new lt(r,null,new N(n))}{if(!(r instanceof lt||r instanceof he))throw new C(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Ha(n),new lt(r.firestore,r instanceof he?r.converter:null,new N(n))}}/**
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
 */const ac="AsyncQueue";class uc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xl(this,"async_queue_retry"),this._c=()=>{const n=hs();n&&b(ac,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new zt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!_e(t))throw t;b(ac,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,vt("INTERNAL UNHANDLED ERROR: ",cc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=So.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&O(47125,{Pc:cc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function cc(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Dr extends Ws{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new uc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new uc(t),this._firestoreClient=void 0,await t}}}function lp(r,t){const e=typeof r=="object"?r:pd(),n=typeof r=="string"?r:ys,s=_d(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=yd("firestore");i&&zg(s,...i)}return s}function No(r){if(r._terminated)throw new C(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Eh(r),r._firestoreClient}function Eh(r){var n,s,i;const t=r._freezeSettings(),e=function(u,l,d,m){return new _f(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ih(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Lg(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}function hp(r,t){Le("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return Gg(r,Ss.provider,{build:n=>new Fg(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function Gg(r,t,e){if((r=de(r,Dr))._firestoreClient||r._terminated)throw new C(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},Eh(r)}/**
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
 */class Nt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nt(ht.fromBase64String(t))}catch(e){throw new C(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(vr(t,Nt._jsonSchema))return Nt.fromBase64String(t.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:ct("string",Nt._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class ko{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class wh{constructor(t){this._methodName=t}}/**
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
 */class Gt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gt._jsonSchemaVersion}}static fromJSON(t){if(vr(t,Gt._jsonSchema))return new Gt(t.latitude,t.longitude)}}Gt._jsonSchemaVersion="firestore/geoPoint/1.0",Gt._jsonSchema={type:ct("string",Gt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class Kt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(vr(t,Kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Kt(t.vectorValues);throw new C(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:ct("string",Kt._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const Kg=/^__.*__$/;class $g{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sn(t,this.data,e,this.fieldTransforms)}}function Ah(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:r})}}class Mo{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Mo({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return bs(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ah(this.Ac)&&Kg.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Qg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$s(t)}Cc(t,e,n,s=!1){return new Mo({Ac:t,methodName:e,Dc:n,path:it.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vh(r){const t=r._freezeSettings(),e=$s(r._databaseId);return new Qg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Wg(r,t,e,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);Vh("Data must be an object, but it was:",a,n);const u=Rh(n,a);let l,d;if(i.merge)l=new Mt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const R=Xg(t,g,e);if(!a.contains(R))throw new C(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Jg(m,R)||m.push(R)}l=new Mt(m),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new $g(new Vt(u),l,d)}function Hg(r,t,e,n=!1){return Oo(e,r.Cc(n?4:3,t))}function Oo(r,t){if(Ph(r=dn(r)))return Vh("Unsupported field value:",t,r),Rh(r,t);if(r instanceof wh)return function(n,s){if(!Ah(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=Oo(u,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=dn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ff(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=J.fromDate(n);return{timestampValue:vn(s.serializer,i)}}if(n instanceof J){const i=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vn(s.serializer,i)}}if(n instanceof Gt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nt)return{bytesValue:Tl(s.serializer,n._byteString)};if(n instanceof lt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:po(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Kt)return function(a,u){return{mapValue:{fields:{[oo]:{stringValue:ao},[yn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return co(u.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${Cs(n)}`)}(r,t)}function Rh(r,t){const e={};return Bc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(r,(n,s)=>{const i=Oo(s,t.mc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Ph(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof J||r instanceof Gt||r instanceof Nt||r instanceof lt||r instanceof wh||r instanceof Kt)}function Vh(r,t,e){if(!Ph(e)||!Rc(e)){const n=Cs(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Xg(r,t,e){if((t=dn(t))instanceof ko)return t._internalPath;if(typeof t=="string")return Sh(r,t);throw bs("Field path arguments must be of type string or ",r,!1,void 0,e)}const Yg=new RegExp("[~\\*/\\[\\]]");function Sh(r,t,e){if(t.search(Yg)>=0)throw bs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ko(...t.split("."))._internalPath}catch{throw bs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function bs(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new C(V.INVALID_ARGUMENT,u+r+l)}function Jg(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class bh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zg extends bh{data(){return super.data()}}function Fo(r,t){return typeof t=="string"?Sh(r,t):t instanceof ko?t._internalPath:t._delegate._internalPath}/**
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
 */function tp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lo{}class Ch extends Lo{}function dp(r,t,...e){let n=[];t instanceof Lo&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof Bo).length,u=i.filter(l=>l instanceof Uo).length;if(a>1||a>0&&u>0)throw new C(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Uo extends Ch{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Uo(t,e,n)}_apply(t){const e=this._parse(t);return xh(t._query,e),new We(t.firestore,t.converter,Li(t._query,e))}_parse(t){const e=vh(t.firestore);return function(i,a,u,l,d,m,g){let R;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new C(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){hc(g,m);const M=[];for(const k of g)M.push(lc(l,i,k));R={arrayValue:{values:M}}}else R=lc(l,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||hc(g,m),R=Hg(u,a,g,m==="in"||m==="not-in");return K.create(d,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Bo extends Lo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Bo(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)xh(a,l),a=Li(a,l)}(t._query,e),new We(t.firestore,t.converter,Li(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qo extends Ch{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qo(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new C(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tr(i,a)}(t._query,this._field,this._direction);return new We(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Vn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function fp(r,t="asc"){const e=t,n=Fo("orderBy",r);return qo._create(n,e)}function lc(r,t,e){if(typeof(e=dn(e))=="string"){if(e==="")throw new C(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rl(t)&&e.indexOf("/")!==-1)throw new C(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!N.isDocumentKey(n))throw new C(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yr(r,new N(n))}if(e instanceof lt)return yr(r,e._key);throw new C(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cs(e)}.`)}function hc(r,t){if(!Array.isArray(r)||r.length===0)throw new C(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xh(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new C(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ep{convertValue(t,e="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return $e(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[yn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>rt(a.doubleValue));return new Kt(e)}convertGeoPoint(t){return new Gt(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Os(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pr(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);F(Cl(n),9688,{name:t});const s=new Ue(n.get(1),n.get(3)),i=new N(n.popFirst(5));return s.isEqual(e)||vt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function np(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Oe extends bh{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Oe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Oe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oe._jsonSchema={type:ct("string",Oe._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class ds extends Oe{data(t={}){return super.data(t)}}class hn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new er(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ds(this._firestore,this._userDataWriter,n.key,n,new er(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new ds(s._firestore,s._userDataWriter,u.doc.key,u.doc,new er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new ds(s._firestore,s._userDataWriter,u.doc.key,u.doc,new er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:rp(u.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=hn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ji.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function rp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
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
 */function mp(r){r=de(r,lt);const t=de(r.firestore,Dr);return qg(No(t),r._key).then(e=>ip(t,r,e))}hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:ct("string",hn._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class Dh extends ep{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,e)}}function gp(r){r=de(r,We);const t=de(r.firestore,Dr),e=No(t),n=new Dh(t);return tp(r._query),jg(e,r._query).then(s=>new hn(t,n,r,s))}function pp(r,t,e){r=de(r,lt);const n=de(r.firestore,Dr),s=np(r.converter,t);return sp(n,[Wg(vh(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,xt.none())])}function sp(r,t){return function(n,s){const i=new zt;return n.asyncQueue.enqueueAndForget(async()=>bg(await Bg(n),s,i)),i.promise}(No(r),t)}function ip(r,t,e){const n=e.docs.get(t._key),s=new Dh(r);return new Oe(r,s,t._key,n,new er(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Pn=s})(Ad),dd(new fd("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Dr(new Sd(n.getProvider("auth-internal")),new xd(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new C(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(d.options.projectId,m)}(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),za(Ka,$a,t),za(Ka,$a,"esm2020")})();export{gp as a,mp as b,up as c,cp as d,hp as e,lp as g,fp as o,dp as q,pp as s};
