(()=>{var e={873:(e,r,t)=>{var u=t(325).Symbol;e.exports=u},932:e=>{e.exports=function(e,r){for(var t=-1,u=null==e?0:e.length,o=Array(u);++t<u;)o[t]=r(e[t],t,e);return o}},882:e=>{e.exports=function(e,r,t,u){var o=-1,n=null==e?0:e.length;for(u&&n&&(t=e[++o]);++o<n;)t=r(t,e[o],o,e);return t}},74:e=>{e.exports=function(e){return e.split("")}},733:e=>{var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},552:(e,r,t)=>{var u=t(873),o=t(659),n=t(350),f=u?u.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":f&&f in Object(e)?o(e):n(e)}},171:e=>{e.exports=function(e){return function(r){return null==e?void 0:e[r]}}},160:e=>{e.exports=function(e,r,t){var u=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var n=Array(o);++u<o;)n[u]=e[u+r];return n}},556:(e,r,t)=>{var u=t(873),o=t(932),n=t(449),f=t(394),a=u?u.prototype:void 0,i=a?a.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(f(r))return i?i.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t}},754:(e,r,t)=>{var u=t(160);e.exports=function(e,r,t){var o=e.length;return t=void 0===t?o:t,!r&&t>=o?e:u(e,r,t)}},507:(e,r,t)=>{var u=t(754),o=t(698),n=t(912),f=t(222);e.exports=function(e){return function(r){r=f(r);var t=o(r)?n(r):void 0,a=t?t[0]:r.charAt(0),i=t?u(t,1).join(""):r.slice(1);return a[e]()+i}}},539:(e,r,t)=>{var u=t(882),o=t(828),n=t(645),f=RegExp("['’]","g");e.exports=function(e){return function(r){return u(n(o(r).replace(f,"")),e,"")}}},647:(e,r,t)=>{var u=t(171)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=u},840:(e,r,t)=>{var u="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=u},659:(e,r,t)=>{var u=t(873),o=Object.prototype,n=o.hasOwnProperty,f=o.toString,a=u?u.toStringTag:void 0;e.exports=function(e){var r=n.call(e,a),t=e[a];try{e[a]=void 0;var u=!0}catch(e){}var o=f.call(e);return u&&(r?e[a]=t:delete e[a]),o}},698:e=>{var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return r.test(e)}},434:e=>{var r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return r.test(e)}},350:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},325:(e,r,t)=>{var u=t(840),o="object"==typeof self&&self&&self.Object===Object&&self,n=u||o||Function("return this")();e.exports=n},912:(e,r,t)=>{var u=t(74),o=t(698),n=t(54);e.exports=function(e){return o(e)?n(e):u(e)}},54:e=>{var r="\\ud800-\\udfff",t="["+r+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",n="[^"+r+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+u+"|"+o+")?",c="[\\ufe0e\\ufe0f]?",d=c+i+"(?:\\u200d(?:"+[n,f,a].join("|")+")"+c+i+")*",x="(?:"+[n+u+"?",u,f,a,t].join("|")+")",s=RegExp(o+"(?="+o+")|"+x+d,"g");e.exports=function(e){return e.match(s)||[]}},225:e=>{var r="\\ud800-\\udfff",t="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="["+n+"]",a="\\d+",i="["+t+"]",c="["+u+"]",d="[^"+r+n+a+t+u+o+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+o+"]",l="(?:"+c+"|"+d+")",v="(?:"+p+"|"+d+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",b="(?:['’](?:D|LL|M|RE|S|T|VE))?",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",j="[\\ufe0e\\ufe0f]?",h=j+y+"(?:\\u200d(?:"+["[^"+r+"]",x,s].join("|")+")"+j+y+")*",A="(?:"+[i,x,s].join("|")+")"+h,O=RegExp([p+"?"+c+"+"+g+"(?="+[f,p,"$"].join("|")+")",v+"+"+b+"(?="+[f,p+l,"$"].join("|")+")",p+"?"+l+"+"+g,p+"+"+b,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,A].join("|"),"g");e.exports=function(e){return e.match(O)||[]}},58:(e,r,t)=>{var u=t(792),o=t(539)((function(e,r,t){return r=r.toLowerCase(),e+(t?u(r):r)}));e.exports=o},792:(e,r,t)=>{var u=t(222),o=t(808);e.exports=function(e){return o(u(e).toLowerCase())}},828:(e,r,t)=>{var u=t(647),o=t(222),n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(n,u).replace(f,"")}},449:e=>{var r=Array.isArray;e.exports=r},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},394:(e,r,t)=>{var u=t(552),o=t(346);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==u(e)}},222:(e,r,t)=>{var u=t(556);e.exports=function(e){return null==e?"":u(e)}},808:(e,r,t)=>{var u=t(507)("toUpperCase");e.exports=u},645:(e,r,t)=>{var u=t(733),o=t(434),n=t(222),f=t(225);e.exports=function(e,r,t){return e=n(e),void 0===(r=t?void 0:r)?o(e)?f(e):u(e):e.match(r)||[]}}},r={};function t(u){var o=r[u];if(void 0!==o)return o.exports;var n=r[u]={exports:{}};return e[u](n,n.exports,t),n.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var u in r)t.o(r,u)&&!t.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:r[u]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";const e=[{name:"Adam",age:28},{name:"Ania",age:35},{name:"Roman",age:18}],r=e=>e.reduce(((e,r)=>e+r.age),0);var u=t(58),o=t.n(u);console.log(o()("hello roman co tam słychać")),console.log(r(e)),((e,t)=>{e.innerHTML=r(t)})(document.querySelector("#age"),e)})()})();