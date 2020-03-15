const t=new Set;const e=new class{constructor(){this.nodeId=1,this.nodeMap=new Map,this.idMap=new WeakMap,this.createNodeId=()=>this.nodeId++}getNode(t){return this.nodeMap.get(t)}addNode(t,e=this.createNodeId()){return this.idMap.set(t,e),this.nodeMap.set(e,t),e}removeNode(t){this.nodeMap.delete(t),this.idMap.delete(this.getNode(t))}getNodeId(t){return this.idMap.get(t)}updateNode(t,e){this.idMap.set(e,t),this.nodeMap.set(t,e)}};class n{constructor(t,e,n,r){this.DBName=t,this.version=e,this.storeName=n;const o=window.indexedDB.open(t,e);o.onerror=t=>{console.error("open IndexDB on error")},o.onsuccess=t=>{this.db=o.result,r(this.db)},o.onupgradeneeded=t=>{const e=t.target.result;if(!e.objectStoreNames.contains(n)){const t=e.createObjectStore(n,{autoIncrement:!0,keyPath:"id"});t.createIndex("type","type",{unique:!1}),t.createIndex("data","data",{unique:!1}),t.createIndex("time","time",{unique:!1})}}}add(t){this.db.transaction([`${this.storeName}`],"readwrite").objectStore(`${this.storeName}`).add(t).onerror=t=>{throw new Error("write IndexDB on error")}}clear(){this.db.transaction([`${this.storeName}`],"readwrite").objectStore(`${this.storeName}`).clear()}async readAll(){const t=this.db.transaction([`${this.storeName}`],"readwrite").objectStore(`${this.storeName}`);return new Promise(e=>{t.getAll().onsuccess=t=>{const n=t.target.result;e(n)}})}async getData(){const t=await this.readAll(),[e,n,...r]=t,[{width:o,height:i},{vNode:a}]=[e.data,n.data];return{width:o,height:i,vNode:a,data:r}}}const r=new Promise(t=>{const e=new n("wr_db",1,"wr_data",()=>{t(e)})});let o={speed:null};var i;!function(t){t.SPEED="SPEED"}(i||(i={}));const a={frame:0,length:0,curTime:0,startTime:0,endTime:0};var s;!function(t){t.FORWARD="FORWARD",t.BACKWARD="BACKWARD",t.INFO="INFO"}(s||(s={}));var c="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")(),l=d.Symbol,h=Object.prototype,p=h.hasOwnProperty,f=h.toString,b=l?l.toStringTag:void 0;var y=Object.prototype.toString;var v=l?l.toStringTag:void 0;function g(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var e=p.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch(t){}var o=f.call(t);return r&&(e?t[b]=n:delete t[b]),o}(t):function(t){return y.call(t)}(t)}function m(t){return null!=t&&"object"==typeof t}var w=Array.isArray;function _(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var j=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,E=/^0o[0-7]+$/i,N=parseInt;function D(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||m(t)&&"[object Symbol]"==g(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var n=x.test(t);return n||E.test(t)?N(t.slice(2),n?2:8):O.test(t)?NaN:+t}function T(t){if(!_(t))return!1;var e=g(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var A,S=d["__core-js_shared__"],I=(A=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var M=Function.prototype.toString;function L(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var P=/^\[object .+?Constructor\]$/,C=Function.prototype,k=Object.prototype,F=C.toString,U=k.hasOwnProperty,B=RegExp("^"+F.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R(t){return!(!_(t)||(e=t,I&&I in e))&&(T(t)?B:P).test(L(t));var e}function z(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return R(n)?n:void 0}var W=z(d,"WeakMap"),V=/^(?:0|[1-9]\d*)$/;function q(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&V.test(t))&&t>-1&&t%1==0&&t<e}function $(t,e){return t===e||t!=t&&e!=e}function H(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}var G=Object.prototype;function K(t){return m(t)&&"[object Arguments]"==g(t)}var X=Object.prototype,Y=X.hasOwnProperty,Z=X.propertyIsEnumerable,J=K(function(){return arguments}())?K:function(t){return m(t)&&Y.call(t,"callee")&&!Z.call(t,"callee")};var Q="object"==typeof exports&&exports&&!exports.nodeType&&exports,tt=Q&&"object"==typeof module&&module&&!module.nodeType&&module,et=tt&&tt.exports===Q?d.Buffer:void 0,nt=(et?et.isBuffer:void 0)||function(){return!1},rt={};rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Arguments]"]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object Boolean]"]=rt["[object DataView]"]=rt["[object Date]"]=rt["[object Error]"]=rt["[object Function]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object WeakMap]"]=!1;var ot,it="object"==typeof exports&&exports&&!exports.nodeType&&exports,at=it&&"object"==typeof module&&module&&!module.nodeType&&module,st=at&&at.exports===it&&c.process,ct=function(){try{var t=at&&at.require&&at.require("util").types;return t||st&&st.binding&&st.binding("util")}catch(t){}}(),ut=ct&&ct.isTypedArray,dt=ut?(ot=ut,function(t){return ot(t)}):function(t){return m(t)&&H(t.length)&&!!rt[g(t)]},lt=Object.prototype.hasOwnProperty;function ht(t,e){var n=w(t),r=!n&&J(t),o=!n&&!r&&nt(t),i=!n&&!r&&!o&&dt(t),a=n||r||o||i,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=s.length;for(var u in t)!e&&!lt.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||q(u,c))||s.push(u);return s}var pt=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),ft=Object.prototype.hasOwnProperty;function bt(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||G))return pt(t);var e,n,r=[];for(var o in Object(t))ft.call(t,o)&&"constructor"!=o&&r.push(o);return r}function yt(t){return null!=(e=t)&&H(e.length)&&!T(e)?ht(t):bt(t);var e}var vt=z(Object,"create");var gt=Object.prototype.hasOwnProperty;var mt=Object.prototype.hasOwnProperty;function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _t(t,e){for(var n=t.length;n--;)if($(t[n][0],e))return n;return-1}wt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},wt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},wt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:mt.call(e,t)},wt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vt&&void 0===e?"__lodash_hash_undefined__":e,this};var jt=Array.prototype.splice;function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=function(){this.__data__=[],this.size=0},Ot.prototype.delete=function(t){var e=this.__data__,n=_t(e,t);return!(n<0)&&(n==e.length-1?e.pop():jt.call(e,n,1),--this.size,!0)},Ot.prototype.get=function(t){var e=this.__data__,n=_t(e,t);return n<0?void 0:e[n][1]},Ot.prototype.has=function(t){return _t(this.__data__,t)>-1},Ot.prototype.set=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var xt=z(d,"Map");function Et(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=function(){this.size=0,this.__data__={hash:new wt,map:new(xt||Ot),string:new wt}},Nt.prototype.delete=function(t){var e=Et(this,t).delete(t);return this.size-=e?1:0,e},Nt.prototype.get=function(t){return Et(this,t).get(t)},Nt.prototype.has=function(t){return Et(this,t).has(t)},Nt.prototype.set=function(t,e){var n=Et(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Dt(t){var e=this.__data__=new Ot(t);this.size=e.size}Dt.prototype.clear=function(){this.__data__=new Ot,this.size=0},Dt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Dt.prototype.get=function(t){return this.__data__.get(t)},Dt.prototype.has=function(t){return this.__data__.has(t)},Dt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Ot){var r=n.__data__;if(!xt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Nt(r)}return n.set(t,e),this.size=n.size,this};var Tt=Object.prototype.propertyIsEnumerable,At=Object.getOwnPropertySymbols,St=At?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}(At(t),(function(e){return Tt.call(t,e)})))}:function(){return[]};function It(t){return function(t,e,n){var r=e(t);return w(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,yt,St)}var Mt=z(d,"DataView"),Lt=z(d,"Promise"),Pt=z(d,"Set"),Ct=L(Mt),kt=L(xt),Ft=L(Lt),Ut=L(Pt),Bt=L(W),Rt=g;(Mt&&"[object DataView]"!=Rt(new Mt(new ArrayBuffer(1)))||xt&&"[object Map]"!=Rt(new xt)||Lt&&"[object Promise]"!=Rt(Lt.resolve())||Pt&&"[object Set]"!=Rt(new Pt)||W&&"[object WeakMap]"!=Rt(new W))&&(Rt=function(t){var e=g(t),n="[object Object]"==e?t.constructor:void 0,r=n?L(n):"";if(r)switch(r){case Ct:return"[object DataView]";case kt:return"[object Map]";case Ft:return"[object Promise]";case Ut:return"[object Set]";case Bt:return"[object WeakMap]"}return e});var zt=Rt,Wt=d.Uint8Array;function Vt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Nt;++e<n;)this.add(t[e])}function qt(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}Vt.prototype.add=Vt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Vt.prototype.has=function(t){return this.__data__.has(t)};function $t(t,e,n,r,o,i){var a=1&n,s=t.length,c=e.length;if(s!=c&&!(a&&c>s))return!1;var u=i.get(t);if(u&&i.get(e))return u==e;var d=-1,l=!0,h=2&n?new Vt:void 0;for(i.set(t,e),i.set(e,t);++d<s;){var p=t[d],f=e[d];if(r)var b=a?r(f,p,d,e,t,i):r(p,f,d,t,e,i);if(void 0!==b){if(b)continue;l=!1;break}if(h){if(!qt(e,(function(t,e){if(a=e,!h.has(a)&&(p===t||o(p,t,n,r,i)))return h.push(e);var a}))){l=!1;break}}else if(p!==f&&!o(p,f,n,r,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function Ht(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function Gt(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var Kt=l?l.prototype:void 0,Xt=Kt?Kt.valueOf:void 0;var Yt=Object.prototype.hasOwnProperty;var Zt=Object.prototype.hasOwnProperty;function Jt(t,e,n,r,o,i){var a=w(t),s=w(e),c=a?"[object Array]":zt(t),u=s?"[object Array]":zt(e),d="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(u="[object Arguments]"==u?"[object Object]":u),h=c==u;if(h&&nt(t)){if(!nt(e))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new Dt),a||dt(t)?$t(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new Wt(t),new Wt(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return $(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=Ht;case"[object Set]":var c=1&r;if(s||(s=Gt),t.size!=e.size&&!c)return!1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var d=$t(s(t),s(e),r,o,i,a);return a.delete(t),d;case"[object Symbol]":if(Xt)return Xt.call(t)==Xt.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var p=d&&Zt.call(t,"__wrapped__"),f=l&&Zt.call(e,"__wrapped__");if(p||f){var b=p?t.value():t,y=f?e.value():e;return i||(i=new Dt),o(b,y,n,r,i)}}return!!h&&(i||(i=new Dt),function(t,e,n,r,o,i){var a=1&n,s=It(t),c=s.length;if(c!=It(e).length&&!a)return!1;for(var u=c;u--;){var d=s[u];if(!(a?d in e:Yt.call(e,d)))return!1}var l=i.get(t);if(l&&i.get(e))return l==e;var h=!0;i.set(t,e),i.set(e,t);for(var p=a;++u<c;){var f=t[d=s[u]],b=e[d];if(r)var y=a?r(b,f,d,e,t,i):r(f,b,d,t,e,i);if(!(void 0===y?f===b||o(f,b,n,r,i):y)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=t.constructor,g=e.constructor;v!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g)&&(h=!1)}return i.delete(t),i.delete(e),h}(t,e,n,r,o,i))}function Qt(t,e,n,r,o){return t===e||(null==t||null==e||!m(t)&&!m(e)?t!=t&&e!=e:Jt(t,e,n,r,Qt,o))}var te=function(){return d.Date.now()},ee=Math.max,ne=Math.min;function re(t,e,n){var r,o,i,a,s,c,u=0,d=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,i=o;return r=o=void 0,u=e,a=t.apply(i,n)}function f(t){return u=t,s=setTimeout(y,e),d?p(t):a}function b(t){var n=t-c;return void 0===c||n>=e||n<0||l&&t-u>=i}function y(){var t=te();if(b(t))return v(t);s=setTimeout(y,function(t){var n=e-(t-c);return l?ne(n,i-(t-u)):n}(t))}function v(t){return s=void 0,h&&r?p(t):(r=o=void 0,a)}function g(){var t=te(),n=b(t);if(r=arguments,o=this,c=t,n){if(void 0===s)return f(c);if(l)return clearTimeout(s),s=setTimeout(y,e),p(c)}return void 0===s&&(s=setTimeout(y,e)),a}return e=D(e)||0,_(n)&&(d=!!n.leading,i=(l="maxWait"in n)?ee(D(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=o=s=void 0},g.flush=function(){return void 0===s?a:v(te())},g}function oe(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return _(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),re(t,e,{leading:r,maxWait:e,trailing:o})}const ie=function(t,e={}){let n=e;const r={all:[]};return{subscribe:function(...t){let e,n="all";"string"==typeof t[0]?(n=t[0],e=t[1]):e=t[0],r[n]||(r[n]=[]),r[n].push(e)},dispatch:function(e){const o=n;if(n=t(n,e),!e)return void(r.all&&r.all.forEach(t=>t(n)));const a=function(t){const e={player:Object.keys(i),progress:Object.keys(s)};for(let[n,r]of Object.entries(e))if(r.includes(t))return n;return null}(e.type);return a&&r[a]?r[a].forEach(t=>{var e,r;e=n[a],r=o[a],Qt(e,r)||t(n[a])}):void 0},getState:function(){return n}}}(function(t){const e=Object.keys(t);return function(n,r){const o={};for(let i=0;i<e.length;i++){const a=e[i],s=(0,t[a])(n[a],r);o[a]=s}return o}}({player:function(t,e){if(t||(t=o),!e)return t;const{type:n,data:r}=e;switch(n){case i.SPEED:return{...t,...r};default:return t}},progress:function(t,e){if(t||(t=a),!e)return t;const{type:n,data:r}=e;switch(n){case s.FORWARD:return{...t,frame:r.frame,curTime:r.curTime};case s.BACKWARD:return{...t,frame:r.frame};case s.INFO:return{...t,...r};default:return t}}})),ae=t=>{const e={},n=t.attributes;return t.checked&&(e.checked="true"),n&&n.length?Object.values(n).reduce((t,e)=>{const{name:n,value:r}=e;return t[n]=r,t},e):e},se=(t,n)=>{if(t.nodeType===Node.TEXT_NODE)return null;if("SCRIPT"===t.tagName)return null;const r=((t,n)=>{const r=t.tagName.toLocaleLowerCase().trim();return{id:e.createNodeId(),attrs:ae(t),tag:r,children:[],extra:{isSVG:n||"svg"===r}}})(t,n),{id:o}=r;return e.addNode(t,o),n=n||r.extra.isSVG,t.childNodes.forEach(t=>{if(t.nodeType===Node.ELEMENT_NODE){const e=se(t,n);e&&r.children.push(e)}else if(t.nodeType===Node.TEXT_NODE&&t.nodeValue){const e=ce(t.nodeValue);e&&r.children.push(e)}}),r},ce=t=>t.replace(/\r\n/g,"").replace(/\n/g,""),ue=t=>{const{head:n,body:r}=t;return{id:e.createNodeId(),tag:"html",attrs:{},children:[se(n),se(r)],extra:{isSVG:!1}}};function de(t,e,n){if("style"!==e){if(!/^on\w+$/.test(e))return t.setAttribute(e,!0===n?"":String(n))}else if(n)if("string"==typeof n)t.style.cssText=n;else if(null!==n&&"object"==typeof n)for(const[e,r]of Object.entries(n))t.style[e]=r}function le(t,n){if(null==t)return null;if("string"==typeof t)return function(t,e){let n;return n=document.createTextNode(t),n}(t);const r=function(t){const{id:n,extra:r}=t,{isSVG:o}=r;let i;const a=(s=t.tag,{script:"noscript"}[s]||s);var s;i=o?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a);return e.updateNode(n,i),i}(t);return(t.children&&t.children.length||r.childNodes&&r.childNodes.length)&&function(t,e){const n=[];t.children.slice().forEach(t=>{let r=n.pop();r=le(t),r&&e.appendChild(r)})}(t,r),function(t,e){const{attrs:n}=t;for(const[t,r]of Object.entries(n))de(e,t,r)}(t,r),r}var he,pe,fe,be;!function(t){t.WINDOW="WINDOW",t.DOM="DOM",t.MOUSE="MOUSE",t.DOM_UPDATE="DOM_UPDATE",t.FORM_EL_UPDATE="FORM_EL_UPDATE"}(he||(he={})),function(t){t.ATTR="ATTR",t.INPUT="INPUT",t.CHANGE="CHANGE",t.FOCUS="FOCUS",t.BLUR="BLUR"}(pe||(pe={})),function(t){t.MOVE="MOVE",t.CLICK="click"}(fe||(fe={})),function(t){t.ADD="ADD",t.DELETE="DELETE",t.MOVE="MOVE"}(be||(be={}));const ye={windowSnapshot:function(t){const e=window.location.href;var n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;t({type:he.WINDOW,data:{width:n,height:r,href:e},time:Date.now().toString()})},DOMSnapshot:function(t){t({type:he.DOM,data:{vNode:ue(document)},time:Date.now().toString()})},mouseObserve:function(n){!function(){const e=oe(t=>{n({type:he.MOUSE,data:{type:fe.MOVE,x:t.x,y:t.y},time:Date.now().toString()})},100,{trailing:!0});document.addEventListener("mousemove",e),t.add(()=>{document.removeEventListener("mousemove",e)})}(),function(){const r=oe(t=>{n({type:he.MOUSE,data:{type:fe.CLICK,id:e.getNodeId(t.target),x:t.x,y:t.y},time:Date.now().toString()})},250);t.add(()=>{document.removeEventListener("click",r)}),document.addEventListener("click",r)}()},DOMObserve:function(n){const r=new MutationObserver(t=>{const r=[];t.forEach(t=>{const{target:n,addedNodes:o,removedNodes:i,type:a,nextSibling:s,attributeName:c}=t,u=(d=a,function(t){r.push({mType:d,data:t})});var d;switch(a){case"attributes":if(c){const t=n.getAttribute(c);u({nodeId:e.getNodeId(n),value:t,attr:c})}break;case"characterData":const t=n.parentNode;u({parentId:e.getNodeId(t),value:n.nodeValue,pos:t.childNodes.length>0?[...t.childNodes].indexOf(n):null});break;case"childList":o.length&&o.forEach(t=>{let r,o;if(t.nodeType===Node.TEXT_NODE){r=t.nodeValue;const n=Array.from(t.parentNode.childNodes).indexOf(t);u({type:be.ADD,parentId:e.getNodeId(t.parentNode),value:t.textContent,pos:n})}else{o=se(t);const r=t.parentNode;u({type:be.ADD,parentId:e.getNodeId(n),vNode:o,pos:r.childNodes.length>0?[...r.childNodes].indexOf(t):null})}}),i.length&&i.forEach(t=>{u({type:be.DELETE,parentId:e.getNodeId(n),nodeId:e.getNodeId(t)||null})})}}),r.length&&n({type:he.DOM_UPDATE,data:{mutations:r},time:Date.now().toString()})});r.observe(document.body,{attributeOldValue:!0,attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),t.add(()=>{r.disconnect()})},formElementObserve:function(n){!function(n){const r=["input","change","focus","blur"];function o(t){switch(t.type){case"input":case"change":n({type:he.FORM_EL_UPDATE,data:{type:pe.INPUT,id:e.getNodeId(t.target),value:t.target.value},time:Date.now().toString()});break;case"focus":n({type:he.FORM_EL_UPDATE,data:{type:pe.FOCUS,id:e.getNodeId(t.target)},time:Date.now().toString()});break;case"blur":n({type:he.FORM_EL_UPDATE,data:{type:pe.BLUR,id:e.getNodeId(t.target)},time:Date.now().toString()})}}r.map(t=>e=>{document.addEventListener(t,e,{once:!1,passive:!0,capture:!0})}).forEach(t=>t(o)),t.add(()=>{r.forEach(t=>{document.removeEventListener(t,o)})})}(n),function(n){function r(t,r){n({type:he.FORM_EL_UPDATE,data:{type:pe.ATTR,id:e.getNodeId(this),key:t,value:r},time:Date.now().toString()})}[[HTMLInputElement.prototype,"value"],[HTMLInputElement.prototype,"checked"],[HTMLSelectElement.prototype,"value"],[HTMLTextAreaElement.prototype,"value"]].map(e=>()=>{const[n,o]=e,i=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(n,o,{set:function(t){setTimeout(()=>{r.call(this,o,t)}),i&&i.set&&i.set.call(this,t)}}),t.add(()=>{i&&Object.defineProperty(n,o,i)})}).concat([]).forEach(t=>t())}(n)}},ve={uninstall:()=>{Array.from(t.values()).forEach(t=>t())}},ge=({emitter:t}={})=>(function(t){[...Object.values(ye)].forEach(e=>{e(t)})}(t),ve);class me{constructor(t){this.vNode=t.vNode,this.width=t.width,this.height=t.height,this.init()}init(){this.initTemplate(),this.initSandbox()}initSandbox(){this.sandBox=this.container.querySelector("#wr-sandbox"),this.sandBox.style.width=this.width+"px",this.sandBox.style.height=this.height+"px";const t=this.sandBox.contentWindow.document;t.replaceChild(le(this.vNode),t.documentElement)}initTemplate(){document.head.appendChild(this.createStyle()),document.body.appendChild(this.createContainer())}createContainer(){const t=(new DOMParser).parseFromString('<div>\n    <div class="wr-container">\n        <div id="wr-player">\n            <iframe id="wr-sandbox" sandbox="allow-same-origin allow-scripts"></iframe>\n        </div>\n        <div class="wr-panel">\n            <div class="wr-keyboard">\n                <button type="button" class="pause" speed="0">Pause</button>\n                <button type="button" class="play" speed="1" disabled>Play</button>\n                <button type="button" class="speed" disabled speed="1">1x</button>\n                <button type="button" class="speed" speed="8">8x</button>\n                <button type="button" class="speed" speed="16">16x</button>\n            </div>\n            <div class="wr-progress">\n                <div class="wr-slider-bar">\n                    <div class="wr-thumb"></div>\n                </div>\n            </div>\n        </div>\n        <div id="wr-pointer">\n            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="16px" height="16px">\n                <path\n                    d="M 7 2.015625 L 20.160156 14.34375 L 14.785156 14.828125 L 13.808594 14.917969 L 14.214844 15.8125 L 17.476563 22.957031 L 15.070313 24.015625 L 11.957031 16.792969 L 11.566406 15.882813 L 10.84375 16.5625 L 7.027344 20.144531 L 7 2.015625 M 7 0.015625 C 6.730469 0.015625 6.460938 0.0664063 6.203125 0.179688 C 5.472656 0.496094 5 1.21875 5 2.015625 L 5.027344 20.144531 C 5.027344 20.941406 5.503906 21.660156 6.230469 21.976563 C 6.488281 22.085938 6.757813 22.140625 7.023438 22.140625 C 7.523438 22.140625 8.015625 21.953125 8.394531 21.601563 L 10.855469 19.289063 L 13.234375 24.804688 C 13.445313 25.296875 13.84375 25.679688 14.339844 25.875 C 14.574219 25.96875 14.820313 26.015625 15.070313 26.015625 C 15.34375 26.015625 15.617188 25.957031 15.875 25.84375 L 18.28125 24.785156 C 18.769531 24.570313 19.15625 24.167969 19.34375 23.667969 C 19.535156 23.167969 19.519531 22.613281 19.296875 22.125 L 16.796875 16.65625 L 20.339844 16.332031 C 21.125 16.261719 21.796875 15.738281 22.050781 14.992188 C 22.308594 14.246094 22.101563 13.421875 21.527344 12.882813 L 8.367188 0.554688 C 7.988281 0.199219 7.496094 0.015625 7 0.015625 Z" />\n            </svg>\n        </div>\n    </div>\n</div>\n',"text/html").body.firstChild;return t.style.width=this.width+"px",t.style.height=this.height+"px",t.style.position="relative",t.style.margin="0 auto",this.container=t}createStyle(){return(new DOMParser).parseFromString("<style>body {\n    margin: 0;\n}\n\n#wr-sandbox {\n    background: white;\n    vertical-align: top;\n    border: 0;\n}\n\n#wr-player {\n    position: relative;\n    pointer-events: none;\n}\n\n#wr-pointer {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    transition: all .2s\n}\n\n#wr-pointer[active] svg {\n    fill: red;\n    transform: scale3d(1.2, 1.2, 1.2);\n}\n\n.wr-container {\n    background: grey;\n}\n\n.wr-panel {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px;\n    height: 40px;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    background: darkgray;\n}\n\n.wr-keyboard {\n    float: left;\n    width: 200px;\n}\n\n.wr-progress {\n    margin-left: 200px;\n    height: 20px;\n    overflow: hidden;\n    width: calc(100% - 200px);\n}\n\n.wr-slider-bar {\n    position: relative;\n    padding: 0 5px;\n    width: calc(100% - 22px);\n    height: 5px;\n    margin: 7.5px 0;\n    background: white;\n    border-radius: 2.5px;\n}\n\n.wr-thumb {\n    width: 12px;\n    height: 12px;\n    box-sizing: border-box;\n    border: 1px solid white;\n    background: black;\n    border-radius: 100%;\n    cursor: pointer;\n    position: absolute;\n    left: 0%;\n    transform: translateY(-3px);\n    z-index: 10;\n    transition: left .01s linear;\n}\n</style>","text/html").head.firstChild}}class we{constructor(t){this.container=t,this.init()}init(){this.controller=this.container.querySelector(".wr-keyboard"),this.pauseBtn=this.controller.querySelector(".pause"),this.playBtn=this.controller.querySelector(".play"),this.controller.addEventListener("click",t=>{if(t.target&&"button"===t.target.type){const e=Number(t.target.getAttribute("speed"));this.speed=e,ie.dispatch({type:i.SPEED,data:{speed:e}})}}),ie.subscribe("player",t=>{this.paly(t.speed),this.setSpeed(t.speed)})}paly(t){0!==t?(this.pauseBtn.removeAttribute("disabled"),this.playBtn.setAttribute("disabled","")):(this.playBtn.removeAttribute("disabled"),this.pauseBtn.setAttribute("disabled",""))}setSpeed(t){const e=this.container.querySelectorAll(".speed");[...e].forEach(t=>{t.removeAttribute("disabled")});const n=1===t?0:8===t?1:16===t?2:-1;n>-1&&e[n].setAttribute("disabled","")}}function _e(t){const{type:n,data:r}=t;switch(n){case he.MOUSE:const{x:t,y:n,type:o}=r;o===fe.MOVE?this.pointer.move(t,n):o===fe.CLICK&&this.pointer.click(t,n);break;case he.DOM_UPDATE:const{mutations:i}=r;i.forEach(t=>{const{mType:n,data:r}=t,{value:o,attr:i,type:a,parentId:s,pos:c,nodeId:u,vNode:d}=r;switch(n){case"attributes":e.getNode(u).setAttribute(i,o);break;case"characterData":const t=e.getNode(s);if(null!==c){const e=t.childNodes[c];t.replaceChild(document.createTextNode(o),e)}else t.innerText=o;break;case"childList":const n=e.getNode(s),r=e.getNode(u)||le(d);if(a===be.DELETE)r&&n.removeChild(r);else if(be.ADD)if(o){const t=document.createTextNode(o);n.childNodes.length?n.replaceChild(t,n.childNodes[c]):n.appendChild(t)}else n.insertBefore(r,n.childNodes[c])}});break;case he.FORM_EL_UPDATE:const{id:a,key:s,type:c,value:u}=r,d=e.getNode(a);c===pe.INPUT?d.value=u:c===pe.FOCUS?d.focus():c===pe.BLUR?d.blur():c===pe.ATTR&&(d[s]=u)}}class je{constructor(t,e,n){this.speed=0,this.index=0,this.frameIndex=0,this.lastPercentage=0,this.data=t,this.pointer=e,this.progress=n,ie.subscribe("player",t=>{this.progressState=ie.getState().progress;const e=t.speed;this.speed=e,e>0?this.play(e):this.pause(),this.frames=this.getAccuratelyFrame()})}play(t){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(function n(){const r=Date.now()-e;if(this.frameIndex>0&&!this.frames[this.frameIndex+1])return void this.stop();this.startTime||(this.startTime=Number(this.frames[this.frameIndex]));const o=this.startTime+r*t,i=Number(this.frames[this.frameIndex+1]);if(o>=i){this.frameIndex++;const t=this.frameIndex/this.frames.length*100;t-this.lastPercentage>this.getPercentInterval()&&(this.progress.updateProgress(t),this.lastPercentage=t),this.data[this.index]&&o>+this.data[this.index].time&&(this.execFrame.call(this,this.data[this.index]),this.index++)}this.requestID=requestAnimationFrame(n.bind(this))}.bind(this));const e=Date.now();this.startTime=0}pause(){cancelAnimationFrame(this.requestID),ie.dispatch({type:i.SPEED,data:{speed:0}})}stop(){this.index=0,this.pause()}execFrame(t){_e.call(this,t)}getPercentInterval(){return.08*this.speed+.2}getAccuratelyFrame(t=50){this.progressState=ie.getState().progress;const{startTime:e,endTime:n}=this.progressState,r=+n+500,o=[];for(let n=+e;n<r;n+=t)o.push(n);return o.push(r),o}}class Oe{constructor(){this.x=0,this.y=0,this.initPointer()}initPointer(){this.pointer=document.getElementById("wr-pointer"),this.move(0,0)}move(t,e){this.x=t,this.y=e,this.pointer.style.left=this.x+"px",this.pointer.style.top=this.y+"px"}click(t,e){this.move(t,e),this.pointer.setAttribute("active",""),setTimeout(()=>{this.pointer.removeAttribute("active")},20)}}class xe{constructor(t){this.totalDistance=0,this.progress=t.querySelector(".wr-progress"),this.thumb=this.progress.querySelector(".wr-thumb"),this.slider=this.progress.querySelector(".wr-slider-bar")}updateProgress(t){this.thumb.style.left=t+"%"}}class Ee{constructor(t,e){this.container=t,this.data=e,this.initComponent()}initComponent(){this.keyboard=new we(this.container),this.progress=new xe(this.container),this.pointer=new Oe,this.player=new je(this.data,this.pointer,this.progress)}}async function Ne(){const t=await r,{width:e,height:n,vNode:o,data:a}=await t.getData(),c=new me({vNode:o,width:e,height:n});new Ee(c.container,a),ie.dispatch({type:s.INFO,data:{frame:0,curTime:a[0].time,startTime:a[0].time,endTime:a[a.length-1].time,length:a.length}}),ie.dispatch({type:i.SPEED,data:{speed:1}})}export{r as DB,ge as record,Ne as replay};
//# sourceMappingURL=replay.esm.js.map
