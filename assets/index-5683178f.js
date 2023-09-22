function jz(e,c){for(var a=0;a<c.length;a++){const r=c[a];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const t=Object.getOwnPropertyDescriptor(r,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();function q9(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K9={exports:{}},Pe={},Y9={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=Symbol.for("react.element"),$z=Symbol.for("react.portal"),Gz=Symbol.for("react.fragment"),qz=Symbol.for("react.strict_mode"),Kz=Symbol.for("react.profiler"),Yz=Symbol.for("react.provider"),Xz=Symbol.for("react.context"),Qz=Symbol.for("react.forward_ref"),Jz=Symbol.for("react.suspense"),Zz=Symbol.for("react.memo"),eH=Symbol.for("react.lazy"),Mn=Symbol.iterator;function cH(e){return e===null||typeof e!="object"?null:(e=Mn&&e[Mn]||e["@@iterator"],typeof e=="function"?e:null)}var X9={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q9=Object.assign,J9={};function a6(e,c,a){this.props=e,this.context=c,this.refs=J9,this.updater=a||X9}a6.prototype.isReactComponent={};a6.prototype.setState=function(e,c){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,c,"setState")};a6.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z9(){}Z9.prototype=a6.prototype;function W7(e,c,a){this.props=e,this.context=c,this.refs=J9,this.updater=a||X9}var j7=W7.prototype=new Z9;j7.constructor=W7;Q9(j7,a6.prototype);j7.isPureReactComponent=!0;var Cn=Array.isArray,ei=Object.prototype.hasOwnProperty,$7={current:null},ci={key:!0,ref:!0,__self:!0,__source:!0};function ai(e,c,a){var r,n={},t=null,i=null;if(c!=null)for(r in c.ref!==void 0&&(i=c.ref),c.key!==void 0&&(t=""+c.key),c)ei.call(c,r)&&!ci.hasOwnProperty(r)&&(n[r]=c[r]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];n.children=o}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)n[r]===void 0&&(n[r]=s[r]);return{$$typeof:y0,type:e,key:t,ref:i,props:n,_owner:$7.current}}function aH(e,c){return{$$typeof:y0,type:e.type,key:c,ref:e.ref,props:e.props,_owner:e._owner}}function G7(e){return typeof e=="object"&&e!==null&&e.$$typeof===y0}function rH(e){var c={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return c[a]})}var Ln=/\/+/g;function S5(e,c){return typeof e=="object"&&e!==null&&e.key!=null?rH(""+e.key):c.toString(36)}function x8(e,c,a,r,n){var t=typeof e;(t==="undefined"||t==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(t){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y0:case $z:i=!0}}if(i)return i=e,n=n(i),e=r===""?"."+S5(i,0):r,Cn(n)?(a="",e!=null&&(a=e.replace(Ln,"$&/")+"/"),x8(n,c,a,"",function(l){return l})):n!=null&&(G7(n)&&(n=aH(n,a+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(Ln,"$&/")+"/")+e)),c.push(n)),1;if(i=0,r=r===""?".":r+":",Cn(e))for(var s=0;s<e.length;s++){t=e[s];var o=r+S5(t,s);i+=x8(t,c,a,o,n)}else if(o=cH(e),typeof o=="function")for(e=o.call(e),s=0;!(t=e.next()).done;)t=t.value,o=r+S5(t,s++),i+=x8(t,c,a,o,n);else if(t==="object")throw c=String(e),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.");return i}function J0(e,c,a){if(e==null)return e;var r=[],n=0;return x8(e,r,"","",function(t){return c.call(a,t,n++)}),r}function nH(e){if(e._status===-1){var c=e._result;c=c(),c.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=c)}if(e._status===1)return e._result.default;throw e._result}var A2={current:null},S8={transition:null},tH={ReactCurrentDispatcher:A2,ReactCurrentBatchConfig:S8,ReactCurrentOwner:$7};O.Children={map:J0,forEach:function(e,c,a){J0(e,function(){c.apply(this,arguments)},a)},count:function(e){var c=0;return J0(e,function(){c++}),c},toArray:function(e){return J0(e,function(c){return c})||[]},only:function(e){if(!G7(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=a6;O.Fragment=Gz;O.Profiler=Kz;O.PureComponent=W7;O.StrictMode=qz;O.Suspense=Jz;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tH;O.cloneElement=function(e,c,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Q9({},e.props),n=e.key,t=e.ref,i=e._owner;if(c!=null){if(c.ref!==void 0&&(t=c.ref,i=$7.current),c.key!==void 0&&(n=""+c.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(o in c)ei.call(c,o)&&!ci.hasOwnProperty(o)&&(r[o]=c[o]===void 0&&s!==void 0?s[o]:c[o])}var o=arguments.length-2;if(o===1)r.children=a;else if(1<o){s=Array(o);for(var l=0;l<o;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:y0,type:e.type,key:n,ref:t,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Xz,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yz,_context:e},e.Consumer=e};O.createElement=ai;O.createFactory=function(e){var c=ai.bind(null,e);return c.type=e,c};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Qz,render:e}};O.isValidElement=G7;O.lazy=function(e){return{$$typeof:eH,_payload:{_status:-1,_result:e},_init:nH}};O.memo=function(e,c){return{$$typeof:Zz,type:e,compare:c===void 0?null:c}};O.startTransition=function(e){var c=S8.transition;S8.transition={};try{e()}finally{S8.transition=c}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,c){return A2.current.useCallback(e,c)};O.useContext=function(e){return A2.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return A2.current.useDeferredValue(e)};O.useEffect=function(e,c){return A2.current.useEffect(e,c)};O.useId=function(){return A2.current.useId()};O.useImperativeHandle=function(e,c,a){return A2.current.useImperativeHandle(e,c,a)};O.useInsertionEffect=function(e,c){return A2.current.useInsertionEffect(e,c)};O.useLayoutEffect=function(e,c){return A2.current.useLayoutEffect(e,c)};O.useMemo=function(e,c){return A2.current.useMemo(e,c)};O.useReducer=function(e,c,a){return A2.current.useReducer(e,c,a)};O.useRef=function(e){return A2.current.useRef(e)};O.useState=function(e){return A2.current.useState(e)};O.useSyncExternalStore=function(e,c,a){return A2.current.useSyncExternalStore(e,c,a)};O.useTransition=function(){return A2.current.useTransition()};O.version="18.2.0";Y9.exports=O;var z=Y9.exports;const m2=q9(z),iH=jz({__proto__:null,default:m2},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sH=z,oH=Symbol.for("react.element"),lH=Symbol.for("react.fragment"),fH=Object.prototype.hasOwnProperty,uH=sH.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dH={key:!0,ref:!0,__self:!0,__source:!0};function ri(e,c,a){var r,n={},t=null,i=null;a!==void 0&&(t=""+a),c.key!==void 0&&(t=""+c.key),c.ref!==void 0&&(i=c.ref);for(r in c)fH.call(c,r)&&!dH.hasOwnProperty(r)&&(n[r]=c[r]);if(e&&e.defaultProps)for(r in c=e.defaultProps,c)n[r]===void 0&&(n[r]=c[r]);return{$$typeof:oH,type:e,key:t,ref:i,props:n,_owner:uH.current}}Pe.Fragment=lH;Pe.jsx=ri;Pe.jsxs=ri;K9.exports=Pe;var T=K9.exports,gc={},ni={exports:{}},q2={},ti={exports:{}},ii={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function c(S,P){var R=S.length;S.push(P);e:for(;0<R;){var G=R-1>>>1,F=S[G];if(0<n(F,P))S[G]=P,S[R]=F,R=G;else break e}}function a(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var P=S[0],R=S.pop();if(R!==P){S[0]=R;e:for(var G=0,F=S.length,T2=F>>>1;G<T2;){var N2=2*(G+1)-1,S1=S[N2],t2=N2+1,N1=S[t2];if(0>n(S1,R))t2<F&&0>n(N1,S1)?(S[G]=N1,S[t2]=R,G=t2):(S[G]=S1,S[N2]=R,G=N2);else if(t2<F&&0>n(N1,R))S[G]=N1,S[t2]=R,G=t2;else break e}}return P}function n(S,P){var R=S.sortIndex-P.sortIndex;return R!==0?R:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var t=performance;e.unstable_now=function(){return t.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var o=[],l=[],f=1,u=null,h=3,v=!1,V=!1,H=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var P=a(l);P!==null;){if(P.callback===null)r(l);else if(P.startTime<=S)r(l),P.sortIndex=P.expirationTime,c(o,P);else break;P=a(l)}}function g(S){if(H=!1,p(S),!V)if(a(o)!==null)V=!0,K1(M);else{var P=a(l);P!==null&&H2(g,P.startTime-S)}}function M(S,P){V=!1,H&&(H=!1,m(x),x=-1),v=!0;var R=h;try{for(p(P),u=a(o);u!==null&&(!(u.expirationTime>P)||S&&!D());){var G=u.callback;if(typeof G=="function"){u.callback=null,h=u.priorityLevel;var F=G(u.expirationTime<=P);P=e.unstable_now(),typeof F=="function"?u.callback=F:u===a(o)&&r(o),p(P)}else r(o);u=a(o)}if(u!==null)var T2=!0;else{var N2=a(l);N2!==null&&H2(g,N2.startTime-P),T2=!1}return T2}finally{u=null,h=R,v=!1}}var y=!1,L=null,x=-1,E=5,A=-1;function D(){return!(e.unstable_now()-A<E)}function v2(){if(L!==null){var S=e.unstable_now();A=S;var P=!0;try{P=L(!0,S)}finally{P?z2():(y=!1,L=null)}}else y=!1}var z2;if(typeof d=="function")z2=function(){d(v2)};else if(typeof MessageChannel<"u"){var F2=new MessageChannel,I3=F2.port2;F2.port1.onmessage=v2,z2=function(){I3.postMessage(null)}}else z2=function(){C(v2,0)};function K1(S){L=S,y||(y=!0,z2())}function H2(S,P){x=C(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){V||v||(V=!0,K1(M))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return a(o)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var R=h;h=P;try{return S()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=h;h=S;try{return P()}finally{h=R}},e.unstable_scheduleCallback=function(S,P,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,S){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=R+F,S={id:f++,callback:P,priorityLevel:S,startTime:R,expirationTime:F,sortIndex:-1},R>G?(S.sortIndex=R,c(l,S),a(o)===null&&S===a(l)&&(H?(m(x),x=-1):H=!0,H2(g,R-G))):(S.sortIndex=F,c(o,S),V||v||(V=!0,K1(M))),S},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(S){var P=h;return function(){var R=h;h=P;try{return S.apply(this,arguments)}finally{h=R}}}})(ii);ti.exports=ii;var hH=ti.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=z,G2=hH;function w(e){for(var c="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)c+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oi=new Set,q6={};function i4(e,c){q4(e,c),q4(e+"Capture",c)}function q4(e,c){for(q6[e]=c,e=0;e<c.length;e++)oi.add(c[e])}var D1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,mH=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yn={},wn={};function pH(e){return Vc.call(wn,e)?!0:Vc.call(yn,e)?!1:mH.test(e)?wn[e]=!0:(yn[e]=!0,!1)}function vH(e,c,a,r){if(a!==null&&a.type===0)return!1;switch(typeof c){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zH(e,c,a,r){if(c===null||typeof c>"u"||vH(e,c,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!c;case 4:return c===!1;case 5:return isNaN(c);case 6:return isNaN(c)||1>c}return!1}function E2(e,c,a,r,n,t,i){this.acceptsBooleans=c===2||c===3||c===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=a,this.propertyName=e,this.type=c,this.sanitizeURL=t,this.removeEmptyString=i}var C2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C2[e]=new E2(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var c=e[0];C2[c]=new E2(c,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){C2[e]=new E2(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C2[e]=new E2(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C2[e]=new E2(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){C2[e]=new E2(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){C2[e]=new E2(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){C2[e]=new E2(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){C2[e]=new E2(e,5,!1,e.toLowerCase(),null,!1,!1)});var q7=/[\-:]([a-z])/g;function K7(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var c=e.replace(q7,K7);C2[c]=new E2(c,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var c=e.replace(q7,K7);C2[c]=new E2(c,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var c=e.replace(q7,K7);C2[c]=new E2(c,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){C2[e]=new E2(e,1,!1,e.toLowerCase(),null,!1,!1)});C2.xlinkHref=new E2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){C2[e]=new E2(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y7(e,c,a,r){var n=C2.hasOwnProperty(c)?C2[c]:null;(n!==null?n.type!==0:r||!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N")&&(zH(c,a,n,r)&&(a=null),r||n===null?pH(c)&&(a===null?e.removeAttribute(c):e.setAttribute(c,""+a)):n.mustUseProperty?e[n.propertyName]=a===null?n.type===3?!1:"":a:(c=n.attributeName,r=n.attributeNamespace,a===null?e.removeAttribute(c):(n=n.type,a=n===3||n===4&&a===!0?"":""+a,r?e.setAttributeNS(r,c,a):e.setAttribute(c,a))))}var G1=si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z0=Symbol.for("react.element"),V4=Symbol.for("react.portal"),M4=Symbol.for("react.fragment"),X7=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),li=Symbol.for("react.provider"),fi=Symbol.for("react.context"),Q7=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),J7=Symbol.for("react.memo"),a3=Symbol.for("react.lazy"),ui=Symbol.for("react.offscreen"),xn=Symbol.iterator;function z6(e){return e===null||typeof e!="object"?null:(e=xn&&e[xn]||e["@@iterator"],typeof e=="function"?e:null)}var c2=Object.assign,N5;function w6(e){if(N5===void 0)try{throw Error()}catch(a){var c=a.stack.trim().match(/\n( *(at )?)/);N5=c&&c[1]||""}return`
`+N5+e}var k5=!1;function b5(e,c){if(!e||k5)return"";k5=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(c)if(c=function(){throw Error()},Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(l){var r=l}Reflect.construct(e,[],c)}else{try{c.call()}catch(l){r=l}e.call(c.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),t=r.stack.split(`
`),i=n.length-1,s=t.length-1;1<=i&&0<=s&&n[i]!==t[s];)s--;for(;1<=i&&0<=s;i--,s--)if(n[i]!==t[s]){if(i!==1||s!==1)do if(i--,s--,0>s||n[i]!==t[s]){var o=`
`+n[i].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=i&&0<=s);break}}}finally{k5=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?w6(e):""}function HH(e){switch(e.tag){case 5:return w6(e.type);case 16:return w6("Lazy");case 13:return w6("Suspense");case 19:return w6("SuspenseList");case 0:case 2:case 15:return e=b5(e.type,!1),e;case 11:return e=b5(e.type.render,!1),e;case 1:return e=b5(e.type,!0),e;default:return""}}function yc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M4:return"Fragment";case V4:return"Portal";case Mc:return"Profiler";case X7:return"StrictMode";case Cc:return"Suspense";case Lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fi:return(e.displayName||"Context")+".Consumer";case li:return(e._context.displayName||"Context")+".Provider";case Q7:var c=e.render;return e=e.displayName,e||(e=c.displayName||c.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J7:return c=e.displayName||null,c!==null?c:yc(e.type)||"Memo";case a3:c=e._payload,e=e._init;try{return yc(e(c))}catch{}}return null}function gH(e){var c=e.type;switch(e.tag){case 24:return"Cache";case 9:return(c.displayName||"Context")+".Consumer";case 10:return(c._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=c.render,e=e.displayName||e.name||"",c.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return c;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(c);case 8:return c===X7?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c}return null}function x3(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function di(e){var c=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(c==="checkbox"||c==="radio")}function VH(e){var c=di(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,c),r=""+e[c];if(!e.hasOwnProperty(c)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,t=a.set;return Object.defineProperty(e,c,{configurable:!0,get:function(){return n.call(this)},set:function(i){r=""+i,t.call(this,i)}}),Object.defineProperty(e,c,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[c]}}}}function e8(e){e._valueTracker||(e._valueTracker=VH(e))}function hi(e){if(!e)return!1;var c=e._valueTracker;if(!c)return!0;var a=c.getValue(),r="";return e&&(r=di(e)?e.checked?"true":"false":e.value),e=r,e!==a?(c.setValue(e),!0):!1}function $8(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wc(e,c){var a=c.checked;return c2({},c,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Sn(e,c){var a=c.defaultValue==null?"":c.defaultValue,r=c.checked!=null?c.checked:c.defaultChecked;a=x3(c.value!=null?c.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:c.type==="checkbox"||c.type==="radio"?c.checked!=null:c.value!=null}}function mi(e,c){c=c.checked,c!=null&&Y7(e,"checked",c,!1)}function xc(e,c){mi(e,c);var a=x3(c.value),r=c.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}c.hasOwnProperty("value")?Sc(e,c.type,a):c.hasOwnProperty("defaultValue")&&Sc(e,c.type,x3(c.defaultValue)),c.checked==null&&c.defaultChecked!=null&&(e.defaultChecked=!!c.defaultChecked)}function Nn(e,c,a){if(c.hasOwnProperty("value")||c.hasOwnProperty("defaultValue")){var r=c.type;if(!(r!=="submit"&&r!=="reset"||c.value!==void 0&&c.value!==null))return;c=""+e._wrapperState.initialValue,a||c===e.value||(e.value=c),e.defaultValue=c}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Sc(e,c,a){(c!=="number"||$8(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var x6=Array.isArray;function R4(e,c,a,r){if(e=e.options,c){c={};for(var n=0;n<a.length;n++)c["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=c.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&r&&(e[a].defaultSelected=!0)}else{for(a=""+x3(a),c=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,r&&(e[n].defaultSelected=!0);return}c!==null||e[n].disabled||(c=e[n])}c!==null&&(c.selected=!0)}}function Nc(e,c){if(c.dangerouslySetInnerHTML!=null)throw Error(w(91));return c2({},c,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kn(e,c){var a=c.value;if(a==null){if(a=c.children,c=c.defaultValue,a!=null){if(c!=null)throw Error(w(92));if(x6(a)){if(1<a.length)throw Error(w(93));a=a[0]}c=a}c==null&&(c=""),a=c}e._wrapperState={initialValue:x3(a)}}function pi(e,c){var a=x3(c.value),r=x3(c.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),c.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function bn(e){var c=e.textContent;c===e._wrapperState.initialValue&&c!==""&&c!==null&&(e.value=c)}function vi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(e,c){return e==null||e==="http://www.w3.org/1999/xhtml"?vi(c):e==="http://www.w3.org/2000/svg"&&c==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var c8,zi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(c,a,r,n){MSApp.execUnsafeLocalFunction(function(){return e(c,a,r,n)})}:e}(function(e,c){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=c;else{for(c8=c8||document.createElement("div"),c8.innerHTML="<svg>"+c.valueOf().toString()+"</svg>",c=c8.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;c.firstChild;)e.appendChild(c.firstChild)}});function K6(e,c){if(c){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=c;return}}e.textContent=c}var E6={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MH=["Webkit","ms","Moz","O"];Object.keys(E6).forEach(function(e){MH.forEach(function(c){c=c+e.charAt(0).toUpperCase()+e.substring(1),E6[c]=E6[e]})});function Hi(e,c,a){return c==null||typeof c=="boolean"||c===""?"":a||typeof c!="number"||c===0||E6.hasOwnProperty(e)&&E6[e]?(""+c).trim():c+"px"}function gi(e,c){e=e.style;for(var a in c)if(c.hasOwnProperty(a)){var r=a.indexOf("--")===0,n=Hi(a,c[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,n):e[a]=n}}var CH=c2({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(e,c){if(c){if(CH[e]&&(c.children!=null||c.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(c.dangerouslySetInnerHTML!=null){if(c.children!=null)throw Error(w(60));if(typeof c.dangerouslySetInnerHTML!="object"||!("__html"in c.dangerouslySetInnerHTML))throw Error(w(61))}if(c.style!=null&&typeof c.style!="object")throw Error(w(62))}}function Ac(e,c){if(e.indexOf("-")===-1)return typeof c.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function Z7(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tc=null,I4=null,D4=null;function An(e){if(e=S0(e)){if(typeof Tc!="function")throw Error(w(280));var c=e.stateNode;c&&(c=Oe(c),Tc(e.stateNode,e.type,c))}}function Vi(e){I4?D4?D4.push(e):D4=[e]:I4=e}function Mi(){if(I4){var e=I4,c=D4;if(D4=I4=null,An(e),c)for(e=0;e<c.length;e++)An(c[e])}}function Ci(e,c){return e(c)}function Li(){}var A5=!1;function yi(e,c,a){if(A5)return e(c,a);A5=!0;try{return Ci(e,c,a)}finally{A5=!1,(I4!==null||D4!==null)&&(Li(),Mi())}}function Y6(e,c){var a=e.stateNode;if(a===null)return null;var r=Oe(a);if(r===null)return null;a=r[c];e:switch(c){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(w(231,c,typeof a));return a}var Pc=!1;if(D1)try{var H6={};Object.defineProperty(H6,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",H6,H6),window.removeEventListener("test",H6,H6)}catch{Pc=!1}function LH(e,c,a,r,n,t,i,s,o){var l=Array.prototype.slice.call(arguments,3);try{c.apply(a,l)}catch(f){this.onError(f)}}var T6=!1,G8=null,q8=!1,_c=null,yH={onError:function(e){T6=!0,G8=e}};function wH(e,c,a,r,n,t,i,s,o){T6=!1,G8=null,LH.apply(yH,arguments)}function xH(e,c,a,r,n,t,i,s,o){if(wH.apply(this,arguments),T6){if(T6){var l=G8;T6=!1,G8=null}else throw Error(w(198));q8||(q8=!0,_c=l)}}function s4(e){var c=e,a=e;if(e.alternate)for(;c.return;)c=c.return;else{e=c;do c=e,c.flags&4098&&(a=c.return),e=c.return;while(e)}return c.tag===3?a:null}function wi(e){if(e.tag===13){var c=e.memoizedState;if(c===null&&(e=e.alternate,e!==null&&(c=e.memoizedState)),c!==null)return c.dehydrated}return null}function En(e){if(s4(e)!==e)throw Error(w(188))}function SH(e){var c=e.alternate;if(!c){if(c=s4(e),c===null)throw Error(w(188));return c!==e?null:e}for(var a=e,r=c;;){var n=a.return;if(n===null)break;var t=n.alternate;if(t===null){if(r=n.return,r!==null){a=r;continue}break}if(n.child===t.child){for(t=n.child;t;){if(t===a)return En(n),e;if(t===r)return En(n),c;t=t.sibling}throw Error(w(188))}if(a.return!==r.return)a=n,r=t;else{for(var i=!1,s=n.child;s;){if(s===a){i=!0,a=n,r=t;break}if(s===r){i=!0,r=n,a=t;break}s=s.sibling}if(!i){for(s=t.child;s;){if(s===a){i=!0,a=t,r=n;break}if(s===r){i=!0,r=t,a=n;break}s=s.sibling}if(!i)throw Error(w(189))}}if(a.alternate!==r)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?e:c}function xi(e){return e=SH(e),e!==null?Si(e):null}function Si(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var c=Si(e);if(c!==null)return c;e=e.sibling}return null}var Ni=G2.unstable_scheduleCallback,Tn=G2.unstable_cancelCallback,NH=G2.unstable_shouldYield,kH=G2.unstable_requestPaint,n2=G2.unstable_now,bH=G2.unstable_getCurrentPriorityLevel,ea=G2.unstable_ImmediatePriority,ki=G2.unstable_UserBlockingPriority,K8=G2.unstable_NormalPriority,AH=G2.unstable_LowPriority,bi=G2.unstable_IdlePriority,_e=null,L1=null;function EH(e){if(L1&&typeof L1.onCommitFiberRoot=="function")try{L1.onCommitFiberRoot(_e,e,void 0,(e.current.flags&128)===128)}catch{}}var u1=Math.clz32?Math.clz32:_H,TH=Math.log,PH=Math.LN2;function _H(e){return e>>>=0,e===0?32:31-(TH(e)/PH|0)|0}var a8=64,r8=4194304;function S6(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Y8(e,c){var a=e.pendingLanes;if(a===0)return 0;var r=0,n=e.suspendedLanes,t=e.pingedLanes,i=a&268435455;if(i!==0){var s=i&~n;s!==0?r=S6(s):(t&=i,t!==0&&(r=S6(t)))}else i=a&~n,i!==0?r=S6(i):t!==0&&(r=S6(t));if(r===0)return 0;if(c!==0&&c!==r&&!(c&n)&&(n=r&-r,t=c&-c,n>=t||n===16&&(t&4194240)!==0))return c;if(r&4&&(r|=a&16),c=e.entangledLanes,c!==0)for(e=e.entanglements,c&=r;0<c;)a=31-u1(c),n=1<<a,r|=e[a],c&=~n;return r}function RH(e,c){switch(e){case 1:case 2:case 4:return c+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IH(e,c){for(var a=e.suspendedLanes,r=e.pingedLanes,n=e.expirationTimes,t=e.pendingLanes;0<t;){var i=31-u1(t),s=1<<i,o=n[i];o===-1?(!(s&a)||s&r)&&(n[i]=RH(s,c)):o<=c&&(e.expiredLanes|=s),t&=~s}}function Rc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ai(){var e=a8;return a8<<=1,!(a8&4194240)&&(a8=64),e}function E5(e){for(var c=[],a=0;31>a;a++)c.push(e);return c}function w0(e,c,a){e.pendingLanes|=c,c!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,c=31-u1(c),e[c]=a}function DH(e,c){var a=e.pendingLanes&~c;e.pendingLanes=c,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=c,e.mutableReadLanes&=c,e.entangledLanes&=c,c=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var n=31-u1(a),t=1<<n;c[n]=0,r[n]=-1,e[n]=-1,a&=~t}}function ca(e,c){var a=e.entangledLanes|=c;for(e=e.entanglements;a;){var r=31-u1(a),n=1<<r;n&c|e[r]&c&&(e[r]|=c),a&=~n}}var W=0;function Ei(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ti,aa,Pi,_i,Ri,Ic=!1,n8=[],p3=null,v3=null,z3=null,X6=new Map,Q6=new Map,t3=[],OH="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pn(e,c){switch(e){case"focusin":case"focusout":p3=null;break;case"dragenter":case"dragleave":v3=null;break;case"mouseover":case"mouseout":z3=null;break;case"pointerover":case"pointerout":X6.delete(c.pointerId);break;case"gotpointercapture":case"lostpointercapture":Q6.delete(c.pointerId)}}function g6(e,c,a,r,n,t){return e===null||e.nativeEvent!==t?(e={blockedOn:c,domEventName:a,eventSystemFlags:r,nativeEvent:t,targetContainers:[n]},c!==null&&(c=S0(c),c!==null&&aa(c)),e):(e.eventSystemFlags|=r,c=e.targetContainers,n!==null&&c.indexOf(n)===-1&&c.push(n),e)}function FH(e,c,a,r,n){switch(c){case"focusin":return p3=g6(p3,e,c,a,r,n),!0;case"dragenter":return v3=g6(v3,e,c,a,r,n),!0;case"mouseover":return z3=g6(z3,e,c,a,r,n),!0;case"pointerover":var t=n.pointerId;return X6.set(t,g6(X6.get(t)||null,e,c,a,r,n)),!0;case"gotpointercapture":return t=n.pointerId,Q6.set(t,g6(Q6.get(t)||null,e,c,a,r,n)),!0}return!1}function Ii(e){var c=U3(e.target);if(c!==null){var a=s4(c);if(a!==null){if(c=a.tag,c===13){if(c=wi(a),c!==null){e.blockedOn=c,Ri(e.priority,function(){Pi(a)});return}}else if(c===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function N8(e){if(e.blockedOn!==null)return!1;for(var c=e.targetContainers;0<c.length;){var a=Dc(e.domEventName,e.eventSystemFlags,c[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ec=r,a.target.dispatchEvent(r),Ec=null}else return c=S0(a),c!==null&&aa(c),e.blockedOn=a,!1;c.shift()}return!0}function _n(e,c,a){N8(e)&&a.delete(c)}function BH(){Ic=!1,p3!==null&&N8(p3)&&(p3=null),v3!==null&&N8(v3)&&(v3=null),z3!==null&&N8(z3)&&(z3=null),X6.forEach(_n),Q6.forEach(_n)}function V6(e,c){e.blockedOn===c&&(e.blockedOn=null,Ic||(Ic=!0,G2.unstable_scheduleCallback(G2.unstable_NormalPriority,BH)))}function J6(e){function c(n){return V6(n,e)}if(0<n8.length){V6(n8[0],e);for(var a=1;a<n8.length;a++){var r=n8[a];r.blockedOn===e&&(r.blockedOn=null)}}for(p3!==null&&V6(p3,e),v3!==null&&V6(v3,e),z3!==null&&V6(z3,e),X6.forEach(c),Q6.forEach(c),a=0;a<t3.length;a++)r=t3[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<t3.length&&(a=t3[0],a.blockedOn===null);)Ii(a),a.blockedOn===null&&t3.shift()}var O4=G1.ReactCurrentBatchConfig,X8=!0;function UH(e,c,a,r){var n=W,t=O4.transition;O4.transition=null;try{W=1,ra(e,c,a,r)}finally{W=n,O4.transition=t}}function WH(e,c,a,r){var n=W,t=O4.transition;O4.transition=null;try{W=4,ra(e,c,a,r)}finally{W=n,O4.transition=t}}function ra(e,c,a,r){if(X8){var n=Dc(e,c,a,r);if(n===null)U5(e,c,r,Q8,a),Pn(e,r);else if(FH(n,e,c,a,r))r.stopPropagation();else if(Pn(e,r),c&4&&-1<OH.indexOf(e)){for(;n!==null;){var t=S0(n);if(t!==null&&Ti(t),t=Dc(e,c,a,r),t===null&&U5(e,c,r,Q8,a),t===n)break;n=t}n!==null&&r.stopPropagation()}else U5(e,c,r,null,a)}}var Q8=null;function Dc(e,c,a,r){if(Q8=null,e=Z7(r),e=U3(e),e!==null)if(c=s4(e),c===null)e=null;else if(a=c.tag,a===13){if(e=wi(c),e!==null)return e;e=null}else if(a===3){if(c.stateNode.current.memoizedState.isDehydrated)return c.tag===3?c.stateNode.containerInfo:null;e=null}else c!==e&&(e=null);return Q8=e,null}function Di(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bH()){case ea:return 1;case ki:return 4;case K8:case AH:return 16;case bi:return 536870912;default:return 16}default:return 16}}var u3=null,na=null,k8=null;function Oi(){if(k8)return k8;var e,c=na,a=c.length,r,n="value"in u3?u3.value:u3.textContent,t=n.length;for(e=0;e<a&&c[e]===n[e];e++);var i=a-e;for(r=1;r<=i&&c[a-r]===n[t-r];r++);return k8=n.slice(e,1<r?1-r:void 0)}function b8(e){var c=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&c===13&&(e=13)):e=c,e===10&&(e=13),32<=e||e===13?e:0}function t8(){return!0}function Rn(){return!1}function K2(e){function c(a,r,n,t,i){this._reactName=a,this._targetInst=n,this.type=r,this.nativeEvent=t,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(t):t[s]);return this.isDefaultPrevented=(t.defaultPrevented!=null?t.defaultPrevented:t.returnValue===!1)?t8:Rn,this.isPropagationStopped=Rn,this}return c2(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=t8)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=t8)},persist:function(){},isPersistent:t8}),c}var r6={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=K2(r6),x0=c2({},r6,{view:0,detail:0}),jH=K2(x0),T5,P5,M6,Re=c2({},x0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==M6&&(M6&&e.type==="mousemove"?(T5=e.screenX-M6.screenX,P5=e.screenY-M6.screenY):P5=T5=0,M6=e),T5)},movementY:function(e){return"movementY"in e?e.movementY:P5}}),In=K2(Re),$H=c2({},Re,{dataTransfer:0}),GH=K2($H),qH=c2({},x0,{relatedTarget:0}),_5=K2(qH),KH=c2({},r6,{animationName:0,elapsedTime:0,pseudoElement:0}),YH=K2(KH),XH=c2({},r6,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QH=K2(XH),JH=c2({},r6,{data:0}),Dn=K2(JH),ZH={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ag(e){var c=this.nativeEvent;return c.getModifierState?c.getModifierState(e):(e=cg[e])?!!c[e]:!1}function ia(){return ag}var rg=c2({},x0,{key:function(e){if(e.key){var c=ZH[e.key]||e.key;if(c!=="Unidentified")return c}return e.type==="keypress"?(e=b8(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?b8(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?b8(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=K2(rg),tg=c2({},Re,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),On=K2(tg),ig=c2({},x0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),sg=K2(ig),og=c2({},r6,{propertyName:0,elapsedTime:0,pseudoElement:0}),lg=K2(og),fg=c2({},Re,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=K2(fg),dg=[9,13,27,32],sa=D1&&"CompositionEvent"in window,P6=null;D1&&"documentMode"in document&&(P6=document.documentMode);var hg=D1&&"TextEvent"in window&&!P6,Fi=D1&&(!sa||P6&&8<P6&&11>=P6),Fn=String.fromCharCode(32),Bn=!1;function Bi(e,c){switch(e){case"keyup":return dg.indexOf(c.keyCode)!==-1;case"keydown":return c.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ui(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var C4=!1;function mg(e,c){switch(e){case"compositionend":return Ui(c);case"keypress":return c.which!==32?null:(Bn=!0,Fn);case"textInput":return e=c.data,e===Fn&&Bn?null:e;default:return null}}function pg(e,c){if(C4)return e==="compositionend"||!sa&&Bi(e,c)?(e=Oi(),k8=na=u3=null,C4=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(c.ctrlKey||c.altKey||c.metaKey)||c.ctrlKey&&c.altKey){if(c.char&&1<c.char.length)return c.char;if(c.which)return String.fromCharCode(c.which)}return null;case"compositionend":return Fi&&c.locale!=="ko"?null:c.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var c=e&&e.nodeName&&e.nodeName.toLowerCase();return c==="input"?!!vg[e.type]:c==="textarea"}function Wi(e,c,a,r){Vi(r),c=J8(c,"onChange"),0<c.length&&(a=new ta("onChange","change",null,a,r),e.push({event:a,listeners:c}))}var _6=null,Z6=null;function zg(e){es(e,0)}function Ie(e){var c=w4(e);if(hi(c))return e}function Hg(e,c){if(e==="change")return c}var ji=!1;if(D1){var R5;if(D1){var I5="oninput"in document;if(!I5){var Wn=document.createElement("div");Wn.setAttribute("oninput","return;"),I5=typeof Wn.oninput=="function"}R5=I5}else R5=!1;ji=R5&&(!document.documentMode||9<document.documentMode)}function jn(){_6&&(_6.detachEvent("onpropertychange",$i),Z6=_6=null)}function $i(e){if(e.propertyName==="value"&&Ie(Z6)){var c=[];Wi(c,Z6,e,Z7(e)),yi(zg,c)}}function gg(e,c,a){e==="focusin"?(jn(),_6=c,Z6=a,_6.attachEvent("onpropertychange",$i)):e==="focusout"&&jn()}function Vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ie(Z6)}function Mg(e,c){if(e==="click")return Ie(c)}function Cg(e,c){if(e==="input"||e==="change")return Ie(c)}function Lg(e,c){return e===c&&(e!==0||1/e===1/c)||e!==e&&c!==c}var h1=typeof Object.is=="function"?Object.is:Lg;function e0(e,c){if(h1(e,c))return!0;if(typeof e!="object"||e===null||typeof c!="object"||c===null)return!1;var a=Object.keys(e),r=Object.keys(c);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var n=a[r];if(!Vc.call(c,n)||!h1(e[n],c[n]))return!1}return!0}function $n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gn(e,c){var a=$n(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=c&&r>=c)return{node:a,offset:c-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$n(a)}}function Gi(e,c){return e&&c?e===c?!0:e&&e.nodeType===3?!1:c&&c.nodeType===3?Gi(e,c.parentNode):"contains"in e?e.contains(c):e.compareDocumentPosition?!!(e.compareDocumentPosition(c)&16):!1:!1}function qi(){for(var e=window,c=$8();c instanceof e.HTMLIFrameElement;){try{var a=typeof c.contentWindow.location.href=="string"}catch{a=!1}if(a)e=c.contentWindow;else break;c=$8(e.document)}return c}function oa(e){var c=e&&e.nodeName&&e.nodeName.toLowerCase();return c&&(c==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||c==="textarea"||e.contentEditable==="true")}function yg(e){var c=qi(),a=e.focusedElem,r=e.selectionRange;if(c!==a&&a&&a.ownerDocument&&Gi(a.ownerDocument.documentElement,a)){if(r!==null&&oa(a)){if(c=r.start,e=r.end,e===void 0&&(e=c),"selectionStart"in a)a.selectionStart=c,a.selectionEnd=Math.min(e,a.value.length);else if(e=(c=a.ownerDocument||document)&&c.defaultView||window,e.getSelection){e=e.getSelection();var n=a.textContent.length,t=Math.min(r.start,n);r=r.end===void 0?t:Math.min(r.end,n),!e.extend&&t>r&&(n=r,r=t,t=n),n=Gn(a,t);var i=Gn(a,r);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(c=c.createRange(),c.setStart(n.node,n.offset),e.removeAllRanges(),t>r?(e.addRange(c),e.extend(i.node,i.offset)):(c.setEnd(i.node,i.offset),e.addRange(c)))}}for(c=[],e=a;e=e.parentNode;)e.nodeType===1&&c.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<c.length;a++)e=c[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=D1&&"documentMode"in document&&11>=document.documentMode,L4=null,Oc=null,R6=null,Fc=!1;function qn(e,c,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||L4==null||L4!==$8(r)||(r=L4,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),R6&&e0(R6,r)||(R6=r,r=J8(Oc,"onSelect"),0<r.length&&(c=new ta("onSelect","select",null,c,a),e.push({event:c,listeners:r}),c.target=L4)))}function i8(e,c){var a={};return a[e.toLowerCase()]=c.toLowerCase(),a["Webkit"+e]="webkit"+c,a["Moz"+e]="moz"+c,a}var y4={animationend:i8("Animation","AnimationEnd"),animationiteration:i8("Animation","AnimationIteration"),animationstart:i8("Animation","AnimationStart"),transitionend:i8("Transition","TransitionEnd")},D5={},Ki={};D1&&(Ki=document.createElement("div").style,"AnimationEvent"in window||(delete y4.animationend.animation,delete y4.animationiteration.animation,delete y4.animationstart.animation),"TransitionEvent"in window||delete y4.transitionend.transition);function De(e){if(D5[e])return D5[e];if(!y4[e])return e;var c=y4[e],a;for(a in c)if(c.hasOwnProperty(a)&&a in Ki)return D5[e]=c[a];return e}var Yi=De("animationend"),Xi=De("animationiteration"),Qi=De("animationstart"),Ji=De("transitionend"),Zi=new Map,Kn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function E3(e,c){Zi.set(e,c),i4(c,[e])}for(var O5=0;O5<Kn.length;O5++){var F5=Kn[O5],xg=F5.toLowerCase(),Sg=F5[0].toUpperCase()+F5.slice(1);E3(xg,"on"+Sg)}E3(Yi,"onAnimationEnd");E3(Xi,"onAnimationIteration");E3(Qi,"onAnimationStart");E3("dblclick","onDoubleClick");E3("focusin","onFocus");E3("focusout","onBlur");E3(Ji,"onTransitionEnd");q4("onMouseEnter",["mouseout","mouseover"]);q4("onMouseLeave",["mouseout","mouseover"]);q4("onPointerEnter",["pointerout","pointerover"]);q4("onPointerLeave",["pointerout","pointerover"]);i4("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));i4("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));i4("onBeforeInput",["compositionend","keypress","textInput","paste"]);i4("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));i4("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));i4("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var N6="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(N6));function Yn(e,c,a){var r=e.type||"unknown-event";e.currentTarget=a,xH(r,c,void 0,e),e.currentTarget=null}function es(e,c){c=(c&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],n=r.event;r=r.listeners;e:{var t=void 0;if(c)for(var i=r.length-1;0<=i;i--){var s=r[i],o=s.instance,l=s.currentTarget;if(s=s.listener,o!==t&&n.isPropagationStopped())break e;Yn(n,s,l),t=o}else for(i=0;i<r.length;i++){if(s=r[i],o=s.instance,l=s.currentTarget,s=s.listener,o!==t&&n.isPropagationStopped())break e;Yn(n,s,l),t=o}}}if(q8)throw e=_c,q8=!1,_c=null,e}function K(e,c){var a=c[$c];a===void 0&&(a=c[$c]=new Set);var r=e+"__bubble";a.has(r)||(cs(c,e,2,!1),a.add(r))}function B5(e,c,a){var r=0;c&&(r|=4),cs(a,e,r,c)}var s8="_reactListening"+Math.random().toString(36).slice(2);function c0(e){if(!e[s8]){e[s8]=!0,oi.forEach(function(a){a!=="selectionchange"&&(Ng.has(a)||B5(a,!1,e),B5(a,!0,e))});var c=e.nodeType===9?e:e.ownerDocument;c===null||c[s8]||(c[s8]=!0,B5("selectionchange",!1,c))}}function cs(e,c,a,r){switch(Di(c)){case 1:var n=UH;break;case 4:n=WH;break;default:n=ra}a=n.bind(null,c,a,e),n=void 0,!Pc||c!=="touchstart"&&c!=="touchmove"&&c!=="wheel"||(n=!0),r?n!==void 0?e.addEventListener(c,a,{capture:!0,passive:n}):e.addEventListener(c,a,!0):n!==void 0?e.addEventListener(c,a,{passive:n}):e.addEventListener(c,a,!1)}function U5(e,c,a,r,n){var t=r;if(!(c&1)&&!(c&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(i===4)for(i=r.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===n||o.nodeType===8&&o.parentNode===n))return;i=i.return}for(;s!==null;){if(i=U3(s),i===null)return;if(o=i.tag,o===5||o===6){r=t=i;continue e}s=s.parentNode}}r=r.return}yi(function(){var l=t,f=Z7(a),u=[];e:{var h=Zi.get(e);if(h!==void 0){var v=ta,V=e;switch(e){case"keypress":if(b8(a)===0)break e;case"keydown":case"keyup":v=ng;break;case"focusin":V="focus",v=_5;break;case"focusout":V="blur",v=_5;break;case"beforeblur":case"afterblur":v=_5;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=GH;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sg;break;case Yi:case Xi:case Qi:v=YH;break;case Ji:v=lg;break;case"scroll":v=jH;break;case"wheel":v=ug;break;case"copy":case"cut":case"paste":v=QH;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=On}var H=(c&4)!==0,C=!H&&e==="scroll",m=H?h!==null?h+"Capture":null:h;H=[];for(var d=l,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=Y6(d,m),g!=null&&H.push(a0(d,g,p)))),C)break;d=d.return}0<H.length&&(h=new v(h,V,null,a,f),u.push({event:h,listeners:H}))}}if(!(c&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&a!==Ec&&(V=a.relatedTarget||a.fromElement)&&(U3(V)||V[O1]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(V=a.relatedTarget||a.toElement,v=l,V=V?U3(V):null,V!==null&&(C=s4(V),V!==C||V.tag!==5&&V.tag!==6)&&(V=null)):(v=null,V=l),v!==V)){if(H=In,g="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(H=On,g="onPointerLeave",m="onPointerEnter",d="pointer"),C=v==null?h:w4(v),p=V==null?h:w4(V),h=new H(g,d+"leave",v,a,f),h.target=C,h.relatedTarget=p,g=null,U3(f)===l&&(H=new H(m,d+"enter",V,a,f),H.target=p,H.relatedTarget=C,g=H),C=g,v&&V)c:{for(H=v,m=V,d=0,p=H;p;p=g4(p))d++;for(p=0,g=m;g;g=g4(g))p++;for(;0<d-p;)H=g4(H),d--;for(;0<p-d;)m=g4(m),p--;for(;d--;){if(H===m||m!==null&&H===m.alternate)break c;H=g4(H),m=g4(m)}H=null}else H=null;v!==null&&Xn(u,h,v,H,!1),V!==null&&C!==null&&Xn(u,C,V,H,!0)}}e:{if(h=l?w4(l):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var M=Hg;else if(Un(h))if(ji)M=Cg;else{M=Vg;var y=gg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Mg);if(M&&(M=M(e,l))){Wi(u,M,a,f);break e}y&&y(e,h,l),e==="focusout"&&(y=h._wrapperState)&&y.controlled&&h.type==="number"&&Sc(h,"number",h.value)}switch(y=l?w4(l):window,e){case"focusin":(Un(y)||y.contentEditable==="true")&&(L4=y,Oc=l,R6=null);break;case"focusout":R6=Oc=L4=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,qn(u,a,f);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":qn(u,a,f)}var L;if(sa)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else C4?Bi(e,a)&&(x="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(x="onCompositionStart");x&&(Fi&&a.locale!=="ko"&&(C4||x!=="onCompositionStart"?x==="onCompositionEnd"&&C4&&(L=Oi()):(u3=f,na="value"in u3?u3.value:u3.textContent,C4=!0)),y=J8(l,x),0<y.length&&(x=new Dn(x,e,null,a,f),u.push({event:x,listeners:y}),L?x.data=L:(L=Ui(a),L!==null&&(x.data=L)))),(L=hg?mg(e,a):pg(e,a))&&(l=J8(l,"onBeforeInput"),0<l.length&&(f=new Dn("onBeforeInput","beforeinput",null,a,f),u.push({event:f,listeners:l}),f.data=L))}es(u,c)})}function a0(e,c,a){return{instance:e,listener:c,currentTarget:a}}function J8(e,c){for(var a=c+"Capture",r=[];e!==null;){var n=e,t=n.stateNode;n.tag===5&&t!==null&&(n=t,t=Y6(e,a),t!=null&&r.unshift(a0(e,t,n)),t=Y6(e,c),t!=null&&r.push(a0(e,t,n))),e=e.return}return r}function g4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xn(e,c,a,r,n){for(var t=c._reactName,i=[];a!==null&&a!==r;){var s=a,o=s.alternate,l=s.stateNode;if(o!==null&&o===r)break;s.tag===5&&l!==null&&(s=l,n?(o=Y6(a,t),o!=null&&i.unshift(a0(a,o,s))):n||(o=Y6(a,t),o!=null&&i.push(a0(a,o,s)))),a=a.return}i.length!==0&&e.push({event:c,listeners:i})}var kg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Qn(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(bg,"")}function o8(e,c,a){if(c=Qn(c),Qn(e)!==c&&a)throw Error(w(425))}function Z8(){}var Bc=null,Uc=null;function Wc(e,c){return e==="textarea"||e==="noscript"||typeof c.children=="string"||typeof c.children=="number"||typeof c.dangerouslySetInnerHTML=="object"&&c.dangerouslySetInnerHTML!==null&&c.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Jn=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jn<"u"?function(e){return Jn.resolve(null).then(e).catch(Tg)}:jc;function Tg(e){setTimeout(function(){throw e})}function W5(e,c){var a=c,r=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){e.removeChild(n),J6(c);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=n}while(a);J6(c)}function H3(e){for(;e!=null;e=e.nextSibling){var c=e.nodeType;if(c===1||c===3)break;if(c===8){if(c=e.data,c==="$"||c==="$!"||c==="$?")break;if(c==="/$")return null}}return e}function Zn(e){e=e.previousSibling;for(var c=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(c===0)return e;c--}else a==="/$"&&c++}e=e.previousSibling}return null}var n6=Math.random().toString(36).slice(2),M1="__reactFiber$"+n6,r0="__reactProps$"+n6,O1="__reactContainer$"+n6,$c="__reactEvents$"+n6,Pg="__reactListeners$"+n6,_g="__reactHandles$"+n6;function U3(e){var c=e[M1];if(c)return c;for(var a=e.parentNode;a;){if(c=a[O1]||a[M1]){if(a=c.alternate,c.child!==null||a!==null&&a.child!==null)for(e=Zn(e);e!==null;){if(a=e[M1])return a;e=Zn(e)}return c}e=a,a=e.parentNode}return null}function S0(e){return e=e[M1]||e[O1],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function w4(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Oe(e){return e[r0]||null}var Gc=[],x4=-1;function T3(e){return{current:e}}function X(e){0>x4||(e.current=Gc[x4],Gc[x4]=null,x4--)}function q(e,c){x4++,Gc[x4]=e.current,e.current=c}var S3={},x2=T3(S3),R2=T3(!1),X3=S3;function K4(e,c){var a=e.type.contextTypes;if(!a)return S3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===c)return r.__reactInternalMemoizedMaskedChildContext;var n={},t;for(t in a)n[t]=c[t];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=n),n}function I2(e){return e=e.childContextTypes,e!=null}function ee(){X(R2),X(x2)}function et(e,c,a){if(x2.current!==S3)throw Error(w(168));q(x2,c),q(R2,a)}function as(e,c,a){var r=e.stateNode;if(c=c.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var n in r)if(!(n in c))throw Error(w(108,gH(e)||"Unknown",n));return c2({},a,r)}function ce(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||S3,X3=x2.current,q(x2,e),q(R2,R2.current),!0}function ct(e,c,a){var r=e.stateNode;if(!r)throw Error(w(169));a?(e=as(e,c,X3),r.__reactInternalMemoizedMergedChildContext=e,X(R2),X(x2),q(x2,e)):X(R2),q(R2,a)}var E1=null,Fe=!1,j5=!1;function rs(e){E1===null?E1=[e]:E1.push(e)}function Rg(e){Fe=!0,rs(e)}function P3(){if(!j5&&E1!==null){j5=!0;var e=0,c=W;try{var a=E1;for(W=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}E1=null,Fe=!1}catch(n){throw E1!==null&&(E1=E1.slice(e+1)),Ni(ea,P3),n}finally{W=c,j5=!1}}return null}var S4=[],N4=0,ae=null,re=0,J2=[],Z2=0,Q3=null,T1=1,P1="";function D3(e,c){S4[N4++]=re,S4[N4++]=ae,ae=e,re=c}function ns(e,c,a){J2[Z2++]=T1,J2[Z2++]=P1,J2[Z2++]=Q3,Q3=e;var r=T1;e=P1;var n=32-u1(r)-1;r&=~(1<<n),a+=1;var t=32-u1(c)+n;if(30<t){var i=n-n%5;t=(r&(1<<i)-1).toString(32),r>>=i,n-=i,T1=1<<32-u1(c)+n|a<<n|r,P1=t+e}else T1=1<<t|a<<n|r,P1=e}function la(e){e.return!==null&&(D3(e,1),ns(e,1,0))}function fa(e){for(;e===ae;)ae=S4[--N4],S4[N4]=null,re=S4[--N4],S4[N4]=null;for(;e===Q3;)Q3=J2[--Z2],J2[Z2]=null,P1=J2[--Z2],J2[Z2]=null,T1=J2[--Z2],J2[Z2]=null}var $2=null,j2=null,J=!1,l1=null;function ts(e,c){var a=e1(5,null,null,0);a.elementType="DELETED",a.stateNode=c,a.return=e,c=e.deletions,c===null?(e.deletions=[a],e.flags|=16):c.push(a)}function at(e,c){switch(e.tag){case 5:var a=e.type;return c=c.nodeType!==1||a.toLowerCase()!==c.nodeName.toLowerCase()?null:c,c!==null?(e.stateNode=c,$2=e,j2=H3(c.firstChild),!0):!1;case 6:return c=e.pendingProps===""||c.nodeType!==3?null:c,c!==null?(e.stateNode=c,$2=e,j2=null,!0):!1;case 13:return c=c.nodeType!==8?null:c,c!==null?(a=Q3!==null?{id:T1,overflow:P1}:null,e.memoizedState={dehydrated:c,treeContext:a,retryLane:1073741824},a=e1(18,null,null,0),a.stateNode=c,a.return=e,e.child=a,$2=e,j2=null,!0):!1;default:return!1}}function qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kc(e){if(J){var c=j2;if(c){var a=c;if(!at(e,c)){if(qc(e))throw Error(w(418));c=H3(a.nextSibling);var r=$2;c&&at(e,c)?ts(r,a):(e.flags=e.flags&-4097|2,J=!1,$2=e)}}else{if(qc(e))throw Error(w(418));e.flags=e.flags&-4097|2,J=!1,$2=e}}}function rt(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$2=e}function l8(e){if(e!==$2)return!1;if(!J)return rt(e),J=!0,!1;var c;if((c=e.tag!==3)&&!(c=e.tag!==5)&&(c=e.type,c=c!=="head"&&c!=="body"&&!Wc(e.type,e.memoizedProps)),c&&(c=j2)){if(qc(e))throw is(),Error(w(418));for(;c;)ts(e,c),c=H3(c.nextSibling)}if(rt(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,c=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(c===0){j2=H3(e.nextSibling);break e}c--}else a!=="$"&&a!=="$!"&&a!=="$?"||c++}e=e.nextSibling}j2=null}}else j2=$2?H3(e.stateNode.nextSibling):null;return!0}function is(){for(var e=j2;e;)e=H3(e.nextSibling)}function Y4(){j2=$2=null,J=!1}function ua(e){l1===null?l1=[e]:l1.push(e)}var Ig=G1.ReactCurrentBatchConfig;function s1(e,c){if(e&&e.defaultProps){c=c2({},c),e=e.defaultProps;for(var a in e)c[a]===void 0&&(c[a]=e[a]);return c}return c}var ne=T3(null),te=null,k4=null,da=null;function ha(){da=k4=te=null}function ma(e){var c=ne.current;X(ne),e._currentValue=c}function Yc(e,c,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&c)!==c?(e.childLanes|=c,r!==null&&(r.childLanes|=c)):r!==null&&(r.childLanes&c)!==c&&(r.childLanes|=c),e===a)break;e=e.return}}function F4(e,c){te=e,da=k4=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&c&&(_2=!0),e.firstContext=null)}function a1(e){var c=e._currentValue;if(da!==e)if(e={context:e,memoizedValue:c,next:null},k4===null){if(te===null)throw Error(w(308));k4=e,te.dependencies={lanes:0,firstContext:e}}else k4=k4.next=e;return c}var W3=null;function pa(e){W3===null?W3=[e]:W3.push(e)}function ss(e,c,a,r){var n=c.interleaved;return n===null?(a.next=a,pa(c)):(a.next=n.next,n.next=a),c.interleaved=a,F1(e,r)}function F1(e,c){e.lanes|=c;var a=e.alternate;for(a!==null&&(a.lanes|=c),a=e,e=e.return;e!==null;)e.childLanes|=c,a=e.alternate,a!==null&&(a.childLanes|=c),a=e,e=e.return;return a.tag===3?a.stateNode:null}var r3=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,c){e=e.updateQueue,c.updateQueue===e&&(c.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function I1(e,c){return{eventTime:e,lane:c,tag:0,payload:null,callback:null,next:null}}function g3(e,c,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var n=r.pending;return n===null?c.next=c:(c.next=n.next,n.next=c),r.pending=c,F1(e,a)}return n=r.interleaved,n===null?(c.next=c,pa(r)):(c.next=n.next,n.next=c),r.interleaved=c,F1(e,a)}function A8(e,c,a){if(c=c.updateQueue,c!==null&&(c=c.shared,(a&4194240)!==0)){var r=c.lanes;r&=e.pendingLanes,a|=r,c.lanes=a,ca(e,a)}}function nt(e,c){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var n=null,t=null;if(a=a.firstBaseUpdate,a!==null){do{var i={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};t===null?n=t=i:t=t.next=i,a=a.next}while(a!==null);t===null?n=t=c:t=t.next=c}else n=t=c;a={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:t,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=c:e.next=c,a.lastBaseUpdate=c}function ie(e,c,a,r){var n=e.updateQueue;r3=!1;var t=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,l=o.next;o.next=null,i===null?t=l:i.next=l,i=o;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==i&&(s===null?f.firstBaseUpdate=l:s.next=l,f.lastBaseUpdate=o))}if(t!==null){var u=n.baseState;i=0,f=l=o=null,s=t;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var V=e,H=s;switch(h=c,v=a,H.tag){case 1:if(V=H.payload,typeof V=="function"){u=V.call(v,u,h);break e}u=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=H.payload,h=typeof V=="function"?V.call(v,u,h):V,h==null)break e;u=c2({},u,h);break e;case 2:r3=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=n.effects,h===null?n.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(l=f=v,o=u):f=f.next=v,i|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(1);if(f===null&&(o=u),n.baseState=o,n.firstBaseUpdate=l,n.lastBaseUpdate=f,c=n.shared.interleaved,c!==null){n=c;do i|=n.lane,n=n.next;while(n!==c)}else t===null&&(n.shared.lanes=0);Z3|=i,e.lanes=i,e.memoizedState=u}}function tt(e,c,a){if(e=c.effects,c.effects=null,e!==null)for(c=0;c<e.length;c++){var r=e[c],n=r.callback;if(n!==null){if(r.callback=null,r=a,typeof n!="function")throw Error(w(191,n));n.call(r)}}}var ls=new si.Component().refs;function Xc(e,c,a,r){c=e.memoizedState,a=a(r,c),a=a==null?c:c2({},c,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Be={isMounted:function(e){return(e=e._reactInternals)?s4(e)===e:!1},enqueueSetState:function(e,c,a){e=e._reactInternals;var r=b2(),n=M3(e),t=I1(r,n);t.payload=c,a!=null&&(t.callback=a),c=g3(e,t,n),c!==null&&(d1(c,e,n,r),A8(c,e,n))},enqueueReplaceState:function(e,c,a){e=e._reactInternals;var r=b2(),n=M3(e),t=I1(r,n);t.tag=1,t.payload=c,a!=null&&(t.callback=a),c=g3(e,t,n),c!==null&&(d1(c,e,n,r),A8(c,e,n))},enqueueForceUpdate:function(e,c){e=e._reactInternals;var a=b2(),r=M3(e),n=I1(a,r);n.tag=2,c!=null&&(n.callback=c),c=g3(e,n,r),c!==null&&(d1(c,e,r,a),A8(c,e,r))}};function it(e,c,a,r,n,t,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,t,i):c.prototype&&c.prototype.isPureReactComponent?!e0(a,r)||!e0(n,t):!0}function fs(e,c,a){var r=!1,n=S3,t=c.contextType;return typeof t=="object"&&t!==null?t=a1(t):(n=I2(c)?X3:x2.current,r=c.contextTypes,t=(r=r!=null)?K4(e,n):S3),c=new c(a,t),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Be,e.stateNode=c,c._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),c}function st(e,c,a,r){e=c.state,typeof c.componentWillReceiveProps=="function"&&c.componentWillReceiveProps(a,r),typeof c.UNSAFE_componentWillReceiveProps=="function"&&c.UNSAFE_componentWillReceiveProps(a,r),c.state!==e&&Be.enqueueReplaceState(c,c.state,null)}function Qc(e,c,a,r){var n=e.stateNode;n.props=a,n.state=e.memoizedState,n.refs=ls,va(e);var t=c.contextType;typeof t=="object"&&t!==null?n.context=a1(t):(t=I2(c)?X3:x2.current,n.context=K4(e,t)),n.state=e.memoizedState,t=c.getDerivedStateFromProps,typeof t=="function"&&(Xc(e,c,t,a),n.state=e.memoizedState),typeof c.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(c=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),c!==n.state&&Be.enqueueReplaceState(n,n.state,null),ie(e,a,n,r),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function C6(e,c,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(w(309));var r=a.stateNode}if(!r)throw Error(w(147,e));var n=r,t=""+e;return c!==null&&c.ref!==null&&typeof c.ref=="function"&&c.ref._stringRef===t?c.ref:(c=function(i){var s=n.refs;s===ls&&(s=n.refs={}),i===null?delete s[t]:s[t]=i},c._stringRef=t,c)}if(typeof e!="string")throw Error(w(284));if(!a._owner)throw Error(w(290,e))}return e}function f8(e,c){throw e=Object.prototype.toString.call(c),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":e))}function ot(e){var c=e._init;return c(e._payload)}function us(e){function c(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function a(m,d){if(!e)return null;for(;d!==null;)c(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function n(m,d){return m=C3(m,d),m.index=0,m.sibling=null,m}function t(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,g){return d===null||d.tag!==6?(d=Q5(p,m.mode,g),d.return=m,d):(d=n(d,p),d.return=m,d)}function o(m,d,p,g){var M=p.type;return M===M4?f(m,d,p.props.children,g,p.key):d!==null&&(d.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===a3&&ot(M)===d.type)?(g=n(d,p.props),g.ref=C6(m,d,p),g.return=m,g):(g=I8(p.type,p.key,p.props,null,m.mode,g),g.ref=C6(m,d,p),g.return=m,g)}function l(m,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=J5(p,m.mode,g),d.return=m,d):(d=n(d,p.children||[]),d.return=m,d)}function f(m,d,p,g,M){return d===null||d.tag!==7?(d=K3(p,m.mode,g,M),d.return=m,d):(d=n(d,p),d.return=m,d)}function u(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Q5(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Z0:return p=I8(d.type,d.key,d.props,null,m.mode,p),p.ref=C6(m,null,d),p.return=m,p;case V4:return d=J5(d,m.mode,p),d.return=m,d;case a3:var g=d._init;return u(m,g(d._payload),p)}if(x6(d)||z6(d))return d=K3(d,m.mode,p,null),d.return=m,d;f8(m,d)}return null}function h(m,d,p,g){var M=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return M!==null?null:s(m,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Z0:return p.key===M?o(m,d,p,g):null;case V4:return p.key===M?l(m,d,p,g):null;case a3:return M=p._init,h(m,d,M(p._payload),g)}if(x6(p)||z6(p))return M!==null?null:f(m,d,p,g,null);f8(m,p)}return null}function v(m,d,p,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,s(d,m,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z0:return m=m.get(g.key===null?p:g.key)||null,o(d,m,g,M);case V4:return m=m.get(g.key===null?p:g.key)||null,l(d,m,g,M);case a3:var y=g._init;return v(m,d,p,y(g._payload),M)}if(x6(g)||z6(g))return m=m.get(p)||null,f(d,m,g,M,null);f8(d,g)}return null}function V(m,d,p,g){for(var M=null,y=null,L=d,x=d=0,E=null;L!==null&&x<p.length;x++){L.index>x?(E=L,L=null):E=L.sibling;var A=h(m,L,p[x],g);if(A===null){L===null&&(L=E);break}e&&L&&A.alternate===null&&c(m,L),d=t(A,d,x),y===null?M=A:y.sibling=A,y=A,L=E}if(x===p.length)return a(m,L),J&&D3(m,x),M;if(L===null){for(;x<p.length;x++)L=u(m,p[x],g),L!==null&&(d=t(L,d,x),y===null?M=L:y.sibling=L,y=L);return J&&D3(m,x),M}for(L=r(m,L);x<p.length;x++)E=v(L,m,x,p[x],g),E!==null&&(e&&E.alternate!==null&&L.delete(E.key===null?x:E.key),d=t(E,d,x),y===null?M=E:y.sibling=E,y=E);return e&&L.forEach(function(D){return c(m,D)}),J&&D3(m,x),M}function H(m,d,p,g){var M=z6(p);if(typeof M!="function")throw Error(w(150));if(p=M.call(p),p==null)throw Error(w(151));for(var y=M=null,L=d,x=d=0,E=null,A=p.next();L!==null&&!A.done;x++,A=p.next()){L.index>x?(E=L,L=null):E=L.sibling;var D=h(m,L,A.value,g);if(D===null){L===null&&(L=E);break}e&&L&&D.alternate===null&&c(m,L),d=t(D,d,x),y===null?M=D:y.sibling=D,y=D,L=E}if(A.done)return a(m,L),J&&D3(m,x),M;if(L===null){for(;!A.done;x++,A=p.next())A=u(m,A.value,g),A!==null&&(d=t(A,d,x),y===null?M=A:y.sibling=A,y=A);return J&&D3(m,x),M}for(L=r(m,L);!A.done;x++,A=p.next())A=v(L,m,x,A.value,g),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?x:A.key),d=t(A,d,x),y===null?M=A:y.sibling=A,y=A);return e&&L.forEach(function(v2){return c(m,v2)}),J&&D3(m,x),M}function C(m,d,p,g){if(typeof p=="object"&&p!==null&&p.type===M4&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Z0:e:{for(var M=p.key,y=d;y!==null;){if(y.key===M){if(M=p.type,M===M4){if(y.tag===7){a(m,y.sibling),d=n(y,p.props.children),d.return=m,m=d;break e}}else if(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===a3&&ot(M)===y.type){a(m,y.sibling),d=n(y,p.props),d.ref=C6(m,y,p),d.return=m,m=d;break e}a(m,y);break}else c(m,y);y=y.sibling}p.type===M4?(d=K3(p.props.children,m.mode,g,p.key),d.return=m,m=d):(g=I8(p.type,p.key,p.props,null,m.mode,g),g.ref=C6(m,d,p),g.return=m,m=g)}return i(m);case V4:e:{for(y=p.key;d!==null;){if(d.key===y)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){a(m,d.sibling),d=n(d,p.children||[]),d.return=m,m=d;break e}else{a(m,d);break}else c(m,d);d=d.sibling}d=J5(p,m.mode,g),d.return=m,m=d}return i(m);case a3:return y=p._init,C(m,d,y(p._payload),g)}if(x6(p))return V(m,d,p,g);if(z6(p))return H(m,d,p,g);f8(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(a(m,d.sibling),d=n(d,p),d.return=m,m=d):(a(m,d),d=Q5(p,m.mode,g),d.return=m,m=d),i(m)):a(m,d)}return C}var X4=us(!0),ds=us(!1),N0={},y1=T3(N0),n0=T3(N0),t0=T3(N0);function j3(e){if(e===N0)throw Error(w(174));return e}function za(e,c){switch(q(t0,c),q(n0,e),q(y1,N0),e=c.nodeType,e){case 9:case 11:c=(c=c.documentElement)?c.namespaceURI:kc(null,"");break;default:e=e===8?c.parentNode:c,c=e.namespaceURI||null,e=e.tagName,c=kc(c,e)}X(y1),q(y1,c)}function Q4(){X(y1),X(n0),X(t0)}function hs(e){j3(t0.current);var c=j3(y1.current),a=kc(c,e.type);c!==a&&(q(n0,e),q(y1,a))}function Ha(e){n0.current===e&&(X(y1),X(n0))}var Z=T3(0);function se(e){for(var c=e;c!==null;){if(c.tag===13){var a=c.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return c}else if(c.tag===19&&c.memoizedProps.revealOrder!==void 0){if(c.flags&128)return c}else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break;for(;c.sibling===null;){if(c.return===null||c.return===e)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}return null}var $5=[];function ga(){for(var e=0;e<$5.length;e++)$5[e]._workInProgressVersionPrimary=null;$5.length=0}var E8=G1.ReactCurrentDispatcher,G5=G1.ReactCurrentBatchConfig,J3=0,e2=null,o2=null,d2=null,oe=!1,I6=!1,i0=0,Dg=0;function L2(){throw Error(w(321))}function Va(e,c){if(c===null)return!1;for(var a=0;a<c.length&&a<e.length;a++)if(!h1(e[a],c[a]))return!1;return!0}function Ma(e,c,a,r,n,t){if(J3=t,e2=c,c.memoizedState=null,c.updateQueue=null,c.lanes=0,E8.current=e===null||e.memoizedState===null?Ug:Wg,e=a(r,n),I6){t=0;do{if(I6=!1,i0=0,25<=t)throw Error(w(301));t+=1,d2=o2=null,c.updateQueue=null,E8.current=jg,e=a(r,n)}while(I6)}if(E8.current=le,c=o2!==null&&o2.next!==null,J3=0,d2=o2=e2=null,oe=!1,c)throw Error(w(300));return e}function Ca(){var e=i0!==0;return i0=0,e}function V1(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return d2===null?e2.memoizedState=d2=e:d2=d2.next=e,d2}function r1(){if(o2===null){var e=e2.alternate;e=e!==null?e.memoizedState:null}else e=o2.next;var c=d2===null?e2.memoizedState:d2.next;if(c!==null)d2=c,o2=e;else{if(e===null)throw Error(w(310));o2=e,e={memoizedState:o2.memoizedState,baseState:o2.baseState,baseQueue:o2.baseQueue,queue:o2.queue,next:null},d2===null?e2.memoizedState=d2=e:d2=d2.next=e}return d2}function s0(e,c){return typeof c=="function"?c(e):c}function q5(e){var c=r1(),a=c.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var r=o2,n=r.baseQueue,t=a.pending;if(t!==null){if(n!==null){var i=n.next;n.next=t.next,t.next=i}r.baseQueue=n=t,a.pending=null}if(n!==null){t=n.next,r=r.baseState;var s=i=null,o=null,l=t;do{var f=l.lane;if((J3&f)===f)o!==null&&(o=o.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var u={lane:f,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};o===null?(s=o=u,i=r):o=o.next=u,e2.lanes|=f,Z3|=f}l=l.next}while(l!==null&&l!==t);o===null?i=r:o.next=s,h1(r,c.memoizedState)||(_2=!0),c.memoizedState=r,c.baseState=i,c.baseQueue=o,a.lastRenderedState=r}if(e=a.interleaved,e!==null){n=e;do t=n.lane,e2.lanes|=t,Z3|=t,n=n.next;while(n!==e)}else n===null&&(a.lanes=0);return[c.memoizedState,a.dispatch]}function K5(e){var c=r1(),a=c.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var r=a.dispatch,n=a.pending,t=c.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do t=e(t,i.action),i=i.next;while(i!==n);h1(t,c.memoizedState)||(_2=!0),c.memoizedState=t,c.baseQueue===null&&(c.baseState=t),a.lastRenderedState=t}return[t,r]}function ms(){}function ps(e,c){var a=e2,r=r1(),n=c(),t=!h1(r.memoizedState,n);if(t&&(r.memoizedState=n,_2=!0),r=r.queue,La(Hs.bind(null,a,r,e),[e]),r.getSnapshot!==c||t||d2!==null&&d2.memoizedState.tag&1){if(a.flags|=2048,o0(9,zs.bind(null,a,r,n,c),void 0,null),p2===null)throw Error(w(349));J3&30||vs(a,c,n)}return n}function vs(e,c,a){e.flags|=16384,e={getSnapshot:c,value:a},c=e2.updateQueue,c===null?(c={lastEffect:null,stores:null},e2.updateQueue=c,c.stores=[e]):(a=c.stores,a===null?c.stores=[e]:a.push(e))}function zs(e,c,a,r){c.value=a,c.getSnapshot=r,gs(c)&&Vs(e)}function Hs(e,c,a){return a(function(){gs(c)&&Vs(e)})}function gs(e){var c=e.getSnapshot;e=e.value;try{var a=c();return!h1(e,a)}catch{return!0}}function Vs(e){var c=F1(e,1);c!==null&&d1(c,e,1,-1)}function lt(e){var c=V1();return typeof e=="function"&&(e=e()),c.memoizedState=c.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:e},c.queue=e,e=e.dispatch=Bg.bind(null,e2,e),[c.memoizedState,e]}function o0(e,c,a,r){return e={tag:e,create:c,destroy:a,deps:r,next:null},c=e2.updateQueue,c===null?(c={lastEffect:null,stores:null},e2.updateQueue=c,c.lastEffect=e.next=e):(a=c.lastEffect,a===null?c.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,c.lastEffect=e)),e}function Ms(){return r1().memoizedState}function T8(e,c,a,r){var n=V1();e2.flags|=e,n.memoizedState=o0(1|c,a,void 0,r===void 0?null:r)}function Ue(e,c,a,r){var n=r1();r=r===void 0?null:r;var t=void 0;if(o2!==null){var i=o2.memoizedState;if(t=i.destroy,r!==null&&Va(r,i.deps)){n.memoizedState=o0(c,a,t,r);return}}e2.flags|=e,n.memoizedState=o0(1|c,a,t,r)}function ft(e,c){return T8(8390656,8,e,c)}function La(e,c){return Ue(2048,8,e,c)}function Cs(e,c){return Ue(4,2,e,c)}function Ls(e,c){return Ue(4,4,e,c)}function ys(e,c){if(typeof c=="function")return e=e(),c(e),function(){c(null)};if(c!=null)return e=e(),c.current=e,function(){c.current=null}}function ws(e,c,a){return a=a!=null?a.concat([e]):null,Ue(4,4,ys.bind(null,c,e),a)}function ya(){}function xs(e,c){var a=r1();c=c===void 0?null:c;var r=a.memoizedState;return r!==null&&c!==null&&Va(c,r[1])?r[0]:(a.memoizedState=[e,c],e)}function Ss(e,c){var a=r1();c=c===void 0?null:c;var r=a.memoizedState;return r!==null&&c!==null&&Va(c,r[1])?r[0]:(e=e(),a.memoizedState=[e,c],e)}function Ns(e,c,a){return J3&21?(h1(a,c)||(a=Ai(),e2.lanes|=a,Z3|=a,e.baseState=!0),c):(e.baseState&&(e.baseState=!1,_2=!0),e.memoizedState=a)}function Og(e,c){var a=W;W=a!==0&&4>a?a:4,e(!0);var r=G5.transition;G5.transition={};try{e(!1),c()}finally{W=a,G5.transition=r}}function ks(){return r1().memoizedState}function Fg(e,c,a){var r=M3(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},bs(e))As(c,a);else if(a=ss(e,c,a,r),a!==null){var n=b2();d1(a,e,r,n),Es(a,c,r)}}function Bg(e,c,a){var r=M3(e),n={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(bs(e))As(c,n);else{var t=e.alternate;if(e.lanes===0&&(t===null||t.lanes===0)&&(t=c.lastRenderedReducer,t!==null))try{var i=c.lastRenderedState,s=t(i,a);if(n.hasEagerState=!0,n.eagerState=s,h1(s,i)){var o=c.interleaved;o===null?(n.next=n,pa(c)):(n.next=o.next,o.next=n),c.interleaved=n;return}}catch{}finally{}a=ss(e,c,n,r),a!==null&&(n=b2(),d1(a,e,r,n),Es(a,c,r))}}function bs(e){var c=e.alternate;return e===e2||c!==null&&c===e2}function As(e,c){I6=oe=!0;var a=e.pending;a===null?c.next=c:(c.next=a.next,a.next=c),e.pending=c}function Es(e,c,a){if(a&4194240){var r=c.lanes;r&=e.pendingLanes,a|=r,c.lanes=a,ca(e,a)}}var le={readContext:a1,useCallback:L2,useContext:L2,useEffect:L2,useImperativeHandle:L2,useInsertionEffect:L2,useLayoutEffect:L2,useMemo:L2,useReducer:L2,useRef:L2,useState:L2,useDebugValue:L2,useDeferredValue:L2,useTransition:L2,useMutableSource:L2,useSyncExternalStore:L2,useId:L2,unstable_isNewReconciler:!1},Ug={readContext:a1,useCallback:function(e,c){return V1().memoizedState=[e,c===void 0?null:c],e},useContext:a1,useEffect:ft,useImperativeHandle:function(e,c,a){return a=a!=null?a.concat([e]):null,T8(4194308,4,ys.bind(null,c,e),a)},useLayoutEffect:function(e,c){return T8(4194308,4,e,c)},useInsertionEffect:function(e,c){return T8(4,2,e,c)},useMemo:function(e,c){var a=V1();return c=c===void 0?null:c,e=e(),a.memoizedState=[e,c],e},useReducer:function(e,c,a){var r=V1();return c=a!==void 0?a(c):c,r.memoizedState=r.baseState=c,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Fg.bind(null,e2,e),[r.memoizedState,e]},useRef:function(e){var c=V1();return e={current:e},c.memoizedState=e},useState:lt,useDebugValue:ya,useDeferredValue:function(e){return V1().memoizedState=e},useTransition:function(){var e=lt(!1),c=e[0];return e=Og.bind(null,e[1]),V1().memoizedState=e,[c,e]},useMutableSource:function(){},useSyncExternalStore:function(e,c,a){var r=e2,n=V1();if(J){if(a===void 0)throw Error(w(407));a=a()}else{if(a=c(),p2===null)throw Error(w(349));J3&30||vs(r,c,a)}n.memoizedState=a;var t={value:a,getSnapshot:c};return n.queue=t,ft(Hs.bind(null,r,t,e),[e]),r.flags|=2048,o0(9,zs.bind(null,r,t,a,c),void 0,null),a},useId:function(){var e=V1(),c=p2.identifierPrefix;if(J){var a=P1,r=T1;a=(r&~(1<<32-u1(r)-1)).toString(32)+a,c=":"+c+"R"+a,a=i0++,0<a&&(c+="H"+a.toString(32)),c+=":"}else a=Dg++,c=":"+c+"r"+a.toString(32)+":";return e.memoizedState=c},unstable_isNewReconciler:!1},Wg={readContext:a1,useCallback:xs,useContext:a1,useEffect:La,useImperativeHandle:ws,useInsertionEffect:Cs,useLayoutEffect:Ls,useMemo:Ss,useReducer:q5,useRef:Ms,useState:function(){return q5(s0)},useDebugValue:ya,useDeferredValue:function(e){var c=r1();return Ns(c,o2.memoizedState,e)},useTransition:function(){var e=q5(s0)[0],c=r1().memoizedState;return[e,c]},useMutableSource:ms,useSyncExternalStore:ps,useId:ks,unstable_isNewReconciler:!1},jg={readContext:a1,useCallback:xs,useContext:a1,useEffect:La,useImperativeHandle:ws,useInsertionEffect:Cs,useLayoutEffect:Ls,useMemo:Ss,useReducer:K5,useRef:Ms,useState:function(){return K5(s0)},useDebugValue:ya,useDeferredValue:function(e){var c=r1();return o2===null?c.memoizedState=e:Ns(c,o2.memoizedState,e)},useTransition:function(){var e=K5(s0)[0],c=r1().memoizedState;return[e,c]},useMutableSource:ms,useSyncExternalStore:ps,useId:ks,unstable_isNewReconciler:!1};function J4(e,c){try{var a="",r=c;do a+=HH(r),r=r.return;while(r);var n=a}catch(t){n=`
Error generating stack: `+t.message+`
`+t.stack}return{value:e,source:c,stack:n,digest:null}}function Y5(e,c,a){return{value:e,source:null,stack:a??null,digest:c??null}}function Jc(e,c){try{console.error(c.value)}catch(a){setTimeout(function(){throw a})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Ts(e,c,a){a=I1(-1,a),a.tag=3,a.payload={element:null};var r=c.value;return a.callback=function(){ue||(ue=!0,o7=r),Jc(e,c)},a}function Ps(e,c,a){a=I1(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var n=c.value;a.payload=function(){return r(n)},a.callback=function(){Jc(e,c)}}var t=e.stateNode;return t!==null&&typeof t.componentDidCatch=="function"&&(a.callback=function(){Jc(e,c),typeof r!="function"&&(V3===null?V3=new Set([this]):V3.add(this));var i=c.stack;this.componentDidCatch(c.value,{componentStack:i!==null?i:""})}),a}function ut(e,c,a){var r=e.pingCache;if(r===null){r=e.pingCache=new $g;var n=new Set;r.set(c,n)}else n=r.get(c),n===void 0&&(n=new Set,r.set(c,n));n.has(a)||(n.add(a),e=tV.bind(null,e,c,a),c.then(e,e))}function dt(e){do{var c;if((c=e.tag===13)&&(c=e.memoizedState,c=c!==null?c.dehydrated!==null:!0),c)return e;e=e.return}while(e!==null);return null}function ht(e,c,a,r,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===c?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(c=I1(-1,1),c.tag=2,g3(a,c,1))),a.lanes|=1),e)}var Gg=G1.ReactCurrentOwner,_2=!1;function k2(e,c,a,r){c.child=e===null?ds(c,null,a,r):X4(c,e.child,a,r)}function mt(e,c,a,r,n){a=a.render;var t=c.ref;return F4(c,n),r=Ma(e,c,a,r,t,n),a=Ca(),e!==null&&!_2?(c.updateQueue=e.updateQueue,c.flags&=-2053,e.lanes&=~n,B1(e,c,n)):(J&&a&&la(c),c.flags|=1,k2(e,c,r,n),c.child)}function pt(e,c,a,r,n){if(e===null){var t=a.type;return typeof t=="function"&&!Ea(t)&&t.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(c.tag=15,c.type=t,_s(e,c,t,r,n)):(e=I8(a.type,null,r,c,c.mode,n),e.ref=c.ref,e.return=c,c.child=e)}if(t=e.child,!(e.lanes&n)){var i=t.memoizedProps;if(a=a.compare,a=a!==null?a:e0,a(i,r)&&e.ref===c.ref)return B1(e,c,n)}return c.flags|=1,e=C3(t,r),e.ref=c.ref,e.return=c,c.child=e}function _s(e,c,a,r,n){if(e!==null){var t=e.memoizedProps;if(e0(t,r)&&e.ref===c.ref)if(_2=!1,c.pendingProps=r=t,(e.lanes&n)!==0)e.flags&131072&&(_2=!0);else return c.lanes=e.lanes,B1(e,c,n)}return Zc(e,c,a,r,n)}function Rs(e,c,a){var r=c.pendingProps,n=r.children,t=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(c.mode&1))c.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(A4,W2),W2|=a;else{if(!(a&1073741824))return e=t!==null?t.baseLanes|a:a,c.lanes=c.childLanes=1073741824,c.memoizedState={baseLanes:e,cachePool:null,transitions:null},c.updateQueue=null,q(A4,W2),W2|=e,null;c.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=t!==null?t.baseLanes:a,q(A4,W2),W2|=r}else t!==null?(r=t.baseLanes|a,c.memoizedState=null):r=a,q(A4,W2),W2|=r;return k2(e,c,n,a),c.child}function Is(e,c){var a=c.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(c.flags|=512,c.flags|=2097152)}function Zc(e,c,a,r,n){var t=I2(a)?X3:x2.current;return t=K4(c,t),F4(c,n),a=Ma(e,c,a,r,t,n),r=Ca(),e!==null&&!_2?(c.updateQueue=e.updateQueue,c.flags&=-2053,e.lanes&=~n,B1(e,c,n)):(J&&r&&la(c),c.flags|=1,k2(e,c,a,n),c.child)}function vt(e,c,a,r,n){if(I2(a)){var t=!0;ce(c)}else t=!1;if(F4(c,n),c.stateNode===null)P8(e,c),fs(c,a,r),Qc(c,a,r,n),r=!0;else if(e===null){var i=c.stateNode,s=c.memoizedProps;i.props=s;var o=i.context,l=a.contextType;typeof l=="object"&&l!==null?l=a1(l):(l=I2(a)?X3:x2.current,l=K4(c,l));var f=a.getDerivedStateFromProps,u=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||o!==l)&&st(c,i,r,l),r3=!1;var h=c.memoizedState;i.state=h,ie(c,r,i,n),o=c.memoizedState,s!==r||h!==o||R2.current||r3?(typeof f=="function"&&(Xc(c,a,f,r),o=c.memoizedState),(s=r3||it(c,a,s,r,h,o,l))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(c.flags|=4194308)):(typeof i.componentDidMount=="function"&&(c.flags|=4194308),c.memoizedProps=r,c.memoizedState=o),i.props=r,i.state=o,i.context=l,r=s):(typeof i.componentDidMount=="function"&&(c.flags|=4194308),r=!1)}else{i=c.stateNode,os(e,c),s=c.memoizedProps,l=c.type===c.elementType?s:s1(c.type,s),i.props=l,u=c.pendingProps,h=i.context,o=a.contextType,typeof o=="object"&&o!==null?o=a1(o):(o=I2(a)?X3:x2.current,o=K4(c,o));var v=a.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==u||h!==o)&&st(c,i,r,o),r3=!1,h=c.memoizedState,i.state=h,ie(c,r,i,n);var V=c.memoizedState;s!==u||h!==V||R2.current||r3?(typeof v=="function"&&(Xc(c,a,v,r),V=c.memoizedState),(l=r3||it(c,a,l,r,h,V,o)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,V,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,V,o)),typeof i.componentDidUpdate=="function"&&(c.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(c.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(c.flags|=1024),c.memoizedProps=r,c.memoizedState=V),i.props=r,i.state=V,i.context=o,r=l):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(c.flags|=1024),r=!1)}return e7(e,c,a,r,t,n)}function e7(e,c,a,r,n,t){Is(e,c);var i=(c.flags&128)!==0;if(!r&&!i)return n&&ct(c,a,!1),B1(e,c,t);r=c.stateNode,Gg.current=c;var s=i&&typeof a.getDerivedStateFromError!="function"?null:r.render();return c.flags|=1,e!==null&&i?(c.child=X4(c,e.child,null,t),c.child=X4(c,null,s,t)):k2(e,c,s,t),c.memoizedState=r.state,n&&ct(c,a,!0),c.child}function Ds(e){var c=e.stateNode;c.pendingContext?et(e,c.pendingContext,c.pendingContext!==c.context):c.context&&et(e,c.context,!1),za(e,c.containerInfo)}function zt(e,c,a,r,n){return Y4(),ua(n),c.flags|=256,k2(e,c,a,r),c.child}var c7={dehydrated:null,treeContext:null,retryLane:0};function a7(e){return{baseLanes:e,cachePool:null,transitions:null}}function Os(e,c,a){var r=c.pendingProps,n=Z.current,t=!1,i=(c.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(t=!0,c.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),q(Z,n&1),e===null)return Kc(c),e=c.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(c.mode&1?e.data==="$!"?c.lanes=8:c.lanes=1073741824:c.lanes=1,null):(i=r.children,e=r.fallback,t?(r=c.mode,t=c.child,i={mode:"hidden",children:i},!(r&1)&&t!==null?(t.childLanes=0,t.pendingProps=i):t=$e(i,r,0,null),e=K3(e,r,a,null),t.return=c,e.return=c,t.sibling=e,c.child=t,c.child.memoizedState=a7(a),c.memoizedState=c7,e):wa(c,i));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return qg(e,c,i,r,s,n,a);if(t){t=r.fallback,i=c.mode,n=e.child,s=n.sibling;var o={mode:"hidden",children:r.children};return!(i&1)&&c.child!==n?(r=c.child,r.childLanes=0,r.pendingProps=o,c.deletions=null):(r=C3(n,o),r.subtreeFlags=n.subtreeFlags&14680064),s!==null?t=C3(s,t):(t=K3(t,i,a,null),t.flags|=2),t.return=c,r.return=c,r.sibling=t,c.child=r,r=t,t=c.child,i=e.child.memoizedState,i=i===null?a7(a):{baseLanes:i.baseLanes|a,cachePool:null,transitions:i.transitions},t.memoizedState=i,t.childLanes=e.childLanes&~a,c.memoizedState=c7,r}return t=e.child,e=t.sibling,r=C3(t,{mode:"visible",children:r.children}),!(c.mode&1)&&(r.lanes=a),r.return=c,r.sibling=null,e!==null&&(a=c.deletions,a===null?(c.deletions=[e],c.flags|=16):a.push(e)),c.child=r,c.memoizedState=null,r}function wa(e,c){return c=$e({mode:"visible",children:c},e.mode,0,null),c.return=e,e.child=c}function u8(e,c,a,r){return r!==null&&ua(r),X4(c,e.child,null,a),e=wa(c,c.pendingProps.children),e.flags|=2,c.memoizedState=null,e}function qg(e,c,a,r,n,t,i){if(a)return c.flags&256?(c.flags&=-257,r=Y5(Error(w(422))),u8(e,c,i,r)):c.memoizedState!==null?(c.child=e.child,c.flags|=128,null):(t=r.fallback,n=c.mode,r=$e({mode:"visible",children:r.children},n,0,null),t=K3(t,n,i,null),t.flags|=2,r.return=c,t.return=c,r.sibling=t,c.child=r,c.mode&1&&X4(c,e.child,null,i),c.child.memoizedState=a7(i),c.memoizedState=c7,t);if(!(c.mode&1))return u8(e,c,i,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var s=r.dgst;return r=s,t=Error(w(419)),r=Y5(t,r,void 0),u8(e,c,i,r)}if(s=(i&e.childLanes)!==0,_2||s){if(r=p2,r!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|i)?0:n,n!==0&&n!==t.retryLane&&(t.retryLane=n,F1(e,n),d1(r,e,n,-1))}return Aa(),r=Y5(Error(w(421))),u8(e,c,i,r)}return n.data==="$?"?(c.flags|=128,c.child=e.child,c=iV.bind(null,e),n._reactRetry=c,null):(e=t.treeContext,j2=H3(n.nextSibling),$2=c,J=!0,l1=null,e!==null&&(J2[Z2++]=T1,J2[Z2++]=P1,J2[Z2++]=Q3,T1=e.id,P1=e.overflow,Q3=c),c=wa(c,r.children),c.flags|=4096,c)}function Ht(e,c,a){e.lanes|=c;var r=e.alternate;r!==null&&(r.lanes|=c),Yc(e.return,c,a)}function X5(e,c,a,r,n){var t=e.memoizedState;t===null?e.memoizedState={isBackwards:c,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:n}:(t.isBackwards=c,t.rendering=null,t.renderingStartTime=0,t.last=r,t.tail=a,t.tailMode=n)}function Fs(e,c,a){var r=c.pendingProps,n=r.revealOrder,t=r.tail;if(k2(e,c,r.children,a),r=Z.current,r&2)r=r&1|2,c.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=c.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ht(e,a,c);else if(e.tag===19)Ht(e,a,c);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===c)break e;for(;e.sibling===null;){if(e.return===null||e.return===c)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(Z,r),!(c.mode&1))c.memoizedState=null;else switch(n){case"forwards":for(a=c.child,n=null;a!==null;)e=a.alternate,e!==null&&se(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=c.child,c.child=null):(n=a.sibling,a.sibling=null),X5(c,!1,n,a,t);break;case"backwards":for(a=null,n=c.child,c.child=null;n!==null;){if(e=n.alternate,e!==null&&se(e)===null){c.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}X5(c,!0,a,null,t);break;case"together":X5(c,!1,null,null,void 0);break;default:c.memoizedState=null}return c.child}function P8(e,c){!(c.mode&1)&&e!==null&&(e.alternate=null,c.alternate=null,c.flags|=2)}function B1(e,c,a){if(e!==null&&(c.dependencies=e.dependencies),Z3|=c.lanes,!(a&c.childLanes))return null;if(e!==null&&c.child!==e.child)throw Error(w(153));if(c.child!==null){for(e=c.child,a=C3(e,e.pendingProps),c.child=a,a.return=c;e.sibling!==null;)e=e.sibling,a=a.sibling=C3(e,e.pendingProps),a.return=c;a.sibling=null}return c.child}function Kg(e,c,a){switch(c.tag){case 3:Ds(c),Y4();break;case 5:hs(c);break;case 1:I2(c.type)&&ce(c);break;case 4:za(c,c.stateNode.containerInfo);break;case 10:var r=c.type._context,n=c.memoizedProps.value;q(ne,r._currentValue),r._currentValue=n;break;case 13:if(r=c.memoizedState,r!==null)return r.dehydrated!==null?(q(Z,Z.current&1),c.flags|=128,null):a&c.child.childLanes?Os(e,c,a):(q(Z,Z.current&1),e=B1(e,c,a),e!==null?e.sibling:null);q(Z,Z.current&1);break;case 19:if(r=(a&c.childLanes)!==0,e.flags&128){if(r)return Fs(e,c,a);c.flags|=128}if(n=c.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Z,Z.current),r)break;return null;case 22:case 23:return c.lanes=0,Rs(e,c,a)}return B1(e,c,a)}var Bs,r7,Us,Ws;Bs=function(e,c){for(var a=c.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break;for(;a.sibling===null;){if(a.return===null||a.return===c)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};r7=function(){};Us=function(e,c,a,r){var n=e.memoizedProps;if(n!==r){e=c.stateNode,j3(y1.current);var t=null;switch(a){case"input":n=wc(e,n),r=wc(e,r),t=[];break;case"select":n=c2({},n,{value:void 0}),r=c2({},r,{value:void 0}),t=[];break;case"textarea":n=Nc(e,n),r=Nc(e,r),t=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Z8)}bc(a,r);var i;a=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var s=n[l];for(i in s)s.hasOwnProperty(i)&&(a||(a={}),a[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(q6.hasOwnProperty(l)?t||(t=[]):(t=t||[]).push(l,null));for(l in r){var o=r[l];if(s=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&o!==s&&(o!=null||s!=null))if(l==="style")if(s){for(i in s)!s.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(a||(a={}),a[i]="");for(i in o)o.hasOwnProperty(i)&&s[i]!==o[i]&&(a||(a={}),a[i]=o[i])}else a||(t||(t=[]),t.push(l,a)),a=o;else l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,s=s?s.__html:void 0,o!=null&&s!==o&&(t=t||[]).push(l,o)):l==="children"?typeof o!="string"&&typeof o!="number"||(t=t||[]).push(l,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(q6.hasOwnProperty(l)?(o!=null&&l==="onScroll"&&K("scroll",e),t||s===o||(t=[])):(t=t||[]).push(l,o))}a&&(t=t||[]).push("style",a);var l=t;(c.updateQueue=l)&&(c.flags|=4)}};Ws=function(e,c,a,r){a!==r&&(c.flags|=4)};function L6(e,c){if(!J)switch(e.tailMode){case"hidden":c=e.tail;for(var a=null;c!==null;)c.alternate!==null&&(a=c),c=c.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?c||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function y2(e){var c=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(c)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=r,e.childLanes=a,c}function Yg(e,c,a){var r=c.pendingProps;switch(fa(c),c.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return y2(c),null;case 1:return I2(c.type)&&ee(),y2(c),null;case 3:return r=c.stateNode,Q4(),X(R2),X(x2),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(l8(c)?c.flags|=4:e===null||e.memoizedState.isDehydrated&&!(c.flags&256)||(c.flags|=1024,l1!==null&&(u7(l1),l1=null))),r7(e,c),y2(c),null;case 5:Ha(c);var n=j3(t0.current);if(a=c.type,e!==null&&c.stateNode!=null)Us(e,c,a,r,n),e.ref!==c.ref&&(c.flags|=512,c.flags|=2097152);else{if(!r){if(c.stateNode===null)throw Error(w(166));return y2(c),null}if(e=j3(y1.current),l8(c)){r=c.stateNode,a=c.type;var t=c.memoizedProps;switch(r[M1]=c,r[r0]=t,e=(c.mode&1)!==0,a){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(n=0;n<N6.length;n++)K(N6[n],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Sn(r,t),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!t.multiple},K("invalid",r);break;case"textarea":kn(r,t),K("invalid",r)}bc(a,t),n=null;for(var i in t)if(t.hasOwnProperty(i)){var s=t[i];i==="children"?typeof s=="string"?r.textContent!==s&&(t.suppressHydrationWarning!==!0&&o8(r.textContent,s,e),n=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(t.suppressHydrationWarning!==!0&&o8(r.textContent,s,e),n=["children",""+s]):q6.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&K("scroll",r)}switch(a){case"input":e8(r),Nn(r,t,!0);break;case"textarea":e8(r),bn(r);break;case"select":case"option":break;default:typeof t.onClick=="function"&&(r.onclick=Z8)}r=n,c.updateQueue=r,r!==null&&(c.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vi(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(a,{is:r.is}):(e=i.createElement(a),a==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,a),e[M1]=c,e[r0]=r,Bs(e,c,!1,!1),c.stateNode=e;e:{switch(i=Ac(a,r),a){case"dialog":K("cancel",e),K("close",e),n=r;break;case"iframe":case"object":case"embed":K("load",e),n=r;break;case"video":case"audio":for(n=0;n<N6.length;n++)K(N6[n],e);n=r;break;case"source":K("error",e),n=r;break;case"img":case"image":case"link":K("error",e),K("load",e),n=r;break;case"details":K("toggle",e),n=r;break;case"input":Sn(e,r),n=wc(e,r),K("invalid",e);break;case"option":n=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},n=c2({},r,{value:void 0}),K("invalid",e);break;case"textarea":kn(e,r),n=Nc(e,r),K("invalid",e);break;default:n=r}bc(a,n),s=n;for(t in s)if(s.hasOwnProperty(t)){var o=s[t];t==="style"?gi(e,o):t==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&zi(e,o)):t==="children"?typeof o=="string"?(a!=="textarea"||o!=="")&&K6(e,o):typeof o=="number"&&K6(e,""+o):t!=="suppressContentEditableWarning"&&t!=="suppressHydrationWarning"&&t!=="autoFocus"&&(q6.hasOwnProperty(t)?o!=null&&t==="onScroll"&&K("scroll",e):o!=null&&Y7(e,t,o,i))}switch(a){case"input":e8(e),Nn(e,r,!1);break;case"textarea":e8(e),bn(e);break;case"option":r.value!=null&&e.setAttribute("value",""+x3(r.value));break;case"select":e.multiple=!!r.multiple,t=r.value,t!=null?R4(e,!!r.multiple,t,!1):r.defaultValue!=null&&R4(e,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Z8)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(c.flags|=4)}c.ref!==null&&(c.flags|=512,c.flags|=2097152)}return y2(c),null;case 6:if(e&&c.stateNode!=null)Ws(e,c,e.memoizedProps,r);else{if(typeof r!="string"&&c.stateNode===null)throw Error(w(166));if(a=j3(t0.current),j3(y1.current),l8(c)){if(r=c.stateNode,a=c.memoizedProps,r[M1]=c,(t=r.nodeValue!==a)&&(e=$2,e!==null))switch(e.tag){case 3:o8(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&o8(r.nodeValue,a,(e.mode&1)!==0)}t&&(c.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[M1]=c,c.stateNode=r}return y2(c),null;case 13:if(X(Z),r=c.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&j2!==null&&c.mode&1&&!(c.flags&128))is(),Y4(),c.flags|=98560,t=!1;else if(t=l8(c),r!==null&&r.dehydrated!==null){if(e===null){if(!t)throw Error(w(318));if(t=c.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));t[M1]=c}else Y4(),!(c.flags&128)&&(c.memoizedState=null),c.flags|=4;y2(c),t=!1}else l1!==null&&(u7(l1),l1=null),t=!0;if(!t)return c.flags&65536?c:null}return c.flags&128?(c.lanes=a,c):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(c.child.flags|=8192,c.mode&1&&(e===null||Z.current&1?f2===0&&(f2=3):Aa())),c.updateQueue!==null&&(c.flags|=4),y2(c),null);case 4:return Q4(),r7(e,c),e===null&&c0(c.stateNode.containerInfo),y2(c),null;case 10:return ma(c.type._context),y2(c),null;case 17:return I2(c.type)&&ee(),y2(c),null;case 19:if(X(Z),t=c.memoizedState,t===null)return y2(c),null;if(r=(c.flags&128)!==0,i=t.rendering,i===null)if(r)L6(t,!1);else{if(f2!==0||e!==null&&e.flags&128)for(e=c.child;e!==null;){if(i=se(e),i!==null){for(c.flags|=128,L6(t,!1),r=i.updateQueue,r!==null&&(c.updateQueue=r,c.flags|=4),c.subtreeFlags=0,r=a,a=c.child;a!==null;)t=a,e=r,t.flags&=14680066,i=t.alternate,i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return q(Z,Z.current&1|2),c.child}e=e.sibling}t.tail!==null&&n2()>Z4&&(c.flags|=128,r=!0,L6(t,!1),c.lanes=4194304)}else{if(!r)if(e=se(i),e!==null){if(c.flags|=128,r=!0,a=e.updateQueue,a!==null&&(c.updateQueue=a,c.flags|=4),L6(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!J)return y2(c),null}else 2*n2()-t.renderingStartTime>Z4&&a!==1073741824&&(c.flags|=128,r=!0,L6(t,!1),c.lanes=4194304);t.isBackwards?(i.sibling=c.child,c.child=i):(a=t.last,a!==null?a.sibling=i:c.child=i,t.last=i)}return t.tail!==null?(c=t.tail,t.rendering=c,t.tail=c.sibling,t.renderingStartTime=n2(),c.sibling=null,a=Z.current,q(Z,r?a&1|2:a&1),c):(y2(c),null);case 22:case 23:return ba(),r=c.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(c.flags|=8192),r&&c.mode&1?W2&1073741824&&(y2(c),c.subtreeFlags&6&&(c.flags|=8192)):y2(c),null;case 24:return null;case 25:return null}throw Error(w(156,c.tag))}function Xg(e,c){switch(fa(c),c.tag){case 1:return I2(c.type)&&ee(),e=c.flags,e&65536?(c.flags=e&-65537|128,c):null;case 3:return Q4(),X(R2),X(x2),ga(),e=c.flags,e&65536&&!(e&128)?(c.flags=e&-65537|128,c):null;case 5:return Ha(c),null;case 13:if(X(Z),e=c.memoizedState,e!==null&&e.dehydrated!==null){if(c.alternate===null)throw Error(w(340));Y4()}return e=c.flags,e&65536?(c.flags=e&-65537|128,c):null;case 19:return X(Z),null;case 4:return Q4(),null;case 10:return ma(c.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var d8=!1,w2=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,k=null;function b4(e,c){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){a2(e,c,r)}else a.current=null}function n7(e,c,a){try{a()}catch(r){a2(e,c,r)}}var gt=!1;function Jg(e,c){if(Bc=X8,e=qi(),oa(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var n=r.anchorOffset,t=r.focusNode;r=r.focusOffset;try{a.nodeType,t.nodeType}catch{a=null;break e}var i=0,s=-1,o=-1,l=0,f=0,u=e,h=null;c:for(;;){for(var v;u!==a||n!==0&&u.nodeType!==3||(s=i+n),u!==t||r!==0&&u.nodeType!==3||(o=i+r),u.nodeType===3&&(i+=u.nodeValue.length),(v=u.firstChild)!==null;)h=u,u=v;for(;;){if(u===e)break c;if(h===a&&++l===n&&(s=i),h===t&&++f===r&&(o=i),(v=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=v}a=s===-1||o===-1?null:{start:s,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:e,selectionRange:a},X8=!1,k=c;k!==null;)if(c=k,e=c.child,(c.subtreeFlags&1028)!==0&&e!==null)e.return=c,k=e;else for(;k!==null;){c=k;try{var V=c.alternate;if(c.flags&1024)switch(c.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var H=V.memoizedProps,C=V.memoizedState,m=c.stateNode,d=m.getSnapshotBeforeUpdate(c.elementType===c.type?H:s1(c.type,H),C);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=c.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){a2(c,c.return,g)}if(e=c.sibling,e!==null){e.return=c.return,k=e;break}k=c.return}return V=gt,gt=!1,V}function D6(e,c,a){var r=c.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.destroy;n.destroy=void 0,t!==void 0&&n7(c,a,t)}n=n.next}while(n!==r)}}function We(e,c){if(c=c.updateQueue,c=c!==null?c.lastEffect:null,c!==null){var a=c=c.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==c)}}function t7(e){var c=e.ref;if(c!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof c=="function"?c(e):c.current=e}}function js(e){var c=e.alternate;c!==null&&(e.alternate=null,js(c)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(c=e.stateNode,c!==null&&(delete c[M1],delete c[r0],delete c[$c],delete c[Pg],delete c[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $s(e){return e.tag===5||e.tag===3||e.tag===4}function Vt(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$s(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function i7(e,c,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,c?a.nodeType===8?a.parentNode.insertBefore(e,c):a.insertBefore(e,c):(a.nodeType===8?(c=a.parentNode,c.insertBefore(e,a)):(c=a,c.appendChild(e)),a=a._reactRootContainer,a!=null||c.onclick!==null||(c.onclick=Z8));else if(r!==4&&(e=e.child,e!==null))for(i7(e,c,a),e=e.sibling;e!==null;)i7(e,c,a),e=e.sibling}function s7(e,c,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,c?a.insertBefore(e,c):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(s7(e,c,a),e=e.sibling;e!==null;)s7(e,c,a),e=e.sibling}var V2=null,o1=!1;function Z1(e,c,a){for(a=a.child;a!==null;)Gs(e,c,a),a=a.sibling}function Gs(e,c,a){if(L1&&typeof L1.onCommitFiberUnmount=="function")try{L1.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 5:w2||b4(a,c);case 6:var r=V2,n=o1;V2=null,Z1(e,c,a),V2=r,o1=n,V2!==null&&(o1?(e=V2,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):V2.removeChild(a.stateNode));break;case 18:V2!==null&&(o1?(e=V2,a=a.stateNode,e.nodeType===8?W5(e.parentNode,a):e.nodeType===1&&W5(e,a),J6(e)):W5(V2,a.stateNode));break;case 4:r=V2,n=o1,V2=a.stateNode.containerInfo,o1=!0,Z1(e,c,a),V2=r,o1=n;break;case 0:case 11:case 14:case 15:if(!w2&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var t=n,i=t.destroy;t=t.tag,i!==void 0&&(t&2||t&4)&&n7(a,c,i),n=n.next}while(n!==r)}Z1(e,c,a);break;case 1:if(!w2&&(b4(a,c),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){a2(a,c,s)}Z1(e,c,a);break;case 21:Z1(e,c,a);break;case 22:a.mode&1?(w2=(r=w2)||a.memoizedState!==null,Z1(e,c,a),w2=r):Z1(e,c,a);break;default:Z1(e,c,a)}}function Mt(e){var c=e.updateQueue;if(c!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Qg),c.forEach(function(r){var n=sV.bind(null,e,r);a.has(r)||(a.add(r),r.then(n,n))})}}function i1(e,c){var a=c.deletions;if(a!==null)for(var r=0;r<a.length;r++){var n=a[r];try{var t=e,i=c,s=i;e:for(;s!==null;){switch(s.tag){case 5:V2=s.stateNode,o1=!1;break e;case 3:V2=s.stateNode.containerInfo,o1=!0;break e;case 4:V2=s.stateNode.containerInfo,o1=!0;break e}s=s.return}if(V2===null)throw Error(w(160));Gs(t,i,n),V2=null,o1=!1;var o=n.alternate;o!==null&&(o.return=null),n.return=null}catch(l){a2(n,c,l)}}if(c.subtreeFlags&12854)for(c=c.child;c!==null;)qs(c,e),c=c.sibling}function qs(e,c){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i1(c,e),g1(e),r&4){try{D6(3,e,e.return),We(3,e)}catch(H){a2(e,e.return,H)}try{D6(5,e,e.return)}catch(H){a2(e,e.return,H)}}break;case 1:i1(c,e),g1(e),r&512&&a!==null&&b4(a,a.return);break;case 5:if(i1(c,e),g1(e),r&512&&a!==null&&b4(a,a.return),e.flags&32){var n=e.stateNode;try{K6(n,"")}catch(H){a2(e,e.return,H)}}if(r&4&&(n=e.stateNode,n!=null)){var t=e.memoizedProps,i=a!==null?a.memoizedProps:t,s=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{s==="input"&&t.type==="radio"&&t.name!=null&&mi(n,t),Ac(s,i);var l=Ac(s,t);for(i=0;i<o.length;i+=2){var f=o[i],u=o[i+1];f==="style"?gi(n,u):f==="dangerouslySetInnerHTML"?zi(n,u):f==="children"?K6(n,u):Y7(n,f,u,l)}switch(s){case"input":xc(n,t);break;case"textarea":pi(n,t);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var v=t.value;v!=null?R4(n,!!t.multiple,v,!1):h!==!!t.multiple&&(t.defaultValue!=null?R4(n,!!t.multiple,t.defaultValue,!0):R4(n,!!t.multiple,t.multiple?[]:"",!1))}n[r0]=t}catch(H){a2(e,e.return,H)}}break;case 6:if(i1(c,e),g1(e),r&4){if(e.stateNode===null)throw Error(w(162));n=e.stateNode,t=e.memoizedProps;try{n.nodeValue=t}catch(H){a2(e,e.return,H)}}break;case 3:if(i1(c,e),g1(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{J6(c.containerInfo)}catch(H){a2(e,e.return,H)}break;case 4:i1(c,e),g1(e);break;case 13:i1(c,e),g1(e),n=e.child,n.flags&8192&&(t=n.memoizedState!==null,n.stateNode.isHidden=t,!t||n.alternate!==null&&n.alternate.memoizedState!==null||(Na=n2())),r&4&&Mt(e);break;case 22:if(f=a!==null&&a.memoizedState!==null,e.mode&1?(w2=(l=w2)||f,i1(c,e),w2=l):i1(c,e),g1(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!f&&e.mode&1)for(k=e,f=e.child;f!==null;){for(u=k=f;k!==null;){switch(h=k,v=h.child,h.tag){case 0:case 11:case 14:case 15:D6(4,h,h.return);break;case 1:b4(h,h.return);var V=h.stateNode;if(typeof V.componentWillUnmount=="function"){r=h,a=h.return;try{c=r,V.props=c.memoizedProps,V.state=c.memoizedState,V.componentWillUnmount()}catch(H){a2(r,a,H)}}break;case 5:b4(h,h.return);break;case 22:if(h.memoizedState!==null){Lt(u);continue}}v!==null?(v.return=h,k=v):Lt(u)}f=f.sibling}e:for(f=null,u=e;;){if(u.tag===5){if(f===null){f=u;try{n=u.stateNode,l?(t=n.style,typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"):(s=u.stateNode,o=u.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,s.style.display=Hi("display",i))}catch(H){a2(e,e.return,H)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(H){a2(e,e.return,H)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:i1(c,e),g1(e),r&4&&Mt(e);break;case 21:break;default:i1(c,e),g1(e)}}function g1(e){var c=e.flags;if(c&2){try{e:{for(var a=e.return;a!==null;){if($s(a)){var r=a;break e}a=a.return}throw Error(w(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(K6(n,""),r.flags&=-33);var t=Vt(e);s7(e,t,n);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Vt(e);i7(e,s,i);break;default:throw Error(w(161))}}catch(o){a2(e,e.return,o)}e.flags&=-3}c&4096&&(e.flags&=-4097)}function Zg(e,c,a){k=e,Ks(e)}function Ks(e,c,a){for(var r=(e.mode&1)!==0;k!==null;){var n=k,t=n.child;if(n.tag===22&&r){var i=n.memoizedState!==null||d8;if(!i){var s=n.alternate,o=s!==null&&s.memoizedState!==null||w2;s=d8;var l=w2;if(d8=i,(w2=o)&&!l)for(k=n;k!==null;)i=k,o=i.child,i.tag===22&&i.memoizedState!==null?yt(n):o!==null?(o.return=i,k=o):yt(n);for(;t!==null;)k=t,Ks(t),t=t.sibling;k=n,d8=s,w2=l}Ct(e)}else n.subtreeFlags&8772&&t!==null?(t.return=n,k=t):Ct(e)}}function Ct(e){for(;k!==null;){var c=k;if(c.flags&8772){var a=c.alternate;try{if(c.flags&8772)switch(c.tag){case 0:case 11:case 15:w2||We(5,c);break;case 1:var r=c.stateNode;if(c.flags&4&&!w2)if(a===null)r.componentDidMount();else{var n=c.elementType===c.type?a.memoizedProps:s1(c.type,a.memoizedProps);r.componentDidUpdate(n,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var t=c.updateQueue;t!==null&&tt(c,t,r);break;case 3:var i=c.updateQueue;if(i!==null){if(a=null,c.child!==null)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}tt(c,i,a)}break;case 5:var s=c.stateNode;if(a===null&&c.flags&4){a=s;var o=c.memoizedProps;switch(c.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&a.focus();break;case"img":o.src&&(a.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(c.memoizedState===null){var l=c.alternate;if(l!==null){var f=l.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&J6(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}w2||c.flags&512&&t7(c)}catch(h){a2(c,c.return,h)}}if(c===e){k=null;break}if(a=c.sibling,a!==null){a.return=c.return,k=a;break}k=c.return}}function Lt(e){for(;k!==null;){var c=k;if(c===e){k=null;break}var a=c.sibling;if(a!==null){a.return=c.return,k=a;break}k=c.return}}function yt(e){for(;k!==null;){var c=k;try{switch(c.tag){case 0:case 11:case 15:var a=c.return;try{We(4,c)}catch(o){a2(c,a,o)}break;case 1:var r=c.stateNode;if(typeof r.componentDidMount=="function"){var n=c.return;try{r.componentDidMount()}catch(o){a2(c,n,o)}}var t=c.return;try{t7(c)}catch(o){a2(c,t,o)}break;case 5:var i=c.return;try{t7(c)}catch(o){a2(c,i,o)}}}catch(o){a2(c,c.return,o)}if(c===e){k=null;break}var s=c.sibling;if(s!==null){s.return=c.return,k=s;break}k=c.return}}var eV=Math.ceil,fe=G1.ReactCurrentDispatcher,xa=G1.ReactCurrentOwner,c1=G1.ReactCurrentBatchConfig,B=0,p2=null,i2=null,M2=0,W2=0,A4=T3(0),f2=0,l0=null,Z3=0,je=0,Sa=0,O6=null,P2=null,Na=0,Z4=1/0,A1=null,ue=!1,o7=null,V3=null,h8=!1,d3=null,de=0,F6=0,l7=null,_8=-1,R8=0;function b2(){return B&6?n2():_8!==-1?_8:_8=n2()}function M3(e){return e.mode&1?B&2&&M2!==0?M2&-M2:Ig.transition!==null?(R8===0&&(R8=Ai()),R8):(e=W,e!==0||(e=window.event,e=e===void 0?16:Di(e.type)),e):1}function d1(e,c,a,r){if(50<F6)throw F6=0,l7=null,Error(w(185));w0(e,a,r),(!(B&2)||e!==p2)&&(e===p2&&(!(B&2)&&(je|=a),f2===4&&i3(e,M2)),D2(e,r),a===1&&B===0&&!(c.mode&1)&&(Z4=n2()+500,Fe&&P3()))}function D2(e,c){var a=e.callbackNode;IH(e,c);var r=Y8(e,e===p2?M2:0);if(r===0)a!==null&&Tn(a),e.callbackNode=null,e.callbackPriority=0;else if(c=r&-r,e.callbackPriority!==c){if(a!=null&&Tn(a),c===1)e.tag===0?Rg(wt.bind(null,e)):rs(wt.bind(null,e)),Eg(function(){!(B&6)&&P3()}),a=null;else{switch(Ei(r)){case 1:a=ea;break;case 4:a=ki;break;case 16:a=K8;break;case 536870912:a=bi;break;default:a=K8}a=ao(a,Ys.bind(null,e))}e.callbackPriority=c,e.callbackNode=a}}function Ys(e,c){if(_8=-1,R8=0,B&6)throw Error(w(327));var a=e.callbackNode;if(B4()&&e.callbackNode!==a)return null;var r=Y8(e,e===p2?M2:0);if(r===0)return null;if(r&30||r&e.expiredLanes||c)c=he(e,r);else{c=r;var n=B;B|=2;var t=Qs();(p2!==e||M2!==c)&&(A1=null,Z4=n2()+500,q3(e,c));do try{rV();break}catch(s){Xs(e,s)}while(1);ha(),fe.current=t,B=n,i2!==null?c=0:(p2=null,M2=0,c=f2)}if(c!==0){if(c===2&&(n=Rc(e),n!==0&&(r=n,c=f7(e,n))),c===1)throw a=l0,q3(e,0),i3(e,r),D2(e,n2()),a;if(c===6)i3(e,r);else{if(n=e.current.alternate,!(r&30)&&!cV(n)&&(c=he(e,r),c===2&&(t=Rc(e),t!==0&&(r=t,c=f7(e,t))),c===1))throw a=l0,q3(e,0),i3(e,r),D2(e,n2()),a;switch(e.finishedWork=n,e.finishedLanes=r,c){case 0:case 1:throw Error(w(345));case 2:O3(e,P2,A1);break;case 3:if(i3(e,r),(r&130023424)===r&&(c=Na+500-n2(),10<c)){if(Y8(e,0)!==0)break;if(n=e.suspendedLanes,(n&r)!==r){b2(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=jc(O3.bind(null,e,P2,A1),c);break}O3(e,P2,A1);break;case 4:if(i3(e,r),(r&4194240)===r)break;for(c=e.eventTimes,n=-1;0<r;){var i=31-u1(r);t=1<<i,i=c[i],i>n&&(n=i),r&=~t}if(r=n,r=n2()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eV(r/1960))-r,10<r){e.timeoutHandle=jc(O3.bind(null,e,P2,A1),r);break}O3(e,P2,A1);break;case 5:O3(e,P2,A1);break;default:throw Error(w(329))}}}return D2(e,n2()),e.callbackNode===a?Ys.bind(null,e):null}function f7(e,c){var a=O6;return e.current.memoizedState.isDehydrated&&(q3(e,c).flags|=256),e=he(e,c),e!==2&&(c=P2,P2=a,c!==null&&u7(c)),e}function u7(e){P2===null?P2=e:P2.push.apply(P2,e)}function cV(e){for(var c=e;;){if(c.flags&16384){var a=c.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var n=a[r],t=n.getSnapshot;n=n.value;try{if(!h1(t(),n))return!1}catch{return!1}}}if(a=c.child,c.subtreeFlags&16384&&a!==null)a.return=c,c=a;else{if(c===e)break;for(;c.sibling===null;){if(c.return===null||c.return===e)return!0;c=c.return}c.sibling.return=c.return,c=c.sibling}}return!0}function i3(e,c){for(c&=~Sa,c&=~je,e.suspendedLanes|=c,e.pingedLanes&=~c,e=e.expirationTimes;0<c;){var a=31-u1(c),r=1<<a;e[a]=-1,c&=~r}}function wt(e){if(B&6)throw Error(w(327));B4();var c=Y8(e,0);if(!(c&1))return D2(e,n2()),null;var a=he(e,c);if(e.tag!==0&&a===2){var r=Rc(e);r!==0&&(c=r,a=f7(e,r))}if(a===1)throw a=l0,q3(e,0),i3(e,c),D2(e,n2()),a;if(a===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=c,O3(e,P2,A1),D2(e,n2()),null}function ka(e,c){var a=B;B|=1;try{return e(c)}finally{B=a,B===0&&(Z4=n2()+500,Fe&&P3())}}function e4(e){d3!==null&&d3.tag===0&&!(B&6)&&B4();var c=B;B|=1;var a=c1.transition,r=W;try{if(c1.transition=null,W=1,e)return e()}finally{W=r,c1.transition=a,B=c,!(B&6)&&P3()}}function ba(){W2=A4.current,X(A4)}function q3(e,c){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Ag(a)),i2!==null)for(a=i2.return;a!==null;){var r=a;switch(fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ee();break;case 3:Q4(),X(R2),X(x2),ga();break;case 5:Ha(r);break;case 4:Q4();break;case 13:X(Z);break;case 19:X(Z);break;case 10:ma(r.type._context);break;case 22:case 23:ba()}a=a.return}if(p2=e,i2=e=C3(e.current,null),M2=W2=c,f2=0,l0=null,Sa=je=Z3=0,P2=O6=null,W3!==null){for(c=0;c<W3.length;c++)if(a=W3[c],r=a.interleaved,r!==null){a.interleaved=null;var n=r.next,t=a.pending;if(t!==null){var i=t.next;t.next=n,r.next=i}a.pending=r}W3=null}return e}function Xs(e,c){do{var a=i2;try{if(ha(),E8.current=le,oe){for(var r=e2.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}oe=!1}if(J3=0,d2=o2=e2=null,I6=!1,i0=0,xa.current=null,a===null||a.return===null){f2=1,l0=c,i2=null;break}e:{var t=e,i=a.return,s=a,o=c;if(c=M2,s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var l=o,f=s,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=dt(i);if(v!==null){v.flags&=-257,ht(v,i,s,t,c),v.mode&1&&ut(t,l,c),c=v,o=l;var V=c.updateQueue;if(V===null){var H=new Set;H.add(o),c.updateQueue=H}else V.add(o);break e}else{if(!(c&1)){ut(t,l,c),Aa();break e}o=Error(w(426))}}else if(J&&s.mode&1){var C=dt(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ht(C,i,s,t,c),ua(J4(o,s));break e}}t=o=J4(o,s),f2!==4&&(f2=2),O6===null?O6=[t]:O6.push(t),t=i;do{switch(t.tag){case 3:t.flags|=65536,c&=-c,t.lanes|=c;var m=Ts(t,o,c);nt(t,m);break e;case 1:s=o;var d=t.type,p=t.stateNode;if(!(t.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(V3===null||!V3.has(p)))){t.flags|=65536,c&=-c,t.lanes|=c;var g=Ps(t,s,c);nt(t,g);break e}}t=t.return}while(t!==null)}Zs(a)}catch(M){c=M,i2===a&&a!==null&&(i2=a=a.return);continue}break}while(1)}function Qs(){var e=fe.current;return fe.current=le,e===null?le:e}function Aa(){(f2===0||f2===3||f2===2)&&(f2=4),p2===null||!(Z3&268435455)&&!(je&268435455)||i3(p2,M2)}function he(e,c){var a=B;B|=2;var r=Qs();(p2!==e||M2!==c)&&(A1=null,q3(e,c));do try{aV();break}catch(n){Xs(e,n)}while(1);if(ha(),B=a,fe.current=r,i2!==null)throw Error(w(261));return p2=null,M2=0,f2}function aV(){for(;i2!==null;)Js(i2)}function rV(){for(;i2!==null&&!NH();)Js(i2)}function Js(e){var c=co(e.alternate,e,W2);e.memoizedProps=e.pendingProps,c===null?Zs(e):i2=c,xa.current=null}function Zs(e){var c=e;do{var a=c.alternate;if(e=c.return,c.flags&32768){if(a=Xg(a,c),a!==null){a.flags&=32767,i2=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{f2=6,i2=null;return}}else if(a=Yg(a,c,W2),a!==null){i2=a;return}if(c=c.sibling,c!==null){i2=c;return}i2=c=e}while(c!==null);f2===0&&(f2=5)}function O3(e,c,a){var r=W,n=c1.transition;try{c1.transition=null,W=1,nV(e,c,a,r)}finally{c1.transition=n,W=r}return null}function nV(e,c,a,r){do B4();while(d3!==null);if(B&6)throw Error(w(327));a=e.finishedWork;var n=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var t=a.lanes|a.childLanes;if(DH(e,t),e===p2&&(i2=p2=null,M2=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||h8||(h8=!0,ao(K8,function(){return B4(),null})),t=(a.flags&15990)!==0,a.subtreeFlags&15990||t){t=c1.transition,c1.transition=null;var i=W;W=1;var s=B;B|=4,xa.current=null,Jg(e,a),qs(a,e),yg(Uc),X8=!!Bc,Uc=Bc=null,e.current=a,Zg(a),kH(),B=s,W=i,c1.transition=t}else e.current=a;if(h8&&(h8=!1,d3=e,de=n),t=e.pendingLanes,t===0&&(V3=null),EH(a.stateNode),D2(e,n2()),c!==null)for(r=e.onRecoverableError,a=0;a<c.length;a++)n=c[a],r(n.value,{componentStack:n.stack,digest:n.digest});if(ue)throw ue=!1,e=o7,o7=null,e;return de&1&&e.tag!==0&&B4(),t=e.pendingLanes,t&1?e===l7?F6++:(F6=0,l7=e):F6=0,P3(),null}function B4(){if(d3!==null){var e=Ei(de),c=c1.transition,a=W;try{if(c1.transition=null,W=16>e?16:e,d3===null)var r=!1;else{if(e=d3,d3=null,de=0,B&6)throw Error(w(331));var n=B;for(B|=4,k=e.current;k!==null;){var t=k,i=t.child;if(k.flags&16){var s=t.deletions;if(s!==null){for(var o=0;o<s.length;o++){var l=s[o];for(k=l;k!==null;){var f=k;switch(f.tag){case 0:case 11:case 15:D6(8,f,t)}var u=f.child;if(u!==null)u.return=f,k=u;else for(;k!==null;){f=k;var h=f.sibling,v=f.return;if(js(f),f===l){k=null;break}if(h!==null){h.return=v,k=h;break}k=v}}}var V=t.alternate;if(V!==null){var H=V.child;if(H!==null){V.child=null;do{var C=H.sibling;H.sibling=null,H=C}while(H!==null)}}k=t}}if(t.subtreeFlags&2064&&i!==null)i.return=t,k=i;else e:for(;k!==null;){if(t=k,t.flags&2048)switch(t.tag){case 0:case 11:case 15:D6(9,t,t.return)}var m=t.sibling;if(m!==null){m.return=t.return,k=m;break e}k=t.return}}var d=e.current;for(k=d;k!==null;){i=k;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,k=p;else e:for(i=d;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:We(9,s)}}catch(M){a2(s,s.return,M)}if(s===i){k=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,k=g;break e}k=s.return}}if(B=n,P3(),L1&&typeof L1.onPostCommitFiberRoot=="function")try{L1.onPostCommitFiberRoot(_e,e)}catch{}r=!0}return r}finally{W=a,c1.transition=c}}return!1}function xt(e,c,a){c=J4(a,c),c=Ts(e,c,1),e=g3(e,c,1),c=b2(),e!==null&&(w0(e,1,c),D2(e,c))}function a2(e,c,a){if(e.tag===3)xt(e,e,a);else for(;c!==null;){if(c.tag===3){xt(c,e,a);break}else if(c.tag===1){var r=c.stateNode;if(typeof c.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(V3===null||!V3.has(r))){e=J4(a,e),e=Ps(c,e,1),c=g3(c,e,1),e=b2(),c!==null&&(w0(c,1,e),D2(c,e));break}}c=c.return}}function tV(e,c,a){var r=e.pingCache;r!==null&&r.delete(c),c=b2(),e.pingedLanes|=e.suspendedLanes&a,p2===e&&(M2&a)===a&&(f2===4||f2===3&&(M2&130023424)===M2&&500>n2()-Na?q3(e,0):Sa|=a),D2(e,c)}function eo(e,c){c===0&&(e.mode&1?(c=r8,r8<<=1,!(r8&130023424)&&(r8=4194304)):c=1);var a=b2();e=F1(e,c),e!==null&&(w0(e,c,a),D2(e,a))}function iV(e){var c=e.memoizedState,a=0;c!==null&&(a=c.retryLane),eo(e,a)}function sV(e,c){var a=0;switch(e.tag){case 13:var r=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(c),eo(e,a)}var co;co=function(e,c,a){if(e!==null)if(e.memoizedProps!==c.pendingProps||R2.current)_2=!0;else{if(!(e.lanes&a)&&!(c.flags&128))return _2=!1,Kg(e,c,a);_2=!!(e.flags&131072)}else _2=!1,J&&c.flags&1048576&&ns(c,re,c.index);switch(c.lanes=0,c.tag){case 2:var r=c.type;P8(e,c),e=c.pendingProps;var n=K4(c,x2.current);F4(c,a),n=Ma(null,c,r,e,n,a);var t=Ca();return c.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(c.tag=1,c.memoizedState=null,c.updateQueue=null,I2(r)?(t=!0,ce(c)):t=!1,c.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,va(c),n.updater=Be,c.stateNode=n,n._reactInternals=c,Qc(c,r,e,a),c=e7(null,c,r,!0,t,a)):(c.tag=0,J&&t&&la(c),k2(null,c,n,a),c=c.child),c;case 16:r=c.elementType;e:{switch(P8(e,c),e=c.pendingProps,n=r._init,r=n(r._payload),c.type=r,n=c.tag=lV(r),e=s1(r,e),n){case 0:c=Zc(null,c,r,e,a);break e;case 1:c=vt(null,c,r,e,a);break e;case 11:c=mt(null,c,r,e,a);break e;case 14:c=pt(null,c,r,s1(r.type,e),a);break e}throw Error(w(306,r,""))}return c;case 0:return r=c.type,n=c.pendingProps,n=c.elementType===r?n:s1(r,n),Zc(e,c,r,n,a);case 1:return r=c.type,n=c.pendingProps,n=c.elementType===r?n:s1(r,n),vt(e,c,r,n,a);case 3:e:{if(Ds(c),e===null)throw Error(w(387));r=c.pendingProps,t=c.memoizedState,n=t.element,os(e,c),ie(c,r,null,a);var i=c.memoizedState;if(r=i.element,t.isDehydrated)if(t={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},c.updateQueue.baseState=t,c.memoizedState=t,c.flags&256){n=J4(Error(w(423)),c),c=zt(e,c,r,a,n);break e}else if(r!==n){n=J4(Error(w(424)),c),c=zt(e,c,r,a,n);break e}else for(j2=H3(c.stateNode.containerInfo.firstChild),$2=c,J=!0,l1=null,a=ds(c,null,r,a),c.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Y4(),r===n){c=B1(e,c,a);break e}k2(e,c,r,a)}c=c.child}return c;case 5:return hs(c),e===null&&Kc(c),r=c.type,n=c.pendingProps,t=e!==null?e.memoizedProps:null,i=n.children,Wc(r,n)?i=null:t!==null&&Wc(r,t)&&(c.flags|=32),Is(e,c),k2(e,c,i,a),c.child;case 6:return e===null&&Kc(c),null;case 13:return Os(e,c,a);case 4:return za(c,c.stateNode.containerInfo),r=c.pendingProps,e===null?c.child=X4(c,null,r,a):k2(e,c,r,a),c.child;case 11:return r=c.type,n=c.pendingProps,n=c.elementType===r?n:s1(r,n),mt(e,c,r,n,a);case 7:return k2(e,c,c.pendingProps,a),c.child;case 8:return k2(e,c,c.pendingProps.children,a),c.child;case 12:return k2(e,c,c.pendingProps.children,a),c.child;case 10:e:{if(r=c.type._context,n=c.pendingProps,t=c.memoizedProps,i=n.value,q(ne,r._currentValue),r._currentValue=i,t!==null)if(h1(t.value,i)){if(t.children===n.children&&!R2.current){c=B1(e,c,a);break e}}else for(t=c.child,t!==null&&(t.return=c);t!==null;){var s=t.dependencies;if(s!==null){i=t.child;for(var o=s.firstContext;o!==null;){if(o.context===r){if(t.tag===1){o=I1(-1,a&-a),o.tag=2;var l=t.updateQueue;if(l!==null){l=l.shared;var f=l.pending;f===null?o.next=o:(o.next=f.next,f.next=o),l.pending=o}}t.lanes|=a,o=t.alternate,o!==null&&(o.lanes|=a),Yc(t.return,a,c),s.lanes|=a;break}o=o.next}}else if(t.tag===10)i=t.type===c.type?null:t.child;else if(t.tag===18){if(i=t.return,i===null)throw Error(w(341));i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Yc(i,a,c),i=t.sibling}else i=t.child;if(i!==null)i.return=t;else for(i=t;i!==null;){if(i===c){i=null;break}if(t=i.sibling,t!==null){t.return=i.return,i=t;break}i=i.return}t=i}k2(e,c,n.children,a),c=c.child}return c;case 9:return n=c.type,r=c.pendingProps.children,F4(c,a),n=a1(n),r=r(n),c.flags|=1,k2(e,c,r,a),c.child;case 14:return r=c.type,n=s1(r,c.pendingProps),n=s1(r.type,n),pt(e,c,r,n,a);case 15:return _s(e,c,c.type,c.pendingProps,a);case 17:return r=c.type,n=c.pendingProps,n=c.elementType===r?n:s1(r,n),P8(e,c),c.tag=1,I2(r)?(e=!0,ce(c)):e=!1,F4(c,a),fs(c,r,n),Qc(c,r,n,a),e7(null,c,r,!0,e,a);case 19:return Fs(e,c,a);case 22:return Rs(e,c,a)}throw Error(w(156,c.tag))};function ao(e,c){return Ni(e,c)}function oV(e,c,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=c,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function e1(e,c,a,r){return new oV(e,c,a,r)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lV(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q7)return 11;if(e===J7)return 14}return 2}function C3(e,c){var a=e.alternate;return a===null?(a=e1(e.tag,c,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=c,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,c=e.dependencies,a.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function I8(e,c,a,r,n,t){var i=2;if(r=e,typeof e=="function")Ea(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case M4:return K3(a.children,n,t,c);case X7:i=8,n|=8;break;case Mc:return e=e1(12,a,c,n|2),e.elementType=Mc,e.lanes=t,e;case Cc:return e=e1(13,a,c,n),e.elementType=Cc,e.lanes=t,e;case Lc:return e=e1(19,a,c,n),e.elementType=Lc,e.lanes=t,e;case ui:return $e(a,n,t,c);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case li:i=10;break e;case fi:i=9;break e;case Q7:i=11;break e;case J7:i=14;break e;case a3:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return c=e1(i,a,c,n),c.elementType=e,c.type=r,c.lanes=t,c}function K3(e,c,a,r){return e=e1(7,e,r,c),e.lanes=a,e}function $e(e,c,a,r){return e=e1(22,e,r,c),e.elementType=ui,e.lanes=a,e.stateNode={isHidden:!1},e}function Q5(e,c,a){return e=e1(6,e,null,c),e.lanes=a,e}function J5(e,c,a){return c=e1(4,e.children!==null?e.children:[],e.key,c),c.lanes=a,c.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},c}function fV(e,c,a,r,n){this.tag=c,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E5(0),this.expirationTimes=E5(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E5(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Ta(e,c,a,r,n,t,i,s,o){return e=new fV(e,c,a,s,o),c===1?(c=1,t===!0&&(c|=8)):c=0,t=e1(3,null,null,c),e.current=t,t.stateNode=e,t.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(t),e}function uV(e,c,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V4,key:r==null?null:""+r,children:e,containerInfo:c,implementation:a}}function ro(e){if(!e)return S3;e=e._reactInternals;e:{if(s4(e)!==e||e.tag!==1)throw Error(w(170));var c=e;do{switch(c.tag){case 3:c=c.stateNode.context;break e;case 1:if(I2(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break e}}c=c.return}while(c!==null);throw Error(w(171))}if(e.tag===1){var a=e.type;if(I2(a))return as(e,a,c)}return c}function no(e,c,a,r,n,t,i,s,o){return e=Ta(a,r,!0,e,n,t,i,s,o),e.context=ro(null),a=e.current,r=b2(),n=M3(a),t=I1(r,n),t.callback=c??null,g3(a,t,n),e.current.lanes=n,w0(e,n,r),D2(e,r),e}function Ge(e,c,a,r){var n=c.current,t=b2(),i=M3(n);return a=ro(a),c.context===null?c.context=a:c.pendingContext=a,c=I1(t,i),c.payload={element:e},r=r===void 0?null:r,r!==null&&(c.callback=r),e=g3(n,c,i),e!==null&&(d1(e,n,i,t),A8(e,n,i)),i}function me(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function St(e,c){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<c?a:c}}function Pa(e,c){St(e,c),(e=e.alternate)&&St(e,c)}function dV(){return null}var to=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}qe.prototype.render=_a.prototype.render=function(e){var c=this._internalRoot;if(c===null)throw Error(w(409));Ge(e,c,null,null)};qe.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var c=e.containerInfo;e4(function(){Ge(null,e,null,null)}),c[O1]=null}};function qe(e){this._internalRoot=e}qe.prototype.unstable_scheduleHydration=function(e){if(e){var c=_i();e={blockedOn:null,target:e,priority:c};for(var a=0;a<t3.length&&c!==0&&c<t3[a].priority;a++);t3.splice(a,0,e),a===0&&Ii(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ke(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nt(){}function hV(e,c,a,r,n){if(n){if(typeof r=="function"){var t=r;r=function(){var l=me(i);t.call(l)}}var i=no(c,r,e,0,null,!1,!1,"",Nt);return e._reactRootContainer=i,e[O1]=i.current,c0(e.nodeType===8?e.parentNode:e),e4(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof r=="function"){var s=r;r=function(){var l=me(o);s.call(l)}}var o=Ta(e,0,!1,null,null,!1,!1,"",Nt);return e._reactRootContainer=o,e[O1]=o.current,c0(e.nodeType===8?e.parentNode:e),e4(function(){Ge(c,o,a,r)}),o}function Ye(e,c,a,r,n){var t=a._reactRootContainer;if(t){var i=t;if(typeof n=="function"){var s=n;n=function(){var o=me(i);s.call(o)}}Ge(c,i,e,n)}else i=hV(a,c,e,n,r);return me(i)}Ti=function(e){switch(e.tag){case 3:var c=e.stateNode;if(c.current.memoizedState.isDehydrated){var a=S6(c.pendingLanes);a!==0&&(ca(c,a|1),D2(c,n2()),!(B&6)&&(Z4=n2()+500,P3()))}break;case 13:e4(function(){var r=F1(e,1);if(r!==null){var n=b2();d1(r,e,1,n)}}),Pa(e,1)}};aa=function(e){if(e.tag===13){var c=F1(e,134217728);if(c!==null){var a=b2();d1(c,e,134217728,a)}Pa(e,134217728)}};Pi=function(e){if(e.tag===13){var c=M3(e),a=F1(e,c);if(a!==null){var r=b2();d1(a,e,c,r)}Pa(e,c)}};_i=function(){return W};Ri=function(e,c){var a=W;try{return W=e,c()}finally{W=a}};Tc=function(e,c,a){switch(c){case"input":if(xc(e,a),c=a.name,a.type==="radio"&&c!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+c)+'][type="radio"]'),c=0;c<a.length;c++){var r=a[c];if(r!==e&&r.form===e.form){var n=Oe(r);if(!n)throw Error(w(90));hi(r),xc(r,n)}}}break;case"textarea":pi(e,a);break;case"select":c=a.value,c!=null&&R4(e,!!a.multiple,c,!1)}};Ci=ka;Li=e4;var mV={usingClientEntryPoint:!1,Events:[S0,w4,Oe,Vi,Mi,ka]},y6={findFiberByHostInstance:U3,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pV={bundleType:y6.bundleType,version:y6.version,rendererPackageName:y6.rendererPackageName,rendererConfig:y6.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G1.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xi(e),e===null?null:e.stateNode},findFiberByHostInstance:y6.findFiberByHostInstance||dV,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var m8=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!m8.isDisabled&&m8.supportsFiber)try{_e=m8.inject(pV),L1=m8}catch{}}q2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mV;q2.createPortal=function(e,c){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(c))throw Error(w(200));return uV(e,c,null,a)};q2.createRoot=function(e,c){if(!Ra(e))throw Error(w(299));var a=!1,r="",n=to;return c!=null&&(c.unstable_strictMode===!0&&(a=!0),c.identifierPrefix!==void 0&&(r=c.identifierPrefix),c.onRecoverableError!==void 0&&(n=c.onRecoverableError)),c=Ta(e,1,!1,null,null,a,!1,r,n),e[O1]=c.current,c0(e.nodeType===8?e.parentNode:e),new _a(c)};q2.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var c=e._reactInternals;if(c===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=xi(c),e=e===null?null:e.stateNode,e};q2.flushSync=function(e){return e4(e)};q2.hydrate=function(e,c,a){if(!Ke(c))throw Error(w(200));return Ye(null,e,c,!0,a)};q2.hydrateRoot=function(e,c,a){if(!Ra(e))throw Error(w(405));var r=a!=null&&a.hydratedSources||null,n=!1,t="",i=to;if(a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),c=no(c,null,e,1,a??null,n,!1,t,i),e[O1]=c.current,c0(e),r)for(e=0;e<r.length;e++)a=r[e],n=a._getVersion,n=n(a._source),c.mutableSourceEagerHydrationData==null?c.mutableSourceEagerHydrationData=[a,n]:c.mutableSourceEagerHydrationData.push(a,n);return new qe(c)};q2.render=function(e,c,a){if(!Ke(c))throw Error(w(200));return Ye(null,e,c,!1,a)};q2.unmountComponentAtNode=function(e){if(!Ke(e))throw Error(w(40));return e._reactRootContainer?(e4(function(){Ye(null,null,e,!1,function(){e._reactRootContainer=null,e[O1]=null})}),!0):!1};q2.unstable_batchedUpdates=ka;q2.unstable_renderSubtreeIntoContainer=function(e,c,a,r){if(!Ke(a))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ye(e,c,a,!1,r)};q2.version="18.2.0-next-9e3b772b8-20220608";function io(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(io)}catch(e){console.error(e)}}io(),ni.exports=q2;var B3=ni.exports,kt=B3;gc.createRoot=kt.createRoot,gc.hydrateRoot=kt.hydrateRoot;function bt(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);c&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?bt(Object(a),!0).forEach(function(r){u2(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):bt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},pe(e)}function vV(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function At(e,c){for(var a=0;a<c.length;a++){var r=c[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zV(e,c,a){return c&&At(e.prototype,c),a&&At(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function u2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Ia(e,c){return gV(e)||MV(e,c)||so(e,c)||LV()}function k0(e){return HV(e)||VV(e)||so(e)||CV()}function HV(e){if(Array.isArray(e))return d7(e)}function gV(e){if(Array.isArray(e))return e}function VV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function MV(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],n=!0,t=!1,i,s;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(r.push(i.value),!(c&&r.length===c));n=!0);}catch(o){t=!0,s=o}finally{try{!n&&a.return!=null&&a.return()}finally{if(t)throw s}}return r}}function so(e,c){if(e){if(typeof e=="string")return d7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d7(e,c)}}function d7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,r=new Array(c);a<c;a++)r[a]=e[a];return r}function CV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Et=function(){},Da={},oo={},lo=null,fo={mark:Et,measure:Et};try{typeof window<"u"&&(Da=window),typeof document<"u"&&(oo=document),typeof MutationObserver<"u"&&(lo=MutationObserver),typeof performance<"u"&&(fo=performance)}catch{}var yV=Da.navigator||{},Tt=yV.userAgent,Pt=Tt===void 0?"":Tt,N3=Da,Q=oo,_t=lo,p8=fo;N3.document;var q1=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",uo=~Pt.indexOf("MSIE")||~Pt.indexOf("Trident/"),v8,z8,H8,g8,V8,U1="___FONT_AWESOME___",h7=16,ho="fa",mo="svg-inline--fa",c4="data-fa-i2svg",m7="data-fa-pseudo-element",wV="data-fa-pseudo-element-pending",Oa="data-prefix",Fa="data-icon",Rt="fontawesome-i2svg",xV="async",SV=["HTML","HEAD","STYLE","SCRIPT"],po=function(){try{return!0}catch{return!1}}(),Y="classic",r2="sharp",Ba=[Y,r2];function b0(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[Y]}})}var f0=b0((v8={},u2(v8,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),u2(v8,r2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),v8)),u0=b0((z8={},u2(z8,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u2(z8,r2,{solid:"fass",regular:"fasr",light:"fasl"}),z8)),d0=b0((H8={},u2(H8,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u2(H8,r2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),H8)),NV=b0((g8={},u2(g8,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u2(g8,r2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),g8)),kV=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vo="fa-layers-text",bV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,AV=b0((V8={},u2(V8,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u2(V8,r2,{900:"fass",400:"fasr",300:"fasl"}),V8)),zo=[1,2,3,4,5,6,7,8,9,10],EV=zo.concat([11,12,13,14,15,16,17,18,19,20]),TV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},h0=new Set;Object.keys(u0[Y]).map(h0.add.bind(h0));Object.keys(u0[r2]).map(h0.add.bind(h0));var PV=[].concat(Ba,k0(h0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$3.GROUP,$3.SWAP_OPACITY,$3.PRIMARY,$3.SECONDARY]).concat(zo.map(function(e){return"".concat(e,"x")})).concat(EV.map(function(e){return"w-".concat(e)})),B6=N3.FontAwesomeConfig||{};function _V(e){var c=Q.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function RV(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var IV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];IV.forEach(function(e){var c=Ia(e,2),a=c[0],r=c[1],n=RV(_V(a));n!=null&&(B6[r]=n)})}var Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:ho,replacementClass:mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B6.familyPrefix&&(B6.cssPrefix=B6.familyPrefix);var e6=N(N({},Ho),B6);e6.autoReplaceSvg||(e6.observeMutations=!1);var b={};Object.keys(Ho).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(a){e6[e]=a,U6.forEach(function(r){return r(b)})},get:function(){return e6[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(c){e6.cssPrefix=c,U6.forEach(function(a){return a(b)})},get:function(){return e6.cssPrefix}});N3.FontAwesomeConfig=b;var U6=[];function DV(e){return U6.push(e),function(){U6.splice(U6.indexOf(e),1)}}var e3=h7,C1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function OV(e){if(!(!e||!q1)){var c=Q.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=Q.head.childNodes,r=null,n=a.length-1;n>-1;n--){var t=a[n],i=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=t)}return Q.head.insertBefore(c,r),e}}var FV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m0(){for(var e=12,c="";e-- >0;)c+=FV[Math.random()*62|0];return c}function t6(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function Ua(e){return e.classList?t6(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function go(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BV(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(go(e[a]),'" ')},"").trim()}function Xe(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Wa(e){return e.size!==C1.size||e.x!==C1.x||e.y!==C1.y||e.rotate!==C1.rotate||e.flipX||e.flipY}function UV(e){var c=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},t="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),s="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(t," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:o,path:l}}function WV(e){var c=e.transform,a=e.width,r=a===void 0?h7:a,n=e.height,t=n===void 0?h7:n,i=e.startCentered,s=i===void 0?!1:i,o="";return s&&uo?o+="translate(".concat(c.x/e3-r/2,"em, ").concat(c.y/e3-t/2,"em) "):s?o+="translate(calc(-50% + ".concat(c.x/e3,"em), calc(-50% + ").concat(c.y/e3,"em)) "):o+="translate(".concat(c.x/e3,"em, ").concat(c.y/e3,"em) "),o+="scale(".concat(c.size/e3*(c.flipX?-1:1),", ").concat(c.size/e3*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var jV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vo(){var e=ho,c=mo,a=b.cssPrefix,r=b.replacementClass,n=jV;if(a!==e||r!==c){var t=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(c),"g");n=n.replace(t,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var It=!1;function Z5(){b.autoAddCss&&!It&&(OV(Vo()),It=!0)}var $V={mixout:function(){return{dom:{css:Vo,insertCss:Z5}}},hooks:function(){return{beforeDOMElementCreation:function(){Z5()},beforeI2svg:function(){Z5()}}}},W1=N3||{};W1[U1]||(W1[U1]={});W1[U1].styles||(W1[U1].styles={});W1[U1].hooks||(W1[U1].hooks={});W1[U1].shims||(W1[U1].shims=[]);var f1=W1[U1],Mo=[],GV=function e(){Q.removeEventListener("DOMContentLoaded",e),ve=1,Mo.map(function(c){return c()})},ve=!1;q1&&(ve=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),ve||Q.addEventListener("DOMContentLoaded",GV));function qV(e){q1&&(ve?setTimeout(e,0):Mo.push(e))}function A0(e){var c=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,t=n===void 0?[]:n;return typeof e=="string"?go(e):"<".concat(c," ").concat(BV(r),">").concat(t.map(A0).join(""),"</").concat(c,">")}function Dt(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var KV=function(c,a){return function(r,n,t,i){return c.call(a,r,n,t,i)}},ec=function(c,a,r,n){var t=Object.keys(c),i=t.length,s=n!==void 0?KV(a,n):a,o,l,f;for(r===void 0?(o=1,f=c[t[0]]):(o=0,f=r);o<i;o++)l=t[o],f=s(f,c[l],l,c);return f};function YV(e){for(var c=[],a=0,r=e.length;a<r;){var n=e.charCodeAt(a++);if(n>=55296&&n<=56319&&a<r){var t=e.charCodeAt(a++);(t&64512)==56320?c.push(((n&1023)<<10)+(t&1023)+65536):(c.push(n),a--)}else c.push(n)}return c}function p7(e){var c=YV(e);return c.length===1?c[0].toString(16):null}function XV(e,c){var a=e.length,r=e.charCodeAt(c),n;return r>=55296&&r<=56319&&a>c+1&&(n=e.charCodeAt(c+1),n>=56320&&n<=57343)?(r-55296)*1024+n-56320+65536:r}function Ot(e){return Object.keys(e).reduce(function(c,a){var r=e[a],n=!!r.icon;return n?c[r.iconName]=r.icon:c[a]=r,c},{})}function v7(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,t=Ot(c);typeof f1.hooks.addPack=="function"&&!n?f1.hooks.addPack(e,Ot(c)):f1.styles[e]=N(N({},f1.styles[e]||{}),t),e==="fas"&&v7("fa",c)}var M8,C8,L8,E4=f1.styles,QV=f1.shims,JV=(M8={},u2(M8,Y,Object.values(d0[Y])),u2(M8,r2,Object.values(d0[r2])),M8),ja=null,Co={},Lo={},yo={},wo={},xo={},ZV=(C8={},u2(C8,Y,Object.keys(f0[Y])),u2(C8,r2,Object.keys(f0[r2])),C8);function eM(e){return~PV.indexOf(e)}function cM(e,c){var a=c.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!eM(n)?n:null}var So=function(){var c=function(t){return ec(E4,function(i,s,o){return i[o]=ec(s,t,{}),i},{})};Co=c(function(n,t,i){if(t[3]&&(n[t[3]]=i),t[2]){var s=t[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){n[o.toString(16)]=i})}return n}),Lo=c(function(n,t,i){if(n[i]=i,t[2]){var s=t[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){n[o]=i})}return n}),xo=c(function(n,t,i){var s=t[2];return n[i]=i,s.forEach(function(o){n[o]=i}),n});var a="far"in E4||b.autoFetchSvg,r=ec(QV,function(n,t){var i=t[0],s=t[1],o=t[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});yo=r.names,wo=r.unicodes,ja=Qe(b.styleDefault,{family:b.familyDefault})};DV(function(e){ja=Qe(e.styleDefault,{family:b.familyDefault})});So();function $a(e,c){return(Co[e]||{})[c]}function aM(e,c){return(Lo[e]||{})[c]}function G3(e,c){return(xo[e]||{})[c]}function No(e){return yo[e]||{prefix:null,iconName:null}}function rM(e){var c=wo[e],a=$a("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function k3(){return ja}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function Qe(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,r=a===void 0?Y:a,n=f0[r][e],t=u0[r][e]||u0[r][n],i=e in f1.styles?e:null;return t||i||null}var Ft=(L8={},u2(L8,Y,Object.keys(d0[Y])),u2(L8,r2,Object.keys(d0[r2])),L8);function Je(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,n=r===void 0?!1:r,t=(c={},u2(c,Y,"".concat(b.cssPrefix,"-").concat(Y)),u2(c,r2,"".concat(b.cssPrefix,"-").concat(r2)),c),i=null,s=Y;(e.includes(t[Y])||e.some(function(l){return Ft[Y].includes(l)}))&&(s=Y),(e.includes(t[r2])||e.some(function(l){return Ft[r2].includes(l)}))&&(s=r2);var o=e.reduce(function(l,f){var u=cM(b.cssPrefix,f);if(E4[f]?(f=JV[s].includes(f)?NV[s][f]:f,i=f,l.prefix=f):ZV[s].indexOf(f)>-1?(i=f,l.prefix=Qe(f,{family:s})):u?l.iconName=u:f!==b.replacementClass&&f!==t[Y]&&f!==t[r2]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var h=i==="fa"?No(l.iconName):{},v=G3(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||v||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!E4.far&&E4.fas&&!b.autoFetchSvg&&(l.prefix="fas")}return l},Ga());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===r2&&(E4.fass||b.autoFetchSvg)&&(o.prefix="fass",o.iconName=G3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=k3()||"fas"),o}var nM=function(){function e(){vV(this,e),this.definitions={}}return zV(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=N(N({},a.definitions[s]||{}),i[s]),v7(s,i[s]);var o=d0[Y][s];o&&v7(o,i[s]),So()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(t){var i=n[t],s=i.prefix,o=i.iconName,l=i.icon,f=l[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(a[s][u]=l)}),a[s][o]=l}),a}}]),e}(),Bt=[],T4={},U4={},tM=Object.keys(U4);function iM(e,c){var a=c.mixoutsTo;return Bt=e,T4={},Object.keys(U4).forEach(function(r){tM.indexOf(r)===-1&&delete U4[r]}),Bt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),pe(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=n[i][s]})}),r.hooks){var t=r.hooks();Object.keys(t).forEach(function(i){T4[i]||(T4[i]=[]),T4[i].push(t[i])})}r.provides&&r.provides(U4)}),a}function z7(e,c){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var t=T4[e]||[];return t.forEach(function(i){c=i.apply(null,[c].concat(r))}),c}function a4(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];var n=T4[e]||[];n.forEach(function(t){t.apply(null,a)})}function j1(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return U4[e]?U4[e].apply(null,c):void 0}function H7(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||k3();if(c)return c=G3(a,c)||c,Dt(ko.definitions,a,c)||Dt(f1.styles,a,c)}var ko=new nM,sM=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,a4("noAuto")},oM={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q1?(a4("beforeI2svg",c),j1("pseudoElements2svg",c),j1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,qV(function(){fM({autoReplaceSvgRoot:a}),a4("watch",c)})}},lM={icon:function(c){if(c===null)return null;if(pe(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:G3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],r=Qe(c[0]);return{prefix:r,iconName:G3(r,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(b.cssPrefix,"-"))>-1||c.match(kV))){var n=Je(c.split(" "),{skipLookups:!0});return{prefix:n.prefix||k3(),iconName:G3(n.prefix,n.iconName)||n.iconName}}if(typeof c=="string"){var t=k3();return{prefix:t,iconName:G3(t,c)||c}}}},Y2={noAuto:sM,config:b,dom:oM,parse:lM,library:ko,findIconDefinition:H7,toHtml:A0},fM=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,r=a===void 0?Q:a;(Object.keys(f1.styles).length>0||b.autoFetchSvg)&&q1&&b.autoReplaceSvg&&Y2.dom.i2svg({node:r})};function Ze(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return A0(r)})}}),Object.defineProperty(e,"node",{get:function(){if(q1){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function uM(e){var c=e.children,a=e.main,r=e.mask,n=e.attributes,t=e.styles,i=e.transform;if(Wa(i)&&a.found&&!r.found){var s=a.width,o=a.height,l={x:s/o/2,y:.5};n.style=Xe(N(N({},t),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function dM(e){var c=e.prefix,a=e.iconName,r=e.children,n=e.attributes,t=e.symbol,i=t===!0?"".concat(c,"-").concat(b.cssPrefix,"-").concat(a):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},n),{},{id:i}),children:r}]}]}function qa(e){var c=e.icons,a=c.main,r=c.mask,n=e.prefix,t=e.iconName,i=e.transform,s=e.symbol,o=e.title,l=e.maskId,f=e.titleId,u=e.extra,h=e.watchable,v=h===void 0?!1:h,V=r.found?r:a,H=V.width,C=V.height,m=n==="fak",d=[b.replacementClass,t?"".concat(b.cssPrefix,"-").concat(t):""].filter(function(E){return u.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(u.classes).join(" "),p={children:[],attributes:N(N({},u.attributes),{},{"data-prefix":n,"data-icon":t,class:d,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(C)})},g=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(H/C*16*.0625,"em")}:{};v&&(p.attributes[c4]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||m0())},children:[o]}),delete p.attributes.title);var M=N(N({},p),{},{prefix:n,iconName:t,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:N(N({},g),u.styles)}),y=r.found&&a.found?j1("generateAbstractMask",M)||{children:[],attributes:{}}:j1("generateAbstractIcon",M)||{children:[],attributes:{}},L=y.children,x=y.attributes;return M.children=L,M.attributes=x,s?dM(M):uM(M)}function Ut(e){var c=e.content,a=e.width,r=e.height,n=e.transform,t=e.title,i=e.extra,s=e.watchable,o=s===void 0?!1:s,l=N(N(N({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")});o&&(l[c4]="");var f=N({},i.styles);Wa(n)&&(f.transform=WV({transform:n,startCentered:!0,width:a,height:r}),f["-webkit-transform"]=f.transform);var u=Xe(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[c]}),t&&h.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),h}function hM(e){var c=e.content,a=e.title,r=e.extra,n=N(N(N({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),t=Xe(r.styles);t.length>0&&(n.style=t);var i=[];return i.push({tag:"span",attributes:n,children:[c]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var cc=f1.styles;function g7(e){var c=e[0],a=e[1],r=e.slice(4),n=Ia(r,1),t=n[0],i=null;return Array.isArray(t)?i={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat($3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat($3.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat($3.PRIMARY),fill:"currentColor",d:t[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:c,height:a,icon:i}}var mM={found:!1,width:512,height:512};function pM(e,c){!po&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function V7(e,c){var a=c;return c==="fa"&&b.styleDefault!==null&&(c=k3()),new Promise(function(r,n){if(j1("missingIconAbstract"),a==="fa"){var t=No(e)||{};e=t.iconName||e,c=t.prefix||c}if(e&&c&&cc[c]&&cc[c][e]){var i=cc[c][e];return r(g7(i))}pM(e,c),r(N(N({},mM),{},{icon:b.showMissingIcons&&e?j1("missingIconAbstract")||{}:{}}))})}var Wt=function(){},M7=b.measurePerformance&&p8&&p8.mark&&p8.measure?p8:{mark:Wt,measure:Wt},k6='FA "6.4.2"',vM=function(c){return M7.mark("".concat(k6," ").concat(c," begins")),function(){return bo(c)}},bo=function(c){M7.mark("".concat(k6," ").concat(c," ends")),M7.measure("".concat(k6," ").concat(c),"".concat(k6," ").concat(c," begins"),"".concat(k6," ").concat(c," ends"))},Ka={begin:vM,end:bo},D8=function(){};function jt(e){var c=e.getAttribute?e.getAttribute(c4):null;return typeof c=="string"}function zM(e){var c=e.getAttribute?e.getAttribute(Oa):null,a=e.getAttribute?e.getAttribute(Fa):null;return c&&a}function HM(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function gM(){if(b.autoReplaceSvg===!0)return O8.replace;var e=O8[b.autoReplaceSvg];return e||O8.replace}function VM(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function MM(e){return Q.createElement(e)}function Ao(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,r=a===void 0?e.tag==="svg"?VM:MM:a;if(typeof e=="string")return Q.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var t=e.children||[];return t.forEach(function(i){n.appendChild(Ao(i,{ceFn:r}))}),n}function CM(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var O8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(n){a.parentNode.insertBefore(Ao(n),a)}),a.getAttribute(c4)===null&&b.keepOriginalSource){var r=Q.createComment(CM(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(c){var a=c[0],r=c[1];if(~Ua(a).indexOf(b.replacementClass))return O8.replace(c);var n=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var t=r[0].attributes.class.split(" ").reduce(function(s,o){return o===b.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});r[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",t.toNode.join(" "))}var i=r.map(function(s){return A0(s)}).join(`
`);a.setAttribute(c4,""),a.innerHTML=i}};function $t(e){e()}function Eo(e,c){var a=typeof c=="function"?c:D8;if(e.length===0)a();else{var r=$t;b.mutateApproach===xV&&(r=N3.requestAnimationFrame||$t),r(function(){var n=gM(),t=Ka.begin("mutate");e.map(n),t(),a()})}}var Ya=!1;function To(){Ya=!0}function C7(){Ya=!1}var ze=null;function Gt(e){if(_t&&b.observeMutations){var c=e.treeCallback,a=c===void 0?D8:c,r=e.nodeCallback,n=r===void 0?D8:r,t=e.pseudoElementsCallback,i=t===void 0?D8:t,s=e.observeMutationsRoot,o=s===void 0?Q:s;ze=new _t(function(l){if(!Ya){var f=k3();t6(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!jt(u.addedNodes[0])&&(b.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&b.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&jt(u.target)&&~TV.indexOf(u.attributeName))if(u.attributeName==="class"&&zM(u.target)){var h=Je(Ua(u.target)),v=h.prefix,V=h.iconName;u.target.setAttribute(Oa,v||f),V&&u.target.setAttribute(Fa,V)}else HM(u.target)&&n(u.target)})}}),q1&&ze.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function LM(){ze&&ze.disconnect()}function yM(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(r,n){var t=n.split(":"),i=t[0],s=t.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function wM(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Je(Ua(e));return n.prefix||(n.prefix=k3()),c&&a&&(n.prefix=c,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=aM(n.prefix,e.innerText)||$a(n.prefix,p7(e.innerText))),!n.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function xM(e){var c=t6(e.attributes).reduce(function(n,t){return n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n},{}),a=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(a?c["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||m0()):(c["aria-hidden"]="true",c.focusable="false")),c}function SM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=wM(e),r=a.iconName,n=a.prefix,t=a.rest,i=xM(e),s=z7("parseNodeAttributes",{},e),o=c.styleParser?yM(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:C1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:o,attributes:i}},s)}var NM=f1.styles;function Po(e){var c=b.autoReplaceSvg==="nest"?qt(e,{styleParser:!1}):qt(e);return~c.extra.classes.indexOf(vo)?j1("generateLayersText",e,c):j1("generateSvgReplacementMutation",e,c)}var b3=new Set;Ba.map(function(e){b3.add("fa-".concat(e))});Object.keys(f0[Y]).map(b3.add.bind(b3));Object.keys(f0[r2]).map(b3.add.bind(b3));b3=k0(b3);function Kt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q1)return Promise.resolve();var a=Q.documentElement.classList,r=function(u){return a.add("".concat(Rt,"-").concat(u))},n=function(u){return a.remove("".concat(Rt,"-").concat(u))},t=b.autoFetchSvg?b3:Ba.map(function(f){return"fa-".concat(f)}).concat(Object.keys(NM));t.includes("fa")||t.push("fa");var i=[".".concat(vo,":not([").concat(c4,"])")].concat(t.map(function(f){return".".concat(f,":not([").concat(c4,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=t6(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var o=Ka.begin("onTree"),l=s.reduce(function(f,u){try{var h=Po(u);h&&f.push(h)}catch(v){po||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){Eo(h,function(){r("active"),r("complete"),n("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(h){o(),u(h)})})}function kM(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Po(e).then(function(a){a&&Eo([a],c)})}function bM(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(c||{}).icon?c:H7(c||{}),n=a.mask;return n&&(n=(n||{}).icon?n:H7(n||{})),e(r,N(N({},a),{},{mask:n}))}}var AM=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?C1:r,t=a.symbol,i=t===void 0?!1:t,s=a.mask,o=s===void 0?null:s,l=a.maskId,f=l===void 0?null:l,u=a.title,h=u===void 0?null:u,v=a.titleId,V=v===void 0?null:v,H=a.classes,C=H===void 0?[]:H,m=a.attributes,d=m===void 0?{}:m,p=a.styles,g=p===void 0?{}:p;if(c){var M=c.prefix,y=c.iconName,L=c.icon;return Ze(N({type:"icon"},c),function(){return a4("beforeDOMElementCreation",{iconDefinition:c,params:a}),b.autoA11y&&(h?d["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(V||m0()):(d["aria-hidden"]="true",d.focusable="false")),qa({icons:{main:g7(L),mask:o?g7(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:y,transform:N(N({},C1),n),symbol:i,title:h,maskId:f,titleId:V,extra:{attributes:d,styles:g,classes:C}})})}},EM={mixout:function(){return{icon:bM(AM)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Kt,a.nodeCallback=kM,a}}},provides:function(c){c.i2svg=function(a){var r=a.node,n=r===void 0?Q:r,t=a.callback,i=t===void 0?function(){}:t;return Kt(n,i)},c.generateSvgReplacementMutation=function(a,r){var n=r.iconName,t=r.title,i=r.titleId,s=r.prefix,o=r.transform,l=r.symbol,f=r.mask,u=r.maskId,h=r.extra;return new Promise(function(v,V){Promise.all([V7(n,s),f.iconName?V7(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var C=Ia(H,2),m=C[0],d=C[1];v([a,qa({icons:{main:m,mask:d},prefix:s,iconName:n,transform:o,symbol:l,maskId:u,title:t,titleId:i,extra:h,watchable:!0})])}).catch(V)})},c.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,t=a.main,i=a.transform,s=a.styles,o=Xe(s);o.length>0&&(n.style=o);var l;return Wa(i)&&(l=j1("generateAbstractTransformGrouping",{main:t,transform:i,containerWidth:t.width,iconWidth:t.width})),r.push(l||t.icon),{children:r,attributes:n}}}},TM={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,t=n===void 0?[]:n;return Ze({type:"layer"},function(){a4("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(o){i=i.concat(o.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(k0(t)).join(" ")},children:i}]})}}}},PM={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.title,t=n===void 0?null:n,i=r.classes,s=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,u=f===void 0?{}:f;return Ze({type:"counter",content:a},function(){return a4("beforeDOMElementCreation",{content:a,params:r}),hM({content:a.toString(),title:t,extra:{attributes:l,styles:u,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(k0(s))}})})}}}},_M={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,t=n===void 0?C1:n,i=r.title,s=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,u=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return Ze({type:"text",content:a},function(){return a4("beforeDOMElementCreation",{content:a,params:r}),Ut({content:a,transform:N(N({},C1),t),title:s,extra:{attributes:u,styles:v,classes:["".concat(b.cssPrefix,"-layers-text")].concat(k0(l))}})})}}},provides:function(c){c.generateLayersText=function(a,r){var n=r.title,t=r.transform,i=r.extra,s=null,o=null;if(uo){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/l,o=f.height/l}return b.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Ut({content:a.innerHTML,width:s,height:o,transform:t,title:n,extra:i,watchable:!0})])}}},RM=new RegExp('"',"ug"),Yt=[1105920,1112319];function IM(e){var c=e.replace(RM,""),a=XV(c,0),r=a>=Yt[0]&&a<=Yt[1],n=c.length===2?c[0]===c[1]:!1;return{value:p7(n?c[0]:c),isSecondary:r||n}}function Xt(e,c){var a="".concat(wV).concat(c.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var t=t6(e.children),i=t.filter(function(L){return L.getAttribute(m7)===c})[0],s=N3.getComputedStyle(e,c),o=s.getPropertyValue("font-family").match(bV),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!o)return e.removeChild(i),r();if(o&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?r2:Y,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?u0[h][o[2].toLowerCase()]:AV[h][l],V=IM(u),H=V.value,C=V.isSecondary,m=o[0].startsWith("FontAwesome"),d=$a(v,H),p=d;if(m){var g=rM(H);g.iconName&&g.prefix&&(d=g.iconName,v=g.prefix)}if(d&&!C&&(!i||i.getAttribute(Oa)!==v||i.getAttribute(Fa)!==p)){e.setAttribute(a,p),i&&e.removeChild(i);var M=SM(),y=M.extra;y.attributes[m7]=c,V7(d,v).then(function(L){var x=qa(N(N({},M),{},{icons:{main:L,mask:Ga()},prefix:v,iconName:p,extra:y,watchable:!0})),E=Q.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=x.map(function(A){return A0(A)}).join(`
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p0(){return p0=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p0.apply(this,arguments)}var h3;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(h3||(h3={}));const c9="popstate";function gY(e){e===void 0&&(e={});function c(n,t){let{pathname:i="/",search:s="",hash:o=""}=o4(n.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),y7("",{pathname:i,search:s,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function a(n,t){let i=n.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let o=n.location.href,l=o.indexOf("#");s=l===-1?o:o.slice(0,l)}return s+"#"+(typeof t=="string"?t:He(t))}function r(n,t){v5(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}return MY(c,a,r,e)}function s2(e,c){if(e===!1||e===null||typeof e>"u")throw new Error(c)}function v5(e,c){if(!e){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function VY(){return Math.random().toString(36).substr(2,8)}function a9(e,c){return{usr:e.state,key:e.key,idx:c}}function y7(e,c,a,r){return a===void 0&&(a=null),p0({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof c=="string"?o4(c):c,{state:a,key:c&&c.key||r||VY()})}function He(e){let{pathname:c="/",search:a="",hash:r=""}=e;return a&&a!=="?"&&(c+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(c+=r.charAt(0)==="#"?r:"#"+r),c}function o4(e){let c={};if(e){let a=e.indexOf("#");a>=0&&(c.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(c.search=e.substr(r),e=e.substr(0,r)),e&&(c.pathname=e)}return c}function MY(e,c,a,r){r===void 0&&(r={});let{window:n=document.defaultView,v5Compat:t=!1}=r,i=n.history,s=h3.Pop,o=null,l=f();l==null&&(l=0,i.replaceState(p0({},i.state,{idx:l}),""));function f(){return(i.state||{idx:null}).idx}function u(){s=h3.Pop;let C=f(),m=C==null?null:C-l;l=C,o&&o({action:s,location:H.location,delta:m})}function h(C,m){s=h3.Push;let d=y7(H.location,C,m);a&&a(d,C),l=f()+1;let p=a9(d,l),g=H.createHref(d);try{i.pushState(p,"",g)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;n.location.assign(g)}t&&o&&o({action:s,location:H.location,delta:1})}function v(C,m){s=h3.Replace;let d=y7(H.location,C,m);a&&a(d,C),l=f();let p=a9(d,l),g=H.createHref(d);i.replaceState(p,"",g),t&&o&&o({action:s,location:H.location,delta:0})}function V(C){let m=n.location.origin!=="null"?n.location.origin:n.location.href,d=typeof C=="string"?C:He(C);return s2(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let H={get action(){return s},get location(){return e(n,i)},listen(C){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(c9,u),o=C,()=>{n.removeEventListener(c9,u),o=null}},createHref(C){return c(n,C)},createURL:V,encodeLocation(C){let m=V(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(C){return i.go(C)}};return H}var r9;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(r9||(r9={}));function CY(e,c,a){a===void 0&&(a="/");let r=typeof c=="string"?o4(c):c,n=Ur(r.pathname||"/",a);if(n==null)return null;let t=uv(e);LY(t);let i=null;for(let s=0;i==null&&s<t.length;++s)i=EY(t[s],_Y(n));return i}function uv(e,c,a,r){c===void 0&&(c=[]),a===void 0&&(a=[]),r===void 0&&(r="");let n=(t,i,s)=>{let o={relativePath:s===void 0?t.path||"":s,caseSensitive:t.caseSensitive===!0,childrenIndex:i,route:t};o.relativePath.startsWith("/")&&(s2(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=L3([r,o.relativePath]),f=a.concat(o);t.children&&t.children.length>0&&(s2(t.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),uv(t.children,c,f,l)),!(t.path==null&&!t.index)&&c.push({path:l,score:bY(l,t.index),routesMeta:f})};return e.forEach((t,i)=>{var s;if(t.path===""||!((s=t.path)!=null&&s.includes("?")))n(t,i);else for(let o of dv(t.path))n(t,i,o)}),c}function dv(e){let c=e.split("/");if(c.length===0)return[];let[a,...r]=c,n=a.endsWith("?"),t=a.replace(/\?$/,"");if(r.length===0)return n?[t,""]:[t];let i=dv(r.join("/")),s=[];return s.push(...i.map(o=>o===""?t:[t,o].join("/"))),n&&s.push(...i),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function LY(e){e.sort((c,a)=>c.score!==a.score?a.score-c.score:AY(c.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}const yY=/^:\w+$/,wY=3,xY=2,SY=1,NY=10,kY=-2,n9=e=>e==="*";function bY(e,c){let a=e.split("/"),r=a.length;return a.some(n9)&&(r+=kY),c&&(r+=xY),a.filter(n=>!n9(n)).reduce((n,t)=>n+(yY.test(t)?wY:t===""?SY:NY),r)}function AY(e,c){return e.length===c.length&&e.slice(0,-1).every((r,n)=>r===c[n])?e[e.length-1]-c[c.length-1]:0}function EY(e,c){let{routesMeta:a}=e,r={},n="/",t=[];for(let i=0;i<a.length;++i){let s=a[i],o=i===a.length-1,l=n==="/"?c:c.slice(n.length)||"/",f=TY({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},l);if(!f)return null;Object.assign(r,f.params);let u=s.route;t.push({params:r,pathname:L3([n,f.pathname]),pathnameBase:OY(L3([n,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(n=L3([n,f.pathnameBase]))}return t}function TY(e,c){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=PY(e.path,e.caseSensitive,e.end),n=c.match(a);if(!n)return null;let t=n[0],i=t.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:r.reduce((l,f,u)=>{if(f==="*"){let h=s[u]||"";i=t.slice(0,t.length-h.length).replace(/(.)\/+$/,"$1")}return l[f]=RY(s[u]||"",f),l},{}),pathname:t,pathnameBase:i,pattern:e}}function PY(e,c,a){c===void 0&&(c=!1),a===void 0&&(a=!0),v5(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,c?void 0:"i"),r]}function _Y(e){try{return decodeURI(e)}catch(c){return v5(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),e}}function RY(e,c){try{return decodeURIComponent(e)}catch(a){return v5(!1,'The value for the URL param "'+c+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),e}}function Ur(e,c){if(c==="/")return e;if(!e.toLowerCase().startsWith(c.toLowerCase()))return null;let a=c.endsWith("/")?c.length-1:c.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function IY(e,c){c===void 0&&(c="/");let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?o4(e):e;return{pathname:a?a.startsWith("/")?a:DY(a,c):c,search:FY(r),hash:BY(n)}}function DY(e,c){let a=c.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function rc(e,c,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hv(e){return e.filter((c,a)=>a===0||c.route.path&&c.route.path.length>0)}function mv(e,c,a,r){r===void 0&&(r=!1);let n;typeof e=="string"?n=o4(e):(n=p0({},e),s2(!n.pathname||!n.pathname.includes("?"),rc("?","pathname","search",n)),s2(!n.pathname||!n.pathname.includes("#"),rc("#","pathname","hash",n)),s2(!n.search||!n.search.includes("#"),rc("#","search","hash",n)));let t=e===""||n.pathname==="",i=t?"/":n.pathname,s;if(r||i==null)s=a;else{let u=c.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),u-=1;n.pathname=h.join("/")}s=u>=0?c[u]:"/"}let o=IY(n,s),l=i&&i!=="/"&&i.endsWith("/"),f=(t||i===".")&&a.endsWith("/");return!o.pathname.endsWith("/")&&(l||f)&&(o.pathname+="/"),o}const L3=e=>e.join("/").replace(/\/\/+/g,"/"),OY=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),FY=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,BY=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function UY(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pv=["post","put","patch","delete"];new Set(pv);const WY=["get",...pv];new Set(WY);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ge.apply(this,arguments)}const Wr=z.createContext(null),jY=z.createContext(null),i6=z.createContext(null),z5=z.createContext(null),l4=z.createContext({outlet:null,matches:[],isDataRoute:!1}),vv=z.createContext(null);function $Y(e,c){let{relative:a}=c===void 0?{}:c;I0()||s2(!1);let{basename:r,navigator:n}=z.useContext(i6),{hash:t,pathname:i,search:s}=Hv(e,{relative:a}),o=i;return r!=="/"&&(o=i==="/"?r:L3([r,i])),n.createHref({pathname:o,search:s,hash:t})}function I0(){return z.useContext(z5)!=null}function H5(){return I0()||s2(!1),z.useContext(z5).location}function zv(e){z.useContext(i6).static||z.useLayoutEffect(e)}function jr(){let{isDataRoute:e}=z.useContext(l4);return e?nX():GY()}function GY(){I0()||s2(!1);let e=z.useContext(Wr),{basename:c,navigator:a}=z.useContext(i6),{matches:r}=z.useContext(l4),{pathname:n}=H5(),t=JSON.stringify(hv(r).map(o=>o.pathnameBase)),i=z.useRef(!1);return zv(()=>{i.current=!0}),z.useCallback(function(o,l){if(l===void 0&&(l={}),!i.current)return;if(typeof o=="number"){a.go(o);return}let f=mv(o,JSON.parse(t),n,l.relative==="path");e==null&&c!=="/"&&(f.pathname=f.pathname==="/"?c:L3([c,f.pathname])),(l.replace?a.replace:a.push)(f,l.state,l)},[c,a,t,n,e])}function Hv(e,c){let{relative:a}=c===void 0?{}:c,{matches:r}=z.useContext(l4),{pathname:n}=H5(),t=JSON.stringify(hv(r).map(i=>i.pathnameBase));return z.useMemo(()=>mv(e,JSON.parse(t),n,a==="path"),[e,t,n,a])}function qY(e,c){return KY(e,c)}function KY(e,c,a){I0()||s2(!1);let{navigator:r}=z.useContext(i6),{matches:n}=z.useContext(l4),t=n[n.length-1],i=t?t.params:{};t&&t.pathname;let s=t?t.pathnameBase:"/";t&&t.route;let o=H5(),l;if(c){var f;let H=typeof c=="string"?o4(c):c;s==="/"||(f=H.pathname)!=null&&f.startsWith(s)||s2(!1),l=H}else l=o;let u=l.pathname||"/",h=s==="/"?u:u.slice(s.length)||"/",v=CY(e,{pathname:h}),V=ZY(v&&v.map(H=>Object.assign({},H,{params:Object.assign({},i,H.params),pathname:L3([s,r.encodeLocation?r.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?s:L3([s,r.encodeLocation?r.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),n,a);return c&&V?z.createElement(z5.Provider,{value:{location:ge({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:h3.Pop}},V):V}function YY(){let e=rX(),c=UY(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},t=null;return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},c),a?z.createElement("pre",{style:n},a):null,t)}const XY=z.createElement(YY,null);class QY extends z.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,a){return a.location!==c.location||a.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error||a.error,location:a.location,revalidation:c.revalidation||a.revalidation}}componentDidCatch(c,a){console.error("React Router caught the following error during render",c,a)}render(){return this.state.error?z.createElement(l4.Provider,{value:this.props.routeContext},z.createElement(vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JY(e){let{routeContext:c,match:a,children:r}=e,n=z.useContext(Wr);return n&&n.static&&n.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=a.route.id),z.createElement(l4.Provider,{value:c},r)}function ZY(e,c,a){var r;if(c===void 0&&(c=[]),a===void 0&&(a=null),e==null){var n;if((n=a)!=null&&n.errors)e=a.matches;else return null}let t=e,i=(r=a)==null?void 0:r.errors;if(i!=null){let s=t.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||s2(!1),t=t.slice(0,Math.min(t.length,s+1))}return t.reduceRight((s,o,l)=>{let f=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;a&&(u=o.route.errorElement||XY);let h=c.concat(t.slice(0,l+1)),v=()=>{let V;return f?V=u:o.route.Component?V=z.createElement(o.route.Component,null):o.route.element?V=o.route.element:V=s,z.createElement(JY,{match:o,routeContext:{outlet:s,matches:h,isDataRoute:a!=null},children:V})};return a&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?z.createElement(QY,{location:a.location,revalidation:a.revalidation,component:u,error:f,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var gv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gv||{}),Ve=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ve||{});function eX(e){let c=z.useContext(Wr);return c||s2(!1),c}function cX(e){let c=z.useContext(jY);return c||s2(!1),c}function aX(e){let c=z.useContext(l4);return c||s2(!1),c}function Vv(e){let c=aX(),a=c.matches[c.matches.length-1];return a.route.id||s2(!1),a.route.id}function rX(){var e;let c=z.useContext(vv),a=cX(Ve.UseRouteError),r=Vv(Ve.UseRouteError);return c||((e=a.errors)==null?void 0:e[r])}function nX(){let{router:e}=eX(gv.UseNavigateStable),c=Vv(Ve.UseNavigateStable),a=z.useRef(!1);return zv(()=>{a.current=!0}),z.useCallback(function(n,t){t===void 0&&(t={}),a.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,ge({fromRouteId:c},t)))},[e,c])}function w7(e){s2(!1)}function tX(e){let{basename:c="/",children:a=null,location:r,navigationType:n=h3.Pop,navigator:t,static:i=!1}=e;I0()&&s2(!1);let s=c.replace(/^\/*/,"/"),o=z.useMemo(()=>({basename:s,navigator:t,static:i}),[s,t,i]);typeof r=="string"&&(r=o4(r));let{pathname:l="/",search:f="",hash:u="",state:h=null,key:v="default"}=r,V=z.useMemo(()=>{let H=Ur(l,s);return H==null?null:{location:{pathname:H,search:f,hash:u,state:h,key:v},navigationType:n}},[s,l,f,u,h,v,n]);return V==null?null:z.createElement(i6.Provider,{value:o},z.createElement(z5.Provider,{children:a,value:V}))}function iX(e){let{children:c,location:a}=e;return qY(x7(c),a)}new Promise(()=>{});function x7(e,c){c===void 0&&(c=[]);let a=[];return z.Children.forEach(e,(r,n)=>{if(!z.isValidElement(r))return;let t=[...c,n];if(r.type===z.Fragment){a.push.apply(a,x7(r.props.children,t));return}r.type!==w7&&s2(!1),!r.props.index||!r.props.children||s2(!1);let i={id:r.props.id||t.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=x7(r.props.children,t)),a.push(i)}),a}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S7(){return S7=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},S7.apply(this,arguments)}function sX(e,c){if(e==null)return{};var a={},r=Object.keys(e),n,t;for(t=0;t<r.length;t++)n=r[t],!(c.indexOf(n)>=0)&&(a[n]=e[n]);return a}function oX(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lX(e,c){return e.button===0&&(!c||c==="_self")&&!oX(e)}const fX=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uX="startTransition",t9=iH[uX];function dX(e){let{basename:c,children:a,future:r,window:n}=e,t=z.useRef();t.current==null&&(t.current=gY({window:n,v5Compat:!0}));let i=t.current,[s,o]=z.useState({action:i.action,location:i.location}),{v7_startTransition:l}=r||{},f=z.useCallback(u=>{l&&t9?t9(()=>o(u)):o(u)},[o,l]);return z.useLayoutEffect(()=>i.listen(f),[i,f]),z.createElement(tX,{basename:c,children:a,location:s.location,navigationType:s.action,navigator:i})}const hX=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pX=z.forwardRef(function(c,a){let{onClick:r,relative:n,reloadDocument:t,replace:i,state:s,target:o,to:l,preventScrollReset:f}=c,u=sX(c,fX),{basename:h}=z.useContext(i6),v,V=!1;if(typeof l=="string"&&mX.test(l)&&(v=l,hX))try{let d=new URL(window.location.href),p=l.startsWith("//")?new URL(d.protocol+l):new URL(l),g=Ur(p.pathname,h);p.origin===d.origin&&g!=null?l=g+p.search+p.hash:V=!0}catch{}let H=$Y(l,{relative:n}),C=vX(l,{replace:i,state:s,target:o,preventScrollReset:f,relative:n});function m(d){r&&r(d),d.defaultPrevented||C(d)}return z.createElement("a",S7({},u,{href:v||H,onClick:V||t?r:m,ref:a,target:o}))});var i9;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(i9||(i9={}));var s9;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(s9||(s9={}));function vX(e,c){let{target:a,replace:r,state:n,preventScrollReset:t,relative:i}=c===void 0?{}:c,s=jr(),o=H5(),l=Hv(e,{relative:i});return z.useCallback(f=>{if(lX(f,a)){f.preventDefault();let u=r!==void 0?r:He(o)===He(l);s(e,{replace:u,state:n,preventScrollReset:t,relative:i})}},[o,s,l,r,n,a,e,t,i])}/**
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
 */const Mv=function(e){const c=[];let a=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?c[a++]=n:n<2048?(c[a++]=n>>6|192,c[a++]=n&63|128):(n&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++r)&1023),c[a++]=n>>18|240,c[a++]=n>>12&63|128,c[a++]=n>>6&63|128,c[a++]=n&63|128):(c[a++]=n>>12|224,c[a++]=n>>6&63|128,c[a++]=n&63|128)}return c},zX=function(e){const c=[];let a=0,r=0;for(;a<e.length;){const n=e[a++];if(n<128)c[r++]=String.fromCharCode(n);else if(n>191&&n<224){const t=e[a++];c[r++]=String.fromCharCode((n&31)<<6|t&63)}else if(n>239&&n<365){const t=e[a++],i=e[a++],s=e[a++],o=((n&7)<<18|(t&63)<<12|(i&63)<<6|s&63)-65536;c[r++]=String.fromCharCode(55296+(o>>10)),c[r++]=String.fromCharCode(56320+(o&1023))}else{const t=e[a++],i=e[a++];c[r++]=String.fromCharCode((n&15)<<12|(t&63)<<6|i&63)}}return c.join("")},Cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<e.length;n+=3){const t=e[n],i=n+1<e.length,s=i?e[n+1]:0,o=n+2<e.length,l=o?e[n+2]:0,f=t>>2,u=(t&3)<<4|s>>4;let h=(s&15)<<2|l>>6,v=l&63;o||(v=64,i||(h=64)),r.push(a[f],a[u],a[h],a[v])}return r.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(Mv(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):zX(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<e.length;){const t=a[e.charAt(n++)],s=n<e.length?a[e.charAt(n)]:0;++n;const l=n<e.length?a[e.charAt(n)]:64;++n;const u=n<e.length?a[e.charAt(n)]:64;if(++n,t==null||s==null||l==null||u==null)throw new HX;const h=t<<2|s>>4;if(r.push(h),l!==64){const v=s<<4&240|l>>2;if(r.push(v),u!==64){const V=l<<6&192|u;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class HX extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gX=function(e){const c=Mv(e);return Cv.encodeByteArray(c,!0)},Lv=function(e){return gX(e).replace(/\./g,"")},yv=function(e){try{return Cv.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};/**
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
 */function VX(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MX=()=>VX().__FIREBASE_DEFAULTS__,CX=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},LX=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&yv(e[1]);return c&&JSON.parse(c)},$r=()=>{try{return MX()||CX()||LX()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yX=e=>{var c,a;return(a=(c=$r())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},wv=()=>{var e;return(e=$r())===null||e===void 0?void 0:e.config},xv=e=>{var c;return(c=$r())===null||c===void 0?void 0:c[`_${e}`]};/**
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
 */class wX{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,r))}}}/**
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
 */function S2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xX(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S2())}function SX(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function NX(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kX(){const e=S2();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bX(){try{return typeof indexedDB=="object"}catch{return!1}}function AX(){return new Promise((e,c)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var t;c(((t=n.error)===null||t===void 0?void 0:t.message)||"")}}catch(a){c(a)}})}/**
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
 */const EX="FirebaseError";class _3 extends Error{constructor(c,a,r){super(a),this.code=c,this.customData=r,this.name=EX,Object.setPrototypeOf(this,_3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D0.prototype.create)}}class D0{constructor(c,a,r){this.service=c,this.serviceName=a,this.errors=r}create(c,...a){const r=a[0]||{},n=`${this.service}/${c}`,t=this.errors[c],i=t?TX(t,r):"Error",s=`${this.serviceName}: ${i} (${n}).`;return new _3(n,s,r)}}function TX(e,c){return e.replace(PX,(a,r)=>{const n=c[r];return n!=null?String(n):`<${r}?>`})}const PX=/\{\$([^}]+)}/g;function _X(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function Me(e,c){if(e===c)return!0;const a=Object.keys(e),r=Object.keys(c);for(const n of a){if(!r.includes(n))return!1;const t=e[n],i=c[n];if(o9(t)&&o9(i)){if(!Me(t,i))return!1}else if(t!==i)return!1}for(const n of r)if(!a.includes(n))return!1;return!0}function o9(e){return e!==null&&typeof e=="object"}/**
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
 */function O0(e){const c=[];for(const[a,r]of Object.entries(e))Array.isArray(r)?r.forEach(n=>{c.push(encodeURIComponent(a)+"="+encodeURIComponent(n))}):c.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return c.length?"&"+c.join("&"):""}function b6(e){const c={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[n,t]=r.split("=");c[decodeURIComponent(n)]=decodeURIComponent(t)}}),c}function A6(e){const c=e.indexOf("?");if(!c)return"";const a=e.indexOf("#",c);return e.substring(c,a>0?a:void 0)}function RX(e,c){const a=new IX(e,c);return a.subscribe.bind(a)}class IX{constructor(c,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{c(this)}).catch(r=>{this.error(r)})}next(c){this.forEachObserver(a=>{a.next(c)})}error(c){this.forEachObserver(a=>{a.error(c)}),this.close(c)}complete(){this.forEachObserver(c=>{c.complete()}),this.close()}subscribe(c,a,r){let n;if(c===void 0&&a===void 0&&r===void 0)throw new Error("Missing Observer.");DX(c,["next","error","complete"])?n=c:n={next:c,error:a,complete:r},n.next===void 0&&(n.next=nc),n.error===void 0&&(n.error=nc),n.complete===void 0&&(n.complete=nc);const t=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),t}unsubscribeOne(c){this.observers===void 0||this.observers[c]===void 0||(delete this.observers[c],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(c){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,c)}sendOne(c,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[c]!==void 0)try{a(this.observers[c])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(c){this.finalized||(this.finalized=!0,c!==void 0&&(this.finalError=c),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DX(e,c){if(typeof e!="object"||e===null)return!1;for(const a of c)if(a in e&&typeof e[a]=="function")return!0;return!1}function nc(){}/**
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
 */function R3(e){return e&&e._delegate?e._delegate:e}class c6{constructor(c,a,r){this.name=c,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
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
 */const F3="[DEFAULT]";/**
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
 */class OX{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const r=new wX;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:a});n&&r.resolve(n)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const r=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),n=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(t){if(n)return null;throw t}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(BX(c))try{this.getOrInitializeService({instanceIdentifier:F3})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(a);try{const t=this.getOrInitializeService({instanceIdentifier:n});r.resolve(t)}catch{}}}}clearInstance(c=F3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=F3){return this.instances.has(c)}getOptions(c=F3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,r=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);r===s&&i.resolve(n)}return n}onInit(c,a){var r;const n=this.normalizeInstanceIdentifier(a),t=(r=this.onInitCallbacks.get(n))!==null&&r!==void 0?r:new Set;t.add(c),this.onInitCallbacks.set(n,t);const i=this.instances.get(n);return i&&c(i,n),()=>{t.delete(c)}}invokeOnInitCallbacks(c,a){const r=this.onInitCallbacks.get(a);if(r)for(const n of r)try{n(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let r=this.instances.get(c);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FX(c),options:a}),this.instances.set(c,r),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(r,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,r)}catch{}return r||null}normalizeInstanceIdentifier(c=F3){return this.component?this.component.multipleInstances?c:F3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FX(e){return e===F3?void 0:e}function BX(e){return e.instantiationMode==="EAGER"}/**
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
 */class UX{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new OX(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const WX={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},jX=$.INFO,$X={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},GX=(e,c,...a)=>{if(c<e.logLevel)return;const r=new Date().toISOString(),n=$X[c];if(n)console[n](`[${r}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class Sv{constructor(c){this.name=c,this._logLevel=jX,this._logHandler=GX,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in $))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?WX[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...c),this._logHandler(this,$.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...c),this._logHandler(this,$.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,$.INFO,...c),this._logHandler(this,$.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,$.WARN,...c),this._logHandler(this,$.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...c),this._logHandler(this,$.ERROR,...c)}}const qX=(e,c)=>c.some(a=>e instanceof a);let l9,f9;function KX(){return l9||(l9=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YX(){return f9||(f9=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nv=new WeakMap,N7=new WeakMap,kv=new WeakMap,tc=new WeakMap,Gr=new WeakMap;function XX(e){const c=new Promise((a,r)=>{const n=()=>{e.removeEventListener("success",t),e.removeEventListener("error",i)},t=()=>{a(y3(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",t),e.addEventListener("error",i)});return c.then(a=>{a instanceof IDBCursor&&Nv.set(a,e)}).catch(()=>{}),Gr.set(c,e),c}function QX(e){if(N7.has(e))return;const c=new Promise((a,r)=>{const n=()=>{e.removeEventListener("complete",t),e.removeEventListener("error",i),e.removeEventListener("abort",i)},t=()=>{a(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",t),e.addEventListener("error",i),e.addEventListener("abort",i)});N7.set(e,c)}let k7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return N7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||kv.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return y3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function JX(e){k7=e(k7)}function ZX(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const r=e.call(ic(this),c,...a);return kv.set(r,c.sort?c.sort():[c]),y3(r)}:YX().includes(e)?function(...c){return e.apply(ic(this),c),y3(Nv.get(this))}:function(...c){return y3(e.apply(ic(this),c))}}function eQ(e){return typeof e=="function"?ZX(e):(e instanceof IDBTransaction&&QX(e),qX(e,KX())?new Proxy(e,k7):e)}function y3(e){if(e instanceof IDBRequest)return XX(e);if(tc.has(e))return tc.get(e);const c=eQ(e);return c!==e&&(tc.set(e,c),Gr.set(c,e)),c}const ic=e=>Gr.get(e);function cQ(e,c,{blocked:a,upgrade:r,blocking:n,terminated:t}={}){const i=indexedDB.open(e,c),s=y3(i);return r&&i.addEventListener("upgradeneeded",o=>{r(y3(i.result),o.oldVersion,o.newVersion,y3(i.transaction),o)}),a&&i.addEventListener("blocked",o=>a(o.oldVersion,o.newVersion,o)),s.then(o=>{t&&o.addEventListener("close",()=>t()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}const aQ=["get","getKey","getAll","getAllKeys","count"],rQ=["put","add","delete","clear"],sc=new Map;function u9(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(sc.get(c))return sc.get(c);const a=c.replace(/FromIndex$/,""),r=c!==a,n=rQ.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(n||aQ.includes(a)))return;const t=async function(i,...s){const o=this.transaction(i,n?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(s.shift())),(await Promise.all([l[a](...s),n&&o.done]))[0]};return sc.set(c,t),t}JX(e=>({...e,get:(c,a,r)=>u9(c,a)||e.get(c,a,r),has:(c,a)=>!!u9(c,a)||e.has(c,a)}));/**
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
 */class nQ{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(tQ(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function tQ(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const b7="@firebase/app",d9="0.9.19";/**
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
 */const r4=new Sv("@firebase/app"),iQ="@firebase/app-compat",sQ="@firebase/analytics-compat",oQ="@firebase/analytics",lQ="@firebase/app-check-compat",fQ="@firebase/app-check",uQ="@firebase/auth",dQ="@firebase/auth-compat",hQ="@firebase/database",mQ="@firebase/database-compat",pQ="@firebase/functions",vQ="@firebase/functions-compat",zQ="@firebase/installations",HQ="@firebase/installations-compat",gQ="@firebase/messaging",VQ="@firebase/messaging-compat",MQ="@firebase/performance",CQ="@firebase/performance-compat",LQ="@firebase/remote-config",yQ="@firebase/remote-config-compat",wQ="@firebase/storage",xQ="@firebase/storage-compat",SQ="@firebase/firestore",NQ="@firebase/firestore-compat",kQ="firebase",bQ="10.4.0";/**
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
 */const A7="[DEFAULT]",AQ={[b7]:"fire-core",[iQ]:"fire-core-compat",[oQ]:"fire-analytics",[sQ]:"fire-analytics-compat",[fQ]:"fire-app-check",[lQ]:"fire-app-check-compat",[uQ]:"fire-auth",[dQ]:"fire-auth-compat",[hQ]:"fire-rtdb",[mQ]:"fire-rtdb-compat",[pQ]:"fire-fn",[vQ]:"fire-fn-compat",[zQ]:"fire-iid",[HQ]:"fire-iid-compat",[gQ]:"fire-fcm",[VQ]:"fire-fcm-compat",[MQ]:"fire-perf",[CQ]:"fire-perf-compat",[LQ]:"fire-rc",[yQ]:"fire-rc-compat",[wQ]:"fire-gcs",[xQ]:"fire-gcs-compat",[SQ]:"fire-fst",[NQ]:"fire-fst-compat","fire-js":"fire-js",[kQ]:"fire-js-all"};/**
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
 */const Ce=new Map,E7=new Map;function EQ(e,c){try{e.container.addComponent(c)}catch(a){r4.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function v0(e){const c=e.name;if(E7.has(c))return r4.debug(`There were multiple attempts to register component ${c}.`),!1;E7.set(c,e);for(const a of Ce.values())EQ(a,e);return!0}function bv(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
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
 */const TQ={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w3=new D0("app","Firebase",TQ);/**
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
 */class PQ{constructor(c,a,r){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new c6("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw w3.create("app-deleted",{appName:this._name})}}/**
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
 */const F0=bQ;function Av(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const r=Object.assign({name:A7,automaticDataCollectionEnabled:!1},c),n=r.name;if(typeof n!="string"||!n)throw w3.create("bad-app-name",{appName:String(n)});if(a||(a=wv()),!a)throw w3.create("no-options");const t=Ce.get(n);if(t){if(Me(a,t.options)&&Me(r,t.config))return t;throw w3.create("duplicate-app",{appName:n})}const i=new UX(n);for(const o of E7.values())i.addComponent(o);const s=new PQ(a,r,i);return Ce.set(n,s),s}function _Q(e=A7){const c=Ce.get(e);if(!c&&e===A7&&wv())return Av();if(!c)throw w3.create("no-app",{appName:e});return c}function W4(e,c,a){var r;let n=(r=AQ[e])!==null&&r!==void 0?r:e;a&&(n+=`-${a}`);const t=n.match(/\s|\//),i=c.match(/\s|\//);if(t||i){const s=[`Unable to register library "${n}" with version "${c}":`];t&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),t&&i&&s.push("and"),i&&s.push(`version name "${c}" contains illegal characters (whitespace or "/")`),r4.warn(s.join(" "));return}v0(new c6(`${n}-version`,()=>({library:n,version:c}),"VERSION"))}/**
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
 */const RQ="firebase-heartbeat-database",IQ=1,z0="firebase-heartbeat-store";let oc=null;function Ev(){return oc||(oc=cQ(RQ,IQ,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(z0)}}}).catch(e=>{throw w3.create("idb-open",{originalErrorMessage:e.message})})),oc}async function DQ(e){try{return await(await Ev()).transaction(z0).objectStore(z0).get(Tv(e))}catch(c){if(c instanceof _3)r4.warn(c.message);else{const a=w3.create("idb-get",{originalErrorMessage:c==null?void 0:c.message});r4.warn(a.message)}}}async function h9(e,c){try{const r=(await Ev()).transaction(z0,"readwrite");await r.objectStore(z0).put(c,Tv(e)),await r.done}catch(a){if(a instanceof _3)r4.warn(a.message);else{const r=w3.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});r4.warn(r.message)}}}function Tv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const OQ=1024,FQ=30*24*60*60*1e3;class BQ{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new WQ(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=m9();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(n=>n.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const t=new Date(n.date).valueOf();return Date.now()-t<=FQ}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=m9(),{heartbeatsToSend:a,unsentEntries:r}=UQ(this._heartbeatsCache.heartbeats),n=Lv(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function m9(){return new Date().toISOString().substring(0,10)}function UQ(e,c=OQ){const a=[];let r=e.slice();for(const n of e){const t=a.find(i=>i.agent===n.agent);if(t){if(t.dates.push(n.date),p9(a)>c){t.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),p9(a)>c){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class WQ{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bX()?AX().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DQ(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return h9(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return h9(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...c.heartbeats]})}else return}}function p9(e){return Lv(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function jQ(e){v0(new c6("platform-logger",c=>new nQ(c),"PRIVATE")),v0(new c6("heartbeat",c=>new BQ(c),"PRIVATE")),W4(b7,d9,e),W4(b7,d9,"esm2017"),W4("fire-js","")}jQ("");function qr(e,c){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)c.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a}function v9(e){return e!==void 0&&e.enterprise!==void 0}class $Q{constructor(c){if(this.siteKey="",this.emailPasswordEnabled=!1,c.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=c.recaptchaKey.split("/")[3],this.emailPasswordEnabled=c.recaptchaEnforcementState.some(a=>a.provider==="EMAIL_PASSWORD_PROVIDER"&&a.enforcementState!=="OFF")}}function Pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GQ=Pv,_v=new D0("auth","Firebase",Pv());/**
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
 */const Le=new Sv("@firebase/auth");function qQ(e,...c){Le.logLevel<=$.WARN&&Le.warn(`Auth (${F0}): ${e}`,...c)}function F8(e,...c){Le.logLevel<=$.ERROR&&Le.error(`Auth (${F0}): ${e}`,...c)}/**
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
 */function m1(e,...c){throw Kr(e,...c)}function w1(e,...c){return Kr(e,...c)}function KQ(e,c,a){const r=Object.assign(Object.assign({},GQ()),{[c]:a});return new D0("auth","Firebase",r).create(c,{appName:e.name})}function Kr(e,...c){if(typeof e!="string"){const a=c[0],r=[...c.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(a,...r)}return _v.create(e,...c)}function _(e,c,...a){if(!e)throw Kr(c,...a)}function _1(e){const c="INTERNAL ASSERTION FAILED: "+e;throw F8(c),new Error(c)}function $1(e,c){e||_1(c)}/**
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
 */function T7(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function YQ(){return z9()==="http:"||z9()==="https:"}function z9(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function XQ(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YQ()||SX()||"connection"in navigator)?navigator.onLine:!0}function QQ(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class B0{constructor(c,a){this.shortDelay=c,this.longDelay=a,$1(a>c,"Short delay should be less than long delay!"),this.isMobile=xX()||NX()}get(){return XQ()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yr(e,c){$1(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return c?`${a}${c.startsWith("/")?c.slice(1):c}`:a}/**
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
 */class Rv{static initialize(c,a,r){this.fetchImpl=c,a&&(this.headersImpl=a),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_1("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_1("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_1("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JQ={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZQ=new B0(3e4,6e4);function f4(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function u4(e,c,a,r,n={}){return Iv(e,n,async()=>{let t={},i={};r&&(c==="GET"?i=r:t={body:JSON.stringify(r)});const s=O0(Object.assign({key:e.config.apiKey},i)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Rv.fetch()(Dv(e,e.config.apiHost,a,s),Object.assign({method:c,headers:o,referrerPolicy:"no-referrer"},t))})}async function Iv(e,c,a){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},JQ),c);try{const n=new eJ(e),t=await Promise.race([a(),n.promise]);n.clearNetworkTimeout();const i=await t.json();if("needConfirmation"in i)throw y8(e,"account-exists-with-different-credential",i);if(t.ok&&!("errorMessage"in i))return i;{const s=t.ok?i.errorMessage:i.error.message,[o,l]=s.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw y8(e,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw y8(e,"email-already-in-use",i);if(o==="USER_DISABLED")throw y8(e,"user-disabled",i);const f=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw KQ(e,f,l);m1(e,f)}}catch(n){if(n instanceof _3)throw n;m1(e,"network-request-failed",{message:String(n)})}}async function U0(e,c,a,r,n={}){const t=await u4(e,c,a,r,n);return"mfaPendingCredential"in t&&m1(e,"multi-factor-auth-required",{_serverResponse:t}),t}function Dv(e,c,a,r){const n=`${c}${a}?${r}`;return e.config.emulator?Yr(e.config,n):`${e.config.apiScheme}://${n}`}class eJ{constructor(c){this.auth=c,this.timer=null,this.promise=new Promise((a,r)=>{this.timer=setTimeout(()=>r(w1(this.auth,"network-request-failed")),ZQ.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function y8(e,c,a){const r={appName:e.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const n=w1(e,c,r);return n.customData._tokenResponse=a,n}async function cJ(e,c){return u4(e,"GET","/v2/recaptchaConfig",f4(e,c))}/**
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
 */async function aJ(e,c){return u4(e,"POST","/v1/accounts:delete",c)}async function rJ(e,c){return u4(e,"POST","/v1/accounts:lookup",c)}/**
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
 */function W6(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch{}}async function nJ(e,c=!1){const a=R3(e),r=await a.getIdToken(c),n=Xr(r);_(n&&n.exp&&n.auth_time&&n.iat,a.auth,"internal-error");const t=typeof n.firebase=="object"?n.firebase:void 0,i=t==null?void 0:t.sign_in_provider;return{claims:n,token:r,authTime:W6(lc(n.auth_time)),issuedAtTime:W6(lc(n.iat)),expirationTime:W6(lc(n.exp)),signInProvider:i||null,signInSecondFactor:(t==null?void 0:t.sign_in_second_factor)||null}}function lc(e){return Number(e)*1e3}function Xr(e){const[c,a,r]=e.split(".");if(c===void 0||a===void 0||r===void 0)return F8("JWT malformed, contained fewer than 3 sections"),null;try{const n=yv(a);return n?JSON.parse(n):(F8("Failed to decode base64 JWT payload"),null)}catch(n){return F8("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function tJ(e){const c=Xr(e);return _(c,"internal-error"),_(typeof c.exp<"u","internal-error"),_(typeof c.iat<"u","internal-error"),Number(c.exp)-Number(c.iat)}/**
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
 */async function H0(e,c,a=!1){if(a)return c;try{return await c}catch(r){throw r instanceof _3&&iJ(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function iJ({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class sJ{constructor(c){this.user=c,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(c){var a;if(c){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(c=!1){if(!this.isRunning)return;const a=this.getInterval(c);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(c){(c==null?void 0:c.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ov{constructor(c,a){this.createdAt=c,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=W6(this.lastLoginAt),this.creationTime=W6(this.createdAt)}_copy(c){this.createdAt=c.createdAt,this.lastLoginAt=c.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ye(e){var c;const a=e.auth,r=await e.getIdToken(),n=await H0(e,rJ(a,{idToken:r}));_(n==null?void 0:n.users.length,a,"internal-error");const t=n.users[0];e._notifyReloadListener(t);const i=!((c=t.providerUserInfo)===null||c===void 0)&&c.length?fJ(t.providerUserInfo):[],s=lJ(e.providerData,i),o=e.isAnonymous,l=!(e.email&&t.passwordHash)&&!(s!=null&&s.length),f=o?l:!1,u={uid:t.localId,displayName:t.displayName||null,photoURL:t.photoUrl||null,email:t.email||null,emailVerified:t.emailVerified||!1,phoneNumber:t.phoneNumber||null,tenantId:t.tenantId||null,providerData:s,metadata:new Ov(t.createdAt,t.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function oJ(e){const c=R3(e);await ye(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function lJ(e,c){return[...e.filter(r=>!c.some(n=>n.providerId===r.providerId)),...c]}function fJ(e){return e.map(c=>{var{providerId:a}=c,r=qr(c,["providerId"]);return{providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uJ(e,c){const a=await Iv(e,{},async()=>{const r=O0({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:n,apiKey:t}=e.config,i=Dv(e,n,"/v1/token",`key=${t}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Rv.fetch()(i,{method:"POST",headers:s,body:r})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
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
 */class g0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(c){_(c.idToken,"internal-error"),_(typeof c.idToken<"u","internal-error"),_(typeof c.refreshToken<"u","internal-error");const a="expiresIn"in c&&typeof c.expiresIn<"u"?Number(c.expiresIn):tJ(c.idToken);this.updateTokensAndExpiration(c.idToken,c.refreshToken,a)}async getToken(c,a=!1){return _(!this.accessToken||this.refreshToken,c,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(c,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(c,a){const{accessToken:r,refreshToken:n,expiresIn:t}=await uJ(c,a);this.updateTokensAndExpiration(r,n,Number(t))}updateTokensAndExpiration(c,a,r){this.refreshToken=a||null,this.accessToken=c||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(c,a){const{refreshToken:r,accessToken:n,expirationTime:t}=a,i=new g0;return r&&(_(typeof r=="string","internal-error",{appName:c}),i.refreshToken=r),n&&(_(typeof n=="string","internal-error",{appName:c}),i.accessToken=n),t&&(_(typeof t=="number","internal-error",{appName:c}),i.expirationTime=t),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(c){this.accessToken=c.accessToken,this.refreshToken=c.refreshToken,this.expirationTime=c.expirationTime}_clone(){return Object.assign(new g0,this.toJSON())}_performRefresh(){return _1("not implemented")}}/**
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
 */function c3(e,c){_(typeof e=="string"||typeof e>"u","internal-error",{appName:c})}class Y3{constructor(c){var{uid:a,auth:r,stsTokenManager:n}=c,t=qr(c,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sJ(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=t.displayName||null,this.email=t.email||null,this.emailVerified=t.emailVerified||!1,this.phoneNumber=t.phoneNumber||null,this.photoURL=t.photoURL||null,this.isAnonymous=t.isAnonymous||!1,this.tenantId=t.tenantId||null,this.providerData=t.providerData?[...t.providerData]:[],this.metadata=new Ov(t.createdAt||void 0,t.lastLoginAt||void 0)}async getIdToken(c){const a=await H0(this,this.stsTokenManager.getToken(this.auth,c));return _(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(c){return nJ(this,c)}reload(){return oJ(this)}_assign(c){this!==c&&(_(this.uid===c.uid,this.auth,"internal-error"),this.displayName=c.displayName,this.photoURL=c.photoURL,this.email=c.email,this.emailVerified=c.emailVerified,this.phoneNumber=c.phoneNumber,this.isAnonymous=c.isAnonymous,this.tenantId=c.tenantId,this.providerData=c.providerData.map(a=>Object.assign({},a)),this.metadata._copy(c.metadata),this.stsTokenManager._assign(c.stsTokenManager))}_clone(c){const a=new Y3(Object.assign(Object.assign({},this),{auth:c,stsTokenManager:this.stsTokenManager._clone()}));return a.metadata._copy(this.metadata),a}_onReload(c){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=c,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(c){this.reloadListener?this.reloadListener(c):this.reloadUserInfo=c}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(c,a=!1){let r=!1;c.idToken&&c.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(c),r=!0),a&&await ye(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const c=await this.getIdToken();return await H0(this,aJ(this.auth,{idToken:c})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(c=>Object.assign({},c)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(c,a){var r,n,t,i,s,o,l,f;const u=(r=a.displayName)!==null&&r!==void 0?r:void 0,h=(n=a.email)!==null&&n!==void 0?n:void 0,v=(t=a.phoneNumber)!==null&&t!==void 0?t:void 0,V=(i=a.photoURL)!==null&&i!==void 0?i:void 0,H=(s=a.tenantId)!==null&&s!==void 0?s:void 0,C=(o=a._redirectEventId)!==null&&o!==void 0?o:void 0,m=(l=a.createdAt)!==null&&l!==void 0?l:void 0,d=(f=a.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:g,isAnonymous:M,providerData:y,stsTokenManager:L}=a;_(p&&L,c,"internal-error");const x=g0.fromJSON(this.name,L);_(typeof p=="string",c,"internal-error"),c3(u,c.name),c3(h,c.name),_(typeof g=="boolean",c,"internal-error"),_(typeof M=="boolean",c,"internal-error"),c3(v,c.name),c3(V,c.name),c3(H,c.name),c3(C,c.name),c3(m,c.name),c3(d,c.name);const E=new Y3({uid:p,auth:c,email:h,emailVerified:g,displayName:u,isAnonymous:M,photoURL:V,phoneNumber:v,tenantId:H,stsTokenManager:x,createdAt:m,lastLoginAt:d});return y&&Array.isArray(y)&&(E.providerData=y.map(A=>Object.assign({},A))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(c,a,r=!1){const n=new g0;n.updateFromServerResponse(a);const t=new Y3({uid:a.localId,auth:c,stsTokenManager:n,isAnonymous:r});return await ye(t),t}}/**
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
 */const H9=new Map;function R1(e){$1(e instanceof Function,"Expected a class definition");let c=H9.get(e);return c?($1(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,H9.set(e,c),c)}/**
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
 */class Fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(c,a){this.storage[c]=a}async _get(c){const a=this.storage[c];return a===void 0?null:a}async _remove(c){delete this.storage[c]}_addListener(c,a){}_removeListener(c,a){}}Fv.type="NONE";const g9=Fv;/**
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
 */function B8(e,c,a){return`firebase:${e}:${c}:${a}`}class j4{constructor(c,a,r){this.persistence=c,this.auth=a,this.userKey=r;const{config:n,name:t}=this.auth;this.fullUserKey=B8(this.userKey,n.apiKey,t),this.fullPersistenceKey=B8("persistence",n.apiKey,t),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(c){return this.persistence._set(this.fullUserKey,c.toJSON())}async getCurrentUser(){const c=await this.persistence._get(this.fullUserKey);return c?Y3._fromJSON(this.auth,c):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(c){if(this.persistence===c)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=c,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(c,a,r="authUser"){if(!a.length)return new j4(R1(g9),c,r);const n=(await Promise.all(a.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let t=n[0]||R1(g9);const i=B8(r,c.config.apiKey,c.name);let s=null;for(const l of a)try{const f=await l._get(i);if(f){const u=Y3._fromJSON(c,f);l!==t&&(s=u),t=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!t._shouldAllowMigration||!o.length?new j4(t,c,r):(t=o[0],s&&await t._set(i,s.toJSON()),await Promise.all(a.map(async l=>{if(l!==t)try{await l._remove(i)}catch{}})),new j4(t,c,r))}}/**
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
 */function V9(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(Wv(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(Bv(c))return"Firefox";if(c.includes("silk/"))return"Silk";if($v(c))return"Blackberry";if(Gv(c))return"Webos";if(Qr(c))return"Safari";if((c.includes("chrome/")||Uv(c))&&!c.includes("edge/"))return"Chrome";if(jv(c))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(a);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bv(e=S2()){return/firefox\//i.test(e)}function Qr(e=S2()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function Uv(e=S2()){return/crios\//i.test(e)}function Wv(e=S2()){return/iemobile/i.test(e)}function jv(e=S2()){return/android/i.test(e)}function $v(e=S2()){return/blackberry/i.test(e)}function Gv(e=S2()){return/webos/i.test(e)}function g5(e=S2()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dJ(e=S2()){var c;return g5(e)&&!!(!((c=window.navigator)===null||c===void 0)&&c.standalone)}function hJ(){return kX()&&document.documentMode===10}function qv(e=S2()){return g5(e)||jv(e)||Gv(e)||$v(e)||/windows phone/i.test(e)||Wv(e)}function mJ(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kv(e,c=[]){let a;switch(e){case"Browser":a=V9(S2());break;case"Worker":a=`${V9(S2())}-${e}`;break;default:a=e}const r=c.length?c.join(","):"FirebaseCore-web";return`${a}/JsCore/${F0}/${r}`}/**
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
 */class pJ{constructor(c){this.auth=c,this.queue=[]}pushCallback(c,a){const r=t=>new Promise((i,s)=>{try{const o=c(t);i(o)}catch(o){s(o)}});r.onAbort=a,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(c){if(this.auth.currentUser===c)return;const a=[];try{for(const r of this.queue)await r(c),r.onAbort&&a.push(r.onAbort)}catch(r){a.reverse();for(const n of a)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vJ(e,c={}){return u4(e,"GET","/v2/passwordPolicy",f4(e,c))}/**
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
 */const zJ=6;class HJ{constructor(c){var a,r,n,t;const i=c.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(a=i.minPasswordLength)!==null&&a!==void 0?a:zJ,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=c.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(r=c.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(t=c.forceUpgradeOnSignin)!==null&&t!==void 0?t:!1,this.schemaVersion=c.schemaVersion}validatePassword(c){var a,r,n,t,i,s;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(c,o),this.validatePasswordCharacterOptions(c,o),o.isValid&&(o.isValid=(a=o.meetsMinPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(n=o.containsLowercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(t=o.containsUppercaseLetter)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(i=o.containsNumericCharacter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),o}validatePasswordLengthOptions(c,a){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(a.meetsMinPasswordLength=c.length>=r),n&&(a.meetsMaxPasswordLength=c.length<=n)}validatePasswordCharacterOptions(c,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let r;for(let n=0;n<c.length;n++)r=c.charAt(n),this.updatePasswordCharacterOptionsStatuses(a,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(c,a,r,n,t){this.customStrengthOptions.containsLowercaseLetter&&(c.containsLowercaseLetter||(c.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(c.containsUppercaseLetter||(c.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(c.containsNumericCharacter||(c.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(c.containsNonAlphanumericCharacter||(c.containsNonAlphanumericCharacter=t))}}/**
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
 */class gJ{constructor(c,a,r,n){this.app=c,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new M9(this),this.idTokenSubscription=new M9(this),this.beforeStateQueue=new pJ(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=c.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(c,a){return a&&(this._popupRedirectResolver=R1(a)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await j4.create(this,c),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const c=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!c)){if(this.currentUser&&c&&this.currentUser.uid===c.uid){this._currentUser._assign(c),await this.currentUser.getIdToken();return}await this._updateCurrentUser(c,!0)}}async initializeCurrentUser(c){var a;const r=await this.assertedPersistence.getCurrentUser();let n=r,t=!1;if(c&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(c);(!i||i===s)&&(o!=null&&o.user)&&(n=o.user,t=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(t)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(c){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,c,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(c){try{await ye(c)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(c)}useDeviceLanguage(){this.languageCode=QQ()}async _delete(){this._deleted=!0}async updateCurrentUser(c){const a=c?R3(c):null;return a&&_(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(c,a=!1){if(!this._deleted)return c&&_(this.tenantId===c.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(c),this.queue(async()=>{await this.directlySetCurrentUser(c),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(c){return this.queue(async()=>{await this.assertedPersistence.setPersistence(R1(c))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(c){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(c)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const c=await vJ(this),a=new HJ(c);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(c){this._errorFactory=new D0("auth","Firebase",c())}onAuthStateChanged(c,a,r){return this.registerStateListener(this.authStateSubscription,c,a,r)}beforeAuthStateChanged(c,a){return this.beforeStateQueue.pushCallback(c,a)}onIdTokenChanged(c,a,r){return this.registerStateListener(this.idTokenSubscription,c,a,r)}authStateReady(){return new Promise((c,a)=>{if(this.currentUser)c();else{const r=this.onAuthStateChanged(()=>{r(),c()},a)}})}toJSON(){var c;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(c=this._currentUser)===null||c===void 0?void 0:c.toJSON()}}async _setRedirectUser(c,a){const r=await this.getOrInitRedirectPersistenceManager(a);return c===null?r.removeCurrentUser():r.setCurrentUser(c)}async getOrInitRedirectPersistenceManager(c){if(!this.redirectPersistenceManager){const a=c&&R1(c)||this._popupRedirectResolver;_(a,this,"argument-error"),this.redirectPersistenceManager=await j4.create(this,[R1(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(c){var a,r;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===c?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===c?this.redirectUser:null}async _persistUserIfCurrent(c){if(c===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(c))}_notifyListenersIfCurrent(c){c===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var c,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(a=(c=this.currentUser)===null||c===void 0?void 0:c.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(c,a,r,n){if(this._deleted)return()=>{};const t=typeof a=="function"?a:a.next.bind(a);let i=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(s,this,"internal-error"),s.then(()=>{i||t(this.currentUser)}),typeof a=="function"){const o=c.addObserver(a,r,n);return()=>{i=!0,o()}}else{const o=c.addObserver(a);return()=>{i=!0,o()}}}async directlySetCurrentUser(c){this.currentUser&&this.currentUser!==c&&this._currentUser._stopProactiveRefresh(),c&&this.isProactiveRefreshEnabled&&c._startProactiveRefresh(),this.currentUser=c,c?await this.assertedPersistence.setCurrentUser(c):await this.assertedPersistence.removeCurrentUser()}queue(c){return this.operations=this.operations.then(c,c),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(c){!c||this.frameworks.includes(c)||(this.frameworks.push(c),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var c;const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await((c=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||c===void 0?void 0:c.getHeartbeatsHeader());r&&(a["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(a["X-Firebase-AppCheck"]=n),a}async _getAppCheckToken(){var c;const a=await((c=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||c===void 0?void 0:c.getToken());return a!=null&&a.error&&qQ(`Error while retrieving App Check token: ${a.error}`),a==null?void 0:a.token}}function d4(e){return R3(e)}class M9{constructor(c){this.auth=c,this.observer=null,this.addObserver=RX(a=>this.observer=a)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function VJ(){var e,c;return(c=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&c!==void 0?c:document}function Yv(e){return new Promise((c,a)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=c,r.onerror=n=>{const t=w1("internal-error");t.customData=n,a(t)},r.type="text/javascript",r.charset="UTF-8",VJ().appendChild(r)})}function MJ(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const CJ="https://www.google.com/recaptcha/enterprise.js?render=",LJ="recaptcha-enterprise",yJ="NO_RECAPTCHA";class wJ{constructor(c){this.type=LJ,this.auth=d4(c)}async verify(c="verify",a=!1){async function r(t){if(!a){if(t.tenantId==null&&t._agentRecaptchaConfig!=null)return t._agentRecaptchaConfig.siteKey;if(t.tenantId!=null&&t._tenantRecaptchaConfigs[t.tenantId]!==void 0)return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(i,s)=>{cJ(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const l=new $Q(o);return t.tenantId==null?t._agentRecaptchaConfig=l:t._tenantRecaptchaConfigs[t.tenantId]=l,i(l.siteKey)}}).catch(o=>{s(o)})})}function n(t,i,s){const o=window.grecaptcha;v9(o)?o.enterprise.ready(()=>{o.enterprise.execute(t,{action:c}).then(l=>{i(l)}).catch(()=>{i(yJ)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((t,i)=>{r(this.auth).then(s=>{if(!a&&v9(window.grecaptcha))n(s,t,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}Yv(CJ+s).then(()=>{n(s,t,i)}).catch(o=>{i(o)})}}).catch(s=>{i(s)})})}}async function we(e,c,a,r=!1){const n=new wJ(e);let t;try{t=await n.verify(a)}catch{t=await n.verify(a,!0)}const i=Object.assign({},c);return r?Object.assign(i,{captchaResp:t}):Object.assign(i,{captchaResponse:t}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}/**
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
 */function xJ(e,c){const a=bv(e,"auth");if(a.isInitialized()){const n=a.getImmediate(),t=a.getOptions();if(Me(t,c??{}))return n;m1(n,"already-initialized")}return a.initialize({options:c})}function SJ(e,c){const a=(c==null?void 0:c.persistence)||[],r=(Array.isArray(a)?a:[a]).map(R1);c!=null&&c.errorMap&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(r,c==null?void 0:c.popupRedirectResolver)}function NJ(e,c,a){const r=d4(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(c),r,"invalid-emulator-scheme");const n=!!(a!=null&&a.disableWarnings),t=Xv(c),{host:i,port:s}=kJ(c),o=s===null?"":`:${s}`;r.config.emulator={url:`${t}//${i}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:i,port:s,protocol:t.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||bJ()}function Xv(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function kJ(e){const c=Xv(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(r);if(n){const t=n[1];return{host:t,port:C9(r.substr(t.length+1))}}else{const[t,i]=r.split(":");return{host:t,port:C9(i)}}}function C9(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function bJ(){function e(){const c=document.createElement("p"),a=c.style;c.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",c.classList.add("firebase-emulator-warning"),document.body.appendChild(c)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Jr{constructor(c,a){this.providerId=c,this.signInMethod=a}toJSON(){return _1("not implemented")}_getIdTokenResponse(c){return _1("not implemented")}_linkToIdToken(c,a){return _1("not implemented")}_getReauthenticationResolver(c){return _1("not implemented")}}async function AJ(e,c){return u4(e,"POST","/v1/accounts:update",c)}/**
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
 */async function fc(e,c){return U0(e,"POST","/v1/accounts:signInWithPassword",f4(e,c))}/**
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
 */async function EJ(e,c){return U0(e,"POST","/v1/accounts:signInWithEmailLink",f4(e,c))}async function TJ(e,c){return U0(e,"POST","/v1/accounts:signInWithEmailLink",f4(e,c))}/**
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
 */class V0 extends Jr{constructor(c,a,r,n=null){super("password",r),this._email=c,this._password=a,this._tenantId=n}static _fromEmailAndPassword(c,a){return new V0(c,a,"password")}static _fromEmailAndCode(c,a,r=null){return new V0(c,a,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c;if(a!=null&&a.email&&(a!=null&&a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(c){var a;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((a=c._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const n=await we(c,r,"signInWithPassword");return fc(c,n)}else return fc(c,r).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await we(c,r,"signInWithPassword");return fc(c,t)}else return Promise.reject(n)});case"emailLink":return EJ(c,{email:this._email,oobCode:this._password});default:m1(c,"internal-error")}}async _linkToIdToken(c,a){switch(this.signInMethod){case"password":return AJ(c,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TJ(c,{idToken:a,email:this._email,oobCode:this._password});default:m1(c,"internal-error")}}_getReauthenticationResolver(c){return this._getIdTokenResponse(c)}}/**
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
 */async function $4(e,c){return U0(e,"POST","/v1/accounts:signInWithIdp",f4(e,c))}/**
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
 */const PJ="http://localhost";class n4 extends Jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(c){const a=new n4(c.providerId,c.signInMethod);return c.idToken||c.accessToken?(c.idToken&&(a.idToken=c.idToken),c.accessToken&&(a.accessToken=c.accessToken),c.nonce&&!c.pendingToken&&(a.nonce=c.nonce),c.pendingToken&&(a.pendingToken=c.pendingToken)):c.oauthToken&&c.oauthTokenSecret?(a.accessToken=c.oauthToken,a.secret=c.oauthTokenSecret):m1("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c,{providerId:r,signInMethod:n}=a,t=qr(a,["providerId","signInMethod"]);if(!r||!n)return null;const i=new n4(r,n);return i.idToken=t.idToken||void 0,i.accessToken=t.accessToken||void 0,i.secret=t.secret,i.nonce=t.nonce,i.pendingToken=t.pendingToken||null,i}_getIdTokenResponse(c){const a=this.buildRequest();return $4(c,a)}_linkToIdToken(c,a){const r=this.buildRequest();return r.idToken=a,$4(c,r)}_getReauthenticationResolver(c){const a=this.buildRequest();return a.autoCreate=!1,$4(c,a)}buildRequest(){const c={requestUri:PJ,returnSecureToken:!0};if(this.pendingToken)c.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),c.postBody=O0(a)}return c}}/**
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
 */function _J(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RJ(e){const c=b6(A6(e)).link,a=c?b6(A6(c)).deep_link_id:null,r=b6(A6(e)).deep_link_id;return(r?b6(A6(r)).link:null)||r||a||c||e}class Zr{constructor(c){var a,r,n,t,i,s;const o=b6(A6(c)),l=(a=o.apiKey)!==null&&a!==void 0?a:null,f=(r=o.oobCode)!==null&&r!==void 0?r:null,u=_J((n=o.mode)!==null&&n!==void 0?n:null);_(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(t=o.continueUrl)!==null&&t!==void 0?t:null,this.languageCode=(i=o.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(s=o.tenantId)!==null&&s!==void 0?s:null}static parseLink(c){const a=RJ(c);try{return new Zr(a)}catch{return null}}}/**
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
 */class s6{constructor(){this.providerId=s6.PROVIDER_ID}static credential(c,a){return V0._fromEmailAndPassword(c,a)}static credentialWithLink(c,a){const r=Zr.parseLink(a);return _(r,"argument-error"),V0._fromEmailAndCode(c,r.code,r.tenantId)}}s6.PROVIDER_ID="password";s6.EMAIL_PASSWORD_SIGN_IN_METHOD="password";s6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qv{constructor(c){this.providerId=c,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(c){this.defaultLanguageCode=c}setCustomParameters(c){return this.customParameters=c,this}getCustomParameters(){return this.customParameters}}/**
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
 */class W0 extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(c){return this.scopes.includes(c)||this.scopes.push(c),this}getScopes(){return[...this.scopes]}}/**
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
 */class s3 extends W0{constructor(){super("facebook.com")}static credential(c){return n4._fromParams({providerId:s3.PROVIDER_ID,signInMethod:s3.FACEBOOK_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return s3.credentialFromTaggedObject(c)}static credentialFromError(c){return s3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return s3.credential(c.oauthAccessToken)}catch{return null}}}s3.FACEBOOK_SIGN_IN_METHOD="facebook.com";s3.PROVIDER_ID="facebook.com";/**
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
 */class o3 extends W0{constructor(){super("google.com"),this.addScope("profile")}static credential(c,a){return n4._fromParams({providerId:o3.PROVIDER_ID,signInMethod:o3.GOOGLE_SIGN_IN_METHOD,idToken:c,accessToken:a})}static credentialFromResult(c){return o3.credentialFromTaggedObject(c)}static credentialFromError(c){return o3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthIdToken:a,oauthAccessToken:r}=c;if(!a&&!r)return null;try{return o3.credential(a,r)}catch{return null}}}o3.GOOGLE_SIGN_IN_METHOD="google.com";o3.PROVIDER_ID="google.com";/**
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
 */class l3 extends W0{constructor(){super("github.com")}static credential(c){return n4._fromParams({providerId:l3.PROVIDER_ID,signInMethod:l3.GITHUB_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return l3.credentialFromTaggedObject(c)}static credentialFromError(c){return l3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return l3.credential(c.oauthAccessToken)}catch{return null}}}l3.GITHUB_SIGN_IN_METHOD="github.com";l3.PROVIDER_ID="github.com";/**
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
 */class f3 extends W0{constructor(){super("twitter.com")}static credential(c,a){return n4._fromParams({providerId:f3.PROVIDER_ID,signInMethod:f3.TWITTER_SIGN_IN_METHOD,oauthToken:c,oauthTokenSecret:a})}static credentialFromResult(c){return f3.credentialFromTaggedObject(c)}static credentialFromError(c){return f3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthAccessToken:a,oauthTokenSecret:r}=c;if(!a||!r)return null;try{return f3.credential(a,r)}catch{return null}}}f3.TWITTER_SIGN_IN_METHOD="twitter.com";f3.PROVIDER_ID="twitter.com";/**
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
 */async function uc(e,c){return U0(e,"POST","/v1/accounts:signUp",f4(e,c))}/**
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
 */class t4{constructor(c){this.user=c.user,this.providerId=c.providerId,this._tokenResponse=c._tokenResponse,this.operationType=c.operationType}static async _fromIdTokenResponse(c,a,r,n=!1){const t=await Y3._fromIdTokenResponse(c,r,n),i=L9(r);return new t4({user:t,providerId:i,_tokenResponse:r,operationType:a})}static async _forOperation(c,a,r){await c._updateTokensIfNecessary(r,!0);const n=L9(r);return new t4({user:c,providerId:n,_tokenResponse:r,operationType:a})}}function L9(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class xe extends _3{constructor(c,a,r,n){var t;super(a.code,a.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,xe.prototype),this.customData={appName:c.name,tenantId:(t=c.tenantId)!==null&&t!==void 0?t:void 0,_serverResponse:a.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(c,a,r,n){return new xe(c,a,r,n)}}function Jv(e,c,a,r){return(c==="reauthenticate"?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(t=>{throw t.code==="auth/multi-factor-auth-required"?xe._fromErrorAndOperation(e,t,c,r):t})}async function IJ(e,c,a=!1){const r=await H0(e,c._linkToIdToken(e.auth,await e.getIdToken()),a);return t4._forOperation(e,"link",r)}/**
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
 */async function DJ(e,c,a=!1){const{auth:r}=e,n="reauthenticate";try{const t=await H0(e,Jv(r,n,c,e),a);_(t.idToken,r,"internal-error");const i=Xr(t.idToken);_(i,r,"internal-error");const{sub:s}=i;return _(e.uid===s,r,"user-mismatch"),t4._forOperation(e,n,t)}catch(t){throw(t==null?void 0:t.code)==="auth/user-not-found"&&m1(r,"user-mismatch"),t}}/**
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
 */async function Zv(e,c,a=!1){const r="signIn",n=await Jv(e,r,c),t=await t4._fromIdTokenResponse(e,r,n);return a||await e._updateCurrentUser(t.user),t}async function OJ(e,c){return Zv(d4(e),c)}/**
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
 */async function ez(e){const c=d4(e);c._getPasswordPolicyInternal()&&await c._updatePasswordPolicy()}async function FJ(e,c,a){var r;const n=d4(e),t={returnSecureToken:!0,email:c,password:a,clientType:"CLIENT_TYPE_WEB"};let i;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await we(n,t,"signUpPassword");i=uc(n,l)}else i=uc(n,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await we(n,t,"signUpPassword");return uc(n,f)}throw l});const s=await i.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ez(e),l}),o=await t4._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}function BJ(e,c,a){return OJ(R3(e),s6.credential(c,a)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ez(e),r})}function UJ(e,c,a,r){return R3(e).onIdTokenChanged(c,a,r)}function WJ(e,c,a){return R3(e).beforeAuthStateChanged(c,a)}function jJ(e){return R3(e).signOut()}const Se="__sak";/**
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
 */class cz{constructor(c,a){this.storageRetriever=c,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(Se,"1"),this.storage.removeItem(Se),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(c,a){return this.storage.setItem(c,JSON.stringify(a)),Promise.resolve()}_get(c){const a=this.storage.getItem(c);return Promise.resolve(a?JSON.parse(a):null)}_remove(c){return this.storage.removeItem(c),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $J(){const e=S2();return Qr(e)||g5(e)}const GJ=1e3,qJ=10;class az extends cz{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(c,a)=>this.onStorageEvent(c,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$J()&&mJ(),this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(c){for(const a of Object.keys(this.listeners)){const r=this.storage.getItem(a),n=this.localCache[a];r!==n&&c(a,n,r)}}onStorageEvent(c,a=!1){if(!c.key){this.forAllChangedKeys((i,s,o)=>{this.notifyListeners(i,o)});return}const r=c.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(c.newValue!==i)c.newValue!==null?this.storage.setItem(r,c.newValue):this.storage.removeItem(r);else if(this.localCache[r]===c.newValue&&!a)return}const n=()=>{const i=this.storage.getItem(r);!a&&this.localCache[r]===i||this.notifyListeners(r,i)},t=this.storage.getItem(r);hJ()&&t!==c.newValue&&c.newValue!==c.oldValue?setTimeout(n,qJ):n()}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const n of Array.from(r))n(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((c,a,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:c,oldValue:a,newValue:r}),!0)})},GJ)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(c,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[c]||(this.listeners[c]=new Set,this.localCache[c]=this.storage.getItem(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(c,a){await super._set(c,a),this.localCache[c]=JSON.stringify(a)}async _get(c){const a=await super._get(c);return this.localCache[c]=JSON.stringify(a),a}async _remove(c){await super._remove(c),delete this.localCache[c]}}az.type="LOCAL";const KJ=az;/**
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
 */class rz extends cz{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(c,a){}_removeListener(c,a){}}rz.type="SESSION";const nz=rz;/**
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
 */function YJ(e){return Promise.all(e.map(async c=>{try{return{fulfilled:!0,value:await c}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
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
 */class V5{constructor(c){this.eventTarget=c,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(c){const a=this.receivers.find(n=>n.isListeningto(c));if(a)return a;const r=new V5(c);return this.receivers.push(r),r}isListeningto(c){return this.eventTarget===c}async handleEvent(c){const a=c,{eventId:r,eventType:n,data:t}=a.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;a.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const s=Array.from(i).map(async l=>l(a.origin,t)),o=await YJ(s);a.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:o})}_subscribe(c,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[c]||(this.handlersMap[c]=new Set),this.handlersMap[c].add(a)}_unsubscribe(c,a){this.handlersMap[c]&&a&&this.handlersMap[c].delete(a),(!a||this.handlersMap[c].size===0)&&delete this.handlersMap[c],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}V5.receivers=[];/**
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
 */function en(e="",c=10){let a="";for(let r=0;r<c;r++)a+=Math.floor(Math.random()*10);return e+a}/**
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
 */class XJ{constructor(c){this.target=c,this.handlers=new Set}removeMessageHandler(c){c.messageChannel&&(c.messageChannel.port1.removeEventListener("message",c.onMessage),c.messageChannel.port1.close()),this.handlers.delete(c)}async _send(c,a,r=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let t,i;return new Promise((s,o)=>{const l=en("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},r);i={messageChannel:n,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),t=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(t),s(h.data.response);break;default:clearTimeout(f),clearTimeout(t),o(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:c,eventId:l,data:a},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function x1(){return window}function QJ(e){x1().location.href=e}/**
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
 */function tz(){return typeof x1().WorkerGlobalScope<"u"&&typeof x1().importScripts=="function"}async function JJ(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZJ(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function eZ(){return tz()?self:null}/**
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
 */const iz="firebaseLocalStorageDb",cZ=1,Ne="firebaseLocalStorage",sz="fbase_key";class j0{constructor(c){this.request=c}toPromise(){return new Promise((c,a)=>{this.request.addEventListener("success",()=>{c(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function M5(e,c){return e.transaction([Ne],c?"readwrite":"readonly").objectStore(Ne)}function aZ(){const e=indexedDB.deleteDatabase(iz);return new j0(e).toPromise()}function P7(){const e=indexedDB.open(iz,cZ);return new Promise((c,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ne,{keyPath:sz})}catch(n){a(n)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ne)?c(r):(r.close(),await aZ(),c(await P7()))})})}async function y9(e,c,a){const r=M5(e,!0).put({[sz]:c,value:a});return new j0(r).toPromise()}async function rZ(e,c){const a=M5(e,!1).get(c),r=await new j0(a).toPromise();return r===void 0?null:r.value}function w9(e,c){const a=M5(e,!0).delete(c);return new j0(a).toPromise()}const nZ=800,tZ=3;class oz{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await P7(),this.db)}async _withRetries(c){let a=0;for(;;)try{const r=await this._openDb();return await c(r)}catch(r){if(a++>tZ)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tz()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=V5._getInstance(eZ()),this.receiver._subscribe("keyChanged",async(c,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(c,a)=>["keyChanged"])}async initializeSender(){var c,a;if(this.activeServiceWorker=await JJ(),!this.activeServiceWorker)return;this.sender=new XJ(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((c=r[0])===null||c===void 0)&&c.fulfilled&&!((a=r[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(c){if(!(!this.sender||!this.activeServiceWorker||ZJ()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:c},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const c=await P7();return await y9(c,Se,"1"),await w9(c,Se),!0}catch{}return!1}async _withPendingWrite(c){this.pendingWrites++;try{await c()}finally{this.pendingWrites--}}async _set(c,a){return this._withPendingWrite(async()=>(await this._withRetries(r=>y9(r,c,a)),this.localCache[c]=a,this.notifyServiceWorker(c)))}async _get(c){const a=await this._withRetries(r=>rZ(r,c));return this.localCache[c]=a,a}async _remove(c){return this._withPendingWrite(async()=>(await this._withRetries(a=>w9(a,c)),delete this.localCache[c],this.notifyServiceWorker(c)))}async _poll(){const c=await this._withRetries(n=>{const t=M5(n,!1).getAll();return new j0(t).toPromise()});if(!c)return[];if(this.pendingWrites!==0)return[];const a=[],r=new Set;for(const{fbase_key:n,value:t}of c)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(t)&&(this.notifyListeners(n,t),a.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),a.push(n));return a}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const n of Array.from(r))n(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nZ)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(c,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[c]||(this.listeners[c]=new Set,this._get(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oz.type="LOCAL";const iZ=oz;new B0(3e4,6e4);/**
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
 */function sZ(e,c){return c?R1(c):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class cn extends Jr{constructor(c){super("custom","custom"),this.params=c}_getIdTokenResponse(c){return $4(c,this._buildIdpRequest())}_linkToIdToken(c,a){return $4(c,this._buildIdpRequest(a))}_getReauthenticationResolver(c){return $4(c,this._buildIdpRequest())}_buildIdpRequest(c){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return c&&(a.idToken=c),a}}function oZ(e){return Zv(e.auth,new cn(e),e.bypassAuthState)}function lZ(e){const{auth:c,user:a}=e;return _(a,c,"internal-error"),DJ(a,new cn(e),e.bypassAuthState)}async function fZ(e){const{auth:c,user:a}=e;return _(a,c,"internal-error"),IJ(a,new cn(e),e.bypassAuthState)}/**
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
 */class lz{constructor(c,a,r,n,t=!1){this.auth=c,this.resolver=r,this.user=n,this.bypassAuthState=t,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(c,a)=>{this.pendingPromise={resolve:c,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(c){const{urlResponse:a,sessionId:r,postBody:n,tenantId:t,error:i,type:s}=c;if(i){this.reject(i);return}const o={auth:this.auth,requestUri:a,sessionId:r,tenantId:t||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(l){this.reject(l)}}onError(c){this.reject(c)}getIdpTask(c){switch(c){case"signInViaPopup":case"signInViaRedirect":return oZ;case"linkViaPopup":case"linkViaRedirect":return fZ;case"reauthViaPopup":case"reauthViaRedirect":return lZ;default:m1(this.auth,"internal-error")}}resolve(c){$1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(c),this.unregisterAndCleanUp()}reject(c){$1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(c),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uZ=new B0(2e3,1e4);class P4 extends lz{constructor(c,a,r,n,t){super(c,a,n,t),this.provider=r,this.authWindow=null,this.pollId=null,P4.currentPopupAction&&P4.currentPopupAction.cancel(),P4.currentPopupAction=this}async executeNotNull(){const c=await this.execute();return _(c,this.auth,"internal-error"),c}async onExecution(){$1(this.filter.length===1,"Popup operations only handle one event");const c=en();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],c),this.authWindow.associatedEvent=c,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(w1(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var c;return((c=this.authWindow)===null||c===void 0?void 0:c.associatedEvent)||null}cancel(){this.reject(w1(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,P4.currentPopupAction=null}pollUserCancellation(){const c=()=>{var a,r;if(!((r=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(w1(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(c,uZ.get())};c()}}P4.currentPopupAction=null;/**
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
 */const dZ="pendingRedirect",U8=new Map;class hZ extends lz{constructor(c,a,r=!1){super(c,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,r),this.eventId=null}async execute(){let c=U8.get(this.auth._key());if(!c){try{const r=await mZ(this.resolver,this.auth)?await super.execute():null;c=()=>Promise.resolve(r)}catch(a){c=()=>Promise.reject(a)}U8.set(this.auth._key(),c)}return this.bypassAuthState||U8.set(this.auth._key(),()=>Promise.resolve(null)),c()}async onAuthEvent(c){if(c.type==="signInViaRedirect")return super.onAuthEvent(c);if(c.type==="unknown"){this.resolve(null);return}if(c.eventId){const a=await this.auth._redirectUserForId(c.eventId);if(a)return this.user=a,super.onAuthEvent(c);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mZ(e,c){const a=zZ(c),r=vZ(e);if(!await r._isAvailable())return!1;const n=await r._get(a)==="true";return await r._remove(a),n}function pZ(e,c){U8.set(e._key(),c)}function vZ(e){return R1(e._redirectPersistence)}function zZ(e){return B8(dZ,e.config.apiKey,e.name)}async function HZ(e,c,a=!1){const r=d4(e),n=sZ(r,c),i=await new hZ(r,n,a).execute();return i&&!a&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,c)),i}/**
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
 */const gZ=10*60*1e3;class VZ{constructor(c){this.auth=c,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(c){this.consumers.add(c),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,c)&&(this.sendToConsumer(this.queuedRedirectEvent,c),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(c){this.consumers.delete(c)}onEvent(c){if(this.hasEventBeenHandled(c))return!1;let a=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(c,r)&&(a=!0,this.sendToConsumer(c,r),this.saveEventToCache(c))}),this.hasHandledPotentialRedirect||!MZ(c)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=c,a=!0)),a}sendToConsumer(c,a){var r;if(c.error&&!fz(c)){const n=((r=c.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";a.onError(w1(this.auth,n))}else a.onAuthEvent(c)}isEventForConsumer(c,a){const r=a.eventId===null||!!c.eventId&&c.eventId===a.eventId;return a.filter.includes(c.type)&&r}hasEventBeenHandled(c){return Date.now()-this.lastProcessedEventTime>=gZ&&this.cachedEventUids.clear(),this.cachedEventUids.has(x9(c))}saveEventToCache(c){this.cachedEventUids.add(x9(c)),this.lastProcessedEventTime=Date.now()}}function x9(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(c=>c).join("-")}function fz({type:e,error:c}){return e==="unknown"&&(c==null?void 0:c.code)==="auth/no-auth-event"}function MZ(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fz(e);default:return!1}}/**
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
 */async function CZ(e,c={}){return u4(e,"GET","/v1/projects",c)}/**
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
 */const LZ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yZ=/^https?/;async function wZ(e){if(e.config.emulator)return;const{authorizedDomains:c}=await CZ(e);for(const a of c)try{if(xZ(a))return}catch{}m1(e,"unauthorized-domain")}function xZ(e){const c=T7(),{protocol:a,hostname:r}=new URL(c);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&r===""?a==="chrome-extension:"&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):a==="chrome-extension:"&&i.hostname===r}if(!yZ.test(a))return!1;if(LZ.test(e))return r===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}/**
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
 */const SZ=new B0(3e4,6e4);function S9(){const e=x1().___jsl;if(e!=null&&e.H){for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}}function NZ(e){return new Promise((c,a)=>{var r,n,t;function i(){S9(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{S9(),a(w1(e,"network-request-failed"))},timeout:SZ.get()})}if(!((n=(r=x1().gapi)===null||r===void 0?void 0:r.iframes)===null||n===void 0)&&n.Iframe)c(gapi.iframes.getContext());else if(!((t=x1().gapi)===null||t===void 0)&&t.load)i();else{const s=MJ("iframefcb");return x1()[s]=()=>{gapi.load?i():a(w1(e,"network-request-failed"))},Yv(`https://apis.google.com/js/api.js?onload=${s}`).catch(o=>a(o))}}).catch(c=>{throw W8=null,c})}let W8=null;function kZ(e){return W8=W8||NZ(e),W8}/**
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
 */const bZ=new B0(5e3,15e3),AZ="__/auth/iframe",EZ="emulator/auth/iframe",TZ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PZ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _Z(e){const c=e.config;_(c.authDomain,e,"auth-domain-config-required");const a=c.emulator?Yr(c,EZ):`https://${e.config.authDomain}/${AZ}`,r={apiKey:c.apiKey,appName:e.name,v:F0},n=PZ.get(e.config.apiHost);n&&(r.eid=n);const t=e._getFrameworks();return t.length&&(r.fw=t.join(",")),`${a}?${O0(r).slice(1)}`}async function RZ(e){const c=await kZ(e),a=x1().gapi;return _(a,e,"internal-error"),c.open({where:document.body,url:_Z(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TZ,dontclear:!0},r=>new Promise(async(n,t)=>{await r.restyle({setHideOnLeave:!1});const i=w1(e,"network-request-failed"),s=x1().setTimeout(()=>{t(i)},bZ.get());function o(){x1().clearTimeout(s),n(r)}r.ping(o).then(o,()=>{t(i)})}))}/**
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
 */const IZ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DZ=500,OZ=600,FZ="_blank",BZ="http://localhost";class N9{constructor(c){this.window=c,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UZ(e,c,a,r=DZ,n=OZ){const t=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const o=Object.assign(Object.assign({},IZ),{width:r.toString(),height:n.toString(),top:t,left:i}),l=S2().toLowerCase();a&&(s=Uv(l)?FZ:a),Bv(l)&&(c=c||BZ,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[v,V])=>`${h}${v}=${V},`,"");if(dJ(l)&&s!=="_self")return WZ(c||"",s),new N9(null);const u=window.open(c||"",s,f);_(u,e,"popup-blocked");try{u.focus()}catch{}return new N9(u)}function WZ(e,c){const a=document.createElement("a");a.href=e,a.target=c;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}/**
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
 */const jZ="__/auth/handler",$Z="emulator/auth/handler",GZ=encodeURIComponent("fac");async function k9(e,c,a,r,n,t){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:r,v:F0,eventId:n};if(c instanceof Qv){c.setDefaultLanguage(e.languageCode),i.providerId=c.providerId||"",_X(c.getCustomParameters())||(i.customParameters=JSON.stringify(c.getCustomParameters()));for(const[f,u]of Object.entries(t||{}))i[f]=u}if(c instanceof W0){const f=c.getScopes().filter(u=>u!=="");f.length>0&&(i.scopes=f.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const f of Object.keys(s))s[f]===void 0&&delete s[f];const o=await e._getAppCheckToken(),l=o?`#${GZ}=${encodeURIComponent(o)}`:"";return`${qZ(e)}?${O0(s).slice(1)}${l}`}function qZ({config:e}){return e.emulator?Yr(e,$Z):`https://${e.authDomain}/${jZ}`}/**
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
 */const dc="webStorageSupport";class KZ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nz,this._completeRedirectFn=HZ,this._overrideRedirectResult=pZ}async _openPopup(c,a,r,n){var t;$1((t=this.eventManagers[c._key()])===null||t===void 0?void 0:t.manager,"_initialize() not called before _openPopup()");const i=await k9(c,a,r,T7(),n);return UZ(c,i,en())}async _openRedirect(c,a,r,n){await this._originValidation(c);const t=await k9(c,a,r,T7(),n);return QJ(t),new Promise(()=>{})}_initialize(c){const a=c._key();if(this.eventManagers[a]){const{manager:n,promise:t}=this.eventManagers[a];return n?Promise.resolve(n):($1(t,"If manager is not set, promise should be"),t)}const r=this.initAndGetManager(c);return this.eventManagers[a]={promise:r},r.catch(()=>{delete this.eventManagers[a]}),r}async initAndGetManager(c){const a=await RZ(c),r=new VZ(c);return a.register("authEvent",n=>(_(n==null?void 0:n.authEvent,c,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[c._key()]={manager:r},this.iframes[c._key()]=a,r}_isIframeWebStorageSupported(c,a){this.iframes[c._key()].send(dc,{type:dc},n=>{var t;const i=(t=n==null?void 0:n[0])===null||t===void 0?void 0:t[dc];i!==void 0&&a(!!i),m1(c,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(c){const a=c._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=wZ(c)),this.originValidationPromises[a]}get _shouldInitProactively(){return qv()||Qr()||g5()}}const YZ=KZ;var b9="@firebase/auth",A9="1.3.0";/**
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
 */class XZ{constructor(c){this.auth=c,this.internalListeners=new Map}getUid(){var c;return this.assertAuthConfigured(),((c=this.auth.currentUser)===null||c===void 0?void 0:c.uid)||null}async getToken(c){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(c)}:null}addAuthTokenListener(c){if(this.assertAuthConfigured(),this.internalListeners.has(c))return;const a=this.auth.onIdTokenChanged(r=>{c((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(c,a),this.updateProactiveRefresh()}removeAuthTokenListener(c){this.assertAuthConfigured();const a=this.internalListeners.get(c);a&&(this.internalListeners.delete(c),a(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QZ(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JZ(e){v0(new c6("auth",(c,{options:a})=>{const r=c.getProvider("app").getImmediate(),n=c.getProvider("heartbeat"),t=c.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=r.options;_(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(e)},l=new gJ(r,n,t,o);return SJ(l,a),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((c,a,r)=>{c.getProvider("auth-internal").initialize()})),v0(new c6("auth-internal",c=>{const a=d4(c.getProvider("auth").getImmediate());return(r=>new XZ(r))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),W4(b9,A9,QZ(e)),W4(b9,A9,"esm2017")}/**
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
 */const ZZ=5*60,e22=xv("authIdTokenMaxAge")||ZZ;let E9=null;const c22=e=>async c=>{const a=c&&await c.getIdTokenResult(),r=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(r&&r>e22)return;const n=a==null?void 0:a.token;E9!==n&&(E9=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function a22(e=_Q()){const c=bv(e,"auth");if(c.isInitialized())return c.getImmediate();const a=xJ(e,{popupRedirectResolver:YZ,persistence:[iZ,KJ,nz]}),r=xv("authTokenSyncURL");if(r){const t=c22(r);WJ(a,t,()=>t(a.currentUser)),UJ(a,i=>t(i))}const n=yX("auth");return n&&NJ(a,`http://${n}`),a}JZ("Browser");var r22="firebase",n22="10.4.0";/**
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
 */W4(r22,n22,"app");const t22={apiKey:"AIzaSyBenVGvDBQyUYRpbr_gjRLageCYPnc9HWk",authDomain:"img-drag-drop.firebaseapp.com",projectId:"img-drag-drop",storageBucket:"img-drag-drop.appspot.com",messagingSenderId:"1089507106902",appId:"1:1089507106902:web:d618cd9c657459d39bdbf7"},i22=Av(t22),_7=a22(i22);var uz={exports:{}},s22="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o22=s22,l22=o22;function dz(){}function hz(){}hz.resetWarningCache=dz;var f22=function(){function e(r,n,t,i,s,o){if(o!==l22){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function c(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:c,element:e,elementType:e,instanceOf:c,node:e,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:hz,resetWarningCache:dz};return a.PropTypes=a,a};uz.exports=f22();var u22=uz.exports;const I=q9(u22);function T9(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);c&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function m3(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?T9(Object(a),!0).forEach(function(r){_4(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T9(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},ke(e)}function _4(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function d22(e,c){if(e==null)return{};var a={},r=Object.keys(e),n,t;for(t=0;t<r.length;t++)n=r[t],!(c.indexOf(n)>=0)&&(a[n]=e[n]);return a}function h22(e,c){if(e==null)return{};var a=d22(e,c),r,n;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],!(c.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function R7(e){return m22(e)||p22(e)||v22(e)||z22()}function m22(e){if(Array.isArray(e))return I7(e)}function p22(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function v22(e,c){if(e){if(typeof e=="string")return I7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I7(e,c)}}function I7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,r=new Array(c);a<c;a++)r[a]=e[a];return r}function z22(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H22(e){var c,a=e.beat,r=e.fade,n=e.beatFade,t=e.bounce,i=e.shake,s=e.flash,o=e.spin,l=e.spinPulse,f=e.spinReverse,u=e.pulse,h=e.fixedWidth,v=e.inverse,V=e.border,H=e.listItem,C=e.flip,m=e.size,d=e.rotation,p=e.pull,g=(c={"fa-beat":a,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":t,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":h,"fa-inverse":v,"fa-border":V,"fa-li":H,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},_4(c,"fa-".concat(m),typeof m<"u"&&m!==null),_4(c,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),_4(c,"fa-pull-".concat(p),typeof p<"u"&&p!==null),_4(c,"fa-swap-opacity",e.swapOpacity),c);return Object.keys(g).map(function(M){return g[M]?M:null}).filter(function(M){return M})}function g22(e){return e=e-0,e===e}function mz(e){return g22(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(c,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var V22=["style"];function M22(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C22(e){return e.split(";").map(function(c){return c.trim()}).filter(function(c){return c}).reduce(function(c,a){var r=a.indexOf(":"),n=mz(a.slice(0,r)),t=a.slice(r+1).trim();return n.startsWith("webkit")?c[M22(n)]=t:c[n]=t,c},{})}function pz(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var r=(c.children||[]).map(function(o){return pz(e,o)}),n=Object.keys(c.attributes||{}).reduce(function(o,l){var f=c.attributes[l];switch(l){case"class":o.attrs.className=f,delete c.attributes.class;break;case"style":o.attrs.style=C22(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?o.attrs[l.toLowerCase()]=f:o.attrs[mz(l)]=f}return o},{attrs:{}}),t=a.style,i=t===void 0?{}:t,s=h22(a,V22);return n.attrs.style=m3(m3({},n.attrs.style),i),e.apply(void 0,[c.tag,m3(m3({},n.attrs),s)].concat(R7(r)))}var vz=!1;try{vz=!0}catch{}function L22(){if(!vz&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function P9(e){if(e&&ke(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(L7.icon)return L7.icon(e);if(e===null)return null;if(e&&ke(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function hc(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?_4({},e,c):{}}var A3=m2.forwardRef(function(e,c){var a=e.icon,r=e.mask,n=e.symbol,t=e.className,i=e.title,s=e.titleId,o=e.maskId,l=P9(a),f=hc("classes",[].concat(R7(H22(e)),R7(t.split(" ")))),u=hc("transform",typeof e.transform=="string"?L7.transform(e.transform):e.transform),h=hc("mask",P9(r)),v=YM(l,m3(m3(m3(m3({},f),u),h),{},{symbol:n,title:i,titleId:s,maskId:o}));if(!v)return L22("Could not find icon",l),null;var V=v.abstract,H={ref:c};return Object.keys(e).forEach(function(C){A3.defaultProps.hasOwnProperty(C)||(H[C]=e[C])}),y22(V[0],H)});A3.displayName="FontAwesomeIcon";A3.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};A3.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y22=pz.bind(null,m2.createElement);const w22=()=>{const e=jr(),[c,a]=z.useState(""),[r,n]=z.useState(""),[t,i]=z.useState(!1),s=(o,l)=>{o.preventDefault(),l=="signup"?FJ(_7,c,r).then(f=>{const u=f.user;e("/home"),console.log(u),i(!0)}).catch(f=>{const u=f.code,h=f.message;console.log(u,h),alert(h)}):BJ(_7,c,r).then(f=>{const u=f.user;e("/home"),console.log(u)}).catch(f=>{const u=f.code,h=f.message;console.log(u,h),alert(h)})};return T.jsx(T.Fragment,{children:T.jsx("main",{className:"login-pg",children:T.jsxs("form",{action:"",onSubmit:o=>s(o,t?"login":"signup"),children:[T.jsxs("h3",{children:[t?"Login":"Sign Up"," Form"]}),T.jsxs("div",{className:"input-wrapper",children:[T.jsx(A3,{icon:"fa-solid fa-user"}),T.jsx("input",{type:"email",name:"",id:"email",placeholder:"Email Id",onChange:o=>a(o.target.value),required:!0})]}),T.jsxs("div",{className:"input-wrapper",children:[T.jsx(A3,{icon:"fa-solid fa-lock"}),T.jsx("input",{type:"password",name:"",id:"password",placeholder:"Password",onChange:o=>n(o.target.value),required:!0})]}),T.jsx("button",{type:"submit",children:t?"Login":"Sign Up"}),T.jsx(pX,{style:{color:"#f2f2f2",fontWeight:"600",fontSize:"1.1rem"},onClick:()=>i(!0),children:"Login"})]})})})};function x22(){for(var e=arguments.length,c=new Array(e),a=0;a<e;a++)c[a]=arguments[a];return z.useMemo(()=>r=>{c.forEach(n=>n(r))},c)}const C5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function o6(e){const c=Object.prototype.toString.call(e);return c==="[object Window]"||c==="[object global]"}function an(e){return"nodeType"in e}function O2(e){var c,a;return e?o6(e)?e:an(e)&&(c=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?c:window:window}function rn(e){const{Document:c}=O2(e);return e instanceof c}function $0(e){return o6(e)?!1:e instanceof O2(e).HTMLElement}function S22(e){return e instanceof O2(e).SVGElement}function l6(e){return e?o6(e)?e.document:an(e)?rn(e)?e:$0(e)?e.ownerDocument:document:document:document}const p1=C5?z.useLayoutEffect:z.useEffect;function nn(e){const c=z.useRef(e);return p1(()=>{c.current=e}),z.useCallback(function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return c.current==null?void 0:c.current(...r)},[])}function N22(){const e=z.useRef(null),c=z.useCallback((r,n)=>{e.current=setInterval(r,n)},[]),a=z.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[c,a]}function M0(e,c){c===void 0&&(c=[e]);const a=z.useRef(e);return p1(()=>{a.current!==e&&(a.current=e)},c),a}function G0(e,c){const a=z.useRef();return z.useMemo(()=>{const r=e(a.current);return a.current=r,r},[...c])}function be(e){const c=nn(e),a=z.useRef(null),r=z.useCallback(n=>{n!==a.current&&(c==null||c(n,a.current)),a.current=n},[]);return[a,r]}function D7(e){const c=z.useRef();return z.useEffect(()=>{c.current=e},[e]),c.current}let mc={};function q0(e,c){return z.useMemo(()=>{if(c)return c;const a=mc[e]==null?0:mc[e]+1;return mc[e]=a,e+"-"+a},[e,c])}function zz(e){return function(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];return r.reduce((t,i)=>{const s=Object.entries(i);for(const[o,l]of s){const f=t[o];f!=null&&(t[o]=f+e*l)}return t},{...c})}}const G4=zz(1),Ae=zz(-1);function k22(e){return"clientX"in e&&"clientY"in e}function tn(e){if(!e)return!1;const{KeyboardEvent:c}=O2(e.target);return c&&e instanceof c}function b22(e){if(!e)return!1;const{TouchEvent:c}=O2(e.target);return c&&e instanceof c}function O7(e){if(b22(e)){if(e.touches&&e.touches.length){const{clientX:c,clientY:a}=e.touches[0];return{x:c,y:a}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:c,clientY:a}=e.changedTouches[0];return{x:c,y:a}}}return k22(e)?{x:e.clientX,y:e.clientY}:null}const C0=Object.freeze({Translate:{toString(e){if(!e)return;const{x:c,y:a}=e;return"translate3d("+(c?Math.round(c):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:c,scaleY:a}=e;return"scaleX("+c+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[C0.Translate.toString(e),C0.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:c,duration:a,easing:r}=e;return c+" "+a+"ms "+r}}}),_9="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function A22(e){return e.matches(_9)?e:e.querySelector(_9)}const E22={display:"none"};function T22(e){let{id:c,value:a}=e;return m2.createElement("div",{id:c,style:E22},a)}const P22={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function _22(e){let{id:c,announcement:a}=e;return m2.createElement("div",{id:c,style:P22,role:"status","aria-live":"assertive","aria-atomic":!0},a)}function R22(){const[e,c]=z.useState("");return{announce:z.useCallback(r=>{r!=null&&c(r)},[]),announcement:e}}const Hz=z.createContext(null);function I22(e){const c=z.useContext(Hz);z.useEffect(()=>{if(!c)throw new Error("useDndMonitor must be used within a children of <DndContext>");return c(e)},[e,c])}function D22(){const[e]=z.useState(()=>new Set),c=z.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[z.useCallback(r=>{let{type:n,event:t}=r;e.forEach(i=>{var s;return(s=i[n])==null?void 0:s.call(i,t)})},[e]),c]}const O22={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},F22={onDragStart(e){let{active:c}=e;return"Picked up draggable item "+c.id+"."},onDragOver(e){let{active:c,over:a}=e;return a?"Draggable item "+c.id+" was moved over droppable area "+a.id+".":"Draggable item "+c.id+" is no longer over a droppable area."},onDragEnd(e){let{active:c,over:a}=e;return a?"Draggable item "+c.id+" was dropped over droppable area "+a.id:"Draggable item "+c.id+" was dropped."},onDragCancel(e){let{active:c}=e;return"Dragging was cancelled. Draggable item "+c.id+" was dropped."}};function B22(e){let{announcements:c=F22,container:a,hiddenTextDescribedById:r,screenReaderInstructions:n=O22}=e;const{announce:t,announcement:i}=R22(),s=q0("DndLiveRegion"),[o,l]=z.useState(!1);if(z.useEffect(()=>{l(!0)},[]),I22(z.useMemo(()=>({onDragStart(u){let{active:h}=u;t(c.onDragStart({active:h}))},onDragMove(u){let{active:h,over:v}=u;c.onDragMove&&t(c.onDragMove({active:h,over:v}))},onDragOver(u){let{active:h,over:v}=u;t(c.onDragOver({active:h,over:v}))},onDragEnd(u){let{active:h,over:v}=u;t(c.onDragEnd({active:h,over:v}))},onDragCancel(u){let{active:h,over:v}=u;t(c.onDragCancel({active:h,over:v}))}}),[t,c])),!o)return null;const f=m2.createElement(m2.Fragment,null,m2.createElement(T22,{id:r,value:n.draggable}),m2.createElement(_22,{id:s,announcement:i}));return a?B3.createPortal(f,a):f}var l2;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(l2||(l2={}));function Ee(){}const v1=Object.freeze({x:0,y:0});function U22(e,c){return Math.sqrt(Math.pow(e.x-c.x,2)+Math.pow(e.y-c.y,2))}function W22(e,c){let{data:{value:a}}=e,{data:{value:r}}=c;return a-r}function j22(e,c){let{data:{value:a}}=e,{data:{value:r}}=c;return r-a}function $22(e,c){if(!e||e.length===0)return null;const[a]=e;return c?a[c]:a}function R9(e,c,a){return c===void 0&&(c=e.left),a===void 0&&(a=e.top),{x:c+e.width*.5,y:a+e.height*.5}}const G22=e=>{let{collisionRect:c,droppableRects:a,droppableContainers:r}=e;const n=R9(c,c.left,c.top),t=[];for(const i of r){const{id:s}=i,o=a.get(s);if(o){const l=U22(R9(o),n);t.push({id:s,data:{droppableContainer:i,value:l}})}}return t.sort(W22)};function q22(e,c){const a=Math.max(c.top,e.top),r=Math.max(c.left,e.left),n=Math.min(c.left+c.width,e.left+e.width),t=Math.min(c.top+c.height,e.top+e.height),i=n-r,s=t-a;if(r<n&&a<t){const o=c.width*c.height,l=e.width*e.height,f=i*s,u=f/(o+l-f);return Number(u.toFixed(4))}return 0}const K22=e=>{let{collisionRect:c,droppableRects:a,droppableContainers:r}=e;const n=[];for(const t of r){const{id:i}=t,s=a.get(i);if(s){const o=q22(s,c);o>0&&n.push({id:i,data:{droppableContainer:t,value:o}})}}return n.sort(j22)};function Y22(e,c,a){return{...e,scaleX:c&&a?c.width/a.width:1,scaleY:c&&a?c.height/a.height:1}}function gz(e,c){return e&&c?{x:e.left-c.left,y:e.top-c.top}:v1}function X22(e){return function(a){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return n.reduce((i,s)=>({...i,top:i.top+e*s.y,bottom:i.bottom+e*s.y,left:i.left+e*s.x,right:i.right+e*s.x}),{...a})}}const Q22=X22(1);function J22(e){if(e.startsWith("matrix3d(")){const c=e.slice(9,-1).split(/, /);return{x:+c[12],y:+c[13],scaleX:+c[0],scaleY:+c[5]}}else if(e.startsWith("matrix(")){const c=e.slice(7,-1).split(/, /);return{x:+c[4],y:+c[5],scaleX:+c[0],scaleY:+c[3]}}return null}function Z22(e,c,a){const r=J22(c);if(!r)return e;const{scaleX:n,scaleY:t,x:i,y:s}=r,o=e.left-i-(1-n)*parseFloat(a),l=e.top-s-(1-t)*parseFloat(a.slice(a.indexOf(" ")+1)),f=n?e.width/n:e.width,u=t?e.height/t:e.height;return{width:f,height:u,top:l,right:o+f,bottom:l+u,left:o}}const e12={ignoreTransform:!1};function f6(e,c){c===void 0&&(c=e12);let a=e.getBoundingClientRect();if(c.ignoreTransform){const{transform:l,transformOrigin:f}=O2(e).getComputedStyle(e);l&&(a=Z22(a,l,f))}const{top:r,left:n,width:t,height:i,bottom:s,right:o}=a;return{top:r,left:n,width:t,height:i,bottom:s,right:o}}function I9(e){return f6(e,{ignoreTransform:!0})}function c12(e){const c=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:c,bottom:a,width:c,height:a}}function a12(e,c){return c===void 0&&(c=O2(e).getComputedStyle(e)),c.position==="fixed"}function r12(e,c){c===void 0&&(c=O2(e).getComputedStyle(e));const a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(n=>{const t=c[n];return typeof t=="string"?a.test(t):!1})}function sn(e,c){const a=[];function r(n){if(c!=null&&a.length>=c||!n)return a;if(rn(n)&&n.scrollingElement!=null&&!a.includes(n.scrollingElement))return a.push(n.scrollingElement),a;if(!$0(n)||S22(n)||a.includes(n))return a;const t=O2(e).getComputedStyle(n);return n!==e&&r12(n,t)&&a.push(n),a12(n,t)?a:r(n.parentNode)}return e?r(e):a}function Vz(e){const[c]=sn(e,1);return c??null}function pc(e){return!C5||!e?null:o6(e)?e:an(e)?rn(e)||e===l6(e).scrollingElement?window:$0(e)?e:null:null}function Mz(e){return o6(e)?e.scrollX:e.scrollLeft}function Cz(e){return o6(e)?e.scrollY:e.scrollTop}function F7(e){return{x:Mz(e),y:Cz(e)}}var h2;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(h2||(h2={}));function Lz(e){return!C5||!e?!1:e===document.scrollingElement}function yz(e){const c={x:0,y:0},a=Lz(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},n=e.scrollTop<=c.y,t=e.scrollLeft<=c.x,i=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:n,isLeft:t,isBottom:i,isRight:s,maxScroll:r,minScroll:c}}const n12={x:.2,y:.2};function t12(e,c,a,r,n){let{top:t,left:i,right:s,bottom:o}=a;r===void 0&&(r=10),n===void 0&&(n=n12);const{isTop:l,isBottom:f,isLeft:u,isRight:h}=yz(e),v={x:0,y:0},V={x:0,y:0},H={height:c.height*n.y,width:c.width*n.x};return!l&&t<=c.top+H.height?(v.y=h2.Backward,V.y=r*Math.abs((c.top+H.height-t)/H.height)):!f&&o>=c.bottom-H.height&&(v.y=h2.Forward,V.y=r*Math.abs((c.bottom-H.height-o)/H.height)),!h&&s>=c.right-H.width?(v.x=h2.Forward,V.x=r*Math.abs((c.right-H.width-s)/H.width)):!u&&i<=c.left+H.width&&(v.x=h2.Backward,V.x=r*Math.abs((c.left+H.width-i)/H.width)),{direction:v,speed:V}}function i12(e){if(e===document.scrollingElement){const{innerWidth:t,innerHeight:i}=window;return{top:0,left:0,right:t,bottom:i,width:t,height:i}}const{top:c,left:a,right:r,bottom:n}=e.getBoundingClientRect();return{top:c,left:a,right:r,bottom:n,width:e.clientWidth,height:e.clientHeight}}function wz(e){return e.reduce((c,a)=>G4(c,F7(a)),v1)}function s12(e){return e.reduce((c,a)=>c+Mz(a),0)}function o12(e){return e.reduce((c,a)=>c+Cz(a),0)}function l12(e,c){if(c===void 0&&(c=f6),!e)return;const{top:a,left:r,bottom:n,right:t}=c(e);Vz(e)&&(n<=0||t<=0||a>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const f12=[["x",["left","right"],s12],["y",["top","bottom"],o12]];class on{constructor(c,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=sn(a),n=wz(r);this.rect={...c},this.width=c.width,this.height=c.height;for(const[t,i,s]of f12)for(const o of i)Object.defineProperty(this,o,{get:()=>{const l=s(r),f=n[t]-l;return this.rect[o]+f},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class j6{constructor(c){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...a)})},this.target=c}add(c,a,r){var n;(n=this.target)==null||n.addEventListener(c,a,r),this.listeners.push([c,a,r])}}function u12(e){const{EventTarget:c}=O2(e);return e instanceof c?e:l6(e)}function vc(e,c){const a=Math.abs(e.x),r=Math.abs(e.y);return typeof c=="number"?Math.sqrt(a**2+r**2)>c:"x"in c&&"y"in c?a>c.x&&r>c.y:"x"in c?a>c.x:"y"in c?r>c.y:!1}var Q2;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Q2||(Q2={}));function D9(e){e.preventDefault()}function d12(e){e.stopPropagation()}var U;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(U||(U={}));const xz={start:[U.Space,U.Enter],cancel:[U.Esc],end:[U.Space,U.Enter]},h12=(e,c)=>{let{currentCoordinates:a}=c;switch(e.code){case U.Right:return{...a,x:a.x+25};case U.Left:return{...a,x:a.x-25};case U.Down:return{...a,y:a.y+25};case U.Up:return{...a,y:a.y-25}}};class Sz{constructor(c){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=c;const{event:{target:a}}=c;this.props=c,this.listeners=new j6(l6(a)),this.windowListeners=new j6(O2(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Q2.Resize,this.handleCancel),this.windowListeners.add(Q2.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Q2.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:c,onStart:a}=this.props,r=c.node.current;r&&l12(r),a(v1)}handleKeyDown(c){if(tn(c)){const{active:a,context:r,options:n}=this.props,{keyboardCodes:t=xz,coordinateGetter:i=h12,scrollBehavior:s="smooth"}=n,{code:o}=c;if(t.end.includes(o)){this.handleEnd(c);return}if(t.cancel.includes(o)){this.handleCancel(c);return}const{collisionRect:l}=r.current,f=l?{x:l.left,y:l.top}:v1;this.referenceCoordinates||(this.referenceCoordinates=f);const u=i(c,{active:a,context:r.current,currentCoordinates:f});if(u){const h=Ae(u,f),v={x:0,y:0},{scrollableAncestors:V}=r.current;for(const H of V){const C=c.code,{isTop:m,isRight:d,isLeft:p,isBottom:g,maxScroll:M,minScroll:y}=yz(H),L=i12(H),x={x:Math.min(C===U.Right?L.right-L.width/2:L.right,Math.max(C===U.Right?L.left:L.left+L.width/2,u.x)),y:Math.min(C===U.Down?L.bottom-L.height/2:L.bottom,Math.max(C===U.Down?L.top:L.top+L.height/2,u.y))},E=C===U.Right&&!d||C===U.Left&&!p,A=C===U.Down&&!g||C===U.Up&&!m;if(E&&x.x!==u.x){const D=H.scrollLeft+h.x,v2=C===U.Right&&D<=M.x||C===U.Left&&D>=y.x;if(v2&&!h.y){H.scrollTo({left:D,behavior:s});return}v2?v.x=H.scrollLeft-D:v.x=C===U.Right?H.scrollLeft-M.x:H.scrollLeft-y.x,v.x&&H.scrollBy({left:-v.x,behavior:s});break}else if(A&&x.y!==u.y){const D=H.scrollTop+h.y,v2=C===U.Down&&D<=M.y||C===U.Up&&D>=y.y;if(v2&&!h.x){H.scrollTo({top:D,behavior:s});return}v2?v.y=H.scrollTop-D:v.y=C===U.Down?H.scrollTop-M.y:H.scrollTop-y.y,v.y&&H.scrollBy({top:-v.y,behavior:s});break}}this.handleMove(c,G4(Ae(u,this.referenceCoordinates),v))}}}handleMove(c,a){const{onMove:r}=this.props;c.preventDefault(),r(a)}handleEnd(c){const{onEnd:a}=this.props;c.preventDefault(),this.detach(),a()}handleCancel(c){const{onCancel:a}=this.props;c.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Sz.activators=[{eventName:"onKeyDown",handler:(e,c,a)=>{let{keyboardCodes:r=xz,onActivation:n}=c,{active:t}=a;const{code:i}=e.nativeEvent;if(r.start.includes(i)){const s=t.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),n==null||n({event:e.nativeEvent}),!0)}return!1}}];function O9(e){return!!(e&&"distance"in e)}function F9(e){return!!(e&&"delay"in e)}class ln{constructor(c,a,r){var n;r===void 0&&(r=u12(c.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=c,this.events=a;const{event:t}=c,{target:i}=t;this.props=c,this.events=a,this.document=l6(i),this.documentListeners=new j6(this.document),this.listeners=new j6(r),this.windowListeners=new j6(O2(i)),this.initialCoordinates=(n=O7(t))!=null?n:v1,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:c,props:{options:{activationConstraint:a}}}=this;if(this.listeners.add(c.move.name,this.handleMove,{passive:!1}),this.listeners.add(c.end.name,this.handleEnd),this.windowListeners.add(Q2.Resize,this.handleCancel),this.windowListeners.add(Q2.DragStart,D9),this.windowListeners.add(Q2.VisibilityChange,this.handleCancel),this.windowListeners.add(Q2.ContextMenu,D9),this.documentListeners.add(Q2.Keydown,this.handleKeydown),a){if(O9(a))return;if(F9(a)){this.timeoutId=setTimeout(this.handleStart,a.delay);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:c}=this,{onStart:a}=this.props;c&&(this.activated=!0,this.documentListeners.add(Q2.Click,d12,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Q2.SelectionChange,this.removeTextSelection),a(c))}handleMove(c){var a;const{activated:r,initialCoordinates:n,props:t}=this,{onMove:i,options:{activationConstraint:s}}=t;if(!n)return;const o=(a=O7(c))!=null?a:v1,l=Ae(n,o);if(!r&&s){if(F9(s))return vc(l,s.tolerance)?this.handleCancel():void 0;if(O9(s))return s.tolerance!=null&&vc(l,s.tolerance)?this.handleCancel():vc(l,s.distance)?this.handleStart():void 0}c.cancelable&&c.preventDefault(),i(o)}handleEnd(){const{onEnd:c}=this.props;this.detach(),c()}handleCancel(){const{onCancel:c}=this.props;this.detach(),c()}handleKeydown(c){c.code===U.Esc&&this.handleCancel()}removeTextSelection(){var c;(c=this.document.getSelection())==null||c.removeAllRanges()}}const m12={move:{name:"pointermove"},end:{name:"pointerup"}};class Nz extends ln{constructor(c){const{event:a}=c,r=l6(a.target);super(c,m12,r)}}Nz.activators=[{eventName:"onPointerDown",handler:(e,c)=>{let{nativeEvent:a}=e,{onActivation:r}=c;return!a.isPrimary||a.button!==0?!1:(r==null||r({event:a}),!0)}}];const p12={move:{name:"mousemove"},end:{name:"mouseup"}};var B7;(function(e){e[e.RightClick=2]="RightClick"})(B7||(B7={}));class v12 extends ln{constructor(c){super(c,p12,l6(c.event.target))}}v12.activators=[{eventName:"onMouseDown",handler:(e,c)=>{let{nativeEvent:a}=e,{onActivation:r}=c;return a.button===B7.RightClick?!1:(r==null||r({event:a}),!0)}}];const zc={move:{name:"touchmove"},end:{name:"touchend"}};class z12 extends ln{constructor(c){super(c,zc)}static setup(){return window.addEventListener(zc.move.name,c,{capture:!1,passive:!1}),function(){window.removeEventListener(zc.move.name,c)};function c(){}}}z12.activators=[{eventName:"onTouchStart",handler:(e,c)=>{let{nativeEvent:a}=e,{onActivation:r}=c;const{touches:n}=a;return n.length>1?!1:(r==null||r({event:a}),!0)}}];var $6;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})($6||($6={}));var Te;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Te||(Te={}));function H12(e){let{acceleration:c,activator:a=$6.Pointer,canScroll:r,draggingRect:n,enabled:t,interval:i=5,order:s=Te.TreeOrder,pointerCoordinates:o,scrollableAncestors:l,scrollableAncestorRects:f,delta:u,threshold:h}=e;const v=V12({delta:u,disabled:!t}),[V,H]=N22(),C=z.useRef({x:0,y:0}),m=z.useRef({x:0,y:0}),d=z.useMemo(()=>{switch(a){case $6.Pointer:return o?{top:o.y,bottom:o.y,left:o.x,right:o.x}:null;case $6.DraggableRect:return n}},[a,n,o]),p=z.useRef(null),g=z.useCallback(()=>{const y=p.current;if(!y)return;const L=C.current.x*m.current.x,x=C.current.y*m.current.y;y.scrollBy(L,x)},[]),M=z.useMemo(()=>s===Te.TreeOrder?[...l].reverse():l,[s,l]);z.useEffect(()=>{if(!t||!l.length||!d){H();return}for(const y of M){if((r==null?void 0:r(y))===!1)continue;const L=l.indexOf(y),x=f[L];if(!x)continue;const{direction:E,speed:A}=t12(y,x,d,c,h);for(const D of["x","y"])v[D][E[D]]||(A[D]=0,E[D]=0);if(A.x>0||A.y>0){H(),p.current=y,V(g,i),C.current=A,m.current=E;return}}C.current={x:0,y:0},m.current={x:0,y:0},H()},[c,g,r,H,t,i,JSON.stringify(d),JSON.stringify(v),V,l,M,f,JSON.stringify(h)])}const g12={x:{[h2.Backward]:!1,[h2.Forward]:!1},y:{[h2.Backward]:!1,[h2.Forward]:!1}};function V12(e){let{delta:c,disabled:a}=e;const r=D7(c);return G0(n=>{if(a||!r||!n)return g12;const t={x:Math.sign(c.x-r.x),y:Math.sign(c.y-r.y)};return{x:{[h2.Backward]:n.x[h2.Backward]||t.x===-1,[h2.Forward]:n.x[h2.Forward]||t.x===1},y:{[h2.Backward]:n.y[h2.Backward]||t.y===-1,[h2.Forward]:n.y[h2.Forward]||t.y===1}}},[a,c,r])}function M12(e,c){const a=c!==null?e.get(c):void 0,r=a?a.node.current:null;return G0(n=>{var t;return c===null?null:(t=r??n)!=null?t:null},[r,c])}function C12(e,c){return z.useMemo(()=>e.reduce((a,r)=>{const{sensor:n}=r,t=n.activators.map(i=>({eventName:i.eventName,handler:c(i.handler,r)}));return[...a,...t]},[]),[e,c])}var L0;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(L0||(L0={}));var U7;(function(e){e.Optimized="optimized"})(U7||(U7={}));const B9=new Map;function L12(e,c){let{dragging:a,dependencies:r,config:n}=c;const[t,i]=z.useState(null),{frequency:s,measure:o,strategy:l}=n,f=z.useRef(e),u=C(),h=M0(u),v=z.useCallback(function(m){m===void 0&&(m=[]),!h.current&&i(d=>d===null?m:d.concat(m.filter(p=>!d.includes(p))))},[h]),V=z.useRef(null),H=G0(m=>{if(u&&!a)return B9;if(!m||m===B9||f.current!==e||t!=null){const d=new Map;for(let p of e){if(!p)continue;if(t&&t.length>0&&!t.includes(p.id)&&p.rect.current){d.set(p.id,p.rect.current);continue}const g=p.node.current,M=g?new on(o(g),g):null;p.rect.current=M,M&&d.set(p.id,M)}return d}return m},[e,t,a,u,o]);return z.useEffect(()=>{f.current=e},[e]),z.useEffect(()=>{u||v()},[a,u]),z.useEffect(()=>{t&&t.length>0&&i(null)},[JSON.stringify(t)]),z.useEffect(()=>{u||typeof s!="number"||V.current!==null||(V.current=setTimeout(()=>{v(),V.current=null},s))},[s,u,v,...r]),{droppableRects:H,measureDroppableContainers:v,measuringScheduled:t!=null};function C(){switch(l){case L0.Always:return!1;case L0.BeforeDragging:return a;default:return!a}}}function kz(e,c){return G0(a=>e?a||(typeof c=="function"?c(e):e):null,[c,e])}function y12(e,c){return kz(e,c)}function w12(e){let{callback:c,disabled:a}=e;const r=nn(c),n=z.useMemo(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:t}=window;return new t(r)},[r,a]);return z.useEffect(()=>()=>n==null?void 0:n.disconnect(),[n]),n}function L5(e){let{callback:c,disabled:a}=e;const r=nn(c),n=z.useMemo(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:t}=window;return new t(r)},[a]);return z.useEffect(()=>()=>n==null?void 0:n.disconnect(),[n]),n}function x12(e){return new on(f6(e),e)}function U9(e,c,a){c===void 0&&(c=x12);const[r,n]=z.useReducer(s,null),t=w12({callback(o){if(e)for(const l of o){const{type:f,target:u}=l;if(f==="childList"&&u instanceof HTMLElement&&u.contains(e)){n();break}}}}),i=L5({callback:n});return p1(()=>{n(),e?(i==null||i.observe(e),t==null||t.observe(document.body,{childList:!0,subtree:!0})):(i==null||i.disconnect(),t==null||t.disconnect())},[e]),r;function s(o){if(!e)return null;if(e.isConnected===!1){var l;return(l=o??a)!=null?l:null}const f=c(e);return JSON.stringify(o)===JSON.stringify(f)?o:f}}function S12(e){const c=kz(e);return gz(e,c)}const W9=[];function N12(e){const c=z.useRef(e),a=G0(r=>e?r&&r!==W9&&e&&c.current&&e.parentNode===c.current.parentNode?r:sn(e):W9,[e]);return z.useEffect(()=>{c.current=e},[e]),a}function k12(e){const[c,a]=z.useState(null),r=z.useRef(e),n=z.useCallback(t=>{const i=pc(t.target);i&&a(s=>s?(s.set(i,F7(i)),new Map(s)):null)},[]);return z.useEffect(()=>{const t=r.current;if(e!==t){i(t);const s=e.map(o=>{const l=pc(o);return l?(l.addEventListener("scroll",n,{passive:!0}),[l,F7(l)]):null}).filter(o=>o!=null);a(s.length?new Map(s):null),r.current=e}return()=>{i(e),i(t)};function i(s){s.forEach(o=>{const l=pc(o);l==null||l.removeEventListener("scroll",n)})}},[n,e]),z.useMemo(()=>e.length?c?Array.from(c.values()).reduce((t,i)=>G4(t,i),v1):wz(e):v1,[e,c])}function j9(e,c){c===void 0&&(c=[]);const a=z.useRef(null);return z.useEffect(()=>{a.current=null},c),z.useEffect(()=>{const r=e!==v1;r&&!a.current&&(a.current=e),!r&&a.current&&(a.current=null)},[e]),a.current?Ae(e,a.current):v1}function b12(e){z.useEffect(()=>{if(!C5)return;const c=e.map(a=>{let{sensor:r}=a;return r.setup==null?void 0:r.setup()});return()=>{for(const a of c)a==null||a()}},e.map(c=>{let{sensor:a}=c;return a}))}function A12(e,c){return z.useMemo(()=>e.reduce((a,r)=>{let{eventName:n,handler:t}=r;return a[n]=i=>{t(i,c)},a},{}),[e,c])}function bz(e){return z.useMemo(()=>e?c12(e):null,[e])}const Hc=[];function E12(e,c){c===void 0&&(c=f6);const[a]=e,r=bz(a?O2(a):null),[n,t]=z.useReducer(s,Hc),i=L5({callback:t});return e.length>0&&n===Hc&&t(),p1(()=>{e.length?e.forEach(o=>i==null?void 0:i.observe(o)):(i==null||i.disconnect(),t())},[e]),n;function s(){return e.length?e.map(o=>Lz(o)?r:new on(c(o),o)):Hc}}function T12(e){if(!e)return null;if(e.children.length>1)return e;const c=e.children[0];return $0(c)?c:e}function P12(e){let{measure:c}=e;const[a,r]=z.useState(null),n=z.useCallback(l=>{for(const{target:f}of l)if($0(f)){r(u=>{const h=c(f);return u?{...u,width:h.width,height:h.height}:h});break}},[c]),t=L5({callback:n}),i=z.useCallback(l=>{const f=T12(l);t==null||t.disconnect(),f&&(t==null||t.observe(f)),r(f?c(f):null)},[c,t]),[s,o]=be(i);return z.useMemo(()=>({nodeRef:s,rect:a,setRef:o}),[a,s,o])}const _12=[{sensor:Nz,options:{}},{sensor:Sz,options:{}}],R12={current:{}},j8={draggable:{measure:I9},droppable:{measure:I9,strategy:L0.WhileDragging,frequency:U7.Optimized},dragOverlay:{measure:f6}};class G6 extends Map{get(c){var a;return c!=null&&(a=super.get(c))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(c=>{let{disabled:a}=c;return!a})}getNodeFor(c){var a,r;return(a=(r=this.get(c))==null?void 0:r.node.current)!=null?a:void 0}}const I12={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new G6,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ee},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:j8,measureDroppableContainers:Ee,windowRect:null,measuringScheduled:!1},D12={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ee,draggableNodes:new Map,over:null,measureDroppableContainers:Ee},y5=z.createContext(D12),Az=z.createContext(I12);function O12(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new G6}}}function F12(e,c){switch(c.type){case l2.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:c.initialCoordinates,active:c.active}};case l2.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:c.coordinates.x-e.draggable.initialCoordinates.x,y:c.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case l2.DragEnd:case l2.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case l2.RegisterDroppable:{const{element:a}=c,{id:r}=a,n=new G6(e.droppable.containers);return n.set(r,a),{...e,droppable:{...e.droppable,containers:n}}}case l2.SetDroppableDisabled:{const{id:a,key:r,disabled:n}=c,t=e.droppable.containers.get(a);if(!t||r!==t.key)return e;const i=new G6(e.droppable.containers);return i.set(a,{...t,disabled:n}),{...e,droppable:{...e.droppable,containers:i}}}case l2.UnregisterDroppable:{const{id:a,key:r}=c,n=e.droppable.containers.get(a);if(!n||r!==n.key)return e;const t=new G6(e.droppable.containers);return t.delete(a),{...e,droppable:{...e.droppable,containers:t}}}default:return e}}function B12(e){let{disabled:c}=e;const{active:a,activatorEvent:r,draggableNodes:n}=z.useContext(y5),t=D7(r),i=D7(a==null?void 0:a.id);return z.useEffect(()=>{if(!c&&!r&&t&&i!=null){if(!tn(t)||document.activeElement===t.target)return;const s=n.get(i);if(!s)return;const{activatorNode:o,node:l}=s;if(!o.current&&!l.current)return;requestAnimationFrame(()=>{for(const f of[o.current,l.current]){if(!f)continue;const u=A22(f);if(u){u.focus();break}}})}},[r,c,n,i,t]),null}function U12(e,c){let{transform:a,...r}=c;return e!=null&&e.length?e.reduce((n,t)=>t({transform:n,...r}),a):a}function W12(e){return z.useMemo(()=>({draggable:{...j8.draggable,...e==null?void 0:e.draggable},droppable:{...j8.droppable,...e==null?void 0:e.droppable},dragOverlay:{...j8.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function j12(e){let{activeNode:c,measure:a,initialRect:r,config:n=!0}=e;const t=z.useRef(!1),{x:i,y:s}=typeof n=="boolean"?{x:n,y:n}:n;p1(()=>{if(!i&&!s||!c){t.current=!1;return}if(t.current||!r)return;const l=c==null?void 0:c.node.current;if(!l||l.isConnected===!1)return;const f=a(l),u=gz(f,r);if(i||(u.x=0),s||(u.y=0),t.current=!0,Math.abs(u.x)>0||Math.abs(u.y)>0){const h=Vz(l);h&&h.scrollBy({top:u.y,left:u.x})}},[c,i,s,r,a])}const Ez=z.createContext({...v1,scaleX:1,scaleY:1});var n3;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(n3||(n3={}));const $12=z.memo(function(c){var a,r,n,t;let{id:i,accessibility:s,autoScroll:o=!0,children:l,sensors:f=_12,collisionDetection:u=K22,measuring:h,modifiers:v,...V}=c;const H=z.useReducer(F12,void 0,O12),[C,m]=H,[d,p]=D22(),[g,M]=z.useState(n3.Uninitialized),y=g===n3.Initialized,{draggable:{active:L,nodes:x,translate:E},droppable:{containers:A}}=C,D=L?x.get(L):null,v2=z.useRef({initial:null,translated:null}),z2=z.useMemo(()=>{var g2;return L!=null?{id:L,data:(g2=D==null?void 0:D.data)!=null?g2:R12,rect:v2}:null},[L,D]),F2=z.useRef(null),[I3,K1]=z.useState(null),[H2,S]=z.useState(null),P=M0(V,Object.values(V)),R=q0("DndDescribedBy",i),G=z.useMemo(()=>A.getEnabled(),[A]),F=W12(h),{droppableRects:T2,measureDroppableContainers:N2,measuringScheduled:S1}=L12(G,{dragging:y,dependencies:[E.x,E.y],config:F.droppable}),t2=M12(x,L),N1=z.useMemo(()=>H2?O7(H2):null,[H2]),Y1=Wz(),k1=y12(t2,F.draggable.measure);j12({activeNode:L?x.get(L):null,config:Y1.layoutShiftCompensation,initialRect:k1,measure:F.draggable.measure});const j=U9(t2,F.draggable.measure,k1),u6=U9(t2?t2.parentElement:null),z1=z.useRef({activatorEvent:null,active:null,activeNode:t2,collisionRect:null,collisions:null,droppableRects:T2,draggableNodes:x,draggingNode:null,draggingNodeRect:null,droppableContainers:A,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),h4=A.getNodeFor((a=z1.current.over)==null?void 0:a.id),b1=P12({measure:F.dragOverlay.measure}),m4=(r=b1.nodeRef.current)!=null?r:t2,p4=y?(n=b1.rect)!=null?n:j:null,dn=!!(b1.nodeRef.current&&b1.rect),hn=S12(dn?null:j),w5=bz(m4?O2(m4):null),X1=N12(y?h4??t2:null),K0=E12(X1),Y0=U12(v,{transform:{x:E.x-hn.x,y:E.y-hn.y,scaleX:1,scaleY:1},activatorEvent:H2,active:z2,activeNodeRect:j,containerNodeRect:u6,draggingNodeRect:p4,over:z1.current.over,overlayNodeRect:b1.rect,scrollableAncestors:X1,scrollableAncestorRects:K0,windowRect:w5}),mn=N1?G4(N1,E):null,pn=k12(X1),Rz=j9(pn),Iz=j9(pn,[j]),v4=G4(Y0,Rz),z4=p4?Q22(p4,Y0):null,d6=z2&&z4?u({active:z2,collisionRect:z4,droppableRects:T2,droppableContainers:G,pointerCoordinates:mn}):null,vn=$22(d6,"id"),[Q1,zn]=z.useState(null),Dz=dn?Y0:G4(Y0,Iz),Oz=Y22(Dz,(t=Q1==null?void 0:Q1.rect)!=null?t:null,j),Hn=z.useCallback((g2,B2)=>{let{sensor:U2,options:J1}=B2;if(F2.current==null)return;const X2=x.get(F2.current);if(!X2)return;const n1=g2.nativeEvent,H1=new U2({active:F2.current,activeNode:X2,event:n1,options:J1,context:z1,onStart(t1){const h6=F2.current;if(h6==null)return;const m6=x.get(h6);if(!m6)return;const{onDragStart:X0}=P.current,Q0={active:{id:h6,data:m6.data,rect:v2}};B3.unstable_batchedUpdates(()=>{X0==null||X0(Q0),M(n3.Initializing),m({type:l2.DragStart,initialCoordinates:t1,active:h6}),d({type:"onDragStart",event:Q0})})},onMove(t1){m({type:l2.DragMove,coordinates:t1})},onEnd:H4(l2.DragEnd),onCancel:H4(l2.DragCancel)});B3.unstable_batchedUpdates(()=>{K1(H1),S(g2.nativeEvent)});function H4(t1){return async function(){const{active:m6,collisions:X0,over:Q0,scrollAdjustedTranslate:Vn}=z1.current;let p6=null;if(m6&&Vn){const{cancelDrop:v6}=P.current;p6={activatorEvent:n1,active:m6,collisions:X0,delta:Vn,over:Q0},t1===l2.DragEnd&&typeof v6=="function"&&await Promise.resolve(v6(p6))&&(t1=l2.DragCancel)}F2.current=null,B3.unstable_batchedUpdates(()=>{m({type:t1}),M(n3.Uninitialized),zn(null),K1(null),S(null);const v6=t1===l2.DragEnd?"onDragEnd":"onDragCancel";if(p6){const x5=P.current[v6];x5==null||x5(p6),d({type:v6,event:p6})}})}}},[x]),Fz=z.useCallback((g2,B2)=>(U2,J1)=>{const X2=U2.nativeEvent,n1=x.get(J1);if(F2.current!==null||!n1||X2.dndKit||X2.defaultPrevented)return;const H1={active:n1};g2(U2,B2.options,H1)===!0&&(X2.dndKit={capturedBy:B2.sensor},F2.current=J1,Hn(U2,B2))},[x,Hn]),gn=C12(f,Fz);b12(f),p1(()=>{j&&g===n3.Initializing&&M(n3.Initialized)},[j,g]),z.useEffect(()=>{const{onDragMove:g2}=P.current,{active:B2,activatorEvent:U2,collisions:J1,over:X2}=z1.current;if(!B2||!U2)return;const n1={active:B2,activatorEvent:U2,collisions:J1,delta:{x:v4.x,y:v4.y},over:X2};B3.unstable_batchedUpdates(()=>{g2==null||g2(n1),d({type:"onDragMove",event:n1})})},[v4.x,v4.y]),z.useEffect(()=>{const{active:g2,activatorEvent:B2,collisions:U2,droppableContainers:J1,scrollAdjustedTranslate:X2}=z1.current;if(!g2||F2.current==null||!B2||!X2)return;const{onDragOver:n1}=P.current,H1=J1.get(vn),H4=H1&&H1.rect.current?{id:H1.id,rect:H1.rect.current,data:H1.data,disabled:H1.disabled}:null,t1={active:g2,activatorEvent:B2,collisions:U2,delta:{x:X2.x,y:X2.y},over:H4};B3.unstable_batchedUpdates(()=>{zn(H4),n1==null||n1(t1),d({type:"onDragOver",event:t1})})},[vn]),p1(()=>{z1.current={activatorEvent:H2,active:z2,activeNode:t2,collisionRect:z4,collisions:d6,droppableRects:T2,draggableNodes:x,draggingNode:m4,draggingNodeRect:p4,droppableContainers:A,over:Q1,scrollableAncestors:X1,scrollAdjustedTranslate:v4},v2.current={initial:p4,translated:z4}},[z2,t2,d6,z4,x,m4,p4,T2,A,Q1,X1,v4]),H12({...Y1,delta:E,draggingRect:z4,pointerCoordinates:mn,scrollableAncestors:X1,scrollableAncestorRects:K0});const Bz=z.useMemo(()=>({active:z2,activeNode:t2,activeNodeRect:j,activatorEvent:H2,collisions:d6,containerNodeRect:u6,dragOverlay:b1,draggableNodes:x,droppableContainers:A,droppableRects:T2,over:Q1,measureDroppableContainers:N2,scrollableAncestors:X1,scrollableAncestorRects:K0,measuringConfiguration:F,measuringScheduled:S1,windowRect:w5}),[z2,t2,j,H2,d6,u6,b1,x,A,T2,Q1,N2,X1,K0,F,S1,w5]),Uz=z.useMemo(()=>({activatorEvent:H2,activators:gn,active:z2,activeNodeRect:j,ariaDescribedById:{draggable:R},dispatch:m,draggableNodes:x,over:Q1,measureDroppableContainers:N2}),[H2,gn,z2,j,m,R,x,Q1,N2]);return m2.createElement(Hz.Provider,{value:p},m2.createElement(y5.Provider,{value:Uz},m2.createElement(Az.Provider,{value:Bz},m2.createElement(Ez.Provider,{value:Oz},l)),m2.createElement(B12,{disabled:(s==null?void 0:s.restoreFocus)===!1})),m2.createElement(B22,{...s,hiddenTextDescribedById:R}));function Wz(){const g2=(I3==null?void 0:I3.autoScrollEnabled)===!1,B2=typeof o=="object"?o.enabled===!1:o===!1,U2=y&&!g2&&!B2;return typeof o=="object"?{...o,enabled:U2}:{enabled:U2}}}),G12=z.createContext(null),$9="button",q12="Droppable";function K12(e){let{id:c,data:a,disabled:r=!1,attributes:n}=e;const t=q0(q12),{activators:i,activatorEvent:s,active:o,activeNodeRect:l,ariaDescribedById:f,draggableNodes:u,over:h}=z.useContext(y5),{role:v=$9,roleDescription:V="draggable",tabIndex:H=0}=n??{},C=(o==null?void 0:o.id)===c,m=z.useContext(C?Ez:G12),[d,p]=be(),[g,M]=be(),y=A12(i,c),L=M0(a);p1(()=>(u.set(c,{id:c,key:t,node:d,activatorNode:g,data:L}),()=>{const E=u.get(c);E&&E.key===t&&u.delete(c)}),[u,c]);const x=z.useMemo(()=>({role:v,tabIndex:H,"aria-disabled":r,"aria-pressed":C&&v===$9?!0:void 0,"aria-roledescription":V,"aria-describedby":f.draggable}),[r,v,H,C,V,f.draggable]);return{active:o,activatorEvent:s,activeNodeRect:l,attributes:x,isDragging:C,listeners:r?void 0:y,node:d,over:h,setNodeRef:p,setActivatorNodeRef:M,transform:m}}function Y12(){return z.useContext(Az)}const X12="Droppable",Q12={timeout:25};function J12(e){let{data:c,disabled:a=!1,id:r,resizeObserverConfig:n}=e;const t=q0(X12),{active:i,dispatch:s,over:o,measureDroppableContainers:l}=z.useContext(y5),f=z.useRef({disabled:a}),u=z.useRef(!1),h=z.useRef(null),v=z.useRef(null),{disabled:V,updateMeasurementsFor:H,timeout:C}={...Q12,...n},m=M0(H??r),d=z.useCallback(()=>{if(!u.current){u.current=!0;return}v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{l(Array.isArray(m.current)?m.current:[m.current]),v.current=null},C)},[C]),p=L5({callback:d,disabled:V||!i}),g=z.useCallback((x,E)=>{p&&(E&&(p.unobserve(E),u.current=!1),x&&p.observe(x))},[p]),[M,y]=be(g),L=M0(c);return z.useEffect(()=>{!p||!M.current||(p.disconnect(),u.current=!1,p.observe(M.current))},[M,p]),p1(()=>(s({type:l2.RegisterDroppable,element:{id:r,key:t,disabled:a,node:M,rect:h,data:L}}),()=>s({type:l2.UnregisterDroppable,key:t,id:r})),[r]),z.useEffect(()=>{a!==f.current.disabled&&(s({type:l2.SetDroppableDisabled,id:r,key:t,disabled:a}),f.current.disabled=a)},[r,t,a,s]),{active:i,rect:h,isOver:(o==null?void 0:o.id)===r,node:M,over:o,setNodeRef:y}}const Z12=()=>{const e=jr(),c=()=>{jJ(_7).then(a=>e("/"))};return T.jsxs("section",{className:"s-logout",children:[T.jsxs("div",{className:"search-wrapper",children:[T.jsx("input",{type:"search",name:"",id:"search",placeholder:"Search"}),T.jsx(A3,{icon:"fa-solid fa-search"})]}),T.jsxs("div",{className:"user-btn",children:[T.jsx(A3,{icon:"fa-solid fa-user"}),T.jsx("button",{onClick:c,children:"Log out"})]})]})},G9="/img-drag-drop/assets/zuko-fa381ee2.jpg",e32="/img-drag-drop/assets/kuvira-7eab441f.jpg",c32="/img-drag-drop/assets/mako-7c80174f.png",a32="/img-drag-drop/assets/toph-b97b46dc.jpg",r32="/img-drag-drop/assets/korra-cf722549.jpg",n32="/img-drag-drop/assets/jinora-f6400617.jpg",t32="/img-drag-drop/assets/azula-b60efcd6.png",i32="/img-drag-drop/assets/aang-520fce77.jpg",s32="/img-drag-drop/assets/haru-92fb2676.jpg",o32="/img-drag-drop/assets/ozai-96a68ea5.jpg",l32="/img-drag-drop/assets/king-bumi-43517913.jpg",f32="/img-drag-drop/assets/sokka-49389da7.jpg",u32="/img-drag-drop/assets/uncle-iroh-a5086f88.jpg",d32="/img-drag-drop/assets/lin-40024417.jpg",h32="/img-drag-drop/assets/katara-1a9d5a7b.jpg",m32=[{id:1,faction:"fire",source:G9,description:"Zuko"},{id:2,faction:"earth",source:e32,description:"Kuvira"},{id:3,faction:"fire",source:c32,description:"Mako"},{id:4,faction:"earth",source:a32,description:"Toph Beifong"},{id:5,faction:"water",source:r32,description:"Avatar Korra"},{id:6,faction:"air",source:n32,description:"Jinora"},{id:7,faction:"fire",source:t32,description:"Azula"},{id:8,faction:"air",source:i32,description:"Avatar Aang"},{id:9,faction:"earth",source:s32,description:"Haru"},{id:10,faction:"fire",source:o32,description:"Firelord Ozai"},{id:11,faction:"earth",source:l32,description:"Bumi"},{id:12,faction:"water",source:f32,description:"Sokka"},{id:13,faction:"fire",source:u32,description:"Gen. Iroh"},{id:14,faction:"earth",source:d32,description:"Lin Beifong "},{id:15,faction:"water",source:h32,description:"Katara"},{id:16,faction:"fire",source:G9,description:"Jeong Jeong"}];function fn(e,c,a){const r=e.slice();return r.splice(a<0?r.length+a:a,0,r.splice(c,1)[0]),r}function p32(e,c){return e.reduce((a,r,n)=>{const t=c.get(r);return t&&(a[n]=t),a},Array(e.length))}function w8(e){return e!==null&&e>=0}function v32(e,c){if(e===c)return!0;if(e.length!==c.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==c[a])return!1;return!0}function z32(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const un=e=>{let{rects:c,activeIndex:a,overIndex:r,index:n}=e;const t=fn(c,r,a),i=c[n],s=t[n];return!s||!i?null:{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}},Tz="Sortable",Pz=m2.createContext({activeIndex:-1,containerId:Tz,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:un,disabled:{draggable:!1,droppable:!1}});function H32(e){let{children:c,id:a,items:r,strategy:n=un,disabled:t=!1}=e;const{active:i,dragOverlay:s,droppableRects:o,over:l,measureDroppableContainers:f}=Y12(),u=q0(Tz,a),h=s.rect!==null,v=z.useMemo(()=>r.map(y=>typeof y=="object"&&"id"in y?y.id:y),[r]),V=i!=null,H=i?v.indexOf(i.id):-1,C=l?v.indexOf(l.id):-1,m=z.useRef(v),d=!v32(v,m.current),p=C!==-1&&H===-1||d,g=z32(t);p1(()=>{d&&V&&f(v)},[d,v,V,f]),z.useEffect(()=>{m.current=v},[v]);const M=z.useMemo(()=>({activeIndex:H,containerId:u,disabled:g,disableTransforms:p,items:v,overIndex:C,useDragOverlay:h,sortedRects:p32(v,o),strategy:n}),[H,u,g.draggable,g.droppable,p,v,C,o,h,n]);return m2.createElement(Pz.Provider,{value:M},c)}const g32=e=>{let{id:c,items:a,activeIndex:r,overIndex:n}=e;return fn(a,r,n).indexOf(c)},V32=e=>{let{containerId:c,isSorting:a,wasDragging:r,index:n,items:t,newIndex:i,previousItems:s,previousContainerId:o,transition:l}=e;return!l||!r||s!==t&&n===i?!1:a?!0:i!==n&&c===o},M32={duration:200,easing:"ease"},_z="transform",C32=C0.Transition.toString({property:_z,duration:0,easing:"linear"}),L32={roleDescription:"sortable"};function y32(e){let{disabled:c,index:a,node:r,rect:n}=e;const[t,i]=z.useState(null),s=z.useRef(a);return p1(()=>{if(!c&&a!==s.current&&r.current){const o=n.current;if(o){const l=f6(r.current,{ignoreTransform:!0}),f={x:o.left-l.left,y:o.top-l.top,scaleX:o.width/l.width,scaleY:o.height/l.height};(f.x||f.y)&&i(f)}}a!==s.current&&(s.current=a)},[c,a,r,n]),z.useEffect(()=>{t&&i(null)},[t]),t}function w32(e){let{animateLayoutChanges:c=V32,attributes:a,disabled:r,data:n,getNewIndex:t=g32,id:i,strategy:s,resizeObserverConfig:o,transition:l=M32}=e;const{items:f,containerId:u,activeIndex:h,disabled:v,disableTransforms:V,sortedRects:H,overIndex:C,useDragOverlay:m,strategy:d}=z.useContext(Pz),p=x32(r,v),g=f.indexOf(i),M=z.useMemo(()=>({sortable:{containerId:u,index:g,items:f},...n}),[u,n,g,f]),y=z.useMemo(()=>f.slice(f.indexOf(i)),[f,i]),{rect:L,node:x,isOver:E,setNodeRef:A}=J12({id:i,data:M,disabled:p.droppable,resizeObserverConfig:{updateMeasurementsFor:y,...o}}),{active:D,activatorEvent:v2,activeNodeRect:z2,attributes:F2,setNodeRef:I3,listeners:K1,isDragging:H2,over:S,setActivatorNodeRef:P,transform:R}=K12({id:i,data:M,attributes:{...L32,...a},disabled:p.draggable}),G=x22(A,I3),F=!!D,T2=F&&!V&&w8(h)&&w8(C),N2=!m&&H2,S1=N2&&T2?R:null,N1=T2?S1??(s??d)({rects:H,activeNodeRect:z2,activeIndex:h,overIndex:C,index:g}):null,Y1=w8(h)&&w8(C)?t({id:i,items:f,activeIndex:h,overIndex:C}):g,k1=D==null?void 0:D.id,j=z.useRef({activeId:k1,items:f,newIndex:Y1,containerId:u}),u6=f!==j.current.items,z1=c({active:D,containerId:u,isDragging:H2,isSorting:F,id:i,index:g,items:f,newIndex:j.current.newIndex,previousItems:j.current.items,previousContainerId:j.current.containerId,transition:l,wasDragging:j.current.activeId!=null}),h4=y32({disabled:!z1,index:g,node:x,rect:L});return z.useEffect(()=>{F&&j.current.newIndex!==Y1&&(j.current.newIndex=Y1),u!==j.current.containerId&&(j.current.containerId=u),f!==j.current.items&&(j.current.items=f)},[F,Y1,u,f]),z.useEffect(()=>{if(k1===j.current.activeId)return;if(k1&&!j.current.activeId){j.current.activeId=k1;return}const m4=setTimeout(()=>{j.current.activeId=k1},50);return()=>clearTimeout(m4)},[k1]),{active:D,activeIndex:h,attributes:F2,data:M,rect:L,index:g,newIndex:Y1,items:f,isOver:E,isSorting:F,isDragging:H2,listeners:K1,node:x,overIndex:C,over:S,setNodeRef:G,setActivatorNodeRef:P,setDroppableNodeRef:A,setDraggableNodeRef:I3,transform:h4??N1,transition:b1()};function b1(){if(h4||u6&&j.current.newIndex===g)return C32;if(!(N2&&!tn(v2)||!l)&&(F||z1))return C0.Transition.toString({...l,property:_z})}}function x32(e,c){var a,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e==null?void 0:e.draggable)!=null?a:c.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:c.droppable}}U.Down,U.Right,U.Up,U.Left;const S32=({image:e})=>{const{attributes:c,listeners:a,setNodeRef:r,transform:n,transition:t}=w32({id:e.id}),i={transition:t,transform:C0.Transform.toString(n)};return T.jsxs("div",{className:"box",style:i,ref:r,...c,...a,children:[T.jsx("img",{src:e.source,alt:e.description}),T.jsxs("button",{className:e.faction,children:[" ",e.faction]})]})},N32=()=>{const[e,c]=z.useState(m32),a=r=>{console.log("onDragEnd",r);const{active:n,over:t}=r;n.id!==t.id&&c(i=>{const s=i.findIndex(l=>l.id===n.id),o=i.findIndex(l=>l.id===t.id);return fn(i,s,o)})};return T.jsxs(T.Fragment,{children:[T.jsx(Z12,{}),T.jsx("h4",{style:{color:"darkgrey",textAlign:"left",padding:"2rem 0"},children:"Shuffle according to your favorite "}),T.jsx("section",{className:"img-container",children:T.jsx($12,{collisionDetection:G22,onDragEnd:a,children:T.jsx(H32,{items:e,strategy:un,children:e.map(r=>T.jsx(S32,{image:r},r.id))})})})]})},k32=()=>T.jsx(T.Fragment,{children:T.jsx("div",{className:"loader",children:T.jsxs("svg",{version:"1.1",id:"L2",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[T.jsx("circle",{fill:"none",stroke:"#fff",strokeWidth:"4",strokeMiterlimit:"10",cx:"50",cy:"50",r:"48"}),T.jsx("line",{fill:"none",strokeLinecap:"round",stroke:"#fff",strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"85",y2:"50.5",children:T.jsx("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),T.jsx("line",{fill:"none",strokeLinecap:"round",stroke:"#fff",strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"49.5",y2:"74",children:T.jsx("animateTransform",{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})})}),b32=()=>{const[e,c]=z.useState(!1);return z.useEffect(()=>{c(!0),setTimeout(()=>{c(!1)},1e3)},[]),T.jsx(T.Fragment,{children:e?T.jsx(k32,{}):T.jsx("main",{className:"container",children:T.jsx(N32,{})})})};function A32(){return T.jsx(T.Fragment,{children:T.jsx(dX,{children:T.jsxs(iX,{children:[T.jsx(w7,{path:"/",element:T.jsx(w22,{})}),T.jsx(w7,{path:"/home",element:T.jsx(b32,{})})]})})})}KM.add(HY,pf,ql,Vm);gc.createRoot(document.getElementById("root")).render(T.jsx(m2.StrictMode,{children:T.jsx(A32,{})}));