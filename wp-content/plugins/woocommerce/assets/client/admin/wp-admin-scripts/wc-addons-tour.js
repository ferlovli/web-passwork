(()=>{var e={2864:(e,t,r)=>{"use strict";var o=r(28487),n=r(25592),a=n(o("String.prototype.indexOf"));e.exports=function(e,t){var r=o(e,!!t);return"function"==typeof r&&a(e,".prototype.")>-1?n(r):r}},25592:(e,t,r)=>{"use strict";var o=r(22698),n=r(28487),a=n("%Function.prototype.apply%"),i=n("%Function.prototype.call%"),c=n("%Reflect.apply%",!0)||o.call(i,a),l=n("%Object.getOwnPropertyDescriptor%",!0),p=n("%Object.defineProperty%",!0),u=n("%Math.max%");if(p)try{p({},"a",{value:1})}catch(e){p=null}e.exports=function(e){var t=c(o,i,arguments);if(l&&p){var r=l(t,"length");r.configurable&&p(t,"length",{value:1+u(0,e.length-(arguments.length-1))})}return t};var f=function(){return c(o,a,arguments)};p?p(e.exports,"apply",{value:f}):e.exports.apply=f},59748:e=>{"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,n="[object Function]";e.exports=function(e){var a=this;if("function"!=typeof a||o.call(a)!==n)throw new TypeError(t+a);for(var i,c=r.call(arguments,1),l=function(){if(this instanceof i){var t=a.apply(this,c.concat(r.call(arguments)));return Object(t)===t?t:this}return a.apply(e,c.concat(r.call(arguments)))},p=Math.max(0,a.length-c.length),u=[],f=0;f<p;f++)u.push("$"+f);if(i=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(l),a.prototype){var s=function(){};s.prototype=a.prototype,i.prototype=new s,s.prototype=null}return i}},22698:(e,t,r)=>{"use strict";var o=r(59748);e.exports=Function.prototype.bind||o},28487:(e,t,r)=>{"use strict";var o,n=SyntaxError,a=Function,i=TypeError,c=function(e){try{return a('"use strict"; return ('+e+").constructor;")()}catch(e){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(e){l=null}var p=function(){throw new i},u=l?function(){try{return p}catch(e){try{return l(arguments,"callee").get}catch(e){return p}}}():p,f=r(72770)(),s=Object.getPrototypeOf||function(e){return e.__proto__},y={},d="undefined"==typeof Uint8Array?o:s(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?s([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":y,"%AsyncGenerator%":y,"%AsyncGeneratorFunction%":y,"%AsyncIteratorPrototype%":y,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":y,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?s(s([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?s((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?s((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?s(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet},b=function e(t){var r;if("%AsyncFunction%"===t)r=c("async function () {}");else if("%GeneratorFunction%"===t)r=c("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=c("async function* () {}");else if("%AsyncGenerator%"===t){var o=e("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=e("%AsyncGenerator%");n&&(r=s(n.prototype))}return m[t]=r,r},h={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},g=r(22698),v=r(22786),w=g.call(Function.call,Array.prototype.concat),S=g.call(Function.apply,Array.prototype.splice),j=g.call(Function.call,String.prototype.replace),O=g.call(Function.call,String.prototype.slice),A=g.call(Function.call,RegExp.prototype.exec),P=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,E=/\\(\\)?/g,k=function(e){var t=O(e,0,1),r=O(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return j(e,P,(function(e,t,r,n){o[o.length]=r?j(n,E,"$1"):t||e})),o},x=function(e,t){var r,o=e;if(v(h,o)&&(o="%"+(r=h[o])[0]+"%"),v(m,o)){var a=m[o];if(a===y&&(a=b(o)),void 0===a&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');if(null===A(/^%?[^%]*%?$/,e))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=k(e),o=r.length>0?r[0]:"",a=x("%"+o+"%",t),c=a.name,p=a.value,u=!1,f=a.alias;f&&(o=f[0],S(r,w([0,1],f)));for(var s=1,y=!0;s<r.length;s+=1){var d=r[s],b=O(d,0,1),h=O(d,-1);if(('"'===b||"'"===b||"`"===b||'"'===h||"'"===h||"`"===h)&&b!==h)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&y||(u=!0),v(m,c="%"+(o+="."+d)+"%"))p=m[c];else if(null!=p){if(!(d in p)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(l&&s+1>=r.length){var g=l(p,d);p=(y=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:p[d]}else y=v(p,d),p=p[d];y&&!u&&(m[c]=p)}}return p}},72770:(e,t,r)=>{"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=r(69578);e.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},69578:e=>{"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(e,t);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},22786:(e,t,r)=>{"use strict";var o=r(22698);e.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},31741:(e,t,r)=>{var o="function"==typeof Map&&Map.prototype,n=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,a=o&&n&&"function"==typeof n.get?n.get:null,i=o&&Map.prototype.forEach,c="function"==typeof Set&&Set.prototype,l=Object.getOwnPropertyDescriptor&&c?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,p=c&&l&&"function"==typeof l.get?l.get:null,u=c&&Set.prototype.forEach,f="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,s="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,y="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,m=Object.prototype.toString,b=Function.prototype.toString,h=String.prototype.match,g=String.prototype.slice,v=String.prototype.replace,w=String.prototype.toUpperCase,S=String.prototype.toLowerCase,j=RegExp.prototype.test,O=Array.prototype.concat,A=Array.prototype.join,P=Array.prototype.slice,E=Math.floor,k="function"==typeof BigInt?BigInt.prototype.valueOf:null,x=Object.getOwnPropertySymbols,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,I="function"==typeof Symbol&&"object"==typeof Symbol.iterator,R="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,F=Object.prototype.propertyIsEnumerable,N=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function M(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||j.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var o=e<0?-E(-e):E(e);if(o!==e){var n=String(o),a=g.call(t,n.length+1);return v.call(n,r,"$&_")+"."+v.call(v.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return v.call(t,r,"$&_")}var C=r(50189),T=C.custom,W=H(T)?T:null;function D(e,t,r){var o="double"===(r.quoteStyle||t)?'"':"'";return o+e+o}function U(e){return v.call(String(e),/"/g,"&quot;")}function B(e){return!("[object Array]"!==q(e)||R&&"object"==typeof e&&R in e)}function L(e){return!("[object RegExp]"!==q(e)||R&&"object"==typeof e&&R in e)}function H(e){if(I)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!_)return!1;try{return _.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,o,n){var c=r||{};if($(c,"quoteStyle")&&"single"!==c.quoteStyle&&"double"!==c.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if($(c,"maxStringLength")&&("number"==typeof c.maxStringLength?c.maxStringLength<0&&c.maxStringLength!==1/0:null!==c.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=!$(c,"customInspect")||c.customInspect;if("boolean"!=typeof l&&"symbol"!==l)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if($(c,"indent")&&null!==c.indent&&"\t"!==c.indent&&!(parseInt(c.indent,10)===c.indent&&c.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if($(c,"numericSeparator")&&"boolean"!=typeof c.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var m=c.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return z(t,c);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var w=String(t);return m?M(t,w):w}if("bigint"==typeof t){var j=String(t)+"n";return m?M(t,j):j}var E=void 0===c.depth?5:c.depth;if(void 0===o&&(o=0),o>=E&&E>0&&"object"==typeof t)return B(t)?"[Array]":"[Object]";var x,T=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=A.call(Array(e.indent+1)," ")}return{base:r,prev:A.call(Array(t+1),r)}}(c,o);if(void 0===n)n=[];else if(V(n,t)>=0)return"[Circular]";function G(t,r,a){if(r&&(n=P.call(n)).push(r),a){var i={depth:c.depth};return $(c,"quoteStyle")&&(i.quoteStyle=c.quoteStyle),e(t,i,o+1,n)}return e(t,c,o+1,n)}if("function"==typeof t&&!L(t)){var Q=function(e){if(e.name)return e.name;var t=h.call(b.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),ee=Z(t,G);return"[Function"+(Q?": "+Q:" (anonymous)")+"]"+(ee.length>0?" { "+A.call(ee,", ")+" }":"")}if(H(t)){var te=I?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):_.call(t);return"object"!=typeof t||I?te:J(te)}if((x=t)&&"object"==typeof x&&("undefined"!=typeof HTMLElement&&x instanceof HTMLElement||"string"==typeof x.nodeName&&"function"==typeof x.getAttribute)){for(var re="<"+S.call(String(t.nodeName)),oe=t.attributes||[],ne=0;ne<oe.length;ne++)re+=" "+oe[ne].name+"="+D(U(oe[ne].value),"double",c);return re+=">",t.childNodes&&t.childNodes.length&&(re+="..."),re+"</"+S.call(String(t.nodeName))+">"}if(B(t)){if(0===t.length)return"[]";var ae=Z(t,G);return T&&!function(e){for(var t=0;t<e.length;t++)if(V(e[t],"\n")>=0)return!1;return!0}(ae)?"["+Y(ae,T)+"]":"[ "+A.call(ae,", ")+" ]"}if(function(e){return!("[object Error]"!==q(e)||R&&"object"==typeof e&&R in e)}(t)){var ie=Z(t,G);return"cause"in Error.prototype||!("cause"in t)||F.call(t,"cause")?0===ie.length?"["+String(t)+"]":"{ ["+String(t)+"] "+A.call(ie,", ")+" }":"{ ["+String(t)+"] "+A.call(O.call("[cause]: "+G(t.cause),ie),", ")+" }"}if("object"==typeof t&&l){if(W&&"function"==typeof t[W]&&C)return C(t,{depth:E-o});if("symbol"!==l&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!a||!e||"object"!=typeof e)return!1;try{a.call(e);try{p.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var ce=[];return i.call(t,(function(e,r){ce.push(G(r,t,!0)+" => "+G(e,t))})),X("Map",a.call(t),ce,T)}if(function(e){if(!p||!e||"object"!=typeof e)return!1;try{p.call(e);try{a.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var le=[];return u.call(t,(function(e){le.push(G(e,t))})),X("Set",p.call(t),le,T)}if(function(e){if(!f||!e||"object"!=typeof e)return!1;try{f.call(e,f);try{s.call(e,s)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return K("WeakMap");if(function(e){if(!s||!e||"object"!=typeof e)return!1;try{s.call(e,s);try{f.call(e,f)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return K("WeakSet");if(function(e){if(!y||!e||"object"!=typeof e)return!1;try{return y.call(e),!0}catch(e){}return!1}(t))return K("WeakRef");if(function(e){return!("[object Number]"!==q(e)||R&&"object"==typeof e&&R in e)}(t))return J(G(Number(t)));if(function(e){if(!e||"object"!=typeof e||!k)return!1;try{return k.call(e),!0}catch(e){}return!1}(t))return J(G(k.call(t)));if(function(e){return!("[object Boolean]"!==q(e)||R&&"object"==typeof e&&R in e)}(t))return J(d.call(t));if(function(e){return!("[object String]"!==q(e)||R&&"object"==typeof e&&R in e)}(t))return J(G(String(t)));if(!function(e){return!("[object Date]"!==q(e)||R&&"object"==typeof e&&R in e)}(t)&&!L(t)){var pe=Z(t,G),ue=N?N(t)===Object.prototype:t instanceof Object||t.constructor===Object,fe=t instanceof Object?"":"null prototype",se=!ue&&R&&Object(t)===t&&R in t?g.call(q(t),8,-1):fe?"Object":"",ye=(ue||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(se||fe?"["+A.call(O.call([],se||[],fe||[]),": ")+"] ":"");return 0===pe.length?ye+"{}":T?ye+"{"+Y(pe,T)+"}":ye+"{ "+A.call(pe,", ")+" }"}return String(t)};var G=Object.prototype.hasOwnProperty||function(e){return e in this};function $(e,t){return G.call(e,t)}function q(e){return m.call(e)}function V(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1}function z(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return z(g.call(e,0,t.maxStringLength),t)+o}return D(v.call(v.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Q),"single",t)}function Q(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+w.call(t.toString(16))}function J(e){return"Object("+e+")"}function K(e){return e+" { ? }"}function X(e,t,r,o){return e+" ("+t+") {"+(o?Y(r,o):A.call(r,", "))+"}"}function Y(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+A.call(e,","+r)+"\n"+t.prev}function Z(e,t){var r=B(e),o=[];if(r){o.length=e.length;for(var n=0;n<e.length;n++)o[n]=$(e,n)?t(e[n],e):""}var a,i="function"==typeof x?x(e):[];if(I){a={};for(var c=0;c<i.length;c++)a["$"+i[c]]=i[c]}for(var l in e)$(e,l)&&(r&&String(Number(l))===l&&l<e.length||I&&a["$"+l]instanceof Symbol||(j.call(/[^\w$]/,l)?o.push(t(l,e)+": "+t(e[l],e)):o.push(l+": "+t(e[l],e))));if("function"==typeof x)for(var p=0;p<i.length;p++)F.call(e,i[p])&&o.push("["+t(i[p])+"]: "+t(e[i[p]],e));return o}},38243:e=>{"use strict";var t=String.prototype.replace,r=/%20/g,o="RFC3986";e.exports={default:o,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:o}},79119:(e,t,r)=>{"use strict";var o=r(67576),n=r(93649),a=r(38243);e.exports={formats:a,parse:n,stringify:o}},93649:(e,t,r)=>{"use strict";var o=r(7173),n=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},p=function(e,t,r,o){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(a),p=c?a.slice(0,c.index):a,u=[];if(p){if(!r.plainObjects&&n.call(Object.prototype,p)&&!r.allowPrototypes)return;u.push(p)}for(var f=0;r.depth>0&&null!==(c=i.exec(a))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+a.slice(c.index)+"]"),function(e,t,r,o){for(var n=o?t:l(t,r),a=e.length-1;a>=0;--a){var i,c=e[a];if("[]"===c&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var p="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(p,10);r.parseArrays||""!==p?!isNaN(u)&&c!==p&&String(u)===p&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:"__proto__"!==p&&(i[p]=n):i={0:n}}n=i}return n}(u,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:i.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,p={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,s=u.split(t.delimiter,f),y=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<s.length;++r)0===s[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===s[r]?d="utf-8":"utf8=%26%2310003%3B"===s[r]&&(d="iso-8859-1"),y=r,r=s.length);for(r=0;r<s.length;++r)if(r!==y){var m,b,h=s[r],g=h.indexOf("]="),v=-1===g?h.indexOf("="):g+1;-1===v?(m=t.decoder(h,i.decoder,d,"key"),b=t.strictNullHandling?null:""):(m=t.decoder(h.slice(0,v),i.decoder,d,"key"),b=o.maybeMap(l(h.slice(v+1),t),(function(e){return t.decoder(e,i.decoder,d,"value")}))),b&&t.interpretNumericEntities&&"iso-8859-1"===d&&(b=c(b)),h.indexOf("[]=")>-1&&(b=a(b)?[b]:b),n.call(p,m)?p[m]=o.combine(p[m],b):p[m]=b}return p}(e,r):e,f=r.plainObjects?Object.create(null):{},s=Object.keys(u),y=0;y<s.length;++y){var d=s[y],m=p(d,u[d],r,"string"==typeof e);f=o.merge(f,m,r)}return!0===r.allowSparse?f:o.compact(f)}},67576:(e,t,r)=>{"use strict";var o=r(44852),n=r(7173),a=r(38243),i=Object.prototype.hasOwnProperty,c={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,p=String.prototype.split,u=Array.prototype.push,f=function(e,t){u.apply(e,l(t)?t:[t])},s=Date.prototype.toISOString,y=a.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:y,formatter:a.formatters[y],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},m={},b=function e(t,r,a,i,c,u,s,y,b,h,g,v,w,S,j){for(var O,A=t,P=j,E=0,k=!1;void 0!==(P=P.get(m))&&!k;){var x=P.get(t);if(E+=1,void 0!==x){if(x===E)throw new RangeError("Cyclic object value");k=!0}void 0===P.get(m)&&(E=0)}if("function"==typeof s?A=s(r,A):A instanceof Date?A=h(A):"comma"===a&&l(A)&&(A=n.maybeMap(A,(function(e){return e instanceof Date?h(e):e}))),null===A){if(i)return u&&!w?u(r,d.encoder,S,"key",g):r;A=""}if("string"==typeof(O=A)||"number"==typeof O||"boolean"==typeof O||"symbol"==typeof O||"bigint"==typeof O||n.isBuffer(A)){if(u){var _=w?r:u(r,d.encoder,S,"key",g);if("comma"===a&&w){for(var I=p.call(String(A),","),R="",F=0;F<I.length;++F)R+=(0===F?"":",")+v(u(I[F],d.encoder,S,"value",g));return[v(_)+"="+R]}return[v(_)+"="+v(u(A,d.encoder,S,"value",g))]}return[v(r)+"="+v(String(A))]}var N,M=[];if(void 0===A)return M;if("comma"===a&&l(A))N=[{value:A.length>0?A.join(",")||null:void 0}];else if(l(s))N=s;else{var C=Object.keys(A);N=y?C.sort(y):C}for(var T=0;T<N.length;++T){var W=N[T],D="object"==typeof W&&void 0!==W.value?W.value:A[W];if(!c||null!==D){var U=l(A)?"function"==typeof a?a(r,W):r:r+(b?"."+W:"["+W+"]");j.set(t,E);var B=o();B.set(m,j),f(M,e(D,U,a,i,c,u,s,y,b,h,g,v,w,S,B))}}return M};e.exports=function(e,t){var r,n=e,p=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=a.formatters[r],n=d.filter;return("function"==typeof e.filter||l(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:n,format:r,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"==typeof p.filter?n=(0,p.filter)("",n):l(p.filter)&&(r=p.filter);var u,s=[];if("object"!=typeof n||null===n)return"";u=t&&t.arrayFormat in c?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=c[u];r||(r=Object.keys(n)),p.sort&&r.sort(p.sort);for(var m=o(),h=0;h<r.length;++h){var g=r[h];p.skipNulls&&null===n[g]||f(s,b(n[g],g,y,p.strictNullHandling,p.skipNulls,p.encode?p.encoder:null,p.filter,p.sort,p.allowDots,p.serializeDate,p.format,p.formatter,p.encodeValuesOnly,p.charset,m))}var v=s.join(p.delimiter),w=!0===p.addQueryPrefix?"?":"";return p.charsetSentinel&&("iso-8859-1"===p.charset?w+="utf8=%26%2310003%3B&":w+="utf8=%E2%9C%93&"),v.length>0?w+v:""}},7173:(e,t,r)=>{"use strict";var o=r(38243),n=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),c=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:c,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],c=Object.keys(i),l=0;l<c.length;++l){var p=c[l],u=i[p];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:p}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r,n,a){if(0===e.length)return e;var c=e;if("symbol"==typeof e?c=Symbol.prototype.toString.call(e):"string"!=typeof e&&(c=String(e)),"iso-8859-1"===r)return escape(c).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var l="",p=0;p<c.length;++p){var u=c.charCodeAt(p);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===o.RFC1738&&(40===u||41===u)?l+=c.charAt(p):u<128?l+=i[u]:u<2048?l+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?l+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(p+=1,u=65536+((1023&u)<<10|1023&c.charCodeAt(p)),l+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return l},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var i=t;return a(t)&&!a(r)&&(i=c(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"==typeof i&&r&&"object"==typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),i)}}},44852:(e,t,r)=>{"use strict";var o=r(28487),n=r(2864),a=r(31741),i=o("%TypeError%"),c=o("%WeakMap%",!0),l=o("%Map%",!0),p=n("WeakMap.prototype.get",!0),u=n("WeakMap.prototype.set",!0),f=n("WeakMap.prototype.has",!0),s=n("Map.prototype.get",!0),y=n("Map.prototype.set",!0),d=n("Map.prototype.has",!0),m=function(e,t){for(var r,o=e;null!==(r=o.next);o=r)if(r.key===t)return o.next=r.next,r.next=e.next,e.next=r,r};e.exports=function(){var e,t,r,o={assert:function(e){if(!o.has(e))throw new i("Side channel does not contain "+a(e))},get:function(o){if(c&&o&&("object"==typeof o||"function"==typeof o)){if(e)return p(e,o)}else if(l){if(t)return s(t,o)}else if(r)return function(e,t){var r=m(e,t);return r&&r.value}(r,o)},has:function(o){if(c&&o&&("object"==typeof o||"function"==typeof o)){if(e)return f(e,o)}else if(l){if(t)return d(t,o)}else if(r)return function(e,t){return!!m(e,t)}(r,o);return!1},set:function(o,n){c&&o&&("object"==typeof o||"function"==typeof o)?(e||(e=new c),u(e,o,n)):l?(t||(t=new l),y(t,o,n)):(r||(r={key:{},next:null}),function(e,t,r){var o=m(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}}(r,o,n))}};return o}},50189:()=>{}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);const e=window.wp.element,t=window.wc.components,n=window.wc.tracks,a=window.wp.data,i=window.wc.data;var c=r(79119),l=r.n(c);const p=e=>{var t;const r=((null===(t=document.getElementById("wpadminbar"))||void 0===t?void 0:t.offsetHeight)||0)+8;e.top<r?window.scrollBy(0,e.top-r):e.bottom>window.innerHeight&&window.scrollBy(0,e.bottom-window.innerHeight)},u=window.wp.i18n,f=document.createElement("div");f.setAttribute("id","wc-addons-tour-root"),(0,e.render)((0,e.createElement)((()=>{const[r,o]=(0,e.useState)(!1),{updateOptions:c}=(0,a.useDispatch)(i.OPTIONS_STORE_NAME),f=(()=>{const t=(0,e.createElement)("br");return[{referenceElements:{desktop:'#adminmenu a[href="admin.php?page=wc-addons"]'},focusElement:{desktop:'#adminmenu a[href="admin.php?page=wc-addons"]'},meta:{name:"wc-addons-menu-item",heading:(0,u.__)("Welcome to the WooCommerce Marketplace","woocommerce"),descriptions:{desktop:(0,e.createInterpolateElement)((0,u.__)("Power up your store by adding extra functionality using extensions, find a fresh new look with themes, or integrate your store with other software and services.<br/><br/>The WooCommerce Marketplace is your go-to for all of the above, and the only place you’ll find products that have been reviewed and approved by the WooCommerce team.<br/><br/>Whether you’re looking to improve your store or grow your business, you can find a solution here. There are hundreds of options available, and new products are added regularly.<br/><br/>The WooCommerce Marketplace is also available at WooCommerce.com.","woocommerce"),{br:t})}}},{referenceElements:{desktop:".marketplace-header__search-form"},focusElement:{desktop:".marketplace-header__search-form"},meta:{name:"wc-addons-search",heading:(0,u.__)("Find exactly what you need","woocommerce"),descriptions:{desktop:(0,u.__)("Use the search box to find specific products or solutions.","woocommerce")}}},{referenceElements:{desktop:"#marketplace-current-section-dropdown"},focusElement:{desktop:"#marketplace-current-section-dropdown"},meta:{name:"wc-addons-categories",heading:(0,u.__)("Browse for new ideas","woocommerce"),descriptions:{desktop:(0,e.createInterpolateElement)((0,u.__)("Or browse all available products by category.","woocommerce"),{br:t})}}},{referenceElements:{desktop:".addon-product-group:first-child"},focusElement:{desktop:".addon-product-group:first-child"},meta:{name:"wc-addons-featured",heading:(0,u.__)("Learn more about products","woocommerce"),descriptions:{desktop:(0,e.createInterpolateElement)((0,u.__)("Scroll down to see all available products for a search or selected category.<br/><br/>Click on any product to see more information about it, including features, requirements, and available documentation.","woocommerce"),{br:t})}}},{referenceElements:{desktop:".marketplace-header__tab-link_helper"},focusElement:{desktop:".marketplace-header__tab-link_helper"},meta:{name:"wc-addons-my-subscriptions",heading:(0,u.__)("Manage your purchases","woocommerce"),descriptions:{desktop:(0,e.createInterpolateElement)((0,u.__)("Products purchased from the WooCommerce Marketplace can be managed in My Subscriptions, either here or on WooCommerce.com.<br/><br/>Every purchase is backed by our <a1>30-day money-back guarantee</a1>, and includes <a2>email and live chat support</a2>.<br/><br/>That's it! We hope the WooCommerce Marketplace helps you build the business of your dreams.","woocommerce"),{a1:(0,e.createElement)("a",{href:"https://woocommerce.com/refund-policy/","aria-label":(0,u.__)("Refund policy","woocommerce")},(0,u.__)("30-day money-back guarantee","woocommerce")),a2:(0,e.createElement)("a",{href:"https://woocommerce.com/my-account/create-a-ticket/","aria-label":(0,u.__)("Contact support","woocommerce")},(0,u.__)("email and live chat support","woocommerce")),br:t})}}}]})();if((0,e.useEffect)((()=>{const e=l().parse(window.location.search.slice(1));if("true"===(null==e?void 0:e.tutorial)){var t;const e=((e,t,r)=>{const a=document.querySelector(e);let i=null==a?void 0:a.getBoundingClientRect().top;const c=setInterval((()=>{const e=null==a?void 0:a.getBoundingClientRect().top;i===e&&((()=>{var e,t;const r=null===(e=f[0])||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.name;o(!0),(0,n.recordEvent)("in_app_marketplace_tour_started",{step:r})})(),clearInterval(c)),i=e}),500);return c})((null===(t=f[0].referenceElements)||void 0===t?void 0:t.desktop)||"");return()=>clearInterval(e)}}),[]),(0,e.useEffect)((()=>{if(r){function e(){const e=document.querySelector(".tour-kit-frame__container");e&&p(e.getBoundingClientRect())}const t=setTimeout(e,500),r=((e,t,r)=>{const o=document.querySelector(".wc-addons-wrap");let n=null==o?void 0:o.offsetTop;return setInterval((()=>{const e=null==o?void 0:o.offsetTop;n!==e&&t(),n=e}),150)})(0,e);return()=>{clearTimeout(t),clearInterval(r)}}}),[r]),!r)return null;const s=(e=>{let{closeHandler:t,onNextStepHandler:r,autoScrollBlock:o,steps:n}=e,a=null,i=null;const c="top-start";return{placement:c,options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:".woocommerce.wc-addons-wrap"}},autoScroll:{behavior:"auto",block:o}},popperModifiers:[{name:"arrow",options:{padding:e=>{let{popper:t}=e;return{right:t.width-34}}}},{name:"offset",options:{offset:[20,20]}},{name:"flip",options:{allowedAutoPlacements:["right","bottom","top"],fallbackPlacements:["bottom-start","right"],flipVariations:!1,boundry:"clippingParents"}},{name:"inAppTourPopperModifications",enabled:!0,phase:"read",fn(e){var t;let{state:r,instance:o}=e;if(i!==r.elements.reference){const e=r.elements.reference.closest("#adminmenu")?"right":c;r.placement!==e&&o.setOptions({placement:e})}const n=r.elements.popper.getBoundingClientRect(),l=null===(t=r.elements.arrow)||void 0===t?void 0:t.getBoundingClientRect(),u=(null==l?void 0:l.height)||0;i!==r.elements.reference&&0!==u&&a!==n.top&&(p(n),a=n.top,i=r.elements.reference)}}],callbacks:{onNextStep:r}},steps:n,closeHandler:t}})({closeHandler:(e,t)=>{o(!1),c({woocommerce_admin_dismissed_in_app_marketplace_tour:"yes"});const r=new URL(window.location.href);if(r.searchParams.delete("tutorial"),window.history.replaceState(null,"",r),f.length-1===t)(0,n.recordEvent)("in_app_marketplace_tour_completed");else{var a,i;const r=null===(a=e[t])||void 0===a||null===(i=a.meta)||void 0===i?void 0:i.name;(0,n.recordEvent)("in_app_marketplace_tour_dismissed",{step:r})}},onNextStepHandler:e=>{var t,r;const o=(null===(t=f[e+1])||void 0===t||null===(r=t.meta)||void 0===r?void 0:r.name)||"";(0,n.recordEvent)("in_app_marketplace_tour_step_viewed",{step:o})},autoScrollBlock:"center",steps:f});return(0,e.createElement)(t.TourKit,{config:s})}),null),document.body.appendChild(f))})(),(window.wc=window.wc||{}).wcAddonsTour=o})();