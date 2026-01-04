(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function BS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dv={exports:{}},dc={},bv={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),zS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),KS=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),GS=Symbol.for("react.forward_ref"),QS=Symbol.for("react.suspense"),YS=Symbol.for("react.memo"),XS=Symbol.for("react.lazy"),Ag=Symbol.iterator;function JS(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Lv={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Vv}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=Bs.prototype;function Df(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Vv}var bf=Df.prototype=new Mv;bf.constructor=Df;Ov(bf,Bs.prototype);bf.isPureReactComponent=!0;var Pg=Array.isArray,Fv=Object.prototype.hasOwnProperty,Vf={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:Vf.current}}function ZS(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function e1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function _h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e1(""+t.key):e.toString(36)}function $l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case zS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_h(o,0):r,Pg(i)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),$l(i,e,n,"",function(c){return c})):i!=null&&(Of(i)&&(i=ZS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+_h(s,l);o+=$l(s,e,n,u,i)}else if(u=JS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+_h(s,l++),o+=$l(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var r=[],i=0;return $l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function t1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},ql={transition:null},n1={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Vf};function Bv(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Bs;ne.Fragment=$S;ne.Profiler=KS;ne.PureComponent=Df;ne.StrictMode=qS;ne.Suspense=QS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;ne.act=Bv;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!Uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WS,_context:t},t.Consumer=t};ne.createElement=jv;ne.createFactory=function(t){var e=jv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:GS,render:t}};ne.isValidElement=Of;ne.lazy=function(t){return{$$typeof:XS,_payload:{_status:-1,_result:t},_init:t1}};ne.memo=function(t,e){return{$$typeof:YS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};ne.unstable_act=Bv;ne.useCallback=function(t,e){return dt.current.useCallback(t,e)};ne.useContext=function(t){return dt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return dt.current.useEffect(t,e)};ne.useId=function(){return dt.current.useId()};ne.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return dt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ne.useRef=function(t){return dt.current.useRef(t)};ne.useState=function(t){return dt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return dt.current.useTransition()};ne.version="18.3.1";bv.exports=ne;var de=bv.exports;const r1=BS(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=de,s1=Symbol.for("react.element"),o1=Symbol.for("react.fragment"),a1=Object.prototype.hasOwnProperty,l1=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u1={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)a1.call(e,r)&&!u1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:s1,type:t,key:s,ref:o,props:i,_owner:l1.current}}dc.Fragment=o1;dc.jsx=zv;dc.jsxs=zv;Dv.exports=dc;var R=Dv.exports,id={},$v={exports:{}},kt={},qv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Y){var Z=q.length;q.push(Y);e:for(;0<Z;){var _e=Z-1>>>1,ke=q[_e];if(0<i(ke,Y))q[_e]=Y,q[Z]=ke,Z=_e;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],Z=q.pop();if(Z!==Y){q[0]=Z;e:for(var _e=0,ke=q.length,Mr=ke>>>1;_e<Mr;){var Nt=2*(_e+1)-1,Fr=q[Nt],$t=Nt+1,Fn=q[$t];if(0>i(Fr,Z))$t<ke&&0>i(Fn,Fr)?(q[_e]=Fn,q[$t]=Z,_e=$t):(q[_e]=Fr,q[Nt]=Z,_e=Nt);else if($t<ke&&0>i(Fn,Z))q[_e]=Fn,q[$t]=Z,_e=$t;else break e}}return Y}function i(q,Y){var Z=q.sortIndex-Y.sortIndex;return Z!==0?Z:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,k=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(q){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=q)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(q){if(D=!1,T(q),!k)if(n(u)!==null)k=!0,Xs(M);else{var Y=n(c);Y!==null&&Js(V,Y.startTime-q)}}function M(q,Y){k=!1,D&&(D=!1,A(y),y=-1),w=!0;var Z=m;try{for(T(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||q&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ke=_e(p.expirationTime<=Y);Y=t.unstable_now(),typeof ke=="function"?p.callback=ke:p===n(u)&&r(u),T(Y)}else r(u);p=n(u)}if(p!==null)var Mr=!0;else{var Nt=n(c);Nt!==null&&Js(V,Nt.startTime-Y),Mr=!1}return Mr}finally{p=null,m=Z,w=!1}}var F=!1,_=null,y=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function x(){if(_!==null){var q=t.unstable_now();S=q;var Y=!0;try{Y=_(!0,q)}finally{Y?I():(F=!1,_=null)}}else F=!1}var I;if(typeof v=="function")I=function(){v(x)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,yn=Ke.port2;Ke.port1.onmessage=x,I=function(){yn.postMessage(null)}}else I=function(){L(x,0)};function Xs(q){_=q,F||(F=!0,I())}function Js(q,Y){y=L(function(){q(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,Xs(M))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return q()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=m;m=q;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(q,Y,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,q){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Z+ke,q={id:d++,callback:Y,priorityLevel:q,startTime:Z,expirationTime:ke,sortIndex:-1},Z>_e?(q.sortIndex=Z,e(c,q),n(u)===null&&q===n(c)&&(D?(A(y),y=-1):D=!0,Js(V,Z-_e))):(q.sortIndex=ke,e(u,q),k||w||(k=!0,Xs(M))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var Y=m;return function(){var Z=m;m=Y;try{return q.apply(this,arguments)}finally{m=Z}}}})(Kv);qv.exports=Kv;var c1=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=de,Rt=c1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wv=new Set,sa={};function Ri(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(sa[t]=e,t=0;t<e.length;t++)Wv.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,d1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},kg={};function f1(t){return sd.call(kg,t)?!0:sd.call(Cg,t)?!1:d1.test(t)?kg[t]=!0:(Cg[t]=!0,!1)}function p1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m1(t,e,n,r){if(e===null||typeof e>"u"||p1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Ye[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Ye[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Mf);Ye[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m1(e,n,i,r)&&(n=null),r||i===null?f1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Qv=Symbol.for("react.offscreen"),xg=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,vh;function ko(t){if(vh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vh=e&&e[1]||""}return`
`+vh+t}var wh=!1;function Eh(t,e){if(!t||wh)return"";wh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function g1(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Eh(t.type,!1),t;case 11:return t=Eh(t.type.render,!1),t;case 1:return t=Eh(t.type,!0),t;default:return""}}function ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case od:return"Profiler";case Uf:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gv:return(t.displayName||"Context")+".Consumer";case Hv:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:ud(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return ud(t(e))}catch{}}return null}function y1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ud(e);case 8:return e===Uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _1(t){var e=Yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=_1(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jv(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function hd(t,e){Jv(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(xo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Zv(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ew(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ew(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,tw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v1=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){v1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var w1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(w1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,us=null,cs=null;function Og(t){if(t=za(t)){if(typeof _d!="function")throw Error(j(280));var e=t.stateNode;e&&(e=yc(e),_d(t.stateNode,t.type,e))}}function iw(t){us?cs?cs.push(t):cs=[t]:us=t}function sw(){if(us){var t=us,e=cs;if(cs=us=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function ow(t,e){return t(e)}function aw(){}var Ih=!1;function lw(t,e,n){if(Ih)return t(e,n);Ih=!0;try{return ow(t,e,n)}finally{Ih=!1,(us!==null||cs!==null)&&(aw(),sw())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var vd=!1;if(Rn)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){vd=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{vd=!1}function E1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Bo=!1,_u=null,vu=!1,wd=null,I1={onError:function(t){Bo=!0,_u=t}};function T1(t,e,n,r,i,s,o,l,u){Bo=!1,_u=null,E1.apply(I1,arguments)}function S1(t,e,n,r,i,s,o,l,u){if(T1.apply(this,arguments),Bo){if(Bo){var c=_u;Bo=!1,_u=null}else throw Error(j(198));vu||(vu=!0,wd=c)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lg(t){if(Ci(t)!==t)throw Error(j(188))}function A1(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lg(i),t;if(s===r)return Lg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function cw(t){return t=A1(t),t!==null?hw(t):null}function hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hw(t);if(e!==null)return e;t=t.sibling}return null}var dw=Rt.unstable_scheduleCallback,Mg=Rt.unstable_cancelCallback,P1=Rt.unstable_shouldYield,R1=Rt.unstable_requestPaint,xe=Rt.unstable_now,C1=Rt.unstable_getCurrentPriorityLevel,$f=Rt.unstable_ImmediatePriority,fw=Rt.unstable_UserBlockingPriority,wu=Rt.unstable_NormalPriority,k1=Rt.unstable_LowPriority,pw=Rt.unstable_IdlePriority,fc=null,un=null;function x1(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:b1,N1=Math.log,D1=Math.LN2;function b1(t){return t>>>=0,t===0?32:31-(N1(t)/D1|0)|0}var El=64,Il=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=No(l):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function V1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=V1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mw(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function L1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yw,Kf,_w,vw,ww,Id=!1,Tl=[],lr=null,ur=null,cr=null,la=new Map,ua=new Map,Jn=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fg(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=za(e),e!==null&&Kf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function F1(t,e,n,r,i){switch(e){case"focusin":return lr=_o(lr,t,e,n,r,i),!0;case"dragenter":return ur=_o(ur,t,e,n,r,i),!0;case"mouseover":return cr=_o(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,_o(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,_o(ua.get(s)||null,t,e,n,r,i)),!0}return!1}function Ew(t){var e=ei(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=uw(n),e!==null){t.blockedOn=e,ww(t.priority,function(){_w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yd=r,n.target.dispatchEvent(r),yd=null}else return e=za(n),e!==null&&Kf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ug(t,e,n){Kl(t)&&n.delete(e)}function U1(){Id=!1,lr!==null&&Kl(lr)&&(lr=null),ur!==null&&Kl(ur)&&(ur=null),cr!==null&&Kl(cr)&&(cr=null),la.forEach(Ug),ua.forEach(Ug)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,U1)))}function ca(t){function e(i){return vo(i,t)}if(0<Tl.length){vo(Tl[0],t);for(var n=1;n<Tl.length;n++){var r=Tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&vo(lr,t),ur!==null&&vo(ur,t),cr!==null&&vo(cr,t),la.forEach(e),ua.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Ew(n),n.blockedOn===null&&Jn.shift()}var hs=On.ReactCurrentBatchConfig,Iu=!0;function j1(t,e,n,r){var i=ce,s=hs.transition;hs.transition=null;try{ce=1,Wf(t,e,n,r)}finally{ce=i,hs.transition=s}}function B1(t,e,n,r){var i=ce,s=hs.transition;hs.transition=null;try{ce=4,Wf(t,e,n,r)}finally{ce=i,hs.transition=s}}function Wf(t,e,n,r){if(Iu){var i=Td(t,e,n,r);if(i===null)bh(t,e,r,Tu,n),Fg(t,r);else if(F1(i,t,e,n,r))r.stopPropagation();else if(Fg(t,r),e&4&&-1<M1.indexOf(t)){for(;i!==null;){var s=za(i);if(s!==null&&yw(s),s=Td(t,e,n,r),s===null&&bh(t,e,r,Tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bh(t,e,r,null,n)}}var Tu=null;function Td(t,e,n,r){if(Tu=null,t=zf(r),t=ei(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function Iw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C1()){case $f:return 1;case fw:return 4;case wu:case k1:return 16;case pw:return 536870912;default:return 16}default:return 16}}var sr=null,Hf=null,Wl=null;function Tw(){if(Wl)return Wl;var t,e=Hf,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wl=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function jg(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sl:jg,this.isPropagationStopped=jg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=xt(zs),Ba=Ae({},zs,{view:0,detail:0}),z1=xt(Ba),Sh,Ah,wo,pc=Ae({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Sh=t.screenX-wo.screenX,Ah=t.screenY-wo.screenY):Ah=Sh=0,wo=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:Ah}}),Bg=xt(pc),$1=Ae({},pc,{dataTransfer:0}),q1=xt($1),K1=Ae({},Ba,{relatedTarget:0}),Ph=xt(K1),W1=Ae({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),H1=xt(W1),G1=Ae({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q1=xt(G1),Y1=Ae({},zs,{data:0}),zg=xt(Y1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z1[t])?!!e[t]:!1}function Qf(){return eA}var tA=Ae({},Ba,{key:function(t){if(t.key){var e=X1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nA=xt(tA),rA=Ae({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=xt(rA),iA=Ae({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),sA=xt(iA),oA=Ae({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),aA=xt(oA),lA=Ae({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uA=xt(lA),cA=[9,13,27,32],Yf=Rn&&"CompositionEvent"in window,zo=null;Rn&&"documentMode"in document&&(zo=document.documentMode);var hA=Rn&&"TextEvent"in window&&!zo,Sw=Rn&&(!Yf||zo&&8<zo&&11>=zo),qg=" ",Kg=!1;function Aw(t,e){switch(t){case"keyup":return cA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function dA(t,e){switch(t){case"compositionend":return Pw(e);case"keypress":return e.which!==32?null:(Kg=!0,qg);case"textInput":return t=e.data,t===qg&&Kg?null:t;default:return null}}function fA(t,e){if(Xi)return t==="compositionend"||!Yf&&Aw(t,e)?(t=Tw(),Wl=Hf=sr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sw&&e.locale!=="ko"?null:e.data;default:return null}}var pA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pA[t.type]:e==="textarea"}function Rw(t,e,n,r){iw(r),e=Su(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $o=null,ha=null;function mA(t){Fw(t,0)}function mc(t){var e=es(t);if(Xv(e))return t}function gA(t,e){if(t==="change")return e}var Cw=!1;if(Rn){var Rh;if(Rn){var Ch="oninput"in document;if(!Ch){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),Ch=typeof Hg.oninput=="function"}Rh=Ch}else Rh=!1;Cw=Rh&&(!document.documentMode||9<document.documentMode)}function Gg(){$o&&($o.detachEvent("onpropertychange",kw),ha=$o=null)}function kw(t){if(t.propertyName==="value"&&mc(ha)){var e=[];Rw(e,ha,t,zf(t)),lw(mA,e)}}function yA(t,e,n){t==="focusin"?(Gg(),$o=e,ha=n,$o.attachEvent("onpropertychange",kw)):t==="focusout"&&Gg()}function _A(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(ha)}function vA(t,e){if(t==="click")return mc(e)}function wA(t,e){if(t==="input"||t==="change")return mc(e)}function EA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:EA;function da(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sd.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function Qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yg(t,e){var n=Qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qg(n)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nw(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IA(t){var e=Nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xw(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yg(n,s);var o=Yg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TA=Rn&&"documentMode"in document&&11>=document.documentMode,Ji=null,Sd=null,qo=null,Ad=!1;function Xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ji==null||Ji!==yu(r)||(r=Ji,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qo&&da(qo,r)||(qo=r,r=Su(Sd,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},kh={},Dw={};Rn&&(Dw=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function gc(t){if(kh[t])return kh[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dw)return kh[t]=e[n];return t}var bw=gc("animationend"),Vw=gc("animationiteration"),Ow=gc("animationstart"),Lw=gc("transitionend"),Mw=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Mw.set(t,e),Ri(e,[t])}for(var xh=0;xh<Jg.length;xh++){var Nh=Jg[xh],SA=Nh.toLowerCase(),AA=Nh[0].toUpperCase()+Nh.slice(1);xr(SA,"on"+AA)}xr(bw,"onAnimationEnd");xr(Vw,"onAnimationIteration");xr(Ow,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Lw,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Zg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,S1(r,e,void 0,t),t.currentTarget=null}function Fw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zg(i,l,c),s=u}}}if(vu)throw t=wd,vu=!1,wd=null,t}function ge(t,e){var n=e[xd];n===void 0&&(n=e[xd]=new Set);var r=t+"__bubble";n.has(r)||(Uw(e,t,2,!1),n.add(r))}function Dh(t,e,n){var r=0;e&&(r|=4),Uw(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Pl]){t[Pl]=!0,Wv.forEach(function(n){n!=="selectionchange"&&(PA.has(n)||Dh(n,!1,t),Dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Dh("selectionchange",!1,e))}}function Uw(t,e,n,r){switch(Iw(e)){case 1:var i=j1;break;case 4:i=B1;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lw(function(){var c=s,d=zf(n),p=[];e:{var m=Mw.get(t);if(m!==void 0){var w=Gf,k=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":w=nA;break;case"focusin":k="focus",w=Ph;break;case"focusout":k="blur",w=Ph;break;case"beforeblur":case"afterblur":w=Ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sA;break;case bw:case Vw:case Ow:w=H1;break;case Lw:w=aA;break;case"scroll":w=z1;break;case"wheel":w=uA;break;case"copy":case"cut":case"paste":w=Q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=$g}var D=(e&4)!==0,L=!D&&t==="scroll",A=D?m!==null?m+"Capture":null:m;D=[];for(var v=c,T;v!==null;){T=v;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,A!==null&&(V=aa(v,A),V!=null&&D.push(pa(v,V,T)))),L)break;v=v.return}0<D.length&&(m=new w(m,k,null,n,d),p.push({event:m,listeners:D}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==yd&&(k=n.relatedTarget||n.fromElement)&&(ei(k)||k[Cn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?ei(k):null,k!==null&&(L=Ci(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(D=Bg,V="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=$g,V="onPointerLeave",A="onPointerEnter",v="pointer"),L=w==null?m:es(w),T=k==null?m:es(k),m=new D(V,v+"leave",w,n,d),m.target=L,m.relatedTarget=T,V=null,ei(d)===c&&(D=new D(A,v+"enter",k,n,d),D.target=T,D.relatedTarget=L,V=D),L=V,w&&k)t:{for(D=w,A=k,v=0,T=D;T;T=Mi(T))v++;for(T=0,V=A;V;V=Mi(V))T++;for(;0<v-T;)D=Mi(D),v--;for(;0<T-v;)A=Mi(A),T--;for(;v--;){if(D===A||A!==null&&D===A.alternate)break t;D=Mi(D),A=Mi(A)}D=null}else D=null;w!==null&&ey(p,m,w,D,!1),k!==null&&L!==null&&ey(p,L,k,D,!0)}}e:{if(m=c?es(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var M=gA;else if(Wg(m))if(Cw)M=wA;else{M=_A;var F=yA}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=vA);if(M&&(M=M(t,c))){Rw(p,M,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&dd(m,"number",m.value)}switch(F=c?es(c):window,t){case"focusin":(Wg(F)||F.contentEditable==="true")&&(Ji=F,Sd=c,qo=null);break;case"focusout":qo=Sd=Ji=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Xg(p,n,d);break;case"selectionchange":if(TA)break;case"keydown":case"keyup":Xg(p,n,d)}var _;if(Yf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Xi?Aw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Sw&&n.locale!=="ko"&&(Xi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Xi&&(_=Tw()):(sr=d,Hf="value"in sr?sr.value:sr.textContent,Xi=!0)),F=Su(c,y),0<F.length&&(y=new zg(y,t,null,n,d),p.push({event:y,listeners:F}),_?y.data=_:(_=Pw(n),_!==null&&(y.data=_)))),(_=hA?dA(t,n):fA(t,n))&&(c=Su(c,"onBeforeInput"),0<c.length&&(d=new zg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}Fw(p,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=aa(n,s),u!=null&&o.unshift(pa(n,u,l))):i||(u=aa(n,s),u!=null&&o.push(pa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RA=/\r\n?/g,CA=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(RA,`
`).replace(CA,"")}function Rl(t,e,n){if(e=ty(e),ty(t)!==e&&n)throw Error(j(425))}function Au(){}var Pd=null,Rd=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,kA=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,xA=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(t){return ny.resolve(null).then(t).catch(NA)}:kd;function NA(t){setTimeout(function(){throw t})}function Vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ry(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),on="__reactFiber$"+$s,ma="__reactProps$"+$s,Cn="__reactContainer$"+$s,xd="__reactEvents$"+$s,DA="__reactListeners$"+$s,bA="__reactHandles$"+$s;function ei(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ry(t);t!==null;){if(n=t[on])return n;t=ry(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[on]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function yc(t){return t[ma]||null}var Nd=[],ts=-1;function Nr(t){return{current:t}}function ye(t){0>ts||(t.current=Nd[ts],Nd[ts]=null,ts--)}function pe(t,e){ts++,Nd[ts]=t.current,t.current=e}var Sr={},it=Nr(Sr),yt=Nr(!1),ci=Sr;function Es(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function Pu(){ye(yt),ye(it)}function iy(t,e,n){if(it.current!==Sr)throw Error(j(168));pe(it,e),pe(yt,n)}function jw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,y1(t)||"Unknown",i));return Ae({},n,r)}function Ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ci=it.current,pe(it,t),pe(yt,yt.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=jw(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,ye(yt),ye(it),pe(it,t)):ye(yt),pe(yt,n)}var vn=null,_c=!1,Oh=!1;function Bw(t){vn===null?vn=[t]:vn.push(t)}function VA(t){_c=!0,Bw(t)}function Dr(){if(!Oh&&vn!==null){Oh=!0;var t=0,e=ce;try{var n=vn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,_c=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),dw($f,Dr),i}finally{ce=e,Oh=!1}}return null}var ns=[],rs=0,Cu=null,ku=0,Dt=[],bt=0,hi=null,wn=1,En="";function Kr(t,e){ns[rs++]=ku,ns[rs++]=Cu,Cu=t,ku=e}function zw(t,e,n){Dt[bt++]=wn,Dt[bt++]=En,Dt[bt++]=hi,hi=t;var r=wn;t=En;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-Yt(e)+i|n<<i|r,En=s+t}else wn=1<<s|n<<i|r,En=t}function Jf(t){t.return!==null&&(Kr(t,1),zw(t,1,0))}function Zf(t){for(;t===Cu;)Cu=ns[--rs],ns[rs]=null,ku=ns[--rs],ns[rs]=null;for(;t===hi;)hi=Dt[--bt],Dt[bt]=null,En=Dt[--bt],Dt[bt]=null,wn=Dt[--bt],Dt[bt]=null}var Pt=null,Tt=null,we=!1,Gt=null;function $w(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Tt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Tt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bd(t){if(we){var e=Tt;if(e){var n=e;if(!oy(t,e)){if(Dd(t))throw Error(j(418));e=hr(n.nextSibling);var r=Pt;e&&oy(t,e)?$w(r,n):(t.flags=t.flags&-4097|2,we=!1,Pt=t)}}else{if(Dd(t))throw Error(j(418));t.flags=t.flags&-4097|2,we=!1,Pt=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Cl(t){if(t!==Pt)return!1;if(!we)return ay(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=Tt)){if(Dd(t))throw qw(),Error(j(418));for(;e;)$w(t,e),e=hr(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=Pt?hr(t.stateNode.nextSibling):null;return!0}function qw(){for(var t=Tt;t;)t=hr(t.nextSibling)}function Is(){Tt=Pt=null,we=!1}function ep(t){Gt===null?Gt=[t]:Gt.push(t)}var OA=On.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ly(t){var e=t._init;return e(t._payload)}function Kw(t){function e(A,v){if(t){var T=A.deletions;T===null?(A.deletions=[v],A.flags|=16):T.push(v)}}function n(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function r(A,v){for(A=new Map;v!==null;)v.key!==null?A.set(v.key,v):A.set(v.index,v),v=v.sibling;return A}function i(A,v){return A=mr(A,v),A.index=0,A.sibling=null,A}function s(A,v,T){return A.index=T,t?(T=A.alternate,T!==null?(T=T.index,T<v?(A.flags|=2,v):T):(A.flags|=2,v)):(A.flags|=1048576,v)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,v,T,V){return v===null||v.tag!==6?(v=zh(T,A.mode,V),v.return=A,v):(v=i(v,T),v.return=A,v)}function u(A,v,T,V){var M=T.type;return M===Yi?d(A,v,T.props.children,V,T.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yn&&ly(M)===v.type)?(V=i(v,T.props),V.ref=Eo(A,v,T),V.return=A,V):(V=eu(T.type,T.key,T.props,null,A.mode,V),V.ref=Eo(A,v,T),V.return=A,V)}function c(A,v,T,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=$h(T,A.mode,V),v.return=A,v):(v=i(v,T.children||[]),v.return=A,v)}function d(A,v,T,V,M){return v===null||v.tag!==7?(v=si(T,A.mode,V,M),v.return=A,v):(v=i(v,T),v.return=A,v)}function p(A,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zh(""+v,A.mode,T),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return T=eu(v.type,v.key,v.props,null,A.mode,T),T.ref=Eo(A,null,v),T.return=A,T;case Qi:return v=$h(v,A.mode,T),v.return=A,v;case Yn:var V=v._init;return p(A,V(v._payload),T)}if(xo(v)||go(v))return v=si(v,A.mode,T,null),v.return=A,v;kl(A,v)}return null}function m(A,v,T,V){var M=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(A,v,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _l:return T.key===M?u(A,v,T,V):null;case Qi:return T.key===M?c(A,v,T,V):null;case Yn:return M=T._init,m(A,v,M(T._payload),V)}if(xo(T)||go(T))return M!==null?null:d(A,v,T,V,null);kl(A,T)}return null}function w(A,v,T,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(T)||null,l(v,A,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _l:return A=A.get(V.key===null?T:V.key)||null,u(v,A,V,M);case Qi:return A=A.get(V.key===null?T:V.key)||null,c(v,A,V,M);case Yn:var F=V._init;return w(A,v,T,F(V._payload),M)}if(xo(V)||go(V))return A=A.get(T)||null,d(v,A,V,M,null);kl(v,V)}return null}function k(A,v,T,V){for(var M=null,F=null,_=v,y=v=0,E=null;_!==null&&y<T.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var S=m(A,_,T[y],V);if(S===null){_===null&&(_=E);break}t&&_&&S.alternate===null&&e(A,_),v=s(S,v,y),F===null?M=S:F.sibling=S,F=S,_=E}if(y===T.length)return n(A,_),we&&Kr(A,y),M;if(_===null){for(;y<T.length;y++)_=p(A,T[y],V),_!==null&&(v=s(_,v,y),F===null?M=_:F.sibling=_,F=_);return we&&Kr(A,y),M}for(_=r(A,_);y<T.length;y++)E=w(_,A,y,T[y],V),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),v=s(E,v,y),F===null?M=E:F.sibling=E,F=E);return t&&_.forEach(function(P){return e(A,P)}),we&&Kr(A,y),M}function D(A,v,T,V){var M=go(T);if(typeof M!="function")throw Error(j(150));if(T=M.call(T),T==null)throw Error(j(151));for(var F=M=null,_=v,y=v=0,E=null,S=T.next();_!==null&&!S.done;y++,S=T.next()){_.index>y?(E=_,_=null):E=_.sibling;var P=m(A,_,S.value,V);if(P===null){_===null&&(_=E);break}t&&_&&P.alternate===null&&e(A,_),v=s(P,v,y),F===null?M=P:F.sibling=P,F=P,_=E}if(S.done)return n(A,_),we&&Kr(A,y),M;if(_===null){for(;!S.done;y++,S=T.next())S=p(A,S.value,V),S!==null&&(v=s(S,v,y),F===null?M=S:F.sibling=S,F=S);return we&&Kr(A,y),M}for(_=r(A,_);!S.done;y++,S=T.next())S=w(_,A,y,S.value,V),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),v=s(S,v,y),F===null?M=S:F.sibling=S,F=S);return t&&_.forEach(function(x){return e(A,x)}),we&&Kr(A,y),M}function L(A,v,T,V){if(typeof T=="object"&&T!==null&&T.type===Yi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case _l:e:{for(var M=T.key,F=v;F!==null;){if(F.key===M){if(M=T.type,M===Yi){if(F.tag===7){n(A,F.sibling),v=i(F,T.props.children),v.return=A,A=v;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yn&&ly(M)===F.type){n(A,F.sibling),v=i(F,T.props),v.ref=Eo(A,F,T),v.return=A,A=v;break e}n(A,F);break}else e(A,F);F=F.sibling}T.type===Yi?(v=si(T.props.children,A.mode,V,T.key),v.return=A,A=v):(V=eu(T.type,T.key,T.props,null,A.mode,V),V.ref=Eo(A,v,T),V.return=A,A=V)}return o(A);case Qi:e:{for(F=T.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(A,v.sibling),v=i(v,T.children||[]),v.return=A,A=v;break e}else{n(A,v);break}else e(A,v);v=v.sibling}v=$h(T,A.mode,V),v.return=A,A=v}return o(A);case Yn:return F=T._init,L(A,v,F(T._payload),V)}if(xo(T))return k(A,v,T,V);if(go(T))return D(A,v,T,V);kl(A,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(A,v.sibling),v=i(v,T),v.return=A,A=v):(n(A,v),v=zh(T,A.mode,V),v.return=A,A=v),o(A)):n(A,v)}return L}var Ts=Kw(!0),Ww=Kw(!1),xu=Nr(null),Nu=null,is=null,tp=null;function np(){tp=is=Nu=null}function rp(t){var e=xu.current;ye(xu),t._currentValue=e}function Vd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){Nu=t,tp=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Nu===null)throw Error(j(308));is=t,Nu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ti=null;function ip(t){ti===null?ti=[t]:ti.push(t)}function Hw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}function uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(m=e,w=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){p=k.call(w,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,m=typeof k=="function"?k.call(w,p,m):k,m==null)break e;p=Ae({},p,m);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=p}}function cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var $a={},cn=Nr($a),ga=Nr($a),ya=Nr($a);function ni(t){if(t===$a)throw Error(j(174));return t}function op(t,e){switch(pe(ya,e),pe(ga,t),pe(cn,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}ye(cn),pe(cn,e)}function Ss(){ye(cn),ye(ga),ye(ya)}function Qw(t){ni(ya.current);var e=ni(cn.current),n=pd(e,t.type);e!==n&&(pe(ga,t),pe(cn,n))}function ap(t){ga.current===t&&(ye(cn),ye(ga))}var Ie=Nr(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lh=[];function lp(){for(var t=0;t<Lh.length;t++)Lh[t]._workInProgressVersionPrimary=null;Lh.length=0}var Ql=On.ReactCurrentDispatcher,Mh=On.ReactCurrentBatchConfig,di=0,Se=null,Me=null,$e=null,Vu=!1,Ko=!1,_a=0,LA=0;function Je(){throw Error(j(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(di=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?jA:BA,t=n(r,i),Ko){s=0;do{if(Ko=!1,_a=0,25<=s)throw Error(j(301));s+=1,$e=Me=null,e.updateQueue=null,Ql.current=zA,t=n(r,i)}while(Ko)}if(Ql.current=Ou,e=Me!==null&&Me.next!==null,di=0,$e=Me=Se=null,Vu=!1,e)throw Error(j(300));return t}function hp(){var t=_a!==0;return _a=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Se.memoizedState=$e=t:$e=$e.next=t,$e}function zt(){if(Me===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Se.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(j(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Se.memoizedState=$e=t:$e=$e.next=t}return $e}function va(t,e){return typeof e=="function"?e(t):e}function Fh(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((di&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=d,fi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uh(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yw(){}function Xw(t,e){var n=Se,r=zt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,dp(eE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,wa(9,Zw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(j(349));di&30||Jw(n,e,i)}return i}function Jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zw(t,e,n,r){e.value=n,e.getSnapshot=r,tE(e)&&nE(t)}function eE(t,e,n){return n(function(){tE(e)&&nE(t)})}function tE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function nE(t){var e=kn(t,1);e!==null&&Xt(e,t,1,-1)}function hy(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=UA.bind(null,Se,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rE(){return zt().memoizedState}function Yl(t,e,n,r){var i=rn();Se.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function vc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function dy(t,e){return Yl(8390656,8,t,e)}function dp(t,e){return vc(2048,8,t,e)}function iE(t,e){return vc(4,2,t,e)}function sE(t,e){return vc(4,4,t,e)}function oE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aE(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,oE.bind(null,e,t),n)}function fp(){}function lE(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uE(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cE(t,e,n){return di&21?(Jt(n,e)||(n=mw(),Se.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function MA(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Mh.transition;Mh.transition={};try{t(!1),e()}finally{ce=n,Mh.transition=r}}function hE(){return zt().memoizedState}function FA(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dE(t))fE(e,n);else if(n=Hw(t,e,n,r),n!==null){var i=ut();Xt(n,t,r,i),pE(n,e,r)}}function UA(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dE(t))fE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Hw(t,e,i,r),n!==null&&(i=ut(),Xt(n,t,r,i),pE(n,e,r))}}function dE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function fE(t,e){Ko=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}var Ou={readContext:Bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},jA={readContext:Bt,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:dy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,oE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FA.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:hy,useDebugValue:fp,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=hy(!1),e=t[0];return t=MA.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=rn();if(we){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),qe===null)throw Error(j(349));di&30||Jw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dy(eE.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,Zw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=qe.identifierPrefix;if(we){var n=En,r=wn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BA={readContext:Bt,useCallback:lE,useContext:Bt,useEffect:dp,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:uE,useReducer:Fh,useRef:rE,useState:function(){return Fh(va)},useDebugValue:fp,useDeferredValue:function(t){var e=zt();return cE(e,Me.memoizedState,t)},useTransition:function(){var t=Fh(va)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:hE,unstable_isNewReconciler:!1},zA={readContext:Bt,useCallback:lE,useContext:Bt,useEffect:dp,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:uE,useReducer:Uh,useRef:rE,useState:function(){return Uh(va)},useDebugValue:fp,useDeferredValue:function(t){var e=zt();return Me===null?e.memoizedState=t:cE(e,Me.memoizedState,t)},useTransition:function(){var t=Uh(va)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:hE,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=pr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Xt(e,t,i,r),Gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=pr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Xt(e,t,i,r),Gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=pr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Xt(e,t,r,n),Gl(e,t,r))}};function fy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,r)||!da(i,s):!0}function mE(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=_t(e)?ci:it.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=_t(e)?ci:it.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wc.enqueueReplaceState(i,i.state,null),Du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",r=e;do n+=g1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function jh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $A=typeof WeakMap=="function"?WeakMap:Map;function gE(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,Hd=r),Md(t,e)},n}function yE(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function my(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $A;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rP.bind(null,t,e,n),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var qA=On.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?Ww(e,null,n,r):Ts(e,t.child,n,r)}function _y(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=cp(t,e,n,r,s,i),n=hp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(we&&n&&Jf(e),e.flags|=1,at(t,e,r,i),e.child)}function vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_E(t,e,s,r,i)):(t=eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _E(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(da(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Fd(t,e,n,r,i)}function vE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(os,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(os,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(os,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(os,Et),Et|=r;return at(t,e,i,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fd(t,e,n,r,i){var s=_t(n)?ci:it.current;return s=Es(e,s),ds(e,i),n=cp(t,e,n,r,s,i),r=hp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(we&&r&&Jf(e),e.flags|=1,at(t,e,n,i),e.child)}function wy(t,e,n,r,i){if(_t(n)){var s=!0;Ru(e)}else s=!1;if(ds(e,i),e.stateNode===null)Xl(t,e),mE(e,n,r),Ld(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=_t(n)?ci:it.current,c=Es(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&py(e,o,r,c),Xn=!1;var m=e.memoizedState;o.state=m,Du(e,r,o,i),u=e.memoizedState,l!==r||m!==u||yt.current||Xn?(typeof d=="function"&&(Od(e,n,d,r),u=e.memoizedState),(l=Xn||fy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Kt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=_t(n)?ci:it.current,u=Es(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&py(e,o,r,u),Xn=!1,m=e.memoizedState,o.state=m,Du(e,r,o,i);var k=e.memoizedState;l!==p||m!==k||yt.current||Xn?(typeof w=="function"&&(Od(e,n,w,r),k=e.memoizedState),(c=Xn||fy(e,n,c,r,m,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ud(t,e,n,r,s,i)}function Ud(t,e,n,r,i,s){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sy(e,n,!1),xn(t,e,s);r=e.stateNode,qA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&sy(e,n,!0),e.child}function EE(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),op(t,e.containerInfo)}function Ey(t,e,n,r,i){return Is(),ep(i),e.flags|=256,at(t,e,n,r),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function IE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bd(n),e.memoizedState=jd,t):pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return KA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,r){return r!==null&&ep(r),Ts(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=jh(Error(j(422))),xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=Bd(o),e.memoizedState=jd,s);if(!(e.mode&1))return xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=jh(s,r,void 0),xl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Xt(r,t,i,-1))}return wp(),r=jh(Error(j(421))),xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=hr(i.nextSibling),Pt=e,we=!0,Gt=null,t!==null&&(Dt[bt++]=wn,Dt[bt++]=En,Dt[bt++]=hi,wn=t.id,En=t.overflow,hi=e),e=pp(e,r.children),e.flags|=4096,e)}function Iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vd(t.return,e,n)}function Bh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iy(t,n,e);else if(t.tag===19)Iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bh(e,!0,n,null,s);break;case"together":Bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WA(t,e,n){switch(e.tag){case 3:EE(e),Is();break;case 5:Qw(e);break;case 1:_t(e.type)&&Ru(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?IE(t,e,n):(pe(Ie,Ie.current&1),t=xn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,vE(t,e,n)}return xn(t,e,n)}var SE,zd,AE,PE;SE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};AE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(cn.current);var s=null;switch(n){case"input":i=cd(t,i),r=cd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=fd(t,i),r=fd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Au)}md(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};PE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Io(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HA(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return _t(e.type)&&Pu(),Ze(e),null;case 3:return r=e.stateNode,Ss(),ye(yt),ye(it),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Yd(Gt),Gt=null))),zd(t,e),Ze(e),null;case 5:ap(e);var i=ni(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)AE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ze(e),null}if(t=ni(cn.current),Cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[ma]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Do.length;i++)ge(Do[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Ng(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":bg(r,s),ge("invalid",r)}md(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,l,t),i=["children",""+l]):sa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":vl(r),Dg(r,s,!0);break;case"textarea":vl(r),Vg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ew(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[ma]=r,SE(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<Do.length;i++)ge(Do[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Ng(t,r),i=cd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ge("invalid",t);break;case"textarea":bg(t,r),i=fd(t,r),ge("invalid",t);break;default:i=r}md(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oa(t,u):typeof u=="number"&&oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Ff(t,s,u,o))}switch(n){case"input":vl(t),Dg(t,r,!1);break;case"textarea":vl(t),Vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)PE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ni(ya.current),ni(cn.current),Cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return Ze(e),null;case 13:if(ye(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Tt!==null&&e.mode&1&&!(e.flags&128))qw(),Is(),e.flags|=98560,s=!1;else if(s=Cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[on]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Gt!==null&&(Yd(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):wp())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Ss(),zd(t,e),t===null&&fa(e.stateNode.containerInfo),Ze(e),null;case 10:return rp(e.type._context),Ze(e),null;case 17:return _t(e.type)&&Pu(),Ze(e),null;case 19:if(ye(Ie),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Io(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bu(t),o!==null){for(e.flags|=128,Io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>Ps&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304)}else{if(!r)if(t=bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return Ze(e),null}else 2*xe()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function GA(t,e){switch(Zf(e),e.tag){case 1:return _t(e.type)&&Pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),ye(yt),ye(it),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(ye(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ie),null;case 4:return Ss(),null;case 10:return rp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var Nl=!1,nt=!1,QA=typeof WeakSet=="function"?WeakSet:Set,K=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function $d(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Ty=!1;function YA(t,e){if(Pd=Iu,t=Nw(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Iu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,L=k.memoizedState,A=e.stateNode,v=A.getSnapshotBeforeUpdate(e.elementType===e.type?D:Kt(e.type,D),L);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(V){Re(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return k=Ty,Ty=!1,k}function Wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$d(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RE(t){var e=t.alternate;e!==null&&(t.alternate=null,RE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[ma],delete e[xd],delete e[DA],delete e[bA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CE(t){return t.tag===5||t.tag===3||t.tag===4}function Sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(r!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}var We=null,Wt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)kE(t,e,n),n=n.sibling}function kE(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:nt||ss(n,e);case 6:var r=We,i=Wt;We=null,Kn(t,e,n),We=r,Wt=i,We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?Vh(t.parentNode,n):t.nodeType===1&&Vh(t,n),ca(t)):Vh(We,n.stateNode));break;case 4:r=We,i=Wt,We=n.stateNode.containerInfo,Wt=!0,Kn(t,e,n),We=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!nt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Kn(t,e,n),nt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Ay(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QA),e.forEach(function(r){var i=sP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Wt=!1;break e;case 3:We=l.stateNode.containerInfo,Wt=!0;break e;case 4:We=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(We===null)throw Error(j(160));kE(s,o,i),We=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xE(e,t),e=e.sibling}function xE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),nn(t),r&4){try{Wo(3,t,t.return),Ec(3,t)}catch(D){Re(t,t.return,D)}try{Wo(5,t,t.return)}catch(D){Re(t,t.return,D)}}break;case 1:qt(e,t),nn(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(qt(e,t),nn(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(D){Re(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jv(i,s),gd(l,o);var c=gd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?rw(i,p):d==="dangerouslySetInnerHTML"?tw(i,p):d==="children"?oa(i,p):Ff(i,d,p,c)}switch(l){case"input":hd(i,s);break;case"textarea":Zv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ls(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ls(i,!!s.multiple,s.defaultValue,!0):ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(D){Re(t,t.return,D)}}break;case 6:if(qt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Re(t,t.return,D)}}break;case 3:if(qt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(D){Re(t,t.return,D)}break;case 4:qt(e,t),nn(t);break;case 13:qt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yp=xe())),r&4&&Ay(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||d,qt(e,t),nt=c):qt(e,t),nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wo(4,m,m.return);break;case 1:ss(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){Re(r,n,D)}}break;case 5:ss(m,m.return);break;case 22:if(m.memoizedState!==null){Ry(p);continue}}w!==null?(w.return=m,K=w):Ry(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nw("display",o))}catch(D){Re(t,t.return,D)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(D){Re(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),nn(t),r&4&&Ay(t);break;case 21:break;default:qt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CE(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=Sy(t);Wd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sy(t);Kd(t,l,o);break;default:throw Error(j(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XA(t,e,n){K=t,NE(t)}function NE(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=Nl;var c=nt;if(Nl=o,(nt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Cy(i):u!==null?(u.return=o,K=u):Cy(i);for(;s!==null;)K=s,NE(s),s=s.sibling;K=i,Nl=l,nt=c}Py(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Py(t)}}function Py(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ca(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}nt||e.flags&512&&qd(e)}catch(m){Re(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Ry(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Cy(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{qd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{qd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var JA=Math.ceil,Lu=On.ReactCurrentDispatcher,mp=On.ReactCurrentOwner,Ut=On.ReactCurrentBatchConfig,oe=0,qe=null,De=null,Qe=0,Et=0,os=Nr(0),Fe=0,Ea=null,fi=0,Ic=0,gp=0,Ho=null,pt=null,yp=0,Ps=1/0,_n=null,Mu=!1,Hd=null,fr=null,Dl=!1,or=null,Fu=0,Go=0,Gd=null,Jl=-1,Zl=0;function ut(){return oe&6?xe():Jl!==-1?Jl:Jl=xe()}function pr(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:OA.transition!==null?(Zl===0&&(Zl=mw()),Zl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Iw(t.type)),t):1}function Xt(t,e,n,r){if(50<Go)throw Go=0,Gd=null,Error(j(185));ja(t,n,r),(!(oe&2)||t!==qe)&&(t===qe&&(!(oe&2)&&(Ic|=n),Fe===4&&Zn(t,Qe)),vt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ps=xe()+500,_c&&Dr()))}function vt(t,e){var n=t.callbackNode;O1(t,e);var r=Eu(t,t===qe?Qe:0);if(r===0)n!==null&&Mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mg(n),e===1)t.tag===0?VA(ky.bind(null,t)):Bw(ky.bind(null,t)),xA(function(){!(oe&6)&&Dr()}),n=null;else{switch(gw(r)){case 1:n=$f;break;case 4:n=fw;break;case 16:n=wu;break;case 536870912:n=pw;break;default:n=wu}n=UE(n,DE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DE(t,e){if(Jl=-1,Zl=0,oe&6)throw Error(j(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=Eu(t,t===qe?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uu(t,r);else{e=r;var i=oe;oe|=2;var s=VE();(qe!==t||Qe!==e)&&(_n=null,Ps=xe()+500,ii(t,e));do try{tP();break}catch(l){bE(t,l)}while(!0);np(),Lu.current=s,oe=i,De!==null?e=0:(qe=null,Qe=0,e=Fe)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=Qd(t,i))),e===1)throw n=Ea,ii(t,0),Zn(t,r),vt(t,xe()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ZA(i)&&(e=Uu(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=Qd(t,s))),e===1))throw n=Ea,ii(t,0),Zn(t,r),vt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Wr(t,pt,_n);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=yp+500-xe(),10<e)){if(Eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kd(Wr.bind(null,t,pt,_n),e);break}Wr(t,pt,_n);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JA(r/1960))-r,10<r){t.timeoutHandle=kd(Wr.bind(null,t,pt,_n),r);break}Wr(t,pt,_n);break;case 5:Wr(t,pt,_n);break;default:throw Error(j(329))}}}return vt(t,xe()),t.callbackNode===n?DE.bind(null,t):null}function Qd(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=Uu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Yd(e)),t}function Yd(t){pt===null?pt=t:pt.push.apply(pt,t)}function ZA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~gp,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function ky(t){if(oe&6)throw Error(j(327));fs();var e=Eu(t,0);if(!(e&1))return vt(t,xe()),null;var n=Uu(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=Qd(t,r))}if(n===1)throw n=Ea,ii(t,0),Zn(t,e),vt(t,xe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,pt,_n),vt(t,xe()),null}function _p(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ps=xe()+500,_c&&Dr())}}function pi(t){or!==null&&or.tag===0&&!(oe&6)&&fs();var e=oe;oe|=1;var n=Ut.transition,r=ce;try{if(Ut.transition=null,ce=1,t)return t()}finally{ce=r,Ut.transition=n,oe=e,!(oe&6)&&Dr()}}function vp(){Et=os.current,ye(os)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kA(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pu();break;case 3:Ss(),ye(yt),ye(it),lp();break;case 5:ap(r);break;case 4:Ss();break;case 13:ye(Ie);break;case 19:ye(Ie);break;case 10:rp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(qe=t,De=t=mr(t.current,null),Qe=Et=e,Fe=0,Ea=null,gp=Ic=fi=0,pt=Ho=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function bE(t,e){do{var n=De;try{if(np(),Ql.current=Ou,Vu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vu=!1}if(di=0,$e=Me=Se=null,Ko=!1,_a=0,mp.current=null,n===null||n.return===null){Fe=1,Ea=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=gy(o);if(w!==null){w.flags&=-257,yy(w,o,l,s,e),w.mode&1&&my(s,c,e),e=w,u=c;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){my(s,c,e),wp();break e}u=Error(j(426))}}else if(we&&l.mode&1){var L=gy(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),yy(L,o,l,s,e),ep(As(u,l));break e}}s=u=As(u,l),Fe!==4&&(Fe=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=gE(s,u,e);uy(s,A);break e;case 1:l=u;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fr===null||!fr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=yE(s,l,e);uy(s,V);break e}}s=s.return}while(s!==null)}LE(n)}catch(M){e=M,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function VE(){var t=Lu.current;return Lu.current=Ou,t===null?Ou:t}function wp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),qe===null||!(fi&268435455)&&!(Ic&268435455)||Zn(qe,Qe)}function Uu(t,e){var n=oe;oe|=2;var r=VE();(qe!==t||Qe!==e)&&(_n=null,ii(t,e));do try{eP();break}catch(i){bE(t,i)}while(!0);if(np(),oe=n,Lu.current=r,De!==null)throw Error(j(261));return qe=null,Qe=0,Fe}function eP(){for(;De!==null;)OE(De)}function tP(){for(;De!==null&&!P1();)OE(De)}function OE(t){var e=FE(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?LE(t):De=e,mp.current=null}function LE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GA(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=HA(n,e,Et),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Wr(t,e,n){var r=ce,i=Ut.transition;try{Ut.transition=null,ce=1,nP(t,e,n,r)}finally{Ut.transition=i,ce=r}return null}function nP(t,e,n,r){do fs();while(or!==null);if(oe&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L1(t,s),t===qe&&(De=qe=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,UE(wu,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=ce;ce=1;var l=oe;oe|=4,mp.current=null,YA(t,n),xE(n,t),IA(Rd),Iu=!!Pd,Rd=Pd=null,t.current=n,XA(n),R1(),oe=l,ce=o,Ut.transition=s}else t.current=n;if(Dl&&(Dl=!1,or=t,Fu=i),s=t.pendingLanes,s===0&&(fr=null),x1(n.stateNode),vt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=Hd,Hd=null,t;return Fu&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Gd?Go++:(Go=0,Gd=t):Go=0,Dr(),null}function fs(){if(or!==null){var t=gw(Fu),e=Ut.transition,n=ce;try{if(Ut.transition=null,ce=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,Fu=0,oe&6)throw Error(j(331));var i=oe;for(oe|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Wo(8,d,s)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,w=d.return;if(RE(d),d===c){K=null;break}if(m!==null){m.return=w,K=m;break}K=w}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,K=A;break e}K=s.return}}var v=t.current;for(K=v;K!==null;){o=K;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,K=T;else e:for(o=v;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch(M){Re(l,l.return,M)}if(l===o){K=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,K=V;break e}K=l.return}}if(oe=i,Dr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(fc,t)}catch{}r=!0}return r}finally{ce=n,Ut.transition=e}}return!1}function xy(t,e,n){e=As(n,e),e=gE(t,e,1),t=dr(t,e,1),e=ut(),t!==null&&(ja(t,1,e),vt(t,e))}function Re(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=As(n,t),t=yE(e,t,1),e=dr(e,t,1),t=ut(),e!==null&&(ja(e,1,t),vt(e,t));break}}e=e.return}}function rP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>xe()-yp?ii(t,0):gp|=n),vt(t,e)}function ME(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=ut();t=kn(t,e),t!==null&&(ja(t,e,n),vt(t,n))}function iP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ME(t,n)}function sP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ME(t,n)}var FE;FE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,WA(t,e,n);gt=!!(t.flags&131072)}else gt=!1,we&&e.flags&1048576&&zw(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var i=Es(e,it.current);ds(e,n),i=cp(null,e,r,t,i,n);var s=hp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Ru(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=wc,e.stateNode=i,i._reactInternals=e,Ld(e,r,t,n),e=Ud(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Jf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=aP(r),t=Kt(r,t),i){case 0:e=Fd(null,e,r,t,n);break e;case 1:e=wy(null,e,r,t,n);break e;case 11:e=_y(null,e,r,t,n);break e;case 14:e=vy(null,e,r,Kt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),wy(t,e,r,i,n);case 3:e:{if(EE(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gw(t,e),Du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=As(Error(j(423)),e),e=Ey(t,e,r,n,i);break e}else if(r!==i){i=As(Error(j(424)),e),e=Ey(t,e,r,n,i);break e}else for(Tt=hr(e.stateNode.containerInfo.firstChild),Pt=e,we=!0,Gt=null,n=Ww(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=xn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return Qw(e),t===null&&bd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cd(r,i)?o=null:s!==null&&Cd(r,s)&&(e.flags|=32),wE(t,e),at(t,e,o,n),e.child;case 6:return t===null&&bd(e),null;case 13:return IE(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),_y(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(xu,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!yt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Vd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=Bt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),vy(t,e,r,i,n);case 15:return _E(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Xl(t,e),e.tag=1,_t(r)?(t=!0,Ru(e)):t=!1,ds(e,n),mE(e,r,i),Ld(e,r,i,n),Ud(null,e,r,!0,t,n);case 19:return TE(t,e,n);case 22:return vE(t,e,n)}throw Error(j(156,e.tag))};function UE(t,e){return dw(t,e)}function oP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new oP(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aP(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===Bf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return si(n.children,i,s,e);case Uf:o=8,i|=8;break;case od:return t=Lt(12,n,e,i|2),t.elementType=od,t.lanes=s,t;case ad:return t=Lt(13,n,e,i),t.elementType=ad,t.lanes=s,t;case ld:return t=Lt(19,n,e,i),t.elementType=ld,t.lanes=s,t;case Qv:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hv:o=10;break e;case Gv:o=9;break e;case jf:o=11;break e;case Bf:o=14;break e;case Yn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Qv,t.lanes=n,t.stateNode={isHidden:!1},t}function zh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function $h(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Th(0),this.expirationTimes=Th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Th(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,r,i,s,o,l,u){return t=new lP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function uP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jE(t){if(!t)return Sr;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(_t(n))return jw(t,n,e)}return e}function BE(t,e,n,r,i,s,o,l,u){return t=Ip(n,r,!0,t,i,s,o,l,u),t.context=jE(null),n=t.current,r=ut(),i=pr(n),s=An(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ja(t,i,r),vt(t,r),t}function Sc(t,e,n,r){var i=e.current,s=ut(),o=pr(i);return n=jE(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Xt(t,i,o,s),Gl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ny(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tp(t,e){Ny(t,e),(t=t.alternate)&&Ny(t,e)}function cP(){return null}var zE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}Ac.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Sc(t,e,null,null)};Ac.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){Sc(null,t,null,null)}),e[Cn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Ew(t)}};function Ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dy(){}function hP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ju(o);s.call(c)}}var o=BE(e,r,t,0,null,!1,!1,"",Dy);return t._reactRootContainer=o,t[Cn]=o.current,fa(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ju(u);l.call(c)}}var u=Ip(t,0,!1,null,null,!1,!1,"",Dy);return t._reactRootContainer=u,t[Cn]=u.current,fa(t.nodeType===8?t.parentNode:t),pi(function(){Sc(e,u,n,r)}),u}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ju(o);l.call(u)}}Sc(e,o,t,i)}else o=hP(n,e,t,i,r);return ju(o)}yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(qf(e,n|1),vt(e,xe()),!(oe&6)&&(Ps=xe()+500,Dr()))}break;case 13:pi(function(){var r=kn(t,1);if(r!==null){var i=ut();Xt(r,t,1,i)}}),Tp(t,1)}};Kf=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ut();Xt(e,t,134217728,n)}Tp(t,134217728)}};_w=function(t){if(t.tag===13){var e=pr(t),n=kn(t,e);if(n!==null){var r=ut();Xt(n,t,e,r)}Tp(t,e)}};vw=function(){return ce};ww=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};_d=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yc(r);if(!i)throw Error(j(90));Xv(r),hd(r,i)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};ow=_p;aw=pi;var dP={usingClientEntryPoint:!1,Events:[za,es,yc,iw,sw,_p]},To={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fP={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cw(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||cP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{fc=bl.inject(fP),un=bl}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dP;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ap(e))throw Error(j(200));return uP(t,e,null,n)};kt.createRoot=function(t,e){if(!Ap(t))throw Error(j(299));var n=!1,r="",i=zE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,fa(t.nodeType===8?t.parentNode:t),new Sp(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=cw(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return pi(t)};kt.hydrate=function(t,e,n){if(!Pc(e))throw Error(j(200));return Rc(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Ap(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=BE(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};kt.render=function(t,e,n){if(!Pc(e))throw Error(j(200));return Rc(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(j(40));return t._reactRootContainer?(pi(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};kt.unstable_batchedUpdates=_p;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Rc(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function $E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($E)}catch(t){console.error(t)}}$E(),$v.exports=kt;var pP=$v.exports,by=pP;id.createRoot=by.createRoot,id.hydrateRoot=by.hydrateRoot;const mP=()=>{};var Vy={};/**
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
 */const qE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},KE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new yP;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const k=c<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _P=function(t){const e=qE(t);return KE.encodeByteArray(e,!0)},Bu=function(t){return _P(t).replace(/\./g,"")},WE=function(t){try{return KE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vP=()=>HE().__FIREBASE_DEFAULTS__,wP=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&WE(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return mP()||vP()||wP()||EP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GE=t=>{var e,n;return(n=(e=Cc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},IP=t=>{const e=GE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},QE=()=>{var t;return(t=Cc())==null?void 0:t.config},YE=t=>{var e;return(e=Cc())==null?void 0:e[`_${t}`]};/**
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
 */class TP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function XE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function SP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Bu(JSON.stringify(n)),Bu(JSON.stringify(o)),""].join(".")}const Qo={};function AP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qo))Qo[e]?t.emulator.push(e):t.prod.push(e);return t}function PP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Oy=!1;function JE(t,e){if(typeof window>"u"||typeof document>"u"||!qs(window.location.host)||Qo[t]===e||Qo[t]||Oy)return;Qo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=AP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Oy=!0,o()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=PP(r),w=n("text"),k=document.getElementById(w)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),A=n("preprendIcon"),v=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),d(L,D);const V=c();u(v,A),T.append(v,k,L,V),document.body.appendChild(T)}s?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function ZE(){var e;const t=(e=Cc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NP(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eI(){return!ZE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tI(){return!ZE()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function nI(){try{return typeof indexedDB=="object"}catch{return!1}}function DP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const bP="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function VP(t,e){return t.replace(OP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OP=/\{\$([^}]+)}/g;function LP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
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
 */function Ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MP(t,e){const n=new FP(t,e);return n.subscribe.bind(n)}class FP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class gi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class jP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zP(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BP(t){return t===Hr?void 0:t}function zP(t){return t.instantiationMode==="EAGER"}/**
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
 */class $P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const qP={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},KP=re.INFO,WP={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},HP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pp{constructor(e){this.name=e,this._logLevel=KP,this._logHandler=HP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const GP=(t,e)=>e.some(n=>t instanceof n);let My,Fy;function QP(){return My||(My=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YP(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rI=new WeakMap,Xd=new WeakMap,iI=new WeakMap,Kh=new WeakMap,Rp=new WeakMap;function XP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rI.set(n,t)}).catch(()=>{}),Rp.set(e,t),e}function JP(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZP(t){Jd=t(Jd)}function eR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return iI.set(r,e.sort?e.sort():[e]),gr(r)}:YP().includes(t)?function(...e){return t.apply(Wh(this),e),gr(rI.get(this))}:function(...e){return gr(t.apply(Wh(this),e))}}function tR(t){return typeof t=="function"?eR(t):(t instanceof IDBTransaction&&JP(t),GP(t,QP())?new Proxy(t,Jd):t)}function gr(t){if(t instanceof IDBRequest)return XP(t);if(Kh.has(t))return Kh.get(t);const e=tR(t);return e!==t&&(Kh.set(t,e),Rp.set(e,t)),e}const Wh=t=>Rp.get(t);function nR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rR=["get","getKey","getAll","getAllKeys","count"],iR=["put","add","delete","clear"],Hh=new Map;function Uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hh.get(e))return Hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Hh.set(e,s),s}ZP(t=>({...t,get:(e,n,r)=>Uy(e,n)||t.get(e,n,r),has:(e,n)=>!!Uy(e,n)||t.has(e,n)}));/**
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
 */class sR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",jy="0.14.6";/**
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
 */const Nn=new Pp("@firebase/app"),aR="@firebase/app-compat",lR="@firebase/analytics-compat",uR="@firebase/analytics",cR="@firebase/app-check-compat",hR="@firebase/app-check",dR="@firebase/auth",fR="@firebase/auth-compat",pR="@firebase/database",mR="@firebase/data-connect",gR="@firebase/database-compat",yR="@firebase/functions",_R="@firebase/functions-compat",vR="@firebase/installations",wR="@firebase/installations-compat",ER="@firebase/messaging",IR="@firebase/messaging-compat",TR="@firebase/performance",SR="@firebase/performance-compat",AR="@firebase/remote-config",PR="@firebase/remote-config-compat",RR="@firebase/storage",CR="@firebase/storage-compat",kR="@firebase/firestore",xR="@firebase/ai",NR="@firebase/firestore-compat",DR="firebase",bR="12.6.0";/**
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
 */const ef="[DEFAULT]",VR={[Zd]:"fire-core",[aR]:"fire-core-compat",[uR]:"fire-analytics",[lR]:"fire-analytics-compat",[hR]:"fire-app-check",[cR]:"fire-app-check-compat",[dR]:"fire-auth",[fR]:"fire-auth-compat",[pR]:"fire-rtdb",[mR]:"fire-data-connect",[gR]:"fire-rtdb-compat",[yR]:"fire-fn",[_R]:"fire-fn-compat",[vR]:"fire-iid",[wR]:"fire-iid-compat",[ER]:"fire-fcm",[IR]:"fire-fcm-compat",[TR]:"fire-perf",[SR]:"fire-perf-compat",[AR]:"fire-rc",[PR]:"fire-rc-compat",[RR]:"fire-gcs",[CR]:"fire-gcs-compat",[kR]:"fire-fst",[NR]:"fire-fst-compat",[xR]:"fire-vertex","fire-js":"fire-js",[DR]:"fire-js-all"};/**
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
 */const zu=new Map,OR=new Map,tf=new Map;function By(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(tf.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,t);for(const n of zu.values())By(n,t);for(const n of OR.values())By(n,t);return!0}function Cp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new qa("app","Firebase",LR);/**
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
 */class MR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=bR;function sI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ef,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=QE()),!n)throw yr.create("no-options");const s=zu.get(i);if(s){if(mi(n,s.options)&&mi(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new $P(i);for(const u of tf.values())o.addComponent(u);const l=new MR(n,r,o);return zu.set(i,l),l}function oI(t=ef){const e=zu.get(t);if(!e&&t===ef&&QE())return sI();if(!e)throw yr.create("no-app",{appName:t});return e}function _r(t,e,n){let r=VR[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}Rs(new gi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FR="firebase-heartbeat-database",UR=1,Ia="firebase-heartbeat-store";let Gh=null;function aI(){return Gh||(Gh=nR(FR,UR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Gh}async function jR(t){try{const n=(await aI()).transaction(Ia),r=await n.objectStore(Ia).get(lI(t));return await n.done,r}catch(e){if(e instanceof Ln)Nn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function zy(t,e){try{const r=(await aI()).transaction(Ia,"readwrite");await r.objectStore(Ia).put(e,lI(t)),await r.done}catch(n){if(n instanceof Ln)Nn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function lI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BR=1024,zR=30;class $R{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$y();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>zR){const o=WR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$y(),{heartbeatsToSend:r,unsentEntries:i}=qR(this._heartbeatsCache.heartbeats),s=Bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function $y(){return new Date().toISOString().substring(0,10)}function qR(t,e=BR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nI()?DP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qy(t){return Bu(JSON.stringify({version:2,heartbeats:t})).length}function WR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function HR(t){Rs(new gi("platform-logger",e=>new sR(e),"PRIVATE")),Rs(new gi("heartbeat",e=>new $R(e),"PRIVATE")),_r(Zd,jy,t),_r(Zd,jy,"esm2020"),_r("fire-js","")}HR("");function uI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GR=uI,cI=new qa("auth","Firebase",uI());/**
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
 */const $u=new Pp("@firebase/auth");function QR(t,...e){$u.logLevel<=re.WARN&&$u.warn(`Auth (${Ks}): ${t}`,...e)}function tu(t,...e){$u.logLevel<=re.ERROR&&$u.error(`Auth (${Ks}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw kp(t,...e)}function hn(t,...e){return kp(t,...e)}function hI(t,e,n){const r={...GR(),[e]:n};return new qa("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return hI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cI.create(t,...e)}function Q(t,e,...n){if(!t)throw kp(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function Dn(t,e){t||In(e)}/**
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
 */function nf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function YR(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function XR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YR()||kP()||"connection"in navigator)?navigator.onLine:!0}function JR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=RP()||xP()}get(){return XR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xp(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tC=new Wa(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vr(t,e,n,r,i={}){return fI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ka({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return CP()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&qs(t.emulatorConfig.host)&&(c.credentials="include"),dI.fetch()(await pI(t,t.config.apiHost,n,l),c)})}async function fI(t,e,n){t._canInitEmulator=!1;const r={...ZR,...e};try{const i=new rC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hI(t,d,c);Zt(t,d)}}catch(i){if(i instanceof Ln)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function Ha(t,e,n,r,i={}){const s=await Vr(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function pI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?xp(t.config,i):`${t.config.apiScheme}://${i}`;return eC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function nC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),tC.get())})}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function Wy(t){return t!==void 0&&t.enterprise!==void 0}class iC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sC(t,e){return Vr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
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
 */async function oC(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function qu(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aC(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=Np(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Qh(i.auth_time)),issuedAtTime:Yo(Qh(i.iat)),expirationTime:Yo(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function Np(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=WE(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hy(t){const e=Np(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&lC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ta(t,qu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?mI(i.providerUserInfo):[],o=hC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new rf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function cC(t){const e=ht(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function dC(t,e){const n=await fI(t,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await pI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&qs(t.emulatorConfig.host)&&(u.credentials="include"),dI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fC(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Hy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ps;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Wn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new uC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aC(this,e)}reload(){return cC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Ta(this,oC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:k,stsTokenManager:D}=n;Q(p&&D,e,"internal-error");const L=ps.fromJSON(this.name,D);Q(typeof p=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof w=="boolean",e,"internal-error"),Wn(s,e.name),Wn(o,e.name),Wn(l,e.name),Wn(u,e.name),Wn(c,e.name),Wn(d,e.name);const A=new Qt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:L,createdAt:c,lastLoginAt:d});return k&&Array.isArray(k)&&(A.providerData=k.map(v=>({...v}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new ps;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ku(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ps;l.updateFromIdToken(r);const u=new Qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Gy=new Map;function Tn(t){Dn(t instanceof Function,"Expected a class definition");let e=Gy.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gy.set(t,e),e)}/**
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
 */class gI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gI.type="NONE";const Qy=gI;/**
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
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await qu(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(Tn(Qy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tn(Qy);const o=nu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await qu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Qt._fromGetAccountInfoResponse(e,m,d)}else p=Qt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ms(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ms(s,e,r))}}/**
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
 */function Yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(II(e))return"Blackberry";if(TI(e))return"Webos";if(_I(e))return"Safari";if((e.includes("chrome/")||vI(e))&&!e.includes("edge/"))return"Chrome";if(EI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yI(t=Ue()){return/firefox\//i.test(t)}function _I(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vI(t=Ue()){return/crios\//i.test(t)}function wI(t=Ue()){return/iemobile/i.test(t)}function EI(t=Ue()){return/android/i.test(t)}function II(t=Ue()){return/blackberry/i.test(t)}function TI(t=Ue()){return/webos/i.test(t)}function Dp(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pC(t=Ue()){var e;return Dp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mC(){return NP()&&document.documentMode===10}function SI(t=Ue()){return Dp(t)||EI(t)||TI(t)||II(t)||/windows phone/i.test(t)||wI(t)}/**
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
 */function AI(t,e=[]){let n;switch(t){case"Browser":n=Yy(Ue());break;case"Worker":n=`${Yy(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
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
 */class gC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yC(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
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
 */const _C=6;class vC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_C,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class wC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new gC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qu(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Pn(this));const n=e?ht(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yC(this),n=new vC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&QR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ki(t){return ht(t)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=MP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EC(t){kc=t}function PI(t){return kc.loadJS(t)}function IC(){return kc.recaptchaEnterpriseScript}function TC(){return kc.gapiScript}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class AC{constructor(){this.enterprise=new PC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const RC="recaptcha-enterprise",RI="NO_RECAPTCHA";class CC{constructor(e){this.type=RC,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{sC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new iC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Wy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(RI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new AC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Wy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=IC();u.length!==0&&(u+=l),PI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Jy(t,e,n,r=!1,i=!1){const s=new CC(t);let o;if(i)o=RI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function kC(t,e){const n=Cp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mi(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NC(t,e,n){const r=ki(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=CI(e),{host:o,port:l}=DC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(mi(c,r.config.emulator)&&mi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,qs(o)?(XE(`${s}//${o}${u}`),JE("Auth",!0)):bC()}function CI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DC(t){const e=CI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zy(o)}}}function Zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function VC(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OC(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
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
 */async function LC(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function MC(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
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
 */class Sa extends bp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,n,"signInWithPassword",OC);case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,r,"signUpPassword",VC);case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
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
 */const FC="http://localhost";class yi extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:FC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ka(n)}return e}}/**
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
 */function UC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jC(t){const e=bo(Vo(t)).link,n=e?bo(Vo(e)).deep_link_id:null,r=bo(Vo(t)).deep_link_id;return(r?bo(Vo(r)).link:null)||r||n||e||t}class Vp{constructor(e){const n=bo(Vo(e)),r=n.apiKey??null,i=n.oobCode??null,s=UC(n.mode??null);Q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=jC(e);try{return new Vp(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vp.parseLink(n);return Q(r,"argument-error"),Sa._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends kI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends Ga{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends Ga{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function BC(t,e){return Ha(t,"POST","/v1/accounts:signUp",br(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=e_(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e_(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wu extends Ln{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wu(e,n,r,i)}}function xI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,s,e,r):s})}async function zC(t,e,n=!1){const r=await Ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function $C(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await Ta(t,xI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Np(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
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
 */async function NI(t,e,n=!1){if(Vt(t.app))return Promise.reject(Pn(t));const r="signIn",i=await xI(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qC(t,e){return NI(ki(t),e)}/**
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
 */async function DI(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KC(t,e,n){if(Vt(t.app))return Promise.reject(Pn(t));const r=ki(t),o=await sf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&DI(t),u}),l=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function WC(t,e,n){return Vt(t.app)?Promise.reject(Pn(t)):qC(ht(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DI(t),r})}function HC(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function GC(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function QC(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function YC(t){return ht(t).signOut()}const Hu="__sak";/**
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
 */class bI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XC=1e3,JC=10;class VI extends bI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VI.type="LOCAL";const ZC=VI;/**
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
 */class OI extends bI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OI.type="SESSION";const LI=OI;/**
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
 */function ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await ek(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
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
 */function Op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Op("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function nk(t){dn().location.href=t}/**
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
 */function MI(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ik(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function sk(){return MI()?self:null}/**
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
 */const FI="firebaseLocalStorageDb",ok=1,Gu="firebaseLocalStorage",UI="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nc(t,e){return t.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function ak(){const t=indexedDB.deleteDatabase(FI);return new Qa(t).toPromise()}function of(){const t=indexedDB.open(FI,ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gu,{keyPath:UI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gu)?e(r):(r.close(),await ak(),e(await of()))})})}async function t_(t,e,n){const r=Nc(t,!0).put({[UI]:e,value:n});return new Qa(r).toPromise()}async function lk(t,e){const n=Nc(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=Nc(t,!0).delete(e);return new Qa(n).toPromise()}const uk=800,ck=3;class jI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ck)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rk(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await t_(e,Hu,"1"),await n_(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nc(i,!1).getAll();return new Qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jI.type="LOCAL";const hk=jI;new Wa(3e4,6e4);/**
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
 */function dk(t,e){return e?Tn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lp extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fk(t){return NI(t.auth,new Lp(t),t.bypassAuthState)}function pk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),$C(n,new Lp(t),t.bypassAuthState)}async function mk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),zC(n,new Lp(t),t.bypassAuthState)}/**
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
 */class BI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:Zt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gk=new Wa(2e3,1e4);class as extends BI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gk.get())};e()}}as.currentPopupAction=null;/**
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
 */const yk="pendingRedirect",ru=new Map;class _k extends BI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await vk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vk(t,e){const n=Ik(e),r=Ek(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wk(t,e){ru.set(t._key(),e)}function Ek(t){return Tn(t._redirectPersistence)}function Ik(t){return nu(yk,t.config.apiKey,t.name)}async function Tk(t,e,n=!1){if(Vt(t.app))return Promise.reject(Pn(t));const r=ki(t),i=dk(r,e),o=await new _k(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sk=10*60*1e3;class Ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zI(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zI(t);default:return!1}}/**
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
 */async function Rk(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
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
 */const Ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kk=/^https?/;async function xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rk(t);for(const n of e)try{if(Nk(n))return}catch{}Zt(t,"unauthorized-domain")}function Nk(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kk.test(n))return!1;if(Ck.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Dk=new Wa(3e4,6e4);function i_(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bk(t){return new Promise((e,n)=>{var i,s,o;function r(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n(hn(t,"network-request-failed"))},timeout:Dk.get()})}if((s=(i=dn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=SC("iframefcb");return dn()[l]=()=>{gapi.load?r():n(hn(t,"network-request-failed"))},PI(`${TC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw iu=null,e})}let iu=null;function Vk(t){return iu=iu||bk(t),iu}/**
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
 */const Ok=new Wa(5e3,15e3),Lk="__/auth/iframe",Mk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xp(e,Mk):`https://${t.config.authDomain}/${Lk}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=Uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ka(r).slice(1)}`}async function Bk(t){const e=await Vk(t),n=dn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=dn().setTimeout(()=>{s(o)},Ok.get());function u(){dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const zk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$k=500,qk=600,Kk="_blank",Wk="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hk(t,e,n,r=$k,i=qk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...zk,width:r.toString(),height:i.toString(),top:s,left:o},c=Ue().toLowerCase();n&&(l=vI(c)?Kk:n),yI(c)&&(e=e||Wk,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(pC(c)&&l!=="_self")return Gk(e||"",l),new s_(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new s_(p)}function Gk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qk="__/auth/handler",Yk="emulator/auth/handler",Xk=encodeURIComponent("fac");async function o_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof kI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ga){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Xk}=${encodeURIComponent(u)}`:"";return`${Jk(t)}?${Ka(l).slice(1)}${c}`}function Jk({config:t}){return t.emulator?xp(t,Yk):`https://${t.authDomain}/${Qk}`}/**
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
 */const Yh="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LI,this._completeRedirectFn=Tk,this._overrideRedirectResult=wk}async _openPopup(e,n,r,i){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await o_(e,n,r,nf(),i);return Hk(e,s,Op())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o_(e,n,r,nf(),i);return nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Bk(e),r=new Ak(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yh,{type:Yh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Yh];s!==void 0&&n(!!s),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SI()||_I()||Dp()}}const ex=Zk;var a_="@firebase/auth",l_="1.12.0";/**
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
 */class tx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rx(t){Rs(new gi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AI(t)},c=new wC(r,i,s,u);return xC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new gi("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new tx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(a_,l_,nx(t)),_r(a_,l_,"esm2020")}/**
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
 */const ix=5*60,sx=YE("authIdTokenMaxAge")||ix;let u_=null;const ox=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sx)return;const i=n==null?void 0:n.token;u_!==i&&(u_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ax(t=oI()){const e=Cp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kC(t,{popupRedirectResolver:ex,persistence:[hk,ZC,LI]}),r=YE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ox(s.toString());GC(n,o,()=>o(n.currentUser)),HC(n,l=>o(l))}}const i=GE("auth");return i&&NC(n,`http://${i}`),n}function lx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}EC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rx("Browser");var ux="firebase",cx="12.7.0";/**
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
 */_r(ux,cx,"app");var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,$I;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.F=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.D=function(S,P,x){for(var I=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)I[Ke-2]=arguments[Ke];return y.prototype[P].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,E){E||(E=0);const S=Array(16);if(typeof y=="string")for(var P=0;P<16;++P)S[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;P<16;++P)S[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],P=_.g[2];let x=_.g[3],I;I=y+(x^E&(P^x))+S[0]+3614090360&4294967295,y=E+(I<<7&4294967295|I>>>25),I=x+(P^y&(E^P))+S[1]+3905402710&4294967295,x=y+(I<<12&4294967295|I>>>20),I=P+(E^x&(y^E))+S[2]+606105819&4294967295,P=x+(I<<17&4294967295|I>>>15),I=E+(y^P&(x^y))+S[3]+3250441966&4294967295,E=P+(I<<22&4294967295|I>>>10),I=y+(x^E&(P^x))+S[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=x+(P^y&(E^P))+S[5]+1200080426&4294967295,x=y+(I<<12&4294967295|I>>>20),I=P+(E^x&(y^E))+S[6]+2821735955&4294967295,P=x+(I<<17&4294967295|I>>>15),I=E+(y^P&(x^y))+S[7]+4249261313&4294967295,E=P+(I<<22&4294967295|I>>>10),I=y+(x^E&(P^x))+S[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=x+(P^y&(E^P))+S[9]+2336552879&4294967295,x=y+(I<<12&4294967295|I>>>20),I=P+(E^x&(y^E))+S[10]+4294925233&4294967295,P=x+(I<<17&4294967295|I>>>15),I=E+(y^P&(x^y))+S[11]+2304563134&4294967295,E=P+(I<<22&4294967295|I>>>10),I=y+(x^E&(P^x))+S[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=x+(P^y&(E^P))+S[13]+4254626195&4294967295,x=y+(I<<12&4294967295|I>>>20),I=P+(E^x&(y^E))+S[14]+2792965006&4294967295,P=x+(I<<17&4294967295|I>>>15),I=E+(y^P&(x^y))+S[15]+1236535329&4294967295,E=P+(I<<22&4294967295|I>>>10),I=y+(P^x&(E^P))+S[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=x+(E^P&(y^E))+S[6]+3225465664&4294967295,x=y+(I<<9&4294967295|I>>>23),I=P+(y^E&(x^y))+S[11]+643717713&4294967295,P=x+(I<<14&4294967295|I>>>18),I=E+(x^y&(P^x))+S[0]+3921069994&4294967295,E=P+(I<<20&4294967295|I>>>12),I=y+(P^x&(E^P))+S[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=x+(E^P&(y^E))+S[10]+38016083&4294967295,x=y+(I<<9&4294967295|I>>>23),I=P+(y^E&(x^y))+S[15]+3634488961&4294967295,P=x+(I<<14&4294967295|I>>>18),I=E+(x^y&(P^x))+S[4]+3889429448&4294967295,E=P+(I<<20&4294967295|I>>>12),I=y+(P^x&(E^P))+S[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=x+(E^P&(y^E))+S[14]+3275163606&4294967295,x=y+(I<<9&4294967295|I>>>23),I=P+(y^E&(x^y))+S[3]+4107603335&4294967295,P=x+(I<<14&4294967295|I>>>18),I=E+(x^y&(P^x))+S[8]+1163531501&4294967295,E=P+(I<<20&4294967295|I>>>12),I=y+(P^x&(E^P))+S[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=x+(E^P&(y^E))+S[2]+4243563512&4294967295,x=y+(I<<9&4294967295|I>>>23),I=P+(y^E&(x^y))+S[7]+1735328473&4294967295,P=x+(I<<14&4294967295|I>>>18),I=E+(x^y&(P^x))+S[12]+2368359562&4294967295,E=P+(I<<20&4294967295|I>>>12),I=y+(E^P^x)+S[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=x+(y^E^P)+S[8]+2272392833&4294967295,x=y+(I<<11&4294967295|I>>>21),I=P+(x^y^E)+S[11]+1839030562&4294967295,P=x+(I<<16&4294967295|I>>>16),I=E+(P^x^y)+S[14]+4259657740&4294967295,E=P+(I<<23&4294967295|I>>>9),I=y+(E^P^x)+S[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=x+(y^E^P)+S[4]+1272893353&4294967295,x=y+(I<<11&4294967295|I>>>21),I=P+(x^y^E)+S[7]+4139469664&4294967295,P=x+(I<<16&4294967295|I>>>16),I=E+(P^x^y)+S[10]+3200236656&4294967295,E=P+(I<<23&4294967295|I>>>9),I=y+(E^P^x)+S[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=x+(y^E^P)+S[0]+3936430074&4294967295,x=y+(I<<11&4294967295|I>>>21),I=P+(x^y^E)+S[3]+3572445317&4294967295,P=x+(I<<16&4294967295|I>>>16),I=E+(P^x^y)+S[6]+76029189&4294967295,E=P+(I<<23&4294967295|I>>>9),I=y+(E^P^x)+S[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=x+(y^E^P)+S[12]+3873151461&4294967295,x=y+(I<<11&4294967295|I>>>21),I=P+(x^y^E)+S[15]+530742520&4294967295,P=x+(I<<16&4294967295|I>>>16),I=E+(P^x^y)+S[2]+3299628645&4294967295,E=P+(I<<23&4294967295|I>>>9),I=y+(P^(E|~x))+S[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=x+(E^(y|~P))+S[7]+1126891415&4294967295,x=y+(I<<10&4294967295|I>>>22),I=P+(y^(x|~E))+S[14]+2878612391&4294967295,P=x+(I<<15&4294967295|I>>>17),I=E+(x^(P|~y))+S[5]+4237533241&4294967295,E=P+(I<<21&4294967295|I>>>11),I=y+(P^(E|~x))+S[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=x+(E^(y|~P))+S[3]+2399980690&4294967295,x=y+(I<<10&4294967295|I>>>22),I=P+(y^(x|~E))+S[10]+4293915773&4294967295,P=x+(I<<15&4294967295|I>>>17),I=E+(x^(P|~y))+S[1]+2240044497&4294967295,E=P+(I<<21&4294967295|I>>>11),I=y+(P^(E|~x))+S[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=x+(E^(y|~P))+S[15]+4264355552&4294967295,x=y+(I<<10&4294967295|I>>>22),I=P+(y^(x|~E))+S[6]+2734768916&4294967295,P=x+(I<<15&4294967295|I>>>17),I=E+(x^(P|~y))+S[13]+1309151649&4294967295,E=P+(I<<21&4294967295|I>>>11),I=y+(P^(E|~x))+S[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=x+(E^(y|~P))+S[11]+3174756917&4294967295,x=y+(I<<10&4294967295|I>>>22),I=P+(y^(x|~E))+S[2]+718787259&4294967295,P=x+(I<<15&4294967295|I>>>17),I=E+(x^(P|~y))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+P&4294967295,_.g[3]=_.g[3]+x&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const E=y-this.blockSize,S=this.C;let P=this.h,x=0;for(;x<y;){if(P==0)for(;x<=E;)i(this,_,x),x+=this.blockSize;if(typeof _=="string"){for(;x<y;)if(S[P++]=_.charCodeAt(x++),P==this.blockSize){i(this,S),P=0;break}}else for(;x<y;)if(S[P++]=_[x++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var E=_.length-8;E<_.length;++E)_[E]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,E=0;E<4;++E)for(let S=0;S<32;S+=8)_[y++]=this.g[E]>>>S&255;return _};function s(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;const E=[];let S=!0;for(let P=_.length-1;P>=0;P--){const x=_[P]|0;S&&x==y||(E[P]=x,S=!1)}this.g=E}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return L(c(-_));const y=[];let E=1;for(let S=0;_>=E;S++)y[S]=_/E|0,E*=4294967296;return new o(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(d(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let S=p;for(let x=0;x<_.length;x+=8){var P=Math.min(8,_.length-x);const I=parseInt(_.substring(x,x+P),y);P<8?(P=c(Math.pow(y,P)),S=S.j(P).add(c(I))):(S=S.j(E),S=S.add(c(I)))}return S}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();let _=0,y=1;for(let E=0;E<this.g.length;E++){const S=this.i(E);_+=(S>=0?S:4294967296+S)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(D(this))return"-"+L(this).toString(_);const y=c(Math.pow(_,6));var E=this;let S="";for(;;){const P=V(E,y).g;E=A(E,P.j(y));let x=((E.g.length>0?E.g[0]:E.h)>>>0).toString(_);if(E=P,k(E))return x+S;for(;x.length<6;)x="0"+x;S=x+S}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=A(this,_),D(_)?-1:k(_)?0:1};function L(_){const y=_.g.length,E=[];for(let S=0;S<y;S++)E[S]=~_.g[S];return new o(E,~_.h).add(m)}t.abs=function(){return D(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),E=[];let S=0;for(let P=0;P<=y;P++){let x=S+(this.i(P)&65535)+(_.i(P)&65535),I=(x>>>16)+(this.i(P)>>>16)+(_.i(P)>>>16);S=I>>>16,x&=65535,I&=65535,E[P]=I<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function A(_,y){return _.add(L(y))}t.j=function(_){if(k(this)||k(_))return p;if(D(this))return D(_)?L(this).j(L(_)):L(L(this).j(_));if(D(_))return L(this.j(L(_)));if(this.l(w)<0&&_.l(w)<0)return c(this.m()*_.m());const y=this.g.length+_.g.length,E=[];for(var S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(let P=0;P<_.g.length;P++){const x=this.i(S)>>>16,I=this.i(S)&65535,Ke=_.i(P)>>>16,yn=_.i(P)&65535;E[2*S+2*P]+=I*yn,v(E,2*S+2*P),E[2*S+2*P+1]+=x*yn,v(E,2*S+2*P+1),E[2*S+2*P+1]+=I*Ke,v(E,2*S+2*P+1),E[2*S+2*P+2]+=x*Ke,v(E,2*S+2*P+2)}for(_=0;_<y;_++)E[_]=E[2*_+1]<<16|E[2*_];for(_=y;_<2*y;_++)E[_]=0;return new o(E,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function T(_,y){this.g=_,this.h=y}function V(_,y){if(k(y))throw Error("division by zero");if(k(_))return new T(p,p);if(D(_))return y=V(L(_),y),new T(L(y.g),L(y.h));if(D(y))return y=V(_,L(y)),new T(L(y.g),y.h);if(_.g.length>30){if(D(_)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;S.l(_)<=0;)E=M(E),S=M(S);var P=F(E,1),x=F(S,1);for(S=F(S,2),E=F(E,2);!k(S);){var I=x.add(S);I.l(_)<=0&&(P=P.add(E),x=I),S=F(S,1),E=F(E,1)}return y=A(_,P.j(y)),new T(P,y)}for(P=p;_.l(y)>=0;){for(E=Math.max(1,Math.floor(_.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),x=c(E),I=x.j(y);D(I)||I.l(_)>0;)E-=S,x=c(E),I=x.j(y);k(x)&&(x=m),P=P.add(x),_=A(_,I)}return new T(P,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)&_.i(S);return new o(E,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)|_.i(S);return new o(E,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)^_.i(S);return new o(E,this.h^_.h)};function M(_){const y=_.g.length+1,E=[];for(let S=0;S<y;S++)E[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(E,_.h)}function F(_,y){const E=y>>5;y%=32;const S=_.g.length-E,P=[];for(let x=0;x<S;x++)P[x]=y>0?_.i(x+E)>>>y|_.i(x+E+1)<<32-y:_.i(x+E);return new o(P,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$I=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,vr=o}).apply(typeof c_<"u"?c_:typeof self<"u"?self:typeof window<"u"?window:{});var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qI,Oo,KI,su,af,WI,HI,GI;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ol=="object"&&Ol];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,N,b){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return h.prototype[N].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const b=N.length||0;a.length=f+b;for(let z=0;z<b;z++)a[f+z]=N[z]}else a.push(N)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){o.setTimeout(()=>{throw a},0)}function A(){var a=_;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const g=T.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new D(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,_=new v,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=A();){try{a.h.call(a.g)}catch(f){L(f)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ke(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ke,P),Ke.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(Math.random()*1e6|0),Xs=0;function Js(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++Xs,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _e(a){const h={};for(const f in a)h[f]=a[f];return h}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mr(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let b=0;b<ke.length;b++)f=ke[b],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Nt(a){this.src=a,this.g={},this.h=0}Nt.prototype.add=function(a,h,f,g,N){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=$t(a,h,g,N);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Js(h,this.src,b,!!g,N),h.fa=f,a.push(h)),h};function Fr(a,h){const f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),b;(b=N>=0)&&Array.prototype.splice.call(g,N,1),b&&(q(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function $t(a,h,f,g){for(let N=0;N<a.length;++N){const b=a[N];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==g)return N}return-1}var Fn="closure_lm_"+(Math.random()*1e6|0),Xc={};function Rm(a,h,f,g,N){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Rm(a,h[b],f,g,N);return null}return f=xm(f),a&&a[yn]?a.J(h,f,l(g)?!!g.capture:!1,N):dS(a,h,f,!1,g,N)}function dS(a,h,f,g,N,b){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let ee=Zc(a);if(ee||(a[Fn]=ee=new Nt(a)),f=ee.add(h,f,g,z,b),f.proxy)return f;if(g=fS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)x||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(km(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function fS(){function a(f){return h.call(a.src,a.listener,f)}const h=pS;return a}function Cm(a,h,f,g,N){if(Array.isArray(h))for(var b=0;b<h.length;b++)Cm(a,h[b],f,g,N);else g=l(g)?!!g.capture:!!g,f=xm(f),a&&a[yn]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],f=$t(h,f,g,N),f>-1&&(q(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Zc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$t(h,f,g,N)),(f=a>-1?h[a]:null)&&Jc(f))}function Jc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yn])Fr(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(km(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Zc(h))?(Fr(f,a),f.h==0&&(f.src=null,h[Fn]=null)):q(a)}}}function km(a){return a in Xc?Xc[a]:Xc[a]="on"+a}function pS(a,h){if(a.da)a=!0;else{h=new Ke(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Jc(a),a=f.call(g,h)}return a}function Zc(a){return a=a[Fn],a instanceof Nt?a:null}var eh="__closure_events_fn_"+(Math.random()*1e9>>>0);function xm(a){return typeof a=="function"?a:(a[eh]||(a[eh]=function(h){return a.handleEvent(h)}),a[eh])}function Xe(){S.call(this),this.i=new Nt(this),this.M=this,this.G=null}p(Xe,S),Xe.prototype[yn]=!0,Xe.prototype.removeEventListener=function(a,h,f,g){Cm(this,a,h,f,g)};function st(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var N=h;h=new P(g,a),Mr(h,N)}N=!0;let b,z;if(f)for(z=f.length-1;z>=0;z--)b=h.g=f[z],N=sl(b,g,!0,h)&&N;if(b=h.g=a,N=sl(b,g,!0,h)&&N,N=sl(b,g,!1,h)&&N,f)for(z=0;z<f.length;z++)b=h.g=f[z],N=sl(b,g,!1,h)&&N}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)q(f[g]);delete a.g[h],a.h--}}this.G=null},Xe.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Xe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function sl(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let b=0;b<h.length;++b){const z=h[b];if(z&&!z.da&&z.capture==f){const ee=z.listener,Le=z.ha||z.src;z.fa&&Fr(a.i,z),N=ee.call(Le,g)!==!1&&N}}return N&&!g.defaultPrevented}function mS(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Nm(a){a.g=mS(()=>{a.g=null,a.i&&(a.i=!1,Nm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class gS extends S{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Nm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(a){S.call(this),this.h=a,this.g={}}p(Zs,S);var Dm=[];function bm(a){Y(a.g,function(h,f){this.g.hasOwnProperty(f)&&Jc(h)},a),a.g={}}Zs.prototype.N=function(){Zs.Z.N.call(this),bm(this)},Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var th=o.JSON.stringify,yS=o.JSON.parse,_S=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vm(){}function Om(){}var eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nh(){P.call(this,"d")}p(nh,P);function rh(){P.call(this,"c")}p(rh,P);var Ur={},Lm=null;function ol(){return Lm=Lm||new Xe}Ur.Ia="serverreachability";function Mm(a){P.call(this,Ur.Ia,a)}p(Mm,P);function to(a){const h=ol();st(h,new Mm(h))}Ur.STAT_EVENT="statevent";function Fm(a,h){P.call(this,Ur.STAT_EVENT,a),this.stat=h}p(Fm,P);function ot(a){const h=ol();st(h,new Fm(h,a))}Ur.Ja="timingevent";function Um(a,h){P.call(this,Ur.Ja,a),this.size=h}p(Um,P);function no(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ro(){this.g=!0}ro.prototype.ua=function(){this.g=!1};function vS(a,h,f,g,N,b){a.info(function(){if(a.g)if(b){var z="",ee=b.split("&");for(let fe=0;fe<ee.length;fe++){var Le=ee[fe].split("=");if(Le.length>1){const Be=Le[0];Le=Le[1];const tn=Be.split("_");z=tn.length>=2&&tn[1]=="type"?z+(Be+"="+Le+"&"):z+(Be+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+z})}function wS(a,h,f,g,N,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+b+" "+z})}function Vi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+IS(a,f)+(g?" "+g:"")})}function ES(a,h){a.info(function(){return"TIMEOUT: "+h})}ro.prototype.info=function(){};function IS(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return th(b)}catch{return h}}var al={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Bm;function ih(){}p(ih,Vm),ih.prototype.g=function(){return new XMLHttpRequest},Bm=new ih;function io(a){return encodeURIComponent(String(a))}function TS(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Un(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new Zs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zm}function zm(){this.i=null,this.g="",this.h=!1}var $m={},sh={};function oh(a,h,f){a.M=1,a.A=ul(en(h)),a.u=f,a.R=!0,qm(a,null)}function qm(a,h){a.F=Date.now(),ll(a),a.B=en(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),rg(f.i,"t",g),a.C=0,f=a.j.L,a.h=new zm,a.g=Eg(a.j,f?h:null,!a.u),a.P>0&&(a.O=new gS(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Dm[0]=N.toString()),N=Dm);for(let b=0;b<N.length;b++){const z=Rm(f,N[b],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?_e(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),to(),vS(a.i,a.v,a.B,a.l,a.S,a.u)}Un.prototype.ba=function(a){a=a.target;const h=this.O;h&&zn(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ee=zn(this.g),Le=this.g.ya(),fe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||cg(this.g)))){this.K||ee!=4||Le==7||(Le==8||fe<=0?to(3):to(2)),ah(this);var h=this.g.ca();this.X=h;var f=SS(this);if(this.o=h==200,wS(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var b=g;break t}}b=null}if(a=b)Vi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lh(this,a);else{this.o=!1,this.m=3,ot(12),jr(this),so(this);break e}}if(this.R){a=!0;let Be;for(;!this.K&&this.C<f.length;)if(Be=AS(this,f),Be==sh){ee==4&&(this.m=4,ot(14),a=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==$m){this.m=4,ot(15),Vi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Vi(this.i,this.l,Be,null),lh(this,Be);if(Km(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)Vi(this.i,this.l,f,"[Invalid Chunked Response]"),jr(this),so(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),gh(z),z.P=!0,ot(11))}}else Vi(this.i,this.l,f,null),lh(this,f);ee==4&&jr(this),this.o&&!this.K&&(ee==4?yg(this.j,this):(this.o=!1,ll(this)))}else US(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),jr(this),so(this)}}}catch{}finally{}};function SS(a){if(!Km(a))return a.g.la();const h=cg(a.g);if(h==="")return"";let f="";const g=h.length,N=zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jr(a),so(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,f+=a.h.i.decode(h[b],{stream:!(N&&b==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Km(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function AS(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?sh:(f=Number(h.substring(f,g)),isNaN(f)?$m:(g+=1,g+f>h.length?sh:(h=h.slice(g,g+f),a.C=g+f,h)))}Un.prototype.cancel=function(){this.K=!0,jr(this)};function ll(a){a.T=Date.now()+a.H,Wm(a,a.H)}function Wm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=no(c(a.aa,a),h)}function ah(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Un.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ES(this.i,this.B),this.M!=2&&(to(),ot(17)),jr(this),this.m=2,so(this)):Wm(this,this.T-a)};function so(a){a.j.I==0||a.K||yg(a.j,a)}function jr(a){ah(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,bm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function lh(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||uh(f.h,a))){if(!a.L&&uh(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)pl(f),dl(f);else break e;mh(f),ot(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=no(c(f.Va,f),6e3));Qm(f.h)<=1&&f.ta&&(f.ta=void 0)}else zr(f,11)}else if((a.L||f.g==a)&&pl(f),!I(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let fe=N[h];const Be=fe[0];if(!(Be<=f.K))if(f.K=Be,fe=fe[1],f.I==2)if(fe[0]=="c"){f.M=fe[1],f.ba=fe[2];const tn=fe[3];tn!=null&&(f.ka=tn,f.j.info("VER="+f.ka));const $r=fe[4];$r!=null&&(f.za=$r,f.j.info("SVER="+f.za));const $n=fe[5];$n!=null&&typeof $n=="number"&&$n>0&&(g=1.5*$n,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const qn=a.g;if(qn){const gl=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var b=g.h;b.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ch(b,b.h),b.h=null))}if(g.G){const yh=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;yh&&(g.wa=yh,me(g.J,g.G,yh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=wg(g,g.L?g.ba:null,g.W),z.L){Ym(g.h,z);var ee=z,Le=g.O;Le&&(ee.H=Le),ee.D&&(ah(ee),ll(ee)),g.g=z}else mg(g);f.i.length>0&&fl(f)}else fe[0]!="stop"&&fe[0]!="close"||zr(f,7);else f.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?zr(f,7):ph(f):fe[0]!="noop"&&f.l&&f.l.qa(fe),f.A=0)}}to(4)}catch{}}var PS=class{constructor(a,h){this.g=a,this.map=h}};function Hm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qm(a){return a.h?1:a.g?a.g.size:0}function uh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ch(a,h){a.g?a.g.add(h):a.h=h}function Ym(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Hm.prototype.cancel=function(){if(this.i=Xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return w(a.i)}var Jm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RS(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let N,b=null;g>=0?(N=a[f].substring(0,g),b=a[f].substring(g+1)):N=a[f],h(N,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof jn?(this.l=a.l,oo(this,a.j),this.o=a.o,this.g=a.g,ao(this,a.u),this.h=a.h,hh(this,ig(a.i)),this.m=a.m):a&&(h=String(a).match(Jm))?(this.l=!1,oo(this,h[1]||"",!0),this.o=lo(h[2]||""),this.g=lo(h[3]||"",!0),ao(this,h[4]),this.h=lo(h[5]||"",!0),hh(this,h[6]||"",!0),this.m=lo(h[7]||"")):(this.l=!1,this.i=new co(null,this.l))}jn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(uo(h,Zm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(uo(h,Zm,!0),"@"),a.push(io(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(uo(f,f.charAt(0)=="/"?xS:kS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",uo(f,DS)),a.join("")},jn.prototype.resolve=function(a){const h=en(this);let f=!!a.j;f?oo(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)ao(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const b=[];for(let z=0;z<N.length;){const ee=N[z++];ee=="."?g&&z==N.length&&b.push(""):ee==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&z==N.length&&b.push("")):(b.push(ee),g=!0)}g=b.join("/")}else g=N}return f?h.h=g:f=a.i.toString()!=="",f?hh(h,ig(a.i)):f=!!a.m,f&&(h.m=a.m),h};function en(a){return new jn(a)}function oo(a,h,f){a.j=f?lo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ao(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function hh(a,h,f){h instanceof co?(a.i=h,bS(a.i,a.l)):(f||(h=uo(h,NS)),a.i=new co(h,a.l))}function me(a,h,f){a.i.set(h,f)}function ul(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function lo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function uo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,CS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function CS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zm=/[#\/\?@]/g,kS=/[#\?:]/g,xS=/[#\?]/g,NS=/[#\?@]/g,DS=/#/g;function co(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&RS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=co.prototype,t.add=function(a,h){Br(this),this.i=null,a=Oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function eg(a,h){Br(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function tg(a,h){return Br(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)};function ng(a,h){Br(a);let f=[];if(typeof h=="string")tg(a,h)&&(f=f.concat(a.g.get(Oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Br(this),this.i=null,a=Oi(this,a),tg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ng(this,a),a.length>0?String(a[0]):h):h};function rg(a,h,f){eg(a,h),f.length>0&&(a.i=null,a.g.set(Oi(a,h),w(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const N=io(f);f=ng(this,f);for(let b=0;b<f.length;b++){let z=N;f[b]!==""&&(z+="="+io(f[b])),a.push(z)}}return this.i=a.join("&")};function ig(a){const h=new co;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bS(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(eg(this,g),rg(this,N,f))},a)),a.j=h}function VS(a,h){const f=new ro;if(o.Image){const g=new Image;g.onload=d(Bn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Bn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Bn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Bn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function OS(a,h){const f=new ro,g=new AbortController,N=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(N),b.ok?Bn(f,"TestPingServer: ok",!0,h):Bn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Bn(f,"TestPingServer: error",!1,h)})}function Bn(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function LS(){this.g=new _S}function dh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(dh,Vm),dh.prototype.g=function(){return new cl(this.i,this.h)};function cl(a,h){Xe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(cl,Xe),t=cl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,fo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ho(this):fo(this),this.readyState==3&&sg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ho(this))},t.Na=function(a){this.g&&(this.response=a,ho(this))},t.ga=function(){this.g&&ho(this)};function ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,fo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function fo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function og(a){let h="";return Y(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function fh(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=og(f),typeof a=="string"?f!=null&&io(f):me(a,h,f))}function Pe(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Pe,Xe);var MS=/^https?$/i,FS=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){ag(this,b);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())f.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(FS,h,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){ag(this,b)}};function ag(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,lg(a),hl(a)}function lg(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hl(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ug(this):this.Xa())},t.Xa=function(){ug(this)};function ug(a){if(a.h&&typeof s<"u"){if(a.v&&zn(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),zn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=b===0){let z=String(a.D).match(Jm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!MS.test(z?z.toLowerCase():"")}f=g}if(f)st(a,"complete"),st(a,"success");else{a.o=6;try{var N=zn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",lg(a)}}finally{hl(a)}}}}function hl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||st(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),yS(h)}};function cg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function US(a){const h={};a=(a.g&&zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var f=TS(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[N]||[];h[N]=b,b.push(f)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function po(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hg(a){this.za=0,this.i=[],this.j=new ro,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=po("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=po("baseRetryDelayMs",5e3,a),this.Za=po("retryDelaySeedMs",1e4,a),this.Ta=po("forwardChannelMaxRetries",2,a),this.va=po("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Hm(a&&a.concurrentRequestLimit),this.Ba=new LS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=wg(this,null,this.W),fl(this)};function ph(a){if(dg(a),a.I==3){var h=a.V++,f=en(a.J);if(me(f,"SID",a.M),me(f,"RID",h),me(f,"TYPE","terminate"),mo(a,f),h=new Un(a,a.j,h),h.M=2,h.A=ul(en(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Eg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ll(h)}vg(a)}function dl(a){a.g&&(gh(a),a.g.cancel(),a.g=null)}function dg(a){dl(a),a.v&&(o.clearTimeout(a.v),a.v=null),pl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function fl(a){if(!Gm(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),F||(M(),F=!0),_.add(h,a),a.D=0}}function jS(a,h){return Qm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=no(c(a.Ea,a,h),_g(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Un(this,this.j,a);let b=this.o;if(this.U&&(b?(b=_e(b),Mr(b,this.U)):b=this.U),this.u!==null||this.R||(N.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pg(this,N,h),f=en(this.J),me(f,"RID",a),me(f,"CVER",22),this.G&&me(f,"X-HTTP-Session-Id",this.G),mo(this,f),b&&(this.R?h="headers="+io(og(b))+"&"+h:this.u&&fh(f,this.u,b)),ch(this.h,N),this.Ra&&me(f,"TYPE","init"),this.S?(me(f,"$req",h),me(f,"SID","null"),N.U=!0,oh(N,f,null)):oh(N,f,h),this.I=2}}else this.I==3&&(a?fg(this,a):this.i.length==0||Gm(this.h)||fg(this))};function fg(a,h){var f;h?f=h.l:f=a.V++;const g=en(a.J);me(g,"SID",a.M),me(g,"RID",f),me(g,"AID",a.K),mo(a,g),a.u&&a.o&&fh(g,a.u,a.o),f=new Un(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=pg(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ch(a.h,f),oh(f,g,h)}function mo(a,h){a.H&&Y(a.H,function(f,g){me(h,g,f)}),a.l&&Y({},function(f,g){me(h,g,f)})}function pg(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let ee=-1;for(;;){const Le=["count="+f];ee==-1?f>0?(ee=N[0].g,Le.push("ofs="+ee)):ee=0:Le.push("ofs="+ee);let fe=!0;for(let Be=0;Be<f;Be++){var b=N[Be].g;const tn=N[Be].map;if(b-=ee,b<0)ee=Math.max(0,N[Be].g-100),fe=!1;else try{b="req"+b+"_"||"";try{var z=tn instanceof Map?tn:Object.entries(tn);for(const[$r,$n]of z){let qn=$n;l($n)&&(qn=th($n)),Le.push(b+$r+"="+encodeURIComponent(qn))}}catch($r){throw Le.push(b+"type="+encodeURIComponent("_badmap")),$r}}catch{g&&g(tn)}}if(fe){z=Le.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function mg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),F||(M(),F=!0),_.add(h,a),a.A=0}}function mh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=no(c(a.Da,a),_g(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=no(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),dl(this),gg(this))};function gh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gg(a){a.g=new Un(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=en(a.na);me(h,"RID","rpc"),me(h,"SID",a.M),me(h,"AID",a.K),me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(h,"TO",a.ia),me(h,"TYPE","xmlhttp"),mo(a,h),a.u&&a.o&&fh(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ul(en(h)),f.u=null,f.R=!0,qm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,dl(this),mh(this),ot(19))};function pl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function yg(a,h){var f=null;if(a.g==h){pl(a),gh(a),a.g=null;var g=2}else if(uh(a.h,h))f=h.G,Ym(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=ol(),st(g,new Um(g,f)),fl(a)}else mg(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&jS(a,h)||g==2&&mh(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function _g(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const N=!g;g=new jn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oo(g,"https"),ul(g),N?VS(g.toString(),f):OS(g.toString(),f)}else ot(2);a.I=0,a.l&&a.l.pa(h),vg(a),dg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function vg(a){if(a.I=0,a.ja=[],a.l){const h=Xm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function wg(a,h,f){var g=f instanceof jn?en(f):new jn(f);if(g.g!="")h&&(g.g=h+"."+g.g),ao(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const b=new jn(null);g&&oo(b,g),h&&(b.g=h),N&&ao(b,N),f&&(b.h=f),g=b}return f=a.G,h=a.wa,f&&h&&me(g,f,h),me(g,"VER",a.ka),mo(a,g),g}function Eg(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Pe(new dh({ab:f})):new Pe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ig(){}t=Ig.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ml(){}ml.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Xe.call(this),this.g=new hg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Li(this)}p(wt,Xe),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ph(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=th(a),a=f);h.i.push(new PS(h.Ya++,a)),h.I==3&&fl(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,ph(this.g),delete this.g,wt.Z.N.call(this)};function Tg(a){nh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Tg,nh);function Sg(){rh.call(this),this.status=1}p(Sg,rh);function Li(a){this.g=a}p(Li,Ig),Li.prototype.ra=function(){st(this.g,"a")},Li.prototype.qa=function(a){st(this.g,new Tg(a))},Li.prototype.pa=function(a){st(this.g,new Sg)},Li.prototype.oa=function(){st(this.g,"b")},ml.prototype.createWebChannel=ml.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,GI=function(){return new ml},HI=function(){return ol()},WI=Ur,af={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},al.NO_ERROR=0,al.TIMEOUT=8,al.HTTP_ERROR=6,su=al,jm.COMPLETE="complete",KI=jm,Om.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,Oo=Om,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,qI=Pe}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});const h_="@firebase/firestore",d_="4.9.3";/**
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
 */let He=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
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
 */let Hs="12.7.0";/**
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
 */const vi=new Pp("@firebase/firestore");function qi(){return vi.logLevel}function U(t,...e){if(vi.logLevel<=re.DEBUG){const n=e.map(Mp);vi.debug(`Firestore (${Hs}): ${t}`,...n)}}function lt(t,...e){if(vi.logLevel<=re.ERROR){const n=e.map(Mp);vi.error(`Firestore (${Hs}): ${t}`,...n)}}function wi(t,...e){if(vi.logLevel<=re.WARN){const n=e.map(Mp);vi.warn(`Firestore (${Hs}): ${t}`,...n)}}function Mp(t){if(typeof t=="string")return t;try{/**
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
 */function W(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,QI(t,r,n)}function QI(t,e,n){let r=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lt(r),new Error(r)}function H(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||QI(e,i,r)}function J(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class YI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class dx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fx{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){H(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string",2055,{h:e}),new He(e)}}class px{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new px(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){H(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new f_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new f_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Fp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function lf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Xh(i)===Xh(s)?X(i,s):Xh(i)?1:-1}return X(t.length,e.length)}const _x=55296,vx=57343;function Xh(t){const e=t.charCodeAt(0);return e>=_x&&e<=vx}function Cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function XI(t){return t+"\0"}/**
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
 */const p_="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&W(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return X(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),i=sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?sn.extractNumericId(e).compare(sn.extractNumericId(n)):lf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class ae extends sn{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const wx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends sn{construct(e,n,r){return new Te(e,n,r)}static isValidIdentifier(e){return wx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===p_}static keyField(){return new Te([p_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(n)}static emptyPath(){return new Te([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ae.fromString(e))}static fromName(e){return new $(ae.fromString(e).popFirst(5))}static empty(){return new $(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ae(e.slice()))}}/**
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
 */function JI(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ex(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function m_(t){if(!$.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function g_(t){if($.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ZI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ya(t,e){if(!ZI(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const y_=-62135596800,__=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*__);return new le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<y_)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/__}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ya(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-y_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:be("string",le._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new le(0,0))}static max(){return new G(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Aa=-1;class Qu{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function uf(t){return t.fields.find(e=>e.kind===2)}function Gr(t){return t.fields.filter(e=>e.kind!==2)}Qu.UNKNOWN_ID=-1;class ou{constructor(e,n){this.fieldPath=e,this.kind=n}}class Pa{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Pa(0,Ct.min())}}function Ix(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new le(n+1,0):new le(n,r));return new Ct(i,$.empty(),e)}function eT(t){return new Ct(t.readTime,t.key,Aa)}class Ct{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ct(G.min(),$.empty(),Aa)}static max(){return new Ct(G.max(),$.empty(),Aa)}}function Up(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==tT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */const It="SimpleDb";class bc{static open(e,n,r,i){try{return new bc(n,e.transaction(i,r))}catch(s){throw new Xo(n,s)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new fn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new Xo(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=jp(r.target.error);this.S.reject(new Xo(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(It,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Sx(n)}}class wr{static delete(e){return U(It,"Removing database:",e),Yr(HE().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!nI())return!1;if(wr.F())return!0;const e=Ue(),n=wr.M(e),r=0<n&&n<10,i=rT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,wr.M(Ue())===12.2&&lt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(U(It,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Xo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xo(e,o))},i.onupgradeneeded=s=>{U(It,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{U(It,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=n=>this.q(n)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const l=bc.open(this.db,e,s?"readonly":"readwrite",r),u=i(l).next(c=>(l.C(),c)).catch(c=>(l.abort(c),C.reject(c))).toPromise();return u.catch(()=>{}),await l.D,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(U(It,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Tx{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Yr(this.U.delete())}}class Xo extends B{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Or(t){return t.name==="IndexedDbTransactionError"}class Sx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U(It,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(U(It,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yr(r)}add(e){return U(It,"ADD",this.store.name,e,e),Yr(this.store.add(e))}get(e){return Yr(this.store.get(e)).next(n=>(n===void 0&&(n=null),U(It,"GET",this.store.name,e,n),n))}delete(e){return U(It,"DELETE",this.store.name,e),Yr(this.store.delete(e))}count(){return U(It,"COUNT",this.store.name),Yr(this.store.count())}J(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new C((o,l)=>{s.onerror=u=>{l(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(l,u)=>{o.push(u)}).next(()=>o)}}Y(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new C((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Z(e,n){U(It,"DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,l)=>l.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}te(e){const n=this.cursor({});return new C((r,i)=>{n.onerror=s=>{const o=jp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}H(e,n){const r=[];return new C((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const u=new Tx(l),c=n(l.primaryKey,l.value,u);if(c instanceof C){const d=c.catch(p=>(u.done(),C.reject(p)));r.push(d)}u.isDone?i():u.G===null?l.continue():l.continue(u.G)}}).next(()=>C.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Yr(t){return new C((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=jp(r.target.error);n(i)}})}let v_=!1;function jp(t){const e=wr.M(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return v_||(v_=!0,setTimeout(()=>{throw r},0)),r}}return t}const Jo="IndexBackfiller";class Ax{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){U(Jo,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();U(Jo,`Documents written: ${n}`)}catch(n){Or(n)?U(Jo,"Ignoring IndexedDB error during index backfill: ",n):await xi(n)}await this.re(6e4)})}}class Px{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let i=n,s=!0;return C.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(Jo,`Processing collection: ${o}`),this.oe(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>n-i)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(l=>(U(Jo,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,n,l))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=eT(s);Up(o,r)>0&&(r=o)}),new Ct(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Mt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mt.ce=-1;/**
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
 */const oi=-1;function Vc(t){return t==null}function Ra(t){return t===0&&1/t==-1/0}function Rx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yu="";function rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=w_(e)),e=Cx(t.get(n),e);return w_(e)}function Cx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Yu:n+="";break;default:n+=s}}return n}function w_(t){return t+Yu+""}function an(t){const e=t.length;if(H(e>=2,64408,{path:t}),e===2)return H(t.charAt(0)===Yu&&t.charAt(1)==="",56145,{path:t}),ae.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf(Yu,s);switch((o<0||o>n)&&W(50515,{path:t}),t.charAt(o+1)){case"":const l=t.substring(s,o);let u;i.length===0?u=l:(i+=l,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:W(61167,{path:t})}s=o+2}return new ae(r)}/**
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
 */const Qr="remoteDocuments",Xa="owner",Fi="owner",Ca="mutationQueues",kx="userId",Ht="mutations",E_="batchId",ri="userMutationsIndex",I_=["userId","batchId"];/**
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
 */function au(t,e){return[t,rt(e)]}function iT(t,e,n){return[t,rt(e),n]}const xx={},ks="documentMutations",Xu="remoteDocumentsV14",Nx=["prefixPath","collectionGroup","readTime","documentId"],lu="documentKeyIndex",Dx=["prefixPath","collectionGroup","documentId"],sT="collectionGroupIndex",bx=["collectionGroup","readTime","prefixPath","documentId"],ka="remoteDocumentGlobal",cf="remoteDocumentGlobalKey",xs="targets",oT="queryTargetsIndex",Vx=["canonicalId","targetId"],Ns="targetDocuments",Ox=["targetId","path"],Bp="documentTargetsIndex",Lx=["path","targetId"],Ju="targetGlobalKey",ai="targetGlobal",xa="collectionParents",Mx=["collectionId","parent"],Ds="clientMetadata",Fx="clientId",Oc="bundles",Ux="bundleId",Lc="namedQueries",jx="name",zp="indexConfiguration",Bx="indexId",hf="collectionGroupIndex",zx="collectionGroup",Zo="indexState",$x=["indexId","uid"],aT="sequenceNumberIndex",qx=["uid","sequenceNumber"],ea="indexEntries",Kx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],lT="documentKeyIndex",Wx=["indexId","uid","orderedDocumentKey"],Mc="documentOverlays",Hx=["userId","collectionPath","documentId"],df="collectionPathOverlayIndex",Gx=["userId","collectionPath","largestBatchId"],uT="collectionGroupOverlayIndex",Qx=["userId","collectionGroup","largestBatchId"],$p="globals",Yx="name",cT=[Ca,Ht,ks,Qr,xs,Xa,ai,Ns,Ds,ka,xa,Oc,Lc],Xx=[...cT,Mc],hT=[Ca,Ht,ks,Xu,xs,Xa,ai,Ns,Ds,ka,xa,Oc,Lc,Mc],dT=hT,qp=[...dT,zp,Zo,ea],Jx=qp,fT=[...qp,$p],Zx=fT;/**
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
 */class ff extends nT{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function je(t,e){const n=J(t);return wr.O(n.le,e)}/**
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
 */function T_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new he(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ui(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new he(Te.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mT("Invalid base64 string: "+s):s}}(e);return new Oe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Oe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const eN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(H(!!t,39018),typeof t=="string"){let e=0;const n=eN.exec(t);if(H(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?Oe.fromBase64String(t):Oe.fromUint8Array(t)}/**
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
 */const gT="server_timestamp",yT="__type__",_T="__previous_value__",vT="__local_write_time__";function Kp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[yT])==null?void 0:r.stringValue)===gT}function Fc(t){const e=t.mapValue.fields[_T];return Kp(e)?Fc(e):e}function Na(t){const e=bn(t.mapValue.fields[vT].timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class tN{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Zu="(default)";class Ei{constructor(e,n){this.projectId=e,this.database=n||Zu}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Zu}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wp="__type__",wT="__max__",ar={mapValue:{fields:{__type__:{stringValue:wT}}}},Hp="__vector__",bs="value",uu={nullValue:"NULL_VALUE"};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kp(t)?4:ET(t)?9007199254740991:Uc(t)?10:11:W(28295,{value:t})}function gn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Na(t).isEqual(Na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bn(i.timestampValue),l=bn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vn(i.bytesValue).isEqual(Vn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),l=ve(s.doubleValue);return o===l?Ra(o)===Ra(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(T_(o)!==T_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gn(o[u],l[u])))return!1;return!0}(t,e);default:return W(52216,{left:t})}}function Da(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function Rr(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ve(s.integerValue||s.doubleValue),u=ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return A_(t.timestampValue,e.timestampValue);case 4:return A_(Na(t),Na(e));case 5:return lf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Vn(s),u=Vn(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=X(l[c],u[c]);if(d!==0)return d}return X(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=X(ve(s.latitude),ve(o.latitude));return l!==0?l:X(ve(s.longitude),ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return P_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,k,D;const l=s.fields||{},u=o.fields||{},c=(m=l[bs])==null?void 0:m.arrayValue,d=(w=u[bs])==null?void 0:w.arrayValue,p=X(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((D=d==null?void 0:d.values)==null?void 0:D.length)||0);return p!==0?p:P_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ar.mapValue&&o===ar.mapValue)return 0;if(s===ar.mapValue)return 1;if(o===ar.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=lf(u[p],d[p]);if(m!==0)return m;const w=Rr(l[u[p]],c[d[p]]);if(w!==0)return w}return X(u.length,d.length)}(t.mapValue,e.mapValue);default:throw W(23264,{he:n})}}function A_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=bn(t),r=bn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function P_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rr(n[i],r[i]);if(s)return s}return X(n.length,r.length)}function Vs(t){return pf(t)}function pf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pf(n.fields[o])}`;return i+"}"}(t.mapValue):W(61005,{value:t})}function cu(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(t);return e?16+cu(e):16;case 5:return 2*t.stringValue.length;case 6:return Vn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+cu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ni(r.fields,(s,o)=>{i+=s.length+cu(o)}),i}(t.mapValue);default:throw W(13486,{value:t})}}function ba(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mf(t){return!!t&&"integerValue"in t}function Va(t){return!!t&&"arrayValue"in t}function R_(t){return!!t&&"nullValue"in t}function C_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hu(t){return!!t&&"mapValue"in t}function Uc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Wp])==null?void 0:r.stringValue)===Hp}function ta(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ta(t.arrayValue.values[n]);return e}return{...t}}function ET(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wT}const IT={mapValue:{fields:{[Wp]:{stringValue:Hp},[bs]:{arrayValue:{}}}}};function nN(t){return"nullValue"in t?uu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ba(Ei.empty(),$.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Uc(t)?IT:{mapValue:{}}:W(35942,{value:t})}function rN(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ba(Ei.empty(),$.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?IT:"mapValue"in t?Uc(t)?{mapValue:{}}:ar:W(61959,{value:t})}function k_(t,e){const n=Rr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function x_(t,e){const n=Rr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ta(n)}setAll(e){let n=Te.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ta(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ta(this.value))}}function TT(t){const e=[];return Ni(t.fields,(n,r)=>{const i=new Te([n]);if(hu(r)){const s=TT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
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
 */class Ce{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ce(e,0,G.min(),G.min(),G.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ce(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Ce(e,2,n,G.min(),G.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,G.min(),G.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Os{constructor(e,n){this.position=e,this.inclusive=n}}function N_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Rr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function D_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function iN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ST{}class ie extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sN(e,n,r):n==="array-contains"?new lN(e,r):n==="in"?new xT(e,r):n==="not-in"?new uN(e,r):n==="array-contains-any"?new cN(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oN(e,r):new aN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Rr(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(Rr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ue(e,n)}matches(e){return Ls(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ls(t){return t.op==="and"}function gf(t){return t.op==="or"}function Gp(t){return AT(t)&&Ls(t)}function AT(t){for(const e of t.filters)if(e instanceof ue)return!1;return!0}function yf(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Gp(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function PT(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&PT(o,i.filters[l]),!0):!1}(t,e):void W(19439)}function RT(t,e){const n=t.filters.concat(e);return ue.create(n,t.op)}function CT(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof ue?function(n){return n.op.toString()+" {"+n.getFilters().map(CT).join(" ,")+"}"}(t):"Filter"}class sN extends ie{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class oN extends ie{constructor(e,n){super(e,"in",n),this.keys=kT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aN extends ie{constructor(e,n){super(e,"not-in",n),this.keys=kT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class lN extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Va(n)&&Da(n.arrayValue,this.value)}}class xT extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class uN extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Da(this.value.arrayValue,n)}}class cN extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Va(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class hN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function _f(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hN(t,e,n,r,i,s,o)}function Ii(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.Te=n}return e.Te}function Ja(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!D_(t.startAt,e.startAt)&&D_(t.endAt,e.endAt)}function ec(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function tc(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function b_(t,e,n){let r=uu,i=!0;for(const s of tc(t,e)){let o=uu,l=!0;switch(s.op){case"<":case"<=":o=nN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=uu}k_({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];k_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function V_(t,e,n){let r=ar,i=!0;for(const s of tc(t,e)){let o=ar,l=!0;switch(s.op){case">=":case">":o=rN(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=ar}x_({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];x_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Gs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dN(t,e,n,r,i,s,o,l){return new Gs(t,e,n,r,i,s,o,l)}function jc(t){return new Gs(t)}function O_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NT(t){return t.collectionGroup!==null}function na(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new he(Te.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Oa(s,r))}),n.has(Te.keyField().canonicalString())||e.Ie.push(new Oa(Te.keyField(),r))}return e.Ie}function jt(t){const e=J(t);return e.Ee||(e.Ee=fN(e,na(t))),e.Ee}function fN(t,e){if(t.limitType==="F")return _f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oa(i.field,s)});const n=t.endAt?new Os(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Os(t.startAt.position,t.startAt.inclusive):null;return _f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vf(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wf(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Ja(jt(t),jt(e))&&t.limitType===e.limitType}function DT(t){return`${Ii(jt(t))}|lt:${t.limitType}`}function Ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CT(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vs(i)).join(",")),`Target(${r})`}(jt(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of na(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=N_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,na(r),i)||r.endAt&&!function(o,l,u){const c=N_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,na(r),i))}(t,e)}function pN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bT(t){return(e,n)=>{let r=!1;for(const i of na(t)){const s=mN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mN(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Rr(u,c):W(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:t.dir})}}/**
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
 */class Mn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pT(this.inner)}size(){return this.innerSize}}/**
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
 */const gN=new Ee($.comparator);function St(){return gN}const VT=new Ee($.comparator);function Lo(...t){let e=VT;for(const n of t)e=e.insert(n.key,n);return e}function OT(t){let e=VT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ln(){return ra()}function LT(){return ra()}function ra(){return new Mn(t=>t.toString(),(t,e)=>t.isEqual(e))}const yN=new Ee($.comparator),_N=new he($.comparator);function te(...t){let e=_N;for(const n of t)e=e.add(n);return e}const vN=new he(X);function wN(){return vN}/**
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
 */function Qp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ra(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function EN(t,e){return Rx(e)?MT(e):Qp(t,e)}/**
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
 */class zc{constructor(){this._=void 0}}function IN(t,e,n){return t instanceof La?function(i,s){const o={fields:{[yT]:{stringValue:gT},[vT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kp(s)&&(s=Fc(s)),s&&(o.fields[_T]=s),{mapValue:o}}(n,e):t instanceof Ms?UT(t,e):t instanceof Fs?jT(t,e):function(i,s){const o=FT(i,s),l=L_(o)+L_(i.Ae);return mf(o)&&mf(i.Ae)?MT(l):Qp(i.serializer,l)}(t,e)}function TN(t,e,n){return t instanceof Ms?UT(t,e):t instanceof Fs?jT(t,e):n}function FT(t,e){return t instanceof Ma?function(r){return mf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class La extends zc{}class Ms extends zc{constructor(e){super(),this.elements=e}}function UT(t,e){const n=BT(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fs extends zc{constructor(e){super(),this.elements=e}}function jT(t,e){let n=BT(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class Ma extends zc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function L_(t){return ve(t.integerValue||t.doubleValue)}function BT(t){return Va(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class SN{constructor(e,n){this.field=e,this.transform=n}}function AN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof Fs&&i instanceof Fs?Cs(r.elements,i.elements,gn):r instanceof Ma&&i instanceof Ma?gn(r.Ae,i.Ae):r instanceof La&&i instanceof La}(t.transform,e.transform)}class PN{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $c{}function zT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yp(t.key,At.none()):new Qs(t.key,t.data,At.none());{const n=t.data,r=mt.empty();let i=new he(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Lr(t.key,r,new Ft(i.toArray()),At.none())}}function RN(t,e,n){t instanceof Qs?function(i,s,o){const l=i.value.clone(),u=F_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(i,s,o){if(!du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=F_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($T(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof Qs?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=s.value.clone(),d=U_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=U_(s.fieldTransforms,u,o),d=o.data;return d.setAll($T(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function CN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FT(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function M_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cs(r,i,(s,o)=>AN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends $c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lr extends $c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F_(t,e,n){const r=new Map;H(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,TN(o,l,n[i]))}return r}function U_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IN(s,o,e))}return r}class Yp extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qT extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xp{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=zT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>M_(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>M_(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return yN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jp(e,n,r,i)}}/**
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
 */class Zp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,se;function xN(t){switch(t){case O.OK:return W(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function KT(t){if(t===void 0)return lt("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ne.OK:return O.OK;case Ne.CANCELLED:return O.CANCELLED;case Ne.UNKNOWN:return O.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return O.INTERNAL;case Ne.UNAVAILABLE:return O.UNAVAILABLE;case Ne.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ne.NOT_FOUND:return O.NOT_FOUND;case Ne.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ne.ABORTED:return O.ABORTED;case Ne.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ne.DATA_LOSS:return O.DATA_LOSS;default:return W(39323,{code:t})}}(se=Ne||(Ne={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NN(){return new TextEncoder}/**
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
 */const DN=new vr([4294967295,4294967295],0);function j_(t){const e=NN().encode(t),n=new $I;return n.update(e),new Uint8Array(n.digest())}function B_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vr([n,r],0),new vr([i,s],0)]}class em{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=vr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(vr.fromNumber(r)));return i.compare(DN)===1&&(i=new vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=j_(e),[r,i]=B_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new em(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=j_(e),[r,i]=B_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qc(G.min(),i,new Ee(X),St(),te())}}class el{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new el(r,n,te(),te(),te())}}/**
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
 */class fu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class WT{constructor(e,n){this.targetId=e,this.Ce=n}}class HT{constructor(e,n,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class z_{constructor(){this.ve=0,this.Fe=$_(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new el(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=$_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class bN{constructor(e){this.Ge=e,this.ze=new Map,this.je=St(),this.Je=Ml(),this.He=Ml(),this.Ye=new Ee(X)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ec(s))if(r===0){const o=new $(s.path);this.et(n,o,Ce.newNoDocument(o,G.min()))}else H(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Vn(r).toUint8Array()}catch(u){if(u instanceof mT)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new em(o,i,s)}catch(u){return wi(u instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ec(l.target)){const u=new $(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ce.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=te();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new qc(e,n,this.Ye,this.je,r);return this.je=St(),this.Je=Ml(),this.He=Ml(),this.Ye=new Ee(X),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new z_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new he(X),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new he(X),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new z_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ml(){return new Ee($.comparator)}function $_(){return new Ee($.comparator)}const VN={asc:"ASCENDING",desc:"DESCENDING"},ON={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LN={and:"AND",or:"OR"};class MN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ef(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function Us(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FN(t,e){return Us(t,e.toTimestamp())}function ct(t){return H(!!t,49232),G.fromTimestamp(function(n){const r=bn(n);return new le(r.seconds,r.nanos)}(t))}function tm(t,e){return If(t,e).canonicalString()}function If(t,e){const n=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QT(t){const e=ae.fromString(t);return H(i0(e),10190,{key:e.toString()}),e}function nc(t,e){return tm(t.databaseId,e.path)}function li(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(JT(n))}function YT(t,e){return tm(t.databaseId,e)}function XT(t){const e=QT(t);return e.length===4?ae.emptyPath():JT(e)}function Tf(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JT(t){return H(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function q_(t,e,n){return{name:nc(t,e),fields:n.value.mapValue.fields}}function UN(t,e,n){const r=li(t,e.name),i=ct(e.updateTime),s=e.createTime?ct(e.createTime):G.min(),o=new mt({mapValue:{fields:e.fields}}),l=Ce.newFoundDocument(r,i,s,o);return n&&l.setHasCommittedMutations(),n?l.setHasCommittedMutations():l}function jN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(H(d===void 0||typeof d=="string",58123),Oe.fromBase64String(d||"")):(H(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Oe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?O.UNKNOWN:KT(c.code);return new B(d,c.message||"")}(o);n=new HT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=li(t,r.document.name),s=ct(r.document.updateTime),o=r.document.createTime?ct(r.document.createTime):G.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new fu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=li(t,r.document),s=r.readTime?ct(r.readTime):G.min(),o=Ce.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=li(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kN(i,s),l=r.targetId;n=new WT(l,o)}}return n}function rc(t,e){let n;if(e instanceof Qs)n={update:q_(t,e.key,e.value)};else if(e instanceof Yp)n={delete:nc(t,e.key)};else if(e instanceof Lr)n={update:q_(t,e.key,e.data),updateMask:WN(e.fieldMask)};else{if(!(e instanceof qT))return W(16599,{Vt:e.type});n={verify:nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof La)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ma)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function Sf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?At.updateTime(ct(s.updateTime)):s.exists!==void 0?At.exists(s.exists):At.none()}(e.currentDocument):At.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let u=null;if("setToServerValue"in l)H(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),u=new La;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];u=new Ms(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];u=new Fs(d)}else"increment"in l?u=new Ma(o,l.increment):W(16584,{proto:l});const c=Te.fromServerFormat(l.fieldPath);return new SN(c,u)}(t,i)):[];if(e.update){e.update.name;const i=li(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ft(c.map(d=>Te.fromServerFormat(d)))}(e.updateMask);return new Lr(i,s,o,n,r)}return new Qs(i,s,n,r)}if(e.delete){const i=li(t,e.delete);return new Yp(i,n)}if(e.verify){const i=li(t,e.verify);return new qT(i,n)}return W(1463,{proto:e})}function BN(t,e){return t&&t.length>0?(H(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?ct(i.updateTime):ct(s);return o.isEqual(G.min())&&(o=ct(s)),new PN(o,i.transformResults||[])}(n,e))):[]}function ZT(t,e){return{documents:[YT(t,e.path)]}}function e0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=YT(t,i);const s=function(c){if(c.length!==0)return r0(ue.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Wi(m.field),direction:$N(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ef(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function t0(t){let e=XT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=n0(p);return m instanceof ue&&Gp(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new Oa(Hi(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Os(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Os(w,m)}(n.endAt)),dN(e,i,o,s,l,"F",u,c)}function zN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(t):t.fieldFilter!==void 0?function(n){return ie.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ue.create(n.compositeFilter.filters.map(r=>n0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(n.compositeFilter.op))}(t):W(30097,{filter:t})}function $N(t){return VN[t]}function qN(t){return ON[t]}function KN(t){return LN[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return Te.fromServerFormat(t.fieldPath)}function r0(t){return t instanceof ie?function(n){if(n.op==="=="){if(C_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NAN"}};if(R_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(C_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NAN"}};if(R_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(n.field),op:qN(n.op),value:n.value}}}(t):t instanceof ue?function(n){const r=n.getFilters().map(i=>r0(i));return r.length===1?r[0]:{compositeFilter:{op:KN(n.op),filters:r}}}(t):W(54877,{filter:t})}function WN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Sn{constructor(e,n,r,i,s=G.min(),o=G.min(),l=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s0{constructor(e){this.yt=e}}function HN(t,e){let n;if(e.document)n=UN(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=Si(e.noDocument.readTime);n=Ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return W(56709);{const r=$.fromSegments(e.unknownDocument.path),i=Si(e.unknownDocument.version);n=Ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new le(i[0],i[1]);return G.fromTimestamp(s)}(e.readTime)),n}function K_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ic(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:nc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Us(s,o.version.toTimestamp()),createTime:Us(s,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ti(e.version)};else{if(!e.isUnknownDocument())return W(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:Ti(e.version)}}return r}function ic(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ti(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Si(t){const e=new le(t.seconds,t.nanoseconds);return G.fromTimestamp(e)}function Xr(t,e){const n=(e.baseMutations||[]).map(s=>Sf(t.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Sf(t.yt,s)),i=le.fromMillis(e.localWriteTimeMs);return new Xp(e.batchId,i,n,r)}function Fo(t){const e=Si(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Si(t.lastLimboFreeSnapshotVersion):G.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){const o=s.documents.length;return H(o===1,1966,{count:o}),jt(jc(XT(s.documents[0])))}(t.query):function(s){return jt(t0(s))}(t.query),new Sn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Oe.fromBase64String(t.resumeToken))}function o0(t,e){const n=Ti(e.snapshotVersion),r=Ti(e.lastLimboFreeSnapshotVersion);let i;i=ec(e.target)?ZT(t.yt,e.target):e0(t.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ii(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function a0(t){const e=t0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}function Jh(t,e){return new Zp(e.largestBatchId,Sf(t.yt,e.overlayMutation))}function W_(t,e){const n=e.path.lastSegment();return[t,rt(e.path.popLast()),n]}function H_(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Ti(r.readTime),documentKey:rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class GN{getBundleMetadata(e,n){return G_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Si(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return G_(e).put(function(i){return{bundleId:i.id,createTime:Ti(ct(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Q_(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:a0(s.bundledQuery),readTime:Si(s.readTime)}}(r)})}saveNamedQuery(e,n){return Q_(e).put(function(i){return{name:i.name,readTime:Ti(ct(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function G_(t){return je(t,Oc)}function Q_(t){return je(t,Lc)}/**
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
 */class Kc{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new Kc(e,r)}getOverlay(e,n){return So(e).get(W_(this.userId,n)).next(r=>r?Jh(this.serializer,r):null)}getOverlays(e,n){const r=ln();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const l=new Zp(n,o);i.push(this.St(e,l))}),C.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(So(e).Z(df,l))}),C.waitFor(s)}getOverlaysForCollection(e,n,r){const i=ln(),s=rt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return So(e).J(df,o).next(l=>{for(const u of l){const c=Jh(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=ln();let o;const l=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return So(e).ee({index:uT,range:l},(u,c,d)=>{const p=Jh(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>s)}St(e,n){return So(e).put(function(i,s,o){const[l,u,c]=W_(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:rc(i.yt,o.mutation)}}(this.serializer,this.userId,n))}}function So(t){return je(t,Mc)}/**
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
 */class QN{bt(e){return je(e,$p)}getSessionToken(e){return this.bt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Oe.fromUint8Array(r):Oe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.bt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Jr{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),Ra(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=bn(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Vn(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?ET(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):Uc(e)?this.kt(e.mapValue,n):(this.qt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.Qt(e.arrayValue,n),this.Nt(n)):W(19022,{$t:e})}Ot(e,n){this.Ft(n,25),this.Ut(e,n)}Ut(e,n){n.xt(e)}qt(e,n){const r=e.fields||{};this.Ft(n,55);for(const i of Object.keys(r))this.Ot(i,n),this.Ct(r[i],n)}kt(e,n){var o,l;const r=e.fields||{};this.Ft(n,53);const i=bs,s=((l=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:l.length)||0;this.Ft(n,15),n.Mt(ve(s)),this.Ot(i,n),this.Ct(r[i],n)}Qt(e,n){const r=e.values||[];this.Ft(n,50);for(const i of r)this.Ct(i,n)}Lt(e,n){this.Ft(n,37),$.fromName(e).path.forEach(r=>{this.Ft(n,60),this.Ut(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}Jr.Kt=new Jr;/**
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
 */const ji=255;function YN(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function Y_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=YN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class XN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Jt(r.value),r=n.next();this.Ht()}Yt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=n.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=n.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const n=this.en(e),r=Y_(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}nn(e){const n=this.en(e),r=Y_(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}rn(){this.sn(ji),this.sn(255)}_n(){this.an(ji),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===ji?(this.sn(ji),this.sn(0)):this.sn(n)}Jt(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===ji?(this.an(ji),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class JN{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class ZN{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ao{constructor(){this.cn=new XN,this.ln=new JN(this.cn),this.hn=new ZN(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Zr{constructor(e,n,r,i){this.Tn=e,this.In=n,this.En=r,this.dn=i}An(){const e=this.dn.length,n=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.dn,0),n!==e?r.set([0],this.dn.length):++r[r.length-1],new Zr(this.Tn,this.In,this.En,r)}Rn(e,n,r){return{indexId:this.Tn,uid:e,arrayValue:pu(this.En),directionalValue:pu(this.dn),orderedDocumentKey:pu(n),documentKey:r.path.toArray()}}Vn(e,n,r){const i=this.Rn(e,n,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Hn(t,e){let n=t.Tn-e.Tn;return n!==0?n:(n=X_(t.En,e.En),n!==0?n:(n=X_(t.dn,e.dn),n!==0?n:$.comparator(t.In,e.In)))}function X_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function pu(t){return tI()?function(n){let r="";for(let i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return r}(t):t}function J_(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(t)}class Z_{constructor(e){this.mn=new he((n,r)=>Te.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const n of e.filters){const r=n;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(H(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const n=uf(e);if(n!==void 0&&!this.wn(n))return!1;const r=Gr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.wn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.mn.size>0){const l=this.mn.getIterator().getNext();if(!i.has(l.field.canonicalString())){const u=r[s];if(!this.Sn(l,u)||!this.bn(this.fn[o++],u))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.fn.length||!this.bn(this.fn[o++],l))return!1}return!0}Dn(){if(this.pn)return null;let e=new he(Te.comparator);const n=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ou(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ou(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ou(r.field,r.dir==="asc"?0:1)));return new Qu(Qu.UNKNOWN_ID,this.collectionId,n,Pa.empty())}wn(e){for(const n of this.gn)if(this.Sn(n,e))return!0;return!1}Sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}bn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function l0(t){var n,r;if(H(t instanceof ie||t instanceof ue,20012),t instanceof ie){if(t instanceof xT){const i=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(s=>ie.create(t.field,"==",s)))||[];return ue.create(i,"or")}return t}const e=t.filters.map(i=>l0(i));return ue.create(e,t.op)}function e2(t){if(t.getFilters().length===0)return[];const e=Rf(l0(t));return H(u0(e),7391),Af(e)||Pf(e)?[e]:e.getFilters()}function Af(t){return t instanceof ie}function Pf(t){return t instanceof ue&&Gp(t)}function u0(t){return Af(t)||Pf(t)||function(n){if(n instanceof ue&&gf(n)){for(const r of n.getFilters())if(!Af(r)&&!Pf(r))return!1;return!0}return!1}(t)}function Rf(t){if(H(t instanceof ie||t instanceof ue,34018),t instanceof ie)return t;if(t.filters.length===1)return Rf(t.filters[0]);const e=t.filters.map(r=>Rf(r));let n=ue.create(e,t.op);return n=sc(n),u0(n)?n:(H(n instanceof ue,64498),H(Ls(n),40251),H(n.filters.length>1,57927),n.filters.reduce((r,i)=>nm(r,i)))}function nm(t,e){let n;return H(t instanceof ie||t instanceof ue,38388),H(e instanceof ie||e instanceof ue,25473),n=t instanceof ie?e instanceof ie?function(i,s){return ue.create([i,s],"and")}(t,e):ev(t,e):e instanceof ie?ev(e,t):function(i,s){if(H(i.filters.length>0&&s.filters.length>0,48005),Ls(i)&&Ls(s))return RT(i,s.getFilters());const o=gf(i)?i:s,l=gf(i)?s:i,u=o.filters.map(c=>nm(c,l));return ue.create(u,"or")}(t,e),sc(n)}function ev(t,e){if(Ls(e))return RT(e,t.getFilters());{const n=e.filters.map(r=>nm(t,r));return ue.create(n,"or")}}function sc(t){if(H(t instanceof ie||t instanceof ue,11850),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return sc(e[0]);if(AT(t))return t;const n=e.map(i=>sc(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof ue&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,t.op)}/**
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
 */class t2{constructor(){this.Cn=new rm}addToCollectionParentIndex(e,n){return this.Cn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Ct.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class rm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new he(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(ae.comparator)).toArray()}}/**
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
 */const tv="IndexedDbIndexManager",Fl=new Uint8Array(0);class n2{constructor(e,n){this.databaseId=n,this.vn=new rm,this.Fn=new Mn(r=>Ii(r),(r,i)=>Ja(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.vn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.vn.add(n)});const s={collectionId:r,parent:rt(i)};return nv(e).put(s)}return C.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[XI(n),""],!1,!0);return nv(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(an(o.parent))}return r})}addFieldIndex(e,n){const r=Po(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zi(e);return s.next(l=>{o.put(H_(l,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Po(e),i=zi(e),s=Bi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Po(e),r=Bi(e),i=zi(e);return n.Z().next(()=>r.Z()).next(()=>i.Z())}createTargetIndexes(e,n){return C.forEach(this.Mn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Z_(r).Dn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Bi(e);let i=!0;const s=new Map;return C.forEach(this.Mn(n),o=>this.xn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=te();const l=[];return C.forEach(s,(u,c)=>{U(tv,`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Ii(n)}`);const d=function(T,V){const M=uf(V);if(M===void 0)return null;for(const F of tc(T,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),p=function(T,V){const M=new Map;for(const F of Gr(V))for(const _ of tc(T,F.fieldPath))switch(_.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),_.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),_.value),Array.from(M.values())}return null}(c,u),m=function(T,V){const M=[];let F=!0;for(const _ of Gr(V)){const y=_.kind===0?b_(T,_.fieldPath,T.startAt):V_(T,_.fieldPath,T.startAt);M.push(y.value),F&&(F=y.inclusive)}return new Os(M,F)}(c,u),w=function(T,V){const M=[];let F=!0;for(const _ of Gr(V)){const y=_.kind===0?V_(T,_.fieldPath,T.endAt):b_(T,_.fieldPath,T.endAt);M.push(y.value),F&&(F=y.inclusive)}return new Os(M,F)}(c,u),k=this.On(u,c,m),D=this.On(u,c,w),L=this.Nn(u,c,p),A=this.Bn(u.indexId,d,k,m.inclusive,D,w.inclusive,L);return C.forEach(A,v=>r.Y(v,n.limit).next(T=>{T.forEach(V=>{const M=$.fromSegments(V.documentKey);o.has(M)||(o=o.add(M),l.push(M))})}))}).next(()=>l)}return C.resolve(null)})}Mn(e){let n=this.Fn.get(e);return n||(e.filters.length===0?n=[e]:n=e2(ue.create(e.filters,"and")).map(r=>_f(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,n),n)}Bn(e,n,r,i,s,o,l){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let p=0;p<u;++p){const m=n?this.Ln(n[p/c]):Fl,w=this.kn(e,m,r[p%c],i),k=this.qn(e,m,s[p%c],o),D=l.map(L=>this.kn(e,m,L,!0));d.push(...this.createRange(w,k,D))}return d}kn(e,n,r,i){const s=new Zr(e,$.empty(),n,r);return i?s:s.An()}qn(e,n,r,i){const s=new Zr(e,$.empty(),n,r);return i?s.An():s}xn(e,n){const r=new Z_(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.yn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,n){let r=2;const i=this.Mn(n);return C.forEach(i,s=>this.xn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new he(Te.comparator),d=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Qn(e,n){const r=new Ao;for(const i of Gr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Pn(i.kind);Jr.Kt.Dt(s,o)}return r.un()}Ln(e){const n=new Ao;return Jr.Kt.Dt(e,n.Pn(0)),n.un()}$n(e,n){const r=new Ao;return Jr.Kt.Dt(ba(this.databaseId,n),r.Pn(function(s){const o=Gr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}Nn(e,n,r){if(r===null)return[];let i=[];i.push(new Ao);let s=0;for(const o of Gr(e)){const l=r[s++];for(const u of i)if(this.Un(n,o.fieldPath)&&Va(l))i=this.Kn(i,o,l);else{const c=u.Pn(o.kind);Jr.Kt.Dt(l,c)}}return this.Wn(i)}On(e,n,r){return this.Nn(e,n,r.position)}Wn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Kn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const u=new Ao;u.seed(l.un()),Jr.Kt.Dt(o,u.Pn(n.kind)),s.push(u)}return s}Un(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Po(e),i=zi(e);return(n?r.J(hf,IDBKeyRange.bound(n,n)):r.J()).next(s=>{const o=[];return C.forEach(s,l=>i.get([l.indexId,this.uid]).next(u=>{o.push(function(d,p){const m=p?new Pa(p.sequenceNumber,new Ct(Si(p.readTime),new $(an(p.documentKey)),p.largestBatchId)):Pa.empty(),w=d.fields.map(([k,D])=>new ou(Te.fromServerFormat(k),D));return new Qu(d.indexId,d.collectionGroup,w,m)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Po(e),s=zi(e);return this.Gn(e).next(o=>i.J(hf,IDBKeyRange.bound(n,n)).next(l=>C.forEach(l,u=>s.put(H_(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return C.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),C.forEach(l,u=>this.zn(e,i,u).next(c=>{const d=this.jn(s,u);return c.isEqual(d)?C.resolve():this.Jn(e,s,u,c,d)}))))})}Hn(e,n,r,i){return Bi(e).put(i.Rn(this.uid,this.$n(r,n.key),n.key))}Yn(e,n,r,i){return Bi(e).delete(i.Vn(this.uid,this.$n(r,n.key),n.key))}zn(e,n,r){const i=Bi(e);let s=new he(Hn);return i.ee({index:lT,range:IDBKeyRange.only([r.indexId,this.uid,pu(this.$n(r,n))])},(o,l)=>{s=s.add(new Zr(r.indexId,n,J_(l.arrayValue),J_(l.directionalValue)))}).next(()=>s)}jn(e,n){let r=new he(Hn);const i=this.Qn(n,e);if(i==null)return r;const s=uf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Va(o))for(const l of o.arrayValue.values||[])r=r.add(new Zr(n.indexId,e.key,this.Ln(l),i))}else r=r.add(new Zr(n.indexId,e.key,Fl,i));return r}Jn(e,n,r,i,s){U(tv,"Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,p,m){const w=u.getIterator(),k=c.getIterator();let D=Ui(w),L=Ui(k);for(;D||L;){let A=!1,v=!1;if(D&&L){const T=d(D,L);T<0?v=!0:T>0&&(A=!0)}else D!=null?v=!0:A=!0;A?(p(L),L=Ui(k)):v?(m(D),D=Ui(w)):(D=Ui(w),L=Ui(k))}}(i,s,Hn,l=>{o.push(this.Hn(e,n,r,l))},l=>{o.push(this.Yn(e,n,r,l))}),C.waitFor(o)}Gn(e){let n=1;return zi(e).ee({index:aT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,l)=>Hn(o,l)).filter((o,l,u)=>!l||Hn(o,u[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=Hn(o,e),u=Hn(o,n);if(l===0)i[0]=e.An();else if(l>0&&u<0)i.push(o),i.push(o.An());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Zn(i[o],i[o+1]))return[];const l=i[o].Vn(this.uid,Fl,$.empty()),u=i[o+1].Vn(this.uid,Fl,$.empty());s.push(IDBKeyRange.bound(l,u))}return s}Zn(e,n){return Hn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(rv)}getMinOffset(e,n){return C.mapArray(this.Mn(n),r=>this.xn(e,r).next(i=>i||W(44426))).next(rv)}}function nv(t){return je(t,xa)}function Bi(t){return je(t,ea)}function Po(t){return je(t,zp)}function zi(t){return je(t,Zo)}function rv(t){H(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Up(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ct(e.readTime,e.documentKey,n)}/**
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
 */const iv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c0=41943040;class tt{static withCacheSize(e){return new tt(e,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function h0(t,e,n){const r=t.store(Ht),i=t.store(ks),s=[],o=IDBKeyRange.only(n.batchId);let l=0;const u=r.ee({range:o},(d,p,m)=>(l++,m.delete()));s.push(u.next(()=>{H(l===1,47070,{batchId:n.batchId})}));const c=[];for(const d of n.mutations){const p=iT(e,d.key.path,n.batchId);s.push(i.delete(p)),c.push(d.key)}return C.waitFor(s).next(()=>c)}function oc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw W(14731);e=t.noDocument}return JSON.stringify(e).length}/**
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
 */tt.DEFAULT_COLLECTION_PERCENTILE=10,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tt.DEFAULT=new tt(c0,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tt.DISABLED=new tt(-1,0,0);class Wc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Xn={}}static wt(e,n,r,i){H(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Wc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gn(e).ee({index:ri,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Gi(e),o=Gn(e);return o.add({}).next(l=>{H(typeof l=="number",49019);const u=new Xp(l,n,r,i),c=function(w,k,D){const L=D.baseMutations.map(v=>rc(w.yt,v)),A=D.mutations.map(v=>rc(w.yt,v));return{userId:k,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:L,mutations:A}}(this.serializer,this.userId,u),d=[];let p=new he((m,w)=>X(m.canonicalString(),w.canonicalString()));for(const m of i){const w=iT(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(w,xx))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Xn[l]=u.keys()}),C.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return Gn(e).get(n).next(r=>r?(H(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),Xr(this.serializer,r)):null)}er(e,n){return this.Xn[n]?C.resolve(this.Xn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Xn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Gn(e).ee({index:ri,range:i},(o,l,u)=>{l.userId===this.userId&&(H(l.batchId>=r,47524,{tr:r}),s=Xr(this.serializer,l)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=oi;return Gn(e).ee({index:ri,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,oi],[this.userId,Number.POSITIVE_INFINITY]);return Gn(e).J(ri,n).next(r=>r.map(i=>Xr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=au(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Gi(e).ee({range:i},(o,l,u)=>{const[c,d,p]=o,m=an(d);if(c===this.userId&&n.path.isEqual(m))return Gn(e).get(p).next(w=>{if(!w)throw W(61480,{nr:o,batchId:p});H(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),s.push(Xr(this.serializer,w))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(X);const i=[];return n.forEach(s=>{const o=au(this.userId,s.path),l=IDBKeyRange.lowerBound(o),u=Gi(e).ee({range:l},(c,d,p)=>{const[m,w,k]=c,D=an(w);m===this.userId&&s.path.isEqual(D)?r=r.add(k):p.done()});i.push(u)}),C.waitFor(i).next(()=>this.rr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=au(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new he(X);return Gi(e).ee({range:o},(u,c,d)=>{const[p,m,w]=u,k=an(m);p===this.userId&&r.isPrefixOf(k)?k.length===i&&(l=l.add(w)):d.done()}).next(()=>this.rr(e,l))}rr(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Gn(e).get(s).next(o=>{if(o===null)throw W(35274,{batchId:s});H(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Xr(this.serializer,o))}))}),C.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return h0(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ir(n.batchId)}),C.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Gi(e).ee({range:r},(s,o,l)=>{if(s[0]===this.userId){const u=an(s[1]);i.push(u)}else l.done()}).next(()=>{H(i.length===0,56720,{sr:i.map(s=>s.canonicalString())})})})}containsKey(e,n){return d0(e,this.userId,n)}_r(e){return f0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:oi,lastStreamToken:""})}}function d0(t,e,n){const r=au(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Gi(t).ee({range:s,X:!0},(l,u,c)=>{const[d,p,m]=l;d===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function Gn(t){return je(t,Ht)}function Gi(t){return je(t,ks)}function f0(t){return je(t,Ca)}/**
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
 */class Ai{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ai(0)}static cr(){return new Ai(-1)}}/**
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
 */class r2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.lr(e).next(n=>{const r=new Ai(n.highestTargetId);return n.highestTargetId=r.next(),this.hr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(n=>G.fromTimestamp(new le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.lr(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.hr(e,i)))}addTargetData(e,n){return this.Pr(e,n).next(()=>this.lr(e).next(r=>(r.targetCount+=1,this.Tr(n,r),this.hr(e,r))))}updateTargetData(e,n){return this.Pr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>$i(e).delete(n.targetId)).next(()=>this.lr(e)).next(r=>(H(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return $i(e).ee((o,l)=>{const u=Fo(l);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>C.waitFor(s)).next(()=>i)}forEachTarget(e,n){return $i(e).ee((r,i)=>{const s=Fo(i);n(s)})}lr(e){return sv(e).get(Ju).next(n=>(H(n!==null,2888),n))}hr(e,n){return sv(e).put(Ju,n)}Pr(e,n){return $i(e).put(o0(this.serializer,n))}Tr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ii(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return $i(e).ee({range:i,index:oT},(o,l,u)=>{const c=Fo(l);Ja(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ir(e);return n.forEach(o=>{const l=rt(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(i)}removeMatchingKeys(e,n,r){const i=ir(e);return C.forEach(n,s=>{const o=rt(s.path);return C.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ir(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ir(e);let s=te();return i.ee({range:r,X:!0},(o,l,u)=>{const c=an(o[1]),d=new $(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=rt(n.path),i=IDBKeyRange.bound([r],[XI(r)],!1,!0);let s=0;return ir(e).ee({index:Bp,X:!0,range:i},([o,l],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}At(e,n){return $i(e).get(n).next(r=>r?Fo(r):null)}}function $i(t){return je(t,xs)}function sv(t){return je(t,ai)}function ir(t){return je(t,Ns)}/**
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
 */const ov="LruGarbageCollector",i2=1048576;function av([t,e],[n,r]){const i=X(t,n);return i===0?X(e,r):i}class s2{constructor(e){this.Ir=e,this.buffer=new he(av),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();av(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class p0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(ov,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Or(n)?U(ov,"Ignoring IndexedDB error during garbage collection: ",n):await xi(n)}await this.Vr(3e5)})}}class o2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return C.resolve(Mt.ce);const r=new s2(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(iv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),qi()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function m0(t,e){return new o2(t,e)}/**
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
 */class a2{constructor(e,n){this.db=e,this.garbageCollector=m0(this,n)}gr(e){const n=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pr(e,n){return this.Sr(e,(r,i)=>n(i))}addReference(e,n,r){return Ul(e,r)}removeReference(e,n,r){return Ul(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ul(e,n)}br(e,n){return function(i,s){let o=!1;return f0(i).te(l=>d0(i,l,s).next(u=>(u&&(o=!0),C.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Sr(e,(o,l)=>{if(l<=n){const u=this.br(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),ir(e).delete(function(p){return[0,rt(p.path)]}(o))))});i.push(u)}}).next(()=>C.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ul(e,n)}Sr(e,n){const r=ir(e);let i,s=Mt.ce;return r.ee({index:Bp},([o,l],{path:u,sequenceNumber:c})=>{o===0?(s!==Mt.ce&&n(new $(an(i)),s),s=c,i=u):s=Mt.ce}).next(()=>{s!==Mt.ce&&n(new $(an(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ul(t,e){return ir(t).put(function(r,i){return{targetId:0,path:rt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class g0{constructor(){this.changes=new Mn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class l2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return qr(e).put(r)}removeEntry(e,n,r){return qr(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],ic(o),l[l.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Dr(e,r)))}getEntry(e,n){let r=Ce.newInvalidDocument(n);return qr(e).ee({index:lu,range:IDBKeyRange.only(Ro(n))},(i,s)=>{r=this.Cr(n,s)}).next(()=>r)}vr(e,n){let r={size:0,document:Ce.newInvalidDocument(n)};return qr(e).ee({index:lu,range:IDBKeyRange.only(Ro(n))},(i,s)=>{r={document:this.Cr(n,s),size:oc(s)}}).next(()=>r)}getEntries(e,n){let r=St();return this.Fr(e,n,(i,s)=>{const o=this.Cr(i,s);r=r.insert(i,o)}).next(()=>r)}Mr(e,n){let r=St(),i=new Ee($.comparator);return this.Fr(e,n,(s,o)=>{const l=this.Cr(s,o);r=r.insert(s,l),i=i.insert(s,oc(o))}).next(()=>({documents:r,Or:i}))}Fr(e,n,r){if(n.isEmpty())return C.resolve();let i=new he(cv);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ro(i.first()),Ro(i.last())),o=i.getIterator();let l=o.getNext();return qr(e).ee({index:lu,range:s},(u,c,d)=>{const p=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&cv(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,c),l=o.hasNext()?o.getNext():null),l?d.j(Ro(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,l=[o.popLast().toArray(),o.lastSegment(),ic(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return qr(e).J(IDBKeyRange.bound(l,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=St();for(const p of c){const m=this.Cr($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Za(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=St();const o=uv(n,r),l=uv(n,Ct.max());return qr(e).ee({index:sT,range:IDBKeyRange.bound(o,l,!0)},(u,c,d)=>{const p=this.Cr($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new u2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return lv(e).get(cf).next(n=>(H(!!n,20021),n))}Dr(e,n){return lv(e).put(cf,n)}Cr(e,n){if(n){const r=HN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return Ce.newInvalidDocument(e)}}function y0(t){return new l2(t)}class u2 extends g0{constructor(e,n){super(),this.Nr=e,this.trackRemovals=n,this.Br=new Mn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new he((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.Br.get(s);if(n.push(this.Nr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const u=K_(this.Nr.serializer,o);i=i.add(s.path.popLast());const c=oc(u);r+=c-l.size,n.push(this.Nr.addEntry(e,s,u))}else if(r-=l.size,this.trackRemovals){const u=K_(this.Nr.serializer,o.convertToNoDocument(G.min()));n.push(this.Nr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Nr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Nr.updateMetadata(e,r)),C.waitFor(n)}getFromCache(e,n){return this.Nr.vr(e,n).next(r=>(this.Br.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Nr.Mr(e,n).next(({documents:r,Or:i})=>(i.forEach((s,o)=>{this.Br.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function lv(t){return je(t,ka)}function qr(t){return je(t,Xu)}function Ro(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function uv(t,e){const n=e.documentKey.path.toArray();return[t,ic(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function cv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=X(n[s],r[s]),i)return i;return i=X(n.length,r.length),i||(i=X(n[n.length-2],r[r.length-2]),i||X(n[n.length-1],r[r.length-1]))}/**
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
 */class c2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ia(r.mutation,i,Ft.empty(),le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=St();const o=ra(),l=function(){return ra()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Lr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ia(d.mutation,c,d.mutation.getFieldMask(),le.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new c2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ra();let i=new Ee((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=LT();d.forEach(m=>{if(!s.has(m)){const w=zT(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(ln());let l=Aa,u=s;return o.next(c=>C.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?C.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(d=>({batchId:l,changes:OT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Lo();return this.indexManager.getCollectionParents(e,s).next(l=>C.forEach(l,u=>{const c=function(p,m){return new Gs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ce.newInvalidDocument(d)))});let l=Lo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ia(d.mutation,c,Ft.empty(),le.now()),Za(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class h2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return C.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ct(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:a0(i.bundledQuery),readTime:ct(i.readTime)}}(n)),C.resolve()}}/**
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
 */class d2{constructor(){this.overlays=new Ee($.comparator),this.qr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ln();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=ln(),s=n.length+1,o=new $(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ln(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ln(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return C.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zp(n,r));let s=this.qr.get(n);s===void 0&&(s=te(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class f2{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,C.resolve()}}/**
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
 */class im{constructor(){this.Qr=new he(ze.$r),this.Ur=new he(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new $(new ae([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new $(new ae([])),r=new ze(n,e),i=new ze(n,e+1);let s=te();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return $.comparator(e.key,n.key)||X(e.Yr,n.Yr)}static Kr(e,n){return X(e.Yr,n.Yr)||$.comparator(e.key,n.key)}}/**
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
 */class p2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new he(ze.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xp(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?oi:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(X);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new ze(new $(s),0);let l=new he(X);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),C.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ze(n,0),i=this.Zr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class m2{constructor(e){this.ri=e,this.docs=function(){return new Ee($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let r=St();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=St();const o=n.path,l=new $(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Up(eT(d),r)<=0||(i.has(d.key)||Za(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W(9500)}ii(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new g2(this)}getSize(e){return C.resolve(this.size)}}class g2 extends g0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class y2{constructor(e){this.persistence=e,this.si=new Mn(n=>Ii(n),Ja),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new im,this.targetCount=0,this.ai=Ai.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),C.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Pr(n),C.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this._i.containsKey(n))}}/**
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
 */class sm{constructor(e,n){this.ui={},this.overlays={},this.ci=new Mt(0),this.li=!1,this.li=!0,this.hi=new f2,this.referenceDelegate=e(this),this.Pi=new y2(this),this.indexManager=new t2,this.remoteDocumentCache=function(i){return new m2(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new s0(n),this.Ii=new h2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new p2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new _2(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return C.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class _2 extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class Hc{constructor(e){this.persistence=e,this.Ri=new im,this.Vi=null}static mi(e){return new Hc(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),C.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,r=>{const i=$.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return C.or([()=>C.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ac{constructor(e,n){this.persistence=e,this.pi=new Mn(r=>rt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=m0(this,n)}static mi(e,n){return new ac(e,n)}Ei(){}di(e){return C.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return C.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?C.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,G.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cu(e.data.value)),n}br(e,n,r){return C.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class v2{constructor(e){this.serializer=e}k(e,n,r,i){const s=new bc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore(Xa)}(e),function(u){u.createObjectStore(Ca,{keyPath:kx}),u.createObjectStore(Ht,{keyPath:E_,autoIncrement:!0}).createIndex(ri,I_,{unique:!0}),u.createObjectStore(ks)}(e),hv(e),function(u){u.createObjectStore(Qr)}(e));let o=C.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Ns),u.deleteObjectStore(xs),u.deleteObjectStore(ai)}(e),hv(e)),o=o.next(()=>function(u){const c=u.store(ai),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return c.put(Ju,d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store(Ht).J().next(p=>{u.deleteObjectStore(Ht),u.createObjectStore(Ht,{keyPath:E_,autoIncrement:!0}).createIndex(ri,I_,{unique:!0});const m=c.store(Ht),w=p.map(k=>m.put(k));return C.waitFor(w)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Ds,{keyPath:Fx})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.yi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(ka)}(e),this.wi(s)))),r<7&&i>=7&&(o=o.next(()=>this.Si(s))),r<8&&i>=8&&(o=o.next(()=>this.bi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Di(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Oc,{keyPath:Ux})})(e),function(u){u.createObjectStore(Lc,{keyPath:jx})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(Mc,{keyPath:Hx});c.createIndex(df,Gx,{unique:!1}),c.createIndex(uT,Qx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(Xu,{keyPath:Nx});c.createIndex(lu,Dx),c.createIndex(sT,bx)}(e)).next(()=>this.Ci(e,s)).next(()=>e.deleteObjectStore(Qr))),r<14&&i>=14&&(o=o.next(()=>this.Fi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(zp,{keyPath:Bx,autoIncrement:!0}).createIndex(hf,zx,{unique:!1}),u.createObjectStore(Zo,{keyPath:$x}).createIndex(aT,qx,{unique:!1}),u.createObjectStore(ea,{keyPath:Kx}).createIndex(lT,Wx,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore(Zo).clear()}).next(()=>{n.objectStore(ea).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore($p,{keyPath:Yx})})(e)})),r<18&&i>=18&&tI()&&(o=o.next(()=>{n.objectStore(Zo).clear()}).next(()=>{n.objectStore(ea).clear()})),o}wi(e){let n=0;return e.store(Qr).ee((r,i)=>{n+=oc(i)}).next(()=>{const r={byteSize:n};return e.store(ka).put(cf,r)})}yi(e){const n=e.store(Ca),r=e.store(Ht);return n.J().next(i=>C.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,oi],[s.userId,s.lastAcknowledgedBatchId]);return r.J(ri,o).next(l=>C.forEach(l,u=>{H(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=Xr(this.serializer,u);return h0(e,s.userId,c).next(()=>{})}))}))}Si(e){const n=e.store(Ns),r=e.store(Qr);return e.store(ai).get(Ju).next(i=>{const s=[];return r.ee((o,l)=>{const u=new ae(o),c=function(p){return[0,rt(p)]}(u);s.push(n.get(c).next(d=>d?C.resolve():(p=>n.put({targetId:0,path:rt(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>C.waitFor(s))})}bi(e,n){e.createObjectStore(xa,{keyPath:Mx});const r=n.store(xa),i=new rm,s=o=>{if(i.add(o)){const l=o.lastSegment(),u=o.popLast();return r.put({collectionId:l,parent:rt(u)})}};return n.store(Qr).ee({X:!0},(o,l)=>{const u=new ae(o);return s(u.popLast())}).next(()=>n.store(ks).ee({X:!0},([o,l,u],c)=>{const d=an(l);return s(d.popLast())}))}Di(e){const n=e.store(xs);return n.ee((r,i)=>{const s=Fo(i),o=o0(this.serializer,s);return n.put(o)})}Ci(e,n){const r=n.store(Qr),i=[];return r.ee((s,o)=>{const l=n.store(Xu),u=function(p){return p.document?new $(ae.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):W(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(c))}).next(()=>C.waitFor(i))}Fi(e,n){const r=n.store(Ht),i=y0(this.serializer),s=new sm(Hc.mi,this.serializer.yt);return r.J().next(o=>{const l=new Map;return o.forEach(u=>{let c=l.get(u.userId)??te();Xr(this.serializer,u).keys().forEach(d=>c=c.add(d)),l.set(u.userId,c)}),C.forEach(l,(u,c)=>{const d=new He(c),p=Kc.wt(this.serializer,d),m=s.getIndexManager(d),w=Wc.wt(d,this.serializer,m,s.referenceDelegate);return new _0(i,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new ff(n,Mt.ce),u).next()})})}}function hv(t){t.createObjectStore(Ns,{keyPath:Ox}).createIndex(Bp,Lx,{unique:!0}),t.createObjectStore(xs,{keyPath:"targetId"}).createIndex(oT,Vx,{unique:!0}),t.createObjectStore(ai)}const Qn="IndexedDbPersistence",Zh=18e5,ed=5e3,td="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",w2="main";class om{constructor(e,n,r,i,s,o,l,u,c,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Mi=s,this.window=o,this.document=l,this.xi=c,this.Oi=d,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!om.v())throw new B(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new a2(this,i),this.$i=n+w2,this.serializer=new s0(u),this.Ui=new wr(this.$i,this.Ni,new v2(this.serializer)),this.hi=new QN,this.Pi=new r2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=y0(this.serializer),this.Ii=new GN,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&lt(Qn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(O.FAILED_PRECONDITION,td);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new Mt(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>jl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(n=>{n||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(n=>this.isPrimary&&!n?this.Zi(e).next(()=>!1):!!n&&this.Xi(e).next(()=>!0))).catch(e=>{if(Or(e))return U(Qn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(Qn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return Co(e).get(Fi).next(n=>C.resolve(this.es(n)))}ts(e){return jl(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Zh)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=je(n,Ds);return r.J().next(i=>{const s=this.ss(i,Zh),o=i.filter(l=>s.indexOf(l)===-1);return C.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const n of e)this.Ki.removeItem(this._s(n.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?C.resolve(!0):Co(e).get(Fi).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,ed)&&!this.us(n.ownerId)){if(this.es(n)&&this.networkEnabled)return!0;if(!this.es(n)){if(!n.allowTabSynchronization)throw new B(O.FAILED_PRECONDITION,td);return!1}}return!(!this.networkEnabled||!this.inForeground)||jl(e).J().next(r=>this.ss(r,ed).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U(Qn,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Xa,Ds],e=>{const n=new ff(e,Mt.ce);return this.Zi(n).next(()=>this.ts(n))}),this.Ui.close(),this.Ps()}ss(e,n){return e.filter(r=>this.rs(r.updateTimeMs,n)&&!this.us(r.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>jl(e).J().next(n=>this.ss(n,Zh).map(r=>r.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,n){return Wc.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new n2(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Kc.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,n,r){U(Qn,"Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===18?Zx:u===17?fT:u===16?Jx:u===15?qp:u===14?dT:u===13?hT:u===12?Xx:u===11?cT:void W(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,i,s,l=>(o=new ff(l,this.ci?this.ci.next():Mt.ce),n==="readwrite-primary"?this.Hi(o).next(u=>!!u||this.Yi(o)).next(u=>{if(!u)throw lt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new B(O.FAILED_PRECONDITION,tT);return r(o)}).next(u=>this.Xi(o).next(()=>u)):this.Is(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Is(e){return Co(e).get(Fi).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,ed)&&!this.us(n.ownerId)&&!this.es(n)&&!(this.Oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(O.FAILED_PRECONDITION,td)})}Xi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Co(e).put(Fi,n)}static v(){return wr.v()}Zi(e){const n=Co(e);return n.get(Fi).next(r=>this.es(r)?(U(Qn,"Releasing primary lease."),n.delete(Fi)):C.resolve())}rs(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(lt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const n=/(?:Version|Mobile)\/1[456]/;eI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var n;try{const r=((n=this.Ki)==null?void 0:n.getItem(this._s(e)))!==null;return U(Qn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return lt(Qn,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){lt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Co(t){return je(t,Xa)}function jl(t){return je(t,Ds)}function E2(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new am(e,n.fromCache,r,i)}}/**
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
 */class I2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class v0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return eI()?8:rT(Ue())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new I2;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(qi()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(qi()<=re.DEBUG&&U("QueryEngine","Query:",Ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(qi()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(n))):C.resolve())}ys(e,n){if(O_(n))return C.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wf(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,wf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return O_(n)||i.isEqual(G.min())?C.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?C.resolve(null):(qi()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ki(n)),this.vs(e,o,n,Ix(i,Aa)).next(l=>l))})}Ds(e,n){let r=new he(bT(e));return n.forEach((i,s)=>{Za(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return qi()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ki(n)),this.ps.getDocumentsMatchingQuery(e,n,Ct.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const lm="LocalStore",T2=3e8;class S2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ee(X),this.xs=new Mn(s=>Ii(s),Ja),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function w0(t,e,n,r){return new S2(t,e,n,r)}async function E0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function A2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=C.resolve();return m.forEach(k=>{w=w.next(()=>d.getEntry(u,k)).next(D=>{const L=c.docVersions.get(k);H(L!==null,48541),D.version.compareTo(L)<0&&(p.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),d.addEntry(D)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function I0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function P2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Oe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(D,L,A){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=T2?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,w,d)&&l.push(n.Pi.updateTargetData(s,w))});let u=St(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(R2(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(G.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return C.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function R2(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=St();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):U(lm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function C2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=oi),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function k2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Sn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Cf(t,e,n){const r=J(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Or(o))throw o;U(lm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function dv(t,e,n){const r=J(t);let i=G.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p.xs.get(d);return m!==void 0?C.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,jt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:te())).next(l=>(x2(r,pN(e),l),{documents:l,Qs:s})))}function x2(t,e,n){let r=t.Os.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class fv{constructor(){this.activeTargetIds=wN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T0{constructor(){this.Mo=new fv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class N2{Oo(e){}shutdown(){}}/**
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
 */const pv="ConnectivityMonitor";class mv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(pv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(pv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bl=null;function kf(){return Bl===null?Bl=function(){return 268435456+Math.round(2147483648*Math.random())}():Bl++,"0x"+Bl.toString(16)}/**
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
 */const nd="RestConnection",D2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Zu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=kf(),l=this.zo(e,n.toUriEncodedString());U(nd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=qs(c);return this.Jo(e,l,u,r,d).then(p=>(U(nd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw wi(nd,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=D2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class V2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const et="WebChannelConnection";class O2 extends b2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=kf();return new Promise((l,u)=>{const c=new qI;c.setWithCredentials(!0),c.listenOnce(KI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case su.NO_ERROR:const p=c.getResponseJson();U(et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case su.TIMEOUT:U(et,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const m=c.getStatus();if(U(et,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const D=function(A){const v=A.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(v)>=0?v:O.UNKNOWN}(k.status);u(new B(D,k.message))}else u(new B(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{U(et,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);U(et,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=kf(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GI(),l=HI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");U(et,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,w=!1;const k=new V2({Yo:L=>{w?U(et,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(m||(U(et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),U(et,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Zo:()=>p.close()}),D=(L,A,v)=>{L.listen(A,T=>{try{v(T)}catch(V){setTimeout(()=>{throw V},0)}})};return D(p,Oo.EventType.OPEN,()=>{w||(U(et,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),D(p,Oo.EventType.CLOSE,()=>{w||(w=!0,U(et,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(p))}),D(p,Oo.EventType.ERROR,L=>{w||(w=!0,wi(et,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),k.a_(new B(O.UNAVAILABLE,"The operation could not be completed")))}),D(p,Oo.EventType.MESSAGE,L=>{var A;if(!w){const v=L.data[0];H(!!v,16349);const T=v,V=(T==null?void 0:T.error)||((A=T[0])==null?void 0:A.error);if(V){U(et,`RPC '${e}' stream ${i} received error:`,V);const M=V.status;let F=function(E){const S=Ne[E];if(S!==void 0)return KT(S)}(M),_=V.message;F===void 0&&(F=O.INTERNAL,_="Unknown error status: "+M+" with message "+V.message),w=!0,k.a_(new B(F,_)),p.close()}else U(et,`RPC '${e}' stream ${i} received:`,v),k.u_(v)}}),D(l,WI.STAT_EVENT,L=>{L.stat===af.PROXY?U(et,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===af.NOPROXY&&U(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}/**
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
 */function L2(){return typeof window<"u"?window:null}function mu(){return typeof document<"u"?document:null}/**
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
 */function Gc(t){return new MN(t,!0)}/**
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
 */class S0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const gv="PersistentStream";class A0{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new S0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(lt(n.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(gv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(U(gv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class M2 extends A0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=jN(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?ct(o.readTime):G.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Tf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ec(u)?{documents:ZT(s,u)}:{query:e0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=GT(s,o.resumeToken);const c=Ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=Us(s,o.snapshotVersion.toTimestamp());const c=Ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=zN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Tf(this.serializer),n.removeTarget=e,this.q_(n)}}class F2 extends A0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BN(e.writeResults,e.commitTime),r=ct(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Tf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rc(this.serializer,r))};this.q_(n)}}/**
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
 */class U2{}class j2 extends U2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,If(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,If(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class B2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lt(n),this.aa=!1):U("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pi="RemoteStore";class z2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Di(this)&&(U(Pi,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await tl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Qc(c)}(this))})}),this.Ra=new B2(r,i)}}async function Qc(t){if(Di(t))for(const e of t.da)await e(!0)}async function tl(t){for(const e of t.da)await e(!1)}function P0(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),dm(n)?hm(n):Ys(n).O_()&&cm(n,e))}function um(t,e){const n=J(t),r=Ys(n);n.Ia.delete(e),r.O_()&&R0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Di(n)&&n.Ra.set("Unknown"))}function cm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).Y_(e)}function R0(t,e){t.Va.Ue(e),Ys(t).Z_(e)}function hm(t){t.Va=new bN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.Ra.ua()}function dm(t){return Di(t)&&!Ys(t).x_()&&t.Ia.size>0}function Di(t){return J(t).Ea.size===0}function C0(t){t.Va=void 0}async function $2(t){t.Ra.set("Online")}async function q2(t){t.Ia.forEach((e,n)=>{cm(t,e)})}async function K2(t,e){C0(t),dm(t)?(t.Ra.ha(e),hm(t)):t.Ra.set("Unknown")}async function W2(t,e,n){if(t.Ra.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){U(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lc(t,r)}else if(e instanceof fu?t.Va.Ze(e):e instanceof WT?t.Va.st(e):t.Va.tt(e),!n.isEqual(G.min()))try{const r=await I0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Oe.EMPTY_BYTE_STRING,d.snapshotVersion)),R0(s,u);const p=new Sn(d.target,u,c,d.sequenceNumber);cm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){U(Pi,"Failed to raise snapshot:",r),await lc(t,r)}}async function lc(t,e,n){if(!Or(e))throw e;t.Ea.add(1),await tl(t),t.Ra.set("Offline"),n||(n=()=>I0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U(Pi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qc(t)})}function k0(t,e){return e().catch(n=>lc(t,n,e))}async function nl(t){const e=J(t),n=Cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:oi;for(;H2(e);)try{const i=await C2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,G2(e,i)}catch(i){await lc(e,i)}x0(e)&&N0(e)}function H2(t){return Di(t)&&t.Ta.length<10}function G2(t,e){t.Ta.push(e);const n=Cr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function x0(t){return Di(t)&&!Cr(t).x_()&&t.Ta.length>0}function N0(t){Cr(t).start()}async function Q2(t){Cr(t).ra()}async function Y2(t){const e=Cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function X2(t,e,n){const r=t.Ta.shift(),i=Jp.from(r,e,n);await k0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nl(t)}async function J2(t,e){e&&Cr(t).X_&&await async function(r,i){if(function(o){return xN(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();Cr(r).B_(),await k0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nl(r)}}(t,e),x0(t)&&N0(t)}async function yv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),U(Pi,"RemoteStore received new credentials");const r=Di(n);n.Ea.add(3),await tl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qc(n)}async function Z2(t,e){const n=J(t);e?(n.Ea.delete(2),await Qc(n)):e||(n.Ea.add(2),await tl(n),n.Ra.set("Unknown"))}function Ys(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new M2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:$2.bind(null,t),t_:q2.bind(null,t),r_:K2.bind(null,t),H_:W2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),dm(t)?hm(t):t.Ra.set("Unknown")):(await t.ma.stop(),C0(t))})),t.ma}function Cr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new F2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Q2.bind(null,t),r_:J2.bind(null,t),ta:Y2.bind(null,t),na:X2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await nl(t)):(await t.fa.stop(),t.Ta.length>0&&(U(Pi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(lt("AsyncQueue",`${e}: ${t}`),Or(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{static emptySet(e){return new ys(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class _v{constructor(){this.ga=new Ee($.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new js(e,n,ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class eD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class tD{constructor(){this.queries=vv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=vv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function vv(){return new Mn(t=>DT(t),Bc)}async function D0(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new eD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pm(o,`Initialization of query '${Ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mm(n)}async function b0(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nD(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&mm(n)}function rD(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function mm(t){t.Ca.forEach(e=>{e.next()})}var xf,wv;(wv=xf||(xf={})).Ma="default",wv.Cache="cache";class V0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xf.Cache}}/**
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
 */class O0{constructor(e){this.key=e}}class L0{constructor(e){this.key=e}}class iD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=te(),this.mutatedKeys=te(),this.eu=bT(e),this.tu=new ys(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new _v,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=Za(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let L=!1;m&&w?m.data.isEqual(w.data)?k!==D&&(r.track({type:3,doc:w}),L=!0):this.su(m,w)||(r.track({type:2,doc:w}),L=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),L=!0):m&&!w&&(r.track({type:1,doc:m}),L=!0,(u||c)&&(l=!0)),L&&(w?(o=o.add(w),s=D?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(w,k){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:L})}};return D(w)-D(k)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new js(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _v,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new L0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new O0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return js.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const gm="SyncEngine";class sD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oD{constructor(e){this.key=e,this.hu=!1}}class aD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Mn(l=>DT(l),Bc),this.Iu=new Map,this.Eu=new Set,this.du=new Ee($.comparator),this.Au=new Map,this.Ru=new im,this.Vu={},this.mu=new Map,this.fu=Ai.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lD(t,e,n=!0){const r=z0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await M0(r,e,n,!0),i}async function uD(t,e){const n=z0(t);await M0(n,e,!0,!1)}async function M0(t,e,n,r){const i=await k2(t.localStore,jt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await cD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&P0(t.remoteStore,i),l}async function cD(t,e,n,r,i){t.pu=(p,m,w)=>async function(D,L,A,v){let T=L.view.ru(A);T.Cs&&(T=await dv(D.localStore,L.query,!1).then(({documents:_})=>L.view.ru(_,T)));const V=v&&v.targetChanges.get(L.targetId),M=v&&v.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(T,D.isPrimaryClient,V,M);return Iv(D,L.targetId,F.au),F.snapshot}(t,p,m,w);const s=await dv(t.localStore,e,!0),o=new iD(e,s.Qs),l=o.ru(s.documents),u=el.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Iv(t,n,c.au);const d=new sD(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function hD(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Bc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&um(r.remoteStore,i.targetId),Nf(r,i.targetId)}).catch(xi)):(Nf(r,i.targetId),await Cf(r.localStore,i.targetId,!0))}async function dD(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function fD(t,e,n){const r=$0(t);try{const i=await function(o,l){const u=J(o),c=le.now(),d=l.reduce((w,k)=>w.add(k.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=St(),D=te();return u.Ns.getEntries(w,d).next(L=>{k=L,k.forEach((A,v)=>{v.isValidDocument()||(D=D.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,k)).next(L=>{p=L;const A=[];for(const v of l){const T=CN(v,p.get(v.key).overlayedDocument);T!=null&&A.push(new Lr(v.key,T,TT(T.value.mapValue),At.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,A,l)}).next(L=>{m=L;const A=L.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(w,L.batchId,A)})}).then(()=>({batchId:m.batchId,changes:OT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ee(X)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await rl(r,i.changes),await nl(r.remoteStore)}catch(i){const s=pm(i,"Failed to persist write");n.reject(s)}}async function F0(t,e){const n=J(t);try{const r=await P2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?H(o.hu,14607):i.removedDocuments.size>0&&(H(o.hu,42227),o.hu=!1))}),await rl(n,r,e)}catch(r){await xi(r)}}function Ev(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee($.comparator);o=o.insert(s,Ce.newNoDocument(s,G.min()));const l=te().add(s),u=new qc(G.min(),new Map,new Ee(X),o,l);await F0(r,u),r.du=r.du.remove(s),r.Au.delete(e),ym(r)}else await Cf(r.localStore,e,!1).then(()=>Nf(r,e,n)).catch(xi)}async function mD(t,e){const n=J(t),r=e.batch.batchId;try{const i=await A2(n.localStore,e);j0(n,r,null),U0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rl(n,i)}catch(i){await xi(i)}}async function gD(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(H(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);j0(r,e,n),U0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rl(r,i)}catch(i){await xi(i)}}function U0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function j0(t,e,n){const r=J(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||B0(t,r)})}function B0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(um(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ym(t))}function Iv(t,e,n){for(const r of n)r instanceof O0?(t.Ru.addReference(r.key,e),yD(t,r)):r instanceof L0?(U(gm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||B0(t,r.key)):W(19791,{wu:r})}function yD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(U(gm,"New document in limbo: "+n),t.Eu.add(r),ym(t))}function ym(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new $(ae.fromString(e)),r=t.fu.next();t.Au.set(r,new oD(n)),t.du=t.du.insert(n,r),P0(t.remoteStore,new Sn(jt(jc(n.path)),r,"TargetPurposeLimboResolution",Mt.ce))}}async function rl(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=am.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(c,m=>C.forEach(m.Es,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>C.forEach(m.ds,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Or(p))throw p;U(lm,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.Ms.get(m),k=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(m,D)}}}(r.localStore,s))}async function _D(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){U(gm,"User change. New user:",e.toKey());const r=await E0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rl(n,r.Ls)}}function vD(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return te().add(r.key);{let i=te();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function z0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pD.bind(null,e),e.Pu.H_=nD.bind(null,e.eventManager),e.Pu.yu=rD.bind(null,e.eventManager),e}function $0(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gD.bind(null,e),e}class Fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return w0(this.persistence,new v0,e.initialUser,this.serializer)}Cu(e){return new sm(Hc.mi,this.serializer)}Du(e){return new T0}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fa.provider={build:()=>new Fa};class wD extends Fa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){H(this.persistence.referenceDelegate instanceof ac,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new p0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new sm(r=>ac.mi(r,n),this.serializer)}}class ED extends Fa{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await $0(this.xu.syncEngine),await nl(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return w0(this.persistence,new v0,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new p0(r,e.asyncQueue,n)}Mu(e,n){const r=new Px(n,this.persistence);return new Ax(e.asyncQueue,r)}Cu(e){const n=E2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new om(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,L2(),mu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new T0}}class uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_D.bind(null,this.syncEngine),await Z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tD}()}createDatastore(e){const n=Gc(e.databaseInfo.databaseId),r=function(s){return new O2(s)}(e.databaseInfo);return function(s,o,l,u){return new j2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new z2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ev(this.syncEngine,n,0),function(){return mv.v()?new mv:new N2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new aD(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);U(Pi,"RemoteStore shutting down."),s.Ea.add(5),await tl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}uc.provider={build:()=>new uc};/**
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
 */class q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const kr="FirestoreClient";class ID{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=Fp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rd(t,e){t.asyncQueue.verifyOperationInProgress(),U(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TD(t);U(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yv(e.remoteStore,i)),t._onlineComponents=e}async function TD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U(kr,"Using user provided OfflineComponentProvider");try{await rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await rd(t,new Fa)}}else U(kr,"Using default OfflineComponentProvider"),await rd(t,new wD(void 0));return t._offlineComponents}async function K0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U(kr,"Using user provided OnlineComponentProvider"),await Tv(t,t._uninitializedComponentsProvider._online)):(U(kr,"Using default OnlineComponentProvider"),await Tv(t,new uc))),t._onlineComponents}function SD(t){return K0(t).then(e=>e.syncEngine)}async function W0(t){const e=await K0(t),n=e.eventManager;return n.onListen=lD.bind(null,e.syncEngine),n.onUnlisten=hD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dD.bind(null,e.syncEngine),n}function AD(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new q0({next:m=>{d.Nu(),o.enqueueAndForget(()=>b0(s,p));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new B(O.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new V0(jc(l.path),d,{includeMetadataChanges:!0,qa:!0});return D0(s,p)}(await W0(t),t.asyncQueue,e,n,r)),r.promise}function PD(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new q0({next:m=>{d.Nu(),o.enqueueAndForget(()=>b0(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new V0(l,d,{includeMetadataChanges:!0,qa:!0});return D0(s,p)}(await W0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function H0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sv=new Map;/**
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
 */const G0="firestore.googleapis.com",Av=!0;class Pv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=G0,this.ssl=Av}else this.host=e.host,this.ssl=e.ssl??Av;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i2)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ex("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hx;switch(r.type){case"firstParty":return new mx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sv.get(n);r&&(U("ComponentProvider","Removing Datastore"),Sv.delete(n),r.terminate())}(this),Promise.resolve()}}function RD(t,e,n,r={}){var c;t=Ar(t,Yc);const i=qs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(XE(`https://${l}`),JE("Firestore",!0)),s.host!==G0&&s.host!==l&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!mi(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=He.MOCK_USER;else{d=SP(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new He(m)}t._authCredentials=new dx(new YI(d,p))}}/**
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
 */class bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ya(n,Ve._jsonSchema))return new Ve(e,r||null,new $(ae.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:be("string",Ve._jsonSchemaVersion),referencePath:be("string")};class Er extends bi{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new $(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function CD(t,e,...n){if(t=ht(t),JI("collection","path",e),t instanceof Yc){const r=ae.fromString(e,...n);return g_(r),new Er(t,null,r)}{if(!(t instanceof Ve||t instanceof Er))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return g_(r),new Er(t.firestore,null,r)}}function _s(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Fp.newId()),JI("doc","path",e),t instanceof Yc){const r=ae.fromString(e,...n);return m_(r),new Ve(t,null,new $(r))}{if(!(t instanceof Ve||t instanceof Er))throw new B(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return m_(r),new Ve(t.firestore,t instanceof Er?t.converter:null,new $(r))}}/**
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
 */const Rv="AsyncQueue";class Cv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new S0(this,"async_queue_retry"),this._c=()=>{const r=mu();r&&U(Rv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new fn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Or(e))throw e;U(Rv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,lt("INTERNAL UNHANDLED ERROR: ",kv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=fm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&W(47125,{Pc:kv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function kv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class il extends Yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cv(e),this._firestoreClient=void 0,await e}}}function kD(t,e){const n=typeof t=="object"?t:oI(),r=typeof t=="string"?t:Zu,i=Cp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IP("firestore");s&&RD(i,...s)}return i}function _m(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Q0(t),t._firestoreClient}function Q0(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new tN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,H0(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ID(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}function xD(t,e){wi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return ND(t,uc.provider,{build:r=>new ED(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function ND(t,e,n){if((t=Ar(t,il))._firestoreClient||t._terminated)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new B(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},Q0(t)}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Oe.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ya(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:be("string",Ot._jsonSchemaVersion),bytes:be("string")};/**
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
 */class vm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Y0{constructor(e){this._methodName=e}}/**
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
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(Ya(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:be("string",pn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
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
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ya(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:be("string",mn._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const DD=/^__.*__$/;class bD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}function X0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:t})}}class wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new wm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return cc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(X0(this.Ac)&&DD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gc(e)}Cc(e,n,r,i=!1){return new wm({Ac:e,methodName:n,Dc:r,path:Te.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function J0(t){const e=t._freezeSettings(),n=Gc(t._databaseId);return new VD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);tS("Data must be an object, but it was:",o,r);const l=Z0(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=MD(e,p,n);if(!o.contains(m))throw new B(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);UD(d,m)||d.push(m)}u=new Ft(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new bD(new mt(l),u,c)}function LD(t,e,n,r=!1){return Em(n,t.Cc(r?4:3,e))}function Em(t,e){if(eS(t=ht(t)))return tS("Unsupported field value:",e,t),Z0(t,e);if(t instanceof Y0)return function(r,i){if(!X0(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Em(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=le.fromDate(r);return{timestampValue:Us(i.serializer,s)}}if(r instanceof le){const s=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Us(i.serializer,s)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:GT(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mn)return function(o,l){return{mapValue:{fields:{[Wp]:{stringValue:Hp},[bs]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Qp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Dc(r)}`)}(t,e)}function Z0(t,e){const n={};return pT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,i)=>{const s=Em(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof le||t instanceof pn||t instanceof Ot||t instanceof Ve||t instanceof Y0||t instanceof mn)}function tS(t,e,n){if(!eS(n)||!ZI(n)){const r=Dc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function MD(t,e,n){if((e=ht(e))instanceof vm)return e._internalPath;if(typeof e=="string")return nS(t,e);throw cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const FD=new RegExp("[~\\*/\\[\\]]");function nS(t,e,n){if(e.search(FD)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vm(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function UD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Im("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jD extends rS{data(){return super.data()}}function Im(t,e){return typeof e=="string"?nS(t,e):e instanceof vm?e._internalPath:e._delegate._internalPath}/**
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
 */function BD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tm{}class iS extends Tm{}function zD(t,e,...n){let r=[];e instanceof Tm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Am).length,l=s.filter(u=>u instanceof Sm).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sm extends iS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sm(e,n,r)}_apply(e){const n=this._parse(e);return sS(e._query,n),new bi(e.firestore,e.converter,vf(e._query,n))}_parse(e){const n=J0(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Nv(p,d);const k=[];for(const D of p)k.push(xv(u,s,D));m={arrayValue:{values:k}}}else m=xv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Nv(p,d),m=LD(l,o,p,d==="in"||d==="not-in");return ie.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Am extends Tm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Am(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ue.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)sS(o,u),o=vf(o,u)}(e._query,n),new bi(e.firestore,e.converter,vf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pm extends iS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(s,o)}(e._query,this._field,this._direction);return new bi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Gs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function $D(t,e="asc"){const n=e,r=Im("orderBy",t);return Pm._create(r,n)}function xv(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NT(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!$.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ba(t,new $(r))}if(n instanceof Ve)return ba(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(n)}.`)}function Nv(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qD{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[bs].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>ve(o.doubleValue));return new mn(n)}convertGeoPoint(e){return new pn(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const n=bn(e);return new le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);H(i0(r),9688,{name:e});const i=new Ei(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function KD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends rS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Im("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ui._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",ui._jsonSchema={type:be("string",ui._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class gu extends ui{data(e={}){return super.data(e)}}class vs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gu(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Uo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Uo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:WD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:t})}}/**
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
 */function oS(t){t=Ar(t,Ve);const e=Ar(t.firestore,il);return AD(_m(e),t._key).then(n=>QD(e,t,n))}vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:be("string",vs._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class aS extends qD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function HD(t){t=Ar(t,bi);const e=Ar(t.firestore,il),n=_m(e),r=new aS(e);return BD(t._query),PD(n,t._query).then(i=>new vs(e,r,t,i))}function hc(t,e,n){t=Ar(t,Ve);const r=Ar(t.firestore,il),i=KD(t.converter,e);return GD(r,[OD(J0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,At.none())])}function GD(t,e){return function(r,i){const s=new fn;return r.asyncQueue.enqueueAndForget(async()=>fD(await SD(r),i,s)),s.promise}(_m(t),e)}function QD(t,e,n){const r=n.docs.get(e._key),i=new aS(t);return new ui(t,i,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Hs=i})(Ks),Rs(new gi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new il(new fx(r.getProvider("auth-internal")),new gx(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_r(h_,d_,e),_r(h_,d_,"esm2020")})();const YD={apiKey:"AIzaSyCzkW-duMJG0oofxiP1_RuUxeSZTFE3OPg",authDomain:"daily-code-journal.firebaseapp.com",projectId:"daily-code-journal",storageBucket:"daily-code-journal.firebasestorage.app",messagingSenderId:"120707589758",appId:"1:120707589758:web:a805f734ca9fb204d21a2f"},lS=sI(YD),zl=ax(lS),Ir=kD(lS);xD(Ir).catch(t=>{t.code==="failed-precondition"?console.warn("Multiple tabs open, persistence enabled in first tab only"):t.code==="unimplemented"&&console.warn("Browser does not support offline persistence")});function XD(){const[t,e]=de.useState(null),[n,r]=de.useState(!0);return de.useEffect(()=>QC(zl,l=>{e(l),r(!1)}),[]),{user:t,loading:n,login:async(o,l)=>{try{return{success:!0,user:(await WC(zl,o,l)).user}}catch(u){if(u.code==="auth/user-not-found"||u.code==="auth/invalid-credential")try{return{success:!0,user:(await KC(zl,o,l)).user,newUser:!0}}catch(c){return{success:!1,error:c.message}}return{success:!1,error:u.message}}},logout:async()=>{try{return await YC(zl),{success:!0}}catch(o){return{success:!1,error:o.message}}}}}const JD=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),R.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),R.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),R.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),uS=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),R.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),ZD=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),R.jsx("polyline",{points:"17 6 23 6 23 12"})]}),cS=()=>R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:R.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),eb=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),R.jsx("polyline",{points:"16 17 21 12 16 7"}),R.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),tb=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),R.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),hS=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),R.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),R.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),nb=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("circle",{cx:"12",cy:"8",r:"7"}),R.jsx("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"})]}),rb=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),R.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),ib=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),R.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),sb=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("circle",{cx:"12",cy:"12",r:"10"}),R.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),R.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]});function ob({onLogin:t}){const[e,n]=de.useState(""),[r,i]=de.useState(""),[s,o]=de.useState(!1),[l,u]=de.useState(""),c=async d=>{d.preventDefault(),u(""),o(!0);const p=await t(e,r);p.success||u(p.error),o(!1)};return R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full",children:[R.jsxs("div",{className:"text-center mb-8",children:[R.jsx("div",{className:"w-16 h-16 mx-auto mb-4 text-purple-300",children:R.jsx(uS,{})}),R.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Daily Code Journal"}),R.jsx("p",{className:"text-purple-200",children:"Sign in to continue"})]}),R.jsxs("form",{onSubmit:c,children:[R.jsx("div",{className:"mb-4",children:R.jsx("input",{type:"email",value:e,onChange:d=>n(d.target.value),placeholder:"your.email@example.com",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400",required:!0,disabled:s})}),R.jsx("div",{className:"mb-4",children:R.jsx("input",{type:"password",value:r,onChange:d=>i(d.target.value),placeholder:"Password (min 6 characters)",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400",required:!0,minLength:6,disabled:s})}),l&&R.jsx("div",{className:"mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm",children:l}),R.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Loading...":"Sign In / Sign Up"})]}),R.jsx("p",{className:"text-white/60 text-sm text-center mt-4",children:"Your data is securely stored in the cloud and synced across devices."})]})})}function ab({profile:t,setProfile:e,onSave:n}){return R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full",children:[R.jsxs("div",{className:"text-center mb-8",children:[R.jsx("div",{className:"w-16 h-16 mx-auto mb-4 text-purple-300",children:R.jsx(tb,{})}),R.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Setup Your Profile"}),R.jsx("p",{className:"text-purple-200",children:"Tell us a bit about yourself"})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Full Name"}),R.jsx("input",{type:"text",value:t.name,onChange:r=>e({...t,name:r.target.value}),placeholder:"John Doe",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Nickname / GitHub Username"}),R.jsx("input",{type:"text",value:t.nickname,onChange:r=>e({...t,nickname:r.target.value}),placeholder:"johndoe",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),R.jsx("button",{onClick:()=>n(t),className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all",children:"Save Profile"})]})]})})}function lb({currentStreak:t,totalEntries:e,completionScore:n}){return R.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[R.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[R.jsx("div",{className:"w-5 h-5",children:R.jsx(cS,{})}),R.jsx("span",{className:"text-sm",children:"Current Streak"})]}),R.jsxs("div",{className:"text-3xl font-bold text-white",children:[t," days"]})]}),R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[R.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[R.jsx("div",{className:"w-5 h-5",children:R.jsx(ZD,{})}),R.jsx("span",{className:"text-sm",children:"Total Entries"})]}),R.jsx("div",{className:"text-3xl font-bold text-white",children:e})]}),R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[R.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[R.jsx("div",{className:"w-5 h-5",children:R.jsx(nb,{})}),R.jsx("span",{className:"text-sm",children:"Completion Rate"})]}),R.jsxs("div",{className:"text-3xl font-bold text-white",children:[n,"%"]})]})]})}function ub({streakHistory:t}){return t.length===0?null:R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-6",children:[R.jsxs("h3",{className:"text-white font-semibold mb-3 flex items-center gap-2",children:[R.jsx(cS,{})," All Streaks"]}),R.jsx("div",{className:"space-y-2",children:t.map((e,n)=>R.jsxs("div",{className:"bg-white/10 rounded-lg p-3 flex justify-between items-center",children:[R.jsxs("span",{className:"text-white",children:[e.start," to ",e.end]}),R.jsxs("span",{className:"text-purple-300 font-bold",children:[e.count," days 🔥"]})]},n))})]})}const cb=["😊","🤔","😤","🔥","😴","🎉","😅","💪"];function hb({selectedDate:t,setSelectedDate:e,currentEntry:n,setCurrentEntry:r,onSave:i,onExportMarkdown:s,onPrint:o}){const l=()=>new Date().toISOString().split("T")[0];return R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl",children:[R.jsxs("div",{className:"mb-6",children:[R.jsxs("label",{className:"flex items-center gap-2 text-white mb-2 font-medium",children:[R.jsx("div",{className:"w-5 h-5",children:R.jsx(JD,{})}),"Select Date"]}),R.jsx("input",{type:"date",value:t,onChange:u=>e(u.target.value),max:l(),className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"What I worked on"}),R.jsx("textarea",{value:n.worked,onChange:u=>r({...n,worked:u.target.value}),placeholder:"Describe what you built or worked on today...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"What I learned"}),R.jsx("textarea",{value:n.learned,onChange:u=>r({...n,learned:u.target.value}),placeholder:"New concepts, techniques, or insights...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Challenges"}),R.jsx("textarea",{value:n.challenges,onChange:u=>r({...n,challenges:u.target.value}),placeholder:"Bugs, obstacles, or tough problems...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Tomorrow's goals"}),R.jsx("textarea",{value:n.goals,onChange:u=>r({...n,goals:u.target.value}),placeholder:"What you want to accomplish next...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Did you complete today's tasks?"}),R.jsxs("div",{className:"flex gap-4",children:[R.jsxs("button",{onClick:()=>r({...n,tasksCompleted:!0}),className:`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${n.tasksCompleted?"bg-green-500 text-white":"bg-white/20 text-white/70 hover:bg-white/30"}`,children:[R.jsx(ib,{})," Yes"]}),R.jsxs("button",{onClick:()=>r({...n,tasksCompleted:!1}),className:`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${n.tasksCompleted?"bg-white/20 text-white/70 hover:bg-white/30":"bg-red-500 text-white"}`,children:[R.jsx(sb,{})," No"]})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Today's mood"}),R.jsx("div",{className:"flex gap-2 flex-wrap",children:cb.map(u=>R.jsx("button",{onClick:()=>r({...n,mood:u}),className:`text-3xl p-3 rounded-lg transition-all ${n.mood===u?"bg-purple-500 scale-110":"bg-white/20 hover:bg-white/30"}`,children:u},u))})]})]}),R.jsxs("div",{className:"flex gap-3 mt-6 flex-wrap",children:[R.jsx("button",{onClick:i,className:"flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all",children:"💾 Save Entry"}),R.jsx("button",{onClick:s,className:"px-6 bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30",children:"⬇️ Export .md"}),R.jsxs("button",{onClick:o,className:"px-6 bg-green-500/30 text-white py-3 rounded-lg font-semibold hover:bg-green-500/40 transition-all border border-green-400/30 flex items-center gap-2",title:"Print or Save as PDF",children:[R.jsx(hS,{})," Print"]})]}),R.jsx("div",{className:"mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg",children:R.jsxs("p",{className:"text-blue-100 text-sm",children:[R.jsx("strong",{children:"📝 Daily workflow:"})," Write entry → Mark tasks → Save → Export .md → Commit to GitHub!"]})})]})}function db({entries:t,onSelectEntry:e,onExportAll:n,notificationTime:r,notificationsEnabled:i,onToggleNotifications:s,onSaveNotificationTime:o}){return R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[R.jsxs("div",{className:"flex justify-between items-center mb-4",children:[R.jsx("h2",{className:"text-2xl font-bold text-white",children:"All Entries"}),R.jsxs("button",{onClick:n,className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2",children:[R.jsx(hS,{})," Export All"]})]}),Object.keys(t).length===0?R.jsx("p",{className:"text-white/60 text-center py-8",children:"No entries yet. Start writing!"}):R.jsx("div",{className:"space-y-2",children:Object.keys(t).sort().reverse().map(l=>{const u=t[l];return R.jsx("button",{onClick:()=>e(l),className:"w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all",children:R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-white font-medium block",children:l}),R.jsx("span",{className:"text-white/60 text-sm",children:u.tasksCompleted?"✅ Completed":"❌ Not Completed"})]}),R.jsx("span",{className:"text-2xl",children:u.mood})]})},l)})})]}),R.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[R.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[R.jsx(rb,{})," Reminder Settings"]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsx("span",{className:"text-white",children:"Enable daily reminders"}),R.jsx("button",{onClick:s,className:`px-4 py-2 rounded-lg font-medium transition-all ${i?"bg-green-500 text-white":"bg-white/20 text-white/70"}`,children:i?"ON":"OFF"})]}),i&&R.jsxs("div",{children:[R.jsx("label",{className:"text-white font-medium mb-2 block",children:"Reminder Time"}),R.jsx("input",{type:"time",value:r,onChange:l=>o(l.target.value),className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"})]})]})]})]})}function fb(t){const[e,n]=de.useState({}),[r,i]=de.useState(!0);de.useEffect(()=>{t&&s()},[t]);const s=async()=>{if(t)try{const u=CD(Ir,"users",t,"entries"),c=zD(u,$D("date","desc")),d=await HD(c),p={};d.forEach(m=>{const w=m.data();p[w.date]={worked:w.worked||"",learned:w.learned||"",challenges:w.challenges||"",goals:w.goals||"",mood:w.mood||"😊",tasksCompleted:w.tasksCompleted||!1}}),n(p),await o(p)}catch(u){console.error("Error loading entries:",u)}finally{i(!1)}},o=async u=>{try{const c=localStorage.getItem(`journal-entries-${t}`);if(c){const d=JSON.parse(c);let p=0;for(const[m,w]of Object.entries(d))u[m]||(await l(m,w),u[m]=w,p++);p>0&&(console.log(`✅ Migrated ${p} entries from localStorage to Firestore`),n(u),localStorage.removeItem(`journal-entries-${t}`),localStorage.removeItem(`streak-history-${t}`))}}catch(c){console.error("Error migrating data:",c)}},l=async(u,c)=>{if(!(!t||!u))try{const d=_s(Ir,"users",t,"entries",u);return await hc(d,{date:u,worked:c.worked||"",learned:c.learned||"",challenges:c.challenges||"",goals:c.goals||"",mood:c.mood||"😊",tasksCompleted:c.tasksCompleted||!1,updatedAt:new Date().toISOString()}),n(p=>({...p,[u]:c})),{success:!0}}catch(d){return console.error("Error saving entry:",d),{success:!1,error:d.message}}};return{entries:e,loading:r,saveEntry:l,reloadEntries:s}}function pb(t){const e=Object.keys(t).sort();if(e.length===0)return[];const n=[];let r={start:e[0],end:e[0],count:1};for(let i=1;i<e.length;i++){const s=new Date(e[i-1]),o=new Date(e[i]),l=Math.floor((o-s)/(1e3*60*60*24));l===1?(r.end=e[i],r.count++):l>1&&(n.push({...r}),r={start:e[i],end:e[i],count:1})}return n.push(r),n}function mb(t){if(t.length===0)return 0;const e=t[t.length-1],n=new Date().toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-1);const i=r.toISOString().split("T")[0];return e.end===n||e.end===i?e.count:0}function gb(t,e,n){const s=`# ${new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

**Author:** ${n.name} (@${n.nickname})
**Tasks Completed:** ${e.tasksCompleted?"✅ Yes":"❌ No"}

## What I worked on
${e.worked||"Nothing recorded"}

## What I learned
${e.learned||"Nothing recorded"}

## Challenges
${e.challenges||"None"}

## Tomorrow's goals
${e.goals||"Not set"}

## Mood: ${e.mood}
`,o=new Blob([s],{type:"text/markdown"}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=`${t}.md`,u.click(),URL.revokeObjectURL(l)}function yb(t,e,n){const i=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),s=window.open("","_blank");s.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Journal Entry - ${i}</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 10px;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .author {
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 30px;
        }
        .status {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        .content {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          white-space: pre-wrap;
        }
        .mood {
          font-size: 2em;
          text-align: center;
          margin: 20px 0;
        }
        @media print {
          body { margin: 20px; }
        }
      </style>
    </head>
    <body>
      <h1>${i}</h1>
      <p class="author">Author: ${n.name} (@${n.nickname})</p>
      <div class="status ${e.tasksCompleted?"completed":"incomplete"}">
        ${e.tasksCompleted?"✅ Tasks Completed":"❌ Tasks Not Completed"}
      </div>
      
      <h2>What I worked on</h2>
      <div class="content">${e.worked||"Nothing recorded"}</div>
      
      <h2>What I learned</h2>
      <div class="content">${e.learned||"Nothing recorded"}</div>
      
      <h2>Challenges</h2>
      <div class="content">${e.challenges||"None"}</div>
      
      <h2>Tomorrow's goals</h2>
      <div class="content">${e.goals||"Not set"}</div>
      
      <div class="mood">Mood: ${e.mood}</div>
    </body>
    </html>
  `),s.document.close(),s.print()}function _b(t,e){const n=Object.keys(t).sort();if(n.length===0){alert("No entries to export");return}let r=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${e.name}'s Coding Journal</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 { color: #2c3e50; text-align: center; margin-bottom: 40px; }
        .entry {
          page-break-inside: avoid;
          margin-bottom: 50px;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }
        .entry-date {
          color: #3498db;
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .status {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        h3 { color: #34495e; margin-top: 15px; margin-bottom: 5px; }
        .content { margin-bottom: 15px; white-space: pre-wrap; }
        .mood { font-size: 1.5em; }
        @media print {
          body { margin: 20px; }
          .entry { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <h1>📔 ${e.name}'s Coding Journal</h1>
  `;n.forEach(s=>{const o=t[s],u=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});r+=`
      <div class="entry">
        <div class="entry-date">${u}</div>
        <div class="status ${o.tasksCompleted?"completed":"incomplete"}">
          ${o.tasksCompleted?"✅ Tasks Completed":"❌ Tasks Not Completed"}
        </div>
        
        <h3>What I worked on</h3>
        <div class="content">${o.worked||"Nothing recorded"}</div>
        
        <h3>What I learned</h3>
        <div class="content">${o.learned||"Nothing recorded"}</div>
        
        <h3>Challenges</h3>
        <div class="content">${o.challenges||"None"}</div>
        
        <h3>Tomorrow's goals</h3>
        <div class="content">${o.goals||"Not set"}</div>
        
        <div class="mood">Mood: ${o.mood}</div>
      </div>
    `}),r+=`
    </body>
    </html>
  `;const i=window.open("","_blank");i.document.write(r),i.document.close(),i.print()}function vb(t,e){const{entries:n,loading:r,saveEntry:i}=fb(t),[s,o]=de.useState([]),[l,u]=de.useState({worked:"",learned:"",challenges:"",goals:"",mood:"😊",tasksCompleted:!1}),[c,d]=de.useState("");de.useEffect(()=>{d(p())},[]),de.useEffect(()=>{Object.keys(n).length>0&&m(n)},[n]),de.useEffect(()=>{c&&n[c]?u(n[c]):c&&u({worked:"",learned:"",challenges:"",goals:"",mood:"😊",tasksCompleted:!1})},[c,n]);const p=()=>new Date().toISOString().split("T")[0],m=T=>{const V=pb(T);o(V)};return{entries:n,loading:r,streakHistory:s,currentEntry:l,setCurrentEntry:u,selectedDate:c,setSelectedDate:d,saveEntry:async()=>{if(!c)return;const T=await i(c,l);T.success?alert("✅ Entry saved to cloud!"):alert("❌ Failed to save: "+T.error)},getCurrentStreak:()=>mb(s),getCompletionScore:()=>{const T=Object.values(n);if(T.length===0)return 0;const V=T.filter(M=>M.tasksCompleted).length;return Math.round(V/T.length*100)},exportToMarkdown:()=>{if(!c||!n[c]){alert("No entry for this date");return}gb(c,n[c],e)},printEntry:()=>{if(!c||!n[c]){alert("No entry for this date");return}yb(c,n[c],e)},exportAllToPDF:()=>{_b(n,e)}}}function wb(t){const[e,n]=de.useState("18:00"),[r,i]=de.useState(!1);de.useEffect(()=>{t&&s()},[t]),de.useEffect(()=>{r&&o()},[e,r]);const s=async()=>{try{const c=await oS(_s(Ir,"users",t,"settings","notifications"));if(c.exists()){const d=c.data();n(d.time||"18:00"),i(d.enabled||!1)}}catch(c){console.error("Error loading notification settings:",c)}},o=()=>{const[c,d]=e.split(":"),p=new Date,m=new Date;m.setHours(parseInt(c),parseInt(d),0,0),m<=p&&m.setDate(m.getDate()+1);const w=m-p;setTimeout(()=>{Notification.permission==="granted"&&new Notification("📔 Daily Code Journal Reminder",{body:"Time to log your coding day! Don't break the streak!",icon:"📔",badge:"🔥"}),o()},w)};return{notificationTime:e,notificationsEnabled:r,toggleNotifications:async()=>{const c=!r;if(c&&Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){alert("Please enable notifications in your browser settings");return}try{await hc(_s(Ir,"users",t,"settings","notifications"),{enabled:c,time:e}),i(c)}catch(d){console.error("Error saving notification settings:",d)}},saveNotificationTime:async c=>{try{await hc(_s(Ir,"users",t,"settings","notifications"),{enabled:r,time:c}),n(c)}catch(d){console.error("Error saving notification time:",d)}}}}function Eb({userId:t,userProfile:e,onLogout:n}){const[r,i]=de.useState("today"),{entries:s,loading:o,streakHistory:l,currentEntry:u,setCurrentEntry:c,selectedDate:d,setSelectedDate:p,saveEntry:m,getCurrentStreak:w,getCompletionScore:k,exportToMarkdown:D,printEntry:L,exportAllToPDF:A}=vb(t,e),{notificationTime:v,notificationsEnabled:T,toggleNotifications:V,saveNotificationTime:M}=wb(t);return o?R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:R.jsx("div",{className:"text-white text-xl",children:"Loading your journal..."})}):R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4",children:R.jsxs("div",{className:"max-w-4xl mx-auto",children:[R.jsxs("div",{className:"text-center mb-8 pt-8",children:[R.jsxs("div",{className:"flex items-center justify-between mb-4",children:[R.jsx("div",{}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsxs("div",{className:"text-right",children:[R.jsx("p",{className:"text-white font-semibold",children:e.name}),R.jsxs("p",{className:"text-purple-200 text-sm",children:["@",e.nickname]})]}),R.jsx("button",{onClick:n,className:"p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all",title:"Logout",children:R.jsx(eb,{})})]})]}),R.jsxs("h1",{className:"text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3",children:[R.jsx("div",{className:"w-12 h-12",children:R.jsx(uS,{})}),"Daily Code Journal"]}),R.jsx("p",{className:"text-purple-200",children:"Document your coding journey, one day at a time"}),R.jsx("p",{className:"text-purple-300 text-sm mt-2",children:"☁️ Synced across all your devices"})]}),R.jsxs("div",{className:"flex gap-2 mb-6 justify-center",children:[R.jsx("button",{onClick:()=>i("today"),className:`px-6 py-2 rounded-lg font-medium transition-all ${r==="today"?"bg-purple-500 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Today's Entry"}),R.jsx("button",{onClick:()=>i("history"),className:`px-6 py-2 rounded-lg font-medium transition-all ${r==="history"?"bg-purple-500 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"History"})]}),R.jsx(lb,{currentStreak:w(),totalEntries:Object.keys(s).length,completionScore:k()}),R.jsx(ub,{streakHistory:l}),r==="today"?R.jsx(hb,{selectedDate:d,setSelectedDate:p,currentEntry:u,setCurrentEntry:c,onSave:m,onExportMarkdown:D,onPrint:L}):R.jsx(db,{entries:s,onSelectEntry:F=>{p(F),i("today")},onExportAll:A,notificationTime:v,notificationsEnabled:T,onToggleNotifications:V,onSaveNotificationTime:M})]})})}function Ib(){const{user:t,loading:e,login:n,logout:r}=XD(),[i,s]=de.useState({name:"",nickname:""}),[o,l]=de.useState(!1),[u,c]=de.useState(!0);de.useEffect(()=>{t?d():c(!1)},[t]);const d=async()=>{if(t)try{const w=await oS(_s(Ir,"profiles",t.uid));w.exists()?(s(w.data()),l(!1)):l(!0)}catch(w){console.error("Error loading profile:",w)}finally{c(!1)}},p=async w=>{if(!w.name||!w.nickname){alert("Please fill in both name and nickname");return}try{await hc(_s(Ir,"profiles",t.uid),w),s(w),l(!1),alert("✅ Profile saved!")}catch(k){console.error("Error saving profile:",k),alert("Failed to save profile. Please try again.")}},m=async()=>{(await r()).success&&(s({name:"",nickname:""}),l(!1))};return e||u?R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:R.jsx("div",{className:"text-white text-xl",children:"Loading..."})}):t?o?R.jsx(ab,{profile:i,setProfile:s,onSave:p}):R.jsx(Eb,{userId:t.uid,userProfile:i,onLogout:m}):R.jsx(ob,{onLogin:n})}id.createRoot(document.getElementById("root")).render(R.jsx(r1.StrictMode,{children:R.jsx(Ib,{})}));
