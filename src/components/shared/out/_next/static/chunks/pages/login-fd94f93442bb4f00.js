(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{3236:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return o(933)}])},3479:function(e){"use strict";e.exports={debug:!1,i18n:{defaultLocale:"en",locales:["en","es","fr","pt"]},reloadOnPrerender:!1}},6126:function(e,t,o){"use strict";o.d(t,{o:function(){return a}});var n=o(9515),r=o(3479),i=o.n(r);function a(){var e;let t=(null==navigator?void 0:null===(e=navigator.language)||void 0===e?void 0:e.substring(0,2))||"en";return["en","es","fr","pt"].includes(t)?t:"en"}(0,n.Z)({supportedLngs:i().i18n.locales,fallbackLng:i().i18n.defaultLocale})},8943:function(e,t,o){"use strict";o.d(t,{l_:function(){return s}});var n=o(5893),r=o(7294),i=o(1163),a=o(6126);let u=e=>{let t=(0,i.useRouter)();return e=e||t.asPath,(0,r.useEffect)(()=>{let o=(0,a.o)();if(console.log("DETECTED LANG",o),(null==e?void 0:e.startsWith("/"+o))&&"/404"===t.route){t.replace("/"+o+t.route);return}t.replace("/"+o+e)}),(0,n.jsx)(n.Fragment,{})},s=()=>(u(void 0),(0,n.jsx)(n.Fragment,{}))},933:function(e,t,o){"use strict";o.r(t);var n=o(8943);t.default=n.l_},9515:function(e,t,o){"use strict";o.d(t,{Z:function(){return P}});var n=o(5671),r=o(3144),i=[],a=i.forEach,u=i.slice,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,c=function(e,t,o){var n=o||{};n.path=n.path||"/";var r=e+"="+encodeURIComponent(t);if(n.maxAge>0){var i=n.maxAge-0;if(isNaN(i))throw Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(i)}if(n.domain){if(!s.test(n.domain))throw TypeError("option domain is invalid");r+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw TypeError("option path is invalid");r+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return r},l={create:function(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+6e4*o)),n&&(r.domain=n),document.cookie=c(e,encodeURIComponent(t),r)},read:function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},remove:function(e){this.create(e,"",-1)}},f={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var o=l.read(e.lookupCookie);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!=typeof document&&l.create(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},p={name:"querystring",lookup:function(e){var t;if("undefined"!=typeof window)for(var o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++){var r=o[n].indexOf("=");r>0&&o[n].substring(0,r)===e.lookupQuerystring&&(t=o[n].substring(r+1))}return t}},g=null,d=function(){if(null!==g)return g;try{g="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){g=!1}return g},h={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&d()){var o=window.localStorage.getItem(e.lookupLocalStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&d()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},v=null,m=function(){if(null!==v)return v;try{v="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){v=!1}return v},w={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&m()){var o=window.sessionStorage.getItem(e.lookupSessionStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&m()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},k={name:"navigator",lookup:function(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},y={name:"htmlTag",lookup:function(e){var t,o=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return o&&"function"==typeof o.getAttribute&&(t=o.getAttribute("lang")),t}},b={name:"path",lookup:function(e){var t;if("undefined"!=typeof window){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array){if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof o[e.lookupFromPathIndex])return;t=o[e.lookupFromPathIndex].replace("/","")}else t=o[0].replace("/","")}}return t}},S={name:"subdomain",lookup:function(e){var t;if("undefined"!=typeof window){var o=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);o instanceof Array&&(t="number"==typeof e.lookupFromSubdomainIndex?o[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):o[0].replace("http://","").replace("https://","").replace(".",""))}return t}},x=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(t,o)}return(0,r.Z)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return a.call(u.call(arguments,1),function(t){if(t)for(var o in t)void 0===e[o]&&(e[o]=t[o])}),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(f),this.addDetector(p),this.addDetector(h),this.addDetector(w),this.addDetector(k),this.addDetector(y),this.addDetector(b),this.addDetector(S)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var o=[];return(e.forEach(function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"==typeof n&&(n=[n]),n&&(o=o.concat(n))}}),this.services.languageUtils.getBestMatchFromCodes)?o:o.length>0?o[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var o=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(function(t){o.detectors[t]&&o.detectors[t].cacheUserLanguage(e,o.options)}))}}]),e}();x.type="languageDetector";var O=["supportedLngs","fallbackLng","order"];function L(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var C=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},E=function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],o=e.split("-");return 2===o.length?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=C(o[1].toLowerCase()))):3===o.length&&(o[0]=o[0].toLowerCase(),2===o[1].length&&(o[1]=o[1].toUpperCase()),"sgn"!==o[0]&&2===o[2].length&&(o[2]=o[2].toUpperCase()),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=C(o[1].toLowerCase())),t.indexOf(o[2].toLowerCase())>-1&&(o[2]=C(o[2].toLowerCase()))),o.join("-")}return e},D=function(e){var t=e.supportedLngs,o=e.fallbackLng;return function(e){if(!e)return null;var n,r=function(e){return!t||!t.length||t.indexOf(e)>-1};return e.forEach(function(e){if(!n){var o=E(e);(!t||r(o))&&(n=o)}}),!n&&t&&e.forEach(function(e){if(!n){var o=!e||0>e.indexOf("-")?e:E(e.split("-")[0]);if(r(o)){n=o;return}n=t.find(function(e){if(0===e.indexOf(o))return e})}}),n||(n=o),n}};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.supportedLngs,o=e.fallbackLng,n=e.order,r=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,O),i=D({supportedLngs:t,fallbackLng:o}),a=new x({languageUtils:{getBestMatchFromCodes:i}},function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?L(Object(o),!0).forEach(function(t){var n,r;n=e,r=o[t],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({order:void 0===n?["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]:n},r));return{detect:function(e){var t=a.detect(e);return i(t)},cache:function(e,t){return a.cacheUserLanguage(e,t)}}}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);