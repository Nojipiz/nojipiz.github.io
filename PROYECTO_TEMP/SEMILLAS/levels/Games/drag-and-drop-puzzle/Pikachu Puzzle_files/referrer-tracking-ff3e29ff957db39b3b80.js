!function(n){function t(t){for(var r,c,i=t[0],a=t[1],f=t[2],p=0,l=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(s&&s(t);l.length;)l.shift()();return u.push.apply(u,f||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,i=1;i<e.length;i++){var a=e[i];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var r={},o={32:0},u=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=r,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)c.d(e,r,function(t){return n[t]}.bind(null,r));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="https://cpwebassets.codepen.io/assets/packs/";var i=(self||this).webpackJsonp=(self||this).webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=a;u.push([682,0]),e()}({13:function(n,t,e){"use strict";e.d(t,"c",(function(){return r.c})),e.d(t,"d",(function(){return r.d})),e.d(t,"b",(function(){return r.b})),e.d(t,"a",(function(){return r.a})),e.d(t,"e",(function(){return o}));var r=e(58),o={TEAM:"TEAM",USER:"USER"}},58:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return c}));var r={PEN:"PEN",PROJECT:"PROJECT",POST:"POST",COLLECTION:"COLLECTION"},o={PEN:"pen",EDITOR:"editor",FULL:"full",DETAILS:"details",DEBUG:"debug",LIVE:"live",COLLAB:"collab",PRESENTATION:"pres",PROFESSOR:"professor",POPUP:"popup"},u={LOVES:"LOVES",FORKS:"FORKS",COMMENTS:"COMMENTS"},c={GRID:6,GRID_LARGE:12,FANCY_GRID:4,LIST:20}},682:function(n,t,e){"use strict";e.r(t);var r=e(7),o=document.referrer,u=(new Date).toISOString();o&&!o.includes(window.__CPDATA.host)&&(Object(r.G)("codepen_signup_referrer",o,{expires:365,path:"/"}),Object(r.G)("codepen_signup_referrer_date",u,{expires:365,path:"/"}))},7:function(n,t,e){"use strict";e.d(t,"z",(function(){return r})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return u})),e.d(t,"g",(function(){return c.a})),e.d(t,"s",(function(){return i})),e.d(t,"G",(function(){return a})),e.d(t,"C",(function(){return f})),e.d(t,"o",(function(){return p})),e.d(t,"p",(function(){return y})),e.d(t,"k",(function(){return b})),e.d(t,"l",(function(){return h})),e.d(t,"m",(function(){return w})),e.d(t,"n",(function(){return T})),e.d(t,"q",(function(){return P})),e.d(t,"r",(function(){return C})),e.d(t,"D",(function(){return R})),e.d(t,"u",(function(){return z})),e.d(t,"t",(function(){return A})),e.d(t,"v",(function(){return N})),e.d(t,"w",(function(){return k})),e.d(t,"x",(function(){return I})),e.d(t,"j",(function(){return M.a})),e.d(t,"A",(function(){return G})),e.d(t,"B",(function(){return B})),e.d(t,"c",(function(){return Y})),e.d(t,"d",(function(){return J})),e.d(t,"a",(function(){return V})),e.d(t,"b",(function(){return q})),e.d(t,"E",(function(){return Q})),e.d(t,"i",(function(){return W})),e.d(t,"F",(function(){return X})),e.d(t,"y",(function(){return nn})),e.d(t,"h",(function(){return tn}));var r=function(n){var t,e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.page||0,u=r.pageLength||20,c=[];if(n&&n.length){var i=u*(o||0),a=i+u;c=n.slice(i,a),t=n.length>a,e=i>0}return[c,{hasNextPage:t,hasPreviousPage:e}]};function o(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];e.forEach((function(t){return n[t]=n[t].bind(n)}))}e(9);var u=function(n){return n.replace(/_\w/g,(function(n){return n[1].toUpperCase()}))},c=e(91);function i(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)||(n.which||void 0===n.button?2===n.which:1&!n.button&&2&!n.button&&4&n.button)}var a=function(n,t,e){if(void 0!==t){if(null===t&&(e.expires=-1),"number"==typeof e.expires){var r=e.expires,o=e.expires=new Date;o.setDate(o.getDate()+r)}var u=[n,"=",t,e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":"",e.samesite?"; SameSite="+e.samesite:""].join("");window.document.cookie=u}},f=function(n){for(var t=document.cookie.split("; "),e=0,r=t.length;e<r;e++){var o=t[e].split("=");if(o.shift()===n)return o.join("=")}return null},s=e(58),p=function(n){var t=n.title,e=n.description,r=n.url,o=n.itemType===s.c.PEN?"{% codepen ".concat(r," %}"):r,u="\n---\ntitle: ".concat(t,"\npublished: true\ntags: codepen\n---\n\n").concat(e,"\n\n").concat(o,"\n");return"https://dev.to/new?prefill=".concat(encodeURIComponent(u.trim()))},l=e(6),d=e.n(l);function v(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){d()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var y=function(){return Math.floor(Date.now()/1e3)};function b(n,t){return O(n).toLocaleDateString("en-US",g({month:"long",day:"numeric",year:"numeric"},t))}function h(n,t,e){var r=O(n);return"".concat(function(n,t){return O(n).toLocaleDateString("en-US",g({month:"numeric",day:"numeric",year:"numeric"},t))}(n,t)," — ").concat(r.toLocaleTimeString("en-US",e))}function O(n){var t=new Date(n);return isNaN(t.getDate())?new Date(n.substr(0,4),n.substr(5,2)-1,n.substr(8,2)):t}function m(n){return Number.prototype.toLocaleString?Number(n).toLocaleString():n}var w=m,E=function(n){return n.replace(/([\/\\\*\?\+\.\(\)\[\]\{\}\$\!])/g,"\\$1")},j=function(n,t){for(var e=new RegExp(n,"g").exec(t),r=[],o=!1,u=0,c=0,i=1;i<e.length;i++)e[i]&&r.push({str:e[i],match:o}),e[i]||1===i||i===e.length-1||u++,e[i]||1!==i||c++,o=!o;return{substrings:r,score:u+c}},S=function(n,t){return n.score<t.score?1:n.score>t.score?-1:0},T=function(n,t){if(!n)return{error:"No term provided in fuzzySearch(term, lib)"};if(!t)return{error:"No lib provided in fuzzySearch(term, lib)"};var e,r,o={bullseye:null,exact:[],fuzzy:[]},u=null,c=[],i=[],a=new RegExp("^"+E(n)+"$","i");e="(.+)?(".concat(E(n),")(.+)?$");var f=new RegExp(e,"g"),s=n.split("").map((function(n){return"(".concat(E(n),")")}));r="(.+)?".concat(s.join("(.+)?"),"(.+)?$");var p=new RegExp(r,"g");return t.forEach((function(n){n.string.match(a)?u=n:n.string.match(f)?c.push(n):n.string.match(p)&&i.push(n)})),u&&(o.bullseye={key:u.key,string:u.string,matchType:"bullseye"}),c.forEach((function(n){var t=j(e,n.string);o.exact.push({key:n.key,string:n.string,matchType:"exact",substrings:t.substrings,score:t.score})})),i.forEach((function(n){var t=j(r,n.string);o.fuzzy.push({key:n.key,string:n.string,matchType:"fuzzy",substrings:t.substrings,score:t.score})})),{success:!0,count:o.exact.concat(o.fuzzy).length,term:n,bullseye:o.bullseye,exact:o.exact.sort(S),fuzzy:o.fuzzy.sort(S),_regex:{exact:e,fuzzy:r}}},x=function n(){var t=Date.now();return t<=n.previous?t=++n.previous:n.previous=t,t.toString()};x.previous=Date.now();var P=x;var D="https://cdn.skypack.dev/",L=/(import(\(\s*|\s+)|\sfrom\s*)["'`](?!http|\.|\/)([^"'`\n]+)["'`]/;function C(n){return"string"==typeof n&&-1!==n.indexOf("import")&&L.test(n)}function R(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D,e=new RegExp(L,"g");return n.replace(e,'$1"'.concat(t,'$3"'))}var z=function(n){var t=n&&n.toUpperCase().slice(0,-1);return Object.values(s.c).includes(t)||console.warn("Invalid url fragment supplied to itemUrlToEnum"),t},A=function(n){return Object.values(s.c).includes(n)||console.warn("Invalid item enum supplied to itemEnumToUrl"),n&&"".concat(n.toLowerCase(),"s")};function N(n,t){return new Promise((function(e,r){var o=document.createElement(n);for(var u in o.onload=function(){return e(o)},o.onerror=r,t)o.setAttribute(u,t[u]);document.body.appendChild(o)}))}var k={error:function(){},info:function(){},logDuration:function(n,t){}},_=e(50),U=e.n(_);var I=function(n,t){return function(n,t){if(Array.isArray(t))return Array.isArray(n);if(null==n)return!1;return U()(n)===U()(t)}(n,t)?n:t},M=e(74);function G(n,t,e){return 1===t?n:e||n+"s"}function B(n,t,e){return m(t)+" "+G(n,t,e)}var $=e(2),F=e.n($),K=e(13),Y=F.a.oneOf(Object.values(K.c)),J=F.a.oneOf(Object.values(K.e)),V=F.a.oneOfType([F.a.func,F.a.node,F.a.object]),q=F.a.oneOfType([F.a.elementType,F.a.string]);function H(){return window.scrollY||window.pageYOffset?window:document.body}function Q(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if(n){var e=n.getBoundingClientRect(),r=e.y-t;if(r<0){var o=H(),u=o.scrollY||o.pageYOffset||o.scrollTop;o.scrollTo({top:u+r,behavior:"smooth"})}}}e(92);function W(n,t){var e;return function(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var c=function(){return n.apply(void 0,o)};clearTimeout(e),e=setTimeout(c,t)}}function X(n,t){var e;return function(){e||(n.apply(void 0,arguments),e=!0,setTimeout((function(){e=!1}),t))}}var Z=function(n){return Math.floor(n/1e3)},nn=function(){return Z(Date.now())};function tn(n){return-1!==(n=(n=n.replace("https://","")).replace("http://","")).indexOf("/")&&(n=n.substring(0,n.indexOf("/"))),n}},74:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o}));function r(n){return"[object Object]"===Object.prototype.toString.call(n)}function o(n){var t={};return function n(e,r){Object.keys(e).forEach((function(o){var u,c=e[o],i=Array.isArray(c),a=Object.prototype.toString.call(c),f=(u=c)&&u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u),s=r?r+"."+o:o;if(!i&&!f&&("[object Object]"===a||"[object Array]"===a)&&Object.keys(c).length)return n(c,s);t[s]=c}))}(n),t}},91:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"!=typeof n)return"";var e=n;return t&&(e=n.toLowerCase()),e.replace(/^[a-z]/,(function(n){return n.toUpperCase()}))}},92:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),o=!r}});